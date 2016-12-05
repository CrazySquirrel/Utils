(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Utils", [], factory);
	else if(typeof exports === 'object')
		exports["Utils"] = factory();
	else
		root["Utils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsAnimation = __webpack_require__(6);
	
	var _UtilsAnimation2 = _interopRequireDefault(_UtilsAnimation);
	
	var _UtilsBrowser = __webpack_require__(8);
	
	var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
	
	var _UtilsCookie = __webpack_require__(9);
	
	var _UtilsCookie2 = _interopRequireDefault(_UtilsCookie);
	
	var _UtilsDocument = __webpack_require__(16);
	
	var _UtilsDocument2 = _interopRequireDefault(_UtilsDocument);
	
	var _UtilsDOM = __webpack_require__(18);
	
	var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
	
	var _UtilsMouse = __webpack_require__(19);
	
	var _UtilsMouse2 = _interopRequireDefault(_UtilsMouse);
	
	var _UtilsScreen = __webpack_require__(20);
	
	var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
	
	var _UtilsSystem = __webpack_require__(21);
	
	var _UtilsSystem2 = _interopRequireDefault(_UtilsSystem);
	
	var _UtilsUser = __webpack_require__(22);
	
	var _UtilsUser2 = _interopRequireDefault(_UtilsUser);
	
	var _UtilsWindow = __webpack_require__(17);
	
	var _UtilsWindow2 = _interopRequireDefault(_UtilsWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Global Utils class
	 */
	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }
	
	    Utils.warn = function warn(messange) {
	        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === "object") {
	            if (typeof console.warn === "function") {
	                //console.warn(messange);
	                return messange;
	            } else if (typeof console.log === "function") {
	                //console.log(messange);
	                return messange;
	            }
	        }
	    };
	    /**
	     * @deprecated Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.
	     */
	
	
	    Utils.getBoundingClientRect = function getBoundingClientRect(domNode) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	        var showForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        Utils.warn("Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.");
	        return Utils.DOM.getBoundingClientRect(domNode, domDocument, showForce);
	    };
	
	    /**
	     * @deprecated Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.
	     */
	    Utils.findElementPosition = function findElementPosition(domNode) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	        var showForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        Utils.warn("Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.");
	        return Utils.DOM.findElementPosition(domNode, domDocument, showForce);
	    };
	    /**
	     * Transfer static methods into the object
	     * @param realObject
	     * @param className
	     */
	
	
	    Utils.implementationStaticMethods = function implementationStaticMethods(realObject, className) {
	        if (!!realObject && (typeof realObject === "undefined" ? "undefined" : _typeof(realObject)) === "object") {
	            (function () {
	                var staticClass = realObject.constructor;
	                if (typeof staticClass === "function") {
	                    var methods = Object.keys(staticClass);
	                    if (methods && methods.length > 0) {
	                        var _loop = function _loop() {
	                            if (_isArray) {
	                                if (_i >= _iterator.length) return "break";
	                                _ref = _iterator[_i++];
	                            } else {
	                                _i = _iterator.next();
	                                if (_i.done) return "break";
	                                _ref = _i.value;
	                            }
	
	                            var method = _ref;
	
	                            if (typeof realObject[method] === "undefined") {
	                                realObject[method] = function () {
	                                    if (typeof staticClass !== "undefined") {
	                                        Utils.warn("That method was deprecated and soon will be removed. Please use " + (className || staticClass && staticClass.name || "Unknown") + "." + method + " method.");
	                                    }
	                                    return staticClass[method].apply(staticClass, arguments);
	                                };
	                            }
	                        };
	
	                        for (var _iterator = methods, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	                            var _ref;
	
	                            var _ret2 = _loop();
	
	                            if (_ret2 === "break") break;
	                        }
	                    }
	                }
	            })();
	        }
	    };
	    /**
	     * Get call stack trace
	     * @return Array<Object>
	     */
	
	
	    Utils.stack = function stack() {
	        var e = new Error();
	        return e && e.stack && e.stack.split("\n").slice(5).map(function (s) {
	            if (!s) {
	                return {};
	            }
	            var match = /^(.*)@(.*)\.js:([0-9]+):([0-9]+)$/ig.exec(s);
	            if (match) {
	                if (match[1]) {
	                    match[1] = /([^\/<]+)/ig.exec(match[1]);
	                    if (match[1]) {
	                        match[1] = match[1][0];
	                    }
	                }
	                return {
	                    column: match[4] || "",
	                    file: match[2] || "",
	                    line: match[3] || "",
	                    method: match[1] || ""
	                };
	            }
	            match = /^(.*)@(http|https):([^:]+):([0-9]+):([0-9]+)$/ig.exec(s);
	            if (match) {
	                return {
	                    column: match[5] || "",
	                    file: match[3] || "",
	                    line: match[4] || "",
	                    method: match[1] + ":" + match[2] || ""
	                };
	            }
	            match = /^(.*)@(.*):([0-9]+):([0-9]+)$/ig.exec(s);
	            if (match) {
	                return {
	                    column: match[4] || "",
	                    file: match[2] || "",
	                    line: match[3] || "",
	                    method: match[1] || ""
	                };
	            }
	            match = /^\s+at\s([^(]+)\s\((.*):([0-9]+):([0-9]+)\)$/ig.exec(s);
	            if (match) {
	                return {
	                    column: match[4] || "",
	                    file: match[2] || "",
	                    line: match[3] || "",
	                    method: match[1] || ""
	                };
	            }
	            match = /^\s+at\s(.*):([0-9]+):([0-9]+)$/ig.exec(s);
	            if (match) {
	                return {
	                    column: match[3] || "",
	                    file: match[1] || "",
	                    line: match[2] || "",
	                    method: ""
	                };
	            }
	            return s;
	        }) || [];
	    };
	    /**
	     * Get random ID
	     * @return {string}
	     */
	
	
	    Utils.getUID = function getUID() {
	        return Math.random().toString(36).substring(2);
	    };
	
	    return Utils;
	}();
	
	exports.default = Utils;
	
	Utils.Animation = _UtilsAnimation2.default;
	Utils.Browser = _UtilsBrowser2.default;
	Utils.Cookie = _UtilsCookie2.default;
	Utils.DOM = _UtilsDOM2.default;
	Utils.Document = _UtilsDocument2.default;
	Utils.Mouse = _UtilsMouse2.default;
	Utils.Screen = _UtilsScreen2.default;
	Utils.System = _UtilsSystem2.default;
	Utils.User = _UtilsUser2.default;
	Utils.Window = _UtilsWindow2.default;
	module.exports = Utils;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _UtilsAnimationEasing = __webpack_require__(7);
	
	var _UtilsAnimationEasing2 = _interopRequireDefault(_UtilsAnimationEasing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Animation = function Animation() {
	  _classCallCheck(this, Animation);
	};
	
	exports.default = Animation;
	
	Animation.Easing = _UtilsAnimationEasing2.default;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Different time animation functions
	 */
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Easing = function () {
	    function Easing() {
	        _classCallCheck(this, Easing);
	    }
	
	    Easing.isValidParams = function isValidParams(t, b, c, d, s) {
	        return typeof t === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number" && (typeof s === "undefined" || typeof s === "number") && t < d;
	    };
	
	    Easing.swing = function swing(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return Easing[Easing.def](t, b, c, d);
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInQuad = function easeInQuad(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * (t /= d) * t + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutQuad = function easeOutQuad(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return -c * (t /= d) * (t - 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutQuad = function easeInOutQuad(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d / 2) < 1) {
	                return c / 2 * t * t + b;
	            }
	            return -c / 2 * (--t * (t - 2) - 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInCubic = function easeInCubic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * (t /= d) * t * t + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutCubic = function easeOutCubic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * ((t = t / d - 1) * t * t + 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d / 2) < 1) {
	                return c / 2 * t * t * t + b;
	            }
	            return c / 2 * ((t -= 2) * t * t + 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInQuart = function easeInQuart(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * (t /= d) * t * t * t + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutQuart = function easeOutQuart(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutQuart = function easeInOutQuart(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d / 2) < 1) {
	                return c / 2 * t * t * t * t + b;
	            }
	            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInQuint = function easeInQuint(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * (t /= d) * t * t * t * t + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutQuint = function easeOutQuint(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutQuint = function easeInOutQuint(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d / 2) < 1) {
	                return c / 2 * t * t * t * t * t + b;
	            }
	            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInSine = function easeInSine(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutSine = function easeOutSine(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * Math.sin(t / d * (Math.PI / 2)) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutSine = function easeInOutSine(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInExpo = function easeInExpo(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutExpo = function easeOutExpo(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutExpo = function easeInOutExpo(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if (t === 0) {
	                return b;
	            }
	            if (t === d) {
	                return b + c;
	            }
	            if ((t /= d / 2) < 1) {
	                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	            }
	            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInCirc = function easeInCirc(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutCirc = function easeOutCirc(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutCirc = function easeInOutCirc(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d / 2) < 1) {
	                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	            }
	            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInElastic = function easeInElastic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            var s = 1.70158;
	            var p = 0;
	            var a = c;
	            if (t === 0) {
	                return b;
	            }
	            if ((t /= d) === 1) {
	                return b + c;
	            }
	            if (!p) {
	                p = d * .3;
	            }
	            if (a < Math.abs(c)) {
	                a = c;
	                s = p / 4;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutElastic = function easeOutElastic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            var s = 1.70158;
	            var p = 0;
	            var a = c;
	            if (t === 0) {
	                return b;
	            }
	            if ((t /= d) === 1) {
	                return b + c;
	            }
	            if (!p) {
	                p = d * .3;
	            }
	            if (a < Math.abs(c)) {
	                a = c;
	                s = p / 4;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutElastic = function easeInOutElastic(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            var s = 1.70158;
	            var p = 0;
	            var a = c;
	            if (t === 0) {
	                return b;
	            }
	            if ((t /= d / 2) === 2) {
	                return b + c;
	            }
	            if (!p) {
	                p = d * (.3 * 1.5);
	            }
	            if (a < Math.abs(c)) {
	                a = c;
	                s = p / 4;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            if (t < 1) {
	                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	            }
	            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInBack = function easeInBack(t, b, c, d, s) {
	        if (Easing.isValidParams(t, b, c, d, s)) {
	            if (s === undefined) {
	                s = 1.70158;
	            }
	            return c * (t /= d) * t * ((s + 1) * t - s) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutBack = function easeOutBack(t, b, c, d, s) {
	        if (Easing.isValidParams(t, b, c, d, s)) {
	            if (s === undefined) {
	                s = 1.70158;
	            }
	            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutBack = function easeInOutBack(t, b, c, d, s) {
	        if (Easing.isValidParams(t, b, c, d, s)) {
	            if (s === undefined) {
	                s = 1.70158;
	            }
	            if ((t /= d / 2) < 1) {
	                return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	            }
	            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInBounce = function easeInBounce(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            return c - Easing.easeOutBounce(d - t, 0, c, d) + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeOutBounce = function easeOutBounce(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if ((t /= d) < 1 / 2.75) {
	                return c * (7.5625 * t * t) + b;
	            } else if (t < 2 / 2.75) {
	                return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
	            } else if (t < 2.5 / 2.75) {
	                return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
	            } else {
	                return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
	            }
	        } else {
	            return NaN;
	        }
	    };
	
	    Easing.easeInOutBounce = function easeInOutBounce(t, b, c, d) {
	        if (Easing.isValidParams(t, b, c, d)) {
	            if (t < d / 2) {
	                return Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;
	            }
	            return Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	        } else {
	            return NaN;
	        }
	    };
	
	    return Easing;
	}();
	
	exports.default = Easing;
	
	Easing.def = "easeOutQuad";

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class for working with browser
	 */
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Browser = function () {
	    function Browser() {
	        _classCallCheck(this, Browser);
	    }
	
	    /**
	     * Get browser info
	     * @return {{browser: string, mobile: boolean, version: string}}
	     */
	    Browser.getInfo = function getInfo() {
	        return {
	            browser: Browser.getName(),
	            mobile: Browser.isMobile(),
	            version: Browser.getVersion()
	        };
	    };
	    /**
	     * Get browser name
	     * @return {string}
	     */
	
	
	    Browser.getName = function getName() {
	        var browser = void 0;
	        if (Browser.isOpera()) {
	            browser = "Opera";
	        } else if (Browser.isOperaNew()) {
	            browser = "Opera";
	        } else if (Browser.isMSIE()) {
	            browser = "Microsoft Internet Explorer";
	        } else if (Browser.isMSIENew()) {
	            browser = "Microsoft Internet Explorer";
	        } else if (Browser.isChrome()) {
	            browser = "Chrome";
	        } else if (Browser.isFirefox()) {
	            browser = "Firefox";
	        } else if (Browser.isSafari()) {
	            browser = "Safari";
	        } else if (Browser.isOther()) {
	            browser = Browser.getOtherName();
	        }
	        return browser;
	    };
	    /**
	     * Get browser version
	     * @return {string}
	     */
	
	
	    Browser.getVersion = function getVersion() {
	        var version = void 0;
	        if (Browser.isOpera()) {
	            version = Browser.getOperaVersion();
	        } else if (Browser.isOperaNew()) {
	            version = Browser.getOperaNewVersion();
	        } else if (Browser.isMSIE()) {
	            version = Browser.getMSIEVersion();
	        } else if (Browser.isMSIENew()) {
	            version = Browser.getMSIENewVersion();
	        } else if (Browser.isChrome()) {
	            version = Browser.getChromeVersion();
	        } else if (Browser.isFirefox()) {
	            version = Browser.getFirefoxVersion();
	        } else if (Browser.isSafari()) {
	            version = Browser.getSafariVersion();
	        } else if (Browser.isOther()) {
	            version = Browser.getOtherVersion();
	        }
	        return version;
	    };
	    /**
	     * Trim browser version
	     * @param version
	     * @return {string}
	     */
	
	
	    Browser.trimVersion = function trimVersion(version) {
	        if (typeof version === "string") {
	            var chars = [";", " ", ")"];
	            for (var _iterator = chars, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	                var _ref;
	
	                if (_isArray) {
	                    if (_i >= _iterator.length) break;
	                    _ref = _iterator[_i++];
	                } else {
	                    _i = _iterator.next();
	                    if (_i.done) break;
	                    _ref = _i.value;
	                }
	
	                var char = _ref;
	
	                var ix = version.indexOf(char);
	                if (ix !== -1) {
	                    version = version.substring(0, ix);
	                }
	            }
	            return version;
	        } else {
	            return "";
	        }
	    };
	    /**
	     * Check if it is mobile
	     * @return {boolean}
	     */
	
	
	    Browser.isMobile = function isMobile() {
	        return (/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion)
	        );
	    };
	    /**
	     * Check if it is opera browser
	     * @return {boolean}
	     */
	
	
	    Browser.isOpera = function isOpera() {
	        return navigator.userAgent.indexOf("Opera") !== -1;
	    };
	    /**
	     * Get opera browser version
	     * @return {string}
	     */
	
	
	    Browser.getOperaVersion = function getOperaVersion() {
	        var verOffset = navigator.userAgent.indexOf("Opera");
	        var version = navigator.userAgent.substring(verOffset + 6);
	        verOffset = navigator.userAgent.indexOf("Version");
	        if (verOffset !== -1) {
	            version = navigator.userAgent.substring(verOffset + 8);
	        }
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is opera new browser
	     * @return {boolean}
	     */
	
	
	    Browser.isOperaNew = function isOperaNew() {
	        return navigator.userAgent.indexOf("OPR") !== -1;
	    };
	    /**
	     * Get opera new browser version
	     * @return {string}
	     */
	
	
	    Browser.getOperaNewVersion = function getOperaNewVersion() {
	        var verOffset = navigator.userAgent.indexOf("OPR");
	        var version = navigator.userAgent.substring(verOffset + 4);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is msie browser
	     * @return {boolean}
	     */
	
	
	    Browser.isMSIE = function isMSIE() {
	        return navigator.userAgent.indexOf("MSIE") !== -1;
	    };
	    /**
	     * Get msie browser version
	     * @return {string}
	     */
	
	
	    Browser.getMSIEVersion = function getMSIEVersion() {
	        var verOffset = navigator.userAgent.indexOf("MSIE");
	        var version = navigator.userAgent.substring(verOffset + 5);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is msie new browser
	     * @return {boolean}
	     */
	
	
	    Browser.isMSIENew = function isMSIENew() {
	        return navigator.userAgent.indexOf("Trident/") !== -1;
	    };
	    /**
	     * Get msie new browser version
	     * @return {string}
	     */
	
	
	    Browser.getMSIENewVersion = function getMSIENewVersion() {
	        var version = navigator.userAgent.substring(navigator.userAgent.indexOf("rv:") + 3);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is chrome browser
	     * @return {boolean}
	     */
	
	
	    Browser.isChrome = function isChrome() {
	        return navigator.userAgent.indexOf("Chrome") !== -1;
	    };
	    /**
	     * Get chrome browser version
	     * @return {string}
	     */
	
	
	    Browser.getChromeVersion = function getChromeVersion() {
	        var verOffset = navigator.userAgent.indexOf("Chrome");
	        var version = navigator.userAgent.substring(verOffset + 7);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is safari browser
	     * @return {boolean}
	     */
	
	
	    Browser.isSafari = function isSafari() {
	        return navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1;
	    };
	    /**
	     * Get safari browser version
	     * @return {string}
	     */
	
	
	    Browser.getSafariVersion = function getSafariVersion() {
	        var verOffset = navigator.userAgent.indexOf("Safari");
	        var version = navigator.userAgent.substring(verOffset + 7);
	        verOffset = navigator.userAgent.indexOf("Version");
	        if (verOffset !== -1) {
	            version = navigator.userAgent.substring(verOffset + 8);
	        }
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is firefox browser
	     * @return {boolean}
	     */
	
	
	    Browser.isFirefox = function isFirefox() {
	        return navigator.userAgent.indexOf("Firefox") !== -1;
	    };
	    /**
	     * Get firefox browser version
	     * @return {string}
	     */
	
	
	    Browser.getFirefoxVersion = function getFirefoxVersion() {
	        var verOffset = navigator.userAgent.indexOf("Firefox");
	        var version = navigator.userAgent.substring(verOffset + 8);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check if it is other browser
	     * @return {boolean}
	     */
	
	
	    Browser.isOther = function isOther() {
	        var nameOffset = navigator.userAgent.lastIndexOf(" ") + 1;
	        var verOffset = navigator.userAgent.lastIndexOf("/");
	        return nameOffset < verOffset;
	    };
	    /**
	     * Get other browser name
	     * @return {string}
	     */
	
	
	    Browser.getOtherName = function getOtherName() {
	        var nameOffset = navigator.userAgent.lastIndexOf(" ") + 1;
	        var verOffset = navigator.userAgent.lastIndexOf("/");
	        var browser = navigator.userAgent.substring(nameOffset, verOffset);
	        if (browser.toLowerCase() === browser.toUpperCase()) {
	            browser = navigator.appName;
	        }
	        return browser;
	    };
	    /**
	     * Get other browser version
	     * @return {string}
	     */
	
	
	    Browser.getOtherVersion = function getOtherVersion() {
	        var nameOffset = navigator.userAgent.lastIndexOf(" ") + 1;
	        var verOffset = navigator.userAgent.lastIndexOf("/");
	        var version = navigator.userAgent.substring(verOffset + 1);
	        return Browser.trimVersion(version);
	    };
	    /**
	     * Check browser support
	     * @return {boolean}
	     */
	
	
	    Browser.isSupported = function isSupported() {
	        return !Browser.isMSIE() || parseInt(Browser.getMSIEVersion(), 10) > 8;
	    };
	    /**
	     * Check if it is WebKit browser
	     * @return {boolean}
	     */
	
	
	    Browser.isWebKit = function isWebKit() {
	        return navigator.userAgent.indexOf("AppleWebKit/") !== -1;
	    };
	    /**
	     * Check if it is Gecko browser
	     * @return {boolean}
	     */
	
	
	    Browser.isGecko = function isGecko() {
	        return navigator.userAgent.indexOf("Gecko") > -1 && navigator.userAgent.indexOf("KHTML") === -1;
	    };
	    /**
	     * Check if it is Android browser
	     * @return {boolean}
	     */
	
	
	    Browser.isAndroid = function isAndroid() {
	        return navigator.userAgent.indexOf("Android") > -1;
	    };
	    /**
	     * Check if it is Linux browser
	     * @return {boolean}
	     */
	
	
	    Browser.isLinux = function isLinux() {
	        return navigator.userAgent.indexOf("Linux") > -1;
	    };
	    /**
	     * Check if it is iPad browser
	     * @return {boolean}
	     */
	
	
	    Browser.isTabletPC = function isTabletPC() {
	        return navigator.userAgent.indexOf("iPad") > -1;
	    };
	
	    return Browser;
	}();
	
	exports.default = Browser;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var URL = __webpack_require__(10);
	/**
	 * Class for working with cookie
	 */
	
	var Cookie = function () {
	  function Cookie() {
	    _classCallCheck(this, Cookie);
	  }
	
	  /**
	   * The method returns the flag whether supported this storage type or not
	   * @returns {boolean}
	   */
	  Cookie.isSupported = function isSupported() {
	    return (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && typeof document.cookie === "string";
	  };
	  /**
	   * The method sets the value and returns true if it has been set
	   * @param checkSupport {boolean}
	   * @param key {string}
	   * @param value {string}
	   * @param expires {number}
	   * @param path {string}
	   * @param domain {string}
	   * @param secure {boolean}
	   * @return {boolean}
	   */
	
	
	  Cookie.setItem = function setItem(checkSupport, key, value) {
	    var expires = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
	    var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "/";
	    var domain = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : location.hostname;
	    var secure = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : location.protocol === "https:";
	
	    try {
	      /**
	       * Validate input data
	       */
	      if (typeof checkSupport === "boolean" && typeof key === "string" && Cookie.regValidKey.test(key) && typeof value === "string" && typeof expires === "number" && expires < 365 && typeof path === "string" && typeof domain === "string" && domain.indexOf(location.hostname) !== -1 && typeof secure === "boolean" && secure === (location.protocol === "https:")) {
	        /**
	         * Validate input data
	         */
	        var u = URL.parse("http://" + domain + path);
	        if (u.hostname === domain || u.path === path) {
	          /**
	           * If that store is supported
	           */
	          if (!checkSupport || Cookie.isSupported()) {
	            /**
	             * Save cookies for 30 days
	             * @type {Date}
	             */
	            var date = new Date();
	            date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
	            var exp = date.toUTCString();
	            /**
	             * Encode value for store
	             * @type {string}
	             */
	            value = encodeURIComponent(value);
	            /**
	             * Writing value to the document cookie storage
	             * @type {string}
	             */
	            document.cookie = key + "=" + value + (exp ? "; expires=" + exp : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
	            /**
	             * If all ok return true
	             */
	            return Cookie.getItem(checkSupport, key) === value;
	          } else {
	            /**
	             * If cookie does not supported return false
	             */
	            return false;
	          }
	        } else {
	          /**
	           * If input data is not valid
	           */
	          return false;
	        }
	      } else {
	        /**
	         * If input data is not valid
	         */
	        return false;
	      }
	    } catch (e) {
	      /**
	       * If something goes wrong return false
	       */
	      return false;
	    }
	  };
	  /**
	   * The method reads the value and returns it or returns false if the value does not exist
	   * @param checkSupport {boolean}
	   * @param key {string}
	   * @returns {string|boolean}
	   */
	
	
	  Cookie.getItem = function getItem(checkSupport, key) {
	    try {
	      /**
	       * Validate input data
	       */
	      if (typeof checkSupport === "boolean" && typeof key === "string" && Cookie.regValidKey.test(key)) {
	        /**
	         * If that store is supported
	         */
	        if (!checkSupport || Cookie.isSupported()) {
	          /**
	           * Get the array from document cookie split by ;
	           * @type {string[]}
	           */
	          var arrCookie = document.cookie.split(";");
	          /**
	           * Iterate through the cookies
	           */
	          for (var _iterator = arrCookie, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	              if (_i >= _iterator.length) break;
	              _ref = _iterator[_i++];
	            } else {
	              _i = _iterator.next();
	              if (_i.done) break;
	              _ref = _i.value;
	            }
	
	            var i = _ref;
	
	            /**
	             * Trim and split each cookie by = for key value pare
	             * @type {string[]}
	             */
	            var v = i.trim().split("=", 2);
	            /**
	             * If it is correct cookie key return the value
	             */
	            if (v[0] === key) {
	              /**
	               * If the value was found return the value
	               */
	              return decodeURIComponent(v[1]);
	            }
	          }
	          /**
	           * If the value was not found return false
	           */
	          return false;
	        } else {
	          /**
	           * If cookie does not supported return false
	           */
	          return false;
	        }
	      } else {
	        /**
	         * If input data is not valid
	         */
	        return false;
	      }
	    } catch (e) {
	      /**
	       * If something goes wrong return false
	       */
	      return false;
	    }
	  };
	  /**
	   * The method removes the value and return true if the value does not exist
	   * @param checkSupport {boolean}
	   * @param key {string}
	   * @returns {boolean}
	   */
	
	
	  Cookie.removeItem = function removeItem(checkSupport, key) {
	    try {
	      /**
	       * Validate input data
	       */
	      if (typeof checkSupport === "boolean" && typeof key === "string" && Cookie.regValidKey.test(key)) {
	        /**
	         * If that store is supported
	         */
	        if (!checkSupport || Cookie.isSupported()) {
	          /**
	           * Set empty overdue value by key
	           */
	          Cookie.setItem(checkSupport, key, "", -1);
	          /**
	           * If all ok return true
	           */
	          return Cookie.getItem(checkSupport, key) === false;
	        } else {
	          /**
	           * If cookie does not supported return false
	           */
	          return false;
	        }
	      } else {
	        /**
	         * If input data is not valid
	         */
	        return false;
	      }
	    } catch (e) {
	      /**
	       * If something goes wrong return false
	       */
	      return false;
	    }
	  };
	  /**
	   * The method returns the array of string of available keys
	   * @param checkSupport {boolean}
	   * @returns {string[]}
	   */
	
	
	  Cookie.getKeys = function getKeys(checkSupport) {
	    try {
	      /**
	       * Validate input data
	       */
	      if (typeof checkSupport === "boolean") {
	        /**
	         * If that store is supported
	         */
	        if (!checkSupport || Cookie.isSupported()) {
	          /**
	           * The array of available keys
	           * @type {Array}
	           */
	          var arrKeys = [];
	          /**
	           * Get the array from document cookie split by ;
	           * @type {string[]}
	           */
	          var arrCookie = document.cookie.split(";");
	          /**
	           * Iterate through the cookies
	           */
	          for (var _iterator2 = arrCookie, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	              if (_i2 >= _iterator2.length) break;
	              _ref2 = _iterator2[_i2++];
	            } else {
	              _i2 = _iterator2.next();
	              if (_i2.done) break;
	              _ref2 = _i2.value;
	            }
	
	            var i = _ref2;
	
	            /**
	             * Trim and split each cookie by = for key value pare
	             * @type {string[]}
	             */
	            var v = i.trim().split("=", 2);
	            /**
	             * Add key to the list
	             */
	            if (v[0]) {
	              arrKeys.push(v[0]);
	            }
	          }
	          return arrKeys;
	        } else {
	          /**
	           * If cookie does not supported return false
	           */
	          return [];
	        }
	      } else {
	        /**
	         * If input data is not valid
	         */
	        return [];
	      }
	    } catch (e) {
	      /**
	       * If something goes wrong return false
	       */
	      return [];
	    }
	  };
	  /**
	   * The method cleans the storage and return true if it is empty
	   * @param checkSupport {boolean}
	   * @returns {boolean}
	   */
	
	
	  Cookie.clear = function clear(checkSupport) {
	    try {
	      /**
	       * Validate input data
	       */
	      if (typeof checkSupport === "boolean") {
	        /**
	         * If that store is supported
	         */
	        if (!checkSupport || Cookie.isSupported()) {
	          var arrKeys = Cookie.getKeys(checkSupport);
	          if (arrKeys) {
	            for (var _iterator3 = arrKeys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	              var _ref3;
	
	              if (_isArray3) {
	                if (_i3 >= _iterator3.length) break;
	                _ref3 = _iterator3[_i3++];
	              } else {
	                _i3 = _iterator3.next();
	                if (_i3.done) break;
	                _ref3 = _i3.value;
	              }
	
	              var i = _ref3;
	
	              Cookie.removeItem(checkSupport, i);
	            }
	          }
	          /**
	           * If all ok return true
	           */
	          return Cookie.getKeys(checkSupport).length === 0;
	        } else {
	          /**
	           * If cookie does not supported return false
	           */
	          return true;
	        }
	      } else {
	        /**
	         * If input data is not valid
	         */
	        return false;
	      }
	    } catch (e) {
	      /**
	       * If something goes wrong return false
	       */
	      return false;
	    }
	  };
	
	  return Cookie;
	}();
	
	exports.default = Cookie;
	
	Cookie.regValidKey = new RegExp("([a-zA-Z0-9_-]{1,})", "i");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var punycode = __webpack_require__(11);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(13);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};
	
	function isString(arg) {
	  return typeof arg === "string";
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(14);
	exports.encode = exports.stringify = __webpack_require__(15);


/***/ },
/* 14 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _UtilsWindow = __webpack_require__(17);
	
	var _UtilsWindow2 = _interopRequireDefault(_UtilsWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class for working with document
	 */
	var Document = function () {
	    function Document() {
	        _classCallCheck(this, Document);
	    }
	
	    /**
	     * Get document height
	     * @returns {number}
	     */
	    Document.getHeight = function getHeight() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (_UtilsWindow2.default.isWindow(objWindow)) {
	            return Math.max(objWindow.document.body.scrollHeight, objWindow.document.documentElement.scrollHeight, objWindow.document.body.offsetHeight, objWindow.document.documentElement.offsetHeight, objWindow.document.body.clientHeight, objWindow.document.documentElement.clientHeight);
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get document width
	     * @returns {number}
	     */
	
	
	    Document.getWidth = function getWidth() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (_UtilsWindow2.default.isWindow(objWindow)) {
	            return Math.max(objWindow.document.body.scrollWidth, objWindow.document.documentElement.scrollWidth, objWindow.document.body.offsetWidth, objWindow.document.documentElement.offsetWidth, objWindow.document.body.clientWidth, objWindow.document.documentElement.clientWidth);
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get document top scroll
	     * @param objWindow
	     * @return {number}
	     */
	
	
	    Document.getScrollTop = function getScrollTop() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (_UtilsWindow2.default.isWindow(objWindow)) {
	            return objWindow.pageYOffset || objWindow.document.documentElement && objWindow.document.documentElement.scrollTop || objWindow.document.body && objWindow.document.body.scrollTop;
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get document left scroll
	     * @param objWindow
	     * @return {number}
	     */
	
	
	    Document.getScrollLeft = function getScrollLeft() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (_UtilsWindow2.default.isWindow(objWindow)) {
	            return objWindow.pageXOffset || objWindow.document.documentElement && objWindow.document.documentElement.scrollLeft || objWindow.document.body && objWindow.document.body.scrollLeft;
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get document scrolls
	     * @param objWindow
	     * @return {{left: number, top: number}}
	     */
	
	
	    Document.getScroll = function getScroll() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (_UtilsWindow2.default.isWindow(objWindow)) {
	            return {
	                left: Document.getScrollLeft(objWindow),
	                top: Document.getScrollTop(objWindow)
	            };
	        } else {
	            return {
	                left: NaN,
	                top: NaN
	            };
	        }
	    };
	
	    return Document;
	}();
	
	exports.default = Document;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class for working with window
	 */
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Window = function () {
	    function Window() {
	        _classCallCheck(this, Window);
	    }
	
	    /**
	     * Check if it is window
	     * @param objWindow
	     * @return {boolean}
	     */
	    Window.isWindow = function isWindow(objWindow) {
	        return objWindow && (typeof objWindow === "undefined" ? "undefined" : _typeof(objWindow)) === "object" && objWindow.document && _typeof(objWindow.document) === "object";
	    };
	    /**
	     * Get window height
	     * @param objWindow
	     * @return {number}
	     */
	
	
	    Window.getHeight = function getHeight() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (Window.isWindow(objWindow)) {
	            return objWindow.innerHeight || objWindow.document.documentElement.clientHeight || objWindow.document.body.clientHeight;
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get window width
	     * @param objWindow
	     * @return {number}
	     */
	
	
	    Window.getWidth = function getWidth() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        if (Window.isWindow(objWindow)) {
	            return objWindow.innerWidth || objWindow.document.documentElement.clientWidth || objWindow.document.body.clientWidth;
	        } else {
	            return NaN;
	        }
	    };
	    /**
	     * Get window sizes
	     * @return {{height: number, width: number}}
	     */
	
	
	    Window.getSizes = function getSizes() {
	        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
	
	        return {
	            height: Window.getHeight(objWindow),
	            width: Window.getWidth(objWindow)
	        };
	    };
	
	    return Window;
	}();
	
	exports.default = Window;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class for working with DOM
	 */
	var DOM = function () {
	    function DOM() {
	        _classCallCheck(this, DOM);
	    }
	
	    /**
	     * Check if variable is dom document
	     * @param domDocument
	     * @return {boolean}
	     */
	    DOM.isDOMDocument = function isDOMDocument(domDocument) {
	        return !(!domDocument || typeof domDocument === "boolean" || typeof domDocument === "number" || typeof domDocument === "string" || domDocument.nodeType !== 9);
	    };
	    /**
	     * Find and validate Node in DOM Document
	     * @param domNode
	     * @param domDocument
	     * @return {Element | boolean}
	     */
	
	
	    DOM.getDOMNode = function getDOMNode(domNode) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	
	        /**
	         * Check if domDocument is a valid variable
	         */
	        if (!DOM.isDOMDocument(domDocument)) {
	            return false;
	        }
	        /**
	         * Check if domNode is a valid variable
	         */
	        if (!domNode || typeof domNode === "boolean" || typeof domNode === "number" || typeof domNode === "undefined") {
	            return false;
	        }
	        /**
	         * If domNode is a string it might be an ID
	         */
	        if (typeof domNode === "string") {
	            domNode = domDocument.getElementById(domNode);
	        }
	        /**
	         * Check if domNode is a valid variable
	         */
	        if (!domNode || domNode.nodeType !== 1 || !domNode.parentNode || domNode.parentNode.nodeName === "HTML" || !domDocument.contains(domNode)) {
	            return false;
	        }
	        return domNode;
	    };
	    /**
	     * Get element sizes and position
	     * @param domNode
	     * @param domDocument
	     * @param showForce
	     * @return {{bottom: number, height: number, left: number, right: number, top: number, width: number}}
	     */
	
	
	    DOM.getBoundingClientRect = function getBoundingClientRect(domNode) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	        var showForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        /**
	         * Create result size and position object
	         */
	        var objRet = {
	            bottom: 0,
	            height: 0,
	            left: 0,
	            right: 0,
	            top: 0,
	            width: 0
	        };
	        domNode = DOM.getDOMNode(domNode, domDocument);
	        if (!domNode) {
	            _Utils2.default.warn("Utils.DOM.getBoundingClientRect: DOM element doesn't exist in that DOM Document");
	            return objRet;
	        }
	        showForce = !!showForce;
	        var styles = void 0;
	        if (showForce) {
	            styles = getComputedStyle(domNode);
	            if (styles && styles.display === "none") {
	                domNode.style.display = "block";
	            }
	        }
	        /**
	         * If default method is supported than use it
	         */
	        if (domNode.getBoundingClientRect) {
	            objRet = domNode.getBoundingClientRect();
	            /**
	             * IE hack
	             */
	            objRet = {
	                bottom: objRet.bottom,
	                height: objRet.height || domNode.clientHeight,
	                left: objRet.left,
	                right: objRet.right,
	                top: objRet.top,
	                width: objRet.width || domNode.clientWidth
	            };
	        } else {
	            /**
	             * Write the element in a temporary variable
	             */
	            var domElement = domNode;
	            /**
	             * Calculated basic parameters of the element
	             * @type {Object}
	             */
	            var objCoordinates = {
	                height: domElement.offsetHeight,
	                width: domElement.offsetWidth,
	                x: 0,
	                y: 0
	            };
	            /**
	             * Are passed on to all parents and take into account their offsets
	             */
	            while (domElement) {
	                objCoordinates.x += domElement.offsetLeft;
	                objCoordinates.y += domElement.offsetTop;
	                domElement = domElement.offsetParent;
	            }
	            /**
	             *
	             * @type {Object}
	             */
	            objRet = {
	                bottom: objCoordinates.y + objCoordinates.height,
	                height: objCoordinates.height,
	                left: objCoordinates.x,
	                right: objCoordinates.x + objCoordinates.width,
	                top: objCoordinates.y,
	                width: objCoordinates.width
	            };
	        }
	        if (showForce && domNode) {
	            domNode.style.display = "";
	        }
	        /**
	         * Return size and position of the element
	         */
	        return objRet;
	    };
	
	    /**
	     * Find element position
	     * @param domNode
	     * @param domDocument
	     * @param showForce
	     * @return {{top: number, left: number}}
	     */
	    DOM.findElementPosition = function findElementPosition(domNode) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	        var showForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        var objRet = {
	            left: 0,
	            top: 0
	        };
	        domNode = DOM.getDOMNode(domNode, domDocument);
	        if (!domNode) {
	            _Utils2.default.warn("Utils.DOM.findElementPosition: DOM element doesn't exist in that DOM Document");
	            return objRet;
	        }
	        showForce = !!showForce;
	        while (domNode) {
	            var styles = void 0;
	            if (showForce) {
	                styles = window.getComputedStyle(domNode);
	                if (styles && styles.display === "none") {
	                    domNode.style.display = "block";
	                }
	            }
	            objRet.left += domNode.offsetLeft;
	            objRet.top += domNode.offsetTop;
	            domNode = domNode.offsetParent;
	            if (showForce && domNode) {
	                domNode.style.display = "";
	            }
	        }
	        return objRet;
	    };
	    /**
	     * Add event listener
	     * @param obj
	     * @param name
	     * @param func
	     */
	
	
	    DOM.addEvent = function addEvent(obj, name, func) {
	        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.nodeType === 1 && obj.parentElement && obj.parentElement.nodeName !== "HTML" && typeof name === "string" && typeof func === "function") {
	            if (obj.addEventListener) {
	                obj.addEventListener(name, func, false);
	            } else if (obj.attachEvent) {
	                obj.attachEvent("on" + name, func);
	            }
	            return true;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Remove event listener
	     * @param obj
	     * @param name
	     * @param func
	     */
	
	
	    DOM.removeEvent = function removeEvent(obj, name, func) {
	        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.nodeType === 1 && obj.parentElement && obj.parentElement.nodeName !== "HTML" && typeof name === "string" && typeof func === "function") {
	            if (obj.removeEventListener) {
	                obj.removeEventListener(name, func, false);
	            } else if (obj.detachEvent) {
	                obj.detachEvent("on" + name, func);
	            }
	            return true;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Check if element has class name
	     * @param element
	     * @param className
	     * @return {boolean}
	     */
	
	
	    DOM.hasClassName = function hasClassName(element, className) {
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1 && element.parentElement && element.parentElement.nodeName !== "HTML") {
	            className = className.trim();
	            return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Add class name
	     * @param element
	     * @param className
	     * @return {HTMLElement}
	     */
	
	
	    DOM.addClassName = function addClassName(element, className) {
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1 && element.parentElement && element.parentElement.nodeName !== "HTML") {
	            className = className.trim();
	            if (!DOM.hasClassName(element, className)) {
	                var cl = element.className;
	                element.className = cl ? cl + " " + className : className;
	            }
	            return element;
	        } else {
	            return null;
	        }
	    };
	    /**
	     * Remove class name
	     * @param element
	     * @param className
	     * @return {HTMLElement}
	     */
	
	
	    DOM.removeClassName = function removeClassName(element, className) {
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1 && element.parentElement && element.parentElement.nodeName !== "HTML" && typeof element.className === "string") {
	            className = className.trim();
	            var classes = element.className.trim().split(" ");
	            for (var i = classes.length - 1; i >= 0; i--) {
	                classes[i] = classes[i].trim();
	                if (!classes[i] || classes[i] === className) {
	                    classes.splice(i, 1);
	                }
	            }
	            element.className = classes.join(" ");
	            return element;
	        } else {
	            return null;
	        }
	    };
	    /**
	     * Toggle class name
	     * @param element
	     * @param className
	     * @param toggle
	     * @return {HTMLElement}
	     */
	
	
	    DOM.toggleClassName = function toggleClassName(element, className, toggle) {
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && typeof toggle === "boolean" && element.nodeType === 1 && element.parentElement && element.parentElement.nodeName !== "HTML") {
	            className = className.trim();
	            if (toggle) {
	                DOM.addClassName(element, className);
	            } else {
	                DOM.removeClassName(element, className);
	            }
	            return element;
	        } else {
	            return null;
	        }
	    };
	    /**
	     * Replace class name
	     * @param element
	     * @param oldClassName
	     * @param newClassName
	     * @return {HTMLElement}
	     */
	
	
	    DOM.replaceClass = function replaceClass(element, oldClassName, newClassName) {
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof oldClassName === "string" && typeof newClassName === "string" && element.nodeType === 1 && element.parentElement && element.parentElement.nodeName !== "HTML") {
	            oldClassName = oldClassName.trim();
	            newClassName = newClassName.trim();
	            DOM.removeClassName(element, oldClassName);
	            DOM.addClassName(element, newClassName);
	            return element;
	        } else {
	            return null;
	        }
	    };
	    /**
	     * Get element by tag name and index
	     * @param tn
	     * @param domDocument
	     * @param index
	     * @return {Node}
	     */
	
	
	    DOM.getElementByTagName = function getElementByTagName(tn) {
	        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	        var index = arguments[2];
	
	        if (typeof tn === "string" && DOM.isDOMDocument(domDocument) && typeof index === "number") {
	            var els = domDocument.getElementsByTagName(tn);
	            return els[index] || null;
	        } else {
	            return null;
	        }
	    };
	    /**
	     * Get line height
	     * @return {number}
	     */
	
	
	    DOM.getLineHeight = function getLineHeight() {
	        var styles = getComputedStyle(document.body);
	        var lineHeight = styles.lineHeight;
	        var lineHeightDig = parseInt(lineHeight, 10);
	        var fontSize = styles.fontSize;
	        var fontSizeDig = parseInt(fontSize, 10);
	        if (isFinite(lineHeightDig)) {
	            return lineHeightDig;
	        } else {
	            return fontSizeDig;
	        }
	    };
	
	    return DOM;
	}();
	
	exports.default = DOM;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsDOM = __webpack_require__(18);
	
	var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
	
	var _UtilsWindow = __webpack_require__(17);
	
	var _UtilsWindow2 = _interopRequireDefault(_UtilsWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Mouse = function () {
	    function Mouse() {
	        _classCallCheck(this, Mouse);
	    }
	
	    /**
	     * Normalise mouse delta
	     * @param e
	     * @return {number}
	     */
	    Mouse.getWheelDelta = function getWheelDelta(e) {
	        if (e && (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && ("detail" in e || "wheelDelta" in e || "wheelDeltaY" in e || "wheelDeltaX" in e || "deltaY" in e || "deltaX" in e || "axis" in e || "deltaMode" in e)) {
	            var delta = void 0;
	            var deltaX = void 0;
	            var deltaY = void 0;
	            // Old school scrollwheel delta
	            if ("detail" in e) {
	                deltaY = e.detail * -1;
	            }
	            if ("wheelDelta" in e) {
	                deltaY = e.wheelDelta;
	            }
	            if ("wheelDeltaY" in e) {
	                deltaY = e.wheelDeltaY;
	            }
	            if ("wheelDeltaX" in e) {
	                deltaX = e.wheelDeltaX * -1;
	            }
	            // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	            if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
	                deltaX = deltaY * -1;
	                deltaY = 0;
	            }
	            // New school wheel delta (wheel event)
	            if ("deltaY" in e) {
	                deltaY = e.deltaY * -1;
	            }
	            if ("deltaX" in e) {
	                deltaX = e.deltaX;
	            }
	            // Need to convert lines and pages to pixels if we aren"t already in pixels
	            // There are three delta modes:
	            //   * deltaMode 0 is by pixels, nothing to do
	            //   * deltaMode 1 is by lines
	            //   * deltaMode 2 is by pages
	            if (e.deltaMode === 1) {
	                var lineHeight = _UtilsDOM2.default.getLineHeight();
	                deltaY = deltaY * lineHeight;
	                deltaX = deltaX * lineHeight;
	            } else if (e.deltaMode === 2) {
	                var windowhegiht = _UtilsWindow2.default.getHeight();
	                deltaY = deltaY * windowhegiht;
	                deltaX = deltaX * windowhegiht;
	            }
	            delta = deltaY === 0 ? deltaX : deltaY;
	            return delta;
	        } else {
	            return NaN;
	        }
	    };
	
	    return Mouse;
	}();
	
	exports.default = Mouse;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class for working with screen
	 */
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Screen = function () {
	    function Screen() {
	        _classCallCheck(this, Screen);
	    }
	
	    /**
	     * Get screen info
	     * @return {{availableSize: {height: number, width: number}, colorDepth: number, pixelRatio: number, size: {height: number, width: number}}}
	     */
	    Screen.getInfo = function getInfo() {
	        return {
	            availableSize: Screen.getAvailableSizes(),
	            colorDepth: Screen.getColorDepth(),
	            pixelRatio: Screen.getPixelRatio(),
	            size: Screen.getSizes()
	        };
	    };
	    /**
	     * Get screen height
	     * @returns {number}
	     */
	
	
	    Screen.getHeight = function getHeight() {
	        return screen.height;
	    };
	    /**
	     * Get screen width
	     * @returns {number}
	     */
	
	
	    Screen.getWidth = function getWidth() {
	        return screen.width;
	    };
	    /**
	     * Get screen sizes
	     * @return {{height: number, width: number}}
	     */
	
	
	    Screen.getSizes = function getSizes() {
	        return {
	            height: Screen.getHeight(),
	            width: Screen.getWidth()
	        };
	    };
	    /**
	     * Get screen height
	     * @returns {number}
	     */
	
	
	    Screen.getAvailableHeight = function getAvailableHeight() {
	        return screen.availHeight;
	    };
	    /**
	     * Get screen width
	     * @returns {number}
	     */
	
	
	    Screen.getAvailableWidth = function getAvailableWidth() {
	        return screen.availWidth;
	    };
	    /**
	     * Get screen sizes
	     * @return {{height: number, width: number}}
	     */
	
	
	    Screen.getAvailableSizes = function getAvailableSizes() {
	        return {
	            height: Screen.getAvailableHeight(),
	            width: Screen.getAvailableWidth()
	        };
	    };
	    /**
	     * Get screen pixel ratio
	     * @return {number}
	     */
	
	
	    Screen.getPixelRatio = function getPixelRatio() {
	        var ratio = 1;
	        if (typeof window.screen.systemXDPI !== "undefined" && typeof window.screen.logicalXDPI !== "undefined" && window.screen.systemXDPI > window.screen.logicalXDPI) {
	            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
	        } else if (typeof window.devicePixelRatio !== "undefined") {
	            ratio = window.devicePixelRatio;
	        }
	        return ratio;
	    };
	    /**
	     * Get screen color depth
	     * @return {number}
	     */
	
	
	    Screen.getColorDepth = function getColorDepth() {
	        return screen.colorDepth;
	    };
	
	    return Screen;
	}();
	
	exports.default = Screen;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class for working with system
	 */
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var System = function () {
	    function System() {
	        _classCallCheck(this, System);
	    }
	
	    /**
	     * Get system info
	     * @return {{name: string, version: string}}
	     */
	    System.getInfo = function getInfo() {
	        return {
	            name: System.getName(),
	            version: System.getVersion()
	        };
	    };
	    /**
	     * Get OS name
	     * @return {string}
	     */
	
	
	    System.getName = function getName() {
	        var os = "";
	        var clientStrings = [{
	            r: /(Windows 10.0|Windows NT 10.0)/,
	            s: "Windows 10"
	        }, {
	            r: /(Windows 8.1|Windows NT 6.3)/,
	            s: "Windows 8.1"
	        }, {
	            r: /(Windows 8|Windows NT 6.2)/,
	            s: "Windows 8"
	        }, {
	            r: /(Windows 7|Windows NT 6.1)/,
	            s: "Windows 7"
	        }, {
	            r: /Windows NT 6.0/,
	            s: "Windows Vista"
	        }, {
	            r: /Windows NT 5.2/,
	            s: "Windows Server 2003"
	        }, {
	            r: /(Windows NT 5.1|Windows XP)/,
	            s: "Windows XP"
	        }, {
	            r: /(Windows NT 5.0|Windows 2000)/,
	            s: "Windows 2000"
	        }, {
	            r: /(Win 9x 4.90|Windows ME)/,
	            s: "Windows ME"
	        }, {
	            r: /(Windows 98|Win98)/,
	            s: "Windows 98"
	        }, {
	            r: /(Windows 95|Win95|Windows_95)/,
	            s: "Windows 95"
	        }, {
	            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
	            s: "Windows NT 4.0"
	        }, {
	            r: /Windows CE/,
	            s: "Windows CE"
	        }, {
	            r: /Win16/,
	            s: "Windows 3.11"
	        }, {
	            r: /Android/,
	            s: "Android"
	        }, {
	            r: /OpenBSD/,
	            s: "Open BSD"
	        }, {
	            r: /SunOS/,
	            s: "Sun OS"
	        }, {
	            r: /(Linux|X11)/,
	            s: "Linux"
	        }, {
	            r: /(iPhone|iPad|iPod)/,
	            s: "iOS"
	        }, {
	            r: /Mac OS X/,
	            s: "Mac OS X"
	        }, {
	            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
	            s: "Mac OS"
	        }, {
	            r: /QNX/,
	            s: "QNX"
	        }, {
	            r: /UNIX/,
	            s: "UNIX"
	        }, {
	            r: /BeOS/,
	            s: "BeOS"
	        }, {
	            r: /OS\/2/,
	            s: "OS/2"
	        }, {
	            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
	            s: "Search Bot"
	        }];
	        for (var _iterator = clientStrings, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var cs = _ref;
	
	            if (cs.r.test(navigator.userAgent)) {
	                os = cs.s;
	                break;
	            }
	        }
	        return os;
	    };
	    /**
	     * Get OS version
	     * @return {string}
	     */
	
	
	    System.getVersion = function getVersion() {
	        var os = System.getName();
	        var osVersion = "";
	        if (/Windows/.test(os)) {
	            osVersion = /Windows (.*)/.exec(os)[1];
	            os = "Windows";
	        }
	        switch (os) {
	            case "Mac OS X":
	                osVersion = /Mac OS X (10[._\d]+)/.exec(navigator.userAgent)[1];
	                break;
	            case "Android":
	                osVersion = /Android ([._\d]+)/.exec(navigator.userAgent)[1];
	                break;
	            case "iOS":
	                var reg = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
	                osVersion = reg[1] + "." + reg[2] + "." + (reg[3] || 0);
	                break;
	            default:
	        }
	        return osVersion;
	    };
	
	    return System;
	}();
	
	exports.default = System;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _UtilsBrowser = __webpack_require__(8);
	
	var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
	
	var _UtilsScreen = __webpack_require__(20);
	
	var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
	
	var _UtilsSystem = __webpack_require__(21);
	
	var _UtilsSystem2 = _interopRequireDefault(_UtilsSystem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function () {
	    function User() {
	        _classCallCheck(this, User);
	    }
	
	    /**
	     * Get user info
	     * @return {{browser: {browser: string, mobile: boolean, version: string}, screen: {availableSize: {height: number, width: number}, colorDepth: number, pixelRatio: number, size: {height: number, width: number}}, system: {name: string, version: string}}}
	     */
	    User.getInfo = function getInfo() {
	        return {
	            browser: _UtilsBrowser2.default.getInfo(),
	            screen: _UtilsScreen2.default.getInfo(),
	            system: _UtilsSystem2.default.getInfo()
	        };
	    };
	
	    return User;
	}();
	
	exports.default = User;

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(25);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(26);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsDOM = __webpack_require__(18);
	
	var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsDOM", function () {
	    var div1 = void 0;
	    var div2 = void 0;
	    var div3 = void 0;
	    var iframe = void 0;
	    var paramsValues = void 0;
	    var dataSet = void 0;
	    beforeEach(function () {
	        div1 = window.document.createElement("div");
	        div1.id = "div1";
	        div2 = window.document.createElement("div");
	        div2.id = "div2";
	        window.document.body.appendChild(div2);
	        div3 = window.document.createElement("div");
	        div3.id = "div3";
	        iframe = window.document.createElement("iframe");
	        iframe.src = "javascript:;";
	        window.document.body.appendChild(iframe);
	        iframe.contentWindow.document.body.appendChild(div3);
	        paramsValues = [undefined, null, false, true, 123, 0, "div", "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body, function () {}];
	        dataSet = [];
	    });
	    afterEach(function () {
	        window.document.body.removeChild(div2);
	        window.document.body.removeChild(iframe);
	    });
	    var testClass = function testClass() {
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            for (var _iterator3 = paramsValues, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                var _ref3;
	
	                if (_isArray3) {
	                    if (_i3 >= _iterator3.length) break;
	                    _ref3 = _iterator3[_i3++];
	                } else {
	                    _i3 = _iterator3.next();
	                    if (_i3.done) break;
	                    _ref3 = _i3.value;
	                }
	
	                var x2 = _ref3;
	
	                if (x1 !== x2) {
	                    var cond = (x1 === div2 || x1 === div3) && typeof x2 === "string";
	                    dataSet.push({
	                        params: [x1, x2],
	                        result: cond
	                    });
	                }
	            }
	        }
	        for (var _iterator2 = dataSet, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var set = _ref2;
	
	            /**
	             * Add class
	             */
	            var result = _UtilsDOM2.default.addClassName.apply(_UtilsDOM2.default, set.params);
	            /**
	             * Check if element returned or null
	             */
	            if (set.result) {
	                expect(result === div2 || result === div3).toEqual(true);
	            } else {
	                expect(result).toBeNull();
	            }
	            /**
	             * Check if element has class
	             */
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, set.params);
	            if (set.result) {
	                expect(result).toEqual(true);
	            } else {
	                expect(result).toEqual(false);
	            }
	            /**
	             * Toggle class off
	             */
	            result = _UtilsDOM2.default.toggleClassName.apply(_UtilsDOM2.default, [].concat(set.params, false));
	            /**
	             * Check if element returned or null
	             */
	            if (set.result) {
	                expect(result === div2 || result === div3).toEqual(true);
	            } else {
	                expect(result).toBeNull();
	            }
	            /**
	             * Check if element has not class
	             */
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, set.params);
	            expect(result).toEqual(false);
	            /**
	             * Toggle class on
	             */
	            result = _UtilsDOM2.default.toggleClassName.apply(_UtilsDOM2.default, [].concat(set.params, true));
	            /**
	             * Check if element returned or null
	             */
	            if (set.result) {
	                expect(result === div2 || result === div3).toEqual(true);
	            } else {
	                expect(result).toBeNull();
	            }
	            /**
	             * Check if element has class
	             */
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, set.params);
	            if (set.result) {
	                expect(result).toEqual(true);
	            } else {
	                expect(result).toEqual(false);
	            }
	            /**
	             * Replace class
	             */
	            result = _UtilsDOM2.default.replaceClass.apply(_UtilsDOM2.default, [set.params[0], set.params[1], "_" + set.params[1]]);
	            /**
	             * Check if element returned or null
	             */
	            if (set.result) {
	                expect(result === div2 || result === div3).toEqual(true);
	            } else {
	                expect(result).toBeNull();
	            }
	            /**
	             * Check if element has class
	             */
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, [set.params[0], "_" + set.params[1]]);
	            if (set.result) {
	                expect(result).toEqual(true);
	            } else {
	                expect(result).toEqual(false);
	            }
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, [set.params[0], set.params[1]]);
	            expect(result).toEqual(false);
	            /**
	             * Remove class name
	             */
	            result = _UtilsDOM2.default.removeClassName.apply(_UtilsDOM2.default, [set.params[0], "_" + set.params[1]]);
	            /**
	             * Check if element has not class
	             */
	            result = _UtilsDOM2.default.hasClassName.apply(_UtilsDOM2.default, [set.params[0], "_" + set.params[1]]);
	            expect(result).toEqual(false);
	        }
	    };
	    it("UtilsDOM", function () {
	        expect(typeof _UtilsDOM2.default === "undefined" ? "undefined" : _typeof(_UtilsDOM2.default)).toEqual("function");
	    });
	    it("UtilsDOM.getDOMNode", function () {
	        for (var _iterator4 = paramsValues, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	            var _ref4;
	
	            if (_isArray4) {
	                if (_i4 >= _iterator4.length) break;
	                _ref4 = _iterator4[_i4++];
	            } else {
	                _i4 = _iterator4.next();
	                if (_i4.done) break;
	                _ref4 = _i4.value;
	            }
	
	            var x1 = _ref4;
	
	            for (var _iterator6 = paramsValues, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	                var _ref6;
	
	                if (_isArray6) {
	                    if (_i6 >= _iterator6.length) break;
	                    _ref6 = _iterator6[_i6++];
	                } else {
	                    _i6 = _iterator6.next();
	                    if (_i6.done) break;
	                    _ref6 = _i6.value;
	                }
	
	                var x2 = _ref6;
	
	                if (x1 !== x2) {
	                    var cond = x1 === div2 && (x2 === window.document || x2 === undefined) || x1 === div3 && x2 === iframe.contentWindow.document;
	                    dataSet.push({
	                        params: [x1, x2],
	                        result: cond
	                    });
	                }
	            }
	        }
	        for (var _iterator5 = dataSet, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	            var _ref5;
	
	            if (_isArray5) {
	                if (_i5 >= _iterator5.length) break;
	                _ref5 = _iterator5[_i5++];
	            } else {
	                _i5 = _iterator5.next();
	                if (_i5.done) break;
	                _ref5 = _i5.value;
	            }
	
	            var set = _ref5;
	
	            var result1 = _UtilsDOM2.default.getDOMNode.apply(_UtilsDOM2.default, set.params);
	            var result2 = _Utils2.default.DOM.getDOMNode.apply(_UtilsDOM2.default, set.params);
	            expect(result1).toEqual(result2);
	            if (set.result) {
	                expect(result1 === div2 || result1 === div3).toEqual(true);
	            } else {
	                expect(result1).toEqual(false);
	            }
	        }
	    });
	    it("UtilsDOM.getBoundingClientRect", function () {
	        for (var _iterator7 = paramsValues, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	            var _ref7;
	
	            if (_isArray7) {
	                if (_i7 >= _iterator7.length) break;
	                _ref7 = _iterator7[_i7++];
	            } else {
	                _i7 = _iterator7.next();
	                if (_i7.done) break;
	                _ref7 = _i7.value;
	            }
	
	            var x1 = _ref7;
	
	            for (var _iterator9 = paramsValues, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
	                var _ref9;
	
	                if (_isArray9) {
	                    if (_i9 >= _iterator9.length) break;
	                    _ref9 = _iterator9[_i9++];
	                } else {
	                    _i9 = _iterator9.next();
	                    if (_i9.done) break;
	                    _ref9 = _i9.value;
	                }
	
	                var x2 = _ref9;
	
	                for (var _iterator10 = paramsValues, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
	                    var _ref10;
	
	                    if (_isArray10) {
	                        if (_i10 >= _iterator10.length) break;
	                        _ref10 = _iterator10[_i10++];
	                    } else {
	                        _i10 = _iterator10.next();
	                        if (_i10.done) break;
	                        _ref10 = _i10.value;
	                    }
	
	                    var x3 = _ref10;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = x1 === div2 && (typeof x2 === "undefined" || x2 === window.document) || x1 === div3 && x2 === iframe.contentWindow.document;
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator8 = dataSet, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
	            var _ref8;
	
	            if (_isArray8) {
	                if (_i8 >= _iterator8.length) break;
	                _ref8 = _iterator8[_i8++];
	            } else {
	                _i8 = _iterator8.next();
	                if (_i8.done) break;
	                _ref8 = _i8.value;
	            }
	
	            var set = _ref8;
	
	            var result = _UtilsDOM2.default.getBoundingClientRect.apply(_UtilsDOM2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(_typeof(result.bottom)).toEqual("number");
	            expect(_typeof(result.height)).toEqual("number");
	            expect(_typeof(result.left)).toEqual("number");
	            expect(_typeof(result.right)).toEqual("number");
	            expect(_typeof(result.top)).toEqual("number");
	            expect(_typeof(result.width)).toEqual("number");
	            expect(result.bottom).toBeCalculable();
	            expect(result.height).toBeCalculable();
	            expect(result.left).toBeCalculable();
	            expect(result.right).toBeCalculable();
	            expect(result.top).toBeCalculable();
	            expect(result.width).toBeCalculable();
	            if (set.result) {
	                expect(result.bottom).not.toEqual(0);
	                expect(result.bottom).toEqual(result.top);
	                expect(result.height).toEqual(0);
	                expect(result.left).not.toEqual(0);
	                expect(result.left).toBeLessThan(result.right);
	                expect(result.right).not.toEqual(0);
	                expect(result.top).not.toEqual(0);
	                expect(result.width).not.toEqual(0);
	            } else {
	                expect(result.bottom).toEqual(0);
	                expect(result.height).toEqual(0);
	                expect(result.left).toEqual(0);
	                expect(result.right).toEqual(0);
	                expect(result.top).toEqual(0);
	                expect(result.width).toEqual(0);
	            }
	        }
	    });
	    it("UtilsDOM.findElementPosition", function () {
	        for (var _iterator11 = paramsValues, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
	            var _ref11;
	
	            if (_isArray11) {
	                if (_i11 >= _iterator11.length) break;
	                _ref11 = _iterator11[_i11++];
	            } else {
	                _i11 = _iterator11.next();
	                if (_i11.done) break;
	                _ref11 = _i11.value;
	            }
	
	            var x1 = _ref11;
	
	            for (var _iterator13 = paramsValues, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
	                var _ref13;
	
	                if (_isArray13) {
	                    if (_i13 >= _iterator13.length) break;
	                    _ref13 = _iterator13[_i13++];
	                } else {
	                    _i13 = _iterator13.next();
	                    if (_i13.done) break;
	                    _ref13 = _i13.value;
	                }
	
	                var x2 = _ref13;
	
	                for (var _iterator14 = paramsValues, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
	                    var _ref14;
	
	                    if (_isArray14) {
	                        if (_i14 >= _iterator14.length) break;
	                        _ref14 = _iterator14[_i14++];
	                    } else {
	                        _i14 = _iterator14.next();
	                        if (_i14.done) break;
	                        _ref14 = _i14.value;
	                    }
	
	                    var x3 = _ref14;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = x1 === div2 && (typeof x2 === "undefined" || x2 === window.document) || x1 === div3 && x2 === iframe.contentWindow.document;
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator12 = dataSet, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
	            var _ref12;
	
	            if (_isArray12) {
	                if (_i12 >= _iterator12.length) break;
	                _ref12 = _iterator12[_i12++];
	            } else {
	                _i12 = _iterator12.next();
	                if (_i12.done) break;
	                _ref12 = _i12.value;
	            }
	
	            var set = _ref12;
	
	            var result = _UtilsDOM2.default.findElementPosition.apply(_UtilsDOM2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(_typeof(result.left)).toEqual("number");
	            expect(_typeof(result.top)).toEqual("number");
	            expect(result.left).toBeCalculable();
	            expect(result.top).toBeCalculable();
	            if (set.result) {
	                expect(result.left).not.toEqual(0);
	                expect(result.top).not.toEqual(0);
	            } else {
	                expect(result.left).toEqual(0);
	                expect(result.top).toEqual(0);
	            }
	        }
	    });
	    it("UtilsDOM.addEvent", function () {
	        for (var _iterator15 = paramsValues, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
	            var _ref15;
	
	            if (_isArray15) {
	                if (_i15 >= _iterator15.length) break;
	                _ref15 = _iterator15[_i15++];
	            } else {
	                _i15 = _iterator15.next();
	                if (_i15.done) break;
	                _ref15 = _i15.value;
	            }
	
	            var x1 = _ref15;
	
	            for (var _iterator17 = paramsValues, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
	                var _ref17;
	
	                if (_isArray17) {
	                    if (_i17 >= _iterator17.length) break;
	                    _ref17 = _iterator17[_i17++];
	                } else {
	                    _i17 = _iterator17.next();
	                    if (_i17.done) break;
	                    _ref17 = _i17.value;
	                }
	
	                var x2 = _ref17;
	
	                for (var _iterator18 = paramsValues, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
	                    var _ref18;
	
	                    if (_isArray18) {
	                        if (_i18 >= _iterator18.length) break;
	                        _ref18 = _iterator18[_i18++];
	                    } else {
	                        _i18 = _iterator18.next();
	                        if (_i18.done) break;
	                        _ref18 = _i18.value;
	                    }
	
	                    var x3 = _ref18;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = typeof x2 === "string" && typeof x3 === "function" && (x1 === div2 || x1 === div3);
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator16 = dataSet, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
	            var _ref16;
	
	            if (_isArray16) {
	                if (_i16 >= _iterator16.length) break;
	                _ref16 = _iterator16[_i16++];
	            } else {
	                _i16 = _iterator16.next();
	                if (_i16.done) break;
	                _ref16 = _i16.value;
	            }
	
	            var set = _ref16;
	
	            var result = _UtilsDOM2.default.addEvent.apply(_UtilsDOM2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("boolean");
	            if (set.result) {
	                expect(result).toEqual(true);
	            } else {
	                expect(result).toEqual(false);
	            }
	        }
	    });
	    it("UtilsDOM.removeEvent", function () {
	        for (var _iterator19 = paramsValues, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
	            var _ref19;
	
	            if (_isArray19) {
	                if (_i19 >= _iterator19.length) break;
	                _ref19 = _iterator19[_i19++];
	            } else {
	                _i19 = _iterator19.next();
	                if (_i19.done) break;
	                _ref19 = _i19.value;
	            }
	
	            var x1 = _ref19;
	
	            for (var _iterator21 = paramsValues, _isArray21 = Array.isArray(_iterator21), _i21 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
	                var _ref21;
	
	                if (_isArray21) {
	                    if (_i21 >= _iterator21.length) break;
	                    _ref21 = _iterator21[_i21++];
	                } else {
	                    _i21 = _iterator21.next();
	                    if (_i21.done) break;
	                    _ref21 = _i21.value;
	                }
	
	                var x2 = _ref21;
	
	                for (var _iterator22 = paramsValues, _isArray22 = Array.isArray(_iterator22), _i22 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
	                    var _ref22;
	
	                    if (_isArray22) {
	                        if (_i22 >= _iterator22.length) break;
	                        _ref22 = _iterator22[_i22++];
	                    } else {
	                        _i22 = _iterator22.next();
	                        if (_i22.done) break;
	                        _ref22 = _i22.value;
	                    }
	
	                    var x3 = _ref22;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = typeof x2 === "string" && typeof x3 === "function" && (x1 === div2 || x1 === div3);
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator20 = dataSet, _isArray20 = Array.isArray(_iterator20), _i20 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
	            var _ref20;
	
	            if (_isArray20) {
	                if (_i20 >= _iterator20.length) break;
	                _ref20 = _iterator20[_i20++];
	            } else {
	                _i20 = _iterator20.next();
	                if (_i20.done) break;
	                _ref20 = _i20.value;
	            }
	
	            var set = _ref20;
	
	            var result = _UtilsDOM2.default.removeEvent.apply(_UtilsDOM2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("boolean");
	            if (set.result) {
	                expect(result).toEqual(true);
	            } else {
	                expect(result).toEqual(false);
	            }
	        }
	    });
	    it("UtilsDOM.hasClassName", function () {
	        testClass();
	    });
	    it("UtilsDOM.addClassName", function () {
	        testClass();
	    });
	    it("UtilsDOM.removeClassName", function () {
	        testClass();
	    });
	    it("UtilsDOM.toggleClassName", function () {
	        testClass();
	    });
	    it("UtilsDOM.replaceClass", function () {
	        testClass();
	    });
	    it("UtilsDOM.getElementByTagName", function () {
	        for (var _iterator23 = paramsValues, _isArray23 = Array.isArray(_iterator23), _i23 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
	            var _ref23;
	
	            if (_isArray23) {
	                if (_i23 >= _iterator23.length) break;
	                _ref23 = _iterator23[_i23++];
	            } else {
	                _i23 = _iterator23.next();
	                if (_i23.done) break;
	                _ref23 = _i23.value;
	            }
	
	            var x1 = _ref23;
	
	            for (var _iterator25 = paramsValues, _isArray25 = Array.isArray(_iterator25), _i25 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
	                var _ref25;
	
	                if (_isArray25) {
	                    if (_i25 >= _iterator25.length) break;
	                    _ref25 = _iterator25[_i25++];
	                } else {
	                    _i25 = _iterator25.next();
	                    if (_i25.done) break;
	                    _ref25 = _i25.value;
	                }
	
	                var x2 = _ref25;
	
	                for (var _iterator26 = paramsValues, _isArray26 = Array.isArray(_iterator26), _i26 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
	                    var _ref26;
	
	                    if (_isArray26) {
	                        if (_i26 >= _iterator26.length) break;
	                        _ref26 = _iterator26[_i26++];
	                    } else {
	                        _i26 = _iterator26.next();
	                        if (_i26.done) break;
	                        _ref26 = _i26.value;
	                    }
	
	                    var x3 = _ref26;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = typeof x1 === "string" && x1 === "div" && (_UtilsDOM2.default.isDOMDocument(x2) || x2 === undefined) && typeof x3 === "number" && x3 < 1;
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator24 = dataSet, _isArray24 = Array.isArray(_iterator24), _i24 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
	            var _ref24;
	
	            if (_isArray24) {
	                if (_i24 >= _iterator24.length) break;
	                _ref24 = _iterator24[_i24++];
	            } else {
	                _i24 = _iterator24.next();
	                if (_i24.done) break;
	                _ref24 = _i24.value;
	            }
	
	            var set = _ref24;
	
	            var result = _UtilsDOM2.default.getElementByTagName.apply(_UtilsDOM2.default, set.params);
	            if (set.result) {
	                expect(result).not.toBeNull();
	            } else {
	                expect(result).toBeNull();
	            }
	        }
	    });
	    it("UtilsDOM.getLineHeight", function () {
	        var result = _UtilsDOM2.default.getLineHeight();
	        expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("number");
	        expect(result).toBeCalculable();
	    });
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("Utils", function () {
	    var div1 = void 0;
	    var div2 = void 0;
	    var div3 = void 0;
	    var iframe = void 0;
	    var paramsValues = void 0;
	    var dataSet = void 0;
	    beforeEach(function () {
	        div1 = window.document.createElement("div");
	        div1.id = "div1";
	        div2 = window.document.createElement("div");
	        div2.id = "div2";
	        window.document.body.appendChild(div2);
	        div3 = window.document.createElement("div");
	        div3.id = "div3";
	        iframe = window.document.createElement("iframe");
	        iframe.src = "javascript:;";
	        window.document.body.appendChild(iframe);
	        iframe.contentWindow.document.body.appendChild(div3);
	        paramsValues = [undefined, null, false, true, 123, "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body];
	        dataSet = [];
	    });
	    afterEach(function () {
	        window.document.body.removeChild(div2);
	        window.document.body.removeChild(iframe);
	    });
	    it("Utils", function () {
	        expect(typeof _Utils2.default === "undefined" ? "undefined" : _typeof(_Utils2.default)).toEqual("function");
	    });
	    it("Utils.warn()", function () {
	        var messange = "Test";
	        expect(_Utils2.default.warn(messange)).toEqual(messange);
	    });
	    it("Utils.getBoundingClientRect()", function () {
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            for (var _iterator3 = paramsValues, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                var _ref3;
	
	                if (_isArray3) {
	                    if (_i3 >= _iterator3.length) break;
	                    _ref3 = _iterator3[_i3++];
	                } else {
	                    _i3 = _iterator3.next();
	                    if (_i3.done) break;
	                    _ref3 = _i3.value;
	                }
	
	                var x2 = _ref3;
	
	                for (var _iterator4 = paramsValues, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	                    var _ref4;
	
	                    if (_isArray4) {
	                        if (_i4 >= _iterator4.length) break;
	                        _ref4 = _iterator4[_i4++];
	                    } else {
	                        _i4 = _iterator4.next();
	                        if (_i4.done) break;
	                        _ref4 = _i4.value;
	                    }
	
	                    var x3 = _ref4;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = x1 === div2 && (typeof x2 === "undefined" || x2 === window.document) || x1 === div3 && x2 === iframe.contentWindow.document;
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator2 = dataSet, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var set = _ref2;
	
	            var result = _Utils2.default.getBoundingClientRect.apply(_Utils2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(_typeof(result.bottom)).toEqual("number");
	            expect(_typeof(result.height)).toEqual("number");
	            expect(_typeof(result.left)).toEqual("number");
	            expect(_typeof(result.right)).toEqual("number");
	            expect(_typeof(result.top)).toEqual("number");
	            expect(_typeof(result.width)).toEqual("number");
	            expect(result.bottom).toBeCalculable();
	            expect(result.height).toBeCalculable();
	            expect(result.left).toBeCalculable();
	            expect(result.right).toBeCalculable();
	            expect(result.top).toBeCalculable();
	            expect(result.width).toBeCalculable();
	            if (set.result) {
	                expect(result.bottom).not.toEqual(0);
	                expect(result.bottom).toEqual(result.top);
	                expect(result.height).toEqual(0);
	                expect(result.left).not.toEqual(0);
	                expect(result.left).toBeLessThan(result.right);
	                expect(result.right).not.toEqual(0);
	                expect(result.top).not.toEqual(0);
	                expect(result.width).not.toEqual(0);
	            } else {
	                expect(result.bottom).toEqual(0);
	                expect(result.height).toEqual(0);
	                expect(result.left).toEqual(0);
	                expect(result.right).toEqual(0);
	                expect(result.top).toEqual(0);
	                expect(result.width).toEqual(0);
	            }
	        }
	    });
	    it("Utils.findElementPosition()", function () {
	        for (var _iterator5 = paramsValues, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	            var _ref5;
	
	            if (_isArray5) {
	                if (_i5 >= _iterator5.length) break;
	                _ref5 = _iterator5[_i5++];
	            } else {
	                _i5 = _iterator5.next();
	                if (_i5.done) break;
	                _ref5 = _i5.value;
	            }
	
	            var x1 = _ref5;
	
	            for (var _iterator7 = paramsValues, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	                var _ref7;
	
	                if (_isArray7) {
	                    if (_i7 >= _iterator7.length) break;
	                    _ref7 = _iterator7[_i7++];
	                } else {
	                    _i7 = _iterator7.next();
	                    if (_i7.done) break;
	                    _ref7 = _i7.value;
	                }
	
	                var x2 = _ref7;
	
	                for (var _iterator8 = paramsValues, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
	                    var _ref8;
	
	                    if (_isArray8) {
	                        if (_i8 >= _iterator8.length) break;
	                        _ref8 = _iterator8[_i8++];
	                    } else {
	                        _i8 = _iterator8.next();
	                        if (_i8.done) break;
	                        _ref8 = _i8.value;
	                    }
	
	                    var x3 = _ref8;
	
	                    if ([x2, x3].indexOf(x1) === -1 && [x1, x3].indexOf(x2) === -1 && [x1, x2].indexOf(x3) === -1) {
	                        var cond = x1 === div2 && (typeof x2 === "undefined" || x2 === window.document) || x1 === div3 && x2 === iframe.contentWindow.document;
	                        dataSet.push({
	                            params: [x1, x2, x3],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	        for (var _iterator6 = dataSet, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	            var _ref6;
	
	            if (_isArray6) {
	                if (_i6 >= _iterator6.length) break;
	                _ref6 = _iterator6[_i6++];
	            } else {
	                _i6 = _iterator6.next();
	                if (_i6.done) break;
	                _ref6 = _i6.value;
	            }
	
	            var set = _ref6;
	
	            var result = _Utils2.default.findElementPosition.apply(_Utils2.default, set.params);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(_typeof(result.left)).toEqual("number");
	            expect(_typeof(result.top)).toEqual("number");
	            expect(result.left).toBeCalculable();
	            expect(result.top).toBeCalculable();
	            if (set.result) {
	                expect(result.left).not.toEqual(0);
	                expect(result.top).not.toEqual(0);
	            } else {
	                expect(result.left).toEqual(0);
	                expect(result.top).toEqual(0);
	            }
	        }
	    });
	    it("Utils.implementationStaticMethods()", function () {
	        var _utils = new _Utils2.default();
	        var paramsValues = [undefined, null, false, true, 123, "Utils", _Utils2.default, _utils];
	        var dataSet = [{
	            params: [],
	            result: false
	        }];
	        for (var _iterator9 = paramsValues, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
	            var _ref9;
	
	            if (_isArray9) {
	                if (_i9 >= _iterator9.length) break;
	                _ref9 = _iterator9[_i9++];
	            } else {
	                _i9 = _iterator9.next();
	                if (_i9.done) break;
	                _ref9 = _i9.value;
	            }
	
	            var x1 = _ref9;
	
	            var cond1 = x1 === _utils;
	            dataSet.push({
	                params: [x1],
	                result: cond1
	            });
	            for (var _iterator11 = paramsValues, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
	                var _ref11;
	
	                if (_isArray11) {
	                    if (_i11 >= _iterator11.length) break;
	                    _ref11 = _iterator11[_i11++];
	                } else {
	                    _i11 = _iterator11.next();
	                    if (_i11.done) break;
	                    _ref11 = _i11.value;
	                }
	
	                var x2 = _ref11;
	
	                dataSet.push({
	                    params: [x1, x2],
	                    result: cond1
	                });
	            }
	        }
	        for (var _iterator10 = dataSet, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
	            var _ref10;
	
	            if (_isArray10) {
	                if (_i10 >= _iterator10.length) break;
	                _ref10 = _iterator10[_i10++];
	            } else {
	                _i10 = _iterator10.next();
	                if (_i10.done) break;
	                _ref10 = _i10.value;
	            }
	
	            var set = _ref10;
	
	            _Utils2.default.implementationStaticMethods.apply(_Utils2.default, set.params);
	            if (set.result) {
	                expect(Object.keys(set.params[0])).toBeArray(Object.keys(_Utils2.default));
	            }
	        }
	    });
	    it("Utils.stack()", function () {
	        var stack = _Utils2.default.stack();
	        expect(stack).toBeArray();
	        for (var _iterator12 = stack, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
	            var _ref12;
	
	            if (_isArray12) {
	                if (_i12 >= _iterator12.length) break;
	                _ref12 = _iterator12[_i12++];
	            } else {
	                _i12 = _iterator12.next();
	                if (_i12.done) break;
	                _ref12 = _i12.value;
	            }
	
	            var obj = _ref12;
	
	            expect(typeof obj === "undefined" ? "undefined" : _typeof(obj)).toEqual("object");
	            expect(Object.keys(obj)).toBeArray(["file", "column", "line", "method"]);
	            expect(_typeof(obj.file)).toEqual("string");
	            expect(_typeof(obj.column)).toEqual("string");
	            expect(_typeof(obj.line)).toEqual("string");
	            expect(_typeof(obj.method)).toEqual("string");
	            expect(obj.column).toBeCalculable();
	            expect(obj.line).toBeCalculable();
	        }
	    });
	    it("Utils.getUID()", function () {
	        var ID1 = _Utils2.default.getUID();
	        var ID2 = _Utils2.default.getUID();
	        expect(typeof ID1 === "undefined" ? "undefined" : _typeof(ID1)).toEqual("string");
	        expect(typeof ID2 === "undefined" ? "undefined" : _typeof(ID2)).toEqual("string");
	        expect(ID1).not.toEqual(ID2);
	    });
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsAnimation = __webpack_require__(6);
	
	var _UtilsAnimation2 = _interopRequireDefault(_UtilsAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("Utils.Animation", function () {
	    it("Utils.Animation", function () {
	        expect(typeof _UtilsAnimation2.default === "undefined" ? "undefined" : _typeof(_UtilsAnimation2.default)).toEqual("function");
	    });
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsAnimation = __webpack_require__(6);
	
	var _UtilsAnimation2 = _interopRequireDefault(_UtilsAnimation);
	
	var _UtilsAnimationEasing = __webpack_require__(7);
	
	var _UtilsAnimationEasing2 = _interopRequireDefault(_UtilsAnimationEasing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsAnimationEasing", function () {
	    var now = void 0;
	    var dataSet = void 0;
	    beforeEach(function () {
	        now = new Date().getTime();
	        var paramsValues = [undefined, null, true, 10, 123, "test", now, now + 1000];
	        dataSet = [];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            for (var _iterator2 = paramsValues, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	                var _ref2;
	
	                if (_isArray2) {
	                    if (_i2 >= _iterator2.length) break;
	                    _ref2 = _iterator2[_i2++];
	                } else {
	                    _i2 = _iterator2.next();
	                    if (_i2.done) break;
	                    _ref2 = _i2.value;
	                }
	
	                var x2 = _ref2;
	
	                for (var _iterator3 = paramsValues, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                    var _ref3;
	
	                    if (_isArray3) {
	                        if (_i3 >= _iterator3.length) break;
	                        _ref3 = _iterator3[_i3++];
	                    } else {
	                        _i3 = _iterator3.next();
	                        if (_i3.done) break;
	                        _ref3 = _i3.value;
	                    }
	
	                    var x3 = _ref3;
	
	                    for (var _iterator4 = paramsValues, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	                        var _ref4;
	
	                        if (_isArray4) {
	                            if (_i4 >= _iterator4.length) break;
	                            _ref4 = _iterator4[_i4++];
	                        } else {
	                            _i4 = _iterator4.next();
	                            if (_i4.done) break;
	                            _ref4 = _i4.value;
	                        }
	
	                        var x4 = _ref4;
	
	                        var cond = typeof x1 === "number" && typeof x2 === "number" && typeof x3 === "number" && typeof x4 === "number" && x1 < x4;
	                        dataSet.push({
	                            params: [x1, x2, x3, x4],
	                            result: cond
	                        });
	                    }
	                }
	            }
	        }
	    });
	    var test = function test(methods, _dataSet) {
	        for (var _iterator5 = _dataSet, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	            var _ref5;
	
	            if (_isArray5) {
	                if (_i5 >= _iterator5.length) break;
	                _ref5 = _iterator5[_i5++];
	            } else {
	                _i5 = _iterator5.next();
	                if (_i5.done) break;
	                _ref5 = _i5.value;
	            }
	
	            var set = _ref5;
	
	            var results = [];
	            for (var _iterator6 = methods, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	                var _ref6;
	
	                if (_isArray6) {
	                    if (_i6 >= _iterator6.length) break;
	                    _ref6 = _iterator6[_i6++];
	                } else {
	                    _i6 = _iterator6.next();
	                    if (_i6.done) break;
	                    _ref6 = _i6.value;
	                }
	
	                var method = _ref6;
	
	                results.push(method.apply(_UtilsAnimationEasing2.default, set.params));
	            }
	            var result = results[0];
	            for (var _iterator7 = results, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	                var _ref7;
	
	                if (_isArray7) {
	                    if (_i7 >= _iterator7.length) break;
	                    _ref7 = _iterator7[_i7++];
	                } else {
	                    _i7 = _iterator7.next();
	                    if (_i7.done) break;
	                    _ref7 = _i7.value;
	                }
	
	                var _result = _ref7;
	
	                expect(_result).toEqual(result);
	            }
	            if (set.result) {
	                expect(_typeof(results[0])).toEqual("number");
	                expect(results[0]).toBeCalculable();
	            } else {
	                expect(_typeof(results[0])).toEqual("number");
	                expect(results[0]).toBeNaN();
	            }
	        }
	    };
	    it("UtilsAnimationEasing", function () {
	        expect(typeof _UtilsAnimationEasing2.default === "undefined" ? "undefined" : _typeof(_UtilsAnimationEasing2.default)).toEqual("function");
	    });
	    it("Utils.Animation.Easing.swing", function () {
	        test([_Utils2.default.Animation.Easing.swing, _UtilsAnimation2.default.Easing.swing, _UtilsAnimationEasing2.default.swing], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInQuad", function () {
	        test([_Utils2.default.Animation.Easing.easeInQuad, _UtilsAnimation2.default.Easing.easeInQuad, _UtilsAnimationEasing2.default.easeInQuad], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutQuad", function () {
	        test([_Utils2.default.Animation.Easing.easeOutQuad, _UtilsAnimation2.default.Easing.easeOutQuad, _UtilsAnimationEasing2.default.easeOutQuad], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutQuad", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutQuad, _UtilsAnimation2.default.Easing.easeInOutQuad, _UtilsAnimationEasing2.default.easeInOutQuad], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInCubic", function () {
	        test([_Utils2.default.Animation.Easing.easeInCubic, _UtilsAnimation2.default.Easing.easeInCubic, _UtilsAnimationEasing2.default.easeInCubic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutCubic", function () {
	        test([_Utils2.default.Animation.Easing.easeOutCubic, _UtilsAnimation2.default.Easing.easeOutCubic, _UtilsAnimationEasing2.default.easeOutCubic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutCubic", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutCubic, _UtilsAnimation2.default.Easing.easeInOutCubic, _UtilsAnimationEasing2.default.easeInOutCubic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInQuart", function () {
	        test([_Utils2.default.Animation.Easing.easeInQuart, _UtilsAnimation2.default.Easing.easeInQuart, _UtilsAnimationEasing2.default.easeInQuart], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutQuart", function () {
	        test([_Utils2.default.Animation.Easing.easeOutQuart, _UtilsAnimation2.default.Easing.easeOutQuart, _UtilsAnimationEasing2.default.easeOutQuart], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutQuart", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutQuart, _UtilsAnimation2.default.Easing.easeInOutQuart, _UtilsAnimationEasing2.default.easeInOutQuart], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInQuint", function () {
	        test([_Utils2.default.Animation.Easing.easeInQuint, _UtilsAnimation2.default.Easing.easeInQuint, _UtilsAnimationEasing2.default.easeInQuint], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutQuint", function () {
	        test([_Utils2.default.Animation.Easing.easeOutQuint, _UtilsAnimation2.default.Easing.easeOutQuint, _UtilsAnimationEasing2.default.easeOutQuint], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutQuint", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutQuint, _UtilsAnimation2.default.Easing.easeInOutQuint, _UtilsAnimationEasing2.default.easeInOutQuint], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInSine", function () {
	        test([_Utils2.default.Animation.Easing.easeInSine, _UtilsAnimation2.default.Easing.easeInSine, _UtilsAnimationEasing2.default.easeInSine], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutSine", function () {
	        test([_Utils2.default.Animation.Easing.easeOutSine, _UtilsAnimation2.default.Easing.easeOutSine, _UtilsAnimationEasing2.default.easeOutSine], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutSine", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutSine, _UtilsAnimation2.default.Easing.easeInOutSine, _UtilsAnimationEasing2.default.easeInOutSine], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInExpo", function () {
	        test([_Utils2.default.Animation.Easing.easeInExpo, _UtilsAnimation2.default.Easing.easeInExpo, _UtilsAnimationEasing2.default.easeInExpo], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutExpo", function () {
	        test([_Utils2.default.Animation.Easing.easeOutExpo, _UtilsAnimation2.default.Easing.easeOutExpo, _UtilsAnimationEasing2.default.easeOutExpo], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutExpo", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutExpo, _UtilsAnimation2.default.Easing.easeInOutExpo, _UtilsAnimationEasing2.default.easeInOutExpo], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInCirc", function () {
	        test([_Utils2.default.Animation.Easing.easeInCirc, _UtilsAnimation2.default.Easing.easeInCirc, _UtilsAnimationEasing2.default.easeInCirc], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutCirc", function () {
	        test([_Utils2.default.Animation.Easing.easeOutCirc, _UtilsAnimation2.default.Easing.easeOutCirc, _UtilsAnimationEasing2.default.easeOutCirc], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutCirc", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutCirc, _UtilsAnimation2.default.Easing.easeInOutCirc, _UtilsAnimationEasing2.default.easeInOutCirc], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInElastic", function () {
	        test([_Utils2.default.Animation.Easing.easeInElastic, _UtilsAnimation2.default.Easing.easeInElastic, _UtilsAnimationEasing2.default.easeInElastic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutElastic", function () {
	        test([_Utils2.default.Animation.Easing.easeOutElastic, _UtilsAnimation2.default.Easing.easeOutElastic, _UtilsAnimationEasing2.default.easeOutElastic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutElastic", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutElastic, _UtilsAnimation2.default.Easing.easeInOutElastic, _UtilsAnimationEasing2.default.easeInOutElastic], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInBack", function () {
	        test([_Utils2.default.Animation.Easing.easeInBack, _UtilsAnimation2.default.Easing.easeInBack, _UtilsAnimationEasing2.default.easeInBack], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutBack", function () {
	        test([_Utils2.default.Animation.Easing.easeOutBack, _UtilsAnimation2.default.Easing.easeOutBack, _UtilsAnimationEasing2.default.easeOutBack], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutBack", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutBack, _UtilsAnimation2.default.Easing.easeInOutBack, _UtilsAnimationEasing2.default.easeInOutBack], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInBounce", function () {
	        test([_Utils2.default.Animation.Easing.easeInBounce, _UtilsAnimation2.default.Easing.easeInBounce, _UtilsAnimationEasing2.default.easeInBounce], dataSet);
	    });
	    it("Utils.Animation.Easing.easeOutBounce", function () {
	        test([_Utils2.default.Animation.Easing.easeOutBounce, _UtilsAnimation2.default.Easing.easeOutBounce, _UtilsAnimationEasing2.default.easeOutBounce], dataSet);
	    });
	    it("Utils.Animation.Easing.easeInOutBounce", function () {
	        test([_Utils2.default.Animation.Easing.easeInOutBounce, _UtilsAnimation2.default.Easing.easeInOutBounce, _UtilsAnimationEasing2.default.easeInOutBounce], dataSet);
	    });
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsBrowser = __webpack_require__(8);
	
	var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsBrowser", function () {
	    var testBrowsers = function testBrowsers() {
	        var opera1 = _UtilsBrowser2.default.isOpera();
	        var opera2 = _Utils2.default.Browser.isOpera();
	        expect(typeof opera1 === "undefined" ? "undefined" : _typeof(opera1)).toEqual("boolean");
	        expect(typeof opera2 === "undefined" ? "undefined" : _typeof(opera2)).toEqual("boolean");
	        expect(opera1).toEqual(opera2);
	        var operaNew1 = _UtilsBrowser2.default.isOperaNew();
	        var operaNew2 = _Utils2.default.Browser.isOperaNew();
	        expect(typeof operaNew1 === "undefined" ? "undefined" : _typeof(operaNew1)).toEqual("boolean");
	        expect(typeof operaNew2 === "undefined" ? "undefined" : _typeof(operaNew2)).toEqual("boolean");
	        expect(operaNew1).toEqual(operaNew2);
	        var msie1 = _UtilsBrowser2.default.isMSIE();
	        var msie2 = _Utils2.default.Browser.isMSIE();
	        expect(typeof msie1 === "undefined" ? "undefined" : _typeof(msie1)).toEqual("boolean");
	        expect(typeof msie2 === "undefined" ? "undefined" : _typeof(msie2)).toEqual("boolean");
	        expect(msie1).toEqual(msie2);
	        var msieNew1 = _UtilsBrowser2.default.isMSIENew();
	        var msieNew2 = _Utils2.default.Browser.isMSIENew();
	        expect(typeof msieNew1 === "undefined" ? "undefined" : _typeof(msieNew1)).toEqual("boolean");
	        expect(typeof msieNew2 === "undefined" ? "undefined" : _typeof(msieNew2)).toEqual("boolean");
	        expect(msieNew1).toEqual(msieNew2);
	        var chrome1 = _UtilsBrowser2.default.isChrome();
	        var chrome2 = _Utils2.default.Browser.isChrome();
	        expect(typeof chrome1 === "undefined" ? "undefined" : _typeof(chrome1)).toEqual("boolean");
	        expect(typeof chrome2 === "undefined" ? "undefined" : _typeof(chrome2)).toEqual("boolean");
	        expect(chrome1).toEqual(chrome2);
	        var safari1 = _UtilsBrowser2.default.isSafari();
	        var safari2 = _Utils2.default.Browser.isSafari();
	        expect(typeof safari1 === "undefined" ? "undefined" : _typeof(safari1)).toEqual("boolean");
	        expect(typeof safari2 === "undefined" ? "undefined" : _typeof(safari2)).toEqual("boolean");
	        expect(safari1).toEqual(safari2);
	        var firefox1 = _UtilsBrowser2.default.isFirefox();
	        var firefox2 = _Utils2.default.Browser.isFirefox();
	        expect(typeof firefox1 === "undefined" ? "undefined" : _typeof(firefox1)).toEqual("boolean");
	        expect(typeof firefox2 === "undefined" ? "undefined" : _typeof(firefox2)).toEqual("boolean");
	        expect(firefox1).toEqual(firefox2);
	        var browsers = {
	            "Opera": opera1,
	            "Opera New": operaNew1,
	            "MSIE": msie1,
	            "MSIE New": msieNew1,
	            "Chrome": chrome1,
	            "Safari": safari1,
	            "Firefox": firefox1
	        };
	        var isBrowserDetected = false;
	        for (var browser in browsers) {
	            if (isBrowserDetected) {
	                expect(browsers[browser]).toEqual(false);
	            } else if (browsers[browser]) {
	                isBrowserDetected = true;
	                var version1 = void 0;
	                var version2 = void 0;
	                var version3 = _UtilsBrowser2.default.getVersion();
	                switch (browser) {
	                    case "Opera":
	                        version1 = _UtilsBrowser2.default.getOperaVersion();
	                        version2 = _Utils2.default.Browser.getOperaVersion();
	                        break;
	                    case "Opera New":
	                        version1 = _UtilsBrowser2.default.getOperaNewVersion();
	                        version2 = _Utils2.default.Browser.getOperaNewVersion();
	                        break;
	                    case "MSIE":
	                        version1 = _UtilsBrowser2.default.getMSIEVersion();
	                        version2 = _Utils2.default.Browser.getMSIEVersion();
	                        break;
	                    case "MSIE New":
	                        version1 = _UtilsBrowser2.default.getMSIENewVersion();
	                        version2 = _Utils2.default.Browser.getMSIENewVersion();
	                        break;
	                    case "Chrome":
	                        version1 = _UtilsBrowser2.default.getChromeVersion();
	                        version2 = _Utils2.default.Browser.getChromeVersion();
	                        break;
	                    case "Safari":
	                        version1 = _UtilsBrowser2.default.getSafariVersion();
	                        version2 = _Utils2.default.Browser.getSafariVersion();
	                        break;
	                    case "Firefox":
	                        version1 = _UtilsBrowser2.default.getFirefoxVersion();
	                        version2 = _Utils2.default.Browser.getFirefoxVersion();
	                        break;
	                    default:
	                }
	                expect(typeof version1 === "undefined" ? "undefined" : _typeof(version1)).toEqual("string");
	                expect(typeof version2 === "undefined" ? "undefined" : _typeof(version2)).toEqual("string");
	                expect(version1).toEqual(version2);
	                expect(version1).toEqual(version3);
	            }
	        }
	    };
	    var testBrowsersType = function testBrowsersType() {
	        var isWebKit1 = _UtilsBrowser2.default.isWebKit();
	        var isWebKit2 = _Utils2.default.Browser.isWebKit();
	        expect(typeof isWebKit1 === "undefined" ? "undefined" : _typeof(isWebKit1)).toEqual("boolean");
	        expect(typeof isWebKit2 === "undefined" ? "undefined" : _typeof(isWebKit2)).toEqual("boolean");
	        expect(isWebKit1).toEqual(isWebKit2);
	        var isGecko1 = _UtilsBrowser2.default.isGecko();
	        var isGecko2 = _Utils2.default.Browser.isGecko();
	        expect(typeof isGecko1 === "undefined" ? "undefined" : _typeof(isGecko1)).toEqual("boolean");
	        expect(typeof isGecko2 === "undefined" ? "undefined" : _typeof(isGecko2)).toEqual("boolean");
	        expect(isGecko1).toEqual(isGecko2);
	        var isAndroid1 = _UtilsBrowser2.default.isAndroid();
	        var isAndroid2 = _Utils2.default.Browser.isAndroid();
	        expect(typeof isAndroid1 === "undefined" ? "undefined" : _typeof(isAndroid1)).toEqual("boolean");
	        expect(typeof isAndroid2 === "undefined" ? "undefined" : _typeof(isAndroid2)).toEqual("boolean");
	        expect(isAndroid1).toEqual(isAndroid2);
	        var isLinux1 = _UtilsBrowser2.default.isLinux();
	        var isLinux2 = _Utils2.default.Browser.isLinux();
	        expect(typeof isLinux1 === "undefined" ? "undefined" : _typeof(isLinux1)).toEqual("boolean");
	        expect(typeof isLinux2 === "undefined" ? "undefined" : _typeof(isLinux2)).toEqual("boolean");
	        expect(isLinux1).toEqual(isLinux2);
	        expect(isWebKit1).not.toEqual(isGecko1);
	        expect(isAndroid1).toEqual(isLinux1);
	    };
	    var testOtherBrowsers = function testOtherBrowsers() {
	        var isOther1 = _UtilsBrowser2.default.isOther();
	        var isOther2 = _Utils2.default.Browser.isOther();
	        expect(typeof isOther1 === "undefined" ? "undefined" : _typeof(isOther1)).toEqual("boolean");
	        expect(typeof isOther2 === "undefined" ? "undefined" : _typeof(isOther2)).toEqual("boolean");
	        expect(isOther1).toEqual(isOther2);
	        var getOtherName1 = _UtilsBrowser2.default.getOtherName();
	        var getOtherName2 = _Utils2.default.Browser.getOtherName();
	        expect(typeof getOtherName1 === "undefined" ? "undefined" : _typeof(getOtherName1)).toEqual("string");
	        expect(typeof getOtherName2 === "undefined" ? "undefined" : _typeof(getOtherName2)).toEqual("string");
	        expect(getOtherName1).toEqual(getOtherName2);
	        var getOtherVersion1 = _UtilsBrowser2.default.getOtherVersion();
	        var getOtherVersion2 = _Utils2.default.Browser.getOtherVersion();
	        expect(typeof getOtherVersion1 === "undefined" ? "undefined" : _typeof(getOtherVersion1)).toEqual("string");
	        expect(typeof getOtherVersion2 === "undefined" ? "undefined" : _typeof(getOtherVersion2)).toEqual("string");
	        expect(getOtherVersion1).toEqual(getOtherVersion2);
	    };
	    it("UtilsBrowser", function () {
	        expect(typeof _UtilsBrowser2.default === "undefined" ? "undefined" : _typeof(_UtilsBrowser2.default)).toEqual("function");
	    });
	    it("UtilsBrowser.getInfo", function () {
	        var info1 = _UtilsBrowser2.default.getInfo();
	        var info2 = _Utils2.default.Browser.getInfo();
	        expect(Object.keys(info1)).toBeArray(["browser", "mobile", "version"]);
	        expect(_typeof(info1.browser)).toEqual("string");
	        expect(_typeof(info1.mobile)).toEqual("boolean");
	        expect(_typeof(info1.version)).toEqual("string");
	        expect(info1.browser).toEqual(_UtilsBrowser2.default.getName());
	        expect(info1.mobile).toEqual(_UtilsBrowser2.default.isMobile());
	        expect(info1.version).toEqual(_UtilsBrowser2.default.getVersion());
	        expect(info1).toEqual(info2);
	    });
	    it("UtilsBrowser.getName", function () {
	        var name1 = _UtilsBrowser2.default.getName();
	        var name2 = _Utils2.default.Browser.getName();
	        expect(typeof name1 === "undefined" ? "undefined" : _typeof(name1)).toEqual("string");
	        expect(typeof name2 === "undefined" ? "undefined" : _typeof(name2)).toEqual("string");
	        expect(name1).toEqual(name2);
	    });
	    it("UtilsBrowser.getVersion", function () {
	        var version1 = _UtilsBrowser2.default.getVersion();
	        var version2 = _Utils2.default.Browser.getVersion();
	        expect(typeof version1 === "undefined" ? "undefined" : _typeof(version1)).toEqual("string");
	        expect(typeof version2 === "undefined" ? "undefined" : _typeof(version2)).toEqual("string");
	        expect(version1).toEqual(version2);
	    });
	    it("UtilsBrowser.trimVersion", function () {
	        var version1 = _UtilsBrowser2.default.getVersion();
	        var version2 = _Utils2.default.Browser.getVersion();
	        var trimVersion1 = _UtilsBrowser2.default.trimVersion(version1);
	        var trimVersion2 = _Utils2.default.Browser.trimVersion(version2);
	        expect(typeof trimVersion1 === "undefined" ? "undefined" : _typeof(trimVersion1)).toEqual("string");
	        expect(typeof trimVersion2 === "undefined" ? "undefined" : _typeof(trimVersion2)).toEqual("string");
	        expect(trimVersion1).toEqual(trimVersion2);
	        var paramsValues = [undefined, null, true, 123, "test", trimVersion1];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var paramsValue = _ref;
	
	            var trimVersion = _UtilsBrowser2.default.trimVersion(paramsValue);
	            expect(typeof trimVersion === "undefined" ? "undefined" : _typeof(trimVersion)).toEqual("string");
	            if (paramsValue === "test") {
	                expect(trimVersion).toEqual("test");
	            } else if (paramsValue === trimVersion1) {
	                expect(trimVersion).toEqual(trimVersion1);
	            } else {
	                expect(trimVersion).toEqual("");
	            }
	        }
	    });
	    it("UtilsBrowser.isMobile", function () {
	        var mobile1 = _UtilsBrowser2.default.isMobile();
	        var mobile2 = _Utils2.default.Browser.isMobile();
	        expect(typeof mobile1 === "undefined" ? "undefined" : _typeof(mobile1)).toEqual("boolean");
	        expect(typeof mobile2 === "undefined" ? "undefined" : _typeof(mobile2)).toEqual("boolean");
	        expect(mobile1).toEqual(mobile2);
	        var tablet1 = _UtilsBrowser2.default.isTabletPC();
	        var tablet2 = _Utils2.default.Browser.isTabletPC();
	        expect(typeof tablet1 === "undefined" ? "undefined" : _typeof(tablet1)).toEqual("boolean");
	        expect(typeof tablet2 === "undefined" ? "undefined" : _typeof(tablet2)).toEqual("boolean");
	        expect(tablet1).toEqual(tablet2);
	        if (mobile1) {
	            expect(tablet1).toEqual(false);
	        }
	    });
	    it("UtilsBrowser.isOpera", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getOperaVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isOperaNew", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getOperaNewVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isMSIE", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getMSIEVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isMSIENew", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getMSIENewVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isChrome", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getChromeVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isSafari", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getSafariVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isFirefox", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.getFirefoxVersion", function () {
	        testBrowsers();
	    });
	    it("UtilsBrowser.isOther", function () {
	        testOtherBrowsers();
	    });
	    it("UtilsBrowser.getOtherName", function () {
	        testOtherBrowsers();
	    });
	    it("UtilsBrowser.getOtherVersion", function () {
	        testOtherBrowsers();
	    });
	    it("UtilsBrowser.isSupported", function () {
	        var isSupported1 = _UtilsBrowser2.default.isSupported();
	        var isSupported2 = _Utils2.default.Browser.isSupported();
	        expect(typeof isSupported1 === "undefined" ? "undefined" : _typeof(isSupported1)).toEqual("boolean");
	        expect(typeof isSupported2 === "undefined" ? "undefined" : _typeof(isSupported2)).toEqual("boolean");
	        expect(isSupported1).toEqual(isSupported2);
	        expect(isSupported1).toEqual(true);
	    });
	    it("UtilsBrowser.isWebKit", function () {
	        testBrowsersType();
	    });
	    it("UtilsBrowser.isGecko", function () {
	        testBrowsersType();
	    });
	    it("UtilsBrowser.isAndroid", function () {
	        testBrowsersType();
	    });
	    it("UtilsBrowser.isLinux", function () {
	        testBrowsersType();
	    });
	    it("UtilsBrowser.isTabletPC", function () {
	        var mobile1 = _UtilsBrowser2.default.isMobile();
	        var mobile2 = _Utils2.default.Browser.isMobile();
	        expect(typeof mobile1 === "undefined" ? "undefined" : _typeof(mobile1)).toEqual("boolean");
	        expect(typeof mobile2 === "undefined" ? "undefined" : _typeof(mobile2)).toEqual("boolean");
	        expect(mobile1).toEqual(mobile2);
	        var tablet1 = _UtilsBrowser2.default.isTabletPC();
	        var tablet2 = _Utils2.default.Browser.isTabletPC();
	        expect(typeof tablet1 === "undefined" ? "undefined" : _typeof(tablet1)).toEqual("boolean");
	        expect(typeof tablet2 === "undefined" ? "undefined" : _typeof(tablet2)).toEqual("boolean");
	        expect(tablet1).toEqual(tablet2);
	        if (tablet1) {
	            expect(mobile1).toEqual(false);
	        }
	    });
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsCookie = __webpack_require__(9);
	
	var _UtilsCookie2 = _interopRequireDefault(_UtilsCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var URL = __webpack_require__(10);
	
	describe("UtilsCookie", function () {
	    var test = function test() {
	        var now = new Date().getTime();
	        var paramsValues = [undefined, false, true, 30, "value", "/", "test", location.hostname];
	        var dataSet = [];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            for (var _iterator3 = paramsValues, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                var _ref3;
	
	                if (_isArray3) {
	                    if (_i3 >= _iterator3.length) break;
	                    _ref3 = _iterator3[_i3++];
	                } else {
	                    _i3 = _iterator3.next();
	                    if (_i3.done) break;
	                    _ref3 = _i3.value;
	                }
	
	                var x2 = _ref3;
	
	                for (var _iterator4 = paramsValues, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	                    var _ref4;
	
	                    if (_isArray4) {
	                        if (_i4 >= _iterator4.length) break;
	                        _ref4 = _iterator4[_i4++];
	                    } else {
	                        _i4 = _iterator4.next();
	                        if (_i4.done) break;
	                        _ref4 = _i4.value;
	                    }
	
	                    var x3 = _ref4;
	
	                    for (var _iterator5 = paramsValues, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	                        var _ref5;
	
	                        if (_isArray5) {
	                            if (_i5 >= _iterator5.length) break;
	                            _ref5 = _iterator5[_i5++];
	                        } else {
	                            _i5 = _iterator5.next();
	                            if (_i5.done) break;
	                            _ref5 = _i5.value;
	                        }
	
	                        var x4 = _ref5;
	
	                        for (var _iterator6 = paramsValues, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	                            var _ref6;
	
	                            if (_isArray6) {
	                                if (_i6 >= _iterator6.length) break;
	                                _ref6 = _iterator6[_i6++];
	                            } else {
	                                _i6 = _iterator6.next();
	                                if (_i6.done) break;
	                                _ref6 = _i6.value;
	                            }
	
	                            var x5 = _ref6;
	
	                            for (var _iterator7 = paramsValues, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	                                var _ref7;
	
	                                if (_isArray7) {
	                                    if (_i7 >= _iterator7.length) break;
	                                    _ref7 = _iterator7[_i7++];
	                                } else {
	                                    _i7 = _iterator7.next();
	                                    if (_i7.done) break;
	                                    _ref7 = _i7.value;
	                                }
	
	                                var x6 = _ref7;
	
	                                for (var _iterator8 = paramsValues, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
	                                    var _ref8;
	
	                                    if (_isArray8) {
	                                        if (_i8 >= _iterator8.length) break;
	                                        _ref8 = _iterator8[_i8++];
	                                    } else {
	                                        _i8 = _iterator8.next();
	                                        if (_i8.done) break;
	                                        _ref8 = _i8.value;
	                                    }
	
	                                    var x7 = _ref8;
	
	                                    if ([x2, x3, x4, x5, x6, x7].indexOf(x1) === -1 && [x1, x3, x4, x5, x6, x7].indexOf(x2) === -1 && [x1, x2, x4, x5, x6, x7].indexOf(x3) === -1 && [x1, x2, x3, x5, x6, x7].indexOf(x4) === -1 && [x1, x2, x3, x4, x6, x7].indexOf(x5) === -1 && [x1, x2, x3, x4, x5, x7].indexOf(x6) === -1 && [x1, x2, x3, x4, x5, x6].indexOf(x7) === -1) {
	                                        var params = [x1, x2, x3, x4, x5, x6, x7];
	                                        var cond = typeof x1 === "boolean" && typeof x2 === "string" && _UtilsCookie2.default.regValidKey.test(x2) && typeof x3 === "string" && typeof x4 === "number" && x4 < 365 && typeof x5 === "string" && typeof x6 === "string" && x6.indexOf(location.hostname) !== -1 && typeof x7 === "boolean" && x7 === (location.protocol === "https:");
	                                        if (cond) {
	                                            var u = URL.parse("http://" + x6 + x5);
	                                            if (u.hostname !== x6 || u.path !== x5) {
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
	        for (var _iterator2 = dataSet, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var set = _ref2;
	
	            /**
	             * Set data
	             */
	            var setItem1 = _UtilsCookie2.default.setItem.apply(_UtilsCookie2.default, set.params);
	            var setItem2 = _Utils2.default.Cookie.setItem.apply(_UtilsCookie2.default, set.params);
	            expect(setItem1).toEqual(setItem2);
	            expect(typeof setItem1 === "undefined" ? "undefined" : _typeof(setItem1)).toEqual("boolean");
	            if (set.result) {
	                expect(setItem1).toEqual(true);
	            } else {
	                expect(setItem1).toEqual(false);
	            }
	            if (setItem1) {
	                /**
	                 * Get data
	                 */
	                var getItem1 = _UtilsCookie2.default.getItem.apply(_UtilsCookie2.default, set.params.slice(0, 2));
	                var getItem2 = _Utils2.default.Cookie.getItem.apply(_UtilsCookie2.default, set.params.slice(0, 2));
	                expect(getItem1).toEqual(getItem2);
	                expect(typeof getItem1 === "undefined" ? "undefined" : _typeof(getItem1)).toEqual("string");
	                expect(getItem1).toEqual(set.params[2]);
	                /**
	                 * Get keys
	                 */
	                var getKeys1 = _UtilsCookie2.default.getKeys.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                var getKeys2 = _Utils2.default.Cookie.getKeys.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                expect(getKeys1).toEqual(getKeys2);
	                expect(getKeys1).toBeArray();
	                expect(getKeys1).toContain(set.params[1]);
	                /**
	                 * Remove item
	                 */
	                var removeItem1 = _UtilsCookie2.default.removeItem.apply(_UtilsCookie2.default, set.params.slice(0, 2));
	                var removeItem2 = _Utils2.default.Cookie.removeItem.apply(_UtilsCookie2.default, set.params.slice(0, 2));
	                getKeys1 = _UtilsCookie2.default.getKeys.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                expect(removeItem1).toEqual(removeItem2);
	                expect(typeof removeItem1 === "undefined" ? "undefined" : _typeof(removeItem1)).toEqual("boolean");
	                expect(removeItem1).toEqual(true);
	                expect(getKeys1).not.toContain(set.params[1]);
	                /**
	                 * Clean items
	                 */
	                setItem1 = _UtilsCookie2.default.setItem.apply(_UtilsCookie2.default, set.params);
	                getKeys1 = _UtilsCookie2.default.getKeys.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                var clear1 = _UtilsCookie2.default.clear.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                var clear2 = _Utils2.default.Cookie.clear.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                getKeys2 = _UtilsCookie2.default.getKeys.apply(_UtilsCookie2.default, set.params.slice(0, 1));
	                expect(clear1).toEqual(clear2);
	                expect(typeof clear1 === "undefined" ? "undefined" : _typeof(clear1)).toEqual("boolean");
	                expect(clear1).toEqual(true);
	                expect(getKeys2).not.toContain(set.params[1]);
	            }
	        }
	    };
	    it("UtilsCookie", function () {
	        expect(typeof _UtilsCookie2.default === "undefined" ? "undefined" : _typeof(_UtilsCookie2.default)).toEqual("function");
	    });
	    it("UtilsCookie.isSupported", function () {
	        var isSupported1 = _UtilsCookie2.default.isSupported();
	        var isSupported2 = _Utils2.default.Cookie.isSupported();
	        expect(isSupported1).toEqual(isSupported2);
	        expect(typeof isSupported1 === "undefined" ? "undefined" : _typeof(isSupported1)).toEqual("boolean");
	        expect(isSupported1).toEqual(true);
	    });
	    it(["UtilsCookie.setItem", "UtilsCookie.getItem", "UtilsCookie.removeItem", "UtilsCookie.getKeys", "UtilsCookie.clear"].join("\r\n"), function () {
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

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsDocument = __webpack_require__(16);
	
	var _UtilsDocument2 = _interopRequireDefault(_UtilsDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsDocument", function () {
	    var dataSet = void 0;
	    var div1 = void 0;
	    var div2 = void 0;
	    var div3 = void 0;
	    var iframe = void 0;
	    beforeEach(function () {
	        div1 = window.document.createElement("div");
	        div1.id = "div1";
	        div2 = window.document.createElement("div");
	        div2.id = "div2";
	        window.document.body.appendChild(div2);
	        div3 = window.document.createElement("div");
	        div3.id = "div3";
	        iframe = window.document.createElement("iframe");
	        iframe.src = "javascript:;";
	        window.document.body.appendChild(iframe);
	        iframe.contentWindow.document.body.appendChild(div3);
	        var paramsValues = [undefined, null, false, true, 123, "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body];
	        dataSet = [];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            var cond = x1 === undefined || x1 === window || x1 === iframe.contentWindow;
	            dataSet.push({
	                params: [x1],
	                result: cond
	            });
	        }
	    });
	    afterEach(function () {
	        window.document.body.removeChild(div2);
	        window.document.body.removeChild(iframe);
	    });
	    var test = function test(methods, _dataSet) {
	        for (var _iterator2 = _dataSet, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var set = _ref2;
	
	            var results = [];
	            for (var _iterator3 = methods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                var _ref3;
	
	                if (_isArray3) {
	                    if (_i3 >= _iterator3.length) break;
	                    _ref3 = _iterator3[_i3++];
	                } else {
	                    _i3 = _iterator3.next();
	                    if (_i3.done) break;
	                    _ref3 = _i3.value;
	                }
	
	                var method = _ref3;
	
	                results.push(method.apply(_UtilsDocument2.default, set.params));
	            }
	            var result = results[0];
	            for (var _iterator4 = results, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	                var _ref4;
	
	                if (_isArray4) {
	                    if (_i4 >= _iterator4.length) break;
	                    _ref4 = _iterator4[_i4++];
	                } else {
	                    _i4 = _iterator4.next();
	                    if (_i4.done) break;
	                    _ref4 = _i4.value;
	                }
	
	                var _result = _ref4;
	
	                expect(_result).toEqual(result);
	            }
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("number");
	            if (set.result) {
	                expect(result).toBeCalculable();
	            } else {
	                expect(result).toBeNaN();
	            }
	        }
	    };
	    it("UtilsDocument", function () {
	        expect(typeof _UtilsDocument2.default === "undefined" ? "undefined" : _typeof(_UtilsDocument2.default)).toEqual("function");
	    });
	    it("UtilsDocument.getHeight", function () {
	        test([_UtilsDocument2.default.getHeight, _Utils2.default.Document.getHeight], dataSet);
	    });
	    it("UtilsDocument.getWidth", function () {
	        test([_UtilsDocument2.default.getWidth, _Utils2.default.Document.getWidth], dataSet);
	    });
	    it("UtilsDocument.getScrollTop", function () {
	        test([_UtilsDocument2.default.getScrollTop, _Utils2.default.Document.getScrollTop], dataSet);
	    });
	    it("UtilsDocument.getScrollLeft", function () {
	        test([_UtilsDocument2.default.getScrollLeft, _Utils2.default.Document.getScrollLeft], dataSet);
	    });
	    it("UtilsDocument.getScroll", function () {
	        var methods = [_UtilsDocument2.default.getScroll, _Utils2.default.Document.getScroll];
	        for (var _iterator5 = dataSet, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	            var _ref5;
	
	            if (_isArray5) {
	                if (_i5 >= _iterator5.length) break;
	                _ref5 = _iterator5[_i5++];
	            } else {
	                _i5 = _iterator5.next();
	                if (_i5.done) break;
	                _ref5 = _i5.value;
	            }
	
	            var set = _ref5;
	
	            var results = [];
	            for (var _iterator6 = methods, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	                var _ref6;
	
	                if (_isArray6) {
	                    if (_i6 >= _iterator6.length) break;
	                    _ref6 = _iterator6[_i6++];
	                } else {
	                    _i6 = _iterator6.next();
	                    if (_i6.done) break;
	                    _ref6 = _i6.value;
	                }
	
	                var method = _ref6;
	
	                results.push(method.apply(_UtilsDocument2.default, set.params));
	            }
	            var result = results[0];
	            for (var _iterator7 = results, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	                var _ref7;
	
	                if (_isArray7) {
	                    if (_i7 >= _iterator7.length) break;
	                    _ref7 = _iterator7[_i7++];
	                } else {
	                    _i7 = _iterator7.next();
	                    if (_i7.done) break;
	                    _ref7 = _i7.value;
	                }
	
	                var _result = _ref7;
	
	                expect(_result).toEqual(result);
	            }
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(Object.keys(result)).toBeArray(["left", "top"]);
	            expect(_typeof(result.left)).toEqual("number");
	            expect(_typeof(result.top)).toEqual("number");
	            if (set.result) {
	                expect(result.left).toBeCalculable();
	                expect(result.top).toBeCalculable();
	            } else {
	                expect(result.left).toBeNaN();
	                expect(result.top).toBeNaN();
	            }
	        }
	    });
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsMouse = __webpack_require__(19);
	
	var _UtilsMouse2 = _interopRequireDefault(_UtilsMouse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsMouse", function () {
	    it("UtilsMouse", function () {
	        expect(typeof _UtilsMouse2.default === "undefined" ? "undefined" : _typeof(_UtilsMouse2.default)).toEqual("function");
	    });
	    it("UtilsMouse.getWheelDelta", function () {
	        var evt = document.createEvent("MouseEvents");
	        evt.initMouseEvent("wheel", true, true, window, 10, 10, 10, 80, 20, false, false, false, false, 10, null);
	        var paramsValues = [evt, undefined, null, false, true, 123, "test", window, window.document, window.document.body];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var paramsValue = _ref;
	
	            var result = _UtilsMouse2.default.getWheelDelta(paramsValue);
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("number");
	            if (paramsValue === evt) {
	                expect(result).toBeCalculable();
	            } else {
	                expect(result).toBeNaN();
	            }
	        }
	    });
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsScreen = __webpack_require__(20);
	
	var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsScreen", function () {
	    var test = function test(methods) {
	        var results = [];
	        for (var _iterator = methods, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var method = _ref;
	
	            results.push(method.apply(_UtilsScreen2.default, []));
	        }
	        var result = results[0];
	        for (var _iterator2 = results, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var _result = _ref2;
	
	            expect(typeof _result === "undefined" ? "undefined" : _typeof(_result)).toEqual("number");
	            expect(_result).toBeCalculable();
	            expect(_result).toEqual(result);
	            expect(_result).not.toEqual(0);
	        }
	    };
	    var test2 = function test2(methods) {
	        var results = [];
	        for (var _iterator3 = methods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	            var _ref3;
	
	            if (_isArray3) {
	                if (_i3 >= _iterator3.length) break;
	                _ref3 = _iterator3[_i3++];
	            } else {
	                _i3 = _iterator3.next();
	                if (_i3.done) break;
	                _ref3 = _i3.value;
	            }
	
	            var method = _ref3;
	
	            results.push(method.apply(_UtilsScreen2.default, []));
	        }
	        var result = results[0];
	        for (var _iterator4 = results, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	            var _ref4;
	
	            if (_isArray4) {
	                if (_i4 >= _iterator4.length) break;
	                _ref4 = _iterator4[_i4++];
	            } else {
	                _i4 = _iterator4.next();
	                if (_i4.done) break;
	                _ref4 = _i4.value;
	            }
	
	            var _result = _ref4;
	
	            expect(typeof _result === "undefined" ? "undefined" : _typeof(_result)).toEqual("object");
	            expect(Object.keys(_result)).toBeArray(["width", "height"]);
	            expect(_result.width).toBeCalculable();
	            expect(_result.width).toEqual(result.width);
	            expect(_result.width).not.toEqual(0);
	            expect(_result.height).toBeCalculable();
	            expect(_result.height).toEqual(result.height);
	            expect(_result.height).not.toEqual(0);
	        }
	    };
	    it("UtilsScreen", function () {
	        expect(typeof _UtilsScreen2.default === "undefined" ? "undefined" : _typeof(_UtilsScreen2.default)).toEqual("function");
	    });
	    it("UtilsScreen.getInfo", function () {
	        var info1 = _UtilsScreen2.default.getInfo();
	        var info2 = _Utils2.default.Screen.getInfo();
	        expect(info1).toEqual(info2);
	        expect(typeof info1 === "undefined" ? "undefined" : _typeof(info1)).toEqual("object");
	        expect(Object.keys(info1)).toBeArray(["availableSize", "colorDepth", "pixelRatio", "size"]);
	        expect(_typeof(info1.availableSize)).toEqual("object");
	        expect(Object.keys(info1.availableSize)).toBeArray(["width", "height"]);
	        expect(info1.availableSize).toEqual(_UtilsScreen2.default.getAvailableSizes());
	        expect(_typeof(info1.colorDepth)).toEqual("number");
	        expect(info1.colorDepth).toEqual(_UtilsScreen2.default.getColorDepth());
	        expect(_typeof(info1.pixelRatio)).toEqual("number");
	        expect(info1.pixelRatio).toEqual(_UtilsScreen2.default.getPixelRatio());
	        expect(_typeof(info1.size)).toEqual("object");
	        expect(Object.keys(info1.size)).toBeArray(["width", "height"]);
	        expect(info1.size).toEqual(_UtilsScreen2.default.getSizes());
	    });
	    it("UtilsScreen.getHeight", function () {
	        test([_UtilsScreen2.default.getHeight, _Utils2.default.Screen.getHeight]);
	    });
	    it("UtilsScreen.getWidth", function () {
	        test([_UtilsScreen2.default.getWidth, _Utils2.default.Screen.getWidth]);
	    });
	    it("UtilsScreen.getSizes", function () {
	        test2([_UtilsScreen2.default.getSizes, _Utils2.default.Screen.getSizes]);
	    });
	    it("UtilsScreen.getAvailableHeight", function () {
	        test([_UtilsScreen2.default.getAvailableHeight, _Utils2.default.Screen.getAvailableHeight]);
	    });
	    it("UtilsScreen.getAvailableWidth", function () {
	        test([_UtilsScreen2.default.getAvailableWidth, _Utils2.default.Screen.getAvailableWidth]);
	    });
	    it("UtilsScreen.getAvailableSizes", function () {
	        test2([_UtilsScreen2.default.getAvailableSizes, _Utils2.default.Screen.getAvailableSizes]);
	    });
	    it("UtilsScreen.getPixelRatio", function () {
	        test([_UtilsScreen2.default.getPixelRatio, _Utils2.default.Screen.getPixelRatio]);
	    });
	    it("UtilsScreen.getColorDepth", function () {
	        test([_UtilsScreen2.default.getColorDepth, _Utils2.default.Screen.getColorDepth]);
	    });
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsSystem = __webpack_require__(21);
	
	var _UtilsSystem2 = _interopRequireDefault(_UtilsSystem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsSystem", function () {
	    it("UtilsSystem", function () {
	        expect(typeof _UtilsSystem2.default === "undefined" ? "undefined" : _typeof(_UtilsSystem2.default)).toEqual("function");
	    });
	    it("UtilsSystem.getInfo", function () {
	        var info1 = _UtilsSystem2.default.getInfo();
	        var info2 = _Utils2.default.System.getInfo();
	        expect(info1).toEqual(info2);
	        expect(Object.keys(info1)).toBeArray(["name", "version"]);
	        expect(_typeof(info1.name)).toEqual("string");
	        expect(_typeof(info1.version)).toEqual("string");
	        expect(info1.name).toEqual(_UtilsSystem2.default.getName());
	        expect(info1.version).toEqual(_UtilsSystem2.default.getVersion());
	    });
	    it("UtilsSystem.getName", function () {
	        var name1 = _UtilsSystem2.default.getName();
	        var name2 = _Utils2.default.System.getName();
	        expect(typeof name1 === "undefined" ? "undefined" : _typeof(name1)).toEqual("string");
	        expect(typeof name2 === "undefined" ? "undefined" : _typeof(name2)).toEqual("string");
	        expect(name1).toEqual(name2);
	    });
	    it("UtilsSystem.getVersion", function () {
	        var version1 = _UtilsSystem2.default.getVersion();
	        var version2 = _Utils2.default.System.getVersion();
	        expect(typeof version1 === "undefined" ? "undefined" : _typeof(version1)).toEqual("string");
	        expect(typeof version2 === "undefined" ? "undefined" : _typeof(version2)).toEqual("string");
	        expect(version1).toEqual(version2);
	    });
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsUser = __webpack_require__(22);
	
	var _UtilsUser2 = _interopRequireDefault(_UtilsUser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsUser", function () {
	    it("UtilsUser", function () {
	        expect(typeof _UtilsUser2.default === "undefined" ? "undefined" : _typeof(_UtilsUser2.default)).toEqual("function");
	    });
	    it("UtilsUser.getInfo", function () {
	        var info1 = _UtilsUser2.default.getInfo();
	        var info2 = _Utils2.default.User.getInfo();
	        expect(info1).toEqual(info2);
	        expect(typeof info1 === "undefined" ? "undefined" : _typeof(info1)).toEqual("object");
	        expect(Object.keys(info1)).toBeArray(["browser", "screen", "system"]);
	        expect(info1.browser).toEqual(_Utils2.default.Browser.getInfo());
	        expect(info1.screen).toEqual(_Utils2.default.Screen.getInfo());
	        expect(info1.system).toEqual(_Utils2.default.System.getInfo());
	    });
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Utils = __webpack_require__(5);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _UtilsWindow = __webpack_require__(17);
	
	var _UtilsWindow2 = _interopRequireDefault(_UtilsWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe("UtilsWindow", function () {
	    var dataSet = void 0;
	    var div1 = void 0;
	    var div2 = void 0;
	    var div3 = void 0;
	    var iframe = void 0;
	    beforeEach(function () {
	        div1 = window.document.createElement("div");
	        div1.id = "div1";
	        div2 = window.document.createElement("div");
	        div2.id = "div2";
	        window.document.body.appendChild(div2);
	        div3 = window.document.createElement("div");
	        div3.id = "div3";
	        iframe = window.document.createElement("iframe");
	        iframe.src = "javascript:;";
	        window.document.body.appendChild(iframe);
	        iframe.contentWindow.document.body.appendChild(div3);
	        var paramsValues = [undefined, null, false, true, 123, "test", div1, div2, div3, window, window.document, iframe.contentWindow, iframe.contentWindow.document, window.document.body];
	        dataSet = [];
	        for (var _iterator = paramsValues, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var x1 = _ref;
	
	            var cond = x1 === undefined || x1 === window || x1 === iframe.contentWindow;
	            dataSet.push({
	                params: [x1],
	                result: cond
	            });
	        }
	    });
	    afterEach(function () {
	        window.document.body.removeChild(div2);
	        window.document.body.removeChild(iframe);
	    });
	    var test = function test(methods, _dataSet) {
	        for (var _iterator2 = _dataSet, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;
	
	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }
	
	            var set = _ref2;
	
	            var results = [];
	            for (var _iterator3 = methods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	                var _ref3;
	
	                if (_isArray3) {
	                    if (_i3 >= _iterator3.length) break;
	                    _ref3 = _iterator3[_i3++];
	                } else {
	                    _i3 = _iterator3.next();
	                    if (_i3.done) break;
	                    _ref3 = _i3.value;
	                }
	
	                var method = _ref3;
	
	                results.push(method.apply(_UtilsWindow2.default, set.params));
	            }
	            var result = results[0];
	            for (var _iterator4 = results, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	                var _ref4;
	
	                if (_isArray4) {
	                    if (_i4 >= _iterator4.length) break;
	                    _ref4 = _iterator4[_i4++];
	                } else {
	                    _i4 = _iterator4.next();
	                    if (_i4.done) break;
	                    _ref4 = _i4.value;
	                }
	
	                var _result = _ref4;
	
	                expect(_result).toEqual(result);
	            }
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("number");
	            if (set.result) {
	                expect(result).toBeCalculable();
	            } else {
	                expect(result).toBeNaN();
	            }
	        }
	    };
	    it("UtilsWindow", function () {
	        expect(typeof _UtilsWindow2.default === "undefined" ? "undefined" : _typeof(_UtilsWindow2.default)).toEqual("function");
	    });
	    it("UtilsWindow.getHeight", function () {
	        test([_UtilsWindow2.default.getHeight, _Utils2.default.Window.getHeight], dataSet);
	    });
	    it("UtilsWindow.getWidth", function () {
	        test([_UtilsWindow2.default.getWidth, _Utils2.default.Window.getWidth], dataSet);
	    });
	    it("UtilsWindow.getSizes", function () {
	        var methods = [_UtilsWindow2.default.getSizes, _Utils2.default.Window.getSizes];
	        for (var _iterator5 = dataSet, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	            var _ref5;
	
	            if (_isArray5) {
	                if (_i5 >= _iterator5.length) break;
	                _ref5 = _iterator5[_i5++];
	            } else {
	                _i5 = _iterator5.next();
	                if (_i5.done) break;
	                _ref5 = _i5.value;
	            }
	
	            var set = _ref5;
	
	            var results = [];
	            for (var _iterator6 = methods, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	                var _ref6;
	
	                if (_isArray6) {
	                    if (_i6 >= _iterator6.length) break;
	                    _ref6 = _iterator6[_i6++];
	                } else {
	                    _i6 = _iterator6.next();
	                    if (_i6.done) break;
	                    _ref6 = _i6.value;
	                }
	
	                var method = _ref6;
	
	                results.push(method.apply(_UtilsWindow2.default, set.params));
	            }
	            var result = results[0];
	            for (var _iterator7 = results, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	                var _ref7;
	
	                if (_isArray7) {
	                    if (_i7 >= _iterator7.length) break;
	                    _ref7 = _iterator7[_i7++];
	                } else {
	                    _i7 = _iterator7.next();
	                    if (_i7.done) break;
	                    _ref7 = _i7.value;
	                }
	
	                var _result = _ref7;
	
	                expect(_result).toEqual(result);
	            }
	            expect(typeof result === "undefined" ? "undefined" : _typeof(result)).toEqual("object");
	            expect(Object.keys(result)).toBeArray(["width", "height"]);
	            expect(_typeof(result.width)).toEqual("number");
	            expect(_typeof(result.height)).toEqual("number");
	            if (set.result) {
	                expect(result.width).toBeCalculable();
	                expect(result.height).toBeCalculable();
	            } else {
	                expect(result.width).toBeNaN();
	                expect(result.height).toBeNaN();
	            }
	        }
	    });
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNTZhODVlYTIzYWI1OGQzYmJkZiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0FuaW1hdGlvbkVhc2luZy50cyIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNCcm93c2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi9+L3VybC91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cmwvfi9wdW55Y29kZS9wdW55Y29kZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzRG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzV2luZG93LnRzIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0RPTS50cyIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNNb3VzZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzU3lzdGVtLnRzIiwid2VicGFjazovLy8uL2xpYi9VdGlsc1VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3Qtc2NvcGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3Qtc2NvcGUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcGVjL1V0aWxzRE9NLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3BlYy9VdGlscy5zcGVjLnRzIiwid2VicGFjazovLy8uL3NwZWMvVXRpbHNBbmltYXRpb24uc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9zcGVjL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3BlYy9VdGlsc0Jyb3dzZXIuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9zcGVjL1V0aWxzQ29va2llLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3BlYy9VdGlsc0RvY3VtZW50LnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3BlYy9VdGlsc01vdXNlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3BlYy9VdGlsc1NjcmVlbi5zcGVjLnRzIiwid2VicGFjazovLy8uL3NwZWMvVXRpbHNTeXN0ZW0uc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9zcGVjL1V0aWxzVXNlci5zcGVjLnRzIiwid2VicGFjazovLy8uL3NwZWMvVXRpbHNXaW5kb3cuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUtBQW9LO0FBQ3BLOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7OztBQ3ZPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQSw0Qjs7Ozs7O0FDdlhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0IsdUpBQXNKO0FBQ3RKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7bUNDbHNCQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGVBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEIsYUFBWSxTQUFTO0FBQ3JCO0FBQ0EsZUFBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLFNBQVM7QUFDckI7QUFDQSxlQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixlQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0EsTUFBSztBQUNMLDZCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEIsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF3Qjs7QUFFeEIsMENBQXlDLHFCQUFxQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxvQkFBb0I7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQjtBQUNBLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRix1Q0FBc0M7QUFDdEM7QUFDQSxJQUFHLE9BQU87QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUUsT0FBTztBQUNUO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7QUNqaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7O0FBRUE7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVELHVCOzs7Ozs7QUNuWUE7O0FBRUE7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQseUI7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLGdCQUFnQiw4QkFBOEIsaURBQWlEO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRCwwQjs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsMkpBQTBKO0FBQzFKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRCwwQjs7Ozs7O0FDcEtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLFVBQVUsa0RBQWtELFdBQVcsZ0JBQWdCLDhCQUE4QixpREFBaUQsK0JBQStCLFdBQVc7QUFDak87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQsd0I7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7Ozs7OztBQ2RBLDBDOzs7Ozs7QUNBQTs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxrTkFBaU47QUFDak47QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMEpBQXlKO0FBQ3pKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzS0FBcUs7QUFDcks7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkpBQTRKO0FBQzVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxrS0FBaUs7QUFDaks7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNLQUFxSztBQUNySzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2SkFBNEo7QUFDNUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0Esa0tBQWlLO0FBQ2pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzS0FBcUs7QUFDcks7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtMQUFpTDtBQUNqTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZKQUE0SjtBQUM1Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMEtBQXlLO0FBQ3pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4S0FBNks7QUFDN0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtMQUFpTDtBQUNqTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFLQUFvSztBQUNwSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMEtBQXlLO0FBQ3pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4S0FBNks7QUFDN0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtMQUFpTDtBQUNqTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFLQUFvSztBQUNwSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMEtBQXlLO0FBQ3pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4S0FBNks7QUFDN0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtMQUFpTDtBQUNqTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFLQUFvSztBQUNwSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDBLQUF5SztBQUN6Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEtBQTZLO0FBQzdLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrTEFBaUw7QUFDakw7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxS0FBb0s7QUFDcEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQyxFOzs7Ozs7QUN2cUJEOztBQUVBLHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMEpBQXlKO0FBQ3pKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzS0FBcUs7QUFDcks7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBLQUF5SztBQUN6Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZKQUE0SjtBQUM1Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0Esa0tBQWlLO0FBQ2pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzS0FBcUs7QUFDcks7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBLQUF5SztBQUN6Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZKQUE0SjtBQUM1Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxrS0FBaUs7QUFDaks7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLDhLQUE2SztBQUM3Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxS0FBb0s7QUFDcEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUtBQWtLO0FBQ2xLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUMsRTs7Ozs7O0FDclVEOztBQUVBLHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUMsRTs7Ozs7O0FDZEQ7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBKQUF5SjtBQUN6Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0tBQXFLO0FBQ3JLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwS0FBeUs7QUFDeks7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhLQUE2SztBQUM3Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSw4SkFBNko7QUFDN0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUtBQWdLO0FBQ2hLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpS0FBZ0s7QUFDaEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDLEU7Ozs7OztBQ3JQRDs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBKQUF5SjtBQUN6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QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsNkpBQTRKO0FBQzVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlLQUFnSztBQUNoSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUtBQWdLO0FBQ2hLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQyxFIiwiZmlsZSI6Ii4vZGlzdC90ZXN0LXNjb3BlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJVdGlsc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTZhODVlYTIzYWI1OGQzYmJkZiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNBbmltYXRpb24gPSByZXF1aXJlKFwiLi9VdGlsc0FuaW1hdGlvblwiKTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0FuaW1hdGlvbik7XG5cbnZhciBfVXRpbHNCcm93c2VyID0gcmVxdWlyZShcIi4vVXRpbHNCcm93c2VyXCIpO1xuXG52YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXG52YXIgX1V0aWxzQ29va2llID0gcmVxdWlyZShcIi4vVXRpbHNDb29raWVcIik7XG5cbnZhciBfVXRpbHNDb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNDb29raWUpO1xuXG52YXIgX1V0aWxzRG9jdW1lbnQgPSByZXF1aXJlKFwiLi9VdGlsc0RvY3VtZW50XCIpO1xuXG52YXIgX1V0aWxzRG9jdW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNEb2N1bWVudCk7XG5cbnZhciBfVXRpbHNET00gPSByZXF1aXJlKFwiLi9VdGlsc0RPTVwiKTtcblxudmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cbnZhciBfVXRpbHNNb3VzZSA9IHJlcXVpcmUoXCIuL1V0aWxzTW91c2VcIik7XG5cbnZhciBfVXRpbHNNb3VzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc01vdXNlKTtcblxudmFyIF9VdGlsc1NjcmVlbiA9IHJlcXVpcmUoXCIuL1V0aWxzU2NyZWVuXCIpO1xuXG52YXIgX1V0aWxzU2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU2NyZWVuKTtcblxudmFyIF9VdGlsc1N5c3RlbSA9IHJlcXVpcmUoXCIuL1V0aWxzU3lzdGVtXCIpO1xuXG52YXIgX1V0aWxzU3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU3lzdGVtKTtcblxudmFyIF9VdGlsc1VzZXIgPSByZXF1aXJlKFwiLi9VdGlsc1VzZXJcIik7XG5cbnZhciBfVXRpbHNVc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzVXNlcik7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogR2xvYmFsIFV0aWxzIGNsYXNzXG4gKi9cbnZhciBVdGlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgICB9XG5cbiAgICBVdGlscy53YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYW5nZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4obWVzc2FuZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYW5nZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lc3NhbmdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kLlxuICAgICAqL1xuXG5cbiAgICBVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICBVdGlscy53YXJuKFwiVXRpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2QuXCIpO1xuICAgICAgICByZXR1cm4gVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdChkb21Ob2RlLCBkb21Eb2N1bWVudCwgc2hvd0ZvcmNlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZC5cbiAgICAgKi9cbiAgICBVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlKSB7XG4gICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIFV0aWxzLndhcm4oXCJVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kLlwiKTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUsIGRvbURvY3VtZW50LCBzaG93Rm9yY2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNmZXIgc3RhdGljIG1ldGhvZHMgaW50byB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHJlYWxPYmplY3RcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICovXG5cblxuICAgIFV0aWxzLmltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyA9IGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyhyZWFsT2JqZWN0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCEhcmVhbE9iamVjdCAmJiAodHlwZW9mIHJlYWxPYmplY3QgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihyZWFsT2JqZWN0KSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRpY0NsYXNzID0gcmVhbE9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRpY0NsYXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBPYmplY3Qua2V5cyhzdGF0aWNDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2RzICYmIG1ldGhvZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVhbE9iamVjdFttZXRob2RdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxPYmplY3RbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGljQ2xhc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlscy53YXJuKFwiVGhhdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFwiICsgKGNsYXNzTmFtZSB8fCBzdGF0aWNDbGFzcyAmJiBzdGF0aWNDbGFzcy5uYW1lIHx8IFwiVW5rbm93blwiKSArIFwiLlwiICsgbWV0aG9kICsgXCIgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0aWNDbGFzc1ttZXRob2RdLmFwcGx5KHN0YXRpY0NsYXNzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG1ldGhvZHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JldDIgPSBfbG9vcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9yZXQyID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNhbGwgc3RhY2sgdHJhY2VcbiAgICAgKiBAcmV0dXJuIEFycmF5PE9iamVjdD5cbiAgICAgKi9cblxuXG4gICAgVXRpbHMuc3RhY2sgPSBmdW5jdGlvbiBzdGFjaygpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5zdGFjayAmJiBlLnN0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDUpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgaWYgKCFzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hdGNoID0gL14oLiopQCguKilcXC5qczooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IC8oW15cXC88XSspL2lnLmV4ZWMobWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV1bMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKGh0dHB8aHR0cHMpOihbXjpdKyk6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzVdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzRdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gKyBcIjpcIiArIG1hdGNoWzJdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKC4qKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoW14oXSspXFxzXFwoKC4qKTooWzAtOV0rKTooWzAtOV0rKVxcKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoLiopOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsxXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHJhbmRvbSBJRFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgVXRpbHMuZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFV0aWxzO1xuXG5VdGlscy5BbmltYXRpb24gPSBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQ7XG5VdGlscy5Ccm93c2VyID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdDtcblV0aWxzLkNvb2tpZSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdDtcblV0aWxzLkRPTSA9IF9VdGlsc0RPTTIuZGVmYXVsdDtcblV0aWxzLkRvY3VtZW50ID0gX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQ7XG5VdGlscy5Nb3VzZSA9IF9VdGlsc01vdXNlMi5kZWZhdWx0O1xuVXRpbHMuU2NyZWVuID0gX1V0aWxzU2NyZWVuMi5kZWZhdWx0O1xuVXRpbHMuU3lzdGVtID0gX1V0aWxzU3lzdGVtMi5kZWZhdWx0O1xuVXRpbHMuVXNlciA9IF9VdGlsc1VzZXIyLmRlZmF1bHQ7XG5VdGlscy5XaW5kb3cgPSBfVXRpbHNXaW5kb3cyLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbkVhc2luZyA9IHJlcXVpcmUoXCIuL1V0aWxzQW5pbWF0aW9uRWFzaW5nXCIpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uRWFzaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFuaW1hdGlvbiA9IGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGlvbik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBbmltYXRpb247XG5cbkFuaW1hdGlvbi5FYXNpbmcgPSBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNBbmltYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEaWZmZXJlbnQgdGltZSBhbmltYXRpb24gZnVuY3Rpb25zXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVhc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFYXNpbmcoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFYXNpbmcpO1xuICAgIH1cblxuICAgIEVhc2luZy5pc1ZhbGlkUGFyYW1zID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkLCBzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZCA9PT0gXCJudW1iZXJcIiAmJiAodHlwZW9mIHMgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIpICYmIHQgPCBkO1xuICAgIH07XG5cbiAgICBFYXNpbmcuc3dpbmcgPSBmdW5jdGlvbiBzd2luZyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVhc2luZ1tFYXNpbmcuZGVmXSh0LCBiLCBjLCBkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJblF1YWQgPSBmdW5jdGlvbiBlYXNlSW5RdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgtLXQgKiAodCAtIDIpIC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluQ3ViaWMgPSBmdW5jdGlvbiBlYXNlSW5DdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRDdWJpYyA9IGZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRDdWJpYyA9IGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJblF1YXJ0ID0gZnVuY3Rpb24gZWFzZUluUXVhcnQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFF1YXJ0ID0gZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0UXVhcnQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5RdWludCA9IGZ1bmN0aW9uIGVhc2VJblF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0UXVpbnQgPSBmdW5jdGlvbiBlYXNlT3V0UXVpbnQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRRdWludCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5TaW5lID0gZnVuY3Rpb24gZWFzZUluU2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFNpbmUgPSBmdW5jdGlvbiBlYXNlT3V0U2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dFNpbmUgPSBmdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5FeHBvID0gZnVuY3Rpb24gZWFzZUluRXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHQgPT09IDAgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRFeHBvID0gZnVuY3Rpb24gZWFzZU91dEV4cG8odCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ID09PSBkID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRFeHBvID0gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ID09PSBkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkNpcmMgPSBmdW5jdGlvbiBlYXNlSW5DaXJjKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dENpcmMgPSBmdW5jdGlvbiBlYXNlT3V0Q2lyYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dENpcmMgPSBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluRWxhc3RpYyA9IGZ1bmN0aW9uIGVhc2VJbkVsYXN0aWModCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgICAgIHZhciBhID0gYztcbiAgICAgICAgICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICAgICAgICBwID0gZCAqIC4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgICAgICAgICAgIGEgPSBjO1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0RWxhc3RpYyA9IGZ1bmN0aW9uIGVhc2VPdXRFbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgICAgICAgcCA9IGQgKiAuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dEVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlSW5PdXRFbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiICsgYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcCkge1xuICAgICAgICAgICAgICAgIHAgPSBkICogKC4zICogMS41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogLjUgKyBjICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkJhY2sgPSBmdW5jdGlvbiBlYXNlSW5CYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRCYWNrID0gZnVuY3Rpb24gZWFzZU91dEJhY2sodCwgYiwgYywgZCwgcykge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCwgcykpIHtcbiAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dEJhY2sgPSBmdW5jdGlvbiBlYXNlSW5PdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluQm91bmNlID0gZnVuY3Rpb24gZWFzZUluQm91bmNlKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAtIEVhc2luZy5lYXNlT3V0Qm91bmNlKGQgLSB0LCAwLCBjLCBkKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0Qm91bmNlID0gZnVuY3Rpb24gZWFzZU91dEJvdW5jZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAuNzUpICsgYjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjI1IC8gMi43NSkgKiB0ICsgLjkzNzUpICsgYjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAuOTg0Mzc1KSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRCb3VuY2UgPSBmdW5jdGlvbiBlYXNlSW5PdXRCb3VuY2UodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICh0IDwgZCAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRWFzaW5nLmVhc2VJbkJvdW5jZSh0ICogMiwgMCwgYywgZCkgKiAuNSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gRWFzaW5nLmVhc2VPdXRCb3VuY2UodCAqIDIgLSBkLCAwLCBjLCBkKSAqIC41ICsgYyAqIC41ICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEVhc2luZztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRWFzaW5nO1xuXG5FYXNpbmcuZGVmID0gXCJlYXNlT3V0UXVhZFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBicm93c2VyXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ319XG4gICAgICovXG4gICAgQnJvd3Nlci5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJyb3dzZXI6IEJyb3dzZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbW9iaWxlOiBCcm93c2VyLmlzTW9iaWxlKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBCcm93c2VyLmdldFZlcnNpb24oKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGJyb3dzZXIgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSB2b2lkIDA7XG4gICAgICAgIGlmIChCcm93c2VyLmlzT3BlcmEoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3BlcmFOZXcoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRU5ldygpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzQ2hyb21lKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkNocm9tZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkZpcmVmb3hcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIlNhZmFyaVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPdGhlcigpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gQnJvd3Nlci5nZXRPdGhlck5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3NlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdm9pZCAwO1xuICAgICAgICBpZiAoQnJvd3Nlci5pc09wZXJhKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE9wZXJhVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPcGVyYU5ldygpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNNU0lFTmV3KCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0Nocm9tZSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldFNhZmFyaVZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3RoZXIoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0T3RoZXJWZXJzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmltIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEBwYXJhbSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLnRyaW1WZXJzaW9uID0gZnVuY3Rpb24gdHJpbVZlcnNpb24odmVyc2lvbikge1xuICAgICAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhciBjaGFycyA9IFtcIjtcIiwgXCIgXCIsIFwiKVwiXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNoYXJzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGFyID0gX3JlZjtcblxuICAgICAgICAgICAgICAgIHZhciBpeCA9IHZlcnNpb24uaW5kZXhPZihjaGFyKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbW9iaWxlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01vYmlsZSA9IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICAgICAgICByZXR1cm4gKC9Nb2JpbGV8bWluaXxGZW5uZWN8QW5kcm9pZHxpUChhZHxvZHxob25lKS8udGVzdChuYXZpZ2F0b3IuYXBwVmVyc2lvbilcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzT3BlcmEgPSBmdW5jdGlvbiBpc09wZXJhKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG9wZXJhIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPcGVyYVZlcnNpb24gPSBmdW5jdGlvbiBnZXRPcGVyYVZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA2KTtcbiAgICAgICAgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIG5ldyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc09wZXJhTmV3ID0gZnVuY3Rpb24gaXNPcGVyYU5ldygpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9QUlwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgb3BlcmEgbmV3IGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24gPSBmdW5jdGlvbiBnZXRPcGVyYU5ld1ZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbXNpZSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01TSUUgPSBmdW5jdGlvbiBpc01TSUUoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBtc2llIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRNU0lFVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE1TSUVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBtc2llIG5ldyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01TSUVOZXcgPSBmdW5jdGlvbiBpc01TSUVOZXcoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50L1wiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbXNpZSBuZXcgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRU5ld1ZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwicnY6XCIpICsgMyk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgY2hyb21lIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzQ2hyb21lID0gZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNocm9tZSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0Q2hyb21lVmVyc2lvbiA9IGZ1bmN0aW9uIGdldENocm9tZVZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgc2FmYXJpIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzU2FmYXJpID0gZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgIT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA9PT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2FmYXJpIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uID0gZnVuY3Rpb24gZ2V0U2FmYXJpVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcbiAgICAgICAgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIGZpcmVmb3ggYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNGaXJlZm94ID0gZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZmlyZWZveCBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24gPSBmdW5jdGlvbiBnZXRGaXJlZm94VmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgb3RoZXIgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNPdGhlciA9IGZ1bmN0aW9uIGlzT3RoZXIoKSB7XG4gICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgIHJldHVybiBuYW1lT2Zmc2V0IDwgdmVyT2Zmc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG90aGVyIGJyb3dzZXIgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPdGhlck5hbWUgPSBmdW5jdGlvbiBnZXRPdGhlck5hbWUoKSB7XG4gICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgIHZhciBicm93c2VyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcbiAgICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PT0gYnJvd3Nlci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyb3dzZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgb3RoZXIgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldE90aGVyVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE90aGVyVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIG5hbWVPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiIFwiKSArIDE7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBicm93c2VyIHN1cHBvcnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhQnJvd3Nlci5pc01TSUUoKSB8fCBwYXJzZUludChCcm93c2VyLmdldE1TSUVWZXJzaW9uKCksIDEwKSA+IDg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBXZWJLaXQgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNXZWJLaXQgPSBmdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBHZWNrbyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0dlY2tvID0gZnVuY3Rpb24gaXNHZWNrbygpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkdlY2tvXCIpID4gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiS0hUTUxcIikgPT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgQW5kcm9pZCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0FuZHJvaWQgPSBmdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpID4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBMaW51eCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0xpbnV4ID0gZnVuY3Rpb24gaXNMaW51eCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkxpbnV4XCIpID4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBpUGFkIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzVGFibGV0UEMgPSBmdW5jdGlvbiBpc1RhYmxldFBDKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiaVBhZFwiKSA+IC0xO1xuICAgIH07XG5cbiAgICByZXR1cm4gQnJvd3Nlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQnJvd3NlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0Jyb3dzZXIudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBVUkwgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGNvb2tpZVxuICovXG5cbnZhciBDb29raWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvb2tpZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29va2llKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGZsYWcgd2hldGhlciBzdXBwb3J0ZWQgdGhpcyBzdG9yYWdlIHR5cGUgb3Igbm90XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQ29va2llLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkb2N1bWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkb2N1bWVudC5jb29raWUgPT09IFwic3RyaW5nXCI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHNldHMgdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaGFzIGJlZW4gc2V0XG4gICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBleHBpcmVzIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBwYXRoIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBkb21haW4ge3N0cmluZ31cbiAgICogQHBhcmFtIHNlY3VyZSB7Ym9vbGVhbn1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBDb29raWUuc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGV4cGlyZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDMwO1xuICAgIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBcIi9cIjtcbiAgICB2YXIgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICB2YXIgc2VjdXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIjtcblxuICAgIHRyeSB7XG4gICAgICAvKipcbiAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcbiAgICAgICAqL1xuICAgICAgaWYgKHR5cGVvZiBjaGVja1N1cHBvcnQgPT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgQ29va2llLnJlZ1ZhbGlkS2V5LnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGV4cGlyZXMgPT09IFwibnVtYmVyXCIgJiYgZXhwaXJlcyA8IDM2NSAmJiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZG9tYWluID09PSBcInN0cmluZ1wiICYmIGRvbWFpbi5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSAhPT0gLTEgJiYgdHlwZW9mIHNlY3VyZSA9PT0gXCJib29sZWFuXCIgJiYgc2VjdXJlID09PSAobG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdSA9IFVSTC5wYXJzZShcImh0dHA6Ly9cIiArIGRvbWFpbiArIHBhdGgpO1xuICAgICAgICBpZiAodS5ob3N0bmFtZSA9PT0gZG9tYWluIHx8IHUucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2F2ZSBjb29raWVzIGZvciAzMCBkYXlzXG4gICAgICAgICAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdmFyIGV4cCA9IGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jb2RlIHZhbHVlIGZvciBzdG9yZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXcml0aW5nIHZhbHVlIHRvIHRoZSBkb2N1bWVudCBjb29raWUgc3RvcmFnZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIChleHAgPyBcIjsgZXhwaXJlcz1cIiArIGV4cCA6IFwiXCIpICsgKHBhdGggPyBcIjsgcGF0aD1cIiArIHBhdGggOiBcIlwiKSArIChkb21haW4gPyBcIjsgZG9tYWluPVwiICsgZG9tYWluIDogXCJcIikgKyAoc2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gQ29va2llLmdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpID09PSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGlucHV0IGRhdGEgaXMgbm90IHZhbGlkXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZWFkcyB0aGUgdmFsdWUgYW5kIHJldHVybnMgaXQgb3IgcmV0dXJucyBmYWxzZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3RcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBHZXQgdGhlIGFycmF5IGZyb20gZG9jdW1lbnQgY29va2llIHNwbGl0IGJ5IDtcbiAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGFyckNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG4gICAgICAgICAgICovXG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYXJyQ29va2llLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IF9yZWY7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpbSBhbmQgc3BsaXQgZWFjaCBjb29raWUgYnkgPSBmb3Iga2V5IHZhbHVlIHBhcmVcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHYgPSBpLnRyaW0oKS5zcGxpdChcIj1cIiwgMik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIGl0IGlzIGNvcnJlY3QgY29va2llIGtleSByZXR1cm4gdGhlIHZhbHVlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh2WzBdID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgZm91bmQgcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlIHZhbHVlIHdhcyBub3QgZm91bmQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZW1vdmVzIHRoZSB2YWx1ZSBhbmQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0XG4gICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXQgZW1wdHkgb3ZlcmR1ZSB2YWx1ZSBieSBrZXlcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBDb29raWUuc2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSwgXCJcIiwgLTEpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiBDb29raWUuZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkgPT09IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHJpbmcgb2YgYXZhaWxhYmxlIGtleXNcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cblxuXG4gIENvb2tpZS5nZXRLZXlzID0gZnVuY3Rpb24gZ2V0S2V5cyhjaGVja1N1cHBvcnQpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIGFycmF5IG9mIGF2YWlsYWJsZSBrZXlzXG4gICAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBhcnJLZXlzID0gW107XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2V0IHRoZSBhcnJheSBmcm9tIGRvY3VtZW50IGNvb2tpZSBzcGxpdCBieSA7XG4gICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBhcnJDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY29va2llc1xuICAgICAgICAgICAqL1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBhcnJDb29raWUsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IF9yZWYyO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaW0gYW5kIHNwbGl0IGVhY2ggY29va2llIGJ5ID0gZm9yIGtleSB2YWx1ZSBwYXJlXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciB2ID0gaS50cmltKCkuc3BsaXQoXCI9XCIsIDIpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQga2V5IHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh2WzBdKSB7XG4gICAgICAgICAgICAgIGFycktleXMucHVzaCh2WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFycktleXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIGNsZWFucyB0aGUgc3RvcmFnZSBhbmQgcmV0dXJuIHRydWUgaWYgaXQgaXMgZW1wdHlcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoY2hlY2tTdXBwb3J0KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgIHZhciBhcnJLZXlzID0gQ29va2llLmdldEtleXMoY2hlY2tTdXBwb3J0KTtcbiAgICAgICAgICBpZiAoYXJyS2V5cykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGFycktleXMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogX2l0ZXJhdG9yM1tTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBpID0gX3JlZjM7XG5cbiAgICAgICAgICAgICAgQ29va2llLnJlbW92ZUl0ZW0oY2hlY2tTdXBwb3J0LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgYWxsIG9rIHJldHVybiB0cnVlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENvb2tpZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29va2llO1xuXG5Db29raWUucmVnVmFsaWRLZXkgPSBuZXcgUmVnRXhwKFwiKFthLXpBLVowLTlfLV17MSx9KVwiLCBcImlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNDb29raWUudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eW2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oW2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCFpc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55IGNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHRoZSBwYXJ0IG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXMgbm9uIEFTQ0lJIGNoYXJhY3RlcnMuIEkuZS4gaXQgZG9zZW50IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgaW4gQVNDSUkuXG4gICAgICB2YXIgZG9tYWluQXJyYXkgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbmV3T3V0ID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbWFpbkFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzID0gZG9tYWluQXJyYXlbaV07XG4gICAgICAgIG5ld091dC5wdXNoKHMubWF0Y2goL1teQS1aYS16MC05Xy1dLykgP1xuICAgICAgICAgICAgJ3huLS0nICsgcHVueWNvZGUuZW5jb2RlKHMpIDogcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3RuYW1lID0gbmV3T3V0LmpvaW4oJy4nKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKGlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIGlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmIChpc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgcmVzdWx0W2tdID0gdGhpc1trXTtcbiAgfSwgdGhpcyk7XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICBPYmplY3Qua2V5cyhyZWxhdGl2ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoayAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgfSk7XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgT2JqZWN0LmtleXMocmVsYXRpdmUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCkgJiYgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fFxuICAgICAgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gIGFyZyA9PSBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VybC91cmwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlIHYxLjMuMiBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0LyoqIERldGVjdCBmcmVlIHZhcmlhYmxlcyAqL1xuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmXG5cdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdCFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoXG5cdFx0ZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbFxuXHQpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYHB1bnljb2RlYCBvYmplY3QuXG5cdCAqIEBuYW1lIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0dmFyIHB1bnljb2RlLFxuXG5cdC8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cblx0bWF4SW50ID0gMjE0NzQ4MzY0NywgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG5cdC8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cblx0YmFzZSA9IDM2LFxuXHR0TWluID0gMSxcblx0dE1heCA9IDI2LFxuXHRza2V3ID0gMzgsXG5cdGRhbXAgPSA3MDAsXG5cdGluaXRpYWxCaWFzID0gNzIsXG5cdGluaXRpYWxOID0gMTI4LCAvLyAweDgwXG5cdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXG5cdC8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5cdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRyZWdleE5vbkFTQ0lJID0gL1teXFx4MjAtXFx4N0VdLywgLy8gdW5wcmludGFibGUgQVNDSUkgY2hhcnMgKyBub24tQVNDSUkgY2hhcnNcblx0cmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZywgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG5cdC8qKiBFcnJvciBtZXNzYWdlcyAqL1xuXHRlcnJvcnMgPSB7XG5cdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHRcdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG5cdH0sXG5cblx0LyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuXHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdGZsb29yID0gTWF0aC5mbG9vcixcblx0c3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcblxuXHQvKiogVGVtcG9yYXJ5IHZhcmlhYmxlICovXG5cdGtleTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0dGhyb3cgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS4zLjInLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yIChrZXkgaW4gcHVueWNvZGUpIHtcblx0XHRcdFx0cHVueWNvZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHB1bnljb2RlW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91cmwvfi9wdW55Y29kZS9wdW55Y29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBkb2N1bWVudFxuICovXG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRvY3VtZW50IGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgRG9jdW1lbnQuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBEb2N1bWVudC5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgdG9wIHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5wYWdlWU9mZnNldCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCBsZWZ0IHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbExlZnQgPSBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LnBhZ2VYT2Zmc2V0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgc2Nyb2xsc1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHt7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbCA9IGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0KG9ialdpbmRvdyksXG4gICAgICAgICAgICAgICAgdG9wOiBEb2N1bWVudC5nZXRTY3JvbGxUb3Aob2JqV2luZG93KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogTmFOLFxuICAgICAgICAgICAgICAgIHRvcDogTmFOXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBEb2N1bWVudDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRG9jdW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNEb2N1bWVudC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHdpbmRvd1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaW5kb3coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIHdpbmRvd1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIFdpbmRvdy5pc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KG9ialdpbmRvdykge1xuICAgICAgICByZXR1cm4gb2JqV2luZG93ICYmICh0eXBlb2Ygb2JqV2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqV2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgb2JqV2luZG93LmRvY3VtZW50ICYmIF90eXBlb2Yob2JqV2luZG93LmRvY3VtZW50KSA9PT0gXCJvYmplY3RcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aW5kb3cgaGVpZ2h0XG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChXaW5kb3cuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5pbm5lckhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2luZG93IHdpZHRoXG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblxuICAgICAgICBpZiAoV2luZG93LmlzV2luZG93KG9ialdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpXaW5kb3cuaW5uZXJXaWR0aCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHdpbmRvdyBzaXplc1xuICAgICAqIEByZXR1cm4ge3toZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIFdpbmRvdy5nZXRTaXplcyA9IGZ1bmN0aW9uIGdldFNpemVzKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogV2luZG93LmdldEhlaWdodChvYmpXaW5kb3cpLFxuICAgICAgICAgICAgd2lkdGg6IFdpbmRvdy5nZXRXaWR0aChvYmpXaW5kb3cpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBXaW5kb3c7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFdpbmRvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1dpbmRvdy50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcblxudmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBET01cbiAqL1xudmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET00oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET00pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIGRvbSBkb2N1bWVudFxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgRE9NLmlzRE9NRG9jdW1lbnQgPSBmdW5jdGlvbiBpc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiAhKCFkb21Eb2N1bWVudCB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiBkb21Eb2N1bWVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwic3RyaW5nXCIgfHwgZG9tRG9jdW1lbnQubm9kZVR5cGUgIT09IDkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCBhbmQgdmFsaWRhdGUgTm9kZSBpbiBET00gRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnQgfCBib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RE9NTm9kZSA9IGZ1bmN0aW9uIGdldERPTU5vZGUoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Eb2N1bWVudCBpcyBhIHZhbGlkIHZhcmlhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIURPTS5pc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Ob2RlIGlzIGEgdmFsaWQgdmFyaWFibGVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghZG9tTm9kZSB8fCB0eXBlb2YgZG9tTm9kZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZG9tTm9kZSBpcyBhIHN0cmluZyBpdCBtaWdodCBiZSBhbiBJRFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGRvbU5vZGUgaXMgYSB2YWxpZCB2YXJpYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFkb21Ob2RlIHx8IGRvbU5vZGUubm9kZVR5cGUgIT09IDEgfHwgIWRvbU5vZGUucGFyZW50Tm9kZSB8fCBkb21Ob2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09IFwiSFRNTFwiIHx8ICFkb21Eb2N1bWVudC5jb250YWlucyhkb21Ob2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb21Ob2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGVsZW1lbnQgc2l6ZXMgYW5kIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIGRvbU5vZGVcbiAgICAgKiBAcGFyYW0gZG9tRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG4gICAgICogQHJldHVybiB7e2JvdHRvbTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIHJlc3VsdCBzaXplIGFuZCBwb3NpdGlvbiBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHZhciBvYmpSZXQgPSB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9O1xuICAgICAgICBkb21Ob2RlID0gRE9NLmdldERPTU5vZGUoZG9tTm9kZSwgZG9tRG9jdW1lbnQpO1xuICAgICAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgICAgIF9VdGlsczIuZGVmYXVsdC53YXJuKFwiVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdDogRE9NIGVsZW1lbnQgZG9lc24ndCBleGlzdCBpbiB0aGF0IERPTSBEb2N1bWVudFwiKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0ZvcmNlID0gISFzaG93Rm9yY2U7XG4gICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgIGlmIChzaG93Rm9yY2UpIHtcbiAgICAgICAgICAgIHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZGVmYXVsdCBtZXRob2QgaXMgc3VwcG9ydGVkIHRoYW4gdXNlIGl0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIG9ialJldCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElFIGhhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb2JqUmV0ID0ge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqUmV0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9ialJldC5oZWlnaHQgfHwgZG9tTm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVmdDogb2JqUmV0LmxlZnQsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9ialJldC5yaWdodCxcbiAgICAgICAgICAgICAgICB0b3A6IG9ialJldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9ialJldC53aWR0aCB8fCBkb21Ob2RlLmNsaWVudFdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXcml0ZSB0aGUgZWxlbWVudCBpbiBhIHRlbXBvcmFyeSB2YXJpYWJsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZG9tRWxlbWVudCA9IGRvbU5vZGU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZWQgYmFzaWMgcGFyYW1ldGVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG9iakNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRvbUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcmUgcGFzc2VkIG9uIHRvIGFsbCBwYXJlbnRzIGFuZCB0YWtlIGludG8gYWNjb3VudCB0aGVpciBvZmZzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdoaWxlIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueCArPSBkb21FbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueSArPSBkb21FbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gZG9tRWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvYmpSZXQgPSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBvYmpDb29yZGluYXRlcy55ICsgb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IG9iakNvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9iakNvb3JkaW5hdGVzLnggKyBvYmpDb29yZGluYXRlcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0b3A6IG9iakNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9iakNvb3JkaW5hdGVzLndpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Rm9yY2UgJiYgZG9tTm9kZSkge1xuICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHNpemUgYW5kIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gb2JqUmV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGVsZW1lbnQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEBwYXJhbSBzaG93Rm9yY2VcbiAgICAgKiBAcmV0dXJuIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gICAgICovXG4gICAgRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiBmaW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUpIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIG9ialJldCA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9tTm9kZSA9IERPTS5nZXRET01Ob2RlKGRvbU5vZGUsIGRvbURvY3VtZW50KTtcbiAgICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgICAgICBfVXRpbHMyLmRlZmF1bHQud2FybihcIlV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uOiBET00gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGluIHRoYXQgRE9NIERvY3VtZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialJldDtcbiAgICAgICAgfVxuICAgICAgICBzaG93Rm9yY2UgPSAhIXNob3dGb3JjZTtcbiAgICAgICAgd2hpbGUgKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialJldC5sZWZ0ICs9IGRvbU5vZGUub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIG9ialJldC50b3AgKz0gZG9tTm9kZS5vZmZzZXRUb3A7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tTm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZnVuY1xuICAgICAqL1xuXG5cbiAgICBET00uYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcbiAgICAgICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpID09PSBcIm9iamVjdFwiICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiBvYmoucGFyZW50RWxlbWVudCAmJiBvYmoucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgJiYgdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKG9iai5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmouYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYmouYXR0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGZ1bmNcbiAgICAgKi9cblxuXG4gICAgRE9NLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnQob2JqLCBuYW1lLCBmdW5jKSB7XG4gICAgICAgIGlmIChvYmogJiYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopKSA9PT0gXCJvYmplY3RcIiAmJiBvYmoubm9kZVR5cGUgPT09IDEgJiYgb2JqLnBhcmVudEVsZW1lbnQgJiYgb2JqLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiICYmIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmMsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uaGFzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIChcIiBcIiArIGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00uYWRkQ2xhc3NOYW1lID0gZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCFET00uaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBlbGVtZW50LmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsID8gY2wgKyBcIiBcIiArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgJiYgdHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzW2ldID0gY2xhc3Nlc1tpXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGFzc2VzW2ldIHx8IGNsYXNzZXNbaV0gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB0b2dnbGVcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cblxuXG4gICAgRE9NLnRvZ2dsZUNsYXNzTmFtZSA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUsIHRvZ2dsZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdG9nZ2xlID09PSBcImJvb2xlYW5cIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIERPTS5hZGRDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb2xkQ2xhc3NOYW1lXG4gICAgICogQHBhcmFtIG5ld0NsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00ucmVwbGFjZUNsYXNzID0gZnVuY3Rpb24gcmVwbGFjZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzTmFtZSwgbmV3Q2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2xkQ2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBuZXdDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIikge1xuICAgICAgICAgICAgb2xkQ2xhc3NOYW1lID0gb2xkQ2xhc3NOYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIG9sZENsYXNzTmFtZSk7XG4gICAgICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZWxlbWVudCBieSB0YWcgbmFtZSBhbmQgaW5kZXhcbiAgICAgKiBAcGFyYW0gdG5cbiAgICAgKiBAcGFyYW0gZG9tRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtOb2RlfVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RWxlbWVudEJ5VGFnTmFtZSA9IGZ1bmN0aW9uIGdldEVsZW1lbnRCeVRhZ05hbWUodG4pIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG4gPT09IFwic3RyaW5nXCIgJiYgRE9NLmlzRE9NRG9jdW1lbnQoZG9tRG9jdW1lbnQpICYmIHR5cGVvZiBpbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmFyIGVscyA9IGRvbURvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRuKTtcbiAgICAgICAgICAgIHJldHVybiBlbHNbaW5kZXhdIHx8IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGxpbmUgaGVpZ2h0XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0TGluZUhlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVIZWlnaHQoKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlcy5saW5lSGVpZ2h0O1xuICAgICAgICB2YXIgbGluZUhlaWdodERpZyA9IHBhcnNlSW50KGxpbmVIZWlnaHQsIDEwKTtcbiAgICAgICAgdmFyIGZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuICAgICAgICB2YXIgZm9udFNpemVEaWcgPSBwYXJzZUludChmb250U2l6ZSwgMTApO1xuICAgICAgICBpZiAoaXNGaW5pdGUobGluZUhlaWdodERpZykpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lSGVpZ2h0RGlnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplRGlnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBET007XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0RPTS50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNET00gPSByZXF1aXJlKFwiLi9VdGlsc0RPTVwiKTtcblxudmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNb3VzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb3VzZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdXNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgbW91c2UgZGVsdGFcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBNb3VzZS5nZXRXaGVlbERlbHRhID0gZnVuY3Rpb24gZ2V0V2hlZWxEZWx0YShlKSB7XG4gICAgICAgIGlmIChlICYmICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpKSA9PT0gXCJvYmplY3RcIiAmJiAoXCJkZXRhaWxcIiBpbiBlIHx8IFwid2hlZWxEZWx0YVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWFwiIGluIGUgfHwgXCJkZWx0YVlcIiBpbiBlIHx8IFwiZGVsdGFYXCIgaW4gZSB8fCBcImF4aXNcIiBpbiBlIHx8IFwiZGVsdGFNb2RlXCIgaW4gZSkpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuICAgICAgICAgICAgaWYgKFwiZGV0YWlsXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuZGV0YWlsICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcIndoZWVsRGVsdGFZXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhWFwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLndoZWVsRGVsdGFYICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlZm94IDwgMTcgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcmVsYXRlZCB0byBET01Nb3VzZVNjcm9sbCBldmVudFxuICAgICAgICAgICAgaWYgKFwiYXhpc1wiIGluIGUgJiYgZS5heGlzID09PSBlLkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcbiAgICAgICAgICAgIGlmIChcImRlbHRhWVwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZGVsdGFYXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTmVlZCB0byBjb252ZXJ0IGxpbmVzIGFuZCBwYWdlcyB0byBwaXhlbHMgaWYgd2UgYXJlblwidCBhbHJlYWR5IGluIHBpeGVsc1xuICAgICAgICAgICAgLy8gVGhlcmUgYXJlIHRocmVlIGRlbHRhIG1vZGVzOlxuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAwIGlzIGJ5IHBpeGVscywgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAxIGlzIGJ5IGxpbmVzXG4gICAgICAgICAgICAvLyAgICogZGVsdGFNb2RlIDIgaXMgYnkgcGFnZXNcbiAgICAgICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gX1V0aWxzRE9NMi5kZWZhdWx0LmdldExpbmVIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGVsdGFNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlZ2lodCA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5nZXRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB3aW5kb3doZWdpaHQ7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogd2luZG93aGVnaWh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YVkgPT09IDAgPyBkZWx0YVggOiBkZWx0YVk7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBNb3VzZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW91c2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNNb3VzZS50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHNjcmVlblxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YXZhaWxhYmxlU2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfSwgY29sb3JEZXB0aDogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIHNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19fVxuICAgICAqL1xuICAgIFNjcmVlbi5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNpemU6IFNjcmVlbi5nZXRBdmFpbGFibGVTaXplcygpLFxuICAgICAgICAgICAgY29sb3JEZXB0aDogU2NyZWVuLmdldENvbG9yRGVwdGgoKSxcbiAgICAgICAgICAgIHBpeGVsUmF0aW86IFNjcmVlbi5nZXRQaXhlbFJhdGlvKCksXG4gICAgICAgICAgICBzaXplOiBTY3JlZW4uZ2V0U2l6ZXMoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBoZWlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi53aWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHdpZHRoXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldEF2YWlsYWJsZVdpZHRoID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxXaWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlU2l6ZXMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRBdmFpbGFibGVXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHZhciByYXRpbyA9IDE7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhdGlvO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBjb2xvciBkZXB0aFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldENvbG9yRGVwdGggPSBmdW5jdGlvbiBnZXRDb2xvckRlcHRoKCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmNvbG9yRGVwdGg7XG4gICAgfTtcblxuICAgIHJldHVybiBTY3JlZW47XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1NjcmVlbi50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHN5c3RlbVxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzdGVtKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3lzdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3lzdGVtIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIFN5c3RlbS5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFN5c3RlbS5nZXROYW1lKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBTeXN0ZW0uZ2V0VmVyc2lvbigpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICB2YXIgb3MgPSBcIlwiO1xuICAgICAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAxMFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA4LjFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBOVCA2LjAvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFZpc3RhXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1dpbmRvd3MgTlQgNS4yLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBTZXJ2ZXIgMjAwM1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFhQXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAyMDAwXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgTUVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA5OFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgOTVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBOVCA0LjBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBDRS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgQ0VcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luMTYvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDMuMTFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvQW5kcm9pZC8sXG4gICAgICAgICAgICBzOiBcIkFuZHJvaWRcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvT3BlbkJTRC8sXG4gICAgICAgICAgICBzOiBcIk9wZW4gQlNEXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1N1bk9TLyxcbiAgICAgICAgICAgIHM6IFwiU3VuIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhMaW51eHxYMTEpLyxcbiAgICAgICAgICAgIHM6IFwiTGludXhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpLyxcbiAgICAgICAgICAgIHM6IFwiaU9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL01hYyBPUyBYLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TIFhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1FOWC8sXG4gICAgICAgICAgICBzOiBcIlFOWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9VTklYLyxcbiAgICAgICAgICAgIHM6IFwiVU5JWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9CZU9TLyxcbiAgICAgICAgICAgIHM6IFwiQmVPU1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9PU1xcLzIvLFxuICAgICAgICAgICAgczogXCJPUy8yXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLyxcbiAgICAgICAgICAgIHM6IFwiU2VhcmNoIEJvdFwiXG4gICAgICAgIH1dO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjbGllbnRTdHJpbmdzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNzID0gX3JlZjtcblxuICAgICAgICAgICAgaWYgKGNzLnIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIG9zID0gY3MucztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICAgICAgICB2YXIgb3MgPSBTeXN0ZW0uZ2V0TmFtZSgpO1xuICAgICAgICB2YXIgb3NWZXJzaW9uID0gXCJcIjtcbiAgICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xuICAgICAgICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XG4gICAgICAgICAgICBvcyA9IFwiV2luZG93c1wiO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob3MpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNYWMgT1MgWFwiOlxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQW5kcm9pZFwiOlxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaU9TXCI6XG4gICAgICAgICAgICAgICAgdmFyIHJlZyA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSByZWdbMV0gKyBcIi5cIiArIHJlZ1syXSArIFwiLlwiICsgKHJlZ1szXSB8fCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9zVmVyc2lvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN5c3RlbTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3lzdGVtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzU3lzdGVtLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNCcm93c2VyID0gcmVxdWlyZShcIi4vVXRpbHNCcm93c2VyXCIpO1xuXG52YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4vVXRpbHNTY3JlZW5cIik7XG5cbnZhciBfVXRpbHNTY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTY3JlZW4pO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4vVXRpbHNTeXN0ZW1cIik7XG5cbnZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVc2VyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXIgaW5mb1xuICAgICAqIEByZXR1cm4ge3ticm93c2VyOiB7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ30sIHNjcmVlbjoge2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fSwgc3lzdGVtOiB7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fX1cbiAgICAgKi9cbiAgICBVc2VyLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnJvd3NlcjogX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzY3JlZW46IF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzeXN0ZW06IF9VdGlsc1N5c3RlbTIuZGVmYXVsdC5nZXRJbmZvKClcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFVzZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVzZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNVc2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmh0bWxcIik7XG5yZXF1aXJlKFwiLi4vLi4vc3BlYy9VdGlscy5zcGVjXCIpO1xucmVxdWlyZShcIi4uLy4uL3NwZWMvVXRpbHNBbmltYXRpb24uc3BlY1wiKTtcbnJlcXVpcmUoXCIuLi8uLi9zcGVjL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnNwZWNcIik7XG5yZXF1aXJlKFwiLi4vLi4vc3BlYy9VdGlsc0Jyb3dzZXIuc3BlY1wiKTtcbnJlcXVpcmUoXCIuLi8uLi9zcGVjL1V0aWxzQ29va2llLnNwZWNcIik7XG5yZXF1aXJlKFwiLi4vLi4vc3BlYy9VdGlsc0RvY3VtZW50LnNwZWNcIik7XG5yZXF1aXJlKFwiLi4vLi4vc3BlYy9VdGlsc0RPTS5zcGVjXCIpO1xucmVxdWlyZShcIi4uLy4uL3NwZWMvVXRpbHNNb3VzZS5zcGVjXCIpO1xucmVxdWlyZShcIi4uLy4uL3NwZWMvVXRpbHNTY3JlZW4uc3BlY1wiKTtcbnJlcXVpcmUoXCIuLi8uLi9zcGVjL1V0aWxzU3lzdGVtLnNwZWNcIik7XG5yZXF1aXJlKFwiLi4vLi4vc3BlYy9VdGlsc1VzZXIuc3BlY1wiKTtcbnJlcXVpcmUoXCIuLi8uLi9zcGVjL1V0aWxzV2luZG93LnNwZWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVzdC1zY29wZS9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0LXNjb3BlL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzXCIpO1xuXG52YXIgX1V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzKTtcblxudmFyIF9VdGlsc0RPTSA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNET01cIik7XG5cbnZhciBfVXRpbHNET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNET00pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5kZXNjcmliZShcIlV0aWxzRE9NXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2MSA9IHZvaWQgMDtcbiAgICB2YXIgZGl2MiA9IHZvaWQgMDtcbiAgICB2YXIgZGl2MyA9IHZvaWQgMDtcbiAgICB2YXIgaWZyYW1lID0gdm9pZCAwO1xuICAgIHZhciBwYXJhbXNWYWx1ZXMgPSB2b2lkIDA7XG4gICAgdmFyIGRhdGFTZXQgPSB2b2lkIDA7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpdjEgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2MS5pZCA9IFwiZGl2MVwiO1xuICAgICAgICBkaXYyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdjIuaWQgPSBcImRpdjJcIjtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgICAgIGRpdjMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2My5pZCA9IFwiZGl2M1wiO1xuICAgICAgICBpZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDo7XCI7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgICAgIHBhcmFtc1ZhbHVlcyA9IFt1bmRlZmluZWQsIG51bGwsIGZhbHNlLCB0cnVlLCAxMjMsIDAsIFwiZGl2XCIsIFwidGVzdFwiLCBkaXYxLCBkaXYyLCBkaXYzLCB3aW5kb3csIHdpbmRvdy5kb2N1bWVudCwgaWZyYW1lLmNvbnRlbnRXaW5kb3csIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LCB3aW5kb3cuZG9jdW1lbnQuYm9keSwgZnVuY3Rpb24gKCkge31dO1xuICAgICAgICBkYXRhU2V0ID0gW107XG4gICAgfSk7XG4gICAgYWZ0ZXJFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2Mik7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgfSk7XG4gICAgdmFyIHRlc3RDbGFzcyA9IGZ1bmN0aW9uIHRlc3RDbGFzcygpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHgxID0gX3JlZjtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IzKSwgX2kzID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiBfaXRlcmF0b3IzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYzO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjM7XG5cbiAgICAgICAgICAgICAgICBpZiAoeDEgIT09IHgyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gKHgxID09PSBkaXYyIHx8IHgxID09PSBkaXYzKSAmJiB0eXBlb2YgeDIgPT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBjb25kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gZGF0YVNldCwgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjI7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2V0ID0gX3JlZjI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIGNsYXNzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQuYWRkQ2xhc3NOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIGlmIGVsZW1lbnQgcmV0dXJuZWQgb3IgbnVsbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQgPT09IGRpdjIgfHwgcmVzdWx0ID09PSBkaXYzKS50b0VxdWFsKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiBlbGVtZW50IGhhcyBjbGFzc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQuaGFzQ2xhc3NOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2dnbGUgY2xhc3Mgb2ZmXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC50b2dnbGVDbGFzc05hbWUuYXBwbHkoX1V0aWxzRE9NMi5kZWZhdWx0LCBbXS5jb25jYXQoc2V0LnBhcmFtcywgZmFsc2UpKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgZWxlbWVudCByZXR1cm5lZCBvciBudWxsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChzZXQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdCA9PT0gZGl2MiB8fCByZXN1bHQgPT09IGRpdjMpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmVOdWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIG5vdCBjbGFzc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQuaGFzQ2xhc3NOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG9nZ2xlIGNsYXNzIG9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC50b2dnbGVDbGFzc05hbWUuYXBwbHkoX1V0aWxzRE9NMi5kZWZhdWx0LCBbXS5jb25jYXQoc2V0LnBhcmFtcywgdHJ1ZSkpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiBlbGVtZW50IHJldHVybmVkIG9yIG51bGxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0ID09PSBkaXYyIHx8IHJlc3VsdCA9PT0gZGl2MykudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzdWx0ID0gX1V0aWxzRE9NMi5kZWZhdWx0Lmhhc0NsYXNzTmFtZS5hcHBseShfVXRpbHNET00yLmRlZmF1bHQsIHNldC5wYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwbGFjZSBjbGFzc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQucmVwbGFjZUNsYXNzLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgW3NldC5wYXJhbXNbMF0sIHNldC5wYXJhbXNbMV0sIFwiX1wiICsgc2V0LnBhcmFtc1sxXV0pO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiBlbGVtZW50IHJldHVybmVkIG9yIG51bGxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0ID09PSBkaXYyIHx8IHJlc3VsdCA9PT0gZGl2MykudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZU51bGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzdWx0ID0gX1V0aWxzRE9NMi5kZWZhdWx0Lmhhc0NsYXNzTmFtZS5hcHBseShfVXRpbHNET00yLmRlZmF1bHQsIFtzZXQucGFyYW1zWzBdLCBcIl9cIiArIHNldC5wYXJhbXNbMV1dKTtcbiAgICAgICAgICAgIGlmIChzZXQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdCkudG9FcXVhbChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQuaGFzQ2xhc3NOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgW3NldC5wYXJhbXNbMF0sIHNldC5wYXJhbXNbMV1dKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdmUgY2xhc3MgbmFtZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQucmVtb3ZlQ2xhc3NOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgW3NldC5wYXJhbXNbMF0sIFwiX1wiICsgc2V0LnBhcmFtc1sxXV0pO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiBlbGVtZW50IGhhcyBub3QgY2xhc3NcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzdWx0ID0gX1V0aWxzRE9NMi5kZWZhdWx0Lmhhc0NsYXNzTmFtZS5hcHBseShfVXRpbHNET00yLmRlZmF1bHQsIFtzZXQucGFyYW1zWzBdLCBcIl9cIiArIHNldC5wYXJhbXNbMV1dKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpdChcIlV0aWxzRE9NXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBfVXRpbHNET00yLmRlZmF1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihfVXRpbHNET00yLmRlZmF1bHQpKS50b0VxdWFsKFwiZnVuY3Rpb25cIik7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5nZXRET01Ob2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXk0ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I0KSwgX2k0ID0gMCwgX2l0ZXJhdG9yNCA9IF9pc0FycmF5NCA/IF9pdGVyYXRvcjQgOiBfaXRlcmF0b3I0W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjQ7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2k0ID49IF9pdGVyYXRvcjQubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmNCA9IF9pdGVyYXRvcjRbX2k0KytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTQgPSBfaXRlcmF0b3I0Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2k0LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY0ID0gX2k0LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmNDtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNiA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXk2ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I2KSwgX2k2ID0gMCwgX2l0ZXJhdG9yNiA9IF9pc0FycmF5NiA/IF9pdGVyYXRvcjYgOiBfaXRlcmF0b3I2W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWY2O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Nikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k2ID49IF9pdGVyYXRvcjYubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjYgPSBfaXRlcmF0b3I2W19pNisrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTYgPSBfaXRlcmF0b3I2Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pNi5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjYgPSBfaTYudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjY7XG5cbiAgICAgICAgICAgICAgICBpZiAoeDEgIT09IHgyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0geDEgPT09IGRpdjIgJiYgKHgyID09PSB3aW5kb3cuZG9jdW1lbnQgfHwgeDIgPT09IHVuZGVmaW5lZCkgfHwgeDEgPT09IGRpdjMgJiYgeDIgPT09IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICBkYXRhU2V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbeDEsIHgyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogY29uZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IGRhdGFTZXQsIF9pc0FycmF5NSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNSksIF9pNSA9IDAsIF9pdGVyYXRvcjUgPSBfaXNBcnJheTUgPyBfaXRlcmF0b3I1IDogX2l0ZXJhdG9yNVtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY1O1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXk1KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pNSA+PSBfaXRlcmF0b3I1Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjUgPSBfaXRlcmF0b3I1W19pNSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2k1ID0gX2l0ZXJhdG9yNS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pNS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmNSA9IF9pNS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWY1O1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0MSA9IF9VdGlsc0RPTTIuZGVmYXVsdC5nZXRET01Ob2RlLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0MiA9IF9VdGlsczIuZGVmYXVsdC5ET00uZ2V0RE9NTm9kZS5hcHBseShfVXRpbHNET00yLmRlZmF1bHQsIHNldC5wYXJhbXMpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdDEpLnRvRXF1YWwocmVzdWx0Mik7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQxID09PSBkaXYyIHx8IHJlc3VsdDEgPT09IGRpdjMpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQxKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNyA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXk3ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I3KSwgX2k3ID0gMCwgX2l0ZXJhdG9yNyA9IF9pc0FycmF5NyA/IF9pdGVyYXRvcjcgOiBfaXRlcmF0b3I3W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjc7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2k3ID49IF9pdGVyYXRvcjcubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTcgPSBfaXRlcmF0b3I3Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2k3LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY3ID0gX2k3LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmNztcblxuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yOSA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXk5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I5KSwgX2k5ID0gMCwgX2l0ZXJhdG9yOSA9IF9pc0FycmF5OSA/IF9pdGVyYXRvcjkgOiBfaXRlcmF0b3I5W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWY5O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5OSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k5ID49IF9pdGVyYXRvcjkubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjkgPSBfaXRlcmF0b3I5W19pOSsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTkgPSBfaXRlcmF0b3I5Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pOS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjkgPSBfaTkudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IxMCA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkxMCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMTApLCBfaTEwID0gMCwgX2l0ZXJhdG9yMTAgPSBfaXNBcnJheTEwID8gX2l0ZXJhdG9yMTAgOiBfaXRlcmF0b3IxMFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjEwO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kxMCA+PSBfaXRlcmF0b3IxMC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjEwID0gX2l0ZXJhdG9yMTBbX2kxMCsrXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pMTAgPSBfaXRlcmF0b3IxMC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kxMC5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYxMCA9IF9pMTAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeDMgPSBfcmVmMTA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFt4MiwgeDNdLmluZGV4T2YoeDEpID09PSAtMSAmJiBbeDEsIHgzXS5pbmRleE9mKHgyKSA9PT0gLTEgJiYgW3gxLCB4Ml0uaW5kZXhPZih4MykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IHgxID09PSBkaXYyICYmICh0eXBlb2YgeDIgPT09IFwidW5kZWZpbmVkXCIgfHwgeDIgPT09IHdpbmRvdy5kb2N1bWVudCkgfHwgeDEgPT09IGRpdjMgJiYgeDIgPT09IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDIsIHgzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjggPSBkYXRhU2V0LCBfaXNBcnJheTggPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjgpLCBfaTggPSAwLCBfaXRlcmF0b3I4ID0gX2lzQXJyYXk4ID8gX2l0ZXJhdG9yOCA6IF9pdGVyYXRvcjhbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmODtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5OCkge1xuICAgICAgICAgICAgICAgIGlmIChfaTggPj0gX2l0ZXJhdG9yOC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY4ID0gX2l0ZXJhdG9yOFtfaTgrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pOCA9IF9pdGVyYXRvcjgubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTguZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjggPSBfaTgudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmODtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QuYXBwbHkoX1V0aWxzRE9NMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdC5ib3R0b20pKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2YocmVzdWx0LmhlaWdodCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQubGVmdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQucmlnaHQpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2YocmVzdWx0LnRvcCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQud2lkdGgpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5ib3R0b20pLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQucmlnaHQpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LnRvcCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQud2lkdGgpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQuYm90dG9tKS5ub3QudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmJvdHRvbSkudG9FcXVhbChyZXN1bHQudG9wKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkudG9CZUxlc3NUaGFuKHJlc3VsdC5yaWdodCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5yaWdodCkubm90LnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC50b3ApLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQud2lkdGgpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmJvdHRvbSkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5yaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LnRvcCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LndpZHRoKS50b0VxdWFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5maW5kRWxlbWVudFBvc2l0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTEgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MTEgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjExKSwgX2kxMSA9IDAsIF9pdGVyYXRvcjExID0gX2lzQXJyYXkxMSA/IF9pdGVyYXRvcjExIDogX2l0ZXJhdG9yMTFbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMTE7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTExKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pMTEgPj0gX2l0ZXJhdG9yMTEubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTEgPSBfaXRlcmF0b3IxMVtfaTExKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTExID0gX2l0ZXJhdG9yMTEubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTExLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYxMSA9IF9pMTEudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4MSA9IF9yZWYxMTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTMgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjEzKSwgX2kxMyA9IDAsIF9pdGVyYXRvcjEzID0gX2lzQXJyYXkxMyA/IF9pdGVyYXRvcjEzIDogX2l0ZXJhdG9yMTNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjEzO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5MTMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMTMgPj0gX2l0ZXJhdG9yMTMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjEzID0gX2l0ZXJhdG9yMTNbX2kxMysrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTEzID0gX2l0ZXJhdG9yMTMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kxMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjEzID0gX2kxMy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDIgPSBfcmVmMTM7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IxNCA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkxNCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMTQpLCBfaTE0ID0gMCwgX2l0ZXJhdG9yMTQgPSBfaXNBcnJheTE0ID8gX2l0ZXJhdG9yMTQgOiBfaXRlcmF0b3IxNFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjE0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTE0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kxNCA+PSBfaXRlcmF0b3IxNC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjE0ID0gX2l0ZXJhdG9yMTRbX2kxNCsrXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pMTQgPSBfaXRlcmF0b3IxNC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kxNC5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYxNCA9IF9pMTQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeDMgPSBfcmVmMTQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFt4MiwgeDNdLmluZGV4T2YoeDEpID09PSAtMSAmJiBbeDEsIHgzXS5pbmRleE9mKHgyKSA9PT0gLTEgJiYgW3gxLCB4Ml0uaW5kZXhPZih4MykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IHgxID09PSBkaXYyICYmICh0eXBlb2YgeDIgPT09IFwidW5kZWZpbmVkXCIgfHwgeDIgPT09IHdpbmRvdy5kb2N1bWVudCkgfHwgeDEgPT09IGRpdjMgJiYgeDIgPT09IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDIsIHgzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjEyID0gZGF0YVNldCwgX2lzQXJyYXkxMiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMTIpLCBfaTEyID0gMCwgX2l0ZXJhdG9yMTIgPSBfaXNBcnJheTEyID8gX2l0ZXJhdG9yMTIgOiBfaXRlcmF0b3IxMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWYxMjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5MTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kxMiA+PSBfaXRlcmF0b3IxMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYxMiA9IF9pdGVyYXRvcjEyW19pMTIrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMTIgPSBfaXRlcmF0b3IxMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pMTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjEyID0gX2kxMi52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWYxMjtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC5maW5kRWxlbWVudFBvc2l0aW9uLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICBleHBlY3QodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJlc3VsdCkpLnRvRXF1YWwoXCJvYmplY3RcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQubGVmdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQudG9wKSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQudG9wKS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQudG9wKS5ub3QudG9FcXVhbCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5sZWZ0KS50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQudG9wKS50b0VxdWFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5hZGRFdmVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjE1ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTE1ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IxNSksIF9pMTUgPSAwLCBfaXRlcmF0b3IxNSA9IF9pc0FycmF5MTUgPyBfaXRlcmF0b3IxNSA6IF9pdGVyYXRvcjE1W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjE1O1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkxNSkge1xuICAgICAgICAgICAgICAgIGlmIChfaTE1ID49IF9pdGVyYXRvcjE1Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjE1ID0gX2l0ZXJhdG9yMTVbX2kxNSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kxNSA9IF9pdGVyYXRvcjE1Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kxNS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTUgPSBfaTE1LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmMTU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjE3ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTE3ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IxNyksIF9pMTcgPSAwLCBfaXRlcmF0b3IxNyA9IF9pc0FycmF5MTcgPyBfaXRlcmF0b3IxNyA6IF9pdGVyYXRvcjE3W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYxNztcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTE3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTE3ID49IF9pdGVyYXRvcjE3Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYxNyA9IF9pdGVyYXRvcjE3W19pMTcrK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2kxNyA9IF9pdGVyYXRvcjE3Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMTcuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYxNyA9IF9pMTcudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjE3O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTggPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MTggPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjE4KSwgX2kxOCA9IDAsIF9pdGVyYXRvcjE4ID0gX2lzQXJyYXkxOCA/IF9pdGVyYXRvcjE4IDogX2l0ZXJhdG9yMThbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYxODtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkxOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMTggPj0gX2l0ZXJhdG9yMTgubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYxOCA9IF9pdGVyYXRvcjE4W19pMTgrK107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaTE4ID0gX2l0ZXJhdG9yMTgubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMTguZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmMTggPSBfaTE4LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHgzID0gX3JlZjE4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChbeDIsIHgzXS5pbmRleE9mKHgxKSA9PT0gLTEgJiYgW3gxLCB4M10uaW5kZXhPZih4MikgPT09IC0xICYmIFt4MSwgeDJdLmluZGV4T2YoeDMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSB0eXBlb2YgeDIgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHgzID09PSBcImZ1bmN0aW9uXCIgJiYgKHgxID09PSBkaXYyIHx8IHgxID09PSBkaXYzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbeDEsIHgyLCB4M10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IxNiA9IGRhdGFTZXQsIF9pc0FycmF5MTYgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjE2KSwgX2kxNiA9IDAsIF9pdGVyYXRvcjE2ID0gX2lzQXJyYXkxNiA/IF9pdGVyYXRvcjE2IDogX2l0ZXJhdG9yMTZbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMTY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTE2KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pMTYgPj0gX2l0ZXJhdG9yMTYubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTYgPSBfaXRlcmF0b3IxNltfaTE2KytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTE2ID0gX2l0ZXJhdG9yMTYubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTE2LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYxNiA9IF9pMTYudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmMTY7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQuYWRkRXZlbnQuYXBwbHkoX1V0aWxzRE9NMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5yZW1vdmVFdmVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjE5ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTE5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IxOSksIF9pMTkgPSAwLCBfaXRlcmF0b3IxOSA9IF9pc0FycmF5MTkgPyBfaXRlcmF0b3IxOSA6IF9pdGVyYXRvcjE5W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjE5O1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkxOSkge1xuICAgICAgICAgICAgICAgIGlmIChfaTE5ID49IF9pdGVyYXRvcjE5Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjE5ID0gX2l0ZXJhdG9yMTlbX2kxOSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kxOSA9IF9pdGVyYXRvcjE5Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kxOS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTkgPSBfaTE5LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmMTk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIxID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTIxID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyMSksIF9pMjEgPSAwLCBfaXRlcmF0b3IyMSA9IF9pc0FycmF5MjEgPyBfaXRlcmF0b3IyMSA6IF9pdGVyYXRvcjIxW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYyMTtcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTIxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTIxID49IF9pdGVyYXRvcjIxLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYyMSA9IF9pdGVyYXRvcjIxW19pMjErK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2kyMSA9IF9pdGVyYXRvcjIxLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjEuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYyMSA9IF9pMjEudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjIxO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMjIgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MjIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIyKSwgX2kyMiA9IDAsIF9pdGVyYXRvcjIyID0gX2lzQXJyYXkyMiA/IF9pdGVyYXRvcjIyIDogX2l0ZXJhdG9yMjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYyMjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjIgPj0gX2l0ZXJhdG9yMjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYyMiA9IF9pdGVyYXRvcjIyW19pMjIrK107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaTIyID0gX2l0ZXJhdG9yMjIubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmMjIgPSBfaTIyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHgzID0gX3JlZjIyO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChbeDIsIHgzXS5pbmRleE9mKHgxKSA9PT0gLTEgJiYgW3gxLCB4M10uaW5kZXhPZih4MikgPT09IC0xICYmIFt4MSwgeDJdLmluZGV4T2YoeDMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSB0eXBlb2YgeDIgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHgzID09PSBcImZ1bmN0aW9uXCIgJiYgKHgxID09PSBkaXYyIHx8IHgxID09PSBkaXYzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbeDEsIHgyLCB4M10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyMCA9IGRhdGFTZXQsIF9pc0FycmF5MjAgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIwKSwgX2kyMCA9IDAsIF9pdGVyYXRvcjIwID0gX2lzQXJyYXkyMCA/IF9pdGVyYXRvcjIwIDogX2l0ZXJhdG9yMjBbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMjA7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTIwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pMjAgPj0gX2l0ZXJhdG9yMjAubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMjAgPSBfaXRlcmF0b3IyMFtfaTIwKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTIwID0gX2l0ZXJhdG9yMjAubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTIwLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyMCA9IF9pMjAudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmMjA7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfVXRpbHNET00yLmRlZmF1bHQucmVtb3ZlRXZlbnQuYXBwbHkoX1V0aWxzRE9NMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5oYXNDbGFzc05hbWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0Q2xhc3MoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzRE9NLmFkZENsYXNzTmFtZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RDbGFzcygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNET00ucmVtb3ZlQ2xhc3NOYW1lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdENsYXNzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS50b2dnbGVDbGFzc05hbWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0Q2xhc3MoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzRE9NLnJlcGxhY2VDbGFzc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RDbGFzcygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNET00uZ2V0RWxlbWVudEJ5VGFnTmFtZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIzID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTIzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyMyksIF9pMjMgPSAwLCBfaXRlcmF0b3IyMyA9IF9pc0FycmF5MjMgPyBfaXRlcmF0b3IyMyA6IF9pdGVyYXRvcjIzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIzO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkyMykge1xuICAgICAgICAgICAgICAgIGlmIChfaTIzID49IF9pdGVyYXRvcjIzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjIzID0gX2l0ZXJhdG9yMjNbX2kyMysrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kyMyA9IF9pdGVyYXRvcjIzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kyMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMjMgPSBfaTIzLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmMjM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjI1ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTI1ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyNSksIF9pMjUgPSAwLCBfaXRlcmF0b3IyNSA9IF9pc0FycmF5MjUgPyBfaXRlcmF0b3IyNSA6IF9pdGVyYXRvcjI1W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYyNTtcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTI1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTI1ID49IF9pdGVyYXRvcjI1Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYyNSA9IF9pdGVyYXRvcjI1W19pMjUrK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2kyNSA9IF9pdGVyYXRvcjI1Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjUuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYyNSA9IF9pMjUudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjI1O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMjYgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MjYgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjI2KSwgX2kyNiA9IDAsIF9pdGVyYXRvcjI2ID0gX2lzQXJyYXkyNiA/IF9pdGVyYXRvcjI2IDogX2l0ZXJhdG9yMjZbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYyNjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkyNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjYgPj0gX2l0ZXJhdG9yMjYubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYyNiA9IF9pdGVyYXRvcjI2W19pMjYrK107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaTI2ID0gX2l0ZXJhdG9yMjYubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMjYuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmMjYgPSBfaTI2LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHgzID0gX3JlZjI2O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChbeDIsIHgzXS5pbmRleE9mKHgxKSA9PT0gLTEgJiYgW3gxLCB4M10uaW5kZXhPZih4MikgPT09IC0xICYmIFt4MSwgeDJdLmluZGV4T2YoeDMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSB0eXBlb2YgeDEgPT09IFwic3RyaW5nXCIgJiYgeDEgPT09IFwiZGl2XCIgJiYgKF9VdGlsc0RPTTIuZGVmYXVsdC5pc0RPTURvY3VtZW50KHgyKSB8fCB4MiA9PT0gdW5kZWZpbmVkKSAmJiB0eXBlb2YgeDMgPT09IFwibnVtYmVyXCIgJiYgeDMgPCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDIsIHgzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjI0ID0gZGF0YVNldCwgX2lzQXJyYXkyNCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMjQpLCBfaTI0ID0gMCwgX2l0ZXJhdG9yMjQgPSBfaXNBcnJheTI0ID8gX2l0ZXJhdG9yMjQgOiBfaXRlcmF0b3IyNFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWYyNDtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5MjQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kyNCA+PSBfaXRlcmF0b3IyNC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyNCA9IF9pdGVyYXRvcjI0W19pMjQrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMjQgPSBfaXRlcmF0b3IyNC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pMjQuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjI0ID0gX2kyNC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWYyNDtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC5nZXRFbGVtZW50QnlUYWdOYW1lLmFwcGx5KF9VdGlsc0RPTTIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlTnVsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RPTS5nZXRMaW5lSGVpZ2h0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IF9VdGlsc0RPTTIuZGVmYXVsdC5nZXRMaW5lSGVpZ2h0KCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlYy9VdGlsc0RPTS5zcGVjLnRzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4uL2xpYi9VdGlscy50c1wiKTtcblxudmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmRlc2NyaWJlKFwiVXRpbHNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXYxID0gdm9pZCAwO1xuICAgIHZhciBkaXYyID0gdm9pZCAwO1xuICAgIHZhciBkaXYzID0gdm9pZCAwO1xuICAgIHZhciBpZnJhbWUgPSB2b2lkIDA7XG4gICAgdmFyIHBhcmFtc1ZhbHVlcyA9IHZvaWQgMDtcbiAgICB2YXIgZGF0YVNldCA9IHZvaWQgMDtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGl2MSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYxLmlkID0gXCJkaXYxXCI7XG4gICAgICAgIGRpdjIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2Mi5pZCA9IFwiZGl2MlwiO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgZGl2MyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYzLmlkID0gXCJkaXYzXCI7XG4gICAgICAgIGlmcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJqYXZhc2NyaXB0OjtcIjtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICAgICAgcGFyYW1zVmFsdWVzID0gW3VuZGVmaW5lZCwgbnVsbCwgZmFsc2UsIHRydWUsIDEyMywgXCJ0ZXN0XCIsIGRpdjEsIGRpdjIsIGRpdjMsIHdpbmRvdywgd2luZG93LmRvY3VtZW50LCBpZnJhbWUuY29udGVudFdpbmRvdywgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQsIHdpbmRvdy5kb2N1bWVudC5ib2R5XTtcbiAgICAgICAgZGF0YVNldCA9IFtdO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdjIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsczIuZGVmYXVsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9VdGlsczIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLndhcm4oKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXNzYW5nZSA9IFwiVGVzdFwiO1xuICAgICAgICBleHBlY3QoX1V0aWxzMi5kZWZhdWx0Lndhcm4obWVzc2FuZ2UpKS50b0VxdWFsKG1lc3NhbmdlKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHgxID0gX3JlZjtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IzKSwgX2kzID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiBfaXRlcmF0b3IzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYzO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHgyID0gX3JlZjM7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTQgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjQpLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID8gX2l0ZXJhdG9yNCA6IF9pdGVyYXRvcjRbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTQgPj0gX2l0ZXJhdG9yNC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaXRlcmF0b3I0W19pNCsrXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pNCA9IF9pdGVyYXRvcjQubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pNC5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWY0ID0gX2k0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHgzID0gX3JlZjQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFt4MiwgeDNdLmluZGV4T2YoeDEpID09PSAtMSAmJiBbeDEsIHgzXS5pbmRleE9mKHgyKSA9PT0gLTEgJiYgW3gxLCB4Ml0uaW5kZXhPZih4MykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IHgxID09PSBkaXYyICYmICh0eXBlb2YgeDIgPT09IFwidW5kZWZpbmVkXCIgfHwgeDIgPT09IHdpbmRvdy5kb2N1bWVudCkgfHwgeDEgPT09IGRpdjMgJiYgeDIgPT09IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDIsIHgzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBkYXRhU2V0LCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmMjtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9VdGlsczIuZGVmYXVsdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QuYXBwbHkoX1V0aWxzMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdC5ib3R0b20pKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2YocmVzdWx0LmhlaWdodCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQubGVmdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQucmlnaHQpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2YocmVzdWx0LnRvcCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQud2lkdGgpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5ib3R0b20pLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQucmlnaHQpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LnRvcCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQud2lkdGgpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQuYm90dG9tKS5ub3QudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmJvdHRvbSkudG9FcXVhbChyZXN1bHQudG9wKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkudG9CZUxlc3NUaGFuKHJlc3VsdC5yaWdodCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5yaWdodCkubm90LnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC50b3ApLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQud2lkdGgpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmJvdHRvbSkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5yaWdodCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LnRvcCkudG9FcXVhbCgwKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LndpZHRoKS50b0VxdWFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uKClcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTUgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjUpLCBfaTUgPSAwLCBfaXRlcmF0b3I1ID0gX2lzQXJyYXk1ID8gX2l0ZXJhdG9yNSA6IF9pdGVyYXRvcjVbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmNTtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5NSkge1xuICAgICAgICAgICAgICAgIGlmIChfaTUgPj0gX2l0ZXJhdG9yNS5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY1ID0gX2l0ZXJhdG9yNVtfaTUrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pNSA9IF9pdGVyYXRvcjUubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTUuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4MSA9IF9yZWY1O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTcgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjcpLCBfaTcgPSAwLCBfaXRlcmF0b3I3ID0gX2lzQXJyYXk3ID8gX2l0ZXJhdG9yNyA6IF9pdGVyYXRvcjdbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjc7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTcgPj0gX2l0ZXJhdG9yNy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pNyA9IF9pdGVyYXRvcjcubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k3LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pNy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDIgPSBfcmVmNztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjggPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5OCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yOCksIF9pOCA9IDAsIF9pdGVyYXRvcjggPSBfaXNBcnJheTggPyBfaXRlcmF0b3I4IDogX2l0ZXJhdG9yOFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pOCA+PSBfaXRlcmF0b3I4Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmOCA9IF9pdGVyYXRvcjhbX2k4KytdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2k4ID0gX2l0ZXJhdG9yOC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2k4LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjggPSBfaTgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeDMgPSBfcmVmODtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoW3gyLCB4M10uaW5kZXhPZih4MSkgPT09IC0xICYmIFt4MSwgeDNdLmluZGV4T2YoeDIpID09PSAtMSAmJiBbeDEsIHgyXS5pbmRleE9mKHgzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0geDEgPT09IGRpdjIgJiYgKHR5cGVvZiB4MiA9PT0gXCJ1bmRlZmluZWRcIiB8fCB4MiA9PT0gd2luZG93LmRvY3VtZW50KSB8fCB4MSA9PT0gZGl2MyAmJiB4MiA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3gxLCB4MiwgeDNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNiA9IGRhdGFTZXQsIF9pc0FycmF5NiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNiksIF9pNiA9IDAsIF9pdGVyYXRvcjYgPSBfaXNBcnJheTYgPyBfaXRlcmF0b3I2IDogX2l0ZXJhdG9yNltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY2O1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXk2KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pNiA+PSBfaXRlcmF0b3I2Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjYgPSBfaXRlcmF0b3I2W19pNisrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2k2ID0gX2l0ZXJhdG9yNi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pNi5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmNiA9IF9pNi52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWY2O1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX1V0aWxzMi5kZWZhdWx0LmZpbmRFbGVtZW50UG9zaXRpb24uYXBwbHkoX1V0aWxzMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdC5sZWZ0KSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdC50b3ApKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5sZWZ0KS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC50b3ApLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVmdCkubm90LnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC50b3ApLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLnRvRXF1YWwoMCk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC50b3ApLnRvRXF1YWwoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLmltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcygpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF91dGlscyA9IG5ldyBfVXRpbHMyLmRlZmF1bHQoKTtcbiAgICAgICAgdmFyIHBhcmFtc1ZhbHVlcyA9IFt1bmRlZmluZWQsIG51bGwsIGZhbHNlLCB0cnVlLCAxMjMsIFwiVXRpbHNcIiwgX1V0aWxzMi5kZWZhdWx0LCBfdXRpbHNdO1xuICAgICAgICB2YXIgZGF0YVNldCA9IFt7XG4gICAgICAgICAgICBwYXJhbXM6IFtdLFxuICAgICAgICAgICAgcmVzdWx0OiBmYWxzZVxuICAgICAgICB9XTtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yOSA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXk5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I5KSwgX2k5ID0gMCwgX2l0ZXJhdG9yOSA9IF9pc0FycmF5OSA/IF9pdGVyYXRvcjkgOiBfaXRlcmF0b3I5W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjk7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2k5ID49IF9pdGVyYXRvcjkubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmOSA9IF9pdGVyYXRvcjlbX2k5KytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTkgPSBfaXRlcmF0b3I5Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2k5LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY5ID0gX2k5LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmOTtcblxuICAgICAgICAgICAgdmFyIGNvbmQxID0geDEgPT09IF91dGlscztcbiAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeDFdLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogY29uZDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTEgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MTEgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjExKSwgX2kxMSA9IDAsIF9pdGVyYXRvcjExID0gX2lzQXJyYXkxMSA/IF9pdGVyYXRvcjExIDogX2l0ZXJhdG9yMTFbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjExO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5MTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMTEgPj0gX2l0ZXJhdG9yMTEubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjExID0gX2l0ZXJhdG9yMTFbX2kxMSsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTExID0gX2l0ZXJhdG9yMTEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kxMS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjExID0gX2kxMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDIgPSBfcmVmMTE7XG5cbiAgICAgICAgICAgICAgICBkYXRhU2V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDJdLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmQxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMTAgPSBkYXRhU2V0LCBfaXNBcnJheTEwID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IxMCksIF9pMTAgPSAwLCBfaXRlcmF0b3IxMCA9IF9pc0FycmF5MTAgPyBfaXRlcmF0b3IxMCA6IF9pdGVyYXRvcjEwW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjEwO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkxMCkge1xuICAgICAgICAgICAgICAgIGlmIChfaTEwID49IF9pdGVyYXRvcjEwLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjEwID0gX2l0ZXJhdG9yMTBbX2kxMCsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kxMCA9IF9pdGVyYXRvcjEwLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kxMC5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTAgPSBfaTEwLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2V0ID0gX3JlZjEwO1xuXG4gICAgICAgICAgICBfVXRpbHMyLmRlZmF1bHQuaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzLmFwcGx5KF9VdGlsczIuZGVmYXVsdCwgc2V0LnBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChPYmplY3Qua2V5cyhzZXQucGFyYW1zWzBdKSkudG9CZUFycmF5KE9iamVjdC5rZXlzKF9VdGlsczIuZGVmYXVsdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5zdGFjaygpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gX1V0aWxzMi5kZWZhdWx0LnN0YWNrKCk7XG4gICAgICAgIGV4cGVjdChzdGFjaykudG9CZUFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjEyID0gc3RhY2ssIF9pc0FycmF5MTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjEyKSwgX2kxMiA9IDAsIF9pdGVyYXRvcjEyID0gX2lzQXJyYXkxMiA/IF9pdGVyYXRvcjEyIDogX2l0ZXJhdG9yMTJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMTI7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTEyKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pMTIgPj0gX2l0ZXJhdG9yMTIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMTIgPSBfaXRlcmF0b3IxMltfaTEyKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTEyID0gX2l0ZXJhdG9yMTIubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTEyLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYxMiA9IF9pMTIudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvYmogPSBfcmVmMTI7XG5cbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKSkudG9FcXVhbChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChPYmplY3Qua2V5cyhvYmopKS50b0JlQXJyYXkoW1wiZmlsZVwiLCBcImNvbHVtblwiLCBcImxpbmVcIiwgXCJtZXRob2RcIl0pO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2Yob2JqLmZpbGUpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF90eXBlb2Yob2JqLmNvbHVtbikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihvYmoubGluZSkpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihvYmoubWV0aG9kKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGV4cGVjdChvYmouY29sdW1uKS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgZXhwZWN0KG9iai5saW5lKS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5nZXRVSUQoKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBJRDEgPSBfVXRpbHMyLmRlZmF1bHQuZ2V0VUlEKCk7XG4gICAgICAgIHZhciBJRDIgPSBfVXRpbHMyLmRlZmF1bHQuZ2V0VUlEKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgSUQxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoSUQxKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBJRDIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihJRDIpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICBleHBlY3QoSUQxKS5ub3QudG9FcXVhbChJRDIpO1xuICAgIH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjL1V0aWxzLnNwZWMudHNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNBbmltYXRpb24gPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzQW5pbWF0aW9uLnRzXCIpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZGVzY3JpYmUoXCJVdGlscy5BbmltYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQpKS50b0VxdWFsKFwiZnVuY3Rpb25cIik7XG4gICAgfSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWMvVXRpbHNBbmltYXRpb24uc3BlYy50c1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHMudHNcIik7XG5cbnZhciBfVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHMpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc0FuaW1hdGlvbi50c1wiKTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0FuaW1hdGlvbik7XG5cbnZhciBfVXRpbHNBbmltYXRpb25FYXNpbmcgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnRzXCIpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uRWFzaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZGVzY3JpYmUoXCJVdGlsc0FuaW1hdGlvbkVhc2luZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IHZvaWQgMDtcbiAgICB2YXIgZGF0YVNldCA9IHZvaWQgMDtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBwYXJhbXNWYWx1ZXMgPSBbdW5kZWZpbmVkLCBudWxsLCB0cnVlLCAxMCwgMTIzLCBcInRlc3RcIiwgbm93LCBub3cgKyAxMDAwXTtcbiAgICAgICAgZGF0YVNldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjI7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDIgPSBfcmVmMjtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogX2l0ZXJhdG9yM1tTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMyA+PSBfaXRlcmF0b3IzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kzKytdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeDMgPSBfcmVmMztcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTQgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjQpLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID8gX2l0ZXJhdG9yNCA6IF9pdGVyYXRvcjRbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTQgPj0gX2l0ZXJhdG9yNC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWY0ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pNCA9IF9pdGVyYXRvcjQubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTQuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaTQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4NCA9IF9yZWY0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IHR5cGVvZiB4MSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeDIgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHgzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB4NCA9PT0gXCJudW1iZXJcIiAmJiB4MSA8IHg0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MSwgeDIsIHgzLCB4NF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gdGVzdChtZXRob2RzLCBfZGF0YVNldCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gX2RhdGFTZXQsIF9pc0FycmF5NSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNSksIF9pNSA9IDAsIF9pdGVyYXRvcjUgPSBfaXNBcnJheTUgPyBfaXRlcmF0b3I1IDogX2l0ZXJhdG9yNVtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY1O1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXk1KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pNSA+PSBfaXRlcmF0b3I1Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjUgPSBfaXRlcmF0b3I1W19pNSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2k1ID0gX2l0ZXJhdG9yNS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pNS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmNSA9IF9pNS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWY1O1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNiA9IG1ldGhvZHMsIF9pc0FycmF5NiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNiksIF9pNiA9IDAsIF9pdGVyYXRvcjYgPSBfaXNBcnJheTYgPyBfaXRlcmF0b3I2IDogX2l0ZXJhdG9yNltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmNjtcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pNiA+PSBfaXRlcmF0b3I2Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWY2ID0gX2l0ZXJhdG9yNltfaTYrK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2k2ID0gX2l0ZXJhdG9yNi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTYuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWY2ID0gX2k2LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBfcmVmNjtcblxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChtZXRob2QuYXBwbHkoX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LCBzZXQucGFyYW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSByZXN1bHRzLCBfaXNBcnJheTcgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjcpLCBfaTcgPSAwLCBfaXRlcmF0b3I3ID0gX2lzQXJyYXk3ID8gX2l0ZXJhdG9yNyA6IF9pdGVyYXRvcjdbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjc7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTcgPj0gX2l0ZXJhdG9yNy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pNyA9IF9pdGVyYXRvcjcubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k3LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pNy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX3Jlc3VsdCA9IF9yZWY3O1xuXG4gICAgICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQpLnRvRXF1YWwocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KF90eXBlb2YocmVzdWx0c1swXSkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdHNbMF0pLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdHNbMF0pKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHRzWzBdKS50b0JlTmFOKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGl0KFwiVXRpbHNBbmltYXRpb25FYXNpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuc3dpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5zd2luZywgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5zd2luZywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LnN3aW5nXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJblF1YWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5RdWFkLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJblF1YWQsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5RdWFkXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRRdWFkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dFF1YWQsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZU91dFF1YWQsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlT3V0UXVhZF0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRRdWFkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0UXVhZCwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5PdXRRdWFkLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluT3V0UXVhZF0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5DdWJpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkN1YmljLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbkN1YmljLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluQ3ViaWNdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dEN1YmljXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dEN1YmljLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VPdXRDdWJpYywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VPdXRDdWJpY10sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRDdWJpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dEN1YmljLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbk91dEN1YmljLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluT3V0Q3ViaWNdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluUXVhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5RdWFydCwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5RdWFydCwgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJblF1YXJ0XSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRRdWFydFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRRdWFydCwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlT3V0UXVhcnQsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlT3V0UXVhcnRdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0UXVhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRRdWFydCwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5PdXRRdWFydCwgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbk91dFF1YXJ0XSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJblF1aW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluUXVpbnQsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluUXVpbnQsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5RdWludF0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0UXVpbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0UXVpbnQsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZU91dFF1aW50LCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZU91dFF1aW50XSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dFF1aW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0UXVpbnQsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluT3V0UXVpbnQsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5PdXRRdWludF0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5TaW5lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluU2luZSwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5TaW5lLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluU2luZV0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0U2luZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRTaW5lLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VPdXRTaW5lLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZU91dFNpbmVdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0U2luZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dFNpbmUsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluT3V0U2luZSwgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbk91dFNpbmVdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluRXhwb1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkV4cG8sIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluRXhwbywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbkV4cG9dLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dEV4cG9cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0RXhwbywgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlT3V0RXhwbywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VPdXRFeHBvXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dEV4cG9cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRFeHBvLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbk91dEV4cG8sIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5PdXRFeHBvXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkNpcmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5DaXJjLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbkNpcmMsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5DaXJjXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRDaXJjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dENpcmMsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZU91dENpcmMsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlT3V0Q2lyY10sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRDaXJjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0Q2lyYywgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5PdXRDaXJjLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluT3V0Q2lyY10sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5FbGFzdGljXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluRWxhc3RpYywgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5FbGFzdGljLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZUluRWxhc3RpY10sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHMuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0RWxhc3RpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRFbGFzdGljLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VPdXRFbGFzdGljLCBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQuZWFzZU91dEVsYXN0aWNdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0RWxhc3RpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dEVsYXN0aWMsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluT3V0RWxhc3RpYywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbk91dEVsYXN0aWNdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluQmFja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkJhY2ssIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZUluQmFjaywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbkJhY2tdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dEJhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlT3V0QmFjaywgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlT3V0QmFjaywgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VPdXRCYWNrXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJbk91dEJhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHMyLmRlZmF1bHQuQW5pbWF0aW9uLkVhc2luZy5lYXNlSW5PdXRCYWNrLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbk91dEJhY2ssIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5PdXRCYWNrXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlscy5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkJvdW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VJbkJvdW5jZSwgX1V0aWxzQW5pbWF0aW9uMi5kZWZhdWx0LkVhc2luZy5lYXNlSW5Cb3VuY2UsIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdC5lYXNlSW5Cb3VuY2VdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZU91dEJvdW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsczIuZGVmYXVsdC5BbmltYXRpb24uRWFzaW5nLmVhc2VPdXRCb3VuY2UsIF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdC5FYXNpbmcuZWFzZU91dEJvdW5jZSwgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VPdXRCb3VuY2VdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzLkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0Qm91bmNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzMi5kZWZhdWx0LkFuaW1hdGlvbi5FYXNpbmcuZWFzZUluT3V0Qm91bmNlLCBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQuRWFzaW5nLmVhc2VJbk91dEJvdW5jZSwgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0LmVhc2VJbk91dEJvdW5jZV0sIGRhdGFTZXQpO1xuICAgIH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnNwZWMudHNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzXCIpO1xuXG52YXIgX1V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzKTtcblxudmFyIF9VdGlsc0Jyb3dzZXIgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzQnJvd3NlclwiKTtcblxudmFyIF9VdGlsc0Jyb3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNCcm93c2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZGVzY3JpYmUoXCJVdGlsc0Jyb3dzZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0QnJvd3NlcnMgPSBmdW5jdGlvbiB0ZXN0QnJvd3NlcnMoKSB7XG4gICAgICAgIHZhciBvcGVyYTEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzT3BlcmEoKTtcbiAgICAgICAgdmFyIG9wZXJhMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzT3BlcmEoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBvcGVyYTEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvcGVyYTEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBvcGVyYTIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvcGVyYTIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KG9wZXJhMSkudG9FcXVhbChvcGVyYTIpO1xuICAgICAgICB2YXIgb3BlcmFOZXcxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc09wZXJhTmV3KCk7XG4gICAgICAgIHZhciBvcGVyYU5ldzIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc09wZXJhTmV3KCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2Ygb3BlcmFOZXcxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob3BlcmFOZXcxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2Ygb3BlcmFOZXcyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob3BlcmFOZXcyKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdChvcGVyYU5ldzEpLnRvRXF1YWwob3BlcmFOZXcyKTtcbiAgICAgICAgdmFyIG1zaWUxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc01TSUUoKTtcbiAgICAgICAgdmFyIG1zaWUyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuaXNNU0lFKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgbXNpZTEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtc2llMSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIG1zaWUyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobXNpZTIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KG1zaWUxKS50b0VxdWFsKG1zaWUyKTtcbiAgICAgICAgdmFyIG1zaWVOZXcxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc01TSUVOZXcoKTtcbiAgICAgICAgdmFyIG1zaWVOZXcyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuaXNNU0lFTmV3KCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgbXNpZU5ldzEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtc2llTmV3MSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIG1zaWVOZXcyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobXNpZU5ldzIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KG1zaWVOZXcxKS50b0VxdWFsKG1zaWVOZXcyKTtcbiAgICAgICAgdmFyIGNocm9tZTEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzQ2hyb21lKCk7XG4gICAgICAgIHZhciBjaHJvbWUyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuaXNDaHJvbWUoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBjaHJvbWUxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY2hyb21lMSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGNocm9tZTIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjaHJvbWUyKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdChjaHJvbWUxKS50b0VxdWFsKGNocm9tZTIpO1xuICAgICAgICB2YXIgc2FmYXJpMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNTYWZhcmkoKTtcbiAgICAgICAgdmFyIHNhZmFyaTIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc1NhZmFyaSgpO1xuICAgICAgICBleHBlY3QodHlwZW9mIHNhZmFyaTEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzYWZhcmkxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2Ygc2FmYXJpMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHNhZmFyaTIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHNhZmFyaTEpLnRvRXF1YWwoc2FmYXJpMik7XG4gICAgICAgIHZhciBmaXJlZm94MSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNGaXJlZm94KCk7XG4gICAgICAgIHZhciBmaXJlZm94MiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzRmlyZWZveCgpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGZpcmVmb3gxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZmlyZWZveDEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBmaXJlZm94MiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGZpcmVmb3gyKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdChmaXJlZm94MSkudG9FcXVhbChmaXJlZm94Mik7XG4gICAgICAgIHZhciBicm93c2VycyA9IHtcbiAgICAgICAgICAgIFwiT3BlcmFcIjogb3BlcmExLFxuICAgICAgICAgICAgXCJPcGVyYSBOZXdcIjogb3BlcmFOZXcxLFxuICAgICAgICAgICAgXCJNU0lFXCI6IG1zaWUxLFxuICAgICAgICAgICAgXCJNU0lFIE5ld1wiOiBtc2llTmV3MSxcbiAgICAgICAgICAgIFwiQ2hyb21lXCI6IGNocm9tZTEsXG4gICAgICAgICAgICBcIlNhZmFyaVwiOiBzYWZhcmkxLFxuICAgICAgICAgICAgXCJGaXJlZm94XCI6IGZpcmVmb3gxXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc0Jyb3dzZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBicm93c2VyIGluIGJyb3dzZXJzKSB7XG4gICAgICAgICAgICBpZiAoaXNCcm93c2VyRGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QoYnJvd3NlcnNbYnJvd3Nlcl0pLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChicm93c2Vyc1ticm93c2VyXSkge1xuICAgICAgICAgICAgICAgIGlzQnJvd3NlckRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmVyc2lvbjEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHZlcnNpb24yID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uMyA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiT3BlcmFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24xID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRPcGVyYVZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24yID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuZ2V0T3BlcmFWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk9wZXJhIE5ld1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmdldE9wZXJhTmV3VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTVNJRVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmdldE1TSUVWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmdldE1TSUVWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1TSUUgTmV3XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0TVNJRU5ld1ZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24yID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuZ2V0TVNJRU5ld1ZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2hyb21lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0Q2hyb21lVmVyc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNhZmFyaVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmdldFNhZmFyaVZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24yID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuZ2V0U2FmYXJpVmVyc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGaXJlZm94XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24yID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHBlY3QodHlwZW9mIHZlcnNpb24xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodmVyc2lvbjEpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgdmVyc2lvbjIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih2ZXJzaW9uMikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHZlcnNpb24xKS50b0VxdWFsKHZlcnNpb24yKTtcbiAgICAgICAgICAgICAgICBleHBlY3QodmVyc2lvbjEpLnRvRXF1YWwodmVyc2lvbjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdGVzdEJyb3dzZXJzVHlwZSA9IGZ1bmN0aW9uIHRlc3RCcm93c2Vyc1R5cGUoKSB7XG4gICAgICAgIHZhciBpc1dlYktpdDEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzV2ViS2l0KCk7XG4gICAgICAgIHZhciBpc1dlYktpdDIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc1dlYktpdCgpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGlzV2ViS2l0MSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGlzV2ViS2l0MSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGlzV2ViS2l0MiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGlzV2ViS2l0MikpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QoaXNXZWJLaXQxKS50b0VxdWFsKGlzV2ViS2l0Mik7XG4gICAgICAgIHZhciBpc0dlY2tvMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNHZWNrbygpO1xuICAgICAgICB2YXIgaXNHZWNrbzIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc0dlY2tvKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgaXNHZWNrbzEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc0dlY2tvMSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGlzR2Vja28yID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXNHZWNrbzIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KGlzR2Vja28xKS50b0VxdWFsKGlzR2Vja28yKTtcbiAgICAgICAgdmFyIGlzQW5kcm9pZDEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzQW5kcm9pZCgpO1xuICAgICAgICB2YXIgaXNBbmRyb2lkMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzQW5kcm9pZCgpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGlzQW5kcm9pZDEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc0FuZHJvaWQxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgaXNBbmRyb2lkMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGlzQW5kcm9pZDIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KGlzQW5kcm9pZDEpLnRvRXF1YWwoaXNBbmRyb2lkMik7XG4gICAgICAgIHZhciBpc0xpbnV4MSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNMaW51eCgpO1xuICAgICAgICB2YXIgaXNMaW51eDIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc0xpbnV4KCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgaXNMaW51eDEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc0xpbnV4MSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGlzTGludXgyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXNMaW51eDIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KGlzTGludXgxKS50b0VxdWFsKGlzTGludXgyKTtcbiAgICAgICAgZXhwZWN0KGlzV2ViS2l0MSkubm90LnRvRXF1YWwoaXNHZWNrbzEpO1xuICAgICAgICBleHBlY3QoaXNBbmRyb2lkMSkudG9FcXVhbChpc0xpbnV4MSk7XG4gICAgfTtcbiAgICB2YXIgdGVzdE90aGVyQnJvd3NlcnMgPSBmdW5jdGlvbiB0ZXN0T3RoZXJCcm93c2VycygpIHtcbiAgICAgICAgdmFyIGlzT3RoZXIxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc090aGVyKCk7XG4gICAgICAgIHZhciBpc090aGVyMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzT3RoZXIoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBpc090aGVyMSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGlzT3RoZXIxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgaXNPdGhlcjIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc090aGVyMikpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QoaXNPdGhlcjEpLnRvRXF1YWwoaXNPdGhlcjIpO1xuICAgICAgICB2YXIgZ2V0T3RoZXJOYW1lMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0T3RoZXJOYW1lKCk7XG4gICAgICAgIHZhciBnZXRPdGhlck5hbWUyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuZ2V0T3RoZXJOYW1lKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgZ2V0T3RoZXJOYW1lMSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGdldE90aGVyTmFtZTEpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGdldE90aGVyTmFtZTIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihnZXRPdGhlck5hbWUyKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KGdldE90aGVyTmFtZTEpLnRvRXF1YWwoZ2V0T3RoZXJOYW1lMik7XG4gICAgICAgIHZhciBnZXRPdGhlclZlcnNpb24xID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRPdGhlclZlcnNpb24oKTtcbiAgICAgICAgdmFyIGdldE90aGVyVmVyc2lvbjIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5nZXRPdGhlclZlcnNpb24oKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBnZXRPdGhlclZlcnNpb24xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZ2V0T3RoZXJWZXJzaW9uMSkpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgZ2V0T3RoZXJWZXJzaW9uMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGdldE90aGVyVmVyc2lvbjIpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICBleHBlY3QoZ2V0T3RoZXJWZXJzaW9uMSkudG9FcXVhbChnZXRPdGhlclZlcnNpb24yKTtcbiAgICB9O1xuICAgIGl0KFwiVXRpbHNCcm93c2VyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBfVXRpbHNCcm93c2VyMi5kZWZhdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX1V0aWxzQnJvd3NlcjIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRJbmZvXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZm8xID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRJbmZvKCk7XG4gICAgICAgIHZhciBpbmZvMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmdldEluZm8oKTtcbiAgICAgICAgZXhwZWN0KE9iamVjdC5rZXlzKGluZm8xKSkudG9CZUFycmF5KFtcImJyb3dzZXJcIiwgXCJtb2JpbGVcIiwgXCJ2ZXJzaW9uXCJdKTtcbiAgICAgICAgZXhwZWN0KF90eXBlb2YoaW5mbzEuYnJvd3NlcikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdChfdHlwZW9mKGluZm8xLm1vYmlsZSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QoX3R5cGVvZihpbmZvMS52ZXJzaW9uKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KGluZm8xLmJyb3dzZXIpLnRvRXF1YWwoX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXROYW1lKCkpO1xuICAgICAgICBleHBlY3QoaW5mbzEubW9iaWxlKS50b0VxdWFsKF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNNb2JpbGUoKSk7XG4gICAgICAgIGV4cGVjdChpbmZvMS52ZXJzaW9uKS50b0VxdWFsKF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0VmVyc2lvbigpKTtcbiAgICAgICAgZXhwZWN0KGluZm8xKS50b0VxdWFsKGluZm8yKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXROYW1lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hbWUxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXROYW1lKCk7XG4gICAgICAgIHZhciBuYW1lMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmdldE5hbWUoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBuYW1lMSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5hbWUxKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBuYW1lMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5hbWUyKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KG5hbWUxKS50b0VxdWFsKG5hbWUyKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRWZXJzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZlcnNpb24xID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRWZXJzaW9uKCk7XG4gICAgICAgIHZhciB2ZXJzaW9uMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmdldFZlcnNpb24oKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiB2ZXJzaW9uMSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHZlcnNpb24xKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiB2ZXJzaW9uMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHZlcnNpb24yKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgZXhwZWN0KHZlcnNpb24xKS50b0VxdWFsKHZlcnNpb24yKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci50cmltVmVyc2lvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uMSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0VmVyc2lvbigpO1xuICAgICAgICB2YXIgdmVyc2lvbjIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5nZXRWZXJzaW9uKCk7XG4gICAgICAgIHZhciB0cmltVmVyc2lvbjEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LnRyaW1WZXJzaW9uKHZlcnNpb24xKTtcbiAgICAgICAgdmFyIHRyaW1WZXJzaW9uMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24yKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiB0cmltVmVyc2lvbjEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0cmltVmVyc2lvbjEpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIHRyaW1WZXJzaW9uMiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRyaW1WZXJzaW9uMikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdCh0cmltVmVyc2lvbjEpLnRvRXF1YWwodHJpbVZlcnNpb24yKTtcbiAgICAgICAgdmFyIHBhcmFtc1ZhbHVlcyA9IFt1bmRlZmluZWQsIG51bGwsIHRydWUsIDEyMywgXCJ0ZXN0XCIsIHRyaW1WZXJzaW9uMV07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXNWYWx1ZSA9IF9yZWY7XG5cbiAgICAgICAgICAgIHZhciB0cmltVmVyc2lvbiA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQudHJpbVZlcnNpb24ocGFyYW1zVmFsdWUpO1xuICAgICAgICAgICAgZXhwZWN0KHR5cGVvZiB0cmltVmVyc2lvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRyaW1WZXJzaW9uKSkudG9FcXVhbChcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXNWYWx1ZSA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QodHJpbVZlcnNpb24pLnRvRXF1YWwoXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXNWYWx1ZSA9PT0gdHJpbVZlcnNpb24xKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHRyaW1WZXJzaW9uKS50b0VxdWFsKHRyaW1WZXJzaW9uMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdCh0cmltVmVyc2lvbikudG9FcXVhbChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzTW9iaWxlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vYmlsZTEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzTW9iaWxlKCk7XG4gICAgICAgIHZhciBtb2JpbGUyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuaXNNb2JpbGUoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBtb2JpbGUxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobW9iaWxlMSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIG1vYmlsZTIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtb2JpbGUyKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdChtb2JpbGUxKS50b0VxdWFsKG1vYmlsZTIpO1xuICAgICAgICB2YXIgdGFibGV0MSA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuaXNUYWJsZXRQQygpO1xuICAgICAgICB2YXIgdGFibGV0MiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzVGFibGV0UEMoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiB0YWJsZXQxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodGFibGV0MSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIHRhYmxldDIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0YWJsZXQyKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdCh0YWJsZXQxKS50b0VxdWFsKHRhYmxldDIpO1xuICAgICAgICBpZiAobW9iaWxlMSkge1xuICAgICAgICAgICAgZXhwZWN0KHRhYmxldDEpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNPcGVyYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RCcm93c2VycygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmdldE9wZXJhVmVyc2lvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RCcm93c2VycygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzT3BlcmFOZXdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5pc01TSUVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRNU0lFVmVyc2lvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RCcm93c2VycygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzTVNJRU5ld1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RCcm93c2VycygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNDaHJvbWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNTYWZhcmlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNGaXJlZm94XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5pc090aGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdE90aGVyQnJvd3NlcnMoKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQnJvd3Nlci5nZXRPdGhlck5hbWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0T3RoZXJCcm93c2VycygpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmdldE90aGVyVmVyc2lvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3RPdGhlckJyb3dzZXJzKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNTdXBwb3J0ZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc1N1cHBvcnRlZCgpO1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQyID0gX1V0aWxzMi5kZWZhdWx0LkJyb3dzZXIuaXNTdXBwb3J0ZWQoKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBpc1N1cHBvcnRlZDEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc1N1cHBvcnRlZDEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBpc1N1cHBvcnRlZDIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihpc1N1cHBvcnRlZDIpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KGlzU3VwcG9ydGVkMSkudG9FcXVhbChpc1N1cHBvcnRlZDIpO1xuICAgICAgICBleHBlY3QoaXNTdXBwb3J0ZWQxKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzV2ViS2l0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzVHlwZSgpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzR2Vja29cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnNUeXBlKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNBbmRyb2lkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdEJyb3dzZXJzVHlwZSgpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNCcm93c2VyLmlzTGludXhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0QnJvd3NlcnNUeXBlKCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0Jyb3dzZXIuaXNUYWJsZXRQQ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb2JpbGUxID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5pc01vYmlsZSgpO1xuICAgICAgICB2YXIgbW9iaWxlMiA9IF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmlzTW9iaWxlKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgbW9iaWxlMSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vYmlsZTEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiBtb2JpbGUyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobW9iaWxlMikpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QobW9iaWxlMSkudG9FcXVhbChtb2JpbGUyKTtcbiAgICAgICAgdmFyIHRhYmxldDEgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmlzVGFibGV0UEMoKTtcbiAgICAgICAgdmFyIHRhYmxldDIgPSBfVXRpbHMyLmRlZmF1bHQuQnJvd3Nlci5pc1RhYmxldFBDKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgdGFibGV0MSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRhYmxldDEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgZXhwZWN0KHR5cGVvZiB0YWJsZXQyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodGFibGV0MikpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICBleHBlY3QodGFibGV0MSkudG9FcXVhbCh0YWJsZXQyKTtcbiAgICAgICAgaWYgKHRhYmxldDEpIHtcbiAgICAgICAgICAgIGV4cGVjdChtb2JpbGUxKS50b0VxdWFsKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjL1V0aWxzQnJvd3Nlci5zcGVjLnRzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc1wiKTtcblxudmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cbnZhciBfVXRpbHNDb29raWUgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzQ29va2llXCIpO1xuXG52YXIgX1V0aWxzQ29va2llMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQ29va2llKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFVSTCA9IHJlcXVpcmUoXCJ1cmxcIik7XG5cbmRlc2NyaWJlKFwiVXRpbHNDb29raWVcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gdGVzdCgpIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcGFyYW1zVmFsdWVzID0gW3VuZGVmaW5lZCwgZmFsc2UsIHRydWUsIDMwLCBcInZhbHVlXCIsIFwiL1wiLCBcInRlc3RcIiwgbG9jYXRpb24uaG9zdG5hbWVdO1xuICAgICAgICB2YXIgZGF0YVNldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeDEgPSBfcmVmO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kzKytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDIgPSBfcmVmMztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5NCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNCksIF9pNCA9IDAsIF9pdGVyYXRvcjQgPSBfaXNBcnJheTQgPyBfaXRlcmF0b3I0IDogX2l0ZXJhdG9yNFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pNCA+PSBfaXRlcmF0b3I0Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmNCA9IF9pdGVyYXRvcjRbX2k0KytdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2k0ID0gX2l0ZXJhdG9yNC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2k0LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaTQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeDMgPSBfcmVmNDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTUgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjUpLCBfaTUgPSAwLCBfaXRlcmF0b3I1ID0gX2lzQXJyYXk1ID8gX2l0ZXJhdG9yNSA6IF9pdGVyYXRvcjVbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTUgPj0gX2l0ZXJhdG9yNS5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWY1ID0gX2l0ZXJhdG9yNVtfaTUrK107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pNSA9IF9pdGVyYXRvcjUubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTUuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4NCA9IF9yZWY1O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTYgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjYpLCBfaTYgPSAwLCBfaXRlcmF0b3I2ID0gX2lzQXJyYXk2ID8gX2l0ZXJhdG9yNiA6IF9pdGVyYXRvcjZbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjY7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTYgPj0gX2l0ZXJhdG9yNi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pdGVyYXRvcjZbX2k2KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pNiA9IF9pdGVyYXRvcjYubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2k2LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pNi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeDUgPSBfcmVmNjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5NyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNyksIF9pNyA9IDAsIF9pdGVyYXRvcjcgPSBfaXNBcnJheTcgPyBfaXRlcmF0b3I3IDogX2l0ZXJhdG9yN1tTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Nykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pNyA+PSBfaXRlcmF0b3I3Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2k3ID0gX2l0ZXJhdG9yNy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2k3LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjcgPSBfaTcudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeDYgPSBfcmVmNztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I4ID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheTggPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjgpLCBfaTggPSAwLCBfaXRlcmF0b3I4ID0gX2lzQXJyYXk4ID8gX2l0ZXJhdG9yOCA6IF9pdGVyYXRvcjhbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmODtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTggPj0gX2l0ZXJhdG9yOC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWY4ID0gX2l0ZXJhdG9yOFtfaTgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pOCA9IF9pdGVyYXRvcjgubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaTguZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjggPSBfaTgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4NyA9IF9yZWY4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoW3gyLCB4MywgeDQsIHg1LCB4NiwgeDddLmluZGV4T2YoeDEpID09PSAtMSAmJiBbeDEsIHgzLCB4NCwgeDUsIHg2LCB4N10uaW5kZXhPZih4MikgPT09IC0xICYmIFt4MSwgeDIsIHg0LCB4NSwgeDYsIHg3XS5pbmRleE9mKHgzKSA9PT0gLTEgJiYgW3gxLCB4MiwgeDMsIHg1LCB4NiwgeDddLmluZGV4T2YoeDQpID09PSAtMSAmJiBbeDEsIHgyLCB4MywgeDQsIHg2LCB4N10uaW5kZXhPZih4NSkgPT09IC0xICYmIFt4MSwgeDIsIHgzLCB4NCwgeDUsIHg3XS5pbmRleE9mKHg2KSA9PT0gLTEgJiYgW3gxLCB4MiwgeDMsIHg0LCB4NSwgeDZdLmluZGV4T2YoeDcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbeDEsIHgyLCB4MywgeDQsIHg1LCB4NiwgeDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gdHlwZW9mIHgxID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2YgeDIgPT09IFwic3RyaW5nXCIgJiYgX1V0aWxzQ29va2llMi5kZWZhdWx0LnJlZ1ZhbGlkS2V5LnRlc3QoeDIpICYmIHR5cGVvZiB4MyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgeDQgPT09IFwibnVtYmVyXCIgJiYgeDQgPCAzNjUgJiYgdHlwZW9mIHg1ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB4NiA9PT0gXCJzdHJpbmdcIiAmJiB4Ni5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSAhPT0gLTEgJiYgdHlwZW9mIHg3ID09PSBcImJvb2xlYW5cIiAmJiB4NyA9PT0gKGxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IFVSTC5wYXJzZShcImh0dHA6Ly9cIiArIHg2ICsgeDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodS5ob3N0bmFtZSAhPT0geDYgfHwgdS5wYXRoICE9PSB4NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gZGF0YVNldCwgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjI7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2V0ID0gX3JlZjI7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IGRhdGFcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNldEl0ZW0xID0gX1V0aWxzQ29va2llMi5kZWZhdWx0LnNldEl0ZW0uYXBwbHkoX1V0aWxzQ29va2llMi5kZWZhdWx0LCBzZXQucGFyYW1zKTtcbiAgICAgICAgICAgIHZhciBzZXRJdGVtMiA9IF9VdGlsczIuZGVmYXVsdC5Db29raWUuc2V0SXRlbS5hcHBseShfVXRpbHNDb29raWUyLmRlZmF1bHQsIHNldC5wYXJhbXMpO1xuICAgICAgICAgICAgZXhwZWN0KHNldEl0ZW0xKS50b0VxdWFsKHNldEl0ZW0yKTtcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2Ygc2V0SXRlbTEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzZXRJdGVtMSkpLnRvRXF1YWwoXCJib29sZWFuXCIpO1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3Qoc2V0SXRlbTEpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChzZXRJdGVtMSkudG9FcXVhbChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0SXRlbTEpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBHZXQgZGF0YVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBnZXRJdGVtMSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdC5nZXRJdGVtLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAyKSk7XG4gICAgICAgICAgICAgICAgdmFyIGdldEl0ZW0yID0gX1V0aWxzMi5kZWZhdWx0LkNvb2tpZS5nZXRJdGVtLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAyKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGdldEl0ZW0xKS50b0VxdWFsKGdldEl0ZW0yKTtcbiAgICAgICAgICAgICAgICBleHBlY3QodHlwZW9mIGdldEl0ZW0xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZ2V0SXRlbTEpKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChnZXRJdGVtMSkudG9FcXVhbChzZXQucGFyYW1zWzJdKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBHZXQga2V5c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBnZXRLZXlzMSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdC5nZXRLZXlzLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgdmFyIGdldEtleXMyID0gX1V0aWxzMi5kZWZhdWx0LkNvb2tpZS5nZXRLZXlzLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGdldEtleXMxKS50b0VxdWFsKGdldEtleXMyKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZ2V0S2V5czEpLnRvQmVBcnJheSgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChnZXRLZXlzMSkudG9Db250YWluKHNldC5wYXJhbXNbMV0pO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJlbW92ZSBpdGVtXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUl0ZW0xID0gX1V0aWxzQ29va2llMi5kZWZhdWx0LnJlbW92ZUl0ZW0uYXBwbHkoX1V0aWxzQ29va2llMi5kZWZhdWx0LCBzZXQucGFyYW1zLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlSXRlbTIgPSBfVXRpbHMyLmRlZmF1bHQuQ29va2llLnJlbW92ZUl0ZW0uYXBwbHkoX1V0aWxzQ29va2llMi5kZWZhdWx0LCBzZXQucGFyYW1zLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgICAgICBnZXRLZXlzMSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdC5nZXRLZXlzLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbW92ZUl0ZW0xKS50b0VxdWFsKHJlbW92ZUl0ZW0yKTtcbiAgICAgICAgICAgICAgICBleHBlY3QodHlwZW9mIHJlbW92ZUl0ZW0xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVtb3ZlSXRlbTEpKS50b0VxdWFsKFwiYm9vbGVhblwiKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVtb3ZlSXRlbTEpLnRvRXF1YWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGdldEtleXMxKS5ub3QudG9Db250YWluKHNldC5wYXJhbXNbMV0pO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENsZWFuIGl0ZW1zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2V0SXRlbTEgPSBfVXRpbHNDb29raWUyLmRlZmF1bHQuc2V0SXRlbS5hcHBseShfVXRpbHNDb29raWUyLmRlZmF1bHQsIHNldC5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIGdldEtleXMxID0gX1V0aWxzQ29va2llMi5kZWZhdWx0LmdldEtleXMuYXBwbHkoX1V0aWxzQ29va2llMi5kZWZhdWx0LCBzZXQucGFyYW1zLnNsaWNlKDAsIDEpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xlYXIxID0gX1V0aWxzQ29va2llMi5kZWZhdWx0LmNsZWFyLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNsZWFyMiA9IF9VdGlsczIuZGVmYXVsdC5Db29raWUuY2xlYXIuYXBwbHkoX1V0aWxzQ29va2llMi5kZWZhdWx0LCBzZXQucGFyYW1zLnNsaWNlKDAsIDEpKTtcbiAgICAgICAgICAgICAgICBnZXRLZXlzMiA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdC5nZXRLZXlzLmFwcGx5KF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCwgc2V0LnBhcmFtcy5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNsZWFyMSkudG9FcXVhbChjbGVhcjIpO1xuICAgICAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgY2xlYXIxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY2xlYXIxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgICAgICAgICAgZXhwZWN0KGNsZWFyMSkudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICAgICAgICBleHBlY3QoZ2V0S2V5czIpLm5vdC50b0NvbnRhaW4oc2V0LnBhcmFtc1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGl0KFwiVXRpbHNDb29raWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9VdGlsc0Nvb2tpZTIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzQ29va2llLmlzU3VwcG9ydGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzU3VwcG9ydGVkMSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdC5pc1N1cHBvcnRlZCgpO1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQyID0gX1V0aWxzMi5kZWZhdWx0LkNvb2tpZS5pc1N1cHBvcnRlZCgpO1xuICAgICAgICBleHBlY3QoaXNTdXBwb3J0ZWQxKS50b0VxdWFsKGlzU3VwcG9ydGVkMik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgaXNTdXBwb3J0ZWQxID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaXNTdXBwb3J0ZWQxKSkudG9FcXVhbChcImJvb2xlYW5cIik7XG4gICAgICAgIGV4cGVjdChpc1N1cHBvcnRlZDEpLnRvRXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoW1wiVXRpbHNDb29raWUuc2V0SXRlbVwiLCBcIlV0aWxzQ29va2llLmdldEl0ZW1cIiwgXCJVdGlsc0Nvb2tpZS5yZW1vdmVJdGVtXCIsIFwiVXRpbHNDb29raWUuZ2V0S2V5c1wiLCBcIlV0aWxzQ29va2llLmNsZWFyXCJdLmpvaW4oXCJcXHJcXG5cIiksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdCgpO1xuICAgIH0pO1xuICAgIC8qXG4gICAgIGl0KFwiVXRpbHNDb29raWUuZ2V0SXRlbVwiLCAoKSA9PiB7XG4gICAgIHRlc3QoKTtcbiAgICAgfSk7XG4gICAgICBpdChcIlV0aWxzQ29va2llLnJlbW92ZUl0ZW1cIiwgKCkgPT4ge1xuICAgICB0ZXN0KCk7XG4gICAgIH0pO1xuICAgICAgaXQoXCJVdGlsc0Nvb2tpZS5nZXRLZXlzXCIsICgpID0+IHtcbiAgICAgdGVzdCgpO1xuICAgICB9KTtcbiAgICAgIGl0KFwiVXRpbHNDb29raWUuY2xlYXJcIiwgKCkgPT4ge1xuICAgICB0ZXN0KCk7XG4gICAgIH0pO1xuICAgICAqL1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjL1V0aWxzQ29va2llLnNwZWMudHNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzXCIpO1xuXG52YXIgX1V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzKTtcblxudmFyIF9VdGlsc0RvY3VtZW50ID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc0RvY3VtZW50XCIpO1xuXG52YXIgX1V0aWxzRG9jdW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNEb2N1bWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmRlc2NyaWJlKFwiVXRpbHNEb2N1bWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRhdGFTZXQgPSB2b2lkIDA7XG4gICAgdmFyIGRpdjEgPSB2b2lkIDA7XG4gICAgdmFyIGRpdjIgPSB2b2lkIDA7XG4gICAgdmFyIGRpdjMgPSB2b2lkIDA7XG4gICAgdmFyIGlmcmFtZSA9IHZvaWQgMDtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGl2MSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYxLmlkID0gXCJkaXYxXCI7XG4gICAgICAgIGRpdjIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2Mi5pZCA9IFwiZGl2MlwiO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgZGl2MyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYzLmlkID0gXCJkaXYzXCI7XG4gICAgICAgIGlmcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJqYXZhc2NyaXB0OjtcIjtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICAgICAgdmFyIHBhcmFtc1ZhbHVlcyA9IFt1bmRlZmluZWQsIG51bGwsIGZhbHNlLCB0cnVlLCAxMjMsIFwidGVzdFwiLCBkaXYxLCBkaXYyLCBkaXYzLCB3aW5kb3csIHdpbmRvdy5kb2N1bWVudCwgaWZyYW1lLmNvbnRlbnRXaW5kb3csIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LCB3aW5kb3cuZG9jdW1lbnQuYm9keV07XG4gICAgICAgIGRhdGFTZXQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGFyYW1zVmFsdWVzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHgxID0gX3JlZjtcblxuICAgICAgICAgICAgdmFyIGNvbmQgPSB4MSA9PT0gdW5kZWZpbmVkIHx8IHgxID09PSB3aW5kb3cgfHwgeDEgPT09IGlmcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgZGF0YVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt4MV0sXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBjb25kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdjIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIH0pO1xuICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gdGVzdChtZXRob2RzLCBfZGF0YVNldCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2RhdGFTZXQsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNldCA9IF9yZWYyO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IG1ldGhvZHMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogX2l0ZXJhdG9yM1tTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmMztcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pMyA+PSBfaXRlcmF0b3IzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTMuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYzID0gX2kzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBfcmVmMztcblxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChtZXRob2QuYXBwbHkoX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQsIHNldC5wYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHJlc3VsdHMsIF9pc0FycmF5NCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNCksIF9pNCA9IDAsIF9pdGVyYXRvcjQgPSBfaXNBcnJheTQgPyBfaXRlcmF0b3I0IDogX2l0ZXJhdG9yNFtTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmNDtcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheTQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pNCA+PSBfaXRlcmF0b3I0Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWY0ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2k0ID0gX2l0ZXJhdG9yNC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTQuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWY0ID0gX2k0LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gX3JlZjQ7XG5cbiAgICAgICAgICAgICAgICBleHBlY3QoX3Jlc3VsdCkudG9FcXVhbChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwZWN0KHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihyZXN1bHQpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgaWYgKHNldC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlTmFOKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGl0KFwiVXRpbHNEb2N1bWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihfVXRpbHNEb2N1bWVudDIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzRG9jdW1lbnQuZ2V0SGVpZ2h0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQuZ2V0SGVpZ2h0LCBfVXRpbHMyLmRlZmF1bHQuRG9jdW1lbnQuZ2V0SGVpZ2h0XSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RvY3VtZW50LmdldFdpZHRoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQuZ2V0V2lkdGgsIF9VdGlsczIuZGVmYXVsdC5Eb2N1bWVudC5nZXRXaWR0aF0sIGRhdGFTZXQpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNEb2N1bWVudC5nZXRTY3JvbGxUb3BcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHNEb2N1bWVudDIuZGVmYXVsdC5nZXRTY3JvbGxUb3AsIF9VdGlsczIuZGVmYXVsdC5Eb2N1bWVudC5nZXRTY3JvbGxUb3BdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzRG9jdW1lbnQuZ2V0U2Nyb2xsTGVmdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsc0RvY3VtZW50Mi5kZWZhdWx0LmdldFNjcm9sbExlZnQsIF9VdGlsczIuZGVmYXVsdC5Eb2N1bWVudC5nZXRTY3JvbGxMZWZ0XSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc0RvY3VtZW50LmdldFNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXRob2RzID0gW19VdGlsc0RvY3VtZW50Mi5kZWZhdWx0LmdldFNjcm9sbCwgX1V0aWxzMi5kZWZhdWx0LkRvY3VtZW50LmdldFNjcm9sbF07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjUgPSBkYXRhU2V0LCBfaXNBcnJheTUgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjUpLCBfaTUgPSAwLCBfaXRlcmF0b3I1ID0gX2lzQXJyYXk1ID8gX2l0ZXJhdG9yNSA6IF9pdGVyYXRvcjVbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmNTtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5NSkge1xuICAgICAgICAgICAgICAgIGlmIChfaTUgPj0gX2l0ZXJhdG9yNS5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY1ID0gX2l0ZXJhdG9yNVtfaTUrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pNSA9IF9pdGVyYXRvcjUubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTUuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmNTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBtZXRob2RzLCBfaXNBcnJheTYgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjYpLCBfaTYgPSAwLCBfaXRlcmF0b3I2ID0gX2lzQXJyYXk2ID8gX2l0ZXJhdG9yNiA6IF9pdGVyYXRvcjZbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjY7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTYgPj0gX2l0ZXJhdG9yNi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pdGVyYXRvcjZbX2k2KytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pNiA9IF9pdGVyYXRvcjYubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k2LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pNi52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjY7XG5cbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gobWV0aG9kLmFwcGx5KF9VdGlsc0RvY3VtZW50Mi5kZWZhdWx0LCBzZXQucGFyYW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSByZXN1bHRzLCBfaXNBcnJheTcgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjcpLCBfaTcgPSAwLCBfaXRlcmF0b3I3ID0gX2lzQXJyYXk3ID8gX2l0ZXJhdG9yNyA6IF9pdGVyYXRvcjdbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjc7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTcgPj0gX2l0ZXJhdG9yNy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pNyA9IF9pdGVyYXRvcjcubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k3LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNyA9IF9pNy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX3Jlc3VsdCA9IF9yZWY3O1xuXG4gICAgICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQpLnRvRXF1YWwocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVzdWx0KSkudG9FcXVhbChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChPYmplY3Qua2V5cyhyZXN1bHQpKS50b0JlQXJyYXkoW1wibGVmdFwiLCBcInRvcFwiXSk7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQubGVmdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQudG9wKSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGlmIChzZXQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5sZWZ0KS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQudG9wKS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmxlZnQpLnRvQmVOYU4oKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LnRvcCkudG9CZU5hTigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWMvVXRpbHNEb2N1bWVudC5zcGVjLnRzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX1V0aWxzTW91c2UgPSByZXF1aXJlKFwiLi4vbGliL1V0aWxzTW91c2VcIik7XG5cbnZhciBfVXRpbHNNb3VzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc01vdXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZGVzY3JpYmUoXCJVdGlsc01vdXNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpdChcIlV0aWxzTW91c2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsc01vdXNlMi5kZWZhdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX1V0aWxzTW91c2UyLmRlZmF1bHQpKS50b0VxdWFsKFwiZnVuY3Rpb25cIik7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc01vdXNlLmdldFdoZWVsRGVsdGFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgZXZ0LmluaXRNb3VzZUV2ZW50KFwid2hlZWxcIiwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxMCwgMTAsIDEwLCA4MCwgMjAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAxMCwgbnVsbCk7XG4gICAgICAgIHZhciBwYXJhbXNWYWx1ZXMgPSBbZXZ0LCB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCB0cnVlLCAxMjMsIFwidGVzdFwiLCB3aW5kb3csIHdpbmRvdy5kb2N1bWVudCwgd2luZG93LmRvY3VtZW50LmJvZHldO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXJhbXNWYWx1ZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyYW1zVmFsdWUgPSBfcmVmO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX1V0aWxzTW91c2UyLmRlZmF1bHQuZ2V0V2hlZWxEZWx0YShwYXJhbXNWYWx1ZSk7XG4gICAgICAgICAgICBleHBlY3QodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJlc3VsdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBpZiAocGFyYW1zVmFsdWUgPT09IGV2dCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmVOYU4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcGVjL1V0aWxzTW91c2Uuc3BlYy50c1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNcIik7XG5cbnZhciBfVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHMpO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc1NjcmVlblwiKTtcblxudmFyIF9VdGlsc1NjcmVlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1NjcmVlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmRlc2NyaWJlKFwiVXRpbHNTY3JlZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gdGVzdChtZXRob2RzKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG1ldGhvZHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjtcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG1ldGhvZC5hcHBseShfVXRpbHNTY3JlZW4yLmRlZmF1bHQsIFtdKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSByZXN1bHRzLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gX3JlZjI7XG5cbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgX3Jlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9yZXN1bHQpKS50b0VxdWFsKFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QoX3Jlc3VsdCkudG9FcXVhbChyZXN1bHQpO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdGVzdDIgPSBmdW5jdGlvbiB0ZXN0MihtZXRob2RzKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBtZXRob2RzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMztcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTMuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBfcmVmMztcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG1ldGhvZC5hcHBseShfVXRpbHNTY3JlZW4yLmRlZmF1bHQsIFtdKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSByZXN1bHRzLCBfaXNBcnJheTQgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjQpLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID8gX2l0ZXJhdG9yNCA6IF9pdGVyYXRvcjRbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmNDtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5NCkge1xuICAgICAgICAgICAgICAgIGlmIChfaTQgPj0gX2l0ZXJhdG9yNC5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY0ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pNCA9IF9pdGVyYXRvcjQubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTQuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjQgPSBfaTQudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfcmVzdWx0ID0gX3JlZjQ7XG5cbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2YgX3Jlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9yZXN1bHQpKS50b0VxdWFsKFwib2JqZWN0XCIpO1xuICAgICAgICAgICAgZXhwZWN0KE9iamVjdC5rZXlzKF9yZXN1bHQpKS50b0JlQXJyYXkoW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQud2lkdGgpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICBleHBlY3QoX3Jlc3VsdC53aWR0aCkudG9FcXVhbChyZXN1bHQud2lkdGgpO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQud2lkdGgpLm5vdC50b0VxdWFsKDApO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQuaGVpZ2h0KS50b0JlQ2FsY3VsYWJsZSgpO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQuaGVpZ2h0KS50b0VxdWFsKHJlc3VsdC5oZWlnaHQpO1xuICAgICAgICAgICAgZXhwZWN0KF9yZXN1bHQuaGVpZ2h0KS5ub3QudG9FcXVhbCgwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXQoXCJVdGlsc1NjcmVlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgX1V0aWxzU2NyZWVuMi5kZWZhdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX1V0aWxzU2NyZWVuMi5kZWZhdWx0KSkudG9FcXVhbChcImZ1bmN0aW9uXCIpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNTY3JlZW4uZ2V0SW5mb1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmZvMSA9IF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRJbmZvKCk7XG4gICAgICAgIHZhciBpbmZvMiA9IF9VdGlsczIuZGVmYXVsdC5TY3JlZW4uZ2V0SW5mbygpO1xuICAgICAgICBleHBlY3QoaW5mbzEpLnRvRXF1YWwoaW5mbzIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGluZm8xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaW5mbzEpKS50b0VxdWFsKFwib2JqZWN0XCIpO1xuICAgICAgICBleHBlY3QoT2JqZWN0LmtleXMoaW5mbzEpKS50b0JlQXJyYXkoW1wiYXZhaWxhYmxlU2l6ZVwiLCBcImNvbG9yRGVwdGhcIiwgXCJwaXhlbFJhdGlvXCIsIFwic2l6ZVwiXSk7XG4gICAgICAgIGV4cGVjdChfdHlwZW9mKGluZm8xLmF2YWlsYWJsZVNpemUpKS50b0VxdWFsKFwib2JqZWN0XCIpO1xuICAgICAgICBleHBlY3QoT2JqZWN0LmtleXMoaW5mbzEuYXZhaWxhYmxlU2l6ZSkpLnRvQmVBcnJheShbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XG4gICAgICAgIGV4cGVjdChpbmZvMS5hdmFpbGFibGVTaXplKS50b0VxdWFsKF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRBdmFpbGFibGVTaXplcygpKTtcbiAgICAgICAgZXhwZWN0KF90eXBlb2YoaW5mbzEuY29sb3JEZXB0aCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgIGV4cGVjdChpbmZvMS5jb2xvckRlcHRoKS50b0VxdWFsKF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRDb2xvckRlcHRoKCkpO1xuICAgICAgICBleHBlY3QoX3R5cGVvZihpbmZvMS5waXhlbFJhdGlvKSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgZXhwZWN0KGluZm8xLnBpeGVsUmF0aW8pLnRvRXF1YWwoX1V0aWxzU2NyZWVuMi5kZWZhdWx0LmdldFBpeGVsUmF0aW8oKSk7XG4gICAgICAgIGV4cGVjdChfdHlwZW9mKGluZm8xLnNpemUpKS50b0VxdWFsKFwib2JqZWN0XCIpO1xuICAgICAgICBleHBlY3QoT2JqZWN0LmtleXMoaW5mbzEuc2l6ZSkpLnRvQmVBcnJheShbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XG4gICAgICAgIGV4cGVjdChpbmZvMS5zaXplKS50b0VxdWFsKF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRTaXplcygpKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzU2NyZWVuLmdldEhlaWdodFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRIZWlnaHQsIF9VdGlsczIuZGVmYXVsdC5TY3JlZW4uZ2V0SGVpZ2h0XSk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc1NjcmVlbi5nZXRXaWR0aFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRXaWR0aCwgX1V0aWxzMi5kZWZhdWx0LlNjcmVlbi5nZXRXaWR0aF0pO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNTY3JlZW4uZ2V0U2l6ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0MihbX1V0aWxzU2NyZWVuMi5kZWZhdWx0LmdldFNpemVzLCBfVXRpbHMyLmRlZmF1bHQuU2NyZWVuLmdldFNpemVzXSk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc1NjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHNTY3JlZW4yLmRlZmF1bHQuZ2V0QXZhaWxhYmxlSGVpZ2h0LCBfVXRpbHMyLmRlZmF1bHQuU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodF0pO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNTY3JlZW4uZ2V0QXZhaWxhYmxlV2lkdGhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHNTY3JlZW4yLmRlZmF1bHQuZ2V0QXZhaWxhYmxlV2lkdGgsIF9VdGlsczIuZGVmYXVsdC5TY3JlZW4uZ2V0QXZhaWxhYmxlV2lkdGhdKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzU2NyZWVuLmdldEF2YWlsYWJsZVNpemVzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdDIoW19VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRBdmFpbGFibGVTaXplcywgX1V0aWxzMi5kZWZhdWx0LlNjcmVlbi5nZXRBdmFpbGFibGVTaXplc10pO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNTY3JlZW4uZ2V0UGl4ZWxSYXRpb1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlc3QoW19VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRQaXhlbFJhdGlvLCBfVXRpbHMyLmRlZmF1bHQuU2NyZWVuLmdldFBpeGVsUmF0aW9dKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzU2NyZWVuLmdldENvbG9yRGVwdGhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXN0KFtfVXRpbHNTY3JlZW4yLmRlZmF1bHQuZ2V0Q29sb3JEZXB0aCwgX1V0aWxzMi5kZWZhdWx0LlNjcmVlbi5nZXRDb2xvckRlcHRoXSk7XG4gICAgfSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWMvVXRpbHNTY3JlZW4uc3BlYy50c1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNcIik7XG5cbnZhciBfVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHMpO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc1N5c3RlbVwiKTtcblxudmFyIF9VdGlsc1N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1N5c3RlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmRlc2NyaWJlKFwiVXRpbHNTeXN0ZW1cIiwgZnVuY3Rpb24gKCkge1xuICAgIGl0KFwiVXRpbHNTeXN0ZW1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsc1N5c3RlbTIuZGVmYXVsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9VdGlsc1N5c3RlbTIuZGVmYXVsdCkpLnRvRXF1YWwoXCJmdW5jdGlvblwiKTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzU3lzdGVtLmdldEluZm9cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5mbzEgPSBfVXRpbHNTeXN0ZW0yLmRlZmF1bHQuZ2V0SW5mbygpO1xuICAgICAgICB2YXIgaW5mbzIgPSBfVXRpbHMyLmRlZmF1bHQuU3lzdGVtLmdldEluZm8oKTtcbiAgICAgICAgZXhwZWN0KGluZm8xKS50b0VxdWFsKGluZm8yKTtcbiAgICAgICAgZXhwZWN0KE9iamVjdC5rZXlzKGluZm8xKSkudG9CZUFycmF5KFtcIm5hbWVcIiwgXCJ2ZXJzaW9uXCJdKTtcbiAgICAgICAgZXhwZWN0KF90eXBlb2YoaW5mbzEubmFtZSkpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdChfdHlwZW9mKGluZm8xLnZlcnNpb24pKS50b0VxdWFsKFwic3RyaW5nXCIpO1xuICAgICAgICBleHBlY3QoaW5mbzEubmFtZSkudG9FcXVhbChfVXRpbHNTeXN0ZW0yLmRlZmF1bHQuZ2V0TmFtZSgpKTtcbiAgICAgICAgZXhwZWN0KGluZm8xLnZlcnNpb24pLnRvRXF1YWwoX1V0aWxzU3lzdGVtMi5kZWZhdWx0LmdldFZlcnNpb24oKSk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc1N5c3RlbS5nZXROYW1lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hbWUxID0gX1V0aWxzU3lzdGVtMi5kZWZhdWx0LmdldE5hbWUoKTtcbiAgICAgICAgdmFyIG5hbWUyID0gX1V0aWxzMi5kZWZhdWx0LlN5c3RlbS5nZXROYW1lKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgbmFtZTEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihuYW1lMSkpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgbmFtZTIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihuYW1lMikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdChuYW1lMSkudG9FcXVhbChuYW1lMik7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc1N5c3RlbS5nZXRWZXJzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZlcnNpb24xID0gX1V0aWxzU3lzdGVtMi5kZWZhdWx0LmdldFZlcnNpb24oKTtcbiAgICAgICAgdmFyIHZlcnNpb24yID0gX1V0aWxzMi5kZWZhdWx0LlN5c3RlbS5nZXRWZXJzaW9uKCk7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgdmVyc2lvbjEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih2ZXJzaW9uMSkpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgdmVyc2lvbjIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih2ZXJzaW9uMikpLnRvRXF1YWwoXCJzdHJpbmdcIik7XG4gICAgICAgIGV4cGVjdCh2ZXJzaW9uMSkudG9FcXVhbCh2ZXJzaW9uMik7XG4gICAgfSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NwZWMvVXRpbHNTeXN0ZW0uc3BlYy50c1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNcIik7XG5cbnZhciBfVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHMpO1xuXG52YXIgX1V0aWxzVXNlciA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNVc2VyXCIpO1xuXG52YXIgX1V0aWxzVXNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1VzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5kZXNjcmliZShcIlV0aWxzVXNlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoXCJVdGlsc1VzZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QodHlwZW9mIF9VdGlsc1VzZXIyLmRlZmF1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihfVXRpbHNVc2VyMi5kZWZhdWx0KSkudG9FcXVhbChcImZ1bmN0aW9uXCIpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNVc2VyLmdldEluZm9cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5mbzEgPSBfVXRpbHNVc2VyMi5kZWZhdWx0LmdldEluZm8oKTtcbiAgICAgICAgdmFyIGluZm8yID0gX1V0aWxzMi5kZWZhdWx0LlVzZXIuZ2V0SW5mbygpO1xuICAgICAgICBleHBlY3QoaW5mbzEpLnRvRXF1YWwoaW5mbzIpO1xuICAgICAgICBleHBlY3QodHlwZW9mIGluZm8xID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaW5mbzEpKS50b0VxdWFsKFwib2JqZWN0XCIpO1xuICAgICAgICBleHBlY3QoT2JqZWN0LmtleXMoaW5mbzEpKS50b0JlQXJyYXkoW1wiYnJvd3NlclwiLCBcInNjcmVlblwiLCBcInN5c3RlbVwiXSk7XG4gICAgICAgIGV4cGVjdChpbmZvMS5icm93c2VyKS50b0VxdWFsKF9VdGlsczIuZGVmYXVsdC5Ccm93c2VyLmdldEluZm8oKSk7XG4gICAgICAgIGV4cGVjdChpbmZvMS5zY3JlZW4pLnRvRXF1YWwoX1V0aWxzMi5kZWZhdWx0LlNjcmVlbi5nZXRJbmZvKCkpO1xuICAgICAgICBleHBlY3QoaW5mbzEuc3lzdGVtKS50b0VxdWFsKF9VdGlsczIuZGVmYXVsdC5TeXN0ZW0uZ2V0SW5mbygpKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlYy9VdGlsc1VzZXIuc3BlYy50c1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuLi9saWIvVXRpbHNcIik7XG5cbnZhciBfVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHMpO1xuXG52YXIgX1V0aWxzV2luZG93ID0gcmVxdWlyZShcIi4uL2xpYi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmRlc2NyaWJlKFwiVXRpbHNXaW5kb3dcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhU2V0ID0gdm9pZCAwO1xuICAgIHZhciBkaXYxID0gdm9pZCAwO1xuICAgIHZhciBkaXYyID0gdm9pZCAwO1xuICAgIHZhciBkaXYzID0gdm9pZCAwO1xuICAgIHZhciBpZnJhbWUgPSB2b2lkIDA7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpdjEgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2MS5pZCA9IFwiZGl2MVwiO1xuICAgICAgICBkaXYyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdjIuaWQgPSBcImRpdjJcIjtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgICAgIGRpdjMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2My5pZCA9IFwiZGl2M1wiO1xuICAgICAgICBpZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDo7XCI7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgICAgIHZhciBwYXJhbXNWYWx1ZXMgPSBbdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgdHJ1ZSwgMTIzLCBcInRlc3RcIiwgZGl2MSwgZGl2MiwgZGl2Mywgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIGlmcmFtZS5jb250ZW50V2luZG93LCBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudCwgd2luZG93LmRvY3VtZW50LmJvZHldO1xuICAgICAgICBkYXRhU2V0ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhcmFtc1ZhbHVlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4MSA9IF9yZWY7XG5cbiAgICAgICAgICAgIHZhciBjb25kID0geDEgPT09IHVuZGVmaW5lZCB8fCB4MSA9PT0gd2luZG93IHx8IHgxID09PSBpZnJhbWUuY29udGVudFdpbmRvdztcbiAgICAgICAgICAgIGRhdGFTZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeDFdLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogY29uZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICB9KTtcbiAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIHRlc3QobWV0aG9kcywgX2RhdGFTZXQpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9kYXRhU2V0LCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmMjtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBtZXRob2RzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kzKytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjM7XG5cbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gobWV0aG9kLmFwcGx5KF9VdGlsc1dpbmRvdzIuZGVmYXVsdCwgc2V0LnBhcmFtcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcmVzdWx0cywgX2lzQXJyYXk0ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I0KSwgX2k0ID0gMCwgX2l0ZXJhdG9yNCA9IF9pc0FycmF5NCA/IF9pdGVyYXRvcjQgOiBfaXRlcmF0b3I0W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWY0O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5NCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k0ID49IF9pdGVyYXRvcjQubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaXRlcmF0b3I0W19pNCsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTQgPSBfaXRlcmF0b3I0Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pNC5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjQgPSBfaTQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF9yZXN1bHQgPSBfcmVmNDtcblxuICAgICAgICAgICAgICAgIGV4cGVjdChfcmVzdWx0KS50b0VxdWFsKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlY3QodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJlc3VsdCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBpZiAoc2V0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmVDYWxjdWxhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmVOYU4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgaXQoXCJVdGlsc1dpbmRvd1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgX1V0aWxzV2luZG93Mi5kZWZhdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX1V0aWxzV2luZG93Mi5kZWZhdWx0KSkudG9FcXVhbChcImZ1bmN0aW9uXCIpO1xuICAgIH0pO1xuICAgIGl0KFwiVXRpbHNXaW5kb3cuZ2V0SGVpZ2h0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzV2luZG93Mi5kZWZhdWx0LmdldEhlaWdodCwgX1V0aWxzMi5kZWZhdWx0LldpbmRvdy5nZXRIZWlnaHRdLCBkYXRhU2V0KTtcbiAgICB9KTtcbiAgICBpdChcIlV0aWxzV2luZG93LmdldFdpZHRoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGVzdChbX1V0aWxzV2luZG93Mi5kZWZhdWx0LmdldFdpZHRoLCBfVXRpbHMyLmRlZmF1bHQuV2luZG93LmdldFdpZHRoXSwgZGF0YVNldCk7XG4gICAgfSk7XG4gICAgaXQoXCJVdGlsc1dpbmRvdy5nZXRTaXplc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXRob2RzID0gW19VdGlsc1dpbmRvdzIuZGVmYXVsdC5nZXRTaXplcywgX1V0aWxzMi5kZWZhdWx0LldpbmRvdy5nZXRTaXplc107XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjUgPSBkYXRhU2V0LCBfaXNBcnJheTUgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjUpLCBfaTUgPSAwLCBfaXRlcmF0b3I1ID0gX2lzQXJyYXk1ID8gX2l0ZXJhdG9yNSA6IF9pdGVyYXRvcjVbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmNTtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5NSkge1xuICAgICAgICAgICAgICAgIGlmIChfaTUgPj0gX2l0ZXJhdG9yNS5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWY1ID0gX2l0ZXJhdG9yNVtfaTUrK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pNSA9IF9pdGVyYXRvcjUubmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChfaTUuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzZXQgPSBfcmVmNTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBtZXRob2RzLCBfaXNBcnJheTYgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjYpLCBfaTYgPSAwLCBfaXRlcmF0b3I2ID0gX2lzQXJyYXk2ID8gX2l0ZXJhdG9yNiA6IF9pdGVyYXRvcjZbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjY7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXk2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaTYgPj0gX2l0ZXJhdG9yNi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pdGVyYXRvcjZbX2k2KytdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9pNiA9IF9pdGVyYXRvcjYubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k2LmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBfcmVmNiA9IF9pNi52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjY7XG5cbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gobWV0aG9kLmFwcGx5KF9VdGlsc1dpbmRvdzIuZGVmYXVsdCwgc2V0LnBhcmFtcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gcmVzdWx0cywgX2lzQXJyYXk3ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I3KSwgX2k3ID0gMCwgX2l0ZXJhdG9yNyA9IF9pc0FycmF5NyA/IF9pdGVyYXRvcjcgOiBfaXRlcmF0b3I3W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWY3O1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Nykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2k3ID49IF9pdGVyYXRvcjcubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjcgPSBfaXRlcmF0b3I3W19pNysrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaTcgPSBfaXRlcmF0b3I3Lm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pNy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZjcgPSBfaTcudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF9yZXN1bHQgPSBfcmVmNztcblxuICAgICAgICAgICAgICAgIGV4cGVjdChfcmVzdWx0KS50b0VxdWFsKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlY3QodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJlc3VsdCkpLnRvRXF1YWwoXCJvYmplY3RcIik7XG4gICAgICAgICAgICBleHBlY3QoT2JqZWN0LmtleXMocmVzdWx0KSkudG9CZUFycmF5KFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcbiAgICAgICAgICAgIGV4cGVjdChfdHlwZW9mKHJlc3VsdC53aWR0aCkpLnRvRXF1YWwoXCJudW1iZXJcIik7XG4gICAgICAgICAgICBleHBlY3QoX3R5cGVvZihyZXN1bHQuaGVpZ2h0KSkudG9FcXVhbChcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGlmIChzZXQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC53aWR0aCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0LmhlaWdodCkudG9CZUNhbGN1bGFibGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC53aWR0aCkudG9CZU5hTigpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQuaGVpZ2h0KS50b0JlTmFOKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3BlYy9VdGlsc1dpbmRvdy5zcGVjLnRzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9