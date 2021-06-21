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

      var blob = new Blob([arrayBuffer], {
        type: "image/jpg"
      });
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
  }, [username]);

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
          email: profile.email,
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
            lineNumber: 122,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: name,
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          value: password,
          onChange: handleChange('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          value: email,
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "textarea",
          className: "form-control",
          value: about,
          onChange: handleChange('about')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 153,
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
      lineNumber: 159,
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
      lineNumber: 165,
      columnNumber: 9
    }, _this);
  };

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
            lineNumber: 175,
            columnNumber: 37
          }, _this) : "🤷 Can't find the user image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [showError(), showLoading(), showSuccess(), "update form", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, _this), updateForm()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJpbml0IiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJ1bmRlZmluZWQiLCJzZW5kZXJFbWFpbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwidXNlckZvcm1EYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVByb2ZpbGUiLCJkYXRhIiwidXBkYXRlIiwidXBkYXRlRm9ybSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInNob3dMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUM7QUFDakNDLFlBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0Ms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QWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUNLVSxPQUFPLGdCQUFJO0FBQUssZUFBRyxFQUFFQSxPQUFWO0FBQW1CLGVBQUcsWUFBS2hCLFFBQUwsQ0FBdEI7QUFBdUMscUJBQVMsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKLEdBQThFO0FBRDFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLHFCQUNLa0QsU0FBUyxFQURkLEVBRUtHLFdBQVcsRUFGaEIsRUFHS0QsV0FBVyxFQUhoQiw4QkFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLEVBTUtILFVBQVUsRUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUJILENBdkxEOztHQUFNbkQsYTs7S0FBQUEsYTtBQXlMU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci91cGRhdGUuYjU3MjM0Yjc3YTE2YjdiYTQ3ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnZXRQcm9maWxlLCB1cGRhdGVQcm9maWxlLCB1cGRhdGV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHtnZXRDb29raWUsIGlzQXV0aH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge0FQSX0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZVVwZGF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBwaG90bzogJycsXHJcbiAgICAgICAgdXNlckRhdGE6ICcnLFxyXG4gICAgICAgIGFib3V0OiAnJyxcclxuICAgIH0pXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG4gICAgbGV0IHt1c2VybmFtZSwgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBzdWNjZXNzLCBlcnJvciwgbG9hZGluZywgcGhvdG8sIHVzZXJEYXRhLCBhYm91dH0gPSB2YWx1ZXNcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgJHtBUEl9L3VzZXIvcGhvdG8vJHt1c2VybmFtZX1gXHJcbiAgICBjb25zdCBbe1xyXG4gICAgICAgIHNyY0Jsb2IsXHJcbiAgICAgICAgc3JjRGF0YVVyaVxyXG4gICAgfSwgc2V0U3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzcmNCbG9iOiBudWxsLFxyXG4gICAgICAgIHNyY0RhdGFVcmk6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVW5tb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcclxuICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiBibG9iLmFycmF5QnVmZmVyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc1VubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSwge3R5cGU6IFwiaW1hZ2UvanBnXCJ9KVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjQmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U3JjKHN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjQmxvYlxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbdXNlcm5hbWVdKVxyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZmlsZSh0b2tlbikudGhlbihwcm9maWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2ZpbGUuZXJyb3IgfHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IHByb2ZpbGUuZXJyb3IgPz8gdW5kZWZpbmVkfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJvZmlsZS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJFbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBhYm91dDogcHJvZmlsZS5hYm91dCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCB1c2VyRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIHVzZXJGb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCB1c2VyRGF0YTogdXNlckZvcm1EYXRhLCBlcnJvcjogJycsIHN1Y2Nlc3M6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICB1cGRhdGVQcm9maWxlKHVzZXJEYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBzdWNjZXNzOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0OiBkYXRhLmFib3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogZGF0YS5waG90byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KClcclxuICAgIH0sW10pXHJcblxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZmlsZSBwaG90b1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBoaWRkZW4gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG8nKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkFib3V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17YWJvdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2Fib3V0Jyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPiovfVxyXG4gICAgICAgICAgICB7LyogICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Vc2VybmFtZTwvbGFiZWw+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3VzZXJuYW1lJyl9Lz4qL31cclxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7ZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIFByb2ZpbGUgd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogbG9hZGluZyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi4uLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3JjQmxvYiA/ICA8aW1nIHNyYz17c3JjQmxvYn0gYWx0PXtgJHt1c2VybmFtZX1gfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIG1iLTNcIi8+IDogXCLwn6S3IENhbid0IGZpbmQgdGhlIHVzZXIgaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGRhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=