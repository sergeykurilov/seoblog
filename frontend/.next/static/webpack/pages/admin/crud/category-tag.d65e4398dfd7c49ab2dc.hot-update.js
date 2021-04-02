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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL1RhZy5qcyJdLCJuYW1lcyI6WyJUYWciLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIiwicmVtb3ZlZCIsInRhZ3MiLCJyZWxvYWQiLCJ0b2tlbiIsImdldENvb2tpZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJBbGxUYWdzIiwiZ2V0QWxsVGFncyIsInRoZW4iLCJkYXRhIiwidGFnIiwidXNlRWZmZWN0IiwiRGVsZXRlVGFnIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVTaW5nbGVUYWciLCJEZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsIlRhZ0Jsb2NrIiwibWFwIiwiYyIsImkiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwicmVzIiwiVGFnRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUM7QUFDL0IsWUFBUSxFQUR1QjtBQUUvQixhQUFTLEtBRnNCO0FBRy9CLFdBQU8sRUFId0I7QUFJL0IsZUFBVyxLQUpvQjtBQUsvQixlQUFXLEtBTG9CO0FBTS9CLGNBQVU7QUFOcUIsR0FBRCxDQURwQjtBQUFBLE1BQ1BDLEtBRE87QUFBQSxNQUNBQyxRQURBOztBQUFBLE1BVVBDLElBVk8sR0FVeUNGLEtBVnpDLENBVVBFLElBVk87QUFBQSxNQVVEQyxPQVZDLEdBVXlDSCxLQVZ6QyxDQVVERyxPQVZDO0FBQUEsTUFVUUMsS0FWUixHQVV5Q0osS0FWekMsQ0FVUUksS0FWUjtBQUFBLE1BVWdCQyxPQVZoQixHQVV5Q0wsS0FWekMsQ0FVZ0JLLE9BVmhCO0FBQUEsTUFVeUJD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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLmQ2NWU0Mzk4ZGZkN2M0OWFiMmRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuXHJcbmNvbnN0IFRhZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJ0YWdcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IgLCByZW1vdmVkLCB0YWdzLCByZWxvYWR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiBlLnRhcmdldC52YWx1ZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6IGZhbHNlLCBlcnJvcjogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEFsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgdGFnOiBkYXRhfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxUYWdzKClcclxuICAgIH0sIFtyZWxvYWRdKVxyXG5cclxuXHJcbiAgICBjb25zdCBEZWxldGVUYWcgPSAoc2x1ZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHNsdWcpXHJcbiAgICAgICAgZGVsZXRlU2luZ2xlVGFnKHNsdWcsIHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnJvcn0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIHJlbG9hZDogIXJlbG9hZCwgcmVtb3ZlZDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgRGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcbiAgICAgICAgbGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2F0ZWdvcnk/XCIpXHJcbiAgICAgICAgaWYgKGFuc3dlcikge1xyXG4gICAgICAgICAgICBEZWxldGVUYWcoc2x1ZylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVGFnQmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhZy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Eb3VibGVDbGljaz17KCkgPT4gRGVsZXRlQ29uZmlybShjLnNsdWcpfSB0aXRsZT17XCJEb3VibGUgY2xpY2sgdG8gZGVsZXRlXCJ9IGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57Yy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSB0YWcgPSBcIiwgbmFtZSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjcmVhdGUoe25hbWV9LCB0b2tlbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBuYW1lOiAnJywgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVGFnRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkNyZWF0ZSBUYWc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmFtZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwdC0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgIHtUYWdGb3JtKCl9XHJcbiAgICAgICAge1RhZ0Jsb2NrKCl9XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnIl0sInNvdXJjZVJvb3QiOiIifQ==