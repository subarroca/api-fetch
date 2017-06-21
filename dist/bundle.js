/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpRequest = __webpack_require__(1);

var _highlight = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"highlight.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestClient = exports.RequestClient = function () {
  function RequestClient() {
    var _this = this;

    _classCallCheck(this, RequestClient);

    this.baseUrl = '../data/response';
    this.format = 'json';

    this.formatSelector = document.getElementsByName('format')[0];
    this.responseDetail = document.getElementById('response-detail');
    this.responseContent = document.getElementById('response-content');
    this.requestUrl = document.getElementById('request-url');

    this.formatSelector.addEventListener('change', function (event) {
      return _this.onFormatChange(event.target.value);
    });

    this.onFormatChange('json');
  }

  _createClass(RequestClient, [{
    key: 'getUrl',
    value: function getUrl(format) {
      return this.baseUrl + '.' + format;
    }
  }, {
    key: 'onFormatChange',
    value: function onFormatChange(format) {
      this.format = format;
      this.loadUrl(this.getUrl(this.format));
    }
  }, {
    key: 'loadUrl',
    value: function loadUrl(url) {
      var _this2 = this;

      this.requestUrl.innerHTML = url;
      // this.responseContent.innerHTML='';
      // this.responseDetail.innerHTML='loading';

      _httpRequest.HttpRequest.get(url).then(function (response) {
        return _this2.showResponse(response);
      }, function (error) {
        return console.error(error);
      });
    }
  }, {
    key: 'showResponse',
    value: function showResponse(response) {
      console.log((0, _highlight.highlightAuto)('<div>hola</div>'));
    }
  }]);

  return RequestClient;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequest = exports.HttpRequest = function () {
  function HttpRequest() {
    _classCallCheck(this, HttpRequest);
  }

  _createClass(HttpRequest, null, [{
    key: 'get',
    value: function get(url) {
      return HttpRequest.loadUrl(url, 'GET');
    }
  }, {
    key: 'loadUrl',
    value: function loadUrl(url, method) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.addEventListener('load', function () {
          return resolve(req);
        });
        req.addEventListener('error', function () {
          return reject(req);
        });
        req.open(method, url);
        req.send();
      });
    }
  }]);

  return HttpRequest;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _requestClient = __webpack_require__(0);

new _requestClient.RequestClient();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map