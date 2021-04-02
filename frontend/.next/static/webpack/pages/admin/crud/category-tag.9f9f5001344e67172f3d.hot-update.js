webpackHotUpdate_N_E("pages/admin/crud/category-tag",{

/***/ "./actions/tags.js":
/*!*************************!*\
  !*** ./actions/tags.js ***!
  \*************************/
/*! exports provided: create, getAllTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTags", function() { return getAllTags; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var create = function create(tag, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/tag"), {
    "method": "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer ".concat(token)
    },
    body: JSON.stringify(tag)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getAllTags = function getAllTags() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/tag"), {
    "method": "GET"
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWdzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInRhZyIsInRva2VuIiwiZmV0Y2giLCJBUEkiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxUYWdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNsQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixXQUFlO0FBQ3ZCLGNBQVUsTUFEYTtBQUV2QkMsV0FBTyxFQUFFO0FBQ0wsZ0JBQVUsa0JBREw7QUFFTCxzQkFBZ0Isa0JBRlg7QUFHTCx3Q0FBMkJILEtBQTNCO0FBSEssS0FGYztBQVF2QkksUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsR0FBZjtBQVJpQixHQUFmLENBQUwsQ0FVRlEsSUFWRSxDQVVHLFVBQUFDLEdBQUcsRUFBSTtBQUNULFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0gsR0FaRSxXQWFJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FiUCxDQUFQO0FBY0gsQ0FmTTtBQWtCQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQzVCLFNBQU9aLHVEQUFLLFdBQUlDLDJDQUFKLFdBQWU7QUFDdkIsY0FBVTtBQURhLEdBQWYsQ0FBTCxDQUdGSyxJQUhFLENBR0csVUFBQUMsR0FBRyxFQUFJO0FBQ1QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDSCxHQUxFLFdBTUksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQU5QLENBQVA7QUFPSCxDQVJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvY2F0ZWdvcnktdGFnLjlmOWY1MDAxMzQ0ZTY3MTcyZjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIlxyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAodGFnLCB0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vdGFnYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWBcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YWcpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsVGFncyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3RhZ2AsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=