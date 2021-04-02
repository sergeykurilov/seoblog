webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./components/crud/Tag.js":
/*!********************************!*\
  !*** ./components/crud/Tag.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/tags */ "./actions/tags.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\seoblog\\frontend\\components\\crud\\Tag.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Tag = function Tag() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "",
    "error": false,
    "tag": [],
    "success": false,
    "removed": false,
    "reload": false
  }),
      value = _useState[0],
      setValue = _useState[1];

  var name = value.name,
      success = value.success,
      error = value.error,
      removed = value.removed,
      tags = value.tags,
      reload = value.reload;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("token");

  var handleChange = function handleChange(e) {
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      name: e.target.value,
      success: false,
      removed: false,
      error: false
    }));
  };

  var onSubmit = function onSubmit(e) {
    console.log("create tag = ", name);
    e.preventDefault();
    Object(_actions_tags__WEBPACK_IMPORTED_MODULE_3__["create"])({
      name: name
    }, token).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error,
          success: false
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          name: '',
          error: false,
          success: true
        }));
      }
    });
  };

  var TagForm = function TagForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "text-muted",
        children: "Create Tag"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }, _this), TagForm()]
  }, void 0, true);
};

_s(Tag, "a03DfOYcYaB4fazg0BoxOwtBOmA=");

_c = Tag;
/* harmony default export */ __webpack_exports__["default"] = (Tag);

var _c;

$RefreshReg$(_c, "Tag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIiwicmVtb3ZlZCIsInRhZ3MiLCJyZWxvYWQiLCJ0b2tlbiIsImdldENvb2tpZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsInRoZW4iLCJyZXMiLCJUYWdGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLEVBRHVCO0FBRS9CLGFBQVMsS0FGc0I7QUFHL0IsV0FBTyxFQUh3QjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsY0FBVTtBQU5xQixHQUFELENBRHBCO0FBQUEsTUFDUEMsS0FETztBQUFBLE1BQ0FDLFFBREE7O0FBQUEsTUFVUEMsSUFWTyxHQVV5Q0YsS0FWekMsQ0FVUEUsSUFWTztBQUFBLE1BVURDLE9BVkMsR0FVeUNILEtBVnpDLENBVURHLE9BVkM7QUFBQSxNQVVRQyxLQVZSLEdBVXlDSixLQVZ6QyxDQVVRSSxLQVZSO0FBQUEsTUFVZ0JDLE9BVmhCLEdBVXlDTCxLQVZ6QyxDQVVnQkssT0FWaEI7QUFBQSxNQVV5QkMsSUFWekIsR0FVeUNOLEtBVnpDLENBVXlCTSxJQVZ6QjtBQUFBLE1BVStCQyxNQVYvQixHQVV5Q1AsS0FWekMsQ0FVK0JPLE1BVi9CO0FBWWQsTUFBTUMsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBR0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCVixZQUFRLGlDQUFLRCxLQUFMO0FBQVlFLFVBQUksRUFBRVMsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLEtBQTNCO0FBQWtDRyxhQUFPLEVBQUUsS0FBM0M7QUFBa0RFLGFBQU8sRUFBRSxLQUEzRDtBQUFrRUQsV0FBSyxFQUFFO0FBQXpFLE9BQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLENBQUQsRUFBTztBQUNwQkcsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QmIsSUFBN0I7QUFDQVMsS0FBQyxDQUFDSyxjQUFGO0FBQ0FDLGdFQUFNLENBQUM7QUFBQ2YsVUFBSSxFQUFKQTtBQUFELEtBQUQsRUFBU00sS0FBVCxDQUFOLENBQ0tVLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxVQUFJQSxHQUFHLENBQUNmLEtBQVIsRUFBZTtBQUNYSCxnQkFBUSxpQ0FBS0QsS0FBTDtBQUFZSSxlQUFLLEVBQUVlLEdBQUcsQ0FBQ2YsS0FBdkI7QUFBOEJELGlCQUFPLEVBQUU7QUFBdkMsV0FBUjtBQUNILE9BRkQsTUFFTztBQUNIRixnQkFBUSxpQ0FBS0QsS0FBTDtBQUFZRSxjQUFJLEVBQUUsRUFBbEI7QUFBc0JFLGVBQUssRUFBRSxLQUE3QjtBQUFvQ0QsaUJBQU8sRUFBRTtBQUE3QyxXQUFSO0FBQ0g7QUFDSixLQVBMO0FBU0gsR0FaRDs7QUFjQSxNQUFNaUIsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSx3QkFDWjtBQUFNLGNBQVEsRUFBRVAsUUFBaEI7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUgsWUFBN0I7QUFBMkMsaUJBQVMsRUFBQyxjQUFyRDtBQUFvRSxhQUFLLEVBQUVSO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUssaUJBQVMsRUFBRSxNQUFoQjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFk7QUFBQSxHQUFoQjs7QUFXQSxzQkFBTztBQUFBLGVBQ0ZFLEtBQUssaUJBQUk7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFBcUNBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUCxFQUVGZ0IsT0FBTyxFQUZMO0FBQUEsa0JBQVA7QUFJSCxDQWhERDs7R0FBTXRCLEc7O0tBQUFBLEc7QUFrRFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjQzYTQxZmI4Nzc5MjEwNTgyMjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZSwgc2lnbnVwfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBUYWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwidGFnXCI6IFtdLFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICBcInJlbW92ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZWxvYWRcIjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIHN1Y2Nlc3MsIGVycm9yICwgcmVtb3ZlZCwgdGFncywgcmVsb2FkfSA9IHZhbHVlXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogZS50YXJnZXQudmFsdWUsIHN1Y2Nlc3M6IGZhbHNlLCByZW1vdmVkOiBmYWxzZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgdGFnID0gXCIsIG5hbWUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY3JlYXRlKHtuYW1lfSwgdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogJycsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFRhZ0Zvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5DcmVhdGUgVGFnPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHQtMlwifT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICB7VGFnRm9ybSgpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZyJdLCJzb3VyY2VSb290IjoiIn0=