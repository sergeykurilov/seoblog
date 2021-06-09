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
      render: function render(renderProps) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: renderProps.onClick,
          disabled: renderProps.disabled,
          children: "This is my custom Google button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkNvbXBvbmVudCIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG9rZW5JZCIsInVzZXIiLCJsb2dpbldpdGhHb29nbGUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiYXV0aGVudGljYXRlIiwiaXNBdXRoIiwicm9sZSIsIlJvdXRlciIsInB1c2giLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUUvQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNRyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0csT0FBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUQsYUFBTyxFQUFQQTtBQUFGLEtBQWI7QUFFQUUseUVBQWUsQ0FBQ0QsSUFBRCxDQUFmLENBQXNCRSxJQUF0QixDQUEyQixVQUFBQyxJQUFJLEVBQUk7QUFDL0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWU7QUFDWFAsZUFBTyxDQUFDQyxHQUFSLENBQVlLLElBQUksQ0FBQ0MsS0FBakI7QUFDSCxPQUZELE1BRUs7QUFDREMsMEVBQVksQ0FBQ0YsSUFBRCxFQUFPLFlBQU07QUFDckIsY0FBR0csNERBQU0sTUFBTUEsNERBQU0sR0FBR0MsSUFBVCxLQUFrQixDQUFqQyxFQUFtQztBQUMvQkMsOERBQU0sQ0FBQ0MsSUFBUDtBQUNILFdBRkQsTUFFSztBQUNERCw4REFBTSxDQUFDQyxJQUFQO0FBQ0g7QUFDSixTQU5XLENBQVo7QUFPSDtBQUNKLEtBWkQ7QUFhSCxHQWxCRDs7QUFvQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksY0FBUSxFQUFDLDBFQURiO0FBRUksWUFBTSxFQUFFLGdCQUFBQyxXQUFXO0FBQUEsNEJBQ2Y7QUFBUSxpQkFBTyxFQUFFQSxXQUFXLENBQUNDLE9BQTdCO0FBQXNDLGtCQUFRLEVBQUVELFdBQVcsQ0FBQ0UsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUZ2QjtBQU1JLGdCQUFVLEVBQUMsbUJBTmY7QUFPSSxlQUFTLEVBQUVqQixjQVBmO0FBUUksZUFBUyxFQUFFQSxjQVJmO0FBU0ksa0JBQVksRUFBRTtBQVRsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FyQ0Q7O0tBQU1ELG9CO0FBdUNTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMDg1NzY3OWRiOThlYzA1ZDhjMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7R29vZ2xlTG9naW59IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCB7YXV0aGVudGljYXRlLCBpc0F1dGgsIGxvZ2luV2l0aEdvb2dsZX0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgR29vZ2xlTG9naW5Db21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICBjb25zdCB0b2tlbklkID0gcmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IHRva2VuSWQgfVxyXG5cclxuICAgICAgICBsb2dpbldpdGhHb29nbGUodXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2FkbWluYClcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC91c2VyYClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItM1wiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPVwiNjU4OTc3MzEwODk2LWtucmwzZ2thNjZmbGRoODNkYW8ycmhnYmJsbWQ0dW45LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfT5UaGlzIGlzIG15IGN1c3RvbSBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHdpdGggR29vZ2xlXCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVMb2dpbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==