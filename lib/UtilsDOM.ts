"use strict";
/**
 * Import additional classes
 */
import UtilsMain from "./UtilsMain";

/**
 * Import subclasses
 */
import UtilsDOMVisibility from "./UtilsDOMVisibility";

/**
 * Class for working with DOM
 */
export default class DOM {

  /**
   * Visibility
   * @type {Visibility}
   */
  public static Visibility = UtilsDOMVisibility;

  /**
   * Check if variable is dom document
   * @param domDocument
   * @return {boolean}
   */
  public static isDOMDocument(domDocument: Document): boolean {
    return !(
        !domDocument ||
        typeof domDocument === "boolean" ||
        typeof domDocument === "number" ||
        typeof domDocument === "string" ||
        domDocument.nodeType !== 9
    );
  }

  /**
   * Find and validate Node in DOM Document
   * @param domNode
   * @param domDocument
   * @return {Element | boolean}
   */
  public static getDOMNode(domNode: any, domDocument: Document = document): Element | boolean {
    /**
     * Check if domDocument is a valid variable
     */
    if (!DOM.isDOMDocument(domDocument)) {
      return false;
    }

    /**
     * Check if domNode is a valid variable
     */
    if (
        !domNode ||
        typeof domNode === "boolean" ||
        typeof domNode === "number" ||
        typeof domNode === "undefined"
    ) {
      return false;
    }

    /**
     * If domNode is a string it might be an ID
     */
    if (typeof domNode === "string") {
      domNode = domDocument.getElementById(domNode);
    }

    /**
     * Check if domNode is a valid variable
     */
    if (
        !domNode ||
        domNode.nodeType !== 1 || !domNode.parentNode ||
        domNode.parentNode.nodeName === "HTML" ||
        (
            domDocument.contains && !domDocument.contains(domNode)
        ) ||
        (
            domDocument.body && domDocument.body.contains && !domDocument.body.contains(domNode)
        )
    ) {
      return false;
    }

    return domNode;
  }

  /**
   * Get element sizes and position
   * @param domNode
   * @param domDocument
   * @param showForce
   * @return {{bottom: number, height: number, left: number, right: number, top: number, width: number}}
   */
  public static getBoundingClientRect(domNode: any, domDocument: Document = document, showForce: boolean = false): {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
  } {
    /**
     * Create result size and position object
     */
    let objRet = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    };

    domNode = DOM.getDOMNode(domNode, domDocument);
    if (!domNode) {
      UtilsMain.warn("Utils.DOM.getBoundingClientRect: DOM element doesn't exist in that DOM Document");
      return objRet;
    }

    showForce = !!showForce;

    let styles;
    if (showForce) {
      styles = getComputedStyle(domNode);
      if (styles && styles.display === "none") {
        domNode.style.display = "block";
      }
    }
    /**
     * If default method is supported than use it
     */
    if (domNode.getBoundingClientRect) {
      objRet = domNode.getBoundingClientRect();
      /**
       * IE hack
       */
      objRet = {
        bottom: objRet.bottom,
        height: objRet.height || domNode.clientHeight,
        left: objRet.left,
        right: objRet.right,
        top: objRet.top,
        width: objRet.width || domNode.clientWidth,
      };
    } else {
      /**
       * Write the element in a temporary variable
       */
      let domElement = domNode;
      /**
       * Calculated basic parameters of the element
       * @type {Object}
       */
      const objCoordinates = {
        height: domElement.offsetHeight,
        width: domElement.offsetWidth,
        x: 0,
        y: 0,
      };
      /**
       * Are passed on to all parents and take into account their offsets
       */
      while (domElement) {
        objCoordinates.x += domElement.offsetLeft;
        objCoordinates.y += domElement.offsetTop;
        domElement = domElement.offsetParent;
      }
      /**
       *
       * @type {Object}
       */
      objRet = {
        bottom: objCoordinates.y + objCoordinates.height,
        height: objCoordinates.height,
        left: objCoordinates.x,
        right: objCoordinates.x + objCoordinates.width,
        top: objCoordinates.y,
        width: objCoordinates.width,
      };
    }

