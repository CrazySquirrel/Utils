"use strict";

declare var beforeEach: any;
declare var afterEach: any;
declare var describe: any;
declare var it: any;
declare var expect: any;

import Utils from "../lib/Utils.ts";
import UtilsAnimation from "../lib/UtilsAnimation.ts";
import UtilsAnimationEasing from "../lib/UtilsAnimationEasing.ts";

describe("UtilsAnimationEasing", () => {
    let now;
    let dataSet;

    beforeEach(() => {
        now = (new Date()).getTime();

        let paramsValues = [undefined, null, true, 10, 123, "test", now, now + 1000];
        dataSet = [];

        for (let x1 of paramsValues) {
            for (let x2 of paramsValues) {
                for (let x3 of paramsValues) {
                    for (let x4 of paramsValues) {
                        let cond = (
                            typeof x1 === "number" &&
                            typeof x2 === "number" &&
                            typeof x3 === "number" &&
                            typeof x4 === "number" &&
                            x1 < x4
                        );
                        dataSet.push({
                            params: [x1, x2, x3, x4],
                            result: cond
                        });
                    }
                }
            }
        }
    });

    let test = (methods, _dataSet) => {
        for (let set of _dataSet) {
            let results = [];
            for (let method of methods) {
                results.push(method.apply(UtilsAnimationEasing, set.params));
            }
            let result = results[0];
            for (let _result of results) {
                expect(_result).toEqual(result);
            }

            if (set.result) {
                expect(typeof(results[0])).toEqual("number");
                expect(results[0]).toBeCalculable();
            } else {
                expect(typeof(results[0])).toEqual("number");
                expect(results[0]).toBeNaN();
            }
        }
    };

    it("UtilsAnimationEasing", () => {
        expect(typeof(UtilsAnimationEasing)).toEqual("function");
    });

    it("Utils.Animation.Easing.swing", () => {
        test([Utils.Animation.Easing.swing, UtilsAnimation.Easing.swing, UtilsAnimationEasing.swing], dataSet);
    });

    it("Utils.Animation.Easing.easeInQuad", () => {
        test([Utils.Animation.Easing.easeInQuad, UtilsAnimation.Easing.easeInQuad, UtilsAnimationEasing.easeInQuad], dataSet);
    });

    it("Utils.Animation.Easing.easeOutQuad", () => {
        test([Utils.Animation.Easing.easeOutQuad, UtilsAnimation.Easing.easeOutQuad, UtilsAnimationEasing.easeOutQuad], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutQuad", () => {
        test([Utils.Animation.Easing.easeInOutQuad, UtilsAnimation.Easing.easeInOutQuad, UtilsAnimationEasing.easeInOutQuad], dataSet);
    });

    it("Utils.Animation.Easing.easeInCubic", () => {
        test([Utils.Animation.Easing.easeInCubic, UtilsAnimation.Easing.easeInCubic, UtilsAnimationEasing.easeInCubic], dataSet);
    });

    it("Utils.Animation.Easing.easeOutCubic", () => {
        test([Utils.Animation.Easing.easeOutCubic, UtilsAnimation.Easing.easeOutCubic, UtilsAnimationEasing.easeOutCubic], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutCubic", () => {
        test([Utils.Animation.Easing.easeInOutCubic, UtilsAnimation.Easing.easeInOutCubic, UtilsAnimationEasing.easeInOutCubic], dataSet);
    });

    it("Utils.Animation.Easing.easeInQuart", () => {
        test([Utils.Animation.Easing.easeInQuart, UtilsAnimation.Easing.easeInQuart, UtilsAnimationEasing.easeInQuart], dataSet);
    });

    it("Utils.Animation.Easing.easeOutQuart", () => {
        test([Utils.Animation.Easing.easeOutQuart, UtilsAnimation.Easing.easeOutQuart, UtilsAnimationEasing.easeOutQuart], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutQuart", () => {
        test([Utils.Animation.Easing.easeInOutQuart, UtilsAnimation.Easing.easeInOutQuart, UtilsAnimationEasing.easeInOutQuart], dataSet);
    });

    it("Utils.Animation.Easing.easeInQuint", () => {
        test([Utils.Animation.Easing.easeInQuint, UtilsAnimation.Easing.easeInQuint, UtilsAnimationEasing.easeInQuint], dataSet);
    });

    it("Utils.Animation.Easing.easeOutQuint", () => {
        test([Utils.Animation.Easing.easeOutQuint, UtilsAnimation.Easing.easeOutQuint, UtilsAnimationEasing.easeOutQuint], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutQuint", () => {
        test([Utils.Animation.Easing.easeInOutQuint, UtilsAnimation.Easing.easeInOutQuint, UtilsAnimationEasing.easeInOutQuint], dataSet);
    });

    it("Utils.Animation.Easing.easeInSine", () => {
        test([Utils.Animation.Easing.easeInSine, UtilsAnimation.Easing.easeInSine, UtilsAnimationEasing.easeInSine], dataSet);
    });

    it("Utils.Animation.Easing.easeOutSine", () => {
        test([Utils.Animation.Easing.easeOutSine, UtilsAnimation.Easing.easeOutSine, UtilsAnimationEasing.easeOutSine], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutSine", () => {
        test([Utils.Animation.Easing.easeInOutSine, UtilsAnimation.Easing.easeInOutSine, UtilsAnimationEasing.easeInOutSine], dataSet);
    });

    it("Utils.Animation.Easing.easeInExpo", () => {
        test([Utils.Animation.Easing.easeInExpo, UtilsAnimation.Easing.easeInExpo, UtilsAnimationEasing.easeInExpo], dataSet);
    });

    it("Utils.Animation.Easing.easeOutExpo", () => {
        test([Utils.Animation.Easing.easeOutExpo, UtilsAnimation.Easing.easeOutExpo, UtilsAnimationEasing.easeOutExpo], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutExpo", () => {
        test([Utils.Animation.Easing.easeInOutExpo, UtilsAnimation.Easing.easeInOutExpo, UtilsAnimationEasing.easeInOutExpo], dataSet);
    });

    it("Utils.Animation.Easing.easeInCirc", () => {
        test([Utils.Animation.Easing.easeInCirc, UtilsAnimation.Easing.easeInCirc, UtilsAnimationEasing.easeInCirc], dataSet);
    });

    it("Utils.Animation.Easing.easeOutCirc", () => {
        test([Utils.Animation.Easing.easeOutCirc, UtilsAnimation.Easing.easeOutCirc, UtilsAnimationEasing.easeOutCirc], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutCirc", () => {
        test([Utils.Animation.Easing.easeInOutCirc, UtilsAnimation.Easing.easeInOutCirc, UtilsAnimationEasing.easeInOutCirc], dataSet);
    });

    it("Utils.Animation.Easing.easeInElastic", () => {
        test([Utils.Animation.Easing.easeInElastic, UtilsAnimation.Easing.easeInElastic, UtilsAnimationEasing.easeInElastic], dataSet);
    });

    it("Utils.Animation.Easing.easeOutElastic", () => {
        test([Utils.Animation.Easing.easeOutElastic, UtilsAnimation.Easing.easeOutElastic, UtilsAnimationEasing.easeOutElastic], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutElastic", () => {
        test([Utils.Animation.Easing.easeInOutElastic, UtilsAnimation.Easing.easeInOutElastic, UtilsAnimationEasing.easeInOutElastic], dataSet);
    });

    it("Utils.Animation.Easing.easeInBack", () => {
        test([Utils.Animation.Easing.easeInBack, UtilsAnimation.Easing.easeInBack, UtilsAnimationEasing.easeInBack], dataSet);
    });

    it("Utils.Animation.Easing.easeOutBack", () => {
        test([Utils.Animation.Easing.easeOutBack, UtilsAnimation.Easing.easeOutBack, UtilsAnimationEasing.easeOutBack], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutBack", () => {
        test([Utils.Animation.Easing.easeInOutBack, UtilsAnimation.Easing.easeInOutBack, UtilsAnimationEasing.easeInOutBack], dataSet);
    });

    it("Utils.Animation.Easing.easeInBounce", () => {
        test([Utils.Animation.Easing.easeInBounce, UtilsAnimation.Easing.easeInBounce, UtilsAnimationEasing.easeInBounce], dataSet);
    });

    it("Utils.Animation.Easing.easeOutBounce", () => {
        test([Utils.Animation.Easing.easeOutBounce, UtilsAnimation.Easing.easeOutBounce, UtilsAnimationEasing.easeOutBounce], dataSet);
    });

    it("Utils.Animation.Easing.easeInOutBounce", () => {
        test([Utils.Animation.Easing.easeInOutBounce, UtilsAnimation.Easing.easeInOutBounce, UtilsAnimationEasing.easeInOutBounce], dataSet);
    });
});