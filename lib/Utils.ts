"use strict";
/**
 * Import interfaces
 */
import IWindow from "../interfaces/IWindow.ts";
/**
 * Declare window interface
 */
declare var window: IWindow;
declare var module: any;
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
  public static Animation = UtilsAnimation;
  public static Browser = UtilsBrowser;
  public static Cookie = UtilsCookie;
  public static DOM = UtilsDOM;
  public static Document = UtilsDocument;
  public static Mouse = UtilsMouse;
  public static Screen = UtilsScreen;
  public static System = UtilsSystem;
  public static User = UtilsUser;
  public static Window = UtilsWindow;

  /**
   * @deprecated Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.
   */
  public static getBoundingClientRect(domNode: string | Element, domDocument: Document = document, showForce: boolean = false): {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
  } {
    Utils.warn("Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.");
    return Utils.DOM.getBoundingClientRect(domNode, domDocument, showForce);
  }

  /**
   * @deprecated Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.
   */
  public static findElementPosition(domNode: string | Element, domDocument: Document = document, showForce: boolean = false) {
    Utils.warn("Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.");
    return Utils.DOM.findElementPosition(domNode, domDocument, showForce);
  }
}

module.exports = Utils;
