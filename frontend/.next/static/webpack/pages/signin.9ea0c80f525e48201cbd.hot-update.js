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

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN, DisqusShortname, FB_APP_ID, OAUTH_CLIENT_SECRET, GOOGLE_CLIENT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisqusShortname", function() { return DisqusShortname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_APP_ID", function() { return FB_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH_CLIENT_SECRET", function() { return OAUTH_CLIENT_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_CLIENT_ID", function() { return GOOGLE_CLIENT_ID; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);


var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API = publicRuntimeConfig.PRODUCTION ? "https://seoblog.com" : "http://localhost:8000/api";
var APP_NAME = publicRuntimeConfig.APP_NAME;
var DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
var DisqusShortname = publicRuntimeConfig.DISQUS_SHORTNAME;
var FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
var OAUTH_CLIENT_SECRET = publicRuntimeConfig.OAUTH_CLIENT_SECRET;
var GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIl0sIm5hbWVzIjpbIkdvb2dsZUxvZ2luQ29tcG9uZW50IiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbklkIiwidXNlciIsImxvZ2luV2l0aEdvb2dsZSIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJhdXRoZW50aWNhdGUiLCJpc0F1dGgiLCJyb2xlIiwiUm91dGVyIiwicHVzaCIsIkdPT0dMRV9DTElFTlRfSUQiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiQVBJIiwiUFJPRFVDVElPTiIsIkFQUF9OQU1FIiwiRE9NQUlOIiwiRE9NQUlOX1BST0RVQ1RJT04iLCJET01BSU5fREVWRUxPUE1FTlQiLCJEaXNxdXNTaG9ydG5hbWUiLCJESVNRVVNfU0hPUlROQU1FIiwiRkJfQVBQX0lEIiwiT0FVVEhfQ0xJRU5UX1NFQ1JFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUUvQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNRyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0csT0FBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUQsYUFBTyxFQUFQQTtBQUFGLEtBQWI7QUFFQUUseUVBQWUsQ0FBQ0QsSUFBRCxDQUFmLENBQXNCRSxJQUF0QixDQUEyQixVQUFBQyxJQUFJLEVBQUk7QUFDL0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWU7QUFDWFAsZUFBTyxDQUFDQyxHQUFSLENBQVlLLElBQUksQ0FBQ0MsS0FBakI7QUFDSCxPQUZELE1BRUs7QUFDREMsMEVBQVksQ0FBQ0YsSUFBRCxFQUFPLFlBQU07QUFDckIsY0FBR0csNERBQU0sTUFBTUEsNERBQU0sR0FBR0MsSUFBVCxLQUFrQixDQUFqQyxFQUFtQztBQUMvQkMsOERBQU0sQ0FBQ0MsSUFBUDtBQUNILFdBRkQsTUFFSztBQUNERCw4REFBTSxDQUFDQyxJQUFQO0FBQ0g7QUFDSixTQU5XLENBQVo7QUFPSDtBQUNKLEtBWkQ7QUFhSCxHQWxCRDs7QUFvQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksY0FBUSxZQUFLQyx3REFBTCxDQURaO0FBRUksZ0JBQVUsRUFBQyxtQkFGZjtBQUdJLGVBQVMsRUFBRWYsY0FIZjtBQUlJLGVBQVMsRUFBRUEsY0FKZjtBQUtJLFdBQUssRUFBQztBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQWpDRDs7S0FBTUQsb0I7QUFtQ1NBLG1GQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O2lCQUM4QmlCLGtEQUFTLEU7SUFBaENDLG1CLGNBQUFBLG1COztBQUVBLElBQU1DLEdBQUcsR0FBR0QsbUJBQW1CLENBQUNFLFVBQXBCLEdBQWlDLHFCQUFqQyxHQUF5RCwyQkFBckU7QUFDQSxJQUFNQyxRQUFRLEdBQUdILG1CQUFtQixDQUFDRyxRQUFyQztBQUVBLElBQU1DLE1BQU0sR0FBR0osbUJBQW1CLENBQUNFLFVBQXBCLEdBQ2hCRixtQkFBbUIsQ0FBQ0ssaUJBREosR0FFaEJMLG1CQUFtQixDQUFDTSxrQkFGbkI7QUFJQSxJQUFNQyxlQUFlLEdBQUdQLG1CQUFtQixDQUFDUSxnQkFBNUM7QUFFQSxJQUFNQyxTQUFTLEdBQUdULG1CQUFtQixDQUFDUyxTQUF0QztBQUNBLElBQU1DLG1CQUFtQixHQUFHVixtQkFBbUIsQ0FBQ1UsbUJBQWhEO0FBQ0EsSUFBTVosZ0JBQWdCLEdBQUdFLG1CQUFtQixDQUFDRixnQkFBN0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjllYTBjODBmNTI1ZTQ4MjAxY2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0dvb2dsZUxvZ2lufSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQge2F1dGhlbnRpY2F0ZSwgaXNBdXRoLCBsb2dpbldpdGhHb29nbGV9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtHT09HTEVfQ0xJRU5UX0lEfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5cclxuY29uc3QgR29vZ2xlTG9naW5Db21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICBjb25zdCB0b2tlbklkID0gcmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IHRva2VuSWQgfVxyXG5cclxuICAgICAgICBsb2dpbldpdGhHb29nbGUodXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2FkbWluYClcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC91c2VyYClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItM1wiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPXtgJHtHT09HTEVfQ0xJRU5UX0lEfWB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW4gd2l0aCBHb29nbGVcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUxvZ2luQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OID8gXCJodHRwczovL3Nlb2Jsb2cuY29tXCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGlcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01BSU4gPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuICAgID8gcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fUFJPRFVDVElPTlxyXG4gICAgOiBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9ERVZFTE9QTUVOVDtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNxdXNTaG9ydG5hbWUgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkRJU1FVU19TSE9SVE5BTUVcclxuXHJcbmV4cG9ydCBjb25zdCBGQl9BUFBfSUQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkZCX0FQUF9JRFxyXG5leHBvcnQgY29uc3QgT0FVVEhfQ0xJRU5UX1NFQ1JFVCA9IHB1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfQ0xJRU5UX1NFQ1JFVFxyXG5leHBvcnQgY29uc3QgR09PR0xFX0NMSUVOVF9JRCA9IHB1YmxpY1J1bnRpbWVDb25maWcuR09PR0xFX0NMSUVOVF9JRFxyXG4iXSwic291cmNlUm9vdCI6IiJ9