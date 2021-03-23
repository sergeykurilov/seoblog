webpackHotUpdate_N_E("pages/signin",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, Signout, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signout", function() { return Signout; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInVzZXIiLCJmZXRjaCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsImdldCIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2lnbm91dCIsIm5leHQiLCJtZXRob2QiLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJpc0F1dGgiLCJjaGVja2VkQ29va2llIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM1QixTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixjQUFrQjtBQUMxQixjQUFVLE1BRGdCO0FBRTFCQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCO0FBRlgsS0FGaUI7QUFNMUJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFOb0IsR0FBbEIsQ0FBTCxDQVFGUSxJQVJFLENBUUcsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixD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QUEvQjs7QUFDQyxRQUFHYyxhQUFILEVBQWlCO0FBQ2IsVUFBR1gsWUFBWSxDQUFDWSxPQUFiLENBQXFCLE1BQXJCLENBQUgsRUFBZ0M7QUFDNUIsZUFBT2hDLElBQUksQ0FBQ2lDLEtBQUwsQ0FBV2IsWUFBWSxDQUFDWSxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIO0FBQ0o7QUFDSixHQVBELE1BT08sRUFFTjtBQUNKLENBWE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjFlODVlNzQ5Y2RhYWRlOWE4YzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIlxyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbnVwYCwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWduaW5gLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG4vL3NldCBjb29raWVcclxuY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vL2dldCBjb29raWVcclxuXHJcbmNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgIHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9sb2NhbHN0b3JhZ2VcclxuXHJcbmNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICAgIH1cclxufVxyXG4vL3NpZ25vdXRcclxuXHJcblxyXG5cclxuY29uc3QgIHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNpZ25vdXQgPSAobmV4dCkgPT4ge1xyXG4gICAgcmVtb3ZlQ29va2llKFwidG9rZW5cIik7XHJcbiAgICByZW1vdmVMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpO1xyXG4gICAgbmV4dCgpO1xyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ25vdXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dvdXQgU3VjY2Vzc2Z1bFwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8vYXV0aGVudGljYXRlIHVzZXIgYnkgcGFzcyBkYXRhIHRvIGxvY2Fsc3RvcmFnZSBhbmQgY29va2llXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcbiAgICBzZXRDb29raWUoXCJ0b2tlblwiLCBkYXRhLnRva2VuKVxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKFwidXNlclwiLCBkYXRhLnVzZXIpXHJcbiAgICBuZXh0KClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICBjb25zdCBjaGVja2VkQ29va2llID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuICAgICAgICBpZihjaGVja2VkQ29va2llKXtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==