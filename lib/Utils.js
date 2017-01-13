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

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Import subclasses
	 */
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsAnimation = __webpack_require__(6);
	
	var _UtilsAnimation2 = _interopRequireDefault(_UtilsAnimation);
	
	var _UtilsBrowser = __webpack_require__(8);
	
	var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
	
	var _UtilsCookie = __webpack_require__(9);
	
	var _UtilsCookie2 = _interopRequireDefault(_UtilsCookie);
	
	var _UtilsDocument = __webpack_require__(17);
	
	var _UtilsDocument2 = _interopRequireDefault(_UtilsDocument);
	
	var _UtilsDOM = __webpack_require__(19);
	
	var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
	
	var _UtilsMouse = __webpack_require__(20);
	
	var _UtilsMouse2 = _interopRequireDefault(_UtilsMouse);
	
	var _UtilsScreen = __webpack_require__(21);
	
	var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
	
	var _UtilsSystem = __webpack_require__(22);
	
	var _UtilsSystem2 = _interopRequireDefault(_UtilsSystem);
	
	var _UtilsUser = __webpack_require__(23);
	
	var _UtilsUser2 = _interopRequireDefault(_UtilsUser);
	
	var _UtilsWindow = __webpack_require__(18);
	
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
	/**
	 * Import subclasses
	 */
	
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
	
	
	    Cookie.setItem = function setItem() {
	        var checkSupport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	        var key = arguments[1];
	        var value = arguments[2];
	        var expires = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
	        var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "/";
	        var domain = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : location.hostname;
	        var secure = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : location.protocol === "https:";
	
	        try {
	            /**
	             * Validate input data
	             */
	            if (typeof checkSupport === "boolean" && typeof key === "string" && Cookie.regValidKey.test(key) && typeof value === "string" && (value === "" || Cookie.regValidKey.test(value)) && typeof expires === "number" && expires < 365 && typeof path === "string" && typeof domain === "string" && domain.indexOf(location.hostname) !== -1 && typeof secure === "boolean" && secure === (location.protocol === "https:")) {
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
	                        return this.getItem(checkSupport, key) === decodeURIComponent(value);
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
	
	
	    Cookie.getItem = function getItem() {
	        var checkSupport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	        var key = arguments[1];
	
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
	
	
	    Cookie.removeItem = function removeItem() {
	        var checkSupport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	        var key = arguments[1];
	
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
	                    Cookie.setItem(checkSupport, key, "", -1 * 24 * 60 * 60);
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
	
	
	    Cookie.getKeys = function getKeys() {
	        var checkSupport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
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
	
	
	    Cookie.clear = function clear() {
	        var checkSupport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
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
	
	'use strict';
	
	var punycode = __webpack_require__(11);
	var util = __webpack_require__(13);
	
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
	
	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
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
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
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
	    querystring = __webpack_require__(14);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	
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
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
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
	      if (rest.indexOf(ae) === -1)
	        continue;
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
	  if (util.isString(obj)) obj = urlParse(obj);
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
	      util.isObject(this.query) &&
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
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	
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
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	
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
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
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
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
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
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
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
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
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
	    //this especially happens in cases like
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
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
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
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(15);
	exports.encode = exports.stringify = __webpack_require__(16);


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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _UtilsWindow = __webpack_require__(18);
	
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
/* 18 */
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
/* 19 */
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
	        if (!domNode || domNode.nodeType !== 1 || !domNode.parentNode || domNode.parentNode.nodeName === "HTML" || domDocument.contains && !domDocument.contains(domNode)) {
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
	        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof name === "string" && typeof func === "function") {
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
	        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof name === "string" && typeof func === "function") {
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
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1) {
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
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1) {
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
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && element.nodeType === 1 && typeof element.className === "string") {
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
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof className === "string" && typeof toggle === "boolean" && element.nodeType === 1) {
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
	        if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && typeof oldClassName === "string" && typeof newClassName === "string" && element.nodeType === 1) {
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Import additional classes
	 */
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _UtilsDOM = __webpack_require__(19);
	
	var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
	
	var _UtilsWindow = __webpack_require__(18);
	
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
/* 21 */
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
/* 22 */
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
	            osVersion = /Windows (.*)/.exec(os);
	            if (osVersion) {
	                osVersion = osVersion[1];
	                os = "Windows";
	            }
	        }
	        switch (os) {
	            case "Mac OS X":
	                osVersion = /Mac OS X (10[._\d]+)/.exec(navigator.userAgent);
	                if (osVersion) {
	                    osVersion = osVersion[1];
	                }
	                break;
	            case "Android":
	                osVersion = /Android ([._\d]+)/.exec(navigator.userAgent);
	                if (osVersion) {
	                    osVersion = osVersion[1];
	                }
	                break;
	            case "iOS":
	                var reg = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
	                if (reg) {
	                    osVersion = reg[1] + "." + reg[2] + "." + (reg[3] || 0);
	                }
	                break;
	            default:
	        }
	        return osVersion;
	    };
	
	    return System;
	}();
	
	exports.default = System;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Class for working with user
	 */
	
	exports.__esModule = true;
	
	var _UtilsBrowser = __webpack_require__(8);
	
	var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
	
	var _UtilsScreen = __webpack_require__(21);
	
	var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
	
	var _UtilsSystem = __webpack_require__(22);
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWJiMjU2MGIyNTBiYzA0ZGJjMTE/MGMyMSoqIiwid2VicGFjazovLy8uL2xpYi9VdGlscy50cz82NTNkKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNBbmltYXRpb24udHM/MmM0ZSoiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnRzPzI0NmUqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0Jyb3dzZXIudHM/MGQ2MyoiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzQ29va2llLnRzPzZmMjYqIiwid2VicGFjazovLy8uL34vdXJsL3VybC5qcz9kNmE0KiIsIndlYnBhY2s6Ly8vLi9+L3VybC9+L3B1bnljb2RlL3B1bnljb2RlLmpzPzg3ZGUqIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMioiLCJ3ZWJwYWNrOi8vLy4vfi91cmwvdXRpbC5qcz81NmVhKiIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzP2ZjZTgqIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzP2MyNTAqIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzP2U4NmIqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0RvY3VtZW50LnRzP2Q5M2IqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc1dpbmRvdy50cz9lNzVjKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNET00udHM/MGI1OCoiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzTW91c2UudHM/MDNiMioiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzU2NyZWVuLnRzP2VhZmMqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc1N5c3RlbS50cz8zYTEyKiIsIndlYnBhY2s6Ly8vLi9saWIv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Q0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEOztBQUVBLDRCOzs7Ozs7QUN2WEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQix1SkFBc0o7QUFDdEo7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hC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QU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7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YWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJVdGlsc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYmIyNTYwYjI1MGJjMDRkYmMxMSIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBJbXBvcnQgc3ViY2xhc3Nlc1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbiA9IHJlcXVpcmUoXCIuL1V0aWxzQW5pbWF0aW9uXCIpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uKTtcblxudmFyIF9VdGlsc0Jyb3dzZXIgPSByZXF1aXJlKFwiLi9VdGlsc0Jyb3dzZXJcIik7XG5cbnZhciBfVXRpbHNCcm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQnJvd3Nlcik7XG5cbnZhciBfVXRpbHNDb29raWUgPSByZXF1aXJlKFwiLi9VdGlsc0Nvb2tpZVwiKTtcblxudmFyIF9VdGlsc0Nvb2tpZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Nvb2tpZSk7XG5cbnZhciBfVXRpbHNEb2N1bWVudCA9IHJlcXVpcmUoXCIuL1V0aWxzRG9jdW1lbnRcIik7XG5cbnZhciBfVXRpbHNEb2N1bWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RvY3VtZW50KTtcblxudmFyIF9VdGlsc0RPTSA9IHJlcXVpcmUoXCIuL1V0aWxzRE9NXCIpO1xuXG52YXIgX1V0aWxzRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzRE9NKTtcblxudmFyIF9VdGlsc01vdXNlID0gcmVxdWlyZShcIi4vVXRpbHNNb3VzZVwiKTtcblxudmFyIF9VdGlsc01vdXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzTW91c2UpO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4vVXRpbHNTY3JlZW5cIik7XG5cbnZhciBfVXRpbHNTY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTY3JlZW4pO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4vVXRpbHNTeXN0ZW1cIik7XG5cbnZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXG52YXIgX1V0aWxzVXNlciA9IHJlcXVpcmUoXCIuL1V0aWxzVXNlclwiKTtcblxudmFyIF9VdGlsc1VzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNVc2VyKTtcblxudmFyIF9VdGlsc1dpbmRvdyA9IHJlcXVpcmUoXCIuL1V0aWxzV2luZG93XCIpO1xuXG52YXIgX1V0aWxzV2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzV2luZG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBHbG9iYWwgVXRpbHMgY2xhc3NcbiAqL1xudmFyIFV0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICAgIH1cblxuICAgIFV0aWxzLndhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhbmdlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIGNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb25zb2xlKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybihtZXNzYW5nZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhbmdlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVzc2FuZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXRpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2QuXG4gICAgICovXG5cblxuICAgIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChkb21Ob2RlKSB7XG4gICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIFV0aWxzLndhcm4oXCJVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZC5cIik7XG4gICAgICAgIHJldHVybiBVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGRvbU5vZGUsIGRvbURvY3VtZW50LCBzaG93Rm9yY2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kLlxuICAgICAqL1xuICAgIFV0aWxzLmZpbmRFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiBmaW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUpIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgVXRpbHMud2FybihcIlV0aWxzLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2QuXCIpO1xuICAgICAgICByZXR1cm4gVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSwgZG9tRG9jdW1lbnQsIHNob3dGb3JjZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2ZlciBzdGF0aWMgbWV0aG9kcyBpbnRvIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gcmVhbE9iamVjdFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKi9cblxuXG4gICAgVXRpbHMuaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzID0gZnVuY3Rpb24gaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzKHJlYWxPYmplY3QsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoISFyZWFsT2JqZWN0ICYmICh0eXBlb2YgcmVhbE9iamVjdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJlYWxPYmplY3QpKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljQ2xhc3MgPSByZWFsT2JqZWN0LmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGljQ2xhc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kcyA9IE9iamVjdC5rZXlzKHN0YXRpY0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZHMgJiYgbWV0aG9kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBfcmVmO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFsT2JqZWN0W21ldGhvZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbE9iamVjdFttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0aWNDbGFzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLndhcm4oXCJUaGF0IG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgXCIgKyAoY2xhc3NOYW1lIHx8IHN0YXRpY0NsYXNzICYmIHN0YXRpY0NsYXNzLm5hbWUgfHwgXCJVbmtub3duXCIpICsgXCIuXCIgKyBtZXRob2QgKyBcIiBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRpY0NsYXNzW21ldGhvZF0uYXBwbHkoc3RhdGljQ2xhc3MsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gbWV0aG9kcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmV0MiA9IF9sb29wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3JldDIgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgY2FsbCBzdGFjayB0cmFjZVxuICAgICAqIEByZXR1cm4gQXJyYXk8T2JqZWN0PlxuICAgICAqL1xuXG5cbiAgICBVdGlscy5zdGFjayA9IGZ1bmN0aW9uIHN0YWNrKCkge1xuICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICByZXR1cm4gZSAmJiBlLnN0YWNrICYmIGUuc3RhY2suc3BsaXQoXCJcXG5cIikuc2xpY2UoNSkubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBpZiAoIXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSAvXiguKilAKC4qKVxcLmpzOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdID0gLyhbXlxcLzxdKykvaWcuZXhlYyhtYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV0gPSBtYXRjaFsxXVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzRdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzJdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gfHwgXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaCA9IC9eKC4qKUAoaHR0cHxodHRwcyk6KFteOl0rKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNV0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSArIFwiOlwiICsgbWF0Y2hbMl0gfHwgXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaCA9IC9eKC4qKUAoLiopOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXlxccythdFxccyhbXihdKylcXHNcXCgoLiopOihbMC05XSspOihbMC05XSspXFwpJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXlxccythdFxccyguKik6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzFdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzJdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfSkgfHwgW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgcmFuZG9tIElEXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBVdGlscy5nZXRVSUQgPSBmdW5jdGlvbiBnZXRVSUQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG4gICAgfTtcblxuICAgIHJldHVybiBVdGlscztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVXRpbHM7XG5cblV0aWxzLkFuaW1hdGlvbiA9IF9VdGlsc0FuaW1hdGlvbjIuZGVmYXVsdDtcblV0aWxzLkJyb3dzZXIgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0O1xuVXRpbHMuQ29va2llID0gX1V0aWxzQ29va2llMi5kZWZhdWx0O1xuVXRpbHMuRE9NID0gX1V0aWxzRE9NMi5kZWZhdWx0O1xuVXRpbHMuRG9jdW1lbnQgPSBfVXRpbHNEb2N1bWVudDIuZGVmYXVsdDtcblV0aWxzLk1vdXNlID0gX1V0aWxzTW91c2UyLmRlZmF1bHQ7XG5VdGlscy5TY3JlZW4gPSBfVXRpbHNTY3JlZW4yLmRlZmF1bHQ7XG5VdGlscy5TeXN0ZW0gPSBfVXRpbHNTeXN0ZW0yLmRlZmF1bHQ7XG5VdGlscy5Vc2VyID0gX1V0aWxzVXNlcjIuZGVmYXVsdDtcblV0aWxzLldpbmRvdyA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHMudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBJbXBvcnQgc3ViY2xhc3Nlc1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNBbmltYXRpb25FYXNpbmcgPSByZXF1aXJlKFwiLi9VdGlsc0FuaW1hdGlvbkVhc2luZ1wiKTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbkVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0FuaW1hdGlvbkVhc2luZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBbmltYXRpb24gPSBmdW5jdGlvbiBBbmltYXRpb24oKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRpb24pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQW5pbWF0aW9uO1xuXG5BbmltYXRpb24uRWFzaW5nID0gX1V0aWxzQW5pbWF0aW9uRWFzaW5nMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzQW5pbWF0aW9uLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGlmZmVyZW50IHRpbWUgYW5pbWF0aW9uIGZ1bmN0aW9uc1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFYXNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRWFzaW5nKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWFzaW5nKTtcbiAgICB9XG5cbiAgICBFYXNpbmcuaXNWYWxpZFBhcmFtcyA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbXModCwgYiwgYywgZCwgcykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGIgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGMgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGQgPT09IFwibnVtYmVyXCIgJiYgKHR5cGVvZiBzID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBzID09PSBcIm51bWJlclwiKSAmJiB0IDwgZDtcbiAgICB9O1xuXG4gICAgRWFzaW5nLnN3aW5nID0gZnVuY3Rpb24gc3dpbmcodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBFYXNpbmdbRWFzaW5nLmRlZl0odCwgYiwgYywgZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5RdWFkID0gZnVuY3Rpb24gZWFzZUluUXVhZCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFF1YWQgPSBmdW5jdGlvbiBlYXNlT3V0UXVhZCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoLS10ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkN1YmljID0gZnVuY3Rpb24gZWFzZUluQ3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0Q3ViaWMgPSBmdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5RdWFydCA9IGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRRdWFydCA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAtIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dFF1YXJ0ID0gZnVuY3Rpb24gZWFzZUluT3V0UXVhcnQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluUXVpbnQgPSBmdW5jdGlvbiBlYXNlSW5RdWludCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFF1aW50ID0gZnVuY3Rpb24gZWFzZU91dFF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0UXVpbnQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWludCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluU2luZSA9IGZ1bmN0aW9uIGVhc2VJblNpbmUodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRTaW5lID0gZnVuY3Rpb24gZWFzZU91dFNpbmUodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRTaW5lID0gZnVuY3Rpb24gZWFzZUluT3V0U2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluRXhwbyA9IGZ1bmN0aW9uIGVhc2VJbkV4cG8odCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ID09PSAwID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0RXhwbyA9IGZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdCA9PT0gZCA/IGIgKyBjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdCAvIGQpICsgMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0RXhwbyA9IGZ1bmN0aW9uIGVhc2VJbk91dEV4cG8odCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodCA9PT0gZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiICsgYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5DaXJjID0gZnVuY3Rpb24gZWFzZUluQ2lyYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRDaXJjID0gZnVuY3Rpb24gZWFzZU91dENpcmModCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRDaXJjID0gZnVuY3Rpb24gZWFzZUluT3V0Q2lyYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlSW5FbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgICAgICAgcCA9IGQgKiAuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dEVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlT3V0RWxhc3RpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICAgICAgdmFyIGEgPSBjO1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiICsgYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcCkge1xuICAgICAgICAgICAgICAgIHAgPSBkICogLjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgYyArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRFbGFzdGljID0gZnVuY3Rpb24gZWFzZUluT3V0RWxhc3RpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICAgICAgdmFyIGEgPSBjO1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICAgICAgICBwID0gZCAqICguMyAqIDEuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHQgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0uNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5CYWNrID0gZnVuY3Rpb24gZWFzZUluQmFjayh0LCBiLCBjLCBkLCBzKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkLCBzKSkge1xuICAgICAgICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHMgPSAxLjcwMTU4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0QmFjayA9IGZ1bmN0aW9uIGVhc2VPdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRCYWNrID0gZnVuY3Rpb24gZWFzZUluT3V0QmFjayh0LCBiLCBjLCBkLCBzKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkLCBzKSkge1xuICAgICAgICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHMgPSAxLjcwMTU4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCAtIHMpKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkJvdW5jZSA9IGZ1bmN0aW9uIGVhc2VJbkJvdW5jZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgLSBFYXNpbmcuZWFzZU91dEJvdW5jZShkIC0gdCwgMCwgYywgZCkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dEJvdW5jZSA9IGZ1bmN0aW9uIGVhc2VPdXRCb3VuY2UodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICgodCAvPSBkKSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgLjc1KSArIGI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIC45Mzc1KSArIGI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgLjk4NDM3NSkgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0Qm91bmNlID0gZnVuY3Rpb24gZWFzZUluT3V0Qm91bmNlKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAodCA8IGQgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVhc2luZy5lYXNlSW5Cb3VuY2UodCAqIDIsIDAsIGMsIGQpICogLjUgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEVhc2luZy5lYXNlT3V0Qm91bmNlKHQgKiAyIC0gZCwgMCwgYywgZCkgKiAuNSArIGMgKiAuNSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBFYXNpbmc7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEVhc2luZztcblxuRWFzaW5nLmRlZiA9IFwiZWFzZU91dFF1YWRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0FuaW1hdGlvbkVhc2luZy50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggYnJvd3NlclxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCcm93c2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyb3dzZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcm93c2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYnJvd3NlciBpbmZvXG4gICAgICogQHJldHVybiB7e2Jyb3dzZXI6IHN0cmluZywgbW9iaWxlOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIEJyb3dzZXIuZ2V0SW5mbyA9IGZ1bmN0aW9uIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBicm93c2VyOiBCcm93c2VyLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1vYmlsZTogQnJvd3Nlci5pc01vYmlsZSgpLFxuICAgICAgICAgICAgdmVyc2lvbjogQnJvd3Nlci5nZXRWZXJzaW9uKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIG5hbWVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHZhciBicm93c2VyID0gdm9pZCAwO1xuICAgICAgICBpZiAoQnJvd3Nlci5pc09wZXJhKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIk9wZXJhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc09wZXJhTmV3KCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIk9wZXJhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUUoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUVOZXcoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0Nocm9tZSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJDaHJvbWVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzRmlyZWZveCgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJGaXJlZm94XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc1NhZmFyaSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJTYWZhcmlcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3RoZXIoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IEJyb3dzZXIuZ2V0T3RoZXJOYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyb3dzZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IHZvaWQgMDtcbiAgICAgICAgaWYgKEJyb3dzZXIuaXNPcGVyYSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPcGVyYVZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3BlcmFOZXcoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUUoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0TVNJRVZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRU5ldygpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFTmV3VmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNDaHJvbWUoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0Q2hyb21lVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldEZpcmVmb3hWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc1NhZmFyaSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc090aGVyKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE90aGVyVmVyc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJpbSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcGFyYW0gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci50cmltVmVyc2lvbiA9IGZ1bmN0aW9uIHRyaW1WZXJzaW9uKHZlcnNpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YXIgY2hhcnMgPSBbXCI7XCIsIFwiIFwiLCBcIilcIl07XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjaGFycywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IF9yZWY7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXggPSB2ZXJzaW9uLmluZGV4T2YoY2hhcik7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG1vYmlsZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNb2JpbGUgPSBmdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgICAgICAgcmV0dXJuICgvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QobmF2aWdhdG9yLmFwcFZlcnNpb24pXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBvcGVyYSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc09wZXJhID0gZnVuY3Rpb24gaXNPcGVyYSgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9wZXJhXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBvcGVyYSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3BlcmFWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XG4gICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG4gICAgICAgIGlmICh2ZXJPZmZzZXQgIT09IC0xKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBvcGVyYSBuZXcgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNPcGVyYU5ldyA9IGZ1bmN0aW9uIGlzT3BlcmFOZXcoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG9wZXJhIG5ldyBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFOZXdWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT1BSXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNU0lFID0gZnVuY3Rpb24gaXNNU0lFKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbXNpZSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0TVNJRVZlcnNpb24gPSBmdW5jdGlvbiBnZXRNU0lFVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbXNpZSBuZXcgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNU0lFTmV3ID0gZnVuY3Rpb24gaXNNU0lFTmV3KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudC9cIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG1zaWUgbmV3IGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRNU0lFTmV3VmVyc2lvbiA9IGZ1bmN0aW9uIGdldE1TSUVOZXdWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcInJ2OlwiKSArIDMpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIGNocm9tZSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0Nocm9tZSA9IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBjaHJvbWUgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldENocm9tZVZlcnNpb24gPSBmdW5jdGlvbiBnZXRDaHJvbWVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIHNhZmFyaSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc1NhZmFyaSA9IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9PSAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgPT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNhZmFyaSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0U2FmYXJpVmVyc2lvbiA9IGZ1bmN0aW9uIGdldFNhZmFyaVZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG4gICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG4gICAgICAgIGlmICh2ZXJPZmZzZXQgIT09IC0xKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBmaXJlZm94IGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzRmlyZWZveCA9IGZ1bmN0aW9uIGlzRmlyZWZveCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGZpcmVmb3ggYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldEZpcmVmb3hWZXJzaW9uID0gZnVuY3Rpb24gZ2V0RmlyZWZveFZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG90aGVyIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzT3RoZXIgPSBmdW5jdGlvbiBpc090aGVyKCkge1xuICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICByZXR1cm4gbmFtZU9mZnNldCA8IHZlck9mZnNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBvdGhlciBicm93c2VyIG5hbWVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3RoZXJOYW1lID0gZnVuY3Rpb24gZ2V0T3RoZXJOYW1lKCkge1xuICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICB2YXIgYnJvd3NlciA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlck9mZnNldCk7XG4gICAgICAgIGlmIChicm93c2VyLnRvTG93ZXJDYXNlKCkgPT09IGJyb3dzZXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm93c2VyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG90aGVyIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPdGhlclZlcnNpb24gPSBmdW5jdGlvbiBnZXRPdGhlclZlcnNpb24oKSB7XG4gICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgMSk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgYnJvd3NlciBzdXBwb3J0XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gIUJyb3dzZXIuaXNNU0lFKCkgfHwgcGFyc2VJbnQoQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpLCAxMCkgPiA4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgV2ViS2l0IGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzV2ViS2l0ID0gZnVuY3Rpb24gaXNXZWJLaXQoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgR2Vja28gYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNHZWNrbyA9IGZ1bmN0aW9uIGlzR2Vja28oKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJHZWNrb1wiKSA+IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIktIVE1MXCIpID09PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIEFuZHJvaWQgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNBbmRyb2lkID0gZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSA+IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgTGludXggYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNMaW51eCA9IGZ1bmN0aW9uIGlzTGludXgoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJMaW51eFwiKSA+IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgaVBhZCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc1RhYmxldFBDID0gZnVuY3Rpb24gaXNUYWJsZXRQQygpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQYWRcIikgPiAtMTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJyb3dzZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJyb3dzZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNCcm93c2VyLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVVJMID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBjb29raWVcbiAqL1xuXG52YXIgQ29va2llID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvb2tpZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvb2tpZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBmbGFnIHdoZXRoZXIgc3VwcG9ydGVkIHRoaXMgc3RvcmFnZSB0eXBlIG9yIG5vdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIENvb2tpZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRvY3VtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gXCJzdHJpbmdcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBtZXRob2Qgc2V0cyB0aGUgdmFsdWUgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBoYXMgYmVlbiBzZXRcbiAgICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gZXhwaXJlcyB7bnVtYmVyfVxuICAgICAqIEBwYXJhbSBwYXRoIHtzdHJpbmd9XG4gICAgICogQHBhcmFtIGRvbWFpbiB7c3RyaW5nfVxuICAgICAqIEBwYXJhbSBzZWN1cmUge2Jvb2xlYW59XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQ29va2llLnNldEl0ZW0gPSBmdW5jdGlvbiBzZXRJdGVtKCkge1xuICAgICAgICB2YXIgY2hlY2tTdXBwb3J0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICAgICAgICB2YXIga2V5ID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHZhciBleHBpcmVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAzMDtcbiAgICAgICAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IFwiL1wiO1xuICAgICAgICB2YXIgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgdmFyIHNlY3VyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCI7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAodmFsdWUgPT09IFwiXCIgfHwgQ29va2llLnJlZ1ZhbGlkS2V5LnRlc3QodmFsdWUpKSAmJiB0eXBlb2YgZXhwaXJlcyA9PT0gXCJudW1iZXJcIiAmJiBleHBpcmVzIDwgMzY1ICYmIHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBkb21haW4gPT09IFwic3RyaW5nXCIgJiYgZG9tYWluLmluZGV4T2YobG9jYXRpb24uaG9zdG5hbWUpICE9PSAtMSAmJiB0eXBlb2Ygc2VjdXJlID09PSBcImJvb2xlYW5cIiAmJiBzZWN1cmUgPT09IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIHUgPSBVUkwucGFyc2UoXCJodHRwOi8vXCIgKyBkb21haW4gKyBwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAodS5ob3N0bmFtZSA9PT0gZG9tYWluIHx8IHUucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFNhdmUgY29va2llcyBmb3IgMzAgZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge0RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGV4cGlyZXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHAgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEVuY29kZSB2YWx1ZSBmb3Igc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogV3JpdGluZyB2YWx1ZSB0byB0aGUgZG9jdW1lbnQgY29va2llIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsdWUgKyAoZXhwID8gXCI7IGV4cGlyZXM9XCIgKyBleHAgOiBcIlwiKSArIChwYXRoID8gXCI7IHBhdGg9XCIgKyBwYXRoIDogXCJcIikgKyAoZG9tYWluID8gXCI7IGRvbWFpbj1cIiArIGRvbWFpbiA6IFwiXCIpICsgKHNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBJZiBhbGwgb2sgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkgPT09IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCByZWFkcyB0aGUgdmFsdWUgYW5kIHJldHVybnMgaXQgb3IgcmV0dXJucyBmYWxzZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuICAgICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAgICovXG5cblxuICAgIENvb2tpZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICAgICAgdmFyIGNoZWNrU3VwcG9ydCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcbiAgICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIENvb2tpZS5yZWdWYWxpZEtleS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBHZXQgdGhlIGFycmF5IGZyb20gZG9jdW1lbnQgY29va2llIHNwbGl0IGJ5IDtcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyckNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNvb2tpZXNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFyckNvb2tpZSwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gX3JlZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBUcmltIGFuZCBzcGxpdCBlYWNoIGNvb2tpZSBieSA9IGZvciBrZXkgdmFsdWUgcGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGkudHJpbSgpLnNwbGl0KFwiPVwiLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgaXQgaXMgY29ycmVjdCBjb29raWUga2V5IHJldHVybiB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgZm91bmQgcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodlsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgbm90IGZvdW5kIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCByZW1vdmVzIHRoZSB2YWx1ZSBhbmQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0XG4gICAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIENvb2tpZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbSgpIHtcbiAgICAgICAgdmFyIGNoZWNrU3VwcG9ydCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcbiAgICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIENvb2tpZS5yZWdWYWxpZEtleS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgZW1wdHkgb3ZlcmR1ZSB2YWx1ZSBieSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZS5zZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5LCBcIlwiLCAtMSAqIDI0ICogNjAgKiA2MCk7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiBhbGwgb2sgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDb29raWUuZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkgPT09IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHJpbmcgb2YgYXZhaWxhYmxlIGtleXNcbiAgICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cblxuXG4gICAgQ29va2llLmdldEtleXMgPSBmdW5jdGlvbiBnZXRLZXlzKCkge1xuICAgICAgICB2YXIgY2hlY2tTdXBwb3J0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGVja1N1cHBvcnQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogVGhlIGFycmF5IG9mIGF2YWlsYWJsZSBrZXlzXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJLZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBHZXQgdGhlIGFycmF5IGZyb20gZG9jdW1lbnQgY29va2llIHNwbGl0IGJ5IDtcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyckNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNvb2tpZXNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBhcnJDb29raWUsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBfcmVmMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBUcmltIGFuZCBzcGxpdCBlYWNoIGNvb2tpZSBieSA9IGZvciBrZXkgdmFsdWUgcGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGkudHJpbSgpLnNwbGl0KFwiPVwiLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQWRkIGtleSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodlswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycktleXMucHVzaCh2WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyS2V5cztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIGlucHV0IGRhdGEgaXMgbm90IHZhbGlkXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBtZXRob2QgY2xlYW5zIHRoZSBzdG9yYWdlIGFuZCByZXR1cm4gdHJ1ZSBpZiBpdCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIENvb2tpZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICB2YXIgY2hlY2tTdXBwb3J0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGVja1N1cHBvcnQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyS2V5cyA9IENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYXJyS2V5cywgX2lzQXJyYXkzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IzKSwgX2kzID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiBfaXRlcmF0b3IzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBfcmVmMztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZS5yZW1vdmVJdGVtKGNoZWNrU3VwcG9ydCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBDb29raWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvb2tpZTtcblxuQ29va2llLnJlZ1ZhbGlkS2V5ID0gbmV3IFJlZ0V4cChcIihbYS16QS1aMC05Xy1dezEsfSlcIiwgXCJpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzQ29va2llLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZXhwb3J0cy5wYXJzZSA9IHVybFBhcnNlO1xuZXhwb3J0cy5yZXNvbHZlID0gdXJsUmVzb2x2ZTtcbmV4cG9ydHMucmVzb2x2ZU9iamVjdCA9IHVybFJlc29sdmVPYmplY3Q7XG5leHBvcnRzLmZvcm1hdCA9IHVybEZvcm1hdDtcblxuZXhwb3J0cy5VcmwgPSBVcmw7XG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMuaG9zdCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucXVlcnkgPSBudWxsO1xuICB0aGlzLnBhdGhuYW1lID0gbnVsbDtcbiAgdGhpcy5wYXRoID0gbnVsbDtcbiAgdGhpcy5ocmVmID0gbnVsbDtcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbnZhciBwcm90b2NvbFBhdHRlcm4gPSAvXihbYS16MC05ListXSs6KS9pLFxuICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYSBzaW1wbGUgcGF0aCBVUkxcbiAgICBzaW1wbGVQYXRoUGF0dGVybiA9IC9eKFxcL1xcLz8oPyFcXC8pW15cXD9cXHNdKikoXFw/W15cXHNdKik/JC8sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuICAgIC8vIFdlIGFjdHVhbGx5IGp1c3QgYXV0by1lc2NhcGUgdGhlc2UuXG4gICAgZGVsaW1zID0gWyc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0J10sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyBub3QgYWxsb3dlZCBmb3IgdmFyaW91cyByZWFzb25zLlxuICAgIHVud2lzZSA9IFsneycsICd9JywgJ3wnLCAnXFxcXCcsICdeJywgJ2AnXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWydcXCcnXS5jb25jYXQodW53aXNlKSxcbiAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuICAgIC8vIE5vdGUgdGhhdCBhbnkgaW52YWxpZCBjaGFycyBhcmUgYWxzbyBoYW5kbGVkLCBidXQgdGhlc2VcbiAgICAvLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbiAgICAvLyB0aGVtLlxuICAgIG5vbkhvc3RDaGFycyA9IFsnJScsICcvJywgJz8nLCAnOycsICcjJ10uY29uY2F0KGF1dG9Fc2NhcGUpLFxuICAgIGhvc3RFbmRpbmdDaGFycyA9IFsnLycsICc/JywgJyMnXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIHVuc2FmZVByb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuICAgIGhvc3RsZXNzUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cbiAgICBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gICAgICAnaHR0cCc6IHRydWUsXG4gICAgICAnaHR0cHMnOiB0cnVlLFxuICAgICAgJ2Z0cCc6IHRydWUsXG4gICAgICAnZ29waGVyJzogdHJ1ZSxcbiAgICAgICdmaWxlJzogdHJ1ZSxcbiAgICAgICdodHRwOic6IHRydWUsXG4gICAgICAnaHR0cHM6JzogdHJ1ZSxcbiAgICAgICdmdHA6JzogdHJ1ZSxcbiAgICAgICdnb3BoZXI6JzogdHJ1ZSxcbiAgICAgICdmaWxlOic6IHRydWVcbiAgICB9LFxuICAgIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcblxuZnVuY3Rpb24gdXJsUGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAodXJsICYmIHV0aWwuaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHVybCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGFyYW1ldGVyICd1cmwnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiB1cmwpO1xuICB9XG5cbiAgLy8gQ29weSBjaHJvbWUsIElFLCBvcGVyYSBiYWNrc2xhc2gtaGFuZGxpbmcgYmVoYXZpb3IuXG4gIC8vIEJhY2sgc2xhc2hlcyBiZWZvcmUgdGhlIHF1ZXJ5IHN0cmluZyBnZXQgY29udmVydGVkIHRvIGZvcndhcmQgc2xhc2hlc1xuICAvLyBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNTkxNlxuICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/JyksXG4gICAgICBzcGxpdHRlciA9XG4gICAgICAgICAgKHF1ZXJ5SW5kZXggIT09IC0xICYmIHF1ZXJ5SW5kZXggPCB1cmwuaW5kZXhPZignIycpKSA/ICc/JyA6ICcjJyxcbiAgICAgIHVTcGxpdCA9IHVybC5zcGxpdChzcGxpdHRlciksXG4gICAgICBzbGFzaFJlZ2V4ID0gL1xcXFwvZztcbiAgdVNwbGl0WzBdID0gdVNwbGl0WzBdLnJlcGxhY2Uoc2xhc2hSZWdleCwgJy8nKTtcbiAgdXJsID0gdVNwbGl0LmpvaW4oc3BsaXR0ZXIpO1xuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIGlmICghc2xhc2hlc0Rlbm90ZUhvc3QgJiYgdXJsLnNwbGl0KCcjJykubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gVHJ5IGZhc3QgcGF0aCByZWdleHBcbiAgICB2YXIgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gICAgaWYgKHNpbXBsZVBhdGgpIHtcbiAgICAgIHRoaXMucGF0aCA9IHJlc3Q7XG4gICAgICB0aGlzLmhyZWYgPSByZXN0O1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMuc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55Y29kZWQgcmVwcmVzZW50YXRpb24gb2YgXCJkb21haW5cIi5cbiAgICAgIC8vIEl0IG9ubHkgY29udmVydHMgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHRoYXRcbiAgICAgIC8vIGhhdmUgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWZcbiAgICAgIC8vIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCBhbHJlYWR5IGlzIEFTQ0lJLW9ubHkuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSSh0aGlzLmhvc3RuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICBpZiAocmVzdC5pbmRleE9mKGFlKSA9PT0gLTEpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgdmFyIGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudChhZSk7XG4gICAgICBpZiAoZXNjID09PSBhZSkge1xuICAgICAgICBlc2MgPSBlc2NhcGUoYWUpO1xuICAgICAgfVxuICAgICAgcmVzdCA9IHJlc3Quc3BsaXQoYWUpLmpvaW4oZXNjKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHRoaXMucXVlcnkgPSByZXN0LnN1YnN0cihxbSArIDEpO1xuICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgLy8gbm8gcXVlcnkgc3RyaW5nLCBidXQgcGFyc2VRdWVyeVN0cmluZyBzdGlsbCByZXF1ZXN0ZWRcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgfVxuICBpZiAocmVzdCkgdGhpcy5wYXRobmFtZSA9IHJlc3Q7XG4gIGlmIChzbGFzaGVkUHJvdG9jb2xbbG93ZXJQcm90b10gJiZcbiAgICAgIHRoaXMuaG9zdG5hbWUgJiYgIXRoaXMucGF0aG5hbWUpIHtcbiAgICB0aGlzLnBhdGhuYW1lID0gJy8nO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICBpZiAodGhpcy5wYXRobmFtZSB8fCB0aGlzLnNlYXJjaCkge1xuICAgIHZhciBwID0gdGhpcy5wYXRobmFtZSB8fCAnJztcbiAgICB2YXIgcyA9IHRoaXMuc2VhcmNoIHx8ICcnO1xuICAgIHRoaXMucGF0aCA9IHAgKyBzO1xuICB9XG5cbiAgLy8gZmluYWxseSwgcmVjb25zdHJ1Y3QgdGhlIGhyZWYgYmFzZWQgb24gd2hhdCBoYXMgYmVlbiB2YWxpZGF0ZWQuXG4gIHRoaXMuaHJlZiA9IHRoaXMuZm9ybWF0KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZm9ybWF0IGEgcGFyc2VkIG9iamVjdCBpbnRvIGEgdXJsIHN0cmluZ1xuZnVuY3Rpb24gdXJsRm9ybWF0KG9iaikge1xuICAvLyBlbnN1cmUgaXQncyBhbiBvYmplY3QsIGFuZCBub3QgYSBzdHJpbmcgdXJsLlxuICAvLyBJZiBpdCdzIGFuIG9iaiwgdGhpcyBpcyBhIG5vLW9wLlxuICAvLyB0aGlzIHdheSwgeW91IGNhbiBjYWxsIHVybF9mb3JtYXQoKSBvbiBzdHJpbmdzXG4gIC8vIHRvIGNsZWFuIHVwIHBvdGVudGlhbGx5IHdvbmt5IHVybHMuXG4gIGlmICh1dGlsLmlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIHV0aWwuaXNPYmplY3QodGhpcy5xdWVyeSkgJiZcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucXVlcnkpLmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHRoaXMucXVlcnkpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoIHx8IChxdWVyeSAmJiAoJz8nICsgcXVlcnkpKSB8fCAnJztcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgLy8gb25seSB0aGUgc2xhc2hlZFByb3RvY29scyBnZXQgdGhlIC8vLiAgTm90IG1haWx0bzosIHhtcHA6LCBldGMuXG4gIC8vIHVubGVzcyB0aGV5IGhhZCB0aGVtIHRvIGJlZ2luIHdpdGguXG4gIGlmICh0aGlzLnNsYXNoZXMgfHxcbiAgICAgICghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29sW3Byb3RvY29sXSkgJiYgaG9zdCAhPT0gZmFsc2UpIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJyc7XG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaDtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2guY2hhckF0KDApICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaDtcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuXG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlKHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmUocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICByZXR1cm4gdGhpcy5yZXNvbHZlT2JqZWN0KHVybFBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSkpLmZvcm1hdCgpO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZU9iamVjdChzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIGlmICghc291cmNlKSByZXR1cm4gcmVsYXRpdmU7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlT2JqZWN0KHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0ID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgaWYgKHV0aWwuaXNTdHJpbmcocmVsYXRpdmUpKSB7XG4gICAgdmFyIHJlbCA9IG5ldyBVcmwoKTtcbiAgICByZWwucGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKTtcbiAgICByZWxhdGl2ZSA9IHJlbDtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgVXJsKCk7XG4gIHZhciB0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICBmb3IgKHZhciB0ayA9IDA7IHRrIDwgdGtleXMubGVuZ3RoOyB0aysrKSB7XG4gICAgdmFyIHRrZXkgPSB0a2V5c1t0a107XG4gICAgcmVzdWx0W3RrZXldID0gdGhpc1t0a2V5XTtcbiAgfVxuXG4gIC8vIGhhc2ggaXMgYWx3YXlzIG92ZXJyaWRkZW4sIG5vIG1hdHRlciB3aGF0LlxuICAvLyBldmVuIGhyZWY9XCJcIiB3aWxsIHJlbW92ZSBpdC5cbiAgcmVzdWx0Lmhhc2ggPSByZWxhdGl2ZS5oYXNoO1xuXG4gIC8vIGlmIHRoZSByZWxhdGl2ZSB1cmwgaXMgZW1wdHksIHRoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG8gaGVyZS5cbiAgaWYgKHJlbGF0aXZlLmhyZWYgPT09ICcnKSB7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGhyZWZzIGxpa2UgLy9mb28vYmFyIGFsd2F5cyBjdXQgdG8gdGhlIHByb3RvY29sLlxuICBpZiAocmVsYXRpdmUuc2xhc2hlcyAmJiAhcmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAvLyB0YWtlIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBwcm90b2NvbCBmcm9tIHJlbGF0aXZlXG4gICAgdmFyIHJrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgIGZvciAodmFyIHJrID0gMDsgcmsgPCBya2V5cy5sZW5ndGg7IHJrKyspIHtcbiAgICAgIHZhciBya2V5ID0gcmtleXNbcmtdO1xuICAgICAgaWYgKHJrZXkgIT09ICdwcm90b2NvbCcpXG4gICAgICAgIHJlc3VsdFtya2V5XSA9IHJlbGF0aXZlW3JrZXldO1xuICAgIH1cblxuICAgIC8vdXJsUGFyc2UgYXBwZW5kcyB0cmFpbGluZyAvIHRvIHVybHMgbGlrZSBodHRwOi8vd3d3LmV4YW1wbGUuY29tXG4gICAgaWYgKHNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdICYmXG4gICAgICAgIHJlc3VsdC5ob3N0bmFtZSAmJiAhcmVzdWx0LnBhdGhuYW1lKSB7XG4gICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRobmFtZSA9ICcvJztcbiAgICB9XG5cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHJlbGF0aXZlLnByb3RvY29sICYmIHJlbGF0aXZlLnByb3RvY29sICE9PSByZXN1bHQucHJvdG9jb2wpIHtcbiAgICAvLyBpZiBpdCdzIGEga25vd24gdXJsIHByb3RvY29sLCB0aGVuIGNoYW5naW5nXG4gICAgLy8gdGhlIHByb3RvY29sIGRvZXMgd2VpcmQgdGhpbmdzXG4gICAgLy8gZmlyc3QsIGlmIGl0J3Mgbm90IGZpbGU6LCB0aGVuIHdlIE1VU1QgaGF2ZSBhIGhvc3QsXG4gICAgLy8gYW5kIGlmIHRoZXJlIHdhcyBhIHBhdGhcbiAgICAvLyB0byBiZWdpbiB3aXRoLCB0aGVuIHdlIE1VU1QgaGF2ZSBhIHBhdGguXG4gICAgLy8gaWYgaXQgaXMgZmlsZTosIHRoZW4gdGhlIGhvc3QgaXMgZHJvcHBlZCxcbiAgICAvLyBiZWNhdXNlIHRoYXQncyBrbm93biB0byBiZSBob3N0bGVzcy5cbiAgICAvLyBhbnl0aGluZyBlbHNlIGlzIGFzc3VtZWQgdG8gYmUgYWJzb2x1dGUuXG4gICAgaWYgKCFzbGFzaGVkUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgICAgICB2YXIgayA9IGtleXNbdl07XG4gICAgICAgIHJlc3VsdFtrXSA9IHJlbGF0aXZlW2tdO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghdXRpbC5pc051bGxPclVuZGVmaW5lZChyZWxhdGl2ZS5zZWFyY2gpKSB7XG4gICAgLy8ganVzdCBwdWxsIG91dCB0aGUgc2VhcmNoLlxuICAgIC8vIGxpa2UgaHJlZj0nP2ZvbycuXG4gICAgLy8gUHV0IHRoaXMgYWZ0ZXIgdGhlIG90aGVyIHR3byBjYXNlcyBiZWNhdXNlIGl0IHNpbXBsaWZpZXMgdGhlIGJvb2xlYW5zXG4gICAgaWYgKHBzeWNob3RpYykge1xuICAgICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBzcmNQYXRoLnNoaWZ0KCk7XG4gICAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBubyBwYXRoIGF0IGFsbC4gIGVhc3kuXG4gICAgLy8gd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBvdGhlciBzdHVmZiBhYm92ZS5cbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnNlYXJjaCkge1xuICAgICAgcmVzdWx0LnBhdGggPSAnLycgKyByZXN1bHQuc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBpZiBhIHVybCBFTkRzIGluIC4gb3IgLi4sIHRoZW4gaXQgbXVzdCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgLy8gaG93ZXZlciwgaWYgaXQgZW5kcyBpbiBhbnl0aGluZyBlbHNlIG5vbi1zbGFzaHksXG4gIC8vIHRoZW4gaXQgbXVzdCBOT1QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIHZhciBsYXN0ID0gc3JjUGF0aC5zbGljZSgtMSlbMF07XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gKFxuICAgICAgKHJlc3VsdC5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgfHwgc3JjUGF0aC5sZW5ndGggPiAxKSAmJlxuICAgICAgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fCBsYXN0ID09PSAnJyk7XG5cbiAgLy8gc3RyaXAgc2luZ2xlIGRvdHMsIHJlc29sdmUgZG91YmxlIGRvdHMgdG8gcGFyZW50IGRpclxuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gc3JjUGF0aC5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGFzdCA9IHNyY1BhdGhbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzIHx8IChyZXN1bHQuaG9zdCAmJiBzcmNQYXRoLmxlbmd0aCk7XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IHNyY1BhdGguam9pbignLycpO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IHJlcXVlc3QuaHR0cFxuICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgfVxuICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGggfHwgcmVzdWx0LmF1dGg7XG4gIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHRoaXMuaG9zdG5hbWUgPSBob3N0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91cmwvdXJsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS4zLjIgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IFJhbmdlRXJyb3IoZXJyb3JzW3R5cGVdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgYEFycmF5I21hcGAgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGFycmF5XG5cdCAqIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgZm4pIHtcblx0XHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR3aGlsZSAobGVuZ3RoLS0pIHtcblx0XHRcdHJlc3VsdFtsZW5ndGhdID0gZm4oYXJyYXlbbGVuZ3RoXSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQSBzaW1wbGUgYEFycmF5I21hcGAtbGlrZSB3cmFwcGVyIHRvIHdvcmsgd2l0aCBkb21haW4gbmFtZSBzdHJpbmdzIG9yIGVtYWlsXG5cdCAqIGFkZHJlc3Nlcy5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5XG5cdCAqIGNoYXJhY3Rlci5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBzdHJpbmcgb2YgY2hhcmFjdGVycyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXBEb21haW4oc3RyaW5nLCBmbikge1xuXHRcdHZhciBwYXJ0cyA9IHN0cmluZy5zcGxpdCgnQCcpO1xuXHRcdHZhciByZXN1bHQgPSAnJztcblx0XHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0Ly8gSW4gZW1haWwgYWRkcmVzc2VzLCBvbmx5IHRoZSBkb21haW4gbmFtZSBzaG91bGQgYmUgcHVueWNvZGVkLiBMZWF2ZVxuXHRcdFx0Ly8gdGhlIGxvY2FsIHBhcnQgKGkuZS4gZXZlcnl0aGluZyB1cCB0byBgQGApIGludGFjdC5cblx0XHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdFx0c3RyaW5nID0gcGFydHNbMV07XG5cdFx0fVxuXHRcdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleFNlcGFyYXRvcnMsICdcXHgyRScpO1xuXHRcdHZhciBsYWJlbHMgPSBzdHJpbmcuc3BsaXQoJy4nKTtcblx0XHR2YXIgZW5jb2RlZCA9IG1hcChsYWJlbHMsIGZuKS5qb2luKCcuJyk7XG5cdFx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBudW1lcmljIGNvZGUgcG9pbnRzIG9mIGVhY2ggVW5pY29kZVxuXHQgKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG5cdCAqIHRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGEgcGFpciBvZiBzdXJyb2dhdGUgaGFsdmVzIChlYWNoIG9mIHdoaWNoXG5cdCAqIFVDUy0yIGV4cG9zZXMgYXMgc2VwYXJhdGUgY2hhcmFjdGVycykgaW50byBhIHNpbmdsZSBjb2RlIHBvaW50LFxuXHQgKiBtYXRjaGluZyBVVEYtMTYuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZW5jb2RlYFxuXHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZGVjb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIFVuaWNvZGUgaW5wdXQgc3RyaW5nIChVQ1MtMikuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIG5ldyBhcnJheSBvZiBjb2RlIHBvaW50cy5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdFx0dmFyIG91dHB1dCA9IFtdLFxuXHRcdCAgICBjb3VudGVyID0gMCxcblx0XHQgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcblx0XHQgICAgdmFsdWUsXG5cdFx0ICAgIGV4dHJhO1xuXHRcdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHR2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdC8vIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3RlclxuXHRcdFx0XHRleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHRcdC8vIGNvZGUgdW5pdCBpcyB0aGUgaGlnaCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpclxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc3RyaW5nIGJhc2VkIG9uIGFuIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZGVjb2RlYFxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBlbmNvZGVcblx0ICogQHBhcmFtIHtBcnJheX0gY29kZVBvaW50cyBUaGUgYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHRcdHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHRcdH1cblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGJhc2ljIGNvZGUgcG9pbnQgaW50byBhIGRpZ2l0L2ludGVnZXIuXG5cdCAqIEBzZWUgYGRpZ2l0VG9CYXNpYygpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29kZVBvaW50IFRoZSBiYXNpYyBudW1lcmljIGNvZGUgcG9pbnQgdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludCAoZm9yIHVzZSBpblxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG5cdCAqIHRoZSBjb2RlIHBvaW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzaWNUb0RpZ2l0KGNvZGVQb2ludCkge1xuXHRcdGlmIChjb2RlUG9pbnQgLSA0OCA8IDEwKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gMjI7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA2NSA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gNjU7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA5NyA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gOTc7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkaWdpdCBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaXMgYGRpZ2l0YCwgd2hpY2ggbmVlZHMgdG8gYmUgaW4gdGhlIHJhbmdlXG5cdCAqIGAwYCB0byBgYmFzZSAtIDFgLiBJZiBgZmxhZ2AgaXMgbm9uLXplcm8sIHRoZSB1cHBlcmNhc2UgZm9ybSBpc1xuXHQgKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuXHQgKiBpZiBgZmxhZ2AgaXMgbm9uLXplcm8gYW5kIGBkaWdpdGAgaGFzIG5vIHVwcGVyY2FzZSBmb3JtLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlnaXRUb0Jhc2ljKGRpZ2l0LCBmbGFnKSB7XG5cdFx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0XHQvLyAyNi4uMzUgbWFwIHRvIEFTQ0lJIDAuLjlcblx0XHRyZXR1cm4gZGlnaXQgKyAyMiArIDc1ICogKGRpZ2l0IDwgMjYpIC0gKChmbGFnICE9IDApIDw8IDUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG5cdCAqIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuMy4yJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykgeyAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdXJsL34vcHVueWNvZGUvcHVueWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzU3RyaW5nOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdzdHJpbmcnO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsT3JVbmRlZmluZWQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT0gbnVsbDtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91cmwvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBkb2N1bWVudFxuICovXG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRvY3VtZW50IGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgRG9jdW1lbnQuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBEb2N1bWVudC5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgdG9wIHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5wYWdlWU9mZnNldCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCBsZWZ0IHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbExlZnQgPSBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LnBhZ2VYT2Zmc2V0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgc2Nyb2xsc1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHt7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbCA9IGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0KG9ialdpbmRvdyksXG4gICAgICAgICAgICAgICAgdG9wOiBEb2N1bWVudC5nZXRTY3JvbGxUb3Aob2JqV2luZG93KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogTmFOLFxuICAgICAgICAgICAgICAgIHRvcDogTmFOXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBEb2N1bWVudDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRG9jdW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNEb2N1bWVudC50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHdpbmRvd1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaW5kb3coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIHdpbmRvd1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIFdpbmRvdy5pc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KG9ialdpbmRvdykge1xuICAgICAgICByZXR1cm4gb2JqV2luZG93ICYmICh0eXBlb2Ygb2JqV2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqV2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgb2JqV2luZG93LmRvY3VtZW50ICYmIF90eXBlb2Yob2JqV2luZG93LmRvY3VtZW50KSA9PT0gXCJvYmplY3RcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aW5kb3cgaGVpZ2h0XG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChXaW5kb3cuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5pbm5lckhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2luZG93IHdpZHRoXG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblxuICAgICAgICBpZiAoV2luZG93LmlzV2luZG93KG9ialdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpXaW5kb3cuaW5uZXJXaWR0aCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHdpbmRvdyBzaXplc1xuICAgICAqIEByZXR1cm4ge3toZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIFdpbmRvdy5nZXRTaXplcyA9IGZ1bmN0aW9uIGdldFNpemVzKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogV2luZG93LmdldEhlaWdodChvYmpXaW5kb3cpLFxuICAgICAgICAgICAgd2lkdGg6IFdpbmRvdy5nZXRXaWR0aChvYmpXaW5kb3cpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBXaW5kb3c7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFdpbmRvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1dpbmRvdy50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcblxudmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBET01cbiAqL1xudmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET00oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET00pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIGRvbSBkb2N1bWVudFxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgRE9NLmlzRE9NRG9jdW1lbnQgPSBmdW5jdGlvbiBpc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiAhKCFkb21Eb2N1bWVudCB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiBkb21Eb2N1bWVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwic3RyaW5nXCIgfHwgZG9tRG9jdW1lbnQubm9kZVR5cGUgIT09IDkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCBhbmQgdmFsaWRhdGUgTm9kZSBpbiBET00gRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnQgfCBib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RE9NTm9kZSA9IGZ1bmN0aW9uIGdldERPTU5vZGUoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Eb2N1bWVudCBpcyBhIHZhbGlkIHZhcmlhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIURPTS5pc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Ob2RlIGlzIGEgdmFsaWQgdmFyaWFibGVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghZG9tTm9kZSB8fCB0eXBlb2YgZG9tTm9kZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZG9tTm9kZSBpcyBhIHN0cmluZyBpdCBtaWdodCBiZSBhbiBJRFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGRvbU5vZGUgaXMgYSB2YWxpZCB2YXJpYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFkb21Ob2RlIHx8IGRvbU5vZGUubm9kZVR5cGUgIT09IDEgfHwgIWRvbU5vZGUucGFyZW50Tm9kZSB8fCBkb21Ob2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09IFwiSFRNTFwiIHx8IGRvbURvY3VtZW50LmNvbnRhaW5zICYmICFkb21Eb2N1bWVudC5jb250YWlucyhkb21Ob2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb21Ob2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGVsZW1lbnQgc2l6ZXMgYW5kIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIGRvbU5vZGVcbiAgICAgKiBAcGFyYW0gZG9tRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG4gICAgICogQHJldHVybiB7e2JvdHRvbTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIHJlc3VsdCBzaXplIGFuZCBwb3NpdGlvbiBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHZhciBvYmpSZXQgPSB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9O1xuICAgICAgICBkb21Ob2RlID0gRE9NLmdldERPTU5vZGUoZG9tTm9kZSwgZG9tRG9jdW1lbnQpO1xuICAgICAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgICAgIF9VdGlsczIuZGVmYXVsdC53YXJuKFwiVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdDogRE9NIGVsZW1lbnQgZG9lc24ndCBleGlzdCBpbiB0aGF0IERPTSBEb2N1bWVudFwiKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0ZvcmNlID0gISFzaG93Rm9yY2U7XG4gICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgIGlmIChzaG93Rm9yY2UpIHtcbiAgICAgICAgICAgIHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZGVmYXVsdCBtZXRob2QgaXMgc3VwcG9ydGVkIHRoYW4gdXNlIGl0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIG9ialJldCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElFIGhhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb2JqUmV0ID0ge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqUmV0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9ialJldC5oZWlnaHQgfHwgZG9tTm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVmdDogb2JqUmV0LmxlZnQsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9ialJldC5yaWdodCxcbiAgICAgICAgICAgICAgICB0b3A6IG9ialJldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9ialJldC53aWR0aCB8fCBkb21Ob2RlLmNsaWVudFdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXcml0ZSB0aGUgZWxlbWVudCBpbiBhIHRlbXBvcmFyeSB2YXJpYWJsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZG9tRWxlbWVudCA9IGRvbU5vZGU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZWQgYmFzaWMgcGFyYW1ldGVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG9iakNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRvbUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcmUgcGFzc2VkIG9uIHRvIGFsbCBwYXJlbnRzIGFuZCB0YWtlIGludG8gYWNjb3VudCB0aGVpciBvZmZzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdoaWxlIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueCArPSBkb21FbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueSArPSBkb21FbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gZG9tRWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvYmpSZXQgPSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBvYmpDb29yZGluYXRlcy55ICsgb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IG9iakNvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9iakNvb3JkaW5hdGVzLnggKyBvYmpDb29yZGluYXRlcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0b3A6IG9iakNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9iakNvb3JkaW5hdGVzLndpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Rm9yY2UgJiYgZG9tTm9kZSkge1xuICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHNpemUgYW5kIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gb2JqUmV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGVsZW1lbnQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEBwYXJhbSBzaG93Rm9yY2VcbiAgICAgKiBAcmV0dXJuIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gICAgICovXG4gICAgRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiBmaW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUpIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIG9ialJldCA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9tTm9kZSA9IERPTS5nZXRET01Ob2RlKGRvbU5vZGUsIGRvbURvY3VtZW50KTtcbiAgICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgICAgICBfVXRpbHMyLmRlZmF1bHQud2FybihcIlV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uOiBET00gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGluIHRoYXQgRE9NIERvY3VtZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialJldDtcbiAgICAgICAgfVxuICAgICAgICBzaG93Rm9yY2UgPSAhIXNob3dGb3JjZTtcbiAgICAgICAgd2hpbGUgKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialJldC5sZWZ0ICs9IGRvbU5vZGUub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIG9ialJldC50b3AgKz0gZG9tTm9kZS5vZmZzZXRUb3A7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tTm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZnVuY1xuICAgICAqL1xuXG5cbiAgICBET00uYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcbiAgICAgICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmMsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqLmF0dGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBmdW5jXG4gICAgICovXG5cblxuICAgIERPTS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG9iaiwgbmFtZSwgZnVuYykge1xuICAgICAgICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmouZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYmouZGV0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIERPTS5oYXNDbGFzc05hbWUgPSBmdW5jdGlvbiBoYXNDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4gKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5hZGRDbGFzc05hbWUgPSBmdW5jdGlvbiBhZGRDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIURPTS5oYXNDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBjbCA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2wgPyBjbCArIFwiIFwiICsgY2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cblxuXG4gICAgRE9NLnJlbW92ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2xhc3Nlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNsYXNzZXNbaV0gPSBjbGFzc2VzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNsYXNzZXNbaV0gfHwgY2xhc3Nlc1tpXSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHRvZ2dsZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00udG9nZ2xlQ2xhc3NOYW1lID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSwgdG9nZ2xlKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0b2dnbGUgPT09IFwiYm9vbGVhblwiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgRE9NLmFkZENsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBvbGRDbGFzc05hbWVcbiAgICAgKiBAcGFyYW0gbmV3Q2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5yZXBsYWNlQ2xhc3MgPSBmdW5jdGlvbiByZXBsYWNlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NOYW1lLCBuZXdDbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvbGRDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG5ld0NsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBvbGRDbGFzc05hbWUgPSBvbGRDbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgbmV3Q2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIERPTS5yZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgb2xkQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIERPTS5hZGRDbGFzc05hbWUoZWxlbWVudCwgbmV3Q2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBlbGVtZW50IGJ5IHRhZyBuYW1lIGFuZCBpbmRleFxuICAgICAqIEBwYXJhbSB0blxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqIEByZXR1cm4ge05vZGV9XG4gICAgICovXG5cblxuICAgIERPTS5nZXRFbGVtZW50QnlUYWdOYW1lID0gZnVuY3Rpb24gZ2V0RWxlbWVudEJ5VGFnTmFtZSh0bikge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgaW5kZXggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0biA9PT0gXCJzdHJpbmdcIiAmJiBET00uaXNET01Eb2N1bWVudChkb21Eb2N1bWVudCkgJiYgdHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB2YXIgZWxzID0gZG9tRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodG4pO1xuICAgICAgICAgICAgcmV0dXJuIGVsc1tpbmRleF0gfHwgbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbGluZSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERPTS5nZXRMaW5lSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0TGluZUhlaWdodCgpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gc3R5bGVzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHZhciBsaW5lSGVpZ2h0RGlnID0gcGFyc2VJbnQobGluZUhlaWdodCwgMTApO1xuICAgICAgICB2YXIgZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG4gICAgICAgIHZhciBmb250U2l6ZURpZyA9IHBhcnNlSW50KGZvbnRTaXplLCAxMCk7XG4gICAgICAgIGlmIChpc0Zpbml0ZShsaW5lSGVpZ2h0RGlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmVIZWlnaHREaWc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9udFNpemVEaWc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIERPTTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzRE9NLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEltcG9ydCBhZGRpdGlvbmFsIGNsYXNzZXNcbiAqL1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNET00gPSByZXF1aXJlKFwiLi9VdGlsc0RPTVwiKTtcblxudmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNb3VzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb3VzZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdXNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgbW91c2UgZGVsdGFcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBNb3VzZS5nZXRXaGVlbERlbHRhID0gZnVuY3Rpb24gZ2V0V2hlZWxEZWx0YShlKSB7XG4gICAgICAgIGlmIChlICYmICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpKSA9PT0gXCJvYmplY3RcIiAmJiAoXCJkZXRhaWxcIiBpbiBlIHx8IFwid2hlZWxEZWx0YVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWFwiIGluIGUgfHwgXCJkZWx0YVlcIiBpbiBlIHx8IFwiZGVsdGFYXCIgaW4gZSB8fCBcImF4aXNcIiBpbiBlIHx8IFwiZGVsdGFNb2RlXCIgaW4gZSkpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuICAgICAgICAgICAgaWYgKFwiZGV0YWlsXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuZGV0YWlsICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcIndoZWVsRGVsdGFZXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhWFwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLndoZWVsRGVsdGFYICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlZm94IDwgMTcgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcmVsYXRlZCB0byBET01Nb3VzZVNjcm9sbCBldmVudFxuICAgICAgICAgICAgaWYgKFwiYXhpc1wiIGluIGUgJiYgZS5heGlzID09PSBlLkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcbiAgICAgICAgICAgIGlmIChcImRlbHRhWVwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZGVsdGFYXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTmVlZCB0byBjb252ZXJ0IGxpbmVzIGFuZCBwYWdlcyB0byBwaXhlbHMgaWYgd2UgYXJlblwidCBhbHJlYWR5IGluIHBpeGVsc1xuICAgICAgICAgICAgLy8gVGhlcmUgYXJlIHRocmVlIGRlbHRhIG1vZGVzOlxuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAwIGlzIGJ5IHBpeGVscywgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAxIGlzIGJ5IGxpbmVzXG4gICAgICAgICAgICAvLyAgICogZGVsdGFNb2RlIDIgaXMgYnkgcGFnZXNcbiAgICAgICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gX1V0aWxzRE9NMi5kZWZhdWx0LmdldExpbmVIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGVsdGFNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlZ2lodCA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5nZXRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB3aW5kb3doZWdpaHQ7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogd2luZG93aGVnaWh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YVkgPT09IDAgPyBkZWx0YVggOiBkZWx0YVk7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBNb3VzZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW91c2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNNb3VzZS50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHNjcmVlblxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YXZhaWxhYmxlU2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfSwgY29sb3JEZXB0aDogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIHNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19fVxuICAgICAqL1xuICAgIFNjcmVlbi5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNpemU6IFNjcmVlbi5nZXRBdmFpbGFibGVTaXplcygpLFxuICAgICAgICAgICAgY29sb3JEZXB0aDogU2NyZWVuLmdldENvbG9yRGVwdGgoKSxcbiAgICAgICAgICAgIHBpeGVsUmF0aW86IFNjcmVlbi5nZXRQaXhlbFJhdGlvKCksXG4gICAgICAgICAgICBzaXplOiBTY3JlZW4uZ2V0U2l6ZXMoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBoZWlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi53aWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHdpZHRoXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldEF2YWlsYWJsZVdpZHRoID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxXaWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlU2l6ZXMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRBdmFpbGFibGVXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHZhciByYXRpbyA9IDE7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhdGlvO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBjb2xvciBkZXB0aFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldENvbG9yRGVwdGggPSBmdW5jdGlvbiBnZXRDb2xvckRlcHRoKCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmNvbG9yRGVwdGg7XG4gICAgfTtcblxuICAgIHJldHVybiBTY3JlZW47XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1NjcmVlbi50c1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHN5c3RlbVxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzdGVtKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3lzdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3lzdGVtIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIFN5c3RlbS5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFN5c3RlbS5nZXROYW1lKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBTeXN0ZW0uZ2V0VmVyc2lvbigpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICB2YXIgb3MgPSBcIlwiO1xuICAgICAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAxMFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA4LjFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBOVCA2LjAvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFZpc3RhXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1dpbmRvd3MgTlQgNS4yLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBTZXJ2ZXIgMjAwM1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFhQXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAyMDAwXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgTUVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA5OFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgOTVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBOVCA0LjBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBDRS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgQ0VcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luMTYvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDMuMTFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvQW5kcm9pZC8sXG4gICAgICAgICAgICBzOiBcIkFuZHJvaWRcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvT3BlbkJTRC8sXG4gICAgICAgICAgICBzOiBcIk9wZW4gQlNEXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1N1bk9TLyxcbiAgICAgICAgICAgIHM6IFwiU3VuIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhMaW51eHxYMTEpLyxcbiAgICAgICAgICAgIHM6IFwiTGludXhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpLyxcbiAgICAgICAgICAgIHM6IFwiaU9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL01hYyBPUyBYLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TIFhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1FOWC8sXG4gICAgICAgICAgICBzOiBcIlFOWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9VTklYLyxcbiAgICAgICAgICAgIHM6IFwiVU5JWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9CZU9TLyxcbiAgICAgICAgICAgIHM6IFwiQmVPU1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9PU1xcLzIvLFxuICAgICAgICAgICAgczogXCJPUy8yXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLyxcbiAgICAgICAgICAgIHM6IFwiU2VhcmNoIEJvdFwiXG4gICAgICAgIH1dO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjbGllbnRTdHJpbmdzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNzID0gX3JlZjtcblxuICAgICAgICAgICAgaWYgKGNzLnIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIG9zID0gY3MucztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICAgICAgICB2YXIgb3MgPSBTeXN0ZW0uZ2V0TmFtZSgpO1xuICAgICAgICB2YXIgb3NWZXJzaW9uID0gXCJcIjtcbiAgICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xuICAgICAgICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcyk7XG4gICAgICAgICAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uWzFdO1xuICAgICAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvcykge1xuICAgICAgICAgICAgY2FzZSBcIk1hYyBPUyBYXCI6XG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFsuX1xcZF0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICAgICAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvblsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQW5kcm9pZFwiOlxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgICAgICAgICAgaWYgKG9zVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSBvc1ZlcnNpb25bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImlPU1wiOlxuICAgICAgICAgICAgICAgIHZhciByZWcgPSAvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8uZXhlYyhuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XG4gICAgICAgICAgICAgICAgaWYgKHJlZykge1xuICAgICAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSByZWdbMV0gKyBcIi5cIiArIHJlZ1syXSArIFwiLlwiICsgKHJlZ1szXSB8fCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvc1ZlcnNpb247XG4gICAgfTtcblxuICAgIHJldHVybiBTeXN0ZW07XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN5c3RlbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1N5c3RlbS50c1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHVzZXJcbiAqL1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1V0aWxzQnJvd3NlciA9IHJlcXVpcmUoXCIuL1V0aWxzQnJvd3NlclwiKTtcblxudmFyIF9VdGlsc0Jyb3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNCcm93c2VyKTtcblxudmFyIF9VdGlsc1NjcmVlbiA9IHJlcXVpcmUoXCIuL1V0aWxzU2NyZWVuXCIpO1xuXG52YXIgX1V0aWxzU2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU2NyZWVuKTtcblxudmFyIF9VdGlsc1N5c3RlbSA9IHJlcXVpcmUoXCIuL1V0aWxzU3lzdGVtXCIpO1xuXG52YXIgX1V0aWxzU3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU3lzdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVzZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YnJvd3Nlcjoge2Jyb3dzZXI6IHN0cmluZywgbW9iaWxlOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmd9LCBzY3JlZW46IHthdmFpbGFibGVTaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9LCBjb2xvckRlcHRoOiBudW1iZXIsIHBpeGVsUmF0aW86IG51bWJlciwgc2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX0sIHN5c3RlbToge25hbWU6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nfX19XG4gICAgICovXG4gICAgVXNlci5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJyb3dzZXI6IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0SW5mbygpLFxuICAgICAgICAgICAgc2NyZWVuOiBfVXRpbHNTY3JlZW4yLmRlZmF1bHQuZ2V0SW5mbygpLFxuICAgICAgICAgICAgc3lzdGVtOiBfVXRpbHNTeXN0ZW0yLmRlZmF1bHQuZ2V0SW5mbygpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBVc2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzVXNlci50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyJdLCJzb3VyY2VSb290IjoiIn0=