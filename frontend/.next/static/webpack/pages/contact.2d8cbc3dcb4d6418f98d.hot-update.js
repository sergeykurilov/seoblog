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
var leadList = function leadList(username) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/").concat(username, "/get-form-data"), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mb3JtLmpzIl0sIm5hbWVzIjpbImVtYWlsQ29udGFjdEZvcm0iLCJkYXRhIiwiZW1haWxFbmRwb2ludCIsImF1dGhvckVtYWlsIiwiQVBJIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxlYWRMaXN0IiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDdEMsTUFBSUMsYUFBSjs7QUFDQSxNQUFJRCxJQUFJLENBQUNFLFdBQVQsRUFBc0I7QUFDbEJELGlCQUFhLGFBQU1FLDJDQUFOLHlCQUFiO0FBQ0gsR0FGRCxNQUVPO0FBQ0hGLGlCQUFhLGFBQU1FLDJDQUFOLGFBQWI7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixhQUFmLENBQVo7QUFDQSxTQUFPTyx1REFBSyxXQUFJUCxhQUFKLEdBQXFCO0FBQzdCUSxVQUFNLEVBQUUsTUFEcUI7QUFFN0JDLFdBQU8sRUFBRTtBQUNMLGdCQUFVLGtCQURMO0FBRUwsc0JBQWdCO0FBRlgsS0FGb0I7QUFNN0JDLFFBQUksRUFBRUwsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFOdUIsR0FBckIsQ0FBTCxDQVFGWSxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaLENBQUo7QUFBQSxHQVhQLENBQVA7QUFZSCxDQXBCTTtBQXNCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQWM7QUFFbEMsU0FBT1QsdURBQUssV0FBSUwsMkNBQUosY0FBV2MsUUFBWCxxQkFBcUM7QUFDN0NSLFVBQU0sRUFBRTtBQURxQyxHQUFyQyxDQUFMLENBR0ZHLElBSEUsQ0FHRyxVQUFBQyxRQUFRLEVBQUk7QUFDZCxXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILEdBTEUsV0FNSSxVQUFBQyxHQUFHO0FBQUEsV0FBSVgsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVosQ0FBSjtBQUFBLEdBTlAsQ0FBUDtBQU9ILENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC4yZDhjYmMzZGNiNGQ2NDE4Zjk4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbENvbnRhY3RGb3JtID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBlbWFpbEVuZHBvaW50O1xyXG4gICAgaWYgKGRhdGEuYXV0aG9yRW1haWwpIHtcclxuICAgICAgICBlbWFpbEVuZHBvaW50ID0gYCR7QVBJfS9jb250YWN0LWJsb2ctYXV0aG9yYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbWFpbEVuZHBvaW50ID0gYCR7QVBJfS9jb250YWN0YFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW1haWxFbmRwb2ludCkpXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7ZW1haWxFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWFkTGlzdCA9ICh1c2VybmFtZSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9LyR7dXNlcm5hbWV9L2dldC1mb3JtLWRhdGFgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9