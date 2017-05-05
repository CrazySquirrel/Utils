/**
 * Class for working with user data
 */
export default class User {
    /**
     * Get user info
     * @return {{browser: {browser: string, mobile: boolean, version: string}, screen: {availableSize: {height: number, width: number}, colorDepth: number, pixelRatio: number, size: {height: number, width: number}}, system: {name: string, version: string}}}
     */
    static getInfo(): {
        browser: {
            browser: string;
            mobile: boolean;
            version: string;
        };
        screen: {
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
        system: {
            name: string;
            version: string;
        };
    };
}
