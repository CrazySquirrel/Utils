"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsDocument from "../lib/UtilsDocument";

describe("UtilsDocument", () => {

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

        results.push(method.apply(UtilsDocument, set.params));
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

  it("UtilsDocument", () => {
    expect(typeof(UtilsDocument)).toEqual("function");
  });

  it("UtilsDocument.getHeight", () => {
    test([UtilsDocument.getHeight, Utils.Document.getHeight], dataSet);
  });

  it("UtilsDocument.getWidth", () => {
    test([UtilsDocument.getWidth, Utils.Document.getWidth], dataSet);
  });

  it("UtilsDocument.getScrollTop", () => {
    test([UtilsDocument.getScrollTop, Utils.Document.getScrollTop], dataSet);
  });

  it("UtilsDocument.getScrollLeft", () => {
    test([UtilsDocument.getScrollLeft, Utils.Document.getScrollLeft], dataSet);
  });

  it("UtilsDocument.getScroll", () => {
    const methods = [UtilsDocument.getScroll, Utils.Document.getScroll];

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const results = [];

      for (let j = 0; j < methods.length; j++) {
        const method = methods[j];

        results.push(method.apply(UtilsDocument, set.params));
      }

      const result = results[0];

      for (let j = 0; j < results.length; j++) {
        const _result = results[j];

        expect(_result).toEqual(result);
      }

      expect(typeof(result)).toEqual("object");

      expect(Object.keys(result)).toBeArray(["left", "top"]);

      expect(typeof(result.left)).toEqual("number");
      expect(typeof(result.top)).toEqual("number");

      if (set.result) {
        expect(result.left).toBeCalculable();
        expect(result.top).toBeCalculable();
      } else {
        expect(result.left).toBeNaN();
        expect(result.top).toBeNaN();
      }
    }
  });
});
