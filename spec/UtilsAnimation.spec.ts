"use strict";

declare var describe: any;
declare var it: any;
declare var expect: any;

import UtilsAnimation from "../lib/UtilsAnimation.ts";

describe("Utils.Animation", () => {
    it("Utils.Animation", () => {
        expect(typeof(UtilsAnimation)).toEqual("function");
    });
});