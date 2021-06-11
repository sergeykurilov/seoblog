webpackHotUpdate_N_E("pages/admin",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");


var _jsxFileName = "E:\\seoblog\\frontend\\components\\sidebar.js";



function Sidebar(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Root, {
      show: props.show,
      as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
        as: "div",
        "static": true,
        className: "fixed inset-0 flex z-40 lg:hidden",
        open: props.show,
        onClose: props.onClose,
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
            lineNumber: 24,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
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
                  onClick: props.onClick,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["XIcon"], {
                    className: "h-6 w-6 text-white",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0 flex items-center px-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-8 w-auto",
                src: "https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg",
                alt: "Easywire logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              className: "mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto",
              "aria-label": "Sidebar",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "px-2 space-y-1",
                children: navigation.map(props.callbackfn)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-6 pt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "px-2 space-y-1",
                  children: secondaryNavigation.map(props.callbackfn1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-shrink-0 w-14",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 87,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto",
            "aria-label": "Sidebar",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "px-2 space-y-1",
              children: navigation.map(props.callbackfn2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-6 pt-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "px-2 space-y-1",
                children: secondaryNavigation.map(props.callbackfn3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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

/***/ }),

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/sidebar */ "./components/sidebar.js");



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

_components_sidebar__WEBPACK_IMPORTED_MODULE_9__["Sidebar"].propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"],
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
  callbackfn: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
  callbackfn1: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
  callbackfn2: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
  callbackfn3: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"]
};

function AdminPage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_2__["AdminLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_actions_Admin__WEBPACK_IMPORTED_MODULE_3__["Admin"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-screen flex overflow-hidden bg-gray-100",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar__WEBPACK_IMPORTED_MODULE_9__["Sidebar"], {
          show: sidebarOpen,
          onClose: setSidebarOpen,
          onClick: function onClick() {
            return setSidebarOpen(false);
          },
          callbackfn: function callbackfn(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: item.href,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: classNames(item.current ? 'bg-cyan-800 text-white' : 'text-white hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md'),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                  className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 42
                }, _this), item.name]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 38
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 34
            }, _this);
          },
          callbackfn1: function callbackfn1(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: item.href,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:text-white hover:bg-cyan-600",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                  className: "mr-4 h-6 w-6 text-cyan-200",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 33
                }, _this), item.name]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, _this);
          },
          callbackfn2: function callbackfn2(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: item.href,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-white hover:text-white hover:bg-cyan-600', 'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'),
                "aria-current": item.current ? 'page' : undefined,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                  className: "mr-4 flex-shrink-0 h-6 w-6 text-cyan-200",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 33
                }, _this), item.name]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, _this);
          },
          callbackfn3: function callbackfn3(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: item.href,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-cyan-600",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                  className: "mr-4 h-6 w-6 text-cyan-200",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 33
                }, _this), item.name]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
                lineNumber: 146,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["MenuAlt1Icon"], {
                className: "h-6 w-6",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
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
                    lineNumber: 153,
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
                        lineNumber: 160,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      id: "search_field",
                      name: "search_field",
                      className: "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm",
                      placeholder: "Search transactions",
                      type: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
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
                    lineNumber: 175,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["BellIcon"], {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
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
                            lineNumber: 186,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "hidden ml-3 text-gray-700 text-sm font-medium lg:block",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "sr-only",
                              children: "Open user menu for "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
                              columnNumber: 27
                            }, _this), "Emilia Birch"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["ChevronDownIcon"], {
                            className: "hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
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
                                lineNumber: 217,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
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
                                lineNumber: 230,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 228,
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
                                lineNumber: 243,
                                columnNumber: 65
                              }, _this);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 241,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
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
                        lineNumber: 271,
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
                            lineNumber: 278,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                            className: "ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate",
                            children: "Good morning, Emilia Birch"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 283,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                          className: "mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                            className: "sr-only",
                            children: "Company"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                            className: "flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["OfficeBuildingIcon"], {
                              className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 290,
                              columnNumber: 61
                            }, this), "Duke street studio"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 289,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                            className: "sr-only",
                            children: "Account status"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 296,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                            className: "mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["CheckCircleIcon"], {
                              className: "flex-shrink-0 mr-1.5 h-5 w-5 text-green-400",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 298,
                              columnNumber: 61
                            }, this), "Verified account"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 297,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 287,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "mt-6 flex space-x-3 md:mt-0 md:ml-4",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "button",
                      className: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                      children: "Add money"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "button",
                      className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
                      children: "Send money"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
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
                  lineNumber: 327,
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
                              lineNumber: 335,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "ml-5 w-0 flex-1",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                                className: "text-sm font-medium text-gray-500 truncate",
                                children: card.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 340,
                                columnNumber: 65
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "text-lg font-medium text-gray-900",
                                  children: card.amount
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 342,
                                  columnNumber: 69
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 341,
                                columnNumber: 65
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 339,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 338,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 333,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 332,
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
                            lineNumber: 351,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 350,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 349,
                        columnNumber: 49
                      }, _this)]
                    }, card.name, true, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8",
                children: "Recent activity"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
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
                              lineNumber: 375,
                              columnNumber: 27
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "flex flex-col text-gray-500 text-sm truncate",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                className: "truncate",
                                children: transaction.name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 377,
                                columnNumber: 29
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "text-gray-900 font-medium",
                                  children: transaction.amount
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 379,
                                  columnNumber: 31
                                }, _this), ' ', transaction.currency]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 378,
                                columnNumber: 29
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                                dateTime: transaction.datetime,
                                children: transaction.date
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 382,
                                columnNumber: 29
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 376,
                              columnNumber: 27
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 374,
                            columnNumber: 25
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["ChevronRightIcon"], {
                            className: "flex-shrink-0 h-5 w-5 text-gray-400",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 385,
                            columnNumber: 25
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 373,
                          columnNumber: 23
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 371,
                        columnNumber: 49
                      }, _this)
                    }, transaction.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
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
                      lineNumber: 397,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500",
                      children: "Next"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 403,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 396,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 367,
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
                              lineNumber: 422,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Amount"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 425,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block",
                              children: "Status"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 428,
                              columnNumber: 57
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              className: "px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Date"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 431,
                              columnNumber: 57
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 421,
                            columnNumber: 53
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 420,
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
                                      lineNumber: 443,
                                      columnNumber: 73
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                      className: "text-gray-500 truncate group-hover:text-gray-900",
                                      children: transaction.name
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 447,
                                      columnNumber: 73
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 441,
                                    columnNumber: 69
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 440,
                                  columnNumber: 65
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 439,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "text-gray-900 font-medium",
                                  children: [transaction.amount, " "]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 452,
                                  columnNumber: 65
                                }, _this), transaction.currency]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 451,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: classNames(statusStyles[transaction.status], 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'),
                                  children: transaction.status
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 457,
                                  columnNumber: 31
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 456,
                                columnNumber: 61
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                                  dateTime: transaction.datetime,
                                  children: transaction.date
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 467,
                                  columnNumber: 65
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 466,
                                columnNumber: 61
                              }, _this)]
                            }, transaction.id, true, {
                              fileName: _jsxFileName,
                              lineNumber: 438,
                              columnNumber: 57
                            }, _this);
                          })
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 436,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 419,
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
                              lineNumber: 481,
                              columnNumber: 69
                            }, this), " to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "font-medium",
                              children: "10"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 481,
                              columnNumber: 111
                            }, this), " of", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "font-medium",
                              children: "20"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 483,
                              columnNumber: 61
                            }, this), " results"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 480,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 479,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex-1 flex justify-between sm:justify-end",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            className: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                            children: "Previous"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 487,
                            columnNumber: 57
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            className: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                            children: "Next"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 493,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 486,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 475,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 417,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaWRlYmFyIiwicHJvcHMiLCJzaG93IiwiRnJhZ21lbnQiLCJvbkNsb3NlIiwib25DbGljayIsIm5hdmlnYXRpb24iLCJtYXAiLCJjYWxsYmFja2ZuIiwic2Vjb25kYXJ5TmF2aWdhdGlvbiIsImNhbGxiYWNrZm4xIiwiY2FsbGJhY2tmbjIiLCJjYWxsYmFja2ZuMyIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIkhvbWVJY29uIiwiY3VycmVudCIsIkNsb2NrSWNvbiIsIlNjYWxlSWNvbiIsIkNyZWRpdENhcmRJY29uIiwiRG9jdW1lbnRSZXBvcnRJY29uIiwiQ29nSWNvbiIsIlF1ZXN0aW9uTWFya0NpcmNsZUljb24iLCJjYXJkcyIsImFtb3VudCIsInRyYW5zYWN0aW9ucyIsImlkIiwiY3VycmVuY3kiLCJzdGF0dXMiLCJkYXRlIiwiZGF0ZXRpbWUiLCJzdGF0dXNTdHlsZXMiLCJzdWNjZXNzIiwicHJvY2Vzc2luZyIsImZhaWxlZCIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiQWRtaW5QYWdlIiwidXNlU3RhdGUiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwiaXRlbSIsInVuZGVmaW5lZCIsIm9wZW4iLCJhY3RpdmUiLCJjYXJkIiwidHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzNCLHNCQUFPO0FBQUEsNEJBQ0gscUVBQUMsNERBQUQsQ0FBWSxJQUFaO0FBQWlCLFVBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUE3QjtBQUFtQyxRQUFFLEVBQUVDLDhD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QUFDSSxnQ0FBSSxFQUFDLEdBRFQ7QUFFSSxxQ0FBUyxFQUFDLGdKQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBMURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF6Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQS9ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0hKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQSthSDs7R0FuYlFpQixTOztLQUFBQSxTO0FBcWJNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi5lNGE1MWY1MzZjNTU1OThjYmJjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFsb2csIFRyYW5zaXRpb259IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7WEljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e3Byb3BzLnNob3d9IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICAgICAgICAgIHN0YXRpY1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IHotNDAgbGc6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLnNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTYwMCBiZy1vcGFjaXR5LTc1XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIi10cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwidHJhbnNsYXRlLXgtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zbGF0ZS14LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCItdHJhbnNsYXRlLXgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LTEgZmxleCBmbGV4LWNvbCBtYXgtdy14cyB3LWZ1bGwgcHQtNSBwYi00IGJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgLW1yLTEyIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2Ugc2lkZWJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvZWFzeXdpcmUtbG9nby1jeWFuLTMwMC1tYXJrLXdoaXRlLXRleHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFYXN5d2lyZSBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTUgZmxleC1zaHJpbmstMCBoLWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWN5YW4tODAwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAocHJvcHMuY2FsbGJhY2tmbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kYXJ5TmF2aWdhdGlvbi5tYXAocHJvcHMuY2FsbGJhY2tmbjEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctMTRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRHVtbXkgZWxlbWVudCB0byBmb3JjZSBzaWRlYmFyIHRvIHNocmluayB0byBmaXQgY2xvc2UgaWNvbiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuXHJcbiAgICAgICAgey8qIFN0YXRpYyBzaWRlYmFyIGZvciBkZXNrdG9wICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6ZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy02NFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGViYXIgY29tcG9uZW50LCBzd2FwIHRoaXMgZWxlbWVudCB3aXRoIGFub3RoZXIgc2lkZWJhciBpZiB5b3UgbGlrZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgYmctZ3JheS05MDAgcHQtNSBwYi00IG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvZWFzeXdpcmUtbG9nby1jeWFuLTMwMC1tYXJrLXdoaXRlLXRleHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkVhc3l3aXJlIGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4LTEgZmxleCBmbGV4LWNvbCBkaXZpZGUteSBkaXZpZGUtY3lhbi04MDAgb3ZlcmZsb3cteS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcChwcm9wcy5jYWxsYmFja2ZuMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRhcnlOYXZpZ2F0aW9uLm1hcChwcm9wcy5jYWxsYmFja2ZuMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBZG1pbkxheW91dH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRtaW5MYXlvdXRcIjtcclxuaW1wb3J0IHtBZG1pbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvQWRtaW5cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge01lbnUsIFRyYW5zaXRpb259IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgQmVsbEljb24sXHJcbiAgICBDbG9ja0ljb24sXHJcbiAgICBDb2dJY29uLFxyXG4gICAgQ3JlZGl0Q2FyZEljb24sXHJcbiAgICBEb2N1bWVudFJlcG9ydEljb24sXHJcbiAgICBIb21lSWNvbixcclxuICAgIE1lbnVBbHQxSWNvbixcclxuICAgIFF1ZXN0aW9uTWFya0NpcmNsZUljb24sXHJcbiAgICBTY2FsZUljb24sXHJcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQge1xyXG4gICAgQ2FzaEljb24sXHJcbiAgICBDaGVja0NpcmNsZUljb24sXHJcbiAgICBDaGV2cm9uRG93bkljb24sXHJcbiAgICBDaGV2cm9uUmlnaHRJY29uLFxyXG4gICAgT2ZmaWNlQnVpbGRpbmdJY29uLFxyXG4gICAgU2VhcmNoSWNvbixcclxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtTaWRlYmFyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gICAge25hbWU6ICdIb21lJywgaHJlZjogJyMnLCBpY29uOiBIb21lSWNvbiwgY3VycmVudDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ0NyZWF0ZSBDYXRlZ29yeScsIGhyZWY6ICcvYWRtaW4vY3J1ZC9jYXRlZ29yeScsIGljb246IENsb2NrSWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcmVhdGUgVGFnJywgaHJlZjogJy9hZG1pbi9jcnVkL3RhZycsIGljb246IFNjYWxlSWNvbiwgY3VycmVudDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcmVhdGUgQmxvZycsIGhyZWY6ICcvYWRtaW4vY3J1ZC9ibG9nJywgaWNvbjogQ3JlZGl0Q2FyZEljb24sIGN1cnJlbnQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVXBkYXRlL0RlbGV0ZSBCbG9nJywgaHJlZjogJy9hZG1pbi9jcnVkL2Jsb2dzJywgaWNvbjogRG9jdW1lbnRSZXBvcnRJY29uLCBjdXJyZW50OiBmYWxzZX0sXHJcbl1cclxuY29uc3Qgc2Vjb25kYXJ5TmF2aWdhdGlvbiA9IFtcclxuICAgIHtuYW1lOiAnVXBkYXRlIHByb2ZpbGUnLCBocmVmOiAnL3VzZXIvdXBkYXRlJywgaWNvbjogQ29nSWNvbn0sXHJcbiAgICB7bmFtZTogJ0hlbHAnLCBocmVmOiAnIycsIGljb246IFF1ZXN0aW9uTWFya0NpcmNsZUljb259LFxyXG5dXHJcbmNvbnN0IGNhcmRzID0gW1xyXG4gICAge25hbWU6ICdBY2NvdW50IGJhbGFuY2UnLCBocmVmOiAnIycsIGljb246IFNjYWxlSWNvbiwgYW1vdW50OiAnJDMwLDY1OS40NSd9LFxyXG4gICAgLy8gTW9yZSBpdGVtcy4uLlxyXG5dXHJcblxyXG5jb25zdCB0cmFuc2FjdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ1BheW1lbnQgdG8gTW9sbHkgU2FuZGVycycsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGFtb3VudDogJyQyMCwwMDAnLFxyXG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICBkYXRlOiAnSnVseSAxMSwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTA3LTExJyxcclxuICAgIH0sXHJcbiAgICAvLyBNb3JlIHRyYW5zYWN0aW9ucy4uLlxyXG5dXHJcbmNvbnN0IHN0YXR1c1N0eWxlcyA9IHtcclxuICAgIHN1Y2Nlc3M6ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDAnLFxyXG4gICAgcHJvY2Vzc2luZzogJ2JnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctODAwJyxcclxuICAgIGZhaWxlZDogJ2JnLWdyYXktMTAwIHRleHQtZ3JheS04MDAnLFxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuU2lkZWJhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjYWxsYmFja2ZuOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNhbGxiYWNrZm4xOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNhbGxiYWNrZm4yOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNhbGxiYWNrZm4zOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQWRtaW5QYWdlKCkge1xyXG5cclxuICAgIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWRtaW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxBZG1pbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBzaG93PXtzaWRlYmFyT3Blbn0gb25DbG9zZT17c2V0U2lkZWJhck9wZW59IG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja2ZuPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VycmVudCA/ICdiZy1jeWFuLTgwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci00IGZsZXgtc2hyaW5rLTAgaC02IHctNiB0ZXh0LWN5YW4tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gY2FsbGJhY2tmbjE9eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctY3lhbi02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItNCBoLTYgdy02IHRleHQtY3lhbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfSBjYWxsYmFja2ZuMj17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnQgPyAnYmctZ3JheS05MDAgdGV4dC13aGl0ZScgOiAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWN5YW4tNjAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSByb3VuZGVkLW1kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyAncGFnZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci00IGZsZXgtc2hyaW5rLTAgaC02IHctNiB0ZXh0LWN5YW4tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gY2FsbGJhY2tmbjM9eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgcHktMiB0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1jeWFuLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci00IGgtNiB3LTYgdGV4dC1jeWFuLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctYXV0byBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4LXNocmluay0wIGZsZXggaC0xNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbGc6Ym9yZGVyLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWN5YW4tNTAwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhck9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gc2lkZWJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUFsdDFJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpweC02IGxnOm1heC13LTZ4bCBsZzpteC1hdXRvIGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG1kOm1sLTBcIiBhY3Rpb249XCIjXCIgbWV0aG9kPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaF9maWVsZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCB0ZXh0LWdyYXktNDAwIGZvY3VzLXdpdGhpbjp0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hfZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoX2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIGgtZnVsbCBwbC04IHByLTMgcHktMiBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTkwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdHJhbnNhY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyIG1kOm1sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0xIHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctY3lhbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmVsbEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSBkcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtvcGVufSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy14cyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1jeWFuLTUwMCBsZzpwLTIgbGc6cm91bmRlZC1tZCBsZzpob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk0NzkwMTA4Mzc3LWJlOWMyOWIyOTMzMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWwtMyB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1tZWRpdW0gbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiB1c2VyIG1lbnUgZm9yIDwvc3Bhbj5FbWlsaWEgQmlyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGZsZXgtc2hyaW5rLTAgbWwtMSBoLTUgdy01IHRleHQtZ3JheS00MDAgbGc6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBweS0xIGJnLXdoaXRlIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YWN0aXZlfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YWN0aXZlfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHthY3RpdmV9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmUgcGItOCB6LTAgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUGFnZSBoZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IGxnOm1heC13LTZ4bCBsZzpteC1hdXRvIGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktNiBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbGc6Ym9yZGVyLXQgbGc6Ym9yZGVyLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2ZpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC0xNiB3LTE2IHJvdW5kZWQtZnVsbCBzbTpibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yLjYmdz0yNTYmaD0yNTYmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHJvdW5kZWQtZnVsbCBzbTpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yLjYmdz0yNTYmaD0yNTYmcT04MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMyB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy03IHRleHQtZ3JheS05MDAgc206bGVhZGluZy05IHNtOnRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2QgbW9ybmluZywgRW1pbGlhIEJpcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTYgZmxleCBmbGV4LWNvbCBzbTptbC0zIHNtOm10LTEgc206ZmxleC1yb3cgc206ZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Db21wYW55PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgc206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2ZmaWNlQnVpbGRpbmdJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIG1yLTEuNSBoLTUgdy01IHRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHVrZSBzdHJlZXQgc3R1ZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPkFjY291bnQgc3RhdHVzPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZm9udC1tZWRpdW0gc206bXItNiBzbTptdC0wIGNhcGl0YWxpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0xLjUgaC01IHctNSB0ZXh0LWdyZWVuLTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcmlmaWVkIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IHNwYWNlLXgtMyBtZDptdC0wIG1kOm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctY3lhbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ncmF5LTkwMCBob3ZlcjpiZy1jeWFuLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1jeWFuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kIG1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+T3ZlcnZpZXc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENhcmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQubmFtZX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYXJkLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IHctMCBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZVwiPntjYXJkLm5hbWV9PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntjYXJkLmFtb3VudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC01IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NhcmQuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWN5YW4tNzAwIGhvdmVyOnRleHQtY3lhbi05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBtdC04IHB4LTQgdGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZW50IGFjdGl2aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFjdGl2aXR5IGxpc3QgKHNtYWxsZXN0IGJyZWFrcG9pbnQgb25seSkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0yIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93IHNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dHJhbnNhY3Rpb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0cmFuc2FjdGlvbi5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTQgYmctd2hpdGUgaG92ZXI6YmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHNwYWNlLXgtMiB0cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXNoSWNvbiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtZ3JheS01MDAgdGV4dC1zbSB0cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57dHJhbnNhY3Rpb24ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bVwiPnt0cmFuc2FjdGlvbi5hbW91bnR9PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e3RyYW5zYWN0aW9uLmRhdGV0aW1lfT57dHJhbnNhY3Rpb24uZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNCBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBY3Rpdml0eSB0YWJsZSAoc21hbGwgYnJlYWtwb2ludCBhbmQgdXApICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgbWluLXctZnVsbCBvdmVyZmxvdy14LWF1dG8gc2hhZG93IG92ZXJmbG93LWhpZGRlbiBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1ncmF5LTUwIHRleHQtcmlnaHQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoaWRkZW4gcHgtNiBweS0zIGJnLWdyYXktNTAgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYXktNTAgdGV4dC1yaWdodCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt0cmFuc2FjdGlvbi5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1heC13LTAgdy1mdWxsIHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RyYW5zYWN0aW9uLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgaW5saW5lLWZsZXggc3BhY2UteC0yIHRydW5jYXRlIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhc2hJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtNSB3LTUgdGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdHJ1bmNhdGUgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTkwMFwiPnt0cmFuc2FjdGlvbi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtXCI+e3RyYW5zYWN0aW9uLmFtb3VudH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaGlkZGVuIHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNTdHlsZXNbdHJhbnNhY3Rpb24uc3RhdHVzXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1yaWdodCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU9e3RyYW5zYWN0aW9uLmRhdGV0aW1lfT57dHJhbnNhY3Rpb24uZGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBhZ2luYXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHNtOnB4LTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93aW5nIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+MTwvc3Bhbj4gdG8gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj4xMDwvc3Bhbj4gb2Z7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPjIwPC9zcGFuPiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LWdyYXktNzAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQWRtaW4+XHJcbiAgICAgICAgPC9BZG1pbkxheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9