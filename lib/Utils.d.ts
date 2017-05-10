/**
 * Import Main Utils class
 */
import UtilsMain from "./UtilsMain";
/**
 * Import subclasses
 */
import UtilsAnimation from "./UtilsAnimation";
import UtilsBrowser from "./UtilsBrowser";
import UtilsCookie from "./UtilsCookie";
import UtilsDocument from "./UtilsDocument";
import UtilsDOM from "./UtilsDOM";
import UtilsMouse from "./UtilsMouse";
import UtilsScreen from "./UtilsScreen";
import UtilsSystem from "./UtilsSystem";
import UtilsUser from "./UtilsUser";
import UtilsWindow from "./UtilsWindow";
/**
 * Global Utils class
 */
export default class Utils extends UtilsMain {
    static Animation: typeof UtilsAnimation;
    static Browser: typeof UtilsBrowser;
    static Cookie: typeof UtilsCookie;
    static DOM: typeof UtilsDOM;
    static Document: typeof UtilsDocument;
    static Mouse: typeof UtilsMouse;
    static Screen: typeof UtilsScreen;
    static System: typeof UtilsSystem;
    static User: typeof UtilsUser;
    static Window: typeof UtilsWindow;
    /**
     * @deprecated Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.
     */
    static getBoundingClientRect(domNode: string | Element, domDocument?: Document, showForce?: boolean): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
    /**
     * @deprecated Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.
     */
    static findElementPosition(domNode: string | Element, domDocument?: Document, showForce?: boolean): {
        left: number;
        top: number;
    };
}
