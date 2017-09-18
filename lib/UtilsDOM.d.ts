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
    static Visibility: typeof UtilsDOMVisibility;
    /**
     * Check if variable is dom document
     * @param domDocument
     * @return {boolean}
     */
    static isDOMDocument(domDocument: Document): boolean;
    /**
     * Find and validate Node in DOM Document
     * @param domNode
     * @param domDocument
     * @return {Element | boolean}
     */
    static getDOMNode(domNode: any, domDocument?: Document): Element | boolean;
    /**
     * Get element sizes and position
     * @param domNode
     * @param domDocument
     * @param showForce
     * @return {{bottom: number, height: number, left: number, right: number, top: number, width: number}}
     */
    static getBoundingClientRect(domNode: any, domDocument?: Document, showForce?: boolean): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
    /**
     * Find element position
     * @param domNode
     * @param domDocument
     * @param showForce
     * @return {{top: number, left: number}}
     */
    static findElementPosition(domNode: any, domDocument?: Document, showForce?: boolean): {
        left: number;
        top: number;
    };
    /**
     * Add event listener
     * @param obj
     * @param name
     * @param func
     */
    static addEvent(obj: any, name: string, func: any): boolean;
    /**
     * Remove event listener
     * @param obj
     * @param name
     * @param func
     */
    static removeEvent(obj: any, name: string, func: any): boolean;
    /**
     * Check if element has class name
     * @param element
     * @param className
     * @return {boolean}
     */
    static hasClassName(element: HTMLElement, className: string): boolean;
    /**
     * Add class name
     * @param element
     * @param className
     * @return {HTMLElement}
     */
    static addClassName(element: HTMLElement, className: string): HTMLElement;
    /**
     * Remove class name
     * @param element
     * @param className
     * @return {HTMLElement}
     */
    static removeClassName(element: HTMLElement, className: string): HTMLElement;
    /**
     * Toggle class name
     * @param element
     * @param className
     * @param toggle
     * @return {HTMLElement}
     */
    static toggleClassName(element: HTMLElement, className: string, toggle: boolean): HTMLElement;
    /**
     * Replace class name
     * @param element
     * @param oldClassName
     * @param newClassName
     * @return {HTMLElement}
     */
    static replaceClass(element: HTMLElement, oldClassName: string, newClassName: string): HTMLElement;
    /**
     * Get element by tag name and index
     * @param tn
     * @param domDocument
     * @param index
     * @return {Node}
     */
    static getElementByTagName(tn: string, domDocument: Document, index: number): Node;
    /**
     * Get line height
     * @return {number}
     */
    static getLineHeight(): number;
}
