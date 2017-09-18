"use strict";
/**
 * Import interfaces
 */
import IWindow from "../interfaces/IWindow";

/**
 * Declare window interface
 */
declare const window: IWindow;

/**
 * Import additional classes
 */
import UtilsWindow from "./UtilsWindow";
import UtilsDocument from "./UtilsDocument";
import UtilsDOM from "./UtilsDOM";

/**
 * Class for working with DOM
 */
export default class Visibility {

  public static numDocumentWidth: number | boolean;
  public static numDocumentHeight: number | boolean;
  public static numWindowWidth: number | boolean;
  public static numWindowHeight: number | boolean;
  public static arrDomStyle: any = {};

  /**
   * Событие ресайза для сброса временных кешев размеров окна, документа и высчитанных стилей элементов
   */
  public static resizeEvent(): void {
    Visibility.numDocumentWidth = false;
    Visibility.numDocumentHeight = false;
    Visibility.numWindowWidth = false;
    Visibility.numWindowHeight = false;
    Visibility.arrDomStyle = {};
  }

  /**
   * Метод для генерации UID
   * @returns {string}
   */
  public static getID(): string {
    return "v_" + (Date.now()) + "_" + (~~(Math.random() * 1e6));
  }

  /**
   * Расчет стилей элемента
   * @param domNode
   * @returns {CSSStyleDeclaration}
   */
  public static getComputedStyle(domNode: any): CSSStyleDeclaration {
    if (
        !domNode.Visibility || !Visibility.arrDomStyle[domNode.Visibility]
    ) {
      if (!domNode.Visibility) {
        domNode.Visibility = Visibility.getID();
      }
      Visibility.arrDomStyle[domNode.Visibility] = window.getComputedStyle(domNode);
    }
    return Visibility.arrDomStyle[domNode.Visibility];
  }

  /**
   * Определение высоты окна
   *
   * @returns {number} - Высота окна
   */
  public static getWindowHeight(): number | boolean {
    if (!Visibility.numWindowHeight) {
      Visibility.numWindowHeight = UtilsWindow.getHeight();
    }
    return Visibility.numWindowHeight || 0;
  }

  /**
   * Определение высоты документа
   *
   * @returns {number} - Высота документа
   */
  public static getDocumentHeight(): number | boolean {
    if (!Visibility.numDocumentHeight) {
      Visibility.numDocumentHeight = UtilsDocument.getHeight();
    }
    return Visibility.numDocumentHeight || 0;
  }

  /**
   * Определение ширины окна
   *
   * @returns {number} - Ширина окна
   */
  public static getWindowWidth(): number | boolean {
    if (!Visibility.numWindowWidth) {
      Visibility.numWindowWidth = UtilsWindow.getWidth();
    }
    return Visibility.numWindowWidth || 0;
  }

  /**
   * Определение ширины документа
   *
   * @returns {number} - Ширина документа
   */
  public static getDocumentWidth(): number | boolean {
    if (!Visibility.numDocumentWidth) {
      Visibility.numDocumentWidth = UtilsDocument.getWidth();
    }
    return Visibility.numDocumentWidth || 0;
  }

  /**
   * * Определение видимости элемента вообще
   *
   * @param domNode {Object} - Элемент DOM дерева
   * @param booElement {boolean} - Если это сам баннер, а не родитель
   * @param numDocumentWidth - Ширина документа
   * @param numDocumentHeight - Высота документа
   * @returns {boolean} - Флаг видимости элемента
   */
  public static isVisible(domNode: HTMLElement,
                          booElement: boolean,
                          numDocumentWidth: number,
                          numDocumentHeight: number): boolean {
    /**
     * TODO: не учитывать родителей если position fixed
     */
    /**
     * Устанавливаем флаг видимости и вычисляем размеры элемента
     * @type {boolean}
     */
    let booVisible = !!UtilsDOM.getDOMNode(domNode);
    /**
     * Check if element still visible
     */
    if (booVisible) {
      const objSizes = Visibility.getBoundingClientRect(domNode);
      /**
       * Если у элемента нет ширины или высоты то он или скрыт или у него нет размеров
       */
      if (
          !(objSizes.width && objSizes.height) &&
          (booElement || domNode.style.overflow !== "")
      ) {
        booVisible = false;
      } else if (
          booElement &&
          (
              objSizes.bottom < 0 ||
              objSizes.right < 0 ||
              objSizes.left > numDocumentWidth ||
              objSizes.top > numDocumentHeight
          )
      ) {
        booVisible = false;
      } else if (!!window.getComputedStyle) {
        /**
         * Check dom node existens
         */
        if (domNode) {
          /**
           * Вычисляем стили элемента
           * @type {CSSStyleDeclaration}
           */
          const objStyle = Visibility.getComputedStyle(domNode);
          /**
           * Если элемент имеет нулевую прозрачность или скрыт или не имеет отображения
           */
          if (
              objStyle.opacity === "0" ||
              objStyle.display === "none" ||
              objStyle.visibility === "hidden"
          ) {
            booVisible = false;
          }
        } else {
          booVisible = false;
        }
      }
    }
    /**
     * Возвращаем флаг видимости
     */
    return booVisible;
  }

