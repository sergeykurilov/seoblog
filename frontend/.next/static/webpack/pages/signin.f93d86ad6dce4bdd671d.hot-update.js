webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignupForm.jsx":
/*!***********************************!*\
  !*** ./components/SignupForm.jsx ***!
  \***********************************/
/*! exports provided: SigupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigupForm", function() { return SigupForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GoogleLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoogleLogin */ "./components/GoogleLogin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "E:\\seoblog\\frontend\\components\\SignupForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SigupForm = function SigupForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "",
    "email": "",
    "password": "",
    "error": false,
    "loading": false,
    "message": "",
    "showform": true
  }),
      value = _useState[0],
      setValue = _useState[1];

  var name = value.name,
      email = value.email,
      password = value.password,
      error = value.error,
      loading = value.loading,
      showform = value.showform,
      message = value.message;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log("Handle Submit")
    // console.table({...value})

    setValue(_objectSpread(_objectSpread({}, value), {}, {
      loading: true,
      error: false
    }));
    var user = {
      name: name,
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["preSignup"])(user).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          loading: false,
          error: false,
          name: "",
          senderEmail: "",
          password: "",
          showform: false,
          message: res.message
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: "Loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 65,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex align-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLogin__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "block text-xs font-semibold text-gray-600 uppercase",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "email",
                type: "email",
                name: "email",
                placeholder: "Your name",
                autoComplete: "email",
                value: value.name,
                onChange: onChangeHandler("name"),
                className: "block w-full py-3 px-1 mt-2\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                className: "block text-xs font-semibold text-gray-600 uppercase",
                children: "E-mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
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
                lineNumber: 87,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                className: "block mt-2 text-xs font-semibold text-gray-600 uppercase",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
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
                lineNumber: 100,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full py-3 mt-10 bg-indigo-700 rounded-sm\r font-medium text-white uppercase\r focus:outline-none hover:bg-indigo-900 hover:shadow-none",
                children: "Sign up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("name"),
        placeholder: "your name",
        value: name,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("email"),
        placeholder: "your email",
        value: email,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("password"),
        placeholder: "your password",
        value: password,
        type: "password",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-primary",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && Form()]
  }, void 0, true);
};

_s(SigupForm, "Hnhk/2bf6aWhLvAv4akffOuUtZI=");

_c = SigupForm;

var _c;

