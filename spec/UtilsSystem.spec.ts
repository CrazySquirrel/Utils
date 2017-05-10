"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

import Utils from "../lib/Utils";
import UtilsSystem from "../lib/UtilsSystem";

describe("UtilsSystem", () => {
  it("UtilsSystem", () => {
    expect(typeof(UtilsSystem)).toEqual("function");
  });

  it("UtilsSystem.getInfo", () => {
    const info1 = UtilsSystem.getInfo();
    const info2 = Utils.System.getInfo();

    expect(info1).toEqual(info2);

    expect(Object.keys(info1)).toBeArray(["name", "version"]);

    expect(typeof(info1.name)).toEqual("string");
    expect(typeof(info1.version)).toEqual("string");

    expect(info1.name).toEqual(UtilsSystem.getName());
    expect(info1.version).toEqual(UtilsSystem.getVersion());
  });

  it("UtilsSystem.getName", () => {
    const name1 = UtilsSystem.getName();
    const name2 = Utils.System.getName();

    expect(typeof(name1)).toEqual("string");
    expect(typeof(name2)).toEqual("string");

    expect(name1).toEqual(name2);
  });

  it("UtilsSystem.getVersion", () => {
    const version1 = UtilsSystem.getVersion();
    const version2 = Utils.System.getVersion();

    expect(typeof(version1)).toEqual("string");
    expect(typeof(version2)).toEqual("string");

    expect(version1).toEqual(version2);
  });
});
