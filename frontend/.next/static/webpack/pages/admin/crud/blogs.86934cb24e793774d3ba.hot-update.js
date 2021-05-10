webpackHotUpdate_N_E("pages/admin/crud/blogs",{

/***/ "./components/crud/BlogRead.js":
/*!*************************************!*\
  !*** ./components/crud/BlogRead.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\BlogRead.js",
    _this = undefined,
    _s = $RefreshSig$();








var BlogRead = function BlogRead() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("token");

  var loadBlogs = function loadBlogs() {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["list"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadBlogs();
  }, []);

  var deleteBlog = function deleteBlog(slug) {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["removeBlog"])(slug, token).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
      }
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm("Are you sure you want to delete blog?");

    if (answer) {
      deleteBlog(slug);
    }
  };

  var showUpdateButton = function showUpdateButton(blog) {
    if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && _actions_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"].role === 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user/crud /".concat(blog.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-sm btn-warning",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this);
    } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && _actions_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"].role === 1) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin/crud/".concat(blog.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "ml-2 btn btn-sm btn-warning",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this);
    }
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pb-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: blog.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mark",
          children: ["Written by ", blog.postedBy.name, " | Published on ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-sm btn-danger",
          onClick: function onClick() {
            return deleteConfirm(blog.slug);
          },
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), showUpdateButton(blog)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Update/Delete Blogs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12",
          children: [message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "alert alert-warning",
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 37
          }, _this), showAllBlogs()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(BlogRead, "Hfiz0cjMPBznn/eW4GHdNr8un8s=");

_c = BlogRead;
/* harmony default export */ __webpack_exports__["default"] = (BlogRead);

var _c;

$RefreshReg$(_c, "BlogRead");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dSZWFkLmpzIl0sIm5hbWVzIjpbIkJsb2dSZWFkIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ0b2tlbiIsImdldENvb2tpZSIsImxvYWRCbG9ncyIsImxpc3QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRlbGV0ZUJsb2ciLCJzbHVnIiwicmVtb3ZlQmxvZyIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwic2hvd1VwZGF0ZUJ1dHRvbiIsImJsb2ciLCJpc0F1dGgiLCJyb2xlIiwic2hvd0FsbEJsb2dzIiwibWFwIiwiaSIsInRpdGxlIiwicG9zdGVkQnkiLCJuYW1lIiwibW9tZW50IiwidXBkYXRlZEF0IiwiZnJvbU5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFWkcsT0FGWTtBQUFBLE1BRUhDLFVBRkc7O0FBR25CLE1BQU1DLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLDhEQUFJLEdBQUdDLElBQVAsQ0FBWSxVQUFDQyxJQUFELEVBQVU7QUFDbEIsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEtBQWpCO0FBQ0gsT0FG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QkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEscUJBQ0t6QixPQUFPLGlCQUFJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLHNCQUFzQ0E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaEIsRUFFS3VCLFlBQVksRUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWFILENBbkZEOztHQUFNM0IsUTs7S0FBQUEsUTtBQXFGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9ncy44NjkzNGNiMjRlNzkzNzc0ZDNiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQge2xpc3QsIHJlbW92ZUJsb2d9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Jsb2dcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5cclxuY29uc3QgQmxvZ1JlYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG4gICAgY29uc3QgbG9hZEJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEJsb2dzKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZEJsb2dzKClcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJsb2cgPSAoc2x1ZykgPT4ge1xyXG4gICAgICAgIHJlbW92ZUJsb2coc2x1ZywgdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGxvYWRCbG9ncygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoc2x1ZykgPT4ge1xyXG4gICAgICAgICBsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGJsb2c/XCIpXHJcbiAgICAgICAgaWYoYW5zd2VyKXtcclxuICAgICAgICAgICAgZGVsZXRlQmxvZyhzbHVnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXBkYXRlQnV0dG9uID0gKGJsb2cpID0+IHtcclxuICAgICAgICBpZihpc0F1dGgoKSAmJiBpc0F1dGgucm9sZSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9jcnVkIC8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCI+VXBkYXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfWVsc2UgaWYoaXNBdXRoKCkgJiYgaXNBdXRoLnJvbGUgPT09IDEpe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkbWluL2NydWQvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtMiBidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCI+VXBkYXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBbGxCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57YmxvZy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcmtcIj5Xcml0dGVuIGJ5IHtibG9nLnBvc3RlZEJ5Lm5hbWV9IHwgUHVibGlzaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKGJsb2cuc2x1Zyl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93VXBkYXRlQnV0dG9uKGJsb2cpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VXBkYXRlL0RlbGV0ZSBCbG9nczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj57bWVzc2FnZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsQmxvZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUmVhZDsiXSwic291cmNlUm9vdCI6IiJ9