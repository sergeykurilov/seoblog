webpackHotUpdate_N_E("pages/contact",{

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
var resetPassword = function resetPassword(resetInfo) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/reset-password"), {
    "method": "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      resetInfo: resetInfo
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbImhhbmRsZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzaWdub3V0IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtZXNzYWdlIiwic2lnbnVwIiwidXNlciIsImZldGNoIiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2lnbmluIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJyZXNldEluZm8iLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXQiLCJzZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIm5leHQiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJpc0F1dGgiLCJjaGVja2VkQ29va2llIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDeEMsTUFBR0EsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXZCLEVBQTJCO0FBQ3ZCQyxXQUFPLENBQUMsWUFBTTtBQUNWQyxZQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxnQkFBUSxFQUFFLFNBREY7QUFFUkMsYUFBSyxFQUFFO0FBQ0hD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QUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEdBTlAsQ0FBUDtBQU9ILENBWk0sQyxDQWNQOztBQUdPLElBQU15QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9ILElBQVAsRUFBZ0I7QUFDeENmLFdBQVMsQ0FBQyxPQUFELEVBQVVrQixJQUFJLENBQUNDLEtBQWYsQ0FBVDtBQUNBVCxpQkFBZSxDQUFDLE1BQUQsRUFBU1EsSUFBSSxDQUFDckMsSUFBZCxDQUFmO0FBQ0FrQyxNQUFJO0FBQ1AsQ0FKTTtBQU9BLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDeEIsWUFBcUI7QUFDbEIsUUFBTUMsYUFBYSxHQUFHYixTQUFTLENBQUMsT0FBRCxDQUEvQjs7QUFDQyxRQUFHYSxhQUFILEVBQWlCO0FBQ2IsVUFBR1YsWUFBWSxDQUFDVyxPQUFiLENBQXFCLE1BQXJCLENBQUgsRUFBZ0M7QUFDNUIsZUFBT25DLElBQUksQ0FBQ29DLEtBQUwsQ0FBV1osWUFBWSxDQUFDVyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIO0FBQ0o7QUFDSixHQVBELE1BT08sRUFFTjtBQUNKLENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5jOWMxOWRlM2JiODBhYmZjYjkxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgICBzaWdub3V0KCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NpZ25pblwiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2Vzc2lvbiBpcyBleHBpcmVkIHBsZWFzZSBzaWduIGluXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbnVwYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWduaW5gLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gKGVtYWlsKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9mb2dvdC1wYXNzd29yZGAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IChyZXNldEluZm8pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2V0LXBhc3N3b3JkYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cmVzZXRJbmZvfSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcblxyXG4vL3NldCBjb29raWVcclxuY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vL2dldCBjb29raWVcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICByZXR1cm4gY29va2llLmdldChrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vbG9jYWxzdG9yYWdlXHJcblxyXG5jb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcbn1cclxuLy9zaWdub3V0XHJcblxyXG5cclxuXHJcbmNvbnN0ICByZW1vdmVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gbmV4dCA9PiB7XHJcbiAgICByZW1vdmVDb29raWUoJ3Rva2VuJyk7XHJcbiAgICByZW1vdmVMb2NhbFN0b3JhZ2UoJ3VzZXInKTtcclxuICAgIG5leHQoKTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdub3V0YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2lnbm91dCBzdWNjZXNzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy9hdXRoZW50aWNhdGUgdXNlciBieSBwYXNzIGRhdGEgdG8gbG9jYWxzdG9yYWdlIGFuZCBjb29raWVcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlID0gKGRhdGEsIG5leHQpID0+IHtcclxuICAgIHNldENvb2tpZShcInRva2VuXCIsIGRhdGEudG9rZW4pXHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIsIGRhdGEudXNlcilcclxuICAgIG5leHQoKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzQXV0aCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgIGNvbnN0IGNoZWNrZWRDb29raWUgPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG4gICAgICAgIGlmKGNoZWNrZWRDb29raWUpe1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=