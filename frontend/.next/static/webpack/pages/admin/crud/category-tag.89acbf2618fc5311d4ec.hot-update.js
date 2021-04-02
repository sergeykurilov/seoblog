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

  var DeleteCategory = function DeleteCategory(slug) {
    console.log("delete", slug);
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_3__["deleteCategory"])(slug, token).then(function (data) {
      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: false,
          success: false,
          reload: !reload,
          removed: !removed
        }));
      }
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm("Are you sure that you want to delete this category?");

    if (answer) {
      DeleteCategory(slug);
    }
  };

  function CategoryBlock() {
    var _this2 = this;

    return categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onDoubleClick: function onDoubleClick() {
          return deleteConfirm(c.slug);
        },
        title: "Double click to delete",
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        children: c.name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }, _this2);
    });
  }

  var handleChange = function handleChange(e) {
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      name: e.currentTarget.value,
      success: false,
      removed: false,
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
          error: false,
          success: true,
          reload: !reload,
          removed: !removed,
          name: ""
        }));
      }
    });
  };

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 20
      }, _this);
    }
  };

  var showError = function showError() {
    if (error) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Category already exist!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 20
      }, _this);
    }
  };

  var showRemoved = function showRemoved() {
    if (removed) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Category successfully removed."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 20
      }, _this);
    }
  };

  var CategoryForm = function CategoryForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "text-muted",
        children: "Create Category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [CategoryForm(), CategoryBlock()]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJjYXRlZ29yaWVzIiwicmVsb2FkIiwidG9rZW4iLCJnZXRDb29raWUiLCJBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiRGVsZXRlQ2F0ZWdvcnkiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNhdGVnb3J5IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJDYXRlZ29yeUJsb2NrIiwibWFwIiwiYyIsImkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJyZXMiLCJzaG93U3VjY2VzcyIsInNob3dFcnJvciIsInNob3dSZW1vdmVkIiwiQ2F0ZWdvcnlGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQztBQUMvQixZQUFRLEVBRHVCO0FBRS9CLGFBQVMsS0FGc0I7QUFHL0Isa0JBQWMsRUFIaUI7QUFJL0IsZUFBVyxLQUpvQjtBQUsvQixlQUFXLEtBTG9CO0FBTS9CLGNBQVU7QUFOcUIsR0FBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsTUFVWkMsSUFWWSxHQVV5Q0YsS0FWekMsQ0FVWkUsSUFWWTtBQUFBLE1BVU5DLE9BVk0sR0FVeUNILEtBVnpDLENBVU5HLE9BVk07QUFBQSxNQVVHQyxLQVZILEdB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QU1pQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHdCQUNqQjtBQUFNLGNBQVEsRUFBRVAsUUFBaEI7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUgsWUFBN0I7QUFBMkMsaUJBQVMsRUFBQyxjQUFyRDtBQUFvRSxhQUFLLEVBQUUxQjtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUUsTUFBaEI7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQXJCOztBQVdBLHNCQUFPO0FBQUEsZUFDRm9DLFlBQVksRUFEVixFQUVGZCxhQUFhLEVBRlg7QUFBQSxrQkFBUDtBQUlILENBekdEOztHQUFNMUIsUTs7S0FBQUEsUTtBQTJHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS10YWcuODlhY2JmMjYxOGZjNTMxMWQ0ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZSwgZGVsZXRlQ2F0ZWdvcnksIGdldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWUsIHNpZ251cH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiY2F0ZWdvcmllc1wiOiBbXSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZW1vdmVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVsb2FkXCI6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBzdWNjZXNzLCBlcnJvciwgcmVtb3ZlZCwgY2F0ZWdvcmllcywgcmVsb2FkfSA9IHZhbHVlXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuXHJcbiAgICBjb25zdCBBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2V9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBjYXRlZ29yaWVzOiBkYXRhLCBzdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxDYXRlZ29yaWVzKClcclxuICAgIH0sIFtyZWxvYWRdKVxyXG5cclxuXHJcbiAgICBjb25zdCBEZWxldGVDYXRlZ29yeSA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgc2x1ZylcclxuICAgICAgICBkZWxldGVDYXRlZ29yeShzbHVnLCB0b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCByZWxvYWQ6ICFyZWxvYWQsIHJlbW92ZWQ6ICFyZW1vdmVkfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT9cIilcclxuICAgICAgICBpZiAoYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIERlbGV0ZUNhdGVnb3J5KHNsdWcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIENhdGVnb3J5QmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uRG91YmxlQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oYy5zbHVnKX0gdGl0bGU9e1wiRG91YmxlIGNsaWNrIHRvIGRlbGV0ZVwifSBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2J1dHRvbj5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogZmFsc2UsIGVycm9yOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGNhdGVnb3J5ID0gXCIsIG5hbWUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY3JlYXRlKHtuYW1lfSwgdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCByZWxvYWQ6ICFyZWxvYWQsIHJlbW92ZWQ6ICFyZW1vdmVkLCBuYW1lOiBcIlwifSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLjwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IGFscmVhZHkgZXhpc3QhPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dSZW1vdmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZW1vdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSByZW1vdmVkLjwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IENhdGVnb3J5Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkNyZWF0ZSBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInB0LTJcIn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIHtDYXRlZ29yeUZvcm0oKX1cclxuICAgICAgICB7Q2F0ZWdvcnlCbG9jaygpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==