"use strict";

declare var describe: any;
declare var it: any;
declare var expect: any;

import Utils from "../lib/Utils";
import UtilsUser from "../lib/UtilsUser";

describe("UtilsUser", () => {
    it("UtilsUser", () => {
        expect(typeof(UtilsUser)).toEqual("function");
    });

    it("UtilsUser.getInfo", () => {
        let info1 = UtilsUser.getInfo();
        let info2 = Utils.User.getInfo();

        expect(info1).toEqual(info2);

        expect(typeof(info1)).toEqual("object");
        expect(Object.keys(info1)).toBeArray(["browser", "screen", "system"]);

        expect(info1.browser).toEqual(Utils.Browser.getInfo());
        expect(info1.screen).toEqual(Utils.Screen.getInfo());
        expect(info1.system).toEqual(Utils.System.getInfo());
    });
});