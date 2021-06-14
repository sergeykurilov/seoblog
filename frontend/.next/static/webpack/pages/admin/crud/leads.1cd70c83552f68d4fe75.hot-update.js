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
                    lineNumber: 50,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Last Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: people.map(function (person, personIdx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    className: i % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                      children: c.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                      children: c.lastName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                      children: c.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 41
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                      children: c.message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 41
                    }, _this2)]
                  }, person.email, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 37
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 97,
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
        lineNumber: 102,
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
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0xlYWRzLmpzIl0sIm5hbWVzIjpbIkxlYWRzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibmFtZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbW92ZWQiLCJsZWFkcyIsInJlbG9hZCIsIkFsbExlYWRzIiwibGVhZExpc3QiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsInBlb3BsZSIsInRpdGxlIiwicm9sZSIsImVtYWlsIiwiTGVhZHNCbG9jayIsIm1hcCIsInBlcnNvbiIsInBlcnNvbklkeCIsImkiLCJjIiwibGFzdE5hbWUiLCJtZXNzYWdlIiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJtb3VzZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDO0FBQy9CLFlBQVEsRUFEdUI7QUFFL0IsYUFBUyxLQUZzQjtBQUcvQixhQUFTLEVBSHNCO0FBSS9CLGVBQVcsS0FKb0I7QUFLL0IsZUFBVyxLQUxvQjtBQU0vQixjQUFVO0FBTnFCLEdBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxNQVVUQyxJQVZTLEdBVXVDRixLQVZ2QyxDQVVURSxJQVZTO0FBQUEsTUFVSEMsT0FWRyxHQVV1Q0gsS0FWdkMsQ0FVSEcsT0FWRztBQUFBLE1BVU1DLEtBVk4sR0FVdUNKLEtBVnZDLENBVU1JLEtBVk47QUFBQSxNQVVhQyxPQVZiLEdBVXVDTCxLQVZ2QyxDQVVhSyxPQVZiO0FBQUEsTUFVc0JDLEtBVnRCLEdBVXVDTixLQVZ2QyxDQVVzQk0sS0FWdEI7QUFBQSxNQVU2QkMsTUFWN0IsR0FVdUNQLEtBVnZDLENBVTZCTyxNQVY3Qjs7QUFh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QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWtESDs7QUFHRCxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUl0QixPQUFKLEVBQWE7QUFDVCwwQkFBTztBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQUpEOztBQUtBLE1BQU11QixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUl0QixLQUFKLEVBQVc7QUFDUCwwQkFBTztBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQU11QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCMUIsWUFBUSxpQ0FBS0QsS0FBTDtBQUFZSSxXQUFLLEVBQUUsS0FBbkI7QUFBMEJELGFBQU8sRUFBRSxLQUFuQztBQUEwQ0UsYUFBTyxFQUFFO0FBQW5ELE9BQVI7QUFDSCxHQUZEOztBQUlBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBSyxpQkFBVyxFQUFFc0IsWUFBbEI7QUFBQSxpQkFDS0QsU0FBUyxFQURkLEVBRUtELFdBQVcsRUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsRUFLRlIsVUFBVSxFQUxSO0FBQUEsa0JBQVA7QUFPSCxDQTdHRDs7R0FBTW5CLEs7O0tBQUFBLEs7QUErR1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvbGVhZHMuMWNkNzBjODM1NTJmNjhkNGZlNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZSwgZGVsZXRlU2luZ2xlVGFnLCBnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWUsIHNpZ251cH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2RlbGV0ZUNhdGVnb3J5fSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQge2xlYWRMaXN0fSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9mb3JtXCI7XHJcblxyXG5jb25zdCBMZWFkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIjogZmFsc2UsXHJcbiAgICAgICAgXCJsZWFkc1wiOiBbXSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgXCJyZW1vdmVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicmVsb2FkXCI6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtuYW1lLCBzdWNjZXNzLCBlcnJvciwgcmVtb3ZlZCwgbGVhZHMsIHJlbG9hZH0gPSB2YWx1ZVxyXG5cclxuXHJcbiAgICBjb25zdCBBbGxMZWFkcyA9ICgpID0+IHtcclxuICAgICAgICBsZWFkTGlzdCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbGVhZHM6IGRhdGF9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFsbExlYWRzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHBlb3BsZSA9IFtcclxuICAgICAgICB7bmFtZTogJ0phbmUgQ29vcGVyJywgdGl0bGU6ICdSZWdpb25hbCBQYXJhZGlnbSBUZWNobmljaWFuJywgcm9sZTogJ0FkbWluJywgZW1haWw6ICdqYW5lLmNvb3BlckBleGFtcGxlLmNvbSd9LFxyXG4gICAgICAgIHtuYW1lOiAnQ29keSBGaXNoZXInLCB0aXRsZTogJ1Byb2R1Y3QgRGlyZWN0aXZlcyBPZmZpY2VyJywgcm9sZTogJ093bmVyJywgZW1haWw6ICdjb2R5LmZpc2hlckBleGFtcGxlLmNvbSd9LFxyXG4gICAgICAgIC8vIE1vcmUgcGVvcGxlLi4uXHJcbiAgICBdXHJcblxyXG4gICAgZnVuY3Rpb24gTGVhZHNCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW15LTIgb3ZlcmZsb3cteC1hdXRvIHNtOi1teC02IGxnOi1teC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGFsaWduLW1pZGRsZSBpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVvcGxlLm1hcCgocGVyc29uLCBwZXJzb25JZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGVyc29uLmVtYWlsfSBjbGFzc05hbWU9e2kgJSAyID09PSAwID8gJ2JnLXdoaXRlJyA6ICdiZy1ncmF5LTUwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntjLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e2MubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e2MuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e2MubWVzc2FnZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5DYXRlZ29yeSBzdWNjZXNzZnVsbHkgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5DYXRlZ29yeSBhbHJlYWR5IGV4aXN0ITwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW91c2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgcmVtb3ZlZDogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgb25Nb3VzZU1vdmU9e21vdXNlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge0xlYWRzQmxvY2soKX1cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFkc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9