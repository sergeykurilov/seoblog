webpackHotUpdate_N_E("pages/blogs",{

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



var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Search.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Search = function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    search: undefined,
    results: [],
    searched: false,
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var search = values.search,
      results = values.results,
      searched = values.searched,
      message = values.message;

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listSearch"])({
      search: search
    }).then(function (data) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        results: data,
        searched: true,
        message: "".concat(data.length, " blogs found")
      }));
    });
  };

  var handleChange = function handleChange(e) {
    // console.log(e.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      search: e.target.value,
      searched: false,
      results: []
    }));
  };

  var searchedBlogs = function searchedBlogs() {
    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jumbotron bg-white",
      children: [message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pt-4 text-muted font-italic",
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
              lineNumber: 37,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
            lineNumber: 50,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-block btn-outline-primary",
            type: "submit",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 64,
      columnNumber: 13
    }, _this), searched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '-120px',
        marginBottom: '-80px'
      },
      children: searchedBlogs(results)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 26
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, _this);
};

_s(Search, "QLB45y/WAsSwOKBo6g/8pXjq+OI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInJlc3VsdHMiLCJzZWFyY2hlZCIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZWFyY2hTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaXN0U2VhcmNoIiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaGVkQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNsdWciLCJ0aXRsZSIsInNlYXJjaEZvcm0iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUM7QUFDakNDLFVBQU0sRUFBRUMsU0FEeUI7QUFFakNDLFdBQU8sRUFBRSxFQUZ3QjtBQUdqQ0MsWUFBUSxFQUFFLEtBSHVCO0FBSWpDQyxXQUFPLEVBQUU7QUFKd0IsR0FBRCxDQURuQjtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxTQURFOztBQUFBLE1BUVROLE1BUlMsR0FROEJLLE1BUjlCLENBUVRMLE1BUlM7QUFBQSxNQVFERSxPQVJDLEdBUThCRyxNQVI5QixDQVFESCxPQVJDO0FBQUEsTUFRUUMsUUFSUixHQVE4QkUsTUFSOUIsQ0FRUUYsUUFSUjtBQUFBLE1BUWtCQyxPQVJsQixHQVE4QkMsTUFSOUIsQ0FRa0JELE9BUmxCOztBQVVqQixNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxvRUFBVSxDQUFDO0FBQUVWLFlBQU0sRUFBTkE7QUFBRixLQUFELENBQVYsQ0FBdUJXLElBQXZCLENBQTRCLFVBQUFDLElBQUksRUFBSTtBQUNoQ04sZUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxlQUFPLEVBQUVVLElBQXZCO0FBQTZCVCxnQkFBUSxFQUFFLElBQXZDO0FBQTZDQyxlQUFPLFlBQUtRLElBQUksQ0FBQ0MsTUFBVjtBQUFwRCxTQUFUO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQU4sQ0FBQyxFQUFJO0FBQ3RCO0FBQ0FGLGFBQVMsaUNBQU1ELE1BQU47QUFBY0wsWUFBTSxFQUFFUSxDQUFDLENBQUNPLE1BQUYsQ0FBU0MsS0FBL0I7QUFBc0NiLGNBQVEsRUFBRSxLQUFoRDtBQUF1REQsYUFBTyxFQUFFO0FBQWhFLE9BQVQ7QUFDSCxHQUhEOztBQUtBLE1BQU1lLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0I7QUFBQSxRQUFqQmYsT0FBaUIsdUVBQVAsRUFBTztBQUNwQyx3QkFDSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLGlCQUNLRSxPQUFPLGlCQUFJO0FBQUcsaUJBQVMsRUFBQyw2QkFBYjtBQUFBLGtCQUE0Q0E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURoQixFQUdLRixPQUFPLENBQUNnQixHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdEIsNEJBQ0k7QUFBQSxpQ0FDSSxxRUFBQywyQ0FBRDtBQUFNLGdCQUFJLG1CQUFZRCxJQUFJLENBQUNFLElBQWpCLENBQVY7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsY0FBYjtBQUFBLHdCQUE2QkYsSUFBSSxDQUFDRztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVVGLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU9ILE9BUkEsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVILEdBaEJEOztBQWtCQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHdCQUNmO0FBQU0sY0FBUSxFQUFFaEIsWUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0k7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVMsRUFBQyxjQUEvQjtBQUE4Qyx1QkFBVyxFQUFDLGNBQTFEO0FBQXlFLG9CQUFRLEVBQUVPO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsbUNBQWxCO0FBQXNELGdCQUFJLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZTtBQUFBLEdBQW5COztBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFBNEJTLFVBQVU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtwQixRQUFRLGlCQUFJO0FBQUssV0FBSyxFQUFFO0FBQUVxQixpQkFBUyxFQUFFLFFBQWI7QUFBdUJDLG9CQUFZLEVBQUU7QUFBckMsT0FBWjtBQUFBLGdCQUE2RFIsYUFBYSxDQUFDZixPQUFEO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTlERDs7R0FBTUosTTs7S0FBQUEsTTtBQWdFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MuMDU4NzFhNGNkZjEyNTdhM2U0N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtsaXN0U2VhcmNofSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcblxyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2g6IHVuZGVmaW5lZCxcclxuICAgICAgICByZXN1bHRzOiBbXSxcclxuICAgICAgICBzZWFyY2hlZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgc2VhcmNoLCByZXN1bHRzLCBzZWFyY2hlZCwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsaXN0U2VhcmNoKHsgc2VhcmNoIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgcmVzdWx0czogZGF0YSwgc2VhcmNoZWQ6IHRydWUsIG1lc3NhZ2U6IGAke2RhdGEubGVuZ3RofSBibG9ncyBmb3VuZGAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHNlYXJjaGVkOiBmYWxzZSwgcmVzdWx0czogW10gfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaGVkQmxvZ3MgPSAocmVzdWx0cyA9IFtdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInB0LTQgdGV4dC1tdXRlZCBmb250LWl0YWxpY1wiPnttZXNzYWdlfTwvcD59XHJcblxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj57YmxvZy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNoU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJsb2dzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi01XCI+e3NlYXJjaEZvcm0oKX08L2Rpdj5cclxuICAgICAgICAgICAge3NlYXJjaGVkICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTEyMHB4JywgbWFyZ2luQm90dG9tOiAnLTgwcHgnIH19PntzZWFyY2hlZEJsb2dzKHJlc3VsdHMpfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=