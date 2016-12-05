"use strict";

declare var describe: any;
declare var it: any;
declare var expect: any;

const URL = require("url");

import Utils from "../lib/Utils";
import UtilsCookie from "../lib/UtilsCookie";

describe("UtilsCookie", () => {

    let test = () => {
        let now = (new Date()).getTime();
        let paramsValues = [undefined, false, true, 30, "value", "/", "test", location.hostname];
        let dataSet = [];
        for (let x1 of paramsValues) {
            for (let x2 of paramsValues) {
                for (let x3 of paramsValues) {
                    for (let x4 of paramsValues) {
                        for (let x5 of paramsValues) {
                            for (let x6 of paramsValues) {
                                for (let x7 of paramsValues) {
                                    if (
                                        [x2, x3, x4, x5, x6, x7].indexOf(x1) === -1 &&
                                        [x1, x3, x4, x5, x6, x7].indexOf(x2) === -1 &&
                                        [x1, x2, x4, x5, x6, x7].indexOf(x3) === -1 &&
                                        [x1, x2, x3, x5, x6, x7].indexOf(x4) === -1 &&
                                        [x1, x2, x3, x4, x6, x7].indexOf(x5) === -1 &&
                                        [x1, x2, x3, x4, x5, x7].indexOf(x6) === -1 &&
                                        [x1, x2, x3, x4, x5, x6].indexOf(x7) === -1
                                    ) {
                                        let params = [x1, x2, x3, x4, x5, x6, x7];
                                        let cond = (
                                            typeof x1 === "boolean" &&
                                            (
                                                typeof x2 === "string" &&
                                                UtilsCookie.regValidKey.test(x2)
                                            ) &&
                                            typeof x3 === "string" &&
                                            (
                                                typeof x4 === "number" &&
                                                x4 < 365
                                            ) &&
                                            typeof x5 === "string" &&
                                            (
                                                typeof x6 === "string" &&
                                                x6.indexOf(location.hostname) !== -1
                                            ) &&
                                            (
                                                typeof x7 === "boolean" &&
                                                x7 === (location.protocol === "https:")
                                            )
                                        );
                                        if (cond) {
                                            let u = URL.parse("http://" + x6 + x5);
                                            if (
                                                u.hostname !== x6 ||
                                                u.path !== x5
                                            ) {
                                                cond = false;
                                            }
                                        }
                                        dataSet.push({
                                            params: params,
                                            result: cond
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let set of dataSet) {
            /**
             * Set data
             */
            let setItem1 = UtilsCookie.setItem.apply(UtilsCookie, set.params);
            let setItem2 = Utils.Cookie.setItem.apply(UtilsCookie, set.params);

            expect(setItem1).toEqual(setItem2);

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
                let getItem1 = UtilsCookie.getItem.apply(UtilsCookie, set.params.slice(0, 2));
                let getItem2 = Utils.Cookie.getItem.apply(UtilsCookie, set.params.slice(0, 2));

                expect(getItem1).toEqual(getItem2);

                expect(typeof(getItem1)).toEqual("string");
                expect(getItem1).toEqual(set.params[2]);

                /**
                 * Get keys
                 */
                let getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));
                let getKeys2 = Utils.Cookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

                expect(getKeys1).toEqual(getKeys2);

                expect(getKeys1).toBeArray();

                expect(getKeys1).toContain(set.params[1]);

                /**
                 * Remove item
                 */
                let removeItem1 = UtilsCookie.removeItem.apply(UtilsCookie, set.params.slice(0, 2));
                let removeItem2 = Utils.Cookie.removeItem.apply(UtilsCookie, set.params.slice(0, 2));

                getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

                expect(removeItem1).toEqual(removeItem2);

                expect(typeof(removeItem1)).toEqual("boolean");

                expect(removeItem1).toEqual(true);
                expect(getKeys1).not.toContain(set.params[1]);

                /**
                 * Clean items
                 */
                setItem1 = UtilsCookie.setItem.apply(UtilsCookie, set.params);
                getKeys1 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

                let clear1 = UtilsCookie.clear.apply(UtilsCookie, set.params.slice(0, 1));
                let clear2 = Utils.Cookie.clear.apply(UtilsCookie, set.params.slice(0, 1));

                getKeys2 = UtilsCookie.getKeys.apply(UtilsCookie, set.params.slice(0, 1));

                expect(clear1).toEqual(clear2);

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
        let isSupported1 = UtilsCookie.isSupported();
        let isSupported2 = Utils.Cookie.isSupported();

        expect(isSupported1).toEqual(isSupported2);

        expect(typeof(isSupported1)).toEqual("boolean");

        expect(isSupported1).toEqual(true);
    });

    it([
        "UtilsCookie.setItem",
        "UtilsCookie.getItem",
        "UtilsCookie.removeItem",
        "UtilsCookie.getKeys",
        "UtilsCookie.clear"
    ].join("\r\n"), () => {
        test();
    });
    /*
     it("UtilsCookie.getItem", () => {
     test();
     });

     it("UtilsCookie.removeItem", () => {
     test();
     });

     it("UtilsCookie.getKeys", () => {
     test();
     });

     it("UtilsCookie.clear", () => {
     test();
     });
     */
});