webpackHotUpdate_N_E("pages/signup",{

/***/ "./Components/SignupForm.jsx":
/*!***********************************!*\
  !*** ./Components/SignupForm.jsx ***!
  \***********************************/
/*! exports provided: SigupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigupForm", function() { return SigupForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\seoblog\\frontend\\Components\\SignupForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SigupForm = function SigupForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "Sergey",
    "email": "kurilovsergey15@gmail.com",
    "password": "q92e01kl",
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
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signup"])(user).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          loading: false,
          error: false,
          name: "",
          email: "",
          password: "",
          showform: false,
          message: res.message
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
  });

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
      setValue(_objectSpread(_objectSpread({}, value), {}, Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var Form = function Form() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("name"),
        placeholder: "your name",
        value: value.name,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("email"),
        placeholder: "your email",
        value: value.email,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("password"),
        placeholder: "your password",
        value: value.password,
        type: "password",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-primary",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 26
    }, _this)]
  }, void 0, true);
};

_s(SigupForm, "VYPxnRdT0sxdlErod8HXd7xwI0g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaWdudXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWd1cEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWdudXAiLCJ0aGVuIiwicmVzIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLFFBRHVCO0FBRS9CLGFBQVMsMkJBRnNCO0FBRy9CLGdCQUFZLFVBSG1CO0FBSS9CLGFBQVMsS0FKc0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixlQUFXLEVBTm9CO0FBTy9CLGdCQUFZO0FBUG1CLEdBQUQsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBQUEsTUFXcEJDLElBWG9CLEdBV3dDRixLQVh4QyxDQVdwQkUsSUFYb0I7QUFBQSxNQVdkQyxLQVhjLEdBV3dDSCxLQVh4QyxDQVdkRyxLQVhjO0FBQUEsTUFXUEMsUUFYTyxHQVd3Q0osS0FYeEMsQ0FXUEksUUFYTztBQUFBLE1BV0dDLEtBWEgsR0FXd0NMLEtBWHhDLENBV0dLLEtBWEg7QUFBQSxNQVdVQyxPQVhWLEdBV3dDTixLQVh4QyxDQVdVTSxPQVhWO0FBQUEsTUFXbUJDLFFBWG5CLEdBV3dDUCxLQVh4QyxDQVdtQk8sUUFY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RjtBQUNPLGlCQUFTLEVBQUM7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0k7QUFBTyxnQkFBUSxFQUFFb0IsZUFBZSxDQUFDLFVBQUQsQ0FBaEM7QUFBOEMsbUJBQVcsRUFBRSxlQUEzRDtBQUE0RSxhQUFLLEVBQUV2QixLQUFLLENBQUNJLFFBQXpGO0FBQ08sWUFBSSxFQUFDLFVBRFo7QUFDdUIsaUJBQVMsRUFBQztBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFVSTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFjSCxHQWZEOztBQWlCQSxzQkFDSTtBQUFBLGVBQ0tnQixXQUFXLEVBRGhCLEVBRUtFLFdBQVcsRUFGaEIsRUFHS0QsU0FBUyxFQUhkLEVBSUtkLFFBQVEsaUJBQUkscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSmpCO0FBQUEsa0JBREo7QUFTSCxDQTdFTTs7R0FBTVQsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuN2M4MGIyMmY2NmQ2Yjk0MmI1ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2lzQXV0aCwgc2lnbnVwfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuZXhwb3J0IGNvbnN0IFNpZ3VwRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJTZXJnZXlcIixcclxuICAgICAgICBcImVtYWlsXCI6IFwia3VyaWxvdnNlcmdleTE1QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJxOTJlMDFrbFwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJsb2FkaW5nXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwic2hvd2Zvcm1cIjogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBzaG93Zm9ybSwgbWVzc2FnZX0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBzaWdudXAodXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dmb3JtOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlzQXV0aCgpICYmIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5Mb2FkaW5nLi4uLjwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiAobWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PiA6IFwiXCIpXHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcIm5hbWVcIil9IHBsYWNlaG9sZGVyPXtcInlvdXIgbmFtZVwifSB2YWx1ZT17dmFsdWUubmFtZX0gdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIGVtYWlsXCJ9IHZhbHVlPXt2YWx1ZS5lbWFpbH0gdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcInBhc3N3b3JkXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIHBhc3N3b3JkXCJ9IHZhbHVlPXt2YWx1ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd2Zvcm0gJiYgPEZvcm0vPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9