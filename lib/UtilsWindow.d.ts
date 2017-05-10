/**
 * Class for working with window
 */
export default class Window {
    /**
     * Check if it is window
     * @param objWindow
     * @return {boolean}
     */
    static isWindow(objWindow: any): boolean;
    /**
     * Get window height
     * @param objWindow
     * @return {number}
     */
    static getHeight(objWindow?: any): number;
    /**
     * Get window width
     * @param objWindow
     * @return {number}
     */
    static getWidth(objWindow?: any): number;
    /**
     * Get window sizes
     * @return {{height: number, width: number}}
     */
    static getSizes(objWindow?: any): {
        height: number;
        width: number;
    };
}
