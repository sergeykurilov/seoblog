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
    "showform": true
  }),
      value = _useState[0],
      setValue = _useState[1];

  var name = value.name,
      email = value.email,
      password = value.password,
      error = value.error,
      loading = value.loading,
      showform = value.showform;

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
          error: false
        }));
      }
    });
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
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: onChangeHandler("email"),
      placeholder: "your email",
      value: value.email,
      type: "text",
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: onChangeHandler("password"),
      placeholder: "your password",
      value: value.password,
      type: "password",
      className: "form-control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-primary",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(SigupForm, "ybuXdp9g8Vr0ro+dvJTvENuVUck=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaWdudXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWd1cEZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsInNob3dmb3JtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInNpZ251cCIsInRoZW4iLCJyZXMiLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLFFBRHVCO0FBRS9CLGFBQVMsMkJBRnNCO0FBRy9CLGdCQUFZLFVBSG1CO0FBSS9CLGFBQVMsS0FKc0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixnQkFBWTtBQU5tQixHQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUFBLE1BVXBCQyxJQVZvQixHQVUwQkYsS0FWMUIsQ0FVcEJFLElBVm9CO0FBQUEsTUFVZkMsS0FWZSxHQVUwQkgsS0FWMUIsQ0FVZkcsS0FWZTtBQUFBLE1BVVRDLFFBVlMsR0FVMEJKLEtBVjFCLENBVVRJLFFBVlM7QUFBQSxNQVVBQyxLQVZBLEdBVTBCTCxLQVYxQixDQVVBSyxLQVZBO0FBQUEsTUFVTUMsT0FWTixHQVUwQk4sS0FWMUIsQ0FVTU0sT0FWTjtBQUFBLE1BVWNDLFFBVmQsR0FVMEJQLEtBVjFCLENBVWNPLFFBVmQ7O0FBWTNCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGLEdBRHdCLENBRXhCO0FBQ0E7O0FBQ0FULFlBQVEsaUNBQUtELEtBQUw7QUFBWU0sYUFBTyxFQUFFLElBQXJCO0FBQTJCRCxXQUFLLEVBQUU7QUFBbEMsT0FBUjtBQUNBLFFBQU1NLElBQUksR0FBRztBQUFDVCxVQUFJLEVBQUpBLElBQUQ7QUFBT0MsV0FBSyxFQUFMQSxLQUFQO0FBQWNDLGNBQVEsRUFBUkE7QUFBZCxLQUFiO0FBQ0FRLGdFQUFNLENBQUNELElBQUQsQ0FBTixDQUNLRSxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsVUFBR0EsR0FBRyxDQUFDVCxLQUFQLEVBQWE7QUFDVEosZ0JBQVEsaUNBQUtELEtBQUw7QUFBWUssZUFBSyxFQUFFUyxHQUFHLENBQUNUO0FBQXZCLFdBQVI7QUFDSCxPQUZELE1BRUs7QUFDREosZ0JBQVEsaUNBQUtELEtBQUw7QUFBWU0saUJBQU8sRUFBRSxLQUFyQjtBQUE0QkQsZUFBSyxFQUFFO0FBQW5DLFdBQVI7QUFDSDtBQUNKLEtBUEw7QUFRSCxHQWREOztBQWtCQSxNQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFiLElBQUk7QUFBQSxXQUFJLFVBQUFPLENBQUMsRUFBSTtBQUNqQ1IsY0FBUSxpQ0FBS0QsS0FBTDtBQUFZSyxhQUFLLEVBQUU7QUFBbkIsU0FBMkJILElBQTNCLEVBQWtDTyxDQUFDLENBQUNPLE1BQUYsQ0FBU2hCLEtBQTNDLEdBQVI7QUFDSCxLQUYyQjtBQUFBLEdBQTVCOztBQUlBLHNCQUNJO0FBQU0sWUFBUSxFQUFFUSxZQUFoQjtBQUFBLDRCQUNJO0FBQU8sY0FBUSxFQUFFTyxlQUFlLENBQUMsTUFBRCxDQUFoQztBQUEwQyxpQkFBVyxFQUFFLFdBQXZEO0FBQW9FLFdBQUssRUFBRWYsS0FBSyxDQUFDRSxJQUFqRjtBQUF1RixVQUFJLEVBQUMsTUFBNUY7QUFBbUcsZUFBUyxFQUFDO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU8sY0FBUSxFQUFFYSxlQUFlLENBQUMsT0FBRCxDQUFoQztBQUEyQyxpQkFBVyxFQUFFLFlBQXhEO0FBQXNFLFdBQUssRUFBRWYsS0FBSyxDQUFDRyxLQUFuRjtBQUEwRixVQUFJLEVBQUMsTUFBL0Y7QUFBc0csZUFBUyxFQUFDO0FBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQU8sY0FBUSxFQUFFWSxlQUFlLENBQUMsVUFBRCxDQUFoQztBQUE4QyxpQkFBVyxFQUFFLGVBQTNEO0FBQTRFLFdBQUssRUFBRWYsS0FBSyxDQUFDSSxRQUF6RjtBQUFtRyxVQUFJLEVBQUMsVUFBeEc7QUFBbUgsZUFBUyxFQUFDO0FBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0ExQ007O0dBQU1OLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjI2ZDM4N2Y4MDBjY2UzMjM0M2FmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7c2lnbnVwfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lndXBGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlNlcmdleVwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge25hbWUsZW1haWwscGFzc3dvcmQsZXJyb3IsbG9hZGluZyxzaG93Zm9ybX0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBzaWdudXAodXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogcmVzLmVycm9yfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcIm5hbWVcIil9IHBsYWNlaG9sZGVyPXtcInlvdXIgbmFtZVwifSB2YWx1ZT17dmFsdWUubmFtZX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwiZW1haWxcIil9IHBsYWNlaG9sZGVyPXtcInlvdXIgZW1haWxcIn0gdmFsdWU9e3ZhbHVlLmVtYWlsfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX0gcGxhY2Vob2xkZXI9e1wieW91ciBwYXNzd29yZFwifSB2YWx1ZT17dmFsdWUucGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9