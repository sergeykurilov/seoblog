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
      setResults({
        data: data
      }); // setValues({ ...values, searched: true, message: `${data.length} blogs found` });
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
    var _results$data;

    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    (_results$data = results.data) === null || _results$data === void 0 ? void 0 : _results$data.map(function (blog) {
      return console.log(blog.title);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jumbotron bg-white",
      children: message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pt-4 text-muted font-italic",
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
            lineNumber: 53,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-block btn-outline-primary",
            type: "submit",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '-120px',
        marginBottom: '-80px'
      },
      children: searchedBlogs(results)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInNlYXJjaGVkIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwic2VhcmNoU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlzdFNlYXJjaCIsInRoZW4iLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hlZEJsb2dzIiwibWFwIiwiYmxvZyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNlYXJjaEZvcm0iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDO0FBQ2pDQyxVQUFNLEVBQUVDLFNBRHlCO0FBRWpDQyxZQUFRLEVBQUUsS0FGdUI7QUFHakNDLFdBQU8sRUFBRTtBQUh3QixHQUFELENBRG5CO0FBQUEsTUFDVkMsTUFEVTtBQUFBLE1BQ0ZDLFNBREU7O0FBQUEsbUJBTVlOLHNEQUFRLENBQUMsRUFBRCxDQU5wQjtBQUFBLE1BTVZPLE9BTlU7QUFBQSxNQU1GQyxVQU5FOztBQUFBLE1BUVRQLE1BUlMsR0FRcUJJLE1BUnJCLENBUVRKLE1BUlM7QUFBQSxNQVFERSxRQVJDLEdBUXFCRSxNQVJyQixDQVFERixRQVJDO0FBQUEsTUFRU0MsT0FSVCxHQVFxQkMsTUFSckIsQ0FRU0QsT0FSVDs7QUFVakIsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsb0VBQVUsQ0FBQztBQUFFWCxZQUFNLEVBQU5BO0FBQUYsS0FBRCxDQUFWLENBQXVCWSxJQUF2QixDQUE0QixVQUFBQyxJQUFJLEVBQUk7QUFDaENOLGdCQUFVLENBQUM7QUFBQ00sWUFBSSxFQUFDQTtBQUFOLE9BQUQsQ0FBVixDQURnQyxDQUVoQztBQUNILEtBSEQ7QUFJSCxHQU5EOztBQVFBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFMLENBQUMsRUFBSTtBQUN0QjtBQUNBSixhQUFTLGlDQUFNRCxNQUFOO0FBQWNKLFlBQU0sRUFBRVMsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQS9CO0FBQXNDZCxjQUFRLEVBQUU7QUFBaEQsT0FBVDtBQUNBSyxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0gsR0FKRDs7QUFNQSxNQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQWtCO0FBQUE7O0FBQUEsUUFBakJYLE9BQWlCLHVFQUFQLEVBQU87QUFDcEMscUJBQUFBLE9BQU8sQ0FBQ08sSUFBUixnRUFBY0ssR0FBZCxDQUFrQixVQUFBQyxJQUFJO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakIsQ0FBSjtBQUFBLEtBQXRCO0FBQ0Esd0JBQ0k7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFDS25CLE9BQU8saUJBQUk7QUFBRyxpQkFBUyxFQUFDLDZCQUFiO0FBQUEsa0JBQTRDQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVILEdBakJEOztBQW1CQSxNQUFNb0IsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSx3QkFDZjtBQUFNLGNBQVEsRUFBRWYsWUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0k7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVMsRUFBQyxjQUEvQjtBQUE4Qyx1QkFBVyxFQUFDLGNBQTFEO0FBQXlFLG9CQUFRLEVBQUVNO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsbUNBQWxCO0FBQXNELGdCQUFJLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZTtBQUFBLEdBQW5COztBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFBNEJTLFVBQVU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxvQkFBWSxFQUFFO0FBQXJDLE9BQVo7QUFBQSxnQkFBNkRSLGFBQWEsQ0FBQ1gsT0FBRDtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWpFRDs7R0FBTVIsTTs7S0FBQUEsTTtBQW1FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9ncy5hNjg0MTQ1NWQ3NjVjMDFjOWYyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQge2xpc3RTZWFyY2h9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Jsb2dcIjtcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2g6IHVuZGVmaW5lZCxcclxuICAgICAgICBzZWFyY2hlZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Jlc3VsdHMsc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaCwgc2VhcmNoZWQsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBzZWFyY2hTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGlzdFNlYXJjaCh7IHNlYXJjaCB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRzKHtkYXRhOmRhdGF9KVxyXG4gICAgICAgICAgICAvLyBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHNlYXJjaGVkOiB0cnVlLCBtZXNzYWdlOiBgJHtkYXRhLmxlbmd0aH0gYmxvZ3MgZm91bmRgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLCBzZWFyY2hlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgc2V0UmVzdWx0cyhbXSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoZWRCbG9ncyA9IChyZXN1bHRzID0gW10pID0+IHtcclxuICAgICAgICByZXN1bHRzLmRhdGE/Lm1hcChibG9nID0+IGNvbnNvbGUubG9nKGJsb2cudGl0bGUpKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJwdC00IHRleHQtbXV0ZWQgZm9udC1pdGFsaWNcIj57bWVzc2FnZX08L3A+fVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKntyZXN1bHRzLm1hcCgoYmxvZywgaSkgPT4geyovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIHJldHVybiAoKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxkaXYga2V5PXtpfT4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e2Jsb2cudGl0bGV9PC9hPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICApOyovfVxyXG4gICAgICAgICAgICAgICAgey8qfSl9Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaFN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBibG9nc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItNVwiPntzZWFyY2hGb3JtKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTEyMHB4JywgbWFyZ2luQm90dG9tOiAnLTgwcHgnIH19PntzZWFyY2hlZEJsb2dzKHJlc3VsdHMpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==