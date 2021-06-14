webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/form/withoutAuthorEmail.js":
/*!***********************************************!*\
  !*** ./components/form/withoutAuthorEmail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/form */ "./actions/form.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\form\\withoutAuthorEmail.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

var WithoutAuthorEmail = function WithoutAuthorEmail() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    message: '',
    name: '',
    lastName: '',
    senderEmail: 'enjoy213sasd@gmail.com',
    clientEmail: '',
    sent: false,
    buttonText: 'Send Message',
    success: false,
    error: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var message = values.message,
      name = values.name,
      senderEmail = values.senderEmail,
      lastName = values.lastName,
      success = values.success,
      error = values.error,
      buttonText = values.buttonText,
      clientEmail = values.clientEmail;

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      buttonText: "Sending..."
    }));
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_3__["emailContactForm"])({
      name: name,
      email: senderEmail,
      lastName: lastName,
      message: message,
      clientEmail: clientEmail
    }).then(function (data) {
      console.log(data);

      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          sent: true,
          name: "",
          lastName: "",
          email: "",
          message: "",
          clientEmail: "",
          buttonText: "Sent",
          success: data.success
        }));
      }
    });
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      open = _useState2[0],
      setOpen = _useState2[1];

  var showError = function showError() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Transition"].Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Transition"].Child, {
            as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Dialog"].Overlay, {
              className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Transition"].Child, {
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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["CheckIcon"], {
                    className: "h-6 w-6 text-green-600",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Dialog"].Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: "Thank you for contacting us!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-sm text-gray-500",
                      children: "We appreciate your trust to our company and our specialist will get in touch with you as soon as possible."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
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
                  lineNumber: 103,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this);
  }; // <div className="alert alert-info" style={{display: success ? '' : 'none'}}>Thank you for contacting us!</div>


  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      return setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, e.target.value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "success", false), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "buttonText", "Send Message"), _objectSpread2)));
    };
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      agreed = _useState3[0],
      setAgreed = _useState3[1];

  var contactForm = function contactForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative max-w-xl mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "absolute left-full transform translate-x-1/2",
          width: 404,
          height: 404,
          fill: "none",
          viewBox: "0 0 404 404",
          "aria-hidden": "true",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
              id: "85737c0e-0916-41d7-917f-596dc7edfa27",
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
                lineNumber: 147,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 404,
            height: 404,
            fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "absolute right-full bottom-0 transform -translate-x-1/2",
          width: 404,
          height: 404,
          fill: "none",
          viewBox: "0 0 404 404",
          "aria-hidden": "true",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
              id: "85737c0e-0916-41d7-917f-596dc7edfa27",
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
                lineNumber: 169,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 404,
            height: 404,
            fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
            children: "Contact sales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-4 text-lg leading-6 text-gray-500",
            children: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: clickSubmit,
            className: "grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "first_name",
                className: "block text-sm font-medium text-gray-700",
                children: "First name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: name,
                  onChange: handleChange('name'),
                  name: "first_name",
                  id: "first_name",
                  autoComplete: "given-name",
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "last_name",
                className: "block text-sm font-medium text-gray-700",
                children: "Last name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "last_name",
                  value: lastName,
                  onChange: handleChange('lastName'),
                  id: "last_name",
                  autoComplete: "family-name",
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                className: "block text-sm font-medium text-gray-700",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  id: "email",
                  name: "email",
                  value: clientEmail,
                  onChange: handleChange('clientEmail'),
                  type: "email",
                  autoComplete: "email",
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "message",
                className: "block text-sm font-medium text-gray-700",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  id: "message",
                  name: "message",
                  rows: 4,
                  value: message,
                  onChange: handleChange('message'),
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",
                  defaultValue: ''
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                children: buttonText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, _this) // <form onSubmit={clickSubmit} className="pb-5">
    //     <div className="form-group">
    //         <label className="lead">Name</label>
    //         <input className="form-control" value={name} required type="text" onChange={handleChange('name')} />
    //     </div>
    //     <div className="form-group">
    //         <label className="lead">Email</label>
    //         <input className="form-control" value={clientEmail} required type="email" onChange={handleChange('clientEmail')} />
    //     </div>
    //     <div className="form-group">
    //         <label className="lead">Message</label>
    //         <textarea className="form-control" value={message} required type="text" rows="10" onChange={handleChange('message')} />
    //     </div>
    //     <div>
    //         <button className="btn btn-primary">{buttonText}</button>
    //     </div>
    // </form>
    ;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showSuccess(), contactForm()]
  }, void 0, true);
};

_s(WithoutAuthorEmail, "5VNqSauXmlmPsvvbDpqU4sowJ6Q=");

_c = WithoutAuthorEmail;
/* harmony default export */ __webpack_exports__["default"] = (WithoutAuthorEmail);

var _c;

