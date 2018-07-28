!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),document.componentRegistry={},document.nextId=0;var r=function(){function t(t){void 0===t&&(t="Component"),this.id=""+t+ ++document.nextId,document.componentRegistry[this.id]=this}return t.prototype.render=function(t){return""},t}();n.default=r},function(t,n,e){e(2),t.exports=e(10)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=new(e(3).default);document.querySelector("#app-root").innerHTML=r.render()},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=e(4),a=e(5),c=e(7),u=e(8),s=function(t){function n(){return t.call(this,"app")||this}return r(n,t),n.prototype.render=function(){var t=new a.default,n=new c.default,e=new i.default,r=new u.default;return'\n            <div class="flex-column">\n                '+t.render()+"\n                "+n.render()+"\n                "+e.render()+"\n                "+r.render()+"\n            </div>\n        "},n}(o.default);n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"about")||this}return r(n,t),n.prototype.render=function(){return'\n            <h2 class="section-heading">\n                <a class="anchor-link" name="about">About</a>\n            </h2>\n            <div class="about-section">\n                <p>Hi! I\'m Yash, a Buckeye living in Seattle.</p>\n                <p>I maintain an AngularJS webapp by day, experiment and learn through open-source contributions by night. React, Vue.js, Node.js, Typescript, Express.js, Webpack, Javascript testing and UI testing are all areas of expertise. Docker, container orchestration, Go, Ruby, Rails, Sinatra and Elm are all areas of interest.</p>\n                <p>I read, game and stream, tinker with electronics and keep up with Ohio State Football as much as I can in my free time.</p>\n                <p>Go bucks! O-H!</p>\n            </div>\n        '},n}(e(0).default);n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(6),i=function(t){function n(){return t.call(this,"header")||this}return r(n,t),n.prototype.handleMenuArrowClick=function(){var t=document.querySelector(".header .anchor-menu-button"),n=document.querySelector(".anchor-menu");t.classList.contains("activated")?(t.classList.remove("activated"),n.classList.remove("visible")):(t.classList.add("activated"),n.classList.add("visible"))},n.prototype.render=function(){var t=[{name:"About",anchor:"about"},{name:"Projects",anchor:"projects"},{name:"Contact",anchor:"contact"}].map(function(t){return'<a class="header-anchor" href="#'+t.anchor+'">'+t.name+"</a>"}).join("\n"),n=new o.default;return'\n            <div class="header flex-row">\n                <span class="title">Yash Kulshrestha</span>\n                <div class="flex-row h-list anchor-bar">\n                    '+t+'\n                </div>\n                <div\n                    class="anchor-menu-button"\n                    onClick="document.componentRegistry[\''+this.id+"'].handleMenuArrowClick()\">\n                    "+n.render()+'\n                </div>\n            </div>\n            <div class="anchor-menu flex-column">\n                '+t+"\n            </div>\n        "},n}(e(0).default);n.default=i},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"arrowdown")||this}return r(n,t),n.prototype.render=function(){return'\n            <svg\n                version="1.1"\n                id="Layer_1"\n                xmlns="http://www.w3.org/2000/svg"\n                xmlns:xlink="http://www.w3.org/1999/xlink"\n                x="0px" y="0px" width="24px" height="24px"\n                viewBox="0 0 24 24"\n                enable-background="new 0 0 24 24"\n                xml:space="preserve">\n                <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>\n                <path fill="none" d="M0,0h24v24H0V0z"/>\n            </svg>\n        '},n}(e(0).default);n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"herobanner")||this}return r(n,t),n.prototype.render=function(){return'\n            <div class="hero-banner">\n                <img src="../assets/header.jpg" />\n            </div>\n        '},n}(e(0).default);n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=e(9),a=function(t){function n(){return t.call(this,"projects")||this}return r(n,t),n.prototype.renderProjects=function(t){return'\n            <div class="projects-section">\n                <p>These are some of my pet projects on Github!</p>\n            </div>\n        '},n.prototype.renderFallback=function(){return'\n            <div class="projects-fallback">\n                You can find my active pet projects on my&nbsp;\n                <a href="https://github.com/YashdalfTheGray">Github page</a>!\n            </div>\n        '},n.prototype.render=function(){return'\n            <h2 class="section-heading">\n                <a class="anchor-link" name="projects">Projects</a>\n            </h2>\n            <div class="projects-container">\n                '+(new i.default).render()+"\n            </div>\n        "},n}(o.default);n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(){return t.call(this,"loading")||this}return r(n,t),n.prototype.render=function(){return'\n            <div class="loading-container">\n                <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24" height="24"\n                    viewBox="0 0 24 24"\n                    class="rotate-infinitely">\n                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>\n                    <path d="M0 0h24v24H0z" fill="none"/>\n                </svg>\n                &nbsp;\n                <span>Loading</span>\n            </div>\n        '},n}(e(0).default);n.default=o},function(t,n){}]);