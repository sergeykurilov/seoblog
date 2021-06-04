webpackHotUpdate_N_E("pages/auth/password/forgot",{

/***/ "./pages/auth/password/forgot.js":
/*!***************************************!*\
  !*** ./pages/auth/password/forgot.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/form */ "./actions/form.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/pagesHeader */ "./components/pagesHeader.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.jsx");



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\auth\\password\\forgot.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ForgotPassword = function ForgotPassword() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    message: "",
    error: "",
    showMessage: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var email = values.email,
      message = values.message,
      error = values.error,
      showMessage = values.showMessage;

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      return setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, e.target.value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", ""), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "message", ""), _objectSpread2)));
    };
  };

  var showError = function showError() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 42
    }, _this);
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      error: "",
      message: ""
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["forgotPassword"])(email).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          message: data.message,
          email: "",
          showMessage: false
        }));
      }
    });
  };

  var contactForm = function contactForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: clickSubmit,
      className: "pb-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: email,
          required: true,
          type: "email",
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Send"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_6__["PageHeader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [showError(), showSuccess(), showMessage && contactForm()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(ForgotPassword, "Yatp2Wz6VmqOOY/F0r5MIw6dnhs=");

_c = ForgotPassword;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

var _c;

$RefreshReg$(_c, "ForgotPassword");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9mb3Jnb3QuanMiXSwibmFtZXMiOlsiRm9yZ290UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwibWVzc2FnZSIsImVycm9yIiwic2hvd01lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiY2xpY2tTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcmdvdFBhc3N3b3JkIiwidGhlbiIsImRhdGEiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDO0FBQ2pDQyxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLFdBQU8sRUFBRSxFQUZ3QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxlQUFXLEVBQUU7QUFKb0IsR0FBRCxDQUZYO0FBQUEsTUFFbEJDLE1BRmtCO0FBQUEsTUFFVkMsU0FGVTs7QUFBQSxNQVNsQkwsS0FUa0IsR0FTb0JJLE1BVHBCLENBU2xCSixLQVRrQjtBQUFBLE1BU1hDLE9BVFcsR0FTb0JHLE1BVHBCLENBU1hILE9BVFc7QUFBQSxNQVNGQyxLQVRFLEdBU29CRSxNQVRwQixDQVNGRixLQVRFO0FBQUEsTUFTS0MsV0FUTCxHQVNvQkMsTUFUcEIsQ0FTS0QsV0FUTDs7QUFVekIsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsSUFBSTtBQUFBLFdBQUksVUFBQUMsQ0FBQztBQUFBOztBQUFBLGFBQUlILFNBQVMsaUNBQU1ELE1BQU4sd0xBQWVHLElBQWYsRUFBc0JDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEvQix1S0FBNkMsRUFBN0MseUtBQTBELEVBQTFELG9CQUFiO0FBQUEsS0FBTDtBQUFBLEdBQXpCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQU07QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBb0MsV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRVYsS0FBSyxHQUFHLEVBQUgsR0FBUTtBQUF2QixPQUEzQztBQUFBLGdCQUE0RUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNWixPQUFPLGlCQUFJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNPLGNBQUY7QUFDQVYsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjRixXQUFLLEVBQUUsRUFBckI7QUFBeUJELGFBQU8sRUFBRTtBQUFsQyxPQUFUO0FBQ0FlLHdFQUFjLENBQUNoQixLQUFELENBQWQsQ0FBc0JpQixJQUF0QixDQUEyQixVQUFBQyxJQUFJLEVBQUk7QUFDL0IsVUFBSUEsSUFBSSxDQUFDaEIsS0FBVCxFQUFlO0FBQ1hHLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNGLGVBQUssRUFBRWdCLElBQUksQ0FBQ2hCO0FBQTFCLFdBQVQ7QUFDSCxPQUZELE1BRUs7QUFDREcsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsaUJBQU8sRUFBRWlCLElBQUksQ0FBQ2pCLE9BQTVCO0FBQXFDRCxlQUFLLEVBQUUsRUFBNUM7QUFBZ0RHLHFCQUFXLEVBQUU7QUFBN0QsV0FBVDtBQUNIO0FBQ0osS0FORDtBQU9ILEdBVkQ7O0FBWUEsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsd0JBQ2hCO0FBQU0sY0FBUSxFQUFFTCxXQUFoQjtBQUE2QixlQUFTLEVBQUMsTUFBdkM7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sbUJBQVMsRUFBQyxjQUFqQjtBQUFnQyxlQUFLLEVBQUVkLEtBQXZDO0FBQThDLGtCQUFRLE1BQXREO0FBQXVELGNBQUksRUFBQyxPQUE1RDtBQUFvRSxrQkFBUSxFQUFFTSxZQUFZLENBQUMsT0FBRDtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0k7QUFBQSwrQkFDSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURnQjtBQUFBLEdBQXBCOztBQWFBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMseURBQUQ7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLG1CQUNLSyxTQUFTLEVBRGQsRUFFS0UsV0FBVyxFQUZoQixFQUdLVixXQUFXLElBQUlnQixXQUFXLEVBSC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBbEREOztHQUFNckIsYzs7S0FBQUEsYztBQW9EU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9wYXNzd29yZC9mb3Jnb3QuMjc1MGJkMTY2MjVkYzgxOWNkMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZW1haWxDb250YWN0Rm9ybX0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvZm9ybVwiO1xyXG5pbXBvcnQge2ZvcmdvdFBhc3N3b3JkfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge2VtYWlsLCBtZXNzYWdlLCBlcnJvciwgc2hvd01lc3NhZ2V9ID0gdmFsdWVzXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiwgbWVzc2FnZTogXCJcIn0pO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IG1lc3NhZ2UgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e21lc3NhZ2V9PC9kaXY+XHJcbiAgICBjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogXCJcIiwgbWVzc2FnZTogXCJcIn0pXHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoZW1haWwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbWVzc2FnZTogZGF0YS5tZXNzYWdlLCBlbWFpbDogXCJcIiwgc2hvd01lc3NhZ2U6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyLz5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93TWVzc2FnZSAmJiBjb250YWN0Rm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9