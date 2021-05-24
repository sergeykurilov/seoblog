webpackHotUpdate_N_E("pages/admin/crud/[slug]",{

/***/ "./components/crud/BlogUpdate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogUpdate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dist_client_with_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/with-router */ "./node_modules/next/dist/client/with-router.js");
/* harmony import */ var next_dist_client_with_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_with_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/tags */ "./actions/tags.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _helpers_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/quill */ "./helpers/quill.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../config */ "./config.js");




var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\BlogUpdate.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ["react-quill"]
  }
});
_c2 = ReactQuill;
var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])("token");

var BlogUpdate = function BlogUpdate(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      tags = _useState3[0],
      setTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checked = _useState4[0],
      setChecked = _useState4[1]; // categories


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checkedTag = _useState5[0],
      setCheckedTag = _useState5[1]; // tags


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: '',
    error: '',
    success: '',
    formData: '',
    body: ''
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      success = values.success,
      formData = values.formData,
      title = values.title;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
    initBlog();
    initCategories();
    initTags();
  }, [router]);

  var initBlog = function initBlog() {
    if (router.query.slug) {
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["singleBlog"])(router.query.slug).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues(_objectSpread(_objectSpread({}, values), {}, {
            title: data.title
          }));
          setBody(data.body);
          setCategoriesArray(data.categories);
          setTagsArray(data.tags);
        }
      });
    }
  };

  var setCategoriesArray = function setCategoriesArray(blogCategories) {
    var ca = [];
    blogCategories.map(function (c, i) {
      ca.push(c._id);
    });
    setChecked(ca);
  };

  var setTagsArray = function setTagsArray(blogTags) {
    var ta = [];
    blogTags.map(function (t, i) {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_11__["getAllCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var initTags = function initTags() {
    Object(_actions_tags__WEBPACK_IMPORTED_MODULE_10__["getAllTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var handleToggle = function handleToggle(c) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checked.indexOf(c);

      var all = Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(checked);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log(all);
      setChecked(all);
      formData.set('categories', all);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checkedTag.indexOf(t);

      var all = Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(checkedTag);

      if (clickedTag === -1) {
        all.push(t);
      } else {
        all.splice(clickedTag, 1);
      }

      console.log(all);
      setCheckedTag(all);
      formData.set('tags', all);
    };
  };

  var findOutCategory = function findOutCategory(c) {
    var result = checked.indexOf(c);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var findOutTag = function findOutTag(t) {
    var result = checkedTag.indexOf(t);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleToggle(c._id),
          checked: findOutCategory(c._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this);
    });
  };

  var showTags = function showTags() {
    return tags && tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleTagsToggle(t._id),
          checked: findOutTag(t._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, _this);
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          title: '',
          success: "Blog titled \"".concat(data.title, "\" is successfully updated")
        }));

        if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role === 1) {
          router.replace("/admin/crud/".concat(router.query.slug)); // router.replace(`/admin`);
        } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role === 0) {
          Router.replace("/user/crud/".concat(router.query.slug)); // router.replace(`/user`);
        }
      }
    });
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
      lineNumber: 209,
      columnNumber: 9
    }, _this);
  };

  var showSuccess = function showSuccess() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-success",
      style: {
        display: success ? '' : 'none'
      },
      children: success
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }, _this);
  };

  var updateBlogForm = function updateBlogForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: editBlog,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReactQuill, {
          modules: _helpers_quill__WEBPACK_IMPORTED_MODULE_12__["QuillModules"],
          formats: _helpers_quill__WEBPACK_IMPORTED_MODULE_12__["QuillFormats"],
          value: body,
          placeholder: "Write something amazing...",
          onChange: handleBody
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid pb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [updateBlogForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-3",
          children: [showSuccess(), showError()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group pb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "Featured image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "btn btn-outline-info",
              children: ["Upload featured image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: handleChange('photo'),
                type: "file",
                accept: "image/*",
                hidden: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 9
  }, _this);
};

_s(BlogUpdate, "TE9nZzB148wU4wASh6GufdrBRpA=");

_c3 = BlogUpdate;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = next_dist_client_with_router__WEBPACK_IMPORTED_MODULE_9___default()(BlogUpdate));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "BlogUpdate");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJ0aXRsZSIsImVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwiRm9ybURhdGEiLCJpbml0QmxvZyIsImluaXRDYXRlZ29yaWVzIiwiaW5pdFRhZ3MiLCJxdWVyeSIsInNsdWciLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZUJvZHkiLCJlZGl0QmxvZyIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlQmxvZyIsImlzQXV0aCIsInJvbGUiLCJyZXBsYWNlIiwiUm91dGVyIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwidXBkYXRlQmxvZ0Zvcm0iLCJRdWlsbE1vZHVsZXMiLCJRdWlsbEZvcm1hdHMiLCJBUEkiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTFCO01BQU1GLFU7QUFDTixJQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxFQUFELENBREQ7QUFBQSxNQUN4QkMsSUFEd0I7QUFBQSxNQUNsQkMsT0FEa0I7O0FBQUEsbUJBR0tGLHNEQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHeEJHLFVBSHdCO0FBQUEsTUFHWkMsYUFIWTs7QUFBQSxtQkFJUEosc0RBQVEsQ0FBQyxFQUFELENBSkQ7QUFBQSxNQUl4QkssSUFKd0I7QUFBQSxNQUlsQkMsT0FKa0I7O0FBQUEsbUJBTUROLHNEQUFRLENBQUMsRUFBRCxDQU5QO0FBQUEsTUFNeEJPLE9BTndCO0FBQUEsTUFNZkMsVUFOZSxrQkFNYTs7O0FBTmIsbUJBT0tSLHNEQUFRLENBQUMsRUFBRCxDQVBiO0FBQUEsTUFPeEJTLFVBUHdCO0FBQUEsTUFPWkMsYUFQWSxrQkFPbUI7OztBQVBuQixtQkFTSFYsc0RBQVEsQ0FBQztBQUNqQ1csU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFdBQU8sRUFBRSxFQUh3QjtBQUlqQ0MsWUFBUSxFQUFFLEVBSnVCO0FBS2pDYixRQUFJLEVBQUU7QUFMMkIsR0FBRCxDQVRMO0FBQUEsTUFTeEJjLE1BVHdCO0FBQUEsTUFTaEJDLFNBVGdCOztBQUFBLE1BaUJ2QkosS0FqQnVCLEdBaUJhRyxNQWpCYixDQWlCdkJILEtBakJ1QjtBQUFBLE1BaUJoQkMsT0FqQmdCLEdBaUJhRSxNQWpCYixDQWlCaEJGLE9BakJnQjtBQUFBLE1BaUJQQyxRQWpCTyxHQWlCYUMsTUFqQmIsQ0FpQlBELFFBakJPO0FBQUEsTUFpQkdILEtBakJILEdBaUJhSSxNQWpCYixDQWlCR0osS0FqQkg7QUFrQi9CLE1BQU1mLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCO0FBRUFvQix5REFBUyxDQUFDLFlBQU07QUFDWkQsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjRCxjQUFRLEVBQUUsSUFBSUksUUFBSjtBQUF4QixPQUFUO0FBQ0FDLFlBQVE7QUFDUkMsa0JBQWM7QUFDZEMsWUFBUTtBQUNYLEdBTFEsRUFLTixDQUFDdEIsTUFBRCxDQUxNLENBQVQ7O0FBT0EsTUFBTW9CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSXBCLE1BQU0sQ0FBQ3VCLEtBQVAsQ0FBYUMsSUFBakIsRUFBdUI7QUFDbkJDLHNFQUFVLENBQUN6QixNQUFNLENBQUN1QixLQUFQLENBQWFDLElBQWQsQ0FBVixDQUE4QkUsSUFBOUIsQ0FBbUMsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZDLFlBQUlBLElBQUksQ0FBQ2QsS0FBVCxFQUFnQjtBQUNaZSxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ2QsS0FBakI7QUFDSCxTQUZELE1BRU87QUFDSEksbUJBQVMsaUNBQU1ELE1BQU47QUFBY0osaUJBQUssRUFBRWUsSUFBSSxDQUFDZjtBQUExQixhQUFUO0FBQ0FULGlCQUFPLENBQUN3QixJQUFJLENBQUN6QixJQUFOLENBQVA7QUFDQTRCLDRCQUFrQixDQUFDSCxJQUFJLENBQUN2QixVQUFOLENBQWxCO0FBQ0EyQixzQkFBWSxDQUFDSixJQUFJLENBQUNyQixJQUFOLENBQVo7QUFDSDtBQUNKLE9BVEQ7QUFVSDtBQUNKLEdBYkQ7O0FBZUEsTUFBTXdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUUsY0FBYyxFQUFJO0FBQ3pDLFFBQUlDLEVBQUUsR0FBRyxFQUFUO0FBQ0FELGtCQUFjLENBQUNFLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDekJILFFBQUUsQ0FBQ0ksSUFBSCxDQUFRRixDQUFDLENBQUNHLEdBQVY7QUFDSCxLQUZEO0FBR0E3QixjQUFVLENBQUN3QixFQUFELENBQVY7QUFDSCxHQU5EOztBQVFBLE1BQU1GLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFRLFFBQVEsRUFBSTtBQUM3QixRQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUNBRCxZQUFRLENBQUNMLEdBQVQsQ0FBYSxVQUFDTyxDQUFELEVBQUlMLENBQUosRUFBVTtBQUNuQkksUUFBRSxDQUFDSCxJQUFILENBQVFJLENBQUMsQ0FBQ0gsR0FBVjtBQUNILEtBRkQ7QUFHQTNCLGlCQUFhLENBQUM2QixFQUFELENBQWI7QUFDSCxHQU5EOztBQVFBLE1BQU1uQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJxQiwrRUFBZ0IsR0FBR2hCLElBQW5CLENBQXdCLFVBQUFDLElBQUksRUFBSTtBQUM1QixVQUFJQSxJQUFJLENBQUNkLEtBQVQsRUFBZ0I7QUFDWkksaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsZUFBSyxFQUFFYyxJQUFJLENBQUNkO0FBQTFCLFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSFIscUJBQWEsQ0FBQ3NCLElBQUQsQ0FBYjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUkQ7O0FBVUEsTUFBTUwsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQnFCLHFFQUFVLEdBQUdqQixJQUFiLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN0QixVQUFJQSxJQUFJLENBQUNkLEtBQVQsRUFBZ0I7QUFDWkksaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsZUFBSyxFQUFFYyxJQUFJLENBQUNkO0FBQTFCLFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSE4sZUFBTyxDQUFDb0IsSUFBRCxDQUFQO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSRDs7QUFVQSxNQUFNaUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVQsQ0FBQztBQUFBLFdBQUksWUFBTTtBQUM1QmxCLGVBQVMsaUNBQU1ELE1BQU47QUFBY0gsYUFBSyxFQUFFO0FBQXJCLFNBQVQsQ0FENEIsQ0FFNUI7O0FBQ0EsVUFBTWdDLGVBQWUsR0FBR3JDLE9BQU8sQ0FBQ3NDLE9BQVIsQ0FBZ0JYLENBQWhCLENBQXhCOztBQUNBLFVBQU1ZLEdBQUcsR0FBRyw4SUFBSXZDLE9BQVAsQ0FBVDs7QUFFQSxVQUFJcUMsZUFBZSxLQUFLLENBQUMsQ0FBekIsRUFBNEI7QUFDeEJFLFdBQUcsQ0FBQ1YsSUFBSixDQUFTRixDQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hZLFdBQUcsQ0FBQ0MsTUFBSixDQUFXSCxlQUFYLEVBQTRCLENBQTVCO0FBQ0g7O0FBQ0RqQixhQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVo7QUFDQXRDLGdCQUFVLENBQUNzQyxHQUFELENBQVY7QUFDQWhDLGNBQVEsQ0FBQ2tDLEdBQVQsQ0FBYSxZQUFiLEVBQTJCRixHQUEzQjtBQUNILEtBZHFCO0FBQUEsR0FBdEI7O0FBZ0JBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQVQsQ0FBQztBQUFBLFdBQUksWUFBTTtBQUNoQ3hCLGVBQVMsaUNBQU1ELE1BQU47QUFBY0gsYUFBSyxFQUFFO0FBQXJCLFNBQVQsQ0FEZ0MsQ0FFaEM7O0FBQ0EsVUFBTXNDLFVBQVUsR0FBR3pDLFVBQVUsQ0FBQ29DLE9BQVgsQ0FBbUJMLENBQW5CLENBQW5COztBQUNBLFVBQU1NLEdBQUcsR0FBRyw4SUFBSXJDLFVBQVAsQ0FBVDs7QUFFQSxVQUFJeUMsVUFBVSxLQUFLLENBQUMsQ0FBcEIsRUFBdUI7QUFDbkJKLFdBQUcsQ0FBQ1YsSUFBSixDQUFTSSxDQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hNLFdBQUcsQ0FBQ0MsTUFBSixDQUFXRyxVQUFYLEVBQXVCLENBQXZCO0FBQ0g7O0FBQ0R2QixhQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVo7QUFDQXBDLG1CQUFhLENBQUNvQyxHQUFELENBQWI7QUFDQWhDLGNBQVEsQ0FBQ2tDLEdBQVQsQ0FBYSxNQUFiLEVBQXFCRixHQUFyQjtBQUNILEtBZHlCO0FBQUEsR0FBMUI7O0FBZ0JBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQWpCLENBQUMsRUFBSTtBQUN6QixRQUFNa0IsTUFBTSxHQUFHN0MsT0FBTyxDQUFDc0MsT0FBUixDQUFnQlgsQ0FBaEIsQ0FBZjs7QUFDQSxRQUFJa0IsTUFBTSxLQUFLLENBQUMsQ0FBaEIsRUFBbUI7QUFDZixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7O0FBU0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWIsQ0FBQyxFQUFJO0FBQ3BCLFFBQU1ZLE1BQU0sR0FBRzNDLFVBQVUsQ0FBQ29DLE9BQVgsQ0FBbUJMLENBQW5CLENBQWY7O0FBQ0EsUUFBSVksTUFBTSxLQUFLLENBQUMsQ0FBaEIsRUFBbUI7QUFDZixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7O0FBU0EsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFdBQ0luRCxVQUFVLElBQ1ZBLFVBQVUsQ0FBQzhCLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwwQkFDWDtBQUFZLGlCQUFTLEVBQUMsZUFBdEI7QUFBQSxnQ0FDSTtBQUNJLGtCQUFRLEVBQUVRLFlBQVksQ0FBQ1QsQ0FBQyxDQUFDRyxHQUFILENBRDFCO0FBRUksaUJBQU8sRUFBRWMsZUFBZSxDQUFDakIsQ0FBQyxDQUFDRyxHQUFILENBRjVCO0FBR0ksY0FBSSxFQUFDLFVBSFQ7QUFJSSxtQkFBUyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQU8sbUJBQVMsRUFBQyxrQkFBakI7QUFBQSxvQkFBcUNILENBQUMsQ0FBQ3FCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQSxTQUFTcEIsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFmLENBRko7QUFjSCxHQWZEOztBQWlCQSxNQUFNcUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixXQUNJbkQsSUFBSSxJQUNKQSxJQUFJLENBQUM0QixHQUFMLENBQVMsVUFBQ08sQ0FBRCxFQUFJTCxDQUFKO0FBQUEsMEJBQ0w7QUFBWSxpQkFBUyxFQUFDLGVBQXRCO0FBQUEsZ0NBQ0k7QUFDSSxrQkFBUSxFQUFFYyxnQkFBZ0IsQ0FBQ1QsQ0FBQyxDQUFDSCxHQUFILENBRDlCO0FBRUksaUJBQU8sRUFBRWdCLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDSCxHQUFILENBRnZCO0FBR0ksY0FBSSxFQUFDLFVBSFQ7QUFJSSxtQkFBUyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQU8sbUJBQVMsRUFBQyxrQkFBakI7QUFBQSxvQkFBcUNHLENBQUMsQ0FBQ2U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBLFNBQVNwQixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESztBQUFBLEtBQVQsQ0FGSjtBQWNILEdBZkQ7O0FBaUJBLE1BQU1zQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBRixJQUFJO0FBQUEsV0FBSSxVQUFBRyxDQUFDLEVBQUk7QUFBQTs7QUFDOUI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUksS0FBSyxPQUFULEdBQW1CRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBbkIsR0FBdUNILENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUE5RDtBQUNBN0MsY0FBUSxDQUFDa0MsR0FBVCxDQUFhTyxJQUFiLEVBQW1CSSxLQUFuQjtBQUNBM0MsZUFBUyxpQ0FBTUQsTUFBTix3TEFBZXdDLElBQWYsRUFBc0JJLEtBQXRCLDBLQUE2QjdDLFFBQTdCLHVLQUE4QyxFQUE5QyxvQkFBVDtBQUNILEtBTHdCO0FBQUEsR0FBekI7O0FBT0EsTUFBTWdELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFKLENBQUMsRUFBSTtBQUNwQnhELFdBQU8sQ0FBQ3dELENBQUQsQ0FBUDtBQUNBNUMsWUFBUSxDQUFDa0MsR0FBVCxDQUFhLE1BQWIsRUFBcUJVLENBQXJCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBTCxDQUFDLEVBQUk7QUFDbEJBLEtBQUMsQ0FBQ00sY0FBRjtBQUNBQyxvRUFBVSxDQUFDbkQsUUFBRCxFQUFXbEIsS0FBWCxFQUFrQkcsTUFBTSxDQUFDdUIsS0FBUCxDQUFhQyxJQUEvQixDQUFWLENBQStDRSxJQUEvQyxDQUFvRCxVQUFBQyxJQUFJLEVBQUk7QUFDeEQsVUFBSUEsSUFBSSxDQUFDZCxLQUFULEVBQWdCO0FBQ1pJLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNILGVBQUssRUFBRWMsSUFBSSxDQUFDZDtBQUExQixXQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hJLGlCQUFTLGlDQUFNRCxNQUFOO0FBQWNKLGVBQUssRUFBRSxFQUFyQjtBQUF5QkUsaUJBQU8sMEJBQWtCYSxJQUFJLENBQUNmLEtBQXZCO0FBQWhDLFdBQVQ7O0FBQ0EsWUFBSXVELDREQUFNLE1BQU1BLDREQUFNLEdBQUdDLElBQVQsS0FBa0IsQ0FBbEMsRUFBcUM7QUFDakNwRSxnQkFBTSxDQUFDcUUsT0FBUCx1QkFBOEJyRSxNQUFNLENBQUN1QixLQUFQLENBQWFDLElBQTNDLEdBRGlDLENBRWpDO0FBQ0gsU0FIRCxNQUdPLElBQUkyQyw0REFBTSxNQUFNQSw0REFBTSxHQUFHQyxJQUFULEtBQWtCLENBQWxDLEVBQXFDO0FBQ3hDRSxnQkFBTSxDQUFDRCxPQUFQLHNCQUE2QnJFLE1BQU0sQ0FBQ3VCLEtBQVAsQ0FBYUMsSUFBMUMsR0FEd0MsQ0FFeEM7QUFDSDtBQUNKO0FBQ0osS0FiRDtBQWNILEdBaEJEOztBQWtCQSxNQUFNK0MsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSx3QkFDZDtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFvQyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFM0QsS0FBSyxHQUFHLEVBQUgsR0FBUTtBQUF4QixPQUEzQztBQUFBLGdCQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYztBQUFBLEdBQWxCOztBQU1BLE1BQU00RCxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHdCQUNoQjtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFxQyxXQUFLLEVBQUU7QUFBRUQsZUFBTyxFQUFFMUQsT0FBTyxHQUFHLEVBQUgsR0FBUTtBQUExQixPQUE1QztBQUFBLGdCQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZ0I7QUFBQSxHQUFwQjs7QUFNQSxNQUFNNEQsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLHdCQUNJO0FBQU0sY0FBUSxFQUFFVixRQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFDLGNBQTdCO0FBQTRDLGVBQUssRUFBRXBELEtBQW5EO0FBQTBELGtCQUFRLEVBQUU4QyxZQUFZLENBQUMsT0FBRDtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDSSxxRUFBQyxVQUFEO0FBQ0ksaUJBQU8sRUFBRWlCLDREQURiO0FBRUksaUJBQU8sRUFBRUMsNERBRmI7QUFHSSxlQUFLLEVBQUUxRSxJQUhYO0FBSUkscUJBQVcsRUFBQyw0QkFKaEI7QUFLSSxrQkFBUSxFQUFFNkQ7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBZ0JJO0FBQUEsK0JBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUF3QkgsR0F6QkQ7O0FBMkJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsbUJBQ0tXLGNBQWMsRUFEbkIsZUFHSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLHFCQUNLRCxXQUFXLEVBRGhCLEVBRUtGLFNBQVMsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosRUFRS3JFLElBQUksaUJBQ0Q7QUFBSyxhQUFHLFlBQUsyRSw0Q0FBTCx5QkFBdUI3RSxNQUFNLENBQUN1QixLQUFQLENBQWFDLElBQXBDLENBQVI7QUFBb0QsYUFBRyxFQUFFWixLQUF6RDtBQUFnRSxlQUFLLEVBQUU7QUFBRWtFLGlCQUFLLEVBQUU7QUFBVDtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBY0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFPLHVCQUFTLEVBQUMsc0JBQWpCO0FBQUEsK0RBRUk7QUFBTyx3QkFBUSxFQUFFcEIsWUFBWSxDQUFDLE9BQUQsQ0FBN0I7QUFBd0Msb0JBQUksRUFBQyxNQUE3QztBQUFvRCxzQkFBTSxFQUFDLFNBQTNEO0FBQXFFLHNCQUFNO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFhSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUlJO0FBQUksaUJBQUssRUFBRTtBQUFFcUIsdUJBQVMsRUFBRSxPQUFiO0FBQXNCQyx1QkFBUyxFQUFFO0FBQWpDLGFBQVg7QUFBQSxzQkFBeUR6QixjQUFjO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBbUJJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSSxpQkFBSyxFQUFFO0FBQUV3Qix1QkFBUyxFQUFFLE9BQWI7QUFBc0JDLHVCQUFTLEVBQUU7QUFBakMsYUFBWDtBQUFBLHNCQUF5RHZCLFFBQVE7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQW5SRDs7R0FBTTFELFU7O01BQUFBLFU7QUFxUlMscUVBQUFrRixtRUFBVSxDQUFDbEYsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL1tzbHVnXS41ZDNjNWI3M2I5YTM2NjIyNzA3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCB1cGRhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQge0FQSSwgRE9NQUlOfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwge3NzcjogZmFsc2V9KVxyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5jb25zdCBCbG9nVXBkYXRlID0gKHsgcm91dGVyIH0pID0+IHtcclxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pOyAvLyBjYXRlZ29yaWVzXHJcbiAgICBjb25zdCBbY2hlY2tlZFRhZywgc2V0Q2hlY2tlZFRhZ10gPSB1c2VTdGF0ZShbXSk7IC8vIHRhZ3NcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgZm9ybURhdGE6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUgfSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcbiAgICAgICAgaW5pdEJsb2coKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdEJsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZUJsb2cocm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiBkYXRhLnRpdGxlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvZHkoZGF0YS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzQXJyYXkoZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdzQXJyYXkoZGF0YS50YWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDYXRlZ29yaWVzQXJyYXkgPSBibG9nQ2F0ZWdvcmllcyA9PiB7XHJcbiAgICAgICAgbGV0IGNhID0gW107XHJcbiAgICAgICAgYmxvZ0NhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNhLnB1c2goYy5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoY2EpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUYWdzQXJyYXkgPSBibG9nVGFncyA9PiB7XHJcbiAgICAgICAgbGV0IHRhID0gW107XHJcbiAgICAgICAgYmxvZ1RhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLnB1c2godC5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcodGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVGFnXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZFRhZywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyhhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFncycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRDYXRlZ29yeSA9IGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kT3V0VGFnID0gdCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgJiZcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRDYXRlZ29yeShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MgJiZcclxuICAgICAgICAgICAgdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ3NUb2dnbGUodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmaW5kT3V0VGFnKHQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9keSA9IGUgPT4ge1xyXG4gICAgICAgIHNldEJvZHkoZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJsb2coZm9ybURhdGEsIHRva2VuLCByb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiAnJywgc3VjY2VzczogYEJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYCB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoYC9hZG1pbi9jcnVkLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnJlcGxhY2UoYC9hZG1pbmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoYC91c2VyL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL3VzZXJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlZGl0QmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGFtYXppbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGRhdGVCbG9nRm9ybSgpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2JvZHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfS9ibG9nL3Bob3RvLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YH0gYWx0PXt0aXRsZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GZWF0dXJlZCBpbWFnZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBmZWF0dXJlZCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90bycpfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DYXRlZ29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93Q2F0ZWdvcmllcygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRhZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT57c2hvd1RhZ3MoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZ1VwZGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=