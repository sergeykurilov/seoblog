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
  }, [username, about, email, password, photo]);

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
            lineNumber: 83,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: name,
          onChange: handleChange('name')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          value: password,
          onChange: handleChange('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          value: email,
          onChange: handleChange('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "textarea",
          className: "form-control",
          value: about,
          onChange: handleChange('about')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: username,
          onChange: handleChange('username')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 114,
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
      lineNumber: 120,
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
      lineNumber: 126,
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user/photo/").concat(username),
            alt: username,
            className: "img img-fluid mb-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [showError(), showLoading(), showSuccess(), "update form", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, _this), updateForm()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ProfileUpdate, "NDFpK5VeSarEu2X2srIa9YWVU90=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsImluaXQiLCJnZXRQcm9maWxlIiwidGhlbiIsInByb2ZpbGUiLCJ1bmRlZmluZWQiLCJzZW5kZXJFbWFpbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwidXNlckZvcm1EYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVByb2ZpbGUiLCJkYXRhIiwidXBkYXRlIiwidXNlRWZmZWN0IiwidXBkYXRlRm9ybSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInNob3dMb2FkaW5nIiwiQVBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUM7QUFDakNDLFlBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0MsU0FBSyxFQUFFLEVBTDBCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFdBQU8sRUFBRSxLQVB3QjtBQVFqQ0MsU0FBSyxFQUFFLEVBUjBCO0FBU2pDQyxZQUFRLEVBQUUsRUFUdUI7QUFVakNDLFNBQUssRUFBRTtBQVYwQixHQUFELENB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QXpCLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCO0FBQUEsR0FBcEI7O0FBU0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxZQUFLaUMsMkNBQUwseUJBQXVCdkMsUUFBdkIsQ0FBUjtBQUEyQyxlQUFHLEVBQUVBLFFBQWhEO0FBQTBELHFCQUFTLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLHFCQUNLbUMsU0FBUyxFQURkLEVBRUtHLFdBQVcsRUFGaEIsRUFHS0QsV0FBVyxFQUhoQiw4QkFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLEVBTUtILFVBQVUsRUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUJILENBbkpEOztHQUFNcEMsYTs7S0FBQUEsYTtBQXFKU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci91cGRhdGUuOTYzNjhjNjA4ZGY0ZTMyNmQ0Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnZXRQcm9maWxlLCB1cGRhdGVQcm9maWxlLCB1cGRhdGV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHtnZXRDb29raWUsIGlzQXV0aH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge0FQSX0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHBob3RvOiAnJyxcclxuICAgICAgICB1c2VyRGF0YTogJycsXHJcbiAgICAgICAgYWJvdXQ6ICcnLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcbiAgICBsZXQge3VzZXJuYW1lLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHN1Y2Nlc3MsIGVycm9yLCBsb2FkaW5nLCBwaG90bywgdXNlckRhdGEsIGFib3V0fSA9IHZhbHVlc1xyXG5cclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2ZpbGUodG9rZW4pLnRoZW4ocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlLmVycm9yIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBwcm9maWxlLmVycm9yID8/IHVuZGVmaW5lZH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IHByb2ZpbGUuYWJvdXQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgdXNlckZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICB1c2VyRm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgdXNlckRhdGE6IHVzZXJGb3JtRGF0YSwgZXJyb3I6ICcnLCBzdWNjZXNzOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZSh1c2VyRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogZGF0YS5hYm91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IGRhdGEucGhvdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpXHJcbiAgICB9LFt1c2VybmFtZSwgYWJvdXQsIGVtYWlsLHBhc3N3b3JkLCBwaG90b10pXHJcblxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZmlsZSBwaG90b1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBoaWRkZW4gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG8nKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkFib3V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17YWJvdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2Fib3V0Jyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3VzZXJuYW1lJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7ZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIFByb2ZpbGUgd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogbG9hZGluZyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi4uLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfS91c2VyL3Bob3RvLyR7dXNlcm5hbWV9YH0gYWx0PXt1c2VybmFtZX0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBtYi0zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVVwZGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==