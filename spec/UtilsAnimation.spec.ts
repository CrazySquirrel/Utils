"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import UtilsAnimation from "../lib/UtilsAnimation";

describe("Utils.Animation", () => {
  it("Utils.Animation", () => {
    expect(typeof(UtilsAnimation)).toEqual("function");
  });
});
