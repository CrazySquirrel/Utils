"use strict";
/**
 * Import additional classes
 */
import UtilsDOM from "./UtilsDOM";
import UtilsWindow from "./UtilsWindow";
/**
 * Class for working with mouse
 */
export default class Mouse {
  /**
   * Normalise mouse delta
   * @param e
   * @return {number}
   */
  public static getWheelDelta(e): number {
    if (
        e &&
        typeof e === "object" &&
        (
            "detail" in e ||
            "wheelDelta" in e ||
            "wheelDeltaY" in e ||
            "wheelDeltaX" in e ||
            "deltaY" in e ||
            "deltaX" in e ||
            "axis" in e ||
            "deltaMode" in e
        )
    ) {

      let delta;
      let deltaX;
      let deltaY;

      // Old school scrollwheel delta
      if ("detail" in e) {
        deltaY = e.detail * -1;
      }
      if ("wheelDelta" in e) {
        deltaY = e.wheelDelta;
      }
      if ("wheelDeltaY" in e) {
        deltaY = e.wheelDeltaY;
      }
      if ("wheelDeltaX" in e) {
        deltaX = e.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // New school wheel delta (wheel event)
      if ("deltaY" in e) {
        deltaY = e.deltaY * -1;
      }
      if ("deltaX" in e) {
        deltaX = e.deltaX;
      }

      // Need to convert lines and pages to pixels if we aren"t already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (e.deltaMode === 1) {
        const lineHeight = UtilsDOM.getLineHeight();
        deltaY = deltaY * lineHeight;
        deltaX = deltaX * lineHeight;
      } else if (e.deltaMode === 2) {
        const windowhegiht = UtilsWindow.getHeight();
        deltaY = deltaY * windowhegiht;
        deltaX = deltaX * windowhegiht;
      }

      delta = deltaY === 0 ? deltaX : deltaY;

      return delta;
    } else {
      return NaN;
    }
  }
}
