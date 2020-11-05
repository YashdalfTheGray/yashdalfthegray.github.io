!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (document.componentRegistry = {}),
      (document.nextId = 0);
    var r = (function () {
      function t(t) {
        void 0 === t && (t = 'Component'),
          (this.id = '' + t + ++document.nextId),
          (document.componentRegistry[this.id] = this);
      }
      return (
        (t.prototype.render = function (t) {
          return '';
        }),
        (t.prototype.callClassFunction = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = e
            .map(function (t) {
              return 'string' == typeof t ? "'" + t + "'" : t.toString();
            })
            .join(', ');
          return (
            "document.componentRegistry['" + this.id + "']." + t + '(' + r + ')'
          );
        }),
        t
      );
    })();
    e.default = r;
  },
  function (t, e, n) {
    n(2), (t.exports = n(23));
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = new (n(3).default)();
    document.querySelector('#app-root').innerHTML = r.render();
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = n(0),
      a = n(4),
      c = n(5),
      s = n(15),
      l = n(16),
      u = n(18),
      p = n(19),
      f = (function (t) {
        function e() {
          var e = t.call(this, 'app') || this;
          return (
            (e.state = {
              projectsList: [
                'auto-ngtemplate-loader',
                'hue-remote',
                'cluster-cleanup',
                'colorcode',
                'simple-load-tester',
                'federator',
              ],
            }),
            e
          );
        }
        return (
          o(e, t),
          (e.prototype.render = function () {
            var t = new l.default(),
              e = new u.default(),
              n = new a.default(),
              r = new p.default(this.state.projectsList),
              o = new c.default(),
              i = new s.default();
            return (
              '\n      <div class="flex-column">\n        ' +
              t.render() +
              '\n        ' +
              e.render() +
              '\n        ' +
              n.render() +
              '\n        ' +
              r.render() +
              '\n        ' +
              o.render() +
              '\n        ' +
              i.render() +
              '\n      </div>\n    '
            );
          }),
          e
        );
      })(i.default);
    e.default = f;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function (t) {
      function e() {
        return t.call(this, 'about') || this;
      }
      return (
        o(e, t),
        (e.prototype.render = function () {
          return '\n      <h2 class="section-heading">\n        <a class="anchor-link" name="about">About</a>\n      </h2>\n      <div class="about-section">\n        <p>Hi! I\'m Yash, a Buckeye living in Seattle.</p>\n        <p>I work on platform reliability for Amazon ECS by day. I experiment and learn through open-source contributions by night. Docker, Ruby, container orchestration, React, Node.js, Typescript, Express.js, Webpack, Javascript testing, and UI testing are all areas of expertise. Go, Rails, Sinatra, Elm, Vue.js, and devops tooling are all areas of interest.</p>\n        <p>I read, game and stream, tinker with electronics and keep up with Ohio State Football as much as I can in my free time.</p>\n        <p>Go bucks! O-H!</p>\n      </div>\n    ';
        }),
        e
      );
    })(n(0).default);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = n(0),
      a = n(6),
      c = n(14),
      s = (function (t) {
        function e() {
          var e = t.call(this, 'contact') || this;
          return (e.state = { contacts: a.default }), e;
        }
        return (
          o(e, t),
          (e.prototype.render = function () {
            return (
              '\n      <h2 class="section-heading">\n        <a class="anchor-link" name="contact">Contact</a>\n      </h2>\n      <div class="contacts-list">\n        ' +
              this.state.contacts
                .map(function (t) {
                  return new c.default().render(t);
                })
                .join('\n') +
              '\n      </div>\n    '
            );
          }),
          e
        );
      })(i.default);
    e.default = s;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(7),
      o = n(8),
      i = n(9),
      a = n(10),
      c = n(11),
      s = [
        {
          id: 'github',
          name: 'Github',
          link: 'https://github.com/YashdalfTheGray',
          icon: o,
        },
        {
          id: 'twitter',
          name: 'Twitter',
          link: 'https://twitter.com/YashdalfTheGray',
          icon: n(12),
        },
        {
          id: 'linkedIn',
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/yash-kulshrestha-00847965',
          icon: i,
        },
        {
          id: 'steam',
          name: 'Steam',
          link: 'http://steamcommunity.com/id/YashdalfTheGray/',
          icon: a,
        },
        {
          id: 'twitch',
          name: 'Twitch',
          link: 'https://www.twitch.tv/yashdalfthegray',
          icon: c,
        },
        {
          id: 'youtube',
          name: 'Youtube',
          link: 'https://www.youtube.com/channel/UCWcKiD0E1CyjvY4CSN_Ealw',
          icon: n(13),
        },
        {
          id: 'email',
          name: 'Email',
          link: 'mailto:contact@yashkulshrestha.com',
          icon: r,
        },
      ];
    e.default = s;
  },
  function (t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #24ABD6;"><title>Email</title><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-linkedin-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: #0077B5;"><title id="simpleicons-linkedin-icon">LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-steam-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: #425F99;"><title id="simpleicons-steam-icon">Steam</title><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-twitch-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: #6441A4;"><title id="simpleicons-twitch-icon">Twitch</title><path d="M2.089 0L.525 4.175v16.694h5.736V24h3.132l3.127-3.132h4.695l6.26-6.258V0H2.089zm2.086 2.085H21.39v11.479l-3.652 3.652H12l-3.127 3.127v-3.127H4.175V2.085z"></path><path d="M9.915 12.522H12v-6.26H9.915v6.26zm5.735 0h2.086v-6.26H15.65v6.26z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: #81C5D4;"><title id="simpleicons-twitter-icon">Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg aria-labelledby="simpleicons-youtube-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #F00;"><title id="simpleicons-youtube-icon">YouTube</title><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path></svg>';
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function (t) {
      function e() {
        return t.call(this, 'contactlink') || this;
      }
      return (
        o(e, t),
        (e.prototype.render = function (t) {
          return (
            '\n      <span><a href="' +
            t.link +
            '" target="_blank">' +
            t.icon +
            '</a></span>\n    '
          );
        }),
        e
      );
    })(n(0).default);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function (t) {
      function e() {
        return t.call(this, 'footer') || this;
      }
      return (
        o(e, t),
        (e.prototype.render = function () {
          return '\n      <div class="footer">\n        <p>This website uses Github Pages for hosting, SASS and Typescript for the code but no frontend frameworks. It is also open source and the code can be found <a href="https://github.com/YashdalfTheGray/yashdalfthegray.github.io" target="_blank">here</a>.</p>\n      </div>\n    ';
        }),
        e
      );
    })(n(0).default);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = n(0),
      a = n(17),
      c = (function (t) {
        function e() {
          return t.call(this, 'header') || this;
        }
        return (
          o(e, t),
          (e.prototype.handleMenuArrowClick = function () {
            var t = document.querySelector('.header .anchor-menu-button'),
              e = document.querySelector('.anchor-menu');
            t.classList.contains('activated')
              ? (t.classList.remove('activated'), e.classList.remove('visible'))
              : (t.classList.add('activated'), e.classList.add('visible'));
          }),
          (e.prototype.render = function () {
            var t = [
              { name: 'About', href: '#about', external: !1 },
              { name: 'Projects', href: '#projects', external: !1 },
              { name: 'Contact', href: '#contact', external: !1 },
              {
                name: 'Blog',
                href: 'https://medium.com/@yash.kulshrestha',
                external: !0,
              },
            ]
              .map(function (t) {
                return (
                  '<a class="header-anchor" href="' +
                  t.href +
                  '" ' +
                  (t.external ? 'target="_blank"' : '') +
                  '>' +
                  t.name +
                  '</a>'
                );
              })
              .join('\n');
            return (
              '\n      <div class="header flex-row">\n        <span class="title">Yash Kulshrestha</span>\n        <div class="flex-row h-list anchor-bar">\n          ' +
              t +
              '\n        </div>\n        <div\n          class="anchor-menu-button"\n          onClick="' +
              this.callClassFunction('handleMenuArrowClick') +
              '">\n          ' +
              a +
              '\n        </div>\n      </div>\n      <div class="anchor-menu flex-column">\n        ' +
              t +
              '\n      </div>\n    '
            );
          }),
          e
        );
      })(i.default);
    e.default = c;
  },
  function (t, e) {
    t.exports =
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"></path><path fill="none" d="M0,0h24v24H0V0z"></path></svg>';
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function (t) {
      function e() {
        return t.call(this, 'herobanner') || this;
      }
      return (
        o(e, t),
        (e.prototype.render = function () {
          return '\n    <div class="hero-banner">\n    <img src="../assets/header.jpg" />\n    </div>\n  ';
        }),
        e
      );
    })(n(0).default);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                s(r.next(t));
              } catch (t) {
                i(t);
              }
            }
            function c(t) {
              try {
                s(r.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            s((r = r.apply(t, e || [])).next());
          });
        },
      a =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (t) {
                    (i = [6, t]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(e, '__esModule', { value: !0 });
    var c = n(0),
      s = n(20),
      l = n(22),
      u = (function (t) {
        function e(e) {
          var n = t.call(this, 'projects') || this;
          return (
            (n.state = { projectDetails: [] }),
            setTimeout(function () {
              return n.getProjectDetails.bind(n, e)();
            }),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.getProjectDetails = function (t) {
            return i(this, void 0, void 0, function () {
              var e,
                n,
                r = this;
              return a(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = document.querySelector('div.projects-container')),
                      window.fetch
                        ? [3, 1]
                        : ((e.innerHTML = this.renderFallback()), [2])
                    );
                  case 1:
                    return (
                      (n = this.state),
                      [
                        4,
                        Promise.all(
                          t.map(function (t) {
                            return i(r, void 0, void 0, function () {
                              return a(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [
                                      4,
                                      fetch(
                                        'https://api.github.com/repos/yashdalfthegray/' +
                                          t
                                      ),
                                    ];
                                  case 1:
                                    return [2, e.sent().json()];
                                }
                              });
                            });
                          })
                        ),
                      ]
                    );
                  case 2:
                    (n.projectDetails = o.sent()),
                      (e.innerHTML = this.renderProjects(
                        this.state.projectDetails
                      )),
                      (o.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.renderFallback = function () {
            return '\n      <div class="projects-fallback">\n        You can find my active pet projects on my&nbsp;\n        <a href="https://github.com/YashdalfTheGray">Github page</a>!\n      </div>\n    ';
          }),
          (e.prototype.renderProjects = function (t) {
            return 0 ===
              t.filter(function (t) {
                return !t.message;
              }).length
              ? this.renderFallback()
              : '\n      <div class="projects-section">\n        <p>These are some of my pet projects on Github!</p>\n        <div class="projects-list">\n          ' +
                  t
                    .map(function (t) {
                      return new l.default().render(t);
                    })
                    .join('\n') +
                  '\n        </div>\n      </div>\n    ';
          }),
          (e.prototype.render = function () {
            return (
              '\n      <h2 class="section-heading">\n        <a class="anchor-link" name="projects">Projects</a>\n      </h2>\n      <div class="projects-container">\n        ' +
              new s.default().render() +
              '\n      </div>\n    '
            );
          }),
          e
        );
      })(c.default);
    e.default = u;
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = n(0),
      a = n(21),
      c = (function (t) {
        function e() {
          return t.call(this, 'loading') || this;
        }
        return (
          o(e, t),
          (e.prototype.render = function () {
            return (
              '\n    <div class="loading-container">\n    ' +
              a +
              '&nbsp;<span>Loading</span>\n    </div>\n  '
            );
          }),
          e
        );
      })(i.default);
    e.default = c;
  },
  function (t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
  },
  function (t, e, n) {
    'use strict';
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = (function (t) {
      function e() {
        return t.call(this, 'projectcard') || this;
      }
      return (
        o(e, t),
        (e.prototype.render = function (t) {
          var e = t.id,
            n = t.name,
            r = t.description;
          return (
            '\n      <div class="project-card" id="project-card-' +
            e +
            '">\n        <a href="' +
            t.html_url +
            '" target="_blank">\n          <span class="card-heading">' +
            n +
            '</span>\n          <span class="card-description">' +
            r +
            '</span>\n          <span class="card-language">' +
            t.language +
            '</span>\n        </a>\n      </div>\n    '
          );
        }),
        e
      );
    })(n(0).default);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
  },
]);
