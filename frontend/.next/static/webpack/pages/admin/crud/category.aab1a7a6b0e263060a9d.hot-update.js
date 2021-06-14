webpackHotUpdate_N_E("pages/admin/crud/category",{

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



var _jsxFileName = "E:\\seoblog\\frontend\\components\\AdminLayout.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var navigation = [{
  name: 'Home',
  href: '/admin',
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
}, {
  name: 'Update/Delete Blog',
  href: '/admin/crud/blogs',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["DocumentReportIcon"],
  current: false
}];
var secondaryNavigation = [{
  name: 'Update profile',
  href: '/user/update',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["CogIcon"]
}, {
  name: 'Help',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["QuestionMarkCircleIcon"]
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-screen flex overflow-x-hidden overflow-scroll bg-gray-100",
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
              lineNumber: 57,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
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
                      lineNumber: 83,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["XIcon"], {
                      className: "h-6 w-6 text-white",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-shrink-0 flex items-center px-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
                  alt: "Easywire logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
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
                          lineNumber: 107,
                          columnNumber: 53
                        }, _this), item.name]
                      }, item.name, true, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
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
                            lineNumber: 122,
                            columnNumber: 57
                          }, _this), item.name]
                        }, item.name, true, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 49
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-14",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
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
                lineNumber: 144,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
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
                        lineNumber: 163,
                        columnNumber: 49
                      }, _this), item.name]
                    }, item.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
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
                          lineNumber: 178,
                          columnNumber: 53
                        }, _this), item.name]
                      }, item.name, true, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbkxheW91dC5qc3giXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIkhvbWVJY29uIiwiY3VycmVudCIsIkNsb2NrSWNvbiIsIlNjYWxlSWNvbiIsIkNyZWRpdENhcmRJY29uIiwiRG9jdW1lbnRSZXBvcnRJY29uIiwic2Vjb25kYXJ5TmF2aWdhdGlvbiIsIkNvZ0ljb24iLCJRdWVzdGlvbk1hcmtDaXJjbGVJY29uIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJGcmFnbWVudCIsIm1hcCIsIml0ZW0iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWUEsSUFBTUEsVUFBVSxHQUFHLENBQ2Y7QUFBQ0MsTUFBSSxFQUFFLE1BQVA7QUFBZUMsTUFBSSxFQUFFLFFBQXJCO0FBQStCQyxNQUFJLEVBQUVDLGlFQUFyQztBQUErQ0MsU0FBTyxFQUFFO0FBQXhELENBRGUsRUFFZjtBQUFDSixNQUFJLEVBQUUsaUJBQVA7QUFBMEJDLE1BQUksRUFBRSxzQkFBaEM7QUFBd0RDLE1BQUksRUFBRUcsa0VBQTlEO0FBQXlFRCxTQUFPLEVBQUU7QUFBbEYsQ0FGZSxFQUdmO0FBQUNKLE1BQUksRUFBRSxZQUFQO0FBQXFCQyxNQUFJLEVBQUUsaUJBQTNCO0FBQThDQyxNQUFJLEVBQUVJLGtFQUFwRDtBQUErREYsU0FBTyxFQUFFO0FBQXhFLENBSGUsRUFJZjtBQUFDSixNQUFJLEVBQUUsYUFBUDtBQUFzQkMsTUFBSSxFQUFFLGtCQUE1QjtBQUFnREMsTUFBSSxFQUFFSyx1RUFBdEQ7QUFBc0VILFNBQU8sRUFBRTtBQUEvRSxDQUplLEVB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SUFOVjtBQUFBLHlCQUNTd0IsSUFBSSxDQUFDeEIsSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEcUI7QUFBQSxtQkFBeEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEdKLEVBdUpLa0IsUUF2Skw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUE2SkgsQ0EvSk07O0dBQU1ELFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9jYXRlZ29yeS5hYWIxYTdhNmIwZTI2MzA2MGE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFsb2csIFRyYW5zaXRpb259IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDbG9ja0ljb24sXHJcbiAgICBDb2dJY29uLFxyXG4gICAgQ3JlZGl0Q2FyZEljb24sXHJcbiAgICBEb2N1bWVudFJlcG9ydEljb24sXHJcbiAgICBIb21lSWNvbixcclxuICAgIFF1ZXN0aW9uTWFya0NpcmNsZUljb24sXHJcbiAgICBTY2FsZUljb24sXHJcbiAgICBYSWNvbixcclxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICAgIHtuYW1lOiAnSG9tZScsIGhyZWY6ICcvYWRtaW4nLCBpY29uOiBIb21lSWNvbiwgY3VycmVudDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ0NyZWF0ZSBDYXRlZ29yeScsIGhyZWY6ICcvYWRtaW4vY3J1ZC9jYXRlZ29yeScsIGljb246IENsb2NrSWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcmVhdGUgVGFnJywgaHJlZjogJy9hZG1pbi9jcnVkL3RhZycsIGljb246IFNjYWxlSWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcmVhdGUgQmxvZycsIGhyZWY6ICcvYWRtaW4vY3J1ZC9ibG9nJywgaWNvbjogQ3JlZGl0Q2FyZEljb24sIGN1cnJlbnQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVXBkYXRlL0RlbGV0ZSBCbG9nJywgaHJlZjogJy9hZG1pbi9jcnVkL2Jsb2dzJywgaWNvbjogRG9jdW1lbnRSZXBvcnRJY29uLCBjdXJyZW50OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1VwZGF0ZS9EZWxldGUgQmxvZycsIGhyZWY6ICcvYWRtaW4vY3J1ZC9ibG9ncycsIGljb246IERvY3VtZW50UmVwb3J0SWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG5dXHJcblxyXG5jb25zdCBzZWNvbmRhcnlOYXZpZ2F0aW9uID0gW1xyXG4gICAge25hbWU6ICdVcGRhdGUgcHJvZmlsZScsIGhyZWY6ICcvdXNlci91cGRhdGUnLCBpY29uOiBDb2dJY29ufSxcclxuICAgIHtuYW1lOiAnSGVscCcsIGhyZWY6ICcjJywgaWNvbjogUXVlc3Rpb25NYXJrQ2lyY2xlSWNvbn0sXHJcbl1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy1zY3JvbGwgYmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17c2lkZWJhck9wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggei00MCBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzaWRlYmFyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17c2V0U2lkZWJhck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTYwMCBiZy1vcGFjaXR5LTc1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCItdHJhbnNsYXRlLXgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwidHJhbnNsYXRlLXgtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2xhdGUteC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCItdHJhbnNsYXRlLXgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIGZsZXggZmxleC1jb2wgbWF4LXcteHMgdy1mdWxsIHB0LTUgcGItNCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgLW1yLTEyIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2Ugc2lkZWJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WEljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL2Vhc3l3aXJlLWxvZ28tY3lhbi0zMDAtbWFyay13aGl0ZS10ZXh0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFYXN5d2lyZSBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTUgZmxleC1zaHJpbmstMCBoLWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWN5YW4tODAwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50ID8gJ2JnLWN5YW4tODAwIHRleHQtd2hpdGUnIDogJ3RleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1jeWFuLTYwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBmbGV4LXNocmluay0wIGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeU5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTE0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRHVtbXkgZWxlbWVudCB0byBmb3JjZSBzaWRlYmFyIHRvIHNocmluayB0byBmaXQgY2xvc2UgaWNvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICAgICAgICAgICAgICAgIHsvKiBTdGF0aWMgc2lkZWJhciBmb3IgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6ZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIGNvbXBvbmVudCwgc3dhcCB0aGlzIGVsZW1lbnQgd2l0aCBhbm90aGVyIHNpZGViYXIgaWYgeW91IGxpa2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgYmctZ3JheS05MDAgcHQtNSBwYi00IG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy9lYXN5d2lyZS1sb2dvLWN5YW4tMzAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFYXN5d2lyZSBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTUgZmxleC0xIGZsZXggZmxleC1jb2wgZGl2aWRlLXkgZGl2aWRlLWN5YW4tODAwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSByb3VuZGVkLW1kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBmbGV4LXNocmluay0wIGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeU5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWN5YW4tNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci00IGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==