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
            password: data.password,
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
          autocomplete: "off",
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
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          autocomplete: "off",
          className: "form-control",
          value: email,
          onChange: handleChange('email')
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
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          autocomplete: "off",
          type: "password",
          autoComplete: "off",
          className: "form-control",
          value: password,
          onChange: handleChange('password')
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
          lineNumber: 141,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "textarea",
          autocomplete: "off",
          className: "form-control",
          value: about,
          onChange: handleChange('about')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
      lineNumber: 155,
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
      lineNumber: 161,
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
      lineNumber: 167,
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
            lineNumber: 177,
            columnNumber: 37
          }, _this) : "🤷 Can't find the user image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [showError(), showLoading(), showSuccess(), "update form", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, _this), updateForm()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJpbml0IiwiZ2V0UHJvZmlsZSIsInByb2ZpbGUiLCJ1bmRlZmluZWQiLCJzZW5kZXJFbWFpbCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwidXNlckZvcm1EYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVByb2ZpbGUiLCJkYXRhIiwidXBkYXRlIiwidXBkYXRlRm9ybSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInNob3dMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUM7QUFDakNDLFlBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0Ms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T0FBTyxHQUFHLEVBQUgsR0FBUTtBQUF6QixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURnQjtBQUFBLEdBQXBCOztBQU1BLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxvQkFDS1UsT0FBTyxnQkFBSTtBQUFLLGVBQUcsRUFBRUEsT0FBVjtBQUFtQixlQUFHLFlBQUtoQixRQUFMLENBQXRCO0FBQXVDLHFCQUFTLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSixHQUE4RTtBQUQxRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxxQkFDS2tELFNBQVMsRUFEZCxFQUVLRyxXQUFXLEVBRmhCLEVBR0tELFdBQVcsRUFIaEIsOEJBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQU1LSCxVQUFVLEVBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW1CSCxDQXpMRDs7R0FBTW5ELGE7O0tBQUFBLGE7QUEyTFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvdXBkYXRlLmMzOWZlMGIyNWRiNDYwNGU3NjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0UHJvZmlsZSwgdXBkYXRlUHJvZmlsZSwgdXBkYXRlfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy91c2VyXCI7XHJcbmltcG9ydCB7Z2V0Q29va2llLCBpc0F1dGh9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHtBUEl9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVVcGRhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgIHVzZXJEYXRhOiAnJyxcclxuICAgICAgICBhYm91dDogJycsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuICAgIGxldCB7dXNlcm5hbWUsIG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgc3VjY2VzcywgZXJyb3IsIGxvYWRpbmcsIHBob3RvLCB1c2VyRGF0YSwgYWJvdXR9ID0gdmFsdWVzXHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7QVBJfS91c2VyL3Bob3RvLyR7dXNlcm5hbWV9YFxyXG4gICAgY29uc3QgW3tcclxuICAgICAgICBzcmNCbG9iLFxyXG4gICAgICAgIHNyY0RhdGFVcmlcclxuICAgIH0sIHNldFNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3JjQmxvYjogbnVsbCxcclxuICAgICAgICBzcmNEYXRhVXJpOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1VubW91bnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gYmxvYi5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNVbm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHt0eXBlOiBcImltYWdlL2pwZ1wifSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyY0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFNyYyhzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY0Jsb2JcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3VzZXJuYW1lXSlcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2ZpbGUodG9rZW4pLnRoZW4ocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlLmVycm9yIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBwcm9maWxlLmVycm9yID8/IHVuZGVmaW5lZH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IHByb2ZpbGUuYWJvdXQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgdXNlckZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICB1c2VyRm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgdXNlckRhdGE6IHVzZXJGb3JtRGF0YSwgZXJyb3I6ICcnLCBzdWNjZXNzOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZSh1c2VyRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogZGF0YS5hYm91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IGRhdGEucGhvdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGluaXQoKVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgY29uc3QgdXBkYXRlRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlIHBob3RvXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90bycpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5BYm91dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdhYm91dCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj4qL31cclxuICAgICAgICAgICAgey8qICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VXNlcm5hbWU8L2xhYmVsPiovfVxyXG4gICAgICAgICAgICB7LyogICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd1c2VybmFtZScpfS8+Ki99XHJcbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBQcm9maWxlIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IGxvYWRpbmcgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uLi5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NyY0Jsb2IgPyAgPGltZyBzcmM9e3NyY0Jsb2J9IGFsdD17YCR7dXNlcm5hbWV9YH0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBtYi0zXCIvPiA6IFwi8J+ktyBDYW4ndCBmaW5kIHRoZSB1c2VyIGltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlVXBkYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9