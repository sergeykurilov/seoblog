webpackHotUpdate_N_E("pages/blogs",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_Blog_Card_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Blog/Card/Card */ "./components/Blog/Card/Card.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config.js");




var _jsxFileName = "E:\\seoblog\\frontend\\pages\\blogs\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Blogs = function Blogs(_ref) {
  _s();

  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      totalBlogs = _ref.totalBlogs,
      blogsLimit = _ref.blogsLimit,
      blogSkip = _ref.blogSkip,
      router = _ref.router;

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Programming blogs | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Programming blogs and tutorials on react node next vue php laravel and web developoment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Programming blogs and tutorials on react node next vue php laravel and web developoment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "webiste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "fb:app_id",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["FB_APP_ID"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(blogsLimit),
      limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(totalBlogs),
      size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      loadedBlogs = _useState4[0],
      setLoadedBlogs = _useState4[1];

  var loadMore = function loadMore() {
    var toSkip = skip + limit;
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_7__["listBlogsWithCategoriesAndTags"])(toSkip, limit).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([].concat(Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(loadedBlogs), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.blogs)));
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  var loadMoreButton = function loadMoreButton() {
    return size > 0 && size >= limit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: loadMore,
      className: "btn btn-outline-primary btn-lg",
      children: "Load more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, _this);
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      // ()
      console.log(blog);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Blog_Card_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          blog: blog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this);
    });
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (c, i) {
      console.log(c.slug);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 20
      }, _this);
    });
  };

  var showAllTags = function showAllTags() {
    return tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this);
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return loadedBlogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Blog_Card_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
          blog: blog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12 pt-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "display-4 font-weight-bold text-center",
                children: "Programming blogs and tutorials"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "pb-5 text-center",
                children: [showAllCategories(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 33
                }, _this), showAllTags()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid",
          children: showAllBlogs()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid",
          children: showLoadedBlogs()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center pt-5 pb-5",
          children: loadMoreButton()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Blogs, "Xk61i/WMQ7FElqvkkoA1Qs5MN40=");

_c = Blogs;

Blogs.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_7__["listBlogsWithCategoriesAndTags"])(skip, limit).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Blogs));

var _c, _c2;

$RefreshReg$(_c, "Blogs");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGVnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nU2tpcCIsInJvdXRlciIsImhlYWQiLCJBUFBfTkFNRSIsIkRPTUFJTiIsInBhdGhuYW1lIiwiRkJfQVBQX0lEIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0Iiwic2tpcCIsInNldFNraXAiLCJzaXplIiwic2V0U2l6ZSIsImxvYWRlZEJsb2dzIiwic2V0TG9hZGVkQmxvZ3MiLCJsb2FkTW9yZSIsInRvU2tpcCIsImxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibG9hZE1vcmVCdXR0b24iLCJzaG93QWxsQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNob3dBbGxDYXRlZ29yaWVzIiwiYyIsInNsdWciLCJuYW1lIiwic2hvd0FsbFRhZ3MiLCJ0Iiwic2hvd0xvYWRlZEJsb2dzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBeUU7QUFBQTs7QUFBQSxNQUF2RUMsS0FBdUUsUUFBdkVBLEtBQXVFO0FBQUEsTUFBaEVDLFVBQWdFLFFBQWhFQSxVQUFnRTtBQUFBLE1BQXBEQyxJQUFvRCxRQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q0MsVUFBOEMsUUFBOUNBLFVBQThDO0FBQUEsTUFBbENDLFVBQWtDLFFBQWxDQSxVQUFrQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQ25GLE1B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RCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy5hZmIzY2Q0ODJmNjYxNjAzMGRhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3N9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvZy9DYXJkL0NhcmQnO1xyXG5pbXBvcnQge0FQSSwgRE9NQUlOLCBBUFBfTkFNRSwgRkJfQVBQX0lEfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoe2Jsb2dzLCBjYXRlZ29yaWVzLCB0YWdzLCB0b3RhbEJsb2dzLCBibG9nc0xpbWl0LCBibG9nU2tpcCwgcm91dGVyfSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlByb2dyYW1taW5nIGJsb2dzIHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlByb2dyYW1taW5nIGJsb2dzIGFuZCB0dXRvcmlhbHMgb24gcmVhY3Qgbm9kZSBuZXh0IHZ1ZSBwaHAgbGFyYXZlbCBhbmQgd2ViIGRldmVsb3BvbWVudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0ke3JvdXRlci5wYXRobmFtZX1gfS8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgTGF0ZXN0IHdlYiBkZXZlbG9wb21lbnQgdHV0b3JpYWxzIHwgJHtBUFBfTkFNRX1gfS8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJQcm9ncmFtbWluZyBibG9ncyBhbmQgdHV0b3JpYWxzIG9uIHJlYWN0IG5vZGUgbmV4dCB2dWUgcGhwIGxhcmF2ZWwgYW5kIHdlYiBkZXZlbG9wb21lbnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2ViaXN0ZVwiLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59JHtyb3V0ZXIucGF0aG5hbWV9YH0vPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9Lz5cclxuXHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvc2VvYmxvZy5qcGdgfS8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9Lz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL2pwZ1wiLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0vPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZShibG9nc0xpbWl0KTtcclxuICAgIGNvbnN0IFtza2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUodG90YWxCbG9ncyk7XHJcbiAgICBjb25zdCBbbG9hZGVkQmxvZ3MsIHNldExvYWRlZEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdG9Ta2lwID0gc2tpcCArIGxpbWl0O1xyXG4gICAgICAgIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyh0b1NraXAsIGxpbWl0KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkZWRCbG9ncyhbLi4ubG9hZGVkQmxvZ3MsIC4uLmRhdGEuYmxvZ3NdKTtcclxuICAgICAgICAgICAgICAgIHNldFNpemUoZGF0YS5zaXplKTtcclxuICAgICAgICAgICAgICAgIHNldFNraXAodG9Ta2lwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzaXplID4gMCAmJlxyXG4gICAgICAgICAgICBzaXplID49IGxpbWl0ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9hZE1vcmV9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsQmxvZ3MgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYmxvZylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYy5zbHVnKVxyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17YC9jYXRlZ29yaWVzLyR7Yy5zbHVnfWB9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57Yy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93QWxsVGFncyA9ICgpID0+IHtcclxuICAgIHJldHVybiB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPnt0Lm5hbWV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0xvYWRlZEJsb2dzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRlZEJsb2dzLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9Lz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApKTtcclxufTtcclxuXHJcbnJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2dyYW1taW5nIGJsb2dzIGFuZCB0dXRvcmlhbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsQ2F0ZWdvcmllcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbGxUYWdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPntzaG93QWxsQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e3Nob3dMb2FkZWRCbG9ncygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01IHBiLTVcIj57bG9hZE1vcmVCdXR0b24oKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbik7XHJcbn1cclxuO1xyXG5cclxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gICAgbGV0IHNraXAgPSAwO1xyXG4gICAgbGV0IGxpbWl0ID0gMjtcclxuICAgIHJldHVybiBsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3Moc2tpcCwgbGltaXQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgdG90YWxCbG9nczogZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgYmxvZ3NMaW1pdDogbGltaXQsXHJcbiAgICAgICAgICAgICAgICBibG9nU2tpcDogc2tpcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9ncyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=