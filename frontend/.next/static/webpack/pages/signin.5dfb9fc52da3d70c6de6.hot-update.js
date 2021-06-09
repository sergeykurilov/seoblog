webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/GoogleLogin.js":
/*!***********************************!*\
  !*** ./components/GoogleLogin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\seoblog\\frontend\\components\\GoogleLogin.js",
    _this = undefined;






var GoogleLoginComponent = function GoogleLoginComponent() {
  var responseGoogle = function responseGoogle(response) {
    console.log(response);
    var tokenId = response.tokenId;
    var user = {
      tokenId: tokenId
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["loginWithGoogle"])(user).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(data, function () {
          if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/admin");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user");
          }
        });
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pb-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLogin"], {
      clientId: "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",
      render: function render(renderProps) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: renderProps.onClick,
          disabled: renderProps.disabled,
          children: "This is my custom Google button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      },
      buttonText: "Login",
      onSuccess: responseGoogle,
      onFailure: responseGoogle,
      cookiePolicy: 'single_host_origin'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_c = GoogleLoginComponent;
/* harmony default export */ __webpack_exports__["default"] = (GoogleLoginComponent);

var _c;

$RefreshReg$(_c, "GoogleLoginComponent");

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

/***/ }),

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
      lineNumber: 52,
      columnNumber: 43
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 39
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 43
    }, _this) : "";
  };

  var onChangeHandler = function onChangeHandler(name) {
    return function (e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var Form = function Form() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("email"),
        placeholder: "your email",
        value: value.email,
        type: "text",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: onChangeHandler("password"),
        placeholder: "your password",
        value: value.password,
        type: "password",
        className: "form-control"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-primary",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showLoading(), showMessage(), showError(), showform && Form(), Object(_GoogleLogin__WEBPACK_IMPORTED_MODULE_6__["default"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/auth/password/forgot",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "btn btn-danger",
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 14
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 10
    }, _this)]
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

/***/ }),