  /**
   * Метод определения видимости баннера вообще
   *
   * @param domBanner {Object} - Элемент DOM дерева
   * @returns {number} - Коэффициент видимости элемента от 0 до 1
   */
  public static checkTotalVisibility(domBanner: HTMLElement): number {
    /**
     * Устанавливаем флаг видимости элемента
     * Записываем элемент во временную переменную дял перебора по родителям
     * Устанавливаем флаг соответствия элемента исходному
     * @type {boolean}
     */
    let booVisible = true;
    let domNode: any = domBanner;
    let booElement = true;
    const _numDocumentWidth = Visibility.getDocumentWidth();
    const numDocumentWidth = typeof _numDocumentWidth === "number" ? _numDocumentWidth : 0;
    const _numDocumentHeight = Visibility.getDocumentHeight();
    const numDocumentHeight = typeof _numDocumentHeight === "number" ? _numDocumentHeight : 0;
    /**
     * Перебираем от элемента до родителей, пока текущей элемент не равен body
     */
    while (domNode && domNode !== document.body) {
      /**
       * Если элемент не виден, то устанавливаем флаг и выходим из перебора
       */
      if (!Visibility.isVisible(domNode, booElement, numDocumentWidth, numDocumentHeight)) {
        booVisible = false;
        break;
      }
      if (domNode.style.position === "fixed") {
        break;
      }
      /**
       * Записываем во временную переменную родительский элемент
       */
      domNode = domNode.parentNode;
      /**
       * Сбрасываем флаг принадлежности к исходному элементу
       * @type {boolean}
       */
      booElement = false;
    }
    /**
     * Объевляем переменную для определения процента видимости элемента
     * @type {number}
     */
    let numVisibility = 0;
    /**
     * Если элемент вообще виден, то высчитываем процент его видимости, если нет, то видимость нулевая
     */
    if (booVisible) {
      /**
       * Вычисляем стили элемента
       * @type {number}
       */
      let opacity: any = 1;
      /**
       * Check dom element existens
       */
      if (domBanner) {
        if (!!window.getComputedStyle) {
          const objStyle = Visibility.getComputedStyle(domBanner);
          opacity = objStyle.opacity;
        }
      } else {
        opacity = 0;
      }
      /**
       * Рассчитываем процент видимости элемента
       * @type {number}
       */
      numVisibility = opacity;
    }
    /**
     * Возвращаем процент видимости
     */
    return numVisibility;
  }

  /**
   * Определение положени и размеров элемента
   *
   * @param domNode {Object} - DOM элемент
   * @returns {{left: number, right: number, top: number, bottom: number, width: number, height: number}} -
   * Массив с параметрами размеров и положения
   */
  public static getBoundingClientRect(domNode: any): {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
  } {
    return UtilsDOM.getBoundingClientRect(domNode);
  }

