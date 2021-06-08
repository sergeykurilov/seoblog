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
    var tokenId = router.query.id;

    if (tokenId) {
      var _name = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(tokenId);

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name.name,
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
      lineNumber: 44,
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
        lineNumber: 49,
        columnNumber: 17
      }, _this), showLoading(), error && error, success && "You have successfully activated your account. Please sign in.", showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: clickSubmit,
        className: "btn btn-outline-primary",
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 32
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwiZXJyb3IiLCJsb2FkaW5nIiwic3VjY2VzcyIsInNob3dCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJ0b2tlbklkIiwicXVlcnkiLCJpZCIsImp3dCIsImRlY29kZSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwIiwidGhlbiIsImRhdGEiLCJzaG93TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFHTkMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsV0FBTyxFQUFFLEtBSndCO0FBS2pDQyxXQUFPLEVBQUUsS0FMd0I7QUFNakNDLGNBQVUsRUFBRTtBQU5xQixHQUFELENBSEY7QUFBQSxNQUczQkMsTUFIMkI7QUFBQSxNQUduQkMsU0FIbUI7O0FBQUEsTUFZM0JQLElBWjJCLEdBWXlCTSxNQVp6QixDQVkzQk4sSUFaMkI7QUFBQSxNQVlyQkMsS0FacUIsR0FZeUJLLE1BWnpCLENBWXJCTCxLQVpxQjtBQUFBLE1BWWRFLE9BWmMsR0FZeUJHLE1BWnpCLENBWWRILE9BWmM7QUFBQSxNQVlMQyxPQVpLLEdBWXlCRSxNQVp6QixDQVlMRixPQVpLO0FBQUEsTUFZSUMsVUFaSixHQVl5QkMsTUFaekIsQ0FZSUQsVUFaSjtBQUFBLE1BWWdCSCxLQVpoQixHQVl5QkksTUFaekIsQ0FZZ0JKLEtBWmhCO0FBZWxDTSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxPQUFPLEdBQUdYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhQyxFQUEzQjs7QUFDQSxRQUFHRixPQUFILEVBQVc7QUFDUCxVQUFNVCxLQUFJLEdBQUdZLG1EQUFHLENBQUNDLE1BQUosQ0FBV0osT0FBWCxDQUFiOztBQUNBRixlQUFTLGlDQUFLRCxNQUFMO0FBQWFOLFlBQUksRUFBRUEsS0FBSSxDQUFDQSxJQUF4QjtBQUE4QkMsYUFBSyxFQUFFUTtBQUFyQyxTQUFUO0FBQ0g7QUFDSixHQU5RLEVBTVAsRUFOTyxDQUFUOztBQVFBLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FULGFBQVMsaUNBQUtELE1BQUw7QUFBYUgsYUFBTyxFQUFFLElBQXRCO0FBQTRCRCxXQUFLLEVBQUU7QUFBbkMsT0FBVDtBQUNBZSxnRUFBTSxDQUFDO0FBQUNoQixXQUFLLEVBQUxBO0FBQUQsS0FBRCxDQUFOLENBQWdCaUIsSUFBaEIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3pCLFVBQUdBLElBQUksQ0FBQ2pCLEtBQVIsRUFBYztBQUNWSyxpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhSixlQUFLLEVBQUVpQixJQUFJLENBQUNqQixLQUF6QjtBQUFnQ0MsaUJBQU8sRUFBRSxLQUF6QztBQUFnREUsb0JBQVUsRUFBRTtBQUE1RCxXQUFUO0FBQ0gsT0FGRCxNQUVLO0FBQ0RFLGlCQUFTLGlDQUFLRCxNQUFMO0FBQWFILGlCQUFPLEVBQUUsS0FBdEI7QUFBNkJDLGlCQUFPLEVBQUUsSUFBdEM7QUFBNENDLG9CQUFVLEVBQUU7QUFBeEQsV0FBVDtBQUNIO0FBQ0osS0FORDtBQU9ILEdBVkQ7O0FBWUEsTUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNakIsT0FBTyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKLEdBQThCLEVBQTNDO0FBQUEsR0FBcEI7O0FBQ0FrQixTQUFPLENBQUNDLEdBQVIsQ0FBWXRCLElBQVo7QUFDQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLDJCQUEwQkEsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS29CLFdBQVcsRUFGaEIsRUFHS2xCLEtBQUssSUFBSUEsS0FIZCxFQUlLRSxPQUFPLElBQUksK0RBSmhCLEVBS0tDLFVBQVUsaUJBQUk7QUFBUSxlQUFPLEVBQUVTLFdBQWpCO0FBQThCLGlCQUFTLEVBQUMseUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBbEREOztHQUFNakIsZTs7S0FBQUEsZTtBQW9EUyxxRUFBQTBCLDhEQUFVLENBQUMxQixlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9hY3RpdmF0aW9uL1tpZF0uYTVhMWJjNjQ4ZDAzYmY5OTIzMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7UGFnZUhlYWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZXNIZWFkZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge3NpZ251cH0gZnJvbSBcIi4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlciwgd2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHtyb3V0ZXJ9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBzaG93QnV0dG9uOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCB0b2tlbiwgbG9hZGluZywgc3VjY2Vzcywgc2hvd0J1dHRvbiwgZXJyb3J9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuSWQgPSByb3V0ZXIucXVlcnkuaWRcclxuICAgICAgICBpZih0b2tlbklkKXtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGp3dC5kZWNvZGUodG9rZW5JZClcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIG5hbWU6IG5hbWUubmFtZSwgdG9rZW46IHRva2VuSWR9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogXCJcIn0pXHJcbiAgICAgICAgc2lnbnVwKHt0b2tlbn0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSwgc2hvd0J1dHRvbjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgc2hvd0J1dHRvbjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IGxvYWRpbmcgPyAoPGgyPkxvYWRpbmcuLi4uLi48L2gyPikgOiBcIlwiXHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBiLTRcIj5IZXkge25hbWV9LCBSZWFkeSB0byBhY3RpdmF0ZSB5b3VyIGFjY291bnQ/PC9oMz5cclxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIGVycm9yfVxyXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYWN0aXZhdGVkIHlvdXIgYWNjb3VudC4gUGxlYXNlIHNpZ24gaW4uXCJ9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiPkFjdGl2YXRlIEFjY291bnQ8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9