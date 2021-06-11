webpackHotUpdate_N_E("pages/admin",{

/***/ "./components/AdminLayout.jsx":
/*!************************************!*\
  !*** ./components/AdminLayout.jsx ***!
  \************************************/
/*! exports provided: AdminLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayout", function() { return AdminLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");



var _jsxFileName = "E:\\seoblog\\frontend\\components\\AdminLayout.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var navigation = [{
  name: 'Home',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["HomeIcon"],
  current: true
}, {
  name: 'Create Category',
  href: '/admin/crud/category',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["ClockIcon"],
  current: false
}, {
  name: 'Create Tag',
  href: '/admin/crud/tag',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["ScaleIcon"],
  current: false
}, {
  name: 'Create Blog',
  href: '/admin/crud/blog',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["CreditCardIcon"],
  current: false
}, {
  name: 'Update/Delete Blog',
  href: '/admin/crud/blogs',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["DocumentReportIcon"],
  current: false
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

var AdminLayout = function AdminLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Root, {
      show: sidebarOpen,
      as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
        as: "div",
        "static": true,
        className: "fixed inset-0 flex z-40 lg:hidden",
        open: sidebarOpen,
        onClose: setSidebarOpen,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
          as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"].Overlay, {
            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
          as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
          enter: "transition ease-in-out duration-300 transform",
          enterFrom: "-translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transform",
          leaveFrom: "translate-x-0",
          leaveTo: "-translate-x-full",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-900",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
              as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
              enter: "ease-in-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in-out duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 -mr-12 pt-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                  onClick: function onClick() {
                    return setSidebarOpen(false);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["XIcon"], {
                    className: "h-6 w-6 text-white",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, _this)]
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
              lineNumber: 71,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0 flex items-center px-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-8 w-auto",
                src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
                alt: "Easywire logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              className: "mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto",
              "aria-label": "Sidebar",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "px-2 space-y-1",
                children: navigation.map(function (item) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    href: item.href,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: classNames(item.current ? 'bg-cyan-800 text-white' : 'text-white hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md'),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                        className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 49
                      }, _this), item.name]
                    }, item.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-6 pt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-2 space-y-1",
                  children: secondaryNavigation.map(function (item) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                      href: item.href,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:text-white hover:bg-cyan-600",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                          className: "mr-4 h-6 w-6 text-cyan-200",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 53
                        }, _this), item.name]
                      }, item.name, true, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-shrink-0 w-14",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden lg:flex lg:flex-shrink-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col w-64",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col flex-grow bg-gray-900 pt-5 pb-4 overflow-y-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center flex-shrink-0 px-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-8 w-auto",
              src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
              alt: "Easywire logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto",
            "aria-label": "Sidebar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "px-2 space-y-1",
              children: navigation.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: item.href,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-white hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'),
                    "aria-current": item.current ? 'page' : undefined,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                      className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 45
                    }, _this), item.name]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-6 pt-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "px-2 space-y-1",
                children: secondaryNavigation.map(function (item) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    href: item.href,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-cyan-600",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                        className: "mr-4 h-6 w-6 text-cyan-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 49
                      }, _this), item.name]
                    }, item.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(AdminLayout, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");

_c = AdminLayout;

var _c;

$RefreshReg$(_c, "AdminLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbkxheW91dC5qc3giXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIkhvbWVJY29uIiwiY3VycmVudCIsIkNsb2NrSWNvbiIsIlNjYWxlSWNvbiIsIkNyZWRpdENhcmRJY29uIiwiRG9jdW1lbnRSZXBvcnRJY29uIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJGcmFnbWVudCIsIm1hcCIsIml0ZW0iLCJzZWNvbmRhcnlOYXZpZ2F0aW9uIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQVFBLElBQU1BLFVBQVUsR0FBRyxDQUNmO0FBQUNDLE1BQUksRUFBRSxNQUFQO0FBQWVDLE1BQUksRUFBRSxHQUFyQjtBQUEwQkMsTUFBSSxFQUFFQyxpRUFBaEM7QUFBMENDLFNBQU8sRUFBRTtBQUFuRCxDQURlLEVBRWY7QUFBQ0osTUFBSSxFQUFFLGlCQUFQO0FBQTBCQyxNQUFJLEVBQUUsc0JBQWhDO0FBQXdEQyxNQUFJLEVBQUVHLGtFQUE5RDtBQUF5RUQsU0FBTyxFQUFFO0FBQWxGLENBRmUsRUFHZjtBQUFDSixNQUFJLEVBQUUsWUFBUDtBQUFxQkMsTUFBSSxFQUFFLGlCQUEzQjtBQUE4Q0MsTUFBSSxFQUFFSSxrRUFBcEQ7QUFBK0RGLFNBQU8sRUFBRTtBQUF4RSxDQUhlLEVBSWY7QUFBQ0osTUFBSSxFQUFFLGFBQVA7QUFBc0JDLE1BQUksRUFBRSxrQkFBNUI7QUFBZ0RDLE1BQUksRUFBRUssdUVBQXREO0FBQXNFSCxTQUFPLEVBQUU7QUFBL0UsQ0FKZSxFQUtmO0FBQUNKLE1BQUksRUFBRSxvQkFBUDtBQUE2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d2VicGFjay9wYWdlcy9hZG1pbi42OTViYTY4ZTFmMzU4MjM3ZGQ1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFsb2csIFRyYW5zaXRpb259IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCZWxsSWNvbixcclxuICAgIENsb2NrSWNvbixcclxuICAgIENvZ0ljb24sXHJcbiAgICBDcmVkaXRDYXJkSWNvbixcclxuICAgIERvY3VtZW50UmVwb3J0SWNvbixcclxuICAgIEhvbWVJY29uLFxyXG4gICAgTWVudUFsdDFJY29uLFxyXG4gICAgUXVlc3Rpb25NYXJrQ2lyY2xlSWNvbixcclxuICAgIFNjYWxlSWNvbixcclxuICAgIFNoaWVsZENoZWNrSWNvbixcclxuICAgIFVzZXJHcm91cEljb24sXHJcbiAgICBYSWNvbixcclxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcbmltcG9ydCB7XHJcbiAgICBDYXNoSWNvbixcclxuICAgIENoZWNrQ2lyY2xlSWNvbixcclxuICAgIENoZXZyb25Eb3duSWNvbixcclxuICAgIENoZXZyb25SaWdodEljb24sXHJcbiAgICBPZmZpY2VCdWlsZGluZ0ljb24sXHJcbiAgICBTZWFyY2hJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcbmNvbnN0IG5hdmlnYXRpb24gPSBbXHJcbiAgICB7bmFtZTogJ0hvbWUnLCBocmVmOiAnIycsIGljb246IEhvbWVJY29uLCBjdXJyZW50OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnQ3JlYXRlIENhdGVnb3J5JywgaHJlZjogJy9hZG1pbi9jcnVkL2NhdGVnb3J5JywgaWNvbjogQ2xvY2tJY29uLCBjdXJyZW50OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NyZWF0ZSBUYWcnLCBocmVmOiAnL2FkbWluL2NydWQvdGFnJywgaWNvbjogU2NhbGVJY29uLCBjdXJyZW50OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NyZWF0ZSBCbG9nJywgaHJlZjogJy9hZG1pbi9jcnVkL2Jsb2cnLCBpY29uOiBDcmVkaXRDYXJkSWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdVcGRhdGUvRGVsZXRlIEJsb2cnLCBocmVmOiAnL2FkbWluL2NydWQvYmxvZ3MnLCBpY29uOiBEb2N1bWVudFJlcG9ydEljb24sIGN1cnJlbnQ6IGZhbHNlfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZG1pbkxheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e3NpZGViYXJPcGVufSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggei00MCBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3NpZGViYXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3NldFNpZGViYXJPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNjAwIGJnLW9wYWNpdHktNzVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCItdHJhbnNsYXRlLXgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2xhdGUteC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2xhdGUteC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIi10cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIGZsZXggZmxleC1jb2wgbWF4LXcteHMgdy1mdWxsIHB0LTUgcGItNCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCAtbXItMTIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2Ugc2lkZWJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy9lYXN5d2lyZS1sb2dvLWN5YW4tMzAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFYXN5d2lyZSBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTUgZmxleC1zaHJpbmstMCBoLWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWN5YW4tODAwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1jeWFuLTgwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBmbGV4LXNocmluay0wIGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeU5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1jeWFuLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy0xNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRHVtbXkgZWxlbWVudCB0byBmb3JjZSBzaWRlYmFyIHRvIHNocmluayB0byBmaXQgY2xvc2UgaWNvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICAgICAgICAgICAgey8qIFN0YXRpYyBzaWRlYmFyIGZvciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGxnOmZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNpZGViYXIgY29tcG9uZW50LCBzd2FwIHRoaXMgZWxlbWVudCB3aXRoIGFub3RoZXIgc2lkZWJhciBpZiB5b3UgbGlrZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93IGJnLWdyYXktOTAwIHB0LTUgcGItNCBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy9lYXN5d2lyZS1sb2dvLWN5YW4tMzAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkVhc3l3aXJlIGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4LTEgZmxleCBmbGV4LWNvbCBkaXZpZGUteSBkaXZpZGUtY3lhbi04MDAgb3ZlcmZsb3cteS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cIm1yLTQgZmxleC1zaHJpbmstMCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRhcnlOYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWN5YW4tNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9