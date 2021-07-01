webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./components/Blog/Search.js":
/*!***********************************!*\
  !*** ./components/Blog/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Search.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Search = function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    search: undefined,
    searched: false,
    message: '',
    results: []
  }),
      values = _useState[0],
      setValues = _useState[1];

  var search = values.search,
      results = values.results,
      searched = values.searched,
      message = values.message;

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listSearch"])({
      search: search
    }).then(function (data) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        searched: true,
        results: data,
        message: "".concat(data.length, " blogs found")
      }));
    });
  };

  var handleChange = function handleChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      results: [],
      search: e.target.value,
      searched: false
    }));
  };

  var searchedBlogs = function searchedBlogs() {
    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    console.log(results);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jumbotron bg-white",
      children: [message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "pt-4 text-muted font-italic",
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }, _this), results.map(function (blog, i) {
        console.log(blog.title);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/blogs/".concat(blog.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-primary",
                children: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this)
        }, void 0, false);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this);
  };

  var searchForm = function searchForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: searchSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "search",
            className: "form-control",
            placeholder: "Search blogs",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            type: "submit",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pt-3 pb-5",
      children: searchForm()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), searched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: '-120px',
        marginBottom: '-80px'
      },
      children: searchedBlogs(results)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 26
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, _this);
};

_s(Search, "OyKZHXnAU4MCsVzMIyS21sULNFY=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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

/***/ }),

/***/ "./components/pagesHeader.jsx":
/*!************************************!*\
  !*** ./components/pagesHeader.jsx ***!
  \************************************/
/*! exports provided: PageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return PageHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Blog_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blog/Search */ "./components/Blog/Search.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\seoblog\\frontend\\components\\pagesHeader.jsx",
    _this = undefined;






var solutions = [{
  name: 'Analytics',
  description: 'Get a better understanding of where your traffic is coming from.',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["ChartBarIcon"]
}, {
  name: 'Engagement',
  description: 'Speak directly to your customers in a more meaningful way.',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["CursorClickIcon"]
}, {
  name: 'Security',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["ShieldCheckIcon"]
}, {
  name: 'Integrations',
  description: "Connect with third-party tools that you're already using.",
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["ViewGridIcon"]
}, {
  name: 'Automations',
  description: 'Build strategic funnels that will drive your customers to convert',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["RefreshIcon"]
}, {
  name: 'Reports',
  description: 'Get detailed reports that will help you make more informed decisions ',
  href: '#',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["DocumentReportIcon"]
}];
var resources = [{
  name: 'Help Center',
  description: 'Get all of your questions answered in our forums or contact support.',
  href: '#'
}, {
  name: 'Guides',
  description: 'Learn how to maximize our platform to get the most out of it.',
  href: '#'
}, {
  name: 'Events',
  description: 'See what meet-ups and other events we might be planning near you.',
  href: '#'
}, {
  name: 'Security',
  description: 'Understand how we take your privacy seriously.',
  href: '#'
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}



var PageHeader = function PageHeader(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "max-w-7xl mx-auto dark:text-white",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        className: "relative",
        children: function children(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  className: "flex",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Workflow"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "h-8 w-auto sm:h-10",
                    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "-mr-2 -my-2 md:hidden",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Button, {
                  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Open menu"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"], {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hidden md:flex-1 md:flex md:items-center md:justify-between",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Group, {
                  as: "nav",
                  className: "flex space-x-10",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/",
                    className: "text-base font-medium text-gray-500 hover:text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Home"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/blogs",
                    className: "text-base font-medium text-gray-500 hover:text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Blog"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/about",
                    className: "text-base font-medium text-gray-500 hover:text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/contact",
                    className: "text-base font-medium text-gray-500 hover:text-gray-900",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Contact"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex items-center md:ml-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Blog_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
              show: open,
              as: react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
              enter: "duration-200 ease-out",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "duration-100 ease-in",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Panel, {
                focus: true,
                "static": true,
                className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "pt-5 pb-6 px-5",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "h-8 w-auto",
                          src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                          alt: "Workflow"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 149,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "-mr-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__["Popover"].Button, {
                          className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Close menu"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 158,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["XIcon"], {
                            className: "h-6 w-6",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 159,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "mt-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                        className: "grid gap-6",
                        children: solutions.map(function (item) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: item.href,
                            className: "-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.icon, {
                                className: "h-6 w-6",
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 173,
                                columnNumber: 65
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 171,
                              columnNumber: 61
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "ml-4 text-base font-medium text-gray-900",
                              children: item.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 175,
                              columnNumber: 61
                            }, _this)]
                          }, item.name, true, {
                            fileName: _jsxFileName,
                            lineNumber: 166,
                            columnNumber: 57
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "py-6 px-5",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-base font-medium text-gray-900 hover:text-gray-700",
                        children: "Pricing"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-base font-medium text-gray-900 hover:text-gray-700",
                        children: "Docs"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: "/",
                        className: "text-base font-medium text-gray-500 hover:text-gray-900",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Home"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-base font-medium text-gray-900 hover:text-gray-700",
                        children: "Enterprise"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 49
                      }, _this), resources.map(function (item) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: item.href,
                          className: "text-base font-medium text-gray-900 hover:text-gray-700",
                          children: item.name
                        }, item.name, false, {
                          fileName: _jsxFileName,
                          lineNumber: 204,
                          columnNumber: 53
                        }, _this);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "mt-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Blog_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this)]
          }, void 0, true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};
