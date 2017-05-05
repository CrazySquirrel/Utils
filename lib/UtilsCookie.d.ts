/**
 * Class for working with cookie
 */
export default class Cookie {
    static regValidKey: RegExp;
    /**
     * The method returns the flag whether supported this storage type or not
     * @returns {boolean}
     */
    static isSupported(): boolean;
    /**
     * The method sets the value and returns true if it has been set
     * @param checkSupport {boolean}
     * @param key {string}
     * @param value {string}
     * @param expires {number}
     * @param path {string}
     * @param domain {string}
     * @param secure {boolean}
     * @return {boolean}
     */
    static setItem(checkSupport: boolean, key: string, value: string, expires?: number, path?: string, domain?: string, secure?: boolean): boolean;
    /**
     * The method reads the value and returns it or returns false if the value does not exist
     * @param checkSupport {boolean}
     * @param key {string}
     * @returns {string|boolean}
     */
    static getItem(checkSupport: boolean, key: string): string | boolean;
    /**
     * The method removes the value and return true if the value does not exist
     * @param checkSupport {boolean}
     * @param key {string}
     * @returns {boolean}
     */
    static removeItem(checkSupport: boolean, key: string): boolean;
    /**
     * The method returns the array of string of available keys
     * @param checkSupport {boolean}
     * @returns {string[]}
     */
    static getKeys(checkSupport?: boolean): string[];
    /**
     * The method cleans the storage and return true if it is empty
     * @param checkSupport {boolean}
     * @returns {boolean}
     */
    static clear(checkSupport?: boolean): boolean;
}
