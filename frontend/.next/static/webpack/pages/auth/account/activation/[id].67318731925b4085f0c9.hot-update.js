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
  var tokenId = router.query.id;

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
    if (tokenId) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(tokenId),
          decodedName = _jwt$decode.decodedName;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: name,
        token: tokenId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsImlkIiwidXNlU3RhdGUiLCJuYW1lIiwidG9rZW4iLCJlcnJvciIsImxvYWRpbmciLCJzdWNjZXNzIiwic2hvd0J1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsImp3dCIsImRlY29kZSIsImRlY29kZWROYW1lIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJ0aGVuIiwiZGF0YSIsInNob3dMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQ2xDLE1BQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWFDLEVBQTNCOztBQURrQyxrQkFHTkMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsV0FBTyxFQUFFLEtBSndCO0FBS2pDQyxXQUFPLEVBQUUsS0FMd0I7QUFNakNDLGNBQVUsRUFBRTtBQU5xQixHQUFELENBSEY7QUFBQSxNQUczQkMsTUFIMkI7QUFBQSxNQUduQkMsU0FIbUI7O0FBQUEsTUFZM0JQLElBWjJCLEdBWXlCTSxNQVp6QixDQVkzQk4sSUFaMkI7QUFBQSxNQVlyQkMsS0FacUIsR0FZeUJLLE1BWnpCLENBWXJCTCxLQVpxQjtBQUFBLE1BWWRFLE9BWmMsR0FZeUJHLE1BWnpCLENBWWRILE9BWmM7QUFBQSxNQVlMQyxPQVpLLEdBWXlCRSxNQVp6QixDQVlMRixPQVpLO0FBQUEsTUFZSUMsVUFaSixHQVl5QkMsTUFaekIsQ0FZSUQsVUFaSjtBQUFBLE1BWWdCSCxLQVpoQixHQVl5QkksTUFaekIsQ0FZZ0JKLEtBWmhCO0FBZWxDTSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHWixPQUFILEVBQVc7QUFBQSx3QkFDaUJhLG1EQUFHLENBQUNDLE1BQUosQ0FBV2QsT0FBWCxDQURqQjtBQUFBLFVBQ0NlLFdBREQsZUFDQ0EsV0FERDs7QUFFUEosZUFBUyxpQ0FBS0QsTUFBTDtBQUFhTixZQUFJLEVBQUVBLElBQW5CO0FBQXlCQyxhQUFLLEVBQUVMO0FBQWhDLFNBQVQ7QUFDSDtBQUNKLEdBTFEsRUFLUCxFQUxPLENBQVQ7O0FBT0EsTUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FQLGFBQVMsaUNBQUtELE1BQUw7QUFBYUgsYUFBTyxFQUFFLElBQXRCO0FBQTRCRCxXQUFLLEVBQUU7QUFBbkMsT0FBVDtBQUNBYSxnRUFBTSxDQUFDO0FBQUNkLFdBQUssRUFBTEE7QUFBRCxLQUFELENBQU4sQ0FBZ0JlLElBQWhCLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUN6QixVQUFHQSxJQUFJLENBQUNmLEtBQVIsRUFBYztBQUNWSyxpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhSixlQUFLLEVBQUVlLElBQUksQ0FBQ2YsS0FBekI7QUFBZ0NDLGlCQUFPLEVBQUUsS0FBekM7QUFBZ0RFLG9CQUFVLEVBQUU7QUFBNUQsV0FBVDtBQUNILE9BRkQsTUFFSztBQUNERSxpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhSCxpQkFBTyxFQUFFLEtBQXRCO0FBQTZCQyxpQkFBTyxFQUFFLElBQXRDO0FBQTRDQyxvQkFBVSxFQUFFO0FBQXhELFdBQVQ7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVZEOztBQVlBLE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTWYsT0FBTyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKLEdBQThCLEVBQTNDO0FBQUEsR0FBcEI7O0FBQ0FnQixTQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFDQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLDJCQUEwQkEsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS2tCLFdBQVcsRUFGaEIsRUFHS2hCLEtBQUssSUFBSUEsS0FIZCxFQUlLRSxPQUFPLElBQUksK0RBSmhCLEVBS0tDLFVBQVUsaUJBQUk7QUFBUSxlQUFPLEVBQUVPLFdBQWpCO0FBQThCLGlCQUFTLEVBQUMseUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBakREOztHQUFNbEIsZTs7S0FBQUEsZTtBQW1EUyxxRUFBQTJCLDhEQUFVLENBQUMzQixlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9hY3RpdmF0aW9uL1tpZF0uNjczMTg3MzE5MjViNDA4NWYwYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge3NpZ251cH0gZnJvbSBcIi4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlciwgd2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHtyb3V0ZXJ9KSA9PiB7XHJcbiAgICBsZXQgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS5pZFxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBzaG93QnV0dG9uOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCB0b2tlbiwgbG9hZGluZywgc3VjY2Vzcywgc2hvd0J1dHRvbiwgZXJyb3J9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodG9rZW5JZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGVjb2RlZE5hbWUgfSA9IGp3dC5kZWNvZGUodG9rZW5JZClcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIG5hbWU6IG5hbWUsIHRva2VuOiB0b2tlbklkfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCJ9KVxyXG4gICAgICAgIHNpZ251cCh7dG9rZW59KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UsIHNob3dCdXR0b246IGZhbHNlfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIHNob3dCdXR0b246IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiBsb2FkaW5nID8gKDxoMj5Mb2FkaW5nLi4uLi4uPC9oMj4pIDogXCJcIlxyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYi00XCI+SGV5IHtuYW1lfSwgUmVhZHkgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50PzwvaDM+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiBlcnJvcn1cclxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFjdGl2YXRlZCB5b3VyIGFjY291bnQuIFBsZWFzZSBzaWduIGluLlwifVxyXG4gICAgICAgICAgICAgICAge3Nob3dCdXR0b24gJiYgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj5BY3RpdmF0ZSBBY2NvdW50PC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2YXRlQWNjb3VudClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==