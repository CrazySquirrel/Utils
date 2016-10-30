"use strict";
declare var require: any;
require("./index.html");

let Utils = require("../../lib/Utils.js");

for (let prop in Utils) {
    if (Utils.hasOwnProperty(prop)) {
        let isClass = false;
        for (let prop2 in Utils[prop]) {
            if (Utils[prop].hasOwnProperty(prop2)) {
                isClass = true;
                window.document.write("<b>Utils." + prop + "." + prop2 + "</b> <br/>");
            }
        }
        if (!isClass) {
            window.document.write("<b>Utils." + prop + "</b> <br/>");
        }
    }
}