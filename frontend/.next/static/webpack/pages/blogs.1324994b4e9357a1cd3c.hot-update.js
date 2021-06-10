webpackHotUpdate_N_E("pages/blogs",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogsWithCategoriesAndTags, singleBlog, listRelated, list, listSearch, removeBlog, updateBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogsWithCategoriesAndTags", function() { return listBlogsWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBlog", function() { return singleBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearch", function() { return listSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlog", function() { return removeBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");





var createBlog = function createBlog(blog, token) {
  var url;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog");
  } else {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(url), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listBlogsWithCategoriesAndTags = function listBlogsWithCategoriesAndTags(skip, limit) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs-categories-tags"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleBlog = function singleBlog(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listRelated = function listRelated(blog) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs/related"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blog)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var list = function list(username) {
  var listBlogsEndpoint;

  if (username) {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/").concat(username, "/blogs");
  } else {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(listBlogsEndpoint), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listSearch = function listSearch(params) {
  console.log('search params', params);
  var query = querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  console.log('query params', query);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs/search?").concat(query), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeBlog = function removeBlog(slug, token) {
  var url;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug);
  } else {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(url), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateBlog = function updateBlog(blog, token, slug) {
  var updateBlogEndpoint;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug);
  } else if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(updateBlogEndpoint), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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
/* harmony import */ var _components_Blog_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Blog/Search */ "./components/Blog/Search.js");
/* harmony import */ var _components_pagesHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pagesHeader */ "./components/pagesHeader.jsx");
/* harmony import */ var _heroicons_react_outline_MailIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/outline/MailIcon */ "./node_modules/@heroicons/react/outline/MailIcon.js");
/* harmony import */ var _heroicons_react_outline_MailIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline_MailIcon__WEBPACK_IMPORTED_MODULE_12__);




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
        lineNumber: 16,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Programming blogs and tutorials on react node next vue php laravel and web developoment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Programming blogs and tutorials on react node next vue php laravel and web developoment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "webiste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/static/images/seoblog.jpg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "fb:app_id",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["FB_APP_ID"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
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
      type: "button",
      className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      children: ["Load more", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline_MailIcon__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "ml-3 -mr-1 h-5 w-5",
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }, _this);
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      console.log(blog);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto bg-red",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap -mx-6 overflow-hidden sm:-mx-8 md:-mx-8 lg:-mx-6 xl:-mx-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Blog_Card_Card__WEBPACK_IMPORTED_MODULE_8__["BlogCard"], {
            blog: blog
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
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
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 24
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
          lineNumber: 100,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this);
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return loadedBlogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto bg-red",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap -mx-6 overflow-hidden sm:-mx-8 md:-mx-8 lg:-mx-6 xl:-mx-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Blog_Card_Card__WEBPACK_IMPORTED_MODULE_8__["BlogCard"], {
            blog: blog
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pagesHeader__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto bg-red",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container-fluid",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12 pt-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "display-4 font-weight-bold text-center",
                  children: "Company Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, _this), showAllBlogs(), showLoadedBlogs(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center pt-5 pb-5",
            children: loadMoreButton()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVCbG9nIiwiYmxvZyIsInRva2VuIiwidXJsIiwiaXNBdXRoIiwicm9sZSIsIkFQSSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlUmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyIsInNraXAiLCJsaW1pdCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2luZ2xlQmxvZyIsInNsdWciLCJsaXN0UmVsYXRlZCIsImxpc3QiLCJ1c2VybmFtZSIsImxpc3RCbG9nc0VuZHBvaW50IiwibGlzdFNlYXJjaCIsInBhcmFtcyIsInF1ZXJ5IiwicXVlcnlTdHJpbmciLCJyZW1vdmVCbG9nIiwidXBkYXRlQmxvZyIsInVwZGF0ZUJsb2dFbmRwb2ludCIsIkJsb2dzIiwiYmxvZ3MiLCJjYXRlZ29yaWVzIiwidGFncyIsInRvdGFsQmxvZ3MiLCJibG9nc0xpbWl0IiwiYmxvZ1NraXAiLCJyb3V0ZXIiLCJoZWFkIiwiQVBQX05BTUUiLCJET01BSU4iLCJwYXRobmFtZSIsIkZCX0FQUF9JRCIsInVzZVN0YXRlIiwic2V0TGltaXQiLCJzZXRTa2lwIiwic2l6ZSIsInNldFNpemUiLCJsb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwibG9hZE1vcmUiLCJ0b1NraXAiLCJlcnJvciIsImxvYWRNb3JlQnV0dG9uIiwic2hvd0FsbEJsb2dzIiwibWFwIiwiaSIsInNob3dBbGxDYXRlZ29yaWVzIiwiYyIsIm5hbWUiLCJzaG93QWxsVGFncyIsInQiLCJzaG93TG9hZGVkQmxvZ3MiLCJnZXRJbml0aWFsUHJvcHMiLCJ3aXRoUm91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QUFQO0FBUUg7QUFDSixHQWJNLENBQVA7QUFjSCxDQWpCRDs7QUFtQmUscUVBQUFvRCw4REFBVSxDQUFDbEMsS0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy4xMzI0OTk0YjRlOTM1N2ExY2QzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUEl9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQge2hhbmRsZVJlc3BvbnNlLCBpc0F1dGh9IGZyb20gXCIuL2F1dGhcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQmxvZyA9IChibG9nLCB0b2tlbikgPT4ge1xyXG4gICAgbGV0IHVybDtcclxuICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgdXJsID0gYCR7QVBJfS9ibG9nYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSBgJHtBUEl9L3VzZXIvYmxvZ2BcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogYmxvZ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MgPSAoc2tpcCwgbGltaXQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgICAgc2tpcFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2dzLWNhdGVnb3JpZXMtdGFnc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVCbG9nID0gc2x1ZyA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9nLyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkID0gYmxvZyA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9ncy9yZWxhdGVkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdCA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgbGV0IGxpc3RCbG9nc0VuZHBvaW50O1xyXG5cclxuICAgIGlmICh1c2VybmFtZSkge1xyXG4gICAgICAgIGxpc3RCbG9nc0VuZHBvaW50ID0gYCR7QVBJfS8ke3VzZXJuYW1lfS9ibG9nc2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RCbG9nc0VuZHBvaW50ID0gYCR7QVBJfS9ibG9nc2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke2xpc3RCbG9nc0VuZHBvaW50fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaCA9IHBhcmFtcyA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoIHBhcmFtcycsIHBhcmFtcyk7XHJcbiAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeSBwYXJhbXMnLCBxdWVyeSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9ncy9zZWFyY2g/JHtxdWVyeX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVCbG9nID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICB1cmwgPSBgJHtBUEl9L2Jsb2cvJHtzbHVnfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsID0gYCR7QVBJfS91c2VyL2Jsb2cvJHtzbHVnfWBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQmxvZyA9IChibG9nLCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gICAgbGV0IHVwZGF0ZUJsb2dFbmRwb2ludDtcclxuXHJcbiAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgIHVwZGF0ZUJsb2dFbmRwb2ludCA9IGAke0FQSX0vYmxvZy8ke3NsdWd9YDtcclxuICAgIH0gZWxzZSBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCkge1xyXG4gICAgICAgIHVwZGF0ZUJsb2dFbmRwb2ludCA9IGAke0FQSX0vdXNlci9ibG9nLyR7c2x1Z31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHt1cGRhdGVCbG9nRW5kcG9pbnR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGJsb2dcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2xpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFnc30gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9nJztcclxuaW1wb3J0IENhcmQsIHtCbG9nQ2FyZH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9nL0NhcmQvQ2FyZCc7XHJcbmltcG9ydCB7QVBJLCBET01BSU4sIEFQUF9OQU1FLCBGQl9BUFBfSUR9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZy9TZWFyY2hcIjtcclxuaW1wb3J0IHtQYWdlSGVhZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlc0hlYWRlclwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZS9NYWlsSWNvblwiO1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoe2Jsb2dzLCBjYXRlZ29yaWVzLCB0YWdzLCB0b3RhbEJsb2dzLCBibG9nc0xpbWl0LCBibG9nU2tpcCwgcm91dGVyfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlByb2dyYW1taW5nIGJsb2dzIHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlByb2dyYW1taW5nIGJsb2dzIGFuZCB0dXRvcmlhbHMgb24gcmVhY3Qgbm9kZSBuZXh0IHZ1ZSBwaHAgbGFyYXZlbCBhbmQgd2ViIGRldmVsb3BvbWVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfSR7cm91dGVyLnBhdGhuYW1lfWB9Lz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgTGF0ZXN0IHdlYiBkZXZlbG9wb21lbnQgdHV0b3JpYWxzIHwgJHtBUFBfTkFNRX1gfS8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJQcm9ncmFtbWluZyBibG9ncyBhbmQgdHV0b3JpYWxzIG9uIHJlYWN0IG5vZGUgbmV4dCB2dWUgcGhwIGxhcmF2ZWwgYW5kIHdlYiBkZXZlbG9wb21lbnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJpc3RlXCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59JHtyb3V0ZXIucGF0aG5hbWV9YH0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtgJHtBUFBfTkFNRX1gfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9Lz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9Lz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfS8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKGJsb2dzTGltaXQpO1xyXG4gICAgICAgIGNvbnN0IFtza2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHRvdGFsQmxvZ3MpO1xyXG4gICAgICAgIGNvbnN0IFtsb2FkZWRCbG9ncywgc2V0TG9hZGVkQmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRvU2tpcCA9IHNraXAgKyBsaW1pdDtcclxuICAgICAgICAgICAgbGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzKHRvU2tpcCwgbGltaXQpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWRCbG9ncyhbLi4ubG9hZGVkQmxvZ3MsIC4uLmRhdGEuYmxvZ3NdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKGRhdGEuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2tpcCh0b1NraXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkTW9yZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHNpemUgPiAwICYmXHJcbiAgICAgICAgICAgICAgICBzaXplID49IGxpbWl0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRNb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbEljb24gY2xhc3NOYW1lPVwibWwtMyAtbXItMSBoLTUgdy01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaG93QWxsQmxvZ3MgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGJnLXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTYgb3ZlcmZsb3ctaGlkZGVuIHNtOi1teC04IG1kOi1teC04IGxnOi1teC02IHhsOi1teC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvZ0NhcmQgYmxvZz17YmxvZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaG93QWxsQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2Muc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPntjLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaG93QWxsVGFncyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RhZ3MvJHt0LnNsdWd9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPnt0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TG9hZGVkQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWRCbG9ncy5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gYmctcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC02IG92ZXJmbG93LWhpZGRlbiBzbTotbXgtOCBtZDotbXgtOCBsZzotbXgtNiB4bDotbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvZ0NhcmQgYmxvZz17YmxvZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZUhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBiZy1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxzZWN0aW9uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9XCJwYi01IHRleHQtY2VudGVyXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAge3Nob3dBbGxDYXRlZ29yaWVzKCl9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGJyLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICB7c2hvd0FsbFRhZ3MoKX0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NlY3Rpb24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsQmxvZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TG9hZGVkQmxvZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNSBwYi01XCI+e2xvYWRNb3JlQnV0dG9uKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG47XHJcblxyXG5CbG9ncy5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2tpcCA9IDA7XHJcbiAgICBsZXQgbGltaXQgPSAyO1xyXG4gICAgcmV0dXJuIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyhza2lwLCBsaW1pdCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYmxvZ3M6IGRhdGEuYmxvZ3MsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJsb2dzOiBkYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICBibG9nc0xpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgIGJsb2dTa2lwOiBza2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2dzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==