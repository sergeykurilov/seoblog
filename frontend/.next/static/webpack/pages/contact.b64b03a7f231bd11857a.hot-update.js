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

  var cancelButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var showError = function showError() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
          top: '11em'
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
                top: '11em'
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
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Dialog"].Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: "Payment successful"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-sm text-gray-500",
                      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
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
                  children: "Go back to dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
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
                lineNumber: 148,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 404,
            height: 404,
            fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
                lineNumber: 170,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 404,
            height: 404,
            fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
            children: "Contact sales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-4 text-lg leading-6 text-gray-500",
            children: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
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
                lineNumber: 186,
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
                  lineNumber: 190,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "last_name",
                className: "block text-sm font-medium text-gray-700",
                children: "Last name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "last_name",
                  id: "last_name",
                  autoComplete: "family-name",
                  className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                className: "block text-sm font-medium text-gray-700",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
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
                  lineNumber: 220,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "message",
                className: "block text-sm font-medium text-gray-700",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
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
                  lineNumber: 237,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:col-span-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                children: buttonText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
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

_s(WithoutAuthorEmail, "nNj9uQv4MQfFimXNlCqZbeboubw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL3dpdGhvdXRBdXRob3JFbWFpbC5qcyJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiV2l0aG91dEF1dGhvckVtYWlsIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImxhc3ROYW1lIiwic2VuZGVyRW1haWwiLCJjbGllbnRFbWFpbCIsInNlbnQiLCJidXR0b25UZXh0Iiwic3VjY2VzcyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbENvbnRhY3RGb3JtIiwiZW1haWwiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2V0T3BlbiIsImNhbmNlbEJ1dHRvblJlZiIsInVzZVJlZiIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsIkZyYWdtZW50IiwidG9wIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJhZ3JlZWQiLCJzZXRBZ3JlZWQiLCJjb250YWN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQWdDO0FBQUEsb0NBQVRDLE9BQVM7QUFBVEEsV0FBUztBQUFBOztBQUM1QixTQUFPQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUMsT0FBZixFQUF3QkMsSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBUDtBQUNIOztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLFFBQUksRUFBRSxFQUYyQjtBQUdqQ0MsWUFBUSxFQUFFLEVBSHVCO0FBSWpDQyxlQUFX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RSxXQUFXLEVBRmhCLEVBR0tRLFdBQVcsRUFIaEI7QUFBQSxrQkFESjtBQU9ILENBclJEOztHQUFNcEMsa0I7O0tBQUFBLGtCO0FBdVJTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmI2NGIwM2E3ZjIzMWJkMTE4NTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2VtYWlsQ29udGFjdEZvcm19IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Zvcm1cIjtcclxuaW1wb3J0IHtTd2l0Y2h9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBDaGVja0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuY29uc3QgV2l0aG91dEF1dGhvckVtYWlsID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIHNlbmRlckVtYWlsOiAnZW5qb3kyMTNzYXNkQGdtYWlsLmNvbScsXHJcbiAgICAgICAgY2xpZW50RW1haWw6ICcnLFxyXG4gICAgICAgIHNlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6ICdTZW5kIE1lc3NhZ2UnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7bWVzc2FnZSwgbmFtZSwgc2VuZGVyRW1haWwsIGxhc3ROYW1lLCBzdWNjZXNzLCBlcnJvciwgYnV0dG9uVGV4dCwgY2xpZW50RW1haWx9ID0gdmFsdWVzXHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgYnV0dG9uVGV4dDogXCJTZW5kaW5nLi4uXCJ9KVxyXG4gICAgICAgIGVtYWlsQ29udGFjdEZvcm0oe25hbWUsIGVtYWlsOiBzZW5kZXJFbWFpbCwgbGFzdE5hbWUsIG1lc3NhZ2UsIGNsaWVudEVtYWlsfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRFbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlNlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IHN1Y2Nlc3MgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBzdGF0aWMgc3R5bGU9e3t0b3A6ICcxMWVtJ319IGNsYXNzTmFtZT1cImZpeGVkIHotMTAgaW5zZXQtMyBvdmVyZmxvdy15LWF1dG9cIiBvcGVuPXtvcGVufSBvbkNsb3NlPXtzZXRPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwdC00IHB4LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrIHNtOmFsaWduLW1pZGRsZSBzbTpoLXNjcmVlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAmIzgyMDM7XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogJzExZW0nfX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLWJvdHRvbSBiZy13aGl0ZSByb3VuZGVkLWxnIHB4LTQgcHQtNSBwYi00IHRleHQtbGVmdCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBzbTpteS04IHNtOmFsaWduLW1pZGRsZSBzbTptYXgtdy1zbSBzbTp3LWZ1bGwgc206cC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ncmVlbi02MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyIHNtOm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGUgYXM9XCJoM1wiIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IHN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXVhdHVyIGFtZXQgbGFib3JlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc206bXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHB4LTQgcHktMiBiZy1pbmRpZ28tNjAwIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBiYWNrIHRvIGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLlJvb3Q+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+VGhhbmsgeW91IGZvciBjb250YWN0aW5nIHVzITwvZGl2PlxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHNldFZhbHVlcyh7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiU2VuZCBNZXNzYWdlXCJcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2FncmVlZCwgc2V0QWdyZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMTYgcHgtNCBvdmVyZmxvdy1oaWRkZW4gc206cHgtNiBsZzpweC04IGxnOnB5LTI0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXcteGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtZnVsbCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDA0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDA0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQwNCA0MDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIjg1NzM3YzBlLTA5MTYtNDFkNy05MTdmLTU5NmRjN2VkZmEyN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXs0MDR9IGhlaWdodD17NDA0fSBmaWxsPVwidXJsKCM4NTczN2MwZS0wOTE2LTQxZDctOTE3Zi01OTZkYzdlZGZhMjcpXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtZnVsbCBib3R0b20tMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgNDA0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCI4NTczN2MwZS0wOTE2LTQxZDctOTE3Zi01OTZkYzdlZGZhMjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17NDA0fSBoZWlnaHQ9ezQwNH0gZmlsbD1cInVybCgjODU3MzdjMGUtMDkxNi00MWQ3LTkxN2YtNTk2ZGM3ZWRmYTI3KVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsXCI+Q29udGFjdCBzYWxlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnIGxlYWRpbmctNiB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3J0b3IgbGFjdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjdS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2xpY2tTdWJtaXR9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktNiBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJnaXZlbi1uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IGJsb2NrIHctZnVsbCBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYW1pbHktbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjbGllbnRFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY2xpZW50RW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTQgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSAvPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAvLyAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17Y2xpZW50RW1haWx9IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NsaWVudEVtYWlsJyl9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e21lc3NhZ2V9IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfSAvPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICB7Y29udGFjdEZvcm0oKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRob3V0QXV0aG9yRW1haWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=