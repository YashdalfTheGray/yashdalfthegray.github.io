!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),document.componentRegistry={},document.nextId=0;var r=function(){function t(t){void 0===t&&(t="Component"),this.id=""+t+ ++document.nextId,document.componentRegistry[this.id]=this}return t.prototype.render=function(t){return""},t}();n.default=r},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"herobanner")||this}return r(n,t),n.prototype.render=function(){return'\n            <div class="hero-banner">\n                <img src="../assets/header.jpg" />\n            </div>\n        '},n}(e(0).default);n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"arrowdown")||this}return r(n,t),n.prototype.render=function(){return'\n            <svg\n                version="1.1"\n                id="Layer_1"\n                xmlns="http://www.w3.org/2000/svg"\n                xmlns:xlink="http://www.w3.org/1999/xlink"\n                x="0px" y="0px" width="24px" height="24px"\n                viewBox="0 0 24 24"\n                enable-background="new 0 0 24 24"\n                xml:space="preserve">\n                <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>\n                <path fill="none" d="M0,0h24v24H0V0z"/>\n            </svg>\n        '},n}(e(0).default);n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(2),u=function(t){function n(){return t.call(this,"header")||this}return r(n,t),n.prototype.handleMenuArrowClick=function(){var t=document.querySelector(".header .anchor-menu-button");t.classList.contains("activated")?t.classList.remove("activated"):t.classList.add("activated")},n.prototype.render=function(){var t=new o.default;return'\n            <div class="header flex-row">\n                <span class="title">Yash Kulshrestha</span>\n                <div class="flex-row h-list anchor-bar">\n                    <span>About</span>\n                    <span>Projects</span>\n                    <span>Contact</span>\n                </div>\n                <div\n                    class="anchor-menu-button"\n                    onClick="document.componentRegistry[\''+this.id+"'].handleMenuArrowClick()\">\n                    "+t.render()+"\n                </div>\n            </div>\n        "},n}(e(0).default);n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),u=e(3),i=e(1),c=function(t){function n(){return t.call(this,"app")||this}return r(n,t),n.prototype.render=function(){var t=new u.default,n=new i.default;return'\n            <div class="flex-column">\n                '+t.render()+"\n                "+n.render()+"\n            </div>\n        "},n}(o.default);n.default=c},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=new(e(4).default);document.querySelector("#app-root").innerHTML=r.render()},function(t,n,e){e(5),t.exports=e(11)},,,,,function(t,n){}]);