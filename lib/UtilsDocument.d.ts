/**
 * Import interfaces
 */
import IWindow from "../Interfaces/IWindow.ts";
/**
 * Class for working with document
 */
export default class Document {
    /**
     * Get document height
     * @returns {number}
     */
    static getHeight(objWindow?: IWindow): number;
    /**
     * Get document width
     * @returns {number}
     */
    static getWidth(objWindow?: IWindow): number;
    /**
     * Get document top scroll
     * @param objWindow
     * @return {number}
     */
    static getScrollTop(objWindow?: IWindow): number;
    /**
     * Get document left scroll
     * @param objWindow
     * @return {number}
     */
    static getScrollLeft(objWindow?: IWindow): number;
    /**
     * Get document scrolls
     * @param objWindow
     * @return {{left: number, top: number}}
     */
    static getScroll(objWindow?: IWindow): {
        left: number;
        top: number;
    };
}
