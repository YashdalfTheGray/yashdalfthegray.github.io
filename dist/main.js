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
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ./Component */ \"./src/Component.ts\");\nvar About_1 = __webpack_require__(/*! ./components/About */ \"./src/components/About.ts\");\nvar Contact_1 = __webpack_require__(/*! ./components/Contact */ \"./src/components/Contact.ts\");\nvar Footer_1 = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.ts\");\nvar Header_1 = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.ts\");\nvar HeroBanner_1 = __webpack_require__(/*! ./components/HeroBanner */ \"./src/components/HeroBanner.ts\");\nvar Projects_1 = __webpack_require__(/*! ./components/Projects */ \"./src/components/Projects.ts\");\nvar App = (function (_super) {\n    __extends(App, _super);\n    function App() {\n        var _this = _super.call(this, 'app') || this;\n        _this.state = {\n            projectsList: [\n                'auto-ngtemplate-loader',\n                'hue-remote',\n                'cluster-cleanup',\n                'colorcode',\n                'docker-dashboard',\n                'simple-load-tester'\n            ]\n        };\n        return _this;\n    }\n    App.prototype.render = function () {\n        var header = new Header_1.default();\n        var heroBanner = new HeroBanner_1.default();\n        var about = new About_1.default();\n        var projects = new Projects_1.default(this.state.projectsList);\n        var contact = new Contact_1.default();\n        var footer = new Footer_1.default();\n        return \"\\n      <div class=\\\"flex-column\\\">\\n        \" + header.render() + \"\\n        \" + heroBanner.render() + \"\\n        \" + about.render() + \"\\n        \" + projects.render() + \"\\n        \" + contact.render() + \"\\n        \" + footer.render() + \"\\n      </div>\\n    \";\n    };\n    return App;\n}(Component_1.default));\nexports.default = App;\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\ndocument.componentRegistry = {};\ndocument.nextId = 0;\nvar Component = (function () {\n    function Component(type) {\n        if (type === void 0) { type = 'Component'; }\n        this.id = \"\" + type + ++document.nextId;\n        document.componentRegistry[this.id] = this;\n    }\n    Component.prototype.render = function (props) {\n        return '';\n    };\n    return Component;\n}());\nexports.default = Component;\n\n\n//# sourceURL=webpack:///./src/Component.ts?");

/***/ }),

/***/ "./src/components/About.ts":
/*!*********************************!*\
  !*** ./src/components/About.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar About = (function (_super) {\n    __extends(About, _super);\n    function About() {\n        return _super.call(this, 'about') || this;\n    }\n    About.prototype.render = function () {\n        return \"\\n      <h2 class=\\\"section-heading\\\">\\n        <a class=\\\"anchor-link\\\" name=\\\"about\\\">About</a>\\n      </h2>\\n      <div class=\\\"about-section\\\">\\n        <p>Hi! I'm Yash, a Buckeye living in Seattle.</p>\\n        <p>I maintain large scale webapps by day, experiment and learn through open-source contributions by night. React, Vue.js, Node.js, Typescript, Express.js, Webpack, Javascript testing and UI testing are all areas of expertise. Docker, container orchestration, Go, Ruby, Rails, Sinatra, Elm and devops tooling are all areas of interest.</p>\\n        <p>I read, game and stream, tinker with electronics and keep up with Ohio State Football as much as I can in my free time.</p>\\n        <p>Go bucks! O-H!</p>\\n      </div>\\n    \";\n    };\n    return About;\n}(Component_1.default));\nexports.default = About;\n\n\n//# sourceURL=webpack:///./src/components/About.ts?");

/***/ }),

