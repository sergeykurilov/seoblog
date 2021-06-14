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




var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\Leads.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Leads = function Leads() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "name": "",
    "error": false,
    "leads": [],
    "success": false,
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
      reload = value.reload;

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
          reload: true
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllLeads();
  }, [reload]);

  function LeadsBlock() {
    var _this2 = this;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent",
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
                      lineNumber: 48,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M16.9993 16.9993L13.1328 13.1328",
                      stroke: "#455A64",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin",
                placeholder: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
                lineNumber: 68,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Created At"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this), JSON.stringify(leads.lastName), leads.map(function (person) {
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
                        children: "#1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 45
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 41
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "text-sm leading-5 text-blue-900",
                    children: person.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.lastName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    cols: "30",
                    rows: "10",
                    children: person.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5",
                  children: person.createdAt
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none",
                    children: "View Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 33
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this);
  }

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 127,
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
      lineNumber: 136,
      columnNumber: 9
    }, _this), LeadsBlock()]
  }, void 0, true);
};

_s(Leads, "ReULQrMSXnUozjRhUqJl1gyPDl4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbIkxlYWRzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJsZWFkcyIsInJlbG9hZCIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsIkxlYWRzQmxvY2siLCJKU09OIiwic3RyaW5naWZ5IiwibGFzdE5hbWUiLCJtYXAiLCJwZXJzb24iLCJlbWFpbCIsIm1lc3NhZ2UiLCJjcmVhdGVkQXQiLCJzaG93U3VjY2VzcyIsInNob3dFcnJvciIsIm1vdXNlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUM7QUFDL0IsWUFBUSxFQUR1QjtBQUUvQixhQUFTLEtBRnNCO0FBRy9CLGFBQVMsRUFIc0I7QUFJL0IsZUFBVyxLQUpvQjtBQUsvQixlQUFXLEtBTG9CO0FBTS9CLGNBQVU7QUFOcUIsR0FBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLE1BVVRDLElBVlMsR0FVdUNGLEtBVnZDLENBVVRFLElBVlM7QUFBQSxNQVVIQyxPQVZHLEdBVXVDSCxLQVZ2QyxDQVVIRyxPQVZHO0FBQUEsTUFVTUMsS0FWTixHQVV1Q0osS0FWdkMsQ0FVTUksS0FWTjtBQUFBLE1BVWFDLE9BVmIsR0FVdUNMLEtBVnZDLENBVWFLLE9BVmI7QUFBQSxNQVVzQkMsS0FWdEIsR0FVdUNOLEtBVnZDLENBVXNCTSxLQVZ0QjtBQUFBLE1BVTZCQyxNQVY3QixHQVV1Q1AsS0FWdkMsQ0FVNkJPLE1BVjdCOztBQWFoQixNQUFNQyxRQUFR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O0FBQUE7QUFBQSxhQURHLEVBS0ZULFVBQVUsRUFMUjtBQUFBLGtCQUFQO0FBT0gsQ0F0SUQ7O0dBQU1mLEs7O0tBQUFBLEs7QUF3SVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvbGVhZHMuYTNlN2I1Yjk3OTczYTI5YTA5ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZSwgZGVsZXRlU2luZ2xlVGFnLCBnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWUsIHNpZ251cH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2RlbGV0ZUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQge2xlYWRMaXN0fSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9mb3JtXCI7XHJcblxyXG5jb25zdCBMZWFkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJsZWFkc1wiOiBbXSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZW1vdmVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVsb2FkXCI6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBzdWNjZXNzLCBlcnJvciwgcmVtb3ZlZCwgbGVhZHMsIHJlbG9hZH0gPSB2YWx1ZVxyXG5cclxuXHJcbiAgICBjb25zdCBBbGxMZWFkcyA9ICgpID0+IHtcclxuICAgICAgICBsZWFkTGlzdCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yLCByZWxvYWQ6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbGVhZHM6IGRhdGEsIHJlbG9hZDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQWxsTGVhZHMoKVxyXG4gICAgfSwgW3JlbG9hZF0pXHJcblxyXG4gICAgZnVuY3Rpb24gTGVhZHNCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teS0yIHB5LTIgb3ZlcmZsb3cteC1hdXRvIHNtOi1teC02IHNtOnB4LTYgbGc6LW14LTggcHItMTAgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSByb3VuZGVkLXRsLWxnIHJvdW5kZWQtdHItbGcgaW5saW5lLWJsb2NrIHctZnVsbCBweS00IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBzaGFkb3ctbGcgcHgtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggYm9yZGVyIHJvdW5kZWQgdy03LzEyIHB4LTIgbGc6cHgtNiBoLTEyIGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIGgtZnVsbCBtYi02IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vcm1hbCBiZy10cmFuc3BhcmVudCByb3VuZGVkIHJvdW5kZWQtci1ub25lIGJvcmRlciBib3JkZXItci0wIGJvcmRlci1ub25lIGxnOnB4LTMgcHktMiB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC1ncmV5LWRhcmsgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiBjbGFzc05hbWU9XCJ3LTQgbGc6dy1hdXRvXCIgdmlld0JveD1cIjAgMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOC4xMTA4NiAxNS4yMjE3QzEyLjAzODEgMTUuMjIxNyAxNS4yMjE3IDEyLjAzODEgMTUuMjIxNyA4LjExMDg2QzE1LjIyMTcgNC4xODM2NCAxMi4wMzgxIDEgOC4xMTA4NiAxQzQuMTgzNjQgMSAxIDQuMTgzNjQgMSA4LjExMDg2QzEgMTIuMDM4MSA0LjE4MzY0IDE1LjIyMTcgOC4xMTA4NiAxNS4yMjE3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM0NTVBNjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNi45OTkzIDE2Ljk5OTNMMTMuMTMyOCAxMy4xMzI4XCIgc3Ryb2tlPVwiIzQ1NUE2NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluayBmbGV4LWdyb3cgZmxleC1hdXRvIGxlYWRpbmctbm9ybWFsIHRyYWNraW5nLXdpZGUgdy1weCBmbGV4LTEgYm9yZGVyIGJvcmRlci1ub25lIGJvcmRlci1sLTAgcm91bmRlZCByb3VuZGVkLWwtbm9uZSBweC0zIHJlbGF0aXZlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXh4cyBsZzp0ZXh0LXhzIGxnOnRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGZvbnQtdGhpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgc2hhZG93LWRhc2hib2FyZCBweC04IHB0LTMgcm91bmRlZC1ibC1sZyByb3VuZGVkLWJyLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5MYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+TWVzc2FnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+Q3JlYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShsZWFkcy5sYXN0TmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFkcy5tYXAoKHBlcnNvbikgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPiMxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiBib3JkZXItZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWJsdWUtOTAwXCI+e3BlcnNvbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgdGV4dC1ibHVlLTkwMCBib3JkZXItZ3JheS01MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj57cGVyc29uLmxhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgdGV4dC1ibHVlLTkwMCBib3JkZXItZ3JheS01MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj57cGVyc29uLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgdGV4dC1ibHVlLTkwMCBib3JkZXItZ3JheS01MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhICBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj57cGVyc29uLm1lc3NhZ2V9PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWJsdWUtOTAwIHRleHQtc20gbGVhZGluZy01XCI+e3BlcnNvbi5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCB0ZXh0LXJpZ2h0IGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgYm9yZGVyLWJsdWUtNTAwIGJvcmRlciB0ZXh0LWJsdWUtNTAwIHJvdW5kZWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6YmctYmx1ZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5WaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLjwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkNhdGVnb3J5IGFscmVhZHkgZXhpc3QhPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3VzZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCByZW1vdmVkOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBvbk1vdXNlTW92ZT17bW91c2VIYW5kbGVyfT5cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7TGVhZHNCbG9jaygpfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYWRzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=