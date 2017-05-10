"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsDOM from "../lib/UtilsDOM";

describe("UtilsDOM", () => {

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

    paramsValues = [undefined, null, false, true, 123, 0, "div", "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, () => {
    }];
    dataSet = [];
  });

  afterEach(() => {
    window.document.body.removeChild(div2);
    window.document.body.removeChild(iframe);
  });

  const testClass = () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        if (
            x1 !== x2
        ) {
          const cond = (
              (x1 === div1 || x1 === div2 || x1 === div3) &&
              typeof x2 === "string"
          );
          dataSet.push({
            params: [x1, x2],
            result: cond,
          });
        }

      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      /**
       * Add class
       */
      let result = UtilsDOM.addClassName.apply(UtilsDOM, set.params);
      /**
       * Check if element returned or null
       */
      if (set.result) {
        expect(result === div1 || result === div2 || result === div3).toEqual(true);
      } else {
        expect(result).toBeNull();
      }
      /**
       * Check if element has class
       */
      result = UtilsDOM.hasClassName.apply(UtilsDOM, set.params);

      if (set.result) {
        expect(result).toEqual(true);
      } else {
        expect(result).toEqual(false);
      }
      /**
       * Toggle class off
       */
      result = UtilsDOM.toggleClassName.apply(UtilsDOM, [].concat(set.params, false));
      /**
       * Check if element returned or null
       */
      if (set.result) {
        expect(result === div1 || result === div2 || result === div3).toEqual(true);
      } else {
        expect(result).toBeNull();
      }
      /**
       * Check if element has not class
       */
      result = UtilsDOM.hasClassName.apply(UtilsDOM, set.params);

      expect(result).toEqual(false);
      /**
       * Toggle class on
       */
      result = UtilsDOM.toggleClassName.apply(UtilsDOM, [].concat(set.params, true));
      /**
       * Check if element returned or null
       */
      if (set.result) {
        expect(result === div1 || result === div2 || result === div3).toEqual(true);
      } else {
        expect(result).toBeNull();
      }
      /**
       * Check if element has class
       */
      result = UtilsDOM.hasClassName.apply(UtilsDOM, set.params);

      if (set.result) {
        expect(result).toEqual(true);
      } else {
        expect(result).toEqual(false);
      }
      /**
       * Replace class
       */
      result = UtilsDOM.replaceClass.apply(UtilsDOM, [set.params[0], set.params[1], "_" + set.params[1]]);
      /**
       * Check if element returned or null
       */
      if (set.result) {
        expect(result === div1 || result === div2 || result === div3).toEqual(true);
      } else {
        expect(result).toBeNull();
      }
      /**
       * Check if element has class
       */
      result = UtilsDOM.hasClassName.apply(UtilsDOM, [set.params[0], "_" + set.params[1]]);

      if (set.result) {
        expect(result).toEqual(true);
      } else {
        expect(result).toEqual(false);
      }

      result = UtilsDOM.hasClassName.apply(UtilsDOM, [set.params[0], set.params[1]]);

      expect(result).toEqual(false);

      /**
       * Remove class name
       */
      result = UtilsDOM.removeClassName.apply(UtilsDOM, [set.params[0], "_" + set.params[1]]);
      /**
       * Check if element has not class
       */
      result = UtilsDOM.hasClassName.apply(UtilsDOM, [set.params[0], "_" + set.params[1]]);

      expect(result).toEqual(false);
    }
  };

  it("UtilsDOM", () => {
    expect(typeof(UtilsDOM)).toEqual("function");
  });

  it("UtilsDOM.getDOMNode", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        if (
            x1 !== x2
        ) {
          const cond = (
              (
                  x1 === div2 &&
                  (x2 === window.document || x2 === undefined)
              ) || (
                  x1 === div3 &&
                  x2 === iframe.contentWindow.document
              )
          );
          dataSet.push({
            params: [x1, x2],
            result: cond,
          });
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result1 = UtilsDOM.getDOMNode.apply(UtilsDOM, set.params);
      const result2 = Utils.DOM.getDOMNode.apply(UtilsDOM, set.params);

      expect(result1).toEqual(result2);

      if (set.result) {
        expect(result1 === div2 || result1 === div3).toEqual(true);
      } else {
        expect(result1).toEqual(false);
      }
    }
  });

  it("UtilsDOM.getBoundingClientRect", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        for (let i3 = 0; i3 < paramsValues.length; i3++) {
          const x3 = paramsValues[i3];

          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            const cond = (x1 === div2 && (typeof x2 === "undefined" || x2 === window.document)) || (x1 === div3 && x2 === iframe.contentWindow.document);
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result = UtilsDOM.getBoundingClientRect.apply(UtilsDOM, set.params);

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

  it("UtilsDOM.findElementPosition", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        for (let i3 = 0; i3 < paramsValues.length; i3++) {
          const x3 = paramsValues[i3];

          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            const cond = (x1 === div2 && (typeof x2 === "undefined" || x2 === window.document)) || (x1 === div3 && x2 === iframe.contentWindow.document);
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result = UtilsDOM.findElementPosition.apply(UtilsDOM, set.params);

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

  it("UtilsDOM.addEvent", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        for (let i3 = 0; i3 < paramsValues.length; i3++) {
          const x3 = paramsValues[i3];

          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            const cond = (
                x1 &&
                typeof x1 === "object" &&
                typeof x2 === "string" &&
                typeof x3 === "function"
            );
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result = UtilsDOM.addEvent.apply(UtilsDOM, set.params);

      expect(typeof(result)).toEqual("boolean");

      if (set.result) {
        expect(result).toEqual(true);
      } else {
        expect(result).toEqual(false);
      }
    }
  });

  it("UtilsDOM.removeEvent", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        for (let i3 = 0; i3 < paramsValues.length; i3++) {
          const x3 = paramsValues[i3];

          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            const cond = (
                x1 &&
                typeof x1 === "object" &&
                typeof x2 === "string" &&
                typeof x3 === "function"
            );
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result = UtilsDOM.removeEvent.apply(UtilsDOM, set.params);

      expect(typeof(result)).toEqual("boolean");

      if (set.result) {
        expect(result).toEqual(true);
      } else {
        expect(result).toEqual(false);
      }
    }
  });

  it("UtilsDOM.hasClassName", () => {
    testClass();
  });

  it("UtilsDOM.addClassName", () => {
    testClass();
  });

  it("UtilsDOM.removeClassName", () => {
    testClass();
  });

  it("UtilsDOM.toggleClassName", () => {
    testClass();
  });

  it("UtilsDOM.replaceClass", () => {
    testClass();
  });

  it("UtilsDOM.getElementByTagName", () => {
    for (let i1 = 0; i1 < paramsValues.length; i1++) {
      const x1 = paramsValues[i1];

      for (let i2 = 0; i2 < paramsValues.length; i2++) {
        const x2 = paramsValues[i2];

        for (let i3 = 0; i3 < paramsValues.length; i3++) {
          const x3 = paramsValues[i3];

          if (
              [x2, x3].indexOf(x1) === -1 &&
              [x1, x3].indexOf(x2) === -1 &&
              [x1, x2].indexOf(x3) === -1
          ) {
            const cond = (
                typeof x1 === "string" &&
                x1 === "div" &&
                (UtilsDOM.isDOMDocument(x2) || x2 === undefined) &&
                typeof x3 === "number" &&
                x3 < 1
            );
            dataSet.push({
              params: [x1, x2, x3],
              result: cond,
            });
          }
        }
      }
    }

    for (let i = 0; i < dataSet.length; i++) {
      const set = dataSet[i];

      const result = UtilsDOM.getElementByTagName.apply(UtilsDOM, set.params);

      if (set.result) {
        expect(result).not.toBeNull();
      } else {
        expect(result).toBeNull();
      }
    }
  });

  it("UtilsDOM.getLineHeight", () => {
    const result = UtilsDOM.getLineHeight();
    expect(typeof(result)).toEqual("number");
    expect(result).toBeCalculable();
  });
});
