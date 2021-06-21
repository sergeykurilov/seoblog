webpackHotUpdate_N_E("pages/admin/crud/leads",{

/***/ "./components/crud/Leads.js":
/*!**********************************!*\
  !*** ./components/crud/Leads.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/tags */ "./actions/tags.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/form */ "./actions/form.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\Leads.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("token");

var Leads = function Leads() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "",
    "error": false,
    "leads": [],
    "success": false,
    "message": "",
    "removed": false,
    "reload": false
  }),
      value = _useState[0],
      setValue = _useState[1];

  var name = value.name,
      success = value.success,
      error = value.error,
      removed = value.removed,
      leads = value.leads,
      reload = value.reload,
      message = value.message;

  var AllLeads = function AllLeads() {
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_7__["leadList"])().then(function (data) {
      if (data.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: data.error,
          reload: false
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          leads: data,
          reload: true,
          success: true,
          message: data.message
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllLeads();
  }, [reload]);

  var handlerClickRemove = function handlerClickRemove(currentId) {
    var current = leads.filter(function (item, i) {
      return i === currentId;
    });
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_7__["removeFormData"])(current[0]._id).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          success: true,
          message: data.message
        }));
      }
    });
  };

  function LeadsBlock() {
    var _this2 = this;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inline-flex rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-wrap items-stretch w-full h-full mb-6 relative",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    className: "w-4 lg:w-auto",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z",
                      stroke: "#455A64",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M16.9993 16.9993L13.1328 13.1328",
                      stroke: "#455A64",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin",
                placeholder: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "min-w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider",
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Created At"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this), leads.map(function (person, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              className: "bg-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "text-sm leading-5 text-gray-800",
                        children: i + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 45
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 41
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "text-sm leading-5 text-blue-900",
                    children: person.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.lastName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    value: person.message,
                    cols: "30",
                    rows: "10"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: moment__WEBPACK_IMPORTED_MODULE_8___default()(person.createdAt).format("YYYY-MM-DD")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 37
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: [" ", moment__WEBPACK_IMPORTED_MODULE_8___default()(person.createdAt).format("HH:mm:ss")]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 37
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: function onClick() {
                      return handlerClickRemove(i);
                    },
                    className: "rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white",
                    children: "Remove"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 33
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 29
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this);
  }

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 20
      }, _this);
    }
  };

  var showError = function showError() {
    if (error) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-danger",
        children: "Category already exist!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 20
      }, _this);
    }
  };

  var mouseHandler = function mouseHandler() {
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      error: false,
      success: false,
      removed: false
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseMove: mouseHandler,
      children: [showError(), showSuccess()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }, _this), LeadsBlock()]
  }, void 0, true);
};

_s(Leads, "LvND58tqDcEZdYyAZDP1n4XpElU=");

_c = Leads;
/* harmony default export */ __webpack_exports__["default"] = (Leads);

var _c;

