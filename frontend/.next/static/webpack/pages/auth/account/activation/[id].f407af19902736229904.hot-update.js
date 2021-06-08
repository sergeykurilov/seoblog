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
    token: '',
    error: '',
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      token = values.token,
      error = values.error,
      loading = values.loading,
      success = values.success,
      showButton = values.showButton;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = router.query.id;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token),
          _name = _jwt$decode.name;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name,
        token: token
      }));
    }
  }, [router]);

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: false
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
      lineNumber: 41,
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
        lineNumber: 46,
        columnNumber: 17
      }, _this), showLoading(), error && error, success && 'You have successfully activated your account. Please signin.', showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-outline-primary",
        onClick: clickSubmit,
        children: "Activate Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(ActivateAccount, "AzDcj/d+djTlYJ8UGemf/7irxNU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwiZXJyb3IiLCJsb2FkaW5nIiwic3VjY2VzcyIsInNob3dCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwiand0IiwiZGVjb2RlIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJ0aGVuIiwiZGF0YSIsInNob3dMb2FkaW5nIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxLQUx3QjtBQU1qQ0MsY0FBVSxFQUFFO0FBTnFCLEdBQUQsQ0FEQTtBQUFBLE1BQzdCQyxNQUQ2QjtBQUFBLE1BQ3JCQyxTQURxQjs7QUFBQSxNQVU1QlAsSUFWNEIsR0FVeUJNLE1BVnpCLENBVTVCTixJQVY0QjtBQUFBLE1BVXRCQyxLQVZzQixHQVV5QkssTUFWekIsQ0FVdEJMLEtBVnNCO0FBQUEsTUFVZkMsS0FWZSxHQVV5QkksTUFWekIsQ0FVZkosS0FWZTtBQUFBLE1BVVJDLE9BVlEsR0FVeUJHLE1BVnpCLENBVVJILE9BVlE7QUFBQSxNQVVDQyxPQVZELEdBVXlCRSxNQVZ6QixDQVVDRixPQVZEO0FBQUEsTUFVVUMsVUFWVixHQVV5QkMsTUFWekIsQ0FVVUQsVUFWVjtBQVlwQ0cseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVAsS0FBSyxHQUFHSCxNQUFNLENBQUNXLEtBQVAsQ0FBYUMsRUFBekI7O0FBQ0EsUUFBSVQsS0FBSixFQUFXO0FBQUEsd0JBQ1VVLG1EQUFHLENBQUNDLE1BQUosQ0FBV1gsS0FBWCxDQURWO0FBQUEsVUFDQ0QsS0FERCxlQUNDQSxJQUREOztBQUVQTyxlQUFTLGlDQUFNRCxNQUFOO0FBQWNOLFlBQUksRUFBSkEsS0FBZDtBQUFvQkMsYUFBSyxFQUFMQTtBQUFwQixTQUFUO0FBQ0g7QUFDSixHQU5RLEVBTU4sQ0FBQ0gsTUFBRCxDQU5NLENBQVQ7O0FBUUEsTUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxhQUFPLEVBQUUsSUFBdkI7QUFBNkJELFdBQUssRUFBRTtBQUFwQyxPQUFUO0FBQ0FjLGdFQUFNLENBQUM7QUFBRWYsV0FBSyxFQUFMQTtBQUFGLEtBQUQsQ0FBTixDQUFrQmdCLElBQWxCLENBQXVCLFVBQUFDLElBQUksRUFBSTtBQUMzQixVQUFJQSxJQUFJLENBQUNoQixLQUFULEVBQWdCO0FBQ1pLLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNKLGVBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQTFCO0FBQWlDQyxpQkFBTyxFQUFFLEtBQTFDO0FBQWlERSxvQkFBVSxFQUFFO0FBQTdELFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSEUsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsaUJBQU8sRUFBRSxLQUF2QjtBQUE4QkMsaUJBQU8sRUFBRSxJQUF2QztBQUE2Q0Msb0JBQVUsRUFBRTtBQUF6RCxXQUFUO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FWRDs7QUFZQSxNQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU9oQixPQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBeUIsRUFBdkM7QUFBQSxHQUFwQjs7QUFFQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLDJCQUEwQkgsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS21CLFdBQVcsRUFGaEIsRUFHS2pCLEtBQUssSUFBSUEsS0FIZCxFQUlLRSxPQUFPLElBQUksOERBSmhCLEVBS0tDLFVBQVUsaUJBQ1A7QUFBUSxpQkFBUyxFQUFDLHlCQUFsQjtBQUE0QyxlQUFPLEVBQUVRLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FqREQ7O0dBQU1oQixlOztLQUFBQSxlO0FBb0RTLHFFQUFBdUIsOERBQVUsQ0FBQ3ZCLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRpb24vW2lkXS5mNDA3YWYxOTkwMjczNjIyOTkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7c2lnbnVwfSBmcm9tIFwiLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyLCB3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5jb25zdCBBY3RpdmF0ZUFjY291bnQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIHNob3dCdXR0b246IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgdG9rZW4sIGVycm9yLCBsb2FkaW5nLCBzdWNjZXNzLCBzaG93QnV0dG9uIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gand0LmRlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbmFtZSwgdG9rZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pO1xyXG4gICAgICAgIHNpZ251cCh7IHRva2VuIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSwgc2hvd0J1dHRvbjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBzaG93QnV0dG9uOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGgyPkxvYWRpbmcuLi48L2gyPiA6ICcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGItNFwiPkhleSB7bmFtZX0sIFJlYWR5IHRvIGFjdGl2YXRlIHlvdXIgYWNjb3VudD88L2gzPlxyXG4gICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgZXJyb3J9XHJcbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGFjdGl2YXRlZCB5b3VyIGFjY291bnQuIFBsZWFzZSBzaWduaW4uJ31cclxuICAgICAgICAgICAgICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17Y2xpY2tTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmF0ZSBBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=