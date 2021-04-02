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
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");




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

  var AllTags = function AllTags() {
    Object(_actions_tags__WEBPACK_IMPORTED_MODULE_3__["getAllTags"])().then(function (data) {
      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          tag: data
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllTags();
  }, [reload]);

  var DeleteTag = function DeleteTag(slug) {
    console.log("delete", slug);
    Object(_actions_tags__WEBPACK_IMPORTED_MODULE_3__["deleteSingleTag"])(slug, token).then(function (data) {
      console.log(data);

      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: false,
          success: false,
          reload: !reload,
          removed: true
        }));
      }
    });
  };

  var DeleteConfirm = function DeleteConfirm(slug) {
    var answer = window.confirm("Are you sure that you want to delete this category?");

    if (answer) {
      DeleteTag(slug);
    }
  };

  function TagBlock() {
    var _this2 = this;

    return categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onDoubleClick: function onDoubleClick() {
          return DeleteConfirm(c.slug);
        },
        title: "Double click to delete",
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        children: c.name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 20
      }, _this2);
    });
  }

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
        lineNumber: 83,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange,
        className: "form-control",
        value: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }, _this), TagForm()]
  }, void 0, true);
};

_s(Tag, "XISSOiAEaESeHXUOPsIVgbwqnv0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIiwicmVtb3ZlZCIsInRhZ3MiLCJyZWxvYWQiLCJ0b2tlbiIsImdldENvb2tpZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJBbGxUYWdzIiwiZ2V0QWxsVGFncyIsInRoZW4iLCJkYXRhIiwidGFnIiwidXNlRWZmZWN0IiwiRGVsZXRlVGFnIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVTaW5nbGVUYWciLCJEZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsIlRhZ0Jsb2NrIiwiY2F0ZWdvcmllcyIsIm1hcCIsImMiLCJpIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZSIsInJlcyIsIlRhZ0Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixXQUFPLEVBSHdCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixjQUFVO0FBTnFCLEdBQUQsQ0FEcEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQTs7QUFBQSxNQVVQQyxJQVZPLEdBVXlDRixLQVZ6QyxDQVVQRSxJQVZPO0FBQUEsTUFVREMsT0FWQyxHQVV5Q0gsS0FWekMsQ0FVREcsT0FWQztBQUFBLE1BVVFDLEtBVlIsR0FVeUNKLEtBVnpDLENBVVFJLEtBVlI7QUFBQSxNQVVnQkMsT0FWaEIsR0FVeUNMLEtBVnpDLENBVWdCSyxPQVZo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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjRhZWEwMTAwYzA2ZjcwYzUyZTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuXHJcbmNvbnN0IFRhZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJ0YWdcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IgLCByZW1vdmVkLCB0YWdzLCByZWxvYWR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6IGZhbHNlLCBlcnJvcjogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEFsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgdGFnOiBkYXRhfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxUYWdzKClcclxuICAgIH0sIFtyZWxvYWRdKVxyXG5cclxuXHJcbiAgICBjb25zdCBEZWxldGVUYWcgPSAoc2x1ZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHNsdWcpXHJcbiAgICAgICAgZGVsZXRlU2luZ2xlVGFnKHNsdWcsIHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnJvcn0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIHJlbG9hZDogIXJlbG9hZCwgcmVtb3ZlZDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgRGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgbGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2F0ZWdvcnk/XCIpXHJcbiAgICAgICAgaWYgKGFuc3dlcikge1xyXG4gICAgICAgICAgICBEZWxldGVUYWcoc2x1ZylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVGFnQmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uRG91YmxlQ2xpY2s9eygpID0+IERlbGV0ZUNvbmZpcm0oYy5zbHVnKX0gdGl0bGU9e1wiRG91YmxlIGNsaWNrIHRvIGRlbGV0ZVwifSBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2J1dHRvbj5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgdGFnID0gXCIsIG5hbWUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY3JlYXRlKHtuYW1lfSwgdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbmFtZTogJycsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFRhZ0Zvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5DcmVhdGUgVGFnPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHQtMlwifT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICB7VGFnRm9ybSgpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZyJdLCJzb3VyY2VSb290IjoiIn0=