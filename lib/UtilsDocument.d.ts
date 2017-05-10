/**
 * Class for working with document
 */
export default class Document {
    /**
     * Get document height
     * @returns {number}
     */
    static getHeight(objWindow?: any): number;
    /**
     * Get document width
     * @returns {number}
     */
    static getWidth(objWindow?: any): number;
    /**
     * Get document top scroll
     * @param objWindow
     * @return {number}
     */
    static getScrollTop(objWindow?: any): number;
    /**
     * Get document left scroll
     * @param objWindow
     * @return {number}
     */
    static getScrollLeft(objWindow?: any): number;
    /**
     * Get document scrolls
     * @param objWindow
     * @return {{left: number, top: number}}
     */
    static getScroll(objWindow?: any): {
        left: number;
        top: number;
    };
}