_c = PageHeader;

var _c;

$RefreshReg$(_c, "PageHeader");

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

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Blog_Card_SmallCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Blog/Card/SmallCard */ "./components/Blog/Card/SmallCard.js");
/* harmony import */ var _components_DisqusThread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/DisqusThread */ "./components/DisqusThread.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/pagesHeader */ "./components/pagesHeader.jsx");




var _jsxFileName = "E:\\seoblog\\frontend\\pages\\blogs\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var posts = [{
  title: 'Boost your conversion rate',
  href: '#',
  category: {
    name: 'Article',
    href: '#',
    color: 'bg-indigo-100 text-indigo-800'
  },
  description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Paul York',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '6 min'
}, {
  title: 'How to use search engine optimization to drive sales',
  href: '#',
  category: {
    name: 'Video',
    href: '#',
    color: 'bg-pink-100 text-pink-800'
  },
  description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
  date: 'Mar 10, 2020',
  datetime: '2020-03-10',
  author: {
    name: 'Dessie Ryan',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '4 min'
}, {
  title: 'Improve your customer experience',
  href: '#',
  category: {
    name: 'Case Study',
    href: '#',
    color: 'bg-green-100 text-green-800'
  },
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  author: {
    name: 'Easer Collins',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '11 min'
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

var SingleBlog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(_c = _s(function (_ref) {
  _s();

  var blog = _ref.blog,
      query = _ref.query;
  console.log(blog);
  var url = "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API"], "/blog/photo/").concat(blog.slug);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    srcBlob: null,
    srcDataUri: null
  }),
      _useState$ = _useState[0],
      srcBlob = _useState$.srcBlob,
      srcDataUri = _useState$.srcDataUri,
      setSrc = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var isUnmounted = false;
    fetch(url, {}).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return blob.arrayBuffer();
    }).then(function (arrayBuffer) {
      if (isUnmounted) {
        return;
      }

      var blob = new Blob([arrayBuffer]);
      var srcBlob = URL.createObjectURL(blob);
      setSrc(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          srcBlob: srcBlob
        });
      });
    });
    return function () {
      isUnmounted = true;
    };
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      related = _useState2[0],
      setRelated = _useState2[1];

  var loadRelated = function loadRelated() {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listRelated"])({
      blog: blog
    }).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loadRelated();
  }, []);

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [blog.title, " | ", _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(blog.title, "| ").concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "webiste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: srcBlob
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: srcBlob
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: srcBlob
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, _this);
  };

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, _this);
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, _this);
    });
  };

  var showComments = function showComments() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DisqusThread__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: blog.id,
      title: blog.title,
      path: "/blog/".concat(blog.slug)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, _this);
  };

  var showRelatedBlog = function showRelatedBlog() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-white pt-5 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",
            children: "Related Publications"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "absolute inset-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white h-1/3 sm:h-2/3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative max-w-7xl mx-auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-2 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",
              children: related.map(function (post, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Blog_Card_SmallCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  blog: post
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_13__["PageHeader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white overflow-hidden",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "text-base text-indigo-600 font-semibold tracking-wide uppercase",
                children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/profile/".concat(blog.postedBy.username),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: blog.postedBy.username
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 48
                }, _this), " ", ' ', "| Published ", moment__WEBPACK_IMPORTED_MODULE_9___default()(blog.updatedAt).fromNow()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                children: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, _this), showBlogCategories(blog), showBlogTags(blog)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-8 lg:grid lg:grid-cols-2 lg:gap-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative lg:row-start-1 lg:col-start-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "hidden lg:block absolute top-0 right-0 -mt-20 -mr-20",
                width: 404,
                height: 384,
                fill: "none",
                viewBox: "0 0 404 384",
                "aria-hidden": "true",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
                    id: "de316486-4a29-4312-bdfc-fbce2132a2c1",
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20,
                    patternUnits: "userSpaceOnUse",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                      x: 0,
                      y: 0,
                      width: 4,
                      height: 4,
                      className: "text-gray-200",
                      fill: "currentColor"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  width: 404,
                  height: 384,
                  fill: "url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative text-base mx-auto max-w-prose lg:max-w-none",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "aspect-w-12 aspect-h-7 lg:aspect-none",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: srcBlob,
                      alt: blog.title,
                      className: "rounded-lg shadow-lg object-cover object-center",
                      width: 1184,
                      height: 1376
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
                    className: "mt-3 flex text-sm text-gray-500",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__["CameraIcon"], {
                      className: "flex-none w-5 h-5 text-gray-400",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "ml-2",
                      children: "Photograph by Marcus O\u2019Leary"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-8 lg:mt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-base max-w-prose mx-auto lg:max-w-none",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-lg text-gray-500",
                  children: "Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1",
                children: react_render_html__WEBPACK_IMPORTED_MODULE_8___default()(blog.body)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, _this), showRelatedBlog(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container pb-5",
        children: showComments()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
}, "qByZ5GeJVn/zF+hbpT6eAijLs3g="));
_c2 = SingleBlog;

