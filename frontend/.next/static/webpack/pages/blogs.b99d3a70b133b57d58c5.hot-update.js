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
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
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
      console.log(data);
      setResults(); // setValues({ ...values, searched: true, message: `${data.length} blogs found` });
    });
  };

  var handleChange = function handleChange(e) {
    // console.log(e.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      search: e.target.value,
      searched: false
    }));
    setResults([]);
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '-120px',
        marginBottom: '-80px'
      },
      children: searchedBlogs(results)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(Search, "pz7QNtZqjJ8p50lD0yLW8iO0qXA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInNlYXJjaGVkIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwic2VhcmNoU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlzdFNlYXJjaCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoZWRCbG9ncyIsIm1hcCIsImJsb2ciLCJpIiwic2x1ZyIsInRpdGxlIiwic2VhcmNoRm9ybSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUM7QUFDakNDLFVBQU0sRUFBRUMsU0FEeUI7QUFFakNDLFlBQVEsRUFBRSxLQUZ1QjtBQUdqQ0MsV0FBTyxFQUFFO0FBSHdCLEdBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFNWU4sc0RBQVEsQ0FBQyxFQUFELENBTnBCO0FBQUEsTUFNVk8sT0FOVTtBQUFBLE1BTUZDLFVBTkU7O0FBQUEsTUFRVFAsTUFSUyxHQVFxQkksTUFSckIsQ0FRVEosTUFSUztBQUFBLE1BUURFLFFBUkMsR0FRcUJFLE1BUnJCLENBUURGLFFBUkM7QUFBQSxNQVFTQyxPQVJULEdBUXFCQyxNQVJyQixDQVFTRCxPQVJUOztBQVVqQixNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxvRUFBVSxDQUFDO0FBQUVYLFlBQU0sRUFBTkE7QUFBRixLQUFELENBQVYsQ0FBdUJZLElBQXZCLENBQTRCLFVBQUFDLElBQUksRUFBSTtBQUNoQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQU4sZ0JBQVUsR0FGc0IsQ0FHaEM7QUFDSCxLQUpEO0FBS0gsR0FQRDs7QUFTQSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBUCxDQUFDLEVBQUk7QUFDdEI7QUFDQUosYUFBUyxpQ0FBTUQsTUFBTjtBQUFjSixZQUFNLEVBQUVTLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUEvQjtBQUFzQ2hCLGNBQVEsRUFBRTtBQUFoRCxPQUFUO0FBQ0FLLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDSCxHQUpEOztBQU1BLE1BQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0I7QUFBQSxRQUFqQmIsT0FBaUIsdUVBQVAsRUFBTztBQUNwQ1EsV0FBTyxDQUFDQyxHQUFSO0FBQ0Esd0JBQ0k7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxpQkFDS1osT0FBTyxpQkFBSTtBQUFHLGlCQUFTLEVBQUMsNkJBQWI7QUFBQSxrQkFBNENBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaEIsRUFHS0csT0FBTyxDQUFDYyxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdEIsNEJBQ0k7QUFBQSxpQ0FDSSxxRUFBQywyQ0FBRDtBQUFNLGdCQUFJLG1CQUFZRCxJQUFJLENBQUNFLElBQWpCLENBQVY7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsY0FBYjtBQUFBLHdCQUE2QkYsSUFBSSxDQUFDRztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVVGLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU9ILE9BUkEsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVILEdBakJEOztBQW1CQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHdCQUNmO0FBQU0sY0FBUSxFQUFFakIsWUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0k7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVMsRUFBQyxjQUEvQjtBQUE4Qyx1QkFBVyxFQUFDLGNBQTFEO0FBQXlFLG9CQUFRLEVBQUVRO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsbUNBQWxCO0FBQXNELGdCQUFJLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZTtBQUFBLEdBQW5COztBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFBNEJTLFVBQVU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxvQkFBWSxFQUFFO0FBQXJDLE9BQVo7QUFBQSxnQkFBNkRSLGFBQWEsQ0FBQ2IsT0FBRDtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWxFRDs7R0FBTVIsTTs7S0FBQUEsTTtBQW9FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MuYjk5ZDNhNzBiMTMzYjU3ZDU4YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtsaXN0U2VhcmNofSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoOiB1bmRlZmluZWQsXHJcbiAgICAgICAgc2VhcmNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtyZXN1bHRzLHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgeyBzZWFyY2gsIHNlYXJjaGVkLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxpc3RTZWFyY2goeyBzZWFyY2ggfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgc2V0UmVzdWx0cygpXHJcbiAgICAgICAgICAgIC8vIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgc2VhcmNoZWQ6IHRydWUsIG1lc3NhZ2U6IGAke2RhdGEubGVuZ3RofSBibG9ncyBmb3VuZGAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHNlYXJjaGVkOiBmYWxzZSB9KTtcclxuICAgICAgICBzZXRSZXN1bHRzKFtdKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hlZEJsb2dzID0gKHJlc3VsdHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwicHQtNCB0ZXh0LW11dGVkIGZvbnQtaXRhbGljXCI+e21lc3NhZ2V9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPntibG9nLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2hTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYmxvZ3NcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTVcIj57c2VhcmNoRm9ybSgpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJy0xMjBweCcsIG1hcmdpbkJvdHRvbTogJy04MHB4JyB9fT57c2VhcmNoZWRCbG9ncyhyZXN1bHRzKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=