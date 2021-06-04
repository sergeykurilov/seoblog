webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");



var _jsxFileName = "E:\\seoblog\\frontend\\components\\Header.jsx",
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

var navigation = [{
  name: 'Blog',
  href: '/blogs'
}, {
  name: 'Contact Us',
  href: '/contact'
}, {
  name: 'About us',
  href: '#'
}, {
  name: '',
  href: '#'
}];

var Example = function Example(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
      children: function children(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative pt-6 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              className: "relative flex items-center justify-between sm:h-10 lg:justify-start",
              "aria-label": "Global",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex items-center justify-between w-full md:w-auto",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "sr-only",
                      children: "Workflow"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "h-8 w-auto sm:h-10",
                      src: "https://res.cloudinary.com/dbdtcrbpz/image/upload/v1622655344/usertesting-u-logo-02_gjfdwd.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "-mr-2 flex items-center md:hidden",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__["Popover"].Button, {
                      className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Open main menu"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__["MenuIcon"], {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hidden md:block md:ml-10 md:pr-4 md:space-x-8",
                children: navigation.map(function (item) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: item.href,
                    className: "text-base font-medium text-gray-500 hover:text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: ["  ", item.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 45
                    }, _this)
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__["Transition"], {
            show: open,
            as: react__WEBPACK_IMPORTED_MODULE_3__["Fragment"],
            enter: "duration-150 ease-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "duration-100 ease-in",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__["Popover"].Panel, {
              focus: true,
              "static": true,
              className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-5 pt-4 flex items-center justify-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "-mr-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__["Popover"].Button, {
                      className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Close main menu"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__["XIcon"], {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-2 pt-2 pb-3 space-y-1",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: item.href,
                      className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                      children: item.name
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this)]
        }, void 0, true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsIkV4YW1wbGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwib3BlbiIsIm1hcCIsIml0ZW0iLCJGcmFnbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxrREFBTSxDQUFDQyxrQkFBUCxHQUE0QixVQUFBQyxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0MsS0FBVixFQUFKO0FBQUEsQ0FBL0I7O0FBQ0FKLGtEQUFNLENBQUNLLHFCQUFQLEdBQStCLFVBQUFILEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDRyxJQUFWLEVBQUo7QUFBQSxDQUFsQzs7QUFDQU4sa0RBQU0sQ0FBQ08sa0JBQVAsR0FBNEIsVUFBQUwsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNHLElBQVYsRUFBSjtBQUFBLENBQS9COztBQUNBLElBQU1FLFVBQVUsR0FBRyxDQUNmO0FBQUVDLE1BQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FEZSxFQUVmO0FBQUVELE1BQUksRUFBRSxZQUFSO0FBQXNCQyxNQUFJLEVBQUU7QUFBNUIsQ0FGZSxFQUdmO0FBQUVELE1BQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FIZSxFQUlmO0FBQUVELE1BQUksRUFBRSxFQUFSO0FBQVlDLE1BQUksRUFBRTtBQUFsQixDQUplLENBQW5COztBQU9BLElB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O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQVFJO0FBQUssNkJBQVMsRUFBQyxPQUFmO0FBQUEsMkNBQ0kscUVBQUMseURBQUQsQ0FBUyxNQUFUO0FBQWdCLCtCQUFTLEVBQUMsNExBQTFCO0FBQUEsOENBQ0k7QUFBTSxpQ0FBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBTyxpQ0FBUyxFQUFDLFNBQWpCO0FBQTJCLHVDQUFZO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFnQkk7QUFBSywyQkFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0taLFVBQVUsQ0FBQ1UsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSx3Q0FDWjtBQUVJLDBCQUFJLEVBQUVBLElBQUksQ0FBQ1QsSUFGZjtBQUdJLCtCQUFTLEVBQUMscUdBSGQ7QUFBQSxnQ0FLS1MsSUFBSSxDQUFDVjtBQUxWLHVCQUNTVSxJQUFJLENBQUNWLElBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEWTtBQUFBLG1CQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcENKO0FBQUEsd0JBREg7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQThKSCxDQXJLRDs7R0FBTUUsTzs7S0FBQUEsTztBQXVLU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MvW3NsdWddLmUzMzMzYzgzMjg4NzFlOWExNjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENvbGxhcHNlLFxyXG4gICAgTmF2YmFyLFxyXG4gICAgTmF2YmFyVG9nZ2xlcixcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBzaWdub3V0fSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7QVBQX05BTUV9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtQb3BvdmVyLCBUcmFuc2l0aW9ufSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtNZW51SWNvbiwgWEljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gICAgeyBuYW1lOiAnQmxvZycsIGhyZWY6ICcvYmxvZ3MnIH0sXHJcbiAgICB7IG5hbWU6ICdDb250YWN0IFVzJywgaHJlZjogJy9jb250YWN0JyB9LFxyXG4gICAgeyBuYW1lOiAnQWJvdXQgdXMnLCBocmVmOiAnIycgfSxcclxuICAgIHsgbmFtZTogJycsIGhyZWY6ICcjJyB9LFxyXG5dXHJcblxyXG5jb25zdCBFeGFtcGxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwdC02IHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNtOmgtMTAgbGc6anVzdGlmeS1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdsb2JhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWdyb3cgZmxleC1zaHJpbmstMCBsZzpmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Xb3JrZmxvdzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG8gc206aC0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RiZHRjcmJwei9pbWFnZS91cGxvYWQvdjE2MjI2NTUzNDQvdXNlcnRlc3RpbmctdS1sb2dvLTAyX2dqZmR3ZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBtZDptbC0xMCBtZDpwci00IG1kOnNwYWNlLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5uYW1lfSBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+ICB7aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJkdXJhdGlvbi0xNTAgZWFzZS1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJkdXJhdGlvbi0xMDAgZWFzZS1pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBpbnNldC14LTAgcC0yIHRyYW5zaXRpb24gdHJhbnNmb3JtIG9yaWdpbi10b3AtcmlnaHQgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbWFyay1pbmRpZ28tNjAwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgey8qPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj4qL31cclxuICAgICAgICAgICAgey8qICAgIDxMaW5rIGhyZWY9XCIvXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntBUFBfTkFNRX08L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDw+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8TmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dzXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPkJsb2dzPC9OYXZMaW5rPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxOYXZJdGVtPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5Db250YWN0PC9OYXZMaW5rPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPC8+Ki99XHJcblxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICB7IWlzQXV0aCgpICYmICgqL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDw+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWduaW48L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5TaWdudXA8L05hdkxpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8Lz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgKX0qL31cclxuXHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwICYmICgqL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxOYXZJdGVtPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz57YCR7aXNBdXRoKCkubmFtZX0ncyBEYXNoYm9hcmRgfTwvTmF2TGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICl9Ki99XHJcblxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICB7aXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSAmJiAoKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8TmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPntgJHtpc0F1dGgoKS5uYW1lfSdzIERhc2hib2FyZGB9PC9OYXZMaW5rPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgKX0qL31cclxuXHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIHtpc0F1dGgoKSAmJiAoKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8TmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKGAvc2lnbmluYCkpfT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgU2lnbm91dCovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgKX0qL31cclxuXHJcbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxOYXZJdGVtPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2NydWQvYmxvZ1wiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB0ZXh0LXdoaXRlXCIgPldyaXRlIGEgYmxvZzwvTmF2TGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9OYXZJdGVtPiovfVxyXG4gICAgICAgICAgICB7LyogICAgICAgIDwvTmF2PiovfVxyXG4gICAgICAgICAgICB7LyogICAgPC9Db2xsYXBzZT4qL31cclxuICAgICAgICAgICAgey8qPC9OYXZiYXI+Ki99XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==