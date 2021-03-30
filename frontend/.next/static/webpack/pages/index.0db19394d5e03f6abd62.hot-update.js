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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\seoblog\\frontend\\Components\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();










next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

var Example = function Example(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
              style: {
                color: "black",
                cursor: "pointer"
              },
              className: "font-weight-bold",
              children: _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 24
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
                    lineNumber: 63,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
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
                    lineNumber: 68,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)]
            }, void 0, true), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role !== 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
              style: {
                cursor: "pointer"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/user",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                  children: [Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().name, "'s Dashboard"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 66
            }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
              style: {
                cursor: "pointer"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/admin",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                  children: [Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().name, "'s Admin Dashboard"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 66
            }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
              style: {
                cursor: "pointer"
              },
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                onClick: function onClick() {
                  Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["Signout"])(function () {
                    return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace("/signin");
                  });
                },
                children: "Signout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 84
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiY29sb3IiLCJjdXJzb3IiLCJBUFBfTkFNRSIsImlzQXV0aCIsInJvbGUiLCJuYW1lIiwiU2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBS0E7O0FBR0FBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUFDLEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDQyxLQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQUgsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNHLElBQVYsRUFBSjtBQUFBLENBQWxDOztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFBTCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0csSUFBVixFQUFKO0FBQUEsQ0FBL0I7O0FBR0EsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDaEJDLE1BRGdCO0FBQUEsTUFDUkMsU0FEUTs7QUFHdkIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLGlEQUFEO0FBQVEs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QUEsbUJBQUQsQ0FBUDtBQUNILGlCQUZzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0VILENBckVEOztHQUFNYixPOztLQUFBQSxPO0FBdUVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZGIxOTM5NGQ1ZTAzZjZhYmQ2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENvbGxhcHNlLFxyXG4gICAgTmF2YmFyLFxyXG4gICAgTmF2YmFyVG9nZ2xlcixcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBTaWdub3V0fSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7QVBQX05BTUV9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCAnLi4vLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuXHJcbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aDU+PE5hdkxpbmsgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntBUFBfTkFNRX08L05hdkxpbms+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKntpc0F1dGgoKSA/ICB1c2VFZmZlY3QoKCkgPT4geyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGNvbnN0IHtwYXRobmFtZX0gPSBSb3V0ZXIqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICBpZihwYXRobmFtZSA9PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT0gJy9zaWdudXAnKXsqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIH0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0pIDogIDw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8TmF2TGluaz5TaWduaW48L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L05hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8TmF2TGluaz5TaWdudXA8L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L05hdkl0ZW0+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC8+fSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0F1dGgoKSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+U2lnbmluPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+U2lnbnVwPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSAhPT0gMSAmJiAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPntpc0F1dGgoKS5uYW1lfSdzIERhc2hib2FyZDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlICE9PSAwICYmICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPntpc0F1dGgoKS5uYW1lfSdzIEFkbWluIERhc2hib2FyZDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoKCkgJiYgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT4gICA8TmF2TGluayBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbm91dCgoKSA9PiBSb3V0ZXIucmVwbGFjZShcIi9zaWduaW5cIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TaWdub3V0PC9OYXZMaW5rPiA8L05hdkl0ZW0+fVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=