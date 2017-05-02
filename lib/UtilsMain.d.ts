/**
 * Main Utils class
 */
export default class Main {
    /**
     * Warning
     * @param messange
     * @return {string}
     */
    static warn(messange: string): string;
    /**
     * Transfer static methods into the object
     * @param realObject
     * @param className
     */
    static implementationStaticMethods(realObject: Object, className?: string): void;
    /**
     * Get call stack trace
     * @return Array<Object>
     */
    static stack(): Array<Object>;
    /**
     * Get random ID
     * @return {string}
     */
    static getUID(): string;
}
