webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Header.jsx":
/*!*******************************!*\
  !*** ./Components/Header.jsx ***!
  \*******************************/
/*! exports provided: redirectUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectUser", function() { return redirectUser; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");



var _jsxFileName = "C:\\seoblog\\frontend\\Components\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();







function redirectUser(location) {
  return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(location);
}

var Example = function Example(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
      color: "light",
      light: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
            className: "text-muted font-weight-bold",
            children: _config__WEBPACK_IMPORTED_MODULE_2__["APP_NAME"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
            className: "ml-auto",
            navbar: true,
            children: [!Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() ? redirectUser("/") : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/signin",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                    children: "Signin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/signup",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                    children: "Signup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this)]
            }, void 0, true), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
              style: {
                cursor: "pointer"
              },
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                onClick: function onClick() {
                  Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["Signout"])(function () {
                    return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/signin");
                  });
                },
                children: "Signout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 84
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 44
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(Example, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Example;
/* harmony default export */ __webpack_exports__["default"] = (Example);

var _c;

$RefreshReg$(_c, "Example");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbInJlZGlyZWN0VXNlciIsImxvY2F0aW9uIiwiUm91dGVyIiwicHVzaCIsIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiQVBQX05BTUUiLCJpc0F1dGgiLCJjdXJzb3IiLCJTaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFjQTtBQUNBO0FBR08sU0FBU0EsWUFBVCxDQUFzQkMsUUFBdEIsRUFBZ0M7QUFDakMsU0FBUUMsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaLENBQVI7QUFDTDs7QUFDRCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUd2QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFzQixXQUFLLE1BQTNCO0FBQTRCLFlBQU0sRUFBQyxJQUFuQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNJLHFFQUFDLGtEQUFEO0FBQVMscUJBQVMsRUFBQyw2QkFBbkI7QUFBQSxzQkFBa0RHLGdEQUFRQTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLHFFQUFDLHdEQUFEO0FBQWUsaUJBQU8sRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJLHFFQUFDLG1EQUFEO0FBQVUsZ0JBQU0sRUFBRUYsTUFBbEI7QUFBMEIsZ0JBQU0sTUFBaEM7QUFBQSxpQ0FDSSxxRUFBQyw4Q0FBRDtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5QixrQkFBTSxNQUEvQjtBQUFBLHVCQUNLLENBQUNJLDREQUFNLEVBQVAsR0FBWVgsWUFBWSxDQUFDLEdBQUQsQ0FBeEIsZ0JBQStCO0FBQUEsc0NBQzVCLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFDWSx3QkFBTSxFQUFFO0FBQVQsaUJBQWhCO0FBQUEsdUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFNBQVg7QUFBQSx5Q0FDSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ0QixlQU01QixxRUFBQyxrREFBRDtBQUFTLHFCQUFLLEVBQUU7QUFBQ0Esd0JBQU0sRUFBRTtBQUFULGlCQUFoQjtBQUFBLHVDQUNJLHFFQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBQyxTQUFYO0FBQUEseUNBQ0kscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFONEI7QUFBQSw0QkFEcEMsRUFjS0QsNERBQU0sbUJBQVEscUVBQUMsa0RBQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUNDLHNCQUFNLEVBQUU7QUFBVCxlQUFoQjtBQUFBLDZDQUF3QyxxRUFBQyxrREFBRDtBQUFTLHVCQUFPLEVBQUUsbUJBQU07QUFDM0VDLCtFQUFPLENBQUM7QUFBQSwyQkFBTVgsa0RBQU0sQ0FBQ1ksT0FBUCxDQUFlLFNBQWYsQ0FBTjtBQUFBLG1CQUFELENBQVA7QUFDSCxpQkFGc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBdkNEOztHQUFNVixPOztLQUFBQSxPO0FBeUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mM2QwYjJhN2IwZDE4YTk1NWJkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7QVBQX05BTUV9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXZiYXJCcmFuZCxcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgICBEcm9wZG93blRvZ2dsZSxcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duSXRlbSxcclxuICAgIE5hdmJhclRleHRcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgU2lnbm91dH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFVzZXIobG9jYXRpb24pIHtcclxuICAgICAgcmV0dXJuICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbn1cclxuY29uc3QgRXhhbXBsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtd2VpZ2h0LWJvbGRcIj57QVBQX05BTUV9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0F1dGgoKSA/IHJlZGlyZWN0VXNlcihcIi9cIik6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWduaW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWdudXA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+ICAgPE5hdkxpbmsgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoXCIvc2lnbmluXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2lnbm91dDwvTmF2TGluaz4gPC9OYXZJdGVtPn1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwic291cmNlUm9vdCI6IiJ9