  /**
   * Метод для определения процента видимой части баннера на экране пользователя
   *
   * @param objSizes {{left: number, right: number, top: number, bottom: number, width: number, height: number}} -
   * Массив с параметрами размеров и положения
   * @returns {number} - Коэффициент видимости элемента от 0 до 1
   */
  public static calcVisibility(objSizes: {
    left: number,
    right: number,
    top: number,
    bottom: number,
    width: number,
    height: number,
  }): number {
    /**
     * Определяем высоту окна
     * @type {number}
     */
    const _numWindowHeight = Visibility.getWindowHeight();
    const numWindowHeight = typeof _numWindowHeight === "number" ? _numWindowHeight : 0;
    /**
     * Определяем верхнюю и нижнюю видимые границы элемента
     */
    const numElementScrollTopFrom = objSizes.top < 0 ? 0 : objSizes.top;
    const numElementScrollTopTo = objSizes.bottom > numWindowHeight ? numWindowHeight : objSizes.bottom;
    /**
     * Определяем видимую и максимально возможную видимую области элемента по высоте
     * @type {number}
     */
    const numElementViewHeight = numElementScrollTopTo - numElementScrollTopFrom;
    const numElementMaxViewHeight = objSizes.height < numWindowHeight ? objSizes.height : numWindowHeight;
    /**
     * Вычисляем процент видимой части по высоте
     * @type {number}
     */
    let numElementViewHeightPath = numElementViewHeight / numElementMaxViewHeight;
    /**
     * Обрезаем значение видимости в диапазоне от 0 до 1
     * @type {number}
     */
    numElementViewHeightPath = numElementViewHeightPath < 0 ? 0 : numElementViewHeightPath;
    numElementViewHeightPath = numElementViewHeightPath > 1 ? 1 : numElementViewHeightPath;
    /**
     * Определяем ширину окна
     * @type {number}
     */
    const _numWindowWidth = Visibility.getWindowWidth();
    const numWindowWidth = typeof _numWindowWidth === "number" ? _numWindowWidth : 0;
    /**
     * Определяем левую и правую видимые границы элемента
     */
    const numElementScrollLeftFrom = objSizes.left < 0 ? 0 : objSizes.left;
    const numElementScrollLeftTo = objSizes.right > numWindowWidth ? numWindowWidth : objSizes.right;
    /**
     * Определяем видимую и максимально возможную видимую области элемента по ширине
     * @type {number}
     */
    const numElementViewWidth = numElementScrollLeftTo - numElementScrollLeftFrom;
    const numElementMaxViewWidth = objSizes.width < numWindowWidth ? objSizes.width : numWindowWidth;
    /**
     * Вычисляем процент видимой части по ширине
     * @type {number}
     */
    let numElementViewWidthPath = numElementViewWidth / numElementMaxViewWidth;
    /**
     * Обрезаем значение видимости в диапазоне от 0 до 1
     * @type {number}
     */
    numElementViewWidthPath = numElementViewWidthPath < 0 ? 0 : numElementViewWidthPath;
    numElementViewWidthPath = numElementViewWidthPath > 1 ? 1 : numElementViewWidthPath;
    /**
     * Вычисляем процент видимой пощади
     * @type {number}
     */
    let numElementViewPath = numElementViewHeightPath * numElementViewWidthPath;
    /**
     * Обрезаем значение видимости в диапазоне от 0 до 1
     * @type {number}
     */
    numElementViewPath = numElementViewPath < 0 ? 0 : numElementViewPath;
    numElementViewPath = numElementViewPath > 1 ? 1 : numElementViewPath;
    /**
     * Возвращаем процент видимой площади в диапазоне от 0 до 1
     */
    return numElementViewPath;
  }

  /**
   * Метод определения видимости баннера
   *
   * @param domBanner {Object} - Элемент DOM дерева
   * @returns {number} - Коэффициент видимости элемента от 0 до 1
   */
  public static checkVisibility(domBanner: HTMLElement): number {
    let numVisibility = Visibility.checkTotalVisibility(domBanner);
    if (numVisibility) {
      /**
       * Определяем положение и размеры элемента
       * @type {Object}
       */
      const objSizes = Visibility.getBoundingClientRect(domBanner);
      /**
       * Рассчитываем процент видимости элемента
       * @type {number}
       */
      numVisibility = Visibility.calcVisibility(objSizes) * numVisibility;
    }
    /**
     * Возвращаем процент видимости
     */
    return numVisibility;
  }
}

/**
 * Подписки на события окна
 */
if (window.addEventListener) {
  window.addEventListener("resize", Visibility.resizeEvent);
  window.addEventListener("orientationchange", Visibility.resizeEvent);
} else if (window.attachEvent) {
  window.attachEvent("onresize", Visibility.resizeEvent);
}
/**
 * Хак для ручного сброса ресайзного кеша раз в секкунду, на всякий случай
 */
setInterval(
    () => {
      Visibility.resizeEvent();
    },
    1000,
);
/**
 * Ручной снос кеша для переинициализации переменных кеша
 */
Visibility.resizeEvent();
