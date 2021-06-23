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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      open = _useState2[0],
      setOpen = _useState2[1];

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

_s(SiginForm, "GUkbVZ8R928/kPTjCXkte1whLYU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJTaWdpbkZvcm0iLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwic2hvd2Zvcm0iLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInNpZ25pbiIsInRoZW4iLCJyZXMiLCJhdXRoZW50aWNhdGUiLCJyb2xlIiwic2hvd0xvYWRpbmciLCJGcmFnbWVudCIsInRvcCIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwibmFtZSIsInRhcmdldCIsIkZvcm0iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUM7QUFDL0IsYUFBUywyQkFEc0I7QUFFL0IsZ0JBQVksVUFGbUI7QUFHL0IsYUFBUyxLQUhzQjtBQUkvQixlQUFXLEtBSm9CO0FBSy9CLGVBQVcsRUFMb0I7QUFNL0IsZ0JBQVk7QUFObUIsR0FBRCxDQUZQO0FBQUEsTUFFcEJDLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxNQVVwQkMsS0FWb0IsR0FVa0NGLEtBVmxDLENBVXBCRSxLQVZvQjtBQUFBLE1BVWJDLFFBVmEsR0FVa0NILEtBVmxDLENBVWJHLFFBVmE7QUFBQSxNQVVIQyxLQVZHLEdBVWtDSixLQVZsQyxDQVVISSxLQVZHO0FBQUEsTUFVSUMsT0FWSixHQVVrQ0wsS0FWbEMsQ0FVSUssT0FWSjtBQUFBLE1B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QUMsVUFBakU7QUFDTywwQkFBWSxFQUFDLGtCQURwQjtBQUVPLHNCQUFRLEVBQUVBLGVBQWUsQ0FBQyxVQUFELENBRmhDO0FBR08sbUJBQUssRUFBRTVCLEtBQUssQ0FBQ0csUUFIcEI7QUFJTyx1QkFBUyxFQUFDLDhKQUpqQjtBQVFPLHNCQUFRO0FBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkosZUE4Qkk7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFDUSx1QkFBUyxFQUFDLDBJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5QkosZUFzQ0k7QUFBSyx1QkFBUyxFQUFDLHVEQUFmO0FBQUEscUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLHVCQUFYO0FBQUEsdUNBQ0k7QUFBRyx1QkFBSyxFQUFFO0FBQUM2QiwyQkFBTyxFQUFFO0FBQVYsbUJBQVY7QUFDRywyQkFBUyxFQUFDLGtCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBNERILEdBN0REOztBQStEQSxzQkFDSTtBQUFBLGVBQ0tULFdBQVcsRUFEaEIsRUFFS0ksV0FBVyxFQUZoQixFQUdLRCxTQUFTLEVBSGQsRUFLS3BCLFFBQVEsSUFBSXlCLElBQUksRUFMckI7QUFBQSxrQkFESjtBQVdILENBOU9NOztHQUFNakMsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uYjUyNjlhZDZiMDY0ZjMzMTY3ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgc2lnbmluLCBzaWdudXB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi9Hb29nbGVMb2dpblwiO1xyXG5pbXBvcnQge0RpYWxvZywgVHJhbnNpdGlvbn0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCB7Q2hlY2tJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnaW5Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIHNob3dmb3JtLCBtZXNzYWdlfSA9IHZhbHVlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc0F1dGgoKSAmJiBSb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH0pXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIYW5kbGUgU3VibWl0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7Li4udmFsdWV9KVxyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlfSlcclxuICAgICAgICBjb25zdCB1c2VyID0ge2VtYWlsLCBwYXNzd29yZH1cclxuICAgICAgICBzaWduaW4odXNlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGVycm9yOiByZXMuZXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKHJlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9hZG1pbmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgdG9rZW4gdG8gY29va2llXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHVzZXIgaW5mbyB0byBsb2NhbHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAvL2F1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID9cclxuICAgICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e29wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBzdGF0aWMgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTMgb3ZlcmZsb3cteS1hdXRvXCIgb3Blbj17b3Blbn0gb25DbG9zZT17c2V0T3Blbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwdC00IHB4LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206YWxpZ24tbWlkZGxlIHNtOmgtc2NyZWVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICYjODIwMztcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgcHgtNCBwdC01IHBiLTQgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGwgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHNtOm15LTggc206YWxpZ24tbWlkZGxlIHNtOm1heC13LXNtIHNtOnctZnVsbCBzbTpwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWdyZWVuLTYwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyIHNtOm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZSBhcz1cImgzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzbTptdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLWluZGlnby02MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxyXG5cclxuICAgICAgICA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e29wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIGFzPVwiZGl2XCIgc3RhdGljIHN0eWxlPXt7dG9wOiAnLTE0ZW0nfX0gY2xhc3NOYW1lPVwiZml4ZWQgei0xMCBpbnNldC0zIG92ZXJmbG93LXktYXV0b1wiIG9wZW49e29wZW59IG9uQ2xvc2U9e3NldE9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB0LTQgcHgtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206YWxpZ24tbWlkZGxlIHNtOmgtc2NyZWVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICYjODIwMztcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dG9wOiAnLTE0ZW0nfX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLWJvdHRvbSBiZy13aGl0ZSByb3VuZGVkLWxnIHB4LTQgcHQtNSBwYi00IHRleHQtbGVmdCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBzbTpteS04IHNtOmFsaWduLW1pZGRsZSBzbTptYXgtdy1zbSBzbTp3LWZ1bGwgc206cC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmVlbi02MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyIHNtOm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGUgYXM9XCJoM1wiIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc206bXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHB4LTQgcHktMiBiZy1pbmRpZ28tNjAwIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLlJvb3Q+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBiZy1ncmF5LTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgbXgtMiBteS0yMCBzbTpteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIHAtMTIgc206dy04LzEyIG1kOnctNi8xMiBsZzp3LTUvMTIgMnhsOnctNC8xMlxyXG4gICAgICAgICAgICBweC02IHB5LTEwIHNtOnB4LTEwIHNtOnB5LTZcclxuICAgICAgICAgICAgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgbGc6c2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHBiLTMgdGV4dC0zeGwgbGc6dGV4dC00eGwgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luQ29tcG9uZW50Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgdXBwZXJjYXNlXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlLW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTMgcHgtMSBtdC0yXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTgwMCBhcHBlYXJhbmNlLW5vbmVcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHVwcGVyY2FzZVwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcihcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMyBweC0xIG10LTIgbWItNFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgYXBwZWFyYW5jZS1ub25lXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgbXQtMTAgYmctaW5kaWdvLTcwMCByb3VuZGVkLXNtXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB1cHBlcmNhc2VcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTkwMCBob3ZlcjpzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpmbGV4IHNtOmZsZXgtd3JhcCBtdC04IHNtOm1iLTQgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9wYXNzd29yZC9mb3Jnb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTIgdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuXHJcbiAgICAgICAgICAgIHtzaG93Zm9ybSAmJiBGb3JtKCl9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9