/***/ "./node_modules/react-google-login/dist/google-login.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-google-login/dist/google-login.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}("undefined"!=typeof self?self:this,(function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function f(e,t,n,o,r,i){var a=e.getElementsByTagName(t)[0],c=a,u=a;(u=e.createElement(t)).id=n,u.src=o,c&&c.parentNode?c.parentNode.insertBefore(u,c):e.head.appendChild(u),u.onerror=i,u.onload=r}function d(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function p(e){return b.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function g(e){return b.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},b.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("g",{fill:"#000",fillRule:"evenodd"},b.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),b.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),b.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),b.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),b.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function y(e){var t=i(Object(m.useState)(!1),2),n=t[0],o=t[1],r=i(Object(m.useState)(!1),2),a=r[0],c=r[1],u=e.tag,l=e.type,s=e.className,f=e.disabledStyle,d=e.buttonText,y=e.children,v=e.render,S=e.theme,j=e.icon,O=e.disabled,x=h({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),I=x.signIn,w=O||!x.loaded;if(v)return v({onClick:I,disabled:w});var k={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=w?Object.assign({},k,f):a?Object.assign({},k,A):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return b.a.createElement(u,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:I,style:_,type:l,disabled:w,className:s},[j&&b.a.createElement(g,{key:1,active:a}),b.a.createElement(p,{icon:j,key:2},y||d)])}n.r(t),n.d(t,"default",(function(){return S})),n.d(t,"GoogleLogin",(function(){return S})),n.d(t,"GoogleLogout",(function(){return O})),n.d(t,"useGoogleLogin",(function(){return h})),n.d(t,"useGoogleLogout",(function(){return j}));var m=n(0),b=n.n(m),h=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function n(e){if(e&&e.preventDefault(),P){var n=window.gapi.auth2.getAuthInstance(),o={prompt:L};p(),"code"===_?n.grantOfflineAccess(o).then((function(e){return i(e)}),(function(e){return l(e)})):n.signIn(o).then((function(e){return t(e)}),(function(e){return l(e)}))}}var r=e.onSuccess,i=void 0===r?function(){}:r,a=e.onAutoLoadFinished,c=void 0===a?function(){}:a,u=e.onFailure,l=void 0===u?function(){}:u,s=e.onRequest,p=void 0===s?function(){}:s,g=e.onScriptLoadFailure,y=e.clientId,b=e.cookiePolicy,h=e.loginHint,v=e.hostedDomain,S=e.autoLoad,j=e.isSignedIn,O=e.fetchBasicProfile,x=e.redirectUri,I=e.discoveryDocs,w=e.uxMode,k=e.scope,A=e.accessType,_=e.responseType,E=e.jsSrc,T=void 0===E?"https://apis.google.com/js/api.js":E,L=e.prompt,M=o(Object(m.useState)(!1),2),P=M[0],C=M[1];return Object(m.useEffect)((function(){var e=!1,n=g||l;return f(document,"script","google-login",T,(function(){var o={client_id:y,cookie_policy:b,login_hint:h,hosted_domain:v,fetch_basic_profile:O,discoveryDocs:I,ux_mode:w,redirect_uri:x,scope:k,access_type:A};"code"===_&&(o.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){e||(j&&r.isSignedIn.get()?(C(!0),c(!0),t(r.currentUser.get())):(C(!0),c(!1)))}),(function(e){l(e)})):window.gapi.auth2.init(o).then((function(n){if(!e){C(!0);var o=j&&n.isSignedIn.get();c(o),o&&t(n.currentUser.get())}}),(function(e){C(!0),c(!1),n(e)}))}))}),(function(e){n(e)})),function(){e=!0,d(document,"google-login")}}),[]),Object(m.useEffect)((function(){S&&n()}),[P]),{signIn:n,loaded:P}});function v(e){var t=l(Object(m.useState)(!1),2),n=t[0],o=t[1],r=l(Object(m.useState)(!1),2),i=r[0],a=r[1],c=e.tag,u=e.type,s=e.className,f=e.disabledStyle,d=e.buttonText,y=e.children,h=e.render,v=e.theme,S=e.icon,O=e.disabled,x=j({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),I=x.signOut,w=O||!x.loaded;if(h)return h({onClick:I,disabled:w});var k={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=w?Object.assign({},k,f):i?Object.assign({},k,A):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return b.a.createElement(c,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:I,style:_,type:u,disabled:w,className:s},[S&&b.a.createElement(g,{key:1,active:i}),b.a.createElement(p,{icon:S,key:2},y||d)])}y.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var S=y,j=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,u=e.loginHint,l=e.hostedDomain,s=e.fetchBasicProfile,p=e.discoveryDocs,g=e.uxMode,y=e.redirectUri,b=e.scope,h=e.accessType,v=e.onLogoutSuccess,S=c(Object(m.useState)(!1),2),j=S[0],O=S[1],x=Object(m.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return o(e)}))}}),[v]);return Object(m.useEffect)((function(){var e=r||o;return f(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:a,login_hint:u,hosted_domain:l,fetch_basic_profile:s,discoveryDocs:p,ux_mode:g,redirect_uri:y,scope:b,access_type:h};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?O(!0):window.gapi.auth2.init(t).then((function(){return O(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){d(document,"google-login")}}),[]),{signOut:x,loaded:j}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var O=v}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduaW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1sb2dpbi9kaXN0L2dvb2dsZS1sb2dpbi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkNvbXBvbmVudCIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidG9rZW5JZCIsInVzZXIiLCJsb2dpbldpdGhHb29nbGUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiYXV0aGVudGljYXRlIiwiaXNBdXRoIiwicm9sZSIsIlJvdXRlciIsInB1c2giLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIlNpZ2luRm9ybSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwic2hvd2Zvcm0iLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbmluIiwicmVzIiwic2hvd0xvYWRpbmciLCJzaG93RXJyb3IiLCJzaG93TWVzc2FnZSIsIm9uQ2hhbmdlSGFuZGxlciIsIm5hbWUiLCJ0YXJnZXQiLCJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBRS9CLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU1HLE9BQU8sR0FBR0gsUUFBUSxDQUFDRyxPQUF6QjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUFFRCxhQUFPLEVBQVBB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LG1CQUFtQixFQUFFLGNBQWMseU5BQXlOLHNXQUFzVyw2QkFBNkIsZUFBZSxxQkFBcUIsRUFBRSxPQUFPLDJVQUEyVSxJQUFJLG9IQUFvSCxxQkFBcUIsd0JBQXdCLHdCQUF3QixJQUFJLDRCQUE0QixJQUFJLDRCQUE0Qix3QkFBd0IsYUFBYSx5QkFBeUIsWUFBWSx3QkFBd0IsYUFBYSxzQkFBc0IsYUFBYSxpREFBaUQsMEJBQTBCLGVBQWUsdUJBQXVCLGFBQWEsU0FBUyxnQkFBZ0IsbU5BQW1OLFdBQVcsK0NBQStDLHNCQUFzQixvV0FBb1csZ0JBQWdCLDBDQUEwQyw0QkFBNEIsNkJBQTZCLG1CQUFtQixHQUFHLGVBQWUsWUFBWSxJQUFJLE9BQU8sdUNBQXVDLFdBQVcsd0RBQXdELE9BQU8sK0lBQStJLHFDQUFxQyxxRkFBcUYsYUFBYSxlQUFlLFlBQVksR0FBRyxHQUFHLGVBQWUsS0FBSyxjQUFjLDRCQUE0QixPQUFPLHFCQUFxQixnQkFBZ0Isd0VBQXdFLFdBQVcsa0VBQWtFLFFBQVEsNEJBQTRCLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGlCQUFpQixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsUUFBUSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi41ZGZiOWZjNTJkYTNkNzBjNmRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtHb29nbGVMb2dpbn0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgbG9naW5XaXRoR29vZ2xlfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBHb29nbGVMb2dpbkNvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIGNvbnN0IHRva2VuSWQgPSByZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHsgdG9rZW5JZCB9XHJcblxyXG4gICAgICAgIGxvZ2luV2l0aEdvb2dsZSh1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYWRtaW5gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3VzZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCI2NTg5NzczMTA4OTYta25ybDNna2E2NmZsZGg4M2RhbzJyaGdiYmxtZDR1bjkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfSBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9PlRoaXMgaXMgbXkgY3VzdG9tIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUxvZ2luQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthdXRoZW50aWNhdGUsIGlzQXV0aCwgc2lnbmluLCBzaWdudXB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi9Hb29nbGVMb2dpblwiO1xyXG5leHBvcnQgY29uc3QgU2lnaW5Gb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZW1haWxcIjogXCJrdXJpbG92c2VyZ2V5MTVAZ21haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInE5MmUwMWtsXCIsXHJcbiAgICAgICAgXCJlcnJvclwiOiBmYWxzZSxcclxuICAgICAgICBcImxvYWRpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJzaG93Zm9ybVwiOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qge2VtYWlsLHBhc3N3b3JkLGVycm9yLGxvYWRpbmcsc2hvd2Zvcm0sbWVzc2FnZX0gPSB2YWx1ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaXNBdXRoKCkgJiYgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGFuZGxlIFN1Ym1pdFwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoey4uLnZhbHVlfSlcclxuICAgICAgICBzZXRWYWx1ZSh7Li4udmFsdWUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZX0pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtlbWFpbCwgcGFzc3dvcmR9XHJcbiAgICAgICAgc2lnbmluKHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IHJlcy5lcnJvcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlKHJlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYWRtaW5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvdXNlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdXNlciB0b2tlbiB0byBjb29raWVcclxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdXNlciBpbmZvIHRvIGxvY2Fsc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vYXV0aGVudGljYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKCBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLi48L2Rpdj4gOiBcIlwiKVxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKCBlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2PiA6IFwiXCIpXHJcbiAgICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+ICggbWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PiA6IFwiXCIpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJlbWFpbFwiKX0gcGxhY2Vob2xkZXI9e1wieW91ciBlbWFpbFwifSB2YWx1ZT17dmFsdWUuZW1haWx9IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXIoXCJwYXNzd29yZFwiKX0gcGxhY2Vob2xkZXI9e1wieW91ciBwYXNzd29yZFwifSB2YWx1ZT17dmFsdWUucGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgIHtzaG93Zm9ybSAmJiBGb3JtKCl9XHJcbiAgICAgICAgIHtHb29nbGVMb2dpbkNvbXBvbmVudCgpfVxyXG4gICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcGFzc3dvcmQvZm9yZ290XCI+XHJcbiAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZWFjdFwiXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkdvb2dsZUxvZ2luPXQocmVxdWlyZShcInJlYWN0XCIpKTplLkdvb2dsZUxvZ2luPXQoZS5yZWFjdCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcywoZnVuY3Rpb24oZSl7cmV0dXJuIG89e30sdC5tPW49W2Z1bmN0aW9uKHQpe3QuZXhwb3J0cz1lfSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPW4oMikoKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gcigpe312YXIgaT1uKDMpO3IucmVzZXRXYXJuaW5nQ2FjaGU9byxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuLG8scixhKXtpZihhIT09aSl7dmFyIGM9RXJyb3IoXCJDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO3Rocm93IGMubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIixjfX1mdW5jdGlvbiB0KCl7cmV0dXJuIGV9dmFyIG49e2FycmF5OmUuaXNSZXF1aXJlZD1lLGJvb2w6ZSxmdW5jOmUsbnVtYmVyOmUsb2JqZWN0OmUsc3RyaW5nOmUsc3ltYm9sOmUsYW55OmUsYXJyYXlPZjp0LGVsZW1lbnQ6ZSxlbGVtZW50VHlwZTplLGluc3RhbmNlT2Y6dCxub2RlOmUsb2JqZWN0T2Y6dCxvbmVPZjp0LG9uZU9mVHlwZTp0LHNoYXBlOnQsZXhhY3Q6dCxjaGVja1Byb3BUeXBlczpyLHJlc2V0V2FybmluZ0NhY2hlOm99O3JldHVybiBuLlByb3BUeXBlcz1ufX0sZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSl7dmFyIG49W10sbz0hMCxyPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIGEsYz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG89KGE9Yy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO289ITApO31jYXRjaChlKXtyPSEwLGk9ZX1maW5hbGx5e3RyeXtvfHxudWxsPT1jLnJldHVybnx8Yy5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgaX19cmV0dXJuIG59fShlLHQpfHxmdW5jdGlvbihlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiByKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKG4pOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9yKGUsdCk6dm9pZCAwfX0oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHIoZSx0KXtudWxsIT10JiZ0PD1lLmxlbmd0aHx8KHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89QXJyYXkodCk7bjx0O24rKylvW25dPWVbbl07cmV0dXJuIG99ZnVuY3Rpb24gaShlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXt2YXIgbj1bXSxvPSEwLHI9ITEsaT12b2lkIDA7dHJ5e2Zvcih2YXIgYSxjPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobz0oYT1jLm5leHQoKSkuZG9uZSkmJihuLnB1c2goYS52YWx1ZSksIXR8fG4ubGVuZ3RoIT09dCk7bz0hMCk7fWNhdGNoKGUpe3I9ITAsaT1lfWZpbmFsbHl7dHJ5e298fG51bGw9PWMucmV0dXJufHxjLnJldHVybigpfWZpbmFsbHl7aWYocil0aHJvdyBpfX1yZXR1cm4gbn19KGUsdCl8fGZ1bmN0aW9uKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGEoZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20obik6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP2EoZSx0KTp2b2lkIDB9fShlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gYShlLHQpe251bGwhPXQmJnQ8PWUubGVuZ3RofHwodD1lLmxlbmd0aCk7Zm9yKHZhciBuPTAsbz1BcnJheSh0KTtuPHQ7bisrKW9bbl09ZVtuXTtyZXR1cm4gb31mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpe3ZhciBuPVtdLG89ITAscj0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLGM9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShvPShhPWMubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtvPSEwKTt9Y2F0Y2goZSl7cj0hMCxpPWV9ZmluYWxseXt0cnl7b3x8bnVsbD09Yy5yZXR1cm58fGMucmV0dXJuKCl9ZmluYWxseXtpZihyKXRocm93IGl9fXJldHVybiBufX0oZSx0KXx8ZnVuY3Rpb24oZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gdShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4/QXJyYXkuZnJvbShuKTpcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qobik/dShlLHQpOnZvaWQgMH19KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiB1KGUsdCl7bnVsbCE9dCYmdDw9ZS5sZW5ndGh8fCh0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxvPUFycmF5KHQpO248dDtuKyspb1tuXT1lW25dO3JldHVybiBvfWZ1bmN0aW9uIGwoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSl7dmFyIG49W10sbz0hMCxyPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIGEsYz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG89KGE9Yy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO289ITApO31jYXRjaChlKXtyPSEwLGk9ZX1maW5hbGx5e3RyeXtvfHxudWxsPT1jLnJldHVybnx8Yy5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgaX19cmV0dXJuIG59fShlLHQpfHxmdW5jdGlvbihlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBzKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKG4pOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9zKGUsdCk6dm9pZCAwfX0oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHMoZSx0KXtudWxsIT10JiZ0PD1lLmxlbmd0aHx8KHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89QXJyYXkodCk7bjx0O24rKylvW25dPWVbbl07cmV0dXJuIG99ZnVuY3Rpb24gZihlLHQsbixvLHIsaSl7dmFyIGE9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KVswXSxjPWEsdT1hOyh1PWUuY3JlYXRlRWxlbWVudCh0KSkuaWQ9bix1LnNyYz1vLGMmJmMucGFyZW50Tm9kZT9jLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHUsYyk6ZS5oZWFkLmFwcGVuZENoaWxkKHUpLHUub25lcnJvcj1pLHUub25sb2FkPXJ9ZnVuY3Rpb24gZChlLHQpe3ZhciBuPWUuZ2V0RWxlbWVudEJ5SWQodCk7biYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHAoZSl7cmV0dXJuIGIuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtzdHlsZTp7cGFkZGluZ1JpZ2h0OjEwLGZvbnRXZWlnaHQ6NTAwLHBhZGRpbmdMZWZ0OmUuaWNvbj8wOjEwLHBhZGRpbmdUb3A6MTAscGFkZGluZ0JvdHRvbToxMH19LGUuY2hpbGRyZW4pfWZ1bmN0aW9uIGcoZSl7cmV0dXJuIGIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnttYXJnaW5SaWdodDoxMCxiYWNrZ3JvdW5kOmUuYWN0aXZlP1wiI2VlZVwiOlwiI2ZmZlwiLHBhZGRpbmc6MTAsYm9yZGVyUmFkaXVzOjJ9fSxiLmEuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjE4XCIsaGVpZ2h0OlwiMThcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9LGIuYS5jcmVhdGVFbGVtZW50KFwiZ1wiLHtmaWxsOlwiIzAwMFwiLGZpbGxSdWxlOlwiZXZlbm9kZFwifSxiLmEuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk05IDMuNDhjMS42OSAwIDIuODMuNzMgMy40OCAxLjM0bDIuNTQtMi40OEMxMy40Ni44OSAxMS40MyAwIDkgMCA1LjQ4IDAgMi40NCAyLjAyLjk2IDQuOTZsMi45MSAyLjI2QzQuNiA1LjA1IDYuNjIgMy40OCA5IDMuNDh6XCIsZmlsbDpcIiNFQTQzMzVcIn0pLGIuYS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTE3LjY0IDkuMmMwLS43NC0uMDYtMS4yOC0uMTktMS44NEg5djMuMzRoNC45NmMtLjEuODMtLjY0IDIuMDgtMS44NCAyLjkybDIuODQgMi4yYzEuNy0xLjU3IDIuNjgtMy44OCAyLjY4LTYuNjJ6XCIsZmlsbDpcIiM0Mjg1RjRcIn0pLGIuYS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTMuODggMTAuNzhBNS41NCA1LjU0IDAgMCAxIDMuNTggOWMwLS42Mi4xMS0xLjIyLjI5LTEuNzhMLjk2IDQuOTZBOS4wMDggOS4wMDggMCAwIDAgMCA5YzAgMS40NS4zNSAyLjgyLjk2IDQuMDRsMi45Mi0yLjI2elwiLGZpbGw6XCIjRkJCQzA1XCJ9KSxiLmEuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk05IDE4YzIuNDMgMCA0LjQ3LS44IDUuOTYtMi4xOGwtMi44NC0yLjJjLS43Ni41My0xLjc4LjktMy4xMi45LTIuMzggMC00LjQtMS41Ny01LjEyLTMuNzRMLjk3IDEzLjA0QzIuNDUgMTUuOTggNS40OCAxOCA5IDE4elwiLGZpbGw6XCIjMzRBODUzXCJ9KSxiLmEuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbDpcIm5vbmVcIixkOlwiTTAgMGgxOHYxOEgwelwifSkpKSl9ZnVuY3Rpb24geShlKXt2YXIgdD1pKE9iamVjdChtLnVzZVN0YXRlKSghMSksMiksbj10WzBdLG89dFsxXSxyPWkoT2JqZWN0KG0udXNlU3RhdGUpKCExKSwyKSxhPXJbMF0sYz1yWzFdLHU9ZS50YWcsbD1lLnR5cGUscz1lLmNsYXNzTmFtZSxmPWUuZGlzYWJsZWRTdHlsZSxkPWUuYnV0dG9uVGV4dCx5PWUuY2hpbGRyZW4sdj1lLnJlbmRlcixTPWUudGhlbWUsaj1lLmljb24sTz1lLmRpc2FibGVkLHg9aCh7b25TdWNjZXNzOmUub25TdWNjZXNzLG9uQXV0b0xvYWRGaW5pc2hlZDplLm9uQXV0b0xvYWRGaW5pc2hlZCxvblJlcXVlc3Q6ZS5vblJlcXVlc3Qsb25GYWlsdXJlOmUub25GYWlsdXJlLG9uU2NyaXB0TG9hZEZhaWx1cmU6ZS5vblNjcmlwdExvYWRGYWlsdXJlLGNsaWVudElkOmUuY2xpZW50SWQsY29va2llUG9saWN5OmUuY29va2llUG9saWN5LGxvZ2luSGludDplLmxvZ2luSGludCxob3N0ZWREb21haW46ZS5ob3N0ZWREb21haW4sYXV0b0xvYWQ6ZS5hdXRvTG9hZCxpc1NpZ25lZEluOmUuaXNTaWduZWRJbixmZXRjaEJhc2ljUHJvZmlsZTplLmZldGNoQmFzaWNQcm9maWxlLHJlZGlyZWN0VXJpOmUucmVkaXJlY3RVcmksZGlzY292ZXJ5RG9jczplLmRpc2NvdmVyeURvY3MsdXhNb2RlOmUudXhNb2RlLHNjb3BlOmUuc2NvcGUsYWNjZXNzVHlwZTplLmFjY2Vzc1R5cGUscmVzcG9uc2VUeXBlOmUucmVzcG9uc2VUeXBlLGpzU3JjOmUuanNTcmMscHJvbXB0OmUucHJvbXB0fSksST14LnNpZ25Jbix3PU98fCF4LmxvYWRlZDtpZih2KXJldHVybiB2KHtvbkNsaWNrOkksZGlzYWJsZWQ6d30pO3ZhciBrPXtiYWNrZ3JvdW5kQ29sb3I6XCJkYXJrXCI9PT1TP1wicmdiKDY2LCAxMzMsIDI0NClcIjpcIiNmZmZcIixkaXNwbGF5OlwiaW5saW5lLWZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY29sb3I6XCJkYXJrXCI9PT1TP1wiI2ZmZlwiOlwicmdiYSgwLCAwLCAwLCAuNTQpXCIsYm94U2hhZG93OlwiMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMjQpLCAwIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjQpXCIscGFkZGluZzowLGJvcmRlclJhZGl1czoyLGJvcmRlcjpcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLGZvbnRTaXplOjE0LGZvbnRXZWlnaHQ6XCI1MDBcIixmb250RmFtaWx5OlwiUm9ib3RvLCBzYW5zLXNlcmlmXCJ9LEE9e2N1cnNvcjpcInBvaW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6XCJkYXJrXCI9PT1TP1wiIzMzNjdENlwiOlwiI2VlZVwiLGNvbG9yOlwiZGFya1wiPT09Uz9cIiNmZmZcIjpcInJnYmEoMCwgMCwgMCwgLjU0KVwiLG9wYWNpdHk6MX0sXz13P09iamVjdC5hc3NpZ24oe30sayxmKTphP09iamVjdC5hc3NpZ24oe30sayxBKTpuP09iamVjdC5hc3NpZ24oe30sayx7Y3Vyc29yOlwicG9pbnRlclwiLG9wYWNpdHk6Ljl9KTprO3JldHVybiBiLmEuY3JlYXRlRWxlbWVudCh1LHtvbk1vdXNlRW50ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbyghMCl9LG9uTW91c2VMZWF2ZTpmdW5jdGlvbigpe28oITEpLGMoITEpfSxvbk1vdXNlRG93bjpmdW5jdGlvbigpe3JldHVybiBjKCEwKX0sb25Nb3VzZVVwOmZ1bmN0aW9uKCl7cmV0dXJuIGMoITEpfSxvbkNsaWNrOkksc3R5bGU6Xyx0eXBlOmwsZGlzYWJsZWQ6dyxjbGFzc05hbWU6c30sW2omJmIuYS5jcmVhdGVFbGVtZW50KGcse2tleToxLGFjdGl2ZTphfSksYi5hLmNyZWF0ZUVsZW1lbnQocCx7aWNvbjpqLGtleToyfSx5fHxkKV0pfW4ucih0KSxuLmQodCxcImRlZmF1bHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gU30pKSxuLmQodCxcIkdvb2dsZUxvZ2luXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFN9KSksbi5kKHQsXCJHb29nbGVMb2dvdXRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gT30pKSxuLmQodCxcInVzZUdvb2dsZUxvZ2luXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSksbi5kKHQsXCJ1c2VHb29nbGVMb2dvdXRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gan0pKTt2YXIgbT1uKDApLGI9bi5uKG0pLGg9KG4oMSksZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXt2YXIgdD1lLmdldEJhc2ljUHJvZmlsZSgpLG49ZS5nZXRBdXRoUmVzcG9uc2UoITApO2UuZ29vZ2xlSWQ9dC5nZXRJZCgpLGUudG9rZW5PYmo9bixlLnRva2VuSWQ9bi5pZF90b2tlbixlLmFjY2Vzc1Rva2VuPW4uYWNjZXNzX3Rva2VuLGUucHJvZmlsZU9iaj17Z29vZ2xlSWQ6dC5nZXRJZCgpLGltYWdlVXJsOnQuZ2V0SW1hZ2VVcmwoKSxlbWFpbDp0LmdldEVtYWlsKCksbmFtZTp0LmdldE5hbWUoKSxnaXZlbk5hbWU6dC5nZXRHaXZlbk5hbWUoKSxmYW1pbHlOYW1lOnQuZ2V0RmFtaWx5TmFtZSgpfSxpKGUpfWZ1bmN0aW9uIG4oZSl7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCgpLFApe3ZhciBuPXdpbmRvdy5nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLG89e3Byb21wdDpMfTtwKCksXCJjb2RlXCI9PT1fP24uZ3JhbnRPZmZsaW5lQWNjZXNzKG8pLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBpKGUpfSksKGZ1bmN0aW9uKGUpe3JldHVybiBsKGUpfSkpOm4uc2lnbkluKG8pLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiB0KGUpfSksKGZ1bmN0aW9uKGUpe3JldHVybiBsKGUpfSkpfX12YXIgcj1lLm9uU3VjY2VzcyxpPXZvaWQgMD09PXI/ZnVuY3Rpb24oKXt9OnIsYT1lLm9uQXV0b0xvYWRGaW5pc2hlZCxjPXZvaWQgMD09PWE/ZnVuY3Rpb24oKXt9OmEsdT1lLm9uRmFpbHVyZSxsPXZvaWQgMD09PXU/ZnVuY3Rpb24oKXt9OnUscz1lLm9uUmVxdWVzdCxwPXZvaWQgMD09PXM/ZnVuY3Rpb24oKXt9OnMsZz1lLm9uU2NyaXB0TG9hZEZhaWx1cmUseT1lLmNsaWVudElkLGI9ZS5jb29raWVQb2xpY3ksaD1lLmxvZ2luSGludCx2PWUuaG9zdGVkRG9tYWluLFM9ZS5hdXRvTG9hZCxqPWUuaXNTaWduZWRJbixPPWUuZmV0Y2hCYXNpY1Byb2ZpbGUseD1lLnJlZGlyZWN0VXJpLEk9ZS5kaXNjb3ZlcnlEb2NzLHc9ZS51eE1vZGUsaz1lLnNjb3BlLEE9ZS5hY2Nlc3NUeXBlLF89ZS5yZXNwb25zZVR5cGUsRT1lLmpzU3JjLFQ9dm9pZCAwPT09RT9cImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiOkUsTD1lLnByb21wdCxNPW8oT2JqZWN0KG0udXNlU3RhdGUpKCExKSwyKSxQPU1bMF0sQz1NWzFdO3JldHVybiBPYmplY3QobS51c2VFZmZlY3QpKChmdW5jdGlvbigpe3ZhciBlPSExLG49Z3x8bDtyZXR1cm4gZihkb2N1bWVudCxcInNjcmlwdFwiLFwiZ29vZ2xlLWxvZ2luXCIsVCwoZnVuY3Rpb24oKXt2YXIgbz17Y2xpZW50X2lkOnksY29va2llX3BvbGljeTpiLGxvZ2luX2hpbnQ6aCxob3N0ZWRfZG9tYWluOnYsZmV0Y2hfYmFzaWNfcHJvZmlsZTpPLGRpc2NvdmVyeURvY3M6SSx1eF9tb2RlOncscmVkaXJlY3RfdXJpOngsc2NvcGU6ayxhY2Nlc3NfdHlwZTpBfTtcImNvZGVcIj09PV8mJihvLmFjY2Vzc190eXBlPVwib2ZmbGluZVwiKSx3aW5kb3cuZ2FwaS5sb2FkKFwiYXV0aDJcIiwoZnVuY3Rpb24oKXt2YXIgcj13aW5kb3cuZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtyP3IudGhlbigoZnVuY3Rpb24oKXtlfHwoaiYmci5pc1NpZ25lZEluLmdldCgpPyhDKCEwKSxjKCEwKSx0KHIuY3VycmVudFVzZXIuZ2V0KCkpKTooQyghMCksYyghMSkpKX0pLChmdW5jdGlvbihlKXtsKGUpfSkpOndpbmRvdy5nYXBpLmF1dGgyLmluaXQobykudGhlbigoZnVuY3Rpb24obil7aWYoIWUpe0MoITApO3ZhciBvPWomJm4uaXNTaWduZWRJbi5nZXQoKTtjKG8pLG8mJnQobi5jdXJyZW50VXNlci5nZXQoKSl9fSksKGZ1bmN0aW9uKGUpe0MoITApLGMoITEpLG4oZSl9KSl9KSl9KSwoZnVuY3Rpb24oZSl7bihlKX0pKSxmdW5jdGlvbigpe2U9ITAsZChkb2N1bWVudCxcImdvb2dsZS1sb2dpblwiKX19KSxbXSksT2JqZWN0KG0udXNlRWZmZWN0KSgoZnVuY3Rpb24oKXtTJiZuKCl9KSxbUF0pLHtzaWduSW46bixsb2FkZWQ6UH19KTtmdW5jdGlvbiB2KGUpe3ZhciB0PWwoT2JqZWN0KG0udXNlU3RhdGUpKCExKSwyKSxuPXRbMF0sbz10WzFdLHI9bChPYmplY3QobS51c2VTdGF0ZSkoITEpLDIpLGk9clswXSxhPXJbMV0sYz1lLnRhZyx1PWUudHlwZSxzPWUuY2xhc3NOYW1lLGY9ZS5kaXNhYmxlZFN0eWxlLGQ9ZS5idXR0b25UZXh0LHk9ZS5jaGlsZHJlbixoPWUucmVuZGVyLHY9ZS50aGVtZSxTPWUuaWNvbixPPWUuZGlzYWJsZWQseD1qKHtqc1NyYzplLmpzU3JjLG9uRmFpbHVyZTplLm9uRmFpbHVyZSxvblNjcmlwdExvYWRGYWlsdXJlOmUub25TY3JpcHRMb2FkRmFpbHVyZSxjbGllbnRJZDplLmNsaWVudElkLGNvb2tpZVBvbGljeTplLmNvb2tpZVBvbGljeSxsb2dpbkhpbnQ6ZS5sb2dpbkhpbnQsaG9zdGVkRG9tYWluOmUuaG9zdGVkRG9tYWluLGZldGNoQmFzaWNQcm9maWxlOmUuZmV0Y2hCYXNpY1Byb2ZpbGUsZGlzY292ZXJ5RG9jczplLmRpc2NvdmVyeURvY3MsdXhNb2RlOmUudXhNb2RlLHJlZGlyZWN0VXJpOmUucmVkaXJlY3RVcmksc2NvcGU6ZS5zY29wZSxhY2Nlc3NUeXBlOmUuYWNjZXNzVHlwZSxvbkxvZ291dFN1Y2Nlc3M6ZS5vbkxvZ291dFN1Y2Nlc3N9KSxJPXguc2lnbk91dCx3PU98fCF4LmxvYWRlZDtpZihoKXJldHVybiBoKHtvbkNsaWNrOkksZGlzYWJsZWQ6d30pO3ZhciBrPXtiYWNrZ3JvdW5kQ29sb3I6XCJkYXJrXCI9PT12P1wicmdiKDY2LCAxMzMsIDI0NClcIjpcIiNmZmZcIixkaXNwbGF5OlwiaW5saW5lLWZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsY29sb3I6XCJkYXJrXCI9PT12P1wiI2ZmZlwiOlwicmdiYSgwLCAwLCAwLCAuNTQpXCIsYm94U2hhZG93OlwiMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMjQpLCAwIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjQpXCIscGFkZGluZzowLGJvcmRlclJhZGl1czoyLGJvcmRlcjpcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLGZvbnRTaXplOjE0LGZvbnRXZWlnaHQ6XCI1MDBcIixmb250RmFtaWx5OlwiUm9ib3RvLCBzYW5zLXNlcmlmXCJ9LEE9e2N1cnNvcjpcInBvaW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6XCJkYXJrXCI9PT12P1wiIzMzNjdENlwiOlwiI2VlZVwiLGNvbG9yOlwiZGFya1wiPT09dj9cIiNmZmZcIjpcInJnYmEoMCwgMCwgMCwgLjU0KVwiLG9wYWNpdHk6MX0sXz13P09iamVjdC5hc3NpZ24oe30sayxmKTppP09iamVjdC5hc3NpZ24oe30sayxBKTpuP09iamVjdC5hc3NpZ24oe30sayx7Y3Vyc29yOlwicG9pbnRlclwiLG9wYWNpdHk6Ljl9KTprO3JldHVybiBiLmEuY3JlYXRlRWxlbWVudChjLHtvbk1vdXNlRW50ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbyghMCl9LG9uTW91c2VMZWF2ZTpmdW5jdGlvbigpe28oITEpLGEoITEpfSxvbk1vdXNlRG93bjpmdW5jdGlvbigpe3JldHVybiBhKCEwKX0sb25Nb3VzZVVwOmZ1bmN0aW9uKCl7cmV0dXJuIGEoITEpfSxvbkNsaWNrOkksc3R5bGU6Xyx0eXBlOnUsZGlzYWJsZWQ6dyxjbGFzc05hbWU6c30sW1MmJmIuYS5jcmVhdGVFbGVtZW50KGcse2tleToxLGFjdGl2ZTppfSksYi5hLmNyZWF0ZUVsZW1lbnQocCx7aWNvbjpTLGtleToyfSx5fHxkKV0pfXkuZGVmYXVsdFByb3BzPXt0eXBlOlwiYnV0dG9uXCIsdGFnOlwiYnV0dG9uXCIsYnV0dG9uVGV4dDpcIlNpZ24gaW4gd2l0aCBHb29nbGVcIixzY29wZTpcInByb2ZpbGUgZW1haWxcIixhY2Nlc3NUeXBlOlwib25saW5lXCIscHJvbXB0OlwiXCIsY29va2llUG9saWN5Olwic2luZ2xlX2hvc3Rfb3JpZ2luXCIsZmV0Y2hCYXNpY1Byb2ZpbGU6ITAsaXNTaWduZWRJbjohMSx1eE1vZGU6XCJwb3B1cFwiLGRpc2FibGVkU3R5bGU6e29wYWNpdHk6LjZ9LGljb246ITAsdGhlbWU6XCJsaWdodFwiLG9uUmVxdWVzdDpmdW5jdGlvbigpe319O3ZhciBTPXksaj1mdW5jdGlvbihlKXt2YXIgdD1lLmpzU3JjLG49dm9pZCAwPT09dD9cImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiOnQsbz1lLm9uRmFpbHVyZSxyPWUub25TY3JpcHRMb2FkRmFpbHVyZSxpPWUuY2xpZW50SWQsYT1lLmNvb2tpZVBvbGljeSx1PWUubG9naW5IaW50LGw9ZS5ob3N0ZWREb21haW4scz1lLmZldGNoQmFzaWNQcm9maWxlLHA9ZS5kaXNjb3ZlcnlEb2NzLGc9ZS51eE1vZGUseT1lLnJlZGlyZWN0VXJpLGI9ZS5zY29wZSxoPWUuYWNjZXNzVHlwZSx2PWUub25Mb2dvdXRTdWNjZXNzLFM9YyhPYmplY3QobS51c2VTdGF0ZSkoITEpLDIpLGo9U1swXSxPPVNbMV0seD1PYmplY3QobS51c2VDYWxsYmFjaykoKGZ1bmN0aW9uKCl7aWYod2luZG93LmdhcGkpe3ZhciBlPXdpbmRvdy5nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO251bGwhPWUmJmUudGhlbigoZnVuY3Rpb24oKXtlLnNpZ25PdXQoKS50aGVuKChmdW5jdGlvbigpe2UuZGlzY29ubmVjdCgpLHYoKX0pKX0pLChmdW5jdGlvbihlKXtyZXR1cm4gbyhlKX0pKX19KSxbdl0pO3JldHVybiBPYmplY3QobS51c2VFZmZlY3QpKChmdW5jdGlvbigpe3ZhciBlPXJ8fG87cmV0dXJuIGYoZG9jdW1lbnQsXCJzY3JpcHRcIixcImdvb2dsZS1sb2dpblwiLG4sKGZ1bmN0aW9uKCl7dmFyIHQ9e2NsaWVudF9pZDppLGNvb2tpZV9wb2xpY3k6YSxsb2dpbl9oaW50OnUsaG9zdGVkX2RvbWFpbjpsLGZldGNoX2Jhc2ljX3Byb2ZpbGU6cyxkaXNjb3ZlcnlEb2NzOnAsdXhfbW9kZTpnLHJlZGlyZWN0X3VyaTp5LHNjb3BlOmIsYWNjZXNzX3R5cGU6aH07d2luZG93LmdhcGkubG9hZChcImF1dGgyXCIsKGZ1bmN0aW9uKCl7d2luZG93LmdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk/TyghMCk6d2luZG93LmdhcGkuYXV0aDIuaW5pdCh0KS50aGVuKChmdW5jdGlvbigpe3JldHVybiBPKCEwKX0pLChmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX0pKX0pKX0pLChmdW5jdGlvbih0KXtlKHQpfSkpLGZ1bmN0aW9uKCl7ZChkb2N1bWVudCxcImdvb2dsZS1sb2dpblwiKX19KSxbXSkse3NpZ25PdXQ6eCxsb2FkZWQ6an19O3YuZGVmYXVsdFByb3BzPXt0eXBlOlwiYnV0dG9uXCIsdGFnOlwiYnV0dG9uXCIsYnV0dG9uVGV4dDpcIkxvZ291dCBvZiBHb29nbGVcIixkaXNhYmxlZFN0eWxlOntvcGFjaXR5Oi42fSxpY29uOiEwLHRoZW1lOlwibGlnaHRcIixqc1NyYzpcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wifTt2YXIgTz12fV0sdC5jPW8sdC5kPWZ1bmN0aW9uKGUsbixvKXt0Lm8oZSxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSx0LnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sdC50PWZ1bmN0aW9uKGUsbil7aWYoMSZuJiYoZT10KGUpKSw4Jm4pcmV0dXJuIGU7aWYoNCZuJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYodC5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJm4mJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKXQuZChvLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LHQubj1mdW5jdGlvbihlKXt2YXIgbj1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKG4sXCJhXCIsbiksbn0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCJcIix0KHQucz00KTtmdW5jdGlvbiB0KGUpe2lmKG9bZV0pcmV0dXJuIG9bZV0uZXhwb3J0czt2YXIgcj1vW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gbltlXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyx0KSxyLmw9ITAsci5leHBvcnRzfXZhciBuLG99KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==