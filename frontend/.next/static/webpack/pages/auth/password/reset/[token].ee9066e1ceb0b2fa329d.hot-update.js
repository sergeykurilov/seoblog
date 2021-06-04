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

  var resetPassowordLink = Object(react__WEBPACK_IMPORTED_MODULE_2__["useQueryParams"])();
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

_s(ForgotPassword, "poEOuByEoDRa9Qxl3xMhkAJYKkM=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_2__["useQueryParams"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJlcnJvciIsInNob3dNZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwicmVzZXRQYXNzb3dvcmRMaW5rIiwidXNlUXVlcnlQYXJhbXMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiY2xpY2tTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0UGFzc3dvcmQiLCJlbWFpbCIsInRoZW4iLCJkYXRhIiwiY29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVHQyxzREFBUSxDQUFDO0FBQ2pDQyxZQUFRLEVBQUUsRUFEdUI7QUFFakNDLFdBQU8sRUFBRSxFQUZ3QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxlQUFXLEVBQUU7QUFKb0IsR0FBRCxDQUZYO0FBQUEsTUFFbEJDLE1BRmtCO0FBQUEsTUFFVkMsU0FGVTs7QUFTekIsTUFBTUMsa0JBQWtCLEdBQUdDLDREQUFjLEVBQXpDO0FBVHlCLE1BV2xCUCxRQVhrQixHQVd1QkksTUFYdkIsQ0FXbEJKLFFBWGtCO0FBQUEsTUFXUkMsT0FYUSxHQVd1QkcsTUFYdkIsQ0FXUkgsT0FYUTtBQUFBLE1BV0NDLEtBWEQsR0FXdUJFLE1BWHZCLENBV0NGLEtBWEQ7QUFBQSxNQVdRQyxXQVhSLEdBV3VCQyxNQVh2QixDQVdRRCxXQVhSOztBQVl6QixNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxJQUFJO0FB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dGljL3dlYnBhY2svcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmVlOTA2NmUxY2ViMGIyZmEzMjlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VRdWVyeVBhcmFtc30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1BhZ2VIZWFkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhZ2VzSGVhZGVyXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHtyZXNldFBhc3N3b3JkfSBmcm9tIFwiLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5cclxuY29uc3QgRm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgIHNob3dNZXNzYWdlOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlc2V0UGFzc293b3JkTGluayA9IHVzZVF1ZXJ5UGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3Qge3Bhc3N3b3JkLCBtZXNzYWdlLCBlcnJvciwgc2hvd01lc3NhZ2V9ID0gdmFsdWVzXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiwgbWVzc2FnZTogXCJcIn0pO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IG1lc3NhZ2UgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e21lc3NhZ2V9PC9kaXY+XHJcbiAgICBjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogXCJcIiwgbWVzc2FnZTogXCJcIn0pXHJcbiAgICAgICAgcmVzZXRQYXNzd29yZChlbWFpbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHBhc3N3b3JkOiBcIlwiLCBzaG93TWVzc2FnZTogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2xpY2tTdWJtaXR9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyLz5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93TWVzc2FnZSAmJiBjb250YWN0Rm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
