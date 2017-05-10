"use strict";
/**
 * Class for working with window
 */
export default class Window {

  /**
   * Check if it is window
   * @param objWindow
   * @return {boolean}
   */
  public static isWindow(objWindow): boolean {
    return (
        objWindow &&
        typeof objWindow === "object" &&
        objWindow.document &&
        typeof objWindow.document === "object"
    );
  }

  /**
   * Get window height
   * @param objWindow
   * @return {number}
   */
  public static getHeight(objWindow: any = window): number {
      if (Window.isWindow(objWindow)) {
      return objWindow.innerHeight || objWindow.document.documentElement.clientHeight || objWindow.document.body.clientHeight;
    } else {
      return NaN;
    }
  }

  /**
   * Get window width
   * @param objWindow
   * @return {number}
   */
  public static getWidth(objWindow: any = window): number {
    if (Window.isWindow(objWindow)) {
      return objWindow.innerWidth || objWindow.document.documentElement.clientWidth || objWindow.document.body.clientWidth;
    } else {
      return NaN;
    }
  }

  /**
   * Get window sizes
   * @return {{height: number, width: number}}
   */
  public static getSizes(objWindow: any = window): {
    height: number,
    width: number,
  } {
    return ({
      height: Window.getHeight(objWindow),
      width: Window.getWidth(objWindow),
    });
  }
}
