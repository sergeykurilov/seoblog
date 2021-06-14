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
                children: "Fullname"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Phone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider",
                children: "Created At"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "px-6 py-3 border-b-2 border-gray-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
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
                      lineNumber: 84,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "text-sm leading-5 text-blue-900",
                  children: "Damilare Anjorin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                children: "damilareanjorin1@gmail.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                children: "+2348106420637"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "relative text-xs",
                    children: "active"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5",
                children: "September 12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none",
                  children: "View Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
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
    }, this) // <div className="flex flex-col">
    //     <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    //             <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    //                 <table className="min-w-full divide-y divide-gray-200">
    //                     <thead className="bg-gray-50">
    //                     <tr>
    //                         <th
    //                             scope="col"
    //                             className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //                         >
    //                             Name
    //                         </th>
    //                         <th
    //                             scope="col"
    //                             className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //                         >
    //                             Last Name
    //                         </th>
    //                         <th
    //                             scope="col"
    //                             className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //                         >
    //                             Email
    //                         </th>
    //                         <th
    //                             scope="col"
    //                             className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //                         >
    //                             Message
    //                         </th>
    //                     </tr>
    //                     </thead>
    //                     <tbody>
    //                     {leads.map((person, personIdx) => (
    //                         <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
    //                             {JSON.stringify(person.lastName)}
    //                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
    //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.lastName}</td>
    //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
    //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.message}</td>
    //                         </tr>
    //                     ))}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    ;
  }

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 180,
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
      lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbIkxlYWRzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJsZWFkcyIsInJlbG9hZCIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsIkxlYWRzQmxvY2siLCJzaG93U3VjY2VzcyIsInNob3dFcnJvciIsIm1vdXNlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUM7QUFDL0IsWUFBUSxFQUR1QjtBQUUvQixhQUFTLEtBRnNCO0FBRy9CLGFBQVMsRUFIc0I7QUFJL0IsZUFBVyxLQUpvQjtBQUsvQixlQUFXLEtBTG9CO0FBTS9CLGNBQVU7QUFOcUIsR0FBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLE1BVVRDLElBVlMsR0FVdUNGLEtBVnZDLENBVVRFLElBVlM7QUFBQSxNQVVIQyxPQVZHLEdBVXVDSCxLQVZ2QyxDQVVIRyxPQVZHO0FBQUEsTUFVTUMsS0FWTixHQVV1Q0osS0FWdkMsQ0FVTUksS0FWTjtBQUFBLE1BVWFDLE9BVmIsR0FVdUNMLEtBVnZDLENBVWFLLE9BVmI7QUFBQSxNQVVzQkMsS0FWdEIsR0FVdUNOLEtBVnZDLENBVXNCTSxLQVZ0QjtBQUFBLE1BVTZCQyxNQVY3QixHQVV1Q1AsS0FWdkMsQ0FVNkJPLE1BVjdCOztBQWFoQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CQyxrRUFBUSxHQUFHQyxJQUFYLENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUNwQixVQUFJQSxJQUFJLENBQUNQLEtBQVQsRUFBZ0I7QUFDWkgsZ0JBQVEsaUNBQUtELEtBQUw7QUFBWUksZUFBSyxFQUFFTyxJQUFJLENBQUNQLEtBQXhCO0FBQStCRyxnQkFBTSxFQUFFO0FBQXZDLFdBQVI7QUFDSCxPQUZELE1BRU87QUFDSE4sZ0JBQVEsaUNBQUtELEtBQUw7QUFBWU0sZUFBSyxFQUFFSyxJQUFuQjtBQUF5QkosZ0JBQU0sRUFBRTtBQUFqQyxXQUFSO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSRDs7QUFVQUsseURBQVMsQ0FBQyxZQUFNO0FBQ1pKLFlBQVE7QUFDWCxHQUZRLEVBRU4sQ0FBQ0QsTUFBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU00sVUFBVCxHQUFzQjtBQUNsQix3QkFDSTtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFBLDhCQUNJO0FBQ0ksaUJBQVMsRUFBQyw0R0FEZDtBQUFBLCtCQUVJO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxvRUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQywwREFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsdUNBQ0k7QUFDSSwyQkFBUyxFQUFDLDZKQURkO0FBQUEseUNBRUk7QUFBSyx5QkFBSyxFQUFDLElBQVg7QUFBZ0IsMEJBQU0sRUFBQyxJQUF2QjtBQUE0Qiw2QkFBUyxFQUFDLGVBQXRDO0FBQXNELDJCQUFPLEVBQUMsV0FBOUQ7QUFDSyx3QkFBSSxFQUFDLE1BRFY7QUFDaUIseUJBQUssRUFBQyw0QkFEdkI7QUFBQSw0Q0FFSTtBQUNJLHVCQUFDLEVBQUMsK0tBRE47QUFFSSw0QkFBTSxFQUFDLFNBRlg7QUFFcUIsd0NBQWUsT0FGcEM7QUFFNEMseUNBQWdCO0FBRjVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosZUFLSTtBQUFNLHVCQUFDLEVBQUMsa0NBQVI7QUFBMkMsNEJBQU0sRUFBQyxTQUFsRDtBQUNNLHdDQUFlLE9BRHJCO0FBQzZCLHlDQUFnQjtBQUQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBY0k7QUFBTyxvQkFBSSxFQUFDLE1BQVo7QUFDTyx5QkFBUyxFQUFDLHlOQURqQjtBQUVPLDJCQUFXLEVBQUM7QUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQTBCSTtBQUNJLGlCQUFTLEVBQUMsNkhBRGQ7QUFBQSwrQkFFSTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQSxrQ0FDSTtBQUFBLG1DQUNBO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFDLHVGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSSx5QkFBUyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBSSx5QkFBUyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUk7QUFBSSx5QkFBUyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBS0k7QUFBSSx5QkFBUyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKLGVBTUk7QUFBSSx5QkFBUyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KLGVBU0k7QUFBSSx5QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBY0k7QUFBTyxxQkFBUyxFQUFDLFVBQWpCO0FBQUEsbUNBQ0E7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsdURBQWQ7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSx5Q0FDSTtBQUFBLDJDQUNJO0FBQUssK0JBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQVFJO0FBQUkseUJBQVMsRUFBQyx1REFBZDtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkosZUFXSTtBQUFJLHlCQUFTLEVBQUMsdUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEosZUFZSTtBQUFJLHlCQUFTLEVBQUMsdUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkosZUFhSTtBQUFJLHlCQUFTLEVBQUMsdUZBQWQ7QUFBQSx1Q0FDWTtBQUNJLDJCQUFTLEVBQUMsNEVBRGQ7QUFBQSwwQ0FFQTtBQUFNLHVDQUFOO0FBQ00sNkJBQVMsRUFBQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZBLGVBSUE7QUFBTSw2QkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJKLGVBcUJJO0FBQUkseUJBQVMsRUFBQyx1RkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFyQkosZUF3Qkk7QUFBSSx5QkFBUyxFQUFDLG9GQUFkO0FBQUEsdUNBQ0k7QUFDSSwyQkFBUyxFQUFDLHNJQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBb0ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcElKO0FBc0lIOztBQUdELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSVgsT0FBSixFQUFhO0FBQ1QsMEJBQU87QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FKRDs7QUFLQSxNQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUlYLEtBQUosRUFBVztBQUNQLDBCQUFPO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QmYsWUFBUSxpQ0FBS0QsS0FBTDtBQUFZSSxXQUFLLEVBQUUsS0FBbkI7QUFBMEJELGFBQU8sRUFBRSxLQUFuQztBQUEwQ0UsYUFBTyxFQUFFO0FBQW5ELE9BQVI7QUFDSCxHQUZEOztBQUlBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBSyxpQkFBVyxFQUFFVyxZQUFsQjtBQUFBLGlCQUNLRCxTQUFTLEVBRGQsRUFFS0QsV0FBVyxFQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxFQUtGRCxVQUFVLEVBTFI7QUFBQSxrQkFBUDtBQU9ILENBM0xEOztHQUFNZixLOztLQUFBQSxLO0FBNkxTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2xlYWRzLmYzZjllMzc0YjYxMzMxNDkzMWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtsZWFkTGlzdH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZm9ybVwiO1xyXG5cclxuY29uc3QgTGVhZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibGVhZHNcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IsIHJlbW92ZWQsIGxlYWRzLCByZWxvYWR9ID0gdmFsdWVcclxuXHJcblxyXG4gICAgY29uc3QgQWxsTGVhZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGVhZExpc3QoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZGF0YS5lcnJvciwgcmVsb2FkOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGxlYWRzOiBkYXRhLCByZWxvYWQ6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFsbExlYWRzKClcclxuICAgIH0sIFtyZWxvYWRdKVxyXG5cclxuICAgIGZ1bmN0aW9uIExlYWRzQmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBweS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBzbTpweC02IGxnOi1teC04IHByLTEwIGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnIGlubGluZS1ibG9jayB3LWZ1bGwgcHktNCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgc2hhZG93LWxnIHB4LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJvcmRlciByb3VuZGVkIHctNy8xMiBweC0yIGxnOnB4LTYgaC0xMiBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctZnVsbCBoLWZ1bGwgbWItNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbGVhZGluZy1ub3JtYWwgYmctdHJhbnNwYXJlbnQgcm91bmRlZCByb3VuZGVkLXItbm9uZSBib3JkZXIgYm9yZGVyLXItMCBib3JkZXItbm9uZSBsZzpweC0zIHB5LTIgd2hpdGVzcGFjZS1uby13cmFwIHRleHQtZ3JleS1kYXJrIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgY2xhc3NOYW1lPVwidy00IGxnOnctYXV0b1wiIHZpZXdCb3g9XCIwIDAgMTggMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguMTEwODYgMTUuMjIxN0MxMi4wMzgxIDE1LjIyMTcgMTUuMjIxNyAxMi4wMzgxIDE1LjIyMTcgOC4xMTA4NkMxNS4yMjE3IDQuMTgzNjQgMTIuMDM4MSAxIDguMTEwODYgMUM0LjE4MzY0IDEgMSA0LjE4MzY0IDEgOC4xMTA4NkMxIDEyLjAzODEgNC4xODM2NCAxNS4yMjE3IDguMTEwODYgMTUuMjIxN1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjNDU1QTY0XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuOTk5MyAxNi45OTkzTDEzLjEzMjggMTMuMTMyOFwiIHN0cm9rZT1cIiM0NTVBNjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmsgZmxleC1ncm93IGZsZXgtYXV0byBsZWFkaW5nLW5vcm1hbCB0cmFja2luZy13aWRlIHctcHggZmxleC0xIGJvcmRlciBib3JkZXItbm9uZSBib3JkZXItbC0wIHJvdW5kZWQgcm91bmRlZC1sLW5vbmUgcHgtMyByZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC14eHMgbGc6dGV4dC14cyBsZzp0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCBmb250LXRoaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSBpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHNoYWRvdy1kYXNoYm9hcmQgcHgtOCBwdC0zIHJvdW5kZWQtYmwtbGcgcm91bmRlZC1ici1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+RnVsbG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTQgdGV4dC1ibHVlLTUwMCB0cmFja2luZy13aWRlclwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5QaG9uZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNCB0ZXh0LWJsdWUtNTAwIHRyYWNraW5nLXdpZGVyXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy00IHRleHQtYmx1ZS01MDAgdHJhY2tpbmctd2lkZXJcIj5DcmVhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPiMxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ibHVlLTkwMFwiPkRhbWlsYXJlIEFuam9yaW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiB0ZXh0LWJsdWUtOTAwIGJvcmRlci1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPmRhbWlsYXJlYW5qb3JpbjFAZ21haWwuY29tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1uby13cmFwIGJvcmRlci1iIHRleHQtYmx1ZS05MDAgYm9yZGVyLWdyYXktNTAwIHRleHQtc20gbGVhZGluZy01XCI+KzIzNDgxMDY0MjA2Mzc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgYm9yZGVyLWIgdGV4dC1ibHVlLTkwMCBib3JkZXItZ3JheS01MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHB4LTMgcHktMSBmb250LXNlbWlib2xkIHRleHQtZ3JlZW4tOTAwIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyZWVuLTIwMCBvcGFjaXR5LTUwIHJvdW5kZWQtZnVsbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQteHNcIj5hY3RpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm8td3JhcCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgdGV4dC1ibHVlLTkwMCB0ZXh0LXNtIGxlYWRpbmctNVwiPlNlcHRlbWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC1yaWdodCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgdGV4dC1zbSBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMiBib3JkZXItYmx1ZS01MDAgYm9yZGVyIHRleHQtYmx1ZS01MDAgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ibHVlLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiPlZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWVcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtsZWFkcy5tYXAoKHBlcnNvbiwgcGVyc29uSWR4KSA9PiAoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BlcnNvbi5lbWFpbH0gY2xhc3NOYW1lPXtwZXJzb25JZHggJSAyID09PSAwID8gJ2JnLXdoaXRlJyA6ICdiZy1ncmF5LTUwJ30+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocGVyc29uLmxhc3ROYW1lKX1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e3BlcnNvbi5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntwZXJzb24ubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e3BlcnNvbi5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj57cGVyc29uLm1lc3NhZ2V9PC90ZD5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+Q2F0ZWdvcnkgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Q2F0ZWdvcnkgYWxyZWFkeSBleGlzdCE8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdXNlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UsIHJlbW92ZWQ6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8ZGl2IG9uTW91c2VNb3ZlPXttb3VzZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtMZWFkc0Jsb2NrKCl9XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhZHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==