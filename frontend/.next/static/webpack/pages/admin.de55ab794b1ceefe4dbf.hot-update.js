webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/Admin */ "./actions/Admin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\admin\\index.js",
    _s = $RefreshSig$();









var navigation = [{
  name: 'Home',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["HomeIcon"],
  current: true
}, {
  name: 'History',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ClockIcon"],
  current: false
}, {
  name: 'Balances',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ScaleIcon"],
  current: false
}, {
  name: 'Cards',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["CreditCardIcon"],
  current: false
}, {
  name: 'Recipients',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["UserGroupIcon"],
  current: false
}, {
  name: 'Reports',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["DocumentReportIcon"],
  current: false
}];
var secondaryNavigation = [{
  name: 'Settings',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["CogIcon"]
}, {
  name: 'Help',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["QuestionMarkCircleIcon"]
}, {
  name: 'Privacy',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ShieldCheckIcon"]
}];
var cards = [{
  name: 'Account balance',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ScaleIcon"],
  amount: '$30,659.45'
} // More items...
];
var transactions = [{
  id: 1,
  name: 'Payment to Molly Sanders',
  href: '#',
  amount: '$20,000',
  currency: 'USD',
  status: 'success',
  date: 'July 11, 2020',
  datetime: '2020-07-11'
} // More transactions...
];
var statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800'
};

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function AdminPage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_actions_Admin__WEBPACK_IMPORTED_MODULE_3__["Admin"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-screen flex overflow-hidden bg-gray-100",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Transition"].Root, {
          show: sidebarOpen,
          as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Dialog"], {
            as: "div",
            "static": true,
            className: "fixed inset-0 flex z-40 lg:hidden",
            open: sidebarOpen,
            onClose: setSidebarOpen,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Transition"].Child, {
              as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Dialog"].Overlay, {
                className: "fixed inset-0 bg-gray-600 bg-opacity-75"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Transition"].Child, {
              as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Transition"].Child, {
                  as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
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
                        lineNumber: 125,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["XIcon"], {
                        className: "h-6 w-6 text-white",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex-shrink-0 flex items-center px-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "h-8 w-auto",
                    src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
                    alt: "Easywire logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                  className: "mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto",
                  "aria-label": "Sidebar",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "px-2 space-y-1",
                    children: navigation.map(function (item) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: item.href,
                        className: classNames(item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md'),
                        "aria-current": item.current ? 'page' : undefined,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                          className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 149,
                          columnNumber: 53
                        }, _this), item.name]
                      }, item.name, true, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 49
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "mt-6 pt-6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "px-2 space-y-1",
                      children: secondaryNavigation.map(function (item) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: item.href,
                          className: "group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                            className: "mr-4 h-6 w-6 text-cyan-200",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 162,
                            columnNumber: 57
                          }, _this), item.name]
                        }, item.name, true, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 53
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0 w-14",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hidden lg:flex lg:flex-shrink-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col w-64",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center flex-shrink-0 px-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
                  alt: "Easywire logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                className: "mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto",
                "aria-label": "Sidebar",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-2 space-y-1",
                  children: navigation.map(function (item) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: item.href,
                      className: classNames(item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'),
                      "aria-current": item.current ? 'page' : undefined,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                        className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 49
                      }, _this), item.name]
                    }, item.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-6 pt-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "px-2 space-y-1",
                    children: secondaryNavigation.map(function (item) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: item.href,
                        className: "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                          className: "mr-4 h-6 w-6 text-cyan-200",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 214,
                          columnNumber: 53
                        }, _this), item.name]
                      }, item.name, true, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 49
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-1 overflow-auto focus:outline-none",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden",
              onClick: function onClick() {
                return setSidebarOpen(true);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Open sidebar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["MenuAlt1Icon"], {
                className: "h-6 w-6",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-1 flex",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  className: "w-full flex md:ml-0",
                  action: "#",
                  method: "GET",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "search_field",
                    className: "sr-only",
                    children: "Search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative w-full text-gray-400 focus-within:text-gray-600",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "absolute inset-y-0 left-0 flex items-center pointer-events-none",
                      "aria-hidden": "true",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["SearchIcon"], {
                        className: "h-5 w-5",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      id: "search_field",
                      name: "search_field",
                      className: "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm",
                      placeholder: "Search transactions",
                      type: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-4 flex items-center md:ml-6",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "View notifications"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["BellIcon"], {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
                  as: "div",
                  className: "ml-3 relative",
                  children: function children(_ref) {
                    var open = _ref.open;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Button, {
                          className: "max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "h-8 w-8 rounded-full",
                            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "hidden ml-3 text-gray-700 text-sm font-medium lg:block",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "sr-only",
                              children: "Open user menu for "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 273,
                              columnNumber: 27
                            }, _this), "Emilia Birch"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["ChevronDownIcon"], {
                            className: "hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 266,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Transition"], {
                        show: open,
                        as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Items, {
                          "static": true,
                          className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
                            children: function children(_ref2) {
                              var active = _ref2.active;
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                children: "Your Profile"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 297,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
                            children: function children(_ref3) {
                              var active = _ref3.active;
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                children: "Settings"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 310,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 308,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
                            children: function children(_ref4) {
                              var active = _ref4.active;
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                children: "Logout"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 323,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 321,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 291,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
            className: "flex-1 relative pb-8 z-0 overflow-y-auto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white shadow",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "hidden h-16 w-16 rounded-full sm:block",
                        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 350,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "h-16 w-16 rounded-full sm:hidden",
                            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 357,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                            className: "ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate",
                            children: "Good morning, Emilia Birch"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 362,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 356,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                          className: "mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                            className: "sr-only",
                            children: "Company"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 367,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                            className: "flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["OfficeBuildingIcon"], {
                              className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 369,
                              columnNumber: 61
                            }, this), "Duke street studio"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 368,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                            className: "sr-only",
                            children: "Account status"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 375,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                            className: "mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["CheckCircleIcon"], {
                              className: "flex-shrink-0 mr-1.5 h-5 w-5 text-green-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 377,
                              columnNumber: 61
                            }, this), "Verified account"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 376,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 366,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 355,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "mt-6 flex space-x-3 md:mt-0 md:ml-4",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "button",
                      className: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                      children: "Add money"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "button",
                      className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                      children: "Send money"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "text-lg leading-6 font-medium text-gray-900",
                  children: "Overview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                  children: cards.map(function (card) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bg-white overflow-hidden shadow rounded-lg",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "p-5",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(card.icon, {
                              className: "h-6 w-6 text-gray-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 412,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 411,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "ml-5 w-0 flex-1",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                                className: "text-sm font-medium text-gray-500 truncate",
                                children: card.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 416,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "text-lg font-medium text-gray-900",
                                  children: card.amount
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 418,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 417,
                                columnNumber: 65
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 415,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 414,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 410,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 409,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "bg-gray-50 px-5 py-3",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "text-sm",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: card.href,
                            className: "font-medium text-cyan-700 hover:text-cyan-900",
                            children: "View all"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 426,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 425,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 424,
                        columnNumber: 49
                      }, _this)]
                    }, card.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 403,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8",
                children: "Recent activity"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 436,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "shadow sm:hidden",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden",
                  children: transactions.map(function (transaction) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: transaction.href,
                        className: "block px-4 py-4 bg-white hover:bg-gray-50",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "flex items-center space-x-4",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "flex-1 flex space-x-2 truncate",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["CashIcon"], {
                              className: "flex-shrink-0 h-5 w-5 text-gray-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 448,
                              columnNumber: 27
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "flex flex-col text-gray-500 text-sm truncate",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                className: "truncate",
                                children: transaction.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 450,
                                columnNumber: 29
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "text-gray-900 font-medium",
                                  children: transaction.amount
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 452,
                                  columnNumber: 31
                                }, _this), ' ', transaction.currency]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 451,
                                columnNumber: 29
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                                dateTime: transaction.datetime,
                                children: transaction.date
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 455,
                                columnNumber: 29
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 449,
                              columnNumber: 27
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 447,
                            columnNumber: 25
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["ChevronRightIcon"], {
                            className: "flex-shrink-0 h-5 w-5 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 458,
                            columnNumber: 25
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 446,
                          columnNumber: 23
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 445,
                        columnNumber: 49
                      }, _this)
                    }, transaction.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 444,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 442,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                  className: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200",
                  "aria-label": "Pagination",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-1 flex justify-between",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500",
                      children: "Previous"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 470,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500",
                      children: "Next"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 476,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 469,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hidden sm:block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col mt-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Transaction"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 494,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Amount"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 497,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block",
                              children: "Status"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 500,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Date"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 503,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 493,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 492,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: transactions.map(function (transaction) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              className: "bg-white",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "flex",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    href: transaction.href,
                                    className: "group inline-flex space-x-2 truncate text-sm",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["CashIcon"], {
                                      className: "flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                                      "aria-hidden": "true"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 514,
                                      columnNumber: 73
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                      className: "text-gray-500 truncate group-hover:text-gray-900",
                                      children: transaction.name
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 518,
                                      columnNumber: 73
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 513,
                                    columnNumber: 69
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 512,
                                  columnNumber: 65
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 511,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "text-gray-900 font-medium",
                                  children: [transaction.amount, " "]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 523,
                                  columnNumber: 65
                                }, _this), transaction.currency]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 522,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: classNames(statusStyles[transaction.status], 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'),
                                  children: transaction.status
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 527,
                                  columnNumber: 31
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 526,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                                  dateTime: transaction.datetime,
                                  children: transaction.date
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 537,
                                  columnNumber: 65
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 536,
                                columnNumber: 61
                              }, _this)]
                            }, transaction.id, true, {
                              fileName: _jsxFileName,
                              lineNumber: 510,
                              columnNumber: 57
                            }, _this);
                          })
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 508,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 491,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                        className: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",
                        "aria-label": "Pagination",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "hidden sm:block",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700",
                            children: ["Showing ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "font-medium",
                              children: "1"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 550,
                              columnNumber: 69
                            }, this), " to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "font-medium",
                              children: "10"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 550,
                              columnNumber: 111
                            }, this), " of", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "font-medium",
                              children: "20"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 551,
                              columnNumber: 61
                            }, this), " results"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 549,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 548,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex-1 flex justify-between sm:justify-end",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            className: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                            children: "Previous"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 555,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            className: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                            children: "Next"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 561,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 554,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 544,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 490,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 489,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 488,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12 pt-5 pb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Admin Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 580,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 579,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "list-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-group-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/admin/crud/category",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Create Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 586,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 585,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 584,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-group-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/admin/crud/tag",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Create Tag"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 592,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 591,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 590,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-group-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/admin/crud/blog",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Create Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 598,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 597,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 596,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-group-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/admin/crud/blogs",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Update/Delete Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 604,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 603,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 602,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-group-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/user/update",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Update profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 610,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 609,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 608,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 583,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-8",
            children: "right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

