webpackHotUpdate_N_E("pages/auth/password/reset/[resetPasswordLink]",{

/***/ "./pages/auth/password/reset/[resetPasswordLink].js":
/*!**********************************************************!*\
  !*** ./pages/auth/password/reset/[resetPasswordLink].js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/pagesHeader */ "./components/pagesHeader.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\auth\\password\\reset\\[resetPasswordLink].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ForgotPassword = function ForgotPassword() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    newPassword: "",
    message: "",
    error: "",
    showMessage: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var resetPasswordLink = router.query.resetPasswordLink;
  var newPassword = values.newPassword,
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
      lineNumber: 22,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 42
    }, _this);
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      error: "",
      message: ""
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["resetPassword"])(resetPasswordLink, newPassword).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          message: data.message,
          password: "",
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
          children: "New Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: newPassword,
          required: true,
          type: "password",
          onChange: handleChange('newPassword')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Send"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [showError(), showSuccess(), showMessage && contactForm()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, _this);
};

_s(ForgotPassword, "G8JeaIZKFATJNOdQOMhlqComIe8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bcmVzZXRQYXNzd29yZExpbmtdLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwidXNlU3RhdGUiLCJuZXdQYXNzd29yZCIsIm1lc3NhZ2UiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVzZXRQYXNzd29yZExpbmsiLCJxdWVyeSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJjbGlja1N1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzZXRQYXNzd29yZCIsInRoZW4iLCJkYXRhIiwicGFzc3dvcmQiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDO0FBQ2pDQyxlQUFXLEVBQUUsRUFEb0I7QUFFakNDLFdBQU8sRUFBRSxFQUZ3QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxlQUFXLEVBQUU7QUFKb0IsR0FBRCxDQUZYO0FBQUEsTUFFbEJDLE1BRmtCO0FBQUEsTUFFVkMsU0FGVTs7QUFTekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsaUJBQXZDO0FBVnlCLE1BYWxCUixXQWJrQixHQWEwQkksTUFiMUIsQ0FhbEJKLFdBYmtCO0FBQUEsTUFhTEMsT0FiSyxHQWEwQkcsTUFiMUIsQ0FhTEgsT0FiSztBQUFBLE1BYUlDLEtBYkosR0FhMEJFLE1BYjFCLENBYUlGLEtBYko7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QUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXRERDs7R0FBTTFCLGM7VUFTYVMscUQ7OztLQVRiVCxjO0FBd0RTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0L1tyZXNldFBhc3N3b3JkTGlua10uMTYxNGQwYjFjOTBhZTYwNjA5ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge3Jlc2V0UGFzc3dvcmR9IGZyb20gXCIuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHJlc2V0UGFzc3dvcmRMaW5rID0gcm91dGVyLnF1ZXJ5LnJlc2V0UGFzc3dvcmRMaW5rXHJcblxyXG5cclxuICAgIGNvbnN0IHtuZXdQYXNzd29yZCwgbWVzc2FnZSwgZXJyb3IsIHNob3dNZXNzYWdlfSA9IHZhbHVlc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+e2Vycm9yfTwvZGl2PlxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiBtZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PlxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KVxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQocmVzZXRQYXNzd29yZExpbmssIG5ld1Bhc3N3b3JkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSwgcGFzc3dvcmQ6IFwiXCIsIHNob3dNZXNzYWdlOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmV3UGFzc3dvcmR9IHJlcXVpcmVkIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25ld1Bhc3N3b3JkJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIvPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dNZXNzYWdlICYmIGNvbnRhY3RGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=