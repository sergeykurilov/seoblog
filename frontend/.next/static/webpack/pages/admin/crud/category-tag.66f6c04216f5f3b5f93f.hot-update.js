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
      tag = value.tag,
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

    return tag.map(function (c, i) {
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
          error: false,
          success: true,
          reload: !reload,
          removed: false,
          name: ""
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
    }, _this), TagForm(), TagBlock()]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIiwicmVtb3ZlZCIsInRhZyIsInJlbG9hZCIsInRva2VuIiwiZ2V0Q29va2llIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIkFsbFRhZ3MiLCJnZXRBbGxUYWdzIiwidGhlbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJEZWxldGVUYWciLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVNpbmdsZVRhZyIsIkRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiVGFnQmxvY2siLCJtYXAiLCJjIiwiaSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGUiLCJyZXMiLCJUYWdGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLEVBRHVCO0FBRS9CLGFBQVMsS0FGc0I7QUFHL0IsV0FBTyxFQUh3QjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsY0FBVTtBQU5xQixHQUFELENBRHBCO0FBQUEsTUFDUEMsS0FETztBQUFBLE1BQ0FDLFFBREE7O0FBQUEsTUFVUEMsSUFWTyxHQVV3Q0YsS0FWeEMsQ0FVUEUsSUFWTztBQUFBLE1BVURDLE9BVkMsR0FVd0NILEtBVnhDLENBVURHLE9BVkM7QUFBQSxNQVVRQyxLQVZSLEdBVXdDSixLQVZ4QyxDQVVRSSxLQVZSO0FBQUEsTUFVZ0JDLE9BVmhCLEdBVXdDTCxLQVZ4QyxDQVVnQkssT0FWaEI7QUFBQSxNQVV5QkMsR0FWekIs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QUFLSCxDQTFGRDs7R0FBTTdCLEc7O0tBQUFBLEc7QUE0RlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjY2ZjZjMDQyMTZmNWYzYjVmOTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuXHJcbmNvbnN0IFRhZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJ0YWdcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IgLCByZW1vdmVkLCB0YWcsIHJlbG9hZH0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIG5hbWU6IGUudGFyZ2V0LnZhbHVlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogZmFsc2UsIGVycm9yOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQWxsVGFncyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxUYWdzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCB0YWc6IGRhdGF9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFsbFRhZ3MoKVxyXG4gICAgfSwgW3JlbG9hZF0pXHJcblxyXG5cclxuICAgIGNvbnN0IERlbGV0ZVRhZyA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgc2x1ZylcclxuICAgICAgICBkZWxldGVTaW5nbGVUYWcoc2x1ZywgdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVsb2FkOiAhcmVsb2FkLCByZW1vdmVkOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBEZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT9cIilcclxuICAgICAgICBpZiAoYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIERlbGV0ZVRhZyhzbHVnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBUYWdCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gdGFnLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbkRvdWJsZUNsaWNrPXsoKSA9PiBEZWxldGVDb25maXJtKGMuc2x1Zyl9IHRpdGxlPXtcIkRvdWJsZSBjbGljayB0byBkZWxldGVcIn0ga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPntjLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHRhZyA9IFwiLCBuYW1lKVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNyZWF0ZSh7bmFtZX0sIHRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IHJlcy5lcnJvciwgc3VjY2VzczogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgcmVsb2FkOiAhcmVsb2FkLCByZW1vdmVkOiBmYWxzZSwgbmFtZTogXCJcIn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFRhZ0Zvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5DcmVhdGUgVGFnPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicHQtMlwifT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICB7VGFnRm9ybSgpfVxyXG4gICAgICAgIHtUYWdCbG9jaygpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZyJdLCJzb3VyY2VSb290IjoiIn0=