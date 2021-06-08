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
    name: '',
    token: '',
    error: '',
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      token = values.token,
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
  }, [router]);

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
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          success: true,
          showButton: false
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Loading......"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 45,
        columnNumber: 17
      }, _this), showLoading(), error && error, success && "You have successfully activated your account. Please sign in.", showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: clickSubmit,
        className: "btn btn-outline-primary",
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 32
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(ActivateAccount, "AzDcj/d+djTlYJ8UGemf/7irxNU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwiZXJyb3IiLCJsb2FkaW5nIiwic3VjY2VzcyIsInNob3dCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwiand0IiwiZGVjb2RlIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJ0aGVuIiwiZGF0YSIsInNob3dMb2FkaW5nIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUM7QUFDakNDLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsU0FBSyxFQUFFLEVBRjBCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFdBQU8sRUFBRSxLQUp3QjtBQUtqQ0MsV0FBTyxFQUFFLEtBTHdCO0FBTWpDQyxjQUFVLEVBQUU7QUFOcUIsR0FBRCxDQURGO0FBQUEsTUFDM0JDLE1BRDJCO0FBQUEsTUFDbkJDLFNBRG1COztBQUFBLE1BVTNCUCxJQVYyQixHQVV5Qk0sTUFWekIsQ0FVM0JOLElBVjJCO0FBQUEsTUFVckJDLEtBVnFCLEdBVXlCSyxNQVZ6QixDQVVyQkwsS0FWcUI7QUFBQSxNQVVkRSxPQVZjLEdBVXlCRyxNQVZ6QixDQVVkSCxPQVZjO0FBQUEsTUFVTEMsT0FWSyxHQVV5QkUsTUFWekIsQ0FVTEYsT0FWSztBQUFBLE1BVUlDLFVBVkosR0FVeUJDLE1BVnpCLENBVUlELFVBVko7QUFBQSxNQVVnQkgsS0FWaEIsR0FVeUJJLE1BVnpCLENBVWdCSixLQVZoQjtBQWFsQ00seURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVAsS0FBSyxHQUFHSCxNQUFNLENBQUNXLEtBQVAsQ0FBYUMsRUFBekI7O0FBQ0EsUUFBSVQsS0FBSixFQUFXO0FBQUEsd0JBQ1VVLG1EQUFHLENBQUNDLE1BQUosQ0FBV1gsS0FBWCxDQURWO0FBQUEsVUFDQ0QsS0FERCxlQUNDQSxJQUREOztBQUVQTyxlQUFTLGlDQUFNRCxNQUFOO0FBQWNOLFlBQUksRUFBSkEsS0FBZDtBQUFvQkMsYUFBSyxFQUFMQTtBQUFwQixTQUFUO0FBQ0g7QUFDSixHQU5RLEVBTU4sQ0FBQ0gsTUFBRCxDQU5NLENBQVQ7O0FBUUEsTUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxhQUFPLEVBQUUsSUFBdkI7QUFBNkJELFdBQUssRUFBRTtBQUFwQyxPQUFUO0FBQ0FjLGdFQUFNLENBQUM7QUFBRWYsV0FBSyxFQUFMQTtBQUFGLEtBQUQsQ0FBTixDQUFrQmdCLElBQWxCLENBQXVCLFVBQUFDLElBQUksRUFBSTtBQUMzQixVQUFJQSxJQUFJLENBQUNoQixLQUFULEVBQWdCO0FBQ1pLLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNKLGVBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQTFCO0FBQWlDQyxpQkFBTyxFQUFFLEtBQTFDO0FBQWlERSxvQkFBVSxFQUFFO0FBQTdELFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSEUsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsaUJBQU8sRUFBRSxLQUF2QjtBQUE4QkMsaUJBQU8sRUFBRSxJQUF2QztBQUE2Q0Msb0JBQVUsRUFBRTtBQUF6RCxXQUFUO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FWRDs7QUFXQSxNQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1oQixPQUFPLGdCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUosR0FBOEIsRUFBM0M7QUFBQSxHQUFwQjs7QUFDQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLDJCQUEwQkgsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS21CLFdBQVcsRUFGaEIsRUFHS2pCLEtBQUssSUFBSUEsS0FIZCxFQUlLRSxPQUFPLElBQUksK0RBSmhCLEVBS0tDLFVBQVUsaUJBQUk7QUFBUSxlQUFPLEVBQUVRLFdBQWpCO0FBQThCLGlCQUFTLEVBQUMseUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBOUNEOztHQUFNaEIsZTs7S0FBQUEsZTtBQWdEUyxxRUFBQXVCLDhEQUFVLENBQUN2QixlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9hY3RpdmF0aW9uL1tpZF0uZTc0NGYzZjY5M2Y5MTczYWM1MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge3NpZ251cH0gZnJvbSBcIi4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlciwgd2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHtyb3V0ZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgc2hvd0J1dHRvbjogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgdG9rZW4sIGxvYWRpbmcsIHN1Y2Nlc3MsIHNob3dCdXR0b24sIGVycm9yfSA9IHZhbHVlc1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBuYW1lLCB0b2tlbiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XHJcbiAgICAgICAgc2lnbnVwKHsgdG9rZW4gfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlLCBzaG93QnV0dG9uOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIHNob3dCdXR0b246IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiBsb2FkaW5nID8gKDxoMj5Mb2FkaW5nLi4uLi4uPC9oMj4pIDogXCJcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBiLTRcIj5IZXkge25hbWV9LCBSZWFkeSB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQ/PC9oMz5cclxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIGVycm9yfVxyXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYWN0aXZhdGVkIHlvdXIgYWNjb3VudC4gUGxlYXNlIHNpZ24gaW4uXCJ9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiPkFjdGl2YXRlIEFjY291bnQ8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9