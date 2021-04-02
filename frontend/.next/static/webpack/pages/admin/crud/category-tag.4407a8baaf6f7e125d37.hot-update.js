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
      if (data.err) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.err,
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

  var DeleteCategory = function DeleteCategory(slug) {
    console.log("delete", slug);
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_3__["deleteCategory"])(slug, token).then(function (data) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        error: false,
        success: false,
        reload: !reload,
        removed: !removed,
        name: ""
      }));
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
        lineNumber: 49,
        columnNumber: 20
      }, _this2);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllCategories();
  }, [reload]);

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

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 85,
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
        lineNumber: 90,
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
        lineNumber: 97,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showSuccess(), showError(), showRemoved(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CategoryBlock, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJjYXRlZ29yaWVzIiwicmVsb2FkIiwidG9rZW4iLCJnZXRDb29raWUiLCJBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInRoZW4iLCJkYXRhIiwiZXJyIiwiRGVsZXRlQ2F0ZWdvcnkiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNhdGVnb3J5IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJDYXRlZ29yeUJsb2NrIiwibWFwIiwiYyIsImkiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsInJlcyIsInNob3dTdWNjZXNzIiwic2hvd0Vycm9yIiwic2hvd1JlbW92ZWQiLCJDYXRlZ29yeUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixrQkFBYyxFQUhpQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsY0FBVTtBQU5xQixHQUFELENBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxNQVVaQyxJQVZZLEdBVXlDRixLQVZ6QyxDQVVaRSxJQVZZO0FBQUEsTUFVTkMsT0FWTSxHQVV5Q0gsS0FWekMsQ0FVTkcsT0FWTTtBQUFBLE1BVUdDLEtBVkgsR0FVeUNKLEtBVnpDLENBVUdJLEtBVkg7QUFBQSxNQVVVQyxPQVZWLEdBVXlDTCxLQVZ6QyxDQVVVSyxPQVZWO0FBQUEsTUFVbUJDLFVBVm5CLEdBVXlDTixLQVZ6QyxDQVVtQk0sVUFWbkI7QUFBQSxNQVUrQkMsTUFWL0IsR0FVeUNQLEtBVnpDLENBVStCTyxNQVYvQjtBQVluQixNQUFNQyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFHQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLDhFQUFnQixHQUFHQyxJQUFuQixDQUF3QixVQUFBQyxJQUFJLEVBQUk7QUFDNUIsVUFBSUEsSUFBSSxDQUFDQyxHQUFULEVBQWM7QUFDVmIsZ0JBQVEsaUNBQUtELEtBQUw7QUFBWUksZUFBSyxFQUFFUyxJQUFJLENBQUNDLEdBQXhCO0FBQTZCWCxpQkFBTyxFQUFFO0FBQXRDLFdBQVI7QUFDSCxPQUZELE1BRU87QUFDSEYsZ0JBQVEsaUNBQUtELEtBQUw7QUFBWU0sb0JBQVUsRUFBRU8sSUFBeEI7QUFBOEJWLGlCQUFPLEVBQUU7QUFBdkMsV0FBUjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUkQ7O0FBYUEsTUFBTVksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQVU7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLElBQXRCO0FBQ0FHLDRFQUFjLENBQUNILElBQUQsRUFBT1IsS0FBUCxDQUFkLENBQTRCSSxJQUE1QixDQUFpQyxVQUFBQyxJQUFJLEVBQUk7QUFDakNaLGNBQVEsaUNBQUtELEtBQUw7QUFBWUksYUFBSyxFQUFFLEtBQW5CO0FBQTBCRCxlQUFPLEVBQUUsS0FBbkM7QUFBMENJLGNBQU0sRUFBRSxDQUFDQSxNQUFuRDtBQUEyREYsZUFBTyxFQUFFLENBQUNBLE9BQXJFO0FBQThFSCxZQUFJLEVBQUU7QUFBcEYsU0FBUjtBQUNQLEtBRkQ7QUFHSCxHQUxEOztBQU1BLE1BQU1rQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNKLElBQUQsRUFBVTtBQUM1QixRQUFJSyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLHFEQUFmLENBQWI7O0FBQ0EsUUFBR0YsTUFBSCxFQUFVO0FBQ05OLG9CQUFjLENBQUNDLElBQUQsQ0FBZDtBQUNIO0FBQ0osR0FMRDs7QUFNQSxXQUFTUSxhQUFULEdBQXlCO0FBQUE7O0FBRXJCLFdBQU9sQixVQUFVLENBQUNtQixHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsMEJBQU87QUFBUSxxQkFBYSxFQUFFO0FBQUEsaUJBQU1QLGFBQWEsQ0FBQ00sQ0FBQyxDQUFDVixJQUFILENBQW5CO0FBQUEsU0FBdkI7QUFBb0QsYUFBSyxFQUFFLHdCQUEzRDtBQUE2RixpQkFBUyxFQUFDLHdDQUF2RztBQUFBLGtCQUFpSlUsQ0FBQyxDQUFDeEI7QUFBbkosU0FBMEZ5QixDQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0gsS0FGTSxDQUFQO0FBR0g7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNabEIsaUJBQWE7QUFDaEIsR0FGUSxFQUVQLENBQUNILE1BQUQsQ0FGTyxDQUFUOztBQU9BLE1BQU1zQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEI3QixZQUFRLGlDQUFLRCxLQUFMO0FBQVlFLFVBQUksRUFBRTRCLENBQUMsQ0FBQ0MsTUFBRixDQUFTL0IsS0FBM0I7QUFBa0NHLGFBQU8sRUFBRSxLQUEzQztBQUFrREUsYUFBTyxFQUFFLEVBQTNEO0FBQStERCxXQUFLLEVBQUU7QUFBdEUsT0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTTRCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLENBQUQsRUFBTztBQUNwQmIsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NoQixJQUFsQztBQUNBNEIsS0FBQyxDQUFDRyxjQUFGO0FBQ0FDLG9FQUFNLENBQUM7QUFBQ2hDLFVBQUksRUFBSkE7QUFBRCxLQUFELEVBQVNNLEtBQVQsQ0FBTixDQUNLSSxJQURMLENBQ1UsVUFBQXVCLEdBQUcsRUFBSTtBQUNULFVBQUlBLEdBQUcsQ0FBQy9CLEtBQVIsRUFBZTtBQUNYSCxnQkFBUSxpQ0FBS0QsS0FBTDtBQUFZSSxlQUFLLEVBQUUrQixHQUFHLENBQUMvQixLQUF2QjtBQUE4QkQsaUJBQU8sRUFBRTtBQUF2QyxXQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0hGLGdCQUFRLGlDQUFLRCxLQUFMO0FBQVlFLGNBQUksRUFBRSxFQUFsQjtBQUFzQkUsZUFBSyxFQUFFLEtBQTdCO0FBQW9DRCxpQkFBTyxFQUFFO0FBQTdDLFdBQVI7QUFDSDtBQUNKLEtBUEw7QUFTSCxHQVpEOztBQWNBLE1BQU1pQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUdqQyxPQUFILEVBQVc7QUFDUCwwQkFBTztBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQUpEOztBQUtBLE1BQU1rQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUdqQyxLQUFILEVBQVU7QUFDTiwwQkFBTztBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQUpEOztBQUtBLE1BQU1rQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUdqQyxPQUFILEVBQVc7QUFDUCwwQkFBTztBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQUpEOztBQU9BLE1BQU1rQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHdCQUNqQjtBQUFNLGNBQVEsRUFBRVAsUUFBaEI7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUgsWUFBN0I7QUFBMkMsaUJBQVMsRUFBQyxjQUFyRDtBQUFvRSxhQUFLLEVBQUUzQjtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUUsTUFBaEI7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQXJCOztBQVdBLHNCQUFPO0FBQUEsZUFDRmtDLFdBQVcsRUFEVCxFQUVGQyxTQUFTLEVBRlAsRUFHRkMsV0FBVyxFQUhULGVBSUgscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkcsZUFLSCxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRztBQUFBLGtCQUFQO0FBT0gsQ0EzR0Q7O0dBQU14QyxROztLQUFBQSxRO0FBNkdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2NhdGVnb3J5LXRhZy40NDA3YThiYWFmNmY3ZTEyNWQzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlLCBkZWxldGVDYXRlZ29yeSwgZ2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZSwgc2lnbnVwfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJjYXRlZ29yaWVzXCI6IFtdLFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICBcInJlbW92ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZWxvYWRcIjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIHN1Y2Nlc3MsIGVycm9yLCByZW1vdmVkLCBjYXRlZ29yaWVzLCByZWxvYWR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IEFsbENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnIsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgY2F0ZWdvcmllczogZGF0YSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IERlbGV0ZUNhdGVnb3J5ID0gKHNsdWcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiICxzbHVnKVxyXG4gICAgICAgIGRlbGV0ZUNhdGVnb3J5KHNsdWcsIHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCByZWxvYWQ6ICFyZWxvYWQsIHJlbW92ZWQ6ICFyZW1vdmVkLCBuYW1lOiBcIlwifSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgbGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2F0ZWdvcnk/XCIpXHJcbiAgICAgICAgaWYoYW5zd2VyKXtcclxuICAgICAgICAgICAgRGVsZXRlQ2F0ZWdvcnkoc2x1ZylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBDYXRlZ29yeUJsb2NrKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Eb3VibGVDbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShjLnNsdWcpfSB0aXRsZT17XCJEb3VibGUgY2xpY2sgdG8gZGVsZXRlXCJ9IGtleT17aX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57Yy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxDYXRlZ29yaWVzKClcclxuICAgIH0sW3JlbG9hZF0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogXCJcIiwgZXJyb3I6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgY2F0ZWdvcnkgPSBcIiwgbmFtZSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjcmVhdGUoe25hbWV9LCB0b2tlbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiAnJywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5DYXRlZ29yeSBzdWNjZXNzZnVsbHkgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IGFscmVhZHkgZXhpc3QhPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dSZW1vdmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHJlbW92ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5DYXRlZ29yeSBzdWNjZXNzZnVsbHkgcmVtb3ZlZC48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBDYXRlZ29yeUZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5DcmVhdGUgQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmFtZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwdC0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAge3Nob3dSZW1vdmVkKCl9XHJcbiAgICAgICAgPENhdGVnb3J5Rm9ybS8+XHJcbiAgICAgICAgPENhdGVnb3J5QmxvY2svPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==