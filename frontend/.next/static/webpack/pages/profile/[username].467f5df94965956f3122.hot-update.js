webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _components_form_contactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/form/contactForm */ "./components/form/contactForm.js");


var _jsxFileName = "E:\\seoblog\\frontend\\pages\\profile\\[username].js",
    _this = undefined;










var UserProfile = function UserProfile(_ref) {
  var user = _ref.user,
      blogs = _ref.blogs,
      query = _ref.query;
  console.log(user);

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [user.username, " | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Blogs by ".concat(user.username)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/profile/").concat(query.username)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(user.username, "| ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Blogs by ".concat(user.username)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "webiste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/profile/").concat(query.username)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "fb:app_id",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["FB_APP_ID"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this);
  };

  var showUserBlogs = function showUserBlogs() {
    return blogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-4 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/blogs/".concat(blog.slug),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "lead",
            children: blog.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-8",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                      children: user.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-muted",
                      children: ["Joined ", moment__WEBPACK_IMPORTED_MODULE_6___default()(user.createdAt).fromNow()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user/photo/").concat(user.username),
                      className: "img img-fluid img-thumbnail mb-3",
                      style: {
                        maxHeight: '100px',
                        maxWidth: '100%'
                      },
                      alt: "user profile"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container pb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white",
                  children: ["Recent blogs by ", user.name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, _this), showUserBlogs()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light",
                  children: ["Message ", user.name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_form_contactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  authorEmail: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_c = UserProfile;

UserProfile.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_7__["userPublicProfile"])(query.username).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        user: data.user,
        blogs: data.blogs,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwidXNlciIsImJsb2dzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsInVzZXJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJGQl9BUFBfSUQiLCJzaG93VXNlckJsb2dzIiwibWFwIiwiYmxvZyIsImkiLCJzbHVnIiwidGl0bGUiLCJuYW1lIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIkFQSSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiZW1haWwiLCJnZXRJbml0aWFsUHJvcHMiLCJ1c2VyUHVibGljUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBNEI7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7O0FBQ0EsTUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSx3QkFDVCxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUEsbUJBQ0tMLElBQUksQ0FBQ00sUUFEVixTQUN1QkMsZ0RBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLHFCQUFjUCxJQUFJLENBQUNNLFFBQW5CO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxZQUFLRSw4Q0FBTCxzQkFBdUJOLEtB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O0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSSxxRUFBQyxvRUFBRDtBQUFhLDZCQUFXLEVBQUVoQixJQUFJLENBQUN1QjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2REgsQ0EvRkQ7O0tBQU14QixXOztBQWlHTkEsV0FBVyxDQUFDeUIsZUFBWixHQUE4QixpQkFBZTtBQUFBLE1BQVp0QixLQUFZLFNBQVpBLEtBQVk7QUFDekMsU0FBT3VCLHVFQUFpQixDQUFDdkIsS0FBSyxDQUFDSSxRQUFQLENBQWpCLENBQWtDb0IsSUFBbEMsQ0FBdUMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNaekIsYUFBTyxDQUFDQyxHQUFSLENBQVl1QixJQUFJLENBQUNDLEtBQWpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBTztBQUFFNUIsWUFBSSxFQUFFMkIsSUFBSSxDQUFDM0IsSUFBYjtBQUFtQkMsYUFBSyxFQUFFMEIsSUFBSSxDQUFDMUIsS0FBL0I7QUFBc0NDLGFBQUssRUFBTEE7QUFBdEMsT0FBUDtBQUNIO0FBQ0osR0FOTSxDQUFQO0FBT0gsQ0FSRDs7QUFVZUgsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjQ2N2Y1ZGY5NDk2NTk1NmYzMTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0FQSSwgRE9NQUlOLCBBUFBfTkFNRSwgRkJfQVBQX0lEfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7dXNlclB1YmxpY1Byb2ZpbGV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vY29udGFjdEZvcm1cIjtcclxuXHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IHVzZXIsIGJsb2dzLCBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9IHwge0FQUF9OQU1FfVxyXG4gICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgQmxvZ3MgYnkgJHt1c2VyLnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vcHJvZmlsZS8ke3F1ZXJ5LnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VyLnVzZXJuYW1lfXwgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YEJsb2dzIGJ5ICR7dXNlci51c2VybmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2ViaXN0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YCR7RE9NQUlOfS9wcm9maWxlLyR7cXVlcnkudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9qcGdcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1VzZXJCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItNFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVhZFwiPntibG9nLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dXNlci5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkpvaW5lZCB7bW9tZW50KHVzZXIuY3JlYXRlZEF0KS5mcm9tTm93KCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vdXNlci9waG90by8ke3VzZXIudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBpbWctdGh1bWJuYWlsIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDBweCcsIG1heFdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidXNlciBwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGJnLXByaW1hcnkgcHQtNCBwYi00IHBsLTQgcHItNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgYmxvZ3MgYnkge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93VXNlckJsb2dzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBiZy1wcmltYXJ5IHB0LTQgcGItNCBwbC00IHByLTQgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZSB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIGF1dGhvckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn07XHJcblxyXG5Vc2VyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICByZXR1cm4gdXNlclB1YmxpY1Byb2ZpbGUocXVlcnkudXNlcm5hbWUpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlcjogZGF0YS51c2VyLCBibG9nczogZGF0YS5ibG9ncywgcXVlcnkgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9