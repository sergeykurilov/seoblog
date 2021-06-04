webpackHotUpdate_N_E("pages/auth/password/reset/[token]",{

/***/ "./pages/auth/password/reset/[token].js":
/*!**********************************************!*\
  !*** ./pages/auth/password/reset/[resetPasswordLink].js ***!
  \**********************************************/
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
    password: "",
    message: "",
    error: "",
    showMessage: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var pid = router.query.pid;
  var password = values.password,
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
      lineNumber: 20,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 42
    }, _this);
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      error: "",
      message: ""
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["resetPassword"])(email).then(function (data) {
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
          lineNumber: 37,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: password,
          required: true,
          type: "password",
          onChange: handleChange('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Send"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [showError(), showSuccess(), showMessage && contactForm()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, _this);
};

_s(ForgotPassword, "hhlEWXli2oS/FnnJZk9HEQPA2S0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwicGlkIiwicm91dGVyIiwicXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiY2xpY2tTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0UGFzc3dvcmQiLCJlbWFpbCIsInRoZW4iLCJkYXRhIiwiY29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFR0Msc0RBQVEsQ0FBQztBQUNqQ0MsWUFBUSxFQUFFLEVBRHVCO0FBRWpDQyxXQUFPLEVBQUUsRUFGd0I7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsZUFBVyxFQUFFO0FBSm9CLEdBQUQsQ0FGWDtBQUFBLE1BRWxCQyxNQUZrQjtBQUFBLE1BRVZDLFNBRlU7O0FBQUEsTUFTakJDLEdBVGlCLEdBU1RDLE1BQU0sQ0FBQ0MsS0FURSxDQVNqQkYsR0FUaUI7QUFBQSxNQVdsQk4sUUFYa0IsR0FXdUJJLE1BWHZCLENBV2xCSixRQVhrQjtBQUFBLE1BV1JDLE9BWFEsR0FXdUJHLE1BWHZCLENBV1JILE9BWFE7QUFBQSxNQVdDQyxLQVhELEdBV3VCRSxNQVh2QixDQVdDRixLQVhEO0FBQUEsTUFXUUMsV0FYUixHQVd1QkMsTUFYdkIsQ0FXUUQsV0FYUjs7QUFZekIsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsSUFBSTtBQUFBLFdBQUksVUFBQUMsQ0FBQztBQUFBOztBQUFBLGFBQUlOLFNBQVMsaUNBQU1ELE1BQU4sd0xBQWVNLElBQWYsRUFBc0JDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEvQix1S0FBNkMsRUFBN0MseUtBQTBELEVBQTFELG9CQUFiO0FBQUEsS0FBTDtBQUFBLEdBQXpCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQU07QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBb0MsV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRWIsS0FBSyxHQUFHLEVBQUgsR0FBUTtBQUF2QixPQUEzQztBQUFBLGdCQUE0RUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNZixPQUFPLGlCQUFJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNOLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDTyxjQUFGO0FBQ0FiLGFBQVMsaUNBQU1ELE1BQU47QUFBY0YsV0FBSyxFQUFFLEVBQXJCO0FBQXlCRCxhQUFPLEVBQUU7QUFBbEMsT0FBVDtBQUNBa0IsdUVBQWEsQ0FBQ0MsS0FBRCxDQUFiLENBQXFCQyxJQUFyQixDQUEwQixVQUFBQyxJQUFJLEVBQUk7QUFDOUIsVUFBSUEsSUFBSSxDQUFDcEIsS0FBVCxFQUFlO0FBQ1hHLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNGLGVBQUssRUFBRW9CLElBQUksQ0FBQ3BCO0FBQTFCLFdBQVQ7QUFDSCxPQUZELE1BRUs7QUFDREcsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsaUJBQU8sRUFBRXFCLElBQUksQ0FBQ3JCLE9BQTVCO0FBQXFDRCxrQkFBUSxFQUFFLEVBQS9DO0FBQW1ERyxxQkFBVyxFQUFFO0FBQWhFLFdBQVQ7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVZEOztBQVlBLE1BQU1vQixXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHdCQUNoQjtBQUFNLGNBQVEsRUFBRU4sV0FBaEI7QUFBNkIsZUFBUyxFQUFDLE1BQXZDO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLG1CQUFTLEVBQUMsY0FBakI7QUFBZ0MsZUFBSyxFQUFFakIsUUFBdkM7QUFBaUQsa0JBQVEsTUFBekQ7QUFBMEQsY0FBSSxFQUFDLFVBQS9EO0FBQTBFLGtCQUFRLEVBQUVTLFlBQVksQ0FBQyxVQUFEO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFBLCtCQUNJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCO0FBQUEsR0FBcEI7O0FBYUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyx5REFBRDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsbUJBQ0tLLFNBQVMsRUFEZCxFQUVLRSxXQUFXLEVBRmhCLEVBR0tiLFdBQVcsSUFBSW9CLFdBQVcsRUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FwREQ7O0dBQU16QixjOztLQUFBQSxjO0FBc0RTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0L1t0b2tlbl0uNGZmZTAwYzIyOTMyYjQzYWI0NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge3Jlc2V0UGFzc3dvcmR9IGZyb20gXCIuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IHtwYXNzd29yZCwgbWVzc2FnZSwgZXJyb3IsIHNob3dNZXNzYWdlfSA9IHZhbHVlc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+e2Vycm9yfTwvZGl2PlxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiBtZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PlxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KVxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbWVzc2FnZTogZGF0YS5tZXNzYWdlLCBwYXNzd29yZDogXCJcIiwgc2hvd01lc3NhZ2U6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwYXNzd29yZH0gcmVxdWlyZWQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlci8+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd01lc3NhZ2UgJiYgY29udGFjdEZvcm0oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
