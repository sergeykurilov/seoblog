webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: userPublicProfile, getProfile, updateProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPublicProfile", function() { return userPublicProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


var userPublicProfile = function userPublicProfile(username) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/").concat(username), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getProfile = function getProfile(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/").concat(token), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateProfile = function updateProfile(user, username, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/profile/").concat(username), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: user
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy91c2VyLmpzIl0sIm5hbWVzIjpbInVzZXJQdWJsaWNQcm9maWxlIiwidXNlcm5hbWUiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldFByb2ZpbGUiLCJ0b2tlbiIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VyIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLFFBQVEsRUFBSTtBQUN6QyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixtQkFBZ0JGLFFBQWhCLEdBQTRCO0FBQ3BDRyxVQUFNLEVBQUUsS0FENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUU7QUFESDtBQUYyQixHQUE1QixDQUFMLENBTUZDLElBTkUsQ0FNRyxVQUFBQyxRQUFRLEVBQUk7QUFDZCxXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILEdBUkUsV0FTSSxVQUFBQyxHQUFHO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEdBVFAsQ0FBUDtBQVVILENBWE07QUFhQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDakMsU0FBT1osdURBQUssV0FBSUMsMkNBQUosbUJBQWdCVyxLQUFoQixHQUF5QjtBQUNqQ1YsVUFBTSxFQUFFLEtBRHlCO0FBRWpDQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFO0FBREg7QUFGd0IsR0FBekIsQ0FBTCxDQU1GQyxJQU5FLENBTUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQVJFLFdBU0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQVRQLENBQVA7QUFVSCxDQVhNO0FBY0EsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQU9mLFFBQVAsRUFBaUJhLEtBQWpCLEVBQTJCO0FBQ3BELFNBQU9aLHVEQUFLLFdBQUlDLDJDQUFKLHNCQUFtQkYsUUFBbkIsR0FBK0I7QUFDdkNHLFVBQU0sRUFBRSxLQUQrQjtBQUV2Q0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMVyxtQkFBYSxtQkFBWUgsS0FBWjtBQUZSLEtBRjhCO0FBTXZDSSxRQUFJLEVBQUVGO0FBTmlDLEdBQS9CLENBQUwsQ0FRRlQsSUFSRSxDQVFHLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FYUCxDQUFQO0FBWUgsQ0FiTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uODU4YmYwYzBmMjQ0NDYyOTQ1NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclB1YmxpY1Byb2ZpbGUgPSB1c2VybmFtZSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS91c2VyLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS91c2VyLyR7dG9rZW59YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGUgPSAodXNlciwgdXNlcm5hbWUsIHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9wcm9maWxlLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHVzZXJcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=