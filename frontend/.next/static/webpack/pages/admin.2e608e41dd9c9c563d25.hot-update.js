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
/* harmony import */ var _components_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AdminLayout */ "./components/AdminLayout.jsx");
/* harmony import */ var _actions_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/Admin */ "./actions/Admin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "E:\\seoblog\\frontend\\pages\\admin\\index.js",
    _s = $RefreshSig$();












var navigation = [{
  name: 'Home',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["HomeIcon"],
  current: true
}, {
  name: 'Create Category',
  href: '/admin/crud/category',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ClockIcon"],
  current: false
}, {
  name: 'Create Tag',
  href: '/admin/crud/tag',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["ScaleIcon"],
  current: false
}, {
  name: 'Create Blog',
  href: '/admin/crud/blog',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["CreditCardIcon"],
  current: false
}, {
  name: 'Update/Delete Blog',
  href: '/admin/crud/blogs',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["DocumentReportIcon"],
  current: false
}];
var secondaryNavigation = [{
  name: 'Update profile',
  href: '/user/update',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["CogIcon"]
}, {
  name: 'Help',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["QuestionMarkCircleIcon"]
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["AdminLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_actions_Admin__WEBPACK_IMPORTED_MODULE_3__["Admin"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 90,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["MenuAlt1Icon"], {
              className: "h-6 w-6",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
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
                  lineNumber: 97,
                  columnNumber: 37
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
                      lineNumber: 104,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    id: "search_field",
                    name: "search_field",
                    className: "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm",
                    placeholder: "Search transactions",
                    type: "search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-4 flex items-center md:ml-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "sr-only",
                  children: "View notifications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["BellIcon"], {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
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
                          lineNumber: 130,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "hidden ml-3 text-gray-700 text-sm font-medium lg:block",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Open user menu for "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 27
                          }, _this), "Emilia Birch"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 135,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["ChevronDownIcon"], {
                          className: "hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 139,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 45
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
                              lineNumber: 161,
                              columnNumber: 61
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
                          children: function children(_ref3) {
                            var active = _ref3.active;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                              children: "Settings"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 174,
                              columnNumber: 61
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
                            style: {
                              cursor: 'pointer'
                            },
                            className: classNames('bg-gray-100', 'block px-4 py-2 text-sm text-gray-700'),
                            onClick: function onClick() {
                              return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_8__["signout"])(function () {
                                return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/signin");
                              });
                            },
                            children: function children(_ref4) {
                              var active = _ref4.active;
                              Logout;
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 186,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_8__["signout"])(function () {
              return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/signin");
            });
          },
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: "flex-1 relative pb-8 z-0 overflow-y-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "bg-white shadow",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex-1 min-w-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "hidden h-16 w-16 rounded-full sm:block",
                      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "h-16 w-16 rounded-full sm:hidden",
                          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          className: "ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate",
                          children: "Good morning, Emilia Birch"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 230,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                        className: "mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                          className: "sr-only",
                          children: "Company"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                          className: "flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["OfficeBuildingIcon"], {
                            className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 237,
                            columnNumber: 57
                          }, this), "Duke street studio"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                          className: "sr-only",
                          children: "Account status"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                          className: "mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["CheckCircleIcon"], {
                            className: "flex-shrink-0 mr-1.5 h-5 w-5 text-green-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                            columnNumber: 57
                          }, this), "Verified account"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 244,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "text-lg leading-6 font-medium text-gray-900",
                children: "Overview"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: cards.map(function (card) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bg-white overflow-hidden shadow rounded-lg",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                            lineNumber: 268,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 267,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "ml-5 w-0 flex-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                              className: "text-sm font-medium text-gray-500 truncate",
                              children: card.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 273,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-lg font-medium text-gray-900",
                                children: card.amount
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 275,
                                columnNumber: 65
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 274,
                              columnNumber: 61
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 45
                    }, _this)
                  }, card.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIkhvbWVJY29uIiwiY3VycmVudCIsIkNsb2NrSWNvbiIsIlNjYWxlSWNvbiIsIkNyZWRpdENhcmRJY29uIiwiRG9jdW1lbnRSZXBvcnRJY29uIiwic2Vjb25kYXJ5TmF2aWdhdGlvbiIsIkNvZ0ljb24iLCJRdWVzdGlvbk1hcmtDaXJjbGVJY29uIiwiY2FyZHMiLCJhbW91bnQiLCJ0cmFuc2FjdGlvbnMiLCJpZCIsImN1cnJlbmN5Iiwic3RhdHVzIiwiZGF0ZSIsImRhdGV0aW1lIiwic3RhdHVzU3R5bGVzIiwic3VjY2VzcyIsInByb2Nlc3NpbmciLCJmYWlsZWQiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiQWRtaW5QYWdlIiwidXNlU3RhdGUiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwib3BlbiIsIkZyYWdtZW50IiwiYWN0aXZlIiwiY3Vyc29yIiwic2lnbm91dCIsIlJvdXRlciIsInJlcGxhY2UiLCJMb2dvdXQiLCJtYXAiLCJjYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBY0E7QUFRQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDZjtBQUFDQyxNQUFJLEVBQUUsTUFBUDtBQUFlQyxNQUFJLEVBQUUsR0FBckI7QUFBMEJDLE1BQUksRUFBRUMsaUVBQWhDO0FBQTBDQyxTQUFPLEVBQUU7QUFBbkQsQ0FEZSxFQUVmO0FBQUNKLE1BQUksRUFBRSxpQkFBUDtBQUEwQkMsTUFBSSxFQUFFLHNCQUFoQztBQUF3REMsTUFBSSxFQUFFRyxrRUFBOUQ7QUFBeUVELFNBQU8sRUFBRTtBQUFsRixDQUZlLEVBR2Y7QUFBQ0osTUFB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O0FBQUEscURBQ0k7QUFDSSx5Q0FBUyxFQUFDLG1DQURkO0FBQUEsMENBQ21EMEMsSUFBSSxDQUFDN0I7QUFEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBQVU2QixJQUFJLENBQUMxQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRE87QUFBQSxpQkFBVjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc05IOztHQTFOUTZCLFM7O0tBQUFBLFM7QUE0Tk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjJlNjA4ZTQxZGQ5YzljNTYzZDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QWRtaW5MYXlvdXR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkbWluTGF5b3V0XCI7XHJcbmltcG9ydCB7QWRtaW59IGZyb20gXCIuLi8uLi9hY3Rpb25zL0FkbWluXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5pbXBvcnQge0ZyYWdtZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RGlhbG9nLCBNZW51LCBUcmFuc2l0aW9ufSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIEJlbGxJY29uLFxyXG4gICAgQ2xvY2tJY29uLFxyXG4gICAgQ29nSWNvbixcclxuICAgIENyZWRpdENhcmRJY29uLFxyXG4gICAgRG9jdW1lbnRSZXBvcnRJY29uLFxyXG4gICAgSG9tZUljb24sXHJcbiAgICBNZW51QWx0MUljb24sXHJcbiAgICBRdWVzdGlvbk1hcmtDaXJjbGVJY29uLFxyXG4gICAgU2NhbGVJY29uLFxyXG4gICAgU2hpZWxkQ2hlY2tJY29uLFxyXG4gICAgVXNlckdyb3VwSWNvbixcclxuICAgIFhJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcclxuaW1wb3J0IHtcclxuICAgIENhc2hJY29uLFxyXG4gICAgQ2hlY2tDaXJjbGVJY29uLFxyXG4gICAgQ2hldnJvbkRvd25JY29uLFxyXG4gICAgQ2hldnJvblJpZ2h0SWNvbixcclxuICAgIE9mZmljZUJ1aWxkaW5nSWNvbixcclxuICAgIFNlYXJjaEljb24sXHJcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHtpc0F1dGgsIHNpZ25vdXR9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICAgIHtuYW1lOiAnSG9tZScsIGhyZWY6ICcjJywgaWNvbjogSG9tZUljb24sIGN1cnJlbnQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdDcmVhdGUgQ2F0ZWdvcnknLCBocmVmOiAnL2FkbWluL2NydWQvY2F0ZWdvcnknLCBpY29uOiBDbG9ja0ljb24sIGN1cnJlbnQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3JlYXRlIFRhZycsIGhyZWY6ICcvYWRtaW4vY3J1ZC90YWcnLCBpY29uOiBTY2FsZUljb24sIGN1cnJlbnQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3JlYXRlIEJsb2cnLCBocmVmOiAnL2FkbWluL2NydWQvYmxvZycsIGljb246IENyZWRpdENhcmRJY29uLCBjdXJyZW50OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1VwZGF0ZS9EZWxldGUgQmxvZycsIGhyZWY6ICcvYWRtaW4vY3J1ZC9ibG9ncycsIGljb246IERvY3VtZW50UmVwb3J0SWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG5dXHJcbmNvbnN0IHNlY29uZGFyeU5hdmlnYXRpb24gPSBbXHJcbiAgICB7bmFtZTogJ1VwZGF0ZSBwcm9maWxlJywgaHJlZjogJy91c2VyL3VwZGF0ZScsIGljb246IENvZ0ljb259LFxyXG4gICAge25hbWU6ICdIZWxwJywgaHJlZjogJyMnLCBpY29uOiBRdWVzdGlvbk1hcmtDaXJjbGVJY29ufSxcclxuXVxyXG5jb25zdCBjYXJkcyA9IFtcclxuICAgIHtuYW1lOiAnQWNjb3VudCBiYWxhbmNlJywgaHJlZjogJyMnLCBpY29uOiBTY2FsZUljb24sIGFtb3VudDogJyQzMCw2NTkuNDUnfSxcclxuICAgIC8vIE1vcmUgaXRlbXMuLi5cclxuXVxyXG5cclxuY29uc3QgdHJhbnNhY3Rpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICdQYXltZW50IHRvIE1vbGx5IFNhbmRlcnMnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBhbW91bnQ6ICckMjAsMDAwJyxcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZGF0ZTogJ0p1bHkgMTEsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wNy0xMScsXHJcbiAgICB9LFxyXG4gICAgLy8gTW9yZSB0cmFuc2FjdGlvbnMuLi5cclxuXVxyXG5jb25zdCBzdGF0dXNTdHlsZXMgPSB7XHJcbiAgICBzdWNjZXNzOiAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwJyxcclxuICAgIHByb2Nlc3Npbmc6ICdiZy15ZWxsb3ctMTAwIHRleHQteWVsbG93LTgwMCcsXHJcbiAgICBmYWlsZWQ6ICdiZy1ncmF5LTEwMCB0ZXh0LWdyYXktODAwJyxcclxufVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkbWluUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFkbWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8QWRtaW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWF1dG8gZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXgtc2hyaW5rLTAgZmxleCBoLTE2IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBsZzpib3JkZXItbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWN5YW4tNTAwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gc2lkZWJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QWx0MUljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBweC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIHNtOnB4LTYgbGc6bWF4LXctNnhsIGxnOm14LWF1dG8gbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG1kOm1sLTBcIiBhY3Rpb249XCIjXCIgbWV0aG9kPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoX2ZpZWxkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHRleHQtZ3JheS00MDAgZm9jdXMtd2l0aGluOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoX2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoX2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgaC1mdWxsIHBsLTggcHItMyBweS0yIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRyYW5zYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBmbGV4IGl0ZW1zLWNlbnRlciBtZDptbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTEgcm91bmRlZC1mdWxsIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1jeWFuLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VmlldyBub3RpZmljYXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmVsbEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2ZpbGUgZHJvcGRvd24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe29wZW59KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXcteHMgYmctd2hpdGUgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctY3lhbi01MDAgbGc6cC0yIGxnOnJvdW5kZWQtbWQgbGc6aG92ZXI6YmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWwtMyB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1tZWRpdW0gbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiB1c2VyIG1lbnUgZm9yIDwvc3Bhbj5FbWlsaWEgQmlyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBmbGV4LXNocmluay0wIG1sLTEgaC01IHctNSB0ZXh0LWdyYXktNDAwIGxnOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LTQ4IHJvdW5kZWQtbWQgc2hhZG93LWxnIHB5LTEgYmctd2hpdGUgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHthY3RpdmV9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2FjdGl2ZX0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZy1ncmF5LTEwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbm91dCgoKSA9PiBSb3V0ZXIucmVwbGFjZShgL3NpZ25pbmApKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2FjdGl2ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoYC9zaWduaW5gKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlIHBiLTggei0wIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUGFnZSBoZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBsZzptYXgtdy02eGwgbGc6bXgtYXV0byBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS02IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBsZzpib3JkZXItdCBsZzpib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2ZpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC0xNiB3LTE2IHJvdW5kZWQtZnVsbCBzbTpibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk0NzkwMTA4Mzc3LWJlOWMyOWIyOTMzMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTIuNiZ3PTI1NiZoPTI1NiZxPTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1mdWxsIHNtOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTQ3OTAxMDgzNzctYmU5YzI5YjI5MzMwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9Mi42Jnc9MjU2Jmg9MjU2JnE9ODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctNyB0ZXh0LWdyYXktOTAwIHNtOmxlYWRpbmctOSBzbTp0cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2QgbW9ybmluZywgRW1pbGlhIEJpcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTYgZmxleCBmbGV4LWNvbCBzbTptbC0zIHNtOm10LTEgc206ZmxleC1yb3cgc206ZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbXBhbnk8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmaWNlQnVpbGRpbmdJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbXItMS41IGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEdWtlIHN0cmVldCBzdHVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPkFjY291bnQgc3RhdHVzPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSBzbTptci02IHNtOm10LTAgY2FwaXRhbGl6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyZWVuLTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJpZmllZCBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5PdmVydmlldzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTUgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENhcmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLm5hbWV9IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYXJkLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHctMCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJ1bmNhdGVcIj57Y2FyZC5uYW1lfTwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57Y2FyZC5hbW91bnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9BZG1pbj5cclxuICAgICAgICA8L0FkbWluTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=