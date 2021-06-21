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
      srcBlob.slice(5);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4 mb-5",
          children: srcBlob ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: srcBlob,
            className: "img img-fluid mb-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 37
          }, _this) : "🤷 Can't find the user image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [showError(), showLoading(), showSuccess(), "update form", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, _this), updateForm()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsIkJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzbGljZSIsInN0YXRlIiwiaW5pdCIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwidW5kZWZpbmVkIiwic2VuZGVyRW1haWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInVzZXJGb3JtRGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVQcm9maWxlIiwiZGF0YSIsInVwZGF0ZSIsInVwZGF0ZUZvcm0iLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJzaG93TG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDO0FBQ2pDQyxZQUFRLEVBQUUsRUFEdUI7QUFFakNDLFFBQUksRUFBRSxFQUYyQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxZQUFRLEVBQUUsRUFKdUI7QUFLakND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QUFBLHdCQUNoQjtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFxQyxXQUFLLEVBQUU7QUFBQ0YsZUFBTyxFQUFFN0MsT0FBTyxHQUFHLEVBQUgsR0FBUTtBQUF6QixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURnQjtBQUFBLEdBQXBCOztBQU1BLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxvQkFDS1UsT0FBTyxnQkFBSTtBQUFLLGVBQUcsRUFBRUEsT0FBVjtBQUFtQixxQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUosR0FBMEQ7QUFEdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEscUJBQ0trQyxTQUFTLEVBRGQsRUFFS0csV0FBVyxFQUZoQixFQUdLRCxXQUFXLEVBSGhCLDhCQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosRUFNS0gsVUFBVSxFQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtQkgsQ0F4TEQ7O0dBQU1uRCxhOztLQUFBQSxhO0FBMExTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL3VwZGF0ZS45ZjQ0ZDg3ZGU3Y2JiMjIyYjQxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldFByb2ZpbGUsIHVwZGF0ZVByb2ZpbGUsIHVwZGF0ZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdXNlclwiO1xyXG5pbXBvcnQge2dldENvb2tpZSwgaXNBdXRofSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5jb25zdCBQcm9maWxlVXBkYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHBob3RvOiAnJyxcclxuICAgICAgICB1c2VyRGF0YTogJycsXHJcbiAgICAgICAgYWJvdXQ6ICcnLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcbiAgICBsZXQge3VzZXJuYW1lLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHN1Y2Nlc3MsIGVycm9yLCBsb2FkaW5nLCBwaG90bywgdXNlckRhdGEsIGFib3V0fSA9IHZhbHVlc1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7QVBJfS91c2VyL3Bob3RvLyR7dXNlcm5hbWV9YFxyXG4gICAgY29uc3QgW3tcclxuICAgICAgICBzcmNCbG9iLFxyXG4gICAgICAgIHNyY0RhdGFVcmlcclxuICAgIH0sIHNldFNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3JjQmxvYjogbnVsbCxcclxuICAgICAgICBzcmNEYXRhVXJpOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1VubW91bnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gYmxvYi5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNVbm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIHNyY0Jsb2Iuc2xpY2UoNSlcclxuICAgICAgICAgICAgICAgIHNldFNyYyhzdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY0Jsb2JcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICBnZXRQcm9maWxlKHRva2VuKS50aGVuKHByb2ZpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvZmlsZS5lcnJvciB8fCB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogcHJvZmlsZS5lcnJvciA/PyB1bmRlZmluZWR9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiBwcm9maWxlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFib3V0OiBwcm9maWxlLmFib3V0LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHVzZXJGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgdXNlckZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIHVzZXJEYXRhOiB1c2VyRm9ybURhdGEsIGVycm9yOiAnJywgc3VjY2VzczogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgIHVwZGF0ZVByb2ZpbGUodXNlckRhdGEsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZShkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXJFbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IGRhdGEuYWJvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBkYXRhLnBob3RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGluaXQoKVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgY29uc3QgdXBkYXRlRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlIHBob3RvXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90bycpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+QWJvdXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXthYm91dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnYWJvdXQnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndXNlcm5hbWUnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgUHJvZmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBsb2FkaW5nID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgTG9hZGluZy4uLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcmNCbG9iID8gIDxpbWcgc3JjPXtzcmNCbG9ifSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIG1iLTNcIi8+IDogXCLwn6S3IENhbid0IGZpbmQgdGhlIHVzZXIgaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlRm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGRhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=