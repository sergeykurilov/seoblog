webpackHotUpdate_N_E("pages/user/update",{

/***/ "./components/auth/ProfileUpdate.js":
/*!******************************************!*\
  !*** ./components/auth/ProfileUpdate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\auth\\ProfileUpdate.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ProfileUpdate = function ProfileUpdate() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    username: '',
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    loading: false,
    photo: '',
    userData: '',
    about: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("token");
  var username = values.username,
      name = values.name,
      email = values.email,
      password = values.password,
      success = values.success,
      error = values.error,
      loading = values.loading,
      photo = values.photo,
      userData = values.userData,
      about = values.about;
  var url = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user/photo/").concat(username);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    srcBlob: null,
    srcDataUri: null
  }),
      _useState2$ = _useState2[0],
      srcBlob = _useState2$.srcBlob,
      srcDataUri = _useState2$.srcDataUri,
      setSrc = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var isUnmounted = false;
    fetch(url, {}).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return blob.arrayBuffer();
    }).then(function (arrayBuffer) {
      if (isUnmounted) {
        return;
      }

      var blob = new Blob([arrayBuffer]);
      var srcBlob = URL.createObjectURL(blob);
      setSrc(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          srcBlob: srcBlob
        });
      });
    });
    return function () {
      isUnmounted = true;
    };
  }, []);

  var init = function init() {
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["getProfile"])(token).then(function (profile) {
      if (profile.error || undefined) {
        var _profile$error;

        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: (_profile$error = profile.error) !== null && _profile$error !== void 0 ? _profile$error : undefined
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          name: profile.name,
          username: profile.username,
          senderEmail: profile.email,
          about: profile.about
        }));
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      var userFormData = new FormData();
      userFormData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "userData", userFormData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", ''), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "success", false), _objectSpread2)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["updateProfile"])(userData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          success: false,
          loading: false
        }));
      } else {
        Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["update"])(data, function () {
          setValues(_objectSpread(_objectSpread({}, values), {}, {
            name: data.name,
            username: data.username,
            senderEmail: data.email,
            about: data.about,
            photo: data.photo,
            success: true,
            loading: false
          }));
        });
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    init();
  }, []);

  var updateForm = function updateForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "btn btn-outline-info",
          children: ["Profile photo", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            accept: "image/*",
            hidden: true,
            className: "form-control",
            onChange: handleChange('photo')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: name,
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          value: password,
          onChange: handleChange('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          value: email,
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "textarea",
          className: "form-control",
          value: about,
          onChange: handleChange('about')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: username,
          onChange: handleChange('username')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this);
  };

  var showError = function showError() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-success",
      style: {
        display: success ? '' : 'none'
      },
      children: "Profile was successfully updated"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }, _this);
  };

  var showLoading = function showLoading() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-success",
      style: {
        display: loading ? '' : 'none'
      },
      children: "Loading....."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }, _this);
  };

  function createObjectURL(file) {
    if (window.webkitURL) {
      return window.webkitURL.createObjectURL(file);
    } else if (window.URL && window.URL.createObjectURL) {
      return window.URL.createObjectURL(file);
    } else {
      return null;
    }
  }

  var urlBlob = createObjectURL(srcBlob);
  console.log(urlBlob);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4 mb-5",
          children: srcBlob ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: srcBlob,
            alt: "".concat(username),
            className: "img img-fluid mb-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 37
          }, _this) : "🤷 Can't find the user image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [showError(), showLoading(), showSuccess(), "update form", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, _this), updateForm()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ProfileUpdate, "hF1KD5ByF7xyE+Tu8/pr3i98LM8=");

_c = ProfileUpdate;
/* harmony default export */ __webpack_exports__["default"] = (ProfileUpdate);

var _c;

$RefreshReg$(_c, "ProfileUpdate");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsIkJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0ZSIsImluaXQiLCJnZXRQcm9maWxlIiwicHJvZmlsZSIsInVuZGVmaW5lZCIsInNlbmRlckVtYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJ1c2VyRm9ybURhdGEiLCJGb3JtRGF0YSIsInNldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUHJvZmlsZSIsImRhdGEiLCJ1cGRhdGUiLCJ1cGRhdGVGb3JtIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwic2hvd0xvYWRpbmciLCJmaWxlIiwid2luZG93Iiwid2Via2l0VVJMIiwidXJsQmxvYiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQztBQUNqQ0MsWUFBUSxFQUFFLEVBRHVCO0FBRWpDQyxRQUFJLEVBQUUsRUFGMkI7QUFHakND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Qiw4QkFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLEVBTUtILFVBQVUsRUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUJILENBbE1EOztHQUFNbEQsYTs7S0FBQUEsYTtBQW9NU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci91cGRhdGUuYmNmODA0YWM0ZjVmNzQwN2VhZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnZXRQcm9maWxlLCB1cGRhdGVQcm9maWxlLCB1cGRhdGV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHtnZXRDb29raWUsIGlzQXV0aH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge0FQSX0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZVVwZGF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBwaG90bzogJycsXHJcbiAgICAgICAgdXNlckRhdGE6ICcnLFxyXG4gICAgICAgIGFib3V0OiAnJyxcclxuICAgIH0pXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG4gICAgbGV0IHt1c2VybmFtZSwgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBzdWNjZXNzLCBlcnJvciwgbG9hZGluZywgcGhvdG8sIHVzZXJEYXRhLCBhYm91dH0gPSB2YWx1ZXNcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke0FQSX0vdXNlci9waG90by8ke3VzZXJuYW1lfWBcclxuICAgIGNvbnN0IFt7XHJcbiAgICAgICAgc3JjQmxvYixcclxuICAgICAgICBzcmNEYXRhVXJpXHJcbiAgICB9LCBzZXRTcmNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNyY0Jsb2I6IG51bGwsXHJcbiAgICAgICAgc3JjRGF0YVVyaTogbnVsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaXNVbm1vdW50ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxyXG4gICAgICAgICAgICAudGhlbihibG9iID0+IGJsb2IuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzVW5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjQmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U3JjKHN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjQmxvYlxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2ZpbGUodG9rZW4pLnRoZW4ocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlLmVycm9yIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBwcm9maWxlLmVycm9yID8/IHVuZGVmaW5lZH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IHByb2ZpbGUuYWJvdXQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgdXNlckZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICB1c2VyRm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgdXNlckRhdGE6IHVzZXJGb3JtRGF0YSwgZXJyb3I6ICcnLCBzdWNjZXNzOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZSh1c2VyRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogZGF0YS5hYm91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IGRhdGEucGhvdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGUgcGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgaGlkZGVuIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5BYm91dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdhYm91dCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd1c2VybmFtZScpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBQcm9maWxlIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IGxvYWRpbmcgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uLi5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPYmplY3RVUkwgKCBmaWxlICkge1xyXG4gICAgICAgIGlmICggd2luZG93LndlYmtpdFVSTCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LlVSTCAmJiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsQmxvYiA9IGNyZWF0ZU9iamVjdFVSTCggc3JjQmxvYiApO1xyXG4gICAgY29uc29sZS5sb2codXJsQmxvYilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcmNCbG9iID8gIDxpbWcgc3JjPXtzcmNCbG9ifSBhbHQ9e2Ake3VzZXJuYW1lfWB9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWQgbWItM1wiLz4gOiBcIvCfpLcgQ2FuJ3QgZmluZCB0aGUgdXNlciBpbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVVwZGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==