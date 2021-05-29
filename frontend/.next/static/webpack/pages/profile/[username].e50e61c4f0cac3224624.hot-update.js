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
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_form_contactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
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
  // console.log(query);
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_7__["userPublicProfile"])(query.username).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwidXNlciIsImJsb2dzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsInVzZXJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJGQl9BUFBfSUQiLCJzaG93VXNlckJsb2dzIiwibWFwIiwiYmxvZyIsImkiLCJzbHVnIiwidGl0bGUiLCJuYW1lIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIkFQSSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiZ2V0SW5pdGlhbFByb3BzIiwidXNlclB1YmxpY1Byb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTRCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUNBLE1BQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsd0JBQ1QscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLG1CQUNLTCxJQUFJLENBQUNNLFFBRFYsU0FDdUJDLGdEQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxxQkFBY1AsSUFBSSxDQUFDTSxRQUFuQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksWUFBS0UsOENBQUwsc0JBQXVCTixLQUFLLENBQUNJLFFBQTdCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQU1JO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sWUFBS04sSUFBSSxDQUFDTSxRQUFWLGVBQXVCQyxnREFBdkI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0k7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8scUJBQWNQLElBQUksQ0FBQ00sUUFBbkI7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBUUk7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVNJO0FBQU0sZ0JBQVEsRUFBQyxRQUFmO0FBQXdCLGVBQU8sWUFBS0UsOENBQUwsc0JBQXVCTixLQUFLLENBQUNJLFFBQTdCO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQVVJO0FBQU0sZ0JBQVEsRUFBQyxjQUFmO0FBQThCLGVBQU8sWUFBS0MsZ0RBQUw7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKLGVBWUk7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxZQUFLQyw4Q0FBTDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkosZUFhSTtBQUFNLGdCQUFRLEVBQUMscUJBQWY7QUFBcUMsZUFBTyxZQUFLQSw4Q0FBTDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkosZUFjSTtBQUFNLGdCQUFRLEVBQUMsZUFBZjtBQUErQixlQUFPLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKLGVBZUk7QUFBTSxnQkFBUSxFQUFDLFdBQWY7QUFBMkIsZUFBTyxZQUFLQyxpREFBTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFM7QUFBQSxHQUFiOztBQW9CQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsV0FBT1QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDMUIsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksbUJBQVlELElBQUksQ0FBQ0UsSUFBakIsQ0FBVjtBQUFBLGlDQUNJO0FBQUcscUJBQVMsRUFBQyxNQUFiO0FBQUEsc0JBQXFCRixJQUFJLENBQUNHO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBZ0NGLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILEtBUk0sQ0FBUDtBQVNILEdBVkQ7O0FBWUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFDS1IsSUFBSSxFQURULGVBRUkscUVBQUMseURBQUQ7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLEtBQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsVUFBZjtBQUFBLDRDQUNJO0FBQUEsZ0NBQUtMLElBQUksQ0FBQ2dCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUVJO0FBQUcsK0JBQVMsRUFBQyxZQUFiO0FBQUEsNENBQWtDQyw2Q0FBTSxDQUFDakIsSUFBSSxDQUFDa0IsU0FBTixDQUFOLENBQXVCQyxPQUF2QixFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBS0k7QUFBSyw2QkFBUyxFQUFDLFVBQWY7QUFBQSwyQ0FDSTtBQUNJLHlCQUFHLFlBQUtDLDJDQUFMLHlCQUF1QnBCLElBQUksQ0FBQ00sUUFBNUIsQ0FEUDtBQUVJLCtCQUFTLEVBQUMsa0NBRmQ7QUFHSSwyQkFBSyxFQUFFO0FBQUVlLGlDQUFTLEVBQUUsT0FBYjtBQUFzQkMsZ0NBQVEsRUFBRTtBQUFoQyx1QkFIWDtBQUlJLHlCQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkosZUE0Qkk7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx3Q0FDSTtBQUFJLDJCQUFTLEVBQUMsc0RBQWQ7QUFBQSxpREFDcUJ0QixJQUFJLENBQUNnQixJQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFLS04sYUFBYSxFQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWFJO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNJO0FBQUksMkJBQVMsRUFBQyxzREFBZDtBQUFBLHlDQUNhVixJQUFJLENBQUNnQixJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBS0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkRILENBL0ZEOztLQUFNakIsVzs7QUFpR05BLFdBQVcsQ0FBQ3dCLGVBQVosR0FBOEIsaUJBQWU7QUFBQSxNQUFackIsS0FBWSxTQUFaQSxLQUFZO0FBQ3pDO0FBQ0EsU0FBT3NCLHVFQUFpQixDQUFDdEIsS0FBSyxDQUFDSSxRQUFQLENBQWpCLENBQWtDbUIsSUFBbEMsQ0FBdUMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNaeEIsYUFBTyxDQUFDQyxHQUFSLENBQVlzQixJQUFJLENBQUNDLEtBQWpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDQSxhQUFPO0FBQUUzQixZQUFJLEVBQUUwQixJQUFJLENBQUMxQixJQUFiO0FBQW1CQyxhQUFLLEVBQUV5QixJQUFJLENBQUN6QixLQUEvQjtBQUFzQ0MsYUFBSyxFQUFMQTtBQUF0QyxPQUFQO0FBQ0g7QUFDSixHQVBNLENBQVA7QUFRSCxDQVZEOztBQVllSCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uZTUwZTYxYzRmMGNhYzMyMjQ2MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7QVBJLCBET01BSU4sIEFQUF9OQU1FLCBGQl9BUFBfSUR9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHt1c2VyUHVibGljUHJvZmlsZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdXNlclwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9jb250YWN0Rm9ybVwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgdXNlciwgYmxvZ3MsIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX0gfCB7QVBQX05BTUV9XHJcbiAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2BCbG9ncyBieSAke3VzZXIudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfS9wcm9maWxlLyR7cXVlcnkudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3VzZXIudXNlcm5hbWV9fCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgQmxvZ3MgYnkgJHt1c2VyLnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJpc3RlXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59L3Byb2ZpbGUvJHtxdWVyeS51c2VybmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nlb2Jsb2cuanBnYH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY29udGVudD17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nlb2Jsb2cuanBnYH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL2pwZ1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93VXNlckJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtYi00XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWFkXCI+e2Jsb2cudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Sm9pbmVkIHttb21lbnQodXNlci5jcmVhdGVkQXQpLmZyb21Ob3coKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS91c2VyL3Bob3RvLyR7dXNlci51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIGltZy10aHVtYm5haWwgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzEwMHB4JywgbWF4V2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ1c2VyIHByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYmctcHJpbWFyeSBwdC00IHBiLTQgcGwtNCBwci00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBibG9ncyBieSB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dVc2VyQmxvZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGJnLXByaW1hcnkgcHQtNCBwYi00IHBsLTQgcHItNCB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgIHJldHVybiB1c2VyUHVibGljUHJvZmlsZShxdWVyeS51c2VybmFtZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlcjogZGF0YS51c2VyLCBibG9nczogZGF0YS5ibG9ncywgcXVlcnkgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9