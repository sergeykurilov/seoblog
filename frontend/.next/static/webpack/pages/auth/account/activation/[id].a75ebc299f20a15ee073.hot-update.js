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
    name: "",
    token: "",
    error: "",
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      token = values.token,
      loading = values.loading,
      success = values.success,
      showButton = values.showButton,
      error = values.error;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = router.query.id;
    console.log(token);

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token),
          _name = _jwt$decode.name;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name,
        token: token
      }));
    }
  }, []);

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
      children: "Loading......"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 42
    }, _this) : "";
  };

  console.log(name);
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
      }, _this), showLoading(), error && error, success && "You have successfully activated your account. Please sign in.", showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: clickSubmit,
        className: "btn btn-outline-primary",
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 32
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

_s(ActivateAccount, "gJc8wUmydN/xvLkb2uHmXjwhI5Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwiZXJyb3IiLCJsb2FkaW5nIiwic3VjY2VzcyIsInNob3dCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwiY29uc29sZSIsImxvZyIsImp3dCIsImRlY29kZSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwIiwidGhlbiIsImRhdGEiLCJzaG93TG9hZGluZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxLQUx3QjtBQU1qQ0MsY0FBVSxFQUFFO0FBTnFCLEdBQUQsQ0FERjtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxTQURtQjs7QUFBQSxNQVUzQlAsSUFWMkIsR0FVeUJNLE1BVnpCLENBVTNCTixJQVYyQjtBQUFBLE1BVXJCQyxLQVZxQixHQVV5QkssTUFWekIsQ0FVckJMLEtBVnFCO0FBQUEsTUFVZEUsT0FWYyxHQVV5QkcsTUFWekIsQ0FVZEgsT0FWYztBQUFBLE1BVUxDLE9BVkssR0FVeUJFLE1BVnpCLENBVUxGLE9BVks7QUFBQSxNQVVJQyxVQVZKLEdBVXlCQyxNQVZ6QixDQVVJRCxVQVZKO0FBQUEsTUFVZ0JILEtBVmhCLEdBVXlCSSxNQVZ6QixDQVVnQkosS0FWaEI7QUFhbENNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlQLEtBQUssR0FBR0gsTUFBTSxDQUFDVyxLQUFQLENBQWFDLEVBQXpCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaOztBQUNBLFFBQUdBLEtBQUgsRUFBUztBQUFBLHdCQUNVWSxtREFBRyxDQUFDQyxNQUFKLENBQVdiLEtBQVgsQ0FEVjtBQUFBLFVBQ0VELEtBREYsZUFDRUEsSUFERjs7QUFFTE8sZUFBUyxpQ0FBS0QsTUFBTDtBQUFhTixZQUFJLEVBQUVBLEtBQW5CO0FBQXlCQyxhQUFLLEVBQUVBO0FBQWhDLFNBQVQ7QUFDSDtBQUNKLEdBUFEsRUFPUCxFQVBPLENBQVQ7O0FBU0EsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVYsYUFBUyxpQ0FBS0QsTUFBTDtBQUFhSCxhQUFPLEVBQUUsSUFBdEI7QUFBNEJELFdBQUssRUFBRTtBQUFuQyxPQUFUO0FBQ0FnQixnRUFBTSxDQUFDO0FBQUNqQixXQUFLLEVBQUxBO0FBQUQsS0FBRCxDQUFOLENBQWdCa0IsSUFBaEIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3pCLFVBQUdBLElBQUksQ0FBQ2xCLEtBQVIsRUFBYztBQUNWSyxpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhSixlQUFLLEVBQUVrQixJQUFJLENBQUNsQixLQUF6QjtBQUFnQ0MsaUJBQU8sRUFBRSxLQUF6QztBQUFnREUsb0JBQVUsRUFBRTtBQUE1RCxXQUFUO0FBQ0gsT0FGRCxNQUVLO0FBQ0RFLGlCQUFTLGlDQUFLRCxNQUFMO0FBQWFILGlCQUFPLEVBQUUsS0FBdEI7QUFBNkJDLGlCQUFPLEVBQUUsSUFBdEM7QUFBNENDLG9CQUFVLEVBQUU7QUFBeEQsV0FBVDtBQUNIO0FBQ0osS0FORDtBQU9ILEdBVkQ7O0FBWUEsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTWxCLE9BQU8sZ0JBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSixHQUE4QixFQUEzQztBQUFBLEdBQXBCOztBQUNBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWVosSUFBWjtBQUNBLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUEsMkJBQTBCQSxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLcUIsV0FBVyxFQUZoQixFQUdLbkIsS0FBSyxJQUFJQSxLQUhkLEVBSUtFLE9BQU8sSUFBSSwrREFKaEIsRUFLS0MsVUFBVSxpQkFBSTtBQUFRLGVBQU8sRUFBRVUsV0FBakI7QUFBOEIsaUJBQVMsRUFBQyx5QkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0FqREQ7O0dBQU1sQixlOztLQUFBQSxlO0FBbURTLHFFQUFBeUIsOERBQVUsQ0FBQ3pCLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vW2lkXS5hNzVlYmMyOTlmMjBhMTVlZTA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7c2lnbnVwfSBmcm9tIFwiLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyLCB3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5jb25zdCBBY3RpdmF0ZUFjY291bnQgPSAoe3JvdXRlcn0pID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBzaG93QnV0dG9uOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCB0b2tlbiwgbG9hZGluZywgc3VjY2Vzcywgc2hvd0J1dHRvbiwgZXJyb3J9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZX0gPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbmFtZTogbmFtZSwgdG9rZW46IHRva2VufSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCJ9KVxyXG4gICAgICAgIHNpZ251cCh7dG9rZW59KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UsIHNob3dCdXR0b246IGZhbHNlfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIHNob3dCdXR0b246IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiBsb2FkaW5nID8gKDxoMj5Mb2FkaW5nLi4uLi4uPC9oMj4pIDogXCJcIlxyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYi00XCI+SGV5IHtuYW1lfSwgUmVhZHkgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50PzwvaDM+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiBlcnJvcn1cclxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFjdGl2YXRlZCB5b3VyIGFjY291bnQuIFBsZWFzZSBzaWduIGluLlwifVxyXG4gICAgICAgICAgICAgICAge3Nob3dCdXR0b24gJiYgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj5BY3RpdmF0ZSBBY2NvdW50PC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2YXRlQWNjb3VudClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==