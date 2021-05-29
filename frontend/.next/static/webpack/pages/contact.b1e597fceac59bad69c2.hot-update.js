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
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 42
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwic2VudCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJwYXNzd29yZCIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxDb250YWN0Rm9ybSIsInRoZW4iLCJkYXRhIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFFBQUksRUFBRSxLQUoyQjtBQUtqQ0MsY0FBVSxFQUFFLGNBTHFCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFNBQUssRUFBRTtBQVAwQixHQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxNQVdmUixPQVhlLEdBVzhDTyxNQVg5QyxDQVdmUCxPQVhlO0FBQUEsTUFXTkMsSUFYTSxHQVc4Q00sTUFYOUMsQ0FXTk4sSUFYTTtBQUFBLE1BV0FDLEtBWEEsR0FXOENLLE1BWDlDLENBV0FMLEtBWEE7QUFBQSxNQVdPTyxRQVhQLEdBVzhDRixNQVg5QyxDQVdPRSxRQVhQO0FBQUEsTUFXaUJKLE9BWGpCLEdBVzhDRSxNQVg5QyxDQVdpQkYsT0FYakI7QUFBQSxNQVcwQkMs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c0QsY0FBSSxFQUFDLE1BQTNEO0FBQWtFLGtCQUFRLEVBQUVrQixZQUFZLENBQUMsTUFBRDtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLG1CQUFTLEVBQUMsY0FBakI7QUFBZ0MsZUFBSyxFQUFFakIsS0FBdkM7QUFBOEMsa0JBQVEsTUFBdEQ7QUFBdUQsY0FBSSxFQUFDLE9BQTVEO0FBQW9FLGtCQUFRLEVBQUVpQixZQUFZLENBQUMsT0FBRDtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBYUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUEsb0JBQXFDZjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURnQjtBQUFBLEdBQXBCOztBQXFCQSxzQkFDSTtBQUFBLGVBQ0tZLFNBQVMsRUFEZCxFQUVLRSxXQUFXLEVBRmhCLEVBR0tJLFdBQVcsRUFIaEI7QUFBQSxrQkFESjtBQU9ILENBN0REOztHQUFNeEIsVzs7S0FBQUEsVztBQStEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5iMWU1OTdmY2VhYzU5YmFkNjljMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge2VtYWlsQ29udGFjdEZvcm19IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Zvcm1cIjtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc2VudDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogJ1NlbmQgTWVzc2FnZScsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHN1Y2Nlc3MsIGVycm9yLGJ1dHRvblRleHR9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGJ1dHRvblRleHQ6IFwiU2VuZGluZy4uLlwifSlcclxuICAgICAgICBlbWFpbENvbnRhY3RGb3JtKHtuYW1lLCBlbWFpbCwgbWVzc2FnZX0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgc2VudDogdHJ1ZSwgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1lc3NhZ2U6IFwiXCIsIGJ1dHRvblRleHQ6IFwiU2VudFwiLCBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3MgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PntlcnJvcn08L2Rpdj5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gc3VjY2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZScgfX0+VGhhbmsgeW91IGZvciBjb250YWN0aW5nIHVzITwvZGl2PlxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCBidXR0b25UZXh0OiBcIlNlbmQgTWVzc2FnZVwiIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2xpY2tTdWJtaXR9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXttZXNzYWdlfSByZXF1aXJlZCB0eXBlPVwidGV4dFwiIHJvd3M9XCIxMFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ21lc3NhZ2UnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmFtZX0gcmVxdWlyZWQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtlbWFpbH0gcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAge2NvbnRhY3RGb3JtKCkgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9