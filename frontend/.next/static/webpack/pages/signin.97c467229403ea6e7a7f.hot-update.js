webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SigninForm.jsx":
/*!***********************************!*\
  !*** ./components/SigninForm.jsx ***!
  \***********************************/
/*! exports provided: SiginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiginForm", function() { return SiginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GoogleLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoogleLogin */ "./components/GoogleLogin.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\SigninForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SiginForm = function SiginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "email": "kurilovsergey15@gmail.com",
    "password": "q92e01kl",
    "error": false,
    "loading": false,
    "message": "",
    "showform": true
  }),
      value = _useState[0],
      setValue = _useState[1];

  var email = value.email,
      password = value.password,
      error = value.error,
      loading = value.loading,
      showform = value.showform,
      message = value.message;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
  });

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log("Handle Submit")
    // console.table({...value})

    setValue(_objectSpread(_objectSpread({}, value), {}, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signin"])(user).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error
        }));
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(res, function () {
          if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/admin");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user");
          }
        }); //save user token to cookie
        //save user info to localstorage
        //authenticate user
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: "Loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 42
    }, _this) : "";
  };

  var onChangeHandler = function onChangeHandler(name) {
    return function (e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var Form = function Form() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col  bg-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid place-items-center mx-2 my-20 sm:my-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12\r px-6 py-10 sm:px-10 sm:py-6\r bg-white rounded-lg shadow-md lg:shadow-lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-center font-semibold pb-3 text-3xl lg:text-4xl text-gray-800",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex align-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLogin__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block text-xs font-semibold text-gray-600 uppercase",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "email",
              type: "email",
              name: "email",
              placeholder: "e-mail address",
              autoComplete: "email",
              value: value.email,
              onChange: onChangeHandler("email"),
              className: "block w-full py-3 px-1 mt-2\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              className: "block mt-2 text-xs font-semibold text-gray-600 uppercase",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "password",
              type: "password",
              name: "password",
              placeholder: "password",
              autoComplete: "current-password",
              onChange: onChangeHandler("password"),
              value: value.password,
              className: "block w-full py-3 px-1 mt-2 mb-4\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "w-full py-3 mt-10 bg-indigo-700 rounded-sm\r font-medium text-white uppercase\r focus:outline-none hover:bg-indigo-900 hover:shadow-none",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/auth/password/forgot",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  style: {
                    display: "block"
                  },
                  className: "flex-2 underline",
                  children: "Forgot Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && Form()]
  }, void 0, true);
};

_s(SiginForm, "jP+X4vLa0fxxfw1FPcMzJ/ZlREY=");

_c = SiginForm;

var _c;

$RefreshReg$(_c, "SiginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWdpbkZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwic2hvd2Zvcm0iLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwicmVzIiwiYXV0aGVudGljYXRlIiwicm9sZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJvbkNoYW5nZUhhbmRsZXIiLCJuYW1lIiwidGFyZ2V0IiwiRm9ybSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQztBQUMvQixhQUFTLDJCQURzQjtBQUUvQixnQkFBWSxVQUZtQjtBQUcvQixhQUFTLEtBSHNCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxFQUxvQjtBQU0vQixnQkFBWTtBQU5tQixHQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUFBLE1BVXBCQyxLQVZvQixHQVVrQ0YsS0FWbEMsQ0FVcEJFLEtBVm9CO0FBQUEsTUFVYkMsUUFWYSxHQVVrQ0gsS0FWbEMsQ0FVYkcsUUFWYTtBQUFBLE1BVUhDLEtBVkcsR0FVa0NKLEtBVmxDLENBVUhJLEtBVkc7QUFBQSxNQVVJQyxPQVZKLEdBVWtDTCxLQVZsQyxDQVVJSyxPQVZKO0FBQUEsTUFVYUMsUUFWYixHQVVrQ04sS0FWbEMsQ0FVYU0sUUFWYjtBQUFBLE1BVXVCQyxP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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBNERILEdBN0REOztBQStEQSxzQkFDSTtBQUFBLGVBQ0tQLFdBQVcsRUFEaEIsRUFFS0UsV0FBVyxFQUZoQixFQUdLRCxTQUFTLEVBSGQsRUFLS2hCLFFBQVEsSUFBSXFCLElBQUksRUFMckI7QUFBQSxrQkFESjtBQVdILENBaklNOztHQUFNN0IsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uOTdjNDY3MjI5NDAzZWE2ZTdhN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2F1dGhlbnRpY2F0ZSwgaXNBdXRoLCBzaWduaW4sIHNpZ251cH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdvb2dsZUxvZ2luQ29tcG9uZW50IGZyb20gXCIuL0dvb2dsZUxvZ2luXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnaW5Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIHNob3dmb3JtLCBtZXNzYWdlfSA9IHZhbHVlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc0F1dGgoKSAmJiBSb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge2VtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBzaWduaW4odXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKHJlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9hZG1pbmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgaW5mbyB0byBsb2NhbHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAvL2F1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLi48L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogXCJcIilcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj57bWVzc2FnZX08L2Rpdj4gOiBcIlwiKVxyXG5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgYmctZ3JheS0xMDBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG14LTIgbXktMjAgc206bXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBwLTEyIHNtOnctOC8xMiBtZDp3LTYvMTIgbGc6dy01LzEyIDJ4bDp3LTQvMTJcclxuICAgICAgICAgICAgcHgtNiBweS0xMCBzbTpweC0xMCBzbTpweS02XHJcbiAgICAgICAgICAgIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIGxnOnNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBwYi0zIHRleHQtM3hsIGxnOnRleHQtNHhsIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpbkNvbXBvbmVudC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHVwcGVyY2FzZVwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZS1tYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIHB4LTEgbXQtMlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTMgcHgtMSBtdC0yIG1iLTRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIG10LTEwIGJnLWluZGlnby03MDAgcm91bmRlZC1zbVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby05MDAgaG92ZXI6c2hhZG93LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBzbTpmbGV4LXdyYXAgbXQtOCBzbTptYi00IHRleHQtc20gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcGFzc3dvcmQvZm9yZ290XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0yIHVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcblxyXG4gICAgICAgICAgICB7c2hvd2Zvcm0gJiYgRm9ybSgpfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==