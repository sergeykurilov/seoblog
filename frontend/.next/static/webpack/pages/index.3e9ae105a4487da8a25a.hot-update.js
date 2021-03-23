webpackHotUpdate_N_E("pages/index",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var pathname = next_router__WEBPACK_IMPORTED_MODULE_3___default.a.pathname;

    if (pathname == '/signin') {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  });
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
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
            className: "ml-auto",
            navbar: true,
            children: [!Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
                    lineNumber: 48,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 29
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
                    lineNumber: 53,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
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
                lineNumber: 58,
                columnNumber: 84
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 44
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwiQVBQX05BTUUiLCJpc0F1dGgiLCJjdXJzb3IiLCJTaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDaEJDLE1BRGdCO0FBQUEsTUFDUkMsU0FEUTs7QUFHdkIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFDQUcseURBQVMsQ0FBQyxZQUFNO0FBQUEsUUFDTEMsUUFESyxHQUNPQyxrREFEUCxDQUNMRCxRQURLOztBQUVaLFFBQUdBLFFBQVEsSUFBSSxTQUFmLEVBQTBCO0FBQ3RCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FMUSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxpREFBRDtBQUFRLFdBQUssRUFBQyxPQUFkO0FBQXNCLFdBQUssTUFBM0I7QUFBNEIsWUFBTSxFQUFDLElBQW5DO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxxQkFBUyxFQUFDLDZCQUFuQjtBQUFBLHNCQUFrREMsZ0RBQVFBO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUkscUVBQUMsd0RBQUQ7QUFBZSxpQkFBTyxFQUFFTDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0kscUVBQUMsbURBQUQ7QUFBVSxnQkFBTSxFQUFFRixNQUFsQjtBQUEwQixnQkFBTSxNQUFoQztBQUFBLGlDQUNJLHFFQUFDLDhDQUFEO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQXlCLGtCQUFNLE1BQS9CO0FBQUEsdUJBRUssQ0FBQ1EsNERBQU0sRUFBUCxpQkFBYTtBQUFBLHNDQUNkLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFDQyx3QkFBTSxFQUFFO0FBQVQsaUJBQWhCO0FBQUEsdUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFNBQVg7QUFBQSx5Q0FDSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjLGVBTVYscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUNBLHdCQUFNLEVBQUU7QUFBVCxpQkFBaEI7QUFBQSx1Q0FDQSxxRUFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUMsU0FBWDtBQUFBLHlDQUNJLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTlU7QUFBQSw0QkFGbEIsRUFlS0QsNERBQU0sbUJBQVEscUVBQUMsa0RBQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUNDLHNCQUFNLEVBQUU7QUFBVCxlQUFoQjtBQUFBLDZDQUF3QyxxRUFBQyxrREFBRDtBQUFTLHVCQUFPLEVBQUUsbUJBQU07QUFDM0VDLCtFQUFPLENBQUM7QUFBQSwyQkFBTUwsa0RBQU0sQ0FBQ00sT0FBUCxDQUFlLFNBQWYsQ0FBTjtBQUFBLG1CQUFELENBQVA7QUFDSCxpQkFGc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBN0NEOztHQUFNZCxPOztLQUFBQSxPO0FBK0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZTlhZTEwNWE0NDg3ZGE4YTI1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QVBQX05BTUV9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXZiYXJCcmFuZCxcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgICBEcm9wZG93blRvZ2dsZSxcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duSXRlbSxcclxuICAgIE5hdmJhclRleHRcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgU2lnbm91dH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBFeGFtcGxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3BhdGhuYW1lfSA9IFJvdXRlclxyXG4gICAgICAgIGlmKHBhdGhuYW1lID09ICcvc2lnbmluJyApe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZm9udC13ZWlnaHQtYm9sZFwiPntBUFBfTkFNRX08L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0F1dGgoKSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+U2lnbmluPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWdudXA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiAgIDxOYXZJdGVtIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PiAgIDxOYXZMaW5rIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKFwiL3NpZ25pblwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNpZ25vdXQ8L05hdkxpbms+IDwvTmF2SXRlbT59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==