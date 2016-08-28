(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactLens"] = factory(require("react"));
	else
		root["ReactLens"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.make = undefined;

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	var _Lens = __webpack_require__(2);

	var _Lens2 = _interopRequireDefault(_Lens);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * src/main.js
	 * Author: H.Alper Tuna <halpertuna@gmail.com>
	 * Date: 28.08.2016
	 */

	exports.make = _make2.default;
	exports.default = _Lens2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Lens = __webpack_require__(2);

	exports.default = function (lensName, type, renderer) {
	  var instanceOf = null;
	  var inputType = type;
	  if (typeof type === 'function') {
	    instanceOf = inputType;
	    inputType = 'object';
	  }
	  _Lens.lenses[lensName] = {
	    instanceOf: instanceOf,
	    inputType: inputType,
	    renderer: renderer
	  };
	}; /**
	    * src/make.js
	    * Author: H.Alper Tuna <halpertuna@gmail.com>
	    * Date: 28.08.2016
	    */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lenses = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * src/Lens.jsx
	                                                                                                                                                                                                                                                   * Author: H.Alper Tuna <halpertuna@gmail.com>
	                                                                                                                                                                                                                                                   * Date: 28.08.2016
	                                                                                                                                                                                                                                                   */

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lenses = {};

	exports.lenses = lenses;


	var Lens = function Lens(props) {
	  var content = props.children;
	  var container = typeof props.container === 'undefined' ? 'span' : props.container;

	  if (props.filter) {
	    props.filter.replace(/\s/g, '').split('|').forEach(function (filter) {
	      var parameters = filter.split(':');
	      var lens = parameters[0];

	      if (typeof lenses[lens] === 'undefined') {
	        throw new Error('Lens "' + lens + '" is not found.');
	      }

	      var inputType = lenses[lens].inputType;
	      var instanceOf = lenses[lens].instanceOf;
	      parameters[0] = content;

	      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === inputType) {
	        if (instanceOf === null || content instanceof instanceOf) {
	          content = lenses[lens].renderer.apply(null, parameters);
	        } else {
	          var funcStr = instanceOf.toString();
	          funcStr = funcStr.substring('function '.length, funcStr.indexOf('('));
	          throw new Error('Invalid value for Lens. Expected instance of "' + funcStr + '".');
	        }
	      } else {
	        throw new Error('Invalid value for Lens. Expected "' + inputType + '", got "' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)) + '" instead.');
	      }
	    });
	  }
	  var clonedProps = Object.assign({}, props);
	  delete clonedProps.container;
	  delete clonedProps.content;
	  return _react2.default.createElement(container, Object.assign({}, clonedProps, { children: content }));
	};

	Lens.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object, _react.PropTypes.array]),
	  container: _react.PropTypes.string,
	  filter: _react.PropTypes.string
	};

	exports.default = Lens;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _make2.default)('currency', 'number', function (content) {
	  var sign = arguments.length <= 1 || arguments[1] === undefined ? '$' : arguments[1];
	  var pad = arguments.length <= 2 || arguments[2] === undefined ? 2 : arguments[2];
	  var direction = arguments.length <= 3 || arguments[3] === undefined ? 'L' : arguments[3];

	  var result = '';
	  if (direction === 'L') result += sign + ' ';
	  result += parseFloat(content).toFixed(pad);
	  if (direction === 'R') result += ' ' + sign;
	  return result;
	}); /**
	     * src/lenses/currency.js
	     * Author: H.Alper Tuna <halpertuna@gmail.com>
	     * Date: 28.08.2016
	     */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _make2.default)('uppercase', 'string', function (content) {
	  return ('' + content).toUpperCase();
	}); /**
	     * src/lenses/uppercase.js
	     * Author: H.Alper Tuna <halpertuna@gmail.com>
	     * Date: 28.08.2016
	     */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _make2.default)('lowercase', 'string', function (content) {
	  return ('' + content).toLowerCase();
	}); /**
	     * src/lenses/lowercase.js
	     * Author: H.Alper Tuna <halpertuna@gmail.com>
	     * Date: 28.08.2016
	     */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _make2.default)('json', 'object', function (content) {
	  return JSON.stringify(content);
	}); /**
	     * src/lenses/json.js
	     * Author: H.Alper Tuna <halpertuna@gmail.com>
	     * Date: 28.08.2016
	     */

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dateformat = __webpack_require__(9);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _make2.default)('date', Date, function (content) {
	  var format = arguments.length <= 1 || arguments[1] === undefined ? 'dd.mm.yyyy' : arguments[1];
	  return (0, _dateformat2.default)(content, format);
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */

	(function (global) {
	  'use strict';

	  var dateFormat = function () {
	    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
	    var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	    var timezoneClip = /[^-+\dA-Z]/g;

	    // Regexes and supporting functions are cached through closure
	    return function (date, mask, utc, gmt) {

	      // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
	      if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
	        mask = date;
	        date = undefined;
	      }

	      date = date || new Date();

	      if (!(date instanceof Date)) {
	        date = new Date(date);
	      }

	      if (isNaN(date)) {
	        throw TypeError('Invalid date');
	      }

	      mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);

	      // Allow setting the utc/gmt argument via the mask
	      var maskSlice = mask.slice(0, 4);
	      if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
	        mask = mask.slice(4);
	        utc = true;
	        if (maskSlice === 'GMT:') {
	          gmt = true;
	        }
	      }

	      var _ = utc ? 'getUTC' : 'get';
	      var d = date[_ + 'Date']();
	      var D = date[_ + 'Day']();
	      var m = date[_ + 'Month']();
	      var y = date[_ + 'FullYear']();
	      var H = date[_ + 'Hours']();
	      var M = date[_ + 'Minutes']();
	      var s = date[_ + 'Seconds']();
	      var L = date[_ + 'Milliseconds']();
	      var o = utc ? 0 : date.getTimezoneOffset();
	      var W = getWeek(date);
	      var N = getDayOfWeek(date);
	      var flags = {
	        d: d,
	        dd: pad(d),
	        ddd: dateFormat.i18n.dayNames[D],
	        dddd: dateFormat.i18n.dayNames[D + 7],
	        m: m + 1,
	        mm: pad(m + 1),
	        mmm: dateFormat.i18n.monthNames[m],
	        mmmm: dateFormat.i18n.monthNames[m + 12],
	        yy: String(y).slice(2),
	        yyyy: y,
	        h: H % 12 || 12,
	        hh: pad(H % 12 || 12),
	        H: H,
	        HH: pad(H),
	        M: M,
	        MM: pad(M),
	        s: s,
	        ss: pad(s),
	        l: pad(L, 3),
	        L: pad(Math.round(L / 10)),
	        t: H < 12 ? 'a' : 'p',
	        tt: H < 12 ? 'am' : 'pm',
	        T: H < 12 ? 'A' : 'P',
	        TT: H < 12 ? 'AM' : 'PM',
	        Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
	        o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	        S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
	        W: W,
	        N: N
	      };

	      return mask.replace(token, function (match) {
	        if (match in flags) {
	          return flags[match];
	        }
	        return match.slice(1, match.length - 1);
	      });
	    };
	  }();

	  dateFormat.masks = {
	    'default': 'ddd mmm dd yyyy HH:MM:ss',
	    'shortDate': 'm/d/yy',
	    'mediumDate': 'mmm d, yyyy',
	    'longDate': 'mmmm d, yyyy',
	    'fullDate': 'dddd, mmmm d, yyyy',
	    'shortTime': 'h:MM TT',
	    'mediumTime': 'h:MM:ss TT',
	    'longTime': 'h:MM:ss TT Z',
	    'isoDate': 'yyyy-mm-dd',
	    'isoTime': 'HH:MM:ss',
	    'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
	    'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
	    'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
	  };

	  // Internationalization strings
	  dateFormat.i18n = {
	    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  };

	  function pad(val, len) {
	    val = String(val);
	    len = len || 2;
	    while (val.length < len) {
	      val = '0' + val;
	    }
	    return val;
	  }

	  /**
	   * Get the ISO 8601 week number
	   * Based on comments from
	   * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
	   *
	   * @param  {Object} `date`
	   * @return {Number}
	   */
	  function getWeek(date) {
	    // Remove time components of date
	    var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	    // Change date to Thursday same week
	    targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);

	    // Take January 4th as it is always in week 1 (see ISO 8601)
	    var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

	    // Change date to Thursday same week
	    firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);

	    // Check if daylight-saving-time-switch occured and correct for it
	    var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
	    targetThursday.setHours(targetThursday.getHours() - ds);

	    // Number of weeks between target Thursday and first Thursday
	    var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
	    return 1 + Math.floor(weekDiff);
	  }

	  /**
	   * Get ISO-8601 numeric representation of the day of the week
	   * 1 (for Monday) through 7 (for Sunday)
	   * 
	   * @param  {Object} `date`
	   * @return {Number}
	   */
	  function getDayOfWeek(date) {
	    var dow = date.getDay();
	    if (dow === 0) {
	      dow = 7;
	    }
	    return dow;
	  }

	  /**
	   * kind-of shortcut
	   * @param  {*} val
	   * @return {String}
	   */
	  function kindOf(val) {
	    if (val === null) {
	      return 'null';
	    }

	    if (val === undefined) {
	      return 'undefined';
	    }

	    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
	      return typeof val === 'undefined' ? 'undefined' : _typeof(val);
	    }

	    if (Array.isArray(val)) {
	      return 'array';
	    }

	    return {}.toString.call(val).slice(8, -1).toLowerCase();
	  };

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return dateFormat;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = dateFormat;
	  } else {
	    global.dateFormat = dateFormat;
	  }
	})(undefined);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _make = __webpack_require__(1);

	var _make2 = _interopRequireDefault(_make);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * src/lenses/foreach.js
	 * Author: H.Alper Tuna <halpertuna@gmail.com>
	 * Date: 28.08.2016
	 */

	exports.default = (0, _make2.default)('foreach', Array, function (content) {
	  var tag = arguments.length <= 1 || arguments[1] === undefined ? 'li' : arguments[1];
	  return content.map(function (item, i) {
	    return _react2.default.createElement(tag, { children: item, key: i });
	  });
	});

/***/ }
/******/ ])
});
;