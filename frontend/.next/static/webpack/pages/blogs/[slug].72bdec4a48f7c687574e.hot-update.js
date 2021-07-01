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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: post.author.href,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: post.author.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-10 w-10 rounded-full",
                src: post.author.imageUrl,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          }, this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvU21hbGxDYXJkLmpzIl0sIm5hbWVzIjpbInBvc3RzIiwidGl0bGUiLCJocmVmIiwiY2F0ZWdvcnkiLCJuYW1lIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJkYXRldGltZSIsImF1dGhvciIsImltYWdlVXJsIiwicmVhZGluZ1RpbWUiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiU21hbGxDYXJkcyIsImJsb2ciLCJrZXkiLCJ1cmwiLCJBUEkiLCJzbHVnIiwidXNlU3RhdGUiLCJzcmNCbG9iIiwic3JjRGF0YVVyaSIsInNldFNyYyIsInVzZUVmZmVjdCIsImlzVW5tb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiYXJyYXlCdWZmZXIiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsInBvc3QiLCJwb3N0ZWRCeSIsInVzZXJuYW1lIiwibW9tZW50IiwidXBkYXRlZEF0IiwiZnJvbU5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsT0FBSyxFQUFFLDRCQURYO0FBRUlDLE1BQUksRUFBRSxHQUZWO0FBR0lDLFVBQVEsRUFBRTtBQUFDQyxRQUFJLEVBQUUsU0FBUDtBQUFrQkYsUUFBSSxFQUFFLEdBQXhCO0FBQTZCRyxTQUFLLEVBQUU7QUFBcEMsR0FIZDtBQUlJQyxhQUFXLEVBQ1Asa0hBTFI7QUFNSUMsTUFBSSxFQUFFLGNBTlY7QUFPSUMsVUFBUSxFQUFFLFlBUGQ7QUFRSUMsUUFBTSxFQUFFO0FBQ0pMLFFBQUksRUFBRSxXQURGO0FBRUpGLFFBQUksRUFBRSxHQUZGO0FBR0pRLFlBQVEsRUFD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QURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFPSTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBQyxtQ0FBYjtBQUFBLHFDQUNJLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUkscUJBQWNRLElBQUksQ0FBQ3VCLFFBQUwsQ0FBY0MsUUFBNUIsQ0FBVjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQyxpQkFBYjtBQUFBLDRCQUFnQ3hCLElBQUksQ0FBQ3VCLFFBQUwsQ0FBY0M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBTUk7QUFBSyx1QkFBUyxFQUFDLHNDQUFmO0FBQUEscUNBQ0k7QUFBTSx3QkFBUSxFQUFFQyw2Q0FBTSxDQUFDekIsSUFBSSxDQUFDMEIsU0FBTixDQUFOLENBQXVCQyxPQUF2QixFQUFoQjtBQUFBLDBCQUFtREYsNkNBQU0sQ0FBQ3pCLElBQUksQ0FBQzBCLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBLE9BQVUzQixJQUFJLENBQUNqQixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTJFSDs7R0FuSHVCZ0IsVTs7S0FBQUEsVTtBQW1IdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MvW3NsdWddLjcyYmRlYzRhNDhmN2M2ODc1NzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQm9vc3QgeW91ciBjb252ZXJzaW9uIHJhdGUnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeToge25hbWU6ICdBcnRpY2xlJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tODAwJ30sXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW4gdG9ydG9yIGxhY3VzIGFyY3UuJyxcclxuICAgICAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDMtMTYnLFxyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBZb3JrJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGluZ1RpbWU6ICc2IG1pbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIHVzZSBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiB0byBkcml2ZSBzYWxlcycsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7bmFtZTogJ1ZpZGVvJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLXBpbmstMTAwIHRleHQtcGluay04MDAnfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgIGRhdGU6ICdNYXIgMTAsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wMy0xMCcsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXNzaWUgUnlhbicsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTA1MjU4MTEtZTU4NjlkZDAzMDMyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRpbmdUaW1lOiAnNCBtaW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ltcHJvdmUgeW91ciBjdXN0b21lciBleHBlcmllbmNlJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHtuYW1lOiAnQ2FzZSBTdHVkeScsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDAnfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdXJlIGl1c3RvIGZ1Z2lhdCBjb21tb2RpIHNlcXVpLicsXHJcbiAgICAgICAgZGF0ZTogJ0ZlYiAxMiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAyLTEyJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0Vhc2VyIENvbGxpbnMnLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg3NDEyNzIwNTA3LWU3YWIzNzYwM2M2Zj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNtYWxsQ2FyZHMoe2Jsb2csIGtleX0pIHtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YFxyXG4gICAgY29uc3QgW3tcclxuICAgICAgICBzcmNCbG9iLFxyXG4gICAgICAgIHNyY0RhdGFVcmlcclxuICAgIH0sIHNldFNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3JjQmxvYjogbnVsbCxcclxuICAgICAgICBzcmNEYXRhVXJpOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1VubW91bnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwsIHt9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gYmxvYi5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjQmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U3JjKHN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjQmxvYlxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YmxvZy50aXRsZX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00OCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmNCbG9ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctd2hpdGUgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDBcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxhIGhyZWY9e3Bvc3QuY2F0ZWdvcnkuaHJlZn0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAge3Bvc3QuY2F0ZWdvcnkubmFtZX0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9wPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2Jsb2cudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtwb3N0LmF1dGhvci5pbWFnZVVybH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9Pnttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cIm10LTEyIGdyaWQgZ2FwLTE2IHB0LTEyIGxnOmdyaWQtY29scy0zIGxnOmdhcC14LTUgbGc6Z2FwLXktMTJcIj4qL31cclxuICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgIDxpbWcqL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OiAnYXV0bycsIHdpZHRoOiAnMTAwJSd9fSovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICBzcmM9e3NyY0Jsb2J9Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX0qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAvPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIG10LTRcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2Jsb2cudGl0bGV9PC9wPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPntyZW5kZXJIVE1MKGJsb2cuZXhjZXJwdCl9PC9wPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlclwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9YH0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfTwvYT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8L3A+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDx0aW1lKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lPXttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0+e21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfTwvdGltZT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=