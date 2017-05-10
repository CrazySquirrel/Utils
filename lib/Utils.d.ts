/**
 * Import Main Utils class
 */
import UtilsMain from "./UtilsMain.ts";
/**
 * Import subclasses
 */
import UtilsAnimation from "./UtilsAnimation.ts";
import UtilsBrowser from "./UtilsBrowser.ts";
import UtilsCookie from "./UtilsCookie.ts";
import UtilsDocument from "./UtilsDocument.ts";
import UtilsDOM from "./UtilsDOM.ts";
import UtilsMouse from "./UtilsMouse.ts";
import UtilsScreen from "./UtilsScreen.ts";
import UtilsSystem from "./UtilsSystem.ts";
import UtilsUser from "./UtilsUser.ts";
import UtilsWindow from "./UtilsWindow.ts";
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
