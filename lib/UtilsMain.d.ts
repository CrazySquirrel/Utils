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
    static implementationStaticMethods(realObject: any, className?: string): void;
    /**
     * Get call stack trace
     * @return Array<Object>
     */
    static stack(): any[];
    /**
     * Get random ID
     * @return {string}
     */
    static getUID(): string;
}
