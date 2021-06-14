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
                      lineNumber: 49,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M16.9993 16.9993L13.1328 13.1328",
                      stroke: "#455A64",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin",
                placeholder: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
                lineNumber: 69,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Created At"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), JSON.stringify(leads.lastName), leads.map(function (person, i) {
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
                        lineNumber: 90,
                        columnNumber: 45
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 41
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "text-sm leading-5 text-blue-900",
                    children: person.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.lastName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: person.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    value: person.message,
                    cols: "30",
                    rows: "10"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 33
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: moment__WEBPACK_IMPORTED_MODULE_8___default()(person.createdAt).format("YYYY-MM-DD")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 37
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: [" ", moment__WEBPACK_IMPORTED_MODULE_8___default()(person.createdAt).format("HH:mm:ss")]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 37
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 33
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 29
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
        lineNumber: 119,
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
        lineNumber: 124,
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
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbIkxlYWRzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJsZWFkcyIsInJlbG9hZCIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsIkxlYWRzQmxvY2siLCJKU09OIiwic3RyaW5naWZ5IiwibGFzdE5hbWUiLCJtYXAiLCJwZXJzb24iLCJpIiwiZW1haWwiLCJtZXNzYWdlIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZm9ybWF0Iiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJtb3VzZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQztBQUMvQixZQUFRLEVBRHVCO0FBRS9CLGFBQVMsS0FGc0I7QUFHL0IsYUFBUyxFQUhzQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsS0FMb0I7QUFNL0IsY0FBVTtBQU5xQixHQUFELENBRGxCO0FBQUEsTUFDVEMsS0FEUztBQUFBLE1BQ0ZDLFFBREU7O0FBQUEsTUFVVEMsSUFWUyxHQVV1Q0YsS0FWdkMsQ0FVVEUsSUFWUztBQUFBLE1BVUhDLE9BVkcsR0FVdUNILEtBVnZDLENBVUhHLE9BVkc7QUFBQSxNQVVNQyxLQVZOLEdBVXVDSixLQVZ2QyxDQVVNSSxLQVZOO0FBQUEsTUFVYUMsT0FWYixHQVV1Q0wsS0FWdkMsQ0FVYUssT0FWYjtBQUFBLE1BVXNCQyxLQVZ0QixHQVV1Q04sS0FWdkMsQ0FVc0JNLEtBVnRCO0FBQUEsTUFVNkJDLE1BVjdCLEdBVXVDUCxLQVZ2QyxD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O0FBQTBDRSxhQUFPLEVBQUU7QUFBbkQsT0FBUjtBQUNILEdBRkQ7O0FBSUEsc0JBQU87QUFBQSw0QkFDSDtBQUFLLGlCQUFXLEVBQUVzQixZQUFsQjtBQUFBLGlCQUNLRCxTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxFQUtGWixVQUFVLEVBTFI7QUFBQSxrQkFBUDtBQU9ILENBbElEOztHQUFNZixLOztLQUFBQSxLO0FBb0lTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2xlYWRzLjlkYTEzMzBhZDdmNDUzMWUxOTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtsZWFkTGlzdH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZm9ybVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IExlYWRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxlYWRzXCI6IFtdLFxyXG4gICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICBcInJlbW92ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZWxvYWRcIjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge25hbWUsIHN1Y2Nlc3MsIGVycm9yLCByZW1vdmVkLCBsZWFkcywgcmVsb2FkfSA9IHZhbHVlXHJcblxyXG5cclxuICAgIGNvbnN0IEFsbExlYWRzID0gKCkgPT4ge1xyXG4gICAgICAgIGxlYWRMaXN0KCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGRhdGEuZXJyb3IsIHJlbG9hZDogZmFsc2V9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBsZWFkczogZGF0YSwgcmVsb2FkOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBbGxMZWFkcygpXHJcbiAgICB9LCBbcmVsb2FkXSlcclxuXHJcbiAgICBmdW5jdGlvbiBMZWFkc0Jsb2NrKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW15LTIgcHktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgc206cHgtNiBsZzotbXgtOCBwci0xMCBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtdGwtbGcgcm91bmRlZC10ci1sZyBpbmxpbmUtYmxvY2sgdy1mdWxsIHB5LTQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHNoYWRvdy1sZyBweC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBib3JkZXIgcm91bmRlZCB3LTcvMTIgcHgtMiBsZzpweC02IGgtMTIgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgaC1mdWxsIG1iLTYgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGxlYWRpbmctbm9ybWFsIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQgcm91bmRlZC1yLW5vbmUgYm9yZGVyIGJvcmRlci1yLTAgYm9yZGVyLW5vbmUgbGc6cHgtMyBweS0yIHdoaXRlc3BhY2Utbm8td3JhcCB0ZXh0LWdyZXktZGFyayB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIGNsYXNzTmFtZT1cInctNCBsZzp3LWF1dG9cIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04LjExMDg2IDE1LjIyMTdDMTIuMDM4MSAxNS4yMjE3IDE1LjIyMTcgMTIuMDM4MSAxNS4yMjE3IDguMTEwODZDMTUuMjIxNyA0LjE4MzY0IDEyLjAzODEgMSA4LjExMDg2IDFDNC4xODM2NCAxIDEgNC4xODM2NCAxIDguMTEwODZDMSAxMi4wMzgxIDQuMTgzNjQgMTUuMjIxNyA4LjExMDg2IDE1LjIyMTdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzQ1NUE2NFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2Ljk5OTMgMTYuOTk5M0wxMy4xMzI4IDEzLjEzMjhcIiBzdHJva2U9XCIjNDU1QTY0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rIGZsZXgtZ3JvdyBmbGV4LWF1dG8gbGVhZGluZy1ub3JtYWwgdHJhY2tpbmctd2lkZSB3LXB4IGZsZXgtMSBib3JkZXIgYm9yZGVyLW5vbmUgYm9yZGVyLWwtMCByb3VuZGVkIHJvdW5kZWQtbC1ub25lIHB4LTMgcmVsYXRpdmUgZm9jdXM6b3V0bGluZS1ub25lIHRleHQteHhzIGxnOnRleHQteHMgbGc6dGV4dC1iYXNlIHRleHQtZ3JheS01MDAgZm9udC10aGluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgaW5saW5lLWJsb2NrIG1pbi13LWZ1bGwgc2hhZG93IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBzaGFkb3ctZGFzaGJvYXJkIHB4LTggcHQtMyByb3VuZGVkLWJsLWxnIHJvdW5kZWQtYnItbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPkxhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5NZXNzYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5DcmVhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGxlYWRzLmxhc3ROYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xlYWRzLm1hcCgocGVyc29uLCBpICkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPntpICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy01IHRleHQtYmx1ZS05MDBcIj57cGVyc29uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiB0ZXh0LWJsdWUtOTAwIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPntwZXJzb24ubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiB0ZXh0LWJsdWUtOTAwIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPntwZXJzb24uZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiB0ZXh0LWJsdWUtOTAwIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3BlcnNvbi5tZXNzYWdlfSAgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWJsdWUtOTAwIHRleHQtc20gbGVhZGluZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQocGVyc29uLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7bW9tZW50KHBlcnNvbi5jcmVhdGVkQXQpLmZvcm1hdChcIkhIOm1tOnNzXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5DYXRlZ29yeSBzdWNjZXNzZnVsbHkgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5DYXRlZ29yeSBhbHJlYWR5IGV4aXN0ITwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW91c2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgb25Nb3VzZU1vdmU9e21vdXNlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge0xlYWRzQmxvY2soKX1cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFkc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9