/***/ "./src/components/Contact.ts":
/*!***********************************!*\
  !*** ./src/components/Contact.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar contacts_1 = __webpack_require__(/*! ../contacts */ \"./src/contacts.ts\");\nvar ContactLink_1 = __webpack_require__(/*! ./ContactLink */ \"./src/components/ContactLink.ts\");\nvar Contact = (function (_super) {\n    __extends(Contact, _super);\n    function Contact() {\n        var _this = _super.call(this, 'contact') || this;\n        _this.state = { contacts: contacts_1.default };\n        return _this;\n    }\n    Contact.prototype.render = function () {\n        return \"\\n      <h2 class=\\\"section-heading\\\">\\n        <a class=\\\"anchor-link\\\" name=\\\"contact\\\">Contact</a>\\n      </h2>\\n      <div class=\\\"contacts-list\\\">\\n        \" + this.state.contacts.map(function (c) { return new ContactLink_1.default().render(c); }).join('\\n') + \"\\n      </div>\\n    \";\n    };\n    return Contact;\n}(Component_1.default));\nexports.default = Contact;\n\n\n//# sourceURL=webpack:///./src/components/Contact.ts?");

/***/ }),

/***/ "./src/components/ContactLink.ts":
/*!***************************************!*\
  !*** ./src/components/ContactLink.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar ContactLink = (function (_super) {\n    __extends(ContactLink, _super);\n    function ContactLink() {\n        return _super.call(this, 'contactlink') || this;\n    }\n    ContactLink.prototype.render = function (props) {\n        return \"\\n      <span><a href=\\\"\" + props.link + \"\\\" target=\\\"_blank\\\">\" + props.icon + \"</a></span>\\n    \";\n    };\n    return ContactLink;\n}(Component_1.default));\nexports.default = ContactLink;\n\n\n//# sourceURL=webpack:///./src/components/ContactLink.ts?");

/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar Footer = (function (_super) {\n    __extends(Footer, _super);\n    function Footer() {\n        return _super.call(this, 'footer') || this;\n    }\n    Footer.prototype.render = function () {\n        return \"\\n      <div class=\\\"footer\\\">\\n        <p>This website uses Github Pages for hosting, SASS and Typescript for the code but no frontend frameworks. It is also open source and the code can be found <a href=\\\"https://github.com/YashdalfTheGray/yashdalfthegray.github.io\\\" target=\\\"_blank\\\">here</a>.</p>\\n      </div>\\n    \";\n    };\n    return Footer;\n}(Component_1.default));\nexports.default = Footer;\n\n\n//# sourceURL=webpack:///./src/components/Footer.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar arrowDown = __webpack_require__(/*! ../icons/arrowdown.svg */ \"./src/icons/arrowdown.svg\");\nvar Header = (function (_super) {\n    __extends(Header, _super);\n    function Header() {\n        return _super.call(this, 'header') || this;\n    }\n    Header.prototype.handleMenuArrowClick = function () {\n        var arrowDiv = document.querySelector('.header .anchor-menu-button');\n        var anchorMenu = document.querySelector('.anchor-menu');\n        if (arrowDiv.classList.contains('activated')) {\n            arrowDiv.classList.remove('activated');\n            anchorMenu.classList.remove('visible');\n        }\n        else {\n            arrowDiv.classList.add('activated');\n            anchorMenu.classList.add('visible');\n        }\n    };\n    Header.prototype.render = function () {\n        var anchors = [\n            { name: 'About', href: '#about', external: false },\n            { name: 'Projects', href: '#projects', external: false },\n            { name: 'Contact', href: '#contact', external: false },\n            {\n                name: 'Blog',\n                href: 'https://medium.com/@yash.kulshrestha',\n                external: true\n            }\n        ];\n        var renderedAnchors = anchors\n            .map(function (a) {\n            return \"<a class=\\\"header-anchor\\\" href=\\\"\" + a.href + \"\\\" \" + (a.external ? 'target=\"_blank\"' : '') + \">\" + a.name + \"</a>\";\n        })\n            .join('\\n');\n        return \"\\n      <div class=\\\"header flex-row\\\">\\n        <span class=\\\"title\\\">Yash Kulshrestha</span>\\n        <div class=\\\"flex-row h-list anchor-bar\\\">\\n          \" + renderedAnchors + \"\\n        </div>\\n        <div\\n          class=\\\"anchor-menu-button\\\"\\n          onClick=\\\"document.componentRegistry['\" + this.id + \"'].handleMenuArrowClick()\\\">\\n          \" + arrowDown + \"\\n        </div>\\n      </div>\\n      <div class=\\\"anchor-menu flex-column\\\">\\n        \" + renderedAnchors + \"\\n      </div>\\n    \";\n    };\n    return Header;\n}(Component_1.default));\nexports.default = Header;\n\n\n//# sourceURL=webpack:///./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/HeroBanner.ts":
/*!**************************************!*\
  !*** ./src/components/HeroBanner.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar HeroBanner = (function (_super) {\n    __extends(HeroBanner, _super);\n    function HeroBanner() {\n        return _super.call(this, 'herobanner') || this;\n    }\n    HeroBanner.prototype.render = function () {\n        return \"\\n    <div class=\\\"hero-banner\\\">\\n    <img src=\\\"../assets/header.jpg\\\" />\\n    </div>\\n  \";\n    };\n    return HeroBanner;\n}(Component_1.default));\nexports.default = HeroBanner;\n\n\n//# sourceURL=webpack:///./src/components/HeroBanner.ts?");

/***/ }),

