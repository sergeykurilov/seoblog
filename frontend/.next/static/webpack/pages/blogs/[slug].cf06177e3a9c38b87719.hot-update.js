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

function SmallCards(_ref) {
  _s();

  var blog = _ref.blog,
      key = _ref.key;
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
      className: "flex flex-col rounded-lg shadow-lg overflow-hidden",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "h-48 w-full object-cover",
          src: srcBlob,
          alt: blog.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex-1 bg-white p-6 flex flex-col justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-xl font-semibold text-gray-900",
                children: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mt-3 text-base text-gray-500",
                children: react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-6 flex items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm font-medium text-gray-900",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/profile/".concat(blog.postedBy.username),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "hover:underline",
                  children: blog.postedBy.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex space-x-1 text-sm text-gray-500",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                dateTime: moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(),
                children: moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this)]
    }, blog.title, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvU21hbGxDYXJkLmpzIl0sIm5hbWVzIjpbInBvc3RzIiwidGl0bGUiLCJocmVmIiwiY2F0ZWdvcnkiLCJuYW1lIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJkYXRldGltZSIsImF1dGhvciIsImltYWdlVXJsIiwicmVhZGluZ1RpbWUiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiU21hbGxDYXJkcyIsImJsb2ciLCJrZXkiLCJ1cmwiLCJBUEkiLCJzbHVnIiwidXNlU3RhdGUiLCJzcmNCbG9iIiwic3JjRGF0YVVyaSIsInNldFNyYyIsInVzZUVmZmVjdCIsImlzVW5tb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiYXJyYXlCdWZmZXIiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsInBvc3RlZEJ5IiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxPQUFLLEVBQUUsNEJBRFg7QUFFSUMsTUFBSSxFQUFFLEdBRlY7QUFHSUMsVUFBUSxFQUFFO0FBQUNDLFFBQUksRUFBRSxTQUFQO0FBQWtCRixRQUFJLEVBQUUsR0FBeEI7QUFBNkJHLFNBQUssRUFBRTtBQUFwQyxHQUhkO0FBSUlDLGFBQVcsRUFDUCxrSEFMUjtBQU1JQyxNQUFJLEVBQUUsY0FOVjtBQU9JQyxVQUFRLEVBQUUsWUFQZDtBQVFJQyxRQUFNLEVBQUU7QUFDSkwsUUFBSSxFQUFFLFdBREY7QUFFSkYsUUFBSSxFQUFFLEdBRkY7QUFHSlEsWUFBUSxFQUNKO0FBSkEs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NkNBQU0sQ0FBQ3hCLElBQUksQ0FBQ3lCLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFBaEI7QUFBQSwwQkFBbURGLDZDQUFNLENBQUN4QixJQUFJLENBQUN5QixTQUFOLENBQU4sQ0FBdUJDLE9BQXZCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQSxPQUFVMUIsSUFBSSxDQUFDakIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUEyRUg7O0dBbkh1QmdCLFU7O0tBQUFBLFU7QUFtSHZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS5jZjA2MTc3ZTNhOWMzOGI4NzcxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Jvb3N0IHlvdXIgY29udmVyc2lvbiByYXRlJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHtuYW1lOiAnQXJ0aWNsZScsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1pbmRpZ28tMTAwIHRleHQtaW5kaWdvLTgwMCd9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnTnVsbGFtIHJpc3VzIGJsYW5kaXQgYWMgYWxpcXVhbSBqdXN0byBpcHN1bS4gUXVhbSBtYXVyaXMgdm9sdXRwYXQgbWFzc2EgZGljdHVtc3QgYW1ldC4gU2FwaWVuIHRvcnRvciBsYWN1cyBhcmN1LicsXHJcbiAgICAgICAgZGF0ZTogJ01hciAxNiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTE2JyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ1BhdWwgWW9yaycsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRpbmdUaW1lOiAnNiBtaW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0hvdyB0byB1c2Ugc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gdG8gZHJpdmUgc2FsZXMnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeToge25hbWU6ICdWaWRlbycsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1waW5rLTEwMCB0ZXh0LXBpbmstODAwJ30sXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW4gdG9ydG9yIGxhY3VzIGFyY3UuJyxcclxuICAgICAgICBkYXRlOiAnTWFyIDEwLCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDMtMTAnLFxyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnRGVzc2llIFJ5YW4nLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwNTI1ODExLWU1ODY5ZGQwMzAzMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzQgbWluJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbXByb3ZlIHlvdXIgY3VzdG9tZXIgZXhwZXJpZW5jZScsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7bmFtZTogJ0Nhc2UgU3R1ZHknLCBocmVmOiAnIycsIGNvbG9yOiAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwJ30sXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWIgaXVyZSBpdXN0byBmdWdpYXQgY29tbW9kaSBzZXF1aS4nLFxyXG4gICAgICAgIGRhdGU6ICdGZWIgMTIsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wMi0xMicsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFYXNlciBDb2xsaW5zJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NzQxMjcyMDUwNy1lN2FiMzc2MDNjNmY/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGluZ1RpbWU6ICcxMSBtaW4nLFxyXG4gICAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbWFsbENhcmRzKHtibG9nLCBrZXl9KSB7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWBcclxuICAgIGNvbnN0IFt7XHJcbiAgICAgICAgc3JjQmxvYixcclxuICAgICAgICBzcmNEYXRhVXJpXHJcbiAgICB9LCBzZXRTcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNyY0Jsb2I6IG51bGwsXHJcbiAgICAgICAgc3JjRGF0YVVyaTogbnVsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaXNVbm1vdW50ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsLCB7fSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxyXG4gICAgICAgICAgICAudGhlbihibG9iID0+IGJsb2IuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1VubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyY0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFNyYyhzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY0Jsb2JcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBrZXk9e2Jsb2cudGl0bGV9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjQmxvYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXdoaXRlIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8YSBocmVmPXtwb3N0LmNhdGVnb3J5LmhyZWZ9IGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIHtwb3N0LmNhdGVnb3J5Lm5hbWV9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvcD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPntibG9nLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+e3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8YSBocmVmPXtwb3N0LmF1dGhvci5ocmVmfT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17cG9zdC5hdXRob3IuaW1hZ2VVcmx9IGFsdD1cIlwiLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfT57bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lyo8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJtdC0xMiBncmlkIGdhcC0xNiBwdC0xMiBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC01IGxnOmdhcC15LTEyXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8aW1nKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJ2F1dG8nLCB3aWR0aDogJzEwMCUnfX0qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgc3JjPXtzcmNCbG9ifSovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICBhbHQ9e2Jsb2cudGl0bGV9Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayBtdC00XCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPntibG9nLnRpdGxlfTwvcD4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfTwvcD4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9hPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfWB9PiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPC9wPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8dGltZSovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9Pnttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX08L3RpbWU+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9