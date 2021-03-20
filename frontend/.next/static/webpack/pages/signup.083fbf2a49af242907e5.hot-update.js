webpackHotUpdate_N_E("pages/signup",{

/***/ "./Components/SignupForm.jsx":
/*!***********************************!*\
  !*** ./Components/SignupForm.jsx ***!
  \***********************************/
/*! exports provided: SigupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigupForm", function() { return SigupForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");



var _jsxFileName = "C:\\seoblog\\frontend\\Components\\SignupForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var SigupForm = function SigupForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "Sergey",
    "email": "kurilovsergey15@gmail.com",
    "password": "q92e01kl",
    "error": false,
    "loading": false,
    "message": "",
    "showform": true
  }),
      value = _useState[0],
      setValue = _useState[1];

  var name = value.name,
      email = value.email,
      password = value.password,
      error = value.error,
      loading = value.loading,
      showform = value.showform,
      message = value.message;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log("Handle Submit")
    // console.table({...value})

    setValue(_objectSpread(_objectSpread({}, value), {}, {
      loading: true,
      error: false
    }));
    var user = {
      name: name,
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signup"])(user).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          loading: false,
          error: false,
          name: "",
          email: "",
          password: "",
          showform: false,
          message: res.message
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " alert-info"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 31
    }, _this);
  };

  var onChangeHandler = function onChangeHandler(name) {
    return function (e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, Object(C_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: onChangeHandler("name"),
      placeholder: "your name",
      value: value.name,
      type: "text",
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: onChangeHandler("email"),
      placeholder: "your email",
      value: value.email,
      type: "text",
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: onChangeHandler("password"),
      placeholder: "your password",
      value: value.password,
      type: "password",
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-primary",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(SigupForm, "TC4H2tCF5LRxnWZEHJjPHVdVIQM=");

_c = SigupForm;

var _c;

$RefreshReg$(_c, "SigupForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaWdudXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWd1cEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWdudXAiLCJ0aGVuIiwicmVzIiwic2hvd0xvYWRpbmciLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLFFBRHVCO0FBRS9CLGFBQVMsMkJBRnNCO0FBRy9CLGdCQUFZLFVBSG1CO0FBSS9CLGFBQVMsS0FKc0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixlQUFXLEVBTm9CO0FBTy9CLGdCQUFZO0FBUG1CLEdBQUQsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBQUEsTUFXcEJDLElBWG9CLEdBV2tDRixLQVhsQyxDQVdwQkUsSUFYb0I7QUFBQSxNQVdmQyxLQVhlLEdBV2tDSCxLQVhsQyxDQVdmRyxLQVhlO0FBQUEsTUFXVEMsUUFYUyxHQVdrQ0osS0FYbEMsQ0FXVEksUUFYUztBQUFBLE1BV0FDLEtBWEEsR0FXa0NMLEtBWGxDLENBV0FLLEtBWEE7QUFBQSxNQVdNQyxPQVhOLEdBV2tDTixLQVhsQyxDQVdNTSxPQVhOO0FBQUEsTUFXY0MsUUFYZCxHQVdrQ1AsS0FYbEMsQ0FXY08sUUFYZDtBQUFBLE1BV3VCQyxPQVh2QixHQVdrQ1IsS0FYbEMsQ0FXdUJRLE9BWHZCOztBQWEzQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRixHQUR3QixDQUV4QjtBQUNBOztBQUNBVixZQUFRLGlDQUFLRCxLQUFMO0FBQVlNLGFBQU8sRUFBRSxJQUFyQjtBQUEyQkQsV0FBSyxFQUFFO0FBQWxDLE9BQVI7QUFDQSxRQUFNTyxJQUFJLEdBQUc7QUFBQ1YsVUFBSSxFQUFKQSxJQUFEO0FBQU9DLFdBQUssRUFBTEEsS0FBUDtBQUFjQyxjQUFRLEVBQVJBO0FBQWQsS0FBYjtBQUNBUyxnRUFBTSxDQUFDRCxJQUFELENBQU4sQ0FDS0UsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNULFVBQUdBLEdBQUcsQ0FBQ1YsS0FBUCxFQUFhO0FBQ1RKLGdCQUFRLGlDQUFLRCxLQUFMO0FBQVlLLGVBQUssRUFBRVUsR0FBRyxDQUFDVjtBQUF2QixXQUFSO0FBQ0gsT0FGRCxNQUVLO0FBQ0RKLGdCQUFRLGlDQUFLRCxLQUFMO0FBQVlNLGlCQUFPLEVBQUUsS0FBckI7QUFBNEJELGVBQUssRUFBRSxLQUFuQztBQUEwQ0gsY0FBSSxFQUFFLEVBQWhEO0FBQW9EQyxlQUFLLEVBQUUsRUFBM0Q7QUFBK0RDLGtCQUFRLEVBQUUsRUFBekU7QUFBNkVHLGtCQUFRLEVBQUUsS0FBdkY7QUFBOEZDLGlCQUFPLEVBQUVPLEdBQUcsQ0FBQ1A7QUFBM0csV0FBUjtBQUNIO0FBQ0osS0FQTDtBQVVILEdBaEJEOztBQWtCQSxNQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHdCQUFNO0FBQUssZUFBUyxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBLEdBQXBCOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQWYsSUFBSTtBQUFBLFdBQUksVUFBQVEsQ0FBQyxFQUFJO0FBQ2pDVCxjQUFRLGlDQUFLRCxLQUFMO0FBQVlLLGFBQUssRUFBRTtBQUFuQixTQUEyQkgsSUFBM0IsRUFBa0NRLENBQUMsQ0FBQ1EsTUFBRixDQUFTbEIsS0FBM0MsR0FBUjtBQUNILEtBRjJCO0FBQUEsR0FBNUI7O0FBSUEsc0JBQ0k7QUFBTSxZQUFRLEVBQUVTLFlBQWhCO0FBQUEsNEJBQ0k7QUFBTyxjQUFRLEVBQUVRLGVBQWUsQ0FBQyxNQUFELENBQWhDO0FBQTBDLGlCQUFXLEVBQUUsV0FBdkQ7QUFBb0UsV0FBSyxFQUFFakIsS0FBSyxDQUFDRSxJQUFqRjtBQUF1RixVQUFJLEVBQUMsTUFBNUY7QUFBbUcsZUFBUyxFQUFDO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU8sY0FBUSxFQUFFZSxlQUFlLENBQUMsT0FBRCxDQUFoQztBQUEyQyxpQkFBVyxFQUFFLFlBQXhEO0FBQXNFLFdBQUssRUFBRWpCLEtBQUssQ0FBQ0csS0FBbkY7QUFBMEYsVUFBSSxFQUFDLE1BQS9GO0FBQXNHLGVBQVMsRUFBQztBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFPLGNBQVEsRUFBRWMsZUFBZSxDQUFDLFVBQUQsQ0FBaEM7QUFBOEMsaUJBQVcsRUFBRSxlQUEzRDtBQUE0RSxXQUFLLEVBQUVqQixLQUFLLENBQUNJLFFBQXpGO0FBQW1HLFVBQUksRUFBQyxVQUF4RztBQUFtSCxlQUFTLEVBQUM7QUFBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBSUk7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQS9DTTs7R0FBTU4sUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMDgzZmJmMmE0OWFmMjQyOTA3ZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtzaWdudXB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWd1cEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2VyZ2V5XCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcImt1cmlsb3ZzZXJnZXkxNUBnbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwicTkyZTAxa2xcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibG9hZGluZ1wiOiBmYWxzZSxcclxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJcIixcclxuICAgICAgICBcInNob3dmb3JtXCI6IHRydWVcclxuICAgIH0pXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxlcnJvcixsb2FkaW5nLHNob3dmb3JtLG1lc3NhZ2V9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGFuZGxlIFN1Ym1pdFwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoey4uLnZhbHVlfSlcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZX0pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9XHJcbiAgICAgICAgc2lnbnVwKHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IHJlcy5lcnJvcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZmFsc2UsIG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgc2hvd2Zvcm06IGZhbHNlLCBtZXNzYWdlOiByZXMubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXtcIiBhbGVydC1pbmZvXCJ9PjwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJuYW1lXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIG5hbWVcIn0gdmFsdWU9e3ZhbHVlLm5hbWV9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfSBwbGFjZWhvbGRlcj17XCJ5b3VyIGVtYWlsXCJ9IHZhbHVlPXt2YWx1ZS5lbWFpbH0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwicGFzc3dvcmRcIil9IHBsYWNlaG9sZGVyPXtcInlvdXIgcGFzc3dvcmRcIn0gdmFsdWU9e3ZhbHVlLnBhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==