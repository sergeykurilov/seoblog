webpackHotUpdate_N_E("pages/admin/crud/leads",{

/***/ "./actions/form.js":
/*!*************************!*\
  !*** ./actions/form.js ***!
  \*************************/
/*! exports provided: emailContactForm, leadList, removeFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailContactForm", function() { return emailContactForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leadList", function() { return leadList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFormData", function() { return removeFormData; });
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
var removeFormData = function removeFormData(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "remove-form-data"), {
    method: 'DELETE',
    // headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    // },
    body: id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mb3JtLmpzIl0sIm5hbWVzIjpbImVtYWlsQ29udGFjdEZvcm0iLCJkYXRhIiwiZW1haWxFbmRwb2ludCIsImF1dGhvckVtYWlsIiwiQVBJIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxlYWRMaXN0IiwicmVtb3ZlRm9ybURhdGEiLCJpZCIsInRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDdEMsTUFBSUMsYUFBSjs7QUFDQSxNQUFJRCxJQUFJLENBQUNFLFdBQVQsRUFBc0I7QUFDbEJELGlCQUFhLGFBQU1FLDJDQUFOLHlCQUFiO0FBQ0gsR0FGRCxNQUVPO0FBQ0hGLGlCQUFhLGFBQU1FLDJDQUFOLGFBQWI7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixhQUFmLENBQVo7QUFDQSxTQUFPTyx1REFBSyxXQUFJUCxhQUFKLEdBQXFCO0FBQzdCUSxVQUFNLEVBQUUsTUFEcUI7QUFFN0JDLFdBQU8sRUFBRTtBQUNMLGdCQUFVLGtCQURMO0FBRUwsc0JBQWdCO0FBRlgsS0FGb0I7QUFNN0JDLFFBQUksRUFBRUwsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFOdUIsR0FBckIsQ0FBTCxDQVFGWSxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaLENBQUo7QUFBQSxHQVhQLENBQVA7QUFZSCxDQXBCTTtBQXNCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRTFCLFNBQU9SLHVEQUFLLFdBQUlMLDJDQUFKLHFCQUF5QjtBQUNqQ00sVUFBTSxFQUFFO0FBRHlCLEdBQXpCLENBQUwsQ0FHRkcsSUFIRSxDQUdHLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FMRSxXQU1JLFVBQUFDLEdBQUc7QUFBQSxXQUFJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWixDQUFKO0FBQUEsR0FOUCxDQUFQO0FBT0gsQ0FUTTtBQVlBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDekMsU0FBT1gsdURBQUssV0FBSUwsMkNBQUosdUJBQTJCO0FBQ25DTSxVQUFNLEVBQUUsUUFEMkI7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRSxRQUFJLEVBQUVPO0FBUDZCLEdBQTNCLENBQUwsQ0FTRk4sSUFURSxDQVNHLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FYRSxXQVlJLFVBQUFDLEdBQUc7QUFBQSxXQUFJWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWixDQUFKO0FBQUEsR0FaUCxDQUFQO0FBYUgsQ0FkTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2xlYWRzLjc1MjhlOWZiMDUzMTgwMGU2ZTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGVtYWlsQ29udGFjdEZvcm0gPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IGVtYWlsRW5kcG9pbnQ7XHJcbiAgICBpZiAoZGF0YS5hdXRob3JFbWFpbCkge1xyXG4gICAgICAgIGVtYWlsRW5kcG9pbnQgPSBgJHtBUEl9L2NvbnRhY3QtYmxvZy1hdXRob3JgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVtYWlsRW5kcG9pbnQgPSBgJHtBUEl9L2NvbnRhY3RgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbWFpbEVuZHBvaW50KSlcclxuICAgIHJldHVybiBmZXRjaChgJHtlbWFpbEVuZHBvaW50fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlYWRMaXN0ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2dldC1mb3JtLWRhdGFgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGb3JtRGF0YSA9IChpZCwgdG9rZW4pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9cmVtb3ZlLWZvcm0tZGF0YWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBib2R5OiBpZFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9