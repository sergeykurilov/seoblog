webpackHotUpdate_N_E("pages/signin",{

/***/ "./Components/Header.jsx":
/*!*******************************!*\
  !*** ./Components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
            className: "ml-auto",
            navbar: true,
            children: [Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() ? Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
              var pathname = next_router__WEBPACK_IMPORTED_MODULE_3___default.a.pathname;

              if (pathname == '/signin') {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
              }
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
                    lineNumber: 47,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
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
                    lineNumber: 52,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
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
                lineNumber: 59,
                columnNumber: 84
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 44
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(Example, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiQVBQX05BTUUiLCJpc0F1dGgiLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsIlJvdXRlciIsInJlcGxhY2UiLCJjdXJzb3IiLCJTaWdub3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFDQTs7QUFJQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUd2QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUVBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFzQixXQUFLLE1BQTNCO0FBQTRCLFlBQU0sRUFBQyxJQUFuQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNJLHFFQUFDLGtEQUFEO0FBQVMscUJBQVMsRUFBQyw2QkFBbkI7QUFBQSxzQkFBa0RHLGdEQUFRQTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLHFFQUFDLHdEQUFEO0FBQWUsaUJBQU8sRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJLHFFQUFDLG1EQUFEO0FBQVUsZ0JBQU0sRUFBRUYsTUFBbEI7QUFBMEIsZ0JBQU0sTUFBaEM7QUFBQSxpQ0FDSSxxRUFBQyw4Q0FBRDtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5QixrQkFBTSxNQUEvQjtBQUFBLHVCQUNLSSw0REFBTSxLQUFNQyx1REFBUyxDQUFDLFlBQU07QUFBQSxrQkFDbEJDLFFBRGtCLEdBQ05DLGtEQURNLENBQ2xCRCxRQURrQjs7QUFFekIsa0JBQUdBLFFBQVEsSUFBSSxTQUFmLEVBQXlCO0FBQ3JCQyxrRUFBTSxDQUFDQyxPQUFQLENBQWUsR0FBZjtBQUNIO0FBQ0osYUFMcUIsQ0FBZixnQkFLRDtBQUFBLHNDQUNGLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFDQyx3QkFBTSxFQUFFO0FBQVQsaUJBQWhCO0FBQUEsdUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFNBQVg7QUFBQSx5Q0FDSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURFLGVBTUYscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUNBLHdCQUFNLEVBQUU7QUFBVCxpQkFBaEI7QUFBQSx1Q0FDSSxxRUFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUMsU0FBWDtBQUFBLHlDQUNJLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkU7QUFBQSw0QkFOVixFQXFCS0wsNERBQU0sbUJBQVEscUVBQUMsa0RBQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUNLLHNCQUFNLEVBQUU7QUFBVCxlQUFoQjtBQUFBLDZDQUF3QyxxRUFBQyxrREFBRDtBQUFTLHVCQUFPLEVBQUUsbUJBQU07QUFDM0VDLCtFQUFPLENBQUM7QUFBQSwyQkFBTUgsa0RBQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsQ0FBTjtBQUFBLG1CQUFELENBQVA7QUFDSCxpQkFGc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlDSCxDQTlDRDs7R0FBTVgsTzs7S0FBQUEsTztBQWdEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjZiNWVkY2E2MmZlOGRhY2QwN2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBUFBfTkFNRX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbGxhcHNlLFxyXG4gICAgTmF2YmFyLFxyXG4gICAgTmF2YmFyVG9nZ2xlcixcclxuICAgIE5hdmJhckJyYW5kLFxyXG4gICAgTmF2LFxyXG4gICAgTmF2SXRlbSxcclxuICAgIE5hdkxpbmssXHJcbiAgICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICAgIERyb3Bkb3duVG9nZ2xlLFxyXG4gICAgRHJvcGRvd25NZW51LFxyXG4gICAgRHJvcGRvd25JdGVtLFxyXG4gICAgTmF2YmFyVGV4dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBTaWdub3V0fSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXdlaWdodC1ib2xkXCI+e0FQUF9OQU1FfTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSA/ICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwYXRobmFtZX0gPSBSb3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYXRobmFtZSA9PSAnL3NpZ25pbicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPlNpZ25pbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPlNpZ251cDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoKCkgJiYgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT4gICA8TmF2TGluayBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbm91dCgoKSA9PiBSb3V0ZXIucmVwbGFjZShcIi9zaWduaW5cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TaWdub3V0PC9OYXZMaW5rPiA8L05hdkl0ZW0+fVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=