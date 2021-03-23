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
}; //localstorage


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInVzZXIiLCJmZXRjaCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsImdldCIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlIiwiZGF0YSIsIm5leHQiLCJ0b2tlbiIsImlzQXV0aCIsImNoZWNrZWRDb29raWUiLCJnZXRJdGVtIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM1QixTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixjQUFrQjtBQUMxQixjQUFVLE1BRGdCO0FBRTFCQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCO0FBRlgsS0FGaUI7QUFNMUJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFOb0IsR0FBbEIsQ0FBTCxDQVFGUSxJQVJFLENBUUcsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQVhQLENBQVA7QUFZSCxDQWJNO0FBZ0JBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNkLElBQUQsRUFBVTtBQUM1QixTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixjQUFrQjtBQUMxQixjQUFVLE1BRGdCO0FBRTFCQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCO0FBRlgsS0FGaUI7QUFNMUJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFOb0IsR0FBbEIsQ0FBTCxDQVFGUSxJQVJFLENBUUcsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQVhQLENBQVA7QUFZSCxDQWJNLEMsQ0FnQlA7O0FBQ0EsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzlCLFlBQXFCO0FBQ2pCQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CRyxhQUFPLEVBQUU7QUFEVSxLQUF2QjtBQUdIO0FBQ0osQ0FORDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxHQUFELEVBQVM7QUFDMUIsWUFBcUI7QUFDakJFLG9EQUFNLENBQUNJLE1BQVAsQ0FBY04sR0FBZCxFQUFtQjtBQUNmSSxhQUFPLEVBQUU7QUFETSxLQUFuQjtBQUdIO0FBQ0osQ0FORCxDLENBT0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNQLEdBQUQsRUFBUztBQUN2QixZQUFxQjtBQUNsQixXQUFPRSxnREFBTSxDQUFDTSxHQUFQLENBQVdSLEdBQVgsQ0FBUDtBQUNGO0FBQ0osQ0FKRCxDLENBTUE7OztBQUVBLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1QsR0FBRCxFQUFLQyxLQUFMLEVBQWU7QUFDbkMsWUFBcUI7QUFDakJTLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJYLEdBQXJCLEVBQTBCVixJQUFJLENBQUNDLFNBQUwsQ0FBZVUsS0FBZixDQUExQjtBQUNIO0FBQ0osQ0FKRDs7QUFRQSxJQUFPVyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNaLEdBQUQsRUFBUztBQUNqQyxZQUFxQjtBQUNqQlUsZ0JBQVksQ0FBQ0csVUFBYixDQUF3QmIsR0FBeEI7QUFDSDtBQUNKLENBSkQsQyxDQU1BOzs7QUFHTyxJQUFNYyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDeENqQixXQUFTLENBQUMsT0FBRCxFQUFVZ0IsSUFBSSxDQUFDRSxLQUFmLENBQVQ7QUFDQVIsaUJBQWUsQ0FBQyxNQUFELEVBQVNNLElBQUksQ0FBQy9CLElBQWQsQ0FBZjtBQUNBZ0MsTUFBSTtBQUNQLENBSk07QUFPQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3hCLFlBQXFCO0FBQ2xCLFFBQU1DLGFBQWEsR0FBR1osU0FBUyxDQUFDLE9BQUQsQ0FBL0I7O0FBQ0MsUUFBR1ksYUFBSCxFQUFpQjtBQUNiLFVBQUdULFlBQVksQ0FBQ1UsT0FBYixDQUFxQixNQUFyQixDQUFILEVBQWdDO0FBQzVCLGVBQU85QixJQUFJLENBQUMrQixLQUFMLENBQVdYLFlBQVksQ0FBQ1UsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0osR0FQRCxNQU9PLEVBRU47QUFDSixDQVhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5hZTExZmU3YWIzOTJiMjZmZDE0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ251cGAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbmluYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuLy9zZXQgY29va2llXHJcbmNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKGtleSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy9nZXQgY29va2llXHJcblxyXG5jb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICByZXR1cm4gY29va2llLmdldChrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2xvY2Fsc3RvcmFnZVxyXG5cclxuY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGtleSx2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0ICByZW1vdmVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2F1dGhlbnRpY2F0ZSB1c2VyIGJ5IHBhc3MgZGF0YSB0byBsb2NhbHN0b3JhZ2UgYW5kIGNvb2tpZVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAoZGF0YSwgbmV4dCkgPT4ge1xyXG4gICAgc2V0Q29va2llKFwidG9rZW5cIiwgZGF0YS50b2tlbilcclxuICAgIHNldExvY2FsU3RvcmFnZShcInVzZXJcIiwgZGF0YS51c2VyKVxyXG4gICAgbmV4dCgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgY29uc3QgY2hlY2tlZENvb2tpZSA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgICAgICAgaWYoY2hlY2tlZENvb2tpZSl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=