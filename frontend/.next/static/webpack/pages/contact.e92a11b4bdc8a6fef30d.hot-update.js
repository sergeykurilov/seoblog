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
      success = values.success,
      error = values.error,
      buttonText = values.buttonText;

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      buttonText: "Sending..."
    }));
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_3__["emailContactForm"])({
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
      lineNumber: 33,
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
          lineNumber: 40,
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
          lineNumber: 41,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: name,
          required: true,
          type: "text",
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "lead",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: email,
          required: true,
          type: "email",
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          children: buttonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwic2VudCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJjbGlja1N1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsQ29udGFjdEZvcm0iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRhY3RGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLFFBQUksRUFBRSxFQUYyQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxRQUFJLEVBQUUsS0FKMkI7QUFLakNDLGNBQVUsRUFBRSxjQUxxQjtBQU1qQ0MsV0FBTyxFQUFFLEtBTndCO0FBT2pDQyxTQUFLLEVBQUU7QUFQMEIsR0FBRCxDQUZkO0FBQUEsTUFFZkMsTUFGZTtBQUFBLE1BRVBDLFNBRk87O0FBQUEsTUFZZlIsT0FaZSxHQVlvQ08sTUFacEMsQ0FZZlAsT0FaZTtBQUFBLE1BWU5DLElBWk0sR0FZb0NNLE1BWnBDLENBWU5OLElBWk07QUFBQSxNQVlBQyxLQVpBLEdBWW9DSyxNQVpwQyxDQVlBTCxLQVpBO0FBQUEsTUFZT0csT0FaUCxHQVlvQ0UsTUFacEMsQ0FZT0YsT0FaUDtBQUFBLE1BWWdCQyxLQVpoQixHQVlvQ0MsTUFacEMsQ0FZZ0JELEtBWmhCO0FBQUEsTUFZc0JGLFVB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QUEzRDtBQUFrRSxrQkFBUSxFQUFFbUIsWUFBWSxDQUFDLE1BQUQ7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQVNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxtQkFBUyxFQUFDLGNBQWpCO0FBQWdDLGVBQUssRUFBRWxCLEtBQXZDO0FBQThDLGtCQUFRLE1BQXREO0FBQXVELGNBQUksRUFBQyxPQUE1RDtBQUFvRSxrQkFBUSxFQUFFa0IsWUFBWSxDQUFDLE9BQUQ7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWFJO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFBLG9CQUFxQ2hCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCO0FBQUEsR0FBcEI7O0FBcUJBLHNCQUNJO0FBQUEsZUFDS2EsU0FBUyxFQURkLEVBRUtFLFdBQVcsRUFGaEIsRUFHS0ksV0FBVyxFQUhoQjtBQUFBLGtCQURKO0FBT0gsQ0E3REQ7O0dBQU16QixXOztLQUFBQSxXO0FBK0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmU5MmExMWI0YmRjOGE2ZmVmMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZW1haWxDb250YWN0Rm9ybX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZm9ybVwiO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHNlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6ICdTZW5kIE1lc3NhZ2UnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bWVzc2FnZSwgbmFtZSwgZW1haWwsIHN1Y2Nlc3MsIGVycm9yLGJ1dHRvblRleHR9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGJ1dHRvblRleHQ6IFwiU2VuZGluZy4uLlwifSlcclxuICAgICAgICBlbWFpbENvbnRhY3RGb3JtKHtuYW1lLCBlbWFpbCwgbWVzc2FnZX0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgc2VudDogdHJ1ZSwgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1lc3NhZ2U6IFwiXCIsIGJ1dHRvblRleHQ6IFwiU2VudFwiLCBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3MgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PntlcnJvcn08L2Rpdj5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gc3VjY2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZScgfX0+VGhhbmsgeW91IGZvciBjb250YWN0aW5nIHVzITwvZGl2PlxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgYnV0dG9uVGV4dDogXCJTZW5kIE1lc3NhZ2VcIiB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bWVzc2FnZX0gcmVxdWlyZWQgdHlwZT1cInRleHRcIiByb3dzPVwiMTBcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdtZXNzYWdlJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgIHtjb250YWN0Rm9ybSgpIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==