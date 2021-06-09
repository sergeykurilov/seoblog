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
      if (data.error) {
        console.log(data.error);
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(data, function () {
          if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/admin");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user");
          }
        });
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pb-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLogin"], {
      clientId: "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",
      buttonText: "Login with Google",
      onSuccess: responseGoogle,
      onFailure: responseGoogle,
      cookiePolicy: 'single_host_origin'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkNvbXBvbmVudCIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG9rZW5JZCIsInVzZXIiLCJsb2dpbldpdGhHb29nbGUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiYXV0aGVudGljYXRlIiwiaXNBdXRoIiwicm9sZSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFFL0IsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDakNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0EsUUFBTUcsT0FBTyxHQUFHSCxRQUFRLENBQUNHLE9BQXpCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHO0FBQUVELGFBQU8sRUFBUEE7QUFBRixLQUFiO0FBRUFFLHlFQUFlLENBQUNELElBQUQsQ0FBZixDQUFzQkUsSUFBdEIsQ0FBMkIsVUFBQUMsSUFBSSxFQUFJO0FBQy9CLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFlO0FBQ1hQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFJLENBQUNDLEtBQWpCO0FBQ0gsT0FGRCxNQUVLO0FBQ0RDLDBFQUFZLENBQUNGLElBQUQsRUFBTyxZQUFNO0FBQ3JCLGNBQUdHLDREQUFNLE1BQU1BLDREQUFNLEdBQUdDLElBQVQsS0FBa0IsQ0FBakMsRUFBbUM7QUFDL0JDLDhEQUFNLENBQUNDLElBQVA7QUFDSCxXQUZELE1BRUs7QUFDREQsOERBQU0sQ0FBQ0MsSUFBUDtBQUNIO0FBQ0osU0FOVyxDQUFaO0FBT0g7QUFDSixLQVpEO0FBYUgsR0FsQkQ7O0FBb0JBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDSSxxRUFBQyw4REFBRDtBQUNJLGNBQVEsRUFBQywwRUFEYjtBQUVJLGdCQUFVLEVBQUMsbUJBRmY7QUFHSSxlQUFTLEVBQUVkLGNBSGY7QUFJSSxlQUFTLEVBQUVBLGNBSmY7QUFLSSxrQkFBWSxFQUFFO0FBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQWpDRDs7S0FBTUQsb0I7QUFtQ1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi41ZWMxNjEzMzUzM2ZlMThlYWU0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtHb29nbGVMb2dpbn0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgbG9naW5XaXRoR29vZ2xlfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBHb29nbGVMb2dpbkNvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIGNvbnN0IHRva2VuSWQgPSByZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHsgdG9rZW5JZCB9XHJcblxyXG4gICAgICAgIGxvZ2luV2l0aEdvb2dsZSh1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYWRtaW5gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCI2NTg5NzczMTA4OTYta25ybDNna2E2NmZsZGg4M2RhbzJyaGdiYmxtZDR1bjkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVMb2dpbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==