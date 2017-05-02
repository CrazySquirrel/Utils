"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils.ts";

describe("Utils", () => {

  let div1;
  let div2;
  let div3;
  let iframe;
  let paramsValues;
  let dataSet;

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

    paramsValues = [undefined, null, false, true, 123, "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body];
    dataSet = [];
  });

  afterEach(() => {
    window.document.body.removeChild(div2);
    window.document.body.removeChild(iframe);
  });

  it("Utils", () => {
    expect(typeof(Utils)).toEqual("function");
  });

  it("Utils.warn()", () => {
    let messange = "Test";
    expect(Utils.warn(messange)).toEqual(messange);
  });

  it("Utils.getBoundingClientRect()", () => {
    for (let x1 of paramsValues) {
      for (let x2 of paramsValues) {
        for (let x3 of paramsValues) {
          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            let cond = (x1 === div2 && (typeof x2 === "undefined" || x2 === window.document)) || (x1 === div3 && x2 === iframe.contentWindow.document);
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let set of dataSet) {
      let result = Utils.getBoundingClientRect.apply(Utils, set.params);

      expect(typeof(result)).toEqual("object");

      expect(typeof(result.bottom)).toEqual("number");
      expect(typeof(result.height)).toEqual("number");
      expect(typeof(result.left)).toEqual("number");
      expect(typeof(result.right)).toEqual("number");
      expect(typeof(result.top)).toEqual("number");
      expect(typeof(result.width)).toEqual("number");

      expect(result.bottom).toBeCalculable();
      expect(result.height).toBeCalculable();
      expect(result.left).toBeCalculable();
      expect(result.right).toBeCalculable();
      expect(result.top).toBeCalculable();
      expect(result.width).toBeCalculable();

      if (set.result) {
        expect(result.bottom).not.toEqual(0);
        expect(result.bottom).toEqual(result.top);
        expect(result.height).toEqual(0);
        expect(result.left).not.toEqual(0);
        expect(result.left).toBeLessThan(result.right);
        expect(result.right).not.toEqual(0);
        expect(result.top).not.toEqual(0);
        expect(result.width).not.toEqual(0);
      } else {
        expect(result.bottom).toEqual(0);
        expect(result.height).toEqual(0);
        expect(result.left).toEqual(0);
        expect(result.right).toEqual(0);
        expect(result.top).toEqual(0);
        expect(result.width).toEqual(0);
      }
    }
  });

  it("Utils.findElementPosition()", () => {
    for (let x1 of paramsValues) {
      for (let x2 of paramsValues) {
        for (let x3 of paramsValues) {
          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            let cond = (x1 === div2 && (typeof x2 === "undefined" || x2 === window.document)) || (x1 === div3 && x2 === iframe.contentWindow.document);
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let set of dataSet) {
      let result = Utils.findElementPosition.apply(Utils, set.params);

      expect(typeof(result)).toEqual("object");

      expect(typeof(result.left)).toEqual("number");
      expect(typeof(result.top)).toEqual("number");

      expect(result.left).toBeCalculable();
      expect(result.top).toBeCalculable();

      if (set.result) {
        expect(result.left).not.toEqual(0);
        expect(result.top).not.toEqual(0);
      } else {
        expect(result.left).toEqual(0);
        expect(result.top).toEqual(0);
      }
    }
  });

  it("Utils.implementationStaticMethods()", () => {
    let _utils = new Utils();
    let _paramsValues = [undefined, null, false, true, 123, "Utils", Utils, _utils];

    let _dataSet = [
      {
        params: [],
        result: false,
      },
    ];

    for (let x1 of _paramsValues) {
      for (let x2 of _paramsValues) {
        _dataSet.push({
          params: [x1, x2],
          result: (x1 === _utils),
        });
      }
    }

    for (let set of _dataSet) {
      Utils.implementationStaticMethods.apply(Utils, set.params);
      if (set.result) {
        expect(Object.keys(set.params[0])).toBeArray(Object.keys(Utils));
      }
    }
  });

  it("Utils.stack()", () => {
    let stack: any = Utils.stack();

    expect(stack).toBeArray();

    for (let obj of stack) {
      expect(typeof(obj)).toEqual("object");

      expect(Object.keys(obj)).toBeArray(["file", "column", "line", "method"]);

      expect(typeof(obj.file)).toEqual("string");
      expect(typeof(obj.column)).toEqual("string");
      expect(typeof(obj.line)).toEqual("string");
      expect(typeof(obj.method)).toEqual("string");

      expect(obj.column).toBeCalculable();
      expect(obj.line).toBeCalculable();
    }
  });

  it("Utils.getUID()", () => {
    let ID1 = Utils.getUID();
    let ID2 = Utils.getUID();

    expect(typeof(ID1)).toEqual("string");

    expect(typeof(ID2)).toEqual("string");

    expect(ID1).not.toEqual(ID2);
  });
});