/***/ "./src/components/Loading.ts":
/*!***********************************!*\
  !*** ./src/components/Loading.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar refresh = __webpack_require__(/*! ../icons/refresh.svg */ \"./src/icons/refresh.svg\");\nvar Loading = (function (_super) {\n    __extends(Loading, _super);\n    function Loading() {\n        return _super.call(this, 'loading') || this;\n    }\n    Loading.prototype.render = function () {\n        return \"\\n    <div class=\\\"loading-container\\\">\\n    \" + refresh + \"&nbsp;<span>Loading</span>\\n    </div>\\n  \";\n    };\n    return Loading;\n}(Component_1.default));\nexports.default = Loading;\n\n\n//# sourceURL=webpack:///./src/components/Loading.ts?");

/***/ }),

/***/ "./src/components/ProjectCard.ts":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar ProjectCard = (function (_super) {\n    __extends(ProjectCard, _super);\n    function ProjectCard() {\n        return _super.call(this, 'projectcard') || this;\n    }\n    ProjectCard.prototype.render = function (props) {\n        var id = props.id, name = props.name, description = props.description, html_url = props.html_url, language = props.language;\n        return \"\\n      <div class=\\\"project-card\\\" id=\\\"project-card-\" + id + \"\\\">\\n        <a href=\\\"\" + html_url + \"\\\" target=\\\"_blank\\\">\\n          <span class=\\\"card-heading\\\">\" + name + \"</span>\\n          <span class=\\\"card-description\\\">\" + description + \"</span>\\n          <span class=\\\"card-language\\\">\" + language + \"</span>\\n        </a>\\n      </div>\\n    \";\n    };\n    return ProjectCard;\n}(Component_1.default));\nexports.default = ProjectCard;\n\n\n//# sourceURL=webpack:///./src/components/ProjectCard.ts?");

/***/ }),

