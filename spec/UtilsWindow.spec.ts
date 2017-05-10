"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsWindow from "../lib/UtilsWindow";

describe("UtilsWindow", () => {

  let dataSet;
  let div1;
  let div2;
  let div3;
  let iframe;

  beforeEach(() => {
    div1 = window.document.createElement("div");
    div1.id = "div1";

    div2 = window.document.createElement("div");
    div2.id = "div2";
    window.document.body.appendChild(div2);

    div3 = window.document.createElement("div");
    div3.id = "div3";
    iframe = window.document.createElement("iframe");
    iframe.src = "javascript:;";
    window.document.body.appendChild(iframe);
    iframe.contentWindow.document.body.appendChild(div3);

    const paramsValues = [undefined, null, false, true, 123, "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body];
    dataSet = [];

    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      const cond = (
          x1 === undefined ||
          x1 === window ||
          x1 === iframe.contentWindow
      );
      dataSet.push({
        params: [x1],
        result: cond,
      });
    }
  });

  afterEach(() => {
    window.document.body.removeChild(div2);
    window.document.body.removeChild(iframe);
  });

  const test = (methods, _dataSet) => {
    for (let i = 0; i < _dataSet.length; i++) {
      const set = _dataSet[i];

      const results = [];

      for (let j = 0; j < methods.length; j++) {
        const method = methods[j];

        results.push(method.apply(UtilsWindow, set.params));
      }

      const result = results[0];

      for (let j = 0; j < results.length; j++) {
        const _result = results[j];

        expect(_result).toEqual(result);
      }

      expect(typeof(result)).toEqual("number");

      if (set.result) {
        expect(result).toBeCalculable();
      } else {
        expect(result).toBeNaN();
      }
    }
  };

  it("UtilsWindow", () => {
    expect(typeof(UtilsWindow)).toEqual("function");
  });

  it("UtilsWindow.getHeight", () => {
    test([UtilsWindow.getHeight, Utils.Window.getHeight], dataSet);
  });

  it("UtilsWindow.getWidth", () => {
    test([UtilsWindow.getWidth, Utils.Window.getWidth], dataSet);
  });

  it("UtilsWindow.getSizes", () => {
    const methods = [UtilsWindow.getSizes, Utils.Window.getSizes];

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const results = [];

      for (let j = 0; j < methods.length; j++) {
        const method = methods[j];

        results.push(method.apply(UtilsWindow, set.params));
      }

      const result = results[0];

      for (let j = 0; j < results.length; j++) {
        const _result = results[j];

        expect(_result).toEqual(result);
      }

      expect(typeof(result)).toEqual("object");

      expect(Object.keys(result)).toBeArray(["width", "height"]);

      expect(typeof(result.width)).toEqual("number");
      expect(typeof(result.height)).toEqual("number");

      if (set.result) {
        expect(result.width).toBeCalculable();
        expect(result.height).toBeCalculable();
      } else {
        expect(result.width).toBeNaN();
        expect(result.height).toBeNaN();
      }
    }
  });
});
