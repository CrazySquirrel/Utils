/**
 * Class for working with DOM
 */
export default class Visibility {
    static numDocumentWidth: number | boolean;
    static numDocumentHeight: number | boolean;
    static numWindowWidth: number | boolean;
    static numWindowHeight: number | boolean;
    static arrDomStyle: any;
    /**
     * Событие ресайза для сброса временных кешев размеров окна, документа и высчитанных стилей элементов
     */
    static resizeEvent(): void;
    /**
     * Метод для генерации UID
     * @returns {string}
     */
    static getID(): string;
    /**
     * Расчет стилей элемента
     * @param domNode
     * @returns {CSSStyleDeclaration}
     */
    static getComputedStyle(domNode: any): CSSStyleDeclaration;
    /**
     * Определение высоты окна
     *
     * @returns {number} - Высота окна
     */
    static getWindowHeight(): number | boolean;
    /**
     * Определение высоты документа
     *
     * @returns {number} - Высота документа
     */
    static getDocumentHeight(): number | boolean;
    /**
     * Определение ширины окна
     *
     * @returns {number} - Ширина окна
     */
    static getWindowWidth(): number | boolean;
    /**
     * Определение ширины документа
     *
     * @returns {number} - Ширина документа
     */
    static getDocumentWidth(): number | boolean;
    /**
     * * Определение видимости элемента вообще
     *
     * @param domNode {Object} - Элемент DOM дерева
     * @param booElement {boolean} - Если это сам баннер, а не родитель
     * @param numDocumentWidth - Ширина документа
     * @param numDocumentHeight - Высота документа
     * @returns {boolean} - Флаг видимости элемента
     */
    static isVisible(domNode: HTMLElement, booElement: boolean, numDocumentWidth: number, numDocumentHeight: number): boolean;
    /**
     * Метод определения видимости баннера вообще
     *
     * @param domBanner {Object} - Элемент DOM дерева
     * @returns {number} - Коэффициент видимости элемента от 0 до 1
     */
    static checkTotalVisibility(domBanner: HTMLElement): number;
    /**
     * Определение положени и размеров элемента
     *
     * @param domNode {Object} - DOM элемент
     * @returns {{left: number, right: number, top: number, bottom: number, width: number, height: number}} -
     * Массив с параметрами размеров и положения
     */
    static getBoundingClientRect(domNode: any): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
    /**
     * Метод для определения процента видимой части баннера на экране пользователя
     *
     * @param objSizes {{left: number, right: number, top: number, bottom: number, width: number, height: number}} -
     * Массив с параметрами размеров и положения
     * @returns {number} - Коэффициент видимости элемента от 0 до 1
     */
    static calcVisibility(objSizes: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: number;
        height: number;
    }): number;
    /**
     * Метод определения видимости баннера
     *
     * @param domBanner {Object} - Элемент DOM дерева
     * @returns {number} - Коэффициент видимости элемента от 0 до 1
     */
    static checkVisibility(domBanner: HTMLElement): number;
}