/***/ "./src/components/Projects.ts":
/*!************************************!*\
  !*** ./src/components/Projects.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component_1 = __webpack_require__(/*! ../Component */ \"./src/Component.ts\");\nvar Loading_1 = __webpack_require__(/*! ./Loading */ \"./src/components/Loading.ts\");\nvar ProjectCard_1 = __webpack_require__(/*! ./ProjectCard */ \"./src/components/ProjectCard.ts\");\nvar Projects = (function (_super) {\n    __extends(Projects, _super);\n    function Projects(projects) {\n        var _this = _super.call(this, 'projects') || this;\n        _this.state = {\n            projectDetails: []\n        };\n        setTimeout(function () { return _this.getProjectDetails.bind(_this, projects)(); });\n        return _this;\n    }\n    Projects.prototype.getProjectDetails = function (projects) {\n        return __awaiter(this, void 0, void 0, function () {\n            var projectsContainer, _a;\n            var _this = this;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        projectsContainer = document.querySelector('div.projects-container');\n                        if (!!window.fetch) return [3, 1];\n                        projectsContainer.innerHTML = this.renderFallback();\n                        return [2];\n                    case 1:\n                        _a = this.state;\n                        return [4, Promise.all(projects.map(function (p) { return __awaiter(_this, void 0, void 0, function () {\n                                var response;\n                                return __generator(this, function (_a) {\n                                    switch (_a.label) {\n                                        case 0: return [4, fetch(\"https://api.github.com/repos/yashdalfthegray/\" + p)];\n                                        case 1:\n                                            response = _a.sent();\n                                            return [2, response.json()];\n                                    }\n                                });\n                            }); }))];\n                    case 2:\n                        _a.projectDetails = _b.sent();\n                        projectsContainer.innerHTML = this.renderProjects(this.state.projectDetails);\n                        _b.label = 3;\n                    case 3: return [2];\n                }\n            });\n        });\n    };\n    Projects.prototype.renderFallback = function () {\n        return \"\\n      <div class=\\\"projects-fallback\\\">\\n        You can find my active pet projects on my&nbsp;\\n        <a href=\\\"https://github.com/YashdalfTheGray\\\">Github page</a>!\\n      </div>\\n    \";\n    };\n    Projects.prototype.renderProjects = function (projects) {\n        var toShow = projects.filter(function (p) { return !p.message; });\n        if (toShow.length === 0) {\n            return this.renderFallback();\n        }\n        return \"\\n      <div class=\\\"projects-section\\\">\\n        <p>These are some of my pet projects on Github!</p>\\n        <div class=\\\"projects-list\\\">\\n          \" + projects.map(function (p) { return new ProjectCard_1.default().render(p); }).join('\\n') + \"\\n        </div>\\n      </div>\\n    \";\n    };\n    Projects.prototype.render = function () {\n        var loading = new Loading_1.default();\n        return \"\\n      <h2 class=\\\"section-heading\\\">\\n        <a class=\\\"anchor-link\\\" name=\\\"projects\\\">Projects</a>\\n      </h2>\\n      <div class=\\\"projects-container\\\">\\n        \" + loading.render() + \"\\n      </div>\\n    \";\n    };\n    return Projects;\n}(Component_1.default));\nexports.default = Projects;\n\n\n//# sourceURL=webpack:///./src/components/Projects.ts?");

/***/ }),

/***/ "./src/contacts.ts":
/*!*************************!*\
  !*** ./src/contacts.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar email = __webpack_require__(/*! ./icons/email.svg */ \"./src/icons/email.svg\");\nvar github = __webpack_require__(/*! ./icons/github.svg */ \"./src/icons/github.svg\");\nvar googleplus = __webpack_require__(/*! ./icons/googleplus.svg */ \"./src/icons/googleplus.svg\");\nvar linkedin = __webpack_require__(/*! ./icons/linkedin.svg */ \"./src/icons/linkedin.svg\");\nvar steam = __webpack_require__(/*! ./icons/steam.svg */ \"./src/icons/steam.svg\");\nvar twitch = __webpack_require__(/*! ./icons/twitch.svg */ \"./src/icons/twitch.svg\");\nvar twitter = __webpack_require__(/*! ./icons/twitter.svg */ \"./src/icons/twitter.svg\");\nvar youtube = __webpack_require__(/*! ./icons/youtube.svg */ \"./src/icons/youtube.svg\");\nvar contacts = [\n    {\n        id: 'github',\n        name: 'Github',\n        link: 'https://github.com/YashdalfTheGray',\n        icon: github\n    },\n    {\n        id: 'twitter',\n        name: 'Twitter',\n        link: 'https://twitter.com/YashdalfTheGray',\n        icon: twitter\n    },\n    {\n        id: 'linkedIn',\n        name: 'LinkedIn',\n        link: 'https://www.linkedin.com/in/yash-kulshrestha-00847965',\n        icon: linkedin\n    },\n    {\n        id: 'steam',\n        name: 'Steam',\n        link: 'http://steamcommunity.com/id/YashdalfTheGray/',\n        icon: steam\n    },\n    {\n        id: 'twitch',\n        name: 'Twitch',\n        link: 'https://www.twitch.tv/yashdalfthegray',\n        icon: twitch\n    },\n    {\n        id: 'youtube',\n        name: 'Youtube',\n        link: 'https://www.youtube.com/channel/UCWcKiD0E1CyjvY4CSN_Ealw',\n        icon: youtube\n    },\n    {\n        id: 'googlePlus',\n        name: 'Google+',\n        link: 'https://plus.google.com/+YashKulshrestha12',\n        icon: googleplus\n    },\n    {\n        id: 'email',\n        name: 'Email',\n        link: 'mailto:contact@yashkulshrestha.com',\n        icon: email\n    }\n];\nexports.default = contacts;\n\n\n//# sourceURL=webpack:///./src/contacts.ts?");

