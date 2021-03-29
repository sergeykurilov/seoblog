webpackHotUpdate_N_E("pages/user",{

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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
              style: {
                color: "black",
                cursor: "pointer"
              },
              className: "font-weight-bold",
              children: _config__WEBPACK_IMPORTED_MODULE_2__["APP_NAME"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
                    lineNumber: 54,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
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
                    lineNumber: 59,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
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
                  lineNumber: 67,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 66
            }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
              style: {
                cursor: "pointer"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/admin",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
                  children: ["$", Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().name, "'s Admin Dashboard"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 66
            }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
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
                lineNumber: 90,
                columnNumber: 84
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 44
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiY29sb3IiLCJjdXJzb3IiLCJBUFBfTkFNRSIsImlzQXV0aCIsInJvbGUiLCJuYW1lIiwiU2lnbm91dCIsIlJvdXRlciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBOztBQUlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBR3ZCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEdBQWY7O0FBRUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxpREFBRDtBQUFRLFdBQUssRUFBQyxPQUFkO0FBQXNCLFdBQUssTUFBM0I7QUFBNEIsWUFBTSxFQUFDLElBQW5DO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0c7QUFBQSxtQ0FBSSxxRUFBQyxrREFBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0cscUJBQUssRUFBRSxPQUFSO0FBQWlCQyxzQkFBTSxFQUFFO0FBQXpCLGVBQWhCO0FBQXFELHVCQUFTLEVBQUMsa0JBQS9EO0FBQUEsd0JBQW1GQyxnREFBUUE7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUkscUVBQUMsd0RBQUQ7QUFBZSxpQkFBTyxFQUFFSDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0kscUVBQUMsbURBQUQ7QUFBVSxnQkFBTSxFQUFFRixNQUFsQjtBQUEwQixnQkFBTSxNQUFoQztBQUFBLGlDQUNJLHFFQUFDLDhDQUFEO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQXlCLGtCQUFNLE1BQS9CO0FBQUEsdUJBbUJLLENBQUNNLDREQUFNLEVBQVAsaUJBQWE7QUFBQSxzQ0FDVixxRUFBQyxrREFBRDtBQUFTLHFCQUFLLEVBQUU7QUFBQ0Ysd0JBQU0sRUFBRTtBQUFULGlCQUFoQjtBQUFBLHVDQUNJLHFFQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBQyxTQUFYO0FBQUEseUNBQ0kscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVSxlQU1WLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFDQSx3QkFBTSxFQUFFO0FBQVQsaUJBQWhCO0FBQUEsdUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFNBQVg7QUFBQSx5Q0FDSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5VO0FBQUEsNEJBbkJsQixFQWlDS0UsNERBQU0sTUFBTUEsNERBQU0sR0FBR0MsSUFBVCxLQUFrQixDQUE5QixpQkFBb0MscUVBQUMsa0RBQUQ7QUFBUyxtQkFBSyxFQUFFO0FBQUNILHNCQUFNLEVBQUU7QUFBVCxlQUFoQjtBQUFBLHFDQUNqQyxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsT0FBWDtBQUFBLHVDQUNJLHFFQUFDLGtEQUFEO0FBQUEsNkJBQVVFLDREQUFNLEdBQUdFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEaUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQ3pDLEVBc0NLRiw0REFBTSxNQUFNQSw0REFBTSxHQUFHQyxJQUFULEtBQWtCLENBQTlCLGlCQUFvQyxxRUFBQyxrREFBRDtBQUFTLG1CQUFLLEVBQUU7QUFBQ0gsc0JBQU0sRUFBRTtBQUFULGVBQWhCO0FBQUEscUNBQ2pDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxRQUFYO0FBQUEsdUNBQ0kscUVBQUMsa0RBQUQ7QUFBQSxrQ0FBV0UsNERBQU0sR0FBR0UsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURpQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRDekMsRUEwREtGLDREQUFNLG1CQUFRLHFFQUFDLGtEQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFDRixzQkFBTSxFQUFFO0FBQVQsZUFBaEI7QUFBQSw2Q0FBd0MscUVBQUMsa0RBQUQ7QUFBUyx1QkFBTyxFQUFFLG1CQUFNO0FBQzNFSywrRUFBTyxDQUFDO0FBQUEsMkJBQU1DLGtEQUFNLENBQUNDLE9BQVAsQ0FBZSxTQUFmLENBQU47QUFBQSxtQkFBRCxDQUFQO0FBQ0gsaUJBRnNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4RUgsQ0FuRkQ7O0dBQU1kLE87O0tBQUFBLE87QUFxRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIuNmQ5NTM4YzllZjYwYzczNzY5Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FQUF9OQU1FfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBOYXZiYXIsXHJcbiAgICBOYXZiYXJUb2dnbGVyLFxyXG4gICAgTmF2LFxyXG4gICAgTmF2SXRlbSxcclxuICAgIE5hdkxpbmssXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtpc0F1dGgsIFNpZ25vdXR9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRXhhbXBsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxoNT48TmF2TGluayBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e0FQUF9OQU1FfTwvTmF2TGluaz48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qe2lzQXV0aCgpID8gIHVzZUVmZmVjdCgoKSA9PiB7Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgY29uc3Qge3BhdGhuYW1lfSA9IFJvdXRlciovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGlmKHBhdGhuYW1lID09ICcvc2lnbmluJyB8fCBwYXRobmFtZSA9PSAnL3NpZ251cCcpeyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qfSkgOiAgPD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxOYXZMaW5rPlNpZ25pbjwvTmF2TGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvTmF2SXRlbT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxOYXZMaW5rPlNpZ251cDwvTmF2TGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvTmF2SXRlbT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Lz59Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzQXV0aCgpICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWduaW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWdudXA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlICE9PSAxICYmICA8TmF2SXRlbSBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+e2lzQXV0aCgpLm5hbWV9J3MgRGFzaGJvYXJkPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgIT09IDAgJiYgIDxOYXZJdGVtIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+JHtpc0F1dGgoKS5uYW1lfSdzIEFkbWluIERhc2hib2FyZDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+IH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qe2lzQXV0aCgpICYmIDw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxOYXZMaW5rPkFkbWluPC9OYXZMaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9OYXZJdGVtPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxOYXZJdGVtIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxOYXZMaW5rPlVzZXI8L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L05hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Lz59Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmICAgPE5hdkl0ZW0gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+ICAgPE5hdkxpbmsgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoXCIvc2lnbmluXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2lnbm91dDwvTmF2TGluaz4gPC9OYXZJdGVtPn1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwic291cmNlUm9vdCI6IiJ9