$RefreshReg$(_c, "SigupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWd1cEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJwcmVTaWdudXAiLCJ0aGVuIiwicmVzIiwic2VuZGVyRW1haWwiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwiRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxFQUZzQjtBQUcvQixnQkFBWSxFQUhtQjtBQUkvQixhQUFTLEtBSnNCO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsZUFBVyxFQU5vQjtBQU8vQixnQkFBWTtBQVBtQixHQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUFBLE1BV3BCQyxJQVhvQixHQVd3Q0YsS0FYeEMsQ0FXcEJFLElBWG9CO0FBQUEsTUFXZEMsS0FYYyxHQVd3Q0gsS0FYeEMsQ0FXZEcsS0FYYztBQUFBLE1BV1BDLFFBWE8sR0FXd0NKLEtBWHhDLENBV1BJLFFBWE87QUFBQSxNQVdHQyxLQVhILEdBV3dDTCxLQVh4QyxDQVdHSyxLQVhIO0FBQUEsTUFXVUMsT0FYVixHQVd3Q04sS0FYeEMsQ0FXVU0sT0FYVjtBQUFBLE1BV21CQyxRQVhuQixHQVd3Q1AsS0FYeEMsQ0FXbUJPLFFBWG5CO0FBQUEsTUFXNkJDLE9BWDdCLEdBV3dDUixLQVh4QyxDQVc2QlEsT0FYN0I7O0FBYTNCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGLEdBRHdCLENBRXhCO0FBQ0E7O0FBQ0FWLFlBQVEsaUNBQUtELEtBQUw7QUFBWU0sYUFBTyxFQUFFLElBQXJCO0FBQTJCRCxXQUFLLEVBQUU7QUFBbEMsT0FBUjtBQUNBLFFBQU1PLElBQUksR0FBRztBQUFDVixVQUFJLEVBQUpBLElBQUQ7QUFBT0MsV0FBSyxFQUFMQSxLQUFQO0FBQWNDLGNBQVEsRUFBUkE7QUFBZCxLQUFiO0FBQ0FTLG1FQUFTLENBQUNELElBQUQsQ0FBVCxDQUNLRSxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsVUFBSUEsR0FBRyxDQUFDVixLQUFSLEVBQWU7QUFDWEosZ0JBQVEsaUNBQUtELEtBQUw7QUFBWUssZUFBSyxFQUFFVSxHQUFHLENBQUNWO0FBQXZCLFdBQVI7QUFDSCxPQUZELE1BRU87QUFDSEosZ0JBQVEsaUNBQ0RELEtBREM7QUFFSk0saUJBQU8sRUFBRSxLQUZMO0FBR0pELGVBQUssRUFBRSxLQUhIO0FBSUpILGNBQUksRUFBRSxFQUpGO0FBS0pjLHFCQUFXLEVBQUUsRUFMVDtBQU1KWixrQkFBUSxFQUFFLEVBTk47QUFPSkcsa0JBQVEsRUFBRSxLQVBOO0FBUUpDLGlCQUFPLEVBQUVPLEdBQUcsQ0FBQ1A7QUFSVCxXQUFSO0FBVUg7QUFDSixLQWhCTDtBQW1CSCxHQXpCRDs7QUEyQkEsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFPWCxPQUFPLGdCQUFHO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBeUQsRUFBdkU7QUFBQSxHQUFwQjs7QUFDQSxNQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU9iLEtBQUssZ0JBQUc7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFBcUNBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUF1RCxFQUFuRTtBQUFBLEdBQWxCOztBQUNBLE1BQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBT1gsT0FBTyxnQkFBRztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLGdCQUFtQ0E7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQXVELEVBQXJFO0FBQUEsR0FBcEI7O0FBR0EsTUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBbEIsSUFBSTtBQUFBLFdBQUksVUFBQVEsQ0FBQyxFQUFJO0FBQ2pDVCxjQUFRLGlDQUFLRCxLQUFMO0FBQVlLLGFBQUssRUFBRTtBQUFuQixTQUEyQkgsSUFBM0IsRUFBa0NRLENBQUMsQ0FBQ1csTUFBRixDQUFTckIsS0FBM0MsR0FBUjtBQUNILEtBRjJCO0FBQUEsR0FBNUI7O0FBS0EsTUFBTXNCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZix3QkFDSTtBQUFNLGNBQVEsRUFBRWIsWUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFFSTtBQUFLLG1CQUFTLEVBQUMsK0NBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsa0lBQWY7QUFBQSxvQ0FHSTtBQUFJLHVCQUFTLEVBQUMsbUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFNSTtBQUFNLHNCQUFRLEVBQUVBLFlBQWhCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLG1CQUFmO0FBQUEsdUNBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFLSTtBQUFPLHVCQUFPLEVBQUMsTUFBZjtBQUNPLHlCQUFTLEVBQUMscURBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBT0k7QUFBTyxrQkFBRSxFQUFDLE9BQVY7QUFBa0Isb0JBQUksRUFBQyxPQUF2QjtBQUErQixvQkFBSSxFQUFDLE9BQXBDO0FBQTRDLDJCQUFXLEVBQUMsV0FBeEQ7QUFDTyw0QkFBWSxFQUFDLE9BRHBCO0FBRU8scUJBQUssRUFBRVQsS0FBSyxDQUFDRSxJQUZwQjtBQUdPLHdCQUFRLEVBQUVrQixlQUFlLENBQUMsTUFBRCxDQUhoQztBQUlPLHlCQUFTLEVBQUM7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSixlQWlCSTtBQUFPLHVCQUFPLEVBQUMsT0FBZjtBQUNPLHlCQUFTLEVBQUMscURBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCSixlQW1CSTtBQUFPLGtCQUFFLEVBQUMsT0FBVjtBQUFrQixvQkFBSSxFQUFDLE9BQXZCO0FBQStCLG9CQUFJLEVBQUMsT0FBcEM7QUFBNEMsMkJBQVcsRUFBQyxnQkFBeEQ7QUFDTyw0QkFBWSxFQUFDLE9BRHBCO0FBRU8scUJBQUssRUFBRXBCLEtBQUssQ0FBQ0csS0FGcEI7QUFHTyx3QkFBUSxFQUFFaUIsZUFBZSxDQUFDLE9BQUQsQ0FIaEM7QUFJTyx5QkFBUyxFQUFDO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJKLGVBOEJJO0FBQU8sdUJBQU8sRUFBQyxVQUFmO0FBQ08seUJBQVMsRUFBQywwREFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBOUJKLGVBZ0NJO0FBQU8sa0JBQUUsRUFBQyxVQUFWO0FBQXFCLG9CQUFJLEVBQUMsVUFBMUI7QUFBcUMsb0JBQUksRUFBQyxVQUExQztBQUFxRCwyQkFBVyxFQUFDLFVBQWpFO0FBQ08sNEJBQVksRUFBQyxrQkFEcEI7QUFFTyx3QkFBUSxFQUFFQSxlQUFlLENBQUMsVUFBRCxDQUZoQztBQUdPLHFCQUFLLEVBQUVwQixLQUFLLENBQUNJLFFBSHBCO0FBSU8seUJBQVMsRUFBQyw4SkFKakI7QUFRTyx3QkFBUTtBQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaENKLGVBMkNJO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQ1EseUJBQVMsRUFBQywwSUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZ0VJO0FBQU8sZ0JBQVEsRUFBRWdCLGVBQWUsQ0FBQyxNQUFELENBQWhDO0FBQTBDLG1CQUFXLEVBQUUsV0FBdkQ7QUFBb0UsYUFBSyxFQUFFbEIsSUFBM0U7QUFBaUYsWUFBSSxFQUFDLE1BQXRGO0FBQ08saUJBQVMsRUFBQztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEVKLGVBa0VJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsRUosZUFtRUk7QUFBTyxnQkFBUSxFQUFFa0IsZUFBZSxDQUFDLE9BQUQsQ0FBaEM7QUFBMkMsbUJBQVcsRUFBRSxZQUF4RDtBQUFzRSxhQUFLLEVBQUVqQixLQUE3RTtBQUFvRixZQUFJLEVBQUMsTUFBekY7QUFDTyxpQkFBUyxFQUFDO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUosZUFxRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJFSixlQXNFSTtBQUFPLGdCQUFRLEVBQUVpQixlQUFlLENBQUMsVUFBRCxDQUFoQztBQUE4QyxtQkFBVyxFQUFFLGVBQTNEO0FBQTRFLGFBQUssRUFBRWhCLFFBQW5GO0FBQ08sWUFBSSxFQUFDLFVBRFo7QUFDdUIsaUJBQVMsRUFBQztBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEVKLGVBd0VJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4RUosZUF5RUk7QUFBUSxpQkFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQTZFSCxHQTlFRDs7QUFnRkEsc0JBQ0k7QUFBQSxlQUNLYSxXQUFXLEVBRGhCLEVBRUtFLFdBQVcsRUFGaEIsRUFHS0QsU0FBUyxFQUhkLEVBSUtYLFFBQVEsSUFBSWUsSUFBSSxFQUpyQjtBQUFBLGtCQURKO0FBU0gsQ0EzSU07O0dBQU14QixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5mOTNkODZhZDZkY2U0YmRkNjcxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7aXNBdXRoLCBzaWdudXAsIHByZVNpZ251cH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBHb29nbGVMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi9Hb29nbGVMb2dpblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmV4cG9ydCBjb25zdCBTaWd1cEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibG9hZGluZ1wiOiBmYWxzZSxcclxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJcIixcclxuICAgICAgICBcInNob3dmb3JtXCI6IHRydWVcclxuICAgIH0pXHJcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgc2hvd2Zvcm0sIG1lc3NhZ2V9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGFuZGxlIFN1Ym1pdFwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoey4uLnZhbHVlfSlcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZX0pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9XHJcbiAgICAgICAgcHJlU2lnbnVwKHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Zm9ybTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5Mb2FkaW5nLi4uLjwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiAobWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PiA6IFwiXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBiZy1ncmF5LTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG14LTIgbXktMjAgc206bXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgcC0xMiBzbTp3LTgvMTIgbWQ6dy02LzEyIGxnOnctNS8xMiAyeGw6dy00LzEyXHJcbiAgICAgICAgICAgIHB4LTYgcHktMTAgc206cHgtMTAgc206cHktNlxyXG4gICAgICAgICAgICBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBsZzpzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHBiLTMgdGV4dC0zeGwgbGc6dGV4dC00eGwgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5Db21wb25lbnQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIHB4LTEgbXQtMlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlLW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIHB4LTEgbXQtMlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBweC0xIG10LTIgbWItNFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgbXQtMTAgYmctaW5kaWdvLTcwMCByb3VuZGVkLXNtXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB1cHBlcmNhc2VcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTkwMCBob3ZlcjpzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJuYW1lXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIG5hbWVcIn0gdmFsdWU9e25hbWV9IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJlbWFpbFwiKX0gcGxhY2Vob2xkZXI9e1wieW91ciBlbWFpbFwifSB2YWx1ZT17ZW1haWx9IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX0gcGxhY2Vob2xkZXI9e1wieW91ciBwYXNzd29yZFwifSB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dmb3JtICYmIEZvcm0oKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==