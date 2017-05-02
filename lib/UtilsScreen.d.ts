/**
 * Class for working with screen
 */
export default class Screen {
    /**
     * Get screen info
     * @return {{availableSize: {height: number, width: number}, colorDepth: number, pixelRatio: number, size: {height: number, width: number}}}
     */
    static getInfo(): {
        availableSize: {
            height: number;
            width: number;
        };
        colorDepth: number;
        pixelRatio: number;
        size: {
            height: number;
            width: number;
        };
    };
    /**
     * Get screen height
     * @returns {number}
     */
    static getHeight(): number;
    /**
     * Get screen width
     * @returns {number}
     */
    static getWidth(): number;
    /**
     * Get screen sizes
     * @return {{height: number, width: number}}
     */
    static getSizes(): {
        height: number;
        width: number;
    };
    /**
     * Get screen height
     * @returns {number}
     */
    static getAvailableHeight(): number;
    /**
     * Get screen width
     * @returns {number}
     */
    static getAvailableWidth(): number;
    /**
     * Get screen sizes
     * @return {{height: number, width: number}}
     */
    static getAvailableSizes(): {
        height: number;
        width: number;
    };
    /**
     * Get screen pixel ratio
     * @return {number}
     */
    static getPixelRatio(): number;
    /**
     * Get screen color depth
     * @return {number}
     */
    static getColorDepth(): number;
}
