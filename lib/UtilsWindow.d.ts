/**
 * Import interfaces
 */
import IWindow from "../Interfaces/IWindow";
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
    static getHeight(objWindow?: IWindow): number;
    /**
     * Get window width
     * @param objWindow
     * @return {number}
     */
    static getWidth(objWindow?: IWindow): number;
    /**
     * Get window sizes
     * @return {{height: number, width: number}}
     */
    static getSizes(objWindow?: IWindow): {
        height: number;
        width: number;
    };
}
