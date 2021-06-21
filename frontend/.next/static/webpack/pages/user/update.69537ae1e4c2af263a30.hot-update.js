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
  var slicedBlob = srcBlog.slice(5);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJwaG90byIsInVzZXJEYXRhIiwiYWJvdXQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVybCIsIkFQSSIsInNyY0Jsb2IiLCJzcmNEYXRhVXJpIiwic2V0U3JjIiwidXNlRWZmZWN0IiwiaXNVbm1vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsIkJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzbGljZSIsInN0YXRlIiwiaW5pdCIsImdldFByb2ZpbGUiLCJwcm9maWxlIiwidW5kZWZpbmVkIiwic2VuZGVyRW1haWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInVzZXJGb3JtRGF0YSIsIkZvcm1EYXRhIiwic2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVQcm9maWxlIiwiZGF0YSIsInVwZGF0ZSIsInNsaWNlZEJsb2IiLCJzcmNCbG9nIiwidXBkYXRlRm9ybSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInNob3dMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUM7QUFDakNDLFlBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0MsU0FBSyxFQUFFLEVBTDBCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFdBQU8sRUFBRSxLQVB3QjtBQVFqQ0MsU0FBSyxFQUFFLEVBUjBCO0FBU2pDQyxZQUFRLEVBQUUsRUFUdUI7QUFVakNDLFNBQUssRUFBRTtBQVYwQixHQUFELENBRlo7QUFBQSxNQUVqQkMsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQWN4QixNQUFNQyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2QjtBQWR3QixNQWdCbkJiLFFBaEJtQixHQWdCaUVVLE1BaEJqRSxDQWdCbkJWLFFBaEJtQjtBQUFBLE1BZ0JUQyxJQWhCUyxHQWdCaUVTLE1BaEJqRSxDQWdCVFQsSUFoQlM7QUFBQSxNQWdCSEMsS0FoQkcsR0FnQmlFUSxNQWhCakUsQ0FnQkhSLEtBaEJHO0FBQUEsTUFnQklDLFFBaEJKLEdBZ0JpRU8sTUFoQmpFLENBZ0JJUCxRQWhCSjtBQUFBLE1BZ0JjRSxPQWhCZCxHQWdCaUVLLE1BaEJqRSxDQWdCY0wsT0FoQmQ7QUFBQSxNQWdCdUJELEtBaEJ2QixHQWdCaUVNLE1BaEJqRSxDQWdCdUJOLEtBaEJ2QjtBQUFBLE1BZ0I4QkUsT0FoQjlCLEdBZ0JpRUksTUFoQmpFLENBZ0I4QkosT0FoQjlCO0FBQUEsTUFnQnVDQyxLQWhCdkMsR0FnQmlFRyxNQWhCakUsQ0FnQnVDSCxLQWhCdkM7QUFBQSxNQWdCOENDLFFBaEI5QyxHQWdCaUVFLE1BaEJqRSxDQWdCOENGLFFBaEI5QztBQUFBLE1BZ0J3REMsS0FoQnhELEdBZ0JpRUMsTUFoQmpFLENBZ0J3REQsS0FoQnhEO0FBb0J4QixNQUFNSyxHQUFHLGFBQU1DLDJDQUFOLHlCQUF3QmYsUUFBeEIsQ0FBVDs7QUFwQndCLG1CQXdCWEQsc0RBQVEsQ0FBQztBQUNsQmlCLFdBQU8sRUFBRSxJQURTO0FBRWxCQyxjQUFVLEVBQUU7QUFGTSxHQUFELENBeEJHO0FBQUE7QUFBQSxNQXNCcEJELE9BdEJvQixlQXNCcEJBLE9BdEJvQjtBQUFBLE1BdUJwQkMsVUF2Qm9CLGVBdUJwQkEsVUF2Qm9CO0FBQUEsTUF3QnJCQyxNQXhCcUI7O0FBNkJ4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsV0FBVyxHQUFHLEtBQWxCO0FBRUFDLFNBQUssQ0FBQ1AsR0FBRCxFQUFNLEVBQU4sQ0FBTCxDQUVLUSxJQUZMLENBRVUsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FGbEIsRUFHS0YsSUFITCxDQUdVLFVBQUFFLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFdBQUwsRUFBSjtBQUFBLEtBSGQsRUFJS0gsSUFKTCxDQUlVLFVBQUFHLFdBQVcsRUFBSTtBQUVqQixVQUFHTCxXQUFILEVBQWdCO0FBQ1o7QUFDSDs7QUFFRCxVQUFNSSxJQUFJLEdBQUcsSUFBSUUsSUFBSixDQUFTLENBQUNELFdBQUQsQ0FBVCxDQUFiO0FBQ0EsVUFBTVQsT0FBTyxHQUFHVyxHQUFHLENBQUNDLGVBQUosQ0FBb0JKLElBQXBCLENBQWhCO0FBQ0FSLGFBQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQ7QUFDQVgsWUFBTSxDQUFDLFVBQUFZLEtBQUs7QUFBQSwrQ0FDTEEsS0FESztBQUVSZCxpQkFBTyxFQUFQQTtBQUZRO0FBQUEsT0FBTixDQUFOO0FBS0gsS0FsQkw7QUFvQkEsV0FBTyxZQUFNO0FBQ1RJLGlCQUFXLEdBQUcsSUFBZDtBQUNILEtBRkQ7QUFJSCxHQTNCUSxFQTJCTixFQTNCTSxDQUFUOztBQTZCQSxNQUFNVyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZDLG9FQUFVLENBQUNwQixLQUFELENBQVYsQ0FBa0JVLElBQWxCLENBQXVCLFVBQUFXLE9BQU8sRUFBSTtBQUM5QixVQUFJQSxPQUFPLENBQUM3QixLQUFSLElBQWlCOEIsU0FBckIsRUFBZ0M7QUFBQTs7QUFDNUJ2QixpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhTixlQUFLLG9CQUFFNkIsT0FBTyxDQUFDN0IsS0FBViwyREFBbUI4QjtBQUFyQyxXQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0h2QixpQkFBUyxpQ0FDRkQsTUFERTtBQUVMVCxjQUFJLEVBQUVnQyxPQUFPLENBQUNoQyxJQUZUO0FBR0xELGtCQUFRLEVBQUVpQyxPQUFPLENBQUNqQyxRQUhiO0FBSUxtQyxxQkFBVyxFQUFFRixPQUFPLENBQUMvQixLQUpoQjtBQUtMTyxlQUFLLEVBQUV3QixPQUFPLENBQUN4QjtBQUxWLFdBQVQ7QUFPSDtBQUNKLEtBWkQ7QUFhSCxHQWREOztBQWlCQSxNQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQW5DLElBQUk7QUFBQSxXQUFJLFVBQUFvQyxDQUFDLEVBQUk7QUFBQTs7QUFDOUI7QUFDQSxVQUFNQyxLQUFLLEdBQUdyQyxJQUFJLEtBQUssT0FBVCxHQUFtQm9DLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFuQixHQUF1Q0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQTlEO0FBQ0EsVUFBSUcsWUFBWSxHQUFHLElBQUlDLFFBQUosRUFBbkI7QUFDQUQsa0JBQVksQ0FBQ0UsR0FBYixDQUFpQjFDLElBQWpCLEVBQXVCcUMsS0FBdkI7QUFDQTNCLGVBQVMsaUNBQUtELE1BQUwsd0xBQWNULElBQWQsRUFBcUJxQyxLQUFyQiwwS0FBc0NHLFlBQXRDLHVLQUEyRCxFQUEzRCx5S0FBd0UsS0FBeEUsb0JBQVQ7QUFDSCxLQU53QjtBQUFBLEdBQXpCOztBQVFBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNQLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDUSxjQUFGO0FBQ0FsQyxhQUFTLGlDQUFLRCxNQUFMO0FBQWFKLGFBQU8sRUFBRTtBQUF0QixPQUFUO0FBQ0F3Qyx1RUFBYSxDQUFDdEMsUUFBRCxFQUFXSSxLQUFYLENBQWIsQ0FBK0JVLElBQS9CLENBQW9DLFVBQUN5QixJQUFELEVBQVU7QUFDMUMsVUFBSUEsSUFBSSxDQUFDM0MsS0FBVCxFQUFnQjtBQUNaTyxpQkFBUyxpQ0FBS0QsTUFBTDtBQUFhTixlQUFLLEVBQUUyQyxJQUFJLENBQUMzQyxLQUF6QjtBQUFnQ0MsaUJBQU8sRUFBRSxLQUF6QztBQUFnREMsaUJBQU8sRUFBRTtBQUF6RCxXQUFUO0FBQ0gsT0FGRCxNQUVPO0FBRUgwQyxvRUFBTSxDQUFDRCxJQUFELEVBQU8sWUFBTTtBQUNmcEMsbUJBQVMsaUNBQ0ZELE1BREU7QUFFTFQsZ0JBQUksRUFBRThDLElBQUksQ0FBQzlDLElBRk47QUFHTEQsb0JBQVEsRUFBRStDLElBQUksQ0FBQy9DLFFBSFY7QUFJTG1DLHVCQUFXLEVBQUVZLElBQUksQ0FBQzdDLEtBSmI7QUFLTE8saUJBQUssRUFBRXNDLElBQUksQ0FBQ3RDLEtBTFA7QUFNTEYsaUJBQUssRUFBRXdDLElBQUksQ0FBQ3hDLEtBTlA7QUFPTEYsbUJBQU8sRUFBRSxJQVBKO0FBUUxDLG1CQUFPLEVBQUU7QUFSSixhQUFUO0FBVUgsU0FYSyxDQUFOO0FBWUg7QUFDSixLQWxCRDtBQW1CSCxHQXRCRDs7QUF3QkFhLHlEQUFTLENBQUMsWUFBTTtBQUNaWSxRQUFJO0FBQ1AsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLE1BQU1rQixVQUFVLEdBQUdDLE9BQU8sQ0FBQ3JCLEtBQVIsQ0FBYyxDQUFkLENBQW5COztBQUVBLE1BQU1zQixVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHdCQUNmO0FBQU0sY0FBUSxFQUFFUCxZQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0k7QUFBTyxtQkFBUyxFQUFDLHNCQUFqQjtBQUFBLG1EQUVJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFNLEVBQUMsU0FBMUI7QUFBb0Msa0JBQU0sTUFBMUM7QUFBMkMscUJBQVMsRUFBQyxjQUFyRDtBQUNPLG9CQUFRLEVBQUVSLFlBQVksQ0FBQyxPQUFEO0FBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsY0FBN0I7QUFBNEMsZUFBSyxFQUFFbkMsSUFBbkQ7QUFBeUQsa0JBQVEsRUFBRW1DLFlBQVksQ0FBQyxNQUFEO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosZUFZSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQVMsRUFBQyxjQUFqQztBQUFnRCxlQUFLLEVBQUVqQyxRQUF2RDtBQUFpRSxrQkFBUSxFQUFFaUMsWUFBWSxDQUFDLFVBQUQ7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQWdCSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsbUJBQVMsRUFBQyxjQUE5QjtBQUE2QyxlQUFLLEVBQUVsQyxLQUFwRDtBQUEyRCxrQkFBUSxFQUFFa0MsWUFBWSxDQUFDLE9BQUQ7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkosZUFvQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDSTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLG1CQUFTLEVBQUMsY0FBakM7QUFBZ0QsZUFBSyxFQUFFM0IsS0FBdkQ7QUFBOEQsa0JBQVEsRUFBRTJCLFlBQVksQ0FBQyxPQUFEO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKLGVBd0JJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFDLGNBQTdCO0FBQTRDLGVBQUssRUFBRXBDLFFBQW5EO0FBQTZELGtCQUFRLEVBQUVvQyxZQUFZLENBQUMsVUFBRDtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCSixlQTRCSTtBQUFBLCtCQUNJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURlO0FBQUEsR0FBbkI7O0FBbUNBLE1BQU1nQixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHdCQUNkO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUVqRCxLQUFLLEdBQUcsRUFBSCxHQUFRO0FBQXZCLE9BQTNDO0FBQUEsZ0JBQ0tBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURjO0FBQUEsR0FBbEI7O0FBTUEsTUFBTWtELFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsd0JBQ2hCO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLFdBQUssRUFBRTtBQUFDRCxlQUFPLEVBQUVoRCxPQUFPLEdBQUcsRUFBSCxHQUFRO0FBQXpCLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCO0FBQUEsR0FBcEI7O0FBTUEsTUFBTWtELFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsd0JBQ2hCO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLFdBQUssRUFBRTtBQUFDRixlQUFPLEVBQUUvQyxPQUFPLEdBQUcsRUFBSCxHQUFRO0FBQXpCLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCO0FBQUEsR0FBcEI7O0FBTUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUNLVSxPQUFPLGdCQUFJO0FBQUssZUFBRyxFQUFFQSxPQUFWO0FBQW1CLHFCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSixHQUEwRDtBQUR0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxxQkFDS29DLFNBQVMsRUFEZCxFQUVLRyxXQUFXLEVBRmhCLEVBR0tELFdBQVcsRUFIaEIsOEJBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQU1LSCxVQUFVLEVBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQW1CSCxDQXhMRDs7R0FBTXJELGE7O0tBQUFBLGE7QUEwTFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvdXBkYXRlLjY5NTM3YWUxZTRjMmFmMjYzYTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0UHJvZmlsZSwgdXBkYXRlUHJvZmlsZSwgdXBkYXRlfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy91c2VyXCI7XHJcbmltcG9ydCB7Z2V0Q29va2llLCBpc0F1dGh9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHtBUEl9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVVcGRhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgIHVzZXJEYXRhOiAnJyxcclxuICAgICAgICBhYm91dDogJycsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuICAgIGxldCB7dXNlcm5hbWUsIG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgc3VjY2VzcywgZXJyb3IsIGxvYWRpbmcsIHBob3RvLCB1c2VyRGF0YSwgYWJvdXR9ID0gdmFsdWVzXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB1cmwgPSBgJHtBUEl9L3VzZXIvcGhvdG8vJHt1c2VybmFtZX1gXHJcbiAgICBjb25zdCBbe1xyXG4gICAgICAgIHNyY0Jsb2IsXHJcbiAgICAgICAgc3JjRGF0YVVyaVxyXG4gICAgfSwgc2V0U3JjXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzcmNCbG9iOiBudWxsLFxyXG4gICAgICAgIHNyY0RhdGFVcmk6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVW5tb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcclxuICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiBibG9iLmFycmF5QnVmZmVyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc1VubW91bnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyY0Jsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgc3JjQmxvYi5zbGljZSg1KVxyXG4gICAgICAgICAgICAgICAgc2V0U3JjKHN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjQmxvYlxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2ZpbGUodG9rZW4pLnRoZW4ocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlLmVycm9yIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBwcm9maWxlLmVycm9yID8/IHVuZGVmaW5lZH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyRW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IHByb2ZpbGUuYWJvdXQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgdXNlckZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICB1c2VyRm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgdXNlckRhdGE6IHVzZXJGb3JtRGF0YSwgZXJyb3I6ICcnLCBzdWNjZXNzOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZSh1c2VyRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgc3VjY2VzczogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlckVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogZGF0YS5hYm91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IGRhdGEucGhvdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgc2xpY2VkQmxvYiA9IHNyY0Jsb2cuc2xpY2UoNSlcclxuXHJcbiAgICBjb25zdCB1cGRhdGVGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGUgcGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgaGlkZGVuIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5BYm91dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2Fib3V0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdhYm91dCcpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd1c2VybmFtZScpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBQcm9maWxlIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IGxvYWRpbmcgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uLi5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NyY0Jsb2IgPyAgPGltZyBzcmM9e3NyY0Jsb2J9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWQgbWItM1wiLz4gOiBcIvCfpLcgQ2FuJ3QgZmluZCB0aGUgdXNlciBpbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVVwZGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==