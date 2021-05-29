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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/form */ "./actions/form.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\form\\contactForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ContactForm = function ContactForm() {
  _s();

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
      password = values.password,
      success = values.success,
      error = values.error,
      buttonText = values.buttonText;

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      buttonText: "Sending..."
    }));
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_4__["emailContactForm"])({
      name: name,
      email: email,
      message: message
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
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
      lineNumber: 32,
      columnNumber: 9
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      style: {
        display: success ? '' : 'none'
      },
      children: success
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this);
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, e.target.value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "success", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "buttonText", "Send Message"), _objectSpread2)));
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
          lineNumber: 50,
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
          lineNumber: 51,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: name,
          required: true,
          type: "text",
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: email,
          required: true,
          type: "email",
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: buttonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: contactForm()
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwic2VudCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJwYXNzd29yZCIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxDb250YWN0Rm9ybSIsInRoZW4iLCJkYXRhIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFFBQUksRUFBRSxLQUoyQjtBQUtqQ0MsY0FBVSxFQUFFLGNBTHFCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFNBQUssRUFBRTtBQVAwQixHQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxNQVdmUixPQVhlLEdBVzhDTyxNQVg5QyxDQVdmUCxPQVhlO0FBQUEsTUFXTkMsSUFYTSxHQVc4Q00sTUFYOUMsQ0FXTk4sSUFYTTtBQUFBLE1BV0FDLEtBWEEsR0FXOENLLE1BWDlDLENBV0FMLEtBWEE7QUFBQSxNQVdPTyxRQVhQLEdBVzhDRixNQVg5QyxDQVdPRSxRQVhQO0FBQUEsTUFXaUJKLE9BWGpCLEdBVzhDRSxNQVg5QyxDQVdpQkYsT0FYakI7QUFBQSxNQVcwQkMs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QUksRUFBQyxNQUEzRDtBQUFrRSxrQkFBUSxFQUFFa0IsWUFBWSxDQUFDLE1BQUQ7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQVNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxtQkFBUyxFQUFDLGNBQWpCO0FBQWdDLGVBQUssRUFBRWpCLEtBQXZDO0FBQThDLGtCQUFRLE1BQXREO0FBQXVELGNBQUksRUFBQyxPQUE1RDtBQUFvRSxrQkFBUSxFQUFFaUIsWUFBWSxDQUFDLE9BQUQ7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWFJO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFBLG9CQUFxQ2Y7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZ0I7QUFBQSxHQUFwQjs7QUFxQkEsc0JBQ0k7QUFBQSxjQUNLa0IsV0FBVztBQURoQixtQkFESjtBQUtILENBcEVEOztHQUFNeEIsVzs7S0FBQUEsVztBQXNFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5jM2FhNWM5ZGUxNjQ4YTMwMjZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge2VtYWlsQ29udGFjdEZvcm19IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Zvcm1cIjtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc2VudDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogJ1NlbmQgTWVzc2FnZScsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHN1Y2Nlc3MsIGVycm9yLGJ1dHRvblRleHR9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGJ1dHRvblRleHQ6IFwiU2VuZGluZy4uLlwifSlcclxuICAgICAgICBlbWFpbENvbnRhY3RGb3JtKHtuYW1lLCBlbWFpbCwgbWVzc2FnZX0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgc2VudDogdHJ1ZSwgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1lc3NhZ2U6IFwiXCIsIGJ1dHRvblRleHQ6IFwiU2VudFwiLCBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3MgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgYnV0dG9uVGV4dDogXCJTZW5kIE1lc3NhZ2VcIiB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bWVzc2FnZX0gcmVxdWlyZWQgdHlwZT1cInRleHRcIiByb3dzPVwiMTBcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdtZXNzYWdlJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250YWN0Rm9ybSgpIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==