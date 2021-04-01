webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./components/crud/Category.js":
/*!*************************************!*\
  !*** ./components/crud/Category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\seoblog\\frontend\\components\\crud\\Category.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Category = function Category() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "",
    "error": false,
    "categories": [],
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
      categories = value.categories,
      reload = value.reload;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("token");

  var AllCategories = function AllCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_3__["getAllCategories"])().then(function (data) {
      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error,
          success: false
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          categories: data,
          success: true
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllCategories();
  }, [reload]);

  var deleteConfirm = function deleteConfirm() {
    var answer = window.confirm("Are you sure that you want to delete this category?");

    if (answer) {
      deleteCategory(slug);
    }
  };

  function CategoryBlock() {
    var _this2 = this;

    return categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onDoubleClick: function onDoubleClick() {
          return deleteConfirm();
        },
        title: "Double click to delete",
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        children: c.name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 20
      }, _this2);
    });
  }

  var handleChange = function handleChange(e) {
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      name: e.target.value,
      success: false,
      removed: "",
      error: false
    }));
  };

  var onSubmit = function onSubmit(e) {
    console.log("create category = ", name);
    e.preventDefault();
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_3__["create"])({
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

  var CategoryForm = function CategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "text-muted",
        children: "Create Category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryBlock, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Category, "DXT+OaO3mKLGplp9vqKGC3Eqkmg=");

_c = Category;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJjYXRlZ29yaWVzIiwicmVsb2FkIiwidG9rZW4iLCJnZXRDb29raWUiLCJBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJkZWxldGVDYXRlZ29yeSIsInNsdWciLCJDYXRlZ29yeUJsb2NrIiwibWFwIiwiYyIsImkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJyZXMiLCJDYXRlZ29yeUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixrQkFBYyxFQUhpQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsY0FBVTtBQU5xQixHQUFELENBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxNQVVaQyxJQVZZLEdBVXlDRixLQVZ6QyxDQVVaRSxJQVZZO0FBQUEsTUFVTkMsT0FWTSxHQVV5Q0gsS0FWekMsQ0FVTkcsT0FWTTtBQUFBLE1BVUdDLEtBVkgsR0FVeUNKLEtBVnpDLENBVUdJLEtBVkg7QUFBQSxNQVVVQyxPQVZWLEdBVXlDTCxLQVZ6QyxDQVVVSyxPQVZWO0FB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QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFSCxZQUE3QjtBQUEyQyxpQkFBUyxFQUFDLGNBQXJEO0FBQW9FLGFBQUssRUFBRXZCO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUssaUJBQVMsRUFBRSxNQUFoQjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGlCO0FBQUEsR0FBckI7O0FBV0Esc0JBQU87QUFBQSw0QkFDSCxxRUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxlQUVILHFFQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHO0FBQUEsa0JBQVA7QUFJSCxDQWhGRDs7R0FBTUosUTs7S0FBQUEsUTtBQWtGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuMTNkYjA1NTM2MjZjZTgzOWMxZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZSwgZ2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZSwgc2lnbnVwfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJjYXRlZ29yaWVzXCI6IFtdLFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICBcInJlbW92ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZWxvYWRcIjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIHN1Y2Nlc3MsIGVycm9yLCByZW1vdmVkLCBjYXRlZ29yaWVzLCByZWxvYWR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IEFsbENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGNhdGVnb3JpZXM6IGRhdGEsIHN1Y2Nlc3M6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFsbENhdGVnb3JpZXMoKVxyXG4gICAgfSxbcmVsb2FkXSlcclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlQ29uZmlybSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT9cIilcclxuICAgICAgICBpZihhbnN3ZXIpe1xyXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeShzbHVnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDYXRlZ29yeUJsb2NrKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Eb3VibGVDbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybSgpfSB0aXRsZT17XCJEb3VibGUgY2xpY2sgdG8gZGVsZXRlXCJ9IGtleT17aX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57Yy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogXCJcIiwgZXJyb3I6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgY2F0ZWdvcnkgPSBcIiwgbmFtZSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjcmVhdGUoe25hbWV9LCB0b2tlbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiAnJywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ2F0ZWdvcnlGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Q3JlYXRlIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHQtMlwifT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPENhdGVnb3J5Rm9ybS8+XHJcbiAgICAgICAgPENhdGVnb3J5QmxvY2svPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==