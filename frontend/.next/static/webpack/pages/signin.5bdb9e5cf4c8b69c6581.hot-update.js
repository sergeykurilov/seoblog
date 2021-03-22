webpackHotUpdate_N_E("pages/signin",{

/***/ "./Components/SigninForm.jsx":
/*!***********************************!*\
  !*** ./Components/SigninForm.jsx ***!
  \***********************************/
/*! exports provided: SiginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiginForm", function() { return SiginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");




var _jsxFileName = "C:\\seoblog\\frontend\\Components\\SigninForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var SiginForm = function SiginForm() {
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
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signin"])(user).then(function (res) {
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

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: "Loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 43
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 39
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 43
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
        onChange: onChangeHandler("email"),
        placeholder: "your email",
        value: value.email,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("password"),
        placeholder: "your password",
        value: value.password,
        type: "password",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-primary",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }, _this)]
  }, void 0, true);
};

_s(SiginForm, "TC4H2tCF5LRxnWZEHJjPHVdVIQM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWdpbkZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwicmVzIiwic2hvd0xvYWRpbmciLCJzaG93RXJyb3IiLCJzaG93TWVzc2FnZSIsIm9uQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsIkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUM7QUFDL0IsWUFBUSxRQUR1QjtBQUUvQixhQUFTLDJCQUZzQjtBQUcvQixnQkFBWSxVQUhtQjtBQUkvQixhQUFTLEtBSnNCO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsZUFBVyxFQU5vQjtBQU8vQixnQkFBWTtBQVBtQixHQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUFBLE1BV3BCQyxJQVhvQixHQVdrQ0YsS0FYbEMsQ0FXcEJFLElBWG9CO0FBQUEsTUFXZkMsS0FYZSxHQVdrQ0gsS0FYbEMsQ0FXZkcsS0FYZTtBQUFBLE1BV1RDLFFBWFMsR0FXa0NKLEtBWGxDLENBV1RJLFFBWFM7QUFBQSxNQVdBQyxLQVhBLEdBV2tDTCxLQVhsQyxDQVdBSyxLQVhBO0FBQUEsTUFXTUMsT0FYTixHQVdrQ04sS0FYbEMsQ0FXTU0sT0FYTjtBQUFBLE1BV2NDLFFBWGQsR0FXa0NQLEtBWGxDLENBV2NPLFFBWGQ7QUFBQSxNQVd1QkMsT0FYdkIsR0FXa0NSLEtBWGxDLENBV3VCUSxPQVh2Qjs7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QSxzQkFDQztBQUFBLGVBQ0tZLFdBQVcsRUFEaEIsRUFFS0UsV0FBVyxFQUZoQixFQUdLRCxTQUFTLEVBSGQsRUFJS1YsUUFBUSxpQkFBSSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKakI7QUFBQSxrQkFERDtBQVNILENBNURNOztHQUFNVCxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi41YmRiOWU1Y2Y0YzhiNjljNjU4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3NpZ25pbiwgc2lnbnVwfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnaW5Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlNlcmdleVwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge25hbWUsZW1haWwscGFzc3dvcmQsZXJyb3IsbG9hZGluZyxzaG93Zm9ybSxtZXNzYWdlfSA9IHZhbHVlXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhhbmRsZSBTdWJtaXRcIilcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHsuLi52YWx1ZX0pXHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2V9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfVxyXG4gICAgICAgIHNpZ25pbih1c2VyKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGZhbHNlLCBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIHNob3dmb3JtOiBmYWxzZSwgbWVzc2FnZTogcmVzLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAoIGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5Mb2FkaW5nLi4uLjwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoIGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogXCJcIilcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKCBtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e21lc3NhZ2V9PC9kaXY+IDogXCJcIilcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIGVtYWlsXCJ9IHZhbHVlPXt2YWx1ZS5lbWFpbH0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcInBhc3N3b3JkXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIHBhc3N3b3JkXCJ9IHZhbHVlPXt2YWx1ZS5wYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICB7c2hvd2Zvcm0gJiYgPEZvcm0vPn1cclxuICAgICA8Lz5cclxuICAgIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9