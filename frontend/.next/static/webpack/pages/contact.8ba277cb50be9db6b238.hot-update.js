webpackHotUpdate_N_E("pages/contact",{

/***/ "./actions/form.js":
/*!*************************!*\
  !*** ./actions/form.js ***!
  \*************************/
/*! exports provided: emailContactForm, leadList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailContactForm", function() { return emailContactForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leadList", function() { return leadList; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


var emailContactForm = function emailContactForm(data) {
  var emailEndpoint;

  if (data.authorEmail) {
    emailEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/contact-blog-author");
  } else {
    emailEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/contact");
  }

  console.log(JSON.stringify(emailEndpoint));
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(emailEndpoint), {
    method: 'POST',
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var leadList = function leadList() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/get-form-data"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mb3JtLmpzIl0sIm5hbWVzIjpbImVtYWlsQ29udGFjdEZvcm0iLCJkYXRhIiwiZW1haWxFbmRwb2ludCIsImF1dGhvckVtYWlsIiwiQVBJIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxlYWRMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3RDLE1BQUlDLGFBQUo7O0FBQ0EsTUFBSUQsSUFBSSxDQUFDRSxXQUFULEVBQXNCO0FBQ2xCRCxpQkFBYSxhQUFNRSwyQ0FBTix5QkFBYjtBQUNILEdBRkQsTUFFTztBQUNIRixpQkFBYSxhQUFNRSwyQ0FBTixhQUFiO0FBQ0g7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sYUFBZixDQUFaO0FBQ0EsU0FBT08sdURBQUssV0FBSVAsYUFBSixHQUFxQjtBQUM3QlEsVUFBTSxFQUFFLE1BRHFCO0FBRTdCQyxXQUFPLEVBQUU7QUFDTCxnQkFBVSxrQkFETDtBQUVMLHNCQUFnQjtBQUZYLEtBRm9CO0FBTTdCQyxRQUFJLEVBQUVMLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBTnVCLEdBQXJCLENBQUwsQ0FRRlksSUFSRSxDQVFHLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWixDQUFKO0FBQUEsR0FYUCxDQUFQO0FBWUgsQ0FwQk07QUFzQkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUUxQixTQUFPUix1REFBSyxXQUFJTCwyQ0FBSixxQkFBeUI7QUFDakNNLFVBQU0sRUFBRTtBQUR5QixHQUF6QixDQUFMLENBR0ZHLElBSEUsQ0FHRyxVQUFBQyxRQUFRLEVBQUk7QUFDZCxXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILEdBTEUsV0FNSSxVQUFBQyxHQUFHO0FBQUEsV0FBSVgsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVosQ0FBSjtBQUFBLEdBTlAsQ0FBUDtBQU9ILENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC44YmEyNzdjYjUwYmU5ZGI2YjIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbENvbnRhY3RGb3JtID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBlbWFpbEVuZHBvaW50O1xyXG4gICAgaWYgKGRhdGEuYXV0aG9yRW1haWwpIHtcclxuICAgICAgICBlbWFpbEVuZHBvaW50ID0gYCR7QVBJfS9jb250YWN0LWJsb2ctYXV0aG9yYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbWFpbEVuZHBvaW50ID0gYCR7QVBJfS9jb250YWN0YFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW1haWxFbmRwb2ludCkpXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7ZW1haWxFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWFkTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9nZXQtZm9ybS1kYXRhYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==