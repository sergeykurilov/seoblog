webpackHotUpdate_N_E("pages/auth/account/activation/[id]",{

/***/ "./pages/auth/account/activation/[id].js":
/*!***********************************************!*\
  !*** ./pages/auth/account/activation/[id].js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/pagesHeader */ "./components/pagesHeader.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\auth\\account\\activation\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ActivateAccount = function ActivateAccount(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    password: '',
    email: '',
    token: '',
    error: '',
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      email = values.email,
      password = values.password,
      token = values.token,
      error = values.error,
      loading = values.loading,
      success = values.success,
      showButton = values.showButton;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = router.query.id;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token),
          _name = _jwt$decode.name,
          _email = _jwt$decode.email,
          _password = _jwt$decode.password;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name,
        token: token,
        email: _email,
        password: _password
      }));
    }
  }, [router]);

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: ""
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["signup"])({
      token: token
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false,
          showButton: false
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          success: true,
          showButton: false
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 42
    }, _this) : '';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "pb-4",
        children: ["Hey ", name, ", Ready to activate your account?"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), showLoading(), error && error, success && 'You have successfully activated your account. Please signin.', showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-outline-primary",
        onClick: clickSubmit,
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(ActivateAccount, "kcZFFjHhCHrcWISGZ8rCrYOdCHU=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ActivateAccount));

var _c, _c2;

$RefreshReg$(_c, "ActivateAccount");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJ0b2tlbiIsImVycm9yIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzaG93QnV0dG9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwicXVlcnkiLCJpZCIsImp3dCIsImRlY29kZSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwIiwidGhlbiIsImRhdGEiLCJzaG93TG9hZGluZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFlBQVEsRUFBRSxFQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxTQUFLLEVBQUUsRUFKMEI7QUFLakNDLFNBQUssRUFBRSxFQUwwQjtBQU1qQ0MsV0FBTyxFQUFFLEtBTndCO0FBT2pDQyxXQUFPLEVBQUUsS0FQd0I7QUFRakNDLGNBQVUsRUFBRTtBQVJxQixHQUFELENBREY7QUFBQSxNQUMzQkMsTUFEMkI7QUFBQSxNQUNuQkMsU0FEbUI7O0FBQUEsTUFZM0JULElBWjJCLEdBWTBDUSxNQVoxQyxDQVkzQlIsSUFaMkI7QUFBQSxNQVlyQkUsS0FacUIsR0FZMENNLE1BWjFDLENBWXJCTixLQVpxQjtBQUFBLE1BWWRELFFBWmMsR0FZMENPLE1BWjFDLENBWWRQLFFBWmM7QUFBQSxNQVlKRSxLQVpJLEdBWTBDSyxNQVoxQyxDQVlKTCxLQVpJO0FBQUEsTUFZR0MsS0FaSCxHQVkwQ0ksTUFaMUMsQ0FZR0osS0FaSDtBQUFBLE1BWVVDLE9BWlYsR0FZMENHLE1BWjFDLENBWVVILE9BWlY7QUFBQSxNQVltQkMsT0FabkIsR0FZMENFLE1BWjFDLENBWW1CRixPQVpuQjtBQUFBLE1BWTRCQyxVQVo1QixHQVkwQ0MsTUFaMUMsQ0FZNEJELFVBWjVCO0FBY2xDRyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJUCxLQUFLLEdBQUdMLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhQyxFQUF6Qjs7QUFDQSxRQUFJVCxLQUFKLEVBQVc7QUFBQSx3QkFDeUJVLG1EQUFHLENBQUNDLE1BQUosQ0FBV1gsS0FBWCxDQUR6QjtBQUFBLFVBQ0FILEtBREEsZUFDQUEsSUFEQTtBQUFBLFVBQ01FLE1BRE4sZUFDTUEsS0FETjtBQUFBLFVBQ2FELFNBRGIsZUFDYUEsUUFEYjs7QUFFUFEsZUFBUyxpQ0FBS0QsTUFBTDtBQUFhUixZQUFJLEVBQUpBLEtBQWI7QUFBbUJHLGFBQUssRUFBTEEsS0FBbkI7QUFBMEJELGFBQUssRUFBTEEsTUFBMUI7QUFBaUNELGdCQUFRLEVBQVJBO0FBQWpDLFNBQVQ7QUFDSDtBQUNKLEdBTlEsRUFNTixDQUFDSCxNQUFELENBTk0sQ0FBVDs7QUFRQSxNQUFNaUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBUyxpQ0FBS0QsTUFBTDtBQUFhSCxhQUFPLEVBQUUsSUFBdEI7QUFBNEJELFdBQUssRUFBRTtBQUFuQyxPQUFUO0FBQ0FjLGdFQUFNLENBQUM7QUFBQ2YsV0FBSyxFQUFMQTtBQUFELEtBQUQsQ0FBTixDQUFnQmdCLElBQWhCLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUN6QixVQUFJQSxJQUFJLENBQUNoQixLQUFULEVBQWdCO0FBQ1pLLGlCQUFTLGlDQUFLRCxNQUFMO0FBQWFKLGVBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQXpCO0FBQWdDQyxpQkFBTyxFQUFFLEtBQXpDO0FBQWdERSxvQkFBVSxFQUFFO0FBQTVELFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSEUsaUJBQVMsaUNBQUtELE1BQUw7QUFBYUgsaUJBQU8sRUFBRSxLQUF0QjtBQUE2QkMsaUJBQU8sRUFBRSxJQUF0QztBQUE0Q0Msb0JBQVUsRUFBRTtBQUF4RCxXQUFUO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FWRDs7QUFZQSxNQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU9oQixPQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBeUIsRUFBdkM7QUFBQSxHQUFwQjs7QUFFQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLDJCQUEwQkwsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS3FCLFdBQVcsRUFGaEIsRUFHS2pCLEtBQUssSUFBSUEsS0FIZCxFQUlLRSxPQUFPLElBQUksOERBSmhCLEVBS0tDLFVBQVUsaUJBQ1A7QUFBUSxpQkFBUyxFQUFDLHlCQUFsQjtBQUE0QyxlQUFPLEVBQUVRLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FuREQ7O0dBQU1sQixlOztLQUFBQSxlO0FBc0RTLHFFQUFBeUIsOERBQVUsQ0FBQ3pCLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vW2lkXS4wYWNhYzVjODVjYjcyOTZkYjA1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7c2lnbnVwfSBmcm9tIFwiLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyLCB3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5jb25zdCBBY3RpdmF0ZUFjY291bnQgPSAoe3JvdXRlcn0pID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHNob3dCdXR0b246IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHRva2VuLCBlcnJvciwgbG9hZGluZywgc3VjY2Vzcywgc2hvd0J1dHRvbn0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmR9ID0gand0LmRlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBuYW1lLCB0b2tlbiwgZW1haWwsIHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogXCJcIn0pO1xyXG4gICAgICAgIHNpZ251cCh7dG9rZW59KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSwgc2hvd0J1dHRvbjogZmFsc2V9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgc2hvd0J1dHRvbjogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGgyPkxvYWRpbmcuLi48L2gyPiA6ICcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGItNFwiPkhleSB7bmFtZX0sIFJlYWR5IHRvIGFjdGl2YXRlIHlvdXIgYWNjb3VudD88L2gzPlxyXG4gICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgZXJyb3J9XHJcbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFjdGl2YXRlZCB5b3VyIGFjY291bnQuIFBsZWFzZSBzaWduaW4uJ31cclxuICAgICAgICAgICAgICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17Y2xpY2tTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmF0ZSBBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=