    if (showForce && domNode) {
      domNode.style.display = "";
    }
    /**
     * Return size and position of the element
     */
    return objRet;
  }

  /**
   * Find element position
   * @param domNode
   * @param domDocument
   * @param showForce
   * @return {{top: number, left: number}}
   */
  public static findElementPosition(domNode: any, domDocument: Document = document, showForce: boolean = false) {
    const objRet = {
      left: 0,
      top: 0,
    };

    domNode = DOM.getDOMNode(domNode, domDocument);
    if (!domNode) {
      UtilsMain.warn("Utils.DOM.findElementPosition: DOM element doesn't exist in that DOM Document");
      return objRet;
    }

    showForce = !!showForce;

    while (domNode) {
      let styles;
      if (showForce) {
        styles = window.getComputedStyle(domNode);
        if (styles && styles.display === "none") {
          domNode.style.display = "block";
        }
      }

      objRet.left += domNode.offsetLeft;
      objRet.top += domNode.offsetTop;
      domNode = domNode.offsetParent;

      if (showForce && domNode) {
        domNode.style.display = "";
      }
    }
    return objRet;
  }

  /**
   * Add event listener
   * @param obj
   * @param name
   * @param func
   */
  public static addEvent(obj: any, name: string, func: any): boolean {
    if (
        obj &&
        typeof obj === "object" &&
        typeof name === "string" &&
        typeof func === "function"
    ) {
      if (obj.addEventListener) {
        obj.addEventListener(name, func, false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + name, func);
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * Remove event listener
   * @param obj
   * @param name
   * @param func
   */
  public static removeEvent(obj: any, name: string, func: any): boolean {
    if (
        obj &&
        typeof obj === "object" &&
        typeof name === "string" &&
        typeof func === "function"
    ) {
      if (obj.removeEventListener) {
        obj.removeEventListener(name, func, false);
      } else if (obj.detachEvent) {
        obj.detachEvent("on" + name, func);
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * Check if element has class name
   * @param element
   * @param className
   * @return {boolean}
   */
  public static hasClassName(element: HTMLElement, className: string): boolean {
    if (
        element &&
        typeof element === "object" &&
        typeof className === "string" &&
        element.nodeType === 1
    ) {
      className = className.trim();
      return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
    } else {
      return false;
    }
  }

  /**
   * Add class name
   * @param element
   * @param className
   * @return {HTMLElement}
   */
  public static addClassName(element: HTMLElement, className: string): HTMLElement {
    if (
        element &&
        typeof element === "object" &&
        typeof className === "string" &&
        element.nodeType === 1
    ) {
      className = className.trim();
      if (!DOM.hasClassName(element, className)) {
        const cl = element.className;
        element.className = cl ? cl + " " + className : className;
      }
      return element;
    } else {
      return null;
    }
  }

  /**
   * Remove class name
   * @param element
   * @param className
   * @return {HTMLElement}
   */
  public static removeClassName(element: HTMLElement, className: string): HTMLElement {
    if (
        element &&
        typeof element === "object" &&
        typeof className === "string" &&
        element.nodeType === 1 &&
        typeof element.className === "string"
    ) {
      className = className.trim();
      const classes = element.className.trim().split(" ");
      for (let i = classes.length - 1; i >= 0; i--) {
        classes[i] = classes[i].trim();
        if (
            !classes[i] ||
            classes[i] === className
        ) {
          classes.splice(i, 1);
        }
      }
      element.className = classes.join(" ");
      return element;
    } else {
      return null;
    }
  }

  /**
   * Toggle class name
   * @param element
   * @param className
   * @param toggle
   * @return {HTMLElement}
   */
  public static toggleClassName(element: HTMLElement, className: string, toggle: boolean): HTMLElement {
    if (
        element &&
        typeof element === "object" &&
        typeof className === "string" &&
        typeof toggle === "boolean" &&
        element.nodeType === 1
    ) {
      className = className.trim();
      if (toggle) {
        DOM.addClassName(element, className);
      } else {
        DOM.removeClassName(element, className);
      }
      return element;
    } else {
      return null;
    }
  }

  /**
   * Replace class name
   * @param element
   * @param oldClassName
   * @param newClassName
   * @return {HTMLElement}
   */
  public static replaceClass(element: HTMLElement, oldClassName: string, newClassName: string): HTMLElement {
    if (
        element &&
        typeof element === "object" &&
        typeof oldClassName === "string" &&
        typeof newClassName === "string" &&
        element.nodeType === 1
    ) {
      oldClassName = oldClassName.trim();
      newClassName = newClassName.trim();
      DOM.removeClassName(element, oldClassName);
      DOM.addClassName(element, newClassName);
      return element;
    } else {
      return null;
    }
  }

  /**
   * Get element by tag name and index
   * @param tn
   * @param domDocument
   * @param index
   * @return {Node}
   */
  public static getElementByTagName(tn: string, domDocument: Document = document, index: number): Node {
    if (
        typeof tn === "string" &&
        DOM.isDOMDocument(domDocument) &&
        typeof index === "number"
    ) {
      const els: NodeList = domDocument.getElementsByTagName(tn);
      return els[index] || null;
    } else {
      return null;
    }
  }

  /**
   * Get line height
   * @return {number}
   */
  public static getLineHeight(): number {
    const styles = getComputedStyle(document.body);
    const lineHeight = styles.lineHeight;
    const lineHeightDig = parseInt(lineHeight, 10);
    const fontSize = styles.fontSize;
    const fontSizeDig = parseInt(fontSize, 10);
    if (isFinite(lineHeightDig)) {
      return lineHeightDig;
    } else {
      return fontSizeDig;
    }
  }
}
