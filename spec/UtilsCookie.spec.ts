"use strict";

declare let beforeEach: any;
declare let afterEach: any;
declare let describe: any;
declare let it: any;
declare let expect: any;
declare let require: any;

const URL = require("url");

import Utils from "../lib/Utils";
import UtilsCookie from "../lib/UtilsCookie";

describe("UtilsCookie", () => {

  const test = () => {
    const paramsValues: any = [undefined, false, true, 30, "value", "/", "test", location.hostname];
    const dataSet = [];
    for (const x1 of paramsValues) {
      for (const x2 of paramsValues) {
        for (const x3 of paramsValues) {
          for (const x4 of paramsValues) {
            for (const x5 of paramsValues) {
              for (const x6 of paramsValues) {
                for (const x7 of paramsValues) {
                  if (
                      [x2, x3, x4, x5, x6, x7].indexOf(x1) === -1 &&
                      [x1, x3, x4, x5, x6, x7].indexOf(x2) === -1 &&
                      [x1, x2, x4, x5, x6, x7].indexOf(x3) === -1 &&
                      [x1, x2, x3, x5, x6, x7].indexOf(x4) === -1 &&
                      [x1, x2, x3, x4, x6, x7].indexOf(x5) === -1 &&
                      [x1, x2, x3, x4, x5, x7].indexOf(x6) === -1 &&
                      [x1, x2, x3, x4, x5, x6].indexOf(x7) === -1
                  ) {
                    const params = [x1, x2, x3, x4, x5, x6, x7];
                    let cond = (
                        (
                            typeof x1 === "boolean" ||
                            x1 === undefined
                        ) &&
                        (
                            typeof x2 === "string" &&
                            UtilsCookie.regValidKey.test(x2)
                        ) &&
                        (
                            typeof x3 === "string" &&
                            UtilsCookie.regValidKey.test(x3)
                        ) &&
                        (
                            (
                                typeof x4 === "number" &&
                                x4 < 365
                            ) || x4 === undefined
                        ) &&
                        (
                            typeof x5 === "string" ||
                            x5 === undefined
                        ) &&
                        (
                            (
                                typeof x6 === "string" &&
                                x6.indexOf(location.hostname) !== -1
                            ) || x6 === undefined
                        ) &&
                        (
                            (
                                typeof x7 === "boolean" &&
                                x7 === (location.protocol === "https:")
                            ) || x7 === undefined
                        )
                    );
                    if (cond) {
                      const u = URL.parse("http://" + (!!x6 ? x6 : location.hostname) + (!!x5 ? x5 : "/"));
                      if (
                          (u.hostname !== x6 && u.hostname !== location.hostname) ||
                          (u.path !== x5 && u.path !== "/")
                      ) {
                        cond = false;
                      }
                    }
                    dataSet.push({
                      params,
                      result: cond,
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
    for (const set of dataSet) {
      /**
       * Set data
       */
      let setItem1 = UtilsCookie.setItem.apply(UtilsCookie, set.params);

      expect(typeof(setItem1)).toEqual("boolean");

      if (set.result) {
        expect(setItem1).toEqual(true);
      } else {
        expect(setItem1).toEqual(false);
      }

      if (setItem1) {
        /**
         * Get data
         */
        const getItem1 = UtilsCookie.getItem.apply(UtilsCookie, set.params.slice(0, 2));

        expect(typeof(getItem1)).toEqual("string");
        expect(getItem1).toEqual(set.params[2]);

        /**
         * Get keys
         */
        let getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

        expect(getKeys1).toBeArray();

        expect(getKeys1).toContain(set.params[1]);

        /**
         * Remove item
         */
        const removeItem1 = UtilsCookie.removeItem.apply(UtilsCookie, set.params.slice(0, 2));

        getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

        expect(typeof(removeItem1)).toEqual("boolean");

        expect(removeItem1).toEqual(true);
        expect(getKeys1).not.toContain(set.params[1]);

        /**
         * Clean items
         */
        setItem1 = UtilsCookie.setItem.apply(UtilsCookie, set.params);
        getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

        const clear1 = UtilsCookie.clear.apply(UtilsCookie, set.params.slice(0, 1));

        const getKeys2 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

        expect(typeof(clear1)).toEqual("boolean");

        expect(clear1).toEqual(true);
        expect(getKeys2).not.toContain(set.params[1]);
      }
    }
  };

  it("UtilsCookie", () => {
    expect(typeof(UtilsCookie)).toEqual("function");
  });

  it("UtilsCookie.isSupported", () => {
    const isSupported1 = UtilsCookie.isSupported();
    const isSupported2 = Utils.Cookie.isSupported();

    expect(isSupported1).toEqual(isSupported2);

    expect(typeof(isSupported1)).toEqual("boolean");

    expect(isSupported1).toEqual(true);
  });

  it([
    "UtilsCookie.setItem",
    "UtilsCookie.getItem",
    "UtilsCookie.removeItem",
    "UtilsCookie.getKeys",
    "UtilsCookie.clear",
  ].join("\r\n"), () => {
    test();
  });
});
