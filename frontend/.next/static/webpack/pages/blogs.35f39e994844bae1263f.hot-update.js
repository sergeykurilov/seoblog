webpackHotUpdate_N_E("pages/blogs",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN, FB_APP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_APP_ID", function() { return FB_APP_ID; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);


var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API = publicRuntimeConfig.PRODUCTION ? "https://seoblog.com" : "http://localhost:8000/api";
var APP_NAME = publicRuntimeConfig.APP_NAME;
var DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
var FB_APP_ID = publicRuntimeConfig.FB_APP_ID;

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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIl0sIm5hbWVzIjpbImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJBUEkiLCJQUk9EVUNUSU9OIiwiQVBQX05BTUUiLCJET01BSU4iLCJET01BSU5fUFJPRFVDVElPTiIsIkRPTUFJTl9ERVZFTE9QTUVOVCIsIkZCX0FQUF9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O2lCQUM4QkEsa0RBQVMsRTtJQUFoQ0MsbUIsY0FBQUEsbUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHRCxtQkFBbUIsQ0FBQ0UsVUFBcEIsR0FBaUMscUJBQWpDLEdBQXlELDJCQUFyRTtBQUNBLElBQU1DLFFBQVEsR0FBR0gsbUJBQW1CLENBQUNHLFFBQXJDO0FBRUEsSUFBTUMsTUFBTSxHQUFHSixtQkFBbUIsQ0FBQ0UsVUFBcEIsR0FDaEJGLG1CQUFtQixDQUFDSyxpQkFESixHQUVoQkwsbUJBQW1CLENBQUNNLGtCQUZuQjtBQUlBLElBQU1DLFNBQVMsR0FBRVAsbUJBQW1CLENBQUNPLFNBQXJDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLjM1ZjM5ZTk5NDg0NGJhZTEyNjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OID8gXCJodHRwczovL3Nlb2Jsb2cuY29tXCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGlcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01BSU4gPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuICAgID8gcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fUFJPRFVDVElPTlxyXG4gICAgOiBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9ERVZFTE9QTUVOVDtcclxuXHJcbmV4cG9ydCBjb25zdCBGQl9BUFBfSUQgPXB1YmxpY1J1bnRpbWVDb25maWcuRkJfQVBQX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==