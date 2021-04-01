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
          error: false
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
          return deleteConfirm();
        },
        title: "Double click to delete",
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        children: c.name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
        lineNumber: 84,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryBlock, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJjYXRlZ29yaWVzIiwicmVsb2FkIiwidG9rZW4iLCJnZXRDb29raWUiLCJBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiRGVsZXRlQ2F0ZWdvcnkiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNhdGVnb3J5IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJDYXRlZ29yeUJsb2NrIiwibWFwIiwiYyIsImkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsInJlcyIsIkNhdGVnb3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFDL0IsWUFBUSxFQUR1QjtBQUUvQixhQUFTLEtBRnNCO0FBRy9CLGtCQUFjLEVBSGlCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixjQUFVO0FBTnFCLEdBQUQsQ0FEZjtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUFBLE1BVVpDLElBVlksR0FVeUNGLEtBVnpDLENBVVpFLElBVlk7QUFBQSxNQVVOQyxPQVZNLEdBVXlDSCxLQVZ6QyxDQVVORyxPQVZNO0FBQUEsTUFVR0MsS0FWSCxHQVV5Q0osS0FWekMsQ0FVR0ksS0FWSDtBQUFBLE1BVVVDLE9BVlYsR0FVeUNMLEtB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QUcsQ0FBQzlCLEtBQVIsRUFBZTtBQUNYSCxnQkFBUSxpQ0FBS0QsS0FBTDtBQUFZSSxlQUFLLEVBQUU4QixHQUFHLENBQUM5QixLQUF2QjtBQUE4QkQsaUJBQU8sRUFBRTtBQUF2QyxXQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0hGLGdCQUFRLGlDQUFLRCxLQUFMO0FBQVlFLGNBQUksRUFBRSxFQUFsQjtBQUFzQkUsZUFBSyxFQUFFLEtBQTdCO0FBQW9DRCxpQkFBTyxFQUFFO0FBQTdDLFdBQVI7QUFDSDtBQUNKLEtBUEw7QUFTSCxHQVpEOztBQWNBLE1BQU1nQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHdCQUNqQjtBQUFNLGNBQVEsRUFBRUosUUFBaEI7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUgsWUFBN0I7QUFBMkMsaUJBQVMsRUFBQyxjQUFyRDtBQUFvRSxhQUFLLEVBQUUxQjtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUUsTUFBaEI7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQXJCOztBQVdBLHNCQUFPO0FBQUEsNEJBQ0gscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZUFFSCxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRztBQUFBLGtCQUFQO0FBSUgsQ0EzRkQ7O0dBQU1KLFE7O0tBQUFBLFE7QUE2RlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjczODJlNDkzNTljMDZiYmViYmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZUNhdGVnb3J5LCBnZXRBbGxDYXRlZ29yaWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImNhdGVnb3JpZXNcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IsIHJlbW92ZWQsIGNhdGVnb3JpZXMsIHJlbG9hZH0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcblxyXG4gICAgY29uc3QgQWxsQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgY2F0ZWdvcmllczogZGF0YSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQWxsQ2F0ZWdvcmllcygpXHJcbiAgICB9LFtyZWxvYWRdKVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IERlbGV0ZUNhdGVnb3J5ID0gKHNsdWcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiICxzbHVnKVxyXG4gICAgICAgIGRlbGV0ZUNhdGVnb3J5KHNsdWcsIHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoc2x1ZykgPT4ge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhdGVnb3J5P1wiKVxyXG4gICAgICAgIGlmKGFuc3dlcil7XHJcbiAgICAgICAgICAgIERlbGV0ZUNhdGVnb3J5KHNsdWcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gQ2F0ZWdvcnlCbG9jaygpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uRG91YmxlQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oKX0gdGl0bGU9e1wiRG91YmxlIGNsaWNrIHRvIGRlbGV0ZVwifSBrZXk9e2l9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2J1dHRvbj5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6IFwiXCIsIGVycm9yOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGNhdGVnb3J5ID0gXCIsIG5hbWUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY3JlYXRlKHtuYW1lfSwgdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogJycsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENhdGVnb3J5Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkNyZWF0ZSBDYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInB0LTJcIn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxDYXRlZ29yeUZvcm0vPlxyXG4gICAgICAgIDxDYXRlZ29yeUJsb2NrLz5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=