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
      className: "mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
          lineNumber: 31,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: name,
          required: true,
          type: "text",
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: email,
          required: true,
          type: "email",
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: buttonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwic2VudCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJwYXNzd29yZCIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFFBQUksRUFBRSxLQUoyQjtBQUtqQ0MsY0FBVSxFQUFFLGNBTHFCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFNBQUssRUFBRTtBQVAwQixHQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxNQVdmUixPQVhlLEdBVzhDTyxNQVg5QyxDQVdmUCxPQVhlO0FBQUEsTUFXTkMsSUFYTSxHQVc4Q00sTUFYOUMsQ0FXTk4sSUFYTTtBQUFBLE1BV0FDLEtBWEEsR0FXOENLLE1BWDlDLENBV0FMLEtBWEE7QUFBQSxNQVdPTyxRQVhQLEdBVzhDRixNQVg5QyxDQVdPRSxRQVhQO0FBQUEsTUFXaUJKLE9BWGpCLEdBVzhDRSxNQVg5QyxDQVdpQkYsT0FYakI7QUFBQSxNQVcwQkMsS0FYMUIsR0FXOENDLE1BWDlDLENBVzBCRCxLQVgxQjtBQUFBLE1BV2dDRixVQVhoQyxHQVc4Q0csTUFYOUMsQ0FXZ0NILFVBWGhDOztBQWN0QixNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBS0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVosSUFBSTtBQUFBLFdBQUksVUFBQVUsQ0FBQyxFQUFJO0FBQUE7O0FBQzlCSCxlQUFTLGlDQUFNRCxNQUFOLHdMQUFlTixJQUFmLEVBQXNCVSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBL0IsdUtBQTZDLEtBQTdDLHlLQUE2RCxLQUE3RCw0S0FBZ0YsY0FBaEYsb0JBQVQ7QUFDSCxLQUZ3QjtBQUFBLEdBQXpCOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsd0JBQ2hCO0FBQU0sY0FBUSxFQUFFTixXQUFoQjtBQUE2QixlQUFTLEVBQUMsTUFBdkM7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQVUsbUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxlQUFLLEVBQUVWLE9BQTFDO0FBQW1ELGtCQUFRLE1BQTNEO0FBQTRELGNBQUksRUFBQyxNQUFqRTtBQUF3RSxjQUFJLEVBQUMsSUFBN0U7QUFBa0Ysa0JBQVEsRUFBRWEsWUFBWSxDQUFDLFNBQUQ7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxtQkFBUyxFQUFDLGNBQWpCO0FBQWdDLGVBQUssRUFBRVosSUFBdkM7QUFBNkMsa0JBQVEsTUFBckQ7QUFBc0QsY0FBSSxFQUFDLE1BQTNEO0FBQWtFLGtCQUFRLEVBQUVZLFlBQVksQ0FBQyxNQUFEO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sbUJBQVMsRUFBQyxjQUFqQjtBQUFnQyxlQUFLLEVBQUVYLEtBQXZDO0FBQThDLGtCQUFRLE1BQXREO0FBQXVELGNBQUksRUFBQyxPQUE1RDtBQUFvRSxrQkFBUSxFQUFFVyxZQUFZLENBQUMsT0FBRDtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBYUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUEsb0JBQXFDVDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURnQjtBQUFBLEdBQXBCOztBQXFCQSxzQkFDSTtBQUFBLGNBQ0tZLFdBQVc7QUFEaEIsbUJBREo7QUFLSCxDQWpERDs7R0FBTWxCLFc7O0tBQUFBLFc7QUFtRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuMjMzNzFhNGY1YTM5MTA5NGJjNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc2VudDogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogJ1NlbmQgTWVzc2FnZScsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHttZXNzYWdlLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHN1Y2Nlc3MsIGVycm9yLGJ1dHRvblRleHR9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZS50YXJnZXQudmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIGJ1dHRvblRleHQ6IFwiU2VuZCBNZXNzYWdlXCIgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e21lc3NhZ2V9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfSByZXF1aXJlZCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y29udGFjdEZvcm0oKSB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=