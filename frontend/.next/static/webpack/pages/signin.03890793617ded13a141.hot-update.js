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
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pagesHeader */ "./components/pagesHeader.jsx");




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
      lineNumber: 47,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col  bg-gray-100",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid place-items-center mx-2 my-20 sm:my-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12\r px-6 py-10 sm:px-10 sm:py-6\r bg-white rounded-lg shadow-md lg:shadow-lg",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-center font-semibold pb-3 text-3xl lg:text-4xl text-gray-800",
              children: "Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "block text-xs font-semibold text-gray-600 uppercase",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "email",
                type: "email",
                name: "email",
                placeholder: "your name",
                autoComplete: "email",
                value: value.name,
                onChange: onChangeHandler("name"),
                className: "block w-full py-3 px-1 mt-2\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                className: "block text-xs font-semibold text-gray-600 uppercase",
                children: "E-mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
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
                lineNumber: 83,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                className: "block mt-2 text-xs font-semibold text-gray-600 uppercase",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
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
                lineNumber: 96,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full py-3 mt-10 bg-indigo-700 rounded-sm\r font-medium text-white uppercase\r focus:outline-none hover:bg-indigo-900 hover:shadow-none",
                children: "Sign up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
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
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWd1cEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJwcmVTaWdudXAiLCJ0aGVuIiwicmVzIiwic2VuZGVyRW1haWwiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwiRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxFQUZzQjtBQUcvQixnQkFBWSxFQUhtQjtBQUkvQixhQUFTLEtBSnNCO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsZUFBVyxFQU5vQjtBQU8vQixnQkFBWTtBQVBtQixHQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUFBLE1BV3BCQyxJQVhvQixHQVd3Q0YsS0FYeEMsQ0FXcEJFLElBWG9CO0FBQUEsTUFXZEMsS0FYYyxHQVd3Q0gsS0FYeEMsQ0FXZEcsS0FYYztBQUFBLE1BV1BDLFFBWE8sR0FXd0NKLEtBWHhDLENBV1BJLFFBWE87QUFBQSxNQVdHQyxLQVhILEdBV3dDTCxLQVh4QyxDQVdHSyxLQVhIO0FBQUEsTUFXVUMsT0FYVixHQVd3Q04sS0FYeEMsQ0FXVU0sT0FYVjtBQUFBLE1BV21CQyxRQVhuQixHQVd3Q1AsS0FYeEMsQ0FXbUJPLFFBWG5C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QUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQTZESCxHQTlERDs7QUFnRUEsc0JBQ0k7QUFBQSxlQUNLYSxXQUFXLEVBRGhCLEVBRUtFLFdBQVcsRUFGaEIsRUFHS0QsU0FBUyxFQUhkLEVBSUtYLFFBQVEsSUFBSWUsSUFBSSxFQUpyQjtBQUFBLGtCQURKO0FBU0gsQ0EzSE07O0dBQU14QixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4wMzg5MDc5MzYxN2RlZDEzYTE0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7aXNBdXRoLCBzaWdudXAsIHByZVNpZ251cH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBHb29nbGVMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi9Hb29nbGVMb2dpblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuZXhwb3J0IGNvbnN0IFNpZ3VwRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJsb2FkaW5nXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwic2hvd2Zvcm1cIjogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBzaG93Zm9ybSwgbWVzc2FnZX0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBwcmVTaWdudXAodXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXJFbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dmb3JtOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAobG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPkxvYWRpbmcuLi4uPC9kaXY+IDogXCJcIilcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IChtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e21lc3NhZ2V9PC9kaXY+IDogXCJcIilcclxuXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBteC0yIG15LTIwIHNtOm15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIHAtMTIgc206dy04LzEyIG1kOnctNi8xMiBsZzp3LTUvMTIgMnhsOnctNC8xMlxyXG4gICAgICAgICAgICBweC02IHB5LTEwIHNtOnB4LTEwIHNtOnB5LTZcclxuICAgICAgICAgICAgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgbGc6c2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBwYi0zIHRleHQtM3hsIGxnOnRleHQtNHhsIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBweC0xIG10LTJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZS1tYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBweC0xIG10LTJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTMgcHgtMSBtdC0yIG1iLTRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIG10LTEwIGJnLWluZGlnby03MDAgcm91bmRlZC1zbVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby05MDAgaG92ZXI6c2hhZG93LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93Zm9ybSAmJiBGb3JtKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=