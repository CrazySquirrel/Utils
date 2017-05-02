/**
 * Class for working with system
 */
export default class System {
    /**
     * Get system info
     * @return {{name: string, version: string}}
     */
    static getInfo(): {
        name: string;
        version: string;
    };
    /**
     * Get OS name
     * @return {string}
     */
    static getName(): string;
    /**
     * Get OS version
     * @return {string}
     */
    static getVersion(): string;
}
