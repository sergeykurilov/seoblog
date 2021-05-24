webpackHotUpdate_N_E("pages/categories/[slug]",{

/***/ "./pages/categories/[slug].js":
/*!************************************!*\
  !*** ./pages/categories/[slug].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\categories\\[slug].js",
    _this = undefined;











var Category = function Category(_ref) {
  var category = _ref.category;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            className: "col-md-12 pt-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "display-4 font-weight-bold",
              children: category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = Category;

Category.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_category__WEBPACK_IMPORTED_MODULE_5__["getOneCategory"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        category: data
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiZ2V0T25lQ2F0ZWdvcnkiLCJzbHVnIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQzlCLHNCQUFPO0FBQUEsMkJBQ0YscUVBQUMseURBQUQ7QUFBQSw2QkFDSTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBLGlDQUNJO0FBQVEscUJBQVMsRUFBQyxnQkFBbEI7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsNEJBQWQ7QUFBQSx3QkFBNENBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREUsbUJBQVA7QUFXRixDQVpEOztLQUFNRCxROztBQWVOQSxRQUFRLENBQUNFLGVBQVQsR0FBMkIsaUJBQWE7QUFBQSxNQUFYQyxLQUFXLFNBQVhBLEtBQVc7QUFDcEMsU0FBT0Msd0VBQWMsQ0FBQ0QsS0FBSyxDQUFDRSxJQUFQLENBQWQsQ0FBMkJDLElBQTNCLENBQWdDLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxRQUFHQSxJQUFJLENBQUNDLEtBQVIsRUFBYztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNILEtBRkQsTUFFSztBQUNELGFBQU87QUFBQ1AsZ0JBQVEsRUFBRU07QUFBWCxPQUFQO0FBQ0g7QUFDSixHQU5NLENBQVA7QUFPSCxDQVJEOztBQVVlUCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yaWVzL1tzbHVnXS43ZDMwMzg0MTY5NmUzOTQ2NTg2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0QWxsQ2F0ZWdvcmllcywgZ2V0T25lQ2F0ZWdvcnl9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0ZWdvcnknO1xyXG5pbXBvcnQge0FQSSwgRE9NQUlOLCBBUFBfTkFNRX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoe2NhdGVnb3J5fSkgPT4ge1xyXG4gICByZXR1cm4gPD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGRcIj57Y2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuXHJcbkNhdGVnb3J5LmdldEluaXRpYWxQcm9wcyA9ICh7cXVlcnl9KSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0T25lQ2F0ZWdvcnkocXVlcnkuc2x1ZykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4ge2NhdGVnb3J5OiBkYXRhfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=