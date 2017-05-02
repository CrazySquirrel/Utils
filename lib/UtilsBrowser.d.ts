/**
 * Class for working with browser
 */
export default class Browser {
    /**
     * Get browser info
     * @return {{browser: string, mobile: boolean, version: string}}
     */
    static getInfo(): {
        browser: string;
        mobile: boolean;
        version: string;
    };
    /**
     * Get browser name
     * @return {string}
     */
    static getName(): string;
    /**
     * Get browser version
     * @return {string}
     */
    static getVersion(): string;
    /**
     * Trim browser version
     * @param version
     * @return {string}
     */
    static trimVersion(version: any): string;
    /**
     * Check if it is mobile
     * @return {boolean}
     */
    static isMobile(): boolean;
    /**
     * Check if it is opera browser
     * @return {boolean}
     */
    static isOpera(): boolean;
    /**
     * Get opera browser version
     * @return {string}
     */
    static getOperaVersion(): string;
    /**
     * Check if it is opera new browser
     * @return {boolean}
     */
    static isOperaNew(): boolean;
    /**
     * Get opera new browser version
     * @return {string}
     */
    static getOperaNewVersion(): string;
    /**
     * Check if it is msie browser
     * @return {boolean}
     */
    static isMSIE(): boolean;
    /**
     * Get msie browser version
     * @return {string}
     */
    static getMSIEVersion(): string;
    /**
     * Check if it is msie new browser
     * @return {boolean}
     */
    static isMSIENew(): boolean;
    /**
     * Get msie new browser version
     * @return {string}
     */
    static getMSIENewVersion(): string;
    /**
     * Check if it is chrome browser
     * @return {boolean}
     */
    static isChrome(): boolean;
    /**
     * Get chrome browser version
     * @return {string}
     */
    static getChromeVersion(): string;
    /**
     * Check if it is safari browser
     * @return {boolean}
     */
    static isSafari(): boolean;
    /**
     * Get safari browser version
     * @return {string}
     */
    static getSafariVersion(): string;
    /**
     * Check if it is firefox browser
     * @return {boolean}
     */
    static isFirefox(): boolean;
    /**
     * Get firefox browser version
     * @return {string}
     */
    static getFirefoxVersion(): string;
    /**
     * Check if it is other browser
     * @return {boolean}
     */
    static isOther(): boolean;
    /**
     * Get other browser name
     * @return {string}
     */
    static getOtherName(): string;
    /**
     * Get other browser version
     * @return {string}
     */
    static getOtherVersion(): string;
    /**
     * Check browser support
     * @return {boolean}
     */
    static isSupported(): boolean;
    /**
     * Check if it is WebKit browser
     * @return {boolean}
     */
    static isWebKit(): boolean;
    /**
     * Check if it is Gecko browser
     * @return {boolean}
     */
    static isGecko(): boolean;
    /**
     * Check if it is Android browser
     * @return {boolean}
     */
    static isAndroid(): boolean;
    /**
     * Check if it is Linux browser
     * @return {boolean}
     */
    static isLinux(): boolean;
    /**
     * Check if it is iPad browser
     * @return {boolean}
     */
    static isTabletPC(): boolean;
}