SingleBlog.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["singleBlog"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return {
        blog: data,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleBlog);

var _c, _c2;

$RefreshReg$(_c, "SingleBlog$React.memo");
$RefreshReg$(_c2, "SingleBlog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlc0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInNlYXJjaGVkIiwibWVzc2FnZSIsInJlc3VsdHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZWFyY2hTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaXN0U2VhcmNoIiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaGVkQmxvZ3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiYmxvZyIsImkiLCJ0aXRsZSIsInNsdWciLCJzZWFyY2hGb3JtIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwic29sdXRpb25zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaHJlZiIsImljb24iLCJDaGFydEJhckljb24iLCJDdXJzb3JDbGlja0ljb24iLCJTaGllbGRDaGVja0ljb24iLCJWaWV3R3JpZEljb24iLCJSZWZyZXNoSWNvbiIsIkRvY3VtZW50UmVwb3J0SWNvbiIsInJlc291cmNlcyIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJQYWdlSGVhZGVyIiwicHJvcHMiLCJvcGVuIiwiRnJhZ21lbnQiLCJpdGVtIiwicG9zdHMiLCJjYXRlZ29yeSIsImNvbG9yIiwiZGF0ZSIsImRhdGV0aW1lIiwiYXV0aG9yIiwiaW1hZ2VVcmwiLCJyZWFkaW5nVGltZSIsIlNpbmdsZUJsb2ciLCJSZWFjdCIsIm1lbW8iLCJxdWVyeSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInJlc3BvbnNlIiwiYmxvYiIsImFycmF5QnVmZmVyIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0YXRlIiwicmVsYXRlZCIsInNldFJlbGF0ZWQiLCJsb2FkUmVsYXRlZCIsImxpc3RSZWxhdGVkIiwiZXJyb3IiLCJoZWFkIiwiQVBQX05BTUUiLCJtZGVzYyIsIkRPTUFJTiIsInNob3dCbG9nQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJjIiwic2hvd0Jsb2dUYWdzIiwidGFncyIsInQiLCJzaG93Q29tbWVudHMiLCJpZCIsInNob3dSZWxhdGVkQmxvZyIsInBvc3QiLCJwb3N0ZWRCeSIsInVzZXJuYW1lIiwibW9tZW50IiwidXBkYXRlZEF0IiwiZnJvbU5vdyIsInJlbmRlckhUTUwiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwic2luZ2xlQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDO0FBQ2pDQyxVQUFNLEVBQUVDLFNBRHlCO0FBRWpDQyxZQUFRLEVBQUUsS0FGdUI7QUFHakNDLFdBQU8sRUFBRSxFQUh3QjtBQUlqQ0MsV0FBTyxFQUFFO0FBSndCLEdBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxNQVFWTixNQVJVLEdBUTJCSyxNQVIzQixDQVFWTCxNQVJVO0FBQUEsTUFRRkksT0FSRSxHQVEyQkMsTUFSM0IsQ0FRRkQsT0FSRTtBQUFBLE1BUU1GLFFBUk4sR0FRMkJHLE1BUjNCLENBUU1ILFFBUk47QUFBQSxNQVFnQkMsT0FSaEIsR0FRMkJFLE1BUjNCLENBUWdCRixPQVJoQjs7QUFVakIsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7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R0FBUixDQUFZLGtDQUFaLEVBQWdEUCxJQUFoRDtBQUNBLGFBQU87QUFBQ1MsWUFBSSxFQUFFVCxJQUFQO0FBQWFpRCxhQUFLLEVBQUxBO0FBQWIsT0FBUDtBQUNIO0FBQ0osR0FQTSxDQUFQO0FBUUgsQ0FURDs7QUFXZUgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MvW3NsdWddLjVmYzVjMjdmNzkzOTNjMGQ5MWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7bGlzdFNlYXJjaH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaDogdW5kZWZpbmVkLFxyXG4gICAgICAgIHNlYXJjaGVkOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICByZXN1bHRzOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge3NlYXJjaCwgcmVzdWx0cyxzZWFyY2hlZCwgbWVzc2FnZX0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxpc3RTZWFyY2goe3NlYXJjaH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHNlYXJjaGVkOiB0cnVlLCByZXN1bHRzOiBkYXRhLCBtZXNzYWdlOiBgJHtkYXRhLmxlbmd0aH0gYmxvZ3MgZm91bmRgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgcmVzdWx0czogW10sIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHNlYXJjaGVkOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hlZEJsb2dzID0gKHJlc3VsdHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInB0LTQgdGV4dC1tdXRlZCBmb250LWl0YWxpY1wiPnttZXNzYWdlfTwvcD59XHJcblxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvZy50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e2Jsb2cudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNoU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJsb2dzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItNVwiPntzZWFyY2hGb3JtKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIHtzZWFyY2hlZCAmJiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnLTEyMHB4JywgbWFyZ2luQm90dG9tOiAnLTgwcHgnfX0+e3NlYXJjaGVkQmxvZ3MocmVzdWx0cyl9PC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCx9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UG9wb3ZlciwgVHJhbnNpdGlvbn0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBDaGFydEJhckljb24sXHJcbiAgICBDdXJzb3JDbGlja0ljb24sXHJcbiAgICBEb2N1bWVudFJlcG9ydEljb24sXHJcbiAgICBNZW51SWNvbixcclxuICAgIFJlZnJlc2hJY29uLFxyXG4gICAgU2hpZWxkQ2hlY2tJY29uLFxyXG4gICAgVmlld0dyaWRJY29uLFxyXG4gICAgWEljb24sXHJcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQge0NoZXZyb25Eb3duSWNvbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuXHJcbmNvbnN0IHNvbHV0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQW5hbHl0aWNzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBhIGJldHRlciB1bmRlcnN0YW5kaW5nIG9mIHdoZXJlIHlvdXIgdHJhZmZpYyBpcyBjb21pbmcgZnJvbS4nLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBpY29uOiBDaGFydEJhckljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFbmdhZ2VtZW50JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NwZWFrIGRpcmVjdGx5IHRvIHlvdXIgY3VzdG9tZXJzIGluIGEgbW9yZSBtZWFuaW5nZnVsIHdheS4nLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBpY29uOiBDdXJzb3JDbGlja0ljb24sXHJcbiAgICB9LFxyXG4gICAge25hbWU6ICdTZWN1cml0eScsIGRlc2NyaXB0aW9uOiBcIllvdXIgY3VzdG9tZXJzJyBkYXRhIHdpbGwgYmUgc2FmZSBhbmQgc2VjdXJlLlwiLCBocmVmOiAnIycsIGljb246IFNoaWVsZENoZWNrSWNvbn0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ludGVncmF0aW9ucycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIHRoaXJkLXBhcnR5IHRvb2xzIHRoYXQgeW91J3JlIGFscmVhZHkgdXNpbmcuXCIsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGljb246IFZpZXdHcmlkSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0F1dG9tYXRpb25zJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0J1aWxkIHN0cmF0ZWdpYyBmdW5uZWxzIHRoYXQgd2lsbCBkcml2ZSB5b3VyIGN1c3RvbWVycyB0byBjb252ZXJ0JyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgaWNvbjogUmVmcmVzaEljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSZXBvcnRzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBkZXRhaWxlZCByZXBvcnRzIHRoYXQgd2lsbCBoZWxwIHlvdSBtYWtlIG1vcmUgaW5mb3JtZWQgZGVjaXNpb25zICcsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGljb246IERvY3VtZW50UmVwb3J0SWNvbixcclxuICAgIH0sXHJcbl1cclxuY29uc3QgcmVzb3VyY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdIZWxwIENlbnRlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgYWxsIG9mIHlvdXIgcXVlc3Rpb25zIGFuc3dlcmVkIGluIG91ciBmb3J1bXMgb3IgY29udGFjdCBzdXBwb3J0LicsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgfSxcclxuICAgIHtuYW1lOiAnR3VpZGVzJywgZGVzY3JpcHRpb246ICdMZWFybiBob3cgdG8gbWF4aW1pemUgb3VyIHBsYXRmb3JtIHRvIGdldCB0aGUgbW9zdCBvdXQgb2YgaXQuJywgaHJlZjogJyMnfSxcclxuICAgIHtuYW1lOiAnRXZlbnRzJywgZGVzY3JpcHRpb246ICdTZWUgd2hhdCBtZWV0LXVwcyBhbmQgb3RoZXIgZXZlbnRzIHdlIG1pZ2h0IGJlIHBsYW5uaW5nIG5lYXIgeW91LicsIGhyZWY6ICcjJ30sXHJcbiAgICB7bmFtZTogJ1NlY3VyaXR5JywgZGVzY3JpcHRpb246ICdVbmRlcnN0YW5kIGhvdyB3ZSB0YWtlIHlvdXIgcHJpdmFjeSBzZXJpb3VzbHkuJywgaHJlZjogJyMnfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vQmxvZy9TZWFyY2hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh7b3Blbn0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNCBweS02IHNtOnB4LTYgbWQ6anVzdGlmeS1zdGFydCBtZDpzcGFjZS14LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+V29ya2Zsb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0byBzbTpoLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby02MDAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTIgLW15LTIgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBwLTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleC0xIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5Hcm91cCBhcz1cIm5hdlwiIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xMFwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOm1sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZHVyYXRpb24tMjAwIGVhc2Utb3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZHVyYXRpb24tMTAwIGVhc2UtaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBwLTIgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gb3JpZ2luLXRvcC1yaWdodCBtZDpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgYmctd2hpdGUgZGl2aWRlLXktMiBkaXZpZGUtZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTYgcHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3Mvd29ya2Zsb3ctbWFyay1pbmRpZ28tNjAwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvbHV0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbS0zIHAtMyBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEwIHctMTAgcm91bmRlZC1tZCBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGVycHJpc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2gvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCBsaXN0UmVsYXRlZCwgZ2V0UGhvdG99IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCB7QVBJLCBET01BSU4sIEFQUF9OQU1FfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2cvQ2FyZC9TbWFsbENhcmQnO1xyXG5pbXBvcnQgU21hbGxDYXJkcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nL0NhcmQvU21hbGxDYXJkXCI7XHJcbmltcG9ydCBEaXNxdXNUaHJlYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGlzcXVzVGhyZWFkXCI7XHJcbmltcG9ydCB7Q2FtZXJhSWNvbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5cclxuXHJcbmNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQm9vc3QgeW91ciBjb252ZXJzaW9uIHJhdGUnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeToge25hbWU6ICdBcnRpY2xlJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tODAwJ30sXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW4gdG9ydG9yIGxhY3VzIGFyY3UuJyxcclxuICAgICAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDMtMTYnLFxyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnUGF1bCBZb3JrJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZGluZ1RpbWU6ICc2IG1pbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIHVzZSBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiB0byBkcml2ZSBzYWxlcycsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7bmFtZTogJ1ZpZGVvJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLXBpbmstMTAwIHRleHQtcGluay04MDAnfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgIGRhdGU6ICdNYXIgMTAsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wMy0xMCcsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdEZXNzaWUgUnlhbicsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTA1MjU4MTEtZTU4NjlkZDAzMDMyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRpbmdUaW1lOiAnNCBtaW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ltcHJvdmUgeW91ciBjdXN0b21lciBleHBlcmllbmNlJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHtuYW1lOiAnQ2FzZSBTdHVkeScsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDAnfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdXJlIGl1c3RvIGZ1Z2lhdCBjb21tb2RpIHNlcXVpLicsXHJcbiAgICAgICAgZGF0ZTogJ0ZlYiAxMiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAyLTEyJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0Vhc2VyIENvbGxpbnMnLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg3NDEyNzIwNTA3LWU3YWIzNzYwM2M2Zj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuXHJcbmNvbnN0IFNpbmdsZUJsb2cgPSBSZWFjdC5tZW1vKCh7YmxvZywgcXVlcnl9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhibG9nKVxyXG4gICAgY29uc3QgdXJsID0gYCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWBcclxuICAgIGNvbnN0IFt7XHJcbiAgICAgICAgc3JjQmxvYixcclxuICAgICAgICBzcmNEYXRhVXJpXHJcbiAgICB9LCBzZXRTcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNyY0Jsb2I6IG51bGwsXHJcbiAgICAgICAgc3JjRGF0YVVyaTogbnVsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaXNVbm1vdW50ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsLCB7fSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxyXG4gICAgICAgICAgICAudGhlbihibG9iID0+IGJsb2IuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1VubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyY0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFNyYyhzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY0Jsb2JcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgW3JlbGF0ZWQsIHNldFJlbGF0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRSZWxhdGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3RSZWxhdGVkKHtibG9nfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRSZWxhdGVkKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge2Jsb2cudGl0bGV9IHwge0FQUF9OQU1FfVxyXG4gICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfS8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vYmxvZ3MvJHtxdWVyeS5zbHVnfWB9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake2Jsb2cudGl0bGV9fCAke0FQUF9OQU1FfWB9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYmlzdGVcIi8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0vPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3NyY0Jsb2J9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NyY0Jsb2J9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY29udGVudD17c3JjQmxvYn0vPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBjb250ZW50PVwiaW1hZ2UvanBnXCIvPlxyXG4gICAgICAgICAgICB7Lyo8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0Jsb2dDYXRlZ29yaWVzID0gYmxvZyA9PlxyXG4gICAgICAgIGJsb2cuY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57Yy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dCbG9nVGFncyA9IGJsb2cgPT5cclxuICAgICAgICBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RGlzcXVzVGhyZWFkIGlkPXtibG9nLmlkfSB0aXRsZT17YmxvZy50aXRsZX0gcGF0aD17YC9ibG9nLyR7YmxvZy5zbHVnfWB9Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dSZWxhdGVkQmxvZyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB0LTUgcGItMjAgcHgtNCBzbTpweC02IGxnOnB0LTI0IGxnOnBiLTI4IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctbGcgbXgtYXV0byBkaXZpZGUteS0yIGRpdmlkZS1ncmF5LTIwMCBsZzptYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlJlbGF0ZWQgUHVibGljYXRpb25zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYXktNTAgcHQtMTYgcGItMjAgcHgtNCBzbTpweC02IGxnOnB0LTI0IGxnOnBiLTI4IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtMS8zIHNtOmgtMi8zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYXgtdy1sZyBteC1hdXRvIGdyaWQgZ2FwLTUgbGc6Z3JpZC1jb2xzLTMgbGc6bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxhdGVkLm1hcCgocG9zdCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENhcmRzIGJsb2c9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyLz5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy03eGwgbXgtYXV0byBweS0xNiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBiZy1ncmF5LTUwIGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMy80IHctc2NyZWVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1iYXNlIG1heC13LXByb3NlIGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTIgbGc6Z2FwLTggbGc6bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyaXR0ZW4gYnkgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4geycgJ318XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hlZCB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTN4bCBsZWFkaW5nLTggZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QmxvZ0NhdGVnb3JpZXMoYmxvZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dCbG9nVGFncyhibG9nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTIgbGc6Z2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGc6cm93LXN0YXJ0LTEgbGc6Y29sLXN0YXJ0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIC1tdC0yMCAtbXItMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM4NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQwNCAzODRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGUzMTY0ODYtNGEyOS00MzEyLWJkZmMtZmJjZTIxMzJhMmMxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9ezQwNH0gaGVpZ2h0PXszODR9IGZpbGw9XCJ1cmwoI2RlMzE2NDg2LTRhMjktNDMxMi1iZGZjLWZiY2UyMTMyYTJjMSlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWJhc2UgbXgtYXV0byBtYXgtdy1wcm9zZSBsZzptYXgtdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC13LTEyIGFzcGVjdC1oLTcgbGc6YXNwZWN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjQmxvYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMTg0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEzNzZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwibXQtMyBmbGV4IHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFJY29uIGNsYXNzTmFtZT1cImZsZXgtbm9uZSB3LTUgaC01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlBob3RvZ3JhcGggYnkgTWFyY3VzIE/igJlMZWFyeTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBsZzptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWF4LXctcHJvc2UgbXgtYXV0byBsZzptYXgtdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FnaXR0aXMgc2NlbGVyaXNxdWUgbnVsbGEgY3Vyc3VzIGluIGVuaW0gY29uc2VjdGV0dXIgcXVhbS4gRGljdHVtIHVybmEgc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBuZXF1ZSB0cmlzdGlxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbGxlbnRlc3F1ZS4gQmxhbmRpdCBhbWV0LCBzZWQgYWVuZWFuIGVyYXQgYXJjdSBtb3JiaS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSBwcm9zZSBwcm9zZS1pbmRpZ28gdGV4dC1ncmF5LTUwMCBteC1hdXRvIGxnOm1heC13LW5vbmUgbGc6cm93LXN0YXJ0LTEgbGc6Y29sLXN0YXJ0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwoYmxvZy5ib2R5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3Nob3dSZWxhdGVkQmxvZygpfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0NvbW1lbnRzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59KTtcclxuXHJcblNpbmdsZUJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHtxdWVyeX0pID0+IHtcclxuICAgIHJldHVybiBzaW5nbGVCbG9nKHF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dFVCBJTklUSUFMIFBST1BTIElOIFNJTkdMRSBCTE9HJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7YmxvZzogZGF0YSwgcXVlcnl9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==