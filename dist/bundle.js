!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.render=function(){return'\n            <div class="app-content">\n                <img src="../assets/header.jpg" />\n            </div>\n        '},e}();n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.render=function(){return'\n            <div class="header flex-row">\n                <span class="title">Yash Kulshrestha</span>\n                <div class="flex-row h-list anchor-bar">\n                    <span>About</span>\n                    <span>Projects</span>\n                    <span>Contact</span>\n                </div>\n            </div>\n        '},e}();n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),u=function(){function e(){}return e.prototype.render=function(){var e=new r.default,n=new o.default;return'\n            <div class="flex-column">\n                '+e.render()+"\n                "+n.render()+"\n            </div>\n        "},e}();n.default=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=new(t(2).default);document.querySelector("#app-root").innerHTML=r.render()},function(e,n,t){t(3),e.exports=t(9)},,,,,function(e,n){}]);