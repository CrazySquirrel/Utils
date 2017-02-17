"use strict";
declare let require: any;
require("./index.html");

let Utils = require("../../lib/Utils.ts");

function dump(classFunction, pref) {
  window.document.write("<b>" + pref + classFunction.name + "</b> <br/>");
  let keys = Object.keys(classFunction);
  if (keys.length > 0 && keys[0] !== "0") {
    for (let prop of keys) {
      dump(classFunction[prop], pref + classFunction.name + ".");
    }
  }
}
dump(Utils, "");