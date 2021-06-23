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
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Transition"].Root, {
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
              lineNumber: 68,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
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
                    lineNumber: 87,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Dialog"].Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: "Loading...."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 29
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
                  lineNumber: 96,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
              lineNumber: 126,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
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
                    lineNumber: 145,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__["Dialog"].Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
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
                  lineNumber: 154,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
            lineNumber: 181,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex align-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLogin__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              className: "block text-xs font-semibold text-gray-600 uppercase",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
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
              lineNumber: 190,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              className: "block mt-2 text-xs font-semibold text-gray-600 uppercase",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
              lineNumber: 203,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "w-full py-3 mt-10 bg-indigo-700 rounded-sm\r font-medium text-white uppercase\r focus:outline-none hover:bg-indigo-900 hover:shadow-none",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
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
                  lineNumber: 224,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWdpbkZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwic2hvd2Zvcm0iLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJzaWduaW4iLCJ0aGVuIiwicmVzIiwiYXV0aGVudGljYXRlIiwicm9sZSIsInNob3dMb2FkaW5nIiwib3BlbiIsIkZyYWdtZW50IiwidG9wIiwic2V0T3BlbiIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwibmFtZSIsInRhcmdldCIsIkZvcm0iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUM7QUFDL0IsYUFBUywyQkFEc0I7QUFFL0IsZ0JBQVksVUFGbUI7QUFHL0IsYUFBUyxLQUhzQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsRUFMb0I7QUFNL0IsZ0JBQVk7QUFObUIsR0FBRCxDQUZQO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxNQVVwQkMsS0FWb0IsR0FVa0NGLEtBVmxDLENBVXBCRSxLQVZvQjtBQUFBLE1BVWJDLFFBVmEsR0FVa0NILEtBVmxDLENBVWJHLFFBVmE7QUFBQSxNQVVIQyxLQVZHLEdBVWtDSixLQVZsQyxDQVVISSxLQVZHO0FBQUEsTUFVSUMsT0FWSixHQVVrQ0wsS0FWbEMsQ0FVSUssT0FWSjtBQUFBLE1B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QUFHTyxtQkFBSyxFQUFFNUIsS0FBSyxDQUFDRyxRQUhwQjtBQUlPLHVCQUFTLEVBQUMsOEpBSmpCO0FBUU8sc0JBQVE7QUFSZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CSixlQThCSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUNRLHVCQUFTLEVBQUMsMElBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlCSixlQXNDSTtBQUFLLHVCQUFTLEVBQUMsdURBQWY7QUFBQSxxQ0FDSSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsdUJBQVg7QUFBQSx1Q0FDSTtBQUFHLHVCQUFLLEVBQUU7QUFBQzZCLDJCQUFPLEVBQUU7QUFBVixtQkFBVjtBQUNHLDJCQUFTLEVBQUMsa0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUE0REgsR0E3REQ7O0FBK0RBLHNCQUNJO0FBQUEsZUFDS1gsV0FBVyxFQURoQixFQUVLTSxXQUFXLEVBRmhCLEVBR0tELFNBQVMsRUFIZCxFQUtLcEIsUUFBUSxJQUFJeUIsSUFBSSxFQUxyQjtBQUFBLGtCQURKO0FBV0gsQ0E5T007O0dBQU1qQyxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5jNTQyMWIyMjE3NjBkMjU0MTg0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2F1dGhlbnRpY2F0ZSwgaXNBdXRoLCBzaWduaW4sIHNpZ251cH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdvb2dsZUxvZ2luQ29tcG9uZW50IGZyb20gXCIuL0dvb2dsZUxvZ2luXCI7XHJcbmltcG9ydCB7RGlhbG9nLCBUcmFuc2l0aW9ufSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtDaGVja0ljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWdpbkZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJlbWFpbFwiOiBcImt1cmlsb3ZzZXJnZXkxNUBnbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwicTkyZTAxa2xcIixcclxuICAgICAgICBcImVycm9yXCI6IGZhbHNlLFxyXG4gICAgICAgIFwibG9hZGluZ1wiOiBmYWxzZSxcclxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJcIixcclxuICAgICAgICBcInNob3dmb3JtXCI6IHRydWVcclxuICAgIH0pXHJcbiAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgc2hvd2Zvcm0sIG1lc3NhZ2V9ID0gdmFsdWVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlzQXV0aCgpICYmIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhhbmRsZSBTdWJtaXRcIilcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHsuLi52YWx1ZX0pXHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2V9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7ZW1haWwsIHBhc3N3b3JkfVxyXG4gICAgICAgIHNpZ25pbih1c2VyKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IHJlcy5lcnJvcn0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUocmVzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2FkbWluYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvdXNlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdXNlciB0b2tlbiB0byBjb29raWVcclxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdXNlciBpbmZvIHRvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKGxvYWRpbmcgP1xyXG4gICAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgPERpYWxvZyBhcz1cImRpdlwiIHN0YXRpYyBzdHlsZT17e3RvcDogJy0xNGVtJ319IGNsYXNzTmFtZT1cImZpeGVkIHotMTAgaW5zZXQtMyBvdmVyZmxvdy15LWF1dG9cIiBvcGVuPXtvcGVufSBvbkNsb3NlPXtzZXRPcGVufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB0LTQgcHgtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZS1ibG9jayBzbTphbGlnbi1taWRkbGUgc206aC1zY3JlZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogJy0xNGVtJ319IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyBweC00IHB0LTUgcGItNCB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgc206bXktOCBzbTphbGlnbi1taWRkbGUgc206bWF4LXctc20gc206dy1mdWxsIHNtOnAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtZ3JlZW4tNjAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXIgc206bXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlIGFzPVwiaDNcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBweC00IHB5LTIgYmctaW5kaWdvLTYwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uLlJvb3Q+XHJcblxyXG4gICAgICAgIDogXCJcIilcclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IG1lc3NhZ2UgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBzdGF0aWMgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTMgb3ZlcmZsb3cteS1hdXRvXCIgb3Blbj17b3Blbn0gb25DbG9zZT17c2V0T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHQtNCBweC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZS1ibG9jayBzbTphbGlnbi1taWRkbGUgc206aC1zY3JlZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgcHgtNCBwdC01IHBiLTQgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGwgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHNtOm15LTggc206YWxpZ24tbWlkZGxlIHNtOm1heC13LXNtIHNtOnctZnVsbCBzbTpwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWdyZWVuLTYwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXIgc206bXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZSBhcz1cImgzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzbTptdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLWluZGlnby02MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICAgICAgICApXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGJnLWdyYXktMTAwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBteC0yIG15LTIwIHNtOm15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgcC0xMiBzbTp3LTgvMTIgbWQ6dy02LzEyIGxnOnctNS8xMiAyeGw6dy00LzEyXHJcbiAgICAgICAgICAgIHB4LTYgcHktMTAgc206cHgtMTAgc206cHktNlxyXG4gICAgICAgICAgICBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBsZzpzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgcGItMyB0ZXh0LTN4bCBsZzp0ZXh0LTR4bCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5Db21wb25lbnQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCB1cHBlcmNhc2VcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImUtbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBweC0xIG10LTJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIGFwcGVhcmFuY2Utbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0zIHB4LTEgbXQtMiBtYi00XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTgwMCBhcHBlYXJhbmNlLW5vbmVcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyBtdC0xMCBiZy1pbmRpZ28tNzAwIHJvdW5kZWQtc21cclxuICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHVwcGVyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tOTAwIGhvdmVyOnNoYWRvdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXggc206ZmxleC13cmFwIG10LTggc206bWItNCB0ZXh0LXNtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3Bhc3N3b3JkL2ZvcmdvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMiB1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG5cclxuICAgICAgICAgICAge3Nob3dmb3JtICYmIEZvcm0oKX1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=