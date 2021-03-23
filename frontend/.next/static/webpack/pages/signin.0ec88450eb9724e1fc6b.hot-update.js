webpackHotUpdate_N_E("pages/signin",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var signup = function signup(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/signup"), {
    "method": "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var signin = function signin(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/signin"), {
    "method": "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; //set cookie

var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(key, value, {
      expires: 1
    });
  }
};

var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(key, {
      expires: 1
    });
  }
}; //get cookie


var getCookie = function getCookie(key) {
  if (true) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(key);
  }
}; //signout


var signout = function signout(next) {}; //localstorage


var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
}; //authenticate user by pass data to localstorage and cookie


var authenticate = function authenticate(data, next) {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};
var isAuth = function isAuth() {
  if (true) {
    var checkedCookie = getCookie("token");

    if (checkedCookie) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      }
    }
  } else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInVzZXIiLCJmZXRjaCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsImdldCIsInNpZ25vdXQiLCJuZXh0Iiwic2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJpc0F1dGgiLCJjaGVja2VkQ29va2llIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDNUIsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDMUIsY0FBVSxNQURnQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRmlCO0FBTTFCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBTm9CLEdBQWxCLENBQUwsQ0FRRlEsSUFSRSxDQVFHLFVBQUFDLEdBQUcsRUFBSTtBQUNULFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FYUCxDQUFQO0FBWUgsQ0FiTTtBQWdCQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDZCxJQUFELEVBQVU7QUFDNUIsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDMUIsY0FBVSxNQURnQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRmlCO0FBTTFCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBTm9CLEdBQWxCLENBQUwsQ0FRRlEsSUFSRSxDQVFHLFVBQUFDLEdBQUcsRUFBSTtBQUNULFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FYUCxDQUFQO0FBWUgsQ0FiTSxDLENBZ0JQOztBQUNBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUM5QixZQUFxQjtBQUNqQkMsb0RBQU0sQ0FBQ0MsR0FBUCxDQUFXSCxHQUFYLEVBQWdCQyxLQUFoQixFQUF1QjtBQUNuQkcsYUFBTyxFQUFFO0FBRFUsS0FBdkI7QUFHSDtBQUNKLENBTkQ7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsR0FBRCxFQUFTO0FBQzFCLFlBQXFCO0FBQ2pCRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdBQWQsRUFBbUI7QUFDZkksYUFBTyxFQUFFO0FBRE0sS0FBbkI7QUFHSDtBQUNKLENBTkQsQyxDQU9BOzs7QUFFQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUCxHQUFELEVBQVM7QUFDdkIsWUFBcUI7QUFDbEIsV0FBT0UsZ0RBQU0sQ0FBQ00sR0FBUCxDQUFXUixHQUFYLENBQVA7QUFDRjtBQUNKLENBSkQsQyxDQU1BOzs7QUFFQSxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVUsQ0FFekIsQ0FGRCxDLENBSUE7OztBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1gsR0FBRCxFQUFLQyxLQUFMLEVBQWU7QUFDbkMsWUFBcUI7QUFDakJXLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJiLEdBQXJCLEVBQTBCVixJQUFJLENBQUNDLFNBQUwsQ0FBZVUsS0FBZixDQUExQjtBQUNIO0FBQ0osQ0FKRDs7QUFRQSxJQUFPYSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNkLEdBQUQsRUFBUztBQUNqQyxZQUFxQjtBQUNqQlksZ0JBQVksQ0FBQ0csVUFBYixDQUF3QmYsR0FBeEI7QUFDSDtBQUNKLENBSkQsQyxDQU1BOzs7QUFHTyxJQUFNZ0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPUCxJQUFQLEVBQWdCO0FBQ3hDWCxXQUFTLENBQUMsT0FBRCxFQUFVa0IsSUFBSSxDQUFDQyxLQUFmLENBQVQ7QUFDQVAsaUJBQWUsQ0FBQyxNQUFELEVBQVNNLElBQUksQ0FBQ2pDLElBQWQsQ0FBZjtBQUNBMEIsTUFBSTtBQUNQLENBSk07QUFPQSxJQUFNUyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3hCLFlBQXFCO0FBQ2xCLFFBQU1DLGFBQWEsR0FBR2IsU0FBUyxDQUFDLE9BQUQsQ0FBL0I7O0FBQ0MsUUFBR2EsYUFBSCxFQUFpQjtBQUNiLFVBQUdSLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixNQUFyQixDQUFILEVBQWdDO0FBQzVCLGVBQU8vQixJQUFJLENBQUNnQyxLQUFMLENBQVdWLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0osR0FQRCxNQU9PLEVBRU47QUFDSixDQVhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4wZWM4ODQ1MGViOTcyNGUxZmM2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ251cGAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbmluYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuLy9zZXQgY29va2llXHJcbmNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKGtleSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy9nZXQgY29va2llXHJcblxyXG5jb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICByZXR1cm4gY29va2llLmdldChrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3NpZ25vdXRcclxuXHJcbmNvbnN0IHNpZ25vdXQgPSAobmV4dCkgPT4ge1xyXG4gICAgXHJcbn1cclxuXHJcbi8vbG9jYWxzdG9yYWdlXHJcblxyXG5jb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgIHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYXV0aGVudGljYXRlIHVzZXIgYnkgcGFzcyBkYXRhIHRvIGxvY2Fsc3RvcmFnZSBhbmQgY29va2llXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcbiAgICBzZXRDb29raWUoXCJ0b2tlblwiLCBkYXRhLnRva2VuKVxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKFwidXNlclwiLCBkYXRhLnVzZXIpXHJcbiAgICBuZXh0KClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICBjb25zdCBjaGVja2VkQ29va2llID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuICAgICAgICBpZihjaGVja2VkQ29va2llKXtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==