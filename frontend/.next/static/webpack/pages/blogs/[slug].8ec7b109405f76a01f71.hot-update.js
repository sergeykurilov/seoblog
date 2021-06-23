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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: post.category.href,
            className: "inline-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: classNames(post.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'),
              children: post.category.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: post.href,
          className: "block mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-xl font-semibold text-gray-900",
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-3 text-base text-gray-500",
            children: post.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 126,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-10 w-10 rounded-full",
                src: post.author.imageUrl,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm font-medium text-gray-900",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: post.author.href,
                children: post.author.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex space-x-1 text-sm text-gray-500",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                dateTime: post.datetime,
                children: post.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: "\xB7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [post.readingTime, " read"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this)]
      }, post.title, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
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
              lineNumber: 145,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
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
                lineNumber: 159,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-text",
            children: react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(blog.excerpt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body",
        children: ["Posted ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/profile/".concat(blog.postedBy.username),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: blog.postedBy.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvU21hbGxDYXJkLmpzIl0sIm5hbWVzIjpbIlNtYWxsQ2FyZHMiLCJibG9nIiwicG9zdHMiLCJ0aXRsZSIsImhyZWYiLCJjYXRlZ29yeSIsIm5hbWUiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImRhdGV0aW1lIiwiYXV0aG9yIiwiaW1hZ2VVcmwiLCJyZWFkaW5nVGltZSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ1cmwiLCJBUEkiLCJzbHVnIiwidXNlU3RhdGUiLCJzcmNCbG9iIiwic3JjRGF0YVVyaSIsInNldFNyYyIsInVzZUVmZmVjdCIsImlzVW5tb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiYXJyYXlCdWZmZXIiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJwb3N0IiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsIm1vbWVudCIsInVwZGF0ZWRBdCIsImZyb21Ob3ciLCJwb3N0ZWRCeSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBR3ZDLE1BQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFNBQUssRUFBRSw0QkFEWDtBQUVJQyxRQUFJLEVBQUUsR0FGVjtBQUdJQyxZQUFRLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLFNBQVA7QUFBa0JGLFVBQUksRUFBRSxHQUF4QjtBQUE2QkcsV0FBSyxFQUFFO0FBQXBDLEtBSGQ7QUFJSUMsZUFBVyxFQUNQLGtIQUxSO0FBTUlDLFFBQUksRUFBRSxjQU5WO0FBT0lDLFlBQVEsRUFBRSxZQVBkO0FB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MTA5NDA1Zjc2YTAxZjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU21hbGxDYXJkcyh7YmxvZ30pIHtcclxuXHJcblxyXG4gICAgY29uc3QgcG9zdHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jvb3N0IHlvdXIgY29udmVyc2lvbiByYXRlJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdBcnRpY2xlJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tODAwJ30sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgICAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgICAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTE2JyxcclxuICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGF1bCBZb3JrJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZTogJzYgbWluJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb3cgdG8gdXNlIHNlYXJjaCBlbmdpbmUgb3B0aW1pemF0aW9uIHRvIGRyaXZlIHNhbGVzJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdWaWRlbycsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1waW5rLTEwMCB0ZXh0LXBpbmstODAwJ30sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgICAgICBkYXRlOiAnTWFyIDEwLCAyMDIwJyxcclxuICAgICAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTEwJyxcclxuICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVzc2llIFJ5YW4nLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwNTI1ODExLWU1ODY5ZGQwMzAzMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWRpbmdUaW1lOiAnNCBtaW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ltcHJvdmUgeW91ciBjdXN0b21lciBleHBlcmllbmNlJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge25hbWU6ICdDYXNlIFN0dWR5JywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCd9LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdXJlIGl1c3RvIGZ1Z2lhdCBjb21tb2RpIHNlcXVpLicsXHJcbiAgICAgICAgICAgIGRhdGU6ICdGZWIgMTIsIDIwMjAnLFxyXG4gICAgICAgICAgICBkYXRldGltZTogJzIwMjAtMDItMTInLFxyXG4gICAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFYXNlciBDb2xsaW5zJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NzQxMjcyMDUwNy1lN2FiMzc2MDNjNmY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gXHJcbiAgICBjb25zdCBbe1xyXG4gICAgICAgIHNyY0Jsb2IsXHJcbiAgICAgICAgc3JjRGF0YVVyaVxyXG4gICAgfSwgc2V0U3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzcmNCbG9iOiBudWxsLFxyXG4gICAgICAgIHNyY0RhdGFVcmk6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVW5tb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCwge30pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcclxuICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiBibG9iLmFycmF5QnVmZmVyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTcmMoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzcmNCbG9iXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuY2F0ZWdvcnkuaHJlZn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5jYXRlZ29yeS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuaHJlZn0gY2xhc3NOYW1lPVwiYmxvY2sgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5hdXRob3IuaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntwb3N0LmF1dGhvci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e3Bvc3QuYXV0aG9yLmltYWdlVXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yLmhyZWZ9Pntwb3N0LmF1dGhvci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e3Bvc3QuZGF0ZXRpbWV9Pntwb3N0LmRhdGV9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZtaWRkb3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnJlYWRpbmdUaW1lfSByZWFkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJ2F1dG8nLCB3aWR0aDogJzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY0Jsb2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YmxvZy50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gYnl7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9