_s(AdminPage, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");

_c = AdminPage;
/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

var _c;

$RefreshReg$(_c, "AdminPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIkhvbWVJY29uIiwiY3VycmVudCIsIkNsb2NrSWNvbiIsIlNjYWxlSWNvbiIsIkNyZWRpdENhcmRJY29uIiwiVXNlckdyb3VwSWNvbiIsIkRvY3VtZW50UmVwb3J0SWNvbiIsInNlY29uZGFyeU5hdmlnYXRpb24iLCJDb2dJY29uIiwiUXVlc3Rpb25NYXJrQ2lyY2xlSWNvbiIsIlNoaWVsZENoZWNrSWNvbiIsImNhcmRzIiwiYW1vdW50IiwidHJhbnNhY3Rpb25zIiwiaWQiLCJjdXJyZW5jeSIsInN0YXR1cyIsImRhdGUiLCJkYXRldGltZSIsInN0YXR1c1N0eWxlcyIsInN1Y2Nlc3MiLCJwcm9jZXNzaW5nIiwiZmFpbGVkIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkFkbWluUGFnZSIsInVzZVN0YXRlIiwic2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsIkZyYWdtZW50IiwibWFwIiwiaXRlbSIsInVuZGVmaW5lZCIsIm9wZW4iLCJhY3RpdmUiLCJjYXJkIiwidHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQWNBO0FBU0EsSUFBTUEsVUFBVSxHQUFHLENBQ2Y7QUFBRUMsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUksRUFBRSxHQUF0QjtBQUEyQkMsTUFBSSxFQUFFQyxpRUFBakM7QUFBMkNDLFNBQU8sRUFBRTtBQUFwRCxDQURlLEVBRWY7QUFBRUosTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRSxHQUF6QjtBQUE4QkMsTUFBSSxFQUFFRyxrRUFBcEM7QUFBK0NELFNBQU8sRUFBRTtBQUF4RCxDQUZlLEVBR2Y7QUFBRUosTUFB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QUFBQSxVQURKO0FBK2hCSDs7R0FuaUJRYyxTOztLQUFBQSxTO0FBcWlCTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZGU1NWFiNzk0YjFjZWVmZTRkYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge0FkbWlufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9BZG1pblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpYWxvZywgTWVudSwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgQmVsbEljb24sXHJcbiAgICBDbG9ja0ljb24sXHJcbiAgICBDb2dJY29uLFxyXG4gICAgQ3JlZGl0Q2FyZEljb24sXHJcbiAgICBEb2N1bWVudFJlcG9ydEljb24sXHJcbiAgICBIb21lSWNvbixcclxuICAgIE1lbnVBbHQxSWNvbixcclxuICAgIFF1ZXN0aW9uTWFya0NpcmNsZUljb24sXHJcbiAgICBTY2FsZUljb24sXHJcbiAgICBTaGllbGRDaGVja0ljb24sXHJcbiAgICBVc2VyR3JvdXBJY29uLFxyXG4gICAgWEljb24sXHJcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQge1xyXG4gICAgQ2FzaEljb24sXHJcbiAgICBDaGVja0NpcmNsZUljb24sXHJcbiAgICBDaGV2cm9uRG93bkljb24sXHJcbiAgICBDaGV2cm9uUmlnaHRJY29uLFxyXG4gICAgT2ZmaWNlQnVpbGRpbmdJY29uLFxyXG4gICAgU2VhcmNoSWNvbixcclxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICAgIHsgbmFtZTogJ0hvbWUnLCBocmVmOiAnIycsIGljb246IEhvbWVJY29uLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6ICdIaXN0b3J5JywgaHJlZjogJyMnLCBpY29uOiBDbG9ja0ljb24sIGN1cnJlbnQ6IGZhbHNlIH0sXHJcbiAgICB7IG5hbWU6ICdCYWxhbmNlcycsIGhyZWY6ICcjJywgaWNvbjogU2NhbGVJY29uLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiAnQ2FyZHMnLCBocmVmOiAnIycsIGljb246IENyZWRpdENhcmRJY29uLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgeyBuYW1lOiAnUmVjaXBpZW50cycsIGhyZWY6ICcjJywgaWNvbjogVXNlckdyb3VwSWNvbiwgY3VycmVudDogZmFsc2UgfSxcclxuICAgIHsgbmFtZTogJ1JlcG9ydHMnLCBocmVmOiAnIycsIGljb246IERvY3VtZW50UmVwb3J0SWNvbiwgY3VycmVudDogZmFsc2UgfSxcclxuXVxyXG5jb25zdCBzZWNvbmRhcnlOYXZpZ2F0aW9uID0gW1xyXG4gICAgeyBuYW1lOiAnU2V0dGluZ3MnLCBocmVmOiAnIycsIGljb246IENvZ0ljb24gfSxcclxuICAgIHsgbmFtZTogJ0hlbHAnLCBocmVmOiAnIycsIGljb246IFF1ZXN0aW9uTWFya0NpcmNsZUljb24gfSxcclxuICAgIHsgbmFtZTogJ1ByaXZhY3knLCBocmVmOiAnIycsIGljb246IFNoaWVsZENoZWNrSWNvbiB9LFxyXG5dXHJcbmNvbnN0IGNhcmRzID0gW1xyXG4gICAgeyBuYW1lOiAnQWNjb3VudCBiYWxhbmNlJywgaHJlZjogJyMnLCBpY29uOiBTY2FsZUljb24sIGFtb3VudDogJyQzMCw2NTkuNDUnIH0sXHJcbiAgICAvLyBNb3JlIGl0ZW1zLi4uXHJcbl1cclxuXHJcbmNvbnN0IHRyYW5zYWN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnUGF5bWVudCB0byBNb2xseSBTYW5kZXJzJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgYW1vdW50OiAnJDIwLDAwMCcsXHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGU6ICdKdWx5IDExLCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDctMTEnLFxyXG4gICAgfSxcclxuICAgIC8vIE1vcmUgdHJhbnNhY3Rpb25zLi4uXHJcbl1cclxuY29uc3Qgc3RhdHVzU3R5bGVzID0ge1xyXG4gICAgc3VjY2VzczogJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCcsXHJcbiAgICBwcm9jZXNzaW5nOiAnYmcteWVsbG93LTEwMCB0ZXh0LXllbGxvdy04MDAnLFxyXG4gICAgZmFpbGVkOiAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCcsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQWRtaW5QYWdlKCkge1xyXG5cclxuICAgIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8QWRtaW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtzaWRlYmFyT3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggei00MCBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2lkZWJhck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtzZXRTaWRlYmFyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctZ3JheS02MDAgYmctb3BhY2l0eS03NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwiLXRyYW5zbGF0ZS14LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2xhdGUteC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNsYXRlLXgtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIi10cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBmbGV4IGZsZXgtY29sIG1heC13LXhzIHctZnVsbCBwdC01IHBiLTQgYmctY3lhbi03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCAtbXItMTIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIHNpZGViYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy9lYXN5d2lyZS1sb2dvLWN5YW4tMzAwLW1hcmstd2hpdGUtdGV4dC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkVhc3l3aXJlIGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4LXNocmluay0wIGgtZnVsbCBkaXZpZGUteSBkaXZpZGUtY3lhbi04MDAgb3ZlcmZsb3cteS1hdXRvXCIgYXJpYS1sYWJlbD1cIlNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1jeWFuLTgwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWN5YW4tMTAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyAncGFnZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBmbGV4LXNocmluay0wIGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kYXJ5TmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWN5YW4tMTAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMTRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRHVtbXkgZWxlbWVudCB0byBmb3JjZSBzaWRlYmFyIHRvIHNocmluayB0byBmaXQgY2xvc2UgaWNvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFN0YXRpYyBzaWRlYmFyIGZvciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6ZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy02NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNpZGViYXIgY29tcG9uZW50LCBzd2FwIHRoaXMgZWxlbWVudCB3aXRoIGFub3RoZXIgc2lkZWJhciBpZiB5b3UgbGlrZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgYmctY3lhbi03MDAgcHQtNSBwYi00IG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvZWFzeXdpcmUtbG9nby1jeWFuLTMwMC1tYXJrLXdoaXRlLXRleHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkVhc3l3aXJlIGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4LTEgZmxleCBmbGV4LWNvbCBkaXZpZGUteSBkaXZpZGUtY3lhbi04MDAgb3ZlcmZsb3cteS1hdXRvXCIgYXJpYS1sYWJlbD1cIlNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50ID8gJ2JnLWN5YW4tODAwIHRleHQtd2hpdGUnIDogJ3RleHQtY3lhbi0xMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1jeWFuLTYwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD17aXRlbS5jdXJyZW50ID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci00IGZsZXgtc2hyaW5rLTAgaC02IHctNiB0ZXh0LWN5YW4tMjAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeU5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtY3lhbi0xMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1jeWFuLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy1hdXRvIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleC1zaHJpbmstMCBmbGV4IGgtMTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGxnOmJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBib3JkZXItciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1jeWFuLTUwMCBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHNpZGViYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVBbHQxSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlYXJjaCBiYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBweC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIHNtOnB4LTYgbGc6bWF4LXctNnhsIGxnOm14LWF1dG8gbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbWQ6bWwtMFwiIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJHRVRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoX2ZpZWxkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHRleHQtZ3JheS00MDAgZm9jdXMtd2l0aGluOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hfZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoX2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIGgtZnVsbCBwbC04IHByLTMgcHktMiBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTkwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdHJhbnNhY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyIG1kOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTEgcm91bmRlZC1mdWxsIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1jeWFuLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCZWxsSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSBkcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCJtYXgtdy14cyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1jeWFuLTUwMCBsZzpwLTIgbGc6cm91bmRlZC1tZCBsZzpob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk0NzkwMTA4Mzc3LWJlOWMyOWIyOTMzMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWwtMyB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1tZWRpdW0gbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiB1c2VyIG1lbnUgZm9yIDwvc3Bhbj5FbWlsaWEgQmlyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGZsZXgtc2hyaW5rLTAgbWwtMSBoLTUgdy01IHRleHQtZ3JheS00MDAgbGc6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmUgcGItOCB6LTAgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUGFnZSBoZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IGxnOm1heC13LTZ4bCBsZzpteC1hdXRvIGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBsZzpib3JkZXItdCBsZzpib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTE2IHctMTYgcm91bmRlZC1mdWxsIHNtOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk0NzkwMTA4Mzc3LWJlOWMyOWIyOTMzMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTIuNiZ3PTI1NiZoPTI1NiZxPTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1mdWxsIHNtOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk0NzkwMTA4Mzc3LWJlOWMyOWIyOTMzMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTIuNiZ3PTI1NiZoPTI1NiZxPTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0zIHRleHQtMnhsIGZvbnQtYm9sZCBsZWFkaW5nLTcgdGV4dC1ncmF5LTkwMCBzbTpsZWFkaW5nLTkgc206dHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZCBtb3JuaW5nLCBFbWlsaWEgQmlyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtY29sIHNtOm1sLTMgc206bXQtMSBzbTpmbGV4LXJvdyBzbTpmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbXBhbnk8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSBzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPZmZpY2VCdWlsZGluZ0ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbXItMS41IGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEdWtlIHN0cmVldCBzdHVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+QWNjb3VudCBzdGF0dXM8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSBzbTptci02IHNtOm10LTAgY2FwaXRhbGl6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVJY29uIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbXItMS41IGgtNSB3LTUgdGV4dC1ncmVlbi00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJpZmllZCBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBzcGFjZS14LTMgbWQ6bXQtMCBtZDptbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWN5YW4tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBtb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctY3lhbi02MDAgaG92ZXI6YmctY3lhbi03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctY3lhbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBtb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPk92ZXJ2aWV3PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTUgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDYXJkICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLm5hbWV9IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FyZC5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHctMCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZVwiPntjYXJkLm5hbWV9PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntjYXJkLmFtb3VudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC01IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NhcmQuaHJlZn0gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1jeWFuLTcwMCBob3Zlcjp0ZXh0LWN5YW4tOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gbXQtOCBweC00IHRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBhY3Rpdml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBY3Rpdml0eSBsaXN0IChzbWFsbGVzdCBicmVha3BvaW50IG9ubHkpICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMiBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RyYW5zYWN0aW9uLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dHJhbnNhY3Rpb24uaHJlZn0gY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS00IGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBzcGFjZS14LTIgdHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FzaEljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBoLTUgdy01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1ncmF5LTUwMCB0ZXh0LXNtIHRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPnt0cmFuc2FjdGlvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtXCI+e3RyYW5zYWN0aW9uLmFtb3VudH08L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17dHJhbnNhY3Rpb24uZGF0ZXRpbWV9Pnt0cmFuc2FjdGlvbi5kYXRlfTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBoLTUgdy01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNCBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBY3Rpdml0eSB0YWJsZSAoc21hbGwgYnJlYWtwb2ludCBhbmQgdXApICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgbWluLXctZnVsbCBvdmVyZmxvdy14LWF1dG8gc2hhZG93IG92ZXJmbG93LWhpZGRlbiBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1ncmF5LTUwIHRleHQtcmlnaHQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoaWRkZW4gcHgtNiBweS0zIGJnLWdyYXktNTAgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYXktNTAgdGV4dC1yaWdodCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt0cmFuc2FjdGlvbi5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1heC13LTAgdy1mdWxsIHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RyYW5zYWN0aW9uLmhyZWZ9IGNsYXNzTmFtZT1cImdyb3VwIGlubGluZS1mbGV4IHNwYWNlLXgtMiB0cnVuY2F0ZSB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXNoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBoLTUgdy01IHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRydW5jYXRlIGdyb3VwLWhvdmVyOnRleHQtZ3JheS05MDBcIj57dHJhbnNhY3Rpb24ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1yaWdodCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZm9udC1tZWRpdW1cIj57dHJhbnNhY3Rpb24uYW1vdW50fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4gcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1N0eWxlc1t0cmFuc2FjdGlvbi5zdGF0dXNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LW1lZGl1bSBjYXBpdGFsaXplJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e3RyYW5zYWN0aW9uLmRhdGV0aW1lfT57dHJhbnNhY3Rpb24uZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBhZ2luYXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHNtOnB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93aW5nIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+MTwvc3Bhbj4gdG8gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj4xMDwvc3Bhbj4gb2Z7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPjIwPC9zcGFuPiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTUgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFkbWluIERhc2hib2FyZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9jcnVkL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DcmVhdGUgQ2F0ZWdvcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vY3J1ZC90YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNyZWF0ZSBUYWc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vY3J1ZC9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DcmVhdGUgQmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9jcnVkL2Jsb2dzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5VcGRhdGUvRGVsZXRlIEJsb2c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci91cGRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVwZGF0ZSBwcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+cmlnaHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0FkbWluPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=