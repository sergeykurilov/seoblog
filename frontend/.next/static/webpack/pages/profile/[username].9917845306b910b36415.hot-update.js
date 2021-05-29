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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwidXNlciIsImJsb2dzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaGVhZCIsInVzZXJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJGQl9BUFBfSUQiLCJzaG93VXNlckJsb2dzIiwibWFwIiwiYmxvZyIsImkiLCJzbHVnIiwidGl0bGUiLCJuYW1lIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIkFQSSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiZW1haWwiLCJnZXRJbml0aWFsUHJvcHMiLCJ1c2VyUHVibGljUHJvZmlsZSIsInRoZW4iLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTRCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUNBLE1BQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsd0JBQ1QscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLG1CQUNLTCxJQUFJLENBQUNNLFFBRFYsU0FDdUJDLGdEQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxxQkFBY1AsSUFBSSxDQUFDTSxRQUFuQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksWUFBS0UsOENBQUwsc0JBQXVCTixL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O0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSSxxRUFBQyxvRUFBRDtBQUFhLDZCQUFXLEVBQUVoQixJQUFJLENBQUN1QjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQTZESCxDQS9GRDs7S0FBTXhCLFc7O0FBaUdOQSxXQUFXLENBQUN5QixlQUFaLEdBQThCLGlCQUFlO0FBQUEsTUFBWnRCLEtBQVksU0FBWkEsS0FBWTtBQUN6QyxTQUFPdUIsdUVBQWlCLENBQUN2QixLQUFLLENBQUNJLFFBQVAsQ0FBakIsQ0FBa0NvQixJQUFsQyxDQUF1QyxVQUFBQyxJQUFJLEVBQUk7QUFDbEQsUUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ1p6QixhQUFPLENBQUNDLEdBQVIsQ0FBWXVCLElBQUksQ0FBQ0MsS0FBakI7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPO0FBQUU1QixZQUFJLEVBQUUyQixJQUFJLENBQUMzQixJQUFiO0FBQW1CQyxhQUFLLEVBQUUwQixJQUFJLENBQUMxQixLQUEvQjtBQUFzQ0MsYUFBSyxFQUFMQTtBQUF0QyxPQUFQO0FBQ0g7QUFDSixHQU5NLENBQVA7QUFPSCxDQVJEOztBQVVlSCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uOTkxNzg0NTMwNmI5MTBiMzY0MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7QVBJLCBET01BSU4sIEFQUF9OQU1FLCBGQl9BUFBfSUR9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHt1c2VyUHVibGljUHJvZmlsZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdXNlclwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9jb250YWN0Rm9ybVwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgdXNlciwgYmxvZ3MsIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX0gfCB7QVBQX05BTUV9XHJcbiAgICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2BCbG9ncyBieSAke3VzZXIudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfS9wcm9maWxlLyR7cXVlcnkudXNlcm5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3VzZXIudXNlcm5hbWV9fCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgQmxvZ3MgYnkgJHt1c2VyLnVzZXJuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJpc3RlXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59L3Byb2ZpbGUvJHtxdWVyeS51c2VybmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nlb2Jsb2cuanBnYH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY29udGVudD17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nlb2Jsb2cuanBnYH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL2pwZ1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93VXNlckJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtYi00XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWFkXCI+e2Jsb2cudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dXNlci5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkpvaW5lZCB7bW9tZW50KHVzZXIuY3JlYXRlZEF0KS5mcm9tTm93KCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vdXNlci9waG90by8ke3VzZXIudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBpbWctdGh1bWJuYWlsIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDBweCcsIG1heFdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidXNlciBwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGJnLXByaW1hcnkgcHQtNCBwYi00IHBsLTQgcHItNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgYmxvZ3MgYnkge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93VXNlckJsb2dzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBiZy1wcmltYXJ5IHB0LTQgcGItNCBwbC00IHByLTQgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZSB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIGF1dGhvckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuVXNlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHVzZXJQdWJsaWNQcm9maWxlKHF1ZXJ5LnVzZXJuYW1lKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHVzZXI6IGRhdGEudXNlciwgYmxvZ3M6IGRhdGEuYmxvZ3MsIHF1ZXJ5IH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==