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
    name: "",
    newPassword: "",
    message: "",
    error: "",
    showMessage: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var name = values.name,
      newPassword = values.newPassword,
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
      lineNumber: 21,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }, _this);
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      error: "",
      message: ""
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["resetPassword"])({
      newPassword: newPassword,
      resetPasswordLink: router.query.resetPasswordLink
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          newPassword: ""
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
          lineNumber: 38,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          value: newPassword,
          required: true,
          type: "password",
          onChange: function onChange(e) {
            return setValues(_objectSpread(_objectSpread({}, values), {}, {
              newPassword: e.currentTarget.value
            }));
          }
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
          type: "submit",
          className: "btn btn-primary",
          children: "Send"
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
      lineNumber: 36,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [showError(), showSuccess(), showMessage && contactForm()]
      }, void 0, true, {
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
    lineNumber: 49,
    columnNumber: 9
  }, _this);
};

_s(ForgotPassword, "9QaRQFYOsJXdVJ7q3efBoqf2IqM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bcmVzZXRQYXNzd29yZExpbmtdLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwidXNlU3RhdGUiLCJuYW1lIiwibmV3UGFzc3dvcmQiLCJtZXNzYWdlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsImNsaWNrU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNldFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZExpbmsiLCJxdWVyeSIsInRoZW4iLCJkYXRhIiwicGFzc3dvcmQiLCJjb250YWN0Rm9ybSIsImN1cnJlbnRUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFR0Msc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxlQUFXLEVBQUUsRUFGb0I7QUFHakNDLFdBQU8sRUFBRSxFQUh3QjtBQUlqQ0MsU0FBSyxFQUFFLEVBSjBCO0FBS2pDQyxlQUFXLEVBQUU7QUFMb0IsR0FBRCxDQUZYO0FBQUEsTUFFbEJDLE1BRmtCO0FBQUEsTUFFVkMsU0FGVTs7QUFVekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQVZ5QixNQVlsQlIsSUFaa0IsR0FZK0JLLE1BWi9CLENBWWxCTCxJQVprQjtBQUFBLE1BWWJDLFdBWmEsR0FZK0JJLE1BWi9CLENBWWJKLFdBWmE7QUFBQSxNQVlBQyxPQVpBLEdBWStCRyxNQVovQixDQVlBSCxPQVpBO0FBQUEsTUFZU0MsS0Fa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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyx5REFBRDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsbUJBQ0tDLFNBQVMsRUFEZCxFQUVLRSxXQUFXLEVBRmhCLEVBR0tYLFdBQVcsSUFBSW9CLFdBQVcsRUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FyREQ7O0dBQU0xQixjO1VBVWFVLHFEOzs7S0FWYlYsYztBQXVEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bcmVzZXRQYXNzd29yZExpbmtdLjBlMTM3MzE0Y2E3NDRiZGY4ZmM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1BhZ2VIZWFkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhZ2VzSGVhZGVyXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHtyZXNldFBhc3N3b3JkfSBmcm9tIFwiLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCB7bmFtZSxuZXdQYXNzd29yZCwgbWVzc2FnZSwgZXJyb3IsIHNob3dNZXNzYWdlfSA9IHZhbHVlc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KTtcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+e2Vycm9yfTwvZGl2PlxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiBtZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PlxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IFwiXCIsIG1lc3NhZ2U6IFwiXCJ9KVxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQoe25ld1Bhc3N3b3JkLHJlc2V0UGFzc3dvcmRMaW5rOiByb3V0ZXIucXVlcnkucmVzZXRQYXNzd29yZExpbmt9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBuZXdQYXNzd29yZDogXCJcIn0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHBhc3N3b3JkOiBcIlwiLCBzaG93TWVzc2FnZTogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2xpY2tTdWJtaXR9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25ld1Bhc3N3b3JkfSByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlcyh7Li4udmFsdWVzLCBuZXdQYXNzd29yZDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIvPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dNZXNzYWdlICYmIGNvbnRhY3RGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=