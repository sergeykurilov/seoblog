webpackHotUpdate_N_E("pages/blogs",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: handleResponse, signup, signin, forgotPassword, resetPassword, getCookie, signout, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var handleResponse = function handleResponse(response) {
  if (response.status === 401) {
    signout(function () {
      Router.push({
        pathname: "/signin",
        query: {
          message: "Your session is expired please sign in"
        }
      });
    });
  } else {
    return false;
  }
};
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
};
var forgotPassword = function forgotPassword(email) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/fogot-password"), {
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
var resetPassword = function resetPassword(newPassword, resetPasswordLink) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/reset-password"), {
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

var signout = function signout(next) {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/signout"), {
    method: 'GET'
  }).then(function (response) {
    console.log('signout success');
  })["catch"](function (err) {
    return console.log(err);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbImhhbmRsZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzaWdub3V0IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtZXNzYWdlIiwic2lnbnVwIiwidXNlciIsImZldGNoIiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2lnbmluIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInJlc2V0UGFzc3dvcmRMaW5rIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0Iiwic2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJuZXh0IiwibWV0aG9kIiwiYXV0aGVudGljYXRlIiwiZGF0YSIsInRva2VuIiwiaXNBdXRoIiwiY2hlY2tlZENvb2tpZSIsImdldEl0ZW0iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3hDLE1BQUdBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixHQUF2QixFQUEyQjtBQUN2QkMsV0FBTyxDQUFDLFlBQU07QUFDVkMsWUFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsZ0JBQVEsRUFBRSxTQURG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QSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FOUCxDQUFQO0FBT0gsQ0FaTSxDLENBY1A7O0FBR08sSUFBTTBCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0gsSUFBUCxFQUFnQjtBQUN4Q2YsV0FBUyxDQUFDLE9BQUQsRUFBVWtCLElBQUksQ0FBQ0MsS0FBZixDQUFUO0FBQ0FULGlCQUFlLENBQUMsTUFBRCxFQUFTUSxJQUFJLENBQUN0QyxJQUFkLENBQWY7QUFDQW1DLE1BQUk7QUFDUCxDQUpNO0FBT0EsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUN4QixZQUFxQjtBQUNsQixRQUFNQyxhQUFhLEdBQUdiLFNBQVMsQ0FBQyxPQUFELENBQS9COztBQUNDLFFBQUdhLGFBQUgsRUFBaUI7QUFDYixVQUFHVixZQUFZLENBQUNXLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSCxFQUFnQztBQUM1QixlQUFPcEMsSUFBSSxDQUFDcUMsS0FBTCxDQUFXWixZQUFZLENBQUNXLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNKLEdBUEQsTUFPTyxFQUVOO0FBQ0osQ0FYTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy5hZDBjYWQ5YWQ0Y2FlOTY0Mjk3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgICBzaWdub3V0KCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NpZ25pblwiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2Vzc2lvbiBpcyBleHBpcmVkIHBsZWFzZSBzaWduIGluXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbnVwYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWduaW5gLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9mb2dvdC1wYXNzd29yZGAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IChuZXdQYXNzd29yZCwgcmVzZXRQYXNzd29yZExpbmspID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2V0LXBhc3N3b3JkYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuXHJcbi8vc2V0IGNvb2tpZVxyXG5jb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5jb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShrZXksIHtcclxuICAgICAgICAgICAgZXhwaXJlczogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vZ2V0IGNvb2tpZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgIHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9sb2NhbHN0b3JhZ2VcclxuXHJcbmNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICAgIH1cclxufVxyXG4vL3NpZ25vdXRcclxuXHJcblxyXG5cclxuY29uc3QgIHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNpZ25vdXQgPSBuZXh0ID0+IHtcclxuICAgIHJlbW92ZUNvb2tpZSgndG9rZW4nKTtcclxuICAgIHJlbW92ZUxvY2FsU3RvcmFnZSgndXNlcicpO1xyXG4gICAgbmV4dCgpO1xyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ25vdXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWdub3V0IHN1Y2Nlc3MnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vL2F1dGhlbnRpY2F0ZSB1c2VyIGJ5IHBhc3MgZGF0YSB0byBsb2NhbHN0b3JhZ2UgYW5kIGNvb2tpZVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAoZGF0YSwgbmV4dCkgPT4ge1xyXG4gICAgc2V0Q29va2llKFwidG9rZW5cIiwgZGF0YS50b2tlbilcclxuICAgIHNldExvY2FsU3RvcmFnZShcInVzZXJcIiwgZGF0YS51c2VyKVxyXG4gICAgbmV4dCgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgY29uc3QgY2hlY2tlZENvb2tpZSA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgICAgICAgaWYoY2hlY2tlZENvb2tpZSl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==