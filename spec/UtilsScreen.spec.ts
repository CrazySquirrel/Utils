"use strict";

declare var describe: any;
declare var it: any;
declare var expect: any;

import Utils from "../lib/Utils";
import UtilsScreen from "../lib/UtilsScreen";

describe("UtilsScreen", () => {

    let test = (methods) => {
        let results = [];
        for (let method of methods) {
            results.push(method.apply(UtilsScreen, []));
        }
        let result = results[0];
        for (let _result of results) {
            expect(typeof(_result)).toEqual("number");
            expect(_result).toBeCalculable();
            expect(_result).toEqual(result);
            expect(_result).not.toEqual(0);
        }
    };

    let test2 = (methods) => {
        let results = [];
        for (let method of methods) {
            results.push(method.apply(UtilsScreen, []));
        }
        let result = results[0];
        for (let _result of results) {
            expect(typeof(_result)).toEqual("object");
            expect(Object.keys(_result)).toBeArray(["width", "height"]);

            expect(_result.width).toBeCalculable();
            expect(_result.width).toEqual(result.width);
            expect(_result.width).not.toEqual(0);

            expect(_result.height).toBeCalculable();
            expect(_result.height).toEqual(result.height);
            expect(_result.height).not.toEqual(0);
        }
    };

    it("UtilsScreen", () => {
        expect(typeof(UtilsScreen)).toEqual("function");
    });

    it("UtilsScreen.getInfo", () => {
        let info1 = UtilsScreen.getInfo();
        let info2 = Utils.Screen.getInfo();

        expect(info1).toEqual(info2);

        expect(typeof(info1)).toEqual("object");
        expect(Object.keys(info1)).toBeArray(["availableSize", "colorDepth", "pixelRatio", "size"]);

        expect(typeof(info1.availableSize)).toEqual("object");
        expect(Object.keys(info1.availableSize)).toBeArray(["width", "height"]);
        expect(info1.availableSize).toEqual(UtilsScreen.getAvailableSizes());

        expect(typeof(info1.colorDepth)).toEqual("number");
        expect(info1.colorDepth).toEqual(UtilsScreen.getColorDepth());

        expect(typeof(info1.pixelRatio)).toEqual("number");
        expect(info1.pixelRatio).toEqual(UtilsScreen.getPixelRatio());

        expect(typeof(info1.size)).toEqual("object");
        expect(Object.keys(info1.size)).toBeArray(["width", "height"]);
        expect(info1.size).toEqual(UtilsScreen.getSizes());
    });

    it("UtilsScreen.getHeight", () => {
        test([UtilsScreen.getHeight, Utils.Screen.getHeight]);
    });

    it("UtilsScreen.getWidth", () => {
        test([UtilsScreen.getWidth, Utils.Screen.getWidth]);
    });

    it("UtilsScreen.getSizes", () => {
        test2([UtilsScreen.getSizes, Utils.Screen.getSizes]);
    });

    it("UtilsScreen.getAvailableHeight", () => {
        test([UtilsScreen.getAvailableHeight, Utils.Screen.getAvailableHeight]);
    });

    it("UtilsScreen.getAvailableWidth", () => {
        test([UtilsScreen.getAvailableWidth, Utils.Screen.getAvailableWidth]);
    });

    it("UtilsScreen.getAvailableSizes", () => {
        test2([UtilsScreen.getAvailableSizes, Utils.Screen.getAvailableSizes]);
    });

    it("UtilsScreen.getPixelRatio", () => {
        test([UtilsScreen.getPixelRatio, Utils.Screen.getPixelRatio]);
    });

    it("UtilsScreen.getColorDepth", () => {
        test([UtilsScreen.getColorDepth, Utils.Screen.getColorDepth]);
    });
});