$RefreshReg$(_c, "Leads");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbInRva2VuIiwiZ2V0Q29va2llIiwiTGVhZHMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3VjY2VzcyIsImVycm9yIiwicmVtb3ZlZCIsImxlYWRzIiwicmVsb2FkIiwibWVzc2FnZSIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsImhhbmRsZXJDbGlja1JlbW92ZSIsImN1cnJlbnRJZCIsImN1cnJlbnQiLCJmaWx0ZXIiLCJpdGVtIiwiaSIsInJlbW92ZUZvcm1EYXRhIiwiX2lkIiwiY29uc29sZSIsImxvZyIsIkxlYWRzQmxvY2siLCJtYXAiLCJwZXJzb24iLCJsYXN0TmFtZSIsImVtYWlsIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZm9ybWF0Iiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJtb3VzZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixhQUFTLEVBSHNCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxFQUxvQjtBQU0vQixlQUFXLEtBTm9CO0FBTy9CLGNBQVU7QUFQcUIsR0FBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLE1BV1RDLElBWFMsR0FXZ0RGLEtBWGhELENBV1RFLElBWFM7QUFBQSxNQVdIQyxPQVhHLEdBV2dESCxLQVhoRCxD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QUFuRCxPQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFBLDRCQUNIO0FBQUssaUJBQVcsRUFBRTZCLFlBQWxCO0FBQUEsaUJBQ0tELFNBQVMsRUFEZCxFQUVLRCxXQUFXLEVBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLEVBS0ZSLFVBQVUsRUFMUjtBQUFBLGtCQUFQO0FBT0gsQ0FuSkQ7O0dBQU0xQixLOztLQUFBQSxLO0FBcUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2xlYWRzLjgwYmRlY2JmODhmOTY1MGRkZWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtsZWFkTGlzdCwgcmVtb3ZlRm9ybURhdGF9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Zvcm1cIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7c2luZ2xlQmxvZ30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5jb25zdCBMZWFkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJsZWFkc1wiOiBbXSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJyZW1vdmVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVsb2FkXCI6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBzdWNjZXNzLCBlcnJvciwgcmVtb3ZlZCwgbGVhZHMsIHJlbG9hZCwgbWVzc2FnZX0gPSB2YWx1ZVxyXG5cclxuXHJcbiAgICBjb25zdCBBbGxMZWFkcyA9ICgpID0+IHtcclxuICAgICAgICBsZWFkTGlzdCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yLCByZWxvYWQ6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbGVhZHM6IGRhdGEsIHJlbG9hZDogdHJ1ZSwgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxMZWFkcygpXHJcbiAgICB9LCBbcmVsb2FkXSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlckNsaWNrUmVtb3ZlID0gKGN1cnJlbnRJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBsZWFkcy5maWx0ZXIoKGl0ZW0sIGkpID0+IGkgPT09IGN1cnJlbnRJZCk7XHJcblxyXG4gICAgICAgIHJlbW92ZUZvcm1EYXRhKGN1cnJlbnRbMF0uX2lkKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBMZWFkc0Jsb2NrKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW15LTIgcHktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgc206cHgtNiBsZzotbXgtOCBwci0xMCBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtdGwtbGcgcm91bmRlZC10ci1sZyBpbmxpbmUtYmxvY2sgdy1mdWxsIHB5LTQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHNoYWRvdy1sZyBweC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCByb3VuZGVkIHctNy8xMiBweC0yIGxnOnB4LTYgaC0xMiBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctZnVsbCBoLWZ1bGwgbWItNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbGVhZGluZy1ub3JtYWwgYmctdHJhbnNwYXJlbnQgcm91bmRlZCByb3VuZGVkLXItbm9uZSBib3JkZXIgYm9yZGVyLXItMCBib3JkZXItbm9uZSBsZzpweC0zIHB5LTIgd2hpdGVzcGFjZS1uby13cmFwIHRleHQtZ3JleS1kYXJrIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgY2xhc3NOYW1lPVwidy00IGxnOnctYXV0b1wiIHZpZXdCb3g9XCIwIDAgMTggMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguMTEwODYgMTUuMjIxN0MxMi4wMzgxIDE1LjIyMTcgMTUuMjIxNyAxMi4wMzgxIDE1LjIyMTcgOC4xMTA4NkMxNS4yMjE3IDQuMTgzNjQgMTIuMDM4MSAxIDguMTEwODYgMUM0LjE4MzY0IDEgMSA0LjE4MzY0IDEgOC4xMTA4NkMxIDEyLjAzODEgNC4xODM2NCAxNS4yMjE3IDguMTEwODYgMTUuMjIxN1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjNDU1QTY0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuOTk5MyAxNi45OTkzTDEzLjEzMjggMTMuMTMyOFwiIHN0cm9rZT1cIiM0NTVBNjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmsgZmxleC1ncm93IGZsZXgtYXV0byBsZWFkaW5nLW5vcm1hbCB0cmFja2luZy13aWRlIHctcHggZmxleC0xIGJvcmRlciBib3JkZXItbm9uZSBib3JkZXItbC0wIHJvdW5kZWQgcm91bmRlZC1sLW5vbmUgcHgtMyByZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC14eHMgbGc6dGV4dC14cyBsZzp0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCBmb250LXRoaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSBpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHNoYWRvdy1kYXNoYm9hcmQgcHgtOCBwdC0zIHJvdW5kZWQtYmwtbGcgcm91bmRlZC1ici1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+TGFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPk1lc3NhZ2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPkNyZWF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDBcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGVhZHMubWFwKChwZXJzb24sIGkgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiBib3JkZXItZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj57aSsxfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ibHVlLTkwMFwiPntwZXJzb24ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIHRleHQtYmx1ZS05MDAgYm9yZGVyLWdyYXktNTAwIHRleHQtc20gbGVhZGluZy01XCI+e3BlcnNvbi5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIHRleHQtYmx1ZS05MDAgYm9yZGVyLWdyYXktNTAwIHRleHQtc20gbGVhZGluZy01XCI+e3BlcnNvbi5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIHRleHQtYmx1ZS05MDAgYm9yZGVyLWdyYXktNTAwIHRleHQtc20gbGVhZGluZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cGVyc29uLm1lc3NhZ2V9ICBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIHRleHQtYmx1ZS05MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vbWVudChwZXJzb24uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHttb21lbnQocGVyc29uLmNyZWF0ZWRBdCkuZm9ybWF0KFwiSEg6bW06c3NcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIHRleHQtYmx1ZS05MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlckNsaWNrUmVtb3ZlKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcHgtMyBweS0yIG0tMSBib3JkZXItYi00IGJvcmRlci1sLTIgc2hhZG93LWxnIGJnLWJsdWUtODAwIGJvcmRlci1ibHVlLTkwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IGFscmVhZHkgZXhpc3QhPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3VzZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCByZW1vdmVkOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBvbk1vdXNlTW92ZT17bW91c2VIYW5kbGVyfT5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7TGVhZHNCbG9jaygpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYWRzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=