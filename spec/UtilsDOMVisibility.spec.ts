"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import UtilsDOMVisibility from "../lib/UtilsDOMVisibility";

describe("UtilsDOMVisibility", () => {

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

  it("UtilsDOMVisibility", () => {
    expect(typeof(UtilsDOMVisibility)).toEqual("function");
  });


  it("UtilsDOMVisibility.resizeEvent", () => {

  });

  it("UtilsDOMVisibility.getID", () => {

  });

  it("UtilsDOMVisibility.getComputedStyle", () => {

  });

  it("UtilsDOMVisibility.getWindowHeight", () => {

  });

  it("UtilsDOMVisibility.getDocumentHeight", () => {

  });

  it("UtilsDOMVisibility.getWindowWidth", () => {

  });

  it("UtilsDOMVisibility.getDocumentWidth", () => {

  });

  it("UtilsDOMVisibility.isVisible", () => {

  });

  it("UtilsDOMVisibility.checkTotalVisibility", () => {

  });

  it("UtilsDOMVisibility.getBoundingClientRect", () => {

  });

  it("UtilsDOMVisibility.calcVisibility", () => {

  });

  it("UtilsDOMVisibility.checkVisibility", () => {

  });
});