$RefreshReg$(_c, "WithoutAuthorEmail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3dpdGhvdXRBdXRob3JFbWFpbC5qcyJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiV2l0aG91dEF1dGhvckVtYWlsIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImxhc3ROYW1lIiwic2VuZGVyRW1haWwiLCJjbGllbnRFbWFpbCIsInNlbnQiLCJidXR0b25UZXh0Iiwic3VjY2VzcyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbENvbnRhY3RGb3JtIiwiZW1haWwiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2V0T3BlbiIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsIkZyYWdtZW50IiwidG9wIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJhZ3JlZWQiLCJzZXRBZ3JlZWQiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQWdDO0FBQUEsb0NBQVRDLE9BQVM7QUFBVEEsV0FBUztBQUFBOztBQUM1QixTQUFPQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUMsT0FBZixFQUF3QkMsSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBUDtBQUNIOztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLFFBQUksRUFBRSxFQUYyQjtBQUdqQ0MsWUFBUSxFQUFFLEVBSHVCO0FBSWpDQyxlQUFXLEVBQUUsd0JBSm9CO0FBS2pDQyxlQUFXLEVB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QixFQUdLUSxXQUFXLEVBSGhCO0FBQUEsa0JBREo7QUFPSCxDQXRSRDs7R0FBTWxDLGtCOztLQUFBQSxrQjtBQXdSU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5kNDZjZjA2NzRiZjBhNjZiZjI5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtlbWFpbENvbnRhY3RGb3JtfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9mb3JtXCI7XHJcbmltcG9ydCB7U3dpdGNofSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgQ2hlY2tJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmNvbnN0IFdpdGhvdXRBdXRob3JFbWFpbCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICBzZW5kZXJFbWFpbDogJ2Vuam95MjEzc2FzZEBnbWFpbC5jb20nLFxyXG4gICAgICAgIGNsaWVudEVtYWlsOiAnJyxcclxuICAgICAgICBzZW50OiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0OiAnU2VuZCBNZXNzYWdlJyxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qge21lc3NhZ2UsIG5hbWUsIHNlbmRlckVtYWlsLCBsYXN0TmFtZSwgc3VjY2VzcywgZXJyb3IsIGJ1dHRvblRleHQsIGNsaWVudEVtYWlsfSA9IHZhbHVlc1xyXG5cclxuXHJcbiAgICBjb25zdCBjbGlja1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGJ1dHRvblRleHQ6IFwiU2VuZGluZy4uLlwifSlcclxuICAgICAgICBlbWFpbENvbnRhY3RGb3JtKHtuYW1lLCBlbWFpbDogc2VuZGVyRW1haWwsIGxhc3ROYW1lOiBsYXN0TmFtZSwgbWVzc2FnZSwgY2xpZW50RW1haWx9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiU2VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEuc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IHN1Y2Nlc3MgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBzdGF0aWMgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTMgb3ZlcmZsb3cteS1hdXRvXCIgb3Blbj17b3Blbn0gb25DbG9zZT17c2V0T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHQtNCBweC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZS1ibG9jayBzbTphbGlnbi1taWRkbGUgc206aC1zY3JlZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0b3A6ICctMTRlbSd9fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgcHgtNCBwdC01IHBiLTQgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGwgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHNtOm15LTggc206YWxpZ24tbWlkZGxlIHNtOm1heC13LXNtIHNtOnctZnVsbCBzbTpwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWdyZWVuLTYwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXIgc206bXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZSBhcz1cImgzXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyB1cyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFwcHJlY2lhdGUgeW91ciB0cnVzdCB0byBvdXIgY29tcGFueSBhbmQgb3VyIHNwZWNpYWxpc3Qgd2lsbCBnZXQgaW4gdG91Y2ggd2l0aCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBweC00IHB5LTIgYmctaW5kaWdvLTYwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxyXG4gICAgICAgIClcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiBzdHlsZT17e2Rpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJ319PlRoYW5rIHlvdSBmb3IgY29udGFjdGluZyB1cyE8L2Rpdj5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiBzZXRWYWx1ZXMoe1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIlNlbmQgTWVzc2FnZVwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFthZ3JlZWQsIHNldEFncmVlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTE2IHB4LTQgb3ZlcmZsb3ctaGlkZGVuIHNtOnB4LTYgbGc6cHgtOCBsZzpweS0yNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LWZ1bGwgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LTEvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgNDA0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCI4NTczN2MwZS0wOTE2LTQxZDctOTE3Zi01OTZkYzdlZGZhMjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17NDA0fSBoZWlnaHQ9ezQwNH0gZmlsbD1cInVybCgjODU3MzdjMGUtMDkxNi00MWQ3LTkxN2YtNTk2ZGM3ZWRmYTI3KVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LWZ1bGwgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDR9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDA0IDQwNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdHRlcm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiODU3MzdjMGUtMDkxNi00MWQ3LTkxN2YtNTk2ZGM3ZWRmYTI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9ezR9IGhlaWdodD17NH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9ezQwNH0gaGVpZ2h0PXs0MDR9IGZpbGw9XCJ1cmwoIzg1NzM3YzBlLTA5MTYtNDFkNy05MTdmLTU5NmRjN2VkZmEyNylcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPkNvbnRhY3Qgc2FsZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZyBsZWFkaW5nLTYgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ydG9yIGxhY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyY3UuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTYgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ2l2ZW4tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbGFzdE5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYW1pbHktbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjbGllbnRFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY2xpZW50RW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTQgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSAvPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAvLyAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17Y2xpZW50RW1haWx9IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NsaWVudEVtYWlsJyl9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e21lc3NhZ2V9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfSAvPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICB7Y29udGFjdEZvcm0oKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRob3V0QXV0aG9yRW1haWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=