webpackHotUpdate_N_E("pages/admin/crud/blogs",{

/***/ "./components/Blog/Search.js":
/*!***********************************!*\
  !*** ./components/Blog/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Search.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Search = function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    search: undefined,
    searched: false,
    message: '',
    results: {}
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      results = _useState2[0],
      setResults = _useState2[1];

  var search = values.search,
      searched = values.searched,
      message = values.message;

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listSearch"])({
      search: search
    }).then(function (data) {
      setResults(Object.entries(data));
    });
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      searched: true,
      message: " blogs found"
    }));
  };

  var handleChange = function handleChange(e) {
    // console.log(e.target.value);
    setResults({});
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      search: e.target.value,
      searched: false
    }));
  };

  var searchedBlogs = function searchedBlogs() {
    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    console.log();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jumbotron bg-white",
      children: [message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pt-4 text-muted font-italic",
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }, _this), results.map(function (blog, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-primary",
              children: blog.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this);
  };

  var searchForm = function searchForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: searchSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "search",
            className: "form-control",
            placeholder: "Search blogs",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-block btn-outline-primary",
            type: "submit",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pt-3 pb-5",
      children: searchForm()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this), searched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '-120px',
        marginBottom: '-80px'
      },
      children: searchedBlogs(results)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 26
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(Search, "SjLyU4mUXxa7s+mo2Eo8ZDpsxAk=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInNlYXJjaGVkIiwibWVzc2FnZSIsInJlc3VsdHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRSZXN1bHRzIiwic2VhcmNoU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlzdFNlYXJjaCIsInRoZW4iLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoZWRCbG9ncyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJibG9nIiwiaSIsInNsdWciLCJ0aXRsZSIsInNlYXJjaEZvcm0iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDO0FBQ2pDQyxVQUFNLEVBQUVDLFNBRHlCO0FBRWpDQyxZQUFRLEVBQUUsS0FGdUI7QUFHakNDLFdBQU8sRUFBRSxFQUh3QjtBQUlqQ0MsV0FBTyxFQUFFO0FBSndCLEdBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFPYVAsc0RBQVEsQ0FBQyxFQUFELENBUHJCO0FBQUEsTUFPVkssT0FQVTtBQUFBLE1BT0RHLFVBUEM7O0FBQUEsTUFTVlAsTUFUVSxHQVNtQkssTUFUbkIsQ0FTVkwsTUFUVTtBQUFBLE1BU0ZFLFFBVEUsR0FTbUJHLE1BVG5CLENBU0ZILFFBVEU7QUFBQSxNQVNRQyxPQVRSLEdBU21CRSxNQVRuQixDQVNRRixPQVRSOztBQVdqQixNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxD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QU1OLE07O0tBQUFBLE07QUFvRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZ3MuMzE0MDNkNGIyOGI0NmMyMDNhZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7bGlzdFNlYXJjaH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaDogdW5kZWZpbmVkLFxyXG4gICAgICAgIHNlYXJjaGVkOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICByZXN1bHRzOiB7fVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICBjb25zdCB7c2VhcmNoLCBzZWFyY2hlZCwgbWVzc2FnZX0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxpc3RTZWFyY2goe3NlYXJjaH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVzdWx0cyhPYmplY3QuZW50cmllcyhkYXRhKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgc2VhcmNoZWQ6IHRydWUsIG1lc3NhZ2U6IGAgYmxvZ3MgZm91bmRgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRSZXN1bHRzKHt9KVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLCBzZWFyY2hlZDogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoZWRCbG9ncyA9IChyZXN1bHRzID0gW10pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInB0LTQgdGV4dC1tdXRlZCBmb250LWl0YWxpY1wiPnttZXNzYWdlfTwvcD59XHJcblxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj57YmxvZy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNoU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJsb2dzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTVcIj57c2VhcmNoRm9ybSgpfTwvZGl2PlxyXG4gICAgICAgICAgICB7c2VhcmNoZWQgJiYgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJy0xMjBweCcsIG1hcmdpbkJvdHRvbTogJy04MHB4J319PntzZWFyY2hlZEJsb2dzKHJlc3VsdHMpfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=