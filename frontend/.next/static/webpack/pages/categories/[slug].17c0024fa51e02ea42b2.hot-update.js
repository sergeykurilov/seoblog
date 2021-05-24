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
          children: ["\">", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            className: "col-md-12 pt-3",
            children: ["\">", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "display-4 font-weight-bold",
              children: category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
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
  return Object(_actions_category__WEBPACK_IMPORTED_MODULE_5__["getAllCategories"])(query.slug).then(function (data) {
    console.log(data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInNsdWciLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDOUIsc0JBQU87QUFBQSwyQkFDRixxRUFBQyx5REFBRDtBQUFBLDZCQUNJO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEseUNBQ0k7QUFBUSxxQkFBUyxFQUFDLGdCQUFsQjtBQUFBLDJDQUNJO0FBQUksdUJBQVMsRUFBQyw0QkFBZDtBQUFBLHdCQUE0Q0E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERSxtQkFBUDtBQVdGLENBWkQ7O0tBQU1ELFE7O0FBZU5BLFFBQVEsQ0FBQ0UsZUFBVCxHQUEyQixpQkFBYTtBQUFBLE1BQVhDLEtBQVcsU0FBWEEsS0FBVztBQUNwQyxTQUFPQywwRUFBZ0IsQ0FBQ0QsS0FBSyxDQUFDRSxJQUFQLENBQWhCLENBQTZCQyxJQUE3QixDQUFrQyxVQUFDQyxJQUFELEVBQVU7QUFDL0NDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUNBLFFBQUdBLElBQUksQ0FBQ0csS0FBUixFQUFjO0FBQ1ZGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQWpCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsYUFBTztBQUFDVCxnQkFBUSxFQUFFTTtBQUFYLE9BQVA7QUFDSDtBQUNKLEdBUE0sQ0FBUDtBQVFILENBVEQ7O0FBV2VQLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3JpZXMvW3NsdWddLjE3YzAwMjRmYTUxZTAyZWE0MmIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnZXRBbGxDYXRlZ29yaWVzLCBnZXRPbmVDYXRlZ29yeX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7QVBJLCBET01BSU4sIEFQUF9OQU1FfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICh7Y2F0ZWdvcnl9KSA9PiB7XHJcbiAgIHJldHVybiA8PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwdC0zXCI+XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgZm9udC13ZWlnaHQtYm9sZFwiPntjYXRlZ29yeX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG59XHJcblxyXG5cclxuQ2F0ZWdvcnkuZ2V0SW5pdGlhbFByb3BzID0gKHtxdWVyeX0pID0+IHtcclxuICAgIHJldHVybiBnZXRBbGxDYXRlZ29yaWVzKHF1ZXJ5LnNsdWcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4ge2NhdGVnb3J5OiBkYXRhfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=