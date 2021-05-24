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
  console.log(category);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            className: "col-md-12 pt-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "display-4 font-weight-bold",
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImdldE9uZUNhdGVnb3J5Iiwic2x1ZyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNELHNCQUFPO0FBQUEsMkJBQ0YscUVBQUMseURBQUQ7QUFBQSw2QkFDSTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBLGlDQUNJO0FBQVEscUJBQVMsRUFBQyxnQkFBbEI7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREUsbUJBQVA7QUFXRixDQWJEOztLQUFNRCxROztBQWdCTkEsUUFBUSxDQUFDSSxlQUFULEdBQTJCLGlCQUFhO0FBQUEsTUFBWEMsS0FBVyxTQUFYQSxLQUFXO0FBQ3BDLFNBQU9DLHdFQUFjLENBQUNELEtBQUssQ0FBQ0UsSUFBUCxDQUFkLENBQTJCQyxJQUEzQixDQUFnQyxVQUFDQyxJQUFELEVBQVU7QUFDN0MsUUFBR0EsSUFBSSxDQUFDQyxLQUFSLEVBQWM7QUFDVlIsYUFBTyxDQUFDQyxHQUFSLENBQVlNLElBQUksQ0FBQ0MsS0FBakI7QUFDSCxLQUZELE1BRUs7QUFDRCxhQUFPO0FBQUNULGdCQUFRLEVBQUVRO0FBQVgsT0FBUDtBQUNIO0FBQ0osR0FOTSxDQUFQO0FBT0gsQ0FSRDs7QUFVZVQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uNzFlMjJhODBiYTZiM2NkY2Q5ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXMsIGdldE9uZUNhdGVnb3J5fSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5JztcclxuaW1wb3J0IHtBUEksIERPTUFJTiwgQVBQX05BTUV9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHtjYXRlZ29yeX0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxyXG4gICByZXR1cm4gPD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGRcIj5DYXRlZ29yeTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbn1cclxuXHJcblxyXG5DYXRlZ29yeS5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xyXG4gICAgcmV0dXJuIGdldE9uZUNhdGVnb3J5KHF1ZXJ5LnNsdWcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZihkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHtjYXRlZ29yeTogZGF0YX1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxyXG4iXSwic291cmNlUm9vdCI6IiJ9