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
          error: data.error
        }));
      } else {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          leads: data
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    AllLeads();
  }, []);
  var people = [{
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'jane.cooper@example.com'
  }, {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com'
  } // More people...
  ];

  function LeadsBlock() {
    var _this2 = this;

    return leads.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                className: "min-w-full divide-y divide-gray-200",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                  className: "bg-gray-50",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                      children: "Last Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                      children: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                      children: "Message"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 41
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 37
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 37
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: people.map(function (person, personIdx) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      className: i % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                        children: c.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 45
                      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                        children: c.lastName
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 45
                      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                        children: c.email
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 45
                      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                        children: c.message
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 45
                      }, _this2)]
                    }, person.email, true, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 41
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this2);
    });
  }

  var showSuccess = function showSuccess() {
    if (success) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-success",
        children: "Category successfully created."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 105,
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
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbIkxlYWRzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJsZWFkcyIsInJlbG9hZCIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsInBlb3BsZSIsInRpdGxlIiwicm9sZSIsImVtYWlsIiwiTGVhZHNCbG9jayIsIm1hcCIsImMiLCJpIiwicGVyc29uIiwicGVyc29uSWR4IiwibGFzdE5hbWUiLCJtZXNzYWdlIiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJtb3VzZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixhQUFTLEVBSHNCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixjQUFVO0FBTnFCLEdBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxNQVVUQyxJQVZTLEdBVXdDRixLQVZ4QyxDQVVURSxJQVZTO0FBQUEsTUFVSEMsT0FWRyxHQVV3Q0gsS0FWeEMsQ0FVSEcsT0FWRztBQUFBLE1BVU1DLEtBVk4sR0FVd0NKLEtBVnhDLENBVU1JLEtBVk47QUFBQSxNQVVjQyxPQVZkLEdBVXdDTCxLQVZ4QyxDQVVjSyxPQVZkO0FBQUEsTUFVdUJDLEtBVnZCLEdBVXdDTixLQVZ4QyxDQVV1Qk0sS0FWdkI7QUFBQSxNQVU4QkMsTUFWOUIsR0FVd0NQLEtBVnhDLENBVThCTyxNQVY5Qjs7QUFj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QUEsbUJBQVg7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBa0RILEtBbkRNLENBQVA7QUFvREg7O0FBR0QsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJdEIsT0FBSixFQUFhO0FBQ1QsMEJBQU87QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FKRDs7QUFLQSxNQUFNdUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixRQUFJdEIsS0FBSixFQUFXO0FBQ1AsMEJBQU87QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FKRDs7QUFNQSxNQUFNdUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QjFCLFlBQVEsaUNBQUtELEtBQUw7QUFBWUksV0FBSyxFQUFFLEtBQW5CO0FBQTBCRCxhQUFPLEVBQUUsS0FBbkM7QUFBMENFLGFBQU8sRUFBRTtBQUFuRCxPQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFBLDRCQUNIO0FBQUssaUJBQVcsRUFBRXNCLFlBQWxCO0FBQUEsaUJBQ0tELFNBQVMsRUFEZCxFQUVLRCxXQUFXLEVBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLEVBS0ZSLFVBQVUsRUFMUjtBQUFBLGtCQUFQO0FBT0gsQ0FoSEQ7O0dBQU1uQixLOztLQUFBQSxLO0FBa0hTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2xlYWRzLjc0ZjhmMDkwZjI4YWExOTM0N2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGUsIGRlbGV0ZVNpbmdsZVRhZywgZ2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llLCBzaWdudXB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtkZWxldGVDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtsZWFkTGlzdH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZm9ybVwiO1xyXG5cclxuY29uc3QgTGVhZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibGVhZHNcIjogW10sXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVtb3ZlZFwiOiBmYWxzZSxcclxuICAgICAgICBcInJlbG9hZFwiOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bmFtZSwgc3VjY2VzcywgZXJyb3IgLCByZW1vdmVkLCBsZWFkcywgcmVsb2FkfSA9IHZhbHVlXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBBbGxMZWFkcyA9ICgpID0+IHtcclxuICAgICAgICBsZWFkTGlzdCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbGVhZHM6IGRhdGF9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFsbExlYWRzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHBlb3BsZSA9IFtcclxuICAgICAgICB7IG5hbWU6ICdKYW5lIENvb3BlcicsIHRpdGxlOiAnUmVnaW9uYWwgUGFyYWRpZ20gVGVjaG5pY2lhbicsIHJvbGU6ICdBZG1pbicsIGVtYWlsOiAnamFuZS5jb29wZXJAZXhhbXBsZS5jb20nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnQ29keSBGaXNoZXInLCB0aXRsZTogJ1Byb2R1Y3QgRGlyZWN0aXZlcyBPZmZpY2VyJywgcm9sZTogJ093bmVyJywgZW1haWw6ICdjb2R5LmZpc2hlckBleGFtcGxlLmNvbScgfSxcclxuICAgICAgICAvLyBNb3JlIHBlb3BsZS4uLlxyXG4gICAgXVxyXG5cclxuICAgIGZ1bmN0aW9uIExlYWRzQmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGxlYWRzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGFsaWduLW1pZGRsZSBpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgc206cm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZW9wbGUubWFwKChwZXJzb24sIHBlcnNvbklkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGVyc29uLmVtYWlsfSBjbGFzc05hbWU9e2kgJSAyID09PSAwID8gJ2JnLXdoaXRlJyA6ICdiZy1ncmF5LTUwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57Yy5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj57Yy5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e2MuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntjLm1lc3NhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5DYXRlZ29yeSBzdWNjZXNzZnVsbHkgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5DYXRlZ29yeSBhbHJlYWR5IGV4aXN0ITwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW91c2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgb25Nb3VzZU1vdmU9e21vdXNlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge0xlYWRzQmxvY2soKX1cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFkc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9