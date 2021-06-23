webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./components/Blog/Card/SmallCard.js":
/*!*******************************************!*\
  !*** ./components/Blog/Card/SmallCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallCards; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Card\\SmallCard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SmallCards(_ref) {
  _s();

  var _this = this;

  var blog = _ref.blog;
  var posts = [{
    title: 'Boost your conversion rate',
    href: '#',
    category: {
      name: 'Article',
      href: '#',
      color: 'bg-indigo-100 text-indigo-800'
    },
    description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '6 min'
  }, {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: {
      name: 'Video',
      href: '#',
      color: 'bg-pink-100 text-pink-800'
    },
    description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '4 min'
  }, {
    title: 'Improve your customer experience',
    href: '#',
    category: {
      name: 'Case Study',
      href: '#',
      color: 'bg-green-100 text-green-800'
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '11 min'
  }];

  function classNames() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    return classes.filter(Boolean).join(' ');
  }

  var url = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    srcBlob: null,
    srcDataUri: null
  }),
      _useState$ = _useState[0],
      srcBlob = _useState$.srcBlob,
      srcDataUri = _useState$.srcDataUri,
      setSrc = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var isUnmounted = false;
    fetch(url, {}).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return blob.arrayBuffer();
    }).then(function (arrayBuffer) {
      if (isUnmounted) {
        return;
      }

      var blob = new Blob([arrayBuffer]);
      var srcBlob = URL.createObjectURL(blob);
      setSrc(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          srcBlob: srcBlob
        });
      });
    });
    return function () {
      isUnmounted = true;
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",
            children: "Recent publications"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-3 text-xl text-gray-500 sm:mt-4",
            children: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12",
          children: posts.map(function (post) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: post.category.href,
                  className: "inline-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: classNames(post.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'),
                    children: post.category.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: post.href,
                className: "block mt-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-xl font-semibold text-gray-900",
                  children: post.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "mt-3 text-base text-gray-500",
                  children: post.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-6 flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex-shrink-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: post.author.href,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "sr-only",
                      children: post.author.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "h-10 w-10 rounded-full",
                      src: post.author.imageUrl,
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "ml-3",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: post.author.href,
                      children: post.author.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex space-x-1 text-sm text-gray-500",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                      dateTime: post.datetime,
                      children: post.date
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "aria-hidden": "true",
                      children: "\xB7"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [post.readingTime, " read"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, _this)]
            }, post.title, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/blogs/".concat(blog.slug),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img img-fluid",
              style: {
                maxHeight: 'auto',
                width: '100%'
              },
              src: srcBlob,
              alt: blog.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "card-title",
                children: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-text",
            children: react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(blog.excerpt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: ["Posted ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/profile/".concat(blog.postedBy.username),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: blog.postedBy.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(SmallCards, "ouXZ8MFBRwVxe9kaUNhg4TK5w2I=");

_c = SmallCards;
;

var _c;

$RefreshReg$(_c, "SmallCards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvU21hbGxDYXJkLmpzIl0sIm5hbWVzIjpbIlNtYWxsQ2FyZHMiLCJibG9nIiwicG9zdHMiLCJ0aXRsZSIsImhyZWYiLCJjYXRlZ29yeSIsIm5hbWUiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImRhdGV0aW1lIiwiYXV0aG9yIiwiaW1hZ2VVcmwiLCJyZWFkaW5nVGltZSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ1cmwiLCJBUEkiLCJzbHVnIiwidXNlU3RhdGUiLCJzcmNCbG9iIiwic3JjRGF0YVVyaSIsInNldFNyYyIsInVzZUVmZmVjdCIsImlzVW5tb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiYXJyYXlCdWZmZXIiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJtYXAiLCJwb3N0IiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsIm1vbWVudCIsInVwZGF0ZWRBdCIsImZyb21Ob3ciLCJwb3N0ZWRCeSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBR3ZDLE1BQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFNBQUssRUFBRSw0QkFEWDtBQUVJQyxRQUFJLEVBQUUsR0FGVjtBQUdJQyxZQUFRLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLFNBQVA7QUFBa0JGLFVBQUksRUFBRSxHQUF4QjtBQUE2QkcsV0FBSyxFQUFFO0FBQXBDLEtBSGQ7QUFJSUMsZUFBVyxFQUNQLGtIQUxSO0FBTUlDLFFBQUksRUFBRSxjQU5WO0FBT0lDLFlBQVEs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O0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ1lDLDZDQUFNLENBQUMxQyxJQUFJLENBQUMyQyxTQUFOLENBQU4sQ0FBdUJDLE9BQXZCLEVBRFosU0FDaUQsR0FEakQsZUFFSSxxRUFBQyxnREFBRDtBQUFNLGNBQUkscUJBQWM1QyxJQUFJLENBQUM2QyxRQUFMLENBQWNDLFFBQTVCLENBQVY7QUFBQSxpQ0FDSTtBQUFBLHNCQUFJOUMsSUFBSSxDQUFDNkMsUUFBTCxDQUFjQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERBO0FBQUEsa0JBREo7QUF5Rkg7O0dBekx1Qi9DLFU7O0tBQUFBLFU7QUF5THZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS45MzJjMDQ5NzIzNzRmNjM3ZjYyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU21hbGxDYXJkcyh7YmxvZ30pIHtcclxuXHJcblxyXG4gICAgY29uc3QgcG9zdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jvb3N0IHlvdXIgY29udmVyc2lvbiByYXRlJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdBcnRpY2xlJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tODAwJ30sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgICAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgICAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTE2JyxcclxuICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGF1bCBZb3JrJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZTogJzYgbWluJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb3cgdG8gdXNlIHNlYXJjaCBlbmdpbmUgb3B0aW1pemF0aW9uIHRvIGRyaXZlIHNhbGVzJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdWaWRlbycsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1waW5rLTEwMCB0ZXh0LXBpbmstODAwJ30sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgICAgICBkYXRlOiAnTWFyIDEwLCAyMDIwJyxcclxuICAgICAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTEwJyxcclxuICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVzc2llIFJ5YW4nLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwNTI1ODExLWU1ODY5ZGQwMzAzMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lOiAnNCBtaW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ltcHJvdmUgeW91ciBjdXN0b21lciBleHBlcmllbmNlJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdDYXNlIFN0dWR5JywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCd9LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdXJlIGl1c3RvIGZ1Z2lhdCBjb21tb2RpIHNlcXVpLicsXHJcbiAgICAgICAgICAgIGRhdGU6ICdGZWIgMTIsIDIwMjAnLFxyXG4gICAgICAgICAgICBkYXRldGltZTogJzIwMjAtMDItMTInLFxyXG4gICAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFYXNlciBDb2xsaW5zJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NzQxMjcyMDUwNy1lN2FiMzc2MDNjNmY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gXHJcbiAgICBjb25zdCBbe1xyXG4gICAgICAgIHNyY0Jsb2IsXHJcbiAgICAgICAgc3JjRGF0YVVyaVxyXG4gICAgfSwgc2V0U3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzcmNCbG9iOiBudWxsLFxyXG4gICAgICAgIHNyY0RhdGFVcmk6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVW5tb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCwge30pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcclxuICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiBibG9iLmFycmF5QnVmZmVyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTcmMoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzcmNCbG9iXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHQtMTYgcGItMjAgcHgtNCBzbTpweC02IGxnOnB0LTI0IGxnOnBiLTI4IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbGcgbXgtYXV0byBkaXZpZGUteS0yIGRpdmlkZS1ncmF5LTIwMCBsZzptYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlJlY2VudCBwdWJsaWNhdGlvbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQteGwgdGV4dC1ncmF5LTUwMCBzbTptdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW4gdG9ydG9yIGxhY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmN1LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBncmlkIGdhcC0xNiBwdC0xMiBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC01IGxnOmdhcC15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmNhdGVnb3J5LmhyZWZ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuY2F0ZWdvcnkuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5jYXRlZ29yeS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmhyZWZ9IGNsYXNzTmFtZT1cImJsb2NrIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtwb3N0LmF1dGhvci5pbWFnZVVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5hdXRob3IuaHJlZn0+e3Bvc3QuYXV0aG9yLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17cG9zdC5kYXRldGltZX0+e3Bvc3QuZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jm1pZGRvdDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QucmVhZGluZ1RpbWV9IHJlYWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJ2F1dG8nLCB3aWR0aDogJzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjQmxvYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Jsb2cudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntyZW5kZXJIVE1MKGJsb2cuZXhjZXJwdCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgUG9zdGVkIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gYnl7JyAnfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=