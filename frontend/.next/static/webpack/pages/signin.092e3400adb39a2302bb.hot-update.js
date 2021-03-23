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
}; //signout


var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
};

var Signout = function Signout(next) {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/signout"), {
    method: "GET"
  }).then(function () {
    console.log("Logout Successful");
  })["catch"](function (err) {
    console.log("Error: ".concat(err));
  });
}; //authenticate user by pass data to localstorage and cookie


_c = Signout;
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

var _c;

$RefreshReg$(_c, "Signout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInVzZXIiLCJmZXRjaCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsImdldCIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lnbm91dCIsIm5leHQiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJpc0F1dGgiLCJjaGVja2VkQ29va2llIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDNUIsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDMUIsY0FBVSxNQURnQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRmlCO0FBTTFCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBTm9CLEdBQWxCLENBQUwsQ0FRRlEsSUFSRSxDQVFHLFVBQUFDLEdBQUcsRUFBSTtBQUNULFdBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYs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OztBQUNDLFFBQUdjLGFBQUgsRUFBaUI7QUFDYixVQUFHWCxZQUFZLENBQUNZLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSCxFQUFnQztBQUM1QixlQUFPaEMsSUFBSSxDQUFDaUMsS0FBTCxDQUFXYixZQUFZLENBQUNZLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNKLEdBUEQsTUFPTyxFQUVOO0FBQ0osQ0FYTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMDkyZTM0MDBhZGIzOWEyMzAyYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cCA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdudXBgLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbmluID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ25pbmAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcbi8vc2V0IGNvb2tpZVxyXG5jb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5jb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShrZXksIHtcclxuICAgICAgICAgICAgZXhwaXJlczogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vZ2V0IGNvb2tpZVxyXG5cclxuY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL2xvY2Fsc3RvcmFnZVxyXG5cclxuY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGtleSx2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG4gICAgfVxyXG59XHJcbi8vc2lnbm91dFxyXG5cclxuXHJcblxyXG5jb25zdCAgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcclxuICAgIH1cclxufVxyXG5jb25zdCBTaWdub3V0ID0gKG5leHQpID0+IHtcclxuICAgIHJlbW92ZUNvb2tpZShcInRva2VuXCIpO1xyXG4gICAgcmVtb3ZlTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIG5leHQoKTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdub3V0YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IFN1Y2Nlc3NmdWxcIilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YClcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vL2F1dGhlbnRpY2F0ZSB1c2VyIGJ5IHBhc3MgZGF0YSB0byBsb2NhbHN0b3JhZ2UgYW5kIGNvb2tpZVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAoZGF0YSwgbmV4dCkgPT4ge1xyXG4gICAgc2V0Q29va2llKFwidG9rZW5cIiwgZGF0YS50b2tlbilcclxuICAgIHNldExvY2FsU3RvcmFnZShcInVzZXJcIiwgZGF0YS51c2VyKVxyXG4gICAgbmV4dCgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgY29uc3QgY2hlY2tlZENvb2tpZSA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgICAgICAgaWYoY2hlY2tlZENvb2tpZSl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=