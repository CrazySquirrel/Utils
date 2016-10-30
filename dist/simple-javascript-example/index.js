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
	for (var prop in Utils) {
	    if (Utils.hasOwnProperty(prop)) {
	        var isClass = false;
	        for (var prop2 in Utils[prop]) {
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
		
		var _UtilsBrowser = __webpack_require__(6);
		
		var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
		
		var _UtilsCookie = __webpack_require__(7);
		
		var _UtilsCookie2 = _interopRequireDefault(_UtilsCookie);
		
		var _UtilsDocument = __webpack_require__(8);
		
		var _UtilsDocument2 = _interopRequireDefault(_UtilsDocument);
		
		var _UtilsDOM = __webpack_require__(9);
		
		var _UtilsDOM2 = _interopRequireDefault(_UtilsDOM);
		
		var _UtilsScreen = __webpack_require__(10);
		
		var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
		
		var _UtilsSystem = __webpack_require__(11);
		
		var _UtilsSystem2 = _interopRequireDefault(_UtilsSystem);
		
		var _UtilsUser = __webpack_require__(12);
		
		var _UtilsUser2 = _interopRequireDefault(_UtilsUser);
		
		var _UtilsWindow = __webpack_require__(13);
		
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
		
		    /**
		     * @deprecated Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.
		     */
		    Utils.getBoundingClientRect = function getBoundingClientRect(domNode) {
		        var domDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
		        var showForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		
		        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && typeof console.log === "function") {
		            console.log(401, "Utils.getBoundingClientRect method was deprecated and soon will be removed. Please use Utils.DOM.getBoundingClientRect method.");
		        }
		        return Utils.DOM.getBoundingClientRect(domNode, domDocument, showForce);
		    };
		
		    /**
		     * @deprecated Utils.findElementPosition method was deprecated and soon will be removed. Please use Utils.DOM.findElementPosition method.
		     */
		    Utils.findElementPosition = function findElementPosition(domNode) {
		        var showForce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		
		        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && typeof console.log === "function") {
		            console.log(401, "Utils.findElementPosition method was deprecated and soon will be removed. Please use" + " Utils.DOM.findElementPosition method.");
		        }
		        return Utils.DOM.findElementPosition(domNode, showForce);
		    };
		    /**
		     * Transfer static methods into the object
		     * @param realObject
		     */
		
		
		    Utils.implementationStaticMethods = function implementationStaticMethods(realObject) {
		        var staticClass = realObject.constructor;
		        var methods = Object.keys(staticClass);
		        if (methods.length > 0) {
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
		                        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && typeof console.log === "function") {
		                            console.log(401, "That method was deprecated and soon will be removed. Please use " + staticClass.name + "." + method + " method.");
		                        }
		                        return staticClass[method].apply(staticClass, arguments);
		                    };
		                }
		            };
		
		            for (var _iterator = methods, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		                var _ref;
		
		                var _ret = _loop();
		
		                if (_ret === "break") break;
		            }
		        }
		    };
		    /**
		     * Get call stack trace
		     * @return Array<Object>
		     */
		
		
		    Utils.stack = function stack() {
		        var e = new Error();
		        return e && e.stack && e.stack.split("\n").slice(5).map(function (s) {
		            var match = void 0;
		            if (!s) {
		                return {};
		            }
		            match = /^(.*)@(.*)\.js:([0-9]+):([0-9]+)$/ig.exec(s);
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
		
		Utils.Browser = _UtilsBrowser2.default;
		Utils.Cookie = _UtilsCookie2.default;
		Utils.DOM = _UtilsDOM2.default;
		Utils.Document = _UtilsDocument2.default;
		Utils.Screen = _UtilsScreen2.default;
		Utils.System = _UtilsSystem2.default;
		Utils.User = _UtilsUser2.default;
		Utils.Window = _UtilsWindow2.default;
		module.exports = Utils;
	
	/***/ },
	/* 6 */
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
		        return navigator.userAgent.indexOf("Safari") !== -1;
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
	/* 7 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * Class for working with cookie
		 */
		
		exports.__esModule = true;
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
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
		          arrKeys.push(v[0]);
		        }
		        return arrKeys;
		      } else {
		        /**
		         * If cookie does not supported return false
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
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * Class for working with document
		 */
		
		exports.__esModule = true;
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
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
		
		        return Math.max(objWindow.document.body.scrollHeight, objWindow.document.documentElement.scrollHeight, objWindow.document.body.offsetHeight, objWindow.document.documentElement.offsetHeight, objWindow.document.body.clientHeight, objWindow.document.documentElement.clientHeight);
		    };
		    /**
		     * Get document width
		     * @returns {number}
		     */
		
		
		    Document.getWidth = function getWidth() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return Math.max(objWindow.document.body.scrollWidth, objWindow.document.documentElement.scrollWidth, objWindow.document.body.offsetWidth, objWindow.document.documentElement.offsetWidth, objWindow.document.body.clientWidth, objWindow.document.documentElement.clientWidth);
		    };
		    /**
		     * Get document top scroll
		     * @param objWindow
		     * @return {number}
		     */
		
		
		    Document.getScrollTop = function getScrollTop() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return objWindow.pageYOffset || objWindow.document.documentElement && objWindow.document.documentElement.scrollTop || objWindow.document.body && objWindow.document.body.scrollTop;
		    };
		    /**
		     * Get document left scroll
		     * @param objWindow
		     * @return {number}
		     */
		
		
		    Document.getScrollLeft = function getScrollLeft() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return objWindow.pageXOffset || objWindow.document.documentElement && objWindow.document.documentElement.scrollLeft || objWindow.document.body && objWindow.document.body.scrollLeft;
		    };
		    /**
		     * Get document scrolls
		     * @param objWindow
		     * @return {{left: number, top: number}}
		     */
		
		
		    Document.getScroll = function getScroll() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return {
		            left: Document.getScrollLeft(objWindow),
		            top: Document.getScrollTop(objWindow)
		        };
		    };
		
		    return Document;
		}();
		
		exports.default = Document;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * Class for working with DOM
		 */
		
		exports.__esModule = true;
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var DOM = function () {
		    function DOM() {
		        _classCallCheck(this, DOM);
		    }
		
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
		
		        if (typeof domNode === "string") {
		            domNode = domDocument.getElementById(domNode);
		        }
		        var styles = void 0;
		        if (showForce) {
		            styles = getComputedStyle(domNode);
		            if (styles && styles.display === "none") {
		                domNode.style.display = "block";
		            }
		        }
		        var objRet = {
		            bottom: 0,
		            height: 0,
		            left: 0,
		            right: 0,
		            top: 0,
		            width: 0
		        };
		        if (domNode) {
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
		     * @param showForce
		     * @return {{top: number, left: number}}
		     */
		    DOM.findElementPosition = function findElementPosition(domNode) {
		        var showForce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		
		        var left = 0;
		        var top = 0;
		        while (domNode) {
		            var styles = void 0;
		            if (showForce) {
		                styles = getComputedStyle(domNode);
		                if (styles && styles.display === "none") {
		                    domNode.style.display = "block";
		                }
		            }
		            left += domNode.offsetLeft;
		            top += domNode.offsetTop;
		            domNode = domNode.offsetParent;
		            if (showForce && domNode) {
		                domNode.style.display = "";
		            }
		        }
		        return {
		            top: top,
		            left: left
		        };
		    };
		    /**
		     * Add event listener
		     * @param obj
		     * @param name
		     * @param func
		     */
		
		
		    DOM.addEvent = function addEvent(obj, name, func) {
		        if (obj.addEventListener) {
		            obj.addEventListener(name, func, false);
		        } else if (obj.attachEvent) {
		            obj.attachEvent("on" + name, func);
		        }
		    };
		    /**
		     * Remove event listener
		     * @param obj
		     * @param name
		     * @param func
		     */
		
		
		    DOM.removeEvent = function removeEvent(obj, name, func) {
		        if (obj.removeEventListener) {
		            obj.removeEventListener(name, func, false);
		        } else if (obj.detachEvent) {
		            obj.detachEvent("on" + name, func);
		        }
		    };
		    /**
		     * Check if element has class name
		     * @param element
		     * @param className
		     * @return {boolean}
		     */
		
		
		    DOM.hasClassName = function hasClassName(element, className) {
		        return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
		    };
		    /**
		     * Add class name
		     * @param element
		     * @param className
		     * @return {HTMLElement}
		     */
		
		
		    DOM.addClassName = function addClassName(element, className) {
		        if (!DOM.hasClassName(element, className)) {
		            var cl = element.className;
		            element.className = cl ? cl + " " + className : className;
		        }
		        return element;
		    };
		    /**
		     * Remove class name
		     * @param element
		     * @param className
		     * @return {HTMLElement}
		     */
		
		
		    DOM.removeClassName = function removeClassName(element, className) {
		        var classes = element.className.split(" ");
		        for (var i = classes.length - 1; i >= 0; i--) {
		            if (classes[i] === className) {
		                classes.splice(i, 1);
		            }
		        }
		        element.className = classes.join(" ");
		        return element;
		    };
		    /**
		     * Toggle class name
		     * @param element
		     * @param className
		     * @param toggle
		     * @return {HTMLElement}
		     */
		
		
		    DOM.toggleClassName = function toggleClassName(element, className, toggle) {
		        if (toggle) {
		            DOM.addClassName(element, className);
		        } else {
		            DOM.removeClassName(element, className);
		        }
		        return element;
		    };
		    /**
		     * Replace class name
		     * @param element
		     * @param oldClassName
		     * @param newClassName
		     * @return {HTMLElement}
		     */
		
		
		    DOM.replaceClass = function replaceClass(element, oldClassName, newClassName) {
		        DOM.removeClassName(element, oldClassName);
		        DOM.addClassName(element, newClassName);
		        return element;
		    };
		    /**
		     * Get element by tag name and index
		     * @param tn
		     * @param context
		     * @param index
		     * @return {Node}
		     */
		
		
		    DOM.getElementByTagName = function getElementByTagName(tn, context, index) {
		        var cont = context || document;
		        var els = cont.getElementsByTagName(tn);
		        if (null == index || isNaN(index)) {
		            return undefined;
		        } else {
		            return els[index];
		        }
		    };
		
		    return DOM;
		}();
		
		exports.default = DOM;
	
	/***/ },
	/* 10 */
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
	/* 11 */
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
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		
		exports.__esModule = true;
		
		var _UtilsBrowser = __webpack_require__(6);
		
		var _UtilsBrowser2 = _interopRequireDefault(_UtilsBrowser);
		
		var _UtilsScreen = __webpack_require__(10);
		
		var _UtilsScreen2 = _interopRequireDefault(_UtilsScreen);
		
		var _UtilsSystem = __webpack_require__(11);
		
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
	/* 13 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * Class for working with window
		 */
		
		exports.__esModule = true;
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Window = function () {
		    function Window() {
		        _classCallCheck(this, Window);
		    }
		
		    /**
		     * Get window height
		     * @returns {number}
		     */
		    Window.getHeight = function getHeight() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		    };
		    /**
		     * Get window width
		     * @returns {number}
		     */
		
		
		    Window.getWidth = function getWidth() {
		        var objWindow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
		
		        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
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
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YzE1NDMxNGQ5NTZiODhmMGQ2Mj9lZjU0KiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHMudHM/ODJhNiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNCcm93c2VyLnRzP2YwMjkiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzQ29va2llLnRzPzI1NGMiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzRG9jdW1lbnQudHM/ZTkzYiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNET00udHM/ZDk1NyIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNTY3JlZW4udHM/MDNiZiIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNTeXN0ZW0udHM/MjkyNyIsIndlYnBhY2s6Ly8vLi9saWIvVXRpbHNVc2VyLnRzPzc3OTEiLCJ3ZWJwYWNrOi8vLy4vbGliL1V0aWxzV2luZG93LnRzPzgyNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFROztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1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QTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJB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Q0Esa0JBQWlCLFVBQVUsa0RBQWtELFdBQVcsZ0JBQWdCLDhCQUE4QixpREFBaUQsK0JBQStCLFdBQVc7QUFDak87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQsd0I7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRCwwQiIsImZpbGUiOiIuL2xpYi9VdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVXRpbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWMxNTQzMTRkOTU2Yjg4ZjBkNjIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX1V0aWxzQnJvd3NlciA9IHJlcXVpcmUoXCIuL1V0aWxzQnJvd3NlclwiKTtcblxudmFyIF9VdGlsc0Jyb3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNCcm93c2VyKTtcblxudmFyIF9VdGlsc0Nvb2tpZSA9IHJlcXVpcmUoXCIuL1V0aWxzQ29va2llXCIpO1xuXG52YXIgX1V0aWxzQ29va2llMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQ29va2llKTtcblxudmFyIF9VdGlsc0RvY3VtZW50ID0gcmVxdWlyZShcIi4vVXRpbHNEb2N1bWVudFwiKTtcblxudmFyIF9VdGlsc0RvY3VtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzRG9jdW1lbnQpO1xuXG52YXIgX1V0aWxzRE9NID0gcmVxdWlyZShcIi4vVXRpbHNET01cIik7XG5cbnZhciBfVXRpbHNET00yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNET00pO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4vVXRpbHNTY3JlZW5cIik7XG5cbnZhciBfVXRpbHNTY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTY3JlZW4pO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4vVXRpbHNTeXN0ZW1cIik7XG5cbnZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXG52YXIgX1V0aWxzVXNlciA9IHJlcXVpcmUoXCIuL1V0aWxzVXNlclwiKTtcblxudmFyIF9VdGlsc1VzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNVc2VyKTtcblxudmFyIF9VdGlsc1dpbmRvdyA9IHJlcXVpcmUoXCIuL1V0aWxzV2luZG93XCIpO1xuXG52YXIgX1V0aWxzV2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzV2luZG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBHbG9iYWwgVXRpbHMgY2xhc3NcbiAqL1xudmFyIFV0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kLlxuICAgICAqL1xuICAgIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChkb21Ob2RlKSB7XG4gICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb25zb2xlKSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDQwMSwgXCJVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSwgZG9tRG9jdW1lbnQsIHNob3dGb3JjZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFV0aWxzLmZpbmRFbGVtZW50UG9zaXRpb24gbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBVdGlscy5ET00uZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2QuXG4gICAgICovXG4gICAgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSkge1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyg0MDEsIFwiVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlXCIgKyBcIiBVdGlscy5ET00uZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVdGlscy5ET00uZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlLCBzaG93Rm9yY2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNmZXIgc3RhdGljIG1ldGhvZHMgaW50byB0aGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHJlYWxPYmplY3RcbiAgICAgKi9cblxuXG4gICAgVXRpbHMuaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzID0gZnVuY3Rpb24gaW1wbGVtZW50YXRpb25TdGF0aWNNZXRob2RzKHJlYWxPYmplY3QpIHtcbiAgICAgICAgdmFyIHN0YXRpY0NsYXNzID0gcmVhbE9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBPYmplY3Qua2V5cyhzdGF0aWNDbGFzcyk7XG4gICAgICAgIGlmIChtZXRob2RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IF9yZWY7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWxPYmplY3RbbWV0aG9kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZWFsT2JqZWN0W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coNDAxLCBcIlRoYXQgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBcIiArIHN0YXRpY0NsYXNzLm5hbWUgKyBcIi5cIiArIG1ldGhvZCArIFwiIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGljQ2xhc3NbbWV0aG9kXS5hcHBseShzdGF0aWNDbGFzcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBtZXRob2RzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBjYWxsIHN0YWNrIHRyYWNlXG4gICAgICogQHJldHVybiBBcnJheTxPYmplY3Q+XG4gICAgICovXG5cblxuICAgIFV0aWxzLnN0YWNrID0gZnVuY3Rpb24gc3RhY2soKSB7XG4gICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgIHJldHVybiBlICYmIGUuc3RhY2sgJiYgZS5zdGFjay5zcGxpdChcIlxcblwiKS5zbGljZSg1KS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICghcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL14oLiopQCguKilcXC5qczooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IC8oW15cXC88XSspL2lnLmV4ZWMobWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV1bMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKGh0dHB8aHR0cHMpOihbXjpdKyk6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzVdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzRdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gKyBcIjpcIiArIG1hdGNoWzJdIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2ggPSAvXiguKilAKC4qKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoW14oXSspXFxzXFwoKC4qKTooWzAtOV0rKTooWzAtOV0rKVxcKSQvaWcuZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbM10gfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoID0gL15cXHMrYXRcXHMoLiopOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFszXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsxXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFsyXSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHJhbmRvbSBJRFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgVXRpbHMuZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFV0aWxzO1xuXG5VdGlscy5Ccm93c2VyID0gX1V0aWxzQnJvd3NlcjIuZGVmYXVsdDtcblV0aWxzLkNvb2tpZSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdDtcblV0aWxzLkRPTSA9IF9VdGlsc0RPTTIuZGVmYXVsdDtcblV0aWxzLkRvY3VtZW50ID0gX1V0aWxzRG9jdW1lbnQyLmRlZmF1bHQ7XG5VdGlscy5TY3JlZW4gPSBfVXRpbHNTY3JlZW4yLmRlZmF1bHQ7XG5VdGlscy5TeXN0ZW0gPSBfVXRpbHNTeXN0ZW0yLmRlZmF1bHQ7XG5VdGlscy5Vc2VyID0gX1V0aWxzVXNlcjIuZGVmYXVsdDtcblV0aWxzLldpbmRvdyA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHMudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBicm93c2VyXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIGluZm9cbiAgICAgKiBAcmV0dXJuIHt7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ319XG4gICAgICovXG4gICAgQnJvd3Nlci5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJyb3dzZXI6IEJyb3dzZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbW9iaWxlOiBCcm93c2VyLmlzTW9iaWxlKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBCcm93c2VyLmdldFZlcnNpb24oKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGJyb3dzZXIgbmFtZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSB2b2lkIDA7XG4gICAgICAgIGlmIChCcm93c2VyLmlzT3BlcmEoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3BlcmFOZXcoKSkge1xuICAgICAgICAgICAgYnJvd3NlciA9IFwiT3BlcmFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRU5ldygpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzQ2hyb21lKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkNocm9tZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIkZpcmVmb3hcIjtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBcIlNhZmFyaVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPdGhlcigpKSB7XG4gICAgICAgICAgICBicm93c2VyID0gQnJvd3Nlci5nZXRPdGhlck5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3NlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdm9pZCAwO1xuICAgICAgICBpZiAoQnJvd3Nlci5pc09wZXJhKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE9wZXJhVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPcGVyYU5ldygpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPcGVyYU5ld1ZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTVNJRSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNNU0lFTmV3KCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0Nocm9tZSgpKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0ZpcmVmb3goKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzU2FmYXJpKCkpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldFNhZmFyaVZlcnNpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3RoZXIoKSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0T3RoZXJWZXJzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmltIGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEBwYXJhbSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLnRyaW1WZXJzaW9uID0gZnVuY3Rpb24gdHJpbVZlcnNpb24odmVyc2lvbikge1xuICAgICAgICB2YXIgY2hhcnMgPSBbXCI7XCIsIFwiIFwiLCBcIilcIl07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNoYXJzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXIgPSBfcmVmO1xuXG4gICAgICAgICAgICB2YXIgaXggPSB2ZXJzaW9uLmluZGV4T2YoY2hhcik7XG4gICAgICAgICAgICBpZiAoaXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG1vYmlsZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNb2JpbGUgPSBmdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgICAgICAgcmV0dXJuICgvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QobmF2aWdhdG9yLmFwcFZlcnNpb24pXG4gICAgICAgICk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBvcGVyYSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc09wZXJhID0gZnVuY3Rpb24gaXNPcGVyYSgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9wZXJhXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBvcGVyYSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3BlcmFWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XG4gICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG4gICAgICAgIGlmICh2ZXJPZmZzZXQgIT09IC0xKSB7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBvcGVyYSBuZXcgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNPcGVyYU5ldyA9IGZ1bmN0aW9uIGlzT3BlcmFOZXcoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG9wZXJhIG5ldyBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFOZXdWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT1BSXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNU0lFID0gZnVuY3Rpb24gaXNNU0lFKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbXNpZSBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0TVNJRVZlcnNpb24gPSBmdW5jdGlvbiBnZXRNU0lFVmVyc2lvbigpIHtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgbXNpZSBuZXcgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNNU0lFTmV3ID0gZnVuY3Rpb24gaXNNU0lFTmV3KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudC9cIikgIT09IC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG1zaWUgbmV3IGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRNU0lFTmV3VmVyc2lvbiA9IGZ1bmN0aW9uIGdldE1TSUVOZXdWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcInJ2OlwiKSArIDMpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIGNocm9tZSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0Nocm9tZSA9IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBjaHJvbWUgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldENocm9tZVZlcnNpb24gPSBmdW5jdGlvbiBnZXRDaHJvbWVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIHNhZmFyaSBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc1NhZmFyaSA9IGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzYWZhcmkgYnJvd3NlciB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldFNhZmFyaVZlcnNpb24gPSBmdW5jdGlvbiBnZXRTYWZhcmlWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xuICAgICAgICB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJWZXJzaW9uXCIpO1xuICAgICAgICBpZiAodmVyT2Zmc2V0ICE9PSAtMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCcm93c2VyLnRyaW1WZXJzaW9uKHZlcnNpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXQgaXMgZmlyZWZveCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc0ZpcmVmb3ggPSBmdW5jdGlvbiBpc0ZpcmVmb3goKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBmaXJlZm94IGJyb3dzZXIgdmVyc2lvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5nZXRGaXJlZm94VmVyc2lvbiA9IGZ1bmN0aW9uIGdldEZpcmVmb3hWZXJzaW9uKCkge1xuICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBvdGhlciBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc090aGVyID0gZnVuY3Rpb24gaXNPdGhlcigpIHtcbiAgICAgICAgdmFyIG5hbWVPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiIFwiKSArIDE7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICAgICAgcmV0dXJuIG5hbWVPZmZzZXQgPCB2ZXJPZmZzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgb3RoZXIgYnJvd3NlciBuYW1lXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmdldE90aGVyTmFtZSA9IGZ1bmN0aW9uIGdldE90aGVyTmFtZSgpIHtcbiAgICAgICAgdmFyIG5hbWVPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiIFwiKSArIDE7XG4gICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyhuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQpO1xuICAgICAgICBpZiAoYnJvd3Nlci50b0xvd2VyQ2FzZSgpID09PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3NlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBvdGhlciBicm93c2VyIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuZ2V0T3RoZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3RoZXJWZXJzaW9uKCkge1xuICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcbiAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDEpO1xuICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGJyb3dzZXIgc3VwcG9ydFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuICFCcm93c2VyLmlzTVNJRSgpIHx8IHBhcnNlSW50KEJyb3dzZXIuZ2V0TVNJRVZlcnNpb24oKSwgMTApID4gODtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIFdlYktpdCBicm93c2VyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQnJvd3Nlci5pc1dlYktpdCA9IGZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpICE9PSAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIEdlY2tvIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzR2Vja28gPSBmdW5jdGlvbiBpc0dlY2tvKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiR2Vja29cIikgPiAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJLSFRNTFwiKSA9PT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdCBpcyBBbmRyb2lkIGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzQW5kcm9pZCA9IGZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikgPiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIExpbnV4IGJyb3dzZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBCcm93c2VyLmlzTGludXggPSBmdW5jdGlvbiBpc0xpbnV4KCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTGludXhcIikgPiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0IGlzIGlQYWQgYnJvd3NlclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIEJyb3dzZXIuaXNUYWJsZXRQQyA9IGZ1bmN0aW9uIGlzVGFibGV0UEMoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJpUGFkXCIpID4gLTE7XG4gICAgfTtcblxuICAgIHJldHVybiBCcm93c2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCcm93c2VyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL1V0aWxzQnJvd3Nlci50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGNvb2tpZVxuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENvb2tpZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29va2llKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb29raWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtZXRob2QgcmV0dXJucyB0aGUgZmxhZyB3aGV0aGVyIHN1cHBvcnRlZCB0aGlzIHN0b3JhZ2UgdHlwZSBvciBub3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBDb29raWUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRvY3VtZW50KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gXCJzdHJpbmdcIjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBtZXRob2Qgc2V0cyB0aGUgdmFsdWUgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBoYXMgYmVlbiBzZXRcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHBhcmFtIGV4cGlyZXMge251bWJlcn1cbiAgICogQHBhcmFtIHBhdGgge3N0cmluZ31cbiAgICogQHBhcmFtIGRvbWFpbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc2VjdXJlIHtib29sZWFufVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIENvb2tpZS5zZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZXhwaXJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMzA7XG4gICAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IFwiL1wiO1xuICAgIHZhciBkb21haW4gPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIHZhciBzZWN1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IGxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAqL1xuICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhdmUgY29va2llcyBmb3IgMzAgZGF5c1xuICAgICAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB2YXIgZXhwID0gZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlIHZhbHVlIGZvciBzdG9yZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGluZyB2YWx1ZSB0byB0aGUgZG9jdW1lbnQgY29va2llIHN0b3JhZ2VcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsdWUgKyAoZXhwID8gXCI7IGV4cGlyZXM9XCIgKyBleHAgOiBcIlwiKSArIChwYXRoID8gXCI7IHBhdGg9XCIgKyBwYXRoIDogXCJcIikgKyAoZG9tYWluID8gXCI7IGRvbWFpbj1cIiArIGRvbWFpbiA6IFwiXCIpICsgKHNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYWxsIG9rIHJldHVybiB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gQ29va2llLmdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpID09PSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHJlYWRzIHRoZSB2YWx1ZSBhbmQgcmV0dXJucyBpdCBvciByZXR1cm5zIGZhbHNlIGlmIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdFxuICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICovXG5cblxuICBDb29raWUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICovXG4gICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBhcnJheSBmcm9tIGRvY3VtZW50IGNvb2tpZSBzcGxpdCBieSA7XG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBhcnJDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG4gICAgICAgICAqL1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJDb29raWUsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaSA9IF9yZWY7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmltIGFuZCBzcGxpdCBlYWNoIGNvb2tpZSBieSA9IGZvciBrZXkgdmFsdWUgcGFyZVxuICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgdiA9IGkudHJpbSgpLnNwbGl0KFwiPVwiLCAyKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiBpdCBpcyBjb3JyZWN0IGNvb2tpZSBrZXkgcmV0dXJuIHRoZSB2YWx1ZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh2WzBdID09PSBrZXkpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdGhlIHZhbHVlIHdhcyBmb3VuZCByZXR1cm4gdGhlIHZhbHVlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodlsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgdmFsdWUgd2FzIG5vdCBmb3VuZCByZXR1cm4gZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHJlbW92ZXMgdGhlIHZhbHVlIGFuZCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3RcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBDb29raWUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuICAgICAgICovXG4gICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IGVtcHR5IG92ZXJkdWUgdmFsdWUgYnkga2V5XG4gICAgICAgICAqL1xuICAgICAgICBDb29raWUuc2V0SXRlbShjaGVja1N1cHBvcnQsIGtleSwgXCJcIiwgLTEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYWxsIG9rIHJldHVybiB0cnVlXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gQ29va2llLmdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpID09PSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGFycmF5IG9mIHN0cmluZyBvZiBhdmFpbGFibGUga2V5c1xuICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuXG5cbiAgQ29va2llLmdldEtleXMgPSBmdW5jdGlvbiBnZXRLZXlzKGNoZWNrU3VwcG9ydCkge1xuICAgIHRyeSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG4gICAgICAgKi9cbiAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYXJyYXkgb2YgYXZhaWxhYmxlIGtleXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGFycktleXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgYXJyYXkgZnJvbSBkb2N1bWVudCBjb29raWUgc3BsaXQgYnkgO1xuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgYXJyQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY29va2llc1xuICAgICAgICAgKi9cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFyckNvb2tpZSwgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaSA9IF9yZWYyO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJpbSBhbmQgc3BsaXQgZWFjaCBjb29raWUgYnkgPSBmb3Iga2V5IHZhbHVlIHBhcmVcbiAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIHYgPSBpLnRyaW0oKS5zcGxpdChcIj1cIiwgMik7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQWRkIGtleSB0byB0aGUgbGlzdFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGFycktleXMucHVzaCh2WzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyS2V5cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIGNsZWFucyB0aGUgc3RvcmFnZSBhbmQgcmV0dXJuIHRydWUgaWYgaXQgaXMgZW1wdHlcbiAgICogQHBhcmFtIGNoZWNrU3VwcG9ydCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgQ29va2llLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoY2hlY2tTdXBwb3J0KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcbiAgICAgICAqL1xuICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdmFyIGFycktleXMgPSBDb29raWUuZ2V0S2V5cyhjaGVja1N1cHBvcnQpO1xuICAgICAgICBpZiAoYXJyS2V5cykge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhcnJLZXlzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgICAgIHZhciBfcmVmMztcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICAgICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGkgPSBfcmVmMztcblxuICAgICAgICAgICAgQ29va2llLnJlbW92ZUl0ZW0oY2hlY2tTdXBwb3J0LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCkubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb29raWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvb2tpZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0Nvb2tpZS50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGRvY3VtZW50XG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9jdW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCBoZWlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIERvY3VtZW50LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiBNYXRoLm1heChvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCB3aWR0aFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblxuICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgdG9wIHNjcm9sbFxuICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIERvY3VtZW50LmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiBvYmpXaW5kb3cucGFnZVlPZmZzZXQgfHwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keSAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgZG9jdW1lbnQgbGVmdCBzY3JvbGxcbiAgICAgKiBAcGFyYW0gb2JqV2luZG93XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiBvYmpXaW5kb3cucGFnZVhPZmZzZXQgfHwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkgJiYgb2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBkb2N1bWVudCBzY3JvbGxzXG4gICAgICogQHBhcmFtIG9ialdpbmRvd1xuICAgICAqIEByZXR1cm4ge3tsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX1cbiAgICAgKi9cblxuXG4gICAgRG9jdW1lbnQuZ2V0U2Nyb2xsID0gZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IERvY3VtZW50LmdldFNjcm9sbExlZnQob2JqV2luZG93KSxcbiAgICAgICAgICAgIHRvcDogRG9jdW1lbnQuZ2V0U2Nyb2xsVG9wKG9ialdpbmRvdylcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERvY3VtZW50O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9VdGlsc0RvY3VtZW50LnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggRE9NXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET00oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET00pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBlbGVtZW50IHNpemVzIGFuZCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBkb21Ob2RlXG4gICAgICogQHBhcmFtIGRvbURvY3VtZW50XG4gICAgICogQHBhcmFtIHNob3dGb3JjZVxuICAgICAqIEByZXR1cm4ge3tib3R0b206IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuICAgIERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGRvbU5vZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGRvbU5vZGUgPSBkb21Eb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVzID0gdm9pZCAwO1xuICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG4gICAgICAgICAgICBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpO1xuICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9ialJldCA9IHtcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb21Ob2RlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIGRlZmF1bHQgbWV0aG9kIGlzIHN1cHBvcnRlZCB0aGFuIHVzZSBpdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICBvYmpSZXQgPSBkb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElFIGhhY2tcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBvYmpSZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqUmV0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBvYmpSZXQuaGVpZ2h0IHx8IGRvbU5vZGUuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvYmpSZXQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IG9ialJldC5yaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBvYmpSZXQudG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogb2JqUmV0LndpZHRoIHx8IGRvbU5vZGUuY2xpZW50V2lkdGhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBXcml0ZSB0aGUgZWxlbWVudCBpbiBhIHRlbXBvcmFyeSB2YXJpYWJsZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBkb21FbGVtZW50ID0gZG9tTm9kZTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxjdWxhdGVkIGJhc2ljIHBhcmFtZXRlcnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBvYmpDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBkb21FbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRvbUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFyZSBwYXNzZWQgb24gdG8gYWxsIHBhcmVudHMgYW5kIHRha2UgaW50byBhY2NvdW50IHRoZWlyIG9mZnNldHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB3aGlsZSAoZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBvYmpDb29yZGluYXRlcy54ICs9IGRvbUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgb2JqQ29vcmRpbmF0ZXMueSArPSBkb21FbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgb2JqUmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IG9iakNvb3JkaW5hdGVzLnkgKyBvYmpDb29yZGluYXRlcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogb2JqQ29vcmRpbmF0ZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvYmpDb29yZGluYXRlcy54LFxuICAgICAgICAgICAgICAgICAgICByaWdodDogb2JqQ29vcmRpbmF0ZXMueCArIG9iakNvb3JkaW5hdGVzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IG9iakNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBvYmpDb29yZGluYXRlcy53aWR0aFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dGb3JjZSAmJiBkb21Ob2RlKSB7XG4gICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gc2l6ZSBhbmQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBvYmpSZXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgZWxlbWVudCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBkb21Ob2RlXG4gICAgICogQHBhcmFtIHNob3dGb3JjZVxuICAgICAqIEByZXR1cm4ge3t0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfX1cbiAgICAgKi9cbiAgICBET00uZmluZEVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSkge1xuICAgICAgICB2YXIgc2hvd0ZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgIHZhciB0b3AgPSAwO1xuICAgICAgICB3aGlsZSAoZG9tTm9kZSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChzaG93Rm9yY2UpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZXMgJiYgc3R5bGVzLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZWZ0ICs9IGRvbU5vZGUub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHRvcCArPSBkb21Ob2RlLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGRvbU5vZGUgPSBkb21Ob2RlLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIGlmIChzaG93Rm9yY2UgJiYgZG9tTm9kZSkge1xuICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgbGVmdDogbGVmdFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGZ1bmNcbiAgICAgKi9cblxuXG4gICAgRE9NLmFkZEV2ZW50ID0gZnVuY3Rpb24gYWRkRXZlbnQob2JqLCBuYW1lLCBmdW5jKSB7XG4gICAgICAgIGlmIChvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgb2JqLmF0dGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZnVuY1xuICAgICAqL1xuXG5cbiAgICBET00ucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcbiAgICAgICAgaWYgKG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBvYmouZGV0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgZnVuYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBET00uaGFzQ2xhc3NOYW1lID0gZnVuY3Rpb24gaGFzQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuXG5cbiAgICBET00uYWRkQ2xhc3NOYW1lID0gZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoIURPTS5oYXNDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdmFyIGNsID0gZWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsID8gY2wgKyBcIiBcIiArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjbGFzcyBuYW1lXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gY2xhc3Nlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXNbaV0gPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3MgbmFtZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB0b2dnbGVcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cblxuXG4gICAgRE9NLnRvZ2dsZUNsYXNzTmFtZSA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUsIHRvZ2dsZSkge1xuICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGNsYXNzIG5hbWVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBvbGRDbGFzc05hbWVcbiAgICAgKiBAcGFyYW0gbmV3Q2xhc3NOYW1lXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG5cblxuICAgIERPTS5yZXBsYWNlQ2xhc3MgPSBmdW5jdGlvbiByZXBsYWNlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NOYW1lLCBuZXdDbGFzc05hbWUpIHtcbiAgICAgICAgRE9NLnJlbW92ZUNsYXNzTmFtZShlbGVtZW50LCBvbGRDbGFzc05hbWUpO1xuICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIG5ld0NsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGVsZW1lbnQgYnkgdGFnIG5hbWUgYW5kIGluZGV4XG4gICAgICogQHBhcmFtIHRuXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtOb2RlfVxuICAgICAqL1xuXG5cbiAgICBET00uZ2V0RWxlbWVudEJ5VGFnTmFtZSA9IGZ1bmN0aW9uIGdldEVsZW1lbnRCeVRhZ05hbWUodG4sIGNvbnRleHQsIGluZGV4KSB7XG4gICAgICAgIHZhciBjb250ID0gY29udGV4dCB8fCBkb2N1bWVudDtcbiAgICAgICAgdmFyIGVscyA9IGNvbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodG4pO1xuICAgICAgICBpZiAobnVsbCA9PSBpbmRleCB8fCBpc05hTihpbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZWxzW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRE9NO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNET00udHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBzY3JlZW5cbiAqL1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmVlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcmVlbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBpbmZvXG4gICAgICogQHJldHVybiB7e2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fX1cbiAgICAgKi9cbiAgICBTY3JlZW4uZ2V0SW5mbyA9IGZ1bmN0aW9uIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdmFpbGFibGVTaXplOiBTY3JlZW4uZ2V0QXZhaWxhYmxlU2l6ZXMoKSxcbiAgICAgICAgICAgIGNvbG9yRGVwdGg6IFNjcmVlbi5nZXRDb2xvckRlcHRoKCksXG4gICAgICAgICAgICBwaXhlbFJhdGlvOiBTY3JlZW4uZ2V0UGl4ZWxSYXRpbygpLFxuICAgICAgICAgICAgc2l6ZTogU2NyZWVuLmdldFNpemVzKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gaGVpZ2h0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi5oZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHdpZHRoXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4ud2lkdGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHNpemVzXG4gICAgICogQHJldHVybiB7e2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldFNpemVzID0gZnVuY3Rpb24gZ2V0U2l6ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFNjcmVlbi5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHdpZHRoOiBTY3JlZW4uZ2V0V2lkdGgoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBoZWlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmF2YWlsSGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiB3aWR0aFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIFNjcmVlbi5nZXRBdmFpbGFibGVXaWR0aCA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZVdpZHRoKCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLmF2YWlsV2lkdGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgc2NyZWVuIHNpemVzXG4gICAgICogQHJldHVybiB7e2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldEF2YWlsYWJsZVNpemVzID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlU2l6ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQoKSxcbiAgICAgICAgICAgIHdpZHRoOiBTY3JlZW4uZ2V0QXZhaWxhYmxlV2lkdGgoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBwaXhlbCByYXRpb1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuXG4gICAgU2NyZWVuLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbiBnZXRQaXhlbFJhdGlvKCkge1xuICAgICAgICB2YXIgcmF0aW8gPSAxO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuc2NyZWVuLnN5c3RlbVhEUEkgPiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJKSB7XG4gICAgICAgICAgICByYXRpbyA9IHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSAvIHdpbmRvdy5zY3JlZW4ubG9naWNhbFhEUEk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYXRpbztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBzY3JlZW4gY29sb3IgZGVwdGhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cblxuICAgIFNjcmVlbi5nZXRDb2xvckRlcHRoID0gZnVuY3Rpb24gZ2V0Q29sb3JEZXB0aCgpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi5jb2xvckRlcHRoO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NyZWVuO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTY3JlZW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNTY3JlZW4udHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggc3lzdGVtXG4gKi9cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTeXN0ZW0oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTeXN0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzeXN0ZW0gaW5mb1xuICAgICAqIEByZXR1cm4ge3tuYW1lOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZ319XG4gICAgICovXG4gICAgU3lzdGVtLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogU3lzdGVtLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHZlcnNpb246IFN5c3RlbS5nZXRWZXJzaW9uKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBPUyBuYW1lXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBTeXN0ZW0uZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHZhciBvcyA9IFwiXCI7XG4gICAgICAgIHZhciBjbGllbnRTdHJpbmdzID0gW3tcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyAxMC4wfFdpbmRvd3MgTlQgMTAuMCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDEwXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDguMVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgOFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgN1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9XaW5kb3dzIE5UIDYuMC8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgVmlzdGFcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvV2luZG93cyBOVCA1LjIvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIFNlcnZlciAyMDAzXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMXxXaW5kb3dzIFhQKS8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgWFBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNS4wfFdpbmRvd3MgMjAwMCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDIwMDBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBNRVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyA5OHxXaW45OCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIDk4XCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyA5NVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA0LjB8V2luTlQ0LjB8V2luTlR8V2luZG93cyBOVCkvLFxuICAgICAgICAgICAgczogXCJXaW5kb3dzIE5UIDQuMFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9XaW5kb3dzIENFLyxcbiAgICAgICAgICAgIHM6IFwiV2luZG93cyBDRVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9XaW4xNi8sXG4gICAgICAgICAgICBzOiBcIldpbmRvd3MgMy4xMVwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9BbmRyb2lkLyxcbiAgICAgICAgICAgIHM6IFwiQW5kcm9pZFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC9PcGVuQlNELyxcbiAgICAgICAgICAgIHM6IFwiT3BlbiBCU0RcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvU3VuT1MvLFxuICAgICAgICAgICAgczogXCJTdW4gT1NcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKExpbnV4fFgxMSkvLFxuICAgICAgICAgICAgczogXCJMaW51eFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oaVBob25lfGlQYWR8aVBvZCkvLFxuICAgICAgICAgICAgczogXCJpT1NcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvTWFjIE9TIFgvLFxuICAgICAgICAgICAgczogXCJNYWMgT1MgWFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHI6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvLFxuICAgICAgICAgICAgczogXCJNYWMgT1NcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvUU5YLyxcbiAgICAgICAgICAgIHM6IFwiUU5YXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL1VOSVgvLFxuICAgICAgICAgICAgczogXCJVTklYXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL0JlT1MvLFxuICAgICAgICAgICAgczogXCJCZU9TXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcjogL09TXFwvMi8sXG4gICAgICAgICAgICBzOiBcIk9TLzJcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvLFxuICAgICAgICAgICAgczogXCJTZWFyY2ggQm90XCJcbiAgICAgICAgfV07XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNsaWVudFN0cmluZ3MsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY3MgPSBfcmVmO1xuXG4gICAgICAgICAgICBpZiAoY3Muci50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgb3MgPSBjcy5zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBPUyB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBTeXN0ZW0uZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICAgIHZhciBvcyA9IFN5c3RlbS5nZXROYW1lKCk7XG4gICAgICAgIHZhciBvc1ZlcnNpb24gPSBcIlwiO1xuICAgICAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XG4gICAgICAgICAgICBvc1ZlcnNpb24gPSAvV2luZG93cyAoLiopLy5leGVjKG9zKVsxXTtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvcykge1xuICAgICAgICAgICAgY2FzZSBcIk1hYyBPUyBYXCI6XG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFsuX1xcZF0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBbmRyb2lkXCI6XG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uID0gL0FuZHJvaWQgKFsuX1xcZF0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpT1NcIjpcbiAgICAgICAgICAgICAgICB2YXIgcmVnID0gL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vLmV4ZWMobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xuICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IHJlZ1sxXSArIFwiLlwiICsgcmVnWzJdICsgXCIuXCIgKyAocmVnWzNdIHx8IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NWZXJzaW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3lzdGVtO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTeXN0ZW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNTeXN0ZW0udHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVXRpbHNCcm93c2VyID0gcmVxdWlyZShcIi4vVXRpbHNCcm93c2VyXCIpO1xuXG52YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXG52YXIgX1V0aWxzU2NyZWVuID0gcmVxdWlyZShcIi4vVXRpbHNTY3JlZW5cIik7XG5cbnZhciBfVXRpbHNTY3JlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTY3JlZW4pO1xuXG52YXIgX1V0aWxzU3lzdGVtID0gcmVxdWlyZShcIi4vVXRpbHNTeXN0ZW1cIik7XG5cbnZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVc2VyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXIgaW5mb1xuICAgICAqIEByZXR1cm4ge3ticm93c2VyOiB7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ30sIHNjcmVlbjoge2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fSwgc3lzdGVtOiB7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fX1cbiAgICAgKi9cbiAgICBVc2VyLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnJvd3NlcjogX1V0aWxzQnJvd3NlcjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzY3JlZW46IF9VdGlsc1NjcmVlbjIuZGVmYXVsdC5nZXRJbmZvKCksXG4gICAgICAgICAgICBzeXN0ZW06IF9VdGlsc1N5c3RlbTIuZGVmYXVsdC5nZXRJbmZvKClcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFVzZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFVzZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNVc2VyLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHdpbmRvd1xuICovXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2luZG93KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2luZG93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd2luZG93IGhlaWdodFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgV2luZG93LmdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aW5kb3cgd2lkdGhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuXG5cbiAgICBXaW5kb3cuZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aW5kb3cgc2l6ZXNcbiAgICAgKiBAcmV0dXJuIHt7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fVxuICAgICAqL1xuXG5cbiAgICBXaW5kb3cuZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFdpbmRvdy5nZXRIZWlnaHQob2JqV2luZG93KSxcbiAgICAgICAgICAgIHdpZHRoOiBXaW5kb3cuZ2V0V2lkdGgob2JqV2luZG93KVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gV2luZG93O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBXaW5kb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHNXaW5kb3cudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYjQ4MjZmNjU0ODkxYmUwYmRhYiIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2xpYi9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2pCQSwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNELHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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aUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLHVDQUF1QyxnQkFBZ0I7O0FBRTlGLG1EQUFrRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXhKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsVUFBVSxrREFBa0QsV0FBVyxnQkFBZ0IsOEJBQThCLGlEQUFpRCwrQkFBK0IsV0FBVztBQUNsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtREFBa0QsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV4SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNENBQTJDLGNBQWMsdWc3RSIsImZpbGUiOiIuL2Rpc3Qvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVXRpbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmI0ODI2ZjY1NDg5MWJlMGJkYWIiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4vaW5kZXguaHRtbFwiKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi8uLi9saWIvVXRpbHMuanNcIik7XG5mb3IgKHZhciBwcm9wIGluIFV0aWxzKSB7XG4gICAgaWYgKFV0aWxzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHZhciBpc0NsYXNzID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIHByb3AyIGluIFV0aWxzW3Byb3BdKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHNbcHJvcF0uaGFzT3duUHJvcGVydHkocHJvcDIpKSB7XG4gICAgICAgICAgICAgICAgaXNDbGFzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LndyaXRlKFwiPGI+VXRpbHMuXCIgKyBwcm9wICsgXCIuXCIgKyBwcm9wMiArIFwiPC9iPiA8YnIvPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC53cml0ZShcIjxiPlV0aWxzLlwiICsgcHJvcCArIFwiPC9iPiA8YnIvPlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaW1wbGUtamF2YXNjcmlwdC1leGFtcGxlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2ltcGxlLWphdmFzY3JpcHQtZXhhbXBsZS9pbmRleC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVXRpbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXG4vKioqLyB9LFxuLyogMSAqLyxcbi8qIDIgKi8sXG4vKiAzICovLFxuLyogNCAqLyxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdHZhciBfVXRpbHNCcm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzQnJvd3Nlcik7XG5cdFxuXHR2YXIgX1V0aWxzQ29va2llID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdHZhciBfVXRpbHNDb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNDb29raWUpO1xuXHRcblx0dmFyIF9VdGlsc0RvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0XG5cdHZhciBfVXRpbHNEb2N1bWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RvY3VtZW50KTtcblx0XG5cdHZhciBfVXRpbHNET00gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHRcblx0dmFyIF9VdGlsc0RPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0RPTSk7XG5cdFxuXHR2YXIgX1V0aWxzU2NyZWVuID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHR2YXIgX1V0aWxzU2NyZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU2NyZWVuKTtcblx0XG5cdHZhciBfVXRpbHNTeXN0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdHZhciBfVXRpbHNTeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNTeXN0ZW0pO1xuXHRcblx0dmFyIF9VdGlsc1VzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdHZhciBfVXRpbHNVc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzVXNlcik7XG5cdFxuXHR2YXIgX1V0aWxzV2luZG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdFxuXHR2YXIgX1V0aWxzV2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzV2luZG93KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCBVdGlscyBjbGFzc1xuXHQgKi9cblx0dmFyIFV0aWxzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVXRpbHMoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEBkZXByZWNhdGVkIFV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kLlxuXHQgICAgICovXG5cdCAgICBVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdCAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIGlmICgodHlwZW9mIGNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb25zb2xlKSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgY29uc29sZS5sb2coNDAxLCBcIlV0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kLlwiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIFV0aWxzLkRPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSwgZG9tRG9jdW1lbnQsIHNob3dGb3JjZSk7XG5cdCAgICB9O1xuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQGRlcHJlY2F0ZWQgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiBtZXRob2Qgd2FzIGRlcHJlY2F0ZWQgYW5kIHNvb24gd2lsbCBiZSByZW1vdmVkLiBQbGVhc2UgdXNlIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZC5cblx0ICAgICAqL1xuXHQgICAgVXRpbHMuZmluZEVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpbmRFbGVtZW50UG9zaXRpb24oZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBzaG93Rm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXHRcblx0ICAgICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY29uc29sZSkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUubG9nKDQwMSwgXCJVdGlscy5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZCB3YXMgZGVwcmVjYXRlZCBhbmQgc29vbiB3aWxsIGJlIHJlbW92ZWQuIFBsZWFzZSB1c2VcIiArIFwiIFV0aWxzLkRPTS5maW5kRWxlbWVudFBvc2l0aW9uIG1ldGhvZC5cIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBVdGlscy5ET00uZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlLCBzaG93Rm9yY2UpO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogVHJhbnNmZXIgc3RhdGljIG1ldGhvZHMgaW50byB0aGUgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0gcmVhbE9iamVjdFxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFV0aWxzLmltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyA9IGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uU3RhdGljTWV0aG9kcyhyZWFsT2JqZWN0KSB7XG5cdCAgICAgICAgdmFyIHN0YXRpY0NsYXNzID0gcmVhbE9iamVjdC5jb25zdHJ1Y3Rvcjtcblx0ICAgICAgICB2YXIgbWV0aG9kcyA9IE9iamVjdC5rZXlzKHN0YXRpY0NsYXNzKTtcblx0ICAgICAgICBpZiAobWV0aG9kcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSByZXR1cm4gXCJicmVha1wiO1xuXHQgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gX3JlZjtcblx0XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWxPYmplY3RbbWV0aG9kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJlYWxPYmplY3RbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNvbnNvbGUpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coNDAxLCBcIlRoYXQgbWV0aG9kIHdhcyBkZXByZWNhdGVkIGFuZCBzb29uIHdpbGwgYmUgcmVtb3ZlZC4gUGxlYXNlIHVzZSBcIiArIHN0YXRpY0NsYXNzLm5hbWUgKyBcIi5cIiArIG1ldGhvZCArIFwiIG1ldGhvZC5cIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRpY0NsYXNzW21ldGhvZF0uYXBwbHkoc3RhdGljQ2xhc3MsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0XG5cdCAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG1ldGhvZHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3JlZjtcblx0XG5cdCAgICAgICAgICAgICAgICB2YXIgX3JldCA9IF9sb29wKCk7XG5cdFxuXHQgICAgICAgICAgICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgY2FsbCBzdGFjayB0cmFjZVxuXHQgICAgICogQHJldHVybiBBcnJheTxPYmplY3Q+XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgVXRpbHMuc3RhY2sgPSBmdW5jdGlvbiBzdGFjaygpIHtcblx0ICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuXHQgICAgICAgIHJldHVybiBlICYmIGUuc3RhY2sgJiYgZS5zdGFjay5zcGxpdChcIlxcblwiKS5zbGljZSg1KS5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICAgICAgdmFyIG1hdGNoID0gdm9pZCAwO1xuXHQgICAgICAgICAgICBpZiAoIXMpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB7fTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBtYXRjaCA9IC9eKC4qKUAoLiopXFwuanM6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV0gPSAvKFteXFwvPF0rKS9pZy5leGVjKG1hdGNoWzFdKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV0gPSBtYXRjaFsxXVswXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbNF0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsyXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzNdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtYXRjaFsxXSB8fCBcIlwiXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG1hdGNoID0gL14oLiopQChodHRwfGh0dHBzKTooW146XSspOihbMC05XSspOihbMC05XSspJC9pZy5leGVjKHMpO1xuXHQgICAgICAgICAgICBpZiAobWF0Y2gpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBtYXRjaFs1XSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGZpbGU6IG1hdGNoWzNdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbGluZTogbWF0Y2hbNF0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1hdGNoWzFdICsgXCI6XCIgKyBtYXRjaFsyXSB8fCBcIlwiXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG1hdGNoID0gL14oLiopQCguKik6KFswLTldKyk6KFswLTldKykkL2lnLmV4ZWMocyk7XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzRdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gfHwgXCJcIlxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBtYXRjaCA9IC9eXFxzK2F0XFxzKFteKF0rKVxcc1xcKCguKik6KFswLTldKyk6KFswLTldKylcXCkkL2lnLmV4ZWMocyk7XG5cdCAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgICAgICBjb2x1bW46IG1hdGNoWzRdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlsZTogbWF0Y2hbMl0gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBsaW5lOiBtYXRjaFszXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWF0Y2hbMV0gfHwgXCJcIlxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBtYXRjaCA9IC9eXFxzK2F0XFxzKC4qKTooWzAtOV0rKTooWzAtOV0rKSQvaWcuZXhlYyhzKTtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogbWF0Y2hbM10gfHwgXCJcIixcblx0ICAgICAgICAgICAgICAgICAgICBmaWxlOiBtYXRjaFsxXSB8fCBcIlwiLFxuXHQgICAgICAgICAgICAgICAgICAgIGxpbmU6IG1hdGNoWzJdIHx8IFwiXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlwiXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHJldHVybiBzO1xuXHQgICAgICAgIH0pIHx8IFtdO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHJhbmRvbSBJRFxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFV0aWxzLmdldFVJRCA9IGZ1bmN0aW9uIGdldFVJRCgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gVXRpbHM7XG5cdH0oKTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFV0aWxzO1xuXHRcblx0VXRpbHMuQnJvd3NlciA9IF9VdGlsc0Jyb3dzZXIyLmRlZmF1bHQ7XG5cdFV0aWxzLkNvb2tpZSA9IF9VdGlsc0Nvb2tpZTIuZGVmYXVsdDtcblx0VXRpbHMuRE9NID0gX1V0aWxzRE9NMi5kZWZhdWx0O1xuXHRVdGlscy5Eb2N1bWVudCA9IF9VdGlsc0RvY3VtZW50Mi5kZWZhdWx0O1xuXHRVdGlscy5TY3JlZW4gPSBfVXRpbHNTY3JlZW4yLmRlZmF1bHQ7XG5cdFV0aWxzLlN5c3RlbSA9IF9VdGlsc1N5c3RlbTIuZGVmYXVsdDtcblx0VXRpbHMuVXNlciA9IF9VdGlsc1VzZXIyLmRlZmF1bHQ7XG5cdFV0aWxzLldpbmRvdyA9IF9VdGlsc1dpbmRvdzIuZGVmYXVsdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBVdGlscztcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHQvKipcblx0ICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBicm93c2VyXG5cdCAqL1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEJyb3dzZXIoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXIpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGJyb3dzZXIgaW5mb1xuXHQgICAgICogQHJldHVybiB7e2Jyb3dzZXI6IHN0cmluZywgbW9iaWxlOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmd9fVxuXHQgICAgICovXG5cdCAgICBCcm93c2VyLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGJyb3dzZXI6IEJyb3dzZXIuZ2V0TmFtZSgpLFxuXHQgICAgICAgICAgICBtb2JpbGU6IEJyb3dzZXIuaXNNb2JpbGUoKSxcblx0ICAgICAgICAgICAgdmVyc2lvbjogQnJvd3Nlci5nZXRWZXJzaW9uKClcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGJyb3dzZXIgbmFtZVxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG5cdCAgICAgICAgdmFyIGJyb3dzZXIgPSB2b2lkIDA7XG5cdCAgICAgICAgaWYgKEJyb3dzZXIuaXNPcGVyYSgpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBcIk9wZXJhXCI7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3BlcmFOZXcoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gXCJPcGVyYVwiO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUUoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNNU0lFTmV3KCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzQ2hyb21lKCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IFwiQ2hyb21lXCI7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzRmlyZWZveCgpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBcIkZpcmVmb3hcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNTYWZhcmkoKSkge1xuXHQgICAgICAgICAgICBicm93c2VyID0gXCJTYWZhcmlcIjtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPdGhlcigpKSB7XG5cdCAgICAgICAgICAgIGJyb3dzZXIgPSBCcm93c2VyLmdldE90aGVyTmFtZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gYnJvd3Nlcjtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciB2ZXJzaW9uID0gdm9pZCAwO1xuXHQgICAgICAgIGlmIChCcm93c2VyLmlzT3BlcmEoKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPcGVyYVZlcnNpb24oKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNPcGVyYU5ldygpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldE9wZXJhTmV3VmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUUoKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFVmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc01TSUVOZXcoKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRNU0lFTmV3VmVyc2lvbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoQnJvd3Nlci5pc0Nocm9tZSgpKSB7XG5cdCAgICAgICAgICAgIHZlcnNpb24gPSBCcm93c2VyLmdldENocm9tZVZlcnNpb24oKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNGaXJlZm94KCkpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IEJyb3dzZXIuZ2V0RmlyZWZveFZlcnNpb24oKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKEJyb3dzZXIuaXNTYWZhcmkoKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRTYWZhcmlWZXJzaW9uKCk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyLmlzT3RoZXIoKSkge1xuXHQgICAgICAgICAgICB2ZXJzaW9uID0gQnJvd3Nlci5nZXRPdGhlclZlcnNpb24oKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHZlcnNpb247XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBUcmltIGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHBhcmFtIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLnRyaW1WZXJzaW9uID0gZnVuY3Rpb24gdHJpbVZlcnNpb24odmVyc2lvbikge1xuXHQgICAgICAgIHZhciBjaGFycyA9IFtcIjtcIiwgXCIgXCIsIFwiKVwiXTtcblx0ICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjaGFycywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0ICAgICAgICAgICAgdmFyIF9yZWY7XG5cdFxuXHQgICAgICAgICAgICBpZiAoX2lzQXJyYXkpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgIHZhciBjaGFyID0gX3JlZjtcblx0XG5cdCAgICAgICAgICAgIHZhciBpeCA9IHZlcnNpb24uaW5kZXhPZihjaGFyKTtcblx0ICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSkge1xuXHQgICAgICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdmVyc2lvbjtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1vYmlsZVxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzTW9iaWxlID0gZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG5cdCAgICAgICAgcmV0dXJuICgvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QobmF2aWdhdG9yLmFwcFZlcnNpb24pXG5cdCAgICAgICAgKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc09wZXJhID0gZnVuY3Rpb24gaXNPcGVyYSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgIT09IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IG9wZXJhIGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0T3BlcmFWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKTtcblx0ICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xuXHQgICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG5cdCAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG9wZXJhIG5ldyBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNPcGVyYU5ldyA9IGZ1bmN0aW9uIGlzT3BlcmFOZXcoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9QUlwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgb3BlcmEgbmV3IGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0T3BlcmFOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T3BlcmFOZXdWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciB2ZXJPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA0KTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzTVNJRSA9IGZ1bmN0aW9uIGlzTVNJRSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgbXNpZSBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE1TSUVWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRVZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG1zaWUgbmV3IGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc01TSUVOZXcgPSBmdW5jdGlvbiBpc01TSUVOZXcoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnQvXCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBtc2llIG5ldyBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE1TSUVOZXdWZXJzaW9uID0gZnVuY3Rpb24gZ2V0TVNJRU5ld1ZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJydjpcIikgKyAzKTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIGNocm9tZSBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNDaHJvbWUgPSBmdW5jdGlvbiBpc0Nocm9tZSgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBjaHJvbWUgYnJvd3NlciB2ZXJzaW9uXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5nZXRDaHJvbWVWZXJzaW9uID0gZnVuY3Rpb24gZ2V0Q2hyb21lVmVyc2lvbigpIHtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO1xuXHQgICAgICAgIHZhciB2ZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XG5cdCAgICAgICAgcmV0dXJuIEJyb3dzZXIudHJpbVZlcnNpb24odmVyc2lvbik7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBDaGVjayBpZiBpdCBpcyBzYWZhcmkgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzU2FmYXJpID0gZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2FmYXJpIGJyb3dzZXIgdmVyc2lvblxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuZ2V0U2FmYXJpVmVyc2lvbiA9IGZ1bmN0aW9uIGdldFNhZmFyaVZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKTtcblx0ICAgICAgICB2YXIgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xuXHQgICAgICAgIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlZlcnNpb25cIik7XG5cdCAgICAgICAgaWYgKHZlck9mZnNldCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgdmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIGZpcmVmb3ggYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzRmlyZWZveCA9IGZ1bmN0aW9uIGlzRmlyZWZveCgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgZmlyZWZveCBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldEZpcmVmb3hWZXJzaW9uID0gZnVuY3Rpb24gZ2V0RmlyZWZveFZlcnNpb24oKSB7XG5cdCAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIG90aGVyIGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc090aGVyID0gZnVuY3Rpb24gaXNPdGhlcigpIHtcblx0ICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG5cdCAgICAgICAgcmV0dXJuIG5hbWVPZmZzZXQgPCB2ZXJPZmZzZXQ7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgb3RoZXIgYnJvd3NlciBuYW1lXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5nZXRPdGhlck5hbWUgPSBmdW5jdGlvbiBnZXRPdGhlck5hbWUoKSB7XG5cdCAgICAgICAgdmFyIG5hbWVPZmZzZXQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lmxhc3RJbmRleE9mKFwiIFwiKSArIDE7XG5cdCAgICAgICAgdmFyIHZlck9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIvXCIpO1xuXHQgICAgICAgIHZhciBicm93c2VyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcblx0ICAgICAgICBpZiAoYnJvd3Nlci50b0xvd2VyQ2FzZSgpID09PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcblx0ICAgICAgICAgICAgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gYnJvd3Nlcjtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBvdGhlciBicm93c2VyIHZlcnNpb25cblx0ICAgICAqIEByZXR1cm4ge3N0cmluZ31cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmdldE90aGVyVmVyc2lvbiA9IGZ1bmN0aW9uIGdldE90aGVyVmVyc2lvbigpIHtcblx0ICAgICAgICB2YXIgbmFtZU9mZnNldCA9IG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcblx0ICAgICAgICB2YXIgdmVyT2Zmc2V0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZihcIi9cIik7XG5cdCAgICAgICAgdmFyIHZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcblx0ICAgICAgICByZXR1cm4gQnJvd3Nlci50cmltVmVyc2lvbih2ZXJzaW9uKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGJyb3dzZXIgc3VwcG9ydFxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG5cdCAgICAgICAgcmV0dXJuICFCcm93c2VyLmlzTVNJRSgpIHx8IHBhcnNlSW50KEJyb3dzZXIuZ2V0TVNJRVZlcnNpb24oKSwgMTApID4gODtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIFdlYktpdCBicm93c2VyXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEJyb3dzZXIuaXNXZWJLaXQgPSBmdW5jdGlvbiBpc1dlYktpdCgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQXBwbGVXZWJLaXQvXCIpICE9PSAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIEdlY2tvIGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc0dlY2tvID0gZnVuY3Rpb24gaXNHZWNrbygpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiR2Vja29cIikgPiAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJLSFRNTFwiKSA9PT0gLTE7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBDaGVjayBpZiBpdCBpcyBBbmRyb2lkIGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc0FuZHJvaWQgPSBmdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikgPiAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIExpbnV4IGJyb3dzZXJcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgQnJvd3Nlci5pc0xpbnV4ID0gZnVuY3Rpb24gaXNMaW51eCgpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTGludXhcIikgPiAtMTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGl0IGlzIGlQYWQgYnJvd3NlclxuXHQgICAgICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBCcm93c2VyLmlzVGFibGV0UEMgPSBmdW5jdGlvbiBpc1RhYmxldFBDKCkge1xuXHQgICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJpUGFkXCIpID4gLTE7XG5cdCAgICB9O1xuXHRcblx0ICAgIHJldHVybiBCcm93c2VyO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBCcm93c2VyO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGNvb2tpZVxuXHQgKi9cblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIENvb2tpZSA9IGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBDb29raWUoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29va2llKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRoZSBtZXRob2QgcmV0dXJucyB0aGUgZmxhZyB3aGV0aGVyIHN1cHBvcnRlZCB0aGlzIHN0b3JhZ2UgdHlwZSBvciBub3Rcblx0ICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgKi9cblx0ICBDb29raWUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcblx0ICAgIHJldHVybiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZG9jdW1lbnQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZG9jdW1lbnQuY29va2llID09PSBcInN0cmluZ1wiO1xuXHQgIH07XG5cdCAgLyoqXG5cdCAgICogVGhlIG1ldGhvZCBzZXRzIHRoZSB2YWx1ZSBhbmQgcmV0dXJucyB0cnVlIGlmIGl0IGhhcyBiZWVuIHNldFxuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuXHQgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuXHQgICAqIEBwYXJhbSBleHBpcmVzIHtudW1iZXJ9XG5cdCAgICogQHBhcmFtIHBhdGgge3N0cmluZ31cblx0ICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9XG5cdCAgICogQHBhcmFtIHNlY3VyZSB7Ym9vbGVhbn1cblx0ICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAqL1xuXHRcblx0XG5cdCAgQ29va2llLnNldEl0ZW0gPSBmdW5jdGlvbiBzZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5LCB2YWx1ZSkge1xuXHQgICAgdmFyIGV4cGlyZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDMwO1xuXHQgICAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IFwiL1wiO1xuXHQgICAgdmFyIGRvbWFpbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogbG9jYXRpb24uaG9zdG5hbWU7XG5cdCAgICB2YXIgc2VjdXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIjtcblx0XG5cdCAgICB0cnkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcblx0ICAgICAgICovXG5cdCAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogU2F2ZSBjb29raWVzIGZvciAzMCBkYXlzXG5cdCAgICAgICAgICogQHR5cGUge0RhdGV9XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHQgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGV4cGlyZXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblx0ICAgICAgICB2YXIgZXhwID0gZGF0ZS50b1VUQ1N0cmluZygpO1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEVuY29kZSB2YWx1ZSBmb3Igc3RvcmVcblx0ICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBXcml0aW5nIHZhbHVlIHRvIHRoZSBkb2N1bWVudCBjb29raWUgc3RvcmFnZVxuXHQgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWx1ZSArIChleHAgPyBcIjsgZXhwaXJlcz1cIiArIGV4cCA6IFwiXCIpICsgKHBhdGggPyBcIjsgcGF0aD1cIiArIHBhdGggOiBcIlwiKSArIChkb21haW4gPyBcIjsgZG9tYWluPVwiICsgZG9tYWluIDogXCJcIikgKyAoc2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSWYgYWxsIG9rIHJldHVybiB0cnVlXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIENvb2tpZS5nZXRJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSA9PT0gdmFsdWU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSWYgY29va2llIGRvZXMgbm90IHN1cHBvcnRlZCByZXR1cm4gZmFsc2Vcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuXHQgICAgICAgKi9cblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyoqXG5cdCAgICogVGhlIG1ldGhvZCByZWFkcyB0aGUgdmFsdWUgYW5kIHJldHVybnMgaXQgb3IgcmV0dXJucyBmYWxzZSBpZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3Rcblx0ICAgKiBAcGFyYW0gY2hlY2tTdXBwb3J0IHtib29sZWFufVxuXHQgICAqIEBwYXJhbSBrZXkge3N0cmluZ31cblx0ICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG5cdCAgICovXG5cdFxuXHRcblx0ICBDb29raWUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuXHQgICAgICAgKi9cblx0ICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBHZXQgdGhlIGFycmF5IGZyb20gZG9jdW1lbnQgY29va2llIHNwbGl0IGJ5IDtcblx0ICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIGFyckNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjb29raWVzXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYXJyQ29va2llLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuXHQgICAgICAgICAgdmFyIF9yZWY7XG5cdFxuXHQgICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG5cdCAgICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcblx0ICAgICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuXHQgICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG5cdCAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgdmFyIGkgPSBfcmVmO1xuXHRcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogVHJpbSBhbmQgc3BsaXQgZWFjaCBjb29raWUgYnkgPSBmb3Iga2V5IHZhbHVlIHBhcmVcblx0ICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cblx0ICAgICAgICAgICAqL1xuXHQgICAgICAgICAgdmFyIHYgPSBpLnRyaW0oKS5zcGxpdChcIj1cIiwgMik7XG5cdCAgICAgICAgICAvKipcblx0ICAgICAgICAgICAqIElmIGl0IGlzIGNvcnJlY3QgY29va2llIGtleSByZXR1cm4gdGhlIHZhbHVlXG5cdCAgICAgICAgICAgKi9cblx0ICAgICAgICAgIGlmICh2WzBdID09PSBrZXkpIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElmIHRoZSB2YWx1ZSB3YXMgZm91bmQgcmV0dXJuIHRoZSB2YWx1ZVxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2WzFdKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSWYgdGhlIHZhbHVlIHdhcyBub3QgZm91bmQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2Vcblx0ICAgICAgICovXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIC8qKlxuXHQgICAqIFRoZSBtZXRob2QgcmVtb3ZlcyB0aGUgdmFsdWUgYW5kIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdFxuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuXHQgICAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgICAqL1xuXHRcblx0XG5cdCAgQ29va2llLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGNoZWNrU3VwcG9ydCwga2V5KSB7XG5cdCAgICB0cnkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgdGhhdCBzdG9yZSBpcyBzdXBwb3J0ZWRcblx0ICAgICAgICovXG5cdCAgICAgIGlmICghY2hlY2tTdXBwb3J0IHx8IENvb2tpZS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogU2V0IGVtcHR5IG92ZXJkdWUgdmFsdWUgYnkga2V5XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgQ29va2llLnNldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXksIFwiXCIsIC0xKTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBhbGwgb2sgcmV0dXJuIHRydWVcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXR1cm4gQ29va2llLmdldEl0ZW0oY2hlY2tTdXBwb3J0LCBrZXkpID09PSBmYWxzZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAvKipcblx0ICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAqL1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBUaGUgbWV0aG9kIHJldHVybnMgdGhlIGFycmF5IG9mIHN0cmluZyBvZiBhdmFpbGFibGUga2V5c1xuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHJldHVybnMge3N0cmluZ1tdfVxuXHQgICAqL1xuXHRcblx0XG5cdCAgQ29va2llLmdldEtleXMgPSBmdW5jdGlvbiBnZXRLZXlzKGNoZWNrU3VwcG9ydCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgLyoqXG5cdCAgICAgICAqIElmIHRoYXQgc3RvcmUgaXMgc3VwcG9ydGVkXG5cdCAgICAgICAqL1xuXHQgICAgICBpZiAoIWNoZWNrU3VwcG9ydCB8fCBDb29raWUuaXNTdXBwb3J0ZWQoKSkge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFRoZSBhcnJheSBvZiBhdmFpbGFibGUga2V5c1xuXHQgICAgICAgICAqIEB0eXBlIHtBcnJheX1cblx0ICAgICAgICAgKi9cblx0ICAgICAgICB2YXIgYXJyS2V5cyA9IFtdO1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEdldCB0aGUgYXJyYXkgZnJvbSBkb2N1bWVudCBjb29raWUgc3BsaXQgYnkgO1xuXHQgICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cblx0ICAgICAgICAgKi9cblx0ICAgICAgICB2YXIgYXJyQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNvb2tpZXNcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gYXJyQ29va2llLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0ICAgICAgICAgIHZhciBfcmVmMjtcblx0XG5cdCAgICAgICAgICBpZiAoX2lzQXJyYXkyKSB7XG5cdCAgICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG5cdCAgICAgICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG5cdCAgICAgICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuXHQgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIHZhciBpID0gX3JlZjI7XG5cdFxuXHQgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgKiBUcmltIGFuZCBzcGxpdCBlYWNoIGNvb2tpZSBieSA9IGZvciBrZXkgdmFsdWUgcGFyZVxuXHQgICAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICB2YXIgdiA9IGkudHJpbSgpLnNwbGl0KFwiPVwiLCAyKTtcblx0ICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICogQWRkIGtleSB0byB0aGUgbGlzdFxuXHQgICAgICAgICAgICovXG5cdCAgICAgICAgICBhcnJLZXlzLnB1c2godlswXSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBhcnJLZXlzO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIGNvb2tpZSBkb2VzIG5vdCBzdXBwb3J0ZWQgcmV0dXJuIGZhbHNlXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIFtdO1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2Vcblx0ICAgICAgICovXG5cdCAgICAgIHJldHVybiBbXTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIC8qKlxuXHQgICAqIFRoZSBtZXRob2QgY2xlYW5zIHRoZSBzdG9yYWdlIGFuZCByZXR1cm4gdHJ1ZSBpZiBpdCBpcyBlbXB0eVxuXHQgICAqIEBwYXJhbSBjaGVja1N1cHBvcnQge2Jvb2xlYW59XG5cdCAgICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAgICovXG5cdFxuXHRcblx0ICBDb29raWUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihjaGVja1N1cHBvcnQpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiB0aGF0IHN0b3JlIGlzIHN1cHBvcnRlZFxuXHQgICAgICAgKi9cblx0ICAgICAgaWYgKCFjaGVja1N1cHBvcnQgfHwgQ29va2llLmlzU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICB2YXIgYXJyS2V5cyA9IENvb2tpZS5nZXRLZXlzKGNoZWNrU3VwcG9ydCk7XG5cdCAgICAgICAgaWYgKGFycktleXMpIHtcblx0ICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhcnJLZXlzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0ICAgICAgICAgICAgdmFyIF9yZWYzO1xuXHRcblx0ICAgICAgICAgICAgaWYgKF9pc0FycmF5Mykge1xuXHQgICAgICAgICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcblx0ICAgICAgICAgICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdmFyIGkgPSBfcmVmMztcblx0XG5cdCAgICAgICAgICAgIENvb2tpZS5yZW1vdmVJdGVtKGNoZWNrU3VwcG9ydCwgaSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIGFsbCBvayByZXR1cm4gdHJ1ZVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBDb29raWUuZ2V0S2V5cyhjaGVja1N1cHBvcnQpLmxlbmd0aCA9PT0gMDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBjb29raWUgZG9lcyBub3Qgc3VwcG9ydGVkIHJldHVybiBmYWxzZVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgIC8qKlxuXHQgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2Vcblx0ICAgICAgICovXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9O1xuXHRcblx0ICByZXR1cm4gQ29va2llO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBDb29raWU7XG5cbi8qKiovIH0sXG4vKiA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0LyoqXG5cdCAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZG9jdW1lbnRcblx0ICovXG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIERvY3VtZW50KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb2N1bWVudCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgZG9jdW1lbnQgaGVpZ2h0XG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgICAgICovXG5cdCAgICBEb2N1bWVudC5nZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQoKSB7XG5cdCAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXHRcblx0ICAgICAgICByZXR1cm4gTWF0aC5tYXgob2JqV2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgZG9jdW1lbnQgd2lkdGhcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRG9jdW1lbnQuZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIHJldHVybiBNYXRoLm1heChvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCwgb2JqV2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBkb2N1bWVudCB0b3Agc2Nyb2xsXG5cdCAgICAgKiBAcGFyYW0gb2JqV2luZG93XG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRG9jdW1lbnQuZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5wYWdlWU9mZnNldCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IG9ialdpbmRvdy5kb2N1bWVudC5ib2R5ICYmIG9ialdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBkb2N1bWVudCBsZWZ0IHNjcm9sbFxuXHQgICAgICogQHBhcmFtIG9ialdpbmRvd1xuXHQgICAgICogQHJldHVybiB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERvY3VtZW50LmdldFNjcm9sbExlZnQgPSBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgcmV0dXJuIG9ialdpbmRvdy5wYWdlWE9mZnNldCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIG9ialdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keSAmJiBvYmpXaW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGRvY3VtZW50IHNjcm9sbHNcblx0ICAgICAqIEBwYXJhbSBvYmpXaW5kb3dcblx0ICAgICAqIEByZXR1cm4ge3tsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBEb2N1bWVudC5nZXRTY3JvbGwgPSBmdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG5cdCAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXHRcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBsZWZ0OiBEb2N1bWVudC5nZXRTY3JvbGxMZWZ0KG9ialdpbmRvdyksXG5cdCAgICAgICAgICAgIHRvcDogRG9jdW1lbnQuZ2V0U2Nyb2xsVG9wKG9ialdpbmRvdylcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gRG9jdW1lbnQ7XG5cdH0oKTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IERvY3VtZW50O1xuXG4vKioqLyB9LFxuLyogOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIERPTVxuXHQgKi9cblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIERPTSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIERPTSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRE9NKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBlbGVtZW50IHNpemVzIGFuZCBwb3NpdGlvblxuXHQgICAgICogQHBhcmFtIGRvbU5vZGVcblx0ICAgICAqIEBwYXJhbSBkb21Eb2N1bWVudFxuXHQgICAgICogQHBhcmFtIHNob3dGb3JjZVxuXHQgICAgICogQHJldHVybiB7e2JvdHRvbTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlcn19XG5cdCAgICAgKi9cblx0ICAgIERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZG9tTm9kZSkge1xuXHQgICAgICAgIHZhciBkb21Eb2N1bWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG5cdCAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIGlmICh0eXBlb2YgZG9tTm9kZSA9PT0gXCJzdHJpbmdcIikge1xuXHQgICAgICAgICAgICBkb21Ob2RlID0gZG9tRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tTm9kZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBzdHlsZXMgPSB2b2lkIDA7XG5cdCAgICAgICAgaWYgKHNob3dGb3JjZSkge1xuXHQgICAgICAgICAgICBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpO1xuXHQgICAgICAgICAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuXHQgICAgICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBvYmpSZXQgPSB7XG5cdCAgICAgICAgICAgIGJvdHRvbTogMCxcblx0ICAgICAgICAgICAgaGVpZ2h0OiAwLFxuXHQgICAgICAgICAgICBsZWZ0OiAwLFxuXHQgICAgICAgICAgICByaWdodDogMCxcblx0ICAgICAgICAgICAgdG9wOiAwLFxuXHQgICAgICAgICAgICB3aWR0aDogMFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKGRvbU5vZGUpIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElmIGRlZmF1bHQgbWV0aG9kIGlzIHN1cHBvcnRlZCB0aGFuIHVzZSBpdFxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaWYgKGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdCAgICAgICAgICAgICAgICBvYmpSZXQgPSBkb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBJRSBoYWNrXG5cdCAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgIG9ialJldCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICBib3R0b206IG9ialJldC5ib3R0b20sXG5cdCAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBvYmpSZXQuaGVpZ2h0IHx8IGRvbU5vZGUuY2xpZW50SGVpZ2h0LFxuXHQgICAgICAgICAgICAgICAgICAgIGxlZnQ6IG9ialJldC5sZWZ0LFxuXHQgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBvYmpSZXQucmlnaHQsXG5cdCAgICAgICAgICAgICAgICAgICAgdG9wOiBvYmpSZXQudG9wLFxuXHQgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBvYmpSZXQud2lkdGggfHwgZG9tTm9kZS5jbGllbnRXaWR0aFxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICogV3JpdGUgdGhlIGVsZW1lbnQgaW4gYSB0ZW1wb3JhcnkgdmFyaWFibGVcblx0ICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgdmFyIGRvbUVsZW1lbnQgPSBkb21Ob2RlO1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBDYWxjdWxhdGVkIGJhc2ljIHBhcmFtZXRlcnMgb2YgdGhlIGVsZW1lbnRcblx0ICAgICAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG5cdCAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgIHZhciBvYmpDb29yZGluYXRlcyA9IHtcblx0ICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuXHQgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkb21FbGVtZW50Lm9mZnNldFdpZHRoLFxuXHQgICAgICAgICAgICAgICAgICAgIHg6IDAsXG5cdCAgICAgICAgICAgICAgICAgICAgeTogMFxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICogQXJlIHBhc3NlZCBvbiB0byBhbGwgcGFyZW50cyBhbmQgdGFrZSBpbnRvIGFjY291bnQgdGhlaXIgb2Zmc2V0c1xuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICB3aGlsZSAoZG9tRWxlbWVudCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG9iakNvb3JkaW5hdGVzLnggKz0gZG9tRWxlbWVudC5vZmZzZXRMZWZ0O1xuXHQgICAgICAgICAgICAgICAgICAgIG9iakNvb3JkaW5hdGVzLnkgKz0gZG9tRWxlbWVudC5vZmZzZXRUb3A7XG5cdCAgICAgICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cblx0ICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgb2JqUmV0ID0ge1xuXHQgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogb2JqQ29vcmRpbmF0ZXMueSArIG9iakNvb3JkaW5hdGVzLmhlaWdodCxcblx0ICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG9iakNvb3JkaW5hdGVzLmhlaWdodCxcblx0ICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvYmpDb29yZGluYXRlcy54LFxuXHQgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBvYmpDb29yZGluYXRlcy54ICsgb2JqQ29vcmRpbmF0ZXMud2lkdGgsXG5cdCAgICAgICAgICAgICAgICAgICAgdG9wOiBvYmpDb29yZGluYXRlcy55LFxuXHQgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBvYmpDb29yZGluYXRlcy53aWR0aFxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcblx0ICAgICAgICAgICAgZG9tTm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJuIHNpemUgYW5kIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmV0dXJuIG9ialJldDtcblx0ICAgIH07XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGaW5kIGVsZW1lbnQgcG9zaXRpb25cblx0ICAgICAqIEBwYXJhbSBkb21Ob2RlXG5cdCAgICAgKiBAcGFyYW0gc2hvd0ZvcmNlXG5cdCAgICAgKiBAcmV0dXJuIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG5cdCAgICAgKi9cblx0ICAgIERPTS5maW5kRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gZmluZEVsZW1lbnRQb3NpdGlvbihkb21Ob2RlKSB7XG5cdCAgICAgICAgdmFyIHNob3dGb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cdFxuXHQgICAgICAgIHZhciBsZWZ0ID0gMDtcblx0ICAgICAgICB2YXIgdG9wID0gMDtcblx0ICAgICAgICB3aGlsZSAoZG9tTm9kZSkge1xuXHQgICAgICAgICAgICB2YXIgc3R5bGVzID0gdm9pZCAwO1xuXHQgICAgICAgICAgICBpZiAoc2hvd0ZvcmNlKSB7XG5cdCAgICAgICAgICAgICAgICBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAmJiBzdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBkb21Ob2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgbGVmdCArPSBkb21Ob2RlLm9mZnNldExlZnQ7XG5cdCAgICAgICAgICAgIHRvcCArPSBkb21Ob2RlLm9mZnNldFRvcDtcblx0ICAgICAgICAgICAgZG9tTm9kZSA9IGRvbU5vZGUub2Zmc2V0UGFyZW50O1xuXHQgICAgICAgICAgICBpZiAoc2hvd0ZvcmNlICYmIGRvbU5vZGUpIHtcblx0ICAgICAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgdG9wOiB0b3AsXG5cdCAgICAgICAgICAgIGxlZnQ6IGxlZnRcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQWRkIGV2ZW50IGxpc3RlbmVyXG5cdCAgICAgKiBAcGFyYW0gb2JqXG5cdCAgICAgKiBAcGFyYW0gbmFtZVxuXHQgICAgICogQHBhcmFtIGZ1bmNcblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChvYmosIG5hbWUsIGZ1bmMpIHtcblx0ICAgICAgICBpZiAob2JqLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0ICAgICAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuYywgZmFsc2UpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAob2JqLmF0dGFjaEV2ZW50KSB7XG5cdCAgICAgICAgICAgIG9iai5hdHRhY2hFdmVudChcIm9uXCIgKyBuYW1lLCBmdW5jKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJcblx0ICAgICAqIEBwYXJhbSBvYmpcblx0ICAgICAqIEBwYXJhbSBuYW1lXG5cdCAgICAgKiBAcGFyYW0gZnVuY1xuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG9iaiwgbmFtZSwgZnVuYykge1xuXHQgICAgICAgIGlmIChvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jLCBmYWxzZSk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChvYmouZGV0YWNoRXZlbnQpIHtcblx0ICAgICAgICAgICAgb2JqLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzIG5hbWVcblx0ICAgICAqIEBwYXJhbSBlbGVtZW50XG5cdCAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5oYXNDbGFzc05hbWUgPSBmdW5jdGlvbiBoYXNDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIChcIiBcIiArIGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogQWRkIGNsYXNzIG5hbWVcblx0ICAgICAqIEBwYXJhbSBlbGVtZW50XG5cdCAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG5cdCAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00uYWRkQ2xhc3NOYW1lID0gZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuXHQgICAgICAgIGlmICghRE9NLmhhc0NsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpKSB7XG5cdCAgICAgICAgICAgIHZhciBjbCA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsID8gY2wgKyBcIiBcIiArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBSZW1vdmUgY2xhc3MgbmFtZVxuXHQgICAgICogQHBhcmFtIGVsZW1lbnRcblx0ICAgICAqIEBwYXJhbSBjbGFzc05hbWVcblx0ICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IGNsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0ICAgICAgICAgICAgaWYgKGNsYXNzZXNbaV0gPT09IGNsYXNzTmFtZSkge1xuXHQgICAgICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuXHQgICAgICAgIHJldHVybiBlbGVtZW50O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIGNsYXNzIG5hbWVcblx0ICAgICAqIEBwYXJhbSBlbGVtZW50XG5cdCAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG5cdCAgICAgKiBAcGFyYW0gdG9nZ2xlXG5cdCAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBET00udG9nZ2xlQ2xhc3NOYW1lID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSwgdG9nZ2xlKSB7XG5cdCAgICAgICAgaWYgKHRvZ2dsZSkge1xuXHQgICAgICAgICAgICBET00uYWRkQ2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgRE9NLnJlbW92ZUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc05hbWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gZWxlbWVudDtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2UgY2xhc3MgbmFtZVxuXHQgICAgICogQHBhcmFtIGVsZW1lbnRcblx0ICAgICAqIEBwYXJhbSBvbGRDbGFzc05hbWVcblx0ICAgICAqIEBwYXJhbSBuZXdDbGFzc05hbWVcblx0ICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIERPTS5yZXBsYWNlQ2xhc3MgPSBmdW5jdGlvbiByZXBsYWNlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NOYW1lLCBuZXdDbGFzc05hbWUpIHtcblx0ICAgICAgICBET00ucmVtb3ZlQ2xhc3NOYW1lKGVsZW1lbnQsIG9sZENsYXNzTmFtZSk7XG5cdCAgICAgICAgRE9NLmFkZENsYXNzTmFtZShlbGVtZW50LCBuZXdDbGFzc05hbWUpO1xuXHQgICAgICAgIHJldHVybiBlbGVtZW50O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IGVsZW1lbnQgYnkgdGFnIG5hbWUgYW5kIGluZGV4XG5cdCAgICAgKiBAcGFyYW0gdG5cblx0ICAgICAqIEBwYXJhbSBjb250ZXh0XG5cdCAgICAgKiBAcGFyYW0gaW5kZXhcblx0ICAgICAqIEByZXR1cm4ge05vZGV9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRE9NLmdldEVsZW1lbnRCeVRhZ05hbWUgPSBmdW5jdGlvbiBnZXRFbGVtZW50QnlUYWdOYW1lKHRuLCBjb250ZXh0LCBpbmRleCkge1xuXHQgICAgICAgIHZhciBjb250ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblx0ICAgICAgICB2YXIgZWxzID0gY29udC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0bik7XG5cdCAgICAgICAgaWYgKG51bGwgPT0gaW5kZXggfHwgaXNOYU4oaW5kZXgpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGVsc1tpbmRleF07XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gRE9NO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBET007XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIHNjcmVlblxuXHQgKi9cblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFNjcmVlbigpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NyZWVuKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gaW5mb1xuXHQgICAgICogQHJldHVybiB7e2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fX1cblx0ICAgICAqL1xuXHQgICAgU2NyZWVuLmdldEluZm8gPSBmdW5jdGlvbiBnZXRJbmZvKCkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGF2YWlsYWJsZVNpemU6IFNjcmVlbi5nZXRBdmFpbGFibGVTaXplcygpLFxuXHQgICAgICAgICAgICBjb2xvckRlcHRoOiBTY3JlZW4uZ2V0Q29sb3JEZXB0aCgpLFxuXHQgICAgICAgICAgICBwaXhlbFJhdGlvOiBTY3JlZW4uZ2V0UGl4ZWxSYXRpbygpLFxuXHQgICAgICAgICAgICBzaXplOiBTY3JlZW4uZ2V0U2l6ZXMoKVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2NyZWVuIGhlaWdodFxuXHQgICAgICogQHJldHVybnMge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuXHQgICAgICAgIHJldHVybiBzY3JlZW4uaGVpZ2h0O1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiB3aWR0aFxuXHQgICAgICogQHJldHVybnMge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcblx0ICAgICAgICByZXR1cm4gc2NyZWVuLndpZHRoO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiBzaXplc1xuXHQgICAgICogQHJldHVybiB7e2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBoZWlnaHQ6IFNjcmVlbi5nZXRIZWlnaHQoKSxcblx0ICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRXaWR0aCgpXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gaGVpZ2h0XG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVIZWlnaHQoKSB7XG5cdCAgICAgICAgcmV0dXJuIHNjcmVlbi5hdmFpbEhlaWdodDtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gd2lkdGhcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgU2NyZWVuLmdldEF2YWlsYWJsZVdpZHRoID0gZnVuY3Rpb24gZ2V0QXZhaWxhYmxlV2lkdGgoKSB7XG5cdCAgICAgICAgcmV0dXJuIHNjcmVlbi5hdmFpbFdpZHRoO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHNjcmVlbiBzaXplc1xuXHQgICAgICogQHJldHVybiB7e2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0QXZhaWxhYmxlU2l6ZXMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVTaXplcygpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBoZWlnaHQ6IFNjcmVlbi5nZXRBdmFpbGFibGVIZWlnaHQoKSxcblx0ICAgICAgICAgICAgd2lkdGg6IFNjcmVlbi5nZXRBdmFpbGFibGVXaWR0aCgpXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBzY3JlZW4gcGl4ZWwgcmF0aW9cblx0ICAgICAqIEByZXR1cm4ge251bWJlcn1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBTY3JlZW4uZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG5cdCAgICAgICAgdmFyIHJhdGlvID0gMTtcblx0ICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5zY3JlZW4uc3lzdGVtWERQSSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuc2NyZWVuLnN5c3RlbVhEUEkgPiB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJKSB7XG5cdCAgICAgICAgICAgIHJhdGlvID0gd2luZG93LnNjcmVlbi5zeXN0ZW1YRFBJIC8gd2luZG93LnNjcmVlbi5sb2dpY2FsWERQSTtcblx0ICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmF0aW87XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc2NyZWVuIGNvbG9yIGRlcHRoXG5cdCAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgU2NyZWVuLmdldENvbG9yRGVwdGggPSBmdW5jdGlvbiBnZXRDb2xvckRlcHRoKCkge1xuXHQgICAgICAgIHJldHVybiBzY3JlZW4uY29sb3JEZXB0aDtcblx0ICAgIH07XG5cdFxuXHQgICAgcmV0dXJuIFNjcmVlbjtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gU2NyZWVuO1xuXG4vKioqLyB9LFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHQvKipcblx0ICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBzeXN0ZW1cblx0ICovXG5cdFxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBTeXN0ZW0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBTeXN0ZW0oKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN5c3RlbSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgc3lzdGVtIGluZm9cblx0ICAgICAqIEByZXR1cm4ge3tuYW1lOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZ319XG5cdCAgICAgKi9cblx0ICAgIFN5c3RlbS5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBuYW1lOiBTeXN0ZW0uZ2V0TmFtZSgpLFxuXHQgICAgICAgICAgICB2ZXJzaW9uOiBTeXN0ZW0uZ2V0VmVyc2lvbigpXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBPUyBuYW1lXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgU3lzdGVtLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKCkge1xuXHQgICAgICAgIHZhciBvcyA9IFwiXCI7XG5cdCAgICAgICAgdmFyIGNsaWVudFN0cmluZ3MgPSBbe1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIDEwXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIDguMVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgOFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgN1wiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvV2luZG93cyBOVCA2LjAvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgVmlzdGFcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL1dpbmRvd3MgTlQgNS4yLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIFNlcnZlciAyMDAzXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgWFBcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIDIwMDBcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyBNRVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIDk4XCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyA5NVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyxcblx0ICAgICAgICAgICAgczogXCJXaW5kb3dzIE5UIDQuMFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvV2luZG93cyBDRS8sXG5cdCAgICAgICAgICAgIHM6IFwiV2luZG93cyBDRVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvV2luMTYvLFxuXHQgICAgICAgICAgICBzOiBcIldpbmRvd3MgMy4xMVwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvQW5kcm9pZC8sXG5cdCAgICAgICAgICAgIHM6IFwiQW5kcm9pZFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvT3BlbkJTRC8sXG5cdCAgICAgICAgICAgIHM6IFwiT3BlbiBCU0RcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL1N1bk9TLyxcblx0ICAgICAgICAgICAgczogXCJTdW4gT1NcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhMaW51eHxYMTEpLyxcblx0ICAgICAgICAgICAgczogXCJMaW51eFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpLyxcblx0ICAgICAgICAgICAgczogXCJpT1NcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL01hYyBPUyBYLyxcblx0ICAgICAgICAgICAgczogXCJNYWMgT1MgWFwiXG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpLyxcblx0ICAgICAgICAgICAgczogXCJNYWMgT1NcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogL1FOWC8sXG5cdCAgICAgICAgICAgIHM6IFwiUU5YXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9VTklYLyxcblx0ICAgICAgICAgICAgczogXCJVTklYXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9CZU9TLyxcblx0ICAgICAgICAgICAgczogXCJCZU9TXCJcblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIHI6IC9PU1xcLzIvLFxuXHQgICAgICAgICAgICBzOiBcIk9TLzJcIlxuXHQgICAgICAgIH0sIHtcblx0ICAgICAgICAgICAgcjogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLyxcblx0ICAgICAgICAgICAgczogXCJTZWFyY2ggQm90XCJcblx0ICAgICAgICB9XTtcblx0ICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjbGllbnRTdHJpbmdzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuXHQgICAgICAgICAgICB2YXIgX3JlZjtcblx0XG5cdCAgICAgICAgICAgIGlmIChfaXNBcnJheSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcblx0ICAgICAgICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcblx0ICAgICAgICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdmFyIGNzID0gX3JlZjtcblx0XG5cdCAgICAgICAgICAgIGlmIChjcy5yLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0ICAgICAgICAgICAgICAgIG9zID0gY3Mucztcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBvcztcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIEdldCBPUyB2ZXJzaW9uXG5cdCAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgU3lzdGVtLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuXHQgICAgICAgIHZhciBvcyA9IFN5c3RlbS5nZXROYW1lKCk7XG5cdCAgICAgICAgdmFyIG9zVmVyc2lvbiA9IFwiXCI7XG5cdCAgICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xuXHQgICAgICAgICAgICBvc1ZlcnNpb24gPSAvV2luZG93cyAoLiopLy5leGVjKG9zKVsxXTtcblx0ICAgICAgICAgICAgb3MgPSBcIldpbmRvd3NcIjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgc3dpdGNoIChvcykge1xuXHQgICAgICAgICAgICBjYXNlIFwiTWFjIE9TIFhcIjpcblx0ICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSBcIkFuZHJvaWRcIjpcblx0ICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbLl9cXGRdKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClbMV07XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSBcImlPU1wiOlxuXHQgICAgICAgICAgICAgICAgdmFyIHJlZyA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcblx0ICAgICAgICAgICAgICAgIG9zVmVyc2lvbiA9IHJlZ1sxXSArIFwiLlwiICsgcmVnWzJdICsgXCIuXCIgKyAocmVnWzNdIHx8IDApO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBvc1ZlcnNpb247XG5cdCAgICB9O1xuXHRcblx0ICAgIHJldHVybiBTeXN0ZW07XG5cdH0oKTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFN5c3RlbTtcblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdFxuXHR2YXIgX1V0aWxzQnJvd3NlciA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdFxuXHR2YXIgX1V0aWxzQnJvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0Jyb3dzZXIpO1xuXHRcblx0dmFyIF9VdGlsc1NjcmVlbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0dmFyIF9VdGlsc1NjcmVlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc1NjcmVlbik7XG5cdFxuXHR2YXIgX1V0aWxzU3lzdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdFxuXHR2YXIgX1V0aWxzU3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzU3lzdGVtKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIFVzZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBVc2VyKCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVc2VyKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEdldCB1c2VyIGluZm9cblx0ICAgICAqIEByZXR1cm4ge3ticm93c2VyOiB7YnJvd3Nlcjogc3RyaW5nLCBtb2JpbGU6IGJvb2xlYW4sIHZlcnNpb246IHN0cmluZ30sIHNjcmVlbjoge2F2YWlsYWJsZVNpemU6IHtoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcn0sIGNvbG9yRGVwdGg6IG51bWJlciwgcGl4ZWxSYXRpbzogbnVtYmVyLCBzaXplOiB7aGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXJ9fSwgc3lzdGVtOiB7bmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmd9fX1cblx0ICAgICAqL1xuXHQgICAgVXNlci5nZXRJbmZvID0gZnVuY3Rpb24gZ2V0SW5mbygpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBicm93c2VyOiBfVXRpbHNCcm93c2VyMi5kZWZhdWx0LmdldEluZm8oKSxcblx0ICAgICAgICAgICAgc2NyZWVuOiBfVXRpbHNTY3JlZW4yLmRlZmF1bHQuZ2V0SW5mbygpLFxuXHQgICAgICAgICAgICBzeXN0ZW06IF9VdGlsc1N5c3RlbTIuZGVmYXVsdC5nZXRJbmZvKClcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gVXNlcjtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVXNlcjtcblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0LyoqXG5cdCAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggd2luZG93XG5cdCAqL1xuXHRcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgV2luZG93ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gV2luZG93KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaW5kb3cpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHdpbmRvdyBoZWlnaHRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAgICAgKi9cblx0ICAgIFdpbmRvdy5nZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQoKSB7XG5cdCAgICAgICAgdmFyIG9ialdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93O1xuXHRcblx0ICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBHZXQgd2luZG93IHdpZHRoXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIFdpbmRvdy5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuXHQgICAgICAgIHZhciBvYmpXaW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHdpbmRvdztcblx0XG5cdCAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogR2V0IHdpbmRvdyBzaXplc1xuXHQgICAgICogQHJldHVybiB7e2hlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyfX1cblx0ICAgICAqL1xuXHRcblx0XG5cdCAgICBXaW5kb3cuZ2V0U2l6ZXMgPSBmdW5jdGlvbiBnZXRTaXplcygpIHtcblx0ICAgICAgICB2YXIgb2JqV2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3c7XG5cdFxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGhlaWdodDogV2luZG93LmdldEhlaWdodChvYmpXaW5kb3cpLFxuXHQgICAgICAgICAgICB3aWR0aDogV2luZG93LmdldFdpZHRoKG9ialdpbmRvdylcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0XG5cdCAgICByZXR1cm4gV2luZG93O1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBXaW5kb3c7XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dVB6VmpZVFlxSWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTFZekUxTkRNeE5HUTVOVFppT0RobU1HUTJNajlsWmpVMEtpSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWWFJwYkhNdWRITS9PREpoTmlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlZYUnBiSE5DY205M2MyVnlMblJ6UDJZd01qa2lMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMVYwYVd4elEyOXZhMmxsTG5SelB6STFOR01pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFWMGFXeHpSRzlqZFcxbGJuUXVkSE0vWlRrellpSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWWFJwYkhORVQwMHVkSE0vWkRrMU55SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWWFJwYkhOVFkzSmxaVzR1ZEhNL01ETmlaaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VlhScGJITlRlWE4wWlcwdWRITS9Namt5TnlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlZYUnBiSE5WYzJWeUxuUnpQemMzT1RFaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwxVjBhV3h6VjJsdVpHOTNMblJ6UHpneU5UVWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4MVFrRkJaVHRCUVVObU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096czdRVU4wUTBFN08wRkJSVUU3TzBGQlJVRXNjVWRCUVc5SExHMUNRVUZ0UWl4RlFVRkZMRzFDUVVGdFFpdzRTRUZCT0VnN08wRkJSVEZST3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJMSFZEUVVGelF5eDFRMEZCZFVNc1owSkJRV2RDT3p0QlFVVTNSaXhyUkVGQmFVUXNNRU5CUVRCRExEQkVRVUV3UkN4RlFVRkZPenRCUVVWMlNqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzZVVwQlFYZEtPMEZCUTNoS096dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZET3p0QlFVVkVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUWpzN096czdPMEZETjAxQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHdEVRVUZwUkN3d1EwRkJNRU1zTUVSQlFUQkVMRVZCUVVVN08wRkJSWFpLTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYVVJN1FVRkRha0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRXNkMEpCUVhWQ08wRkJRM1pDTEcxS1FVRnJTanRCUVVOc1NqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hqUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWpzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2RDTzBGQlEyaENPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRE96dEJRVVZFTERKQ096czdPenM3UVVNeFYwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRXNjVWRCUVc5SExHMUNRVUZ0UWl4RlFVRkZMRzFDUVVGdFFpdzRTRUZCT0VnN08wRkJSVEZSTEd0RVFVRnBSQ3d3UTBGQk1FTXNNRVJCUVRCRUxFVkJRVVU3TzBGQlJYWktPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4blFrRkJaVHRCUVVObU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFd1FqdEJRVU14UWl4clFrRkJhVUk3UVVGRGFrSXNiMEpCUVcxQ08wRkJRMjVDTEhOQ1FVRnhRanRCUVVOeVFpeHRRa0ZCYTBJN1FVRkRiRUlzY1VKQlFXOUNPMEZCUTNCQ0xIRkNRVUZ2UWp0QlFVTndRaXhsUVVGak8wRkJRMlE3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYTBJN1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRV3RDTzBGQlEyeENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXdENPMEZCUTJ4Q08wRkJRMEVzZDBSQlFYVkVMRzFEUVVGdFF5eHRRMEZCYlVNc2RVTkJRWFZETzBGQlEzQkxPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVVVGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV3UWp0QlFVTXhRaXhyUWtGQmFVSTdRVUZEYWtJc1owSkJRV1U3UVVGRFpqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGclFqdEJRVU5zUWp0QlFVTkJMR2xFUVVGblJEdEJRVU5vUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxU2tGQmMwbzdRVUZEZEVvN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnp0QlFVTllPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h4UWtGQmIwSTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UlFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNa0pCUVRCQ08wRkJRekZDTEd0Q1FVRnBRanRCUVVOcVFpeG5Ra0ZCWlR0QlFVTm1PenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFd1FqdEJRVU14UWl4blFrRkJaVHRCUVVObU96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVd0Q08wRkJRMnhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRV3RDTzBGQlEyeENPMEZCUTBFc2FVUkJRV2RFTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdEtRVUU0U2p0QlFVTTVTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxIRkNRVUZ2UWp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFd1FqdEJRVU14UWl4blFrRkJaVHRCUVVObU96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNLMHBCUVRoS08wRkJRemxLT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGRkJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVU03TzBGQlJVUXNNRUk3T3pzN096dEJRemRUUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4clJFRkJhVVFzTUVOQlFUQkRMREJFUVVFd1JDeEZRVUZGT3p0QlFVVjJTanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2EwSkJRV2xDTzBGQlEycENPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RDUVVGcFFqdEJRVU5xUWpzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJRenM3UVVGRlJDdzBRanM3T3pzN08wRkROMFZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEd0RVFVRnBSQ3d3UTBGQk1FTXNNRVJCUVRCRUxFVkJRVVU3TzBGQlJYWktPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmFVSTdRVUZEYWtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXRTdRVUZEWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3lRa0ZCTUVJN1FVRkRNVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV3UWp0QlFVTXhRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RDUVVGcFFqdEJRVU5xUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVN4NVEwRkJkME1zVVVGQlVUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlowSTdRVUZEYUVJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVTTdPMEZCUlVRc2RVSTdPenM3T3p0QlEzaFJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hyUkVGQmFVUXNNRU5CUVRCRExEQkVRVUV3UkN4RlFVRkZPenRCUVVWMlNqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENMR2RDUVVGblFpdzRRa0ZCT0VJc2FVUkJRV2xFTzBGQlEyaElPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmFVSTdRVUZEYWtJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmFVSTdRVUZEYWtJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmFVSTdRVUZEYWtJN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYVVJN1FVRkRha0k3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYVVJN1FVRkRha0k3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYVVJN1FVRkRha0k3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJaMEk3UVVGRGFFSTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRm5RanRCUVVOb1FqczdPMEZCUjBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUXpzN1FVRkZSQ3d3UWpzN096czdPMEZEYkVoQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHdEVRVUZwUkN3d1EwRkJNRU1zTUVSQlFUQkVMRVZCUVVVN08wRkJSWFpLTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYVVJN1FVRkRha0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ096czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUXNNa3BCUVRCS08wRkJRekZLT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCWjBJN1FVRkRhRUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUXpzN1FVRkZSQ3d3UWpzN096czdPMEZEY0V0Qk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJMSFZEUVVGelF5eDFRMEZCZFVNc1owSkJRV2RDT3p0QlFVVTNSaXhyUkVGQmFVUXNNRU5CUVRCRExEQkVRVUV3UkN4RlFVRkZPenRCUVVWMlNqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENMRlZCUVZVc2EwUkJRV3RFTEZkQlFWY3NaMEpCUVdkQ0xEaENRVUU0UWl4cFJFRkJhVVFzSzBKQlFTdENMRmRCUVZjN1FVRkRhazg3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVTTdPMEZCUlVRc2QwSTdPenM3T3p0QlEzaERRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hyUkVGQmFVUXNNRU5CUVRCRExEQkVRVUV3UkN4RlFVRkZPenRCUVVWMlNqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYTBKQlFXbENPMEZCUTJwQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0Q1FVRnBRanRCUVVOcVFqczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlF6czdRVUZGUkN3d1FpSXNJbVpwYkdVaU9pSXVMMnhwWWk5VmRHbHNjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGd2lWWFJwYkhOY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVZYUnBiSE5jSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpVlhScGJITmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpZ3BJSHRjYm5KbGRIVnliaUJjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwWEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzVjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5TEZ4dUlGeDBYSFJjZEdsa09pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNiMkZrWldRNklHWmhiSE5sWEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG14dllXUmxaQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTldNeE5UUXpNVFJrT1RVMllqZzRaakJrTmpJaUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUdGNibHh1ZG1GeUlGOTBlWEJsYjJZZ1BTQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2RIbHdaVzltSUZONWJXSnZiQzVwZEdWeVlYUnZjaUE5UFQwZ1hDSnplVzFpYjJ4Y0lpQS9JR1oxYm1OMGFXOXVJQ2h2WW1vcElIc2djbVYwZFhKdUlIUjVjR1Z2WmlCdlltbzdJSDBnT2lCbWRXNWpkR2x2YmlBb2IySnFLU0I3SUhKbGRIVnliaUJ2WW1vZ0ppWWdkSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2lBOVBUMGdVM2x0WW05c0lDWW1JRzlpYWlBaFBUMGdVM2x0WW05c0xuQnliM1J2ZEhsd1pTQS9JRndpYzNsdFltOXNYQ0lnT2lCMGVYQmxiMllnYjJKcU95QjlPMXh1WEc1MllYSWdYMVYwYVd4elFuSnZkM05sY2lBOUlISmxjWFZwY21Vb1hDSXVMMVYwYVd4elFuSnZkM05sY2x3aUtUdGNibHh1ZG1GeUlGOVZkR2xzYzBKeWIzZHpaWEl5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITkNjbTkzYzJWeUtUdGNibHh1ZG1GeUlGOVZkR2xzYzBOdmIydHBaU0E5SUhKbGNYVnBjbVVvWENJdUwxVjBhV3h6UTI5dmEybGxYQ0lwTzF4dVhHNTJZWElnWDFWMGFXeHpRMjl2YTJsbE1pQTlJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb1gxVjBhV3h6UTI5dmEybGxLVHRjYmx4dWRtRnlJRjlWZEdsc2MwUnZZM1Z0Wlc1MElEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITkViMk4xYldWdWRGd2lLVHRjYmx4dWRtRnlJRjlWZEdsc2MwUnZZM1Z0Wlc1ME1pQTlJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb1gxVjBhV3h6Ukc5amRXMWxiblFwTzF4dVhHNTJZWElnWDFWMGFXeHpSRTlOSUQwZ2NtVnhkV2x5WlNoY0lpNHZWWFJwYkhORVQwMWNJaWs3WEc1Y2JuWmhjaUJmVlhScGJITkVUMDB5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITkVUMDBwTzF4dVhHNTJZWElnWDFWMGFXeHpVMk55WldWdUlEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITlRZM0psWlc1Y0lpazdYRzVjYm5aaGNpQmZWWFJwYkhOVFkzSmxaVzR5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITlRZM0psWlc0cE8xeHVYRzUyWVhJZ1gxVjBhV3h6VTNsemRHVnRJRDBnY21WeGRXbHlaU2hjSWk0dlZYUnBiSE5UZVhOMFpXMWNJaWs3WEc1Y2JuWmhjaUJmVlhScGJITlRlWE4wWlcweUlEMGdYMmx1ZEdWeWIzQlNaWEYxYVhKbFJHVm1ZWFZzZENoZlZYUnBiSE5UZVhOMFpXMHBPMXh1WEc1MllYSWdYMVYwYVd4elZYTmxjaUE5SUhKbGNYVnBjbVVvWENJdUwxVjBhV3h6VlhObGNsd2lLVHRjYmx4dWRtRnlJRjlWZEdsc2MxVnpaWEl5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITlZjMlZ5S1R0Y2JseHVkbUZ5SUY5VmRHbHNjMWRwYm1SdmR5QTlJSEpsY1hWcGNtVW9YQ0l1TDFWMGFXeHpWMmx1Wkc5M1hDSXBPMXh1WEc1MllYSWdYMVYwYVd4elYybHVaRzkzTWlBOUlGOXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFFvWDFWMGFXeHpWMmx1Wkc5M0tUdGNibHh1Wm5WdVkzUnBiMjRnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaHZZbW9wSUhzZ2NtVjBkWEp1SUc5aWFpQW1KaUJ2WW1vdVgxOWxjMDF2WkhWc1pTQS9JRzlpYWlBNklIc2daR1ZtWVhWc2REb2diMkpxSUgwN0lIMWNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lRMkZ1Ym05MElHTmhiR3dnWVNCamJHRnpjeUJoY3lCaElHWjFibU4wYVc5dVhDSXBPeUI5SUgxY2JseHVMeW9xWEc0Z0tpQkhiRzlpWVd3Z1ZYUnBiSE1nWTJ4aGMzTmNiaUFxTDF4dWRtRnlJRlYwYVd4eklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRlYwYVd4ektDa2dlMXh1SUNBZ0lDQWdJQ0JmWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1ZYUnBiSE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCa1pYQnlaV05oZEdWa0lGVjBhV3h6TG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDQnRaWFJvYjJRZ2QyRnpJR1JsY0hKbFkyRjBaV1FnWVc1a0lITnZiMjRnZDJsc2JDQmlaU0J5WlcxdmRtVmtMaUJRYkdWaGMyVWdkWE5sSUZWMGFXeHpMa1JQVFM1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUWdiV1YwYUc5a0xseHVJQ0FnSUNBcUwxeHVJQ0FnSUZWMGFXeHpMbWRsZEVKdmRXNWthVzVuUTJ4cFpXNTBVbVZqZENBOUlHWjFibU4wYVc5dUlHZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2hrYjIxT2IyUmxLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmtiMjFFYjJOMWJXVnVkQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeElDWW1JR0Z5WjNWdFpXNTBjMXN4WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pGZElEb2daRzlqZFcxbGJuUTdYRzRnSUNBZ0lDQWdJSFpoY2lCemFHOTNSbTl5WTJVZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNaUFtSmlCaGNtZDFiV1Z1ZEhOYk1sMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3lYU0E2SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ29kSGx3Wlc5bUlHTnZibk52YkdVZ1BUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QmNJblZ1WkdWbWFXNWxaRndpSURvZ1gzUjVjR1Z2WmloamIyNXpiMnhsS1NrZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ2RIbHdaVzltSUdOdmJuTnZiR1V1Ykc5bklEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktEUXdNU3dnWENKVmRHbHNjeTVuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRZ2JXVjBhRzlrSUhkaGN5QmtaWEJ5WldOaGRHVmtJR0Z1WkNCemIyOXVJSGRwYkd3Z1ltVWdjbVZ0YjNabFpDNGdVR3hsWVhObElIVnpaU0JWZEdsc2N5NUVUMDB1WjJWMFFtOTFibVJwYm1kRGJHbGxiblJTWldOMElHMWxkR2h2WkM1Y0lpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlYwYVd4ekxrUlBUUzVuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRb1pHOXRUbTlrWlN3Z1pHOXRSRzlqZFcxbGJuUXNJSE5vYjNkR2IzSmpaU2s3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCa1pYQnlaV05oZEdWa0lGVjBhV3h6TG1acGJtUkZiR1Z0Wlc1MFVHOXphWFJwYjI0Z2JXVjBhRzlrSUhkaGN5QmtaWEJ5WldOaGRHVmtJR0Z1WkNCemIyOXVJSGRwYkd3Z1ltVWdjbVZ0YjNabFpDNGdVR3hsWVhObElIVnpaU0JWZEdsc2N5NUVUMDB1Wm1sdVpFVnNaVzFsYm5SUWIzTnBkR2x2YmlCdFpYUm9iMlF1WEc0Z0lDQWdJQ292WEc0Z0lDQWdWWFJwYkhNdVptbHVaRVZzWlcxbGJuUlFiM05wZEdsdmJpQTlJR1oxYm1OMGFXOXVJR1pwYm1SRmJHVnRaVzUwVUc5emFYUnBiMjRvWkc5dFRtOWtaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjMmh2ZDBadmNtTmxJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURFZ0ppWWdZWEpuZFcxbGJuUnpXekZkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTVYwZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvS0hSNWNHVnZaaUJqYjI1emIyeGxJRDA5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWENKMWJtUmxabWx1WldSY0lpQTZJRjkwZVhCbGIyWW9ZMjl1YzI5c1pTa3BJRDA5UFNCY0ltOWlhbVZqZEZ3aUlDWW1JSFI1Y0dWdlppQmpiMjV6YjJ4bExteHZaeUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWcwTURFc0lGd2lWWFJwYkhNdVptbHVaRVZzWlcxbGJuUlFiM05wZEdsdmJpQnRaWFJvYjJRZ2QyRnpJR1JsY0hKbFkyRjBaV1FnWVc1a0lITnZiMjRnZDJsc2JDQmlaU0J5WlcxdmRtVmtMaUJRYkdWaGMyVWdkWE5sWENJZ0t5QmNJaUJWZEdsc2N5NUVUMDB1Wm1sdVpFVnNaVzFsYm5SUWIzTnBkR2x2YmlCdFpYUm9iMlF1WENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlZkR2xzY3k1RVQwMHVabWx1WkVWc1pXMWxiblJRYjNOcGRHbHZiaWhrYjIxT2IyUmxMQ0J6YUc5M1JtOXlZMlVwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVkhKaGJuTm1aWElnYzNSaGRHbGpJRzFsZEdodlpITWdhVzUwYnlCMGFHVWdiMkpxWldOMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhKbFlXeFBZbXBsWTNSY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1ZYUnBiSE11YVcxd2JHVnRaVzUwWVhScGIyNVRkR0YwYVdOTlpYUm9iMlJ6SUQwZ1puVnVZM1JwYjI0Z2FXMXdiR1Z0Wlc1MFlYUnBiMjVUZEdGMGFXTk5aWFJvYjJSektISmxZV3hQWW1wbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITjBZWFJwWTBOc1lYTnpJRDBnY21WaGJFOWlhbVZqZEM1amIyNXpkSEoxWTNSdmNqdGNiaUFnSUNBZ0lDQWdkbUZ5SUcxbGRHaHZaSE1nUFNCUFltcGxZM1F1YTJWNWN5aHpkR0YwYVdORGJHRnpjeWs3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRaWFJvYjJSekxteGxibWQwYUNBK0lEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJmYkc5dmNDQTlJR1oxYm1OMGFXOXVJRjlzYjI5d0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFYTkJjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1gya2dQajBnWDJsMFpYSmhkRzl5TG14bGJtZDBhQ2tnY21WMGRYSnVJRndpWW5KbFlXdGNJanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzSmxaaUE5SUY5cGRHVnlZWFJ2Y2x0ZmFTc3JYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmFTQTlJRjlwZEdWeVlYUnZjaTV1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGZhUzVrYjI1bEtTQnlaWFIxY200Z1hDSmljbVZoYTF3aU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmY21WbUlEMGdYMmt1ZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHMWxkR2h2WkNBOUlGOXlaV1k3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlISmxZV3hQWW1wbFkzUmJiV1YwYUc5a1hTQTlQVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXRnNUMkpxWldOMFcyMWxkR2h2WkYwZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0tIUjVjR1Z2WmlCamIyNXpiMnhsSUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1hDSjFibVJsWm1sdVpXUmNJaUE2SUY5MGVYQmxiMllvWTI5dWMyOXNaU2twSUQwOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUhSNWNHVnZaaUJqYjI1emIyeGxMbXh2WnlBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvTkRBeExDQmNJbFJvWVhRZ2JXVjBhRzlrSUhkaGN5QmtaWEJ5WldOaGRHVmtJR0Z1WkNCemIyOXVJSGRwYkd3Z1ltVWdjbVZ0YjNabFpDNGdVR3hsWVhObElIVnpaU0JjSWlBcklITjBZWFJwWTBOc1lYTnpMbTVoYldVZ0t5QmNJaTVjSWlBcklHMWxkR2h2WkNBcklGd2lJRzFsZEdodlpDNWNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM1JoZEdsalEyeGhjM05iYldWMGFHOWtYUzVoY0hCc2VTaHpkR0YwYVdORGJHRnpjeXdnWVhKbmRXMWxiblJ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQmZhWFJsY21GMGIzSWdQU0J0WlhSb2IyUnpMQ0JmYVhOQmNuSmhlU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29YMmwwWlhKaGRHOXlLU3dnWDJrZ1BTQXdMQ0JmYVhSbGNtRjBiM0lnUFNCZmFYTkJjbkpoZVNBL0lGOXBkR1Z5WVhSdmNpQTZJRjlwZEdWeVlYUnZjbHRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3T3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJmY21WbU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUY5eVpYUWdQU0JmYkc5dmNDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXlaWFFnUFQwOUlGd2lZbkpsWVd0Y0lpa2dZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQmpZV3hzSUhOMFlXTnJJSFJ5WVdObFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCQmNuSmhlVHhQWW1wbFkzUStYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRlYwYVd4ekxuTjBZV05ySUQwZ1puVnVZM1JwYjI0Z2MzUmhZMnNvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsSUQwZ2JtVjNJRVZ5Y205eUtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmxJQ1ltSUdVdWMzUmhZMnNnSmlZZ1pTNXpkR0ZqYXk1emNHeHBkQ2hjSWx4Y2Jsd2lLUzV6YkdsalpTZzFLUzV0WVhBb1puVnVZM1JwYjI0Z0tITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ0WVhSamFDQTlJSFp2YVdRZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUI3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhkR05vSUQwZ0wxNG9MaW9wUUNndUtpbGNYQzVxY3pvb1d6QXRPVjByS1Rvb1d6QXRPVjByS1NRdmFXY3VaWGhsWXloektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHRZWFJqYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhSamFGc3hYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWFJqYUZzeFhTQTlJQzhvVzE1Y1hDODhYU3NwTDJsbkxtVjRaV01vYldGMFkyaGJNVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGMFkyaGJNVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9XekZkSUQwZ2JXRjBZMmhiTVYxYk1GMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjlzZFcxdU9pQnRZWFJqYUZzMFhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4bE9pQnRZWFJqYUZzeVhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzYVc1bE9pQnRZWFJqYUZzelhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WlhSb2IyUTZJRzFoZEdOb1d6RmRJSHg4SUZ3aVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGMFkyZ2dQU0F2WGlndUtpbEFLR2gwZEhCOGFIUjBjSE1wT2loYlhqcGRLeWs2S0Zzd0xUbGRLeWs2S0Zzd0xUbGRLeWtrTDJsbkxtVjRaV01vY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMngxYlc0NklHMWhkR05vV3pWZElIeDhJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pwYkdVNklHMWhkR05vV3pOZElIeDhJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hwYm1VNklHMWhkR05vV3pSZElIeDhJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFsZEdodlpEb2diV0YwWTJoYk1WMGdLeUJjSWpwY0lpQXJJRzFoZEdOb1d6SmRJSHg4SUZ3aVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGMFkyZ2dQU0F2WGlndUtpbEFLQzRxS1Rvb1d6QXRPVjByS1Rvb1d6QXRPVjByS1NRdmFXY3VaWGhsWXloektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHRZWFJqYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052YkhWdGJqb2diV0YwWTJoYk5GMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sc1pUb2diV0YwWTJoYk1sMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsdVpUb2diV0YwWTJoYk0xMGdmSHdnWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldWMGFHOWtPaUJ0WVhSamFGc3hYU0I4ZkNCY0lsd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9JRDBnTDE1Y1hITXJZWFJjWEhNb1cxNG9YU3NwWEZ4elhGd29LQzRxS1Rvb1d6QXRPVjByS1Rvb1d6QXRPVjByS1Z4Y0tTUXZhV2N1WlhobFl5aHpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhSamFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJIVnRiam9nYldGMFkyaGJORjBnZkh3Z1hDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNaVG9nYldGMFkyaGJNbDBnZkh3Z1hDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHVaVG9nYldGMFkyaGJNMTBnZkh3Z1hDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrT2lCdFlYUmphRnN4WFNCOGZDQmNJbHdpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhkR05vSUQwZ0wxNWNYSE1yWVhSY1hITW9MaW9wT2loYk1DMDVYU3NwT2loYk1DMDVYU3NwSkM5cFp5NWxlR1ZqS0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhkR05vS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjlzZFcxdU9pQnRZWFJqYUZzelhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4bE9pQnRZWFJqYUZzeFhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzYVc1bE9pQnRZWFJqYUZzeVhTQjhmQ0JjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WlhSb2IyUTZJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlITTdYRzRnSUNBZ0lDQWdJSDBwSUh4OElGdGRPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwSUhKaGJtUnZiU0JKUkZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVlhScGJITXVaMlYwVlVsRUlEMGdablZ1WTNScGIyNGdaMlYwVlVsRUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUV0YwYUM1eVlXNWtiMjBvS1M1MGIxTjBjbWx1Wnlnek5pa3VjM1ZpYzNSeWFXNW5LRElwTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdWWFJwYkhNN1hHNTlLQ2s3WEc1Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlGVjBhV3h6TzF4dVhHNVZkR2xzY3k1Q2NtOTNjMlZ5SUQwZ1gxVjBhV3h6UW5KdmQzTmxjakl1WkdWbVlYVnNkRHRjYmxWMGFXeHpMa052YjJ0cFpTQTlJRjlWZEdsc2MwTnZiMnRwWlRJdVpHVm1ZWFZzZER0Y2JsVjBhV3h6TGtSUFRTQTlJRjlWZEdsc2MwUlBUVEl1WkdWbVlYVnNkRHRjYmxWMGFXeHpMa1J2WTNWdFpXNTBJRDBnWDFWMGFXeHpSRzlqZFcxbGJuUXlMbVJsWm1GMWJIUTdYRzVWZEdsc2N5NVRZM0psWlc0Z1BTQmZWWFJwYkhOVFkzSmxaVzR5TG1SbFptRjFiSFE3WEc1VmRHbHNjeTVUZVhOMFpXMGdQU0JmVlhScGJITlRlWE4wWlcweUxtUmxabUYxYkhRN1hHNVZkR2xzY3k1VmMyVnlJRDBnWDFWMGFXeHpWWE5sY2pJdVpHVm1ZWFZzZER0Y2JsVjBhV3h6TGxkcGJtUnZkeUE5SUY5VmRHbHNjMWRwYm1SdmR6SXVaR1ZtWVhWc2REdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdWWFJwYkhNN1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlzYVdJdlZYUnBiSE11ZEhOY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURWY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYmk4cUtseHVJQ29nUTJ4aGMzTWdabTl5SUhkdmNtdHBibWNnZDJsMGFDQmljbTkzYzJWeVhHNGdLaTljYmx4dVpYaHdiM0owY3k1ZlgyVnpUVzlrZFd4bElEMGdkSEoxWlR0Y2JseHVablZ1WTNScGIyNGdYMk5zWVhOelEyRnNiRU5vWldOcktHbHVjM1JoYm1ObExDQkRiMjV6ZEhKMVkzUnZjaWtnZXlCcFppQW9JU2hwYm5OMFlXNWpaU0JwYm5OMFlXNWpaVzltSUVOdmJuTjBjblZqZEc5eUtTa2dleUIwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z3aVEyRnVibTkwSUdOaGJHd2dZU0JqYkdGemN5QmhjeUJoSUdaMWJtTjBhVzl1WENJcE95QjlJSDFjYmx4dWRtRnlJRUp5YjNkelpYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWm5WdVkzUnBiMjRnUW5KdmQzTmxjaWdwSUh0Y2JpQWdJQ0FnSUNBZ1gyTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRUp5YjNkelpYSXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCaWNtOTNjMlZ5SUdsdVptOWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdDdZbkp2ZDNObGNqb2djM1J5YVc1bkxDQnRiMkpwYkdVNklHSnZiMnhsWVc0c0lIWmxjbk5wYjI0NklITjBjbWx1WjMxOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnUW5KdmQzTmxjaTVuWlhSSmJtWnZJRDBnWm5WdVkzUnBiMjRnWjJWMFNXNW1ieWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5YjNkelpYSTZJRUp5YjNkelpYSXVaMlYwVG1GdFpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JXOWlhV3hsT2lCQ2NtOTNjMlZ5TG1selRXOWlhV3hsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWlhKemFXOXVPaUJDY205M2MyVnlMbWRsZEZabGNuTnBiMjRvS1Z4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJR0p5YjNkelpYSWdibUZ0WlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVuWlhST1lXMWxJRDBnWm5WdVkzUnBiMjRnWjJWMFRtRnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0p5YjNkelpYSWdQU0IyYjJsa0lEQTdYRzRnSUNBZ0lDQWdJR2xtSUNoQ2NtOTNjMlZ5TG1selQzQmxjbUVvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KdmQzTmxjaUE5SUZ3aVQzQmxjbUZjSWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaENjbTkzYzJWeUxtbHpUM0JsY21GT1pYY29LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkp2ZDNObGNpQTlJRndpVDNCbGNtRmNJanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoQ2NtOTNjMlZ5TG1selRWTkpSU2dwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY205M2MyVnlJRDBnWENKTmFXTnliM052Wm5RZ1NXNTBaWEp1WlhRZ1JYaHdiRzl5WlhKY0lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6VFZOSlJVNWxkeWdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY205M2MyVnlJRDBnWENKTmFXTnliM052Wm5RZ1NXNTBaWEp1WlhRZ1JYaHdiRzl5WlhKY0lqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6UTJoeWIyMWxLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5YjNkelpYSWdQU0JjSWtOb2NtOXRaVndpTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tFSnliM2R6WlhJdWFYTkdhWEpsWm05NEtDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnliM2R6WlhJZ1BTQmNJa1pwY21WbWIzaGNJanRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoQ2NtOTNjMlZ5TG1selUyRm1ZWEpwS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeWIzZHpaWElnUFNCY0lsTmhabUZ5YVZ3aU8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRUp5YjNkelpYSXVhWE5QZEdobGNpZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbTkzYzJWeUlEMGdRbkp2ZDNObGNpNW5aWFJQZEdobGNrNWhiV1VvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1luSnZkM05sY2p0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQmljbTkzYzJWeUlIWmxjbk5wYjI1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1WjJWMFZtVnljMmx2YmlBOUlHWjFibU4wYVc5dUlHZGxkRlpsY25OcGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJaWEp6YVc5dUlEMGdkbTlwWkNBd08xeHVJQ0FnSUNBZ0lDQnBaaUFvUW5KdmQzTmxjaTVwYzA5d1pYSmhLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNGdQU0JDY205M2MyVnlMbWRsZEU5d1pYSmhWbVZ5YzJsdmJpZ3BPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0VKeWIzZHpaWEl1YVhOUGNHVnlZVTVsZHlncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpYSnphVzl1SUQwZ1FuSnZkM05sY2k1blpYUlBjR1Z5WVU1bGQxWmxjbk5wYjI0b0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hDY205M2MyVnlMbWx6VFZOSlJTZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaWEp6YVc5dUlEMGdRbkp2ZDNObGNpNW5aWFJOVTBsRlZtVnljMmx2YmlncE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRUp5YjNkelpYSXVhWE5OVTBsRlRtVjNLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNGdQU0JDY205M2MyVnlMbWRsZEUxVFNVVk9aWGRXWlhKemFXOXVLQ2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1FuSnZkM05sY2k1cGMwTm9jbTl0WlNncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpYSnphVzl1SUQwZ1FuSnZkM05sY2k1blpYUkRhSEp2YldWV1pYSnphVzl1S0NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9Rbkp2ZDNObGNpNXBjMFpwY21WbWIzZ29LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZ5YzJsdmJpQTlJRUp5YjNkelpYSXVaMlYwUm1seVpXWnZlRlpsY25OcGIyNG9LVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoQ2NtOTNjMlZ5TG1selUyRm1ZWEpwS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGNuTnBiMjRnUFNCQ2NtOTNjMlZ5TG1kbGRGTmhabUZ5YVZabGNuTnBiMjRvS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaENjbTkzYzJWeUxtbHpUM1JvWlhJb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnljMmx2YmlBOUlFSnliM2R6WlhJdVoyVjBUM1JvWlhKV1pYSnphVzl1S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmxjbk5wYjI0N1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVWNtbHRJR0p5YjNkelpYSWdkbVZ5YzJsdmJseHVJQ0FnSUNBcUlFQndZWEpoYlNCMlpYSnphVzl1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMblJ5YVcxV1pYSnphVzl1SUQwZ1puVnVZM1JwYjI0Z2RISnBiVlpsY25OcGIyNG9kbVZ5YzJsdmJpa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyaGhjbk1nUFNCYlhDSTdYQ0lzSUZ3aUlGd2lMQ0JjSWlsY0lsMDdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJRjlwZEdWeVlYUnZjaUE5SUdOb1lYSnpMQ0JmYVhOQmNuSmhlU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29YMmwwWlhKaGRHOXlLU3dnWDJrZ1BTQXdMQ0JmYVhSbGNtRjBiM0lnUFNCZmFYTkJjbkpoZVNBL0lGOXBkR1Z5WVhSdmNpQTZJRjlwZEdWeVlYUnZjbHRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3T3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlGOXlaV1k3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFYTkJjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVNBK1BTQmZhWFJsY21GMGIzSXViR1Z1WjNSb0tTQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmNtVm1JRDBnWDJsMFpYSmhkRzl5VzE5cEt5dGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmFTQTlJRjlwZEdWeVlYUnZjaTV1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Y5cExtUnZibVVwSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZZ1BTQmZhUzUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTm9ZWElnUFNCZmNtVm1PMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVhnZ1BTQjJaWEp6YVc5dUxtbHVaR1Y0VDJZb1kyaGhjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYVhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtVnljMmx2YmlBOUlIWmxjbk5wYjI0dWMzVmljM1J5YVc1bktEQXNJR2w0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1WeWMybHZianRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR2wwSUdseklHMXZZbWxzWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1YVhOTmIySnBiR1VnUFNCbWRXNWpkR2x2YmlCcGMwMXZZbWxzWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZ3ZUVzlpYVd4bGZHMXBibWw4Um1WdWJtVmpmRUZ1WkhKdmFXUjhhVkFvWVdSOGIyUjhhRzl1WlNrdkxuUmxjM1FvYm1GMmFXZGhkRzl5TG1Gd2NGWmxjbk5wYjI0cFhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRhR1ZqYXlCcFppQnBkQ0JwY3lCdmNHVnlZU0JpY205M2MyVnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNXBjMDl3WlhKaElEMGdablZ1WTNScGIyNGdhWE5QY0dWeVlTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YVc1a1pYaFBaaWhjSWs5d1pYSmhYQ0lwSUNFOVBTQXRNVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCdmNHVnlZU0JpY205M2MyVnlJSFpsY25OcGIyNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHpkSEpwYm1kOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdVoyVjBUM0JsY21GV1pYSnphVzl1SUQwZ1puVnVZM1JwYjI0Z1oyVjBUM0JsY21GV1pYSnphVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1WeVQyWm1jMlYwSUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lUM0JsY21GY0lpazdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSnphVzl1SUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXpkV0p6ZEhKcGJtY29kbVZ5VDJabWMyVjBJQ3NnTmlrN1hHNGdJQ0FnSUNBZ0lIWmxjazltWm5ObGRDQTlJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YVc1a1pYaFBaaWhjSWxabGNuTnBiMjVjSWlrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWlhKUFptWnpaWFFnSVQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaWEp6YVc5dUlEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV6ZFdKemRISnBibWNvZG1WeVQyWm1jMlYwSUNzZ09DazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRUp5YjNkelpYSXVkSEpwYlZabGNuTnBiMjRvZG1WeWMybHZiaWs3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamF5QnBaaUJwZENCcGN5QnZjR1Z5WVNCdVpYY2dZbkp2ZDNObGNseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdWFYTlBjR1Z5WVU1bGR5QTlJR1oxYm1OMGFXOXVJR2x6VDNCbGNtRk9aWGNvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSlBVRkpjSWlrZ0lUMDlJQzB4TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElHOXdaWEpoSUc1bGR5QmljbTkzYzJWeUlIWmxjbk5wYjI1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1WjJWMFQzQmxjbUZPWlhkV1pYSnphVzl1SUQwZ1puVnVZM1JwYjI0Z1oyVjBUM0JsY21GT1pYZFdaWEp6YVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVnlUMlptYzJWMElEMGdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzVwYm1SbGVFOW1LRndpVDFCU1hDSXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVnljMmx2YmlBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVjM1ZpYzNSeWFXNW5LSFpsY2s5bVpuTmxkQ0FySURRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1FuSnZkM05sY2k1MGNtbHRWbVZ5YzJsdmJpaDJaWEp6YVc5dUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHbDBJR2x6SUcxemFXVWdZbkp2ZDNObGNseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdWFYTk5VMGxGSUQwZ1puVnVZM1JwYjI0Z2FYTk5VMGxGS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lUVk5KUlZ3aUtTQWhQVDBnTFRFN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdiWE5wWlNCaWNtOTNjMlZ5SUhabGNuTnBiMjVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR6ZEhKcGJtZDlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRUp5YjNkelpYSXVaMlYwVFZOSlJWWmxjbk5wYjI0Z1BTQm1kVzVqZEdsdmJpQm5aWFJOVTBsRlZtVnljMmx2YmlncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNrOW1abk5sZENBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVhVzVrWlhoUFppaGNJazFUU1VWY0lpazdYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSnphVzl1SUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXpkV0p6ZEhKcGJtY29kbVZ5VDJabWMyVjBJQ3NnTlNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCQ2NtOTNjMlZ5TG5SeWFXMVdaWEp6YVc5dUtIWmxjbk5wYjI0cE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnNnYVdZZ2FYUWdhWE1nYlhOcFpTQnVaWGNnWW5KdmQzTmxjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRUp5YjNkelpYSXVhWE5OVTBsRlRtVjNJRDBnWm5WdVkzUnBiMjRnYVhOTlUwbEZUbVYzS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lWSEpwWkdWdWRDOWNJaWtnSVQwOUlDMHhPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwSUcxemFXVWdibVYzSUdKeWIzZHpaWElnZG1WeWMybHZibHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJOVTBsRlRtVjNWbVZ5YzJsdmJpQTlJR1oxYm1OMGFXOXVJR2RsZEUxVFNVVk9aWGRXWlhKemFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdkbVZ5YzJsdmJpQTlJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YzNWaWMzUnlhVzVuS0c1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWFXNWtaWGhQWmloY0luSjJPbHdpS1NBcklETXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdRbkp2ZDNObGNpNTBjbWx0Vm1WeWMybHZiaWgyWlhKemFXOXVLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR2wwSUdseklHTm9jbTl0WlNCaWNtOTNjMlZ5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVwYzBOb2NtOXRaU0E5SUdaMWJtTjBhVzl1SUdselEyaHliMjFsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lRMmh5YjIxbFhDSXBJQ0U5UFNBdE1UdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0JqYUhKdmJXVWdZbkp2ZDNObGNpQjJaWEp6YVc5dVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCQ2NtOTNjMlZ5TG1kbGRFTm9jbTl0WlZabGNuTnBiMjRnUFNCbWRXNWpkR2x2YmlCblpYUkRhSEp2YldWV1pYSnphVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1WeVQyWm1jMlYwSUQwZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lRMmh5YjIxbFhDSXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVnljMmx2YmlBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVjM1ZpYzNSeWFXNW5LSFpsY2s5bVpuTmxkQ0FySURjcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1FuSnZkM05sY2k1MGNtbHRWbVZ5YzJsdmJpaDJaWEp6YVc5dUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHbDBJR2x6SUhOaFptRnlhU0JpY205M2MyVnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNXBjMU5oWm1GeWFTQTlJR1oxYm1OMGFXOXVJR2x6VTJGbVlYSnBLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVUyRm1ZWEpwWENJcElDRTlQU0F0TVR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQnpZV1poY21rZ1luSnZkM05sY2lCMlpYSnphVzl1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMbWRsZEZOaFptRnlhVlpsY25OcGIyNGdQU0JtZFc1amRHbHZiaUJuWlhSVFlXWmhjbWxXWlhKemFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdkbVZ5VDJabWMyVjBJRDBnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVUyRm1ZWEpwWENJcE8xeHVJQ0FnSUNBZ0lDQjJZWElnZG1WeWMybHZiaUE5SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWMzVmljM1J5YVc1bktIWmxjazltWm5ObGRDQXJJRGNwTzF4dUlDQWdJQ0FnSUNCMlpYSlBabVp6WlhRZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbWx1WkdWNFQyWW9YQ0pXWlhKemFXOXVYQ0lwTzF4dUlDQWdJQ0FnSUNCcFppQW9kbVZ5VDJabWMyVjBJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnljMmx2YmlBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXVjM1ZpYzNSeWFXNW5LSFpsY2s5bVpuTmxkQ0FySURncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQkNjbTkzYzJWeUxuUnlhVzFXWlhKemFXOXVLSFpsY25OcGIyNHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdhWFFnYVhNZ1ptbHlaV1p2ZUNCaWNtOTNjMlZ5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnUW5KdmQzTmxjaTVwYzBacGNtVm1iM2dnUFNCbWRXNWpkR2x2YmlCcGMwWnBjbVZtYjNnb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbWx1WkdWNFQyWW9YQ0pHYVhKbFptOTRYQ0lwSUNFOVBTQXRNVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCbWFYSmxabTk0SUdKeWIzZHpaWElnZG1WeWMybHZibHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNW5aWFJHYVhKbFptOTRWbVZ5YzJsdmJpQTlJR1oxYm1OMGFXOXVJR2RsZEVacGNtVm1iM2hXWlhKemFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdkbVZ5VDJabWMyVjBJRDBnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVJtbHlaV1p2ZUZ3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhabGNuTnBiMjRnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuTjFZbk4wY21sdVp5aDJaWEpQWm1aelpYUWdLeUE0S1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUVKeWIzZHpaWEl1ZEhKcGJWWmxjbk5wYjI0b2RtVnljMmx2YmlrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmpheUJwWmlCcGRDQnBjeUJ2ZEdobGNpQmljbTkzYzJWeVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1FuSnZkM05sY2k1cGMwOTBhR1Z5SUQwZ1puVnVZM1JwYjI0Z2FYTlBkR2hsY2lncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc1aGJXVlBabVp6WlhRZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbXhoYzNSSmJtUmxlRTltS0Z3aUlGd2lLU0FySURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKUFptWnpaWFFnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExteGhjM1JKYm1SbGVFOW1LRndpTDF3aUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWhiV1ZQWm1aelpYUWdQQ0IyWlhKUFptWnpaWFE3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2IzUm9aWElnWW5KdmQzTmxjaUJ1WVcxbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCQ2NtOTNjMlZ5TG1kbGRFOTBhR1Z5VG1GdFpTQTlJR1oxYm1OMGFXOXVJR2RsZEU5MGFHVnlUbUZ0WlNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc1aGJXVlBabVp6WlhRZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMbXhoYzNSSmJtUmxlRTltS0Z3aUlGd2lLU0FySURFN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKUFptWnpaWFFnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExteGhjM1JKYm1SbGVFOW1LRndpTDF3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdKeWIzZHpaWElnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuTjFZbk4wY21sdVp5aHVZVzFsVDJabWMyVjBMQ0IyWlhKUFptWnpaWFFwTzF4dUlDQWdJQ0FnSUNCcFppQW9Zbkp2ZDNObGNpNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQmljbTkzYzJWeUxuUnZWWEJ3WlhKRFlYTmxLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5YjNkelpYSWdQU0J1WVhacFoyRjBiM0l1WVhCd1RtRnRaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWW5KdmQzTmxjanRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCdmRHaGxjaUJpY205M2MyVnlJSFpsY25OcGIyNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHpkSEpwYm1kOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdVoyVjBUM1JvWlhKV1pYSnphVzl1SUQwZ1puVnVZM1JwYjI0Z1oyVjBUM1JvWlhKV1pYSnphVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYm1GdFpVOW1abk5sZENBOUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXViR0Z6ZEVsdVpHVjRUMllvWENJZ1hDSXBJQ3NnTVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFpsY2s5bVpuTmxkQ0E5SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWJHRnpkRWx1WkdWNFQyWW9YQ0l2WENJcE8xeHVJQ0FnSUNBZ0lDQjJZWElnZG1WeWMybHZiaUE5SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWMzVmljM1J5YVc1bktIWmxjazltWm5ObGRDQXJJREVwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUW5KdmQzTmxjaTUwY21sdFZtVnljMmx2YmloMlpYSnphVzl1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR0p5YjNkelpYSWdjM1Z3Y0c5eWRGeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFSnliM2R6WlhJdWFYTlRkWEJ3YjNKMFpXUWdQU0JtZFc1amRHbHZiaUJwYzFOMWNIQnZjblJsWkNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDRkNjbTkzYzJWeUxtbHpUVk5KUlNncElIeDhJSEJoY25ObFNXNTBLRUp5YjNkelpYSXVaMlYwVFZOSlJWWmxjbk5wYjI0b0tTd2dNVEFwSUQ0Z09EdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHbDBJR2x6SUZkbFlrdHBkQ0JpY205M2MyVnlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdRbkp2ZDNObGNpNXBjMWRsWWt0cGRDQTlJR1oxYm1OMGFXOXVJR2x6VjJWaVMybDBLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVFYQndiR1ZYWldKTGFYUXZYQ0lwSUNFOVBTQXRNVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR2wwSUdseklFZGxZMnR2SUdKeWIzZHpaWEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JDY205M2MyVnlMbWx6UjJWamEyOGdQU0JtZFc1amRHbHZiaUJwYzBkbFkydHZLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1cGJtUmxlRTltS0Z3aVIyVmphMjljSWlrZ1BpQXRNU0FtSmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExtbHVaR1Y0VDJZb1hDSkxTRlJOVEZ3aUtTQTlQVDBnTFRFN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmpheUJwWmlCcGRDQnBjeUJCYm1SeWIybGtJR0p5YjNkelpYSmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkNjbTkzYzJWeUxtbHpRVzVrY205cFpDQTlJR1oxYm1OMGFXOXVJR2x6UVc1a2NtOXBaQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWFXNWtaWGhQWmloY0lrRnVaSEp2YVdSY0lpa2dQaUF0TVR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR2xtSUdsMElHbHpJRXhwYm5WNElHSnliM2R6WlhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCQ2NtOTNjMlZ5TG1selRHbHVkWGdnUFNCbWRXNWpkR2x2YmlCcGMweHBiblY0S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtGd2lUR2x1ZFhoY0lpa2dQaUF0TVR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJJR2xtSUdsMElHbHpJR2xRWVdRZ1luSnZkM05sY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVKeWIzZHpaWEl1YVhOVVlXSnNaWFJRUXlBOUlHWjFibU4wYVc5dUlHbHpWR0ZpYkdWMFVFTW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG1sdVpHVjRUMllvWENKcFVHRmtYQ0lwSUQ0Z0xURTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCQ2NtOTNjMlZ5TzF4dWZTZ3BPMXh1WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCQ2NtOTNjMlZ5TzF4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZiR2xpTDFWMGFXeHpRbkp2ZDNObGNpNTBjMXh1THk4Z2JXOWtkV3hsSUdsa0lEMGdObHh1THk4Z2JXOWtkV3hsSUdOb2RXNXJjeUE5SURFZ01pSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVMeW9xWEc0Z0tpQkRiR0Z6Y3lCbWIzSWdkMjl5YTJsdVp5QjNhWFJvSUdOdmIydHBaVnh1SUNvdlhHNWNibVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzVjYm5aaGNpQmZkSGx3Wlc5bUlEMGdkSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlIUjVjR1Z2WmlCVGVXMWliMnd1YVhSbGNtRjBiM0lnUFQwOUlGd2ljM2x0WW05c1hDSWdQeUJtZFc1amRHbHZiaUFvYjJKcUtTQjdJSEpsZEhWeWJpQjBlWEJsYjJZZ2IySnFPeUI5SURvZ1puVnVZM1JwYjI0Z0tHOWlhaWtnZXlCeVpYUjFjbTRnYjJKcUlDWW1JSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUppQnZZbW91WTI5dWMzUnlkV04wYjNJZ1BUMDlJRk41YldKdmJDQW1KaUJ2WW1vZ0lUMDlJRk41YldKdmJDNXdjbTkwYjNSNWNHVWdQeUJjSW5ONWJXSnZiRndpSURvZ2RIbHdaVzltSUc5aWFqc2dmVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnNZWE56UTJGc2JFTm9aV05yS0dsdWMzUmhibU5sTENCRGIyNXpkSEoxWTNSdmNpa2dleUJwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRndpUTJGdWJtOTBJR05oYkd3Z1lTQmpiR0Z6Y3lCaGN5QmhJR1oxYm1OMGFXOXVYQ0lwT3lCOUlIMWNibHh1ZG1GeUlFTnZiMnRwWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ1puVnVZM1JwYjI0Z1EyOXZhMmxsS0NrZ2UxeHVJQ0FnSUY5amJHRnpjME5oYkd4RGFHVmpheWgwYUdsekxDQkRiMjlyYVdVcE8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRlJvWlNCdFpYUm9iMlFnY21WMGRYSnVjeUIwYUdVZ1pteGhaeUIzYUdWMGFHVnlJSE4xY0hCdmNuUmxaQ0IwYUdseklITjBiM0poWjJVZ2RIbHdaU0J2Y2lCdWIzUmNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQkRiMjlyYVdVdWFYTlRkWEJ3YjNKMFpXUWdQU0JtZFc1amRHbHZiaUJwYzFOMWNIQnZjblJsWkNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSNWNHVnZaaUJrYjJOMWJXVnVkQ0E5UFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUZ3aWRXNWtaV1pwYm1Wa1hDSWdPaUJmZEhsd1pXOW1LR1J2WTNWdFpXNTBLU2tnUFQwOUlGd2liMkpxWldOMFhDSWdKaVlnZEhsd1pXOW1JR1J2WTNWdFpXNTBMbU52YjJ0cFpTQTlQVDBnWENKemRISnBibWRjSWp0Y2JpQWdmVHRjYmlBZ0x5b3FYRzRnSUNBcUlGUm9aU0J0WlhSb2IyUWdjMlYwY3lCMGFHVWdkbUZzZFdVZ1lXNWtJSEpsZEhWeWJuTWdkSEoxWlNCcFppQnBkQ0JvWVhNZ1ltVmxiaUJ6WlhSY2JpQWdJQ29nUUhCaGNtRnRJR05vWldOclUzVndjRzl5ZENCN1ltOXZiR1ZoYm4xY2JpQWdJQ29nUUhCaGNtRnRJR3RsZVNCN2MzUnlhVzVuZlZ4dUlDQWdLaUJBY0dGeVlXMGdkbUZzZFdVZ2UzTjBjbWx1WjMxY2JpQWdJQ29nUUhCaGNtRnRJR1Y0Y0dseVpYTWdlMjUxYldKbGNuMWNiaUFnSUNvZ1FIQmhjbUZ0SUhCaGRHZ2dlM04wY21sdVozMWNiaUFnSUNvZ1FIQmhjbUZ0SUdSdmJXRnBiaUI3YzNSeWFXNW5mVnh1SUNBZ0tpQkFjR0Z5WVcwZ2MyVmpkWEpsSUh0aWIyOXNaV0Z1ZlZ4dUlDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmVnh1SUNBZ0tpOWNibHh1WEc0Z0lFTnZiMnRwWlM1elpYUkpkR1Z0SUQwZ1puVnVZM1JwYjI0Z2MyVjBTWFJsYlNoamFHVmphMU4xY0hCdmNuUXNJR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0IyWVhJZ1pYaHdhWEpsY3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXpJQ1ltSUdGeVozVnRaVzUwYzFzelhTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6TmRJRG9nTXpBN1hHNGdJQ0FnZG1GeUlIQmhkR2dnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z05DQW1KaUJoY21kMWJXVnVkSE5iTkYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzMFhTQTZJRndpTDF3aU8xeHVJQ0FnSUhaaGNpQmtiMjFoYVc0Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdOU0FtSmlCaGNtZDFiV1Z1ZEhOYk5WMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxczFYU0E2SUd4dlkyRjBhVzl1TG1odmMzUnVZVzFsTzF4dUlDQWdJSFpoY2lCelpXTjFjbVVnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z05pQW1KaUJoY21kMWJXVnVkSE5iTmwwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzMlhTQTZJR3h2WTJGMGFXOXVMbkJ5YjNSdlkyOXNJRDA5UFNCY0ltaDBkSEJ6T2x3aU8xeHVYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNvZ1NXWWdkR2hoZENCemRHOXlaU0JwY3lCemRYQndiM0owWldSY2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ2FXWWdLQ0ZqYUdWamExTjFjSEJ2Y25RZ2ZId2dRMjl2YTJsbExtbHpVM1Z3Y0c5eWRHVmtLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUZOaGRtVWdZMjl2YTJsbGN5Qm1iM0lnTXpBZ1pHRjVjMXh1SUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3UkdGMFpYMWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUhaaGNpQmtZWFJsSUQwZ2JtVjNJRVJoZEdVb0tUdGNiaUFnSUNBZ0lDQWdaR0YwWlM1elpYUlVhVzFsS0dSaGRHVXVaMlYwVkdsdFpTZ3BJQ3NnWlhod2FYSmxjeUFxSURJMElDb2dOakFnS2lBMk1DQXFJREV3TURBcE8xeHVJQ0FnSUNBZ0lDQjJZWElnWlhod0lEMGdaR0YwWlM1MGIxVlVRMU4wY21sdVp5Z3BPMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dSVzVqYjJSbElIWmhiSFZsSUdadmNpQnpkRzl5WlZ4dUlDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdkbUZzZFdVZ1BTQmxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9kbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1YzSnBkR2x1WnlCMllXeDFaU0IwYnlCMGFHVWdaRzlqZFcxbGJuUWdZMjl2YTJsbElITjBiM0poWjJWY2JpQWdJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UzTjBjbWx1WjMxY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbU52YjJ0cFpTQTlJR3RsZVNBcklGd2lQVndpSUNzZ2RtRnNkV1VnS3lBb1pYaHdJRDhnWENJN0lHVjRjR2x5WlhNOVhDSWdLeUJsZUhBZ09pQmNJbHdpS1NBcklDaHdZWFJvSUQ4Z1hDSTdJSEJoZEdnOVhDSWdLeUJ3WVhSb0lEb2dYQ0pjSWlrZ0t5QW9aRzl0WVdsdUlEOGdYQ0k3SUdSdmJXRnBiajFjSWlBcklHUnZiV0ZwYmlBNklGd2lYQ0lwSUNzZ0tITmxZM1Z5WlNBL0lGd2lPeUJ6WldOMWNtVmNJaUE2SUZ3aVhDSXBPMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTV1lnWVd4c0lHOXJJSEpsZEhWeWJpQjBjblZsWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1EyOXZhMmxsTG1kbGRFbDBaVzBvWTJobFkydFRkWEJ3YjNKMExDQnJaWGtwSUQwOVBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCamIyOXJhV1VnWkc5bGN5QnViM1FnYzNWd2NHOXlkR1ZrSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nU1dZZ2MyOXRaWFJvYVc1bklHZHZaWE1nZDNKdmJtY2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNGdJSDA3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnYldWMGFHOWtJSEpsWVdSeklIUm9aU0IyWVd4MVpTQmhibVFnY21WMGRYSnVjeUJwZENCdmNpQnlaWFIxY201eklHWmhiSE5sSUdsbUlIUm9aU0IyWVd4MVpTQmtiMlZ6SUc1dmRDQmxlR2x6ZEZ4dUlDQWdLaUJBY0dGeVlXMGdZMmhsWTJ0VGRYQndiM0owSUh0aWIyOXNaV0Z1ZlZ4dUlDQWdLaUJBY0dGeVlXMGdhMlY1SUh0emRISnBibWQ5WEc0Z0lDQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDhZbTl2YkdWaGJuMWNiaUFnSUNvdlhHNWNibHh1SUNCRGIyOXJhV1V1WjJWMFNYUmxiU0E5SUdaMWJtTjBhVzl1SUdkbGRFbDBaVzBvWTJobFkydFRkWEJ3YjNKMExDQnJaWGtwSUh0Y2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJKWmlCMGFHRjBJSE4wYjNKbElHbHpJSE4xY0hCdmNuUmxaRnh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0JwWmlBb0lXTm9aV05yVTNWd2NHOXlkQ0I4ZkNCRGIyOXJhV1V1YVhOVGRYQndiM0owWldRb0tTa2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dSMlYwSUhSb1pTQmhjbkpoZVNCbWNtOXRJR1J2WTNWdFpXNTBJR052YjJ0cFpTQnpjR3hwZENCaWVTQTdYRzRnSUNBZ0lDQWdJQ0FxSUVCMGVYQmxJSHR6ZEhKcGJtZGJYWDFjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lIWmhjaUJoY25KRGIyOXJhV1VnUFNCa2IyTjFiV1Z1ZEM1amIyOXJhV1V1YzNCc2FYUW9YQ0k3WENJcE8xeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NYUmxjbUYwWlNCMGFISnZkV2RvSUhSb1pTQmpiMjlyYVdWelhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJmYVhSbGNtRjBiM0lnUFNCaGNuSkRiMjlyYVdVc0lGOXBjMEZ5Y21GNUlEMGdRWEp5WVhrdWFYTkJjbkpoZVNoZmFYUmxjbUYwYjNJcExDQmZhU0E5SURBc0lGOXBkR1Z5WVhSdmNpQTlJRjlwYzBGeWNtRjVJRDhnWDJsMFpYSmhkRzl5SURvZ1gybDBaWEpoZEc5eVcxTjViV0p2YkM1cGRHVnlZWFJ2Y2wwb0tUczdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJRjl5WldZN1hHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1gybHpRWEp5WVhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGZhU0ErUFNCZmFYUmxjbUYwYjNJdWJHVnVaM1JvS1NCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lGOXlaV1lnUFNCZmFYUmxjbUYwYjNKYlgya3JLMTA3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRjlwSUQwZ1gybDBaWEpoZEc5eUxtNWxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoZmFTNWtiMjVsS1NCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lGOXlaV1lnUFNCZmFTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhU0E5SUY5eVpXWTdYRzVjYmlBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnS2lCVWNtbHRJR0Z1WkNCemNHeHBkQ0JsWVdOb0lHTnZiMnRwWlNCaWVTQTlJR1p2Y2lCclpYa2dkbUZzZFdVZ2NHRnlaVnh1SUNBZ0lDQWdJQ0FnSUNBcUlFQjBlWEJsSUh0emRISnBibWRiWFgxY2JpQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNCMllYSWdkaUE5SUdrdWRISnBiU2dwTG5Od2JHbDBLRndpUFZ3aUxDQXlLVHRjYmlBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnS2lCSlppQnBkQ0JwY3lCamIzSnlaV04wSUdOdmIydHBaU0JyWlhrZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaDJXekJkSUQwOVBTQnJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nU1dZZ2RHaGxJSFpoYkhWbElIZGhjeUJtYjNWdVpDQnlaWFIxY200Z2RHaGxJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9kbHN4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCMGFHVWdkbUZzZFdVZ2QyRnpJRzV2ZENCbWIzVnVaQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCamIyOXJhV1VnWkc5bGN5QnViM1FnYzNWd2NHOXlkR1ZrSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nU1dZZ2MyOXRaWFJvYVc1bklHZHZaWE1nZDNKdmJtY2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNGdJSDA3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnYldWMGFHOWtJSEpsYlc5MlpYTWdkR2hsSUhaaGJIVmxJR0Z1WkNCeVpYUjFjbTRnZEhKMVpTQnBaaUIwYUdVZ2RtRnNkV1VnWkc5bGN5QnViM1FnWlhocGMzUmNiaUFnSUNvZ1FIQmhjbUZ0SUdOb1pXTnJVM1Z3Y0c5eWRDQjdZbTl2YkdWaGJuMWNiaUFnSUNvZ1FIQmhjbUZ0SUd0bGVTQjdjM1J5YVc1bmZWeHVJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4xY2JpQWdJQ292WEc1Y2JseHVJQ0JEYjI5cmFXVXVjbVZ0YjNabFNYUmxiU0E5SUdaMWJtTjBhVzl1SUhKbGJXOTJaVWwwWlcwb1kyaGxZMnRUZFhCd2IzSjBMQ0JyWlhrcElIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnS2lCSlppQjBhR0YwSUhOMGIzSmxJR2x6SUhOMWNIQnZjblJsWkZ4dUlDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNCcFppQW9JV05vWldOclUzVndjRzl5ZENCOGZDQkRiMjlyYVdVdWFYTlRkWEJ3YjNKMFpXUW9LU2tnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nVTJWMElHVnRjSFI1SUc5MlpYSmtkV1VnZG1Gc2RXVWdZbmtnYTJWNVhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JEYjI5cmFXVXVjMlYwU1hSbGJTaGphR1ZqYTFOMWNIQnZjblFzSUd0bGVTd2dYQ0pjSWl3Z0xURXBPMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTV1lnWVd4c0lHOXJJSEpsZEhWeWJpQjBjblZsWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1EyOXZhMmxsTG1kbGRFbDBaVzBvWTJobFkydFRkWEJ3YjNKMExDQnJaWGtwSUQwOVBTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJKWmlCamIyOXJhV1VnWkc5bGN5QnViM1FnYzNWd2NHOXlkR1ZrSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nU1dZZ2MyOXRaWFJvYVc1bklHZHZaWE1nZDNKdmJtY2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNGdJSDA3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnYldWMGFHOWtJSEpsZEhWeWJuTWdkR2hsSUdGeWNtRjVJRzltSUhOMGNtbHVaeUJ2WmlCaGRtRnBiR0ZpYkdVZ2EyVjVjMXh1SUNBZ0tpQkFjR0Z5WVcwZ1kyaGxZMnRUZFhCd2IzSjBJSHRpYjI5c1pXRnVmVnh1SUNBZ0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1blcxMTlYRzRnSUNBcUwxeHVYRzVjYmlBZ1EyOXZhMmxsTG1kbGRFdGxlWE1nUFNCbWRXNWpkR2x2YmlCblpYUkxaWGx6S0dOb1pXTnJVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlFbG1JSFJvWVhRZ2MzUnZjbVVnYVhNZ2MzVndjRzl5ZEdWa1hHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lHbG1JQ2doWTJobFkydFRkWEJ3YjNKMElIeDhJRU52YjJ0cFpTNXBjMU4xY0hCdmNuUmxaQ2dwS1NCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCVWFHVWdZWEp5WVhrZ2IyWWdZWFpoYVd4aFlteGxJR3RsZVhOY2JpQWdJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwRnljbUY1ZlZ4dUlDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdkbUZ5SUdGeWNrdGxlWE1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFZGxkQ0IwYUdVZ1lYSnlZWGtnWm5KdmJTQmtiMk4xYldWdWRDQmpiMjlyYVdVZ2MzQnNhWFFnWW5rZ08xeHVJQ0FnSUNBZ0lDQWdLaUJBZEhsd1pTQjdjM1J5YVc1blcxMTlYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCMllYSWdZWEp5UTI5dmEybGxJRDBnWkc5amRXMWxiblF1WTI5dmEybGxMbk53YkdsMEtGd2lPMXdpS1R0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVsMFpYSmhkR1VnZEdoeWIzVm5hQ0IwYUdVZ1kyOXZhMmxsYzF4dUlDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdYMmwwWlhKaGRHOXlNaUE5SUdGeWNrTnZiMnRwWlN3Z1gybHpRWEp5WVhreUlEMGdRWEp5WVhrdWFYTkJjbkpoZVNoZmFYUmxjbUYwYjNJeUtTd2dYMmt5SUQwZ01Dd2dYMmwwWlhKaGRHOXlNaUE5SUY5cGMwRnljbUY1TWlBL0lGOXBkR1Z5WVhSdmNqSWdPaUJmYVhSbGNtRjBiM0l5VzFONWJXSnZiQzVwZEdWeVlYUnZjbDBvS1RzN0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlGOXlaV1l5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0Y5cGMwRnljbUY1TWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBNaUErUFNCZmFYUmxjbUYwYjNJeUxteGxibWQwYUNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmZjbVZtTWlBOUlGOXBkR1Z5WVhSdmNqSmJYMmt5S3l0ZE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCZmFUSWdQU0JmYVhSbGNtRjBiM0l5TG01bGVIUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hmYVRJdVpHOXVaU2tnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCZmNtVm1NaUE5SUY5cE1pNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhU0E5SUY5eVpXWXlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1ZISnBiU0JoYm1RZ2MzQnNhWFFnWldGamFDQmpiMjlyYVdVZ1lua2dQU0JtYjNJZ2EyVjVJSFpoYkhWbElIQmhjbVZjYmlBZ0lDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN2MzUnlhVzVuVzExOVhHNGdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSFlnUFNCcExuUnlhVzBvS1M1emNHeHBkQ2hjSWoxY0lpd2dNaWs3WEc0Z0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNvZ1FXUmtJR3RsZVNCMGJ5QjBhR1VnYkdsemRGeHVJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lHRnlja3RsZVhNdWNIVnphQ2gyV3pCZEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWEp5UzJWNWN6dGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCSlppQmpiMjlyYVdVZ1pHOWxjeUJ1YjNRZ2MzVndjRzl5ZEdWa0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZ0ZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nU1dZZ2MyOXRaWFJvYVc1bklHZHZaWE1nZDNKdmJtY2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhKbGRIVnliaUJiWFR0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzRnSUM4cUtseHVJQ0FnS2lCVWFHVWdiV1YwYUc5a0lHTnNaV0Z1Y3lCMGFHVWdjM1J2Y21GblpTQmhibVFnY21WMGRYSnVJSFJ5ZFdVZ2FXWWdhWFFnYVhNZ1pXMXdkSGxjYmlBZ0lDb2dRSEJoY21GdElHTm9aV05yVTNWd2NHOXlkQ0I3WW05dmJHVmhibjFjYmlBZ0lDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVYRzVjYmlBZ1EyOXZhMmxsTG1Oc1pXRnlJRDBnWm5WdVkzUnBiMjRnWTJ4bFlYSW9ZMmhsWTJ0VGRYQndiM0owS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nU1dZZ2RHaGhkQ0J6ZEc5eVpTQnBjeUJ6ZFhCd2IzSjBaV1JjYmlBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnYVdZZ0tDRmphR1ZqYTFOMWNIQnZjblFnZkh3Z1EyOXZhMmxsTG1selUzVndjRzl5ZEdWa0tDa3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHRnlja3RsZVhNZ1BTQkRiMjlyYVdVdVoyVjBTMlY1Y3loamFHVmphMU4xY0hCdmNuUXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb1lYSnlTMlY1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJRjlwZEdWeVlYUnZjak1nUFNCaGNuSkxaWGx6TENCZmFYTkJjbkpoZVRNZ1BTQkJjbkpoZVM1cGMwRnljbUY1S0Y5cGRHVnlZWFJ2Y2pNcExDQmZhVE1nUFNBd0xDQmZhWFJsY21GMGIzSXpJRDBnWDJselFYSnlZWGt6SUQ4Z1gybDBaWEpoZEc5eU15QTZJRjlwZEdWeVlYUnZjak5iVTNsdFltOXNMbWwwWlhKaGRHOXlYU2dwT3pzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmZjbVZtTXp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBjMEZ5Y21GNU15a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWDJreklENDlJRjlwZEdWeVlYUnZjak11YkdWdVozUm9LU0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1gzSmxaak1nUFNCZmFYUmxjbUYwYjNJelcxOXBNeXNyWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lGOXBNeUE5SUY5cGRHVnlZWFJ2Y2pNdWJtVjRkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1gya3pMbVJ2Ym1VcElHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JmY21WbU15QTlJRjlwTXk1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR2tnUFNCZmNtVm1NenRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdRMjl2YTJsbExuSmxiVzkyWlVsMFpXMG9ZMmhsWTJ0VGRYQndiM0owTENCcEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVsbUlHRnNiQ0J2YXlCeVpYUjFjbTRnZEhKMVpWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRU52YjJ0cFpTNW5aWFJMWlhsektHTm9aV05yVTNWd2NHOXlkQ2t1YkdWdVozUm9JRDA5UFNBd08xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVsbUlHTnZiMnRwWlNCa2IyVnpJRzV2ZENCemRYQndiM0owWldRZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FxSUVsbUlITnZiV1YwYUdsdVp5Qm5iMlZ6SUhkeWIyNW5JSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQkRiMjlyYVdVN1hHNTlLQ2s3WEc1Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlFTnZiMnRwWlR0Y2JseHVYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTljYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0dkx5QXVMMnhwWWk5VmRHbHNjME52YjJ0cFpTNTBjMXh1THk4Z2JXOWtkV3hsSUdsa0lEMGdOMXh1THk4Z2JXOWtkV3hsSUdOb2RXNXJjeUE5SURFZ01pSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVMeW9xWEc0Z0tpQkRiR0Z6Y3lCbWIzSWdkMjl5YTJsdVp5QjNhWFJvSUdSdlkzVnRaVzUwWEc0Z0tpOWNibHh1Wlhod2IzSjBjeTVmWDJWelRXOWtkV3hsSUQwZ2RISjFaVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnNZWE56UTJGc2JFTm9aV05yS0dsdWMzUmhibU5sTENCRGIyNXpkSEoxWTNSdmNpa2dleUJwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRndpUTJGdWJtOTBJR05oYkd3Z1lTQmpiR0Z6Y3lCaGN5QmhJR1oxYm1OMGFXOXVYQ0lwT3lCOUlIMWNibHh1ZG1GeUlFUnZZM1Z0Wlc1MElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRVJ2WTNWdFpXNTBLQ2tnZTF4dUlDQWdJQ0FnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSRzlqZFcxbGJuUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCa2IyTjFiV1Z1ZENCb1pXbG5hSFJjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Ym5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFUnZZM1Z0Wlc1MExtZGxkRWhsYVdkb2RDQTlJR1oxYm1OMGFXOXVJR2RsZEVobGFXZG9kQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzlpYWxkcGJtUnZkeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dkMmx1Wkc5M08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG0xaGVDaHZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hJWldsbmFIUXNJRzlpYWxkcGJtUnZkeTVrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1NHVnBaMmgwTENCdlltcFhhVzVrYjNjdVpHOWpkVzFsYm5RdVltOWtlUzV2Wm1aelpYUklaV2xuYUhRc0lHOWlhbGRwYm1SdmR5NWtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWIyWm1jMlYwU0dWcFoyaDBMQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SSVpXbG5hSFFzSUc5aWFsZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WTJ4cFpXNTBTR1ZwWjJoMEtUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0JrYjJOMWJXVnVkQ0IzYVdSMGFGeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFUnZZM1Z0Wlc1MExtZGxkRmRwWkhSb0lEMGdablZ1WTNScGIyNGdaMlYwVjJsa2RHZ29LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnZZbXBYYVc1a2IzY2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklIZHBibVJ2ZHp0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV0WVhnb2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNWMmxrZEdnc0lHOWlhbGRwYm1SdmR5NWtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVjJsa2RHZ3NJRzlpYWxkcGJtUnZkeTVrYjJOMWJXVnVkQzVpYjJSNUxtOW1abk5sZEZkcFpIUm9MQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbTltWm5ObGRGZHBaSFJvTENCdlltcFhhVzVrYjNjdVpHOWpkVzFsYm5RdVltOWtlUzVqYkdsbGJuUlhhV1IwYUN3Z2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1amJHbGxiblJYYVdSMGFDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnWkc5amRXMWxiblFnZEc5d0lITmpjbTlzYkZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0J2WW1wWGFXNWtiM2RjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRVJ2WTNWdFpXNTBMbWRsZEZOamNtOXNiRlJ2Y0NBOUlHWjFibU4wYVc5dUlHZGxkRk5qY205c2JGUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzlpYWxkcGJtUnZkeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dkMmx1Wkc5M08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnZZbXBYYVc1a2IzY3VjR0ZuWlZsUFptWnpaWFFnZkh3Z2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZENBbUppQnZZbXBYYVc1a2IzY3VaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDQjhmQ0J2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1WW05a2VTQW1KaUJ2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4VWIzQTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnWkc5amRXMWxiblFnYkdWbWRDQnpZM0p2Ykd4Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnYjJKcVYybHVaRzkzWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JFYjJOMWJXVnVkQzVuWlhSVFkzSnZiR3hNWldaMElEMGdablZ1WTNScGIyNGdaMlYwVTJOeWIyeHNUR1ZtZENncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsZHBibVJ2ZHlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZDJsdVpHOTNPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wWGFXNWtiM2N1Y0dGblpWaFBabVp6WlhRZ2ZId2diMkpxVjJsdVpHOTNMbVJ2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDQW1KaUJ2WW1wWGFXNWtiM2N1Wkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbk5qY205c2JFeGxablFnZkh3Z2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtSnZaSGtnSmlZZ2IySnFWMmx1Wkc5M0xtUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNUR1ZtZER0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQmtiMk4xYldWdWRDQnpZM0p2Ykd4elhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUc5aWFsZHBibVJ2ZDF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTN0c1pXWjBPaUJ1ZFcxaVpYSXNJSFJ2Y0RvZ2JuVnRZbVZ5ZlgxY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1JHOWpkVzFsYm5RdVoyVjBVMk55YjJ4c0lEMGdablZ1WTNScGIyNGdaMlYwVTJOeWIyeHNLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiMkpxVjJsdVpHOTNJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURBZ0ppWWdZWEpuZFcxbGJuUnpXekJkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTUYwZ09pQjNhVzVrYjNjN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bFpuUTZJRVJ2WTNWdFpXNTBMbWRsZEZOamNtOXNiRXhsWm5Rb2IySnFWMmx1Wkc5M0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdmNEb2dSRzlqZFcxbGJuUXVaMlYwVTJOeWIyeHNWRzl3S0c5aWFsZHBibVJ2ZHlsY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUVSdlkzVnRaVzUwTzF4dWZTZ3BPMXh1WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCRWIyTjFiV1Z1ZER0Y2JseHVYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTljYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0dkx5QXVMMnhwWWk5VmRHbHNjMFJ2WTNWdFpXNTBMblJ6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0E0WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzR2S2lwY2JpQXFJRU5zWVhOeklHWnZjaUIzYjNKcmFXNW5JSGRwZEdnZ1JFOU5YRzRnS2k5Y2JseHVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUdGNibHh1Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2V5QnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZXlCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lRMkZ1Ym05MElHTmhiR3dnWVNCamJHRnpjeUJoY3lCaElHWjFibU4wYVc5dVhDSXBPeUI5SUgxY2JseHVkbUZ5SUVSUFRTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JtZFc1amRHbHZiaUJFVDAwb0tTQjdYRzRnSUNBZ0lDQWdJRjlqYkdGemMwTmhiR3hEYUdWamF5aDBhR2x6TENCRVQwMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCbGJHVnRaVzUwSUhOcGVtVnpJR0Z1WkNCd2IzTnBkR2x2Ymx4dUlDQWdJQ0FxSUVCd1lYSmhiU0JrYjIxT2IyUmxYRzRnSUNBZ0lDb2dRSEJoY21GdElHUnZiVVJ2WTNWdFpXNTBYRzRnSUNBZ0lDb2dRSEJoY21GdElITm9iM2RHYjNKalpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzdGliM1IwYjIwNklHNTFiV0psY2l3Z2FHVnBaMmgwT2lCdWRXMWlaWElzSUd4bFpuUTZJRzUxYldKbGNpd2djbWxuYUhRNklHNTFiV0psY2l3Z2RHOXdPaUJ1ZFcxaVpYSXNJSGRwWkhSb09pQnVkVzFpWlhKOWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVSUFRTNW5aWFJDYjNWdVpHbHVaME5zYVdWdWRGSmxZM1FnUFNCbWRXNWpkR2x2YmlCblpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUW9aRzl0VG05a1pTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pHOXRSRzlqZFcxbGJuUWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTVNBbUppQmhjbWQxYldWdWRITmJNVjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN4WFNBNklHUnZZM1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjJZWElnYzJodmQwWnZjbU5sSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lESWdKaVlnWVhKbmRXMWxiblJ6V3pKZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1sMGdPaUJtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdSdmJVNXZaR1VnUFQwOUlGd2ljM1J5YVc1blhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZiVTV2WkdVZ1BTQmtiMjFFYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGtiMjFPYjJSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IyWVhJZ2MzUjViR1Z6SUQwZ2RtOXBaQ0F3TzF4dUlDQWdJQ0FnSUNCcFppQW9jMmh2ZDBadmNtTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlhNZ1BTQm5aWFJEYjIxd2RYUmxaRk4wZVd4bEtHUnZiVTV2WkdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBlV3hsY3lBbUppQnpkSGxzWlhNdVpHbHpjR3hoZVNBOVBUMGdYQ0p1YjI1bFhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjIxT2IyUmxMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQmNJbUpzYjJOclhDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsSmxkQ0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p2ZEhSdmJUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bFpuUTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlhV2RvZERvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdmNEb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBaSFJvT2lBd1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJR2xtSUNoa2IyMU9iMlJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVsbUlHUmxabUYxYkhRZ2JXVjBhRzlrSUdseklITjFjSEJ2Y25SbFpDQjBhR0Z1SUhWelpTQnBkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aRzl0VG05a1pTNW5aWFJDYjNWdVpHbHVaME5zYVdWdWRGSmxZM1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdlltcFNaWFFnUFNCa2IyMU9iMlJsTG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFbEZJR2hoWTJ0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZZbXBTWlhRZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKdmRIUnZiVG9nYjJKcVVtVjBMbUp2ZEhSdmJTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUJ2WW1wU1pYUXVhR1ZwWjJoMElIeDhJR1J2YlU1dlpHVXVZMnhwWlc1MFNHVnBaMmgwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lCdlltcFNaWFF1YkdWbWRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21sbmFIUTZJRzlpYWxKbGRDNXlhV2RvZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkRzl3T2lCdlltcFNaWFF1ZEc5d0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVdSMGFEb2diMkpxVW1WMExuZHBaSFJvSUh4OElHUnZiVTV2WkdVdVkyeHBaVzUwVjJsa2RHaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJYY21sMFpTQjBhR1VnWld4bGJXVnVkQ0JwYmlCaElIUmxiWEJ2Y21GeWVTQjJZWEpwWVdKc1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCa2IyMUZiR1Z0Wlc1MElEMGdaRzl0VG05a1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRFlXeGpkV3hoZEdWa0lHSmhjMmxqSUhCaGNtRnRaWFJsY25NZ2IyWWdkR2hsSUdWc1pXMWxiblJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3VDJKcVpXTjBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnZZbXBEYjI5eVpHbHVZWFJsY3lBOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUJrYjIxRmJHVnRaVzUwTG05bVpuTmxkRWhsYVdkb2RDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJR1J2YlVWc1pXMWxiblF1YjJabWMyVjBWMmxrZEdnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVGeVpTQndZWE56WldRZ2IyNGdkRzhnWVd4c0lIQmhjbVZ1ZEhNZ1lXNWtJSFJoYTJVZ2FXNTBieUJoWTJOdmRXNTBJSFJvWldseUlHOW1abk5sZEhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjNhR2xzWlNBb1pHOXRSV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdlltcERiMjl5WkdsdVlYUmxjeTU0SUNzOUlHUnZiVVZzWlcxbGJuUXViMlptYzJWMFRHVm1kRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IySnFRMjl2Y21ScGJtRjBaWE11ZVNBclBTQmtiMjFGYkdWdFpXNTBMbTltWm5ObGRGUnZjRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOXRSV3hsYldWdWRDQTlJR1J2YlVWc1pXMWxiblF1YjJabWMyVjBVR0Z5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFQjBlWEJsSUh0UFltcGxZM1I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IySnFVbVYwSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpYjNSMGIyMDZJRzlpYWtOdmIzSmthVzVoZEdWekxua2dLeUJ2WW1wRGIyOXlaR2x1WVhSbGN5NW9aV2xuYUhRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hsYVdkb2REb2diMkpxUTI5dmNtUnBibUYwWlhNdWFHVnBaMmgwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lCdlltcERiMjl5WkdsdVlYUmxjeTU0TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlhV2RvZERvZ2IySnFRMjl2Y21ScGJtRjBaWE11ZUNBcklHOWlha052YjNKa2FXNWhkR1Z6TG5kcFpIUm9MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJRzlpYWtOdmIzSmthVzVoZEdWekxua3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUJ2WW1wRGIyOXlaR2x1WVhSbGN5NTNhV1IwYUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSE5vYjNkR2IzSmpaU0FtSmlCa2IyMU9iMlJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjIxT2IyUmxMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQmNJbHdpTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCU1pYUjFjbTRnYzJsNlpTQmhibVFnY0c5emFYUnBiMjRnYjJZZ2RHaGxJR1ZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wU1pYUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVpwYm1RZ1pXeGxiV1Z1ZENCd2IzTnBkR2x2Ymx4dUlDQWdJQ0FxSUVCd1lYSmhiU0JrYjIxT2IyUmxYRzRnSUNBZ0lDb2dRSEJoY21GdElITm9iM2RHYjNKalpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzdDBiM0E2SUc1MWJXSmxjaXdnYkdWbWREb2diblZ0WW1WeWZYMWNiaUFnSUNBZ0tpOWNiaUFnSUNCRVQwMHVabWx1WkVWc1pXMWxiblJRYjNOcGRHbHZiaUE5SUdaMWJtTjBhVzl1SUdacGJtUkZiR1Z0Wlc1MFVHOXphWFJwYjI0b1pHOXRUbTlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYzJodmQwWnZjbU5sSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERWdKaVlnWVhKbmRXMWxiblJ6V3pGZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1WMGdPaUJtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0IyWVhJZ2JHVm1kQ0E5SURBN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwYjNBZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9aRzl0VG05a1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSE4wZVd4bGN5QTlJSFp2YVdRZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHphRzkzUm05eVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pYTWdQU0JuWlhSRGIyMXdkWFJsWkZOMGVXeGxLR1J2YlU1dlpHVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemRIbHNaWE1nSmlZZ2MzUjViR1Z6TG1ScGMzQnNZWGtnUFQwOUlGd2libTl1WlZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdmJVNXZaR1V1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJRndpWW14dlkydGNJanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pXWjBJQ3M5SUdSdmJVNXZaR1V1YjJabWMyVjBUR1ZtZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0NBclBTQmtiMjFPYjJSbExtOW1abk5sZEZSdmNEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmJVNXZaR1VnUFNCa2IyMU9iMlJsTG05bVpuTmxkRkJoY21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHphRzkzUm05eVkyVWdKaVlnWkc5dFRtOWtaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdmJVNXZaR1V1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJRndpWENJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ2RHOXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVm1kRG9nYkdWbWRGeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRV1JrSUdWMlpXNTBJR3hwYzNSbGJtVnlYRzRnSUNBZ0lDb2dRSEJoY21GdElHOWlhbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnVZVzFsWEc0Z0lDQWdJQ29nUUhCaGNtRnRJR1oxYm1OY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1JFOU5MbUZrWkVWMlpXNTBJRDBnWm5WdVkzUnBiMjRnWVdSa1JYWmxiblFvYjJKcUxDQnVZVzFsTENCbWRXNWpLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHZZbW91WVdSa1JYWmxiblJNYVhOMFpXNWxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiMkpxTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvYm1GdFpTd2dablZ1WXl3Z1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHOWlhaTVoZEhSaFkyaEZkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJKcUxtRjBkR0ZqYUVWMlpXNTBLRndpYjI1Y0lpQXJJRzVoYldVc0lHWjFibU1wTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVVnWlhabGJuUWdiR2x6ZEdWdVpYSmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2IySnFYRzRnSUNBZ0lDb2dRSEJoY21GdElHNWhiV1ZjYmlBZ0lDQWdLaUJBY0dGeVlXMGdablZ1WTF4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCRVQwMHVjbVZ0YjNabFJYWmxiblFnUFNCbWRXNWpkR2x2YmlCeVpXMXZkbVZGZG1WdWRDaHZZbW9zSUc1aGJXVXNJR1oxYm1NcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFpNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZZbW91Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lodVlXMWxMQ0JtZFc1akxDQm1ZV3h6WlNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9iMkpxTG1SbGRHRmphRVYyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdlltb3VaR1YwWVdOb1JYWmxiblFvWENKdmJsd2lJQ3NnYm1GdFpTd2dablZ1WXlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHVnNaVzFsYm5RZ2FHRnpJR05zWVhOeklHNWhiV1ZjYmlBZ0lDQWdLaUJBY0dGeVlXMGdaV3hsYldWdWRGeHVJQ0FnSUNBcUlFQndZWEpoYlNCamJHRnpjMDVoYldWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCRVQwMHVhR0Z6UTJ4aGMzTk9ZVzFsSUQwZ1puVnVZM1JwYjI0Z2FHRnpRMnhoYzNOT1lXMWxLR1ZzWlcxbGJuUXNJR05zWVhOelRtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z3aUlGd2lJQ3NnWld4bGJXVnVkQzVqYkdGemMwNWhiV1VnS3lCY0lpQmNJaWt1YVc1a1pYaFBaaWhjSWlCY0lpQXJJR05zWVhOelRtRnRaU0FySUZ3aUlGd2lLU0FoUFQwZ0xURTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1FnWTJ4aGMzTWdibUZ0WlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsYkdWdFpXNTBYRzRnSUNBZ0lDb2dRSEJoY21GdElHTnNZWE56VG1GdFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwaFVUVXhGYkdWdFpXNTBmVnh1SUNBZ0lDQXFMMXh1WEc1Y2JpQWdJQ0JFVDAwdVlXUmtRMnhoYzNOT1lXMWxJRDBnWm5WdVkzUnBiMjRnWVdSa1EyeGhjM05PWVcxbEtHVnNaVzFsYm5Rc0lHTnNZWE56VG1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lVUlBUUzVvWVhORGJHRnpjMDVoYldVb1pXeGxiV1Z1ZEN3Z1kyeGhjM05PWVcxbEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR05zSUQwZ1pXeGxiV1Z1ZEM1amJHRnpjMDVoYldVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbU5zWVhOelRtRnRaU0E5SUdOc0lEOGdZMndnS3lCY0lpQmNJaUFySUdOc1lYTnpUbUZ0WlNBNklHTnNZWE56VG1GdFpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWREdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlNCamJHRnpjeUJ1WVcxbFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUdWc1pXMWxiblJjYmlBZ0lDQWdLaUJBY0dGeVlXMGdZMnhoYzNOT1lXMWxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRlJOVEVWc1pXMWxiblI5WEc0Z0lDQWdJQ292WEc1Y2JseHVJQ0FnSUVSUFRTNXlaVzF2ZG1WRGJHRnpjMDVoYldVZ1BTQm1kVzVqZEdsdmJpQnlaVzF2ZG1WRGJHRnpjMDVoYldVb1pXeGxiV1Z1ZEN3Z1kyeGhjM05PWVcxbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamJHRnpjMlZ6SUQwZ1pXeGxiV1Z1ZEM1amJHRnpjMDVoYldVdWMzQnNhWFFvWENJZ1hDSXBPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ1kyeGhjM05sY3k1c1pXNW5kR2dnTFNBeE95QnBJRDQ5SURBN0lHa3RMU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOc1lYTnpaWE5iYVYwZ1BUMDlJR05zWVhOelRtRnRaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpaWE11YzNCc2FXTmxLR2tzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVkyeGhjM05PWVcxbElEMGdZMnhoYzNObGN5NXFiMmx1S0Z3aUlGd2lLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlViMmRuYkdVZ1kyeGhjM01nYm1GdFpWeHVJQ0FnSUNBcUlFQndZWEpoYlNCbGJHVnRaVzUwWEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05zWVhOelRtRnRaVnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjBiMmRuYkdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SVZFMU1SV3hsYldWdWRIMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdSRTlOTG5SdloyZHNaVU5zWVhOelRtRnRaU0E5SUdaMWJtTjBhVzl1SUhSdloyZHNaVU5zWVhOelRtRnRaU2hsYkdWdFpXNTBMQ0JqYkdGemMwNWhiV1VzSUhSdloyZHNaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kRzluWjJ4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCRVQwMHVZV1JrUTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUdOc1lYTnpUbUZ0WlNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JFVDAwdWNtVnRiM1psUTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUdOc1lYTnpUbUZ0WlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYQnNZV05sSUdOc1lYTnpJRzVoYldWY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWld4bGJXVnVkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnZiR1JEYkdGemMwNWhiV1ZjYmlBZ0lDQWdLaUJBY0dGeVlXMGdibVYzUTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3U0ZSTlRFVnNaVzFsYm5SOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lFUlBUUzV5WlhCc1lXTmxRMnhoYzNNZ1BTQm1kVzVqZEdsdmJpQnlaWEJzWVdObFEyeGhjM01vWld4bGJXVnVkQ3dnYjJ4a1EyeGhjM05PWVcxbExDQnVaWGREYkdGemMwNWhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ1JFOU5MbkpsYlc5MlpVTnNZWE56VG1GdFpTaGxiR1Z0Wlc1MExDQnZiR1JEYkdGemMwNWhiV1VwTzF4dUlDQWdJQ0FnSUNCRVQwMHVZV1JrUTJ4aGMzTk9ZVzFsS0dWc1pXMWxiblFzSUc1bGQwTnNZWE56VG1GdFpTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1ME8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJR1ZzWlcxbGJuUWdZbmtnZEdGbklHNWhiV1VnWVc1a0lHbHVaR1Y0WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSFJ1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR052Ym5SbGVIUmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2FXNWtaWGhjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRPYjJSbGZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQkVUMDB1WjJWMFJXeGxiV1Z1ZEVKNVZHRm5UbUZ0WlNBOUlHWjFibU4wYVc5dUlHZGxkRVZzWlcxbGJuUkNlVlJoWjA1aGJXVW9kRzRzSUdOdmJuUmxlSFFzSUdsdVpHVjRLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiMjUwSUQwZ1kyOXVkR1Y0ZENCOGZDQmtiMk4xYldWdWREdGNiaUFnSUNBZ0lDQWdkbUZ5SUdWc2N5QTlJR052Ym5RdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9kRzRwTzF4dUlDQWdJQ0FnSUNCcFppQW9iblZzYkNBOVBTQnBibVJsZUNCOGZDQnBjMDVoVGlocGJtUmxlQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWld4elcybHVaR1Y0WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCeVpYUjFjbTRnUkU5Tk8xeHVmU2dwTzF4dVhHNWxlSEJ2Y25SekxtUmxabUYxYkhRZ1BTQkVUMDA3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITkVUMDB1ZEhOY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURsY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXhJRElpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYmk4cUtseHVJQ29nUTJ4aGMzTWdabTl5SUhkdmNtdHBibWNnZDJsMGFDQnpZM0psWlc1Y2JpQXFMMXh1WEc1bGVIQnZjblJ6TGw5ZlpYTk5iMlIxYkdVZ1BTQjBjblZsTzF4dVhHNW1kVzVqZEdsdmJpQmZZMnhoYzNORFlXeHNRMmhsWTJzb2FXNXpkR0Z1WTJVc0lFTnZibk4wY25WamRHOXlLU0I3SUdsbUlDZ2hLR2x1YzNSaGJtTmxJR2x1YzNSaGJtTmxiMllnUTI5dWMzUnlkV04wYjNJcEtTQjdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKRFlXNXViM1FnWTJGc2JDQmhJR05zWVhOeklHRnpJR0VnWm5WdVkzUnBiMjVjSWlrN0lIMGdmVnh1WEc1MllYSWdVMk55WldWdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRk5qY21WbGJpZ3BJSHRjYmlBZ0lDQWdJQ0FnWDJOc1lYTnpRMkZzYkVOb1pXTnJLSFJvYVhNc0lGTmpjbVZsYmlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJSE5qY21WbGJpQnBibVp2WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3ZTJGMllXbHNZV0pzWlZOcGVtVTZJSHRvWldsbmFIUTZJRzUxYldKbGNpd2dkMmxrZEdnNklHNTFiV0psY24wc0lHTnZiRzl5UkdWd2RHZzZJRzUxYldKbGNpd2djR2w0Wld4U1lYUnBiem9nYm5WdFltVnlMQ0J6YVhwbE9pQjdhR1ZwWjJoME9pQnVkVzFpWlhJc0lIZHBaSFJvT2lCdWRXMWlaWEo5ZlgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUWTNKbFpXNHVaMlYwU1c1bWJ5QTlJR1oxYm1OMGFXOXVJR2RsZEVsdVptOG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhkbUZwYkdGaWJHVlRhWHBsT2lCVFkzSmxaVzR1WjJWMFFYWmhhV3hoWW14bFUybDZaWE1vS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eVJHVndkR2c2SUZOamNtVmxiaTVuWlhSRGIyeHZja1JsY0hSb0tDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCd2FYaGxiRkpoZEdsdk9pQlRZM0psWlc0dVoyVjBVR2w0Wld4U1lYUnBieWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMmw2WlRvZ1UyTnlaV1Z1TG1kbGRGTnBlbVZ6S0NsY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0J6WTNKbFpXNGdhR1ZwWjJoMFhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UyNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JseHVYRzRnSUNBZ1UyTnlaV1Z1TG1kbGRFaGxhV2RvZENBOUlHWjFibU4wYVc5dUlHZGxkRWhsYVdkb2RDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE5qY21WbGJpNW9aV2xuYUhRN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUWdjMk55WldWdUlIZHBaSFJvWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTI1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTJOeVpXVnVMbWRsZEZkcFpIUm9JRDBnWm5WdVkzUnBiMjRnWjJWMFYybGtkR2dvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelkzSmxaVzR1ZDJsa2RHZzdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnYzJOeVpXVnVJSE5wZW1WelhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2UyaGxhV2RvZERvZ2JuVnRZbVZ5TENCM2FXUjBhRG9nYm5WdFltVnlmWDFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTJOeVpXVnVMbWRsZEZOcGVtVnpJRDBnWm5WdVkzUnBiMjRnWjJWMFUybDZaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRk5qY21WbGJpNW5aWFJJWldsbmFIUW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBaSFJvT2lCVFkzSmxaVzR1WjJWMFYybGtkR2dvS1Z4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJSE5qY21WbGJpQm9aV2xuYUhSY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN2JuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCVFkzSmxaVzR1WjJWMFFYWmhhV3hoWW14bFNHVnBaMmgwSUQwZ1puVnVZM1JwYjI0Z1oyVjBRWFpoYVd4aFlteGxTR1ZwWjJoMEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMk55WldWdUxtRjJZV2xzU0dWcFoyaDBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwSUhOamNtVmxiaUIzYVdSMGFGeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNWNibHh1SUNBZ0lGTmpjbVZsYmk1blpYUkJkbUZwYkdGaWJHVlhhV1IwYUNBOUlHWjFibU4wYVc5dUlHZGxkRUYyWVdsc1lXSnNaVmRwWkhSb0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMk55WldWdUxtRjJZV2xzVjJsa2RHZzdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnYzJOeVpXVnVJSE5wZW1WelhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2UyaGxhV2RvZERvZ2JuVnRZbVZ5TENCM2FXUjBhRG9nYm5WdFltVnlmWDFjYmlBZ0lDQWdLaTljYmx4dVhHNGdJQ0FnVTJOeVpXVnVMbWRsZEVGMllXbHNZV0pzWlZOcGVtVnpJRDBnWm5WdVkzUnBiMjRnWjJWMFFYWmhhV3hoWW14bFUybDZaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRk5qY21WbGJpNW5aWFJCZG1GcGJHRmliR1ZJWldsbmFIUW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBaSFJvT2lCVFkzSmxaVzR1WjJWMFFYWmhhV3hoWW14bFYybGtkR2dvS1Z4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJSE5qY21WbGJpQndhWGhsYkNCeVlYUnBiMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFnSUNBZ0tpOWNibHh1WEc0Z0lDQWdVMk55WldWdUxtZGxkRkJwZUdWc1VtRjBhVzhnUFNCbWRXNWpkR2x2YmlCblpYUlFhWGhsYkZKaGRHbHZLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjbUYwYVc4Z1BTQXhPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhkcGJtUnZkeTV6WTNKbFpXNHVjM2x6ZEdWdFdFUlFTU0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmlCMGVYQmxiMllnZDJsdVpHOTNMbk5qY21WbGJpNXNiMmRwWTJGc1dFUlFTU0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmlCM2FXNWtiM2N1YzJOeVpXVnVMbk41YzNSbGJWaEVVRWtnUGlCM2FXNWtiM2N1YzJOeVpXVnVMbXh2WjJsallXeFlSRkJKS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WVhScGJ5QTlJSGRwYm1SdmR5NXpZM0psWlc0dWMzbHpkR1Z0V0VSUVNTQXZJSGRwYm1SdmR5NXpZM0psWlc0dWJHOW5hV05oYkZoRVVFazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVlYUnBieUE5SUhkcGJtUnZkeTVrWlhacFkyVlFhWGhsYkZKaGRHbHZPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WVhScGJ6dGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkQ0J6WTNKbFpXNGdZMjlzYjNJZ1pHVndkR2hjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzVjYmx4dUlDQWdJRk5qY21WbGJpNW5aWFJEYjJ4dmNrUmxjSFJvSUQwZ1puVnVZM1JwYjI0Z1oyVjBRMjlzYjNKRVpYQjBhQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOamNtVmxiaTVqYjJ4dmNrUmxjSFJvTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdVMk55WldWdU8xeHVmU2dwTzF4dVhHNWxlSEJ2Y25SekxtUmxabUYxYkhRZ1BTQlRZM0psWlc0N1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlzYVdJdlZYUnBiSE5UWTNKbFpXNHVkSE5jYmk4dklHMXZaSFZzWlNCcFpDQTlJREV3WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzR2S2lwY2JpQXFJRU5zWVhOeklHWnZjaUIzYjNKcmFXNW5JSGRwZEdnZ2MzbHpkR1Z0WEc0Z0tpOWNibHh1Wlhod2IzSjBjeTVmWDJWelRXOWtkV3hsSUQwZ2RISjFaVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnNZWE56UTJGc2JFTm9aV05yS0dsdWMzUmhibU5sTENCRGIyNXpkSEoxWTNSdmNpa2dleUJwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2V5QjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRndpUTJGdWJtOTBJR05oYkd3Z1lTQmpiR0Z6Y3lCaGN5QmhJR1oxYm1OMGFXOXVYQ0lwT3lCOUlIMWNibHh1ZG1GeUlGTjVjM1JsYlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQlRlWE4wWlcwb0tTQjdYRzRnSUNBZ0lDQWdJRjlqYkdGemMwTmhiR3hEYUdWamF5aDBhR2x6TENCVGVYTjBaVzBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQnplWE4wWlcwZ2FXNW1iMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM3R1WVcxbE9pQnpkSEpwYm1jc0lIWmxjbk5wYjI0NklITjBjbWx1WjMxOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNsemRHVnRMbWRsZEVsdVptOGdQU0JtZFc1amRHbHZiaUJuWlhSSmJtWnZLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1UzbHpkR1Z0TG1kbGRFNWhiV1VvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25OcGIyNDZJRk41YzNSbGJTNW5aWFJXWlhKemFXOXVLQ2xjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRDQlBVeUJ1WVcxbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCVGVYTjBaVzB1WjJWMFRtRnRaU0E5SUdaMWJtTjBhVzl1SUdkbGRFNWhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ2Y3lBOUlGd2lYQ0k3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiR2xsYm5SVGRISnBibWR6SUQwZ1czdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOG9WMmx1Wkc5M2N5QXhNQzR3ZkZkcGJtUnZkM01nVGxRZ01UQXVNQ2t2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKWGFXNWtiM2R6SURFd1hDSmNiaUFnSUNBZ0lDQWdmU3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjam9nTHloWGFXNWtiM2R6SURndU1YeFhhVzVrYjNkeklFNVVJRFl1TXlrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklEZ3VNVndpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOG9WMmx1Wkc5M2N5QTRmRmRwYm1SdmQzTWdUbFFnTmk0eUtTOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCek9pQmNJbGRwYm1SdmQzTWdPRndpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOG9WMmx1Wkc5M2N5QTNmRmRwYm1SdmQzTWdUbFFnTmk0eEtTOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCek9pQmNJbGRwYm1SdmQzTWdOMXdpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOVhhVzVrYjNkeklFNVVJRFl1TUM4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6T2lCY0lsZHBibVJ2ZDNNZ1ZtbHpkR0ZjSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZWMmx1Wkc5M2N5Qk9WQ0ExTGpJdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklGTmxjblpsY2lBeU1EQXpYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0x5aFhhVzVrYjNkeklFNVVJRFV1TVh4WGFXNWtiM2R6SUZoUUtTOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCek9pQmNJbGRwYm1SdmQzTWdXRkJjSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZLRmRwYm1SdmQzTWdUbFFnTlM0d2ZGZHBibVJ2ZDNNZ01qQXdNQ2t2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKWGFXNWtiM2R6SURJd01EQmNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktGZHBiaUE1ZUNBMExqa3dmRmRwYm1SdmQzTWdUVVVwTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVYybHVaRzkzY3lCTlJWd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM4b1YybHVaRzkzY3lBNU9IeFhhVzQ1T0NrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlhhVzVrYjNkeklEazRYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0x5aFhhVzVrYjNkeklEazFmRmRwYmprMWZGZHBibVJ2ZDNOZk9UVXBMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITTZJRndpVjJsdVpHOTNjeUE1TlZ3aVhHNGdJQ0FnSUNBZ0lIMHNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISTZJQzhvVjJsdVpHOTNjeUJPVkNBMExqQjhWMmx1VGxRMExqQjhWMmx1VGxSOFYybHVaRzkzY3lCT1ZDa3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2N6b2dYQ0pYYVc1a2IzZHpJRTVVSURRdU1Gd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM5WGFXNWtiM2R6SUVORkx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lWMmx1Wkc5M2N5QkRSVndpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOVhhVzR4Tmk4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6T2lCY0lsZHBibVJ2ZDNNZ015NHhNVndpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOUJibVJ5YjJsa0x5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhNNklGd2lRVzVrY205cFpGd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM5UGNHVnVRbE5FTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVQzQmxiaUJDVTBSY0lseHVJQ0FnSUNBZ0lDQjlMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlPaUF2VTNWdVQxTXZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2N6b2dYQ0pUZFc0Z1QxTmNJbHh1SUNBZ0lDQWdJQ0I5TENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5T2lBdktFeHBiblY0ZkZneE1Ta3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2N6b2dYQ0pNYVc1MWVGd2lYRzRnSUNBZ0lDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEk2SUM4b2FWQm9iMjVsZkdsUVlXUjhhVkJ2WkNrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSnBUMU5jSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZUV0ZqSUU5VElGZ3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2N6b2dYQ0pOWVdNZ1QxTWdXRndpWEc0Z0lDQWdJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJNklDOG9UV0ZqVUZCRGZFMWhZMGx1ZEdWc2ZFMWhZMTlRYjNkbGNsQkRmRTFoWTJsdWRHOXphQ2t2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKTllXTWdUMU5jSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZVVTVZTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE02SUZ3aVVVNVlYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wxVk9TVmd2TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKVlRrbFlYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wwSmxUMU12TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjem9nWENKQ1pVOVRYQ0pjYmlBZ0lDQWdJQ0FnZlN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2pvZ0wwOVRYRnd2TWk4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6T2lCY0lrOVRMekpjSWx4dUlDQWdJQ0FnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeU9pQXZLRzUxYUd0OFIyOXZaMnhsWW05MGZGbGhiVzE1WW05MGZFOXdaVzVpYjNSOFUyeDFjbkI4VFZOT1FtOTBmRUZ6YXlCS1pXVjJaWE5jWEM5VVpXOXRZWHhwWVY5aGNtTm9hWFpsY2lrdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnY3pvZ1hDSlRaV0Z5WTJnZ1FtOTBYQ0pjYmlBZ0lDQWdJQ0FnZlYwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlGOXBkR1Z5WVhSdmNpQTlJR05zYVdWdWRGTjBjbWx1WjNNc0lGOXBjMEZ5Y21GNUlEMGdRWEp5WVhrdWFYTkJjbkpoZVNoZmFYUmxjbUYwYjNJcExDQmZhU0E5SURBc0lGOXBkR1Z5WVhSdmNpQTlJRjlwYzBGeWNtRjVJRDhnWDJsMFpYSmhkRzl5SURvZ1gybDBaWEpoZEc5eVcxTjViV0p2YkM1cGRHVnlZWFJ2Y2wwb0tUczdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWDNKbFpqdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRjlwYzBGeWNtRjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGOXBJRDQ5SUY5cGRHVnlZWFJ2Y2k1c1pXNW5kR2dwSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjl5WldZZ1BTQmZhWFJsY21GMGIzSmJYMmtySzEwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjlwSUQwZ1gybDBaWEpoZEc5eUxtNWxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9YMmt1Wkc5dVpTa2dZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzSmxaaUE5SUY5cExuWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWTNNZ1BTQmZjbVZtTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzTXVjaTUwWlhOMEtHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjNNZ1BTQmpjeTV6TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnZjenRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCUFV5QjJaWEp6YVc5dVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCVGVYTjBaVzB1WjJWMFZtVnljMmx2YmlBOUlHWjFibU4wYVc5dUlHZGxkRlpsY25OcGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnZjeUE5SUZONWMzUmxiUzVuWlhST1lXMWxLQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnZjMVpsY25OcGIyNGdQU0JjSWx3aU8xeHVJQ0FnSUNBZ0lDQnBaaUFvTDFkcGJtUnZkM012TG5SbGMzUW9iM01wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2YzFabGNuTnBiMjRnUFNBdlYybHVaRzkzY3lBb0xpb3BMeTVsZUdWaktHOXpLVnN4WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl6SUQwZ1hDSlhhVzVrYjNkelhDSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYzNkcGRHTm9JQ2h2Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQmNJazFoWXlCUFV5QllYQ0k2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjNOV1pYSnphVzl1SUQwZ0wwMWhZeUJQVXlCWUlDZ3hNRnN1WDF4Y1pGMHJLUzh1WlhobFl5aHVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBLVnN4WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnWENKQmJtUnliMmxrWENJNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzTldaWEp6YVc5dUlEMGdMMEZ1WkhKdmFXUWdLRnN1WDF4Y1pGMHJLUzh1WlhobFl5aHVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBLVnN4WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnWENKcFQxTmNJanBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NtVm5JRDBnTDA5VElDaGNYR1FyS1Y4b1hGeGtLeWxmUHloY1hHUXJLVDh2TG1WNFpXTW9ibUYyYVdkaGRHOXlMbUZ3Y0ZabGNuTnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5elZtVnljMmx2YmlBOUlISmxaMXN4WFNBcklGd2lMbHdpSUNzZ2NtVm5XekpkSUNzZ1hDSXVYQ0lnS3lBb2NtVm5Xek5kSUh4OElEQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYjNOV1pYSnphVzl1TzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdVM2x6ZEdWdE8xeHVmU2dwTzF4dVhHNWxlSEJ2Y25SekxtUmxabUYxYkhRZ1BTQlRlWE4wWlcwN1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlzYVdJdlZYUnBiSE5UZVhOMFpXMHVkSE5jYmk4dklHMXZaSFZzWlNCcFpDQTlJREV4WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYm1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3WEc1Y2JuWmhjaUJmVlhScGJITkNjbTkzYzJWeUlEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITkNjbTkzYzJWeVhDSXBPMXh1WEc1MllYSWdYMVYwYVd4elFuSnZkM05sY2pJZ1BTQmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwS0Y5VmRHbHNjMEp5YjNkelpYSXBPMXh1WEc1MllYSWdYMVYwYVd4elUyTnlaV1Z1SUQwZ2NtVnhkV2x5WlNoY0lpNHZWWFJwYkhOVFkzSmxaVzVjSWlrN1hHNWNiblpoY2lCZlZYUnBiSE5UWTNKbFpXNHlJRDBnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaGZWWFJwYkhOVFkzSmxaVzRwTzF4dVhHNTJZWElnWDFWMGFXeHpVM2x6ZEdWdElEMGdjbVZ4ZFdseVpTaGNJaTR2VlhScGJITlRlWE4wWlcxY0lpazdYRzVjYm5aaGNpQmZWWFJwYkhOVGVYTjBaVzB5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmVlhScGJITlRlWE4wWlcwcE8xeHVYRzVtZFc1amRHbHZiaUJmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtHOWlhaWtnZXlCeVpYUjFjbTRnYjJKcUlDWW1JRzlpYWk1ZlgyVnpUVzlrZFd4bElEOGdiMkpxSURvZ2V5QmtaV1poZFd4ME9pQnZZbW9nZlRzZ2ZWeHVYRzVtZFc1amRHbHZiaUJmWTJ4aGMzTkRZV3hzUTJobFkyc29hVzV6ZEdGdVkyVXNJRU52Ym5OMGNuVmpkRzl5S1NCN0lHbG1JQ2doS0dsdWMzUmhibU5sSUdsdWMzUmhibU5sYjJZZ1EyOXVjM1J5ZFdOMGIzSXBLU0I3SUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI1Y0lpazdJSDBnZlZ4dVhHNTJZWElnVlhObGNpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JtZFc1amRHbHZiaUJWYzJWeUtDa2dlMXh1SUNBZ0lDQWdJQ0JmWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1ZYTmxjaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMElIVnpaWElnYVc1bWIxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzdGljbTkzYzJWeU9pQjdZbkp2ZDNObGNqb2djM1J5YVc1bkxDQnRiMkpwYkdVNklHSnZiMnhsWVc0c0lIWmxjbk5wYjI0NklITjBjbWx1WjMwc0lITmpjbVZsYmpvZ2UyRjJZV2xzWVdKc1pWTnBlbVU2SUh0b1pXbG5hSFE2SUc1MWJXSmxjaXdnZDJsa2RHZzZJRzUxYldKbGNuMHNJR052Ykc5eVJHVndkR2c2SUc1MWJXSmxjaXdnY0dsNFpXeFNZWFJwYnpvZ2JuVnRZbVZ5TENCemFYcGxPaUI3YUdWcFoyaDBPaUJ1ZFcxaVpYSXNJSGRwWkhSb09pQnVkVzFpWlhKOWZTd2djM2x6ZEdWdE9pQjdibUZ0WlRvZ2MzUnlhVzVuTENCMlpYSnphVzl1T2lCemRISnBibWQ5ZlgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JWYzJWeUxtZGxkRWx1Wm04Z1BTQm1kVzVqZEdsdmJpQm5aWFJKYm1adktDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSnZkM05sY2pvZ1gxVjBhV3h6UW5KdmQzTmxjakl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZM0psWlc0NklGOVZkR2xzYzFOamNtVmxiakl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnplWE4wWlcwNklGOVZkR2xzYzFONWMzUmxiVEl1WkdWbVlYVnNkQzVuWlhSSmJtWnZLQ2xjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJRlZ6WlhJN1hHNTlLQ2s3WEc1Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlGVnpaWEk3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXNhV0l2VlhScGJITlZjMlZ5TG5SelhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBeE1seHVMeThnYlc5a2RXeGxJR05vZFc1cmN5QTlJREVnTWlJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dUx5b3FYRzRnS2lCRGJHRnpjeUJtYjNJZ2QyOXlhMmx1WnlCM2FYUm9JSGRwYm1SdmQxeHVJQ292WEc1Y2JtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN1hHNWNibVoxYm1OMGFXOXVJRjlqYkdGemMwTmhiR3hEYUdWamF5aHBibk4wWVc1alpTd2dRMjl1YzNSeWRXTjBiM0lwSUhzZ2FXWWdLQ0VvYVc1emRHRnVZMlVnYVc1emRHRnVZMlZ2WmlCRGIyNXpkSEoxWTNSdmNpa3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2Ymx3aUtUc2dmU0I5WEc1Y2JuWmhjaUJYYVc1a2IzY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWm5WdVkzUnBiMjRnVjJsdVpHOTNLQ2tnZTF4dUlDQWdJQ0FnSUNCZlkyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dWMmx1Wkc5M0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFFnZDJsdVpHOTNJR2hsYVdkb2RGeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdHVkVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVjJsdVpHOTNMbWRsZEVobGFXZG9kQ0E5SUdaMWJtTjBhVzl1SUdkbGRFaGxhV2RvZENncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsZHBibVJ2ZHlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZDJsdVpHOTNPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIzYVc1a2IzY3VhVzV1WlhKSVpXbG5hSFFnZkh3Z1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Oc2FXVnVkRWhsYVdkb2RDQjhmQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNhV1Z1ZEVobGFXZG9kRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCM2FXNWtiM2NnZDJsa2RHaGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdiblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVYRzVjYmlBZ0lDQlhhVzVrYjNjdVoyVjBWMmxrZEdnZ1BTQm1kVzVqZEdsdmJpQm5aWFJYYVdSMGFDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOWlhbGRwYm1SdmR5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF3SUNZbUlHRnlaM1Z0Wlc1MGMxc3dYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekJkSURvZ2QybHVaRzkzTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCM2FXNWtiM2N1YVc1dVpYSlhhV1IwYUNCOGZDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVkyeHBaVzUwVjJsa2RHZ2dmSHdnWkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SWGFXUjBhRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZENCM2FXNWtiM2NnYzJsNlpYTmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdDdhR1ZwWjJoME9pQnVkVzFpWlhJc0lIZHBaSFJvT2lCdWRXMWlaWEo5ZlZ4dUlDQWdJQ0FxTDF4dVhHNWNiaUFnSUNCWGFXNWtiM2N1WjJWMFUybDZaWE1nUFNCbWRXNWpkR2x2YmlCblpYUlRhWHBsY3lncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5aWFsZHBibVJ2ZHlBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZDJsdVpHOTNPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV2xuYUhRNklGZHBibVJ2ZHk1blpYUklaV2xuYUhRb2IySnFWMmx1Wkc5M0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUJYYVc1a2IzY3VaMlYwVjJsa2RHZ29iMkpxVjJsdVpHOTNLVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdWMmx1Wkc5M08xeHVmU2dwTzF4dVhHNWxlSEJ2Y25SekxtUmxabUYxYkhRZ1BTQlhhVzVrYjNjN1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlzYVdJdlZYUnBiSE5YYVc1a2IzY3VkSE5jYmk4dklHMXZaSFZzWlNCcFpDQTlJREV6WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01TQXlJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==