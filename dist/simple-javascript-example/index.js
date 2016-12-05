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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	var Utils = __webpack_require__(3);
	function dump(classFunction, pref) {
	    window.document.write("<b>" + pref + classFunction.name + "</b> <br/>");
	    var keys = Object.keys(classFunction);
	    if (keys.length > 0 && keys[0] !== "0") {
	        for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var prop = _ref;
	
	            dump(classFunction[prop], pref + classFunction.name + ".");
	        }
	    }
	}
	dump(Utils, "");

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
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
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NThmY2MwYTBhNzNiZWNhMDFkMz8zNDZiKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHMudHM/MmU3MyoiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzQW5pbWF0aW9uLnRzP2ZiMDQqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0FuaW1hdGlvbkVhc2luZy50cz8wNDRmKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNCcm93c2VyLnRzPzYwNTYqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0Nvb2tpZS50cz9iZjNhKiIsIndlYnBhY2s6Ly8vLi9+L3VybC91cmwuanM/ZDZhNCoiLCJ3ZWJwYWNrOi8vLy4vfi91cmwvfi9wdW55Y29kZS9wdW55Y29kZS5qcz84N2RlKiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzP2MzYzIqIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvaW5kZXguanM/ZmNlOCoiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanM/YzI1MCoiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanM/ZTg2YioiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzRG9jdW1lbnQudHM/Zjg4NioiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzV2luZG93LnRzPzUwNjkqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc0RPTS50cz9kODdlKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNNb3VzZS50cz8xMDVjKiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNTY3JlZW4udHM/M2IxNCoiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzU3lzdGVtLnRzP2ZmNjUqIiwid2VicGFjazovLy8uL2xpYi9VdGlsc1VzZXIudHM/NjgzYioiXSwibmFtZXMiOltdLCJtYXBw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RUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUEsNEI7Ozs7OztBQ3ZYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCLHVKQUFzSjtBQUN0Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQsMkI7Ozs7OztBQzlXQTs7QUFFQTs7QUFFQSxx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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFD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Q2xIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNULDJKQUEwSjtBQUMxSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQsMEI7Ozs7OztBQ3BLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixVQUFVLGtEQUFrRCxXQUFXLGdCQUFnQiw4QkFBOEIsaURBQWlELCtCQUErQixXQUFXO0FBQ2pPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVELHdCIiwiZmlsZSI6Ii4vbGliL1V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJVdGlsc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NThmY2MwYTBhNzNiZWNhMDFkMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNBbmltYXRpb24gPSByZXF1aXJlKFwiLi9VdGlsc0FuaW1hdGlvblwiKTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0FuaW1hdGlvbik7XG5cbnZhciBfVXRpbHNCcm93c2VyID0gcmVxdWlyZShcIi4vVXRpbHNCcm93c2VyXCIpO1xuXG52YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXG52YXIgX1V0aWxzQ29va2llID0gcmVxdWlyZShcIi4vVXRpbHNDb29raWVcIik7XG5cbnZhciBfVXRpbHNDb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNDb29raWUpO1xuXG52YXIgX1V0aWxzRG9jdW1lbnQgPSByZXF1aXJlKFwiLi9VdGlsc0RvY3VtZW50XCIpO1xuXG52YXIgX1V0aWxzRG9jdW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNEb2N1bWVudCk7XG5cbnZhciBfVXRpbHNET00gPSByZXF1aXJlKFwiLi9VdGlsc0RPTVwiKTtcblxudmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cbnZhciBfVXRpbHNNb3VzZSA9IHJlcXVpcmUoXCIuL1V0aWxzTW91c2VcIik7XG5cbnZhciBfVXRpbHNNb3VzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc01vdXNlKTtcblxudmFyIF9VdGlsc1NjcmVlbiA9IHJlcXVpcmUoXCIuL1V0aWxzU2NyZWVuXCIpO1xuXG52YXIgX1V0aWxzU2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU2NyZWVuKTtcblxudmFyIF9VdGlsc1N5c3RlbSA9IHJlcXVpcmUoXCIuL1V0aWxzU3lzdGVtXCIpO1xuXG52YXIgX1V0aWxzU3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU3lzdGVtKTtcblxudmFyIF9VdGlsc1VzZXIgPSByZXF1aXJlKFwiLi9VdGlsc1VzZXJcIik7XG5cbnZhciBfVXRpbHNVc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzVXNlcik7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogR2xvYmFsIFV0aWxzIGNsYXNzXG4gKi9cbnZhciBVdGlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgICB9XG5cbiAgICBVdGlscy53YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYW5nZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4obWVzc2FuZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYW5nZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lc3NhbmdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kLlxuICAgICAqL1xuXG5cbiAgICBVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICBVdGlscy53YXJuKFwiVXRpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2QuXCIpO1xuICAgICAgICByZXR1cm4gVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdChkb21Ob2RlLCBkb21Eb2N1bWVudCwgc2hvd0ZvcmNlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZC5cbiAgICAgKi9cbiAgICBVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlKSB7XG4gICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIFV0aWxzLndhcm4oXCJVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kLlwiKTtcbiAgICAgICAgcmV0dXJuIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUsIGRvbURvY3VtZW50LCBzaG93Rm9yY2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNmZXIgc3RhdGljIG1ldGhvZHMgaW50byB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHJlYWxPYmplY3RcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICovXG5cblxuICAgIFV0aWxzLmltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyA9IGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyhyZWFsT2JqZWN0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKCEhcmVhbE9iamVjdCAmJiAodHlwZW9mIHJlYWxPYmplY3QgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihyZWFsT2JqZWN0KSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRpY0NsYXNzID0gcmVhbE9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRpY0NsYXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBPYmplY3Qua2V5cyhzdGF0aWNDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2RzICYmIG1ldGhvZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVhbE9iamVjdFttZXRob2RdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxPYmplY3RbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGljQ2xhc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlscy53YXJuKFwiVGhhdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFwiICsgKGNsYXNzTmFtZSB8fCBzdGF0aWNDbGFzcyAmJiBzdGF0aWNDbGFzcy5uYW1lIHx8IFwiVW5rbm93blwiKSArIFwiLlwiICsgbWV0aG9kICsgXCIgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0aWNDbGFzc1ttZXRob2RdLmFwcGx5KHN0YXRpY0NsYXNzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG1ldGhvZHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JldDIgPSBfbG9vcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9yZXQyID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNhbGwgc3RhY2sgdHJhY2VcbiAgICAgKiBAcmV0dXJuIEFycmF5PE9iamVjdD5cbiAgICAgKi9cblxuXG4gICAgVXRpbHMuc3RhY2sgPSBmdW5jdGlvbiBzdGFjaygpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5zdGFjayAmJiBlLnN0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDUpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgaWYgKCFzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hdGNoID0gL14oLiopQCguKilcXC5qczooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IC8oW15cXC88XSspL2lnLmV4ZWMobWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV1bMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKGh0dHB8aHR0cHMpOihbXjpdKyk6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzVdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzRdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gKyBcIjpcIiArIG1hdGNoWzJdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKC4qKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoW14oXSspXFxzXFwoKC4qKTooWzAtOV0rKTooWzAtOV0rKVxcKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoLiopOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsxXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHJhbmRvbSBJRFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgVXRpbHMuZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFV0aWxzO1xuXG5VdGlscy5BbmltYXRpb24gPSBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQ7XG5VdGlscy5Ccm93c2VyID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdDtcblV0aWxzLkNvb2tpZSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdDtcblV0aWxzLkRPTSA9IF9VdGlsc0RPTTIuZGVmYXVsdDtcblV0aWxzLkRvY3VtZW50ID0gX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQ7XG5VdGlscy5Nb3VzZSA9IF9VdGlsc01vdXNlMi5kZWZhdWx0O1xuVXRpbHMuU2NyZWVuID0gX1V0aWxzU2NyZWVuMi5kZWZhdWx0O1xuVXRpbHMuU3lzdGVtID0gX1V0aWxzU3lzdGVtMi5kZWZhdWx0O1xuVXRpbHMuVXNlciA9IF9VdGlsc1VzZXIyLmRlZmF1bHQ7XG5VdGlscy5XaW5kb3cgPSBfVXRpbHNXaW5kb3cyLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9VdGlsc0FuaW1hdGlvbkVhc2luZyA9IHJlcXVpcmUoXCIuL1V0aWxzQW5pbWF0aW9uRWFzaW5nXCIpO1xuXG52YXIgX1V0aWxzQW5pbWF0aW9uRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uRWFzaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFuaW1hdGlvbiA9IGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGlvbik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBbmltYXRpb247XG5cbkFuaW1hdGlvbi5FYXNpbmcgPSBfVXRpbHNBbmltYXRpb25FYXNpbmcyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNBbmltYXRpb24udHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEaWZmZXJlbnQgdGltZSBhbmltYXRpb24gZnVuY3Rpb25zXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEVhc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFYXNpbmcoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFYXNpbmcpO1xuICAgIH1cblxuICAgIEVhc2luZy5pc1ZhbGlkUGFyYW1zID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkLCBzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZCA9PT0gXCJudW1iZXJcIiAmJiAodHlwZW9mIHMgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIpICYmIHQgPCBkO1xuICAgIH07XG5cbiAgICBFYXNpbmcuc3dpbmcgPSBmdW5jdGlvbiBzd2luZyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVhc2luZ1tFYXNpbmcuZGVmXSh0LCBiLCBjLCBkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJblF1YWQgPSBmdW5jdGlvbiBlYXNlSW5RdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICgtLXQgKiAodCAtIDIpIC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluQ3ViaWMgPSBmdW5jdGlvbiBlYXNlSW5DdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRDdWJpYyA9IGZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRDdWJpYyA9IGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJblF1YXJ0ID0gZnVuY3Rpb24gZWFzZUluUXVhcnQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFF1YXJ0ID0gZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluT3V0UXVhcnQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5RdWludCA9IGZ1bmN0aW9uIGVhc2VJblF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0UXVpbnQgPSBmdW5jdGlvbiBlYXNlT3V0UXVpbnQodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRRdWludCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5TaW5lID0gZnVuY3Rpb24gZWFzZUluU2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dFNpbmUgPSBmdW5jdGlvbiBlYXNlT3V0U2luZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dFNpbmUgPSBmdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5FeHBvID0gZnVuY3Rpb24gZWFzZUluRXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHQgPT09IDAgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRFeHBvID0gZnVuY3Rpb24gZWFzZU91dEV4cG8odCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ID09PSBkID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRFeHBvID0gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ID09PSBkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkNpcmMgPSBmdW5jdGlvbiBlYXNlSW5DaXJjKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZU91dENpcmMgPSBmdW5jdGlvbiBlYXNlT3V0Q2lyYyh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dENpcmMgPSBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluRWxhc3RpYyA9IGZ1bmN0aW9uIGVhc2VJbkVsYXN0aWModCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgICAgIHZhciBhID0gYztcbiAgICAgICAgICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICAgICAgICBwID0gZCAqIC4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgICAgICAgICAgIGEgPSBjO1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0RWxhc3RpYyA9IGZ1bmN0aW9uIGVhc2VPdXRFbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgICAgICAgcCA9IGQgKiAuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dEVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlSW5PdXRFbGFzdGljKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiICsgYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcCkge1xuICAgICAgICAgICAgICAgIHAgPSBkICogKC4zICogMS41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogLjUgKyBjICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbkJhY2sgPSBmdW5jdGlvbiBlYXNlSW5CYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VPdXRCYWNrID0gZnVuY3Rpb24gZWFzZU91dEJhY2sodCwgYiwgYywgZCwgcykge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCwgcykpIHtcbiAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzID0gMS43MDE1ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRWFzaW5nLmVhc2VJbk91dEJhY2sgPSBmdW5jdGlvbiBlYXNlSW5PdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBFYXNpbmcuZWFzZUluQm91bmNlID0gZnVuY3Rpb24gZWFzZUluQm91bmNlKHQsIGIsIGMsIGQpIHtcbiAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAtIEVhc2luZy5lYXNlT3V0Qm91bmNlKGQgLSB0LCAwLCBjLCBkKSArIGI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlT3V0Qm91bmNlID0gZnVuY3Rpb24gZWFzZU91dEJvdW5jZSh0LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAuNzUpICsgYjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjI1IC8gMi43NSkgKiB0ICsgLjkzNzUpICsgYjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAuOTg0Mzc1KSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEVhc2luZy5lYXNlSW5PdXRCb3VuY2UgPSBmdW5jdGlvbiBlYXNlSW5PdXRCb3VuY2UodCwgYiwgYywgZCkge1xuICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcbiAgICAgICAgICAgIGlmICh0IDwgZCAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRWFzaW5nLmVhc2VJbkJvdW5jZSh0ICogMiwgMCwgYywgZCkgKiAuNSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gRWFzaW5nLmVhc2VPdXRCb3VuY2UodCAqIDIgLSBkLCAwLCBjLCBkKSAqIC41ICsgYyAqIC41ICsgYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEVhc2luZztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRWFzaW5nO1xuXG5FYXNpbmcuZGVmID0gXCJlYXNlT3V0UXVhZFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzQW5pbWF0aW9uRWFzaW5nLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBicm93c2VyXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ319XG4gICAgICovXG4gICAgQnJvd3Nlci5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJyb3dzZXI6IEJyb3dzZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbW9iaWxlOiBCcm93c2VyLmlzTW9iaWxlKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBCcm93c2VyLmdldFZlcnNpb24oKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGJyb3dzZXIgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSB2b2lkIDA7XG4gICAgICAgIGlmIChCcm93c2VyLmlzT3BlcmEoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3BlcmFOZXcoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRU5ldygpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzQ2hyb21lKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkNocm9tZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkZpcmVmb3hcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIlNhZmFyaVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPdGhlcigpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gQnJvd3Nlci5nZXRPdGhlck5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3NlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdm9pZCAwO1xuICAgICAgICBpZiAoQnJvd3Nlci5pc09wZXJhKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE9wZXJhVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPcGVyYU5ldygpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNNU0lFTmV3KCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0Nocm9tZSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldFNhZmFyaVZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3RoZXIoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0T3RoZXJWZXJzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmltIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEBwYXJhbSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLnRyaW1WZXJzaW9uID0gZnVuY3Rpb24gdHJpbVZlcnNpb24odmVyc2lvbikge1xuICAgICAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhciBjaGFycyA9IFtcIjtcIiwgXCIgXCIsIFwiKVwiXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNoYXJzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGFyID0gX3JlZjtcblxuICAgICAgICAgICAgICAgIHZhciBpeCA9IHZlcnNpb24uaW5kZXhPZihjaGFyKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbW9iaWxlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01vYmlsZSA9IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICAgICAgICByZXR1cm4gKC9Nb2JpbGV8bWluaXxGZW5uZWN8QW5kcm9pZHxpUChhZHxvZHxob25lKS8udGVzdChuYXZpZ2F0b3IuYXBwVmVyc2lvbilcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzT3BlcmEgPSBmdW5jdGlvbiBpc09wZXJhKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG9wZXJhIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPcGVyYVZlcnNpb24gPSBmdW5jdGlvbiBnZXRPcGVyYVZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA2KTtcbiAgICAgICAgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIG5ldyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc09wZXJhTmV3ID0gZnVuY3Rpb24gaXNPcGVyYU5ldygpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9QUlwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgb3BlcmEgbmV3IGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24gPSBmdW5jdGlvbiBnZXRPcGVyYU5ld1ZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbXNpZSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01TSUUgPSBmdW5jdGlvbiBpc01TSUUoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBtc2llIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRNU0lFVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE1TSUVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBtc2llIG5ldyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc01TSUVOZXcgPSBmdW5jdGlvbiBpc01TSUVOZXcoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50L1wiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbXNpZSBuZXcgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRU5ld1ZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwicnY6XCIpICsgMyk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgY2hyb21lIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzQ2hyb21lID0gZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNocm9tZSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0Q2hyb21lVmVyc2lvbiA9IGZ1bmN0aW9uIGdldENocm9tZVZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgc2FmYXJpIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzU2FmYXJpID0gZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgIT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA9PT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2FmYXJpIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uID0gZnVuY3Rpb24gZ2V0U2FmYXJpVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcbiAgICAgICAgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIGZpcmVmb3ggYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNGaXJlZm94ID0gZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZmlyZWZveCBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24gPSBmdW5jdGlvbiBnZXRGaXJlZm94VmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgb3RoZXIgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNPdGhlciA9IGZ1bmN0aW9uIGlzT3RoZXIoKSB7XG4gICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgIHJldHVybiBuYW1lT2Zmc2V0IDwgdmVyT2Zmc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG90aGVyIGJyb3dzZXIgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRPdGhlck5hbWUgPSBmdW5jdGlvbiBnZXRPdGhlck5hbWUoKSB7XG4gICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgIHZhciBicm93c2VyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcbiAgICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PT0gYnJvd3Nlci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyb3dzZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgb3RoZXIgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldE90aGVyVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE90aGVyVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIG5hbWVPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiIFwiKSArIDE7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBicm93c2VyIHN1cHBvcnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhQnJvd3Nlci5pc01TSUUoKSB8fCBwYXJzZUludChCcm93c2VyLmdldE1TSUVWZXJzaW9uKCksIDEwKSA+IDg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBXZWJLaXQgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNXZWJLaXQgPSBmdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFwcGxlV2ViS2l0L1wiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBHZWNrbyBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0dlY2tvID0gZnVuY3Rpb24gaXNHZWNrbygpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkdlY2tvXCIpID4gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiS0hUTUxcIikgPT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgQW5kcm9pZCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0FuZHJvaWQgPSBmdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpID4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBMaW51eCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0xpbnV4ID0gZnVuY3Rpb24gaXNMaW51eCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkxpbnV4XCIpID4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBpUGFkIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzVGFibGV0UEMgPSBmdW5jdGlvbiBpc1RhYmxldFBDKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiaVBhZFwiKSA+IC0xO1xuICAgIH07XG5cbiAgICByZXR1cm4gQnJvd3Nlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQnJvd3NlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0Jyb3dzZXIudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBVUkwgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGNvb2tpZVxuICovXG5cbnZhciBDb29raWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvb2tpZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29va2llKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGZsYWcgd2hldGhlciBzdXBwb3J0ZWQgdGhpcyBzdG9yYWdlIHR5cGUgb3Igbm90XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQ29va2llLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkb2N1bWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkb2N1bWVudC5jb29raWUgPT09IFwic3RyaW5nXCI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHNldHMgdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaGFzIGJlZW4gc2V0XG4gICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBleHBpcmVzIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBwYXRoIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBkb21haW4ge3N0cmluZ31cbiAgICogQHBhcmFtIHNlY3VyZSB7Ym9vbGVhbn1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBDb29raWUuc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGV4cGlyZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDMwO1xuICAgIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBcIi9cIjtcbiAgICB2YXIgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICB2YXIgc2VjdXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIjtcblxuICAgIHRyeSB7XG4gICAgICAvKipcbiAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcbiAgICAgICAqL1xuICAgICAgaWYgKHR5cGVvZiBjaGVja1N1cHBvcnQgPT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgQ29va2llLnJlZ1ZhbGlkS2V5LnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGV4cGlyZXMgPT09IFwibnVtYmVyXCIgJiYgZXhwaXJlcyA8IDM2NSAmJiB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZG9tYWluID09PSBcInN0cmluZ1wiICYmIGRvbWFpbi5pbmRleE9mKGxvY2F0aW9uLmhvc3RuYW1lKSAhPT0gLTEgJiYgdHlwZW9mIHNlY3VyZSA9PT0gXCJib29sZWFuXCIgJiYgc2VjdXJlID09PSAobG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdSA9IFVSTC5wYXJzZShcImh0dHA6Ly9cIiArIGRvbWFpbiArIHBhdGgpO1xuICAgICAgICBpZiAodS5ob3N0bmFtZSA9PT0gZG9tYWluIHx8IHUucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2F2ZSBjb29raWVzIGZvciAzMCBkYXlzXG4gICAgICAgICAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgdmFyIGV4cCA9IGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5jb2RlIHZhbHVlIGZvciBzdG9yZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXcml0aW5nIHZhbHVlIHRvIHRoZSBkb2N1bWVudCBjb29raWUgc3RvcmFnZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIChleHAgPyBcIjsgZXhwaXJlcz1cIiArIGV4cCA6IFwiXCIpICsgKHBhdGggPyBcIjsgcGF0aD1cIiArIHBhdGggOiBcIlwiKSArIChkb21haW4gPyBcIjsgZG9tYWluPVwiICsgZG9tYWluIDogXCJcIikgKyAoc2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gQ29va2llLmdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpID09PSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGlucHV0IGRhdGEgaXMgbm90IHZhbGlkXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZWFkcyB0aGUgdmFsdWUgYW5kIHJldHVybnMgaXQgb3IgcmV0dXJucyBmYWxzZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3RcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBHZXQgdGhlIGFycmF5IGZyb20gZG9jdW1lbnQgY29va2llIHNwbGl0IGJ5IDtcbiAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGFyckNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG4gICAgICAgICAgICovXG4gICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYXJyQ29va2llLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IF9yZWY7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpbSBhbmQgc3BsaXQgZWFjaCBjb29raWUgYnkgPSBmb3Iga2V5IHZhbHVlIHBhcmVcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHYgPSBpLnRyaW0oKS5zcGxpdChcIj1cIiwgMik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIGl0IGlzIGNvcnJlY3QgY29va2llIGtleSByZXR1cm4gdGhlIHZhbHVlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh2WzBdID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgZm91bmQgcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlIHZhbHVlIHdhcyBub3QgZm91bmQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZW1vdmVzIHRoZSB2YWx1ZSBhbmQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIGRvZXMgbm90IGV4aXN0XG4gICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXQgZW1wdHkgb3ZlcmR1ZSB2YWx1ZSBieSBrZXlcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBDb29raWUuc2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSwgXCJcIiwgLTEpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiBDb29raWUuZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkgPT09IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHJpbmcgb2YgYXZhaWxhYmxlIGtleXNcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cblxuXG4gIENvb2tpZS5nZXRLZXlzID0gZnVuY3Rpb24gZ2V0S2V5cyhjaGVja1N1cHBvcnQpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIGFycmF5IG9mIGF2YWlsYWJsZSBrZXlzXG4gICAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBhcnJLZXlzID0gW107XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2V0IHRoZSBhcnJheSBmcm9tIGRvY3VtZW50IGNvb2tpZSBzcGxpdCBieSA7XG4gICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBhcnJDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY29va2llc1xuICAgICAgICAgICAqL1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBhcnJDb29raWUsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IF9yZWYyO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaW0gYW5kIHNwbGl0IGVhY2ggY29va2llIGJ5ID0gZm9yIGtleSB2YWx1ZSBwYXJlXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciB2ID0gaS50cmltKCkuc3BsaXQoXCI9XCIsIDIpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQga2V5IHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh2WzBdKSB7XG4gICAgICAgICAgICAgIGFycktleXMucHVzaCh2WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFycktleXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIGNsZWFucyB0aGUgc3RvcmFnZSBhbmQgcmV0dXJuIHRydWUgaWYgaXQgaXMgZW1wdHlcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoY2hlY2tTdXBwb3J0KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgIHZhciBhcnJLZXlzID0gQ29va2llLmdldEtleXMoY2hlY2tTdXBwb3J0KTtcbiAgICAgICAgICBpZiAoYXJyS2V5cykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGFycktleXMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogX2l0ZXJhdG9yM1tTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cbiAgICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBpID0gX3JlZjM7XG5cbiAgICAgICAgICAgICAgQ29va2llLnJlbW92ZUl0ZW0oY2hlY2tTdXBwb3J0LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgYWxsIG9rIHJldHVybiB0cnVlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENvb2tpZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29va2llO1xuXG5Db29raWUucmVnVmFsaWRLZXkgPSBuZXcgUmVnRXhwKFwiKFthLXpBLVowLTlfLV17MSx9KVwiLCBcImlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNDb29raWUudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgcmVzZXJ2ZWQgZm9yIGRlbGltaXRpbmcgVVJMcy5cbiAgICAvLyBXZSBhY3R1YWxseSBqdXN0IGF1dG8tZXNjYXBlIHRoZXNlLlxuICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cbiAgICAvLyBBbGxvd2VkIGJ5IFJGQ3MsIGJ1dCBjYXVzZSBvZiBYU1MgYXR0YWNrcy4gIEFsd2F5cyBlc2NhcGUgdGhlc2UuXG4gICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG4gICAgLy8gQ2hhcmFjdGVycyB0aGF0IGFyZSBuZXZlciBldmVyIGFsbG93ZWQgaW4gYSBob3N0bmFtZS5cbiAgICAvLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4gICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG4gICAgLy8gdGhlbS5cbiAgICBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG4gICAgaG9zdG5hbWVNYXhMZW4gPSAyNTUsXG4gICAgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eW2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oW2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCFpc1N0cmluZyh1cmwpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhcmFtZXRlciAndXJsJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgdXJsKTtcbiAgfVxuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55IGNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIFwiZG9tYWluXCIuXG4gICAgICAvLyBJdCBvbmx5IGNvbnZlcnRzIHRoZSBwYXJ0IG9mIHRoZSBkb21haW4gbmFtZSB0aGF0XG4gICAgICAvLyBoYXMgbm9uIEFTQ0lJIGNoYXJhY3RlcnMuIEkuZS4gaXQgZG9zZW50IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgaW4gQVNDSUkuXG4gICAgICB2YXIgZG9tYWluQXJyYXkgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbmV3T3V0ID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbWFpbkFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzID0gZG9tYWluQXJyYXlbaV07XG4gICAgICAgIG5ld091dC5wdXNoKHMubWF0Y2goL1teQS1aYS16MC05Xy1dLykgP1xuICAgICAgICAgICAgJ3huLS0nICsgcHVueWNvZGUuZW5jb2RlKHMpIDogcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3RuYW1lID0gbmV3T3V0LmpvaW4oJy4nKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKGlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIGlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXJ5KS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5KTtcbiAgfVxuXG4gIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaCB8fCAocXVlcnkgJiYgKCc/JyArIHF1ZXJ5KSkgfHwgJyc7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuICAvLyB1bmxlc3MgdGhleSBoYWQgdGhlbSB0byBiZWdpbiB3aXRoLlxuICBpZiAodGhpcy5zbGFzaGVzIHx8XG4gICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJyk7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lO1xuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnO1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2g7XG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKTtcblxuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlKHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x2ZU9iamVjdCh1cmxQYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpKS5mb3JtYXQoKTtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmVPYmplY3Qoc291cmNlLCByZWxhdGl2ZSkge1xuICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZU9iamVjdChyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdCA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIGlmIChpc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgcmVzdWx0W2tdID0gdGhpc1trXTtcbiAgfSwgdGhpcyk7XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICBPYmplY3Qua2V5cyhyZWxhdGl2ZSkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICBpZiAoayAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgfSk7XG5cbiAgICAvL3VybFBhcnNlIGFwcGVuZHMgdHJhaWxpbmcgLyB0byB1cmxzIGxpa2UgaHR0cDovL3d3dy5leGFtcGxlLmNvbVxuICAgIGlmIChzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXSAmJlxuICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuXG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5wcm90b2NvbCAmJiByZWxhdGl2ZS5wcm90b2NvbCAhPT0gcmVzdWx0LnByb3RvY29sKSB7XG4gICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuICAgIC8vIHRoZSBwcm90b2NvbCBkb2VzIHdlaXJkIHRoaW5nc1xuICAgIC8vIGZpcnN0LCBpZiBpdCdzIG5vdCBmaWxlOiwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBob3N0LFxuICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG4gICAgLy8gdG8gYmVnaW4gd2l0aCwgdGhlbiB3ZSBNVVNUIGhhdmUgYSBwYXRoLlxuICAgIC8vIGlmIGl0IGlzIGZpbGU6LCB0aGVuIHRoZSBob3N0IGlzIGRyb3BwZWQsXG4gICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG4gICAgLy8gYW55dGhpbmcgZWxzZSBpcyBhc3N1bWVkIHRvIGJlIGFic29sdXRlLlxuICAgIGlmICghc2xhc2hlZFByb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgT2JqZWN0LmtleXMocmVsYXRpdmUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghaXNOdWxsT3JVbmRlZmluZWQocmVsYXRpdmUuc2VhcmNoKSkge1xuICAgIC8vIGp1c3QgcHVsbCBvdXQgdGhlIHNlYXJjaC5cbiAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuICAgIC8vIFB1dCB0aGlzIGFmdGVyIHRoZSBvdGhlciB0d28gY2FzZXMgYmVjYXVzZSBpdCBzaW1wbGlmaWVzIHRoZSBib29sZWFuc1xuICAgIGlmIChwc3ljaG90aWMpIHtcbiAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuICAgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuICAgICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCkgJiYgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fFxuICAgICAgbGFzdCA9PT0gJycpO1xuXG4gIC8vIHN0cmlwIHNpbmdsZSBkb3RzLCByZXNvbHZlIGRvdWJsZSBkb3RzIHRvIHBhcmVudCBkaXJcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHNyY1BhdGgubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuICAgIGlmIChsYXN0ID09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG4gIH1cbiAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoIHx8IHJlc3VsdC5hdXRoO1xuICByZXN1bHQuc2xhc2hlcyA9IHJlc3VsdC5zbGFzaGVzIHx8IHJlbGF0aXZlLnNsYXNoZXM7XG4gIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuVXJsLnByb3RvdHlwZS5wYXJzZUhvc3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcbiAgaWYgKHBvcnQpIHtcbiAgICBwb3J0ID0gcG9ydFswXTtcbiAgICBpZiAocG9ydCAhPT0gJzonKSB7XG4gICAgICB0aGlzLnBvcnQgPSBwb3J0LnN1YnN0cigxKTtcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuICB9XG4gIGlmIChob3N0KSB0aGlzLmhvc3RuYW1lID0gaG9zdDtcbn07XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gIGFyZyA9PSBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VybC91cmwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlIHYxLjMuMiBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0LyoqIERldGVjdCBmcmVlIHZhcmlhYmxlcyAqL1xuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmXG5cdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdCFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoXG5cdFx0ZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbFxuXHQpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYHB1bnljb2RlYCBvYmplY3QuXG5cdCAqIEBuYW1lIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0dmFyIHB1bnljb2RlLFxuXG5cdC8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cblx0bWF4SW50ID0gMjE0NzQ4MzY0NywgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG5cdC8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cblx0YmFzZSA9IDM2LFxuXHR0TWluID0gMSxcblx0dE1heCA9IDI2LFxuXHRza2V3ID0gMzgsXG5cdGRhbXAgPSA3MDAsXG5cdGluaXRpYWxCaWFzID0gNzIsXG5cdGluaXRpYWxOID0gMTI4LCAvLyAweDgwXG5cdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXG5cdC8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5cdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRyZWdleE5vbkFTQ0lJID0gL1teXFx4MjAtXFx4N0VdLywgLy8gdW5wcmludGFibGUgQVNDSUkgY2hhcnMgKyBub24tQVNDSUkgY2hhcnNcblx0cmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZywgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG5cdC8qKiBFcnJvciBtZXNzYWdlcyAqL1xuXHRlcnJvcnMgPSB7XG5cdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHRcdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG5cdH0sXG5cblx0LyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuXHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdGZsb29yID0gTWF0aC5mbG9vcixcblx0c3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcblxuXHQvKiogVGVtcG9yYXJ5IHZhcmlhYmxlICovXG5cdGtleTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0dGhyb3cgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS4zLjInLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yIChrZXkgaW4gcHVueWNvZGUpIHtcblx0XHRcdFx0cHVueWNvZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHB1bnljb2RlW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91cmwvfi9wdW55Y29kZS9wdW55Y29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBkb2N1bWVudFxuICovXG52YXIgRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRvY3VtZW50IGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgRG9jdW1lbnQuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBEb2N1bWVudC5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgdG9wIHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5wYWdlWU9mZnNldCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCBsZWZ0IHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbExlZnQgPSBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LnBhZ2VYT2Zmc2V0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgc2Nyb2xsc1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHt7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbCA9IGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0KG9ialdpbmRvdyksXG4gICAgICAgICAgICAgICAgdG9wOiBEb2N1bWVudC5nZXRTY3JvbGxUb3Aob2JqV2luZG93KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogTmFOLFxuICAgICAgICAgICAgICAgIHRvcDogTmFOXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBEb2N1bWVudDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRG9jdW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNEb2N1bWVudC50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHdpbmRvd1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaW5kb3coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIHdpbmRvd1xuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIFdpbmRvdy5pc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KG9ialdpbmRvdykge1xuICAgICAgICByZXR1cm4gb2JqV2luZG93ICYmICh0eXBlb2Ygb2JqV2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqV2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgb2JqV2luZG93LmRvY3VtZW50ICYmIF90eXBlb2Yob2JqV2luZG93LmRvY3VtZW50KSA9PT0gXCJvYmplY3RcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aW5kb3cgaGVpZ2h0XG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIGlmIChXaW5kb3cuaXNXaW5kb3cob2JqV2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5pbm5lckhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2luZG93IHdpZHRoXG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgV2luZG93LmdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblxuICAgICAgICBpZiAoV2luZG93LmlzV2luZG93KG9ialdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpXaW5kb3cuaW5uZXJXaWR0aCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHdpbmRvdyBzaXplc1xuICAgICAqIEByZXR1cm4ge3toZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIFdpbmRvdy5nZXRTaXplcyA9IGZ1bmN0aW9uIGdldFNpemVzKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogV2luZG93LmdldEhlaWdodChvYmpXaW5kb3cpLFxuICAgICAgICAgICAgd2lkdGg6IFdpbmRvdy5nZXRXaWR0aChvYmpXaW5kb3cpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBXaW5kb3c7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFdpbmRvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1dpbmRvdy50c1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcblxudmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBET01cbiAqL1xudmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET00oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET00pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIGRvbSBkb2N1bWVudFxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgRE9NLmlzRE9NRG9jdW1lbnQgPSBmdW5jdGlvbiBpc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiAhKCFkb21Eb2N1bWVudCB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiBkb21Eb2N1bWVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwic3RyaW5nXCIgfHwgZG9tRG9jdW1lbnQubm9kZVR5cGUgIT09IDkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCBhbmQgdmFsaWRhdGUgTm9kZSBpbiBET00gRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnQgfCBib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RE9NTm9kZSA9IGZ1bmN0aW9uIGdldERPTU5vZGUoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Eb2N1bWVudCBpcyBhIHZhbGlkIHZhcmlhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIURPTS5pc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBkb21Ob2RlIGlzIGEgdmFsaWQgdmFyaWFibGVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghZG9tTm9kZSB8fCB0eXBlb2YgZG9tTm9kZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZG9tTm9kZSBpcyBhIHN0cmluZyBpdCBtaWdodCBiZSBhbiBJRFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGRvbU5vZGUgaXMgYSB2YWxpZCB2YXJpYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFkb21Ob2RlIHx8IGRvbU5vZGUubm9kZVR5cGUgIT09IDEgfHwgIWRvbU5vZGUucGFyZW50Tm9kZSB8fCBkb21Ob2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09IFwiSFRNTFwiIHx8ICFkb21Eb2N1bWVudC5jb250YWlucyhkb21Ob2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb21Ob2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGVsZW1lbnQgc2l6ZXMgYW5kIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIGRvbU5vZGVcbiAgICAgKiBAcGFyYW0gZG9tRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG4gICAgICogQHJldHVybiB7e2JvdHRvbTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG4gICAgICovXG5cblxuICAgIERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIHJlc3VsdCBzaXplIGFuZCBwb3NpdGlvbiBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHZhciBvYmpSZXQgPSB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9O1xuICAgICAgICBkb21Ob2RlID0gRE9NLmdldERPTU5vZGUoZG9tTm9kZSwgZG9tRG9jdW1lbnQpO1xuICAgICAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgICAgIF9VdGlsczIuZGVmYXVsdC53YXJuKFwiVXRpbHMuRE9NLmdldEJvdW5kaW5nQ2xpZW50UmVjdDogRE9NIGVsZW1lbnQgZG9lc24ndCBleGlzdCBpbiB0aGF0IERPTSBEb2N1bWVudFwiKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0ZvcmNlID0gISFzaG93Rm9yY2U7XG4gICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgIGlmIChzaG93Rm9yY2UpIHtcbiAgICAgICAgICAgIHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZGVmYXVsdCBtZXRob2QgaXMgc3VwcG9ydGVkIHRoYW4gdXNlIGl0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIG9ialJldCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElFIGhhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb2JqUmV0ID0ge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqUmV0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9ialJldC5oZWlnaHQgfHwgZG9tTm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVmdDogb2JqUmV0LmxlZnQsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9ialJldC5yaWdodCxcbiAgICAgICAgICAgICAgICB0b3A6IG9ialJldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9ialJldC53aWR0aCB8fCBkb21Ob2RlLmNsaWVudFdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXcml0ZSB0aGUgZWxlbWVudCBpbiBhIHRlbXBvcmFyeSB2YXJpYWJsZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZG9tRWxlbWVudCA9IGRvbU5vZGU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGN1bGF0ZWQgYmFzaWMgcGFyYW1ldGVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG9iakNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRvbUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcmUgcGFzc2VkIG9uIHRvIGFsbCBwYXJlbnRzIGFuZCB0YWtlIGludG8gYWNjb3VudCB0aGVpciBvZmZzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdoaWxlIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueCArPSBkb21FbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueSArPSBkb21FbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gZG9tRWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvYmpSZXQgPSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBvYmpDb29yZGluYXRlcy55ICsgb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IG9iakNvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG9iakNvb3JkaW5hdGVzLnggKyBvYmpDb29yZGluYXRlcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0b3A6IG9iakNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgd2lkdGg6IG9iakNvb3JkaW5hdGVzLndpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Rm9yY2UgJiYgZG9tTm9kZSkge1xuICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHNpemUgYW5kIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gb2JqUmV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGVsZW1lbnQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZG9tTm9kZVxuICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuICAgICAqIEBwYXJhbSBzaG93Rm9yY2VcbiAgICAgKiBAcmV0dXJuIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gICAgICovXG4gICAgRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiBmaW5kRWxlbWVudFBvc2l0aW9uKGRvbU5vZGUpIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgdmFyIG9ialJldCA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9tTm9kZSA9IERPTS5nZXRET01Ob2RlKGRvbU5vZGUsIGRvbURvY3VtZW50KTtcbiAgICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgICAgICBfVXRpbHMyLmRlZmF1bHQud2FybihcIlV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uOiBET00gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGluIHRoYXQgRE9NIERvY3VtZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialJldDtcbiAgICAgICAgfVxuICAgICAgICBzaG93Rm9yY2UgPSAhIXNob3dGb3JjZTtcbiAgICAgICAgd2hpbGUgKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialJldC5sZWZ0ICs9IGRvbU5vZGUub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIG9ialJldC50b3AgKz0gZG9tTm9kZS5vZmZzZXRUb3A7XG4gICAgICAgICAgICBkb21Ob2RlID0gZG9tTm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZnVuY1xuICAgICAqL1xuXG5cbiAgICBET00uYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcbiAgICAgICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpID09PSBcIm9iamVjdFwiICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiBvYmoucGFyZW50RWxlbWVudCAmJiBvYmoucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgJiYgdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKG9iai5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmouYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYmouYXR0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGZ1bmNcbiAgICAgKi9cblxuXG4gICAgRE9NLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnQob2JqLCBuYW1lLCBmdW5jKSB7XG4gICAgICAgIGlmIChvYmogJiYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopKSA9PT0gXCJvYmplY3RcIiAmJiBvYmoubm9kZVR5cGUgPT09IDEgJiYgb2JqLnBhcmVudEVsZW1lbnQgJiYgb2JqLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiICYmIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmMsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JqLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uaGFzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgcmV0dXJuIChcIiBcIiArIGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00uYWRkQ2xhc3NOYW1lID0gZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCFET00uaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBlbGVtZW50LmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsID8gY2wgKyBcIiBcIiArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgJiYgdHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzW2ldID0gY2xhc3Nlc1tpXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGFzc2VzW2ldIHx8IGNsYXNzZXNbaV0gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB0b2dnbGVcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cblxuXG4gICAgRE9NLnRvZ2dsZUNsYXNzTmFtZSA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUsIHRvZ2dsZSkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiAodHlwZW9mIGVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlbGVtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdG9nZ2xlID09PSBcImJvb2xlYW5cIiAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIERPTS5hZGRDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb2xkQ2xhc3NOYW1lXG4gICAgICogQHBhcmFtIG5ld0NsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00ucmVwbGFjZUNsYXNzID0gZnVuY3Rpb24gcmVwbGFjZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzTmFtZSwgbmV3Q2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2xkQ2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBuZXdDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIikge1xuICAgICAgICAgICAgb2xkQ2xhc3NOYW1lID0gb2xkQ2xhc3NOYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZS50cmltKCk7XG4gICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIG9sZENsYXNzTmFtZSk7XG4gICAgICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZWxlbWVudCBieSB0YWcgbmFtZSBhbmQgaW5kZXhcbiAgICAgKiBAcGFyYW0gdG5cbiAgICAgKiBAcGFyYW0gZG9tRG9jdW1lbnRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtOb2RlfVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RWxlbWVudEJ5VGFnTmFtZSA9IGZ1bmN0aW9uIGdldEVsZW1lbnRCeVRhZ05hbWUodG4pIHtcbiAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG4gPT09IFwic3RyaW5nXCIgJiYgRE9NLmlzRE9NRG9jdW1lbnQoZG9tRG9jdW1lbnQpICYmIHR5cGVvZiBpbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmFyIGVscyA9IGRvbURvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRuKTtcbiAgICAgICAgICAgIHJldHVybiBlbHNbaW5kZXhdIHx8IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGxpbmUgaGVpZ2h0XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0TGluZUhlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVIZWlnaHQoKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlcy5saW5lSGVpZ2h0O1xuICAgICAgICB2YXIgbGluZUhlaWdodERpZyA9IHBhcnNlSW50KGxpbmVIZWlnaHQsIDEwKTtcbiAgICAgICAgdmFyIGZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuICAgICAgICB2YXIgZm9udFNpemVEaWcgPSBwYXJzZUludChmb250U2l6ZSwgMTApO1xuICAgICAgICBpZiAoaXNGaW5pdGUobGluZUhlaWdodERpZykpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lSGVpZ2h0RGlnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplRGlnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBET007XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0RPTS50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfVXRpbHNET00gPSByZXF1aXJlKFwiLi9VdGlsc0RPTVwiKTtcblxudmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cbnZhciBfVXRpbHNXaW5kb3cgPSByZXF1aXJlKFwiLi9VdGlsc1dpbmRvd1wiKTtcblxudmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNb3VzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb3VzZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdXNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgbW91c2UgZGVsdGFcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBNb3VzZS5nZXRXaGVlbERlbHRhID0gZnVuY3Rpb24gZ2V0V2hlZWxEZWx0YShlKSB7XG4gICAgICAgIGlmIChlICYmICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpKSA9PT0gXCJvYmplY3RcIiAmJiAoXCJkZXRhaWxcIiBpbiBlIHx8IFwid2hlZWxEZWx0YVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWVwiIGluIGUgfHwgXCJ3aGVlbERlbHRhWFwiIGluIGUgfHwgXCJkZWx0YVlcIiBpbiBlIHx8IFwiZGVsdGFYXCIgaW4gZSB8fCBcImF4aXNcIiBpbiBlIHx8IFwiZGVsdGFNb2RlXCIgaW4gZSkpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuICAgICAgICAgICAgaWYgKFwiZGV0YWlsXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuZGV0YWlsICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcIndoZWVsRGVsdGFZXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJ3aGVlbERlbHRhWFwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLndoZWVsRGVsdGFYICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlZm94IDwgMTcgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcmVsYXRlZCB0byBET01Nb3VzZVNjcm9sbCBldmVudFxuICAgICAgICAgICAgaWYgKFwiYXhpc1wiIGluIGUgJiYgZS5heGlzID09PSBlLkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcbiAgICAgICAgICAgIGlmIChcImRlbHRhWVwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZGVsdGFYXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTmVlZCB0byBjb252ZXJ0IGxpbmVzIGFuZCBwYWdlcyB0byBwaXhlbHMgaWYgd2UgYXJlblwidCBhbHJlYWR5IGluIHBpeGVsc1xuICAgICAgICAgICAgLy8gVGhlcmUgYXJlIHRocmVlIGRlbHRhIG1vZGVzOlxuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAwIGlzIGJ5IHBpeGVscywgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAxIGlzIGJ5IGxpbmVzXG4gICAgICAgICAgICAvLyAgICogZGVsdGFNb2RlIDIgaXMgYnkgcGFnZXNcbiAgICAgICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gX1V0aWxzRE9NMi5kZWZhdWx0LmdldExpbmVIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGVsdGFNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlZ2lodCA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5nZXRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB3aW5kb3doZWdpaHQ7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogd2luZG93aGVnaWh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YVkgPT09IDAgPyBkZWx0YVggOiBkZWx0YVk7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBNb3VzZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW91c2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNNb3VzZS50c1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHNjcmVlblxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YXZhaWxhYmxlU2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfSwgY29sb3JEZXB0aDogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIHNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19fVxuICAgICAqL1xuICAgIFNjcmVlbi5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNpemU6IFNjcmVlbi5nZXRBdmFpbGFibGVTaXplcygpLFxuICAgICAgICAgICAgY29sb3JEZXB0aDogU2NyZWVuLmdldENvbG9yRGVwdGgoKSxcbiAgICAgICAgICAgIHBpeGVsUmF0aW86IFNjcmVlbi5nZXRQaXhlbFJhdGlvKCksXG4gICAgICAgICAgICBzaXplOiBTY3JlZW4uZ2V0U2l6ZXMoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBoZWlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi53aWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHdpZHRoXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldEF2YWlsYWJsZVdpZHRoID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4uYXZhaWxXaWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlU2l6ZXMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVTaXplcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodCgpLFxuICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRBdmFpbGFibGVXaWR0aCgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHBpeGVsIHJhdGlvXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHZhciByYXRpbyA9IDE7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhdGlvO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBjb2xvciBkZXB0aFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldENvbG9yRGVwdGggPSBmdW5jdGlvbiBnZXRDb2xvckRlcHRoKCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmNvbG9yRGVwdGg7XG4gICAgfTtcblxuICAgIHJldHVybiBTY3JlZW47XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc1NjcmVlbi50c1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHN5c3RlbVxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3lzdGVtKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3lzdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3lzdGVtIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIFN5c3RlbS5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFN5c3RlbS5nZXROYW1lKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBTeXN0ZW0uZ2V0VmVyc2lvbigpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICB2YXIgb3MgPSBcIlwiO1xuICAgICAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAxMFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA4LjFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBOVCA2LjAvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFZpc3RhXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1dpbmRvd3MgTlQgNS4yLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBTZXJ2ZXIgMjAwM1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFhQXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyAyMDAwXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgTUVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA5OFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgOTVcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBOVCA0LjBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBDRS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgQ0VcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luMTYvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDMuMTFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvQW5kcm9pZC8sXG4gICAgICAgICAgICBzOiBcIkFuZHJvaWRcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvT3BlbkJTRC8sXG4gICAgICAgICAgICBzOiBcIk9wZW4gQlNEXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1N1bk9TLyxcbiAgICAgICAgICAgIHM6IFwiU3VuIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhMaW51eHxYMTEpLyxcbiAgICAgICAgICAgIHM6IFwiTGludXhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpLyxcbiAgICAgICAgICAgIHM6IFwiaU9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL01hYyBPUyBYLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TIFhcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpLyxcbiAgICAgICAgICAgIHM6IFwiTWFjIE9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1FOWC8sXG4gICAgICAgICAgICBzOiBcIlFOWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9VTklYLyxcbiAgICAgICAgICAgIHM6IFwiVU5JWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9CZU9TLyxcbiAgICAgICAgICAgIHM6IFwiQmVPU1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9PU1xcLzIvLFxuICAgICAgICAgICAgczogXCJPUy8yXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLyxcbiAgICAgICAgICAgIHM6IFwiU2VhcmNoIEJvdFwiXG4gICAgICAgIH1dO1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjbGllbnRTdHJpbmdzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNzID0gX3JlZjtcblxuICAgICAgICAgICAgaWYgKGNzLnIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIG9zID0gY3MucztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgT1MgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgU3lzdGVtLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICAgICAgICB2YXIgb3MgPSBTeXN0ZW0uZ2V0TmFtZSgpO1xuICAgICAgICB2YXIgb3NWZXJzaW9uID0gXCJcIjtcbiAgICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xuICAgICAgICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XG4gICAgICAgICAgICBvcyA9IFwiV2luZG93c1wiO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob3MpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNYWMgT1MgWFwiOlxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQW5kcm9pZFwiOlxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaU9TXCI6XG4gICAgICAgICAgICAgICAgdmFyIHJlZyA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb24gPSByZWdbMV0gKyBcIi5cIiArIHJlZ1syXSArIFwiLlwiICsgKHJlZ1szXSB8fCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9zVmVyc2lvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN5c3RlbTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3lzdGVtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzU3lzdGVtLnRzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNCcm93c2VyID0gcmVxdWlyZShcIi4vVXRpbHNCcm93c2VyXCIpO1xuXG52YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4vVXRpbHNTY3JlZW5cIik7XG5cbnZhciBfVXRpbHNTY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTY3JlZW4pO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4vVXRpbHNTeXN0ZW1cIik7XG5cbnZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVc2VyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXIgaW5mb1xuICAgICAqIEByZXR1cm4ge3ticm93c2VyOiB7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ30sIHNjcmVlbjoge2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fSwgc3lzdGVtOiB7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fX1cbiAgICAgKi9cbiAgICBVc2VyLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnJvd3NlcjogX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzY3JlZW46IF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzeXN0ZW06IF9VdGlsc1N5c3RlbTIuZGVmYXVsdC5nZXRJbmZvKClcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFVzZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVzZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNVc2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MmMwNWI0MGM3OWFjMDAxMDIzYiIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2xpYi9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtKQUFpSjtBQUNqSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQjs7Ozs7O0FDMUJBLDBDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzR0FBcUcsbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFM1E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLHVDQUF1QyxnQkFBZ0I7O0FBRTlGLG1EQUFrRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXhKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtREFBa0QsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV4SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLGdCQUFnQiw4QkFBOEIsaURBQWlEO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtREFBa0QsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV4SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVTtBQUNWLDRKQUEySjtBQUMzSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLHVDQUF1QyxnQkFBZ0I7O0FBRTlGLG1EQUFrRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXhKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsVUFBVSxrREFBa0QsV0FBVyxnQkFBZ0IsOEJBQThCLGlEQUFpRCwrQkFBK0IsV0FBVztBQUNsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNENBQTJDLGNBQWMsbTcwTCIsImZpbGUiOiIuL2Rpc3Qvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVXRpbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzJjMDViNDBjNzlhYzAwMTAyM2IiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4vaW5kZXguaHRtbFwiKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi8uLi9saWIvVXRpbHMuanNcIik7XG5mdW5jdGlvbiBkdW1wKGNsYXNzRnVuY3Rpb24sIHByZWYpIHtcbiAgICB3aW5kb3cuZG9jdW1lbnQud3JpdGUoXCI8Yj5cIiArIHByZWYgKyBjbGFzc0Z1bmN0aW9uLm5hbWUgKyBcIjwvYj4gPGJyLz5cIik7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjbGFzc0Z1bmN0aW9uKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAwICYmIGtleXNbMF0gIT09IFwiMFwiKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGtleXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJvcCA9IF9yZWY7XG5cbiAgICAgICAgICAgIGR1bXAoY2xhc3NGdW5jdGlvbltwcm9wXSwgcHJlZiArIGNsYXNzRnVuY3Rpb24ubmFtZSArIFwiLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmR1bXAoVXRpbHMsIFwiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpbXBsZS1qYXZhc2NyaXB0LWV4YW1wbGUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaW1wbGUtamF2YXNjcmlwdC1leGFtcGxlL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJVdGlsc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJVdGlsc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cbi8qKiovIH0sXG4vKiAxICovLFxuLyogMiAqLyxcbi8qIDMgKi8sXG4vKiA0ICovLFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0dmFyIF9VdGlsc0FuaW1hdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHR2YXIgX1V0aWxzQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQW5pbWF0aW9uKTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQnJvd3Nlcik7XG5cdFxuXHR2YXIgX1V0aWxzQ29va2llID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0XG5cdHZhciBfVXRpbHNDb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNDb29raWUpO1xuXHRcblx0dmFyIF9VdGlsc0RvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdFxuXHR2YXIgX1V0aWxzRG9jdW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNEb2N1bWVudCk7XG5cdFxuXHR2YXIgX1V0aWxzRE9NID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHR2YXIgX1V0aWxzRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzRE9NKTtcblx0XG5cdHZhciBfVXRpbHNNb3VzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRcblx0dmFyIF9VdGlsc01vdXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzTW91c2UpO1xuXHRcblx0dmFyIF9VdGlsc1NjcmVlbiA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHRcblx0dmFyIF9VdGlsc1NjcmVlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1NjcmVlbik7XG5cdFxuXHR2YXIgX1V0aWxzU3lzdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cdFxuXHR2YXIgX1V0aWxzU3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU3lzdGVtKTtcblx0XG5cdHZhciBfVXRpbHNVc2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cdFxuXHR2YXIgX1V0aWxzVXNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1VzZXIpO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdC8qKlxuXHQgKiBHbG9iYWwgVXRpbHMgY2xhc3Ncblx0ICovXG5cdHZhciBVdGlscyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFV0aWxzKCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG5cdCAgICB9XG5cdFxuXHQgICAgVXRpbHMud2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FuZ2UpIHtcblx0ICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKG1lc3NhbmdlKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYW5nZTtcblx0ICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZXNzYW5nZSk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FuZ2U7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBAZGVwcmVjYXRlZCBVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZC5cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdCAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIFV0aWxzLndhcm4oXCJVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZC5cIik7XG5cdCAgICAgICAgcmV0dXJuIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSwgZG9tRG9jdW1lbnQsIHNob3dGb3JjZSk7XG5cdCAgICB9O1xuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQGRlcHJlY2F0ZWQgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZC5cblx0ICAgICAqL1xuXHQgICAgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdCAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIFV0aWxzLndhcm4oXCJVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2UgVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kLlwiKTtcblx0ICAgICAgICByZXR1cm4gVXRpbHMuRE9NLmZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSwgZG9tRG9jdW1lbnQsIHNob3dGb3JjZSk7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBUcmFuc2ZlciBzdGF0aWMgbWV0aG9kcyBpbnRvIHRoZSBvYmplY3Rcblx0ICAgICAqIEBwYXJhbSByZWFsT2JqZWN0XG5cdCAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgVXRpbHMuaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzID0gZnVuY3Rpb24gaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzKHJlYWxPYmplY3QsIGNsYXNzTmFtZSkge1xuXHQgICAgICAgIGlmICghIXJlYWxPYmplY3QgJiYgKHR5cGVvZiByZWFsT2JqZWN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocmVhbE9iamVjdCkpID09PSBcIm9iamVjdFwiKSB7XG5cdCAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgc3RhdGljQ2xhc3MgPSByZWFsT2JqZWN0LmNvbnN0cnVjdG9yO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0aWNDbGFzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBPYmplY3Qua2V5cyhzdGF0aWNDbGFzcyk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZHMgJiYgbWV0aG9kcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSByZXR1cm4gXCJicmVha1wiO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWxPYmplY3RbbWV0aG9kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxPYmplY3RbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0aWNDbGFzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMud2FybihcIlRoYXQgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBcIiArIChjbGFzc05hbWUgfHwgc3RhdGljQ2xhc3MgJiYgc3RhdGljQ2xhc3MubmFtZSB8fCBcIlVua25vd25cIikgKyBcIi5cIiArIG1ldGhvZCArIFwiIG1ldGhvZC5cIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRpY0NsYXNzW21ldGhvZF0uYXBwbHkoc3RhdGljQ2xhc3MsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgfTtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG1ldGhvZHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblx0XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JldDIgPSBfbG9vcCgpO1xuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcmV0MiA9PT0gXCJicmVha1wiKSBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSkoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgY2FsbCBzdGFjayB0cmFjZVxuXHQgICAgICogQHJldHVybiBBcnJheTxPYmplY3Q+XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgVXRpbHMuc3RhY2sgPSBmdW5jdGlvbiBzdGFjaygpIHtcblx0ICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuXHQgICAgICAgIHJldHVybiBlICYmIGUuc3RhY2sgJiYgZS5zdGFjay5zcGxpdChcIlxcblwiKS5zbGljZSg1KS5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICAgICAgaWYgKCFzKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge307XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIG1hdGNoID0gL14oLiopQCguKilcXC5qczooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IC8oW15cXC88XSspL2lnLmV4ZWMobWF0Y2hbMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IG1hdGNoWzFdWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzJdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKGh0dHB8aHR0cHMpOihbXjpdKyk6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzVdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbM10gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFs0XSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gKyBcIjpcIiArIG1hdGNoWzJdIHx8IFwiXCJcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKC4qKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzNdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoW14oXSspXFxzXFwoKC4qKTooWzAtOV0rKTooWzAtOV0rKVxcKSQvaWcuZXhlYyhzKTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzNdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoLiopOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuXHQgICAgICAgICAgICBpZiAobWF0Y2gpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFszXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzFdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbMl0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiXCJcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHM7XG5cdCAgICAgICAgfSkgfHwgW107XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgcmFuZG9tIElEXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgVXRpbHMuZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cdCAgICB9O1xuXHRcblx0ICAgIHJldHVybiBVdGlscztcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVXRpbHM7XG5cdFxuXHRVdGlscy5BbmltYXRpb24gPSBfVXRpbHNBbmltYXRpb24yLmRlZmF1bHQ7XG5cdFV0aWxzLkJyb3dzZXIgPSBfVXRpbHNCcm93c2VyMi5kZWZhdWx0O1xuXHRVdGlscy5Db29raWUgPSBfVXRpbHNDb29raWUyLmRlZmF1bHQ7XG5cdFV0aWxzLkRPTSA9IF9VdGlsc0RPTTIuZGVmYXVsdDtcblx0VXRpbHMuRG9jdW1lbnQgPSBfVXRpbHNEb2N1bWVudDIuZGVmYXVsdDtcblx0VXRpbHMuTW91c2UgPSBfVXRpbHNNb3VzZTIuZGVmYXVsdDtcblx0VXRpbHMuU2NyZWVuID0gX1V0aWxzU2NyZWVuMi5kZWZhdWx0O1xuXHRVdGlscy5TeXN0ZW0gPSBfVXRpbHNTeXN0ZW0yLmRlZmF1bHQ7XG5cdFV0aWxzLlVzZXIgPSBfVXRpbHNVc2VyMi5kZWZhdWx0O1xuXHRVdGlscy5XaW5kb3cgPSBfVXRpbHNXaW5kb3cyLmRlZmF1bHQ7XG5cdG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX1V0aWxzQW5pbWF0aW9uRWFzaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdHZhciBfVXRpbHNBbmltYXRpb25FYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNBbmltYXRpb25FYXNpbmcpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgQW5pbWF0aW9uID0gZnVuY3Rpb24gQW5pbWF0aW9uKCkge1xuXHQgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRpb24pO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gQW5pbWF0aW9uO1xuXHRcblx0QW5pbWF0aW9uLkVhc2luZyA9IF9VdGlsc0FuaW1hdGlvbkVhc2luZzIuZGVmYXVsdDtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHQvKipcblx0ICogRGlmZmVyZW50IHRpbWUgYW5pbWF0aW9uIGZ1bmN0aW9uc1xuXHQgKi9cblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIEVhc2luZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEVhc2luZygpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRWFzaW5nKTtcblx0ICAgIH1cblx0XG5cdCAgICBFYXNpbmcuaXNWYWxpZFBhcmFtcyA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbXModCwgYiwgYywgZCwgcykge1xuXHQgICAgICAgIHJldHVybiB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZCA9PT0gXCJudW1iZXJcIiAmJiAodHlwZW9mIHMgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHMgPT09IFwibnVtYmVyXCIpICYmIHQgPCBkO1xuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuc3dpbmcgPSBmdW5jdGlvbiBzd2luZyh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBFYXNpbmdbRWFzaW5nLmRlZl0odCwgYiwgYywgZCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5RdWFkID0gZnVuY3Rpb24gZWFzZUluUXVhZCh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VPdXRRdWFkID0gZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoLS10ICogKHQgLSAyKSAtIDEpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbkN1YmljID0gZnVuY3Rpb24gZWFzZUluQ3ViaWModCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZU91dEN1YmljID0gZnVuY3Rpb24gZWFzZU91dEN1YmljKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5PdXRDdWJpYyA9IGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5RdWFydCA9IGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlT3V0UXVhcnQgPSBmdW5jdGlvbiBlYXNlT3V0UXVhcnQodCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluT3V0UXVhcnQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gLWMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluUXVpbnQgPSBmdW5jdGlvbiBlYXNlSW5RdWludCh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VPdXRRdWludCA9IGZ1bmN0aW9uIGVhc2VPdXRRdWludCh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5PdXRRdWludCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluU2luZSA9IGZ1bmN0aW9uIGVhc2VJblNpbmUodCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlT3V0U2luZSA9IGZ1bmN0aW9uIGVhc2VPdXRTaW5lKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbk91dFNpbmUgPSBmdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluRXhwbyA9IGZ1bmN0aW9uIGVhc2VJbkV4cG8odCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdCA9PT0gMCA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZU91dEV4cG8gPSBmdW5jdGlvbiBlYXNlT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0ID09PSBkID8gYiArIGMgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5PdXRFeHBvID0gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIGlmICh0ID09PSAwKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAodCA9PT0gZCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5DaXJjID0gZnVuY3Rpb24gZWFzZUluQ2lyYyh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlT3V0Q2lyYyA9IGZ1bmN0aW9uIGVhc2VPdXRDaXJjKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbk91dENpcmMgPSBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbkVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlSW5FbGFzdGljKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuXHQgICAgICAgICAgICB2YXIgcCA9IDA7XG5cdCAgICAgICAgICAgIHZhciBhID0gYztcblx0ICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICgodCAvPSBkKSA9PT0gMSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICghcCkge1xuXHQgICAgICAgICAgICAgICAgcCA9IGQgKiAuMztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG5cdCAgICAgICAgICAgICAgICBhID0gYztcblx0ICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VPdXRFbGFzdGljID0gZnVuY3Rpb24gZWFzZU91dEVsYXN0aWModCwgYiwgYywgZCkge1xuXHQgICAgICAgIGlmIChFYXNpbmcuaXNWYWxpZFBhcmFtcyh0LCBiLCBjLCBkKSkge1xuXHQgICAgICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG5cdCAgICAgICAgICAgIHZhciBwID0gMDtcblx0ICAgICAgICAgICAgdmFyIGEgPSBjO1xuXHQgICAgICAgICAgICBpZiAodCA9PT0gMCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYiArIGM7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKCFwKSB7XG5cdCAgICAgICAgICAgICAgICBwID0gZCAqIC4zO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcblx0ICAgICAgICAgICAgICAgIGEgPSBjO1xuXHQgICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbk91dEVsYXN0aWMgPSBmdW5jdGlvbiBlYXNlSW5PdXRFbGFzdGljKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuXHQgICAgICAgICAgICB2YXIgcCA9IDA7XG5cdCAgICAgICAgICAgIHZhciBhID0gYztcblx0ICAgICAgICAgICAgaWYgKHQgPT09IDApIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPT09IDIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBiICsgYztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAoIXApIHtcblx0ICAgICAgICAgICAgICAgIHAgPSBkICogKC4zICogMS41KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAoYSA8IE1hdGguYWJzKGMpKSB7XG5cdCAgICAgICAgICAgICAgICBhID0gYztcblx0ICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKHQgPCAxKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHRcblx0ICAgIEVhc2luZy5lYXNlSW5CYWNrID0gZnVuY3Rpb24gZWFzZUluQmFjayh0LCBiLCBjLCBkLCBzKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG5cdCAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHMgPSAxLjcwMTU4O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogKChzICsgMSkgKiB0IC0gcykgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZU91dEJhY2sgPSBmdW5jdGlvbiBlYXNlT3V0QmFjayh0LCBiLCBjLCBkLCBzKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQsIHMpKSB7XG5cdCAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHMgPSAxLjcwMTU4O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbk91dEJhY2sgPSBmdW5jdGlvbiBlYXNlSW5PdXRCYWNrKHQsIGIsIGMsIGQsIHMpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCwgcykpIHtcblx0ICAgICAgICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgcyA9IDEuNzAxNTg7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VJbkJvdW5jZSA9IGZ1bmN0aW9uIGVhc2VJbkJvdW5jZSh0LCBiLCBjLCBkKSB7XG5cdCAgICAgICAgaWYgKEVhc2luZy5pc1ZhbGlkUGFyYW1zKHQsIGIsIGMsIGQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjIC0gRWFzaW5nLmVhc2VPdXRCb3VuY2UoZCAtIHQsIDAsIGMsIGQpICsgYjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgRWFzaW5nLmVhc2VPdXRCb3VuY2UgPSBmdW5jdGlvbiBlYXNlT3V0Qm91bmNlKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgaWYgKCh0IC89IGQpIDwgMSAvIDIuNzUpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XG5cdCAgICAgICAgICAgIH0gZWxzZSBpZiAodCA8IDIgLyAyLjc1KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAuNzUpICsgYjtcblx0ICAgICAgICAgICAgfSBlbHNlIGlmICh0IDwgMi41IC8gMi43NSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIC45Mzc1KSArIGI7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjYyNSAvIDIuNzUpICogdCArIC45ODQzNzUpICsgYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICBFYXNpbmcuZWFzZUluT3V0Qm91bmNlID0gZnVuY3Rpb24gZWFzZUluT3V0Qm91bmNlKHQsIGIsIGMsIGQpIHtcblx0ICAgICAgICBpZiAoRWFzaW5nLmlzVmFsaWRQYXJhbXModCwgYiwgYywgZCkpIHtcblx0ICAgICAgICAgICAgaWYgKHQgPCBkIC8gMikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIEVhc2luZy5lYXNlSW5Cb3VuY2UodCAqIDIsIDAsIGMsIGQpICogLjUgKyBiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiBFYXNpbmcuZWFzZU91dEJvdW5jZSh0ICogMiAtIGQsIDAsIGMsIGQpICogLjUgKyBjICogLjUgKyBiO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBOYU47XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gRWFzaW5nO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBFYXNpbmc7XG5cdFxuXHRFYXNpbmcuZGVmID0gXCJlYXNlT3V0UXVhZFwiO1xuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGJyb3dzZXJcblx0ICovXG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBCcm93c2VyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gQnJvd3NlcigpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3Nlcik7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgYnJvd3NlciBpbmZvXG5cdCAgICAgKiBAcmV0dXJuIHt7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ319XG5cdCAgICAgKi9cblx0ICAgIEJyb3dzZXIuZ2V0SW5mbyA9IGZ1bmN0aW9uIGdldEluZm8oKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYnJvd3NlcjogQnJvd3Nlci5nZXROYW1lKCksXG5cdCAgICAgICAgICAgIG1vYmlsZTogQnJvd3Nlci5pc01vYmlsZSgpLFxuXHQgICAgICAgICAgICB2ZXJzaW9uOiBCcm93c2VyLmdldFZlcnNpb24oKVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgYnJvd3NlciBuYW1lXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcblx0ICAgICAgICB2YXIgYnJvd3NlciA9IHZvaWQgMDtcblx0ICAgICAgICBpZiAoQnJvd3Nlci5pc09wZXJhKCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPcGVyYU5ldygpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBcIk9wZXJhXCI7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUVOZXcoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNDaHJvbWUoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gXCJDaHJvbWVcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IFwiRmlyZWZveFwiO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc1NhZmFyaSgpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBcIlNhZmFyaVwiO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc090aGVyKCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IEJyb3dzZXIuZ2V0T3RoZXJOYW1lKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBicm93c2VyO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSB2b2lkIDA7XG5cdCAgICAgICAgaWYgKEJyb3dzZXIuaXNPcGVyYSgpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE9wZXJhVmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc09wZXJhTmV3KCkpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uKCk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE1TSUVWZXJzaW9uKCk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRU5ldygpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uKCk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzQ2hyb21lKCkpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0Q2hyb21lVmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0ZpcmVmb3goKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRGaXJlZm94VmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc1NhZmFyaSgpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldFNhZmFyaVZlcnNpb24oKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPdGhlcigpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE90aGVyVmVyc2lvbigpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdmVyc2lvbjtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIFRyaW0gYnJvd3NlciB2ZXJzaW9uXG5cdCAgICAgKiBAcGFyYW0gdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIudHJpbVZlcnNpb24gPSBmdW5jdGlvbiB0cmltVmVyc2lvbih2ZXJzaW9uKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG5cdCAgICAgICAgICAgIHZhciBjaGFycyA9IFtcIjtcIiwgXCIgXCIsIFwiKVwiXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY2hhcnMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblx0XG5cdCAgICAgICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG5cdCAgICAgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBfcmVmO1xuXHRcblx0ICAgICAgICAgICAgICAgIHZhciBpeCA9IHZlcnNpb24uaW5kZXhPZihjaGFyKTtcblx0ICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1vYmlsZVxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzTW9iaWxlID0gZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG5cdCAgICAgICAgcmV0dXJuICgvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QobmF2aWdhdG9yLmFwcFZlcnNpb24pXG5cdCAgICAgICAgKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc09wZXJhID0gZnVuY3Rpb24gaXNPcGVyYSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgIT09IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IG9wZXJhIGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0T3BlcmFWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKTtcblx0ICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xuXHQgICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG5cdCAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIG5ldyBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNPcGVyYU5ldyA9IGZ1bmN0aW9uIGlzT3BlcmFOZXcoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9QUlwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgb3BlcmEgbmV3IGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFOZXdWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA0KTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzTVNJRSA9IGZ1bmN0aW9uIGlzTVNJRSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgbXNpZSBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE1TSUVWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRVZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgbmV3IGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc01TSUVOZXcgPSBmdW5jdGlvbiBpc01TSUVOZXcoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnQvXCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBtc2llIG5ldyBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRU5ld1ZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJydjpcIikgKyAzKTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIGNocm9tZSBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNDaHJvbWUgPSBmdW5jdGlvbiBpc0Nocm9tZSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBjaHJvbWUgYnJvd3NlciB2ZXJzaW9uXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uID0gZnVuY3Rpb24gZ2V0Q2hyb21lVmVyc2lvbigpIHtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO1xuXHQgICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG5cdCAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBDaGVjayBpZiBpdCBpcyBzYWZhcmkgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzU2FmYXJpID0gZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID09PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzYWZhcmkgYnJvd3NlciB2ZXJzaW9uXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uID0gZnVuY3Rpb24gZ2V0U2FmYXJpVmVyc2lvbigpIHtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpO1xuXHQgICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG5cdCAgICAgICAgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVmVyc2lvblwiKTtcblx0ICAgICAgICBpZiAodmVyT2Zmc2V0ICE9PSAtMSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgZmlyZWZveCBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNGaXJlZm94ID0gZnVuY3Rpb24gaXNGaXJlZm94KCkge1xuXHQgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBmaXJlZm94IGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24gPSBmdW5jdGlvbiBnZXRGaXJlZm94VmVyc2lvbigpIHtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKTtcblx0ICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuXHQgICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgb3RoZXIgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzT3RoZXIgPSBmdW5jdGlvbiBpc090aGVyKCkge1xuXHQgICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcblx0ICAgICAgICByZXR1cm4gbmFtZU9mZnNldCA8IHZlck9mZnNldDtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBvdGhlciBicm93c2VyIG5hbWVcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE90aGVyTmFtZSA9IGZ1bmN0aW9uIGdldE90aGVyTmFtZSgpIHtcblx0ICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG5cdCAgICAgICAgdmFyIGJyb3dzZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyhuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQpO1xuXHQgICAgICAgIGlmIChicm93c2VyLnRvTG93ZXJDYXNlKCkgPT09IGJyb3dzZXIudG9VcHBlckNhc2UoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBicm93c2VyO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IG90aGVyIGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0T3RoZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3RoZXJWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciBuYW1lT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIiBcIikgKyAxO1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcblx0ICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDEpO1xuXHQgICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgYnJvd3NlciBzdXBwb3J0XG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcblx0ICAgICAgICByZXR1cm4gIUJyb3dzZXIuaXNNU0lFKCkgfHwgcGFyc2VJbnQoQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpLCAxMCkgPiA4O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgV2ViS2l0IGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc1dlYktpdCA9IGZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuXHQgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBcHBsZVdlYktpdC9cIikgIT09IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgR2Vja28gYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzR2Vja28gPSBmdW5jdGlvbiBpc0dlY2tvKCkge1xuXHQgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJHZWNrb1wiKSA+IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIktIVE1MXCIpID09PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIEFuZHJvaWQgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzQW5kcm9pZCA9IGZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSA+IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgTGludXggYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzTGludXggPSBmdW5jdGlvbiBpc0xpbnV4KCkge1xuXHQgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJMaW51eFwiKSA+IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgaVBhZCBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNUYWJsZXRQQyA9IGZ1bmN0aW9uIGlzVGFibGV0UEMoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQYWRcIikgPiAtMTtcblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIEJyb3dzZXI7XG5cdH0oKTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IEJyb3dzZXI7XG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHQvKipcblx0ICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBjb29raWVcblx0ICovXG5cdFxuXHR2YXIgQ29va2llID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIENvb2tpZSgpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb29raWUpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVGhlIG1ldGhvZCByZXR1cm5zIHRoZSBmbGFnIHdoZXRoZXIgc3VwcG9ydGVkIHRoaXMgc3RvcmFnZSB0eXBlIG9yIG5vdFxuXHQgICAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgICAqL1xuXHQgIENvb2tpZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkb2N1bWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkb2N1bWVudC5jb29raWUgPT09IFwic3RyaW5nXCI7XG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBUaGUgbWV0aG9kIHNldHMgdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgaGFzIGJlZW4gc2V0XG5cdCAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cblx0ICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG5cdCAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XG5cdCAgICogQHBhcmFtIGV4cGlyZXMge251bWJlcn1cblx0ICAgKiBAcGFyYW0gcGF0aCB7c3RyaW5nfVxuXHQgICAqIEBwYXJhbSBkb21haW4ge3N0cmluZ31cblx0ICAgKiBAcGFyYW0gc2VjdXJlIHtib29sZWFufVxuXHQgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICovXG5cdFxuXHRcblx0ICBDb29raWUuc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXksIHZhbHVlKSB7XG5cdCAgICB2YXIgZXhwaXJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMzA7XG5cdCAgICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogXCIvXCI7XG5cdCAgICB2YXIgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBsb2NhdGlvbi5ob3N0bmFtZTtcblx0ICAgIHZhciBzZWN1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IGxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiO1xuXHRcblx0ICAgIHRyeSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG5cdCAgICAgICAqL1xuXHQgICAgICBpZiAodHlwZW9mIGNoZWNrU3VwcG9ydCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiBDb29raWUucmVnVmFsaWRLZXkudGVzdChrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZXhwaXJlcyA9PT0gXCJudW1iZXJcIiAmJiBleHBpcmVzIDwgMzY1ICYmIHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBkb21haW4gPT09IFwic3RyaW5nXCIgJiYgZG9tYWluLmluZGV4T2YobG9jYXRpb24uaG9zdG5hbWUpICE9PSAtMSAmJiB0eXBlb2Ygc2VjdXJlID09PSBcImJvb2xlYW5cIiAmJiBzZWN1cmUgPT09IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBWYWxpZGF0ZSBpbnB1dCBkYXRhXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIHUgPSBVUkwucGFyc2UoXCJodHRwOi8vXCIgKyBkb21haW4gKyBwYXRoKTtcblx0ICAgICAgICBpZiAodS5ob3N0bmFtZSA9PT0gZG9tYWluIHx8IHUucGF0aCA9PT0gcGF0aCkge1xuXHQgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogU2F2ZSBjb29raWVzIGZvciAzMCBkYXlzXG5cdCAgICAgICAgICAgICAqIEB0eXBlIHtEYXRlfVxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHQgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBleHBpcmVzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdCAgICAgICAgICAgIHZhciBleHAgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFbmNvZGUgdmFsdWUgZm9yIHN0b3JlXG5cdCAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBXcml0aW5nIHZhbHVlIHRvIHRoZSBkb2N1bWVudCBjb29raWUgc3RvcmFnZVxuXHQgICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIChleHAgPyBcIjsgZXhwaXJlcz1cIiArIGV4cCA6IFwiXCIpICsgKHBhdGggPyBcIjsgcGF0aD1cIiArIHBhdGggOiBcIlwiKSArIChkb21haW4gPyBcIjsgZG9tYWluPVwiICsgZG9tYWluIDogXCJcIikgKyAoc2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJZiBhbGwgb2sgcmV0dXJuIHRydWVcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHJldHVybiBDb29raWUuZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkgPT09IHZhbHVlO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAqL1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBUaGUgbWV0aG9kIHJlYWRzIHRoZSB2YWx1ZSBhbmQgcmV0dXJucyBpdCBvciByZXR1cm5zIGZhbHNlIGlmIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdFxuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuXHQgICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cblx0ICAgKi9cblx0XG5cdFxuXHQgIENvb2tpZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcblx0ICAgICAgICovXG5cdCAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIENvb2tpZS5yZWdWYWxpZEtleS50ZXN0KGtleSkpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIEdldCB0aGUgYXJyYXkgZnJvbSBkb2N1bWVudCBjb29raWUgc3BsaXQgYnkgO1xuXHQgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICB2YXIgYXJyQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG5cdCAgICAgICAgICAgKi9cblx0ICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFyckNvb2tpZSwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0ICAgICAgICAgICAgdmFyIF9yZWY7XG5cdFxuXHQgICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcblx0ICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuXHQgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdmFyIGkgPSBfcmVmO1xuXHRcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFRyaW0gYW5kIHNwbGl0IGVhY2ggY29va2llIGJ5ID0gZm9yIGtleSB2YWx1ZSBwYXJlXG5cdCAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHZhciB2ID0gaS50cmltKCkuc3BsaXQoXCI9XCIsIDIpO1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSWYgaXQgaXMgY29ycmVjdCBjb29raWUga2V5IHJldHVybiB0aGUgdmFsdWVcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGlmICh2WzBdID09PSBrZXkpIHtcblx0ICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgKiBJZiB0aGUgdmFsdWUgd2FzIGZvdW5kIHJldHVybiB0aGUgdmFsdWVcblx0ICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZbMV0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgbm90IGZvdW5kIHJldHVybiBmYWxzZVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2Vcblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAqL1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBUaGUgbWV0aG9kIHJlbW92ZXMgdGhlIHZhbHVlIGFuZCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3Rcblx0ICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuXHQgICAqIEBwYXJhbSBrZXkge3N0cmluZ31cblx0ICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgKi9cblx0XG5cdFxuXHQgIENvb2tpZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShjaGVja1N1cHBvcnQsIGtleSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcblx0ICAgICAgICovXG5cdCAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIiAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIENvb2tpZS5yZWdWYWxpZEtleS50ZXN0KGtleSkpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIFNldCBlbXB0eSBvdmVyZHVlIHZhbHVlIGJ5IGtleVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICBDb29raWUuc2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSwgXCJcIiwgLTEpO1xuXHQgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgKiBJZiBhbGwgb2sgcmV0dXJuIHRydWVcblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSA9PT0gZmFsc2U7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2Vcblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBpbnB1dCBkYXRhIGlzIG5vdCB2YWxpZFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAqL1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGFycmF5IG9mIHN0cmluZyBvZiBhdmFpbGFibGUga2V5c1xuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHJldHVybnMge3N0cmluZ1tdfVxuXHQgICAqL1xuXHRcblx0XG5cdCAgQ29va2llLmdldEtleXMgPSBmdW5jdGlvbiBnZXRLZXlzKGNoZWNrU3VwcG9ydCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcblx0ICAgICAgICovXG5cdCAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIikge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogVGhlIGFycmF5IG9mIGF2YWlsYWJsZSBrZXlzXG5cdCAgICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG5cdCAgICAgICAgICAgKi9cblx0ICAgICAgICAgIHZhciBhcnJLZXlzID0gW107XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIEdldCB0aGUgYXJyYXkgZnJvbSBkb2N1bWVudCBjb29raWUgc3BsaXQgYnkgO1xuXHQgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICB2YXIgYXJyQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG5cdCAgICAgICAgICAgKi9cblx0ICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBhcnJDb29raWUsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuXHQgICAgICAgICAgICB2YXIgX3JlZjI7XG5cdFxuXHQgICAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG5cdCAgICAgICAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcblx0ICAgICAgICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuXHQgICAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICB2YXIgaSA9IF9yZWYyO1xuXHRcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFRyaW0gYW5kIHNwbGl0IGVhY2ggY29va2llIGJ5ID0gZm9yIGtleSB2YWx1ZSBwYXJlXG5cdCAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHZhciB2ID0gaS50cmltKCkuc3BsaXQoXCI9XCIsIDIpO1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQWRkIGtleSB0byB0aGUgbGlzdFxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaWYgKHZbMF0pIHtcblx0ICAgICAgICAgICAgICBhcnJLZXlzLnB1c2godlswXSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIHJldHVybiBhcnJLZXlzO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAgICAgKi9cblx0ICAgICAgICAgIHJldHVybiBbXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSWYgaW5wdXQgZGF0YSBpcyBub3QgdmFsaWRcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXR1cm4gW107XG5cdCAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuXHQgICAgICAgKi9cblx0ICAgICAgcmV0dXJuIFtdO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyoqXG5cdCAgICogVGhlIG1ldGhvZCBjbGVhbnMgdGhlIHN0b3JhZ2UgYW5kIHJldHVybiB0cnVlIGlmIGl0IGlzIGVtcHR5XG5cdCAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cblx0ICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgKi9cblx0XG5cdFxuXHQgIENvb2tpZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGNoZWNrU3VwcG9ydCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIFZhbGlkYXRlIGlucHV0IGRhdGFcblx0ICAgICAgICovXG5cdCAgICAgIGlmICh0eXBlb2YgY2hlY2tTdXBwb3J0ID09PSBcImJvb2xlYW5cIikge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICAgIHZhciBhcnJLZXlzID0gQ29va2llLmdldEtleXMoY2hlY2tTdXBwb3J0KTtcblx0ICAgICAgICAgIGlmIChhcnJLZXlzKSB7XG5cdCAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhcnJLZXlzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0ICAgICAgICAgICAgICB2YXIgX3JlZjM7XG5cdFxuXHQgICAgICAgICAgICAgIGlmIChfaXNBcnJheTMpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcblx0ICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG5cdCAgICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgICB2YXIgaSA9IF9yZWYzO1xuXHRcblx0ICAgICAgICAgICAgICBDb29raWUucmVtb3ZlSXRlbShjaGVja1N1cHBvcnQsIGkpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICByZXR1cm4gQ29va2llLmdldEtleXMoY2hlY2tTdXBwb3J0KS5sZW5ndGggPT09IDA7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2Vcblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIGlucHV0IGRhdGEgaXMgbm90IHZhbGlkXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2Vcblx0ICAgICAgICovXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9O1xuXHRcblx0ICByZXR1cm4gQ29va2llO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBDb29raWU7XG5cdFxuXHRDb29raWUucmVnVmFsaWRLZXkgPSBuZXcgUmVnRXhwKFwiKFthLXpBLVowLTlfLV17MSx9KVwiLCBcImlcIik7XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG5cdC8vXG5cdC8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG5cdC8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblx0Ly8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG5cdC8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcblx0Ly8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuXHQvLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcblx0Ly8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdC8vXG5cdC8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG5cdC8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQvL1xuXHQvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG5cdC8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcblx0Ly8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuXHQvLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcblx0Ly8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG5cdC8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcblx0Ly8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblx0XG5cdHZhciBwdW55Y29kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRcblx0ZXhwb3J0cy5wYXJzZSA9IHVybFBhcnNlO1xuXHRleHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuXHRleHBvcnRzLnJlc29sdmVPYmplY3QgPSB1cmxSZXNvbHZlT2JqZWN0O1xuXHRleHBvcnRzLmZvcm1hdCA9IHVybEZvcm1hdDtcblx0XG5cdGV4cG9ydHMuVXJsID0gVXJsO1xuXHRcblx0ZnVuY3Rpb24gVXJsKCkge1xuXHQgIHRoaXMucHJvdG9jb2wgPSBudWxsO1xuXHQgIHRoaXMuc2xhc2hlcyA9IG51bGw7XG5cdCAgdGhpcy5hdXRoID0gbnVsbDtcblx0ICB0aGlzLmhvc3QgPSBudWxsO1xuXHQgIHRoaXMucG9ydCA9IG51bGw7XG5cdCAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG5cdCAgdGhpcy5oYXNoID0gbnVsbDtcblx0ICB0aGlzLnNlYXJjaCA9IG51bGw7XG5cdCAgdGhpcy5xdWVyeSA9IG51bGw7XG5cdCAgdGhpcy5wYXRobmFtZSA9IG51bGw7XG5cdCAgdGhpcy5wYXRoID0gbnVsbDtcblx0ICB0aGlzLmhyZWYgPSBudWxsO1xuXHR9XG5cdFxuXHQvLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblx0XG5cdC8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG5cdC8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxuXHR2YXIgcHJvdG9jb2xQYXR0ZXJuID0gL14oW2EtejAtOS4rLV0rOikvaSxcblx0ICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblx0XG5cdCAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuXHQgICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cblx0ICAgIGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddLFxuXHRcblx0ICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG5cdCAgICB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcyksXG5cdFxuXHQgICAgLy8gQWxsb3dlZCBieSBSRkNzLCBidXQgY2F1c2Ugb2YgWFNTIGF0dGFja3MuICBBbHdheXMgZXNjYXBlIHRoZXNlLlxuXHQgICAgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSksXG5cdCAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuXHQgICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuXHQgICAgLy8gYXJlIHRoZSBvbmVzIHRoYXQgYXJlICpleHBlY3RlZCogdG8gYmUgc2Vlbiwgc28gd2UgZmFzdC1wYXRoXG5cdCAgICAvLyB0aGVtLlxuXHQgICAgbm9uSG9zdENoYXJzID0gWyclJywgJy8nLCAnPycsICc7JywgJyMnXS5jb25jYXQoYXV0b0VzY2FwZSksXG5cdCAgICBob3N0RW5kaW5nQ2hhcnMgPSBbJy8nLCAnPycsICcjJ10sXG5cdCAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcblx0ICAgIGhvc3RuYW1lUGFydFBhdHRlcm4gPSAvXlthLXowLTlBLVpfLV17MCw2M30kLyxcblx0ICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oW2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG5cdCAgICAvLyBwcm90b2NvbHMgdGhhdCBjYW4gYWxsb3cgXCJ1bnNhZmVcIiBhbmQgXCJ1bndpc2VcIiBjaGFycy5cblx0ICAgIHVuc2FmZVByb3RvY29sID0ge1xuXHQgICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG5cdCAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcblx0ICAgIH0sXG5cdCAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG5cdCAgICBob3N0bGVzc1Byb3RvY29sID0ge1xuXHQgICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG5cdCAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcblx0ICAgIH0sXG5cdCAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cblx0ICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcblx0ICAgICAgJ2h0dHAnOiB0cnVlLFxuXHQgICAgICAnaHR0cHMnOiB0cnVlLFxuXHQgICAgICAnZnRwJzogdHJ1ZSxcblx0ICAgICAgJ2dvcGhlcic6IHRydWUsXG5cdCAgICAgICdmaWxlJzogdHJ1ZSxcblx0ICAgICAgJ2h0dHA6JzogdHJ1ZSxcblx0ICAgICAgJ2h0dHBzOic6IHRydWUsXG5cdCAgICAgICdmdHA6JzogdHJ1ZSxcblx0ICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuXHQgICAgICAnZmlsZTonOiB0cnVlXG5cdCAgICB9LFxuXHQgICAgcXVlcnlzdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0XG5cdGZ1bmN0aW9uIHVybFBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcblx0ICBpZiAodXJsICYmIGlzT2JqZWN0KHVybCkgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSByZXR1cm4gdXJsO1xuXHRcblx0ICB2YXIgdSA9IG5ldyBVcmw7XG5cdCAgdS5wYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KTtcblx0ICByZXR1cm4gdTtcblx0fVxuXHRcblx0VXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcblx0ICBpZiAoIWlzU3RyaW5nKHVybCkpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXJhbWV0ZXIgJ3VybCcgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHVybCk7XG5cdCAgfVxuXHRcblx0ICB2YXIgcmVzdCA9IHVybDtcblx0XG5cdCAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cblx0ICAvLyBUaGlzIGlzIHRvIHN1cHBvcnQgcGFyc2Ugc3R1ZmYgbGlrZSBcIiAgaHR0cDovL2Zvby5jb20gIFxcblwiXG5cdCAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXHRcblx0ICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcblx0ICBpZiAocHJvdG8pIHtcblx0ICAgIHByb3RvID0gcHJvdG9bMF07XG5cdCAgICB2YXIgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKCk7XG5cdCAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcblx0ICAgIHJlc3QgPSByZXN0LnN1YnN0cihwcm90by5sZW5ndGgpO1xuXHQgIH1cblx0XG5cdCAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3Rcblx0ICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG5cdCAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuXHQgIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuXHQgIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuXHQgICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcblx0ICAgIGlmIChzbGFzaGVzICYmICEocHJvdG8gJiYgaG9zdGxlc3NQcm90b2NvbFtwcm90b10pKSB7XG5cdCAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcblx0ICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGlmICghaG9zdGxlc3NQcm90b2NvbFtwcm90b10gJiZcblx0ICAgICAgKHNsYXNoZXMgfHwgKHByb3RvICYmICFzbGFzaGVkUHJvdG9jb2xbcHJvdG9dKSkpIHtcblx0XG5cdCAgICAvLyB0aGVyZSdzIGEgaG9zdG5hbWUuXG5cdCAgICAvLyB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgLywgPywgOywgb3IgIyBlbmRzIHRoZSBob3N0LlxuXHQgICAgLy9cblx0ICAgIC8vIElmIHRoZXJlIGlzIGFuIEAgaW4gdGhlIGhvc3RuYW1lLCB0aGVuIG5vbi1ob3N0IGNoYXJzICphcmUqIGFsbG93ZWRcblx0ICAgIC8vIHRvIHRoZSBsZWZ0IG9mIHRoZSBsYXN0IEAgc2lnbiwgdW5sZXNzIHNvbWUgaG9zdC1lbmRpbmcgY2hhcmFjdGVyXG5cdCAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuXHQgICAgLy8gVVJMcyBhcmUgb2Jub3hpb3VzLlxuXHQgICAgLy9cblx0ICAgIC8vIGV4OlxuXHQgICAgLy8gaHR0cDovL2FAYkBjLyA9PiB1c2VyOmFAYiBob3N0OmNcblx0ICAgIC8vIGh0dHA6Ly9hQGI/QGMgPT4gdXNlcjphIGhvc3Q6YyBwYXRoOi8/QGNcblx0XG5cdCAgICAvLyB2MC4xMiBUT0RPKGlzYWFjcyk6IFRoaXMgaXMgbm90IHF1aXRlIGhvdyBDaHJvbWUgZG9lcyB0aGluZ3MuXG5cdCAgICAvLyBSZXZpZXcgb3VyIHRlc3QgY2FzZSBhZ2FpbnN0IGJyb3dzZXJzIG1vcmUgY29tcHJlaGVuc2l2ZWx5LlxuXHRcblx0ICAgIC8vIGZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFueSBob3N0RW5kaW5nQ2hhcnNcblx0ICAgIHZhciBob3N0RW5kID0gLTE7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKGhvc3RFbmRpbmdDaGFyc1tpXSk7XG5cdCAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcblx0ICAgICAgICBob3N0RW5kID0gaGVjO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuXHQgICAgLy8gYXV0aCBwb3J0aW9uIGNhbm5vdCBnbyBwYXN0LCBvciB0aGUgbGFzdCBAIGNoYXIgaXMgdGhlIGRlY2lkZXIuXG5cdCAgICB2YXIgYXV0aCwgYXRTaWduO1xuXHQgICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG5cdCAgICAgIC8vIGF0U2lnbiBjYW4gYmUgYW55d2hlcmUuXG5cdCAgICAgIGF0U2lnbiA9IHJlc3QubGFzdEluZGV4T2YoJ0AnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIGF0U2lnbiBtdXN0IGJlIGluIGF1dGggcG9ydGlvbi5cblx0ICAgICAgLy8gaHR0cDovL2FAYi9jQGQgPT4gaG9zdDpiIGF1dGg6YSBwYXRoOi9jQGRcblx0ICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuXHQgICAgLy8gUHVsbCB0aGF0IG9mZi5cblx0ICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG5cdCAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG5cdCAgICAgIHJlc3QgPSByZXN0LnNsaWNlKGF0U2lnbiArIDEpO1xuXHQgICAgICB0aGlzLmF1dGggPSBkZWNvZGVVUklDb21wb25lbnQoYXV0aCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuXHQgICAgaG9zdEVuZCA9IC0xO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub25Ib3N0Q2hhcnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihub25Ib3N0Q2hhcnNbaV0pO1xuXHQgICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG5cdCAgICAgICAgaG9zdEVuZCA9IGhlYztcblx0ICAgIH1cblx0ICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cblx0ICAgIGlmIChob3N0RW5kID09PSAtMSlcblx0ICAgICAgaG9zdEVuZCA9IHJlc3QubGVuZ3RoO1xuXHRcblx0ICAgIHRoaXMuaG9zdCA9IHJlc3Quc2xpY2UoMCwgaG9zdEVuZCk7XG5cdCAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKTtcblx0XG5cdCAgICAvLyBwdWxsIG91dCBwb3J0LlxuXHQgICAgdGhpcy5wYXJzZUhvc3QoKTtcblx0XG5cdCAgICAvLyB3ZSd2ZSBpbmRpY2F0ZWQgdGhhdCB0aGVyZSBpcyBhIGhvc3RuYW1lLFxuXHQgICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cblx0ICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXHRcblx0ICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG5cdCAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cblx0ICAgIHZhciBpcHY2SG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lWzBdID09PSAnWycgJiZcblx0ICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblx0XG5cdCAgICAvLyB2YWxpZGF0ZSBhIGxpdHRsZS5cblx0ICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG5cdCAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcblx0ICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBob3N0cGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIHBhcnQgPSBob3N0cGFydHNbaV07XG5cdCAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcblx0ICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcblx0ICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG5cdCAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG5cdCAgICAgICAgICAgIGlmIChwYXJ0LmNoYXJDb2RlQXQoaikgPiAxMjcpIHtcblx0ICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcblx0ICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG5cdCAgICAgICAgICAgICAgLy8gYnJva2VuIGJ5IHJlcGxhY2luZyBub24tQVNDSUkgYnkgbm90aGluZ1xuXHQgICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgIG5ld3BhcnQgKz0gcGFydFtqXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuXHQgICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG5cdCAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuXHQgICAgICAgICAgICB2YXIgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSk7XG5cdCAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcblx0ICAgICAgICAgICAgaWYgKGJpdCkge1xuXHQgICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pO1xuXHQgICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmIChub3RIb3N0Lmxlbmd0aCkge1xuXHQgICAgICAgICAgICAgIHJlc3QgPSAnLycgKyBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpO1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuXHQgICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBob3N0bmFtZXMgYXJlIGFsd2F5cyBsb3dlciBjYXNlLlxuXHQgICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG5cdCAgICAgIC8vIElETkEgU3VwcG9ydDogUmV0dXJucyBhIHB1bnkgY29kZWQgcmVwcmVzZW50YXRpb24gb2YgXCJkb21haW5cIi5cblx0ICAgICAgLy8gSXQgb25seSBjb252ZXJ0cyB0aGUgcGFydCBvZiB0aGUgZG9tYWluIG5hbWUgdGhhdFxuXHQgICAgICAvLyBoYXMgbm9uIEFTQ0lJIGNoYXJhY3RlcnMuIEkuZS4gaXQgZG9zZW50IG1hdHRlciBpZlxuXHQgICAgICAvLyB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQgYWxyZWFkeSBpcyBpbiBBU0NJSS5cblx0ICAgICAgdmFyIGRvbWFpbkFycmF5ID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgnLicpO1xuXHQgICAgICB2YXIgbmV3T3V0ID0gW107XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tYWluQXJyYXkubGVuZ3RoOyArK2kpIHtcblx0ICAgICAgICB2YXIgcyA9IGRvbWFpbkFycmF5W2ldO1xuXHQgICAgICAgIG5ld091dC5wdXNoKHMubWF0Y2goL1teQS1aYS16MC05Xy1dLykgP1xuXHQgICAgICAgICAgICAneG4tLScgKyBwdW55Y29kZS5lbmNvZGUocykgOiBzKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmhvc3RuYW1lID0gbmV3T3V0LmpvaW4oJy4nKTtcblx0ICAgIH1cblx0XG5cdCAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuXHQgICAgdmFyIGggPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXHQgICAgdGhpcy5ob3N0ID0gaCArIHA7XG5cdCAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXHRcblx0ICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcblx0ICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG5cdCAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG5cdCAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuXHQgICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG5cdCAgICAgICAgcmVzdCA9ICcvJyArIHJlc3Q7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuXHQgIC8vIGNob3Agb2ZmIGFueSBkZWxpbSBjaGFycy5cblx0ICBpZiAoIXVuc2FmZVByb3RvY29sW2xvd2VyUHJvdG9dKSB7XG5cdFxuXHQgICAgLy8gRmlyc3QsIG1ha2UgMTAwJSBzdXJlIHRoYXQgYW55IFwiYXV0b0VzY2FwZVwiIGNoYXJzIGdldFxuXHQgICAgLy8gZXNjYXBlZCwgZXZlbiBpZiBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCB0aGluayB0aGV5XG5cdCAgICAvLyBuZWVkIHRvIGJlLlxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdXRvRXNjYXBlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB2YXIgYWUgPSBhdXRvRXNjYXBlW2ldO1xuXHQgICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcblx0ICAgICAgaWYgKGVzYyA9PT0gYWUpIHtcblx0ICAgICAgICBlc2MgPSBlc2NhcGUoYWUpO1xuXHQgICAgICB9XG5cdCAgICAgIHJlc3QgPSByZXN0LnNwbGl0KGFlKS5qb2luKGVzYyk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0XG5cdCAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cblx0ICB2YXIgaGFzaCA9IHJlc3QuaW5kZXhPZignIycpO1xuXHQgIGlmIChoYXNoICE9PSAtMSkge1xuXHQgICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuXHQgICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaCk7XG5cdCAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcblx0ICB9XG5cdCAgdmFyIHFtID0gcmVzdC5pbmRleE9mKCc/Jyk7XG5cdCAgaWYgKHFtICE9PSAtMSkge1xuXHQgICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG5cdCAgICB0aGlzLnF1ZXJ5ID0gcmVzdC5zdWJzdHIocW0gKyAxKTtcblx0ICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG5cdCAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcblx0ICAgIH1cblx0ICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcblx0ICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcblx0ICAgIC8vIG5vIHF1ZXJ5IHN0cmluZywgYnV0IHBhcnNlUXVlcnlTdHJpbmcgc3RpbGwgcmVxdWVzdGVkXG5cdCAgICB0aGlzLnNlYXJjaCA9ICcnO1xuXHQgICAgdGhpcy5xdWVyeSA9IHt9O1xuXHQgIH1cblx0ICBpZiAocmVzdCkgdGhpcy5wYXRobmFtZSA9IHJlc3Q7XG5cdCAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuXHQgICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG5cdCAgICB0aGlzLnBhdGhuYW1lID0gJy8nO1xuXHQgIH1cblx0XG5cdCAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuXHQgIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG5cdCAgICB2YXIgcCA9IHRoaXMucGF0aG5hbWUgfHwgJyc7XG5cdCAgICB2YXIgcyA9IHRoaXMuc2VhcmNoIHx8ICcnO1xuXHQgICAgdGhpcy5wYXRoID0gcCArIHM7XG5cdCAgfVxuXHRcblx0ICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cblx0ICB0aGlzLmhyZWYgPSB0aGlzLmZvcm1hdCgpO1xuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXHRcblx0Ly8gZm9ybWF0IGEgcGFyc2VkIG9iamVjdCBpbnRvIGEgdXJsIHN0cmluZ1xuXHRmdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG5cdCAgLy8gZW5zdXJlIGl0J3MgYW4gb2JqZWN0LCBhbmQgbm90IGEgc3RyaW5nIHVybC5cblx0ICAvLyBJZiBpdCdzIGFuIG9iaiwgdGhpcyBpcyBhIG5vLW9wLlxuXHQgIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3Ncblx0ICAvLyB0byBjbGVhbiB1cCBwb3RlbnRpYWxseSB3b25reSB1cmxzLlxuXHQgIGlmIChpc1N0cmluZyhvYmopKSBvYmogPSB1cmxQYXJzZShvYmopO1xuXHQgIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG5cdCAgcmV0dXJuIG9iai5mb3JtYXQoKTtcblx0fVxuXHRcblx0VXJsLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcblx0ICB2YXIgYXV0aCA9IHRoaXMuYXV0aCB8fCAnJztcblx0ICBpZiAoYXV0aCkge1xuXHQgICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcblx0ICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCAnOicpO1xuXHQgICAgYXV0aCArPSAnQCc7XG5cdCAgfVxuXHRcblx0ICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuXHQgICAgICBwYXRobmFtZSA9IHRoaXMucGF0aG5hbWUgfHwgJycsXG5cdCAgICAgIGhhc2ggPSB0aGlzLmhhc2ggfHwgJycsXG5cdCAgICAgIGhvc3QgPSBmYWxzZSxcblx0ICAgICAgcXVlcnkgPSAnJztcblx0XG5cdCAgaWYgKHRoaXMuaG9zdCkge1xuXHQgICAgaG9zdCA9IGF1dGggKyB0aGlzLmhvc3Q7XG5cdCAgfSBlbHNlIGlmICh0aGlzLmhvc3RuYW1lKSB7XG5cdCAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuXHQgICAgICAgIHRoaXMuaG9zdG5hbWUgOlxuXHQgICAgICAgICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScpO1xuXHQgICAgaWYgKHRoaXMucG9ydCkge1xuXHQgICAgICBob3N0ICs9ICc6JyArIHRoaXMucG9ydDtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGlmICh0aGlzLnF1ZXJ5ICYmXG5cdCAgICAgIGlzT2JqZWN0KHRoaXMucXVlcnkpICYmXG5cdCAgICAgIE9iamVjdC5rZXlzKHRoaXMucXVlcnkpLmxlbmd0aCkge1xuXHQgICAgcXVlcnkgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkodGhpcy5xdWVyeSk7XG5cdCAgfVxuXHRcblx0ICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2ggfHwgKHF1ZXJ5ICYmICgnPycgKyBxdWVyeSkpIHx8ICcnO1xuXHRcblx0ICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cdFxuXHQgIC8vIG9ubHkgdGhlIHNsYXNoZWRQcm90b2NvbHMgZ2V0IHRoZSAvLy4gIE5vdCBtYWlsdG86LCB4bXBwOiwgZXRjLlxuXHQgIC8vIHVubGVzcyB0aGV5IGhhZCB0aGVtIHRvIGJlZ2luIHdpdGguXG5cdCAgaWYgKHRoaXMuc2xhc2hlcyB8fFxuXHQgICAgICAoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbFtwcm90b2NvbF0pICYmIGhvc3QgIT09IGZhbHNlKSB7XG5cdCAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcblx0ICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZTtcblx0ICB9IGVsc2UgaWYgKCFob3N0KSB7XG5cdCAgICBob3N0ID0gJyc7XG5cdCAgfVxuXHRcblx0ICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaDtcblx0ICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoO1xuXHRcblx0ICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24obWF0Y2gpIHtcblx0ICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuXHQgIH0pO1xuXHQgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuXHRcblx0ICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gdXJsUmVzb2x2ZShzb3VyY2UsIHJlbGF0aXZlKSB7XG5cdCAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmUocmVsYXRpdmUpO1xuXHR9XG5cdFxuXHRVcmwucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHQgIHJldHVybiB0aGlzLnJlc29sdmVPYmplY3QodXJsUGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKSkuZm9ybWF0KCk7XG5cdH07XG5cdFxuXHRmdW5jdGlvbiB1cmxSZXNvbHZlT2JqZWN0KHNvdXJjZSwgcmVsYXRpdmUpIHtcblx0ICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlbGF0aXZlO1xuXHQgIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlT2JqZWN0KHJlbGF0aXZlKTtcblx0fVxuXHRcblx0VXJsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0ID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcblx0ICBpZiAoaXNTdHJpbmcocmVsYXRpdmUpKSB7XG5cdCAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuXHQgICAgcmVsLnBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSk7XG5cdCAgICByZWxhdGl2ZSA9IHJlbDtcblx0ICB9XG5cdFxuXHQgIHZhciByZXN1bHQgPSBuZXcgVXJsKCk7XG5cdCAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG5cdCAgICByZXN1bHRba10gPSB0aGlzW2tdO1xuXHQgIH0sIHRoaXMpO1xuXHRcblx0ICAvLyBoYXNoIGlzIGFsd2F5cyBvdmVycmlkZGVuLCBubyBtYXR0ZXIgd2hhdC5cblx0ICAvLyBldmVuIGhyZWY9XCJcIiB3aWxsIHJlbW92ZSBpdC5cblx0ICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cdFxuXHQgIC8vIGlmIHRoZSByZWxhdGl2ZSB1cmwgaXMgZW1wdHksIHRoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG8gaGVyZS5cblx0ICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcblx0ICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdFxuXHQgIC8vIGhyZWZzIGxpa2UgLy9mb28vYmFyIGFsd2F5cyBjdXQgdG8gdGhlIHByb3RvY29sLlxuXHQgIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuXHQgICAgLy8gdGFrZSBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgcHJvdG9jb2wgZnJvbSByZWxhdGl2ZVxuXHQgICAgT2JqZWN0LmtleXMocmVsYXRpdmUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuXHQgICAgICBpZiAoayAhPT0gJ3Byb3RvY29sJylcblx0ICAgICAgICByZXN1bHRba10gPSByZWxhdGl2ZVtrXTtcblx0ICAgIH0pO1xuXHRcblx0ICAgIC8vdXJsUGFyc2UgYXBwZW5kcyB0cmFpbGluZyAvIHRvIHVybHMgbGlrZSBodHRwOi8vd3d3LmV4YW1wbGUuY29tXG5cdCAgICBpZiAoc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF0gJiZcblx0ICAgICAgICByZXN1bHQuaG9zdG5hbWUgJiYgIXJlc3VsdC5wYXRobmFtZSkge1xuXHQgICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRobmFtZSA9ICcvJztcblx0ICAgIH1cblx0XG5cdCAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHRcblx0ICBpZiAocmVsYXRpdmUucHJvdG9jb2wgJiYgcmVsYXRpdmUucHJvdG9jb2wgIT09IHJlc3VsdC5wcm90b2NvbCkge1xuXHQgICAgLy8gaWYgaXQncyBhIGtub3duIHVybCBwcm90b2NvbCwgdGhlbiBjaGFuZ2luZ1xuXHQgICAgLy8gdGhlIHByb3RvY29sIGRvZXMgd2VpcmQgdGhpbmdzXG5cdCAgICAvLyBmaXJzdCwgaWYgaXQncyBub3QgZmlsZTosIHRoZW4gd2UgTVVTVCBoYXZlIGEgaG9zdCxcblx0ICAgIC8vIGFuZCBpZiB0aGVyZSB3YXMgYSBwYXRoXG5cdCAgICAvLyB0byBiZWdpbiB3aXRoLCB0aGVuIHdlIE1VU1QgaGF2ZSBhIHBhdGguXG5cdCAgICAvLyBpZiBpdCBpcyBmaWxlOiwgdGhlbiB0aGUgaG9zdCBpcyBkcm9wcGVkLFxuXHQgICAgLy8gYmVjYXVzZSB0aGF0J3Mga25vd24gdG8gYmUgaG9zdGxlc3MuXG5cdCAgICAvLyBhbnl0aGluZyBlbHNlIGlzIGFzc3VtZWQgdG8gYmUgYWJzb2x1dGUuXG5cdCAgICBpZiAoIXNsYXNoZWRQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcblx0ICAgICAgT2JqZWN0LmtleXMocmVsYXRpdmUpLmZvckVhY2goZnVuY3Rpb24oaykge1xuXHQgICAgICAgIHJlc3VsdFtrXSA9IHJlbGF0aXZlW2tdO1xuXHQgICAgICB9KTtcblx0ICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG5cdCAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9XG5cdFxuXHQgICAgcmVzdWx0LnByb3RvY29sID0gcmVsYXRpdmUucHJvdG9jb2w7XG5cdCAgICBpZiAoIXJlbGF0aXZlLmhvc3QgJiYgIWhvc3RsZXNzUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG5cdCAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuXHQgICAgICB3aGlsZSAocmVsUGF0aC5sZW5ndGggJiYgIShyZWxhdGl2ZS5ob3N0ID0gcmVsUGF0aC5zaGlmdCgpKSk7XG5cdCAgICAgIGlmICghcmVsYXRpdmUuaG9zdCkgcmVsYXRpdmUuaG9zdCA9ICcnO1xuXHQgICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuXHQgICAgICBpZiAocmVsUGF0aFswXSAhPT0gJycpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG5cdCAgICAgIGlmIChyZWxQYXRoLmxlbmd0aCA8IDIpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG5cdCAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsYXRpdmUucGF0aG5hbWU7XG5cdCAgICB9XG5cdCAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuXHQgICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG5cdCAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG5cdCAgICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGg7XG5cdCAgICByZXN1bHQuaG9zdG5hbWUgPSByZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0O1xuXHQgICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuXHQgICAgLy8gdG8gc3VwcG9ydCBodHRwLnJlcXVlc3Rcblx0ICAgIGlmIChyZXN1bHQucGF0aG5hbWUgfHwgcmVzdWx0LnNlYXJjaCkge1xuXHQgICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcblx0ICAgICAgdmFyIHMgPSByZXN1bHQuc2VhcmNoIHx8ICcnO1xuXHQgICAgICByZXN1bHQucGF0aCA9IHAgKyBzO1xuXHQgICAgfVxuXHQgICAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuXHQgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0XG5cdCAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuXHQgICAgICBpc1JlbEFicyA9IChcblx0ICAgICAgICAgIHJlbGF0aXZlLmhvc3QgfHxcblx0ICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG5cdCAgICAgICksXG5cdCAgICAgIG11c3RFbmRBYnMgPSAoaXNSZWxBYnMgfHwgaXNTb3VyY2VBYnMgfHxcblx0ICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcblx0ICAgICAgcmVtb3ZlQWxsRG90cyA9IG11c3RFbmRBYnMsXG5cdCAgICAgIHNyY1BhdGggPSByZXN1bHQucGF0aG5hbWUgJiYgcmVzdWx0LnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG5cdCAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuXHQgICAgICBwc3ljaG90aWMgPSByZXN1bHQucHJvdG9jb2wgJiYgIXNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdO1xuXHRcblx0ICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG5cdCAgLy8gbGlua3MgbGlrZSAuLi8uLiBzaG91bGQgYmUgYWJsZVxuXHQgIC8vIHRvIGNyYXdsIHVwIHRvIHRoZSBob3N0bmFtZSwgYXMgd2VsbC4gIFRoaXMgaXMgc3RyYW5nZS5cblx0ICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuXHQgIC8vIExhdGVyIG9uLCBwdXQgdGhlIGZpcnN0IHBhdGggcGFydCBpbnRvIHRoZSBob3N0IGZpZWxkLlxuXHQgIGlmIChwc3ljaG90aWMpIHtcblx0ICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuXHQgICAgcmVzdWx0LnBvcnQgPSBudWxsO1xuXHQgICAgaWYgKHJlc3VsdC5ob3N0KSB7XG5cdCAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuXHQgICAgICBlbHNlIHNyY1BhdGgudW5zaGlmdChyZXN1bHQuaG9zdCk7XG5cdCAgICB9XG5cdCAgICByZXN1bHQuaG9zdCA9ICcnO1xuXHQgICAgaWYgKHJlbGF0aXZlLnByb3RvY29sKSB7XG5cdCAgICAgIHJlbGF0aXZlLmhvc3RuYW1lID0gbnVsbDtcblx0ICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG5cdCAgICAgIGlmIChyZWxhdGl2ZS5ob3N0KSB7XG5cdCAgICAgICAgaWYgKHJlbFBhdGhbMF0gPT09ICcnKSByZWxQYXRoWzBdID0gcmVsYXRpdmUuaG9zdDtcblx0ICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcblx0ICAgICAgfVxuXHQgICAgICByZWxhdGl2ZS5ob3N0ID0gbnVsbDtcblx0ICAgIH1cblx0ICAgIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzICYmIChyZWxQYXRoWzBdID09PSAnJyB8fCBzcmNQYXRoWzBdID09PSAnJyk7XG5cdCAgfVxuXHRcblx0ICBpZiAoaXNSZWxBYnMpIHtcblx0ICAgIC8vIGl0J3MgYWJzb2x1dGUuXG5cdCAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG5cdCAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3QgOiByZXN1bHQuaG9zdDtcblx0ICAgIHJlc3VsdC5ob3N0bmFtZSA9IChyZWxhdGl2ZS5ob3N0bmFtZSB8fCByZWxhdGl2ZS5ob3N0bmFtZSA9PT0gJycpID9cblx0ICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuXHQgICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcblx0ICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuXHQgICAgc3JjUGF0aCA9IHJlbFBhdGg7XG5cdCAgICAvLyBmYWxsIHRocm91Z2ggdG8gdGhlIGRvdC1oYW5kbGluZyBiZWxvdy5cblx0ICB9IGVsc2UgaWYgKHJlbFBhdGgubGVuZ3RoKSB7XG5cdCAgICAvLyBpdCdzIHJlbGF0aXZlXG5cdCAgICAvLyB0aHJvdyBhd2F5IHRoZSBleGlzdGluZyBmaWxlLCBhbmQgdGFrZSB0aGUgbmV3IHBhdGggaW5zdGVhZC5cblx0ICAgIGlmICghc3JjUGF0aCkgc3JjUGF0aCA9IFtdO1xuXHQgICAgc3JjUGF0aC5wb3AoKTtcblx0ICAgIHNyY1BhdGggPSBzcmNQYXRoLmNvbmNhdChyZWxQYXRoKTtcblx0ICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG5cdCAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcblx0ICB9IGVsc2UgaWYgKCFpc051bGxPclVuZGVmaW5lZChyZWxhdGl2ZS5zZWFyY2gpKSB7XG5cdCAgICAvLyBqdXN0IHB1bGwgb3V0IHRoZSBzZWFyY2guXG5cdCAgICAvLyBsaWtlIGhyZWY9Jz9mb28nLlxuXHQgICAgLy8gUHV0IHRoaXMgYWZ0ZXIgdGhlIG90aGVyIHR3byBjYXNlcyBiZWNhdXNlIGl0IHNpbXBsaWZpZXMgdGhlIGJvb2xlYW5zXG5cdCAgICBpZiAocHN5Y2hvdGljKSB7XG5cdCAgICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlc3VsdC5ob3N0ID0gc3JjUGF0aC5zaGlmdCgpO1xuXHQgICAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG5cdCAgICAgIC8vdGhpcyBlc3BlY2lhbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG5cdCAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG5cdCAgICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG5cdCAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuXHQgICAgICBpZiAoYXV0aEluSG9zdCkge1xuXHQgICAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuXHQgICAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuXHQgICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG5cdCAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG5cdCAgICBpZiAoIWlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICFpc051bGwocmVzdWx0LnNlYXJjaCkpIHtcblx0ICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcblx0ICAgICAgICAgICAgICAgICAgICAocmVzdWx0LnNlYXJjaCA/IHJlc3VsdC5zZWFyY2ggOiAnJyk7XG5cdCAgICB9XG5cdCAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHRcblx0ICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG5cdCAgICAvLyBubyBwYXRoIGF0IGFsbC4gIGVhc3kuXG5cdCAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuXHQgICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcblx0ICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3Rcblx0ICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG5cdCAgICAgIHJlc3VsdC5wYXRoID0gJy8nICsgcmVzdWx0LnNlYXJjaDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdFxuXHQgIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuXHQgIC8vIGhvd2V2ZXIsIGlmIGl0IGVuZHMgaW4gYW55dGhpbmcgZWxzZSBub24tc2xhc2h5LFxuXHQgIC8vIHRoZW4gaXQgbXVzdCBOT1QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG5cdCAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcblx0ICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IChcblx0ICAgICAgKHJlc3VsdC5ob3N0IHx8IHJlbGF0aXZlLmhvc3QpICYmIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgfHxcblx0ICAgICAgbGFzdCA9PT0gJycpO1xuXHRcblx0ICAvLyBzdHJpcCBzaW5nbGUgZG90cywgcmVzb2x2ZSBkb3VibGUgZG90cyB0byBwYXJlbnQgZGlyXG5cdCAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcblx0ICB2YXIgdXAgPSAwO1xuXHQgIGZvciAodmFyIGkgPSBzcmNQYXRoLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcblx0ICAgIGxhc3QgPSBzcmNQYXRoW2ldO1xuXHQgICAgaWYgKGxhc3QgPT0gJy4nKSB7XG5cdCAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuXHQgICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG5cdCAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuXHQgICAgICB1cCsrO1xuXHQgICAgfSBlbHNlIGlmICh1cCkge1xuXHQgICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcblx0ICAgICAgdXAtLTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcblx0ICBpZiAoIW11c3RFbmRBYnMgJiYgIXJlbW92ZUFsbERvdHMpIHtcblx0ICAgIGZvciAoOyB1cC0tOyB1cCkge1xuXHQgICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBpZiAobXVzdEVuZEFicyAmJiBzcmNQYXRoWzBdICE9PSAnJyAmJlxuXHQgICAgICAoIXNyY1BhdGhbMF0gfHwgc3JjUGF0aFswXS5jaGFyQXQoMCkgIT09ICcvJykpIHtcblx0ICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG5cdCAgfVxuXHRcblx0ICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuXHQgICAgc3JjUGF0aC5wdXNoKCcnKTtcblx0ICB9XG5cdFxuXHQgIHZhciBpc0Fic29sdXRlID0gc3JjUGF0aFswXSA9PT0gJycgfHxcblx0ICAgICAgKHNyY1BhdGhbMF0gJiYgc3JjUGF0aFswXS5jaGFyQXQoMCkgPT09ICcvJyk7XG5cdFxuXHQgIC8vIHB1dCB0aGUgaG9zdCBiYWNrXG5cdCAgaWYgKHBzeWNob3RpYykge1xuXHQgICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNQYXRoLmxlbmd0aCA/IHNyY1BhdGguc2hpZnQoKSA6ICcnO1xuXHQgICAgLy9vY2NhdGlvbmFseSB0aGUgYXV0aCBjYW4gZ2V0IHN0dWNrIG9ubHkgaW4gaG9zdFxuXHQgICAgLy90aGlzIGVzcGVjaWFseSBoYXBwZW5zIGluIGNhc2VzIGxpa2Vcblx0ICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG5cdCAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuXHQgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG5cdCAgICBpZiAoYXV0aEluSG9zdCkge1xuXHQgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcblx0ICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyB8fCAocmVzdWx0Lmhvc3QgJiYgc3JjUGF0aC5sZW5ndGgpO1xuXHRcblx0ICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuXHQgICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcblx0ICB9XG5cdFxuXHQgIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcblx0ICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG5cdCAgICByZXN1bHQucGF0aCA9IG51bGw7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJlc3VsdC5wYXRobmFtZSA9IHNyY1BhdGguam9pbignLycpO1xuXHQgIH1cblx0XG5cdCAgLy90byBzdXBwb3J0IHJlcXVlc3QuaHR0cFxuXHQgIGlmICghaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIWlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuXHQgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcblx0ICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuXHQgIH1cblx0ICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGggfHwgcmVzdWx0LmF1dGg7XG5cdCAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuXHQgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdFxuXHRVcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKCkge1xuXHQgIHZhciBob3N0ID0gdGhpcy5ob3N0O1xuXHQgIHZhciBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KTtcblx0ICBpZiAocG9ydCkge1xuXHQgICAgcG9ydCA9IHBvcnRbMF07XG5cdCAgICBpZiAocG9ydCAhPT0gJzonKSB7XG5cdCAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuXHQgICAgfVxuXHQgICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpO1xuXHQgIH1cblx0ICBpZiAoaG9zdCkgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcblx0ICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIjtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuXHQgIHJldHVybiBhcmcgPT09IG51bGw7XG5cdH1cblx0ZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG5cdCAgcmV0dXJuICBhcmcgPT0gbnVsbDtcblx0fVxuXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihtb2R1bGUsIGdsb2JhbCkgey8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuMy4yIGJ5IEBtYXRoaWFzICovXG5cdDsoZnVuY3Rpb24ocm9vdCkge1xuXHRcblx0XHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdFx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0XHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0XHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRcdGlmIChcblx0XHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdFx0KSB7XG5cdFx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0XHQgKiBAbmFtZSBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdCAqL1xuXHRcdHZhciBwdW55Y29kZSxcblx0XG5cdFx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRcdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblx0XG5cdFx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRcdGJhc2UgPSAzNixcblx0XHR0TWluID0gMSxcblx0XHR0TWF4ID0gMjYsXG5cdFx0c2tldyA9IDM4LFxuXHRcdGRhbXAgPSA3MDAsXG5cdFx0aW5pdGlhbEJpYXMgPSA3Mixcblx0XHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRcdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXHRcblx0XHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRcdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRcdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRcdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblx0XG5cdFx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdFx0ZXJyb3JzID0ge1xuXHRcdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHRcdH0sXG5cdFxuXHRcdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0XHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdFx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRcdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cdFxuXHRcdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0XHRrZXk7XG5cdFxuXHRcdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHRcblx0XHQvKipcblx0XHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHRcdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0XHR0aHJvdyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdFx0fVxuXHRcblx0XHQvKipcblx0XHQgKiBBIGdlbmVyaWMgYEFycmF5I21hcGAgdXRpbGl0eSBmdW5jdGlvbi5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGFycmF5XG5cdFx0ICogaXRlbS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHRcdCAqIGFkZHJlc3Nlcy5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5XG5cdFx0ICogY2hhcmFjdGVyLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdFx0ICogZnVuY3Rpb24uXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHRcdHZhciBwYXJ0cyA9IHN0cmluZy5zcGxpdCgnQCcpO1xuXHRcdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gSW4gZW1haWwgYWRkcmVzc2VzLCBvbmx5IHRoZSBkb21haW4gbmFtZSBzaG91bGQgYmUgcHVueWNvZGVkLiBMZWF2ZVxuXHRcdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdFx0c3RyaW5nID0gcGFydHNbMV07XG5cdFx0XHR9XG5cdFx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleFNlcGFyYXRvcnMsICdcXHgyRScpO1xuXHRcdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG5cdFx0fVxuXHRcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdFx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHRcdCAqIHRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGEgcGFpciBvZiBzdXJyb2dhdGUgaGFsdmVzIChlYWNoIG9mIHdoaWNoXG5cdFx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdFx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHRcdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZW5jb2RlYFxuXHRcdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdFx0ICogQG5hbWUgZGVjb2RlXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHRcdCAgICBjb3VudGVyID0gMCxcblx0XHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdFx0ICAgIHZhbHVlLFxuXHRcdFx0ICAgIGV4dHJhO1xuXHRcdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0XHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHRcdCAqIEBuYW1lIGVuY29kZVxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdFx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRcdHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0XHR9KS5qb2luKCcnKTtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0XHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0XHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0XHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG5cdFx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYmFzaWNUb0RpZ2l0KGNvZGVQb2ludCkge1xuXHRcdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJhc2U7XG5cdFx0fVxuXHRcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdFx0ICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHRcdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG5cdFx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0XHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0XHQgKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuXHRcdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZGlnaXRUb0Jhc2ljKGRpZ2l0LCBmbGFnKSB7XG5cdFx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0XHRyZXR1cm4gZGlnaXQgKyAyMiArIDc1ICogKGRpZ2l0IDwgMjYpIC0gKChmbGFnICE9IDApIDw8IDUpO1xuXHRcdH1cblx0XG5cdFx0LyoqXG5cdFx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0XHQgKiBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNDkyI3NlY3Rpb24tMy40XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGFwdChkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcblx0XHRcdHZhciBrID0gMDtcblx0XHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0XHRkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG5cdFx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdFx0ICogc3ltYm9scy5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdFx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdFx0Ly8gRG9uJ3QgdXNlIFVDUy0yXG5cdFx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0XHQgICAgb3V0LFxuXHRcdFx0ICAgIGkgPSAwLFxuXHRcdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHRcdCAgICBiaWFzID0gaW5pdGlhbEJpYXMsXG5cdFx0XHQgICAgYmFzaWMsXG5cdFx0XHQgICAgaixcblx0XHRcdCAgICBpbmRleCxcblx0XHRcdCAgICBvbGRpLFxuXHRcdFx0ICAgIHcsXG5cdFx0XHQgICAgayxcblx0XHRcdCAgICBkaWdpdCxcblx0XHRcdCAgICB0LFxuXHRcdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdFx0ICAgIGJhc2VNaW51c1Q7XG5cdFxuXHRcdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50czogbGV0IGBiYXNpY2AgYmUgdGhlIG51bWJlciBvZiBpbnB1dCBjb2RlXG5cdFx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cdFxuXHRcdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0XHRiYXNpYyA9IDA7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGJhc2ljOyArK2opIHtcblx0XHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0XHRlcnJvcignbm90LWJhc2ljJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdFx0Ly8gcG9pbnRzIHdlcmUgY29waWVkOyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG90aGVyd2lzZS5cblx0XG5cdFx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXHRcblx0XHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHRcdC8vIHdoaWNoIGdldHMgYWRkZWQgdG8gYGlgLiBUaGUgb3ZlcmZsb3cgY2hlY2tpbmcgaXMgZWFzaWVyXG5cdFx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRcdGZvciAob2xkaSA9IGksIHcgPSAxLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRlcnJvcignaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0ZGlnaXQgPSBiYXNpY1RvRGlnaXQoaW5wdXQuY2hhckNvZGVBdChpbmRleCsrKSk7XG5cdFxuXHRcdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFxuXHRcdFx0XHRcdGlmIChkaWdpdCA8IHQpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0dyAqPSBiYXNlTWludXNUO1xuXHRcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXHRcblx0XHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdFx0aWYgKGZsb29yKGkgLyBvdXQpID4gbWF4SW50IC0gbikge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0XHRpICU9IG91dDtcblx0XG5cdFx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXHRcblx0XHRcdH1cblx0XG5cdFx0XHRyZXR1cm4gdWNzMmVuY29kZShvdXRwdXQpO1xuXHRcdH1cblx0XG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0XHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0XHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0XHR2YXIgbixcblx0XHRcdCAgICBkZWx0YSxcblx0XHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHRcdCAgICBiaWFzLFxuXHRcdFx0ICAgIGosXG5cdFx0XHQgICAgbSxcblx0XHRcdCAgICBxLFxuXHRcdFx0ICAgIGssXG5cdFx0XHQgICAgdCxcblx0XHRcdCAgICBjdXJyZW50VmFsdWUsXG5cdFx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHRcdCAgICBpbnB1dExlbmd0aCxcblx0XHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0XHQgICAgYmFzZU1pbnVzVCxcblx0XHRcdCAgICBxTWludXNUO1xuXHRcblx0XHRcdC8vIENvbnZlcnQgdGhlIGlucHV0IGluIFVDUy0yIHRvIFVuaWNvZGVcblx0XHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cdFxuXHRcdFx0Ly8gQ2FjaGUgdGhlIGxlbmd0aFxuXHRcdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdFxuXHRcdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgc3RhdGVcblx0XHRcdG4gPSBpbml0aWFsTjtcblx0XHRcdGRlbHRhID0gMDtcblx0XHRcdGJpYXMgPSBpbml0aWFsQmlhcztcblx0XG5cdFx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblx0XG5cdFx0XHQvLyBgaGFuZGxlZENQQ291bnRgIGlzIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgdGhhdCBoYXZlIGJlZW4gaGFuZGxlZDtcblx0XHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblx0XG5cdFx0XHQvLyBGaW5pc2ggdGhlIGJhc2ljIHN0cmluZyAtIGlmIGl0IGlzIG5vdCBlbXB0eSAtIHdpdGggYSBkZWxpbWl0ZXJcblx0XHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHRcdHdoaWxlIChoYW5kbGVkQ1BDb3VudCA8IGlucHV0TGVuZ3RoKSB7XG5cdFxuXHRcdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHRcdC8vIGxhcmdlciBvbmU6XG5cdFx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA+PSBuICYmIGN1cnJlbnRWYWx1ZSA8IG0pIHtcblx0XHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHRcdC8vIGJ1dCBndWFyZCBhZ2FpbnN0IG92ZXJmbG93XG5cdFx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0ZGVsdGEgKz0gKG0gLSBuKSAqIGhhbmRsZWRDUENvdW50UGx1c09uZTtcblx0XHRcdFx0biA9IG07XG5cdFxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgbiAmJiArK2RlbHRhID4gbWF4SW50KSB7XG5cdFx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRcdGZvciAocSA9IGRlbHRhLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHQrK2RlbHRhO1xuXHRcdFx0XHQrK247XG5cdFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKTtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0XHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdFx0ICogaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgb24gYSBzdHJpbmcgdGhhdCBoYXMgYWxyZWFkeSBiZWVuXG5cdFx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZWQgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0b1xuXHRcdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0XHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0XHQgKiBzdHJpbmcuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0OiBzdHJpbmc7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHRcdCAqIFB1bnljb2RlLiBPbmx5IHRoZSBub24tQVNDSUkgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHdpbGwgYmUgY29udmVydGVkLFxuXHRcdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHRcdCAqIEFTQ0lJLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdFx0ICogVW5pY29kZSBzdHJpbmcuXG5cdFx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFB1bnljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBkb21haW4gbmFtZSBvclxuXHRcdCAqIGVtYWlsIGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdG9BU0NJSShpbnB1dCkge1xuXHRcdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHRcdD8gJ3huLS0nICsgZW5jb2RlKHN0cmluZylcblx0XHRcdFx0XHQ6IHN0cmluZztcblx0XHRcdH0pO1xuXHRcdH1cblx0XG5cdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdFxuXHRcdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0XHRwdW55Y29kZSA9IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0J3ZlcnNpb24nOiAnMS4zLjInLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHRcdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHRcdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0J3VjczInOiB7XG5cdFx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0XHQnZW5jb2RlJzogdWNzMmVuY29kZVxuXHRcdFx0fSxcblx0XHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHRcdH07XG5cdFxuXHRcdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHRcdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuXHRcdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0XHRpZiAoXG5cdFx0XHR0cnVlXG5cdFx0KSB7XG5cdFx0XHQhKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHRcdH0uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG5cdFx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0XHRpZiAobW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0XHR9XG5cdFxuXHR9KHRoaXMpKTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKShtb2R1bGUpLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRcdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHRcdH1cblx0XHRyZXR1cm4gbW9kdWxlO1xuXHR9XG5cblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRleHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0ZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG5cbi8qKiovIH0sXG4vKiAxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG5cdC8vXG5cdC8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG5cdC8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblx0Ly8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG5cdC8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcblx0Ly8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuXHQvLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcblx0Ly8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdC8vXG5cdC8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG5cdC8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQvL1xuXHQvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG5cdC8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcblx0Ly8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuXHQvLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcblx0Ly8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG5cdC8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcblx0Ly8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcblx0Ly8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG5cdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5cdGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuXHQgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuXHQgIHNlcCA9IHNlcCB8fCAnJic7XG5cdCAgZXEgPSBlcSB8fCAnPSc7XG5cdCAgdmFyIG9iaiA9IHt9O1xuXHRcblx0ICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfVxuXHRcblx0ICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuXHQgIHFzID0gcXMuc3BsaXQoc2VwKTtcblx0XG5cdCAgdmFyIG1heEtleXMgPSAxMDAwO1xuXHQgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG5cdCAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuXHQgIH1cblx0XG5cdCAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcblx0ICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcblx0ICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuXHQgICAgbGVuID0gbWF4S2V5cztcblx0ICB9XG5cdFxuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0ICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcblx0ICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuXHQgICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cdFxuXHQgICAgaWYgKGlkeCA+PSAwKSB7XG5cdCAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuXHQgICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBrc3RyID0geDtcblx0ICAgICAgdnN0ciA9ICcnO1xuXHQgICAgfVxuXHRcblx0ICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG5cdCAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXHRcblx0ICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuXHQgICAgICBvYmpba10gPSB2O1xuXHQgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcblx0ICAgICAgb2JqW2tdLnB1c2godik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIHJldHVybiBvYmo7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cblx0Ly9cblx0Ly8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcblx0Ly8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXHQvLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcblx0Ly8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuXHQvLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG5cdC8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuXHQvLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcblx0Ly9cblx0Ly8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcblx0Ly8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cdC8vXG5cdC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncblx0Ly8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuXHQvLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG5cdC8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuXHQvLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcblx0Ly8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuXHQvLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcblx0ICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG5cdCAgICBjYXNlICdzdHJpbmcnOlxuXHQgICAgICByZXR1cm4gdjtcblx0XG5cdCAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcblx0ICAgIGNhc2UgJ251bWJlcic6XG5cdCAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblx0XG5cdCAgICBkZWZhdWx0OlxuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcblx0ICBzZXAgPSBzZXAgfHwgJyYnO1xuXHQgIGVxID0gZXEgfHwgJz0nO1xuXHQgIGlmIChvYmogPT09IG51bGwpIHtcblx0ICAgIG9iaiA9IHVuZGVmaW5lZDtcblx0ICB9XG5cdFxuXHQgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHQgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcblx0ICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcblx0ICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuXHQgICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcblx0ICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuXHQgICAgICAgIH0pLmpvaW4oc2VwKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuXHQgICAgICB9XG5cdCAgICB9KS5qb2luKHNlcCk7XG5cdFxuXHQgIH1cblx0XG5cdCAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG5cdCAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuXHQgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiAxNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGRvY3VtZW50XG5cdCAqL1xuXHR2YXIgRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBEb2N1bWVudCgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9jdW1lbnQpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGRvY3VtZW50IGhlaWdodFxuXHQgICAgICogQHJldHVybnMge251bWJlcn1cblx0ICAgICAqL1xuXHQgICAgRG9jdW1lbnQuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBkb2N1bWVudCB3aWR0aFxuXHQgICAgICogQHJldHVybnMge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBEb2N1bWVudC5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBkb2N1bWVudCB0b3Agc2Nyb2xsXG5cdCAgICAgKiBAcGFyYW0gb2JqV2luZG93XG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRG9jdW1lbnQuZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgaWYgKF9VdGlsc1dpbmRvdzIuZGVmYXVsdC5pc1dpbmRvdyhvYmpXaW5kb3cpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBvYmpXaW5kb3cucGFnZVlPZmZzZXQgfHwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keSAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgZG9jdW1lbnQgbGVmdCBzY3JvbGxcblx0ICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LnBhZ2VYT2Zmc2V0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIE5hTjtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgZG9jdW1lbnQgc2Nyb2xsc1xuXHQgICAgICogQHBhcmFtIG9ialdpbmRvd1xuXHQgICAgICogQHJldHVybiB7e2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERvY3VtZW50LmdldFNjcm9sbCA9IGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIGlmIChfVXRpbHNXaW5kb3cyLmRlZmF1bHQuaXNXaW5kb3cob2JqV2luZG93KSkge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgbGVmdDogRG9jdW1lbnQuZ2V0U2Nyb2xsTGVmdChvYmpXaW5kb3cpLFxuXHQgICAgICAgICAgICAgICAgdG9wOiBEb2N1bWVudC5nZXRTY3JvbGxUb3Aob2JqV2luZG93KVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICBsZWZ0OiBOYU4sXG5cdCAgICAgICAgICAgICAgICB0b3A6IE5hTlxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIERvY3VtZW50O1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDtcblxuLyoqKi8gfSxcbi8qIDE3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0LyoqXG5cdCAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggd2luZG93XG5cdCAqL1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgV2luZG93ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gV2luZG93KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kb3cpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2sgaWYgaXQgaXMgd2luZG93XG5cdCAgICAgKiBAcGFyYW0gb2JqV2luZG93XG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBXaW5kb3cuaXNXaW5kb3cgPSBmdW5jdGlvbiBpc1dpbmRvdyhvYmpXaW5kb3cpIHtcblx0ICAgICAgICByZXR1cm4gb2JqV2luZG93ICYmICh0eXBlb2Ygb2JqV2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqV2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgb2JqV2luZG93LmRvY3VtZW50ICYmIF90eXBlb2Yob2JqV2luZG93LmRvY3VtZW50KSA9PT0gXCJvYmplY3RcIjtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCB3aW5kb3cgaGVpZ2h0XG5cdCAgICAgKiBAcGFyYW0gb2JqV2luZG93XG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgV2luZG93LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIGlmIChXaW5kb3cuaXNXaW5kb3cob2JqV2luZG93KSkge1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LmlubmVySGVpZ2h0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCB3aW5kb3cgd2lkdGhcblx0ICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBXaW5kb3cuZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIGlmIChXaW5kb3cuaXNXaW5kb3cob2JqV2luZG93KSkge1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqV2luZG93LmlubmVyV2lkdGggfHwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCB3aW5kb3cgc2l6ZXNcblx0ICAgICAqIEByZXR1cm4ge3toZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgV2luZG93LmdldFNpemVzID0gZnVuY3Rpb24gZ2V0U2l6ZXMoKSB7XG5cdCAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXHRcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBoZWlnaHQ6IFdpbmRvdy5nZXRIZWlnaHQob2JqV2luZG93KSxcblx0ICAgICAgICAgICAgd2lkdGg6IFdpbmRvdy5nZXRXaWR0aChvYmpXaW5kb3cpXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIFdpbmRvdztcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gV2luZG93O1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdHZhciBfVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlscyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIERPTVxuXHQgKi9cblx0dmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIERPTSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRE9NKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIGRvbSBkb2N1bWVudFxuXHQgICAgICogQHBhcmFtIGRvbURvY3VtZW50XG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdCAgICBET00uaXNET01Eb2N1bWVudCA9IGZ1bmN0aW9uIGlzRE9NRG9jdW1lbnQoZG9tRG9jdW1lbnQpIHtcblx0ICAgICAgICByZXR1cm4gISghZG9tRG9jdW1lbnQgfHwgdHlwZW9mIGRvbURvY3VtZW50ID09PSBcImJvb2xlYW5cIiB8fCB0eXBlb2YgZG9tRG9jdW1lbnQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRvbURvY3VtZW50ID09PSBcInN0cmluZ1wiIHx8IGRvbURvY3VtZW50Lm5vZGVUeXBlICE9PSA5KTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEZpbmQgYW5kIHZhbGlkYXRlIE5vZGUgaW4gRE9NIERvY3VtZW50XG5cdCAgICAgKiBAcGFyYW0gZG9tTm9kZVxuXHQgICAgICogQHBhcmFtIGRvbURvY3VtZW50XG5cdCAgICAgKiBAcmV0dXJuIHtFbGVtZW50IHwgYm9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uZ2V0RE9NTm9kZSA9IGZ1bmN0aW9uIGdldERPTU5vZGUoZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdFxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENoZWNrIGlmIGRvbURvY3VtZW50IGlzIGEgdmFsaWQgdmFyaWFibGVcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpZiAoIURPTS5pc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSkge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENoZWNrIGlmIGRvbU5vZGUgaXMgYSB2YWxpZCB2YXJpYWJsZVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGlmICghZG9tTm9kZSB8fCB0eXBlb2YgZG9tTm9kZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGRvbU5vZGUgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBkb21Ob2RlIGlzIGEgc3RyaW5nIGl0IG1pZ2h0IGJlIGFuIElEXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSBcInN0cmluZ1wiKSB7XG5cdCAgICAgICAgICAgIGRvbU5vZGUgPSBkb21Eb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21Ob2RlKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2hlY2sgaWYgZG9tTm9kZSBpcyBhIHZhbGlkIHZhcmlhYmxlXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaWYgKCFkb21Ob2RlIHx8IGRvbU5vZGUubm9kZVR5cGUgIT09IDEgfHwgIWRvbU5vZGUucGFyZW50Tm9kZSB8fCBkb21Ob2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09IFwiSFRNTFwiIHx8ICFkb21Eb2N1bWVudC5jb250YWlucyhkb21Ob2RlKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBkb21Ob2RlO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGVsZW1lbnQgc2l6ZXMgYW5kIHBvc2l0aW9uXG5cdCAgICAgKiBAcGFyYW0gZG9tTm9kZVxuXHQgICAgICogQHBhcmFtIGRvbURvY3VtZW50XG5cdCAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG5cdCAgICAgKiBAcmV0dXJuIHt7Ym90dG9tOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGRvbU5vZGUpIHtcblx0ICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuXHQgICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXHRcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGUgcmVzdWx0IHNpemUgYW5kIHBvc2l0aW9uIG9iamVjdFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHZhciBvYmpSZXQgPSB7XG5cdCAgICAgICAgICAgIGJvdHRvbTogMCxcblx0ICAgICAgICAgICAgaGVpZ2h0OiAwLFxuXHQgICAgICAgICAgICBsZWZ0OiAwLFxuXHQgICAgICAgICAgICByaWdodDogMCxcblx0ICAgICAgICAgICAgdG9wOiAwLFxuXHQgICAgICAgICAgICB3aWR0aDogMFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgZG9tTm9kZSA9IERPTS5nZXRET01Ob2RlKGRvbU5vZGUsIGRvbURvY3VtZW50KTtcblx0ICAgICAgICBpZiAoIWRvbU5vZGUpIHtcblx0ICAgICAgICAgICAgX1V0aWxzMi5kZWZhdWx0Lndhcm4oXCJVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBET00gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGluIHRoYXQgRE9NIERvY3VtZW50XCIpO1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqUmV0O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBzaG93Rm9yY2UgPSAhIXNob3dGb3JjZTtcblx0ICAgICAgICB2YXIgc3R5bGVzID0gdm9pZCAwO1xuXHQgICAgICAgIGlmIChzaG93Rm9yY2UpIHtcblx0ICAgICAgICAgICAgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShkb21Ob2RlKTtcblx0ICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0ICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBkZWZhdWx0IG1ldGhvZCBpcyBzdXBwb3J0ZWQgdGhhbiB1c2UgaXRcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpZiAoZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0ICAgICAgICAgICAgb2JqUmV0ID0gZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElFIGhhY2tcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG9ialJldCA9IHtcblx0ICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqUmV0LmJvdHRvbSxcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogb2JqUmV0LmhlaWdodCB8fCBkb21Ob2RlLmNsaWVudEhlaWdodCxcblx0ICAgICAgICAgICAgICAgIGxlZnQ6IG9ialJldC5sZWZ0LFxuXHQgICAgICAgICAgICAgICAgcmlnaHQ6IG9ialJldC5yaWdodCxcblx0ICAgICAgICAgICAgICAgIHRvcDogb2JqUmV0LnRvcCxcblx0ICAgICAgICAgICAgICAgIHdpZHRoOiBvYmpSZXQud2lkdGggfHwgZG9tTm9kZS5jbGllbnRXaWR0aFxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBXcml0ZSB0aGUgZWxlbWVudCBpbiBhIHRlbXBvcmFyeSB2YXJpYWJsZVxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgdmFyIGRvbUVsZW1lbnQgPSBkb21Ob2RlO1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ2FsY3VsYXRlZCBiYXNpYyBwYXJhbWV0ZXJzIG9mIHRoZSBlbGVtZW50XG5cdCAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICB2YXIgb2JqQ29vcmRpbmF0ZXMgPSB7XG5cdCAgICAgICAgICAgICAgICBoZWlnaHQ6IGRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuXHQgICAgICAgICAgICAgICAgd2lkdGg6IGRvbUVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdCAgICAgICAgICAgICAgICB4OiAwLFxuXHQgICAgICAgICAgICAgICAgeTogMFxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQXJlIHBhc3NlZCBvbiB0byBhbGwgcGFyZW50cyBhbmQgdGFrZSBpbnRvIGFjY291bnQgdGhlaXIgb2Zmc2V0c1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgd2hpbGUgKGRvbUVsZW1lbnQpIHtcblx0ICAgICAgICAgICAgICAgIG9iakNvb3JkaW5hdGVzLnggKz0gZG9tRWxlbWVudC5vZmZzZXRMZWZ0O1xuXHQgICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueSArPSBkb21FbGVtZW50Lm9mZnNldFRvcDtcblx0ICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50Lm9mZnNldFBhcmVudDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG9ialJldCA9IHtcblx0ICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqQ29vcmRpbmF0ZXMueSArIG9iakNvb3JkaW5hdGVzLmhlaWdodCxcblx0ICAgICAgICAgICAgICAgIGhlaWdodDogb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuXHQgICAgICAgICAgICAgICAgbGVmdDogb2JqQ29vcmRpbmF0ZXMueCxcblx0ICAgICAgICAgICAgICAgIHJpZ2h0OiBvYmpDb29yZGluYXRlcy54ICsgb2JqQ29vcmRpbmF0ZXMud2lkdGgsXG5cdCAgICAgICAgICAgICAgICB0b3A6IG9iakNvb3JkaW5hdGVzLnksXG5cdCAgICAgICAgICAgICAgICB3aWR0aDogb2JqQ29vcmRpbmF0ZXMud2lkdGhcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHNob3dGb3JjZSAmJiBkb21Ob2RlKSB7XG5cdCAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybiBzaXplIGFuZCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBvYmpSZXQ7XG5cdCAgICB9O1xuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRmluZCBlbGVtZW50IHBvc2l0aW9uXG5cdCAgICAgKiBAcGFyYW0gZG9tTm9kZVxuXHQgICAgICogQHBhcmFtIGRvbURvY3VtZW50XG5cdCAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG5cdCAgICAgKiBAcmV0dXJuIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG5cdCAgICAgKi9cblx0ICAgIERPTS5maW5kRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlKSB7XG5cdCAgICAgICAgdmFyIGRvbURvY3VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcblx0ICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblx0XG5cdCAgICAgICAgdmFyIG9ialJldCA9IHtcblx0ICAgICAgICAgICAgbGVmdDogMCxcblx0ICAgICAgICAgICAgdG9wOiAwXG5cdCAgICAgICAgfTtcblx0ICAgICAgICBkb21Ob2RlID0gRE9NLmdldERPTU5vZGUoZG9tTm9kZSwgZG9tRG9jdW1lbnQpO1xuXHQgICAgICAgIGlmICghZG9tTm9kZSkge1xuXHQgICAgICAgICAgICBfVXRpbHMyLmRlZmF1bHQud2FybihcIlV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uOiBET00gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGluIHRoYXQgRE9NIERvY3VtZW50XCIpO1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqUmV0O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBzaG93Rm9yY2UgPSAhIXNob3dGb3JjZTtcblx0ICAgICAgICB3aGlsZSAoZG9tTm9kZSkge1xuXHQgICAgICAgICAgICB2YXIgc3R5bGVzID0gdm9pZCAwO1xuXHQgICAgICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG5cdCAgICAgICAgICAgICAgICBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb21Ob2RlKTtcblx0ICAgICAgICAgICAgICAgIGlmIChzdHlsZXMgJiYgc3R5bGVzLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG9ialJldC5sZWZ0ICs9IGRvbU5vZGUub2Zmc2V0TGVmdDtcblx0ICAgICAgICAgICAgb2JqUmV0LnRvcCArPSBkb21Ob2RlLm9mZnNldFRvcDtcblx0ICAgICAgICAgICAgZG9tTm9kZSA9IGRvbU5vZGUub2Zmc2V0UGFyZW50O1xuXHQgICAgICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcblx0ICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG9ialJldDtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEFkZCBldmVudCBsaXN0ZW5lclxuXHQgICAgICogQHBhcmFtIG9ialxuXHQgICAgICogQHBhcmFtIG5hbWVcblx0ICAgICAqIEBwYXJhbSBmdW5jXG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRE9NLmFkZEV2ZW50ID0gZnVuY3Rpb24gYWRkRXZlbnQob2JqLCBuYW1lLCBmdW5jKSB7XG5cdCAgICAgICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpID09PSBcIm9iamVjdFwiICYmIG9iai5ub2RlVHlwZSA9PT0gMSAmJiBvYmoucGFyZW50RWxlbWVudCAmJiBvYmoucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgJiYgdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICBpZiAob2JqLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0ICAgICAgICAgICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmMsIGZhbHNlKTtcblx0ICAgICAgICAgICAgfSBlbHNlIGlmIChvYmouYXR0YWNoRXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgIG9iai5hdHRhY2hFdmVudChcIm9uXCIgKyBuYW1lLCBmdW5jKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyXG5cdCAgICAgKiBAcGFyYW0gb2JqXG5cdCAgICAgKiBAcGFyYW0gbmFtZVxuXHQgICAgICogQHBhcmFtIGZ1bmNcblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00ucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcblx0ICAgICAgICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKSkgPT09IFwib2JqZWN0XCIgJiYgb2JqLm5vZGVUeXBlID09PSAxICYmIG9iai5wYXJlbnRFbGVtZW50ICYmIG9iai5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiAmJiB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgIGlmIChvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuXHQgICAgICAgICAgICB9IGVsc2UgaWYgKG9iai5kZXRhY2hFdmVudCkge1xuXHQgICAgICAgICAgICAgICAgb2JqLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBDaGVjayBpZiBlbGVtZW50IGhhcyBjbGFzcyBuYW1lXG5cdCAgICAgKiBAcGFyYW0gZWxlbWVudFxuXHQgICAgICogQHBhcmFtIGNsYXNzTmFtZVxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uaGFzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuXHQgICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIpIHtcblx0ICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnRyaW0oKTtcblx0ICAgICAgICAgICAgcmV0dXJuIChcIiBcIiArIGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBBZGQgY2xhc3MgbmFtZVxuXHQgICAgICogQHBhcmFtIGVsZW1lbnRcblx0ICAgICAqIEBwYXJhbSBjbGFzc05hbWVcblx0ICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5hZGRDbGFzc05hbWUgPSBmdW5jdGlvbiBhZGRDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIikge1xuXHQgICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuXHQgICAgICAgICAgICBpZiAoIURPTS5oYXNDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNsID0gZWxlbWVudC5jbGFzc05hbWU7XG5cdCAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsID8gY2wgKyBcIiBcIiArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBSZW1vdmUgY2xhc3MgbmFtZVxuXHQgICAgICogQHBhcmFtIGVsZW1lbnRcblx0ICAgICAqIEBwYXJhbSBjbGFzc05hbWVcblx0ICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiAmJiB0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcblx0ICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnRyaW0oKTtcblx0ICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS50cmltKCkuc3BsaXQoXCIgXCIpO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gY2xhc3Nlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHQgICAgICAgICAgICAgICAgY2xhc3Nlc1tpXSA9IGNsYXNzZXNbaV0udHJpbSgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKCFjbGFzc2VzW2ldIHx8IGNsYXNzZXNbaV0gPT09IGNsYXNzTmFtZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcblx0ICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIGNsYXNzIG5hbWVcblx0ICAgICAqIEBwYXJhbSBlbGVtZW50XG5cdCAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG5cdCAgICAgKiBAcGFyYW0gdG9nZ2xlXG5cdCAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00udG9nZ2xlQ2xhc3NOYW1lID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSwgdG9nZ2xlKSB7XG5cdCAgICAgICAgaWYgKGVsZW1lbnQgJiYgKHR5cGVvZiBlbGVtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZWxlbWVudCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHRvZ2dsZSA9PT0gXCJib29sZWFuXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIikge1xuXHQgICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuXHQgICAgICAgICAgICBpZiAodG9nZ2xlKSB7XG5cdCAgICAgICAgICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogUmVwbGFjZSBjbGFzcyBuYW1lXG5cdCAgICAgKiBAcGFyYW0gZWxlbWVudFxuXHQgICAgICogQHBhcmFtIG9sZENsYXNzTmFtZVxuXHQgICAgICogQHBhcmFtIG5ld0NsYXNzTmFtZVxuXHQgICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRE9NLnJlcGxhY2VDbGFzcyA9IGZ1bmN0aW9uIHJlcGxhY2VDbGFzcyhlbGVtZW50LCBvbGRDbGFzc05hbWUsIG5ld0NsYXNzTmFtZSkge1xuXHQgICAgICAgIGlmIChlbGVtZW50ICYmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2xkQ2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBuZXdDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIikge1xuXHQgICAgICAgICAgICBvbGRDbGFzc05hbWUgPSBvbGRDbGFzc05hbWUudHJpbSgpO1xuXHQgICAgICAgICAgICBuZXdDbGFzc05hbWUgPSBuZXdDbGFzc05hbWUudHJpbSgpO1xuXHQgICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIG9sZENsYXNzTmFtZSk7XG5cdCAgICAgICAgICAgIERPTS5hZGRDbGFzc05hbWUoZWxlbWVudCwgbmV3Q2xhc3NOYW1lKTtcblx0ICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGVsZW1lbnQgYnkgdGFnIG5hbWUgYW5kIGluZGV4XG5cdCAgICAgKiBAcGFyYW0gdG5cblx0ICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuXHQgICAgICogQHBhcmFtIGluZGV4XG5cdCAgICAgKiBAcmV0dXJuIHtOb2RlfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5nZXRFbGVtZW50QnlUYWdOYW1lID0gZnVuY3Rpb24gZ2V0RWxlbWVudEJ5VGFnTmFtZSh0bikge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdCAgICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzWzJdO1xuXHRcblx0ICAgICAgICBpZiAodHlwZW9mIHRuID09PSBcInN0cmluZ1wiICYmIERPTS5pc0RPTURvY3VtZW50KGRvbURvY3VtZW50KSAmJiB0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIpIHtcblx0ICAgICAgICAgICAgdmFyIGVscyA9IGRvbURvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRuKTtcblx0ICAgICAgICAgICAgcmV0dXJuIGVsc1tpbmRleF0gfHwgbnVsbDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgbGluZSBoZWlnaHRcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uZ2V0TGluZUhlaWdodCA9IGZ1bmN0aW9uIGdldExpbmVIZWlnaHQoKSB7XG5cdCAgICAgICAgdmFyIHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG5cdCAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBzdHlsZXMubGluZUhlaWdodDtcblx0ICAgICAgICB2YXIgbGluZUhlaWdodERpZyA9IHBhcnNlSW50KGxpbmVIZWlnaHQsIDEwKTtcblx0ICAgICAgICB2YXIgZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG5cdCAgICAgICAgdmFyIGZvbnRTaXplRGlnID0gcGFyc2VJbnQoZm9udFNpemUsIDEwKTtcblx0ICAgICAgICBpZiAoaXNGaW5pdGUobGluZUhlaWdodERpZykpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGxpbmVIZWlnaHREaWc7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZvbnRTaXplRGlnO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIERPTTtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gRE9NO1xuXG4vKioqLyB9LFxuLyogMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdHZhciBfVXRpbHNET00gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblx0XG5cdHZhciBfVXRpbHNET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNET00pO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRcblx0dmFyIF9VdGlsc1dpbmRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1dpbmRvdyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBNb3VzZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIE1vdXNlKCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb3VzZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBOb3JtYWxpc2UgbW91c2UgZGVsdGFcblx0ICAgICAqIEBwYXJhbSBlXG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0ICAgIE1vdXNlLmdldFdoZWVsRGVsdGEgPSBmdW5jdGlvbiBnZXRXaGVlbERlbHRhKGUpIHtcblx0ICAgICAgICBpZiAoZSAmJiAodHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKSkgPT09IFwib2JqZWN0XCIgJiYgKFwiZGV0YWlsXCIgaW4gZSB8fCBcIndoZWVsRGVsdGFcIiBpbiBlIHx8IFwid2hlZWxEZWx0YVlcIiBpbiBlIHx8IFwid2hlZWxEZWx0YVhcIiBpbiBlIHx8IFwiZGVsdGFZXCIgaW4gZSB8fCBcImRlbHRhWFwiIGluIGUgfHwgXCJheGlzXCIgaW4gZSB8fCBcImRlbHRhTW9kZVwiIGluIGUpKSB7XG5cdCAgICAgICAgICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcblx0ICAgICAgICAgICAgdmFyIGRlbHRhWCA9IHZvaWQgMDtcblx0ICAgICAgICAgICAgdmFyIGRlbHRhWSA9IHZvaWQgMDtcblx0ICAgICAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuXHQgICAgICAgICAgICBpZiAoXCJkZXRhaWxcIiBpbiBlKSB7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmRldGFpbCAqIC0xO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmIChcIndoZWVsRGVsdGFcIiBpbiBlKSB7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKFwid2hlZWxEZWx0YVlcIiBpbiBlKSB7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGFZO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmIChcIndoZWVsRGVsdGFYXCIgaW4gZSkge1xuXHQgICAgICAgICAgICAgICAgZGVsdGFYID0gZS53aGVlbERlbHRhWCAqIC0xO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNyBob3Jpem9udGFsIHNjcm9sbGluZyByZWxhdGVkIHRvIERPTU1vdXNlU2Nyb2xsIGV2ZW50XG5cdCAgICAgICAgICAgIGlmIChcImF4aXNcIiBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcblx0ICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWSAqIC0xO1xuXHQgICAgICAgICAgICAgICAgZGVsdGFZID0gMDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcblx0ICAgICAgICAgICAgaWYgKFwiZGVsdGFZXCIgaW4gZSkge1xuXHQgICAgICAgICAgICAgICAgZGVsdGFZID0gZS5kZWx0YVkgKiAtMTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAoXCJkZWx0YVhcIiBpbiBlKSB7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVggPSBlLmRlbHRhWDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBOZWVkIHRvIGNvbnZlcnQgbGluZXMgYW5kIHBhZ2VzIHRvIHBpeGVscyBpZiB3ZSBhcmVuXCJ0IGFscmVhZHkgaW4gcGl4ZWxzXG5cdCAgICAgICAgICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBkZWx0YSBtb2Rlczpcblx0ICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAwIGlzIGJ5IHBpeGVscywgbm90aGluZyB0byBkb1xuXHQgICAgICAgICAgICAvLyAgICogZGVsdGFNb2RlIDEgaXMgYnkgbGluZXNcblx0ICAgICAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAyIGlzIGJ5IHBhZ2VzXG5cdCAgICAgICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSBfVXRpbHNET00yLmRlZmF1bHQuZ2V0TGluZUhlaWdodCgpO1xuXHQgICAgICAgICAgICAgICAgZGVsdGFZID0gZGVsdGFZICogbGluZUhlaWdodDtcblx0ICAgICAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIGxpbmVIZWlnaHQ7XG5cdCAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YU1vZGUgPT09IDIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWdpaHQgPSBfVXRpbHNXaW5kb3cyLmRlZmF1bHQuZ2V0SGVpZ2h0KCk7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB3aW5kb3doZWdpaHQ7XG5cdCAgICAgICAgICAgICAgICBkZWx0YVggPSBkZWx0YVggKiB3aW5kb3doZWdpaHQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZGVsdGEgPSBkZWx0YVkgPT09IDAgPyBkZWx0YVggOiBkZWx0YVk7XG5cdCAgICAgICAgICAgIHJldHVybiBkZWx0YTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gTmFOO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIE1vdXNlO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBNb3VzZTtcblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0LyoqXG5cdCAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggc2NyZWVuXG5cdCAqL1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gU2NyZWVuKCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JlZW4pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiBpbmZvXG5cdCAgICAgKiBAcmV0dXJuIHt7YXZhaWxhYmxlU2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfSwgY29sb3JEZXB0aDogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIHNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19fVxuXHQgICAgICovXG5cdCAgICBTY3JlZW4uZ2V0SW5mbyA9IGZ1bmN0aW9uIGdldEluZm8oKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYXZhaWxhYmxlU2l6ZTogU2NyZWVuLmdldEF2YWlsYWJsZVNpemVzKCksXG5cdCAgICAgICAgICAgIGNvbG9yRGVwdGg6IFNjcmVlbi5nZXRDb2xvckRlcHRoKCksXG5cdCAgICAgICAgICAgIHBpeGVsUmF0aW86IFNjcmVlbi5nZXRQaXhlbFJhdGlvKCksXG5cdCAgICAgICAgICAgIHNpemU6IFNjcmVlbi5nZXRTaXplcygpXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gaGVpZ2h0XG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQoKSB7XG5cdCAgICAgICAgcmV0dXJuIHNjcmVlbi5oZWlnaHQ7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2NyZWVuIHdpZHRoXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuXHQgICAgICAgIHJldHVybiBzY3JlZW4ud2lkdGg7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2NyZWVuIHNpemVzXG5cdCAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRTaXplcyA9IGZ1bmN0aW9uIGdldFNpemVzKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEhlaWdodCgpLFxuXHQgICAgICAgICAgICB3aWR0aDogU2NyZWVuLmdldFdpZHRoKClcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiBoZWlnaHRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodCA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUhlaWdodCgpIHtcblx0ICAgICAgICByZXR1cm4gc2NyZWVuLmF2YWlsSGVpZ2h0O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiB3aWR0aFxuXHQgICAgICogQHJldHVybnMge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlV2lkdGggPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVXaWR0aCgpIHtcblx0ICAgICAgICByZXR1cm4gc2NyZWVuLmF2YWlsV2lkdGg7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2NyZWVuIHNpemVzXG5cdCAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRBdmFpbGFibGVTaXplcyA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZVNpemVzKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGhlaWdodDogU2NyZWVuLmdldEF2YWlsYWJsZUhlaWdodCgpLFxuXHQgICAgICAgICAgICB3aWR0aDogU2NyZWVuLmdldEF2YWlsYWJsZVdpZHRoKClcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiBwaXhlbCByYXRpb1xuXHQgICAgICogQHJldHVybiB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24gZ2V0UGl4ZWxSYXRpbygpIHtcblx0ICAgICAgICB2YXIgcmF0aW8gPSAxO1xuXHQgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSA+IHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEkpIHtcblx0ICAgICAgICAgICAgcmF0aW8gPSB3aW5kb3cuc2NyZWVuLnN5c3RlbVhEUEkgLyB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgIHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByYXRpbztcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gY29sb3IgZGVwdGhcblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0Q29sb3JEZXB0aCA9IGZ1bmN0aW9uIGdldENvbG9yRGVwdGgoKSB7XG5cdCAgICAgICAgcmV0dXJuIHNjcmVlbi5jb2xvckRlcHRoO1xuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gU2NyZWVuO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBTY3JlZW47XG5cbi8qKiovIH0sXG4vKiAyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHN5c3RlbVxuXHQgKi9cblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFN5c3RlbSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3lzdGVtKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzeXN0ZW0gaW5mb1xuXHQgICAgICogQHJldHVybiB7e25hbWU6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nfX1cblx0ICAgICAqL1xuXHQgICAgU3lzdGVtLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIG5hbWU6IFN5c3RlbS5nZXROYW1lKCksXG5cdCAgICAgICAgICAgIHZlcnNpb246IFN5c3RlbS5nZXRWZXJzaW9uKClcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IE9TIG5hbWVcblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTeXN0ZW0uZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG5cdCAgICAgICAgdmFyIG9zID0gXCJcIjtcblx0ICAgICAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyAxMC4wfFdpbmRvd3MgTlQgMTAuMCkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgMTBcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgOC4xXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyA4XCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyA3XCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9XaW5kb3dzIE5UIDYuMC8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyBWaXN0YVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvV2luZG93cyBOVCA1LjIvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgU2VydmVyIDIwMDNcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMXxXaW5kb3dzIFhQKS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyBYUFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNS4wfFdpbmRvd3MgMjAwMCkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgMjAwMFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIE1FXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyA5OHxXaW45OCkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgOThcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIDk1XCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA0LjB8V2luTlQ0LjB8V2luTlR8V2luZG93cyBOVCkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgTlQgNC4wXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9XaW5kb3dzIENFLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIENFXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9XaW4xNi8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyAzLjExXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9BbmRyb2lkLyxcblx0ICAgICAgICAgICAgczogXCJBbmRyb2lkXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9PcGVuQlNELyxcblx0ICAgICAgICAgICAgczogXCJPcGVuIEJTRFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvU3VuT1MvLFxuXHQgICAgICAgICAgICBzOiBcIlN1biBPU1wiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKExpbnV4fFgxMSkvLFxuXHQgICAgICAgICAgICBzOiBcIkxpbnV4XCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oaVBob25lfGlQYWR8aVBvZCkvLFxuXHQgICAgICAgICAgICBzOiBcImlPU1wiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvTWFjIE9TIFgvLFxuXHQgICAgICAgICAgICBzOiBcIk1hYyBPUyBYXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvLFxuXHQgICAgICAgICAgICBzOiBcIk1hYyBPU1wiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvUU5YLyxcblx0ICAgICAgICAgICAgczogXCJRTlhcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL1VOSVgvLFxuXHQgICAgICAgICAgICBzOiBcIlVOSVhcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL0JlT1MvLFxuXHQgICAgICAgICAgICBzOiBcIkJlT1NcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL09TXFwvMi8sXG5cdCAgICAgICAgICAgIHM6IFwiT1MvMlwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvLFxuXHQgICAgICAgICAgICBzOiBcIlNlYXJjaCBCb3RcIlxuXHQgICAgICAgIH1dO1xuXHQgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNsaWVudFN0cmluZ3MsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG5cdCAgICAgICAgICAgIHZhciBfcmVmO1xuXHRcblx0ICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICB2YXIgY3MgPSBfcmVmO1xuXHRcblx0ICAgICAgICAgICAgaWYgKGNzLnIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHQgICAgICAgICAgICAgICAgb3MgPSBjcy5zO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG9zO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IE9TIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTeXN0ZW0uZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIG9zID0gU3lzdGVtLmdldE5hbWUoKTtcblx0ICAgICAgICB2YXIgb3NWZXJzaW9uID0gXCJcIjtcblx0ICAgICAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XG5cdCAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9XaW5kb3dzICguKikvLmV4ZWMob3MpWzFdO1xuXHQgICAgICAgICAgICBvcyA9IFwiV2luZG93c1wiO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBzd2l0Y2ggKG9zKSB7XG5cdCAgICAgICAgICAgIGNhc2UgXCJNYWMgT1MgWFwiOlxuXHQgICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFsuX1xcZF0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KVsxXTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlIFwiQW5kcm9pZFwiOlxuXHQgICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gL0FuZHJvaWQgKFsuX1xcZF0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KVsxXTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlIFwiaU9TXCI6XG5cdCAgICAgICAgICAgICAgICB2YXIgcmVnID0gL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vLmV4ZWMobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xuXHQgICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gcmVnWzFdICsgXCIuXCIgKyByZWdbMl0gKyBcIi5cIiArIChyZWdbM10gfHwgMCk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG9zVmVyc2lvbjtcblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIFN5c3RlbTtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gU3lzdGVtO1xuXG4vKioqLyB9LFxuLyogMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQnJvd3Nlcik7XG5cdFxuXHR2YXIgX1V0aWxzU2NyZWVuID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdFxuXHR2YXIgX1V0aWxzU2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU2NyZWVuKTtcblx0XG5cdHZhciBfVXRpbHNTeXN0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblx0XG5cdHZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgVXNlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFVzZXIoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVzZXIpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHVzZXIgaW5mb1xuXHQgICAgICogQHJldHVybiB7e2Jyb3dzZXI6IHticm93c2VyOiBzdHJpbmcsIG1vYmlsZTogYm9vbGVhbiwgdmVyc2lvbjogc3RyaW5nfSwgc2NyZWVuOiB7YXZhaWxhYmxlU2l6ZToge2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfSwgY29sb3JEZXB0aDogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIHNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn19LCBzeXN0ZW06IHtuYW1lOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZ319fVxuXHQgICAgICovXG5cdCAgICBVc2VyLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGJyb3dzZXI6IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQuZ2V0SW5mbygpLFxuXHQgICAgICAgICAgICBzY3JlZW46IF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRJbmZvKCksXG5cdCAgICAgICAgICAgIHN5c3RlbTogX1V0aWxzU3lzdGVtMi5kZWZhdWx0LmdldEluZm8oKVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHRcblx0ICAgIHJldHVybiBVc2VyO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVQelZqWVRZcUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EzTlRobVkyTXdZVEJoTnpOaVpXTmhNREZrTXo4ek5EWmlLaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VlhScGJITXVkSE0vTW1VM015b2lMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMVYwYVd4elFXNXBiV0YwYVc5dUxuUnpQMlppTURRcUlpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOVZkR2xzYzBGdWFXMWhkR2x2YmtWaGMybHVaeTUwY3o4d05EUm1LaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VlhScGJITkNjbTkzYzJWeUxuUnpQell3TlRZcUlpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOVZkR2xzYzBOdmIydHBaUzUwY3o5aVpqTmhLaUlzSW5kbFluQmhZMnM2THk4dkxpOStMM1Z5YkM5MWNtd3Vhbk0vWkRaaE5Db2lMQ0ozWldKd1lXTnJPaTh2THk0dmZpOTFjbXd2Zmk5d2RXNTVZMjlrWlM5d2RXNTVZMjlrWlM1cWN6ODROMlJsS2lJc0luZGxZbkJoWTJzNkx5OHZLSGRsWW5CaFkyc3BMMkoxYVd4a2FXNHZiVzlrZFd4bExtcHpQMk16WXpJcUlpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmNYVmxjbmx6ZEhKcGJtY3ZhVzVrWlhndWFuTS9abU5sT0NvaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5eGRXVnllWE4wY21sdVp5OWtaV052WkdVdWFuTS9ZekkxTUNvaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5eGRXVnllWE4wY21sdVp5OWxibU52WkdVdWFuTS9aVGcyWWlvaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxVjBhV3h6Ukc5amRXMWxiblF1ZEhNL1pqZzROaW9pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFWMGFXeHpWMmx1Wkc5M0xuUnpQelV3TmprcUlpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOVZkR2xzYzBSUFRTNTBjejlrT0RkbEtpSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWWFJwYkhOTmIzVnpaUzUwY3o4eE1EVmpLaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VlhScGJITlRZM0psWlc0dWRITS9NMkl4TkNvaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxVjBhV3h6VTNsemRHVnRMblJ6UDJabU5qVXFJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlWZEdsc2MxVnpaWEl1ZEhNL05qZ3pZaW9pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDFRa0ZCWlR0QlFVTm1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096czdPenM3UVVOMFEwRTdPMEZCUlVFN08wRkJSVUVzY1VkQlFXOUhMRzFDUVVGdFFpeEZRVUZGTEcxQ1FVRnRRaXc0U0VGQk9FZzdPMEZCUlRGUk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJMSFZEUVVGelF5eDFRMEZCZFVNc1owSkJRV2RDT3p0QlFVVTNSaXhyUkVGQmFVUXNNRU5CUVRCRExEQkVRVUV3UkN4RlFVRkZPenRCUVVWMlNqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3c0UWtGQk5rSTdRVUZETjBJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIRkxRVUZ2U3p0QlFVTndTenM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUXpzN1FVRkZSRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkQ096czdPenM3UVVOMlQwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFc2RVTkJRWE5ETEhWRFFVRjFReXhuUWtGQlowSTdPMEZCUlRkR0xHdEVRVUZwUkN3d1EwRkJNRU1zTUVSQlFUQkVMRVZCUVVVN08wRkJSWFpLTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFTeHRSRHM3T3pzN08wRkRiRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEd0RVFVRnBSQ3d3UTBGQk1FTXNNRVJCUVRCRUxFVkJRVVU3TzBGQlJYWktPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hqUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXRTdRVUZEWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGpRVUZoTzBGQlEySTdRVUZEUVN4alFVRmhPMEZCUTJJN1FVRkRRU3hqUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVNN08wRkJSVVE3TzBGQlJVRXNORUk3T3pzN096dEJRM1pZUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4clJFRkJhVVFzTUVOQlFUQkRMREJFUVVFd1JDeEZRVUZGT3p0QlFVVjJTanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2EwSkJRV2xDTzBGQlEycENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEVzTkVKQlFUSkNPMEZCUXpOQ0xIVktRVUZ6U2p0QlFVTjBTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clFrRkJhVUk3UVVGRGFrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVNN08wRkJSVVFzTWtJN096czdPenRCUXpsWFFUczdRVUZGUVRzN1FVRkZRU3h4UjBGQmIwY3NiVUpCUVcxQ0xFVkJRVVVzYlVKQlFXMUNMRGhJUVVFNFNEczdRVUZGTVZFc2EwUkJRV2xFTERCRFFVRXdReXd3UkVGQk1FUXNSVUZCUlRzN1FVRkZka283UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR2RDUVVGbE8wRkJRMlk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rSkJRVEJDTzBGQlF6RkNMR3RDUVVGcFFqdEJRVU5xUWl4dlFrRkJiVUk3UVVGRGJrSXNjMEpCUVhGQ08wRkJRM0pDTEcxQ1FVRnJRanRCUVVOc1FpeHhRa0ZCYjBJN1FVRkRjRUlzY1VKQlFXOUNPMEZCUTNCQ0xHVkJRV003UVVGRFpEczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRnpRanRCUVVOMFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUWtGQmMwSTdRVUZEZEVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFRa0ZCYzBJN1FVRkRkRUk3UVVGRFFTdzBSRUZCTWtRc2JVTkJRVzFETEcxRFFVRnRReXgxUTBGQmRVTTdRVUZEZUVzN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTzBGQlExZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFd1FqdEJRVU14UWl4clFrRkJhVUk3UVVGRGFrSXNaMEpCUVdVN1FVRkRaanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVSkJRVzlDTzBGQlEzQkNPMEZCUTBFc2JVUkJRV3RFTzBGQlEyeEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxIbEtRVUYzU2p0QlFVTjRTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4alFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxIVkNRVUZ6UWp0QlFVTjBRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERKQ1FVRXdRanRCUVVNeFFpeHJRa0ZCYVVJN1FVRkRha0lzWjBKQlFXVTdRVUZEWmpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rSkJRVEJDTzBGQlF6RkNMR2RDUVVGbE8wRkJRMlk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ2UWp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnZRanRCUVVOd1FqdEJRVU5CTEcxRVFVRnJSRHRCUVVOc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFMwRkJaMHM3UVVGRGFFczdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4MVFrRkJjMEk3UVVGRGRFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3lRa0ZCTUVJN1FVRkRNVUlzWjBKQlFXVTdRVUZEWmpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVXRCUVdkTE8wRkJRMmhMT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZsTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGRkJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVU03TzBGQlJVUTdPMEZCUlVFc2FVUkJRV2RFTEVkQlFVY3NVenM3T3pzN08wRkRhRmh1UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2FVSkJRV2RDTEV0QlFVczdPMEZCUlhKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5EUVVGeFF6dEJRVU55UXp0QlFVTkJPMEZCUTBFc01rTkJRVEJETEV0QlFVczdRVUZETDBNc01FTkJRWGxETEV0QlFVczdRVUZET1VNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSEZEUVVGdlF6dEJRVU53UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNiMEpCUVcxQ0xEUkNRVUUwUWp0QlFVTXZRenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEc5Q1FVRnRRaXg1UWtGQmVVSTdRVUZETlVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTdzBRMEZCTWtNc1QwRkJUenRCUVVOc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpEUVVFd1F5eFBRVUZQTzBGQlEycEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGpRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2MwSkJRWEZDTEhkQ1FVRjNRanRCUVVNM1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3d5UTBGQk1FTXNUMEZCVHp0QlFVTnFSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdPMEZCUlV3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNLMEpCUVRoQ0xGRkJRVkU3UVVGRGRFTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWVXNUVUZCVFR0QlFVTm9RanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPMjFEUTJ4elFrRTdRVUZEUVN4RlFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVZrc1QwRkJUenRCUVVOdVFpeGxRVUZqTEUxQlFVMDdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJXU3hOUVVGTk8wRkJRMnhDTEdGQlFWa3NVMEZCVXp0QlFVTnlRanRCUVVOQkxHVkJRV01zVFVGQlRUdEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZaTEU5QlFVODdRVUZEYmtJc1lVRkJXU3hUUVVGVE8wRkJRM0pDTzBGQlEwRXNaVUZCWXl4TlFVRk5PMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZaTEU5QlFVODdRVUZEYmtJc1pVRkJZeXhOUVVGTk8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5EUVVGeFF6dEJRVU55UXp0QlFVTkJMRTFCUVVzN1FVRkRUQ3cyUWtGQk5FSTdRVUZETlVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJXU3hOUVVGTk8wRkJRMnhDTEdWQlFXTXNUMEZCVHp0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQldTeFBRVUZQTzBGQlEyNUNMR1ZCUVdNc1QwRkJUenRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRlpMRTlCUVU4N1FVRkRia0lzWlVGQll5eFBRVUZQTzBGQlEzSkNPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBOQlFTdENMRzFEUVVGdFF6dEJRVU5zUlR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVZrc1QwRkJUenRCUVVOdVFpeGxRVUZqTEU5QlFVODdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdOQlFXRXNWMEZCVnp0QlFVTjRRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3g1UWtGQmQwSTdPMEZCUlhoQ0xEQkRRVUY1UXl4eFFrRkJjVUk3TzBGQlJUbEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCYTBNc2IwSkJRVzlDT3p0QlFVVjBSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVmtzVDBGQlR6dEJRVU51UWl4bFFVRmpMRTlCUVU4N1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeGpRVUZoTEdsQ1FVRnBRanRCUVVNNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzTWtKQlFUQkNMR2xDUVVGcFFqdEJRVU16UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMR1ZCUVdNc2FVSkJRV2xDTzBGQlF5OUNPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc0swSkJRVGhDTEc5Q1FVRnZRanRCUVVOc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZaTEU5QlFVODdRVUZEYmtJN1FVRkRRU3hsUVVGakxFOUJRVTg3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCV1N4UFFVRlBPMEZCUTI1Q08wRkJRMEVzWlVGQll5eFBRVUZQTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCUnp0QlFVTklPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0N4SFFVRkZPMEZCUTBZc2RVTkJRWE5ETzBGQlEzUkRPMEZCUTBFc1NVRkJSeXhQUVVGUE8wRkJRMVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkZMRTlCUVU4N1FVRkRWRHRCUVVOQk96dEJRVVZCTEVWQlFVTTdPenM3T3pzN08wRkRhbWhDUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenRCUTFSQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR3RDUVVGcFFpeFRRVUZUTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3p0QlF5OUZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVMRkZCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEVzVFVGQlN6czdRVUZGVERzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3p0QlF5OUVRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFTeDFRMEZCYzBNc2RVTkJRWFZETEdkQ1FVRm5RanM3UVVGRk4wWXNhMFJCUVdsRUxEQkRRVUV3UXl3d1JFRkJNRVFzUlVGQlJUczdRVUZGZGtvN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlF6czdRVUZGUkN3MFFqczdPenM3TzBGRE1VZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMSEZIUVVGdlJ5eHRRa0ZCYlVJc1JVRkJSU3h0UWtGQmJVSXNPRWhCUVRoSU96dEJRVVV4VVN4clJFRkJhVVFzTUVOQlFUQkRMREJFUVVFd1JDeEZRVUZGT3p0QlFVVjJTanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZET3p0QlFVVkVMREJDT3pzN096czdRVU14UlVFN08wRkJSVUU3TzBGQlJVRXNjVWRCUVc5SExHMUNRVUZ0UWl4RlFVRkZMRzFDUVVGdFFpdzRTRUZCT0VnN08wRkJSVEZST3p0QlFVVkJPenRCUVVWQkxIVkRRVUZ6UXl4MVEwRkJkVU1zWjBKQlFXZENPenRCUVVVM1JpeHJSRUZCYVVRc01FTkJRVEJETERCRVFVRXdSQ3hGUVVGRk96dEJRVVYyU2p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWpzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRnpRanRCUVVOMFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYTkNPMEZCUTNSQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwSkJRV2xDTzBGQlEycENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hqUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4alFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTdzJRMEZCTkVNc1VVRkJVVHRCUVVOd1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUXpzN1FVRkZSQ3gxUWpzN096czdPMEZEYmxsQk96dEJRVVZCT3p0QlFVVkJMSEZIUVVGdlJ5eHRRa0ZCYlVJc1JVRkJSU3h0UWtGQmJVSXNPRWhCUVRoSU96dEJRVVV4VVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRU3gxUTBGQmMwTXNkVU5CUVhWRExHZENRVUZuUWpzN1FVRkZOMFlzYTBSQlFXbEVMREJEUVVFd1F5d3dSRUZCTUVRc1JVRkJSVHM3UVVGRmRrbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkRPenRCUVVWRUxIbENPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUVzYTBSQlFXbEVMREJEUVVFd1F5d3dSRUZCTUVRc1JVRkJSVHM3UVVGRmRrbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEd0Q1FVRnBRaXhuUWtGQlowSXNPRUpCUVRoQ0xHbEVRVUZwUkR0QlFVTm9TRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENPMEZCUTJwQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENPMEZCUTJwQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENPMEZCUTJwQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVNN08wRkJSVVFzTUVJN096czdPenRCUTJ4SVFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFTeHJSRUZCYVVRc01FTkJRVEJETERCRVFVRXdSQ3hGUVVGRk96dEJRVVYyU2p0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ08wRkJRMnBDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVMREpLUVVFd1NqdEJRVU14U2pzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGpRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVNN08wRkJSVVFzTUVJN096czdPenRCUTNCTFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRU3gxUTBGQmMwTXNkVU5CUVhWRExHZENRVUZuUWpzN1FVRkZOMFlzYTBSQlFXbEVMREJEUVVFd1F5d3dSRUZCTUVRc1JVRkJSVHM3UVVGRmRrbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEd0Q1FVRnBRaXhWUVVGVkxHdEVRVUZyUkN4WFFVRlhMR2RDUVVGblFpdzRRa0ZCT0VJc2FVUkJRV2xFTEN0Q1FVRXJRaXhYUVVGWE8wRkJRMnBQTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkRPenRCUVVWRUxIZENJaXdpWm1sc1pTSTZJaTR2YkdsaUwxVjBhV3h6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0pWZEdsc2Mxd2lMQ0JiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSlZkR2xzYzF3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKVmRHbHNjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNsY2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmx4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMwc1hHNGdYSFJjZEZ4MGFXUTZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3h2WVdSbFpEb2dabUZzYzJWY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJHOWhaR1ZrSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnd0tUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBM05UaG1ZMk13WVRCaE56TmlaV05oTURGa015SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1WEc1MllYSWdYM1I1Y0dWdlppQTlJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzTG1sMFpYSmhkRzl5SUQwOVBTQmNJbk41YldKdmJGd2lJRDhnWm5WdVkzUnBiMjRnS0c5aWFpa2dleUJ5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhanNnZlNBNklHWjFibU4wYVc5dUlDaHZZbW9wSUhzZ2NtVjBkWEp1SUc5aWFpQW1KaUIwZVhCbGIyWWdVM2x0WW05c0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJZ0ppWWdiMkpxTG1OdmJuTjBjblZqZEc5eUlEMDlQU0JUZVcxaWIyd2dKaVlnYjJKcUlDRTlQU0JUZVcxaWIyd3VjSEp2ZEc5MGVYQmxJRDhnWENKemVXMWliMnhjSWlBNklIUjVjR1Z2WmlCdlltbzdJSDA3WEc1Y2JuWmhjaUJmVlhScGJITkJibWx0WVhScGIyNGdQU0J5WlhGMWFYSmxLRndpTGk5VmRHbHNjMEZ1YVcxaGRHbHZibHdpS1R0Y2JseHVkbUZ5SUY5VmRHbHNjMEZ1YVcxaGRHbHZiaklnUFNCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBLRjlWZEdsc2MwRnVhVzFoZEdsdmJpazdYRzVjYm5aaGNpQmZWWFJwYkhOQ2NtOTNjMlZ5SUQwZ2NtVnhkV2x5WlNoY0lpNHZWWFJwYkhOQ2NtOTNjMlZ5WENJcE8xeHVYRzUyWVhJZ1gxVjBhV3h6UW5KdmQzTmxjaklnUFNCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBLRjlWZEdsc2MwSnliM2R6WlhJcE8xeHVYRzUyWVhJZ1gxVjBhV3h6UTI5dmEybGxJRDBnY21WeGRXbHlaU2hjSWk0dlZYUnBiSE5EYjI5cmFXVmNJaWs3WEc1Y2JuWmhjaUJmVlhScGJITkRiMjlyYVdVeUlEMGdYMmx1ZEdWeWIzQlNaWEYxYVhKbFJHVm1ZWFZzZENoZlZYUnBiSE5EYjI5cmFXVXBPMXh1WEc1MllYSWdYMVYwYVd4elJHOWpkVzFsYm5RZ1BTQnlaWEYxYVhKbEtGd2lMaTlWZEdsc2MwUnZZM1Z0Wlc1MFhDSXBPMXh1WEc1MllYSWdYMVYwYVd4elJHOWpkVzFsYm5ReUlEMGdYMmx1ZEdWeWIzQlNaWEYxYVhKbFJHVm1ZWFZzZENoZlZYUnBiSE5FYjJOMWJXVnVkQ2s3WEc1Y2JuWmhjaUJmVlhScGJITkVUMDBnUFNCeVpYRjFhWEpsS0Z3aUxpOVZkR2xzYzBSUFRWd2lLVHRjYmx4dWRtRnlJRjlWZEdsc2MwUlBUVElnUFNCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBLRjlWZEdsc2MwUlBUU2s3WEc1Y2JuWmhjaUJmVlhScGJITk5iM1Z6WlNBOUlISmxjWFZwY21Vb1hDSXVMMVYwYVd4elRXOTFjMlZjSWlrN1hHNWNiblpoY2lCZlZYUnBiSE5OYjNWelpUSWdQU0JmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtGOVZkR2xzYzAxdmRYTmxLVHRjYmx4dWRtRnlJRjlWZEdsc2MxTmpjbVZsYmlBOUlISmxjWFZwY21Vb1hDSXVMMVYwYVd4elUyTnlaV1Z1WENJcE8xeHVYRzUyWVhJZ1gxVjBhV3h6VTJOeVpXVnVNaUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9YMVYwYVd4elUyTnlaV1Z1S1R0Y2JseHVkbUZ5SUY5VmRHbHNjMU41YzNSbGJTQTlJSEpsY1hWcGNtVW9YQ0l1TDFWMGFXeHpVM2x6ZEdWdFhDSXBPMXh1WEc1MllYSWdYMVYwYVd4elUzbHpkR1Z0TWlBOUlGOXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFFvWDFWMGFXeHpVM2x6ZEdWdEtUdGNibHh1ZG1GeUlGOVZkR2xzYzFWelpYSWdQU0J5WlhGMWFYSmxLRndpTGk5VmRHbHNjMVZ6WlhKY0lpazdYRzVjYm5aaGNpQmZWWFJwYkhOVmMyVnlNaUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9YMVYwYVd4elZYTmxjaWs3WEc1Y2JuWmhjaUJmVlhScGJITlhhVzVrYjNjZ1BTQnlaWEYxYVhKbEtGd2lMaTlWZEdsc2MxZHBibVJ2ZDF3aUtUdGNibHh1ZG1GeUlGOVZkR2xzYzFkcGJtUnZkeklnUFNCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBLRjlWZEdsc2MxZHBibVJ2ZHlrN1hHNWNibVoxYm1OMGFXOXVJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb2IySnFLU0I3SUhKbGRIVnliaUJ2WW1vZ0ppWWdiMkpxTGw5ZlpYTk5iMlIxYkdVZ1B5QnZZbW9nT2lCN0lHUmxabUYxYkhRNklHOWlhaUI5T3lCOVhHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2Ymx3aUtUc2dmU0I5WEc1Y2JpOHFLbHh1SUNvZ1IyeHZZbUZzSUZWMGFXeHpJR05zWVhOelhHNGdLaTljYm5aaGNpQlZkR2xzY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQlZkR2xzY3lncElIdGNiaUFnSUNBZ0lDQWdYMk5zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUZWMGFXeHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQlZkR2xzY3k1M1lYSnVJRDBnWm5WdVkzUnBiMjRnZDJGeWJpaHRaWE56WVc1blpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0tIUjVjR1Z2WmlCamIyNXpiMnhsSUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1hDSjFibVJsWm1sdVpXUmNJaUE2SUY5MGVYQmxiMllvWTI5dWMyOXNaU2twSUQwOVBTQmNJbTlpYW1WamRGd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR052Ym5OdmJHVXVkMkZ5YmlBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExuZGhjbTRvYldWemMyRnVaMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ0WlhOellXNW5aVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlHTnZibk52YkdVdWJHOW5JRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktHMWxjM05oYm1kbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnpjMkZ1WjJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCa1pYQnlaV05oZEdWa0lGVjBhV3h6TG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDQnRaWFJvYjJRZ2QyRnpJR1JsY0hKbFkyRjBaV1FnWVc1a0lITnZiMjRnZDJsc2JDQmlaU0J5WlcxdmRtVmtMaUJRYkdWaGMyVWdkWE5sSUZWMGFXeHpMa1JQVFM1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUWdiV1YwYUc5a0xseHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQlZkR2xzY3k1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUWdQU0JtZFc1amRHbHZiaUJuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRb1pHOXRUbTlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWkc5dFJHOWpkVzFsYm5RZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU0FtSmlCaGNtZDFiV1Z1ZEhOYk1WMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3hYU0E2SUdSdlkzVnRaVzUwTzF4dUlDQWdJQ0FnSUNCMllYSWdjMmh2ZDBadmNtTmxJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURJZ0ppWWdZWEpuZFcxbGJuUnpXekpkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTWwwZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQlZkR2xzY3k1M1lYSnVLRndpVlhScGJITXVaMlYwUW05MWJtUnBibWREYkdsbGJuUlNaV04wSUcxbGRHaHZaQ0IzWVhNZ1pHVndjbVZqWVhSbFpDQmhibVFnYzI5dmJpQjNhV3hzSUdKbElISmxiVzkyWldRdUlGQnNaV0Z6WlNCMWMyVWdWWFJwYkhNdVJFOU5MbWRsZEVKdmRXNWthVzVuUTJ4cFpXNTBVbVZqZENCdFpYUm9iMlF1WENJcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ZYUnBiSE11UkU5TkxtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2hrYjIxT2IyUmxMQ0JrYjIxRWIyTjFiV1Z1ZEN3Z2MyaHZkMFp2Y21ObEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRR1JsY0hKbFkyRjBaV1FnVlhScGJITXVabWx1WkVWc1pXMWxiblJRYjNOcGRHbHZiaUJ0WlhSb2IyUWdkMkZ6SUdSbGNISmxZMkYwWldRZ1lXNWtJSE52YjI0Z2QybHNiQ0JpWlNCeVpXMXZkbVZrTGlCUWJHVmhjMlVnZFhObElGVjBhV3h6TGtSUFRTNW1hVzVrUld4bGJXVnVkRkJ2YzJsMGFXOXVJRzFsZEdodlpDNWNiaUFnSUNBZ0tpOWNiaUFnSUNCVmRHbHNjeTVtYVc1a1JXeGxiV1Z1ZEZCdmMybDBhVzl1SUQwZ1puVnVZM1JwYjI0Z1ptbHVaRVZzWlcxbGJuUlFiM05wZEdsdmJpaGtiMjFPYjJSbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCa2IyMUViMk4xYldWdWRDQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4SUNZbUlHRnlaM1Z0Wlc1MGMxc3hYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekZkSURvZ1pHOWpkVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6YUc5M1JtOXlZMlVnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01pQW1KaUJoY21kMWJXVnVkSE5iTWwwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzeVhTQTZJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJRlYwYVd4ekxuZGhjbTRvWENKVmRHbHNjeTVtYVc1a1JXeGxiV1Z1ZEZCdmMybDBhVzl1SUcxbGRHaHZaQ0IzWVhNZ1pHVndjbVZqWVhSbFpDQmhibVFnYzI5dmJpQjNhV3hzSUdKbElISmxiVzkyWldRdUlGQnNaV0Z6WlNCMWMyVWdWWFJwYkhNdVJFOU5MbVpwYm1SRmJHVnRaVzUwVUc5emFYUnBiMjRnYldWMGFHOWtMbHdpS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZWMGFXeHpMa1JQVFM1bWFXNWtSV3hsYldWdWRGQnZjMmwwYVc5dUtHUnZiVTV2WkdVc0lHUnZiVVJ2WTNWdFpXNTBMQ0J6YUc5M1JtOXlZMlVwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVkhKaGJuTm1aWElnYzNSaGRHbGpJRzFsZEdodlpITWdhVzUwYnlCMGFHVWdiMkpxWldOMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhKbFlXeFBZbXBsWTNSY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUZWMGFXeHpMbWx0Y0d4bGJXVnVkR0YwYVc5dVUzUmhkR2xqVFdWMGFHOWtjeUE5SUdaMWJtTjBhVzl1SUdsdGNHeGxiV1Z1ZEdGMGFXOXVVM1JoZEdsalRXVjBhRzlrY3loeVpXRnNUMkpxWldOMExDQmpiR0Z6YzA1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRWhjbVZoYkU5aWFtVmpkQ0FtSmlBb2RIbHdaVzltSUhKbFlXeFBZbXBsWTNRZ1BUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QmNJblZ1WkdWbWFXNWxaRndpSURvZ1gzUjVjR1Z2WmloeVpXRnNUMkpxWldOMEtTa2dQVDA5SUZ3aWIySnFaV04wWENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhOMFlYUnBZME5zWVhOeklEMGdjbVZoYkU5aWFtVmpkQzVqYjI1emRISjFZM1J2Y2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlITjBZWFJwWTBOc1lYTnpJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzFsZEdodlpITWdQU0JQWW1wbFkzUXVhMlY1Y3loemRHRjBhV05EYkdGemN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHRaWFJvYjJSeklDWW1JRzFsZEdodlpITXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlGOXNiMjl3SUQwZ1puVnVZM1JwYjI0Z1gyeHZiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Y5cGMwRnljbUY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGZhU0ErUFNCZmFYUmxjbUYwYjNJdWJHVnVaM1JvS1NCeVpYUjFjbTRnWENKaWNtVmhhMXdpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmY21WbUlEMGdYMmwwWlhKaGRHOXlXMTlwS3l0ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOXBJRDBnWDJsMFpYSmhkRzl5TG01bGVIUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Y5cExtUnZibVVwSUhKbGRIVnliaUJjSW1KeVpXRnJYQ0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZZ1BTQmZhUzUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYldWMGFHOWtJRDBnWDNKbFpqdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NtVmhiRTlpYW1WamRGdHRaWFJvYjJSZElEMDlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZV3hQWW1wbFkzUmJiV1YwYUc5a1hTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjM1JoZEdsalEyeGhjM01nSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JWZEdsc2N5NTNZWEp1S0Z3aVZHaGhkQ0J0WlhSb2IyUWdkMkZ6SUdSbGNISmxZMkYwWldRZ1lXNWtJSE52YjI0Z2QybHNiQ0JpWlNCeVpXMXZkbVZrTGlCUWJHVmhjMlVnZFhObElGd2lJQ3NnS0dOc1lYTnpUbUZ0WlNCOGZDQnpkR0YwYVdORGJHRnpjeUFtSmlCemRHRjBhV05EYkdGemN5NXVZVzFsSUh4OElGd2lWVzVyYm05M2Jsd2lLU0FySUZ3aUxsd2lJQ3NnYldWMGFHOWtJQ3NnWENJZ2JXVjBhRzlrTGx3aUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEdGMGFXTkRiR0Z6YzF0dFpYUm9iMlJkTG1Gd2NHeDVLSE4wWVhScFkwTnNZWE56TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUY5cGRHVnlZWFJ2Y2lBOUlHMWxkR2h2WkhNc0lGOXBjMEZ5Y21GNUlEMGdRWEp5WVhrdWFYTkJjbkpoZVNoZmFYUmxjbUYwYjNJcExDQmZhU0E5SURBc0lGOXBkR1Z5WVhSdmNpQTlJRjlwYzBGeWNtRjVJRDhnWDJsMFpYSmhkRzl5SURvZ1gybDBaWEpoZEc5eVcxTjViV0p2YkM1cGRHVnlZWFJ2Y2wwb0tUczdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRjl5WldZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1gzSmxkRElnUFNCZmJHOXZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Y5eVpYUXlJRDA5UFNCY0ltSnlaV0ZyWENJcElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTa29LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElHTmhiR3dnYzNSaFkyc2dkSEpoWTJWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUVGeWNtRjVQRTlpYW1WamRENWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdWWFJwYkhNdWMzUmhZMnNnUFNCbWRXNWpkR2x2YmlCemRHRmpheWdwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1VnUFNCdVpYY2dSWEp5YjNJb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHVWdKaVlnWlM1emRHRmpheUFtSmlCbExuTjBZV05yTG5Od2JHbDBLRndpWEZ4dVhDSXBMbk5zYVdObEtEVXBMbTFoY0NobWRXNWpkR2x2YmlBb2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0OU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUcxaGRHTm9JRDBnTDE0b0xpb3BRQ2d1S2lsY1hDNXFjem9vV3pBdE9WMHJLVG9vV3pBdE9WMHJLU1F2YVdjdVpYaGxZeWh6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFlYUmphQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHRZWFJqYUZzeFhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFlYUmphRnN4WFNBOUlDOG9XMTVjWEM4OFhTc3BMMmxuTG1WNFpXTW9iV0YwWTJoYk1WMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV0YwWTJoYk1WMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoZEdOb1d6RmRJRDBnYldGMFkyaGJNVjFiTUYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNkVzF1T2lCdFlYUmphRnMwWFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hsT2lCdFlYUmphRnN5WFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNhVzVsT2lCdFlYUmphRnN6WFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklHMWhkR05vV3pGZElIeDhJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdiV0YwWTJnZ1BTQXZYaWd1S2lsQUtHaDBkSEI4YUhSMGNITXBPaWhiWGpwZEt5azZLRnN3TFRsZEt5azZLRnN3TFRsZEt5a2tMMmxuTG1WNFpXTW9jeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGMFkyZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyeDFiVzQ2SUcxaGRHTm9XelZkSUh4OElGd2lYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR1U2SUcxaGRHTm9Xek5kSUh4OElGd2lYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeHBibVU2SUcxaGRHTm9XelJkSUh4OElGd2lYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWxkR2h2WkRvZ2JXRjBZMmhiTVYwZ0t5QmNJanBjSWlBcklHMWhkR05vV3pKZElIeDhJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdiV0YwWTJnZ1BTQXZYaWd1S2lsQUtDNHFLVG9vV3pBdE9WMHJLVG9vV3pBdE9WMHJLU1F2YVdjdVpYaGxZeWh6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFlYUmphQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiSFZ0YmpvZ2JXRjBZMmhiTkYwZ2ZId2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzWlRvZ2JXRjBZMmhiTWwwZ2ZId2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR2x1WlRvZ2JXRjBZMmhiTTEwZ2ZId2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a09pQnRZWFJqYUZzeFhTQjhmQ0JjSWx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZEdOb0lEMGdMMTVjWEhNcllYUmNYSE1vVzE0b1hTc3BYRnh6WEZ3b0tDNHFLVG9vV3pBdE9WMHJLVG9vV3pBdE9WMHJLVnhjS1NRdmFXY3VaWGhsWXloektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHRZWFJqYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052YkhWdGJqb2diV0YwWTJoYk5GMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sc1pUb2diV0YwWTJoYk1sMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsdVpUb2diV0YwWTJoYk0xMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldWMGFHOWtPaUJ0WVhSamFGc3hYU0I4ZkNCY0lsd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9JRDBnTDE1Y1hITXJZWFJjWEhNb0xpb3BPaWhiTUMwNVhTc3BPaWhiTUMwNVhTc3BKQzlwWnk1bGVHVmpLSE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0cxaGRHTm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNkVzF1T2lCdFlYUmphRnN6WFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hsT2lCdFlYUmphRnN4WFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNhVzVsT2lCdFlYUmphRnN5WFNCOGZDQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklGd2lYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhNN1hHNGdJQ0FnSUNBZ0lIMHBJSHg4SUZ0ZE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJSEpoYm1SdmJTQkpSRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdWWFJwYkhNdVoyVjBWVWxFSUQwZ1puVnVZM1JwYjI0Z1oyVjBWVWxFS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV5WVc1a2IyMG9LUzUwYjFOMGNtbHVaeWd6TmlrdWMzVmljM1J5YVc1bktESXBPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnlaWFIxY200Z1ZYUnBiSE03WEc1OUtDazdYRzVjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUZWMGFXeHpPMXh1WEc1VmRHbHNjeTVCYm1sdFlYUnBiMjRnUFNCZlZYUnBiSE5CYm1sdFlYUnBiMjR5TG1SbFptRjFiSFE3WEc1VmRHbHNjeTVDY205M2MyVnlJRDBnWDFWMGFXeHpRbkp2ZDNObGNqSXVaR1ZtWVhWc2REdGNibFYwYVd4ekxrTnZiMnRwWlNBOUlGOVZkR2xzYzBOdmIydHBaVEl1WkdWbVlYVnNkRHRjYmxWMGFXeHpMa1JQVFNBOUlGOVZkR2xzYzBSUFRUSXVaR1ZtWVhWc2REdGNibFYwYVd4ekxrUnZZM1Z0Wlc1MElEMGdYMVYwYVd4elJHOWpkVzFsYm5ReUxtUmxabUYxYkhRN1hHNVZkR2xzY3k1TmIzVnpaU0E5SUY5VmRHbHNjMDF2ZFhObE1pNWtaV1poZFd4ME8xeHVWWFJwYkhNdVUyTnlaV1Z1SUQwZ1gxVjBhV3h6VTJOeVpXVnVNaTVrWldaaGRXeDBPMXh1VlhScGJITXVVM2x6ZEdWdElEMGdYMVYwYVd4elUzbHpkR1Z0TWk1a1pXWmhkV3gwTzF4dVZYUnBiSE11VlhObGNpQTlJRjlWZEdsc2MxVnpaWEl5TG1SbFptRjFiSFE3WEc1VmRHbHNjeTVYYVc1a2IzY2dQU0JmVlhScGJITlhhVzVrYjNjeUxtUmxabUYxYkhRN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGVjBhV3h6TzF4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZiR2xpTDFWMGFXeHpMblJ6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0ExWEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJRE1pTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYmx4dVpYaHdiM0owY3k1ZlgyVnpUVzlrZFd4bElEMGdkSEoxWlR0Y2JseHVkbUZ5SUY5VmRHbHNjMEZ1YVcxaGRHbHZia1ZoYzJsdVp5QTlJSEpsY1hWcGNtVW9YQ0l1TDFWMGFXeHpRVzVwYldGMGFXOXVSV0Z6YVc1blhDSXBPMXh1WEc1MllYSWdYMVYwYVd4elFXNXBiV0YwYVc5dVJXRnphVzVuTWlBOUlGOXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFFvWDFWMGFXeHpRVzVwYldGMGFXOXVSV0Z6YVc1bktUdGNibHh1Wm5WdVkzUnBiMjRnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaHZZbW9wSUhzZ2NtVjBkWEp1SUc5aWFpQW1KaUJ2WW1vdVgxOWxjMDF2WkhWc1pTQS9JRzlpYWlBNklIc2daR1ZtWVhWc2REb2diMkpxSUgwN0lIMWNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lRMkZ1Ym05MElHTmhiR3dnWVNCamJHRnpjeUJoY3lCaElHWjFibU4wYVc5dVhDSXBPeUI5SUgxY2JseHVkbUZ5SUVGdWFXMWhkR2x2YmlBOUlHWjFibU4wYVc5dUlFRnVhVzFoZEdsdmJpZ3BJSHRjYmlBZ1gyTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRUZ1YVcxaGRHbHZiaWs3WEc1OU8xeHVYRzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JCYm1sdFlYUnBiMjQ3WEc1Y2JrRnVhVzFoZEdsdmJpNUZZWE5wYm1jZ1BTQmZWWFJwYkhOQmJtbHRZWFJwYjI1RllYTnBibWN5TG1SbFptRjFiSFE3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITkJibWx0WVhScGIyNHVkSE5jYmk4dklHMXZaSFZzWlNCcFpDQTlJRFpjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBeElESWdNeUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1THlvcVhHNGdLaUJFYVdabVpYSmxiblFnZEdsdFpTQmhibWx0WVhScGIyNGdablZ1WTNScGIyNXpYRzRnS2k5Y2JseHVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUdGNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lRMkZ1Ym05MElHTmhiR3dnWVNCamJHRnpjeUJoY3lCaElHWjFibU4wYVc5dVhDSXBPeUI5SUgxY2JseHVkbUZ5SUVWaGMybHVaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCRllYTnBibWNvS1NCN1hHNGdJQ0FnSUNBZ0lGOWpiR0Z6YzBOaGJHeERhR1ZqYXloMGFHbHpMQ0JGWVhOcGJtY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lFVmhjMmx1Wnk1cGMxWmhiR2xrVUdGeVlXMXpJRDBnWm5WdVkzUnBiMjRnYVhOV1lXeHBaRkJoY21GdGN5aDBMQ0JpTENCakxDQmtMQ0J6S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGVYQmxiMllnZENBOVBUMGdYQ0p1ZFcxaVpYSmNJaUFtSmlCMGVYQmxiMllnWWlBOVBUMGdYQ0p1ZFcxaVpYSmNJaUFtSmlCMGVYQmxiMllnWXlBOVBUMGdYQ0p1ZFcxaVpYSmNJaUFtSmlCMGVYQmxiMllnWkNBOVBUMGdYQ0p1ZFcxaVpYSmNJaUFtSmlBb2RIbHdaVzltSUhNZ1BUMDlJRndpZFc1a1pXWnBibVZrWENJZ2ZId2dkSGx3Wlc5bUlITWdQVDA5SUZ3aWJuVnRZbVZ5WENJcElDWW1JSFFnUENCa08xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCRllYTnBibWN1YzNkcGJtY2dQU0JtZFc1amRHbHZiaUJ6ZDJsdVp5aDBMQ0JpTENCakxDQmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaEZZWE5wYm1jdWFYTldZV3hwWkZCaGNtRnRjeWgwTENCaUxDQmpMQ0JrS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRVZoYzJsdVoxdEZZWE5wYm1jdVpHVm1YU2gwTENCaUxDQmpMQ0JrS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnUldGemFXNW5MbVZoYzJWSmJsRjFZV1FnUFNCbWRXNWpkR2x2YmlCbFlYTmxTVzVSZFdGa0tIUXNJR0lzSUdNc0lHUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tFVmhjMmx1Wnk1cGMxWmhiR2xrVUdGeVlXMXpLSFFzSUdJc0lHTXNJR1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZeUFxSUNoMElDODlJR1FwSUNvZ2RDQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sVDNWMFVYVmhaQ0E5SUdaMWJtTjBhVzl1SUdWaGMyVlBkWFJSZFdGa0tIUXNJR0lzSUdNc0lHUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tFVmhjMmx1Wnk1cGMxWmhiR2xrVUdGeVlXMXpLSFFzSUdJc0lHTXNJR1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdMV01nS2lBb2RDQXZQU0JrS1NBcUlDaDBJQzBnTWlrZ0t5QmlPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUU1aFRqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQkZZWE5wYm1jdVpXRnpaVWx1VDNWMFVYVmhaQ0E5SUdaMWJtTjBhVzl1SUdWaGMyVkpiazkxZEZGMVlXUW9kQ3dnWWl3Z1l5d2daQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9SV0Z6YVc1bkxtbHpWbUZzYVdSUVlYSmhiWE1vZEN3Z1lpd2dZeXdnWkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ29kQ0F2UFNCa0lDOGdNaWtnUENBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTWdMeUF5SUNvZ2RDQXFJSFFnS3lCaU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDMWpJQzhnTWlBcUlDZ3RMWFFnS2lBb2RDQXRJRElwSUMwZ01Ta2dLeUJpTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlFNWhUanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JGWVhOcGJtY3VaV0Z6WlVsdVEzVmlhV01nUFNCbWRXNWpkR2x2YmlCbFlYTmxTVzVEZFdKcFl5aDBMQ0JpTENCakxDQmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaEZZWE5wYm1jdWFYTldZV3hwWkZCaGNtRnRjeWgwTENCaUxDQmpMQ0JrS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR01nS2lBb2RDQXZQU0JrS1NBcUlIUWdLaUIwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJPWVU0N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JXRnphVzVuTG1WaGMyVlBkWFJEZFdKcFl5QTlJR1oxYm1OMGFXOXVJR1ZoYzJWUGRYUkRkV0pwWXloMExDQmlMQ0JqTENCa0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoRllYTnBibWN1YVhOV1lXeHBaRkJoY21GdGN5aDBMQ0JpTENCakxDQmtLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTWdLaUFvS0hRZ1BTQjBJQzhnWkNBdElERXBJQ29nZENBcUlIUWdLeUF4S1NBcklHSTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVG1GT08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lFVmhjMmx1Wnk1bFlYTmxTVzVQZFhSRGRXSnBZeUE5SUdaMWJtTjBhVzl1SUdWaGMyVkpiazkxZEVOMVltbGpLSFFzSUdJc0lHTXNJR1FwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVZoYzJsdVp5NXBjMVpoYkdsa1VHRnlZVzF6S0hRc0lHSXNJR01zSUdRcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9LSFFnTHowZ1pDQXZJRElwSUR3Z01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpJQzhnTWlBcUlIUWdLaUIwSUNvZ2RDQXJJR0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWXlBdklESWdLaUFvS0hRZ0xUMGdNaWtnS2lCMElDb2dkQ0FySURJcElDc2dZanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCT1lVNDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdSV0Z6YVc1bkxtVmhjMlZKYmxGMVlYSjBJRDBnWm5WdVkzUnBiMjRnWldGelpVbHVVWFZoY25Rb2RDd2dZaXdnWXl3Z1pDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1JXRnphVzVuTG1selZtRnNhV1JRWVhKaGJYTW9kQ3dnWWl3Z1l5d2daQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpJQ29nS0hRZ0x6MGdaQ2tnS2lCMElDb2dkQ0FxSUhRZ0t5QmlPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUU1aFRqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQkZZWE5wYm1jdVpXRnpaVTkxZEZGMVlYSjBJRDBnWm5WdVkzUnBiMjRnWldGelpVOTFkRkYxWVhKMEtIUXNJR0lzSUdNc0lHUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tFVmhjMmx1Wnk1cGMxWmhiR2xrVUdGeVlXMXpLSFFzSUdJc0lHTXNJR1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdMV01nS2lBb0tIUWdQU0IwSUM4Z1pDQXRJREVwSUNvZ2RDQXFJSFFnS2lCMElDMGdNU2tnS3lCaU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVoVGp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCRllYTnBibWN1WldGelpVbHVUM1YwVVhWaGNuUWdQU0JtZFc1amRHbHZiaUJsWVhObFNXNVBkWFJSZFdGeWRDaDBMQ0JpTENCakxDQmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaEZZWE5wYm1jdWFYTldZV3hwWkZCaGNtRnRjeWgwTENCaUxDQmpMQ0JrS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDaDBJQzg5SUdRZ0x5QXlLU0E4SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXZJRElnS2lCMElDb2dkQ0FxSUhRZ0tpQjBJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBdFl5QXZJRElnS2lBb0tIUWdMVDBnTWlrZ0tpQjBJQ29nZENBcUlIUWdMU0F5S1NBcklHSTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVG1GT08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lFVmhjMmx1Wnk1bFlYTmxTVzVSZFdsdWRDQTlJR1oxYm1OMGFXOXVJR1ZoYzJWSmJsRjFhVzUwS0hRc0lHSXNJR01zSUdRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXFJQ2gwSUM4OUlHUXBJQ29nZENBcUlIUWdLaUIwSUNvZ2RDQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sVDNWMFVYVnBiblFnUFNCbWRXNWpkR2x2YmlCbFlYTmxUM1YwVVhWcGJuUW9kQ3dnWWl3Z1l5d2daQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9SV0Z6YVc1bkxtbHpWbUZzYVdSUVlYSmhiWE1vZEN3Z1lpd2dZeXdnWkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqSUNvZ0tDaDBJRDBnZENBdklHUWdMU0F4S1NBcUlIUWdLaUIwSUNvZ2RDQXFJSFFnS3lBeEtTQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sU1c1UGRYUlJkV2x1ZENBOUlHWjFibU4wYVc5dUlHVmhjMlZKYms5MWRGRjFhVzUwS0hRc0lHSXNJR01zSUdRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvS0hRZ0x6MGdaQ0F2SURJcElEd2dNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqSUM4Z01pQXFJSFFnS2lCMElDb2dkQ0FxSUhRZ0tpQjBJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaklDOGdNaUFxSUNnb2RDQXRQU0F5S1NBcUlIUWdLaUIwSUNvZ2RDQXFJSFFnS3lBeUtTQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sU1c1VGFXNWxJRDBnWm5WdVkzUnBiMjRnWldGelpVbHVVMmx1WlNoMExDQmlMQ0JqTENCa0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoRllYTnBibWN1YVhOV1lXeHBaRkJoY21GdGN5aDBMQ0JpTENCakxDQmtLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDMWpJQ29nVFdGMGFDNWpiM01vZENBdklHUWdLaUFvVFdGMGFDNVFTU0F2SURJcEtTQXJJR01nS3lCaU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVoVGp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCRllYTnBibWN1WldGelpVOTFkRk5wYm1VZ1BTQm1kVzVqZEdsdmJpQmxZWE5sVDNWMFUybHVaU2gwTENCaUxDQmpMQ0JrS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hGWVhOcGJtY3VhWE5XWVd4cFpGQmhjbUZ0Y3loMExDQmlMQ0JqTENCa0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdNZ0tpQk5ZWFJvTG5OcGJpaDBJQzhnWkNBcUlDaE5ZWFJvTGxCSklDOGdNaWtwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJPWVU0N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JXRnphVzVuTG1WaGMyVkpiazkxZEZOcGJtVWdQU0JtZFc1amRHbHZiaUJsWVhObFNXNVBkWFJUYVc1bEtIUXNJR0lzSUdNc0lHUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tFVmhjMmx1Wnk1cGMxWmhiR2xrVUdGeVlXMXpLSFFzSUdJc0lHTXNJR1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdMV01nTHlBeUlDb2dLRTFoZEdndVkyOXpLRTFoZEdndVVFa2dLaUIwSUM4Z1pDa2dMU0F4S1NBcklHSTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVG1GT08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lFVmhjMmx1Wnk1bFlYTmxTVzVGZUhCdklEMGdablZ1WTNScGIyNGdaV0Z6WlVsdVJYaHdieWgwTENCaUxDQmpMQ0JrS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hGWVhOcGJtY3VhWE5XWVd4cFpGQmhjbUZ0Y3loMExDQmlMQ0JqTENCa0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhRZ1BUMDlJREFnUHlCaUlEb2dZeUFxSUUxaGRHZ3VjRzkzS0RJc0lERXdJQ29nS0hRZ0x5QmtJQzBnTVNrcElDc2dZanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCT1lVNDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdSV0Z6YVc1bkxtVmhjMlZQZFhSRmVIQnZJRDBnWm5WdVkzUnBiMjRnWldGelpVOTFkRVY0Y0c4b2RDd2dZaXdnWXl3Z1pDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1JXRnphVzVuTG1selZtRnNhV1JRWVhKaGJYTW9kQ3dnWWl3Z1l5d2daQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBJRDA5UFNCa0lEOGdZaUFySUdNZ09pQmpJQ29nS0MxTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lCMElDOGdaQ2tnS3lBeEtTQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sU1c1UGRYUkZlSEJ2SUQwZ1puVnVZM1JwYjI0Z1pXRnpaVWx1VDNWMFJYaHdieWgwTENCaUxDQmpMQ0JrS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hGWVhOcGJtY3VhWE5XWVd4cFpGQmhjbUZ0Y3loMExDQmlMQ0JqTENCa0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFFnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBJRDA5UFNCa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSWdLeUJqTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ2gwSUM4OUlHUWdMeUF5S1NBOElERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZeUF2SURJZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0F4TUNBcUlDaDBJQzBnTVNrcElDc2dZanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqSUM4Z01pQXFJQ2d0VFdGMGFDNXdiM2NvTWl3Z0xURXdJQ29nTFMxMEtTQXJJRElwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJPWVU0N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JXRnphVzVuTG1WaGMyVkpia05wY21NZ1BTQm1kVzVqZEdsdmJpQmxZWE5sU1c1RGFYSmpLSFFzSUdJc0lHTXNJR1FwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVZoYzJsdVp5NXBjMVpoYkdsa1VHRnlZVzF6S0hRc0lHSXNJR01zSUdRcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTFdNZ0tpQW9UV0YwYUM1emNYSjBLREVnTFNBb2RDQXZQU0JrS1NBcUlIUXBJQzBnTVNrZ0t5QmlPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUU1aFRqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQkZZWE5wYm1jdVpXRnpaVTkxZEVOcGNtTWdQU0JtZFc1amRHbHZiaUJsWVhObFQzVjBRMmx5WXloMExDQmlMQ0JqTENCa0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoRllYTnBibWN1YVhOV1lXeHBaRkJoY21GdGN5aDBMQ0JpTENCakxDQmtLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTWdLaUJOWVhSb0xuTnhjblFvTVNBdElDaDBJRDBnZENBdklHUWdMU0F4S1NBcUlIUXBJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnUldGemFXNW5MbVZoYzJWSmJrOTFkRU5wY21NZ1BTQm1kVzVqZEdsdmJpQmxZWE5sU1c1UGRYUkRhWEpqS0hRc0lHSXNJR01zSUdRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvS0hRZ0x6MGdaQ0F2SURJcElEd2dNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF0WXlBdklESWdLaUFvVFdGMGFDNXpjWEowS0RFZ0xTQjBJQ29nZENrZ0xTQXhLU0FySUdJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXZJRElnS2lBb1RXRjBhQzV6Y1hKMEtERWdMU0FvZENBdFBTQXlLU0FxSUhRcElDc2dNU2tnS3lCaU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVoVGp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCRllYTnBibWN1WldGelpVbHVSV3hoYzNScFl5QTlJR1oxYm1OMGFXOXVJR1ZoYzJWSmJrVnNZWE4wYVdNb2RDd2dZaXdnWXl3Z1pDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1JXRnphVzVuTG1selZtRnNhV1JRWVhKaGJYTW9kQ3dnWWl3Z1l5d2daQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCeklEMGdNUzQzTURFMU9EdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQndJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaElEMGdZenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwSUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9LSFFnTHowZ1pDa2dQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lpQXJJR003WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd0lEMGdaQ0FxSUM0ek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dFZ1BDQk5ZWFJvTG1GaWN5aGpLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdFZ1BTQmpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE1nUFNCd0lDOGdORHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2N5QTlJSEFnTHlBb01pQXFJRTFoZEdndVVFa3BJQ29nVFdGMGFDNWhjMmx1S0dNZ0x5QmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF0S0dFZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0F4TUNBcUlDaDBJQzA5SURFcEtTQXFJRTFoZEdndWMybHVLQ2gwSUNvZ1pDQXRJSE1wSUNvZ0tESWdLaUJOWVhSb0xsQkpLU0F2SUhBcEtTQXJJR0k3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJRVZoYzJsdVp5NWxZWE5sVDNWMFJXeGhjM1JwWXlBOUlHWjFibU4wYVc5dUlHVmhjMlZQZFhSRmJHRnpkR2xqS0hRc0lHSXNJR01zSUdRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY3lBOUlERXVOekF4TlRnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NDQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWVNBOUlHTTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDaDBJQzg5SUdRcElEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdJZ0t5QmpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0NBOUlHUWdLaUF1TXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoSUR3Z1RXRjBhQzVoWW5Nb1l5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoSUQwZ1l6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpJRDBnY0NBdklEUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhNZ1BTQndJQzhnS0RJZ0tpQk5ZWFJvTGxCSktTQXFJRTFoZEdndVlYTnBiaWhqSUM4Z1lTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZU0FxSUUxaGRHZ3VjRzkzS0RJc0lDMHhNQ0FxSUhRcElDb2dUV0YwYUM1emFXNG9LSFFnS2lCa0lDMGdjeWtnS2lBb01pQXFJRTFoZEdndVVFa3BJQzhnY0NrZ0t5QmpJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnUldGemFXNW5MbVZoYzJWSmJrOTFkRVZzWVhOMGFXTWdQU0JtZFc1amRHbHZiaUJsWVhObFNXNVBkWFJGYkdGemRHbGpLSFFzSUdJc0lHTXNJR1FwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVZoYzJsdVp5NXBjMVpoYkdsa1VHRnlZVzF6S0hRc0lHSXNJR01zSUdRcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjeUE5SURFdU56QXhOVGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0NBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZU0E5SUdNN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NoMElDODlJR1FnTHlBeUtTQTlQVDBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaUlDc2dZenRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhBZ1BTQmtJQ29nS0M0eklDb2dNUzQxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoSUR3Z1RXRjBhQzVoWW5Nb1l5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoSUQwZ1l6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpJRDBnY0NBdklEUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhNZ1BTQndJQzhnS0RJZ0tpQk5ZWFJvTGxCSktTQXFJRTFoZEdndVlYTnBiaWhqSUM4Z1lTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RDQThJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTFM0MUlDb2dLR0VnS2lCTllYUm9MbkJ2ZHlneUxDQXhNQ0FxSUNoMElDMDlJREVwS1NBcUlFMWhkR2d1YzJsdUtDaDBJQ29nWkNBdElITXBJQ29nS0RJZ0tpQk5ZWFJvTGxCSktTQXZJSEFwS1NBcklHSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZU0FxSUUxaGRHZ3VjRzkzS0RJc0lDMHhNQ0FxSUNoMElDMDlJREVwS1NBcUlFMWhkR2d1YzJsdUtDaDBJQ29nWkNBdElITXBJQ29nS0RJZ0tpQk5ZWFJvTGxCSktTQXZJSEFwSUNvZ0xqVWdLeUJqSUNzZ1lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJPWVU0N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JXRnphVzVuTG1WaGMyVkpia0poWTJzZ1BTQm1kVzVqZEdsdmJpQmxZWE5sU1c1Q1lXTnJLSFFzSUdJc0lHTXNJR1FzSUhNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXNJSE1wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2N5QTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2N5QTlJREV1TnpBeE5UZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZeUFxSUNoMElDODlJR1FwSUNvZ2RDQXFJQ2dvY3lBcklERXBJQ29nZENBdElITXBJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnUldGemFXNW5MbVZoYzJWUGRYUkNZV05ySUQwZ1puVnVZM1JwYjI0Z1pXRnpaVTkxZEVKaFkyc29kQ3dnWWl3Z1l5d2daQ3dnY3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvUldGemFXNW5MbWx6Vm1Gc2FXUlFZWEpoYlhNb2RDd2dZaXdnWXl3Z1pDd2djeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoeklEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeklEMGdNUzQzTURFMU9EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpJQ29nS0NoMElEMGdkQ0F2SUdRZ0xTQXhLU0FxSUhRZ0tpQW9LSE1nS3lBeEtTQXFJSFFnS3lCektTQXJJREVwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJPWVU0N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1JXRnphVzVuTG1WaGMyVkpiazkxZEVKaFkyc2dQU0JtZFc1amRHbHZiaUJsWVhObFNXNVBkWFJDWVdOcktIUXNJR0lzSUdNc0lHUXNJSE1wSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVZoYzJsdVp5NXBjMVpoYkdsa1VHRnlZVzF6S0hRc0lHSXNJR01zSUdRc0lITXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY3lBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY3lBOUlERXVOekF4TlRnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvS0hRZ0x6MGdaQ0F2SURJcElEd2dNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqSUM4Z01pQXFJQ2gwSUNvZ2RDQXFJQ2dvS0hNZ0tqMGdNUzQxTWpVcElDc2dNU2tnS2lCMElDMGdjeWtwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpJQzhnTWlBcUlDZ29kQ0F0UFNBeUtTQXFJSFFnS2lBb0tDaHpJQ285SURFdU5USTFLU0FySURFcElDb2dkQ0FySUhNcElDc2dNaWtnS3lCaU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRTVoVGp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCRllYTnBibWN1WldGelpVbHVRbTkxYm1ObElEMGdablZ1WTNScGIyNGdaV0Z6WlVsdVFtOTFibU5sS0hRc0lHSXNJR01zSUdRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VWaGMybHVaeTVwYzFaaGJHbGtVR0Z5WVcxektIUXNJR0lzSUdNc0lHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXRJRVZoYzJsdVp5NWxZWE5sVDNWMFFtOTFibU5sS0dRZ0xTQjBMQ0F3TENCakxDQmtLU0FySUdJN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdUbUZPTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUVWaGMybHVaeTVsWVhObFQzVjBRbTkxYm1ObElEMGdablZ1WTNScGIyNGdaV0Z6WlU5MWRFSnZkVzVqWlNoMExDQmlMQ0JqTENCa0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoRllYTnBibWN1YVhOV1lXeHBaRkJoY21GdGN5aDBMQ0JpTENCakxDQmtLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NoMElDODlJR1FwSUR3Z01TQXZJREl1TnpVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXFJQ2czTGpVMk1qVWdLaUIwSUNvZ2RDa2dLeUJpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwSUR3Z01pQXZJREl1TnpVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1l5QXFJQ2czTGpVMk1qVWdLaUFvZENBdFBTQXhMalVnTHlBeUxqYzFLU0FxSUhRZ0t5QXVOelVwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RDQThJREl1TlNBdklESXVOelVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWXlBcUlDZzNMalUyTWpVZ0tpQW9kQ0F0UFNBeUxqSTFJQzhnTWk0M05Ta2dLaUIwSUNzZ0xqa3pOelVwSUNzZ1lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR01nS2lBb055NDFOakkxSUNvZ0tIUWdMVDBnTWk0Mk1qVWdMeUF5TGpjMUtTQXFJSFFnS3lBdU9UZzBNemMxS1NBcklHSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdUbUZPTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUVWaGMybHVaeTVsWVhObFNXNVBkWFJDYjNWdVkyVWdQU0JtZFc1amRHbHZiaUJsWVhObFNXNVBkWFJDYjNWdVkyVW9kQ3dnWWl3Z1l5d2daQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9SV0Z6YVc1bkxtbHpWbUZzYVdSUVlYSmhiWE1vZEN3Z1lpd2dZeXdnWkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBJRHdnWkNBdklESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdSV0Z6YVc1bkxtVmhjMlZKYmtKdmRXNWpaU2gwSUNvZ01pd2dNQ3dnWXl3Z1pDa2dLaUF1TlNBcklHSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdSV0Z6YVc1bkxtVmhjMlZQZFhSQ2IzVnVZMlVvZENBcUlESWdMU0JrTENBd0xDQmpMQ0JrS1NBcUlDNDFJQ3NnWXlBcUlDNDFJQ3NnWWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJRVZoYzJsdVp6dGNibjBvS1R0Y2JseHVaWGh3YjNKMGN5NWtaV1poZFd4MElEMGdSV0Z6YVc1bk8xeHVYRzVGWVhOcGJtY3VaR1ZtSUQwZ1hDSmxZWE5sVDNWMFVYVmhaRndpTzF4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZiR2xpTDFWMGFXeHpRVzVwYldGMGFXOXVSV0Z6YVc1bkxuUnpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQTNYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTVNBeUlETWlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiaThxS2x4dUlDb2dRMnhoYzNNZ1ptOXlJSGR2Y210cGJtY2dkMmwwYUNCaWNtOTNjMlZ5WEc0Z0tpOWNibHh1Wlhod2IzSjBjeTVmWDJWelRXOWtkV3hsSUQwZ2RISjFaVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnNZWE56UTJGc2JFTm9aV05yS0dsdWMzUmhibU5sTENCRGIyNXpkSEoxWTNSdmNpa2dleUJwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRndpUTJGdWJtOTBJR05oYkd3Z1lTQmpiR0Z6Y3lCaGN5QmhJR1oxYm1OMGFXOXVYQ0lwT3lCOUlIMWNibHh1ZG1GeUlFSnliM2R6WlhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdablZ1WTNScGIyNGdRbkp2ZDNObGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnWDJOc1lYTnpRMkZzYkVOb1pXTnJLSFJvYVhNc0lFSnliM2R6WlhJcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0JpY205M2MyVnlJR2x1Wm05Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0N1luSnZkM05sY2pvZ2MzUnlhVzVuTENCdGIySnBiR1U2SUdKdmIyeGxZVzRzSUhabGNuTnBiMjQ2SUhOMGNtbHVaMzE5WEc0Z0lDQWdJQ292WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJKYm1adklEMGdablZ1WTNScGIyNGdaMlYwU1c1bWJ5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnliM2R6WlhJNklFSnliM2R6WlhJdVoyVjBUbUZ0WlNncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYlc5aWFXeGxPaUJDY205M2MyVnlMbWx6VFc5aWFXeGxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaWEp6YVc5dU9pQkNjbTkzYzJWeUxtZGxkRlpsY25OcGIyNG9LVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElHSnliM2R6WlhJZ2JtRnRaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJPWVcxbElEMGdablZ1WTNScGIyNGdaMlYwVG1GdFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHSnliM2R6WlhJZ1BTQjJiMmxrSURBN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hDY205M2MyVnlMbWx6VDNCbGNtRW9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkp2ZDNObGNpQTlJRndpVDNCbGNtRmNJanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoQ2NtOTNjMlZ5TG1selQzQmxjbUZPWlhjb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSnZkM05sY2lBOUlGd2lUM0JsY21GY0lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6VFZOSlJTZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbTkzYzJWeUlEMGdYQ0pOYVdOeWIzTnZablFnU1c1MFpYSnVaWFFnUlhod2JHOXlaWEpjSWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaENjbTkzYzJWeUxtbHpUVk5KUlU1bGR5Z3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbTkzYzJWeUlEMGdYQ0pOYVdOeWIzTnZablFnU1c1MFpYSnVaWFFnUlhod2JHOXlaWEpjSWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaENjbTkzYzJWeUxtbHpRMmh5YjIxbEtDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnliM2R6WlhJZ1BTQmNJa05vY205dFpWd2lPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0VKeWIzZHpaWEl1YVhOR2FYSmxabTk0S0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeWIzZHpaWElnUFNCY0lrWnBjbVZtYjNoY0lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6VTJGbVlYSnBLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5YjNkelpYSWdQU0JjSWxOaFptRnlhVndpTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tFSnliM2R6WlhJdWFYTlBkR2hsY2lncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtOTNjMlZ5SUQwZ1FuSnZkM05sY2k1blpYUlBkR2hsY2s1aGJXVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWW5KdmQzTmxjanRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCaWNtOTNjMlZ5SUhabGNuTnBiMjVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR6ZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRUp5YjNkelpYSXVaMlYwVm1WeWMybHZiaUE5SUdaMWJtTjBhVzl1SUdkbGRGWmxjbk5wYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSnphVzl1SUQwZ2RtOXBaQ0F3TzF4dUlDQWdJQ0FnSUNCcFppQW9Rbkp2ZDNObGNpNXBjMDl3WlhKaEtDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxjbk5wYjI0Z1BTQkNjbTkzYzJWeUxtZGxkRTl3WlhKaFZtVnljMmx2YmlncE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRUp5YjNkelpYSXVhWE5QY0dWeVlVNWxkeWdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWlhKemFXOXVJRDBnUW5KdmQzTmxjaTVuWlhSUGNHVnlZVTVsZDFabGNuTnBiMjRvS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaENjbTkzYzJWeUxtbHpUVk5KUlNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpYSnphVzl1SUQwZ1FuSnZkM05sY2k1blpYUk5VMGxGVm1WeWMybHZiaWdwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tFSnliM2R6WlhJdWFYTk5VMGxGVG1WM0tDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxjbk5wYjI0Z1BTQkNjbTkzYzJWeUxtZGxkRTFUU1VWT1pYZFdaWEp6YVc5dUtDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvUW5KdmQzTmxjaTVwYzBOb2NtOXRaU2dwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWlhKemFXOXVJRDBnUW5KdmQzTmxjaTVuWlhSRGFISnZiV1ZXWlhKemFXOXVLQ2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1FuSnZkM05sY2k1cGMwWnBjbVZtYjNnb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnljMmx2YmlBOUlFSnliM2R6WlhJdVoyVjBSbWx5WldadmVGWmxjbk5wYjI0b0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6VTJGbVlYSnBLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNGdQU0JDY205M2MyVnlMbWRsZEZOaFptRnlhVlpsY25OcGIyNG9LVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoQ2NtOTNjMlZ5TG1selQzUm9aWElvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1WeWMybHZiaUE5SUVKeWIzZHpaWEl1WjJWMFQzUm9aWEpXWlhKemFXOXVLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhabGNuTnBiMjQ3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJVY21sdElHSnliM2R6WlhJZ2RtVnljMmx2Ymx4dUlDQWdJQ0FxSUVCd1lYSmhiU0IyWlhKemFXOXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxuUnlhVzFXWlhKemFXOXVJRDBnWm5WdVkzUnBiMjRnZEhKcGJWWmxjbk5wYjI0b2RtVnljMmx2YmlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSFpsY25OcGIyNGdQVDA5SUZ3aWMzUnlhVzVuWENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmphR0Z5Y3lBOUlGdGNJanRjSWl3Z1hDSWdYQ0lzSUZ3aUtWd2lYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlGOXBkR1Z5WVhSdmNpQTlJR05vWVhKekxDQmZhWE5CY25KaGVTQTlJRUZ5Y21GNUxtbHpRWEp5WVhrb1gybDBaWEpoZEc5eUtTd2dYMmtnUFNBd0xDQmZhWFJsY21GMGIzSWdQU0JmYVhOQmNuSmhlU0EvSUY5cGRHVnlZWFJ2Y2lBNklGOXBkR1Z5WVhSdmNsdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDazdPeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmZjbVZtTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRjlwYzBGeWNtRjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVNBK1BTQmZhWFJsY21GMGIzSXViR1Z1WjNSb0tTQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYM0psWmlBOUlGOXBkR1Z5WVhSdmNsdGZhU3NyWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZhU0E5SUY5cGRHVnlZWFJ2Y2k1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVM1a2IyNWxLU0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDNKbFppQTlJRjlwTG5aaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmphR0Z5SUQwZ1gzSmxaanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBlQ0E5SUhabGNuTnBiMjR1YVc1a1pYaFBaaWhqYUdGeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYVhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNGdQU0IyWlhKemFXOXVMbk4xWW5OMGNtbHVaeWd3TENCcGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFpsY25OcGIyNDdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWENKY0lqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdhWFFnYVhNZ2JXOWlhV3hsWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVwYzAxdlltbHNaU0E5SUdaMWJtTjBhVzl1SUdselRXOWlhV3hsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tDOU5iMkpwYkdWOGJXbHVhWHhHWlc1dVpXTjhRVzVrY205cFpIeHBVQ2hoWkh4dlpIeG9iMjVsS1M4dWRHVnpkQ2h1WVhacFoyRjBiM0l1WVhCd1ZtVnljMmx2YmlsY2JpQWdJQ0FnSUNBZ0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHbDBJR2x6SUc5d1pYSmhJR0p5YjNkelpYSmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxtbHpUM0JsY21FZ1BTQm1kVzVqZEdsdmJpQnBjMDl3WlhKaEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVwYm1SbGVFOW1LRndpVDNCbGNtRmNJaWtnSVQwOUlDMHhPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwSUc5d1pYSmhJR0p5YjNkelpYSWdkbVZ5YzJsdmJseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1blpYUlBjR1Z5WVZabGNuTnBiMjRnUFNCbWRXNWpkR2x2YmlCblpYUlBjR1Z5WVZabGNuTnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKUFptWnpaWFFnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSlBjR1Z5WVZ3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNuTnBiMjRnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuTjFZbk4wY21sdVp5aDJaWEpQWm1aelpYUWdLeUEyS1R0Y2JpQWdJQ0FnSUNBZ2RtVnlUMlptYzJWMElEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVwYm1SbGVFOW1LRndpVm1WeWMybHZibHdpS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFpsY2s5bVpuTmxkQ0FoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxjbk5wYjI0Z1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbk4xWW5OMGNtbHVaeWgyWlhKUFptWnpaWFFnS3lBNEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdRbkp2ZDNObGNpNTBjbWx0Vm1WeWMybHZiaWgyWlhKemFXOXVLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR2wwSUdseklHOXdaWEpoSUc1bGR5QmljbTkzYzJWeVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1cGMwOXdaWEpoVG1WM0lEMGdablZ1WTNScGIyNGdhWE5QY0dWeVlVNWxkeWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWFXNWtaWGhQWmloY0lrOVFVbHdpS1NBaFBUMGdMVEU3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2IzQmxjbUVnYm1WM0lHSnliM2R6WlhJZ2RtVnljMmx2Ymx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVuWlhSUGNHVnlZVTVsZDFabGNuTnBiMjRnUFNCbWRXNWpkR2x2YmlCblpYUlBjR1Z5WVU1bGQxWmxjbk5wYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSlBabVp6WlhRZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbWx1WkdWNFQyWW9YQ0pQVUZKY0lpazdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSnphVzl1SUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXpkV0p6ZEhKcGJtY29kbVZ5VDJabWMyVjBJQ3NnTkNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCQ2NtOTNjMlZ5TG5SeWFXMVdaWEp6YVc5dUtIWmxjbk5wYjI0cE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnNnYVdZZ2FYUWdhWE1nYlhOcFpTQmljbTkzYzJWeVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1cGMwMVRTVVVnUFNCbWRXNWpkR2x2YmlCcGMwMVRTVVVvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSk5VMGxGWENJcElDRTlQU0F0TVR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQnRjMmxsSUdKeWIzZHpaWElnZG1WeWMybHZibHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJOVTBsRlZtVnljMmx2YmlBOUlHWjFibU4wYVc5dUlHZGxkRTFUU1VWV1pYSnphVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1WeVQyWm1jMlYwSUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lUVk5KUlZ3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNuTnBiMjRnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuTjFZbk4wY21sdVp5aDJaWEpQWm1aelpYUWdLeUExS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUVKeWIzZHpaWEl1ZEhKcGJWWmxjbk5wYjI0b2RtVnljMmx2YmlrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmpheUJwWmlCcGRDQnBjeUJ0YzJsbElHNWxkeUJpY205M2MyVnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNXBjMDFUU1VWT1pYY2dQU0JtZFc1amRHbHZiaUJwYzAxVFNVVk9aWGNvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSlVjbWxrWlc1MEwxd2lLU0FoUFQwZ0xURTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnYlhOcFpTQnVaWGNnWW5KdmQzTmxjaUIyWlhKemFXOXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxtZGxkRTFUU1VWT1pYZFdaWEp6YVc5dUlEMGdablZ1WTNScGIyNGdaMlYwVFZOSlJVNWxkMVpsY25OcGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJaWEp6YVc5dUlEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV6ZFdKemRISnBibWNvYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aWNuWTZYQ0lwSUNzZ015azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQkNjbTkzYzJWeUxuUnlhVzFXWlhKemFXOXVLSFpsY25OcGIyNHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdhWFFnYVhNZ1kyaHliMjFsSUdKeWIzZHpaWEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMbWx6UTJoeWIyMWxJRDBnWm5WdVkzUnBiMjRnYVhORGFISnZiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSkRhSEp2YldWY0lpa2dJVDA5SUMweE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJR05vY205dFpTQmljbTkzYzJWeUlIWmxjbk5wYjI1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1WjJWMFEyaHliMjFsVm1WeWMybHZiaUE5SUdaMWJtTjBhVzl1SUdkbGRFTm9jbTl0WlZabGNuTnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKUFptWnpaWFFnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSkRhSEp2YldWY0lpazdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSnphVzl1SUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXpkV0p6ZEhKcGJtY29kbVZ5VDJabWMyVjBJQ3NnTnlrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCQ2NtOTNjMlZ5TG5SeWFXMVdaWEp6YVc5dUtIWmxjbk5wYjI0cE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnNnYVdZZ2FYUWdhWE1nYzJGbVlYSnBJR0p5YjNkelpYSmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxtbHpVMkZtWVhKcElEMGdablZ1WTNScGIyNGdhWE5UWVdaaGNta29LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG1sdVpHVjRUMllvWENKVFlXWmhjbWxjSWlrZ0lUMDlJQzB4SUNZbUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJa05vY205dFpWd2lLU0E5UFQwZ0xURTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnYzJGbVlYSnBJR0p5YjNkelpYSWdkbVZ5YzJsdmJseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1blpYUlRZV1poY21sV1pYSnphVzl1SUQwZ1puVnVZM1JwYjI0Z1oyVjBVMkZtWVhKcFZtVnljMmx2YmlncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNrOW1abk5sZENBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJbE5oWm1GeWFWd2lLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxjbk5wYjI0Z1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbk4xWW5OMGNtbHVaeWgyWlhKUFptWnpaWFFnS3lBM0tUdGNiaUFnSUNBZ0lDQWdkbVZ5VDJabWMyVjBJRDBnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVZtVnljMmx2Ymx3aUtUdGNiaUFnSUNBZ0lDQWdhV1lnS0habGNrOW1abk5sZENBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNGdQU0J1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG5OMVluTjBjbWx1WnloMlpYSlBabVp6WlhRZ0t5QTRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUW5KdmQzTmxjaTUwY21sdFZtVnljMmx2YmloMlpYSnphVzl1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR2xtSUdsMElHbHpJR1pwY21WbWIzZ2dZbkp2ZDNObGNseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdWFYTkdhWEpsWm05NElEMGdablZ1WTNScGIyNGdhWE5HYVhKbFptOTRLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVJtbHlaV1p2ZUZ3aUtTQWhQVDBnTFRFN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdabWx5WldadmVDQmljbTkzYzJWeUlIWmxjbk5wYjI1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1WjJWMFJtbHlaV1p2ZUZabGNuTnBiMjRnUFNCbWRXNWpkR2x2YmlCblpYUkdhWEpsWm05NFZtVnljMmx2YmlncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNrOW1abk5sZENBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJa1pwY21WbWIzaGNJaWs3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJaWEp6YVc5dUlEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV6ZFdKemRISnBibWNvZG1WeVQyWm1jMlYwSUNzZ09DazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQkNjbTkzYzJWeUxuUnlhVzFXWlhKemFXOXVLSFpsY25OcGIyNHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdhWFFnYVhNZ2IzUm9aWElnWW5KdmQzTmxjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRUp5YjNkelpYSXVhWE5QZEdobGNpQTlJR1oxYm1OMGFXOXVJR2x6VDNSb1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnVZVzFsVDJabWMyVjBJRDBnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1c1lYTjBTVzVrWlhoUFppaGNJaUJjSWlrZ0t5QXhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVnlUMlptYzJWMElEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVzWVhOMFNXNWtaWGhQWmloY0lpOWNJaWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WVcxbFQyWm1jMlYwSUR3Z2RtVnlUMlptYzJWME8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJRzkwYUdWeUlHSnliM2R6WlhJZ2JtRnRaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJQZEdobGNrNWhiV1VnUFNCbWRXNWpkR2x2YmlCblpYUlBkR2hsY2s1aGJXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnVZVzFsVDJabWMyVjBJRDBnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1c1lYTjBTVzVrWlhoUFppaGNJaUJjSWlrZ0t5QXhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVnlUMlptYzJWMElEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVzWVhOMFNXNWtaWGhQWmloY0lpOWNJaWs3WEc0Z0lDQWdJQ0FnSUhaaGNpQmljbTkzYzJWeUlEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV6ZFdKemRISnBibWNvYm1GdFpVOW1abk5sZEN3Z2RtVnlUMlptYzJWMEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dKeWIzZHpaWEl1ZEc5TWIzZGxja05oYzJVb0tTQTlQVDBnWW5KdmQzTmxjaTUwYjFWd2NHVnlRMkZ6WlNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtOTNjMlZ5SUQwZ2JtRjJhV2RoZEc5eUxtRndjRTVoYldVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHSnliM2R6WlhJN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdiM1JvWlhJZ1luSnZkM05sY2lCMlpYSnphVzl1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMbWRsZEU5MGFHVnlWbVZ5YzJsdmJpQTlJR1oxYm1OMGFXOXVJR2RsZEU5MGFHVnlWbVZ5YzJsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHNWhiV1ZQWm1aelpYUWdQU0J1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG14aGMzUkpibVJsZUU5bUtGd2lJRndpS1NBcklERTdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSlBabVp6WlhRZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbXhoYzNSSmJtUmxlRTltS0Z3aUwxd2lLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxjbk5wYjI0Z1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbk4xWW5OMGNtbHVaeWgyWlhKUFptWnpaWFFnS3lBeEtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFSnliM2R6WlhJdWRISnBiVlpsY25OcGIyNG9kbVZ5YzJsdmJpazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRhR1ZqYXlCaWNtOTNjMlZ5SUhOMWNIQnZjblJjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMbWx6VTNWd2NHOXlkR1ZrSUQwZ1puVnVZM1JwYjI0Z2FYTlRkWEJ3YjNKMFpXUW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFoUW5KdmQzTmxjaTVwYzAxVFNVVW9LU0I4ZkNCd1lYSnpaVWx1ZENoQ2NtOTNjMlZ5TG1kbGRFMVRTVVZXWlhKemFXOXVLQ2tzSURFd0tTQStJRGc3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamF5QnBaaUJwZENCcGN5QlhaV0pMYVhRZ1luSnZkM05sY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1YVhOWFpXSkxhWFFnUFNCbWRXNWpkR2x2YmlCcGMxZGxZa3RwZENncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJa0Z3Y0d4bFYyVmlTMmwwTDF3aUtTQWhQVDBnTFRFN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmpheUJwWmlCcGRDQnBjeUJIWldOcmJ5QmljbTkzYzJWeVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1cGMwZGxZMnR2SUQwZ1puVnVZM1JwYjI0Z2FYTkhaV05yYnlncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJa2RsWTJ0dlhDSXBJRDRnTFRFZ0ppWWdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVwYm1SbGVFOW1LRndpUzBoVVRVeGNJaWtnUFQwOUlDMHhPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdhWFFnYVhNZ1FXNWtjbTlwWkNCaWNtOTNjMlZ5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVwYzBGdVpISnZhV1FnUFNCbWRXNWpkR2x2YmlCcGMwRnVaSEp2YVdRb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbWx1WkdWNFQyWW9YQ0pCYm1SeWIybGtYQ0lwSUQ0Z0xURTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRhR1ZqYXlCcFppQnBkQ0JwY3lCTWFXNTFlQ0JpY205M2MyVnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNXBjMHhwYm5WNElEMGdablZ1WTNScGIyNGdhWE5NYVc1MWVDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YVc1a1pYaFBaaWhjSWt4cGJuVjRYQ0lwSUQ0Z0xURTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRhR1ZqYXlCcFppQnBkQ0JwY3lCcFVHRmtJR0p5YjNkelpYSmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxtbHpWR0ZpYkdWMFVFTWdQU0JtZFc1amRHbHZiaUJwYzFSaFlteGxkRkJES0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lhVkJoWkZ3aUtTQStJQzB4TzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdRbkp2ZDNObGNqdGNibjBvS1R0Y2JseHVaWGh3YjNKMGN5NWtaV1poZFd4MElEMGdRbkp2ZDNObGNqdGNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDJ4cFlpOVZkR2xzYzBKeWIzZHpaWEl1ZEhOY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURoY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElnTXlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVYRzUyWVhJZ1gzUjVjR1Z2WmlBOUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUlEOGdablZ1WTNScGIyNGdLRzlpYWlrZ2V5QnlaWFIxY200Z2RIbHdaVzltSUc5aWFqc2dmU0E2SUdaMWJtTjBhVzl1SUNodlltb3BJSHNnY21WMGRYSnVJRzlpYWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2IySnFMbU52Ym5OMGNuVmpkRzl5SUQwOVBTQlRlVzFpYjJ3Z0ppWWdiMkpxSUNFOVBTQlRlVzFpYjJ3dWNISnZkRzkwZVhCbElEOGdYQ0p6ZVcxaWIyeGNJaUE2SUhSNWNHVnZaaUJ2WW1vN0lIMDdYRzVjYm1aMWJtTjBhVzl1SUY5amJHRnpjME5oYkd4RGFHVmpheWhwYm5OMFlXNWpaU3dnUTI5dWMzUnlkV04wYjNJcElIc2dhV1lnS0NFb2FXNXpkR0Z1WTJVZ2FXNXpkR0Z1WTJWdlppQkRiMjV6ZEhKMVkzUnZjaWtwSUhzZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa05oYm01dmRDQmpZV3hzSUdFZ1kyeGhjM01nWVhNZ1lTQm1kVzVqZEdsdmJsd2lLVHNnZlNCOVhHNWNiblpoY2lCVlVrd2dQU0J5WlhGMWFYSmxLRndpZFhKc1hDSXBPMXh1THlvcVhHNGdLaUJEYkdGemN5Qm1iM0lnZDI5eWEybHVaeUIzYVhSb0lHTnZiMnRwWlZ4dUlDb3ZYRzVjYm5aaGNpQkRiMjlyYVdVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lHWjFibU4wYVc5dUlFTnZiMnRwWlNncElIdGNiaUFnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dRMjl2YTJsbEtUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJVYUdVZ2JXVjBhRzlrSUhKbGRIVnlibk1nZEdobElHWnNZV2NnZDJobGRHaGxjaUJ6ZFhCd2IzSjBaV1FnZEdocGN5QnpkRzl5WVdkbElIUjVjR1VnYjNJZ2JtOTBYRzRnSUNBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZWeHVJQ0FnS2k5Y2JpQWdRMjl2YTJsbExtbHpVM1Z3Y0c5eWRHVmtJRDBnWm5WdVkzUnBiMjRnYVhOVGRYQndiM0owWldRb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGVYQmxiMllnWkc5amRXMWxiblFnUFQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCY0luVnVaR1ZtYVc1bFpGd2lJRG9nWDNSNWNHVnZaaWhrYjJOMWJXVnVkQ2twSUQwOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUhSNWNHVnZaaUJrYjJOMWJXVnVkQzVqYjI5cmFXVWdQVDA5SUZ3aWMzUnlhVzVuWENJN1hHNGdJSDA3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnYldWMGFHOWtJSE5sZEhNZ2RHaGxJSFpoYkhWbElHRnVaQ0J5WlhSMWNtNXpJSFJ5ZFdVZ2FXWWdhWFFnYUdGeklHSmxaVzRnYzJWMFhHNGdJQ0FxSUVCd1lYSmhiU0JqYUdWamExTjFjSEJ2Y25RZ2UySnZiMnhsWVc1OVhHNGdJQ0FxSUVCd1lYSmhiU0JyWlhrZ2UzTjBjbWx1WjMxY2JpQWdJQ29nUUhCaGNtRnRJSFpoYkhWbElIdHpkSEpwYm1kOVhHNGdJQ0FxSUVCd1lYSmhiU0JsZUhCcGNtVnpJSHR1ZFcxaVpYSjlYRzRnSUNBcUlFQndZWEpoYlNCd1lYUm9JSHR6ZEhKcGJtZDlYRzRnSUNBcUlFQndZWEpoYlNCa2IyMWhhVzRnZTNOMGNtbHVaMzFjYmlBZ0lDb2dRSEJoY21GdElITmxZM1Z5WlNCN1ltOXZiR1ZoYm4xY2JpQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDb3ZYRzVjYmx4dUlDQkRiMjlyYVdVdWMyVjBTWFJsYlNBOUlHWjFibU4wYVc5dUlITmxkRWwwWlcwb1kyaGxZMnRUZFhCd2IzSjBMQ0JyWlhrc0lIWmhiSFZsS1NCN1hHNGdJQ0FnZG1GeUlHVjRjR2x5WlhNZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNeUFtSmlCaGNtZDFiV1Z1ZEhOYk0xMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3pYU0E2SURNd08xeHVJQ0FnSUhaaGNpQndZWFJvSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lEUWdKaVlnWVhKbmRXMWxiblJ6V3pSZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk5GMGdPaUJjSWk5Y0lqdGNiaUFnSUNCMllYSWdaRzl0WVdsdUlEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJRFVnSmlZZ1lYSm5kVzFsYm5Seld6VmRJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QmhjbWQxYldWdWRITmJOVjBnT2lCc2IyTmhkR2x2Ymk1b2IzTjBibUZ0WlR0Y2JpQWdJQ0IyWVhJZ2MyVmpkWEpsSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lEWWdKaVlnWVhKbmRXMWxiblJ6V3paZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk5sMGdPaUJzYjJOaGRHbHZiaTV3Y205MGIyTnZiQ0E5UFQwZ1hDSm9kSFJ3Y3pwY0lqdGNibHh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlGWmhiR2xrWVhSbElHbHVjSFYwSUdSaGRHRmNiaUFnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYUdWamExTjFjSEJ2Y25RZ1BUMDlJRndpWW05dmJHVmhibHdpSUNZbUlIUjVjR1Z2WmlCclpYa2dQVDA5SUZ3aWMzUnlhVzVuWENJZ0ppWWdRMjl2YTJsbExuSmxaMVpoYkdsa1MyVjVMblJsYzNRb2EyVjVLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUZ3aWMzUnlhVzVuWENJZ0ppWWdkSGx3Wlc5bUlHVjRjR2x5WlhNZ1BUMDlJRndpYm5WdFltVnlYQ0lnSmlZZ1pYaHdhWEpsY3lBOElETTJOU0FtSmlCMGVYQmxiMllnY0dGMGFDQTlQVDBnWENKemRISnBibWRjSWlBbUppQjBlWEJsYjJZZ1pHOXRZV2x1SUQwOVBTQmNJbk4wY21sdVoxd2lJQ1ltSUdSdmJXRnBiaTVwYm1SbGVFOW1LR3h2WTJGMGFXOXVMbWh2YzNSdVlXMWxLU0FoUFQwZ0xURWdKaVlnZEhsd1pXOW1JSE5sWTNWeVpTQTlQVDBnWENKaWIyOXNaV0Z1WENJZ0ppWWdjMlZqZFhKbElEMDlQU0FvYkc5allYUnBiMjR1Y0hKdmRHOWpiMndnUFQwOUlGd2lhSFIwY0hNNlhDSXBLU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJXWVd4cFpHRjBaU0JwYm5CMWRDQmtZWFJoWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQjJZWElnZFNBOUlGVlNUQzV3WVhKelpTaGNJbWgwZEhBNkx5OWNJaUFySUdSdmJXRnBiaUFySUhCaGRHZ3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RTNW9iM04wYm1GdFpTQTlQVDBnWkc5dFlXbHVJSHg4SUhVdWNHRjBhQ0E5UFQwZ2NHRjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBcUlFbG1JSFJvWVhRZ2MzUnZjbVVnYVhNZ2MzVndjRzl5ZEdWa1hHNGdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZqYUdWamExTjFjSEJ2Y25RZ2ZId2dRMjl2YTJsbExtbHpVM1Z3Y0c5eWRHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVTJGMlpTQmpiMjlyYVdWeklHWnZjaUF6TUNCa1lYbHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1JHRjBaWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JoZEdVZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHRjBaUzV6WlhSVWFXMWxLR1JoZEdVdVoyVjBWR2x0WlNncElDc2daWGh3YVhKbGN5QXFJREkwSUNvZ05qQWdLaUEyTUNBcUlERXdNREFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdWNGNDQTlJR1JoZEdVdWRHOVZWRU5UZEhKcGJtY29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dSVzVqYjJSbElIWmhiSFZsSUdadmNpQnpkRzl5WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nUUhSNWNHVWdlM04wY21sdVozMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0JsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQlhjbWwwYVc1bklIWmhiSFZsSUhSdklIUm9aU0JrYjJOMWJXVnVkQ0JqYjI5cmFXVWdjM1J2Y21GblpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTNOMGNtbHVaMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVkyOXZhMmxsSUQwZ2EyVjVJQ3NnWENJOVhDSWdLeUIyWVd4MVpTQXJJQ2hsZUhBZ1B5QmNJanNnWlhod2FYSmxjejFjSWlBcklHVjRjQ0E2SUZ3aVhDSXBJQ3NnS0hCaGRHZ2dQeUJjSWpzZ2NHRjBhRDFjSWlBcklIQmhkR2dnT2lCY0lsd2lLU0FySUNoa2IyMWhhVzRnUHlCY0lqc2daRzl0WVdsdVBWd2lJQ3NnWkc5dFlXbHVJRG9nWENKY0lpa2dLeUFvYzJWamRYSmxJRDhnWENJN0lITmxZM1Z5WlZ3aUlEb2dYQ0pjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVsbUlHRnNiQ0J2YXlCeVpYUjFjbTRnZEhKMVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdRMjl2YTJsbExtZGxkRWwwWlcwb1kyaGxZMnRUZFhCd2IzSjBMQ0JyWlhrcElEMDlQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkpaaUJqYjI5cmFXVWdaRzlsY3lCdWIzUWdjM1Z3Y0c5eWRHVmtJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQXFJRWxtSUdsdWNIVjBJR1JoZEdFZ2FYTWdibTkwSUhaaGJHbGtYRzRnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nU1dZZ2FXNXdkWFFnWkdGMFlTQnBjeUJ1YjNRZ2RtRnNhV1JjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlFbG1JSE52YldWMGFHbHVaeUJuYjJWeklIZHliMjVuSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1SUNCOU8xeHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHMWxkR2h2WkNCeVpXRmtjeUIwYUdVZ2RtRnNkV1VnWVc1a0lISmxkSFZ5Ym5NZ2FYUWdiM0lnY21WMGRYSnVjeUJtWVd4elpTQnBaaUIwYUdVZ2RtRnNkV1VnWkc5bGN5QnViM1FnWlhocGMzUmNiaUFnSUNvZ1FIQmhjbUZ0SUdOb1pXTnJVM1Z3Y0c5eWRDQjdZbTl2YkdWaGJuMWNiaUFnSUNvZ1FIQmhjbUZ0SUd0bGVTQjdjM1J5YVc1bmZWeHVJQ0FnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZkdKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1WEc1Y2JpQWdRMjl2YTJsbExtZGxkRWwwWlcwZ1BTQm1kVzVqZEdsdmJpQm5aWFJKZEdWdEtHTm9aV05yVTNWd2NHOXlkQ3dnYTJWNUtTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNvZ1ZtRnNhV1JoZEdVZ2FXNXdkWFFnWkdGMFlWeHVJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR05vWldOclUzVndjRzl5ZENBOVBUMGdYQ0ppYjI5c1pXRnVYQ0lnSmlZZ2RIbHdaVzltSUd0bGVTQTlQVDBnWENKemRISnBibWRjSWlBbUppQkRiMjlyYVdVdWNtVm5WbUZzYVdSTFpYa3VkR1Z6ZENoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCMGFHRjBJSE4wYjNKbElHbHpJSE4xY0hCdmNuUmxaRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqYUdWamExTjFjSEJ2Y25RZ2ZId2dRMjl2YTJsbExtbHpVM1Z3Y0c5eWRHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0tpQkhaWFFnZEdobElHRnljbUY1SUdaeWIyMGdaRzlqZFcxbGJuUWdZMjl2YTJsbElITndiR2wwSUdKNUlEdGNiaUFnSUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3YzNSeWFXNW5XMTE5WEc0Z0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHRnlja052YjJ0cFpTQTlJR1J2WTNWdFpXNTBMbU52YjJ0cFpTNXpjR3hwZENoY0lqdGNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1NYUmxjbUYwWlNCMGFISnZkV2RvSUhSb1pTQmpiMjlyYVdWelhHNGdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gybDBaWEpoZEc5eUlEMGdZWEp5UTI5dmEybGxMQ0JmYVhOQmNuSmhlU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29YMmwwWlhKaGRHOXlLU3dnWDJrZ1BTQXdMQ0JmYVhSbGNtRjBiM0lnUFNCZmFYTkJjbkpoZVNBL0lGOXBkR1Z5WVhSdmNpQTZJRjlwZEdWeVlYUnZjbHRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3T3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlGOXlaV1k3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFYTkJjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9YMmtnUGowZ1gybDBaWEpoZEc5eUxteGxibWQwYUNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZZ1BTQmZhWFJsY21GMGIzSmJYMmtySzEwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmZhU0E5SUY5cGRHVnlZWFJ2Y2k1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFTNWtiMjVsS1NCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdYM0psWmlBOUlGOXBMblpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2FTQTlJRjl5WldZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1ZISnBiU0JoYm1RZ2MzQnNhWFFnWldGamFDQmpiMjlyYVdVZ1lua2dQU0JtYjNJZ2EyVjVJSFpoYkhWbElIQmhjbVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdHpkSEpwYm1kYlhYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWWdQU0JwTG5SeWFXMG9LUzV6Y0d4cGRDaGNJajFjSWl3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUlFbG1JR2wwSUdseklHTnZjbkpsWTNRZ1kyOXZhMmxsSUd0bGVTQnlaWFIxY200Z2RHaGxJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMld6QmRJRDA5UFNCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVsbUlIUm9aU0IyWVd4MVpTQjNZWE1nWm05MWJtUWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSbFkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoMld6RmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1NXWWdkR2hsSUhaaGJIVmxJSGRoY3lCdWIzUWdabTkxYm1RZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBcUlFbG1JR052YjJ0cFpTQmtiMlZ6SUc1dmRDQnpkWEJ3YjNKMFpXUWdjbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NXWWdhVzV3ZFhRZ1pHRjBZU0JwY3lCdWIzUWdkbUZzYVdSY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRWxtSUhOdmJXVjBhR2x1WnlCbmIyVnpJSGR5YjI1bklISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1SUNBdktpcGNiaUFnSUNvZ1ZHaGxJRzFsZEdodlpDQnlaVzF2ZG1WeklIUm9aU0IyWVd4MVpTQmhibVFnY21WMGRYSnVJSFJ5ZFdVZ2FXWWdkR2hsSUhaaGJIVmxJR1J2WlhNZ2JtOTBJR1Y0YVhOMFhHNGdJQ0FxSUVCd1lYSmhiU0JqYUdWamExTjFjSEJ2Y25RZ2UySnZiMnhsWVc1OVhHNGdJQ0FxSUVCd1lYSmhiU0JyWlhrZ2UzTjBjbWx1WjMxY2JpQWdJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1WEc1Y2JpQWdRMjl2YTJsbExuSmxiVzkyWlVsMFpXMGdQU0JtZFc1amRHbHZiaUJ5WlcxdmRtVkpkR1Z0S0dOb1pXTnJVM1Z3Y0c5eWRDd2dhMlY1S1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nVm1Gc2FXUmhkR1VnYVc1d2RYUWdaR0YwWVZ4dUlDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHTm9aV05yVTNWd2NHOXlkQ0E5UFQwZ1hDSmliMjlzWldGdVhDSWdKaVlnZEhsd1pXOW1JR3RsZVNBOVBUMGdYQ0p6ZEhKcGJtZGNJaUFtSmlCRGIyOXJhV1V1Y21WblZtRnNhV1JMWlhrdWRHVnpkQ2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkpaaUIwYUdGMElITjBiM0psSUdseklITjFjSEJ2Y25SbFpGeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnYVdZZ0tDRmphR1ZqYTFOMWNIQnZjblFnZkh3Z1EyOXZhMmxsTG1selUzVndjRzl5ZEdWa0tDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnS2lCVFpYUWdaVzF3ZEhrZ2IzWmxjbVIxWlNCMllXeDFaU0JpZVNCclpYbGNiaUFnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQkRiMjlyYVdVdWMyVjBTWFJsYlNoamFHVmphMU4xY0hCdmNuUXNJR3RsZVN3Z1hDSmNJaXdnTFRFcE8xeHVJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQXFJRWxtSUdGc2JDQnZheUJ5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJEYjI5cmFXVXVaMlYwU1hSbGJTaGphR1ZqYTFOMWNIQnZjblFzSUd0bGVTa2dQVDA5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FxSUVsbUlHTnZiMnRwWlNCa2IyVnpJRzV2ZENCemRYQndiM0owWldRZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nU1dZZ2FXNXdkWFFnWkdGMFlTQnBjeUJ1YjNRZ2RtRnNhV1JjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlFbG1JSE52YldWMGFHbHVaeUJuYjJWeklIZHliMjVuSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1SUNCOU8xeHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHMWxkR2h2WkNCeVpYUjFjbTV6SUhSb1pTQmhjbkpoZVNCdlppQnpkSEpwYm1jZ2IyWWdZWFpoYVd4aFlteGxJR3RsZVhOY2JpQWdJQ29nUUhCaGNtRnRJR05vWldOclUzVndjRzl5ZENCN1ltOXZiR1ZoYm4xY2JpQWdJQ29nUUhKbGRIVnlibk1nZTNOMGNtbHVaMXRkZlZ4dUlDQWdLaTljYmx4dVhHNGdJRU52YjJ0cFpTNW5aWFJMWlhseklEMGdablZ1WTNScGIyNGdaMlYwUzJWNWN5aGphR1ZqYTFOMWNIQnZjblFwSUh0Y2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJXWVd4cFpHRjBaU0JwYm5CMWRDQmtZWFJoWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyaGxZMnRUZFhCd2IzSjBJRDA5UFNCY0ltSnZiMnhsWVc1Y0lpa2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTV1lnZEdoaGRDQnpkRzl5WlNCcGN5QnpkWEJ3YjNKMFpXUmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hZMmhsWTJ0VGRYQndiM0owSUh4OElFTnZiMnRwWlM1cGMxTjFjSEJ2Y25SbFpDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1ZHaGxJR0Z5Y21GNUlHOW1JR0YyWVdsc1lXSnNaU0JyWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ29nUUhSNWNHVWdlMEZ5Y21GNWZWeHVJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJoY25KTFpYbHpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDb2dSMlYwSUhSb1pTQmhjbkpoZVNCbWNtOXRJR1J2WTNWdFpXNTBJR052YjJ0cFpTQnpjR3hwZENCaWVTQTdYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTNOMGNtbHVaMXRkZlZ4dUlDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmhjbkpEYjI5cmFXVWdQU0JrYjJOMWJXVnVkQzVqYjI5cmFXVXVjM0JzYVhRb1hDSTdYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBcUlFbDBaWEpoZEdVZ2RHaHliM1ZuYUNCMGFHVWdZMjl2YTJsbGMxeHVJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlGOXBkR1Z5WVhSdmNqSWdQU0JoY25KRGIyOXJhV1VzSUY5cGMwRnljbUY1TWlBOUlFRnljbUY1TG1selFYSnlZWGtvWDJsMFpYSmhkRzl5TWlrc0lGOXBNaUE5SURBc0lGOXBkR1Z5WVhSdmNqSWdQU0JmYVhOQmNuSmhlVElnUHlCZmFYUmxjbUYwYjNJeUlEb2dYMmwwWlhKaGRHOXlNbHRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3T3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlGOXlaV1l5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1gybHpRWEp5WVhreUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVRJZ1BqMGdYMmwwWlhKaGRHOXlNaTVzWlc1bmRHZ3BJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmNtVm1NaUE5SUY5cGRHVnlZWFJ2Y2pKYlgya3lLeXRkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1gya3lJRDBnWDJsMFpYSmhkRzl5TWk1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFUSXVaRzl1WlNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZeUlEMGdYMmt5TG5aaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdhU0E5SUY5eVpXWXlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFJRlJ5YVcwZ1lXNWtJSE53YkdsMElHVmhZMmdnWTI5dmEybGxJR0o1SUQwZ1ptOXlJR3RsZVNCMllXeDFaU0J3WVhKbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3YzNSeWFXNW5XMTE5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIySUQwZ2FTNTBjbWx0S0NrdWMzQnNhWFFvWENJOVhDSXNJRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJCWkdRZ2EyVjVJSFJ2SUhSb1pTQnNhWE4wWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyV3pCZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlja3RsZVhNdWNIVnphQ2gyV3pCZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z5Y2t0bGVYTTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ29nU1dZZ1kyOXZhMmxsSUdSdlpYTWdibTkwSUhOMWNIQnZjblJsWkNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1cxMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkpaaUJwYm5CMWRDQmtZWFJoSUdseklHNXZkQ0IyWVd4cFpGeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRnRkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dTV1lnYzI5dFpYUm9hVzVuSUdkdlpYTWdkM0p2Ym1jZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJSEpsZEhWeWJpQmJYVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNGdJQzhxS2x4dUlDQWdLaUJVYUdVZ2JXVjBhRzlrSUdOc1pXRnVjeUIwYUdVZ2MzUnZjbUZuWlNCaGJtUWdjbVYwZFhKdUlIUnlkV1VnYVdZZ2FYUWdhWE1nWlcxd2RIbGNiaUFnSUNvZ1FIQmhjbUZ0SUdOb1pXTnJVM1Z3Y0c5eWRDQjdZbTl2YkdWaGJuMWNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OVhHNGdJQ0FxTDF4dVhHNWNiaUFnUTI5dmEybGxMbU5zWldGeUlEMGdablZ1WTNScGIyNGdZMnhsWVhJb1kyaGxZMnRUZFhCd2IzSjBLU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dWbUZzYVdSaGRHVWdhVzV3ZFhRZ1pHRjBZVnh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdOb1pXTnJVM1Z3Y0c5eWRDQTlQVDBnWENKaWIyOXNaV0Z1WENJcElIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFbG1JSFJvWVhRZ2MzUnZjbVVnYVhNZ2MzVndjRzl5ZEdWa1hHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXTm9aV05yVTNWd2NHOXlkQ0I4ZkNCRGIyOXJhV1V1YVhOVGRYQndiM0owWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmhjbkpMWlhseklEMGdRMjl2YTJsbExtZGxkRXRsZVhNb1kyaGxZMnRUZFhCd2IzSjBLVHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9ZWEp5UzJWNWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gybDBaWEpoZEc5eU15QTlJR0Z5Y2t0bGVYTXNJRjlwYzBGeWNtRjVNeUE5SUVGeWNtRjVMbWx6UVhKeVlYa29YMmwwWlhKaGRHOXlNeWtzSUY5cE15QTlJREFzSUY5cGRHVnlZWFJ2Y2pNZ1BTQmZhWE5CY25KaGVUTWdQeUJmYVhSbGNtRjBiM0l6SURvZ1gybDBaWEpoZEc5eU0xdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDazdPeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1gzSmxaak03WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBjMEZ5Y21GNU15a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFUTWdQajBnWDJsMFpYSmhkRzl5TXk1c1pXNW5kR2dwSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZeklEMGdYMmwwWlhKaGRHOXlNMXRmYVRNcksxMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gya3pJRDBnWDJsMFpYSmhkRzl5TXk1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBNeTVrYjI1bEtTQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmNtVm1NeUE5SUY5cE15NTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBJRDBnWDNKbFpqTTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl2YTJsbExuSmxiVzkyWlVsMFpXMG9ZMmhsWTJ0VGRYQndiM0owTENCcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ29nU1dZZ1lXeHNJRzlySUhKbGRIVnliaUIwY25WbFhHNGdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUVOdmIydHBaUzVuWlhSTFpYbHpLR05vWldOclUzVndjRzl5ZENrdWJHVnVaM1JvSUQwOVBTQXdPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FxSUVsbUlHTnZiMnRwWlNCa2IyVnpJRzV2ZENCemRYQndiM0owWldRZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCcGJuQjFkQ0JrWVhSaElHbHpJRzV2ZENCMllXeHBaRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNvZ1NXWWdjMjl0WlhSb2FXNW5JR2R2WlhNZ2QzSnZibWNnY21WMGRYSnVJR1poYkhObFhHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJRU52YjJ0cFpUdGNibjBvS1R0Y2JseHVaWGh3YjNKMGN5NWtaV1poZFd4MElEMGdRMjl2YTJsbE8xeHVYRzVEYjI5cmFXVXVjbVZuVm1Gc2FXUkxaWGtnUFNCdVpYY2dVbVZuUlhod0tGd2lLRnRoTFhwQkxWb3dMVGxmTFYxN01TeDlLVndpTENCY0ltbGNJaWs3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITkRiMjlyYVdVdWRITmNiaTh2SUcxdlpIVnNaU0JwWkNBOUlEbGNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SURJZ015SXNJaTh2SUVOdmNIbHlhV2RvZENCS2IzbGxiblFzSUVsdVl5NGdZVzVrSUc5MGFHVnlJRTV2WkdVZ1kyOXVkSEpwWW5WMGIzSnpMbHh1THk5Y2JpOHZJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhYRzR2THlCamIzQjVJRzltSUhSb2FYTWdjMjltZEhkaGNtVWdZVzVrSUdGemMyOWphV0YwWldRZ1pHOWpkVzFsYm5SaGRHbHZiaUJtYVd4bGN5QW9kR2hsWEc0dkx5QmNJbE52Wm5SM1lYSmxYQ0lwTENCMGJ5QmtaV0ZzSUdsdUlIUm9aU0JUYjJaMGQyRnlaU0IzYVhSb2IzVjBJSEpsYzNSeWFXTjBhVzl1TENCcGJtTnNkV1JwYm1kY2JpOHZJSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6SUhSdklIVnpaU3dnWTI5d2VTd2diVzlrYVdaNUxDQnRaWEpuWlN3Z2NIVmliR2x6YUN4Y2JpOHZJR1JwYzNSeWFXSjFkR1VzSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUIwYUdVZ1UyOW1kSGRoY21Vc0lHRnVaQ0IwYnlCd1pYSnRhWFJjYmk4dklIQmxjbk52Ym5NZ2RHOGdkMmh2YlNCMGFHVWdVMjltZEhkaGNtVWdhWE1nWm5WeWJtbHphR1ZrSUhSdklHUnZJSE52TENCemRXSnFaV04wSUhSdklIUm9aVnh1THk4Z1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZYRzR2TDF4dUx5OGdWR2hsSUdGaWIzWmxJR052Y0hseWFXZG9kQ0J1YjNScFkyVWdZVzVrSUhSb2FYTWdjR1Z5YldsemMybHZiaUJ1YjNScFkyVWdjMmhoYkd3Z1ltVWdhVzVqYkhWa1pXUmNiaTh2SUdsdUlHRnNiQ0JqYjNCcFpYTWdiM0lnYzNWaWMzUmhiblJwWVd3Z2NHOXlkR2x2Ym5NZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTGx4dUx5OWNiaTh2SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFOY2JpOHZJRTlTSUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBaY2JpOHZJRTFGVWtOSVFVNVVRVUpKVEVsVVdTd2dSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTVjYmk4dklFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJTQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxGeHVMeThnUkVGTlFVZEZVeUJQVWlCUFZFaEZVaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNYRzR2THlCUFZFaEZVbGRKVTBVc0lFRlNTVk5KVGtjZ1JsSlBUU3dnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRlhHNHZMeUJWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNGdWRWhGSUZOUFJsUlhRVkpGTGx4dVhHNTJZWElnY0hWdWVXTnZaR1VnUFNCeVpYRjFhWEpsS0Nkd2RXNTVZMjlrWlNjcE8xeHVYRzVsZUhCdmNuUnpMbkJoY25ObElEMGdkWEpzVUdGeWMyVTdYRzVsZUhCdmNuUnpMbkpsYzI5c2RtVWdQU0IxY214U1pYTnZiSFpsTzF4dVpYaHdiM0owY3k1eVpYTnZiSFpsVDJKcVpXTjBJRDBnZFhKc1VtVnpiMngyWlU5aWFtVmpkRHRjYm1WNGNHOXlkSE11Wm05eWJXRjBJRDBnZFhKc1JtOXliV0YwTzF4dVhHNWxlSEJ2Y25SekxsVnliQ0E5SUZWeWJEdGNibHh1Wm5WdVkzUnBiMjRnVlhKc0tDa2dlMXh1SUNCMGFHbHpMbkJ5YjNSdlkyOXNJRDBnYm5Wc2JEdGNiaUFnZEdocGN5NXpiR0Z6YUdWeklEMGdiblZzYkR0Y2JpQWdkR2hwY3k1aGRYUm9JRDBnYm5Wc2JEdGNiaUFnZEdocGN5NW9iM04wSUQwZ2JuVnNiRHRjYmlBZ2RHaHBjeTV3YjNKMElEMGdiblZzYkR0Y2JpQWdkR2hwY3k1b2IzTjBibUZ0WlNBOUlHNTFiR3c3WEc0Z0lIUm9hWE11YUdGemFDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWMyVmhjbU5vSUQwZ2JuVnNiRHRjYmlBZ2RHaHBjeTV4ZFdWeWVTQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWNHRjBhRzVoYldVZ1BTQnVkV3hzTzF4dUlDQjBhR2x6TG5CaGRHZ2dQU0J1ZFd4c08xeHVJQ0IwYUdsekxtaHlaV1lnUFNCdWRXeHNPMXh1ZlZ4dVhHNHZMeUJTWldabGNtVnVZMlU2SUZKR1F5QXpPVGcyTENCU1JrTWdNVGd3T0N3Z1VrWkRJREl6T1RaY2JseHVMeThnWkdWbWFXNWxJSFJvWlhObElHaGxjbVVnYzI4Z1lYUWdiR1ZoYzNRZ2RHaGxlU0J2Ym14NUlHaGhkbVVnZEc4Z1ltVmNiaTh2SUdOdmJYQnBiR1ZrSUc5dVkyVWdiMjRnZEdobElHWnBjbk4wSUcxdlpIVnNaU0JzYjJGa0xseHVkbUZ5SUhCeWIzUnZZMjlzVUdGMGRHVnliaUE5SUM5ZUtGdGhMWG93TFRrdUt5MWRLem9wTDJrc1hHNGdJQ0FnY0c5eWRGQmhkSFJsY200Z1BTQXZPbHN3TFRsZEtpUXZMRnh1WEc0Z0lDQWdMeThnVWtaRElESXpPVFk2SUdOb1lYSmhZM1JsY25NZ2NtVnpaWEoyWldRZ1ptOXlJR1JsYkdsdGFYUnBibWNnVlZKTWN5NWNiaUFnSUNBdkx5QlhaU0JoWTNSMVlXeHNlU0JxZFhOMElHRjFkRzh0WlhOallYQmxJSFJvWlhObExseHVJQ0FnSUdSbGJHbHRjeUE5SUZzblBDY3NJQ2MrSnl3Z0oxd2lKeXdnSjJBbkxDQW5JQ2NzSUNkY1hISW5MQ0FuWEZ4dUp5d2dKMXhjZENkZExGeHVYRzRnSUNBZ0x5OGdVa1pESURJek9UWTZJR05vWVhKaFkzUmxjbk1nYm05MElHRnNiRzkzWldRZ1ptOXlJSFpoY21sdmRYTWdjbVZoYzI5dWN5NWNiaUFnSUNCMWJuZHBjMlVnUFNCYkozc25MQ0FuZlNjc0lDZDhKeXdnSjF4Y1hGd25MQ0FuWGljc0lDZGdKMTB1WTI5dVkyRjBLR1JsYkdsdGN5a3NYRzVjYmlBZ0lDQXZMeUJCYkd4dmQyVmtJR0o1SUZKR1EzTXNJR0oxZENCallYVnpaU0J2WmlCWVUxTWdZWFIwWVdOcmN5NGdJRUZzZDJGNWN5QmxjMk5oY0dVZ2RHaGxjMlV1WEc0Z0lDQWdZWFYwYjBWelkyRndaU0E5SUZzblhGd25KMTB1WTI5dVkyRjBLSFZ1ZDJselpTa3NYRzRnSUNBZ0x5OGdRMmhoY21GamRHVnljeUIwYUdGMElHRnlaU0J1WlhabGNpQmxkbVZ5SUdGc2JHOTNaV1FnYVc0Z1lTQm9iM04wYm1GdFpTNWNiaUFnSUNBdkx5Qk9iM1JsSUhSb1lYUWdZVzU1SUdsdWRtRnNhV1FnWTJoaGNuTWdZWEpsSUdGc2MyOGdhR0Z1Wkd4bFpDd2dZblYwSUhSb1pYTmxYRzRnSUNBZ0x5OGdZWEpsSUhSb1pTQnZibVZ6SUhSb1lYUWdZWEpsSUNwbGVIQmxZM1JsWkNvZ2RHOGdZbVVnYzJWbGJpd2djMjhnZDJVZ1ptRnpkQzF3WVhSb1hHNGdJQ0FnTHk4Z2RHaGxiUzVjYmlBZ0lDQnViMjVJYjNOMFEyaGhjbk1nUFNCYkp5VW5MQ0FuTHljc0lDYy9KeXdnSnpzbkxDQW5JeWRkTG1OdmJtTmhkQ2hoZFhSdlJYTmpZWEJsS1N4Y2JpQWdJQ0JvYjNOMFJXNWthVzVuUTJoaGNuTWdQU0JiSnk4bkxDQW5QeWNzSUNjakoxMHNYRzRnSUNBZ2FHOXpkRzVoYldWTllYaE1aVzRnUFNBeU5UVXNYRzRnSUNBZ2FHOXpkRzVoYldWUVlYSjBVR0YwZEdWeWJpQTlJQzllVzJFdGVqQXRPVUV0V2w4dFhYc3dMRFl6ZlNRdkxGeHVJQ0FnSUdodmMzUnVZVzFsVUdGeWRGTjBZWEowSUQwZ0wxNG9XMkV0ZWpBdE9VRXRXbDh0WFhzd0xEWXpmU2tvTGlvcEpDOHNYRzRnSUNBZ0x5OGdjSEp2ZEc5amIyeHpJSFJvWVhRZ1kyRnVJR0ZzYkc5M0lGd2lkVzV6WVdabFhDSWdZVzVrSUZ3aWRXNTNhWE5sWENJZ1kyaGhjbk11WEc0Z0lDQWdkVzV6WVdabFVISnZkRzlqYjJ3Z1BTQjdYRzRnSUNBZ0lDQW5hbUYyWVhOamNtbHdkQ2M2SUhSeWRXVXNYRzRnSUNBZ0lDQW5hbUYyWVhOamNtbHdkRG9uT2lCMGNuVmxYRzRnSUNBZ2ZTeGNiaUFnSUNBdkx5QndjbTkwYjJOdmJITWdkR2hoZENCdVpYWmxjaUJvWVhabElHRWdhRzl6ZEc1aGJXVXVYRzRnSUNBZ2FHOXpkR3hsYzNOUWNtOTBiMk52YkNBOUlIdGNiaUFnSUNBZ0lDZHFZWFpoYzJOeWFYQjBKem9nZEhKMVpTeGNiaUFnSUNBZ0lDZHFZWFpoYzJOeWFYQjBPaWM2SUhSeWRXVmNiaUFnSUNCOUxGeHVJQ0FnSUM4dklIQnliM1J2WTI5c2N5QjBhR0YwSUdGc2QyRjVjeUJqYjI1MFlXbHVJR0VnTHk4Z1ltbDBMbHh1SUNBZ0lITnNZWE5vWldSUWNtOTBiMk52YkNBOUlIdGNiaUFnSUNBZ0lDZG9kSFJ3SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ2RvZEhSd2N5YzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBblpuUndKem9nZEhKMVpTeGNiaUFnSUNBZ0lDZG5iM0JvWlhJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSjJacGJHVW5PaUIwY25WbExGeHVJQ0FnSUNBZ0oyaDBkSEE2SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ2RvZEhSd2N6b25PaUIwY25WbExGeHVJQ0FnSUNBZ0oyWjBjRG9uT2lCMGNuVmxMRnh1SUNBZ0lDQWdKMmR2Y0dobGNqb25PaUIwY25WbExGeHVJQ0FnSUNBZ0oyWnBiR1U2SnpvZ2RISjFaVnh1SUNBZ0lIMHNYRzRnSUNBZ2NYVmxjbmx6ZEhKcGJtY2dQU0J5WlhGMWFYSmxLQ2R4ZFdWeWVYTjBjbWx1WnljcE8xeHVYRzVtZFc1amRHbHZiaUIxY214UVlYSnpaU2gxY213c0lIQmhjbk5sVVhWbGNubFRkSEpwYm1jc0lITnNZWE5vWlhORVpXNXZkR1ZJYjNOMEtTQjdYRzRnSUdsbUlDaDFjbXdnSmlZZ2FYTlBZbXBsWTNRb2RYSnNLU0FtSmlCMWNtd2dhVzV6ZEdGdVkyVnZaaUJWY213cElISmxkSFZ5YmlCMWNtdzdYRzVjYmlBZ2RtRnlJSFVnUFNCdVpYY2dWWEpzTzF4dUlDQjFMbkJoY25ObEtIVnliQ3dnY0dGeWMyVlJkV1Z5ZVZOMGNtbHVaeXdnYzJ4aGMyaGxjMFJsYm05MFpVaHZjM1FwTzF4dUlDQnlaWFIxY200Z2RUdGNibjFjYmx4dVZYSnNMbkJ5YjNSdmRIbHdaUzV3WVhKelpTQTlJR1oxYm1OMGFXOXVLSFZ5YkN3Z2NHRnljMlZSZFdWeWVWTjBjbWx1Wnl3Z2MyeGhjMmhsYzBSbGJtOTBaVWh2YzNRcElIdGNiaUFnYVdZZ0tDRnBjMU4wY21sdVp5aDFjbXdwS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lsQmhjbUZ0WlhSbGNpQW5kWEpzSnlCdGRYTjBJR0psSUdFZ2MzUnlhVzVuTENCdWIzUWdYQ0lnS3lCMGVYQmxiMllnZFhKc0tUdGNiaUFnZlZ4dVhHNGdJSFpoY2lCeVpYTjBJRDBnZFhKc08xeHVYRzRnSUM4dklIUnlhVzBnWW1WbWIzSmxJSEJ5YjJObFpXUnBibWN1WEc0Z0lDOHZJRlJvYVhNZ2FYTWdkRzhnYzNWd2NHOXlkQ0J3WVhKelpTQnpkSFZtWmlCc2FXdGxJRndpSUNCb2RIUndPaTh2Wm05dkxtTnZiU0FnWEZ4dVhDSmNiaUFnY21WemRDQTlJSEpsYzNRdWRISnBiU2dwTzF4dVhHNGdJSFpoY2lCd2NtOTBieUE5SUhCeWIzUnZZMjlzVUdGMGRHVnliaTVsZUdWaktISmxjM1FwTzF4dUlDQnBaaUFvY0hKdmRHOHBJSHRjYmlBZ0lDQndjbTkwYnlBOUlIQnliM1J2V3pCZE8xeHVJQ0FnSUhaaGNpQnNiM2RsY2xCeWIzUnZJRDBnY0hKdmRHOHVkRzlNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0IwYUdsekxuQnliM1J2WTI5c0lEMGdiRzkzWlhKUWNtOTBienRjYmlBZ0lDQnlaWE4wSUQwZ2NtVnpkQzV6ZFdKemRISW9jSEp2ZEc4dWJHVnVaM1JvS1R0Y2JpQWdmVnh1WEc0Z0lDOHZJR1pwWjNWeVpTQnZkWFFnYVdZZ2FYUW5jeUJuYjNRZ1lTQm9iM04wWEc0Z0lDOHZJSFZ6WlhKQWMyVnlkbVZ5SUdseklDcGhiSGRoZVhNcUlHbHVkR1Z5Y0hKbGRHVmtJR0Z6SUdFZ2FHOXpkRzVoYldVc0lHRnVaQ0IxY214Y2JpQWdMeThnY21WemIyeDFkR2x2YmlCM2FXeHNJSFJ5WldGMElDOHZabTl2TDJKaGNpQmhjeUJvYjNOMFBXWnZieXh3WVhSb1BXSmhjaUJpWldOaGRYTmxJSFJvWVhRbmMxeHVJQ0F2THlCb2IzY2dkR2hsSUdKeWIzZHpaWElnY21WemIyeDJaWE1nY21Wc1lYUnBkbVVnVlZKTWN5NWNiaUFnYVdZZ0tITnNZWE5vWlhORVpXNXZkR1ZJYjNOMElIeDhJSEJ5YjNSdklIeDhJSEpsYzNRdWJXRjBZMmdvTDE1Y1hDOWNYQzliWGtCY1hDOWRLMEJiWGtCY1hDOWRLeThwS1NCN1hHNGdJQ0FnZG1GeUlITnNZWE5vWlhNZ1BTQnlaWE4wTG5OMVluTjBjaWd3TENBeUtTQTlQVDBnSnk4dkp6dGNiaUFnSUNCcFppQW9jMnhoYzJobGN5QW1KaUFoS0hCeWIzUnZJQ1ltSUdodmMzUnNaWE56VUhKdmRHOWpiMnhiY0hKdmRHOWRLU2tnZTF4dUlDQWdJQ0FnY21WemRDQTlJSEpsYzNRdWMzVmljM1J5S0RJcE8xeHVJQ0FnSUNBZ2RHaHBjeTV6YkdGemFHVnpJRDBnZEhKMVpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvSVdodmMzUnNaWE56VUhKdmRHOWpiMnhiY0hKdmRHOWRJQ1ltWEc0Z0lDQWdJQ0FvYzJ4aGMyaGxjeUI4ZkNBb2NISnZkRzhnSmlZZ0lYTnNZWE5vWldSUWNtOTBiMk52YkZ0d2NtOTBiMTBwS1NrZ2UxeHVYRzRnSUNBZ0x5OGdkR2hsY21VbmN5QmhJR2h2YzNSdVlXMWxMbHh1SUNBZ0lDOHZJSFJvWlNCbWFYSnpkQ0JwYm5OMFlXNWpaU0J2WmlBdkxDQS9MQ0E3TENCdmNpQWpJR1Z1WkhNZ2RHaGxJR2h2YzNRdVhHNGdJQ0FnTHk5Y2JpQWdJQ0F2THlCSlppQjBhR1Z5WlNCcGN5QmhiaUJBSUdsdUlIUm9aU0JvYjNOMGJtRnRaU3dnZEdobGJpQnViMjR0YUc5emRDQmphR0Z5Y3lBcVlYSmxLaUJoYkd4dmQyVmtYRzRnSUNBZ0x5OGdkRzhnZEdobElHeGxablFnYjJZZ2RHaGxJR3hoYzNRZ1FDQnphV2R1TENCMWJteGxjM01nYzI5dFpTQm9iM04wTFdWdVpHbHVaeUJqYUdGeVlXTjBaWEpjYmlBZ0lDQXZMeUJqYjIxbGN5QXFZbVZtYjNKbEtpQjBhR1VnUUMxemFXZHVMbHh1SUNBZ0lDOHZJRlZTVEhNZ1lYSmxJRzlpYm05NGFXOTFjeTVjYmlBZ0lDQXZMMXh1SUNBZ0lDOHZJR1Y0T2x4dUlDQWdJQzh2SUdoMGRIQTZMeTloUUdKQVl5OGdQVDRnZFhObGNqcGhRR0lnYUc5emREcGpYRzRnSUNBZ0x5OGdhSFIwY0RvdkwyRkFZajlBWXlBOVBpQjFjMlZ5T21FZ2FHOXpkRHBqSUhCaGRHZzZMejlBWTF4dVhHNGdJQ0FnTHk4Z2RqQXVNVElnVkU5RVR5aHBjMkZoWTNNcE9pQlVhR2x6SUdseklHNXZkQ0J4ZFdsMFpTQm9iM2NnUTJoeWIyMWxJR1J2WlhNZ2RHaHBibWR6TGx4dUlDQWdJQzh2SUZKbGRtbGxkeUJ2ZFhJZ2RHVnpkQ0JqWVhObElHRm5ZV2x1YzNRZ1luSnZkM05sY25NZ2JXOXlaU0JqYjIxd2NtVm9aVzV6YVhabGJIa3VYRzVjYmlBZ0lDQXZMeUJtYVc1a0lIUm9aU0JtYVhKemRDQnBibk4wWVc1alpTQnZaaUJoYm5rZ2FHOXpkRVZ1WkdsdVowTm9ZWEp6WEc0Z0lDQWdkbUZ5SUdodmMzUkZibVFnUFNBdE1UdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHaHZjM1JGYm1ScGJtZERhR0Z5Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdobFl5QTlJSEpsYzNRdWFXNWtaWGhQWmlob2IzTjBSVzVrYVc1blEyaGhjbk5iYVYwcE8xeHVJQ0FnSUNBZ2FXWWdLR2hsWXlBaFBUMGdMVEVnSmlZZ0tHaHZjM1JGYm1RZ1BUMDlJQzB4SUh4OElHaGxZeUE4SUdodmMzUkZibVFwS1Z4dUlDQWdJQ0FnSUNCb2IzTjBSVzVrSUQwZ2FHVmpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJR0YwSUhSb2FYTWdjRzlwYm5Rc0lHVnBkR2hsY2lCM1pTQm9ZWFpsSUdGdUlHVjRjR3hwWTJsMElIQnZhVzUwSUhkb1pYSmxJSFJvWlZ4dUlDQWdJQzh2SUdGMWRHZ2djRzl5ZEdsdmJpQmpZVzV1YjNRZ1oyOGdjR0Z6ZEN3Z2IzSWdkR2hsSUd4aGMzUWdRQ0JqYUdGeUlHbHpJSFJvWlNCa1pXTnBaR1Z5TGx4dUlDQWdJSFpoY2lCaGRYUm9MQ0JoZEZOcFoyNDdYRzRnSUNBZ2FXWWdLR2h2YzNSRmJtUWdQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQXZMeUJoZEZOcFoyNGdZMkZ1SUdKbElHRnVlWGRvWlhKbExseHVJQ0FnSUNBZ1lYUlRhV2R1SUQwZ2NtVnpkQzVzWVhOMFNXNWtaWGhQWmlnblFDY3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QmhkRk5wWjI0Z2JYVnpkQ0JpWlNCcGJpQmhkWFJvSUhCdmNuUnBiMjR1WEc0Z0lDQWdJQ0F2THlCb2RIUndPaTh2WVVCaUwyTkFaQ0E5UGlCb2IzTjBPbUlnWVhWMGFEcGhJSEJoZEdnNkwyTkFaRnh1SUNBZ0lDQWdZWFJUYVdkdUlEMGdjbVZ6ZEM1c1lYTjBTVzVrWlhoUFppZ25RQ2NzSUdodmMzUkZibVFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUU1dmR5QjNaU0JvWVhabElHRWdjRzl5ZEdsdmJpQjNhR2xqYUNCcGN5QmtaV1pwYm1sMFpXeDVJSFJvWlNCaGRYUm9MbHh1SUNBZ0lDOHZJRkIxYkd3Z2RHaGhkQ0J2Wm1ZdVhHNGdJQ0FnYVdZZ0tHRjBVMmxuYmlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUdGMWRHZ2dQU0J5WlhOMExuTnNhV05sS0RBc0lHRjBVMmxuYmlrN1hHNGdJQ0FnSUNCeVpYTjBJRDBnY21WemRDNXpiR2xqWlNoaGRGTnBaMjRnS3lBeEtUdGNiaUFnSUNBZ0lIUm9hWE11WVhWMGFDQTlJR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2hoZFhSb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QjBhR1VnYUc5emRDQnBjeUIwYUdVZ2NtVnRZV2x1YVc1bklIUnZJSFJvWlNCc1pXWjBJRzltSUhSb1pTQm1hWEp6ZENCdWIyNHRhRzl6ZENCamFHRnlYRzRnSUNBZ2FHOXpkRVZ1WkNBOUlDMHhPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dibTl1U0c5emRFTm9ZWEp6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQjJZWElnYUdWaklEMGdjbVZ6ZEM1cGJtUmxlRTltS0c1dmJraHZjM1JEYUdGeWMxdHBYU2s3WEc0Z0lDQWdJQ0JwWmlBb2FHVmpJQ0U5UFNBdE1TQW1KaUFvYUc5emRFVnVaQ0E5UFQwZ0xURWdmSHdnYUdWaklEd2dhRzl6ZEVWdVpDa3BYRzRnSUNBZ0lDQWdJR2h2YzNSRmJtUWdQU0JvWldNN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlIZGxJSE4wYVd4c0lHaGhkbVVnYm05MElHaHBkQ0JwZEN3Z2RHaGxiaUIwYUdVZ1pXNTBhWEpsSUhSb2FXNW5JR2x6SUdFZ2FHOXpkQzVjYmlBZ0lDQnBaaUFvYUc5emRFVnVaQ0E5UFQwZ0xURXBYRzRnSUNBZ0lDQm9iM04wUlc1a0lEMGdjbVZ6ZEM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0IwYUdsekxtaHZjM1FnUFNCeVpYTjBMbk5zYVdObEtEQXNJR2h2YzNSRmJtUXBPMXh1SUNBZ0lISmxjM1FnUFNCeVpYTjBMbk5zYVdObEtHaHZjM1JGYm1RcE8xeHVYRzRnSUNBZ0x5OGdjSFZzYkNCdmRYUWdjRzl5ZEM1Y2JpQWdJQ0IwYUdsekxuQmhjbk5sU0c5emRDZ3BPMXh1WEc0Z0lDQWdMeThnZDJVbmRtVWdhVzVrYVdOaGRHVmtJSFJvWVhRZ2RHaGxjbVVnYVhNZ1lTQm9iM04wYm1GdFpTeGNiaUFnSUNBdkx5QnpieUJsZG1WdUlHbG1JR2wwSjNNZ1pXMXdkSGtzSUdsMElHaGhjeUIwYnlCaVpTQndjbVZ6Wlc1MExseHVJQ0FnSUhSb2FYTXVhRzl6ZEc1aGJXVWdQU0IwYUdsekxtaHZjM1J1WVcxbElIeDhJQ2NuTzF4dVhHNGdJQ0FnTHk4Z2FXWWdhRzl6ZEc1aGJXVWdZbVZuYVc1eklIZHBkR2dnV3lCaGJtUWdaVzVrY3lCM2FYUm9JRjFjYmlBZ0lDQXZMeUJoYzNOMWJXVWdkR2hoZENCcGRDZHpJR0Z1SUVsUWRqWWdZV1JrY21WemN5NWNiaUFnSUNCMllYSWdhWEIyTmtodmMzUnVZVzFsSUQwZ2RHaHBjeTVvYjNOMGJtRnRaVnN3WFNBOVBUMGdKMXNuSUNZbVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUc5emRHNWhiV1ZiZEdocGN5NW9iM04wYm1GdFpTNXNaVzVuZEdnZ0xTQXhYU0E5UFQwZ0oxMG5PMXh1WEc0Z0lDQWdMeThnZG1Gc2FXUmhkR1VnWVNCc2FYUjBiR1V1WEc0Z0lDQWdhV1lnS0NGcGNIWTJTRzl6ZEc1aGJXVXBJSHRjYmlBZ0lDQWdJSFpoY2lCb2IzTjBjR0Z5ZEhNZ1BTQjBhR2x6TG1odmMzUnVZVzFsTG5Od2JHbDBLQzljWEM0dktUdGNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3TENCc0lEMGdhRzl6ZEhCaGNuUnpMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdjR0Z5ZENBOUlHaHZjM1J3WVhKMGMxdHBYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRndZWEowS1NCamIyNTBhVzUxWlR0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z3WVhKMExtMWhkR05vS0dodmMzUnVZVzFsVUdGeWRGQmhkSFJsY200cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHNWxkM0JoY25RZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcUlEMGdNQ3dnYXlBOUlIQmhjblF1YkdWdVozUm9PeUJxSUR3Z2F6c2dhaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NHRnlkQzVqYUdGeVEyOWtaVUYwS0dvcElENGdNVEkzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklIZGxJSEpsY0d4aFkyVWdibTl1TFVGVFEwbEpJR05vWVhJZ2QybDBhQ0JoSUhSbGJYQnZjbUZ5ZVNCd2JHRmpaV2h2YkdSbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QjNaU0J1WldWa0lIUm9hWE1nZEc4Z2JXRnJaU0J6ZFhKbElITnBlbVVnYjJZZ2FHOXpkRzVoYldVZ2FYTWdibTkwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdKeWIydGxiaUJpZVNCeVpYQnNZV05wYm1jZ2JtOXVMVUZUUTBsSklHSjVJRzV2ZEdocGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNjR0Z5ZENBclBTQW5lQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZHdZWEowSUNzOUlIQmhjblJiYWwwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQzh2SUhkbElIUmxjM1FnWVdkaGFXNGdkMmwwYUNCQlUwTkpTU0JqYUdGeUlHOXViSGxjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDNCaGNuUXViV0YwWTJnb2FHOXpkRzVoYldWUVlYSjBVR0YwZEdWeWJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIyWVd4cFpGQmhjblJ6SUQwZ2FHOXpkSEJoY25SekxuTnNhV05sS0RBc0lHa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzV2ZEVodmMzUWdQU0JvYjNOMGNHRnlkSE11YzJ4cFkyVW9hU0FySURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHSnBkQ0E5SUhCaGNuUXViV0YwWTJnb2FHOXpkRzVoYldWUVlYSjBVM1JoY25RcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnBkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4cFpGQmhjblJ6TG5CMWMyZ29ZbWwwV3pGZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JtOTBTRzl6ZEM1MWJuTm9hV1owS0dKcGRGc3lYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibTkwU0c5emRDNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkQ0E5SUNjdkp5QXJJRzV2ZEVodmMzUXVhbTlwYmlnbkxpY3BJQ3NnY21WemREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHOXpkRzVoYldVZ1BTQjJZV3hwWkZCaGNuUnpMbXB2YVc0b0p5NG5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtaHZjM1J1WVcxbExteGxibWQwYUNBK0lHaHZjM1J1WVcxbFRXRjRUR1Z1S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWh2YzNSdVlXMWxJRDBnSnljN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2SUdodmMzUnVZVzFsY3lCaGNtVWdZV3gzWVhseklHeHZkMlZ5SUdOaGMyVXVYRzRnSUNBZ0lDQjBhR2x6TG1odmMzUnVZVzFsSUQwZ2RHaHBjeTVvYjNOMGJtRnRaUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDZ2hhWEIyTmtodmMzUnVZVzFsS1NCN1hHNGdJQ0FnSUNBdkx5QkpSRTVCSUZOMWNIQnZjblE2SUZKbGRIVnlibk1nWVNCd2RXNTVJR052WkdWa0lISmxjSEpsYzJWdWRHRjBhVzl1SUc5bUlGd2laRzl0WVdsdVhDSXVYRzRnSUNBZ0lDQXZMeUJKZENCdmJteDVJR052Ym5abGNuUnpJSFJvWlNCd1lYSjBJRzltSUhSb1pTQmtiMjFoYVc0Z2JtRnRaU0IwYUdGMFhHNGdJQ0FnSUNBdkx5Qm9ZWE1nYm05dUlFRlRRMGxKSUdOb1lYSmhZM1JsY25NdUlFa3VaUzRnYVhRZ1pHOXpaVzUwSUcxaGRIUmxjaUJwWmx4dUlDQWdJQ0FnTHk4Z2VXOTFJR05oYkd3Z2FYUWdkMmwwYUNCaElHUnZiV0ZwYmlCMGFHRjBJR0ZzY21WaFpIa2dhWE1nYVc0Z1FWTkRTVWt1WEc0Z0lDQWdJQ0IyWVhJZ1pHOXRZV2x1UVhKeVlYa2dQU0IwYUdsekxtaHZjM1J1WVcxbExuTndiR2wwS0NjdUp5azdYRzRnSUNBZ0lDQjJZWElnYm1WM1QzVjBJRDBnVzEwN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHUnZiV0ZwYmtGeWNtRjVMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6SUQwZ1pHOXRZV2x1UVhKeVlYbGJhVjA3WEc0Z0lDQWdJQ0FnSUc1bGQwOTFkQzV3ZFhOb0tITXViV0YwWTJnb0wxdGVRUzFhWVMxNk1DMDVYeTFkTHlrZ1AxeHVJQ0FnSUNBZ0lDQWdJQ0FnSjNodUxTMG5JQ3NnY0hWdWVXTnZaR1V1Wlc1amIyUmxLSE1wSURvZ2N5azdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQjBhR2x6TG1odmMzUnVZVzFsSUQwZ2JtVjNUM1YwTG1wdmFXNG9KeTRuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ2NDQTlJSFJvYVhNdWNHOXlkQ0EvSUNjNkp5QXJJSFJvYVhNdWNHOXlkQ0E2SUNjbk8xeHVJQ0FnSUhaaGNpQm9JRDBnZEdocGN5NW9iM04wYm1GdFpTQjhmQ0FuSnp0Y2JpQWdJQ0IwYUdsekxtaHZjM1FnUFNCb0lDc2djRHRjYmlBZ0lDQjBhR2x6TG1oeVpXWWdLejBnZEdocGN5NW9iM04wTzF4dVhHNGdJQ0FnTHk4Z2MzUnlhWEFnV3lCaGJtUWdYU0JtY205dElIUm9aU0JvYjNOMGJtRnRaVnh1SUNBZ0lDOHZJSFJvWlNCb2IzTjBJR1pwWld4a0lITjBhV3hzSUhKbGRHRnBibk1nZEdobGJTd2dkR2h2ZFdkb1hHNGdJQ0FnYVdZZ0tHbHdkalpJYjNOMGJtRnRaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NW9iM04wYm1GdFpTQTlJSFJvYVhNdWFHOXpkRzVoYldVdWMzVmljM1J5S0RFc0lIUm9hWE11YUc5emRHNWhiV1V1YkdWdVozUm9JQzBnTWlrN1hHNGdJQ0FnSUNCcFppQW9jbVZ6ZEZzd1hTQWhQVDBnSnk4bktTQjdYRzRnSUNBZ0lDQWdJSEpsYzNRZ1BTQW5MeWNnS3lCeVpYTjBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUc1dmR5QnlaWE4wSUdseklITmxkQ0IwYnlCMGFHVWdjRzl6ZEMxb2IzTjBJSE4wZFdabUxseHVJQ0F2THlCamFHOXdJRzltWmlCaGJua2daR1ZzYVcwZ1kyaGhjbk11WEc0Z0lHbG1JQ2doZFc1ellXWmxVSEp2ZEc5amIyeGJiRzkzWlhKUWNtOTBiMTBwSUh0Y2JseHVJQ0FnSUM4dklFWnBjbk4wTENCdFlXdGxJREV3TUNVZ2MzVnlaU0IwYUdGMElHRnVlU0JjSW1GMWRHOUZjMk5oY0dWY0lpQmphR0Z5Y3lCblpYUmNiaUFnSUNBdkx5QmxjMk5oY0dWa0xDQmxkbVZ1SUdsbUlHVnVZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDQmtiMlZ6YmlkMElIUm9hVzVySUhSb1pYbGNiaUFnSUNBdkx5QnVaV1ZrSUhSdklHSmxMbHh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3TENCc0lEMGdZWFYwYjBWelkyRndaUzVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0FnSUhaaGNpQmhaU0E5SUdGMWRHOUZjMk5oY0dWYmFWMDdYRzRnSUNBZ0lDQjJZWElnWlhOaklEMGdaVzVqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLR0ZsS1R0Y2JpQWdJQ0FnSUdsbUlDaGxjMk1nUFQwOUlHRmxLU0I3WEc0Z0lDQWdJQ0FnSUdWell5QTlJR1Z6WTJGd1pTaGhaU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhOMElEMGdjbVZ6ZEM1emNHeHBkQ2hoWlNrdWFtOXBiaWhsYzJNcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc1Y2JpQWdMeThnWTJodmNDQnZabVlnWm5KdmJTQjBhR1VnZEdGcGJDQm1hWEp6ZEM1Y2JpQWdkbUZ5SUdoaGMyZ2dQU0J5WlhOMExtbHVaR1Y0VDJZb0p5TW5LVHRjYmlBZ2FXWWdLR2hoYzJnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnTHk4Z1oyOTBJR0VnWm5KaFoyMWxiblFnYzNSeWFXNW5MbHh1SUNBZ0lIUm9hWE11YUdGemFDQTlJSEpsYzNRdWMzVmljM1J5S0doaGMyZ3BPMXh1SUNBZ0lISmxjM1FnUFNCeVpYTjBMbk5zYVdObEtEQXNJR2hoYzJncE8xeHVJQ0I5WEc0Z0lIWmhjaUJ4YlNBOUlISmxjM1F1YVc1a1pYaFBaaWduUHljcE8xeHVJQ0JwWmlBb2NXMGdJVDA5SUMweEtTQjdYRzRnSUNBZ2RHaHBjeTV6WldGeVkyZ2dQU0J5WlhOMExuTjFZbk4wY2loeGJTazdYRzRnSUNBZ2RHaHBjeTV4ZFdWeWVTQTlJSEpsYzNRdWMzVmljM1J5S0hGdElDc2dNU2s3WEc0Z0lDQWdhV1lnS0hCaGNuTmxVWFZsY25sVGRISnBibWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjWFZsY25rZ1BTQnhkV1Z5ZVhOMGNtbHVaeTV3WVhKelpTaDBhR2x6TG5GMVpYSjVLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVnpkQ0E5SUhKbGMzUXVjMnhwWTJVb01Dd2djVzBwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSEJoY25ObFVYVmxjbmxUZEhKcGJtY3BJSHRjYmlBZ0lDQXZMeUJ1YnlCeGRXVnllU0J6ZEhKcGJtY3NJR0oxZENCd1lYSnpaVkYxWlhKNVUzUnlhVzVuSUhOMGFXeHNJSEpsY1hWbGMzUmxaRnh1SUNBZ0lIUm9hWE11YzJWaGNtTm9JRDBnSnljN1hHNGdJQ0FnZEdocGN5NXhkV1Z5ZVNBOUlIdDlPMXh1SUNCOVhHNGdJR2xtSUNoeVpYTjBLU0IwYUdsekxuQmhkR2h1WVcxbElEMGdjbVZ6ZER0Y2JpQWdhV1lnS0hOc1lYTm9aV1JRY205MGIyTnZiRnRzYjNkbGNsQnliM1J2WFNBbUpseHVJQ0FnSUNBZ2RHaHBjeTVvYjNOMGJtRnRaU0FtSmlBaGRHaHBjeTV3WVhSb2JtRnRaU2tnZTF4dUlDQWdJSFJvYVhNdWNHRjBhRzVoYldVZ1BTQW5MeWM3WEc0Z0lIMWNibHh1SUNBdkwzUnZJSE4xY0hCdmNuUWdhSFIwY0M1eVpYRjFaWE4wWEc0Z0lHbG1JQ2gwYUdsekxuQmhkR2h1WVcxbElIeDhJSFJvYVhNdWMyVmhjbU5vS1NCN1hHNGdJQ0FnZG1GeUlIQWdQU0IwYUdsekxuQmhkR2h1WVcxbElIeDhJQ2NuTzF4dUlDQWdJSFpoY2lCeklEMGdkR2hwY3k1elpXRnlZMmdnZkh3Z0p5YzdYRzRnSUNBZ2RHaHBjeTV3WVhSb0lEMGdjQ0FySUhNN1hHNGdJSDFjYmx4dUlDQXZMeUJtYVc1aGJHeDVMQ0J5WldOdmJuTjBjblZqZENCMGFHVWdhSEpsWmlCaVlYTmxaQ0J2YmlCM2FHRjBJR2hoY3lCaVpXVnVJSFpoYkdsa1lYUmxaQzVjYmlBZ2RHaHBjeTVvY21WbUlEMGdkR2hwY3k1bWIzSnRZWFFvS1R0Y2JpQWdjbVYwZFhKdUlIUm9hWE03WEc1OU8xeHVYRzR2THlCbWIzSnRZWFFnWVNCd1lYSnpaV1FnYjJKcVpXTjBJR2x1ZEc4Z1lTQjFjbXdnYzNSeWFXNW5YRzVtZFc1amRHbHZiaUIxY214R2IzSnRZWFFvYjJKcUtTQjdYRzRnSUM4dklHVnVjM1Z5WlNCcGRDZHpJR0Z1SUc5aWFtVmpkQ3dnWVc1a0lHNXZkQ0JoSUhOMGNtbHVaeUIxY213dVhHNGdJQzh2SUVsbUlHbDBKM01nWVc0Z2IySnFMQ0IwYUdseklHbHpJR0VnYm04dGIzQXVYRzRnSUM4dklIUm9hWE1nZDJGNUxDQjViM1VnWTJGdUlHTmhiR3dnZFhKc1gyWnZjbTFoZENncElHOXVJSE4wY21sdVozTmNiaUFnTHk4Z2RHOGdZMnhsWVc0Z2RYQWdjRzkwWlc1MGFXRnNiSGtnZDI5dWEza2dkWEpzY3k1Y2JpQWdhV1lnS0dselUzUnlhVzVuS0c5aWFpa3BJRzlpYWlBOUlIVnliRkJoY25ObEtHOWlhaWs3WEc0Z0lHbG1JQ2doS0c5aWFpQnBibk4wWVc1alpXOW1JRlZ5YkNrcElISmxkSFZ5YmlCVmNtd3VjSEp2ZEc5MGVYQmxMbVp2Y20xaGRDNWpZV3hzS0c5aWFpazdYRzRnSUhKbGRIVnliaUJ2WW1vdVptOXliV0YwS0NrN1hHNTlYRzVjYmxWeWJDNXdjbTkwYjNSNWNHVXVabTl5YldGMElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lIWmhjaUJoZFhSb0lEMGdkR2hwY3k1aGRYUm9JSHg4SUNjbk8xeHVJQ0JwWmlBb1lYVjBhQ2tnZTF4dUlDQWdJR0YxZEdnZ1BTQmxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9ZWFYwYUNrN1hHNGdJQ0FnWVhWMGFDQTlJR0YxZEdndWNtVndiR0ZqWlNndkpUTkJMMmtzSUNjNkp5azdYRzRnSUNBZ1lYVjBhQ0FyUFNBblFDYzdYRzRnSUgxY2JseHVJQ0IyWVhJZ2NISnZkRzlqYjJ3Z1BTQjBhR2x6TG5CeWIzUnZZMjlzSUh4OElDY25MRnh1SUNBZ0lDQWdjR0YwYUc1aGJXVWdQU0IwYUdsekxuQmhkR2h1WVcxbElIeDhJQ2NuTEZ4dUlDQWdJQ0FnYUdGemFDQTlJSFJvYVhNdWFHRnphQ0I4ZkNBbkp5eGNiaUFnSUNBZ0lHaHZjM1FnUFNCbVlXeHpaU3hjYmlBZ0lDQWdJSEYxWlhKNUlEMGdKeWM3WEc1Y2JpQWdhV1lnS0hSb2FYTXVhRzl6ZENrZ2UxeHVJQ0FnSUdodmMzUWdQU0JoZFhSb0lDc2dkR2hwY3k1b2IzTjBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIUm9hWE11YUc5emRHNWhiV1VwSUh0Y2JpQWdJQ0JvYjNOMElEMGdZWFYwYUNBcklDaDBhR2x6TG1odmMzUnVZVzFsTG1sdVpHVjRUMllvSnpvbktTQTlQVDBnTFRFZ1AxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1odmMzUnVZVzFsSURwY2JpQWdJQ0FnSUNBZ0oxc25JQ3NnZEdocGN5NW9iM04wYm1GdFpTQXJJQ2RkSnlrN1hHNGdJQ0FnYVdZZ0tIUm9hWE11Y0c5eWRDa2dlMXh1SUNBZ0lDQWdhRzl6ZENBclBTQW5PaWNnS3lCMGFHbHpMbkJ2Y25RN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSFJvYVhNdWNYVmxjbmtnSmlaY2JpQWdJQ0FnSUdselQySnFaV04wS0hSb2FYTXVjWFZsY25rcElDWW1YRzRnSUNBZ0lDQlBZbXBsWTNRdWEyVjVjeWgwYUdsekxuRjFaWEo1S1M1c1pXNW5kR2dwSUh0Y2JpQWdJQ0J4ZFdWeWVTQTlJSEYxWlhKNWMzUnlhVzVuTG5OMGNtbHVaMmxtZVNoMGFHbHpMbkYxWlhKNUtUdGNiaUFnZlZ4dVhHNGdJSFpoY2lCelpXRnlZMmdnUFNCMGFHbHpMbk5sWVhKamFDQjhmQ0FvY1hWbGNua2dKaVlnS0NjL0p5QXJJSEYxWlhKNUtTa2dmSHdnSnljN1hHNWNiaUFnYVdZZ0tIQnliM1J2WTI5c0lDWW1JSEJ5YjNSdlkyOXNMbk4xWW5OMGNpZ3RNU2tnSVQwOUlDYzZKeWtnY0hKdmRHOWpiMndnS3owZ0p6b25PMXh1WEc0Z0lDOHZJRzl1YkhrZ2RHaGxJSE5zWVhOb1pXUlFjbTkwYjJOdmJITWdaMlYwSUhSb1pTQXZMeTRnSUU1dmRDQnRZV2xzZEc4NkxDQjRiWEJ3T2l3Z1pYUmpMbHh1SUNBdkx5QjFibXhsYzNNZ2RHaGxlU0JvWVdRZ2RHaGxiU0IwYnlCaVpXZHBiaUIzYVhSb0xseHVJQ0JwWmlBb2RHaHBjeTV6YkdGemFHVnpJSHg4WEc0Z0lDQWdJQ0FvSVhCeWIzUnZZMjlzSUh4OElITnNZWE5vWldSUWNtOTBiMk52YkZ0d2NtOTBiMk52YkYwcElDWW1JR2h2YzNRZ0lUMDlJR1poYkhObEtTQjdYRzRnSUNBZ2FHOXpkQ0E5SUNjdkx5Y2dLeUFvYUc5emRDQjhmQ0FuSnlrN1hHNGdJQ0FnYVdZZ0tIQmhkR2h1WVcxbElDWW1JSEJoZEdodVlXMWxMbU5vWVhKQmRDZ3dLU0FoUFQwZ0p5OG5LU0J3WVhSb2JtRnRaU0E5SUNjdkp5QXJJSEJoZEdodVlXMWxPMXh1SUNCOUlHVnNjMlVnYVdZZ0tDRm9iM04wS1NCN1hHNGdJQ0FnYUc5emRDQTlJQ2NuTzF4dUlDQjlYRzVjYmlBZ2FXWWdLR2hoYzJnZ0ppWWdhR0Z6YUM1amFHRnlRWFFvTUNrZ0lUMDlJQ2NqSnlrZ2FHRnphQ0E5SUNjakp5QXJJR2hoYzJnN1hHNGdJR2xtSUNoelpXRnlZMmdnSmlZZ2MyVmhjbU5vTG1Ob1lYSkJkQ2d3S1NBaFBUMGdKejhuS1NCelpXRnlZMmdnUFNBblB5Y2dLeUJ6WldGeVkyZzdYRzVjYmlBZ2NHRjBhRzVoYldVZ1BTQndZWFJvYm1GdFpTNXlaWEJzWVdObEtDOWJQeU5kTDJjc0lHWjFibU4wYVc5dUtHMWhkR05vS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1Z1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ2h0WVhSamFDazdYRzRnSUgwcE8xeHVJQ0J6WldGeVkyZ2dQU0J6WldGeVkyZ3VjbVZ3YkdGalpTZ25JeWNzSUNjbE1qTW5LVHRjYmx4dUlDQnlaWFIxY200Z2NISnZkRzlqYjJ3Z0t5Qm9iM04wSUNzZ2NHRjBhRzVoYldVZ0t5QnpaV0Z5WTJnZ0t5Qm9ZWE5vTzF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnZFhKc1VtVnpiMngyWlNoemIzVnlZMlVzSUhKbGJHRjBhWFpsS1NCN1hHNGdJSEpsZEhWeWJpQjFjbXhRWVhKelpTaHpiM1Z5WTJVc0lHWmhiSE5sTENCMGNuVmxLUzV5WlhOdmJIWmxLSEpsYkdGMGFYWmxLVHRjYm4xY2JseHVWWEpzTG5CeWIzUnZkSGx3WlM1eVpYTnZiSFpsSUQwZ1puVnVZM1JwYjI0b2NtVnNZWFJwZG1VcElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWNtVnpiMngyWlU5aWFtVmpkQ2gxY214UVlYSnpaU2h5Wld4aGRHbDJaU3dnWm1Gc2MyVXNJSFJ5ZFdVcEtTNW1iM0p0WVhRb0tUdGNibjA3WEc1Y2JtWjFibU4wYVc5dUlIVnliRkpsYzI5c2RtVlBZbXBsWTNRb2MyOTFjbU5sTENCeVpXeGhkR2wyWlNrZ2UxeHVJQ0JwWmlBb0lYTnZkWEpqWlNrZ2NtVjBkWEp1SUhKbGJHRjBhWFpsTzF4dUlDQnlaWFIxY200Z2RYSnNVR0Z5YzJVb2MyOTFjbU5sTENCbVlXeHpaU3dnZEhKMVpTa3VjbVZ6YjJ4MlpVOWlhbVZqZENoeVpXeGhkR2wyWlNrN1hHNTlYRzVjYmxWeWJDNXdjbTkwYjNSNWNHVXVjbVZ6YjJ4MlpVOWlhbVZqZENBOUlHWjFibU4wYVc5dUtISmxiR0YwYVhabEtTQjdYRzRnSUdsbUlDaHBjMU4wY21sdVp5aHlaV3hoZEdsMlpTa3BJSHRjYmlBZ0lDQjJZWElnY21Wc0lEMGdibVYzSUZWeWJDZ3BPMXh1SUNBZ0lISmxiQzV3WVhKelpTaHlaV3hoZEdsMlpTd2dabUZzYzJVc0lIUnlkV1VwTzF4dUlDQWdJSEpsYkdGMGFYWmxJRDBnY21Wc08xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUc1bGR5QlZjbXdvS1R0Y2JpQWdUMkpxWldOMExtdGxlWE1vZEdocGN5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHJLU0I3WEc0Z0lDQWdjbVZ6ZFd4MFcydGRJRDBnZEdocGMxdHJYVHRjYmlBZ2ZTd2dkR2hwY3lrN1hHNWNiaUFnTHk4Z2FHRnphQ0JwY3lCaGJIZGhlWE1nYjNabGNuSnBaR1JsYml3Z2JtOGdiV0YwZEdWeUlIZG9ZWFF1WEc0Z0lDOHZJR1YyWlc0Z2FISmxaajFjSWx3aUlIZHBiR3dnY21WdGIzWmxJR2wwTGx4dUlDQnlaWE4xYkhRdWFHRnphQ0E5SUhKbGJHRjBhWFpsTG1oaGMyZzdYRzVjYmlBZ0x5OGdhV1lnZEdobElISmxiR0YwYVhabElIVnliQ0JwY3lCbGJYQjBlU3dnZEdobGJpQjBhR1Z5WlNkeklHNXZkR2hwYm1jZ2JHVm1kQ0IwYnlCa2J5Qm9aWEpsTGx4dUlDQnBaaUFvY21Wc1lYUnBkbVV1YUhKbFppQTlQVDBnSnljcElIdGNiaUFnSUNCeVpYTjFiSFF1YUhKbFppQTlJSEpsYzNWc2RDNW1iM0p0WVhRb0tUdGNiaUFnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNCOVhHNWNiaUFnTHk4Z2FISmxabk1nYkdsclpTQXZMMlp2Ynk5aVlYSWdZV3gzWVhseklHTjFkQ0IwYnlCMGFHVWdjSEp2ZEc5amIyd3VYRzRnSUdsbUlDaHlaV3hoZEdsMlpTNXpiR0Z6YUdWeklDWW1JQ0Z5Wld4aGRHbDJaUzV3Y205MGIyTnZiQ2tnZTF4dUlDQWdJQzh2SUhSaGEyVWdaWFpsY25sMGFHbHVaeUJsZUdObGNIUWdkR2hsSUhCeWIzUnZZMjlzSUdaeWIyMGdjbVZzWVhScGRtVmNiaUFnSUNCUFltcGxZM1F1YTJWNWN5aHlaV3hoZEdsMlpTa3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHJLU0I3WEc0Z0lDQWdJQ0JwWmlBb2F5QWhQVDBnSjNCeWIzUnZZMjlzSnlsY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwVzJ0ZElEMGdjbVZzWVhScGRtVmJhMTA3WEc0Z0lDQWdmU2s3WEc1Y2JpQWdJQ0F2TDNWeWJGQmhjbk5sSUdGd2NHVnVaSE1nZEhKaGFXeHBibWNnTHlCMGJ5QjFjbXh6SUd4cGEyVWdhSFIwY0RvdkwzZDNkeTVsZUdGdGNHeGxMbU52YlZ4dUlDQWdJR2xtSUNoemJHRnphR1ZrVUhKdmRHOWpiMnhiY21WemRXeDBMbkJ5YjNSdlkyOXNYU0FtSmx4dUlDQWdJQ0FnSUNCeVpYTjFiSFF1YUc5emRHNWhiV1VnSmlZZ0lYSmxjM1ZzZEM1d1lYUm9ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwTG5CaGRHZ2dQU0J5WlhOMWJIUXVjR0YwYUc1aGJXVWdQU0FuTHljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WemRXeDBMbWh5WldZZ1BTQnlaWE4xYkhRdVptOXliV0YwS0NrN1hHNGdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnZlZ4dVhHNGdJR2xtSUNoeVpXeGhkR2wyWlM1d2NtOTBiMk52YkNBbUppQnlaV3hoZEdsMlpTNXdjbTkwYjJOdmJDQWhQVDBnY21WemRXeDBMbkJ5YjNSdlkyOXNLU0I3WEc0Z0lDQWdMeThnYVdZZ2FYUW5jeUJoSUd0dWIzZHVJSFZ5YkNCd2NtOTBiMk52YkN3Z2RHaGxiaUJqYUdGdVoybHVaMXh1SUNBZ0lDOHZJSFJvWlNCd2NtOTBiMk52YkNCa2IyVnpJSGRsYVhKa0lIUm9hVzVuYzF4dUlDQWdJQzh2SUdacGNuTjBMQ0JwWmlCcGRDZHpJRzV2ZENCbWFXeGxPaXdnZEdobGJpQjNaU0JOVlZOVUlHaGhkbVVnWVNCb2IzTjBMRnh1SUNBZ0lDOHZJR0Z1WkNCcFppQjBhR1Z5WlNCM1lYTWdZU0J3WVhSb1hHNGdJQ0FnTHk4Z2RHOGdZbVZuYVc0Z2QybDBhQ3dnZEdobGJpQjNaU0JOVlZOVUlHaGhkbVVnWVNCd1lYUm9MbHh1SUNBZ0lDOHZJR2xtSUdsMElHbHpJR1pwYkdVNkxDQjBhR1Z1SUhSb1pTQm9iM04wSUdseklHUnliM0J3WldRc1hHNGdJQ0FnTHk4Z1ltVmpZWFZ6WlNCMGFHRjBKM01nYTI1dmQyNGdkRzhnWW1VZ2FHOXpkR3hsYzNNdVhHNGdJQ0FnTHk4Z1lXNTVkR2hwYm1jZ1pXeHpaU0JwY3lCaGMzTjFiV1ZrSUhSdklHSmxJR0ZpYzI5c2RYUmxMbHh1SUNBZ0lHbG1JQ2doYzJ4aGMyaGxaRkJ5YjNSdlkyOXNXM0psYkdGMGFYWmxMbkJ5YjNSdlkyOXNYU2tnZTF4dUlDQWdJQ0FnVDJKcVpXTjBMbXRsZVhNb2NtVnNZWFJwZG1VcExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2F5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhOMWJIUmJhMTBnUFNCeVpXeGhkR2wyWlZ0clhUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdjbVZ6ZFd4MExtaHlaV1lnUFNCeVpYTjFiSFF1Wm05eWJXRjBLQ2s3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzVnNkQzV3Y205MGIyTnZiQ0E5SUhKbGJHRjBhWFpsTG5CeWIzUnZZMjlzTzF4dUlDQWdJR2xtSUNnaGNtVnNZWFJwZG1VdWFHOXpkQ0FtSmlBaGFHOXpkR3hsYzNOUWNtOTBiMk52YkZ0eVpXeGhkR2wyWlM1d2NtOTBiMk52YkYwcElIdGNiaUFnSUNBZ0lIWmhjaUJ5Wld4UVlYUm9JRDBnS0hKbGJHRjBhWFpsTG5CaGRHaHVZVzFsSUh4OElDY25LUzV6Y0d4cGRDZ25MeWNwTzF4dUlDQWdJQ0FnZDJocGJHVWdLSEpsYkZCaGRHZ3ViR1Z1WjNSb0lDWW1JQ0VvY21Wc1lYUnBkbVV1YUc5emRDQTlJSEpsYkZCaGRHZ3VjMmhwWm5Rb0tTa3BPMXh1SUNBZ0lDQWdhV1lnS0NGeVpXeGhkR2wyWlM1b2IzTjBLU0J5Wld4aGRHbDJaUzVvYjNOMElEMGdKeWM3WEc0Z0lDQWdJQ0JwWmlBb0lYSmxiR0YwYVhabExtaHZjM1J1WVcxbEtTQnlaV3hoZEdsMlpTNW9iM04wYm1GdFpTQTlJQ2NuTzF4dUlDQWdJQ0FnYVdZZ0tISmxiRkJoZEdoYk1GMGdJVDA5SUNjbktTQnlaV3hRWVhSb0xuVnVjMmhwWm5Rb0p5Y3BPMXh1SUNBZ0lDQWdhV1lnS0hKbGJGQmhkR2d1YkdWdVozUm9JRHdnTWlrZ2NtVnNVR0YwYUM1MWJuTm9hV1owS0NjbktUdGNiaUFnSUNBZ0lISmxjM1ZzZEM1d1lYUm9ibUZ0WlNBOUlISmxiRkJoZEdndWFtOXBiaWduTHljcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUXVjR0YwYUc1aGJXVWdQU0J5Wld4aGRHbDJaUzV3WVhSb2JtRnRaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVnpkV3gwTG5ObFlYSmphQ0E5SUhKbGJHRjBhWFpsTG5ObFlYSmphRHRjYmlBZ0lDQnlaWE4xYkhRdWNYVmxjbmtnUFNCeVpXeGhkR2wyWlM1eGRXVnllVHRjYmlBZ0lDQnlaWE4xYkhRdWFHOXpkQ0E5SUhKbGJHRjBhWFpsTG1odmMzUWdmSHdnSnljN1hHNGdJQ0FnY21WemRXeDBMbUYxZEdnZ1BTQnlaV3hoZEdsMlpTNWhkWFJvTzF4dUlDQWdJSEpsYzNWc2RDNW9iM04wYm1GdFpTQTlJSEpsYkdGMGFYWmxMbWh2YzNSdVlXMWxJSHg4SUhKbGJHRjBhWFpsTG1odmMzUTdYRzRnSUNBZ2NtVnpkV3gwTG5CdmNuUWdQU0J5Wld4aGRHbDJaUzV3YjNKME8xeHVJQ0FnSUM4dklIUnZJSE4xY0hCdmNuUWdhSFIwY0M1eVpYRjFaWE4wWEc0Z0lDQWdhV1lnS0hKbGMzVnNkQzV3WVhSb2JtRnRaU0I4ZkNCeVpYTjFiSFF1YzJWaGNtTm9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NDQTlJSEpsYzNWc2RDNXdZWFJvYm1GdFpTQjhmQ0FuSnp0Y2JpQWdJQ0FnSUhaaGNpQnpJRDBnY21WemRXeDBMbk5sWVhKamFDQjhmQ0FuSnp0Y2JpQWdJQ0FnSUhKbGMzVnNkQzV3WVhSb0lEMGdjQ0FySUhNN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsYzNWc2RDNXpiR0Z6YUdWeklEMGdjbVZ6ZFd4MExuTnNZWE5vWlhNZ2ZId2djbVZzWVhScGRtVXVjMnhoYzJobGN6dGNiaUFnSUNCeVpYTjFiSFF1YUhKbFppQTlJSEpsYzNWc2RDNW1iM0p0WVhRb0tUdGNiaUFnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNCOVhHNWNiaUFnZG1GeUlHbHpVMjkxY21ObFFXSnpJRDBnS0hKbGMzVnNkQzV3WVhSb2JtRnRaU0FtSmlCeVpYTjFiSFF1Y0dGMGFHNWhiV1V1WTJoaGNrRjBLREFwSUQwOVBTQW5MeWNwTEZ4dUlDQWdJQ0FnYVhOU1pXeEJZbk1nUFNBb1hHNGdJQ0FnSUNBZ0lDQWdjbVZzWVhScGRtVXVhRzl6ZENCOGZGeHVJQ0FnSUNBZ0lDQWdJSEpsYkdGMGFYWmxMbkJoZEdodVlXMWxJQ1ltSUhKbGJHRjBhWFpsTG5CaGRHaHVZVzFsTG1Ob1lYSkJkQ2d3S1NBOVBUMGdKeThuWEc0Z0lDQWdJQ0FwTEZ4dUlDQWdJQ0FnYlhWemRFVnVaRUZpY3lBOUlDaHBjMUpsYkVGaWN5QjhmQ0JwYzFOdmRYSmpaVUZpY3lCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FvY21WemRXeDBMbWh2YzNRZ0ppWWdjbVZzWVhScGRtVXVjR0YwYUc1aGJXVXBLU3hjYmlBZ0lDQWdJSEpsYlc5MlpVRnNiRVJ2ZEhNZ1BTQnRkWE4wUlc1a1FXSnpMRnh1SUNBZ0lDQWdjM0pqVUdGMGFDQTlJSEpsYzNWc2RDNXdZWFJvYm1GdFpTQW1KaUJ5WlhOMWJIUXVjR0YwYUc1aGJXVXVjM0JzYVhRb0p5OG5LU0I4ZkNCYlhTeGNiaUFnSUNBZ0lISmxiRkJoZEdnZ1BTQnlaV3hoZEdsMlpTNXdZWFJvYm1GdFpTQW1KaUJ5Wld4aGRHbDJaUzV3WVhSb2JtRnRaUzV6Y0d4cGRDZ25MeWNwSUh4OElGdGRMRnh1SUNBZ0lDQWdjSE41WTJodmRHbGpJRDBnY21WemRXeDBMbkJ5YjNSdlkyOXNJQ1ltSUNGemJHRnphR1ZrVUhKdmRHOWpiMnhiY21WemRXeDBMbkJ5YjNSdlkyOXNYVHRjYmx4dUlDQXZMeUJwWmlCMGFHVWdkWEpzSUdseklHRWdibTl1TFhOc1lYTm9aV1FnZFhKc0xDQjBhR1Z1SUhKbGJHRjBhWFpsWEc0Z0lDOHZJR3hwYm10eklHeHBhMlVnTGk0dkxpNGdjMmh2ZFd4a0lHSmxJR0ZpYkdWY2JpQWdMeThnZEc4Z1kzSmhkMndnZFhBZ2RHOGdkR2hsSUdodmMzUnVZVzFsTENCaGN5QjNaV3hzTGlBZ1ZHaHBjeUJwY3lCemRISmhibWRsTGx4dUlDQXZMeUJ5WlhOMWJIUXVjSEp2ZEc5amIyd2dhR0Z6SUdGc2NtVmhaSGtnWW1WbGJpQnpaWFFnWW5rZ2JtOTNMbHh1SUNBdkx5Qk1ZWFJsY2lCdmJpd2djSFYwSUhSb1pTQm1hWEp6ZENCd1lYUm9JSEJoY25RZ2FXNTBieUIwYUdVZ2FHOXpkQ0JtYVdWc1pDNWNiaUFnYVdZZ0tIQnplV05vYjNScFl5a2dlMXh1SUNBZ0lISmxjM1ZzZEM1b2IzTjBibUZ0WlNBOUlDY25PMXh1SUNBZ0lISmxjM1ZzZEM1d2IzSjBJRDBnYm5Wc2JEdGNiaUFnSUNCcFppQW9jbVZ6ZFd4MExtaHZjM1FwSUh0Y2JpQWdJQ0FnSUdsbUlDaHpjbU5RWVhSb1d6QmRJRDA5UFNBbkp5a2djM0pqVUdGMGFGc3dYU0E5SUhKbGMzVnNkQzVvYjNOME8xeHVJQ0FnSUNBZ1pXeHpaU0J6Y21OUVlYUm9MblZ1YzJocFpuUW9jbVZ6ZFd4MExtaHZjM1FwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWE4xYkhRdWFHOXpkQ0E5SUNjbk8xeHVJQ0FnSUdsbUlDaHlaV3hoZEdsMlpTNXdjbTkwYjJOdmJDa2dlMXh1SUNBZ0lDQWdjbVZzWVhScGRtVXVhRzl6ZEc1aGJXVWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ2NtVnNZWFJwZG1VdWNHOXlkQ0E5SUc1MWJHdzdYRzRnSUNBZ0lDQnBaaUFvY21Wc1lYUnBkbVV1YUc5emRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtVnNVR0YwYUZzd1hTQTlQVDBnSnljcElISmxiRkJoZEdoYk1GMGdQU0J5Wld4aGRHbDJaUzVvYjNOME8xeHVJQ0FnSUNBZ0lDQmxiSE5sSUhKbGJGQmhkR2d1ZFc1emFHbG1kQ2h5Wld4aGRHbDJaUzVvYjNOMEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxiR0YwYVhabExtaHZjM1FnUFNCdWRXeHNPMXh1SUNBZ0lIMWNiaUFnSUNCdGRYTjBSVzVrUVdKeklEMGdiWFZ6ZEVWdVpFRmljeUFtSmlBb2NtVnNVR0YwYUZzd1hTQTlQVDBnSnljZ2ZId2djM0pqVUdGMGFGc3dYU0E5UFQwZ0p5Y3BPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHbHpVbVZzUVdKektTQjdYRzRnSUNBZ0x5OGdhWFFuY3lCaFluTnZiSFYwWlM1Y2JpQWdJQ0J5WlhOMWJIUXVhRzl6ZENBOUlDaHlaV3hoZEdsMlpTNW9iM04wSUh4OElISmxiR0YwYVhabExtaHZjM1FnUFQwOUlDY25LU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXeGhkR2wyWlM1b2IzTjBJRG9nY21WemRXeDBMbWh2YzNRN1hHNGdJQ0FnY21WemRXeDBMbWh2YzNSdVlXMWxJRDBnS0hKbGJHRjBhWFpsTG1odmMzUnVZVzFsSUh4OElISmxiR0YwYVhabExtaHZjM1J1WVcxbElEMDlQU0FuSnlrZ1AxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGJHRjBhWFpsTG1odmMzUnVZVzFsSURvZ2NtVnpkV3gwTG1odmMzUnVZVzFsTzF4dUlDQWdJSEpsYzNWc2RDNXpaV0Z5WTJnZ1BTQnlaV3hoZEdsMlpTNXpaV0Z5WTJnN1hHNGdJQ0FnY21WemRXeDBMbkYxWlhKNUlEMGdjbVZzWVhScGRtVXVjWFZsY25rN1hHNGdJQ0FnYzNKalVHRjBhQ0E5SUhKbGJGQmhkR2c3WEc0Z0lDQWdMeThnWm1Gc2JDQjBhSEp2ZFdkb0lIUnZJSFJvWlNCa2IzUXRhR0Z1Wkd4cGJtY2dZbVZzYjNjdVhHNGdJSDBnWld4elpTQnBaaUFvY21Wc1VHRjBhQzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQXZMeUJwZENkeklISmxiR0YwYVhabFhHNGdJQ0FnTHk4Z2RHaHliM2NnWVhkaGVTQjBhR1VnWlhocGMzUnBibWNnWm1sc1pTd2dZVzVrSUhSaGEyVWdkR2hsSUc1bGR5QndZWFJvSUdsdWMzUmxZV1F1WEc0Z0lDQWdhV1lnS0NGemNtTlFZWFJvS1NCemNtTlFZWFJvSUQwZ1cxMDdYRzRnSUNBZ2MzSmpVR0YwYUM1d2IzQW9LVHRjYmlBZ0lDQnpjbU5RWVhSb0lEMGdjM0pqVUdGMGFDNWpiMjVqWVhRb2NtVnNVR0YwYUNrN1hHNGdJQ0FnY21WemRXeDBMbk5sWVhKamFDQTlJSEpsYkdGMGFYWmxMbk5sWVhKamFEdGNiaUFnSUNCeVpYTjFiSFF1Y1hWbGNua2dQU0J5Wld4aGRHbDJaUzV4ZFdWeWVUdGNiaUFnZlNCbGJITmxJR2xtSUNnaGFYTk9kV3hzVDNKVmJtUmxabWx1WldRb2NtVnNZWFJwZG1VdWMyVmhjbU5vS1NrZ2UxeHVJQ0FnSUM4dklHcDFjM1FnY0hWc2JDQnZkWFFnZEdobElITmxZWEpqYUM1Y2JpQWdJQ0F2THlCc2FXdGxJR2h5WldZOUp6OW1iMjhuTGx4dUlDQWdJQzh2SUZCMWRDQjBhR2x6SUdGbWRHVnlJSFJvWlNCdmRHaGxjaUIwZDI4Z1kyRnpaWE1nWW1WallYVnpaU0JwZENCemFXMXdiR2xtYVdWeklIUm9aU0JpYjI5c1pXRnVjMXh1SUNBZ0lHbG1JQ2h3YzNsamFHOTBhV01wSUh0Y2JpQWdJQ0FnSUhKbGMzVnNkQzVvYjNOMGJtRnRaU0E5SUhKbGMzVnNkQzVvYjNOMElEMGdjM0pqVUdGMGFDNXphR2xtZENncE8xeHVJQ0FnSUNBZ0x5OXZZMk5oZEdsdmJtRnNlU0IwYUdVZ1lYVjBhQ0JqWVc0Z1oyVjBJSE4wZFdOcklHOXViSGtnYVc0Z2FHOXpkRnh1SUNBZ0lDQWdMeTkwYUdseklHVnpjR1ZqYVdGc2VTQm9ZWEJ3Wlc1eklHbHVJR05oYzJWeklHeHBhMlZjYmlBZ0lDQWdJQzh2ZFhKc0xuSmxjMjlzZG1WUFltcGxZM1FvSjIxaGFXeDBienBzYjJOaGJERkFaRzl0WVdsdU1TY3NJQ2RzYjJOaGJESkFaRzl0WVdsdU1pY3BYRzRnSUNBZ0lDQjJZWElnWVhWMGFFbHVTRzl6ZENBOUlISmxjM1ZzZEM1b2IzTjBJQ1ltSUhKbGMzVnNkQzVvYjNOMExtbHVaR1Y0VDJZb0owQW5LU0ErSURBZ1AxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFF1YUc5emRDNXpjR3hwZENnblFDY3BJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQnBaaUFvWVhWMGFFbHVTRzl6ZENrZ2UxeHVJQ0FnSUNBZ0lDQnlaWE4xYkhRdVlYVjBhQ0E5SUdGMWRHaEpia2h2YzNRdWMyaHBablFvS1R0Y2JpQWdJQ0FnSUNBZ2NtVnpkV3gwTG1odmMzUWdQU0J5WlhOMWJIUXVhRzl6ZEc1aGJXVWdQU0JoZFhSb1NXNUliM04wTG5Ob2FXWjBLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxjM1ZzZEM1elpXRnlZMmdnUFNCeVpXeGhkR2wyWlM1elpXRnlZMmc3WEc0Z0lDQWdjbVZ6ZFd4MExuRjFaWEo1SUQwZ2NtVnNZWFJwZG1VdWNYVmxjbms3WEc0Z0lDQWdMeTkwYnlCemRYQndiM0owSUdoMGRIQXVjbVZ4ZFdWemRGeHVJQ0FnSUdsbUlDZ2hhWE5PZFd4c0tISmxjM1ZzZEM1d1lYUm9ibUZ0WlNrZ2ZId2dJV2x6VG5Wc2JDaHlaWE4xYkhRdWMyVmhjbU5vS1NrZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwTG5CaGRHZ2dQU0FvY21WemRXeDBMbkJoZEdodVlXMWxJRDhnY21WemRXeDBMbkJoZEdodVlXMWxJRG9nSnljcElDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0hKbGMzVnNkQzV6WldGeVkyZ2dQeUJ5WlhOMWJIUXVjMlZoY21Ob0lEb2dKeWNwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWE4xYkhRdWFISmxaaUE5SUhKbGMzVnNkQzVtYjNKdFlYUW9LVHRjYmlBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQjlYRzVjYmlBZ2FXWWdLQ0Z6Y21OUVlYUm9MbXhsYm1kMGFDa2dlMXh1SUNBZ0lDOHZJRzV2SUhCaGRHZ2dZWFFnWVd4c0xpQWdaV0Z6ZVM1Y2JpQWdJQ0F2THlCM1pTZDJaU0JoYkhKbFlXUjVJR2hoYm1Sc1pXUWdkR2hsSUc5MGFHVnlJSE4wZFdabUlHRmliM1psTGx4dUlDQWdJSEpsYzNWc2RDNXdZWFJvYm1GdFpTQTlJRzUxYkd3N1hHNGdJQ0FnTHk5MGJ5QnpkWEJ3YjNKMElHaDBkSEF1Y21WeGRXVnpkRnh1SUNBZ0lHbG1JQ2h5WlhOMWJIUXVjMlZoY21Ob0tTQjdYRzRnSUNBZ0lDQnlaWE4xYkhRdWNHRjBhQ0E5SUNjdkp5QXJJSEpsYzNWc2RDNXpaV0Z5WTJnN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsYzNWc2RDNXdZWFJvSUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVnpkV3gwTG1oeVpXWWdQU0J5WlhOMWJIUXVabTl5YldGMEtDazdYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ2ZWeHVYRzRnSUM4dklHbG1JR0VnZFhKc0lFVk9SSE1nYVc0Z0xpQnZjaUF1TGl3Z2RHaGxiaUJwZENCdGRYTjBJR2RsZENCaElIUnlZV2xzYVc1bklITnNZWE5vTGx4dUlDQXZMeUJvYjNkbGRtVnlMQ0JwWmlCcGRDQmxibVJ6SUdsdUlHRnVlWFJvYVc1bklHVnNjMlVnYm05dUxYTnNZWE5vZVN4Y2JpQWdMeThnZEdobGJpQnBkQ0J0ZFhOMElFNVBWQ0JuWlhRZ1lTQjBjbUZwYkdsdVp5QnpiR0Z6YUM1Y2JpQWdkbUZ5SUd4aGMzUWdQU0J6Y21OUVlYUm9Mbk5zYVdObEtDMHhLVnN3WFR0Y2JpQWdkbUZ5SUdoaGMxUnlZV2xzYVc1blUyeGhjMmdnUFNBb1hHNGdJQ0FnSUNBb2NtVnpkV3gwTG1odmMzUWdmSHdnY21Wc1lYUnBkbVV1YUc5emRDa2dKaVlnS0d4aGMzUWdQVDA5SUNjdUp5QjhmQ0JzWVhOMElEMDlQU0FuTGk0bktTQjhmRnh1SUNBZ0lDQWdiR0Z6ZENBOVBUMGdKeWNwTzF4dVhHNGdJQzh2SUhOMGNtbHdJSE5wYm1kc1pTQmtiM1J6TENCeVpYTnZiSFpsSUdSdmRXSnNaU0JrYjNSeklIUnZJSEJoY21WdWRDQmthWEpjYmlBZ0x5OGdhV1lnZEdobElIQmhkR2dnZEhKcFpYTWdkRzhnWjI4Z1lXSnZkbVVnZEdobElISnZiM1FzSUdCMWNHQWdaVzVrY3lCMWNDQStJREJjYmlBZ2RtRnlJSFZ3SUQwZ01EdGNiaUFnWm05eUlDaDJZWElnYVNBOUlITnlZMUJoZEdndWJHVnVaM1JvT3lCcElENDlJREE3SUdrdExTa2dlMXh1SUNBZ0lHeGhjM1FnUFNCemNtTlFZWFJvVzJsZE8xeHVJQ0FnSUdsbUlDaHNZWE4wSUQwOUlDY3VKeWtnZTF4dUlDQWdJQ0FnYzNKalVHRjBhQzV6Y0d4cFkyVW9hU3dnTVNrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoc1lYTjBJRDA5UFNBbkxpNG5LU0I3WEc0Z0lDQWdJQ0J6Y21OUVlYUm9Mbk53YkdsalpTaHBMQ0F4S1R0Y2JpQWdJQ0FnSUhWd0t5czdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDFjQ2tnZTF4dUlDQWdJQ0FnYzNKalVHRjBhQzV6Y0d4cFkyVW9hU3dnTVNrN1hHNGdJQ0FnSUNCMWNDMHRPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUdsbUlIUm9aU0J3WVhSb0lHbHpJR0ZzYkc5M1pXUWdkRzhnWjI4Z1lXSnZkbVVnZEdobElISnZiM1FzSUhKbGMzUnZjbVVnYkdWaFpHbHVaeUF1TG5OY2JpQWdhV1lnS0NGdGRYTjBSVzVrUVdKeklDWW1JQ0Z5WlcxdmRtVkJiR3hFYjNSektTQjdYRzRnSUNBZ1ptOXlJQ2c3SUhWd0xTMDdJSFZ3S1NCN1hHNGdJQ0FnSUNCemNtTlFZWFJvTG5WdWMyaHBablFvSnk0dUp5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0cxMWMzUkZibVJCWW5NZ0ppWWdjM0pqVUdGMGFGc3dYU0FoUFQwZ0p5Y2dKaVpjYmlBZ0lDQWdJQ2doYzNKalVHRjBhRnN3WFNCOGZDQnpjbU5RWVhSb1d6QmRMbU5vWVhKQmRDZ3dLU0FoUFQwZ0p5OG5LU2tnZTF4dUlDQWdJSE55WTFCaGRHZ3VkVzV6YUdsbWRDZ25KeWs3WEc0Z0lIMWNibHh1SUNCcFppQW9hR0Z6VkhKaGFXeHBibWRUYkdGemFDQW1KaUFvYzNKalVHRjBhQzVxYjJsdUtDY3ZKeWt1YzNWaWMzUnlLQzB4S1NBaFBUMGdKeThuS1NrZ2UxeHVJQ0FnSUhOeVkxQmhkR2d1Y0hWemFDZ25KeWs3WEc0Z0lIMWNibHh1SUNCMllYSWdhWE5CWW5OdmJIVjBaU0E5SUhOeVkxQmhkR2hiTUYwZ1BUMDlJQ2NuSUh4OFhHNGdJQ0FnSUNBb2MzSmpVR0YwYUZzd1hTQW1KaUJ6Y21OUVlYUm9XekJkTG1Ob1lYSkJkQ2d3S1NBOVBUMGdKeThuS1R0Y2JseHVJQ0F2THlCd2RYUWdkR2hsSUdodmMzUWdZbUZqYTF4dUlDQnBaaUFvY0hONVkyaHZkR2xqS1NCN1hHNGdJQ0FnY21WemRXeDBMbWh2YzNSdVlXMWxJRDBnY21WemRXeDBMbWh2YzNRZ1BTQnBjMEZpYzI5c2RYUmxJRDhnSnljZ09seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM0pqVUdGMGFDNXNaVzVuZEdnZ1B5QnpjbU5RWVhSb0xuTm9hV1owS0NrZ09pQW5KenRjYmlBZ0lDQXZMMjlqWTJGMGFXOXVZV3g1SUhSb1pTQmhkWFJvSUdOaGJpQm5aWFFnYzNSMVkyc2diMjVzZVNCcGJpQm9iM04wWEc0Z0lDQWdMeTkwYUdseklHVnpjR1ZqYVdGc2VTQm9ZWEJ3Wlc1eklHbHVJR05oYzJWeklHeHBhMlZjYmlBZ0lDQXZMM1Z5YkM1eVpYTnZiSFpsVDJKcVpXTjBLQ2R0WVdsc2RHODZiRzlqWVd3eFFHUnZiV0ZwYmpFbkxDQW5iRzlqWVd3eVFHUnZiV0ZwYmpJbktWeHVJQ0FnSUhaaGNpQmhkWFJvU1c1SWIzTjBJRDBnY21WemRXeDBMbWh2YzNRZ0ppWWdjbVZ6ZFd4MExtaHZjM1F1YVc1a1pYaFBaaWduUUNjcElENGdNQ0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRdWFHOXpkQzV6Y0d4cGRDZ25RQ2NwSURvZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dGMWRHaEpia2h2YzNRcElIdGNiaUFnSUNBZ0lISmxjM1ZzZEM1aGRYUm9JRDBnWVhWMGFFbHVTRzl6ZEM1emFHbG1kQ2dwTzF4dUlDQWdJQ0FnY21WemRXeDBMbWh2YzNRZ1BTQnlaWE4xYkhRdWFHOXpkRzVoYldVZ1BTQmhkWFJvU1c1SWIzTjBMbk5vYVdaMEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiWFZ6ZEVWdVpFRmljeUE5SUcxMWMzUkZibVJCWW5NZ2ZId2dLSEpsYzNWc2RDNW9iM04wSUNZbUlITnlZMUJoZEdndWJHVnVaM1JvS1R0Y2JseHVJQ0JwWmlBb2JYVnpkRVZ1WkVGaWN5QW1KaUFoYVhOQlluTnZiSFYwWlNrZ2UxeHVJQ0FnSUhOeVkxQmhkR2d1ZFc1emFHbG1kQ2duSnlrN1hHNGdJSDFjYmx4dUlDQnBaaUFvSVhOeVkxQmhkR2d1YkdWdVozUm9LU0I3WEc0Z0lDQWdjbVZ6ZFd4MExuQmhkR2h1WVcxbElEMGdiblZzYkR0Y2JpQWdJQ0J5WlhOMWJIUXVjR0YwYUNBOUlHNTFiR3c3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WemRXeDBMbkJoZEdodVlXMWxJRDBnYzNKalVHRjBhQzVxYjJsdUtDY3ZKeWs3WEc0Z0lIMWNibHh1SUNBdkwzUnZJSE4xY0hCdmNuUWdjbVZ4ZFdWemRDNW9kSFJ3WEc0Z0lHbG1JQ2doYVhOT2RXeHNLSEpsYzNWc2RDNXdZWFJvYm1GdFpTa2dmSHdnSVdselRuVnNiQ2h5WlhOMWJIUXVjMlZoY21Ob0tTa2dlMXh1SUNBZ0lISmxjM1ZzZEM1d1lYUm9JRDBnS0hKbGMzVnNkQzV3WVhSb2JtRnRaU0EvSUhKbGMzVnNkQzV3WVhSb2JtRnRaU0E2SUNjbktTQXJYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FvY21WemRXeDBMbk5sWVhKamFDQS9JSEpsYzNWc2RDNXpaV0Z5WTJnZ09pQW5KeWs3WEc0Z0lIMWNiaUFnY21WemRXeDBMbUYxZEdnZ1BTQnlaV3hoZEdsMlpTNWhkWFJvSUh4OElISmxjM1ZzZEM1aGRYUm9PMXh1SUNCeVpYTjFiSFF1YzJ4aGMyaGxjeUE5SUhKbGMzVnNkQzV6YkdGemFHVnpJSHg4SUhKbGJHRjBhWFpsTG5Oc1lYTm9aWE03WEc0Z0lISmxjM1ZzZEM1b2NtVm1JRDBnY21WemRXeDBMbVp2Y20xaGRDZ3BPMXh1SUNCeVpYUjFjbTRnY21WemRXeDBPMXh1ZlR0Y2JseHVWWEpzTG5CeWIzUnZkSGx3WlM1d1lYSnpaVWh2YzNRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ2RtRnlJR2h2YzNRZ1BTQjBhR2x6TG1odmMzUTdYRzRnSUhaaGNpQndiM0owSUQwZ2NHOXlkRkJoZEhSbGNtNHVaWGhsWXlob2IzTjBLVHRjYmlBZ2FXWWdLSEJ2Y25RcElIdGNiaUFnSUNCd2IzSjBJRDBnY0c5eWRGc3dYVHRjYmlBZ0lDQnBaaUFvY0c5eWRDQWhQVDBnSnpvbktTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CdmNuUWdQU0J3YjNKMExuTjFZbk4wY2lneEtUdGNiaUFnSUNCOVhHNGdJQ0FnYUc5emRDQTlJR2h2YzNRdWMzVmljM1J5S0RBc0lHaHZjM1F1YkdWdVozUm9JQzBnY0c5eWRDNXNaVzVuZEdncE8xeHVJQ0I5WEc0Z0lHbG1JQ2hvYjNOMEtTQjBhR2x6TG1odmMzUnVZVzFsSUQwZ2FHOXpkRHRjYm4wN1hHNWNibVoxYm1OMGFXOXVJR2x6VTNSeWFXNW5LR0Z5WnlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHRnlaeUE5UFQwZ1hDSnpkSEpwYm1kY0lqdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2FYTlBZbXBsWTNRb1lYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnWVhKbklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCaGNtY2dJVDA5SUc1MWJHdzdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHpUblZzYkNoaGNtY3BJSHRjYmlBZ2NtVjBkWEp1SUdGeVp5QTlQVDBnYm5Wc2JEdGNibjFjYm1aMWJtTjBhVzl1SUdselRuVnNiRTl5Vlc1a1pXWnBibVZrS0dGeVp5a2dlMXh1SUNCeVpYUjFjbTRnSUdGeVp5QTlQU0J1ZFd4c08xeHVmVnh1WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOStMM1Z5YkM5MWNtd3Vhbk5jYmk4dklHMXZaSFZzWlNCcFpDQTlJREV3WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJRE1pTENJdktpRWdhSFIwY0hNNkx5OXRkR2h6TG1KbEwzQjFibmxqYjJSbElIWXhMak11TWlCaWVTQkFiV0YwYUdsaGN5QXFMMXh1T3lobWRXNWpkR2x2YmloeWIyOTBLU0I3WEc1Y2JseDBMeW9xSUVSbGRHVmpkQ0JtY21WbElIWmhjbWxoWW14bGN5QXFMMXh1WEhSMllYSWdabkpsWlVWNGNHOXlkSE1nUFNCMGVYQmxiMllnWlhod2IzSjBjeUE5UFNBbmIySnFaV04wSnlBbUppQmxlSEJ2Y25SeklDWW1YRzVjZEZ4MElXVjRjRzl5ZEhNdWJtOWtaVlI1Y0dVZ0ppWWdaWGh3YjNKMGN6dGNibHgwZG1GeUlHWnlaV1ZOYjJSMWJHVWdQU0IwZVhCbGIyWWdiVzlrZFd4bElEMDlJQ2R2WW1wbFkzUW5JQ1ltSUcxdlpIVnNaU0FtSmx4dVhIUmNkQ0Z0YjJSMWJHVXVibTlrWlZSNWNHVWdKaVlnYlc5a2RXeGxPMXh1WEhSMllYSWdabkpsWlVkc2IySmhiQ0E5SUhSNWNHVnZaaUJuYkc5aVlXd2dQVDBnSjI5aWFtVmpkQ2NnSmlZZ1oyeHZZbUZzTzF4dVhIUnBaaUFvWEc1Y2RGeDBabkpsWlVkc2IySmhiQzVuYkc5aVlXd2dQVDA5SUdaeVpXVkhiRzlpWVd3Z2ZIeGNibHgwWEhSbWNtVmxSMnh2WW1Gc0xuZHBibVJ2ZHlBOVBUMGdabkpsWlVkc2IySmhiQ0I4ZkZ4dVhIUmNkR1p5WldWSGJHOWlZV3d1YzJWc1ppQTlQVDBnWm5KbFpVZHNiMkpoYkZ4dVhIUXBJSHRjYmx4MFhIUnliMjkwSUQwZ1puSmxaVWRzYjJKaGJEdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJVYUdVZ1lIQjFibmxqYjJSbFlDQnZZbXBsWTNRdVhHNWNkQ0FxSUVCdVlXMWxJSEIxYm5samIyUmxYRzVjZENBcUlFQjBlWEJsSUU5aWFtVmpkRnh1WEhRZ0tpOWNibHgwZG1GeUlIQjFibmxqYjJSbExGeHVYRzVjZEM4cUtpQklhV2RvWlhOMElIQnZjMmwwYVhabElITnBaMjVsWkNBek1pMWlhWFFnWm14dllYUWdkbUZzZFdVZ0tpOWNibHgwYldGNFNXNTBJRDBnTWpFME56UTRNelkwTnl3Z0x5OGdZV3RoTGlBd2VEZEdSa1pHUmtaR0lHOXlJREplTXpFdE1WeHVYRzVjZEM4cUtpQkNiMjkwYzNSeWFXNW5JSEJoY21GdFpYUmxjbk1nS2k5Y2JseDBZbUZ6WlNBOUlETTJMRnh1WEhSMFRXbHVJRDBnTVN4Y2JseDBkRTFoZUNBOUlESTJMRnh1WEhSemEyVjNJRDBnTXpnc1hHNWNkR1JoYlhBZ1BTQTNNREFzWEc1Y2RHbHVhWFJwWVd4Q2FXRnpJRDBnTnpJc1hHNWNkR2x1YVhScFlXeE9JRDBnTVRJNExDQXZMeUF3ZURnd1hHNWNkR1JsYkdsdGFYUmxjaUE5SUNjdEp5d2dMeThnSjF4Y2VESkVKMXh1WEc1Y2RDOHFLaUJTWldkMWJHRnlJR1Y0Y0hKbGMzTnBiMjV6SUNvdlhHNWNkSEpsWjJWNFVIVnVlV052WkdVZ1BTQXZYbmh1TFMwdkxGeHVYSFJ5WldkbGVFNXZia0ZUUTBsSklEMGdMMXRlWEZ4NE1qQXRYRng0TjBWZEx5d2dMeThnZFc1d2NtbHVkR0ZpYkdVZ1FWTkRTVWtnWTJoaGNuTWdLeUJ1YjI0dFFWTkRTVWtnWTJoaGNuTmNibHgwY21WblpYaFRaWEJoY21GMGIzSnpJRDBnTDF0Y1hIZ3lSVnhjZFRNd01ESmNYSFZHUmpCRlhGeDFSa1kyTVYwdlp5d2dMeThnVWtaRElETTBPVEFnYzJWd1lYSmhkRzl5YzF4dVhHNWNkQzhxS2lCRmNuSnZjaUJ0WlhOellXZGxjeUFxTDF4dVhIUmxjbkp2Y25NZ1BTQjdYRzVjZEZ4MEoyOTJaWEptYkc5M0p6b2dKMDkyWlhKbWJHOTNPaUJwYm5CMWRDQnVaV1ZrY3lCM2FXUmxjaUJwYm5SbFoyVnljeUIwYnlCd2NtOWpaWE56Snl4Y2JseDBYSFFuYm05MExXSmhjMmxqSnpvZ0owbHNiR1ZuWVd3Z2FXNXdkWFFnUGowZ01IZzRNQ0FvYm05MElHRWdZbUZ6YVdNZ1kyOWtaU0J3YjJsdWRDa25MRnh1WEhSY2RDZHBiblpoYkdsa0xXbHVjSFYwSnpvZ0owbHVkbUZzYVdRZ2FXNXdkWFFuWEc1Y2RIMHNYRzVjYmx4MEx5b3FJRU52Ym5abGJtbGxibU5sSUhOb2IzSjBZM1YwY3lBcUwxeHVYSFJpWVhObFRXbHVkWE5VVFdsdUlEMGdZbUZ6WlNBdElIUk5hVzRzWEc1Y2RHWnNiMjl5SUQwZ1RXRjBhQzVtYkc5dmNpeGNibHgwYzNSeWFXNW5Sbkp2YlVOb1lYSkRiMlJsSUQwZ1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTeGNibHh1WEhRdktpb2dWR1Z0Y0c5eVlYSjVJSFpoY21saFlteGxJQ292WEc1Y2RHdGxlVHRjYmx4dVhIUXZLaTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0S2k5Y2JseHVYSFF2S2lwY2JseDBJQ29nUVNCblpXNWxjbWxqSUdWeWNtOXlJSFYwYVd4cGRIa2dablZ1WTNScGIyNHVYRzVjZENBcUlFQndjbWwyWVhSbFhHNWNkQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0IwZVhCbElGUm9aU0JsY25KdmNpQjBlWEJsTGx4dVhIUWdLaUJBY21WMGRYSnVjeUI3UlhKeWIzSjlJRlJvY205M2N5QmhJR0JTWVc1blpVVnljbTl5WUNCM2FYUm9JSFJvWlNCaGNIQnNhV05oWW14bElHVnljbTl5SUcxbGMzTmhaMlV1WEc1Y2RDQXFMMXh1WEhSbWRXNWpkR2x2YmlCbGNuSnZjaWgwZVhCbEtTQjdYRzVjZEZ4MGRHaHliM2NnVW1GdVoyVkZjbkp2Y2lobGNuSnZjbk5iZEhsd1pWMHBPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVFZ1oyVnVaWEpwWXlCZ1FYSnlZWGtqYldGd1lDQjFkR2xzYVhSNUlHWjFibU4wYVc5dUxseHVYSFFnS2lCQWNISnBkbUYwWlZ4dVhIUWdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQmhjbkpoZVNCVWFHVWdZWEp5WVhrZ2RHOGdhWFJsY21GMFpTQnZkbVZ5TGx4dVhIUWdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JqWVd4c1ltRmpheUJVYUdVZ1puVnVZM1JwYjI0Z2RHaGhkQ0JuWlhSeklHTmhiR3hsWkNCbWIzSWdaWFpsY25rZ1lYSnlZWGxjYmx4MElDb2dhWFJsYlM1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVmU0JCSUc1bGR5QmhjbkpoZVNCdlppQjJZV3gxWlhNZ2NtVjBkWEp1WldRZ1lua2dkR2hsSUdOaGJHeGlZV05ySUdaMWJtTjBhVzl1TGx4dVhIUWdLaTljYmx4MFpuVnVZM1JwYjI0Z2JXRndLR0Z5Y21GNUxDQm1iaWtnZTF4dVhIUmNkSFpoY2lCc1pXNW5kR2dnUFNCaGNuSmhlUzVzWlc1bmRHZzdYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJRnRkTzF4dVhIUmNkSGRvYVd4bElDaHNaVzVuZEdndExTa2dlMXh1WEhSY2RGeDBjbVZ6ZFd4MFcyeGxibWQwYUYwZ1BTQm1iaWhoY25KaGVWdHNaVzVuZEdoZEtUdGNibHgwWEhSOVhHNWNkRngwY21WMGRYSnVJSEpsYzNWc2REdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJCSUhOcGJYQnNaU0JnUVhKeVlYa2piV0Z3WUMxc2FXdGxJSGR5WVhCd1pYSWdkRzhnZDI5eWF5QjNhWFJvSUdSdmJXRnBiaUJ1WVcxbElITjBjbWx1WjNNZ2IzSWdaVzFoYVd4Y2JseDBJQ29nWVdSa2NtVnpjMlZ6TGx4dVhIUWdLaUJBY0hKcGRtRjBaVnh1WEhRZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ1pHOXRZV2x1SUZSb1pTQmtiMjFoYVc0Z2JtRnRaU0J2Y2lCbGJXRnBiQ0JoWkdSeVpYTnpMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmpZV3hzWW1GamF5QlVhR1VnWm5WdVkzUnBiMjRnZEdoaGRDQm5aWFJ6SUdOaGJHeGxaQ0JtYjNJZ1pYWmxjbmxjYmx4MElDb2dZMmhoY21GamRHVnlMbHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRWEp5WVhsOUlFRWdibVYzSUhOMGNtbHVaeUJ2WmlCamFHRnlZV04wWlhKeklISmxkSFZ5Ym1Wa0lHSjVJSFJvWlNCallXeHNZbUZqYTF4dVhIUWdLaUJtZFc1amRHbHZiaTVjYmx4MElDb3ZYRzVjZEdaMWJtTjBhVzl1SUcxaGNFUnZiV0ZwYmloemRISnBibWNzSUdadUtTQjdYRzVjZEZ4MGRtRnlJSEJoY25SeklEMGdjM1J5YVc1bkxuTndiR2wwS0NkQUp5azdYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJQ2NuTzF4dVhIUmNkR2xtSUNod1lYSjBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNWNkRngwWEhRdkx5QkpiaUJsYldGcGJDQmhaR1J5WlhOelpYTXNJRzl1YkhrZ2RHaGxJR1J2YldGcGJpQnVZVzFsSUhOb2IzVnNaQ0JpWlNCd2RXNTVZMjlrWldRdUlFeGxZWFpsWEc1Y2RGeDBYSFF2THlCMGFHVWdiRzlqWVd3Z2NHRnlkQ0FvYVM1bExpQmxkbVZ5ZVhSb2FXNW5JSFZ3SUhSdklHQkFZQ2tnYVc1MFlXTjBMbHh1WEhSY2RGeDBjbVZ6ZFd4MElEMGdjR0Z5ZEhOYk1GMGdLeUFuUUNjN1hHNWNkRngwWEhSemRISnBibWNnUFNCd1lYSjBjMXN4WFR0Y2JseDBYSFI5WEc1Y2RGeDBMeThnUVhadmFXUWdZSE53YkdsMEtISmxaMlY0S1dBZ1ptOXlJRWxGT0NCamIyMXdZWFJwWW1sc2FYUjVMaUJUWldVZ0l6RTNMbHh1WEhSY2RITjBjbWx1WnlBOUlITjBjbWx1Wnk1eVpYQnNZV05sS0hKbFoyVjRVMlZ3WVhKaGRHOXljeXdnSjF4Y2VESkZKeWs3WEc1Y2RGeDBkbUZ5SUd4aFltVnNjeUE5SUhOMGNtbHVaeTV6Y0d4cGRDZ25MaWNwTzF4dVhIUmNkSFpoY2lCbGJtTnZaR1ZrSUQwZ2JXRndLR3hoWW1Wc2N5d2dabTRwTG1wdmFXNG9KeTRuS1R0Y2JseDBYSFJ5WlhSMWNtNGdjbVZ6ZFd4MElDc2daVzVqYjJSbFpEdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJEY21WaGRHVnpJR0Z1SUdGeWNtRjVJR052Ym5SaGFXNXBibWNnZEdobElHNTFiV1Z5YVdNZ1kyOWtaU0J3YjJsdWRITWdiMllnWldGamFDQlZibWxqYjJSbFhHNWNkQ0FxSUdOb1lYSmhZM1JsY2lCcGJpQjBhR1VnYzNSeWFXNW5MaUJYYUdsc1pTQktZWFpoVTJOeWFYQjBJSFZ6WlhNZ1ZVTlRMVElnYVc1MFpYSnVZV3hzZVN4Y2JseDBJQ29nZEdocGN5Qm1kVzVqZEdsdmJpQjNhV3hzSUdOdmJuWmxjblFnWVNCd1lXbHlJRzltSUhOMWNuSnZaMkYwWlNCb1lXeDJaWE1nS0dWaFkyZ2diMllnZDJocFkyaGNibHgwSUNvZ1ZVTlRMVElnWlhod2IzTmxjeUJoY3lCelpYQmhjbUYwWlNCamFHRnlZV04wWlhKektTQnBiblJ2SUdFZ2MybHVaMnhsSUdOdlpHVWdjRzlwYm5Rc1hHNWNkQ0FxSUcxaGRHTm9hVzVuSUZWVVJpMHhOaTVjYmx4MElDb2dRSE5sWlNCZ2NIVnVlV052WkdVdWRXTnpNaTVsYm1OdlpHVmdYRzVjZENBcUlFQnpaV1VnUEdoMGRIQnpPaTh2YldGMGFHbGhjMko1Ym1WdWN5NWlaUzl1YjNSbGN5OXFZWFpoYzJOeWFYQjBMV1Z1WTI5a2FXNW5QbHh1WEhRZ0tpQkFiV1Z0WW1WeVQyWWdjSFZ1ZVdOdlpHVXVkV056TWx4dVhIUWdLaUJBYm1GdFpTQmtaV052WkdWY2JseDBJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSE4wY21sdVp5QlVhR1VnVlc1cFkyOWtaU0JwYm5CMWRDQnpkSEpwYm1jZ0tGVkRVeTB5S1M1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVmU0JVYUdVZ2JtVjNJR0Z5Y21GNUlHOW1JR052WkdVZ2NHOXBiblJ6TGx4dVhIUWdLaTljYmx4MFpuVnVZM1JwYjI0Z2RXTnpNbVJsWTI5a1pTaHpkSEpwYm1jcElIdGNibHgwWEhSMllYSWdiM1YwY0hWMElEMGdXMTBzWEc1Y2RGeDBJQ0FnSUdOdmRXNTBaWElnUFNBd0xGeHVYSFJjZENBZ0lDQnNaVzVuZEdnZ1BTQnpkSEpwYm1jdWJHVnVaM1JvTEZ4dVhIUmNkQ0FnSUNCMllXeDFaU3hjYmx4MFhIUWdJQ0FnWlhoMGNtRTdYRzVjZEZ4MGQyaHBiR1VnS0dOdmRXNTBaWElnUENCc1pXNW5kR2dwSUh0Y2JseDBYSFJjZEhaaGJIVmxJRDBnYzNSeWFXNW5MbU5vWVhKRGIyUmxRWFFvWTI5MWJuUmxjaXNyS1R0Y2JseDBYSFJjZEdsbUlDaDJZV3gxWlNBK1BTQXdlRVE0TURBZ0ppWWdkbUZzZFdVZ1BEMGdNSGhFUWtaR0lDWW1JR052ZFc1MFpYSWdQQ0JzWlc1bmRHZ3BJSHRjYmx4MFhIUmNkRngwTHk4Z2FHbG5hQ0J6ZFhKeWIyZGhkR1VzSUdGdVpDQjBhR1Z5WlNCcGN5QmhJRzVsZUhRZ1kyaGhjbUZqZEdWeVhHNWNkRngwWEhSY2RHVjRkSEpoSUQwZ2MzUnlhVzVuTG1Ob1lYSkRiMlJsUVhRb1kyOTFiblJsY2lzcktUdGNibHgwWEhSY2RGeDBhV1lnS0NobGVIUnlZU0FtSURCNFJrTXdNQ2tnUFQwZ01IaEVRekF3S1NCN0lDOHZJR3h2ZHlCemRYSnliMmRoZEdWY2JseDBYSFJjZEZ4MFhIUnZkWFJ3ZFhRdWNIVnphQ2dvS0haaGJIVmxJQ1lnTUhnelJrWXBJRHc4SURFd0tTQXJJQ2hsZUhSeVlTQW1JREI0TTBaR0tTQXJJREI0TVRBd01EQXBPMXh1WEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh1WEhSY2RGeDBYSFJjZEM4dklIVnViV0YwWTJobFpDQnpkWEp5YjJkaGRHVTdJRzl1YkhrZ1lYQndaVzVrSUhSb2FYTWdZMjlrWlNCMWJtbDBMQ0JwYmlCallYTmxJSFJvWlNCdVpYaDBYRzVjZEZ4MFhIUmNkRngwTHk4Z1kyOWtaU0IxYm1sMElHbHpJSFJvWlNCb2FXZG9JSE4xY25KdloyRjBaU0J2WmlCaElITjFjbkp2WjJGMFpTQndZV2x5WEc1Y2RGeDBYSFJjZEZ4MGIzVjBjSFYwTG5CMWMyZ29kbUZzZFdVcE8xeHVYSFJjZEZ4MFhIUmNkR052ZFc1MFpYSXRMVHRjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwYjNWMGNIVjBMbkIxYzJnb2RtRnNkV1VwTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2IzVjBjSFYwTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFTnlaV0YwWlhNZ1lTQnpkSEpwYm1jZ1ltRnpaV1FnYjI0Z1lXNGdZWEp5WVhrZ2IyWWdiblZ0WlhKcFl5QmpiMlJsSUhCdmFXNTBjeTVjYmx4MElDb2dRSE5sWlNCZ2NIVnVlV052WkdVdWRXTnpNaTVrWldOdlpHVmdYRzVjZENBcUlFQnRaVzFpWlhKUFppQndkVzU1WTI5a1pTNTFZM015WEc1Y2RDQXFJRUJ1WVcxbElHVnVZMjlrWlZ4dVhIUWdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQmpiMlJsVUc5cGJuUnpJRlJvWlNCaGNuSmhlU0J2WmlCdWRXMWxjbWxqSUdOdlpHVWdjRzlwYm5SekxseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1UzUnlhVzVuZlNCVWFHVWdibVYzSUZWdWFXTnZaR1VnYzNSeWFXNW5JQ2hWUTFNdE1pa3VYRzVjZENBcUwxeHVYSFJtZFc1amRHbHZiaUIxWTNNeVpXNWpiMlJsS0dGeWNtRjVLU0I3WEc1Y2RGeDBjbVYwZFhKdUlHMWhjQ2hoY25KaGVTd2dablZ1WTNScGIyNG9kbUZzZFdVcElIdGNibHgwWEhSY2RIWmhjaUJ2ZFhSd2RYUWdQU0FuSnp0Y2JseDBYSFJjZEdsbUlDaDJZV3gxWlNBK0lEQjRSa1pHUmlrZ2UxeHVYSFJjZEZ4MFhIUjJZV3gxWlNBdFBTQXdlREV3TURBd08xeHVYSFJjZEZ4MFhIUnZkWFJ3ZFhRZ0t6MGdjM1J5YVc1blJuSnZiVU5vWVhKRGIyUmxLSFpoYkhWbElENCtQaUF4TUNBbUlEQjRNMFpHSUh3Z01IaEVPREF3S1R0Y2JseDBYSFJjZEZ4MGRtRnNkV1VnUFNBd2VFUkRNREFnZkNCMllXeDFaU0FtSURCNE0wWkdPMXh1WEhSY2RGeDBmVnh1WEhSY2RGeDBiM1YwY0hWMElDczlJSE4wY21sdVowWnliMjFEYUdGeVEyOWtaU2gyWVd4MVpTazdYRzVjZEZ4MFhIUnlaWFIxY200Z2IzVjBjSFYwTzF4dVhIUmNkSDBwTG1wdmFXNG9KeWNwTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFTnZiblpsY25SeklHRWdZbUZ6YVdNZ1kyOWtaU0J3YjJsdWRDQnBiblJ2SUdFZ1pHbG5hWFF2YVc1MFpXZGxjaTVjYmx4MElDb2dRSE5sWlNCZ1pHbG5hWFJVYjBKaGMybGpLQ2xnWEc1Y2RDQXFJRUJ3Y21sMllYUmxYRzVjZENBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCamIyUmxVRzlwYm5RZ1ZHaGxJR0poYzJsaklHNTFiV1Z5YVdNZ1kyOWtaU0J3YjJsdWRDQjJZV3gxWlM1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTA1MWJXSmxjbjBnVkdobElHNTFiV1Z5YVdNZ2RtRnNkV1VnYjJZZ1lTQmlZWE5wWXlCamIyUmxJSEJ2YVc1MElDaG1iM0lnZFhObElHbHVYRzVjZENBcUlISmxjSEpsYzJWdWRHbHVaeUJwYm5SbFoyVnljeWtnYVc0Z2RHaGxJSEpoYm1kbElHQXdZQ0IwYnlCZ1ltRnpaU0F0SURGZ0xDQnZjaUJnWW1GelpXQWdhV1pjYmx4MElDb2dkR2hsSUdOdlpHVWdjRzlwYm5RZ1pHOWxjeUJ1YjNRZ2NtVndjbVZ6Wlc1MElHRWdkbUZzZFdVdVhHNWNkQ0FxTDF4dVhIUm1kVzVqZEdsdmJpQmlZWE5wWTFSdlJHbG5hWFFvWTI5a1pWQnZhVzUwS1NCN1hHNWNkRngwYVdZZ0tHTnZaR1ZRYjJsdWRDQXRJRFE0SUR3Z01UQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmpiMlJsVUc5cGJuUWdMU0F5TWp0Y2JseDBYSFI5WEc1Y2RGeDBhV1lnS0dOdlpHVlFiMmx1ZENBdElEWTFJRHdnTWpZcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCamIyUmxVRzlwYm5RZ0xTQTJOVHRjYmx4MFhIUjlYRzVjZEZ4MGFXWWdLR052WkdWUWIybHVkQ0F0SURrM0lEd2dNallwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJqYjJSbFVHOXBiblFnTFNBNU56dGNibHgwWEhSOVhHNWNkRngwY21WMGRYSnVJR0poYzJVN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dRMjl1ZG1WeWRITWdZU0JrYVdkcGRDOXBiblJsWjJWeUlHbHVkRzhnWVNCaVlYTnBZeUJqYjJSbElIQnZhVzUwTGx4dVhIUWdLaUJBYzJWbElHQmlZWE5wWTFSdlJHbG5hWFFvS1dCY2JseDBJQ29nUUhCeWFYWmhkR1ZjYmx4MElDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHUnBaMmwwSUZSb1pTQnVkVzFsY21saklIWmhiSFZsSUc5bUlHRWdZbUZ6YVdNZ1kyOWtaU0J3YjJsdWRDNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwNTFiV0psY24wZ1ZHaGxJR0poYzJsaklHTnZaR1VnY0c5cGJuUWdkMmh2YzJVZ2RtRnNkV1VnS0hkb1pXNGdkWE5sWkNCbWIzSmNibHgwSUNvZ2NtVndjbVZ6Wlc1MGFXNW5JR2x1ZEdWblpYSnpLU0JwY3lCZ1pHbG5hWFJnTENCM2FHbGphQ0J1WldWa2N5QjBieUJpWlNCcGJpQjBhR1VnY21GdVoyVmNibHgwSUNvZ1lEQmdJSFJ2SUdCaVlYTmxJQzBnTVdBdUlFbG1JR0JtYkdGbllDQnBjeUJ1YjI0dGVtVnlieXdnZEdobElIVndjR1Z5WTJGelpTQm1iM0p0SUdselhHNWNkQ0FxSUhWelpXUTdJR1ZzYzJVc0lIUm9aU0JzYjNkbGNtTmhjMlVnWm05eWJTQnBjeUIxYzJWa0xpQlVhR1VnWW1Wb1lYWnBiM0lnYVhNZ2RXNWtaV1pwYm1Wa1hHNWNkQ0FxSUdsbUlHQm1iR0ZuWUNCcGN5QnViMjR0ZW1WeWJ5QmhibVFnWUdScFoybDBZQ0JvWVhNZ2JtOGdkWEJ3WlhKallYTmxJR1p2Y20wdVhHNWNkQ0FxTDF4dVhIUm1kVzVqZEdsdmJpQmthV2RwZEZSdlFtRnphV01vWkdsbmFYUXNJR1pzWVdjcElIdGNibHgwWEhRdkx5QWdNQzR1TWpVZ2JXRndJSFJ2SUVGVFEwbEpJR0V1TG5vZ2IzSWdRUzR1V2x4dVhIUmNkQzh2SURJMkxpNHpOU0J0WVhBZ2RHOGdRVk5EU1VrZ01DNHVPVnh1WEhSY2RISmxkSFZ5YmlCa2FXZHBkQ0FySURJeUlDc2dOelVnS2lBb1pHbG5hWFFnUENBeU5pa2dMU0FvS0dac1lXY2dJVDBnTUNrZ1BEd2dOU2s3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1FtbGhjeUJoWkdGd2RHRjBhVzl1SUdaMWJtTjBhVzl1SUdGeklIQmxjaUJ6WldOMGFXOXVJRE11TkNCdlppQlNSa01nTXpRNU1pNWNibHgwSUNvZ2FIUjBjRG92TDNSdmIyeHpMbWxsZEdZdWIzSm5MMmgwYld3dmNtWmpNelE1TWlOelpXTjBhVzl1TFRNdU5GeHVYSFFnS2lCQWNISnBkbUYwWlZ4dVhIUWdLaTljYmx4MFpuVnVZM1JwYjI0Z1lXUmhjSFFvWkdWc2RHRXNJRzUxYlZCdmFXNTBjeXdnWm1seWMzUlVhVzFsS1NCN1hHNWNkRngwZG1GeUlHc2dQU0F3TzF4dVhIUmNkR1JsYkhSaElEMGdabWx5YzNSVWFXMWxJRDhnWm14dmIzSW9aR1ZzZEdFZ0x5QmtZVzF3S1NBNklHUmxiSFJoSUQ0K0lERTdYRzVjZEZ4MFpHVnNkR0VnS3owZ1pteHZiM0lvWkdWc2RHRWdMeUJ1ZFcxUWIybHVkSE1wTzF4dVhIUmNkR1p2Y2lBb0x5b2dibThnYVc1cGRHbGhiR2w2WVhScGIyNGdLaTg3SUdSbGJIUmhJRDRnWW1GelpVMXBiblZ6VkUxcGJpQXFJSFJOWVhnZ1BqNGdNVHNnYXlBclBTQmlZWE5sS1NCN1hHNWNkRngwWEhSa1pXeDBZU0E5SUdac2IyOXlLR1JsYkhSaElDOGdZbUZ6WlUxcGJuVnpWRTFwYmlrN1hHNWNkRngwZlZ4dVhIUmNkSEpsZEhWeWJpQm1iRzl2Y2locklDc2dLR0poYzJWTmFXNTFjMVJOYVc0Z0t5QXhLU0FxSUdSbGJIUmhJQzhnS0dSbGJIUmhJQ3NnYzJ0bGR5a3BPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVOdmJuWmxjblJ6SUdFZ1VIVnVlV052WkdVZ2MzUnlhVzVuSUc5bUlFRlRRMGxKTFc5dWJIa2djM2x0WW05c2N5QjBieUJoSUhOMGNtbHVaeUJ2WmlCVmJtbGpiMlJsWEc1Y2RDQXFJSE41YldKdmJITXVYRzVjZENBcUlFQnRaVzFpWlhKUFppQndkVzU1WTI5a1pWeHVYSFFnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYVc1d2RYUWdWR2hsSUZCMWJubGpiMlJsSUhOMGNtbHVaeUJ2WmlCQlUwTkpTUzF2Ym14NUlITjViV0p2YkhNdVhHNWNkQ0FxSUVCeVpYUjFjbTV6SUh0VGRISnBibWQ5SUZSb1pTQnlaWE4xYkhScGJtY2djM1J5YVc1bklHOW1JRlZ1YVdOdlpHVWdjM2x0WW05c2N5NWNibHgwSUNvdlhHNWNkR1oxYm1OMGFXOXVJR1JsWTI5a1pTaHBibkIxZENrZ2UxeHVYSFJjZEM4dklFUnZiaWQwSUhWelpTQlZRMU10TWx4dVhIUmNkSFpoY2lCdmRYUndkWFFnUFNCYlhTeGNibHgwWEhRZ0lDQWdhVzV3ZFhSTVpXNW5kR2dnUFNCcGJuQjFkQzVzWlc1bmRHZ3NYRzVjZEZ4MElDQWdJRzkxZEN4Y2JseDBYSFFnSUNBZ2FTQTlJREFzWEc1Y2RGeDBJQ0FnSUc0Z1BTQnBibWwwYVdGc1RpeGNibHgwWEhRZ0lDQWdZbWxoY3lBOUlHbHVhWFJwWVd4Q2FXRnpMRnh1WEhSY2RDQWdJQ0JpWVhOcFl5eGNibHgwWEhRZ0lDQWdhaXhjYmx4MFhIUWdJQ0FnYVc1a1pYZ3NYRzVjZEZ4MElDQWdJRzlzWkdrc1hHNWNkRngwSUNBZ0lIY3NYRzVjZEZ4MElDQWdJR3NzWEc1Y2RGeDBJQ0FnSUdScFoybDBMRnh1WEhSY2RDQWdJQ0IwTEZ4dVhIUmNkQ0FnSUNBdktpb2dRMkZqYUdWa0lHTmhiR04xYkdGMGFXOXVJSEpsYzNWc2RITWdLaTljYmx4MFhIUWdJQ0FnWW1GelpVMXBiblZ6VkR0Y2JseHVYSFJjZEM4dklFaGhibVJzWlNCMGFHVWdZbUZ6YVdNZ1kyOWtaU0J3YjJsdWRITTZJR3hsZENCZ1ltRnphV05nSUdKbElIUm9aU0J1ZFcxaVpYSWdiMllnYVc1d2RYUWdZMjlrWlZ4dVhIUmNkQzh2SUhCdmFXNTBjeUJpWldadmNtVWdkR2hsSUd4aGMzUWdaR1ZzYVcxcGRHVnlMQ0J2Y2lCZ01HQWdhV1lnZEdobGNtVWdhWE1nYm05dVpTd2dkR2hsYmlCamIzQjVYRzVjZEZ4MEx5OGdkR2hsSUdacGNuTjBJR0poYzJsaklHTnZaR1VnY0c5cGJuUnpJSFJ2SUhSb1pTQnZkWFJ3ZFhRdVhHNWNibHgwWEhSaVlYTnBZeUE5SUdsdWNIVjBMbXhoYzNSSmJtUmxlRTltS0dSbGJHbHRhWFJsY2lrN1hHNWNkRngwYVdZZ0tHSmhjMmxqSUR3Z01Da2dlMXh1WEhSY2RGeDBZbUZ6YVdNZ1BTQXdPMXh1WEhSY2RIMWNibHh1WEhSY2RHWnZjaUFvYWlBOUlEQTdJR29nUENCaVlYTnBZenNnS3l0cUtTQjdYRzVjZEZ4MFhIUXZMeUJwWmlCcGRDZHpJRzV2ZENCaElHSmhjMmxqSUdOdlpHVWdjRzlwYm5SY2JseDBYSFJjZEdsbUlDaHBibkIxZEM1amFHRnlRMjlrWlVGMEtHb3BJRDQ5SURCNE9EQXBJSHRjYmx4MFhIUmNkRngwWlhKeWIzSW9KMjV2ZEMxaVlYTnBZeWNwTzF4dVhIUmNkRngwZlZ4dVhIUmNkRngwYjNWMGNIVjBMbkIxYzJnb2FXNXdkWFF1WTJoaGNrTnZaR1ZCZENocUtTazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MEx5OGdUV0ZwYmlCa1pXTnZaR2x1WnlCc2IyOXdPaUJ6ZEdGeWRDQnFkWE4wSUdGbWRHVnlJSFJvWlNCc1lYTjBJR1JsYkdsdGFYUmxjaUJwWmlCaGJua2dZbUZ6YVdNZ1kyOWtaVnh1WEhSY2RDOHZJSEJ2YVc1MGN5QjNaWEpsSUdOdmNHbGxaRHNnYzNSaGNuUWdZWFFnZEdobElHSmxaMmx1Ym1sdVp5QnZkR2hsY25kcGMyVXVYRzVjYmx4MFhIUm1iM0lnS0dsdVpHVjRJRDBnWW1GemFXTWdQaUF3SUQ4Z1ltRnphV01nS3lBeElEb2dNRHNnYVc1a1pYZ2dQQ0JwYm5CMWRFeGxibWQwYURzZ0x5b2dibThnWm1sdVlXd2daWGh3Y21WemMybHZiaUFxTHlrZ2UxeHVYRzVjZEZ4MFhIUXZMeUJnYVc1a1pYaGdJR2x6SUhSb1pTQnBibVJsZUNCdlppQjBhR1VnYm1WNGRDQmphR0Z5WVdOMFpYSWdkRzhnWW1VZ1kyOXVjM1Z0WldRdVhHNWNkRngwWEhRdkx5QkVaV052WkdVZ1lTQm5aVzVsY21Gc2FYcGxaQ0IyWVhKcFlXSnNaUzFzWlc1bmRHZ2dhVzUwWldkbGNpQnBiblJ2SUdCa1pXeDBZV0FzWEc1Y2RGeDBYSFF2THlCM2FHbGphQ0JuWlhSeklHRmtaR1ZrSUhSdklHQnBZQzRnVkdobElHOTJaWEptYkc5M0lHTm9aV05yYVc1bklHbHpJR1ZoYzJsbGNseHVYSFJjZEZ4MEx5OGdhV1lnZDJVZ2FXNWpjbVZoYzJVZ1lHbGdJR0Z6SUhkbElHZHZMQ0IwYUdWdUlITjFZblJ5WVdOMElHOW1aaUJwZEhNZ2MzUmhjblJwYm1kY2JseDBYSFJjZEM4dklIWmhiSFZsSUdGMElIUm9aU0JsYm1RZ2RHOGdiMkowWVdsdUlHQmtaV3gwWVdBdVhHNWNkRngwWEhSbWIzSWdLRzlzWkdrZ1BTQnBMQ0IzSUQwZ01Td2dheUE5SUdKaGMyVTdJQzhxSUc1dklHTnZibVJwZEdsdmJpQXFMenNnYXlBclBTQmlZWE5sS1NCN1hHNWNibHgwWEhSY2RGeDBhV1lnS0dsdVpHVjRJRDQ5SUdsdWNIVjBUR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUmNkRngwWlhKeWIzSW9KMmx1ZG1Gc2FXUXRhVzV3ZFhRbktUdGNibHgwWEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFJjZEdScFoybDBJRDBnWW1GemFXTlViMFJwWjJsMEtHbHVjSFYwTG1Ob1lYSkRiMlJsUVhRb2FXNWtaWGdyS3lrcE8xeHVYRzVjZEZ4MFhIUmNkR2xtSUNoa2FXZHBkQ0ErUFNCaVlYTmxJSHg4SUdScFoybDBJRDRnWm14dmIzSW9LRzFoZUVsdWRDQXRJR2twSUM4Z2R5a3BJSHRjYmx4MFhIUmNkRngwWEhSbGNuSnZjaWduYjNabGNtWnNiM2NuS1R0Y2JseDBYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUmNkR2tnS3owZ1pHbG5hWFFnS2lCM08xeHVYSFJjZEZ4MFhIUjBJRDBnYXlBOFBTQmlhV0Z6SUQ4Z2RFMXBiaUE2SUNocklENDlJR0pwWVhNZ0t5QjBUV0Y0SUQ4Z2RFMWhlQ0E2SUdzZ0xTQmlhV0Z6S1R0Y2JseHVYSFJjZEZ4MFhIUnBaaUFvWkdsbmFYUWdQQ0IwS1NCN1hHNWNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSY2RIMWNibHh1WEhSY2RGeDBYSFJpWVhObFRXbHVkWE5VSUQwZ1ltRnpaU0F0SUhRN1hHNWNkRngwWEhSY2RHbG1JQ2gzSUQ0Z1pteHZiM0lvYldGNFNXNTBJQzhnWW1GelpVMXBiblZ6VkNrcElIdGNibHgwWEhSY2RGeDBYSFJsY25KdmNpZ25iM1psY21ac2IzY25LVHRjYmx4MFhIUmNkRngwZlZ4dVhHNWNkRngwWEhSY2RIY2dLajBnWW1GelpVMXBiblZ6VkR0Y2JseHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUnZkWFFnUFNCdmRYUndkWFF1YkdWdVozUm9JQ3NnTVR0Y2JseDBYSFJjZEdKcFlYTWdQU0JoWkdGd2RDaHBJQzBnYjJ4a2FTd2diM1YwTENCdmJHUnBJRDA5SURBcE8xeHVYRzVjZEZ4MFhIUXZMeUJnYVdBZ2QyRnpJSE4xY0hCdmMyVmtJSFJ2SUhkeVlYQWdZWEp2ZFc1a0lHWnliMjBnWUc5MWRHQWdkRzhnWURCZ0xGeHVYSFJjZEZ4MEx5OGdhVzVqY21WdFpXNTBhVzVuSUdCdVlDQmxZV05vSUhScGJXVXNJSE52SUhkbEoyeHNJR1pwZUNCMGFHRjBJRzV2ZHpwY2JseDBYSFJjZEdsbUlDaG1iRzl2Y2locElDOGdiM1YwS1NBK0lHMWhlRWx1ZENBdElHNHBJSHRjYmx4MFhIUmNkRngwWlhKeWIzSW9KMjkyWlhKbWJHOTNKeWs3WEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEc0Z0t6MGdabXh2YjNJb2FTQXZJRzkxZENrN1hHNWNkRngwWEhScElDVTlJRzkxZER0Y2JseHVYSFJjZEZ4MEx5OGdTVzV6WlhKMElHQnVZQ0JoZENCd2IzTnBkR2x2YmlCZ2FXQWdiMllnZEdobElHOTFkSEIxZEZ4dVhIUmNkRngwYjNWMGNIVjBMbk53YkdsalpTaHBLeXNzSURBc0lHNHBPMXh1WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlIVmpjekpsYm1OdlpHVW9iM1YwY0hWMEtUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJEYjI1MlpYSjBjeUJoSUhOMGNtbHVaeUJ2WmlCVmJtbGpiMlJsSUhONWJXSnZiSE1nS0dVdVp5NGdZU0JrYjIxaGFXNGdibUZ0WlNCc1lXSmxiQ2tnZEc4Z1lWeHVYSFFnS2lCUWRXNTVZMjlrWlNCemRISnBibWNnYjJZZ1FWTkRTVWt0YjI1c2VTQnplVzFpYjJ4ekxseHVYSFFnS2lCQWJXVnRZbVZ5VDJZZ2NIVnVlV052WkdWY2JseDBJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR2x1Y0hWMElGUm9aU0J6ZEhKcGJtY2diMllnVlc1cFkyOWtaU0J6ZVcxaWIyeHpMbHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdVM1J5YVc1bmZTQlVhR1VnY21WemRXeDBhVzVuSUZCMWJubGpiMlJsSUhOMGNtbHVaeUJ2WmlCQlUwTkpTUzF2Ym14NUlITjViV0p2YkhNdVhHNWNkQ0FxTDF4dVhIUm1kVzVqZEdsdmJpQmxibU52WkdVb2FXNXdkWFFwSUh0Y2JseDBYSFIyWVhJZ2JpeGNibHgwWEhRZ0lDQWdaR1ZzZEdFc1hHNWNkRngwSUNBZ0lHaGhibVJzWldSRFVFTnZkVzUwTEZ4dVhIUmNkQ0FnSUNCaVlYTnBZMHhsYm1kMGFDeGNibHgwWEhRZ0lDQWdZbWxoY3l4Y2JseDBYSFFnSUNBZ2FpeGNibHgwWEhRZ0lDQWdiU3hjYmx4MFhIUWdJQ0FnY1N4Y2JseDBYSFFnSUNBZ2F5eGNibHgwWEhRZ0lDQWdkQ3hjYmx4MFhIUWdJQ0FnWTNWeWNtVnVkRlpoYkhWbExGeHVYSFJjZENBZ0lDQnZkWFJ3ZFhRZ1BTQmJYU3hjYmx4MFhIUWdJQ0FnTHlvcUlHQnBibkIxZEV4bGJtZDBhR0FnZDJsc2JDQm9iMnhrSUhSb1pTQnVkVzFpWlhJZ2IyWWdZMjlrWlNCd2IybHVkSE1nYVc0Z1lHbHVjSFYwWUM0Z0tpOWNibHgwWEhRZ0lDQWdhVzV3ZFhSTVpXNW5kR2dzWEc1Y2RGeDBJQ0FnSUM4cUtpQkRZV05vWldRZ1kyRnNZM1ZzWVhScGIyNGdjbVZ6ZFd4MGN5QXFMMXh1WEhSY2RDQWdJQ0JvWVc1a2JHVmtRMUJEYjNWdWRGQnNkWE5QYm1Vc1hHNWNkRngwSUNBZ0lHSmhjMlZOYVc1MWMxUXNYRzVjZEZ4MElDQWdJSEZOYVc1MWMxUTdYRzVjYmx4MFhIUXZMeUJEYjI1MlpYSjBJSFJvWlNCcGJuQjFkQ0JwYmlCVlExTXRNaUIwYnlCVmJtbGpiMlJsWEc1Y2RGeDBhVzV3ZFhRZ1BTQjFZM015WkdWamIyUmxLR2x1Y0hWMEtUdGNibHh1WEhSY2RDOHZJRU5oWTJobElIUm9aU0JzWlc1bmRHaGNibHgwWEhScGJuQjFkRXhsYm1kMGFDQTlJR2x1Y0hWMExteGxibWQwYUR0Y2JseHVYSFJjZEM4dklFbHVhWFJwWVd4cGVtVWdkR2hsSUhOMFlYUmxYRzVjZEZ4MGJpQTlJR2x1YVhScFlXeE9PMXh1WEhSY2RHUmxiSFJoSUQwZ01EdGNibHgwWEhSaWFXRnpJRDBnYVc1cGRHbGhiRUpwWVhNN1hHNWNibHgwWEhRdkx5QklZVzVrYkdVZ2RHaGxJR0poYzJsaklHTnZaR1VnY0c5cGJuUnpYRzVjZEZ4MFptOXlJQ2hxSUQwZ01Ec2dhaUE4SUdsdWNIVjBUR1Z1WjNSb095QXJLMm9wSUh0Y2JseDBYSFJjZEdOMWNuSmxiblJXWVd4MVpTQTlJR2x1Y0hWMFcycGRPMXh1WEhSY2RGeDBhV1lnS0dOMWNuSmxiblJXWVd4MVpTQThJREI0T0RBcElIdGNibHgwWEhSY2RGeDBiM1YwY0hWMExuQjFjMmdvYzNSeWFXNW5Sbkp2YlVOb1lYSkRiMlJsS0dOMWNuSmxiblJXWVd4MVpTa3BPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RHaGhibVJzWldSRFVFTnZkVzUwSUQwZ1ltRnphV05NWlc1bmRHZ2dQU0J2ZFhSd2RYUXViR1Z1WjNSb08xeHVYRzVjZEZ4MEx5OGdZR2hoYm1Sc1pXUkRVRU52ZFc1MFlDQnBjeUIwYUdVZ2JuVnRZbVZ5SUc5bUlHTnZaR1VnY0c5cGJuUnpJSFJvWVhRZ2FHRjJaU0JpWldWdUlHaGhibVJzWldRN1hHNWNkRngwTHk4Z1lHSmhjMmxqVEdWdVozUm9ZQ0JwY3lCMGFHVWdiblZ0WW1WeUlHOW1JR0poYzJsaklHTnZaR1VnY0c5cGJuUnpMbHh1WEc1Y2RGeDBMeThnUm1sdWFYTm9JSFJvWlNCaVlYTnBZeUJ6ZEhKcGJtY2dMU0JwWmlCcGRDQnBjeUJ1YjNRZ1pXMXdkSGtnTFNCM2FYUm9JR0VnWkdWc2FXMXBkR1Z5WEc1Y2RGeDBhV1lnS0dKaGMybGpUR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnZkWFJ3ZFhRdWNIVnphQ2hrWld4cGJXbDBaWElwTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUUxaGFXNGdaVzVqYjJScGJtY2diRzl2Y0RwY2JseDBYSFIzYUdsc1pTQW9hR0Z1Wkd4bFpFTlFRMjkxYm5RZ1BDQnBibkIxZEV4bGJtZDBhQ2tnZTF4dVhHNWNkRngwWEhRdkx5QkJiR3dnYm05dUxXSmhjMmxqSUdOdlpHVWdjRzlwYm5SeklEd2diaUJvWVhabElHSmxaVzRnYUdGdVpHeGxaQ0JoYkhKbFlXUjVMaUJHYVc1a0lIUm9aU0J1WlhoMFhHNWNkRngwWEhRdkx5QnNZWEpuWlhJZ2IyNWxPbHh1WEhSY2RGeDBabTl5SUNodElEMGdiV0Y0U1c1MExDQnFJRDBnTURzZ2FpQThJR2x1Y0hWMFRHVnVaM1JvT3lBcksyb3BJSHRjYmx4MFhIUmNkRngwWTNWeWNtVnVkRlpoYkhWbElEMGdhVzV3ZFhSYmFsMDdYRzVjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVm1Gc2RXVWdQajBnYmlBbUppQmpkWEp5Wlc1MFZtRnNkV1VnUENCdEtTQjdYRzVjZEZ4MFhIUmNkRngwYlNBOUlHTjFjbkpsYm5SV1lXeDFaVHRjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhRdkx5QkpibU55WldGelpTQmdaR1ZzZEdGZ0lHVnViM1ZuYUNCMGJ5QmhaSFpoYm1ObElIUm9aU0JrWldOdlpHVnlKM01nUEc0c2FUNGdjM1JoZEdVZ2RHOGdQRzBzTUQ0c1hHNWNkRngwWEhRdkx5QmlkWFFnWjNWaGNtUWdZV2RoYVc1emRDQnZkbVZ5Wm14dmQxeHVYSFJjZEZ4MGFHRnVaR3hsWkVOUVEyOTFiblJRYkhWelQyNWxJRDBnYUdGdVpHeGxaRU5RUTI5MWJuUWdLeUF4TzF4dVhIUmNkRngwYVdZZ0tHMGdMU0J1SUQ0Z1pteHZiM0lvS0cxaGVFbHVkQ0F0SUdSbGJIUmhLU0F2SUdoaGJtUnNaV1JEVUVOdmRXNTBVR3gxYzA5dVpTa3BJSHRjYmx4MFhIUmNkRngwWlhKeWIzSW9KMjkyWlhKbWJHOTNKeWs3WEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEdSbGJIUmhJQ3M5SUNodElDMGdiaWtnS2lCb1lXNWtiR1ZrUTFCRGIzVnVkRkJzZFhOUGJtVTdYRzVjZEZ4MFhIUnVJRDBnYlR0Y2JseHVYSFJjZEZ4MFptOXlJQ2hxSUQwZ01Ec2dhaUE4SUdsdWNIVjBUR1Z1WjNSb095QXJLMm9wSUh0Y2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEZaaGJIVmxJRDBnYVc1d2RYUmJhbDA3WEc1Y2JseDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUldZV3gxWlNBOElHNGdKaVlnS3l0a1pXeDBZU0ErSUcxaGVFbHVkQ2tnZTF4dVhIUmNkRngwWEhSY2RHVnljbTl5S0NkdmRtVnlabXh2ZHljcE8xeHVYSFJjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SV1lXeDFaU0E5UFNCdUtTQjdYRzVjZEZ4MFhIUmNkRngwTHk4Z1VtVndjbVZ6Wlc1MElHUmxiSFJoSUdGeklHRWdaMlZ1WlhKaGJHbDZaV1FnZG1GeWFXRmliR1V0YkdWdVozUm9JR2x1ZEdWblpYSmNibHgwWEhSY2RGeDBYSFJtYjNJZ0tIRWdQU0JrWld4MFlTd2dheUE5SUdKaGMyVTdJQzhxSUc1dklHTnZibVJwZEdsdmJpQXFMenNnYXlBclBTQmlZWE5sS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIwSUQwZ2F5QThQU0JpYVdGeklEOGdkRTFwYmlBNklDaHJJRDQ5SUdKcFlYTWdLeUIwVFdGNElEOGdkRTFoZUNBNklHc2dMU0JpYVdGektUdGNibHgwWEhSY2RGeDBYSFJjZEdsbUlDaHhJRHdnZENrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwWEhSaWNtVmhhenRjYmx4MFhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFJjZEhGTmFXNTFjMVFnUFNCeElDMGdkRHRjYmx4MFhIUmNkRngwWEhSY2RHSmhjMlZOYVc1MWMxUWdQU0JpWVhObElDMGdkRHRjYmx4MFhIUmNkRngwWEhSY2RHOTFkSEIxZEM1d2RYTm9LRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUnpkSEpwYm1kR2NtOXRRMmhoY2tOdlpHVW9aR2xuYVhSVWIwSmhjMmxqS0hRZ0t5QnhUV2x1ZFhOVUlDVWdZbUZ6WlUxcGJuVnpWQ3dnTUNrcFhHNWNkRngwWEhSY2RGeDBYSFFwTzF4dVhIUmNkRngwWEhSY2RGeDBjU0E5SUdac2IyOXlLSEZOYVc1MWMxUWdMeUJpWVhObFRXbHVkWE5VS1R0Y2JseDBYSFJjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRngwWEhSdmRYUndkWFF1Y0hWemFDaHpkSEpwYm1kR2NtOXRRMmhoY2tOdlpHVW9aR2xuYVhSVWIwSmhjMmxqS0hFc0lEQXBLU2s3WEc1Y2RGeDBYSFJjZEZ4MFltbGhjeUE5SUdGa1lYQjBLR1JsYkhSaExDQm9ZVzVrYkdWa1ExQkRiM1Z1ZEZCc2RYTlBibVVzSUdoaGJtUnNaV1JEVUVOdmRXNTBJRDA5SUdKaGMybGpUR1Z1WjNSb0tUdGNibHgwWEhSY2RGeDBYSFJrWld4MFlTQTlJREE3WEc1Y2RGeDBYSFJjZEZ4MEt5dG9ZVzVrYkdWa1ExQkRiM1Z1ZER0Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUXJLMlJsYkhSaE8xeHVYSFJjZEZ4MEt5dHVPMXh1WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCdmRYUndkWFF1YW05cGJpZ25KeWs3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1EyOXVkbVZ5ZEhNZ1lTQlFkVzU1WTI5a1pTQnpkSEpwYm1jZ2NtVndjbVZ6Wlc1MGFXNW5JR0VnWkc5dFlXbHVJRzVoYldVZ2IzSWdZVzRnWlcxaGFXd2dZV1JrY21WemMxeHVYSFFnS2lCMGJ5QlZibWxqYjJSbExpQlBibXg1SUhSb1pTQlFkVzU1WTI5a1pXUWdjR0Z5ZEhNZ2IyWWdkR2hsSUdsdWNIVjBJSGRwYkd3Z1ltVWdZMjl1ZG1WeWRHVmtMQ0JwTG1VdVhHNWNkQ0FxSUdsMElHUnZaWE51SjNRZ2JXRjBkR1Z5SUdsbUlIbHZkU0JqWVd4c0lHbDBJRzl1SUdFZ2MzUnlhVzVuSUhSb1lYUWdhR0Z6SUdGc2NtVmhaSGtnWW1WbGJseHVYSFFnS2lCamIyNTJaWEowWldRZ2RHOGdWVzVwWTI5a1pTNWNibHgwSUNvZ1FHMWxiV0psY2s5bUlIQjFibmxqYjJSbFhHNWNkQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JwYm5CMWRDQlVhR1VnVUhWdWVXTnZaR1ZrSUdSdmJXRnBiaUJ1WVcxbElHOXlJR1Z0WVdsc0lHRmtaSEpsYzNNZ2RHOWNibHgwSUNvZ1kyOXVkbVZ5ZENCMGJ5QlZibWxqYjJSbExseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1UzUnlhVzVuZlNCVWFHVWdWVzVwWTI5a1pTQnlaWEJ5WlhObGJuUmhkR2x2YmlCdlppQjBhR1VnWjJsMlpXNGdVSFZ1ZVdOdlpHVmNibHgwSUNvZ2MzUnlhVzVuTGx4dVhIUWdLaTljYmx4MFpuVnVZM1JwYjI0Z2RHOVZibWxqYjJSbEtHbHVjSFYwS1NCN1hHNWNkRngwY21WMGRYSnVJRzFoY0VSdmJXRnBiaWhwYm5CMWRDd2dablZ1WTNScGIyNG9jM1J5YVc1bktTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NtVm5aWGhRZFc1NVkyOWtaUzUwWlhOMEtITjBjbWx1WnlsY2JseDBYSFJjZEZ4MFB5QmtaV052WkdVb2MzUnlhVzVuTG5Oc2FXTmxLRFFwTG5SdlRHOTNaWEpEWVhObEtDa3BYRzVjZEZ4MFhIUmNkRG9nYzNSeWFXNW5PMXh1WEhSY2RIMHBPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVOdmJuWmxjblJ6SUdFZ1ZXNXBZMjlrWlNCemRISnBibWNnY21Wd2NtVnpaVzUwYVc1bklHRWdaRzl0WVdsdUlHNWhiV1VnYjNJZ1lXNGdaVzFoYVd3Z1lXUmtjbVZ6Y3lCMGIxeHVYSFFnS2lCUWRXNTVZMjlrWlM0Z1QyNXNlU0IwYUdVZ2JtOXVMVUZUUTBsSklIQmhjblJ6SUc5bUlIUm9aU0JrYjIxaGFXNGdibUZ0WlNCM2FXeHNJR0psSUdOdmJuWmxjblJsWkN4Y2JseDBJQ29nYVM1bExpQnBkQ0JrYjJWemJpZDBJRzFoZEhSbGNpQnBaaUI1YjNVZ1kyRnNiQ0JwZENCM2FYUm9JR0VnWkc5dFlXbHVJSFJvWVhRbmN5QmhiSEpsWVdSNUlHbHVYRzVjZENBcUlFRlRRMGxKTGx4dVhIUWdLaUJBYldWdFltVnlUMllnY0hWdWVXTnZaR1ZjYmx4MElDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlHbHVjSFYwSUZSb1pTQmtiMjFoYVc0Z2JtRnRaU0J2Y2lCbGJXRnBiQ0JoWkdSeVpYTnpJSFJ2SUdOdmJuWmxjblFzSUdGeklHRmNibHgwSUNvZ1ZXNXBZMjlrWlNCemRISnBibWN1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHRUZEhKcGJtZDlJRlJvWlNCUWRXNTVZMjlrWlNCeVpYQnlaWE5sYm5SaGRHbHZiaUJ2WmlCMGFHVWdaMmwyWlc0Z1pHOXRZV2x1SUc1aGJXVWdiM0pjYmx4MElDb2daVzFoYVd3Z1lXUmtjbVZ6Y3k1Y2JseDBJQ292WEc1Y2RHWjFibU4wYVc5dUlIUnZRVk5EU1Vrb2FXNXdkWFFwSUh0Y2JseDBYSFJ5WlhSMWNtNGdiV0Z3Ukc5dFlXbHVLR2x1Y0hWMExDQm1kVzVqZEdsdmJpaHpkSEpwYm1jcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCeVpXZGxlRTV2YmtGVFEwbEpMblJsYzNRb2MzUnlhVzVuS1Z4dVhIUmNkRngwWEhRL0lDZDRiaTB0SnlBcklHVnVZMjlrWlNoemRISnBibWNwWEc1Y2RGeDBYSFJjZERvZ2MzUnlhVzVuTzF4dVhIUmNkSDBwTzF4dVhIUjlYRzVjYmx4MEx5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMU292WEc1Y2JseDBMeW9xSUVSbFptbHVaU0IwYUdVZ2NIVmliR2xqSUVGUVNTQXFMMXh1WEhSd2RXNTVZMjlrWlNBOUlIdGNibHgwWEhRdktpcGNibHgwWEhRZ0tpQkJJSE4wY21sdVp5QnlaWEJ5WlhObGJuUnBibWNnZEdobElHTjFjbkpsYm5RZ1VIVnVlV052WkdVdWFuTWdkbVZ5YzJsdmJpQnVkVzFpWlhJdVhHNWNkRngwSUNvZ1FHMWxiV0psY2s5bUlIQjFibmxqYjJSbFhHNWNkRngwSUNvZ1FIUjVjR1VnVTNSeWFXNW5YRzVjZEZ4MElDb3ZYRzVjZEZ4MEozWmxjbk5wYjI0bk9pQW5NUzR6TGpJbkxGeHVYSFJjZEM4cUtseHVYSFJjZENBcUlFRnVJRzlpYW1WamRDQnZaaUJ0WlhSb2IyUnpJSFJ2SUdOdmJuWmxjblFnWm5KdmJTQktZWFpoVTJOeWFYQjBKM01nYVc1MFpYSnVZV3dnWTJoaGNtRmpkR1Z5WEc1Y2RGeDBJQ29nY21Wd2NtVnpaVzUwWVhScGIyNGdLRlZEVXkweUtTQjBieUJWYm1samIyUmxJR052WkdVZ2NHOXBiblJ6TENCaGJtUWdZbUZqYXk1Y2JseDBYSFFnS2lCQWMyVmxJRHhvZEhSd2N6b3ZMMjFoZEdocFlYTmllVzVsYm5NdVltVXZibTkwWlhNdmFtRjJZWE5qY21sd2RDMWxibU52WkdsdVp6NWNibHgwWEhRZ0tpQkFiV1Z0WW1WeVQyWWdjSFZ1ZVdOdlpHVmNibHgwWEhRZ0tpQkFkSGx3WlNCUFltcGxZM1JjYmx4MFhIUWdLaTljYmx4MFhIUW5kV056TWljNklIdGNibHgwWEhSY2RDZGtaV052WkdVbk9pQjFZM015WkdWamIyUmxMRnh1WEhSY2RGeDBKMlZ1WTI5a1pTYzZJSFZqY3pKbGJtTnZaR1ZjYmx4MFhIUjlMRnh1WEhSY2RDZGtaV052WkdVbk9pQmtaV052WkdVc1hHNWNkRngwSjJWdVkyOWtaU2M2SUdWdVkyOWtaU3hjYmx4MFhIUW5kRzlCVTBOSlNTYzZJSFJ2UVZORFNVa3NYRzVjZEZ4MEozUnZWVzVwWTI5a1pTYzZJSFJ2Vlc1cFkyOWtaVnh1WEhSOU8xeHVYRzVjZEM4cUtpQkZlSEJ2YzJVZ1lIQjFibmxqYjJSbFlDQXFMMXh1WEhRdkx5QlRiMjFsSUVGTlJDQmlkV2xzWkNCdmNIUnBiV2w2WlhKekxDQnNhV3RsSUhJdWFuTXNJR05vWldOcklHWnZjaUJ6Y0dWamFXWnBZeUJqYjI1a2FYUnBiMjRnY0dGMGRHVnlibk5jYmx4MEx5OGdiR2xyWlNCMGFHVWdabTlzYkc5M2FXNW5PbHh1WEhScFppQW9YRzVjZEZ4MGRIbHdaVzltSUdSbFptbHVaU0E5UFNBblpuVnVZM1JwYjI0bklDWW1YRzVjZEZ4MGRIbHdaVzltSUdSbFptbHVaUzVoYldRZ1BUMGdKMjlpYW1WamRDY2dKaVpjYmx4MFhIUmtaV1pwYm1VdVlXMWtYRzVjZENrZ2UxeHVYSFJjZEdSbFptbHVaU2duY0hWdWVXTnZaR1VuTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RISmxkSFZ5YmlCd2RXNTVZMjlrWlR0Y2JseDBYSFI5S1R0Y2JseDBmU0JsYkhObElHbG1JQ2htY21WbFJYaHdiM0owY3lBbUppQm1jbVZsVFc5a2RXeGxLU0I3WEc1Y2RGeDBhV1lnS0cxdlpIVnNaUzVsZUhCdmNuUnpJRDA5SUdaeVpXVkZlSEJ2Y25SektTQjdJQzh2SUdsdUlFNXZaR1V1YW5NZ2IzSWdVbWx1WjI5S1V5QjJNQzQ0TGpBclhHNWNkRngwWEhSbWNtVmxUVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQndkVzU1WTI5a1pUdGNibHgwWEhSOUlHVnNjMlVnZXlBdkx5QnBiaUJPWVhKM2FHRnNJRzl5SUZKcGJtZHZTbE1nZGpBdU55NHdMVnh1WEhSY2RGeDBabTl5SUNoclpYa2dhVzRnY0hWdWVXTnZaR1VwSUh0Y2JseDBYSFJjZEZ4MGNIVnVlV052WkdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTQW1KaUFvWm5KbFpVVjRjRzl5ZEhOYmEyVjVYU0E5SUhCMWJubGpiMlJsVzJ0bGVWMHBPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlNCbGJITmxJSHNnTHk4Z2FXNGdVbWhwYm04Z2IzSWdZU0IzWldJZ1luSnZkM05sY2x4dVhIUmNkSEp2YjNRdWNIVnVlV052WkdVZ1BTQndkVzU1WTI5a1pUdGNibHgwZlZ4dVhHNTlLSFJvYVhNcEtUdGNibHh1WEc1Y2JpOHZMeTh2THk4dkx5OHZMeTh2THk4dkwxeHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaTh2SUM0dmZpOTFjbXd2Zmk5d2RXNTVZMjlrWlM5d2RXNTVZMjlrWlM1cWMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01URmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SURJZ015SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzVjZEdsbUtDRnRiMlIxYkdVdWQyVmljR0ZqYTFCdmJIbG1hV3hzS1NCN1hHNWNkRngwYlc5a2RXeGxMbVJsY0hKbFkyRjBaU0E5SUdaMWJtTjBhVzl1S0NrZ2UzMDdYRzVjZEZ4MGJXOWtkV3hsTG5CaGRHaHpJRDBnVzEwN1hHNWNkRngwTHk4Z2JXOWtkV3hsTG5CaGNtVnVkQ0E5SUhWdVpHVm1hVzVsWkNCaWVTQmtaV1poZFd4MFhHNWNkRngwYlc5a2RXeGxMbU5vYVd4a2NtVnVJRDBnVzEwN1hHNWNkRngwYlc5a2RXeGxMbmRsWW5CaFkydFFiMng1Wm1sc2JDQTlJREU3WEc1Y2RIMWNibHgwY21WMGRYSnVJRzF2WkhWc1pUdGNibjFjYmx4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDaDNaV0p3WVdOcktTOWlkV2xzWkdsdUwyMXZaSFZzWlM1cWMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01USmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SURJZ015SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVaWGh3YjNKMGN5NWtaV052WkdVZ1BTQmxlSEJ2Y25SekxuQmhjbk5sSUQwZ2NtVnhkV2x5WlNnbkxpOWtaV052WkdVbktUdGNibVY0Y0c5eWRITXVaVzVqYjJSbElEMGdaWGh3YjNKMGN5NXpkSEpwYm1kcFpua2dQU0J5WlhGMWFYSmxLQ2N1TDJWdVkyOWtaU2NwTzF4dVhHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTkrTDNGMVpYSjVjM1J5YVc1bkwybHVaR1Y0TG1welhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBeE0xeHVMeThnYlc5a2RXeGxJR05vZFc1cmN5QTlJREVnTWlBeklpd2lMeThnUTI5d2VYSnBaMmgwSUVwdmVXVnVkQ3dnU1c1akxpQmhibVFnYjNSb1pYSWdUbTlrWlNCamIyNTBjbWxpZFhSdmNuTXVYRzR2TDF4dUx5OGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRmNiaTh2SUdOdmNIa2diMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCa2IyTjFiV1Z1ZEdGMGFXOXVJR1pwYkdWeklDaDBhR1ZjYmk4dklGd2lVMjltZEhkaGNtVmNJaWtzSUhSdklHUmxZV3dnYVc0Z2RHaGxJRk52Wm5SM1lYSmxJSGRwZEdodmRYUWdjbVZ6ZEhKcFkzUnBiMjRzSUdsdVkyeDFaR2x1WjF4dUx5OGdkMmwwYUc5MWRDQnNhVzFwZEdGMGFXOXVJSFJvWlNCeWFXZG9kSE1nZEc4Z2RYTmxMQ0JqYjNCNUxDQnRiMlJwWm5rc0lHMWxjbWRsTENCd2RXSnNhWE5vTEZ4dUx5OGdaR2x6ZEhKcFluVjBaU3dnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JSFJvWlNCVGIyWjBkMkZ5WlN3Z1lXNWtJSFJ2SUhCbGNtMXBkRnh1THk4Z2NHVnljMjl1Y3lCMGJ5QjNhRzl0SUhSb1pTQlRiMlowZDJGeVpTQnBjeUJtZFhKdWFYTm9aV1FnZEc4Z1pHOGdjMjhzSUhOMVltcGxZM1FnZEc4Z2RHaGxYRzR2THlCbWIyeHNiM2RwYm1jZ1kyOXVaR2wwYVc5dWN6cGNiaTh2WEc0dkx5QlVhR1VnWVdKdmRtVWdZMjl3ZVhKcFoyaDBJRzV2ZEdsalpTQmhibVFnZEdocGN5QndaWEp0YVhOemFXOXVJRzV2ZEdsalpTQnphR0ZzYkNCaVpTQnBibU5zZFdSbFpGeHVMeThnYVc0Z1lXeHNJR052Y0dsbGN5QnZjaUJ6ZFdKemRHRnVkR2xoYkNCd2IzSjBhVzl1Y3lCdlppQjBhR1VnVTI5bWRIZGhjbVV1WEc0dkwxeHVMeThnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVTF4dUx5OGdUMUlnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmx4dUx5OGdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxDQkdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUbHh1THk4Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRklFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc1hHNHZMeUJFUVUxQlIwVlRJRTlTSUU5VVNFVlNJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSmNiaTh2SUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MQ0JQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VWY2JpOHZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRpQlVTRVVnVTA5R1ZGZEJVa1V1WEc1Y2JpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5OGdTV1lnYjJKcUxtaGhjMDkzYmxCeWIzQmxjblI1SUdoaGN5QmlaV1Z1SUc5MlpYSnlhV1JrWlc0c0lIUm9aVzRnWTJGc2JHbHVaMXh1THk4Z2IySnFMbWhoYzA5M2JsQnliM0JsY25SNUtIQnliM0FwSUhkcGJHd2dZbkpsWVdzdVhHNHZMeUJUWldVNklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXFiM2xsYm5RdmJtOWtaUzlwYzNOMVpYTXZNVGN3TjF4dVpuVnVZM1JwYjI0Z2FHRnpUM2R1VUhKdmNHVnlkSGtvYjJKcUxDQndjbTl3S1NCN1hHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxTENCd2NtOXdLVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHhjeXdnYzJWd0xDQmxjU3dnYjNCMGFXOXVjeWtnZTF4dUlDQnpaWEFnUFNCelpYQWdmSHdnSnlZbk8xeHVJQ0JsY1NBOUlHVnhJSHg4SUNjOUp6dGNiaUFnZG1GeUlHOWlhaUE5SUh0OU8xeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2NYTWdJVDA5SUNkemRISnBibWNuSUh4OElIRnpMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJSDFjYmx4dUlDQjJZWElnY21WblpYaHdJRDBnTDF4Y0t5OW5PMXh1SUNCeGN5QTlJSEZ6TG5Od2JHbDBLSE5sY0NrN1hHNWNiaUFnZG1GeUlHMWhlRXRsZVhNZ1BTQXhNREF3TzF4dUlDQnBaaUFvYjNCMGFXOXVjeUFtSmlCMGVYQmxiMllnYjNCMGFXOXVjeTV0WVhoTFpYbHpJRDA5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUcxaGVFdGxlWE1nUFNCdmNIUnBiMjV6TG0xaGVFdGxlWE03WEc0Z0lIMWNibHh1SUNCMllYSWdiR1Z1SUQwZ2NYTXViR1Z1WjNSb08xeHVJQ0F2THlCdFlYaExaWGx6SUR3OUlEQWdiV1ZoYm5NZ2RHaGhkQ0IzWlNCemFHOTFiR1FnYm05MElHeHBiV2wwSUd0bGVYTWdZMjkxYm5SY2JpQWdhV1lnS0cxaGVFdGxlWE1nUGlBd0lDWW1JR3hsYmlBK0lHMWhlRXRsZVhNcElIdGNiaUFnSUNCc1pXNGdQU0J0WVhoTFpYbHpPMXh1SUNCOVhHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNDdJQ3NyYVNrZ2UxeHVJQ0FnSUhaaGNpQjRJRDBnY1hOYmFWMHVjbVZ3YkdGalpTaHlaV2RsZUhBc0lDY2xNakFuS1N4Y2JpQWdJQ0FnSUNBZ2FXUjRJRDBnZUM1cGJtUmxlRTltS0dWeEtTeGNiaUFnSUNBZ0lDQWdhM04wY2l3Z2RuTjBjaXdnYXl3Z2RqdGNibHh1SUNBZ0lHbG1JQ2hwWkhnZ1BqMGdNQ2tnZTF4dUlDQWdJQ0FnYTNOMGNpQTlJSGd1YzNWaWMzUnlLREFzSUdsa2VDazdYRzRnSUNBZ0lDQjJjM1J5SUQwZ2VDNXpkV0p6ZEhJb2FXUjRJQ3NnTVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR3R6ZEhJZ1BTQjRPMXh1SUNBZ0lDQWdkbk4wY2lBOUlDY25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lHc2dQU0JrWldOdlpHVlZVa2xEYjIxd2IyNWxiblFvYTNOMGNpazdYRzRnSUNBZ2RpQTlJR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2gyYzNSeUtUdGNibHh1SUNBZ0lHbG1JQ2doYUdGelQzZHVVSEp2Y0dWeWRIa29iMkpxTENCcktTa2dlMXh1SUNBZ0lDQWdiMkpxVzJ0ZElEMGdkanRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2IySnFXMnRkS1NrZ2UxeHVJQ0FnSUNBZ2IySnFXMnRkTG5CMWMyZ29kaWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHOWlhbHRyWFNBOUlGdHZZbXBiYTEwc0lIWmRPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZZbW83WEc1OU8xeHVYRzVjYmx4dUx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVseHVMeThnTGk5K0wzRjFaWEo1YzNSeWFXNW5MMlJsWTI5a1pTNXFjMXh1THk4Z2JXOWtkV3hsSUdsa0lEMGdNVFJjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBeElESWdNeUlzSWk4dklFTnZjSGx5YVdkb2RDQktiM2xsYm5Rc0lFbHVZeTRnWVc1a0lHOTBhR1Z5SUU1dlpHVWdZMjl1ZEhKcFluVjBiM0p6TGx4dUx5OWNiaTh2SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoWEc0dkx5QmpiM0I1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaRzlqZFcxbGJuUmhkR2x2YmlCbWFXeGxjeUFvZEdobFhHNHZMeUJjSWxOdlpuUjNZWEpsWENJcExDQjBieUJrWldGc0lHbHVJSFJvWlNCVGIyWjBkMkZ5WlNCM2FYUm9iM1YwSUhKbGMzUnlhV04wYVc5dUxDQnBibU5zZFdScGJtZGNiaTh2SUhkcGRHaHZkWFFnYkdsdGFYUmhkR2x2YmlCMGFHVWdjbWxuYUhSeklIUnZJSFZ6WlN3Z1kyOXdlU3dnYlc5a2FXWjVMQ0J0WlhKblpTd2djSFZpYkdsemFDeGNiaTh2SUdScGMzUnlhV0oxZEdVc0lITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXNJR0Z1WkNCMGJ5QndaWEp0YVhSY2JpOHZJSEJsY25OdmJuTWdkRzhnZDJodmJTQjBhR1VnVTI5bWRIZGhjbVVnYVhNZ1puVnlibWx6YUdWa0lIUnZJR1J2SUhOdkxDQnpkV0pxWldOMElIUnZJSFJvWlZ4dUx5OGdabTlzYkc5M2FXNW5JR052Ym1ScGRHbHZibk02WEc0dkwxeHVMeThnVkdobElHRmliM1psSUdOdmNIbHlhV2RvZENCdWIzUnBZMlVnWVc1a0lIUm9hWE1nY0dWeWJXbHpjMmx2YmlCdWIzUnBZMlVnYzJoaGJHd2dZbVVnYVc1amJIVmtaV1JjYmk4dklHbHVJR0ZzYkNCamIzQnBaWE1nYjNJZ2MzVmljM1JoYm5ScFlXd2djRzl5ZEdsdmJuTWdiMllnZEdobElGTnZablIzWVhKbExseHVMeTljYmk4dklGUklSU0JUVDBaVVYwRlNSU0JKVXlCUVVrOVdTVVJGUkNCY0lrRlRJRWxUWENJc0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkZrZ1QwWWdRVTVaSUV0SlRrUXNJRVZZVUZKRlUxTmNiaTh2SUU5U0lFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWmNiaTh2SUUxRlVrTklRVTVVUVVKSlRFbFVXU3dnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U1Y2JpOHZJRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSU0JCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MRnh1THk4Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTWEc0dkx5QlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN3Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZYRzR2THlCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTRnVkVoRklGTlBSbFJYUVZKRkxseHVYRzRuZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCemRISnBibWRwWm5sUWNtbHRhWFJwZG1VZ1BTQm1kVzVqZEdsdmJpaDJLU0I3WEc0Z0lITjNhWFJqYUNBb2RIbHdaVzltSUhZcElIdGNiaUFnSUNCallYTmxJQ2R6ZEhKcGJtY25PbHh1SUNBZ0lDQWdjbVYwZFhKdUlIWTdYRzVjYmlBZ0lDQmpZWE5sSUNkaWIyOXNaV0Z1SnpwY2JpQWdJQ0FnSUhKbGRIVnliaUIySUQ4Z0ozUnlkV1VuSURvZ0oyWmhiSE5sSnp0Y2JseHVJQ0FnSUdOaGMyVWdKMjUxYldKbGNpYzZYRzRnSUNBZ0lDQnlaWFIxY200Z2FYTkdhVzVwZEdVb2Rpa2dQeUIySURvZ0p5YzdYRzVjYmlBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ2NtVjBkWEp1SUNjbk8xeHVJQ0I5WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLRzlpYWl3Z2MyVndMQ0JsY1N3Z2JtRnRaU2tnZTF4dUlDQnpaWEFnUFNCelpYQWdmSHdnSnlZbk8xeHVJQ0JsY1NBOUlHVnhJSHg4SUNjOUp6dGNiaUFnYVdZZ0tHOWlhaUE5UFQwZ2JuVnNiQ2tnZTF4dUlDQWdJRzlpYWlBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQlBZbXBsWTNRdWEyVjVjeWh2WW1vcExtMWhjQ2htZFc1amRHbHZiaWhyS1NCN1hHNGdJQ0FnSUNCMllYSWdhM01nUFNCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb2MzUnlhVzVuYVdaNVVISnBiV2wwYVhabEtHc3BLU0FySUdWeE8xeHVJQ0FnSUNBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2IySnFXMnRkS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2IySnFXMnRkTG0xaGNDaG1kVzVqZEdsdmJpaDJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUd0eklDc2daVzVqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSE4wY21sdVoybG1lVkJ5YVcxcGRHbDJaU2gyS1NrN1hHNGdJQ0FnSUNBZ0lIMHBMbXB2YVc0b2MyVndLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnJjeUFySUdWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoemRISnBibWRwWm5sUWNtbHRhWFJwZG1Vb2IySnFXMnRkS1NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrdWFtOXBiaWh6WlhBcE8xeHVYRzRnSUgxY2JseHVJQ0JwWmlBb0lXNWhiV1VwSUhKbGRIVnliaUFuSnp0Y2JpQWdjbVYwZFhKdUlHVnVZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaHpkSEpwYm1kcFpubFFjbWx0YVhScGRtVW9ibUZ0WlNrcElDc2daWEVnSzF4dUlDQWdJQ0FnSUNBZ1pXNWpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtITjBjbWx1WjJsbWVWQnlhVzFwZEdsMlpTaHZZbW9wS1R0Y2JuMDdYRzVjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwzNHZjWFZsY25semRISnBibWN2Wlc1amIyUmxMbXB6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0F4TlZ4dUx5OGdiVzlrZFd4bElHTm9kVzVyY3lBOUlERWdNaUF6SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN1hHNWNiblpoY2lCZlZYUnBiSE5YYVc1a2IzY2dQU0J5WlhGMWFYSmxLRndpTGk5VmRHbHNjMWRwYm1SdmQxd2lLVHRjYmx4dWRtRnlJRjlWZEdsc2MxZHBibVJ2ZHpJZ1BTQmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwS0Y5VmRHbHNjMWRwYm1SdmR5azdYRzVjYm1aMWJtTjBhVzl1SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9iMkpxS1NCN0lISmxkSFZ5YmlCdlltb2dKaVlnYjJKcUxsOWZaWE5OYjJSMWJHVWdQeUJ2WW1vZ09pQjdJR1JsWm1GMWJIUTZJRzlpYWlCOU95QjlYRzVjYm1aMWJtTjBhVzl1SUY5amJHRnpjME5oYkd4RGFHVmpheWhwYm5OMFlXNWpaU3dnUTI5dWMzUnlkV04wYjNJcElIc2dhV1lnS0NFb2FXNXpkR0Z1WTJVZ2FXNXpkR0Z1WTJWdlppQkRiMjV6ZEhKMVkzUnZjaWtwSUhzZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa05oYm01dmRDQmpZV3hzSUdFZ1kyeGhjM01nWVhNZ1lTQm1kVzVqZEdsdmJsd2lLVHNnZlNCOVhHNWNiaThxS2x4dUlDb2dRMnhoYzNNZ1ptOXlJSGR2Y210cGJtY2dkMmwwYUNCa2IyTjFiV1Z1ZEZ4dUlDb3ZYRzUyWVhJZ1JHOWpkVzFsYm5RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdablZ1WTNScGIyNGdSRzlqZFcxbGJuUW9LU0I3WEc0Z0lDQWdJQ0FnSUY5amJHRnpjME5oYkd4RGFHVmpheWgwYUdsekxDQkViMk4xYldWdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwSUdSdlkzVnRaVzUwSUdobGFXZG9kRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHR1ZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1JHOWpkVzFsYm5RdVoyVjBTR1ZwWjJoMElEMGdablZ1WTNScGIyNGdaMlYwU0dWcFoyaDBLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiMkpxVjJsdVpHOTNJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURBZ0ppWWdZWEpuZFcxbGJuUnpXekJkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTUYwZ09pQjNhVzVrYjNjN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0Y5VmRHbHNjMWRwYm1SdmR6SXVaR1ZtWVhWc2RDNXBjMWRwYm1SdmR5aHZZbXBYYVc1a2IzY3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV0WVhnb2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNTR1ZwWjJoMExDQnZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTmpjbTlzYkVobGFXZG9kQ3dnYjJKcVYybHVaRzkzTG1SdlkzVnRaVzUwTG1KdlpIa3ViMlptYzJWMFNHVnBaMmgwTENCdlltcFhhVzVrYjNjdVpHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG05bVpuTmxkRWhsYVdkb2RDd2diMkpxVjJsdVpHOTNMbVJ2WTNWdFpXNTBMbUp2WkhrdVkyeHBaVzUwU0dWcFoyaDBMQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbU5zYVdWdWRFaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdUbUZPTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdaRzlqZFcxbGJuUWdkMmxrZEdoY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN2JuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCRWIyTjFiV1Z1ZEM1blpYUlhhV1IwYUNBOUlHWjFibU4wYVc5dUlHZGxkRmRwWkhSb0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IySnFWMmx1Wkc5M0lEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREFnSmlZZ1lYSm5kVzFsYm5Seld6QmRJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QmhjbWQxYldWdWRITmJNRjBnT2lCM2FXNWtiM2M3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRjlWZEdsc2MxZHBibVJ2ZHpJdVpHVm1ZWFZzZEM1cGMxZHBibVJ2ZHlodlltcFhhVzVrYjNjcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXRZWGdvYjJKcVYybHVaRzkzTG1SdlkzVnRaVzUwTG1KdlpIa3VjMk55YjJ4c1YybGtkR2dzSUc5aWFsZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWMmxrZEdnc0lHOWlhbGRwYm1SdmR5NWtiMk4xYldWdWRDNWliMlI1TG05bVpuTmxkRmRwWkhSb0xDQnZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtOW1abk5sZEZkcFpIUm9MQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SWGFXUjBhQ3dnYjJKcVYybHVaRzkzTG1SdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVqYkdsbGJuUlhhV1IwYUNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdUbUZPTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdaRzlqZFcxbGJuUWdkRzl3SUhOamNtOXNiRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnZZbXBYYVc1a2IzZGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFUnZZM1Z0Wlc1MExtZGxkRk5qY205c2JGUnZjQ0E5SUdaMWJtTjBhVzl1SUdkbGRGTmpjbTlzYkZSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOWlhbGRwYm1SdmR5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF3SUNZbUlHRnlaM1Z0Wlc1MGMxc3dYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekJkSURvZ2QybHVaRzkzTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hmVlhScGJITlhhVzVrYjNjeUxtUmxabUYxYkhRdWFYTlhhVzVrYjNjb2IySnFWMmx1Wkc5M0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFsZHBibVJ2ZHk1d1lXZGxXVTltWm5ObGRDQjhmQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBJQ1ltSUc5aWFsZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUh4OElHOWlhbGRwYm1SdmR5NWtiMk4xYldWdWRDNWliMlI1SUNZbUlHOWlhbGRwYm1SdmR5NWtiMk4xYldWdWRDNWliMlI1TG5OamNtOXNiRlJ2Y0R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQmtiMk4xYldWdWRDQnNaV1owSUhOamNtOXNiRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnZZbXBYYVc1a2IzZGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFUnZZM1Z0Wlc1MExtZGxkRk5qY205c2JFeGxablFnUFNCbWRXNWpkR2x2YmlCblpYUlRZM0p2Ykd4TVpXWjBLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiMkpxVjJsdVpHOTNJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURBZ0ppWWdZWEpuZFcxbGJuUnpXekJkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTUYwZ09pQjNhVzVrYjNjN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0Y5VmRHbHNjMWRwYm1SdmR6SXVaR1ZtWVhWc2RDNXBjMWRwYm1SdmR5aHZZbXBYYVc1a2IzY3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2IySnFWMmx1Wkc5M0xuQmhaMlZZVDJabWMyVjBJSHg4SUc5aWFsZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblFnSmlZZ2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElIeDhJRzlpYWxkcGJtUnZkeTVrYjJOMWJXVnVkQzVpYjJSNUlDWW1JRzlpYWxkcGJtUnZkeTVrYjJOMWJXVnVkQzVpYjJSNUxuTmpjbTlzYkV4bFpuUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVG1GT08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnWkc5amRXMWxiblFnYzJOeWIyeHNjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnZZbXBYYVc1a2IzZGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdDdiR1ZtZERvZ2JuVnRZbVZ5TENCMGIzQTZJRzUxYldKbGNuMTlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRVJ2WTNWdFpXNTBMbWRsZEZOamNtOXNiQ0E5SUdaMWJtTjBhVzl1SUdkbGRGTmpjbTlzYkNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsZHBibVJ2ZHlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZDJsdVpHOTNPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGZWWFJwYkhOWGFXNWtiM2N5TG1SbFptRjFiSFF1YVhOWGFXNWtiM2NvYjJKcVYybHVaRzkzS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWldaME9pQkViMk4xYldWdWRDNW5aWFJUWTNKdmJHeE1aV1owS0c5aWFsZHBibVJ2ZHlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHOXdPaUJFYjJOMWJXVnVkQzVuWlhSVFkzSnZiR3hVYjNBb2IySnFWMmx1Wkc5M0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1ZtZERvZ1RtRk9MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ1RtRk9YRzRnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCRWIyTjFiV1Z1ZER0Y2JuMG9LVHRjYmx4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1JHOWpkVzFsYm5RN1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlzYVdJdlZYUnBiSE5FYjJOMWJXVnVkQzUwYzF4dUx5OGdiVzlrZFd4bElHbGtJRDBnTVRaY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElnTXlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dUx5b3FYRzRnS2lCRGJHRnpjeUJtYjNJZ2QyOXlhMmx1WnlCM2FYUm9JSGRwYm1SdmQxeHVJQ292WEc1Y2JtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN1hHNWNiblpoY2lCZmRIbHdaVzltSUQwZ2RIbHdaVzltSUZONWJXSnZiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUhSNWNHVnZaaUJUZVcxaWIyd3VhWFJsY21GMGIzSWdQVDA5SUZ3aWMzbHRZbTlzWENJZ1B5Qm1kVzVqZEdsdmJpQW9iMkpxS1NCN0lISmxkSFZ5YmlCMGVYQmxiMllnYjJKcU95QjlJRG9nWm5WdVkzUnBiMjRnS0c5aWFpa2dleUJ5WlhSMWNtNGdiMkpxSUNZbUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCdlltb3VZMjl1YzNSeWRXTjBiM0lnUFQwOUlGTjViV0p2YkNBbUppQnZZbW9nSVQwOUlGTjViV0p2YkM1d2NtOTBiM1I1Y0dVZ1B5QmNJbk41YldKdmJGd2lJRG9nZEhsd1pXOW1JRzlpYWpzZ2ZUdGNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lRMkZ1Ym05MElHTmhiR3dnWVNCamJHRnpjeUJoY3lCaElHWjFibU4wYVc5dVhDSXBPeUI5SUgxY2JseHVkbUZ5SUZkcGJtUnZkeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCWGFXNWtiM2NvS1NCN1hHNGdJQ0FnSUNBZ0lGOWpiR0Z6YzBOaGJHeERhR1ZqYXloMGFHbHpMQ0JYYVc1a2IzY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR2wwSUdseklIZHBibVJ2ZDF4dUlDQWdJQ0FxSUVCd1lYSmhiU0J2WW1wWGFXNWtiM2RjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGZHBibVJ2ZHk1cGMxZHBibVJ2ZHlBOUlHWjFibU4wYVc5dUlHbHpWMmx1Wkc5M0tHOWlhbGRwYm1SdmR5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiMkpxVjJsdVpHOTNJQ1ltSUNoMGVYQmxiMllnYjJKcVYybHVaRzkzSUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1hDSjFibVJsWm1sdVpXUmNJaUE2SUY5MGVYQmxiMllvYjJKcVYybHVaRzkzS1NrZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MElDWW1JRjkwZVhCbGIyWW9iMkpxVjJsdVpHOTNMbVJ2WTNWdFpXNTBLU0E5UFQwZ1hDSnZZbXBsWTNSY0lqdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0IzYVc1a2IzY2dhR1ZwWjJoMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUc5aWFsZHBibVJ2ZDF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVjJsdVpHOTNMbWRsZEVobGFXZG9kQ0E5SUdaMWJtTjBhVzl1SUdkbGRFaGxhV2RvZENncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsZHBibVJ2ZHlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZDJsdVpHOTNPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaFhhVzVrYjNjdWFYTlhhVzVrYjNjb2IySnFWMmx1Wkc5M0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFsZHBibVJ2ZHk1cGJtNWxja2hsYVdkb2RDQjhmQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbU5zYVdWdWRFaGxhV2RvZENCOGZDQnZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVZbTlrZVM1amJHbGxiblJJWldsbmFIUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVG1GT08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnZDJsdVpHOTNJSGRwWkhSb1hHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUc5aWFsZHBibVJ2ZDF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVjJsdVpHOTNMbWRsZEZkcFpIUm9JRDBnWm5WdVkzUnBiMjRnWjJWMFYybGtkR2dvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ2WW1wWGFXNWtiM2NnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJSGRwYm1SdmR6dGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1YybHVaRzkzTG1selYybHVaRzkzS0c5aWFsZHBibVJ2ZHlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wWGFXNWtiM2N1YVc1dVpYSlhhV1IwYUNCOGZDQnZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtTnNhV1Z1ZEZkcFpIUm9JSHg4SUc5aWFsZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1aWIyUjVMbU5zYVdWdWRGZHBaSFJvTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlFNWhUanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElIZHBibVJ2ZHlCemFYcGxjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM3RvWldsbmFIUTZJRzUxYldKbGNpd2dkMmxrZEdnNklHNTFiV0psY24xOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lGZHBibVJ2ZHk1blpYUlRhWHBsY3lBOUlHWjFibU4wYVc5dUlHZGxkRk5wZW1WektDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IySnFWMmx1Wkc5M0lEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREFnSmlZZ1lYSm5kVzFsYm5Seld6QmRJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QmhjbWQxYldWdWRITmJNRjBnT2lCM2FXNWtiM2M3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsYVdkb2REb2dWMmx1Wkc5M0xtZGxkRWhsYVdkb2RDaHZZbXBYYVc1a2IzY3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2QybGtkR2c2SUZkcGJtUnZkeTVuWlhSWGFXUjBhQ2h2WW1wWGFXNWtiM2NwWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJYYVc1a2IzYzdYRzU5S0NrN1hHNWNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRmRwYm1SdmR6dGNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDJ4cFlpOVZkR2xzYzFkcGJtUnZkeTUwYzF4dUx5OGdiVzlrZFd4bElHbGtJRDBnTVRkY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElnTXlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVYRzUyWVhJZ1gzUjVjR1Z2WmlBOUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUlEOGdablZ1WTNScGIyNGdLRzlpYWlrZ2V5QnlaWFIxY200Z2RIbHdaVzltSUc5aWFqc2dmU0E2SUdaMWJtTjBhVzl1SUNodlltb3BJSHNnY21WMGRYSnVJRzlpYWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2IySnFMbU52Ym5OMGNuVmpkRzl5SUQwOVBTQlRlVzFpYjJ3Z0ppWWdiMkpxSUNFOVBTQlRlVzFpYjJ3dWNISnZkRzkwZVhCbElEOGdYQ0p6ZVcxaWIyeGNJaUE2SUhSNWNHVnZaaUJ2WW1vN0lIMDdYRzVjYm5aaGNpQmZWWFJwYkhNZ1BTQnlaWEYxYVhKbEtGd2lMaTlWZEdsc2Mxd2lLVHRjYmx4dWRtRnlJRjlWZEdsc2N6SWdQU0JmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtGOVZkR2xzY3lrN1hHNWNibVoxYm1OMGFXOXVJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb2IySnFLU0I3SUhKbGRIVnliaUJ2WW1vZ0ppWWdiMkpxTGw5ZlpYTk5iMlIxYkdVZ1B5QnZZbW9nT2lCN0lHUmxabUYxYkhRNklHOWlhaUI5T3lCOVhHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2Ymx3aUtUc2dmU0I5WEc1Y2JpOHFLbHh1SUNvZ1EyeGhjM01nWm05eUlIZHZjbXRwYm1jZ2QybDBhQ0JFVDAxY2JpQXFMMXh1ZG1GeUlFUlBUU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCRVQwMG9LU0I3WEc0Z0lDQWdJQ0FnSUY5amJHRnpjME5oYkd4RGFHVmpheWgwYUdsekxDQkVUMDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR2xtSUhaaGNtbGhZbXhsSUdseklHUnZiU0JrYjJOMWJXVnVkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmtiMjFFYjJOMWJXVnVkRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1JFOU5MbWx6UkU5TlJHOWpkVzFsYm5RZ1BTQm1kVzVqZEdsdmJpQnBjMFJQVFVSdlkzVnRaVzUwS0dSdmJVUnZZM1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQWhLQ0ZrYjIxRWIyTjFiV1Z1ZENCOGZDQjBlWEJsYjJZZ1pHOXRSRzlqZFcxbGJuUWdQVDA5SUZ3aVltOXZiR1ZoYmx3aUlIeDhJSFI1Y0dWdlppQmtiMjFFYjJOMWJXVnVkQ0E5UFQwZ1hDSnVkVzFpWlhKY0lpQjhmQ0IwZVhCbGIyWWdaRzl0Ukc5amRXMWxiblFnUFQwOUlGd2ljM1J5YVc1blhDSWdmSHdnWkc5dFJHOWpkVzFsYm5RdWJtOWtaVlI1Y0dVZ0lUMDlJRGtwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUm1sdVpDQmhibVFnZG1Gc2FXUmhkR1VnVG05a1pTQnBiaUJFVDAwZ1JHOWpkVzFsYm5SY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWkc5dFRtOWtaVnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmtiMjFFYjJOMWJXVnVkRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMFZzWlcxbGJuUWdmQ0JpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JFVDAwdVoyVjBSRTlOVG05a1pTQTlJR1oxYm1OMGFXOXVJR2RsZEVSUFRVNXZaR1VvWkc5dFRtOWtaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdaRzl0Ukc5amRXMWxiblFnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01TQW1KaUJoY21kMWJXVnVkSE5iTVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzeFhTQTZJR1J2WTNWdFpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJEYUdWamF5QnBaaUJrYjIxRWIyTjFiV1Z1ZENCcGN5QmhJSFpoYkdsa0lIWmhjbWxoWW14bFhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JwWmlBb0lVUlBUUzVwYzBSUFRVUnZZM1Z0Wlc1MEtHUnZiVVJ2WTNWdFpXNTBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCRGFHVmpheUJwWmlCa2IyMU9iMlJsSUdseklHRWdkbUZzYVdRZ2RtRnlhV0ZpYkdWY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR2xtSUNnaFpHOXRUbTlrWlNCOGZDQjBlWEJsYjJZZ1pHOXRUbTlrWlNBOVBUMGdYQ0ppYjI5c1pXRnVYQ0lnZkh3Z2RIbHdaVzltSUdSdmJVNXZaR1VnUFQwOUlGd2liblZ0WW1WeVhDSWdmSHdnZEhsd1pXOW1JR1J2YlU1dlpHVWdQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nU1dZZ1pHOXRUbTlrWlNCcGN5QmhJSE4wY21sdVp5QnBkQ0J0YVdkb2RDQmlaU0JoYmlCSlJGeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCa2IyMU9iMlJsSUQwOVBTQmNJbk4wY21sdVoxd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMjFPYjJSbElEMGdaRzl0Ukc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9aRzl0VG05a1pTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRU5vWldOcklHbG1JR1J2YlU1dlpHVWdhWE1nWVNCMllXeHBaQ0IyWVhKcFlXSnNaVnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZrYjIxT2IyUmxJSHg4SUdSdmJVNXZaR1V1Ym05a1pWUjVjR1VnSVQwOUlERWdmSHdnSVdSdmJVNXZaR1V1Y0dGeVpXNTBUbTlrWlNCOGZDQmtiMjFPYjJSbExuQmhjbVZ1ZEU1dlpHVXVibTlrWlU1aGJXVWdQVDA5SUZ3aVNGUk5URndpSUh4OElDRmtiMjFFYjJOMWJXVnVkQzVqYjI1MFlXbHVjeWhrYjIxT2IyUmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa2IyMU9iMlJsTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElHVnNaVzFsYm5RZ2MybDZaWE1nWVc1a0lIQnZjMmwwYVc5dVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdSdmJVNXZaR1ZjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaRzl0Ukc5amRXMWxiblJjYmlBZ0lDQWdLaUJBY0dGeVlXMGdjMmh2ZDBadmNtTmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdlMkp2ZEhSdmJUb2diblZ0WW1WeUxDQm9aV2xuYUhRNklHNTFiV0psY2l3Z2JHVm1kRG9nYm5WdFltVnlMQ0J5YVdkb2REb2diblZ0WW1WeUxDQjBiM0E2SUc1MWJXSmxjaXdnZDJsa2RHZzZJRzUxYldKbGNuMTlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRVJQVFM1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUWdQU0JtZFc1amRHbHZiaUJuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRb1pHOXRUbTlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWkc5dFJHOWpkVzFsYm5RZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU0FtSmlCaGNtZDFiV1Z1ZEhOYk1WMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3hYU0E2SUdSdlkzVnRaVzUwTzF4dUlDQWdJQ0FnSUNCMllYSWdjMmh2ZDBadmNtTmxJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURJZ0ppWWdZWEpuZFcxbGJuUnpXekpkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTWwwZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1EzSmxZWFJsSUhKbGMzVnNkQ0J6YVhwbElHRnVaQ0J3YjNOcGRHbHZiaUJ2WW1wbFkzUmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUhaaGNpQnZZbXBTWlhRZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIzUjBiMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21sbmFIUTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiM0E2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzYVdSMGFEb2dNRnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCa2IyMU9iMlJsSUQwZ1JFOU5MbWRsZEVSUFRVNXZaR1VvWkc5dFRtOWtaU3dnWkc5dFJHOWpkVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVdSdmJVNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRjlWZEdsc2N6SXVaR1ZtWVhWc2RDNTNZWEp1S0Z3aVZYUnBiSE11UkU5TkxtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkRG9nUkU5TklHVnNaVzFsYm5RZ1pHOWxjMjRuZENCbGVHbHpkQ0JwYmlCMGFHRjBJRVJQVFNCRWIyTjFiV1Z1ZEZ3aUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wU1pYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYzJodmQwWnZjbU5sSUQwZ0lTRnphRzkzUm05eVkyVTdYRzRnSUNBZ0lDQWdJSFpoY2lCemRIbHNaWE1nUFNCMmIybGtJREE3WEc0Z0lDQWdJQ0FnSUdsbUlDaHphRzkzUm05eVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsY3lBOUlHZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pHOXRUbTlrWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzUjViR1Z6SUNZbUlITjBlV3hsY3k1a2FYTndiR0Y1SUQwOVBTQmNJbTV2Ym1WY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1J2YlU1dlpHVXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlGd2lZbXh2WTJ0Y0lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NXWWdaR1ZtWVhWc2RDQnRaWFJvYjJRZ2FYTWdjM1Z3Y0c5eWRHVmtJSFJvWVc0Z2RYTmxJR2wwWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnBaaUFvWkc5dFRtOWtaUzVuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5aWFsSmxkQ0E5SUdSdmJVNXZaR1V1WjJWMFFtOTFibVJwYm1kRGJHbGxiblJTWldOMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUlFbEZJR2hoWTJ0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdiMkpxVW1WMElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p2ZEhSdmJUb2diMkpxVW1WMExtSnZkSFJ2YlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXbG5hSFE2SUc5aWFsSmxkQzVvWldsbmFIUWdmSHdnWkc5dFRtOWtaUzVqYkdsbGJuUklaV2xuYUhRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVm1kRG9nYjJKcVVtVjBMbXhsWm5Rc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtbG5hSFE2SUc5aWFsSmxkQzV5YVdkb2RDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiM0E2SUc5aWFsSmxkQzUwYjNBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2QybGtkR2c2SUc5aWFsSmxkQzUzYVdSMGFDQjhmQ0JrYjIxT2IyUmxMbU5zYVdWdWRGZHBaSFJvWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQlhjbWwwWlNCMGFHVWdaV3hsYldWdWRDQnBiaUJoSUhSbGJYQnZjbUZ5ZVNCMllYSnBZV0pzWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkc5dFJXeGxiV1Z1ZENBOUlHUnZiVTV2WkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVOaGJHTjFiR0YwWldRZ1ltRnphV01nY0dGeVlXMWxkR1Z5Y3lCdlppQjBhR1VnWld4bGJXVnVkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwOWlhbVZqZEgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUc5aWFrTnZiM0prYVc1aGRHVnpJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobGFXZG9kRG9nWkc5dFJXeGxiV1Z1ZEM1dlptWnpaWFJJWldsbmFIUXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklHUnZiVVZzWlcxbGJuUXViMlptYzJWMFYybGtkR2dzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkJjbVVnY0dGemMyVmtJRzl1SUhSdklHRnNiQ0J3WVhKbGJuUnpJR0Z1WkNCMFlXdGxJR2x1ZEc4Z1lXTmpiM1Z1ZENCMGFHVnBjaUJ2Wm1aelpYUnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUhkb2FXeGxJQ2hrYjIxRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IySnFRMjl2Y21ScGJtRjBaWE11ZUNBclBTQmtiMjFGYkdWdFpXNTBMbTltWm5ObGRFeGxablE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJKcVEyOXZjbVJwYm1GMFpYTXVlU0FyUFNCa2IyMUZiR1Z0Wlc1MExtOW1abk5sZEZSdmNEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMjFGYkdWdFpXNTBJRDBnWkc5dFJXeGxiV1Z1ZEM1dlptWnpaWFJRWVhKbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJBZEhsd1pTQjdUMkpxWldOMGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wU1pYUWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW05MGRHOXRPaUJ2WW1wRGIyOXlaR2x1WVhSbGN5NTVJQ3NnYjJKcVEyOXZjbVJwYm1GMFpYTXVhR1ZwWjJoMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ2IySnFRMjl2Y21ScGJtRjBaWE11YUdWcFoyaDBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsWm5RNklHOWlha052YjNKa2FXNWhkR1Z6TG5nc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtbG5hSFE2SUc5aWFrTnZiM0prYVc1aGRHVnpMbmdnS3lCdlltcERiMjl5WkdsdVlYUmxjeTUzYVdSMGFDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiM0E2SUc5aWFrTnZiM0prYVc1aGRHVnpMbmtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRzlpYWtOdmIzSmthVzVoZEdWekxuZHBaSFJvWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaHphRzkzUm05eVkyVWdKaVlnWkc5dFRtOWtaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaRzl0VG05a1pTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1hDSmNJanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nVW1WMGRYSnVJSE5wZW1VZ1lXNWtJSEJ2YzJsMGFXOXVJRzltSUhSb1pTQmxiR1Z0Wlc1MFhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiMkpxVW1WME8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkdhVzVrSUdWc1pXMWxiblFnY0c5emFYUnBiMjVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaRzl0VG05a1pWeHVJQ0FnSUNBcUlFQndZWEpoYlNCa2IyMUViMk4xYldWdWRGeHVJQ0FnSUNBcUlFQndZWEpoYlNCemFHOTNSbTl5WTJWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0N2RHOXdPaUJ1ZFcxaVpYSXNJR3hsWm5RNklHNTFiV0psY24xOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUkU5TkxtWnBibVJGYkdWdFpXNTBVRzl6YVhScGIyNGdQU0JtZFc1amRHbHZiaUJtYVc1a1JXeGxiV1Z1ZEZCdmMybDBhVzl1S0dSdmJVNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1J2YlVSdlkzVnRaVzUwSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERWdKaVlnWVhKbmRXMWxiblJ6V3pGZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1WMGdPaUJrYjJOMWJXVnVkRHRjYmlBZ0lDQWdJQ0FnZG1GeUlITm9iM2RHYjNKalpTQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF5SUNZbUlHRnlaM1Z0Wlc1MGMxc3lYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekpkSURvZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ2RtRnlJRzlpYWxKbGRDQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxablE2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNBNklEQmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnWkc5dFRtOWtaU0E5SUVSUFRTNW5aWFJFVDAxT2IyUmxLR1J2YlU1dlpHVXNJR1J2YlVSdlkzVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZrYjIxT2IyUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmZWWFJwYkhNeUxtUmxabUYxYkhRdWQyRnliaWhjSWxWMGFXeHpMa1JQVFM1bWFXNWtSV3hsYldWdWRGQnZjMmwwYVc5dU9pQkVUMDBnWld4bGJXVnVkQ0JrYjJWemJpZDBJR1Y0YVhOMElHbHVJSFJvWVhRZ1JFOU5JRVJ2WTNWdFpXNTBYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHOWlhbEpsZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnphRzkzUm05eVkyVWdQU0FoSVhOb2IzZEdiM0pqWlR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0dSdmJVNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemRIbHNaWE1nUFNCMmIybGtJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzJodmQwWnZjbU5sS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6SUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWkc5dFRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBlV3hsY3lBbUppQnpkSGxzWlhNdVpHbHpjR3hoZVNBOVBUMGdYQ0p1YjI1bFhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOXRUbTlrWlM1emRIbHNaUzVrYVhOd2JHRjVJRDBnWENKaWJHOWphMXdpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHOWlhbEpsZEM1c1pXWjBJQ3M5SUdSdmJVNXZaR1V1YjJabWMyVjBUR1ZtZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzlpYWxKbGRDNTBiM0FnS3owZ1pHOXRUbTlrWlM1dlptWnpaWFJVYjNBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjIxT2IyUmxJRDBnWkc5dFRtOWtaUzV2Wm1aelpYUlFZWEpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MyaHZkMFp2Y21ObElDWW1JR1J2YlU1dlpHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjIxT2IyUmxMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQmNJbHdpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wU1pYUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1FnWlhabGJuUWdiR2x6ZEdWdVpYSmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2IySnFYRzRnSUNBZ0lDb2dRSEJoY21GdElHNWhiV1ZjYmlBZ0lDQWdLaUJBY0dGeVlXMGdablZ1WTF4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCRVQwMHVZV1JrUlhabGJuUWdQU0JtZFc1amRHbHZiaUJoWkdSRmRtVnVkQ2h2WW1vc0lHNWhiV1VzSUdaMWJtTXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHOWlhaUFtSmlBb2RIbHdaVzltSUc5aWFpQTlQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JRndpZFc1a1pXWnBibVZrWENJZ09pQmZkSGx3Wlc5bUtHOWlhaWtwSUQwOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUc5aWFpNXViMlJsVkhsd1pTQTlQVDBnTVNBbUppQnZZbW91Y0dGeVpXNTBSV3hsYldWdWRDQW1KaUJ2WW1vdWNHRnlaVzUwUld4bGJXVnVkQzV1YjJSbFRtRnRaU0FoUFQwZ1hDSklWRTFNWENJZ0ppWWdkSGx3Wlc5bUlHNWhiV1VnUFQwOUlGd2ljM1J5YVc1blhDSWdKaVlnZEhsd1pXOW1JR1oxYm1NZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHOWlhaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJKcUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JtRnRaU3dnWm5WdVl5d2dabUZzYzJVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodlltb3VZWFIwWVdOb1JYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdlltb3VZWFIwWVdOb1JYWmxiblFvWENKdmJsd2lJQ3NnYm1GdFpTd2dablZ1WXlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxJR1YyWlc1MElHeHBjM1JsYm1WeVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUc5aWFseHVJQ0FnSUNBcUlFQndZWEpoYlNCdVlXMWxYRzRnSUNBZ0lDb2dRSEJoY21GdElHWjFibU5jYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUkU5TkxuSmxiVzkyWlVWMlpXNTBJRDBnWm5WdVkzUnBiMjRnY21WdGIzWmxSWFpsYm5Rb2IySnFMQ0J1WVcxbExDQm1kVzVqS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1vZ0ppWWdLSFI1Y0dWdlppQnZZbW9nUFQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCY0luVnVaR1ZtYVc1bFpGd2lJRG9nWDNSNWNHVnZaaWh2WW1vcEtTQTlQVDBnWENKdlltcGxZM1JjSWlBbUppQnZZbW91Ym05a1pWUjVjR1VnUFQwOUlERWdKaVlnYjJKcUxuQmhjbVZ1ZEVWc1pXMWxiblFnSmlZZ2IySnFMbkJoY21WdWRFVnNaVzFsYm5RdWJtOWtaVTVoYldVZ0lUMDlJRndpU0ZSTlRGd2lJQ1ltSUhSNWNHVnZaaUJ1WVcxbElEMDlQU0JjSW5OMGNtbHVaMXdpSUNZbUlIUjVjR1Z2WmlCbWRXNWpJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h2WW1vdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzlpYWk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtHNWhiV1VzSUdaMWJtTXNJR1poYkhObEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2IySnFMbVJsZEdGamFFVjJaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IySnFMbVJsZEdGamFFVjJaVzUwS0Z3aWIyNWNJaUFySUc1aGJXVXNJR1oxYm1NcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR2xtSUdWc1pXMWxiblFnYUdGeklHTnNZWE56SUc1aGJXVmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pXeGxiV1Z1ZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqYkdGemMwNWhiV1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JFVDAwdWFHRnpRMnhoYzNOT1lXMWxJRDBnWm5WdVkzUnBiMjRnYUdGelEyeGhjM05PWVcxbEtHVnNaVzFsYm5Rc0lHTnNZWE56VG1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1pXeGxiV1Z1ZENBbUppQW9kSGx3Wlc5bUlHVnNaVzFsYm5RZ1BUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QmNJblZ1WkdWbWFXNWxaRndpSURvZ1gzUjVjR1Z2WmlobGJHVnRaVzUwS1NrZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ2RIbHdaVzltSUdOc1lYTnpUbUZ0WlNBOVBUMGdYQ0p6ZEhKcGJtZGNJaUFtSmlCbGJHVnRaVzUwTG01dlpHVlVlWEJsSUQwOVBTQXhJQ1ltSUdWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWRDQW1KaUJsYkdWdFpXNTBMbkJoY21WdWRFVnNaVzFsYm5RdWJtOWtaVTVoYldVZ0lUMDlJRndpU0ZSTlRGd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVWdQU0JqYkdGemMwNWhiV1V1ZEhKcGJTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoY0lpQmNJaUFySUdWc1pXMWxiblF1WTJ4aGMzTk9ZVzFsSUNzZ1hDSWdYQ0lwTG1sdVpHVjRUMllvWENJZ1hDSWdLeUJqYkdGemMwNWhiV1VnS3lCY0lpQmNJaWtnSVQwOUlDMHhPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCWkdRZ1kyeGhjM01nYm1GdFpWeHVJQ0FnSUNBcUlFQndZWEpoYlNCbGJHVnRaVzUwWEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05zWVhOelRtRnRaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGhVVFV4RmJHVnRaVzUwZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCRVQwMHVZV1JrUTJ4aGMzTk9ZVzFsSUQwZ1puVnVZM1JwYjI0Z1lXUmtRMnhoYzNOT1lXMWxLR1ZzWlcxbGJuUXNJR05zWVhOelRtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDQW1KaUFvZEhsd1pXOW1JR1ZzWlcxbGJuUWdQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJjSW5WdVpHVm1hVzVsWkZ3aUlEb2dYM1I1Y0dWdlppaGxiR1Z0Wlc1MEtTa2dQVDA5SUZ3aWIySnFaV04wWENJZ0ppWWdkSGx3Wlc5bUlHTnNZWE56VG1GdFpTQTlQVDBnWENKemRISnBibWRjSWlBbUppQmxiR1Z0Wlc1MExtNXZaR1ZVZVhCbElEMDlQU0F4SUNZbUlHVnNaVzFsYm5RdWNHRnlaVzUwUld4bGJXVnVkQ0FtSmlCbGJHVnRaVzUwTG5CaGNtVnVkRVZzWlcxbGJuUXVibTlrWlU1aGJXVWdJVDA5SUZ3aVNGUk5URndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1VnUFNCamJHRnpjMDVoYldVdWRISnBiU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGRVQwMHVhR0Z6UTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUdOc1lYTnpUbUZ0WlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWTJ3Z1BTQmxiR1Z0Wlc1MExtTnNZWE56VG1GdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtTnNZWE56VG1GdFpTQTlJR05zSUQ4Z1kyd2dLeUJjSWlCY0lpQXJJR05zWVhOelRtRnRaU0E2SUdOc1lYTnpUbUZ0WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGJXOTJaU0JqYkdGemN5QnVZVzFsWEc0Z0lDQWdJQ29nUUhCaGNtRnRJR1ZzWlcxbGJuUmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1NGUk5URVZzWlcxbGJuUjlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRVJQVFM1eVpXMXZkbVZEYkdGemMwNWhiV1VnUFNCbWRXNWpkR2x2YmlCeVpXMXZkbVZEYkdGemMwNWhiV1VvWld4bGJXVnVkQ3dnWTJ4aGMzTk9ZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hsYkdWdFpXNTBJQ1ltSUNoMGVYQmxiMllnWld4bGJXVnVkQ0E5UFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUZ3aWRXNWtaV1pwYm1Wa1hDSWdPaUJmZEhsd1pXOW1LR1ZzWlcxbGJuUXBLU0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUIwZVhCbGIyWWdZMnhoYzNOT1lXMWxJRDA5UFNCY0luTjBjbWx1WjF3aUlDWW1JR1ZzWlcxbGJuUXVibTlrWlZSNWNHVWdQVDA5SURFZ0ppWWdaV3hsYldWdWRDNXdZWEpsYm5SRmJHVnRaVzUwSUNZbUlHVnNaVzFsYm5RdWNHRnlaVzUwUld4bGJXVnVkQzV1YjJSbFRtRnRaU0FoUFQwZ1hDSklWRTFNWENJZ0ppWWdkSGx3Wlc5bUlHVnNaVzFsYm5RdVkyeGhjM05PWVcxbElEMDlQU0JjSW5OMGNtbHVaMXdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1VnUFNCamJHRnpjMDVoYldVdWRISnBiU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOc1lYTnpaWE1nUFNCbGJHVnRaVzUwTG1Oc1lYTnpUbUZ0WlM1MGNtbHRLQ2t1YzNCc2FYUW9YQ0lnWENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlHTnNZWE56WlhNdWJHVnVaM1JvSUMwZ01Uc2dhU0ErUFNBd095QnBMUzBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHRnpjMlZ6VzJsZElEMGdZMnhoYzNObGMxdHBYUzUwY21sdEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGamJHRnpjMlZ6VzJsZElIeDhJR05zWVhOelpYTmJhVjBnUFQwOUlHTnNZWE56VG1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHRnpjMlZ6TG5Od2JHbGpaU2hwTENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbU5zWVhOelRtRnRaU0E5SUdOc1lYTnpaWE11YW05cGJpaGNJaUJjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlViMmRuYkdVZ1kyeGhjM01nYm1GdFpWeHVJQ0FnSUNBcUlFQndZWEpoYlNCbGJHVnRaVzUwWEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05zWVhOelRtRnRaVnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjBiMmRuYkdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SVZFMU1SV3hsYldWdWRIMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdSRTlOTG5SdloyZHNaVU5zWVhOelRtRnRaU0E5SUdaMWJtTjBhVzl1SUhSdloyZHNaVU5zWVhOelRtRnRaU2hsYkdWdFpXNTBMQ0JqYkdGemMwNWhiV1VzSUhSdloyZHNaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDQW1KaUFvZEhsd1pXOW1JR1ZzWlcxbGJuUWdQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJjSW5WdVpHVm1hVzVsWkZ3aUlEb2dYM1I1Y0dWdlppaGxiR1Z0Wlc1MEtTa2dQVDA5SUZ3aWIySnFaV04wWENJZ0ppWWdkSGx3Wlc5bUlHTnNZWE56VG1GdFpTQTlQVDBnWENKemRISnBibWRjSWlBbUppQjBlWEJsYjJZZ2RHOW5aMnhsSUQwOVBTQmNJbUp2YjJ4bFlXNWNJaUFtSmlCbGJHVnRaVzUwTG01dlpHVlVlWEJsSUQwOVBTQXhJQ1ltSUdWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWRDQW1KaUJsYkdWdFpXNTBMbkJoY21WdWRFVnNaVzFsYm5RdWJtOWtaVTVoYldVZ0lUMDlJRndpU0ZSTlRGd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVWdQU0JqYkdGemMwNWhiV1V1ZEhKcGJTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ2WjJkc1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRVJQVFM1aFpHUkRiR0Z6YzA1aGJXVW9aV3hsYldWdWRDd2dZMnhoYzNOT1lXMWxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1JFOU5MbkpsYlc5MlpVTnNZWE56VG1GdFpTaGxiR1Z0Wlc1MExDQmpiR0Z6YzA1aGJXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ3YkdGalpTQmpiR0Z6Y3lCdVlXMWxYRzRnSUNBZ0lDb2dRSEJoY21GdElHVnNaVzFsYm5SY2JpQWdJQ0FnS2lCQWNHRnlZVzBnYjJ4a1EyeGhjM05PWVcxbFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUc1bGQwTnNZWE56VG1GdFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwaFVUVXhGYkdWdFpXNTBmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JFVDAwdWNtVndiR0ZqWlVOc1lYTnpJRDBnWm5WdVkzUnBiMjRnY21Wd2JHRmpaVU5zWVhOektHVnNaVzFsYm5Rc0lHOXNaRU5zWVhOelRtRnRaU3dnYm1WM1EyeGhjM05PWVcxbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNobGJHVnRaVzUwSUNZbUlDaDBlWEJsYjJZZ1pXeGxiV1Z1ZENBOVBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lGd2lkVzVrWldacGJtVmtYQ0lnT2lCZmRIbHdaVzltS0dWc1pXMWxiblFwS1NBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCMGVYQmxiMllnYjJ4a1EyeGhjM05PWVcxbElEMDlQU0JjSW5OMGNtbHVaMXdpSUNZbUlIUjVjR1Z2WmlCdVpYZERiR0Z6YzA1aGJXVWdQVDA5SUZ3aWMzUnlhVzVuWENJZ0ppWWdaV3hsYldWdWRDNXViMlJsVkhsd1pTQTlQVDBnTVNBbUppQmxiR1Z0Wlc1MExuQmhjbVZ1ZEVWc1pXMWxiblFnSmlZZ1pXeGxiV1Z1ZEM1d1lYSmxiblJGYkdWdFpXNTBMbTV2WkdWT1lXMWxJQ0U5UFNCY0lraFVUVXhjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1EyeGhjM05PWVcxbElEMGdiMnhrUTJ4aGMzTk9ZVzFsTG5SeWFXMG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkME5zWVhOelRtRnRaU0E5SUc1bGQwTnNZWE56VG1GdFpTNTBjbWx0S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JFVDAwdWNtVnRiM1psUTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUc5c1pFTnNZWE56VG1GdFpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCRVQwMHVZV1JrUTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUc1bGQwTnNZWE56VG1GdFpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ1pXeGxiV1Z1ZENCaWVTQjBZV2NnYm1GdFpTQmhibVFnYVc1a1pYaGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2RHNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pHOXRSRzlqZFcxbGJuUmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2FXNWtaWGhjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRPYjJSbGZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkVUMDB1WjJWMFJXeGxiV1Z1ZEVKNVZHRm5UbUZ0WlNBOUlHWjFibU4wYVc5dUlHZGxkRVZzWlcxbGJuUkNlVlJoWjA1aGJXVW9kRzRwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1J2YlVSdlkzVnRaVzUwSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERWdKaVlnWVhKbmRXMWxiblJ6V3pGZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1WMGdPaUJrYjJOMWJXVnVkRHRjYmlBZ0lDQWdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ1lYSm5kVzFsYm5Seld6SmRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHNGdQVDA5SUZ3aWMzUnlhVzVuWENJZ0ppWWdSRTlOTG1selJFOU5SRzlqZFcxbGJuUW9aRzl0Ukc5amRXMWxiblFwSUNZbUlIUjVjR1Z2WmlCcGJtUmxlQ0E5UFQwZ1hDSnVkVzFpWlhKY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1ZzY3lBOUlHUnZiVVJ2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0hSdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkhOYmFXNWtaWGhkSUh4OElHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElHeHBibVVnYUdWcFoyaDBYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkVUMDB1WjJWMFRHbHVaVWhsYVdkb2RDQTlJR1oxYm1OMGFXOXVJR2RsZEV4cGJtVklaV2xuYUhRb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCemRIbHNaWE1nUFNCblpYUkRiMjF3ZFhSbFpGTjBlV3hsS0dSdlkzVnRaVzUwTG1KdlpIa3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JHbHVaVWhsYVdkb2RDQTlJSE4wZVd4bGN5NXNhVzVsU0dWcFoyaDBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JHbHVaVWhsYVdkb2RFUnBaeUE5SUhCaGNuTmxTVzUwS0d4cGJtVklaV2xuYUhRc0lERXdLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHWnZiblJUYVhwbElEMGdjM1I1YkdWekxtWnZiblJUYVhwbE8xeHVJQ0FnSUNBZ0lDQjJZWElnWm05dWRGTnBlbVZFYVdjZ1BTQndZWEp6WlVsdWRDaG1iMjUwVTJsNlpTd2dNVEFwTzF4dUlDQWdJQ0FnSUNCcFppQW9hWE5HYVc1cGRHVW9iR2x1WlVobGFXZG9kRVJwWnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJzYVc1bFNHVnBaMmgwUkdsbk8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1p2Ym5SVGFYcGxSR2xuTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJFVDAwN1hHNTlLQ2s3WEc1Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlFUlBUVHRjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwyeHBZaTlWZEdsc2MwUlBUUzUwYzF4dUx5OGdiVzlrZFd4bElHbGtJRDBnTVRoY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElnTXlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVYRzUyWVhJZ1gzUjVjR1Z2WmlBOUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUlEOGdablZ1WTNScGIyNGdLRzlpYWlrZ2V5QnlaWFIxY200Z2RIbHdaVzltSUc5aWFqc2dmU0E2SUdaMWJtTjBhVzl1SUNodlltb3BJSHNnY21WMGRYSnVJRzlpYWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2IySnFMbU52Ym5OMGNuVmpkRzl5SUQwOVBTQlRlVzFpYjJ3Z0ppWWdiMkpxSUNFOVBTQlRlVzFpYjJ3dWNISnZkRzkwZVhCbElEOGdYQ0p6ZVcxaWIyeGNJaUE2SUhSNWNHVnZaaUJ2WW1vN0lIMDdYRzVjYm5aaGNpQmZWWFJwYkhORVQwMGdQU0J5WlhGMWFYSmxLRndpTGk5VmRHbHNjMFJQVFZ3aUtUdGNibHh1ZG1GeUlGOVZkR2xzYzBSUFRUSWdQU0JmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtGOVZkR2xzYzBSUFRTazdYRzVjYm5aaGNpQmZWWFJwYkhOWGFXNWtiM2NnUFNCeVpYRjFhWEpsS0Z3aUxpOVZkR2xzYzFkcGJtUnZkMXdpS1R0Y2JseHVkbUZ5SUY5VmRHbHNjMWRwYm1SdmR6SWdQU0JmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtGOVZkR2xzYzFkcGJtUnZkeWs3WEc1Y2JtWjFibU4wYVc5dUlGOXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFFvYjJKcUtTQjdJSEpsZEhWeWJpQnZZbW9nSmlZZ2IySnFMbDlmWlhOTmIyUjFiR1VnUHlCdlltb2dPaUI3SUdSbFptRjFiSFE2SUc5aWFpQjlPeUI5WEc1Y2JtWjFibU4wYVc5dUlGOWpiR0Z6YzBOaGJHeERhR1ZqYXlocGJuTjBZVzVqWlN3Z1EyOXVjM1J5ZFdOMGIzSXBJSHNnYVdZZ0tDRW9hVzV6ZEdGdVkyVWdhVzV6ZEdGdVkyVnZaaUJEYjI1emRISjFZM1J2Y2lrcElIc2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtOaGJtNXZkQ0JqWVd4c0lHRWdZMnhoYzNNZ1lYTWdZU0JtZFc1amRHbHZibHdpS1RzZ2ZTQjlYRzVjYm5aaGNpQk5iM1Z6WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQk5iM1Z6WlNncElIdGNiaUFnSUNBZ0lDQWdYMk5zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUUxdmRYTmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJPYjNKdFlXeHBjMlVnYlc5MWMyVWdaR1ZzZEdGY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQk5iM1Z6WlM1blpYUlhhR1ZsYkVSbGJIUmhJRDBnWm5WdVkzUnBiMjRnWjJWMFYyaGxaV3hFWld4MFlTaGxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGxJQ1ltSUNoMGVYQmxiMllnWlNBOVBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lGd2lkVzVrWldacGJtVmtYQ0lnT2lCZmRIbHdaVzltS0dVcEtTQTlQVDBnWENKdlltcGxZM1JjSWlBbUppQW9YQ0prWlhSaGFXeGNJaUJwYmlCbElIeDhJRndpZDJobFpXeEVaV3gwWVZ3aUlHbHVJR1VnZkh3Z1hDSjNhR1ZsYkVSbGJIUmhXVndpSUdsdUlHVWdmSHdnWENKM2FHVmxiRVJsYkhSaFdGd2lJR2x1SUdVZ2ZId2dYQ0prWld4MFlWbGNJaUJwYmlCbElIeDhJRndpWkdWc2RHRllYQ0lnYVc0Z1pTQjhmQ0JjSW1GNGFYTmNJaUJwYmlCbElIeDhJRndpWkdWc2RHRk5iMlJsWENJZ2FXNGdaU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCa1pXeDBZU0E5SUhadmFXUWdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJrWld4MFlWZ2dQU0IyYjJsa0lEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR1ZzZEdGWklEMGdkbTlwWkNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1QyeGtJSE5qYUc5dmJDQnpZM0p2Ykd4M2FHVmxiQ0JrWld4MFlWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGd2laR1YwWVdsc1hDSWdhVzRnWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiSFJoV1NBOUlHVXVaR1YwWVdsc0lDb2dMVEU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9YQ0ozYUdWbGJFUmxiSFJoWENJZ2FXNGdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJIUmhXU0E5SUdVdWQyaGxaV3hFWld4MFlUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoY0luZG9aV1ZzUkdWc2RHRlpYQ0lnYVc0Z1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkhSaFdTQTlJR1V1ZDJobFpXeEVaV3gwWVZrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWENKM2FHVmxiRVJsYkhSaFdGd2lJR2x1SUdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3gwWVZnZ1BTQmxMbmRvWldWc1JHVnNkR0ZZSUNvZ0xURTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCR2FYSmxabTk0SUR3Z01UY2dhRzl5YVhwdmJuUmhiQ0J6WTNKdmJHeHBibWNnY21Wc1lYUmxaQ0IwYnlCRVQwMU5iM1Z6WlZOamNtOXNiQ0JsZG1WdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGd2lZWGhwYzF3aUlHbHVJR1VnSmlZZ1pTNWhlR2x6SUQwOVBTQmxMa2hQVWtsYVQwNVVRVXhmUVZoSlV5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkhSaFdDQTlJR1JsYkhSaFdTQXFJQzB4TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJIUmhXU0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJPWlhjZ2MyTm9iMjlzSUhkb1pXVnNJR1JsYkhSaElDaDNhR1ZsYkNCbGRtVnVkQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hjSW1SbGJIUmhXVndpSUdsdUlHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4MFlWa2dQU0JsTG1SbGJIUmhXU0FxSUMweE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Z3aVpHVnNkR0ZZWENJZ2FXNGdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJIUmhXQ0E5SUdVdVpHVnNkR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUbVZsWkNCMGJ5QmpiMjUyWlhKMElHeHBibVZ6SUdGdVpDQndZV2RsY3lCMGJ5QndhWGhsYkhNZ2FXWWdkMlVnWVhKbGJsd2lkQ0JoYkhKbFlXUjVJR2x1SUhCcGVHVnNjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWR2hsY21VZ1lYSmxJSFJvY21WbElHUmxiSFJoSUcxdlpHVnpPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdJQ0FxSUdSbGJIUmhUVzlrWlNBd0lHbHpJR0o1SUhCcGVHVnNjeXdnYm05MGFHbHVaeUIwYnlCa2IxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lDQXFJR1JsYkhSaFRXOWtaU0F4SUdseklHSjVJR3hwYm1WelhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlBZ0lDb2daR1ZzZEdGTmIyUmxJRElnYVhNZ1lua2djR0ZuWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNobExtUmxiSFJoVFc5a1pTQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJzYVc1bFNHVnBaMmgwSUQwZ1gxVjBhV3h6UkU5Tk1pNWtaV1poZFd4MExtZGxkRXhwYm1WSVpXbG5hSFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXeDBZVmtnUFNCa1pXeDBZVmtnS2lCc2FXNWxTR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiSFJoV0NBOUlHUmxiSFJoV0NBcUlHeHBibVZJWldsbmFIUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHVXVaR1ZzZEdGTmIyUmxJRDA5UFNBeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhkcGJtUnZkMmhsWjJsb2RDQTlJRjlWZEdsc2MxZHBibVJ2ZHpJdVpHVm1ZWFZzZEM1blpYUklaV2xuYUhRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3gwWVZrZ1BTQmtaV3gwWVZrZ0tpQjNhVzVrYjNkb1pXZHBhSFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc2RHRllJRDBnWkdWc2RHRllJQ29nZDJsdVpHOTNhR1ZuYVdoME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzZEdFZ1BTQmtaV3gwWVZrZ1BUMDlJREFnUHlCa1pXeDBZVmdnT2lCa1pXeDBZVms3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pHVnNkR0U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1RtRk9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSEpsZEhWeWJpQk5iM1Z6WlR0Y2JuMG9LVHRjYmx4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1RXOTFjMlU3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITk5iM1Z6WlM1MGMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01UbGNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SURJZ015SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVMeW9xWEc0Z0tpQkRiR0Z6Y3lCbWIzSWdkMjl5YTJsdVp5QjNhWFJvSUhOamNtVmxibHh1SUNvdlhHNWNibVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzVjYm1aMWJtTjBhVzl1SUY5amJHRnpjME5oYkd4RGFHVmpheWhwYm5OMFlXNWpaU3dnUTI5dWMzUnlkV04wYjNJcElIc2dhV1lnS0NFb2FXNXpkR0Z1WTJVZ2FXNXpkR0Z1WTJWdlppQkRiMjV6ZEhKMVkzUnZjaWtwSUhzZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa05oYm01dmRDQmpZV3hzSUdFZ1kyeGhjM01nWVhNZ1lTQm1kVzVqZEdsdmJsd2lLVHNnZlNCOVhHNWNiblpoY2lCVFkzSmxaVzRnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1UyTnlaV1Z1S0NrZ2UxeHVJQ0FnSUNBZ0lDQmZZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnVTJOeVpXVnVLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2MyTnlaV1Z1SUdsdVptOWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdDdZWFpoYVd4aFlteGxVMmw2WlRvZ2UyaGxhV2RvZERvZ2JuVnRZbVZ5TENCM2FXUjBhRG9nYm5WdFltVnlmU3dnWTI5c2IzSkVaWEIwYURvZ2JuVnRZbVZ5TENCd2FYaGxiRkpoZEdsdk9pQnVkVzFpWlhJc0lITnBlbVU2SUh0b1pXbG5hSFE2SUc1MWJXSmxjaXdnZDJsa2RHZzZJRzUxYldKbGNuMTlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lGTmpjbVZsYmk1blpYUkpibVp2SUQwZ1puVnVZM1JwYjI0Z1oyVjBTVzVtYnlncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGMllXbHNZV0pzWlZOcGVtVTZJRk5qY21WbGJpNW5aWFJCZG1GcGJHRmliR1ZUYVhwbGN5Z3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pFWlhCMGFEb2dVMk55WldWdUxtZGxkRU52Ykc5eVJHVndkR2dvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJwZUdWc1VtRjBhVzg2SUZOamNtVmxiaTVuWlhSUWFYaGxiRkpoZEdsdktDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemFYcGxPaUJUWTNKbFpXNHVaMlYwVTJsNlpYTW9LVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElITmpjbVZsYmlCb1pXbG5hSFJjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Ym5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JUWTNKbFpXNHVaMlYwU0dWcFoyaDBJRDBnWm5WdVkzUnBiMjRnWjJWMFNHVnBaMmgwS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyTnlaV1Z1TG1obGFXZG9kRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCelkzSmxaVzRnZDJsa2RHaGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdiblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQlRZM0psWlc0dVoyVjBWMmxrZEdnZ1BTQm1kVzVqZEdsdmJpQm5aWFJYYVdSMGFDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE5qY21WbGJpNTNhV1IwYUR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQnpZM0psWlc0Z2MybDZaWE5jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHQ3YUdWcFoyaDBPaUJ1ZFcxaVpYSXNJSGRwWkhSb09pQnVkVzFpWlhKOWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQlRZM0psWlc0dVoyVjBVMmw2WlhNZ1BTQm1kVzVqZEdsdmJpQm5aWFJUYVhwbGN5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ1UyTnlaV1Z1TG1kbGRFaGxhV2RvZENncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRk5qY21WbGJpNW5aWFJYYVdSMGFDZ3BYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2MyTnlaV1Z1SUdobGFXZG9kRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHR1ZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRk5qY21WbGJpNW5aWFJCZG1GcGJHRmliR1ZJWldsbmFIUWdQU0JtZFc1amRHbHZiaUJuWlhSQmRtRnBiR0ZpYkdWSVpXbG5hSFFvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelkzSmxaVzR1WVhaaGFXeElaV2xuYUhRN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdjMk55WldWdUlIZHBaSFJvWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTJOeVpXVnVMbWRsZEVGMllXbHNZV0pzWlZkcFpIUm9JRDBnWm5WdVkzUnBiMjRnWjJWMFFYWmhhV3hoWW14bFYybGtkR2dvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelkzSmxaVzR1WVhaaGFXeFhhV1IwYUR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQnpZM0psWlc0Z2MybDZaWE5jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHQ3YUdWcFoyaDBPaUJ1ZFcxaVpYSXNJSGRwWkhSb09pQnVkVzFpWlhKOWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQlRZM0psWlc0dVoyVjBRWFpoYVd4aFlteGxVMmw2WlhNZ1BTQm1kVzVqZEdsdmJpQm5aWFJCZG1GcGJHRmliR1ZUYVhwbGN5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ1UyTnlaV1Z1TG1kbGRFRjJZV2xzWVdKc1pVaGxhV2RvZENncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRk5qY21WbGJpNW5aWFJCZG1GcGJHRmliR1ZYYVdSMGFDZ3BYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2MyTnlaV1Z1SUhCcGVHVnNJSEpoZEdsdlhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCVFkzSmxaVzR1WjJWMFVHbDRaV3hTWVhScGJ5QTlJR1oxYm1OMGFXOXVJR2RsZEZCcGVHVnNVbUYwYVc4b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCeVlYUnBieUE5SURFN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0xuTmpjbVZsYmk1emVYTjBaVzFZUkZCSklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSFI1Y0dWdlppQjNhVzVrYjNjdWMyTnlaV1Z1TG14dloybGpZV3hZUkZCSklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSGRwYm1SdmR5NXpZM0psWlc0dWMzbHpkR1Z0V0VSUVNTQStJSGRwYm1SdmR5NXpZM0psWlc0dWJHOW5hV05oYkZoRVVFa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmhkR2x2SUQwZ2QybHVaRzkzTG5OamNtVmxiaTV6ZVhOMFpXMVlSRkJKSUM4Z2QybHVaRzkzTG5OamNtVmxiaTVzYjJkcFkyRnNXRVJRU1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzTG1SbGRtbGpaVkJwZUdWc1VtRjBhVzhnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpoZEdsdklEMGdkMmx1Wkc5M0xtUmxkbWxqWlZCcGVHVnNVbUYwYVc4N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmhkR2x2TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElITmpjbVZsYmlCamIyeHZjaUJrWlhCMGFGeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1UyTnlaV1Z1TG1kbGRFTnZiRzl5UkdWd2RHZ2dQU0JtZFc1amRHbHZiaUJuWlhSRGIyeHZja1JsY0hSb0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMk55WldWdUxtTnZiRzl5UkdWd2RHZzdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCVFkzSmxaVzQ3WEc1OUtDazdYRzVjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUZOamNtVmxianRjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwyeHBZaTlWZEdsc2MxTmpjbVZsYmk1MGMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01qQmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SURJZ015SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVMeW9xWEc0Z0tpQkRiR0Z6Y3lCbWIzSWdkMjl5YTJsdVp5QjNhWFJvSUhONWMzUmxiVnh1SUNvdlhHNWNibVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzVjYm1aMWJtTjBhVzl1SUY5amJHRnpjME5oYkd4RGFHVmpheWhwYm5OMFlXNWpaU3dnUTI5dWMzUnlkV04wYjNJcElIc2dhV1lnS0NFb2FXNXpkR0Z1WTJVZ2FXNXpkR0Z1WTJWdlppQkRiMjV6ZEhKMVkzUnZjaWtwSUhzZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa05oYm01dmRDQmpZV3hzSUdFZ1kyeGhjM01nWVhNZ1lTQm1kVzVqZEdsdmJsd2lLVHNnZlNCOVhHNWNiblpoY2lCVGVYTjBaVzBnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1UzbHpkR1Z0S0NrZ2UxeHVJQ0FnSUNBZ0lDQmZZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnVTNsemRHVnRLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2MzbHpkR1Z0SUdsdVptOWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdDdibUZ0WlRvZ2MzUnlhVzVuTENCMlpYSnphVzl1T2lCemRISnBibWQ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRk41YzNSbGJTNW5aWFJKYm1adklEMGdablZ1WTNScGIyNGdaMlYwU1c1bWJ5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U2SUZONWMzUmxiUzVuWlhST1lXMWxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaWEp6YVc5dU9pQlRlWE4wWlcwdVoyVjBWbVZ5YzJsdmJpZ3BYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ1QxTWdibUZ0WlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTNsemRHVnRMbWRsZEU1aGJXVWdQU0JtZFc1amRHbHZiaUJuWlhST1lXMWxLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiM01nUFNCY0lsd2lPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyeHBaVzUwVTNSeWFXNW5jeUE5SUZ0N1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktGZHBibVJ2ZDNNZ01UQXVNSHhYYVc1a2IzZHpJRTVVSURFd0xqQXBMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpVjJsdVpHOTNjeUF4TUZ3aVhHNGdJQ0FnSUNBZ0lIMHNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISTZJQzhvVjJsdVpHOTNjeUE0TGpGOFYybHVaRzkzY3lCT1ZDQTJMak1wTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVYybHVaRzkzY3lBNExqRmNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktGZHBibVJ2ZDNNZ09IeFhhVzVrYjNkeklFNVVJRFl1TWlrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklEaGNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktGZHBibVJ2ZDNNZ04zeFhhVzVrYjNkeklFNVVJRFl1TVNrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklEZGNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdlYybHVaRzkzY3lCT1ZDQTJMakF2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKWGFXNWtiM2R6SUZacGMzUmhYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wxZHBibVJ2ZDNNZ1RsUWdOUzR5THl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVYybHVaRzkzY3lCVFpYSjJaWElnTWpBd00xd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM4b1YybHVaRzkzY3lCT1ZDQTFMakY4VjJsdVpHOTNjeUJZVUNrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklGaFFYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0x5aFhhVzVrYjNkeklFNVVJRFV1TUh4WGFXNWtiM2R6SURJd01EQXBMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpVjJsdVpHOTNjeUF5TURBd1hDSmNiaUFnSUNBZ0lDQWdmU3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjam9nTHloWGFXNGdPWGdnTkM0NU1IeFhhVzVrYjNkeklFMUZLUzhzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpPaUJjSWxkcGJtUnZkM01nVFVWY0lseHVJQ0FnSUNBZ0lDQjlMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlPaUF2S0ZkcGJtUnZkM01nT1RoOFYybHVPVGdwTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVYybHVaRzkzY3lBNU9Gd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM4b1YybHVaRzkzY3lBNU5YeFhhVzQ1Tlh4WGFXNWtiM2R6WHprMUtTOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCek9pQmNJbGRwYm1SdmQzTWdPVFZjSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZLRmRwYm1SdmQzTWdUbFFnTkM0d2ZGZHBiazVVTkM0d2ZGZHBiazVVZkZkcGJtUnZkM01nVGxRcEx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lWMmx1Wkc5M2N5Qk9WQ0EwTGpCY0lseHVJQ0FnSUNBZ0lDQjlMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlPaUF2VjJsdVpHOTNjeUJEUlM4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6T2lCY0lsZHBibVJ2ZDNNZ1EwVmNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdlYybHVNVFl2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKWGFXNWtiM2R6SURNdU1URmNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdlFXNWtjbTlwWkM4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6T2lCY0lrRnVaSEp2YVdSY0lseHVJQ0FnSUNBZ0lDQjlMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlPaUF2VDNCbGJrSlRSQzhzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpPaUJjSWs5d1pXNGdRbE5FWENKY2JpQWdJQ0FnSUNBZ2ZTd2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2Nqb2dMMU4xYms5VEx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lVM1Z1SUU5VFhDSmNiaUFnSUNBZ0lDQWdmU3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjam9nTHloTWFXNTFlSHhZTVRFcEx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lUR2x1ZFhoY0lseHVJQ0FnSUNBZ0lDQjlMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlPaUF2S0dsUWFHOXVaWHhwVUdGa2ZHbFFiMlFwTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aWFVOVRYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wwMWhZeUJQVXlCWUx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lUV0ZqSUU5VElGaGNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktFMWhZMUJRUTN4TllXTkpiblJsYkh4TllXTmZVRzkzWlhKUVEzeE5ZV05wYm5SdmMyZ3BMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpVFdGaklFOVRYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wxRk9XQzhzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpPaUJjSWxGT1dGd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM5VlRrbFlMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpVlU1SldGd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM5Q1pVOVRMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpUW1WUFUxd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM5UFUxeGNMekl2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKUFV5OHlYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0x5aHVkV2hyZkVkdmIyZHNaV0p2ZEh4WllXMXRlV0p2ZEh4UGNHVnVZbTkwZkZOc2RYSndmRTFUVGtKdmRIeEJjMnNnU21WbGRtVnpYRnd2VkdWdmJXRjhhV0ZmWVhKamFHbDJaWElwTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVUyVmhjbU5vSUVKdmRGd2lYRzRnSUNBZ0lDQWdJSDFkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCZmFYUmxjbUYwYjNJZ1BTQmpiR2xsYm5SVGRISnBibWR6TENCZmFYTkJjbkpoZVNBOUlFRnljbUY1TG1selFYSnlZWGtvWDJsMFpYSmhkRzl5S1N3Z1gya2dQU0F3TENCZmFYUmxjbUYwYjNJZ1BTQmZhWE5CY25KaGVTQS9JRjlwZEdWeVlYUnZjaUE2SUY5cGRHVnlZWFJ2Y2x0VGVXMWliMnd1YVhSbGNtRjBiM0pkS0NrN095a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRjl5WldZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGZhWE5CY25KaGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFTQStQU0JmYVhSbGNtRjBiM0l1YkdWdVozUm9LU0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZjbVZtSUQwZ1gybDBaWEpoZEc5eVcxOXBLeXRkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZhU0E5SUY5cGRHVnlZWFJ2Y2k1dVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBMbVJ2Ym1VcElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5eVpXWWdQU0JmYVM1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR056SUQwZ1gzSmxaanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOekxuSXVkR1Z6ZENodVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl6SUQwZ1kzTXVjenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2IzTTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnVDFNZ2RtVnljMmx2Ymx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTNsemRHVnRMbWRsZEZabGNuTnBiMjRnUFNCbWRXNWpkR2x2YmlCblpYUldaWEp6YVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IzTWdQU0JUZVhOMFpXMHVaMlYwVG1GdFpTZ3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IzTldaWEp6YVc5dUlEMGdYQ0pjSWp0Y2JpQWdJQ0FnSUNBZ2FXWWdLQzlYYVc1a2IzZHpMeTUwWlhOMEtHOXpLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiM05XWlhKemFXOXVJRDBnTDFkcGJtUnZkM01nS0M0cUtTOHVaWGhsWXlodmN5bGJNVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjeUE5SUZ3aVYybHVaRzkzYzF3aU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSE4zYVhSamFDQW9iM01wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1hDSk5ZV01nVDFNZ1dGd2lPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl6Vm1WeWMybHZiaUE5SUM5TllXTWdUMU1nV0NBb01UQmJMbDljWEdSZEt5a3ZMbVY0WldNb2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDbGJNVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpUVc1a2NtOXBaRndpT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5elZtVnljMmx2YmlBOUlDOUJibVJ5YjJsa0lDaGJMbDljWEdSZEt5a3ZMbVY0WldNb2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDbGJNVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpYVU5VFhDSTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbFp5QTlJQzlQVXlBb1hGeGtLeWxmS0Z4Y1pDc3BYejhvWEZ4a0t5ay9MeTVsZUdWaktHNWhkbWxuWVhSdmNpNWhjSEJXWlhKemFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YzFabGNuTnBiMjRnUFNCeVpXZGJNVjBnS3lCY0lpNWNJaUFySUhKbFoxc3lYU0FySUZ3aUxsd2lJQ3NnS0hKbFoxc3pYU0I4ZkNBd0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzl6Vm1WeWMybHZianRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlGTjVjM1JsYlR0Y2JuMG9LVHRjYmx4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1UzbHpkR1Z0TzF4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZiR2xpTDFWMGFXeHpVM2x6ZEdWdExuUnpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXlNVnh1THk4Z2JXOWtkV3hsSUdOb2RXNXJjeUE5SURFZ01pQXpJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYm1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3WEc1Y2JuWmhjaUJmVlhScGJITkNjbTkzYzJWeUlEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITkNjbTkzYzJWeVhDSXBPMXh1WEc1MllYSWdYMVYwYVd4elFuSnZkM05sY2pJZ1BTQmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwS0Y5VmRHbHNjMEp5YjNkelpYSXBPMXh1WEc1MllYSWdYMVYwYVd4elUyTnlaV1Z1SUQwZ2NtVnhkV2x5WlNoY0lpNHZWWFJwYkhOVFkzSmxaVzVjSWlrN1hHNWNiblpoY2lCZlZYUnBiSE5UWTNKbFpXNHlJRDBnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaGZWWFJwYkhOVFkzSmxaVzRwTzF4dVhHNTJZWElnWDFWMGFXeHpVM2x6ZEdWdElEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITlRlWE4wWlcxY0lpazdYRzVjYm5aaGNpQmZWWFJwYkhOVGVYTjBaVzB5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITlRlWE4wWlcwcE8xeHVYRzVtZFc1amRHbHZiaUJmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtHOWlhaWtnZXlCeVpYUjFjbTRnYjJKcUlDWW1JRzlpYWk1ZlgyVnpUVzlrZFd4bElEOGdiMkpxSURvZ2V5QmtaV1poZFd4ME9pQnZZbW9nZlRzZ2ZWeHVYRzVtZFc1amRHbHZiaUJmWTJ4aGMzTkRZV3hzUTJobFkyc29hVzV6ZEdGdVkyVXNJRU52Ym5OMGNuVmpkRzl5S1NCN0lHbG1JQ2doS0dsdWMzUmhibU5sSUdsdWMzUmhibU5sYjJZZ1EyOXVjM1J5ZFdOMGIzSXBLU0I3SUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI1Y0lpazdJSDBnZlZ4dVhHNTJZWElnVlhObGNpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JtZFc1amRHbHZiaUJWYzJWeUtDa2dlMXh1SUNBZ0lDQWdJQ0JmWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1ZYTmxjaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElIVnpaWElnYVc1bWIxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzdGljbTkzYzJWeU9pQjdZbkp2ZDNObGNqb2djM1J5YVc1bkxDQnRiMkpwYkdVNklHSnZiMnhsWVc0c0lIWmxjbk5wYjI0NklITjBjbWx1WjMwc0lITmpjbVZsYmpvZ2UyRjJZV2xzWVdKc1pWTnBlbVU2SUh0b1pXbG5hSFE2SUc1MWJXSmxjaXdnZDJsa2RHZzZJRzUxYldKbGNuMHNJR052Ykc5eVJHVndkR2c2SUc1MWJXSmxjaXdnY0dsNFpXeFNZWFJwYnpvZ2JuVnRZbVZ5TENCemFYcGxPaUI3YUdWcFoyaDBPaUJ1ZFcxaVpYSXNJSGRwWkhSb09pQnVkVzFpWlhKOWZTd2djM2x6ZEdWdE9pQjdibUZ0WlRvZ2MzUnlhVzVuTENCMlpYSnphVzl1T2lCemRISnBibWQ5ZlgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JWYzJWeUxtZGxkRWx1Wm04Z1BTQm1kVzVqZEdsdmJpQm5aWFJKYm1adktDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSnZkM05sY2pvZ1gxVjBhV3h6UW5KdmQzTmxjakl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZM0psWlc0NklGOVZkR2xzYzFOamNtVmxiakl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnplWE4wWlcwNklGOVZkR2xzYzFONWMzUmxiVEl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2xjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJRlZ6WlhJN1hHNTlLQ2s3WEc1Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlGVnpaWEk3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITlZjMlZ5TG5SelhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBeU1seHVMeThnYlc5a2RXeGxJR05vZFc1cmN5QTlJREVnTWlBeklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9