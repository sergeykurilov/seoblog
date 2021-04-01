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

  function AllCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_3__["getAllCategories"])().then(function (data) {
      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error,
          success: false
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          success: true,
          categories: data
        }));
      }
    });
  }

  function CategoryBlock() {
    var _this2 = this;

    return AllCategories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        children: c
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
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
        lineNumber: 58,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [CategoryForm(), CategoryBlock()]
  }, void 0, true);
};

_s(Category, "T2XL80X3ybnukvWklEebMi5mpU8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJjYXRlZ29yaWVzIiwicmVsb2FkIiwidG9rZW4iLCJnZXRDb29raWUiLCJBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwiQ2F0ZWdvcnlCbG9jayIsIm1hcCIsImMiLCJpIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwicmVzIiwiQ2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQztBQUMvQixZQUFRLEVBRHVCO0FBRS9CLGFBQVMsS0FGc0I7QUFHL0Isa0JBQWMsRUFIaUI7QUFJL0IsZUFBVyxLQUpvQjtBQUsvQixlQUFXLEtBTG9CO0FBTS9CLGNBQVU7QUFOcUIsR0FBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsTUFVWkMsSUFWWSxHQVUwQ0YsS0FWMUMsQ0FVWkUsSUFWWTtBQUFBLE1BVU5DLE9BVk0sR0FVMENILEtBVjFDLENBVU5HLE9BVk07QUFBQSxNQVVHQyxLQVZILEdBVTBDSixLQVYxQyxDQVVHSSxLQVZIO0FBQUEsTUFVV0MsT0FWWCxHQVUwQ0wsS0FWMUMsQ0FVV0ssT0FWWDtBQUFBLE1BVW9CQyxVQVZwQixHQVUwQ04sS0FWMUMsQ0FVb0JNLFVBVnBCO0FBQUEsTUFVZ0NDLE1BVmhDLEdBVTBDUCxLQVYxQyxDQVVnQ08s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Y2F0ZWdvcnktdGFnLjk2Y2JjMDJjZTQ5N2FmOTA3NzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGdldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWUsIHNpZ251cH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiY2F0ZWdvcmllc1wiOiBbXSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZW1vdmVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVsb2FkXCI6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBzdWNjZXNzLCBlcnJvciAsIHJlbW92ZWQsIGNhdGVnb3JpZXMsIHJlbG9hZH0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQWxsQ2F0ZWdvcmllcyAoKSB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2V9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgc3VjY2VzczogdHJ1ZSwgY2F0ZWdvcmllczogZGF0YX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIENhdGVnb3J5QmxvY2sgKCkge1xyXG4gICAgICAgIHJldHVybiBBbGxDYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPntjfTwvYnV0dG9uPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6IFwiXCIsIGVycm9yOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGNhdGVnb3J5ID0gXCIsIG5hbWUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY3JlYXRlKHtuYW1lfSwgdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogJycsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENhdGVnb3J5Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkNyZWF0ZSBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInB0LTJcIn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIHtDYXRlZ29yeUZvcm0oKX1cclxuICAgICAgICB7Q2F0ZWdvcnlCbG9jaygpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==