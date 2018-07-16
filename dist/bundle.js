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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/Header.ts\");\nvar HeroBanner_1 = __webpack_require__(/*! ./HeroBanner */ \"./src/HeroBanner.ts\");\nvar App = /** @class */ (function () {\n    function App() {\n    }\n    App.prototype.render = function () {\n        var header = new Header_1.default();\n        var heroBanner = new HeroBanner_1.default();\n        return \"\\n            <div class=\\\"flex-column\\\">\\n                \" + header.render() + \"\\n                \" + heroBanner.render() + \"\\n            </div>\\n        \";\n    };\n    return App;\n}());\nexports.default = App;\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/Header.ts":
/*!***********************!*\
  !*** ./src/Header.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Header = /** @class */ (function () {\n    function Header() {\n    }\n    Header.prototype.render = function () {\n        return \"\\n            <div class=\\\"header flex-row\\\">\\n                <span class=\\\"title\\\">Yash Kulshrestha</span>\\n                <div class=\\\"flex-row h-list anchor-bar\\\">\\n                    <span>About</span>\\n                    <span>Projects</span>\\n                    <span>Contact</span>\\n                </div>\\n            </div>\\n        \";\n    };\n    return Header;\n}());\nexports.default = Header;\n\n\n//# sourceURL=webpack:///./src/Header.ts?");

/***/ }),

/***/ "./src/HeroBanner.ts":
/*!***************************!*\
  !*** ./src/HeroBanner.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HeroBanner = /** @class */ (function () {\n    function HeroBanner() {\n    }\n    HeroBanner.prototype.render = function () {\n        return \"\\n            <div class=\\\"hero-banner\\\">\\n                <img class=\\\"hero-background\\\" src=\\\"../assets/header.jpg\\\" />\\n                <img class=\\\"mugshot\\\" src=\\\"https://avatars1.githubusercontent.com/u/3102848?v=4\\\" />\\n            </div>\\n        \";\n    };\n    return HeroBanner;\n}());\nexports.default = HeroBanner;\n\n\n//# sourceURL=webpack:///./src/HeroBanner.ts?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/App.ts\");\nvar app = new App_1.default();\ndocument.querySelector('#app-root').innerHTML = app.render();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.ts ./src/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\nmodule.exports = __webpack_require__(/*! ./src/index.css */\"./src/index.css\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts_./src/index.css?");

/***/ })

/******/ });