"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import UtilsMouse from "../lib/UtilsMouse";

describe("UtilsMouse", () => {
  it("UtilsMouse", () => {
    expect(typeof(UtilsMouse)).toEqual("function");
  });

  it("UtilsMouse.getWheelDelta", () => {
    const evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("wheel", true, true, window, 10, 10, 10, 80, 20, false, false, false, false, 10, null);

    const paramsValues = [evt, undefined, null, false, true, 123, "test", window, window.document, window.document.body];

    for (let j = 0; j < paramsValues.length; j++) {
      const paramsValue = paramsValues[j];

      const result = UtilsMouse.getWheelDelta(paramsValue);

      expect(typeof(result)).toEqual("number");

      if (paramsValue === evt) {
        expect(result).toBeCalculable();
      } else {
        expect(result).toBeNaN();
      }
    }
  });
});
