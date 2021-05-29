webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/form/contactForm.js":
/*!****************************************!*\
  !*** ./components/form/contactForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/form */ "./actions/form.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\form\\contactForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ContactForm = function ContactForm(_ref) {
  _s();

  var undefined = _ref.authorEmail;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    message: '',
    name: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
    success: false,
    error: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var message = values.message,
      name = values.name,
      email = values.email,
      success = values.success,
      error = values.error,
      buttonText = values.buttonText;

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      buttonText: "Sending..."
    }));
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_3__["emailContactForm"])({
      authorEmail: authorEmail,
      name: name,
      email: email,
      message: message
    }).then(function (data) {
      console.log(data);

      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        authorEmail = "";
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          sent: true,
          name: "",
          email: "",
          message: "",
          buttonText: "Sent",
          success: data.success
        }));
      }
    });
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
      lineNumber: 33,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      style: {
        display: success ? '' : 'none'
      },
      children: "Thank you for contacting us!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 42
    }, _this);
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      return setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, e.target.value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "success", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "buttonText", "Send Message"), _objectSpread2)));
    };
  };

  var contactForm = function contactForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: clickSubmit,
      className: "pb-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          className: "form-control",
          value: message,
          required: true,
          type: "text",
          rows: "10",
          onChange: handleChange('message')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: name,
          required: true,
          type: "text",
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: email,
          required: true,
          type: "email",
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: buttonText
        }, void 0, false, {
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
      lineNumber: 39,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showSuccess(), contactForm()]
  }, void 0, true);
};

_s(ContactForm, "1p5sGj7V7FjOP/evEMVHhF+emGg=");

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidW5kZWZpbmVkIiwiYXV0aG9yRW1haWwiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJuYW1lIiwiZW1haWwiLCJzZW50IiwiYnV0dG9uVGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxDb250YWN0Rm9ybSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE4QjtBQUFBOztBQUFBLE1BQWZDLFNBQWUsUUFBNUJDLFdBQTRCOztBQUFBLGtCQUVsQkMsc0RBQVEsQ0FBQztBQUNqQ0MsV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxRQUFJLEVBQUUsRUFGMkI7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsUUFBSSxFQUFFLEtBSjJCO0FBS2pDQyxjQUFVLEVBQUUsY0FMcUI7QUFNakNDLFdBQU8sRUFBRSxLQU53QjtBQU9qQ0MsU0FBSyxFQUFFO0FBUDBCLEdBQUQsQ0FGVTtBQUFBLE1BRXZDQyxNQUZ1QztBQUFBLE1BRS9CQyxTQUYrQjs7QUFBQSxNQVl2Q1IsT0FadUMsR0FZWU8sTUFaWixDQVl2Q1AsT0FadUM7QUFBQSxNQVk5QkMsSUFaOEIsR0FZWU0sTUFaWixDQVk5Qk4sSUFaOEI7QUFBQSxNQVl4QkMsS0Fad0IsR0FZWUssTUFaWixDQVl4QkwsS0Fad0I7QUFBQSxNQVlqQkcsT0FaaUIsR0FZWUUsTUFaWixD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QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLG1CQUFTLEVBQUMsY0FBakI7QUFBZ0MsZUFBSyxFQUFFbkIsSUFBdkM7QUFBNkMsa0JBQVEsTUFBckQ7QUFBc0QsY0FBSSxFQUFDLE1BQTNEO0FBQWtFLGtCQUFRLEVBQUVtQixZQUFZLENBQUMsTUFBRDtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLG1CQUFTLEVBQUMsY0FBakI7QUFBZ0MsZUFBSyxFQUFFbEIsS0FBdkM7QUFBOEMsa0JBQVEsTUFBdEQ7QUFBdUQsY0FBSSxFQUFDLE9BQTVEO0FBQW9FLGtCQUFRLEVBQUVrQixZQUFZLENBQUMsT0FBRDtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBYUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUEsb0JBQXFDaEI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZ0I7QUFBQSxHQUFwQjs7QUFxQkEsc0JBQ0k7QUFBQSxlQUNLYSxTQUFTLEVBRGQsRUFFS0UsV0FBVyxFQUZoQixFQUdLSSxXQUFXLEVBSGhCO0FBQUEsa0JBREo7QUFPSCxDQTlERDs7R0FBTTNCLFc7O0tBQUFBLFc7QUFnRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuYzRhMzBjNmE4ZjBkM2RlNmFhYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtlbWFpbENvbnRhY3RGb3JtfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9mb3JtXCI7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICh7YXV0aG9yRW1haWw6IHVuZGVmaW5lZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzZW50OiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0OiAnU2VuZCBNZXNzYWdlJyxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIGVtYWlsLCBzdWNjZXNzLCBlcnJvcixidXR0b25UZXh0fSA9IHZhbHVlc1xyXG5cclxuXHJcbiAgICBjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBidXR0b25UZXh0OiBcIlNlbmRpbmcuLi5cIn0pXHJcbiAgICAgICAgZW1haWxDb250YWN0Rm9ybSh7YXV0aG9yRW1haWwsIG5hbWUsIGVtYWlsLCBtZXNzYWdlfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yRW1haWwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHNlbnQ6IHRydWUsIG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBtZXNzYWdlOiBcIlwiLCBidXR0b25UZXh0OiBcIlNlbnRcIiwgc3VjY2VzczogZGF0YS5zdWNjZXNzIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJyB9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IHN1Y2Nlc3MgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCIgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlRoYW5rIHlvdSBmb3IgY29udGFjdGluZyB1cyE8L2Rpdj5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZS50YXJnZXQudmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIGJ1dHRvblRleHQ6IFwiU2VuZCBNZXNzYWdlXCIgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e21lc3NhZ2V9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfSByZXF1aXJlZCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICB7Y29udGFjdEZvcm0oKSB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=