/***/ }),

/***/ "./src/icons/arrowdown.svg":
/*!*********************************!*\
  !*** ./src/icons/arrowdown.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 24 24\\\" enable-background=\\\"new 0 0 24 24\\\" xml:space=\\\"preserve\\\"><path d=\\\"M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z\\\"></path><path fill=\\\"none\\\" d=\\\"M0,0h24v24H0V0z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/arrowdown.svg?");

/***/ }),

/***/ "./src/icons/email.svg":
/*!*****************************!*\
  !*** ./src/icons/email.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" style=\\\"fill: #24ABD6;\\\"><title>Email</title><path d=\\\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\\\"></path><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/email.svg?");

/***/ }),

/***/ "./src/icons/github.svg":
/*!******************************!*\
  !*** ./src/icons/github.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-github-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><title id=\\\"simpleicons-github-icon\\\">GitHub</title><path d=\\\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/github.svg?");

/***/ }),

/***/ "./src/icons/googleplus.svg":
/*!**********************************!*\
  !*** ./src/icons/googleplus.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-googleplus-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" style=\\\"fill: #F44336;\\\"><title id=\\\"simpleicons-googleplus-icon\\\">Google+</title><path d=\\\"M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/googleplus.svg?");

/***/ }),

/***/ "./src/icons/linkedin.svg":
/*!********************************!*\
  !*** ./src/icons/linkedin.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-linkedin-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" style=\\\"fill: #0077B5;\\\"><title id=\\\"simpleicons-linkedin-icon\\\">LinkedIn</title><path d=\\\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/linkedin.svg?");

/***/ }),

/***/ "./src/icons/refresh.svg":
/*!*******************************!*\
  !*** ./src/icons/refresh.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\\\"></path><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/refresh.svg?");

/***/ }),

/***/ "./src/icons/steam.svg":
/*!*****************************!*\
  !*** ./src/icons/steam.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-steam-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" style=\\\"fill: #425F99;\\\"><title id=\\\"simpleicons-steam-icon\\\">Steam</title><path d=\\\"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/steam.svg?");

/***/ }),

/***/ "./src/icons/twitch.svg":
/*!******************************!*\
  !*** ./src/icons/twitch.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-twitch-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" style=\\\"fill: #6441A4;\\\"><title id=\\\"simpleicons-twitch-icon\\\">Twitch</title><path d=\\\"M2.089 0L.525 4.175v16.694h5.736V24h3.132l3.127-3.132h4.695l6.26-6.258V0H2.089zm2.086 2.085H21.39v11.479l-3.652 3.652H12l-3.127 3.127v-3.127H4.175V2.085z\\\"></path><path d=\\\"M9.915 12.522H12v-6.26H9.915v6.26zm5.735 0h2.086v-6.26H15.65v6.26z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/twitch.svg?");

/***/ }),

/***/ "./src/icons/twitter.svg":
/*!*******************************!*\
  !*** ./src/icons/twitter.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-twitter-icon\\\" role=\\\"img\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" style=\\\"fill: #81C5D4;\\\"><title id=\\\"simpleicons-twitter-icon\\\">Twitter</title><path d=\\\"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/twitter.svg?");

/***/ }),

/***/ "./src/icons/youtube.svg":
/*!*******************************!*\
  !*** ./src/icons/youtube.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg aria-labelledby=\\\"simpleicons-youtube-icon\\\" role=\\\"img\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" style=\\\"fill: #F00;\\\"><title id=\\\"simpleicons-youtube-icon\\\">YouTube</title><path class=\\\"a\\\" d=\\\"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/youtube.svg?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/index.scss?");

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
/*!*********************************************!*\
  !*** multi ./src/index.ts ./src/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\nmodule.exports = __webpack_require__(/*! ./src/index.scss */\"./src/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts_./src/index.scss?");

/***/ })

/******/ });