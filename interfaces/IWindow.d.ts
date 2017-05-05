/**
 * The storage interface
 */
interface IWindow {
    document?: any;
    Utils?: any;
    eventListenerAdded?: boolean;
    innerHeight?: number;
    innerWidth?: number;
    pageXOffset?: number;
    pageYOffset?: number;
    globalStorage?: any;
    screen?: Screen;
    devicePixelRatio?: number;
    Promise?: Promise<any>;
}
export default IWindow;
