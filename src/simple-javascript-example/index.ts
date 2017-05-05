"use strict";
require("./index.html");

let Utils = require("../../lib/Utils.ts");

function dump(classFunction, pref) {
  window.document.write("<b>" + pref + classFunction.name + "</b> <br/>");
  const keys = Object.keys(classFunction);
  if (keys.length > 0 && keys[0] !== "0") {
    for (const prop of keys) {
      dump(classFunction[prop], pref + classFunction.name + ".");
    }
  }
}

dump(Utils, "");
