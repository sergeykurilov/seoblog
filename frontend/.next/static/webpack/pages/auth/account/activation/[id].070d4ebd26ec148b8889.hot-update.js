webpackHotUpdate_N_E("pages/auth/account/activation/[id]",{

/***/ "./pages/auth/account/activation/[id].js":
/*!***********************************************!*\
  !*** ./pages/auth/account/activation/[id].js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/pagesHeader */ "./components/pagesHeader.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\auth\\account\\activation\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ActivateAccount = function ActivateAccount(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    token: "",
    message: "",
    error: "",
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      token = values.token,
      message = values.message,
      loading = values.loading,
      success = values.success,
      showButton = values.showButton,
      error = values.error;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = router.query.id;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token),
          _name = _jwt$decode.name;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name,
        token: token
      }));
    }
  }, []);

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: false
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["signup"])({
      token: token
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false,
          showButton: false
        }));
      }

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        loading: false,
        success: true,
        showButton: false
      }));
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Loading......"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 42
    }, _this) : "";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "pb-4",
        children: ["Hey ", name, ", Ready to activate your account?"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), showLoading(), error && error, success && "You have successfully activated your account. Please sign in.", showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: clickSubmit,
        className: "btn btn-outline-primary",
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 32
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(ActivateAccount, "3gqwStURKdblgVmPL95djmtCvAs=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ActivateAccount));

var _c, _c2;

$RefreshReg$(_c, "ActivateAccount");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwibWVzc2FnZSIsImVycm9yIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzaG93QnV0dG9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwicXVlcnkiLCJpZCIsImp3dCIsImRlY29kZSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwIiwidGhlbiIsImRhdGEiLCJzaG93TG9hZGluZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsV0FBTyxFQUFFLEVBSHdCO0FBSWpDQyxTQUFLLEVBQUUsRUFKMEI7QUFLakNDLFdBQU8sRUFBRSxLQUx3QjtBQU1qQ0MsV0FBTyxFQUFFLEtBTndCO0FBT2pDQyxjQUFVLEVBQUU7QUFQcUIsR0FBRCxDQURGO0FBQUEsTUFDM0JDLE1BRDJCO0FBQUEsTUFDbkJDLFNBRG1COztBQUFBLE1BVzNCUixJQVgyQixHQVdrQ08sTUFYbEMsQ0FXM0JQLElBWDJCO0FBQUEsTUFXckJDLEtBWHFCLEdBV2tDTSxNQVhsQyxDQVdyQk4sS0FYcUI7QUFBQSxNQVdkQyxPQVhjLEdBV2tDSyxNQVhsQyxDQVdkTCxPQVhjO0FBQUEsTUFXTEUsT0FYSyxHQVdrQ0csTUFYbEMsQ0FXTEgsT0FYSztBQUFBLE1BV0lDLE9BWEosR0FXa0NFLE1BWGxDLENBV0lGLE9BWEo7QUFBQSxNQVdhQyxVQVhiLEdBV2tDQyxNQVhsQyxDQVdhRCxVQVhiO0FBQUEsTUFXeUJILEtBWHpCLEdBV2tDSSxNQVhsQyxDQVd5QkosS0FYekI7QUFjbENNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlSLEtBQUssR0FBR0gsTUFBTSxDQUFDWSxLQUFQLENBQWFDLEVBQXpCOztBQUNBLFFBQUdWLEtBQUgsRUFBUztBQUFBLHdCQUNVVyxtREFBRyxDQUFDQyxNQUFKLENBQVdaLEtBQVgsQ0FEVjtBQUFBLFVBQ0VELEtBREYsZUFDRUEsSUFERjs7QUFFTFEsZUFBUyxpQ0FBS0QsTUFBTDtBQUFhUCxZQUFJLEVBQUVBLEtBQW5CO0FBQXlCQyxhQUFLLEVBQUVBO0FBQWhDLFNBQVQ7QUFDSDtBQUNKLEdBTlEsRUFNUCxFQU5PLENBQVQ7O0FBUUEsTUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBUyxpQ0FBS0QsTUFBTDtBQUFhSCxhQUFPLEVBQUUsSUFBdEI7QUFBNEJELFdBQUssRUFBRTtBQUFuQyxPQUFUO0FBQ0FjLGdFQUFNLENBQUM7QUFBQ2hCLFdBQUssRUFBTEE7QUFBRCxLQUFELENBQU4sQ0FBZ0JpQixJQUFoQixDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDekIsVUFBR0EsSUFBSSxDQUFDaEIsS0FBUixFQUFjO0FBQ1ZLLGlCQUFTLGlDQUFLRCxNQUFMO0FBQWFKLGVBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQXpCO0FBQWdDQyxpQkFBTyxFQUFFLEtBQXpDO0FBQWdERSxvQkFBVSxFQUFFO0FBQTVELFdBQVQ7QUFDSDs7QUFDREUsZUFBUyxpQ0FBS0QsTUFBTDtBQUFhSCxlQUFPLEVBQUUsS0FBdEI7QUFBNkJDLGVBQU8sRUFBRSxJQUF0QztBQUE0Q0Msa0JBQVUsRUFBRTtBQUF4RCxTQUFUO0FBQ0gsS0FMRDtBQU1ILEdBVEQ7O0FBV0EsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNaEIsT0FBTyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKLEdBQThCLEVBQTNDO0FBQUEsR0FBcEI7O0FBQ0Esc0JBQ0kscUVBQUMseURBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQSwyQkFBMEJKLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtvQixXQUFXLEVBRmhCLEVBR0tqQixLQUFLLElBQUlBLEtBSGQsRUFJS0UsT0FBTyxJQUFJLCtEQUpoQixFQUtLQyxVQUFVLGlCQUFJO0FBQVEsZUFBTyxFQUFFUSxXQUFqQjtBQUE4QixpQkFBUyxFQUFDLHlCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQS9DRDs7R0FBTWpCLGU7O0tBQUFBLGU7QUFpRFMscUVBQUF3Qiw4REFBVSxDQUFDeEIsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvYWN0aXZhdGlvbi9baWRdLjA3MGQ0ZWJkMjZlYzE0OGI4ODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQge1BhZ2VIZWFkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhZ2VzSGVhZGVyXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHtzaWdudXB9IGZyb20gXCIuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXIsIHdpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmNvbnN0IEFjdGl2YXRlQWNjb3VudCA9ICh7cm91dGVyfSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgc2hvd0J1dHRvbjogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgdG9rZW4sIG1lc3NhZ2UsIGxvYWRpbmcsIHN1Y2Nlc3MsIHNob3dCdXR0b24sIGVycm9yfSA9IHZhbHVlc1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IHJvdXRlci5xdWVyeS5pZFxyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgY29uc3Qge25hbWV9ID0gand0LmRlY29kZSh0b2tlbilcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIG5hbWU6IG5hbWUsIHRva2VuOiB0b2tlbn0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZX0pXHJcbiAgICAgICAgc2lnbnVwKHt0b2tlbn0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSwgc2hvd0J1dHRvbjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgc2hvd0J1dHRvbjogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiBsb2FkaW5nID8gKDxoMj5Mb2FkaW5nLi4uLi4uPC9oMj4pIDogXCJcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBiLTRcIj5IZXkge25hbWV9LCBSZWFkeSB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQ/PC9oMz5cclxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIGVycm9yfVxyXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYWN0aXZhdGVkIHlvdXIgYWNjb3VudC4gUGxlYXNlIHNpZ24gaW4uXCJ9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiPkFjdGl2YXRlIEFjY291bnQ8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9