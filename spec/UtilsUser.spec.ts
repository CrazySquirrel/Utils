"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsUser from "../lib/UtilsUser";

describe("UtilsUser", () => {
  it("UtilsUser", () => {
    expect(typeof(UtilsUser)).toEqual("function");
  });

  it("UtilsUser.getInfo", () => {
    const info1 = UtilsUser.getInfo();
    const info2 = Utils.User.getInfo();

    expect(info1).toEqual(info2);

    expect(typeof(info1)).toEqual("object");
    expect(Object.keys(info1)).toBeArray(["browser", "screen", "system"]);

    expect(info1.browser).toEqual(Utils.Browser.getInfo());
    expect(info1.screen).toEqual(Utils.Screen.getInfo());
    expect(info1.system).toEqual(Utils.System.getInfo());
  });
});
