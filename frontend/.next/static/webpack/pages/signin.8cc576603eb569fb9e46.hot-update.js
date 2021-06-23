webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SigninForm.jsx":
/*!***********************************!*\
  !*** ./components/SigninForm.jsx ***!
  \***********************************/
/*! exports provided: SiginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiginForm", function() { return SiginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GoogleLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoogleLogin */ "./components/GoogleLogin.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\SigninForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SiginForm = function SiginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "email": "kurilovsergey15@gmail.com",
    "password": "q92e01kl",
    "error": false,
    "loading": false,
    "message": "",
    "showform": true
  }),
      value = _useState[0],
      setValue = _useState[1];

  var email = value.email,
      password = value.password,
      error = value.error,
      loading = value.loading,
      showform = value.showform,
      message = value.message;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
  });

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.log("Handle Submit")
    // console.table({...value})

    setValue(_objectSpread(_objectSpread({}, value), {}, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signin"])(user).then(function (res) {
      if (res.error) {
        setValue(_objectSpread(_objectSpread({}, value), {}, {
          error: res.error
        }));
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(res, function () {
          if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/admin");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user");
          }
        }); //save user token to cookie
        //save user info to localstorage
        //authenticate user
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: "Loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 42
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 38
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Transition"].Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Dialog"], {
        as: "div",
        "static": true,
        style: {
          top: '-14em'
        },
        className: "fixed z-10 inset-3 overflow-y-auto",
        open: open,
        onClose: setOpen,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Transition"].Child, {
            as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Dialog"].Overlay, {
              className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Transition"].Child, {
            as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                top: '-14em'
              },
              className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__["CheckIcon"], {
                    className: "h-6 w-6 text-green-600",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Dialog"].Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-5 sm:mt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                  onClick: function onClick() {
                    return setOpen(false);
                  },
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this);
  };

  var onChangeHandler = function onChangeHandler(name) {
    return function (e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var Form = function Form() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col  bg-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid place-items-center mx-2 my-20 sm:my-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12\r px-6 py-10 sm:px-10 sm:py-6\r bg-white rounded-lg shadow-md lg:shadow-lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-center font-semibold pb-3 text-3xl lg:text-4xl text-gray-800",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex align-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLogin__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block text-xs font-semibold text-gray-600 uppercase",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "email",
              type: "email",
              name: "email",
              placeholder: "e-mail address",
              autoComplete: "email",
              value: value.email,
              onChange: onChangeHandler("email"),
              className: "block w-full py-3 px-1 mt-2\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              className: "block mt-2 text-xs font-semibold text-gray-600 uppercase",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "password",
              type: "password",
              name: "password",
              placeholder: "password",
              autoComplete: "current-password",
              onChange: onChangeHandler("password"),
              value: value.password,
              className: "block w-full py-3 px-1 mt-2 mb-4\r text-gray-800 appearance-none\r border-b-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "w-full py-3 mt-10 bg-indigo-700 rounded-sm\r font-medium text-white uppercase\r focus:outline-none hover:bg-indigo-900 hover:shadow-none",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/auth/password/forgot",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  style: {
                    display: "block"
                  },
                  className: "flex-2 underline",
                  children: "Forgot Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && Form()]
  }, void 0, true);
};

_s(SiginForm, "jP+X4vLa0fxxfw1FPcMzJ/ZlREY=");

_c = SiginForm;

var _c;

$RefreshReg$(_c, "SiginForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWdpbkZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwic2hvd2Zvcm0iLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwicmVzIiwiYXV0aGVudGljYXRlIiwicm9sZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJvcGVuIiwiRnJhZ21lbnQiLCJ0b3AiLCJzZXRPcGVuIiwib25DaGFuZ2VIYW5kbGVyIiwibmFtZSIsInRhcmdldCIsIkZvcm0iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUM7QUFDL0IsYUFBUywyQkFEc0I7QUFFL0IsZ0JBQVksVUFGbUI7QUFHL0IsYUFBUyxLQUhzQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsRUFMb0I7QUFNL0IsZ0JBQVk7QUFObUIsR0FBRCxDQUZQO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxNQVVwQkMsS0FWb0IsR0FVa0NGLEtBVmxDLENBVXBCRSxLQVZvQjtBQUFBLE1BVWJDLFFBVmEsR0FVa0NILEtBVmxDLENBVWJHLFFBVmE7QUFBQSxNQVVIQyxLQVZHLEdBVWtDSixLQVZsQyxDQVVISSxLQVZHO0FBQUEsTUFVSUMsT0FWSixHQVVrQ0wsS0FWbEMsQ0FVSUssT0FWSjtBQUFBLE1B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ckI7QUFBQSxrQkFESjtBQVdILENBdkxNOztHQUFNakMsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uOGNjNTc2NjAzZWI1NjlmYjllNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgc2lnbmluLCBzaWdudXB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi9Hb29nbGVMb2dpblwiO1xyXG5pbXBvcnQge0RpYWxvZywgVHJhbnNpdGlvbn0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCB7Q2hlY2tJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnaW5Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIHNob3dmb3JtLCBtZXNzYWdlfSA9IHZhbHVlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc0F1dGgoKSAmJiBSb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge2VtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBzaWduaW4odXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKHJlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9hZG1pbmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgaW5mbyB0byBsb2NhbHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAvL2F1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLi48L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogXCJcIilcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gbWVzc2FnZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtvcGVufSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyBhcz1cImRpdlwiIHN0YXRpYyBzdHlsZT17e3RvcDogJy0xNGVtJ319IGNsYXNzTmFtZT1cImZpeGVkIHotMTAgaW5zZXQtMyBvdmVyZmxvdy15LWF1dG9cIiBvcGVuPXtvcGVufSBvbkNsb3NlPXtzZXRPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwdC00IHB4LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrIHNtOmFsaWduLW1pZGRsZSBzbTpoLXNjcmVlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAmIzgyMDM7XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogJy0xNGVtJ319IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyBweC00IHB0LTUgcGItNCB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgc206bXktOCBzbTphbGlnbi1taWRkbGUgc206bWF4LXctc20gc206dy1mdWxsIHNtOnAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEyIHctMTIgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtZ3JlZW4tNjAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWNlbnRlciBzbTptdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlIGFzPVwiaDNcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBweC00IHB5LTIgYmctaW5kaWdvLTYwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxyXG4gICAgICAgIClcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgYmctZ3JheS0xMDBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIG14LTIgbXktMjAgc206bXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBwLTEyIHNtOnctOC8xMiBtZDp3LTYvMTIgbGc6dy01LzEyIDJ4bDp3LTQvMTJcclxuICAgICAgICAgICAgcHgtNiBweS0xMCBzbTpweC0xMCBzbTpweS02XHJcbiAgICAgICAgICAgIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIGxnOnNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBwYi0zIHRleHQtM3hsIGxnOnRleHQtNHhsIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpbkNvbXBvbmVudC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHVwcGVyY2FzZVwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZS1tYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIHB4LTEgbXQtMlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTMgcHgtMSBtdC0yIG1iLTRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIG10LTEwIGJnLWluZGlnby03MDAgcm91bmRlZC1zbVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby05MDAgaG92ZXI6c2hhZG93LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBzbTpmbGV4LXdyYXAgbXQtOCBzbTptYi00IHRleHQtc20gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcGFzc3dvcmQvZm9yZ290XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0yIHVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcblxyXG4gICAgICAgICAgICB7c2hvd2Zvcm0gJiYgRm9ybSgpfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==