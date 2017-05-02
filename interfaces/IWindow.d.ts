/**
 * The storage interface
 */
interface IWindow {
    document: any;
    Utils: any;
    eventListenerAdded: boolean;
    innerHeight: number;
    innerWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    globalStorage: Object;
}
export default IWindow;
