webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/GoogleLogin.js":
/*!***********************************!*\
  !*** ./components/GoogleLogin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");


var _jsxFileName = "E:\\seoblog\\frontend\\components\\GoogleLogin.js",
    _this = undefined;







var GoogleLoginComponent = function GoogleLoginComponent() {
  var responseGoogle = function responseGoogle(response) {
    console.log(response);
    var tokenId = response.tokenId;
    var user = {
      tokenId: tokenId
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["loginWithGoogle"])(user).then(function (data) {
      try {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(data, function () {
          if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/admin");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user");
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pb-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
      clientId: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["GOOGLE_CLIENT_ID"]),
      buttonText: "Login with Google",
      onSuccess: responseGoogle,
      onFailure: responseGoogle,
      theme: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_c = GoogleLoginComponent;
/* harmony default export */ __webpack_exports__["default"] = (GoogleLoginComponent);

var _c;

$RefreshReg$(_c, "GoogleLoginComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkNvbXBvbmVudCIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG9rZW5JZCIsInVzZXIiLCJsb2dpbldpdGhHb29nbGUiLCJ0aGVuIiwiZGF0YSIsImF1dGhlbnRpY2F0ZSIsImlzQXV0aCIsInJvbGUiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJHT09HTEVfQ0xJRU5UX0lEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBRS9CLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU1HLE9BQU8sR0FBR0gsUUFBUSxDQUFDRyxPQUF6QjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUFDRCxhQUFPLEVBQVBBO0FBQUQsS0FBYjtBQUVBRSx5RUFBZSxDQUFDRCxJQUFELENBQWYsQ0FBc0JFLElBQXRCLENBQTJCLFVBQUFDLElBQUksRUFBSTtBQUMvQixVQUFJO0FBQ0FDLDBFQUFZLENBQUNELElBQUQsRUFBTyxZQUFNO0FBQ3JCLGNBQUlFLDREQUFNLE1BQU1BLDREQUFNLEdBQUdDLElBQVQsS0FBa0IsQ0FBbEMsRUFBcUM7QUFDakNDLDhEQUFNLENBQUNDLElBQVA7QUFDSCxXQUZELE1BRU87QUFDSEQsOERBQU0sQ0FBQ0MsSUFBUDtBQUNIO0FBQ0osU0FOVyxDQUFaO0FBT0gsT0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNaWixlQUFPLENBQUNDLEdBQVIsQ0FBWVcsS0FBWjtBQUNIO0FBQ0osS0FaRDtBQWFILEdBbEJEOztBQW9CQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsMkJBQ0kscUVBQUMseURBQUQ7QUFDSSxjQUFRLFlBQUtDLHdEQUFMLENBRFo7QUFFSSxnQkFBVSxFQUFDLG1CQUZmO0FBR0ksZUFBUyxFQUFFZixjQUhmO0FBSUksZUFBUyxFQUFFQSxjQUpmO0FBS0ksV0FBSyxFQUFDO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdILENBakNEOztLQUFNRCxvQjtBQW1DU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjIzNjMzZDE3YjkwN2NjMDllYjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgbG9naW5XaXRoR29vZ2xlfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7R09PR0xFX0NMSUVOVF9JRH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IEdvb2dsZUxvZ2luQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgY29uc3QgdG9rZW5JZCA9IHJlc3BvbnNlLnRva2VuSWRcclxuICAgICAgICBjb25zdCB1c2VyID0ge3Rva2VuSWR9XHJcblxyXG4gICAgICAgIGxvZ2luV2l0aEdvb2dsZSh1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2FkbWluYClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17YCR7R09PR0xFX0NMSUVOVF9JRH1gfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVMb2dpbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==