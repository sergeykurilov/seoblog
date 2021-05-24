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
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! slugify */ "../node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_14__);




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
    slug: '',
    formData: '',
    body: ''
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      slug = values.slug,
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
            slug: data.slug,
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
          lineNumber: 151,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          lineNumber: 168,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this);
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      var slug = name === 'slug' && slugify__WEBPACK_IMPORTED_MODULE_14___default()(e.target.value);
      formData.set(name, value);
      formData.set(name, slug);
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
      lineNumber: 212,
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
      lineNumber: 218,
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
          lineNumber: 227,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: slug,
          onChange: handleChange('slug')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
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
          lineNumber: 233,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 225,
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
          lineNumber: 257,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
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
              lineNumber: 270,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
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
                lineNumber: 276,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 9
  }, _this);
};

_s(BlogUpdate, "GIv9rrIt8jxepSvowBIoGnSSmGc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJ0aXRsZSIsImVycm9yIiwic3VjY2VzcyIsInNsdWciLCJmb3JtRGF0YSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdEJsb2ciLCJpbml0Q2F0ZWdvcmllcyIsImluaXRUYWdzIiwicXVlcnkiLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNsdWdpZnkiLCJoYW5kbGVCb2R5IiwiZWRpdEJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUJsb2ciLCJpc0F1dGgiLCJyb2xlIiwicmVwbGFjZSIsIlJvdXRlciIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInVwZGF0ZUJsb2dGb3JtIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwiQVBJIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOLElBQU1HLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUdPRixzREFBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR3RCRyxVQUhzQjtBQUFBLE1BR1ZDLGFBSFU7O0FBQUEsbUJBSUxKLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJdEJLLElBSnNCO0FBQUEsTUFJaEJDLE9BSmdCOztBQUFBLG1CQU1DTixzREFBUSxDQUFDLEVBQUQsQ0FOVDtBQUFBLE1BTXRCTyxPQU5zQjtBQUFBLE1BTWJDLFVBTmEsa0JBTWU7OztBQU5mLG1CQU9PUixzREFBUSxDQUFDLEVBQUQsQ0FQZjtBQUFBLE1BT3RCUyxVQVBzQjtBQUFBLE1BT1ZDLGFBUFUsa0JBT3FC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QkFBUyxFQUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RDFCLGNBQWM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosZUFtQkk7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLGlCQUFLLEVBQUU7QUFBQ3lCLHVCQUFTLEVBQUUsT0FBWjtBQUFxQkMsdUJBQVMsRUFBRTtBQUFoQyxhQUFYO0FBQUEsc0JBQXVEeEIsUUFBUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNENILENBdFJEOztHQUFNMUQsVTs7TUFBQUEsVTtBQXdSUyxxRUFBQW1GLG1FQUFVLENBQUNuRixVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvW3NsdWddLjEyNTNjMGFmZDA4OWI5N2U5YmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3NpbmdsZUJsb2csIHVwZGF0ZUJsb2d9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Jsb2dcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB3aXRoUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiXHJcbmltcG9ydCB7Z2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIlxyXG5pbXBvcnQge1F1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzfSBmcm9tIFwiLi4vLi4vaGVscGVycy9xdWlsbFwiXHJcbmltcG9ydCB7QVBJLCBET01BSU59IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSBcInNsdWdpZnlcIjtcclxuXHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXF1aWxsXCIpLCB7c3NyOiBmYWxzZX0pXHJcbmNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcbmNvbnN0IEJsb2dVcGRhdGUgPSAoe3JvdXRlcn0pID0+IHtcclxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pOyAvLyBjYXRlZ29yaWVzXHJcbiAgICBjb25zdCBbY2hlY2tlZFRhZywgc2V0Q2hlY2tlZFRhZ10gPSB1c2VTdGF0ZShbXSk7IC8vIHRhZ3NcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgc2x1ZzogJycsXHJcbiAgICAgICAgZm9ybURhdGE6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7ZXJyb3IsIHNsdWcsIHN1Y2Nlc3MsIGZvcm1EYXRhLCB0aXRsZX0gPSB2YWx1ZXM7XHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCl9KTtcclxuICAgICAgICBpbml0QmxvZygpO1xyXG4gICAgICAgIGluaXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaW5pdFRhZ3MoKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICBjb25zdCBpbml0QmxvZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnNsdWcpIHtcclxuICAgICAgICAgICAgc2luZ2xlQmxvZyhyb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBzbHVnOiBkYXRhLnNsdWcsIHRpdGxlOiBkYXRhLnRpdGxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShkYXRhLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXNBcnJheShkYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ3NBcnJheShkYXRhLnRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENhdGVnb3JpZXNBcnJheSA9IGJsb2dDYXRlZ29yaWVzID0+IHtcclxuICAgICAgICBsZXQgY2EgPSBbXTtcclxuICAgICAgICBibG9nQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY2EucHVzaChjLl9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChjYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFRhZ3NBcnJheSA9IGJsb2dUYWdzID0+IHtcclxuICAgICAgICBsZXQgdGEgPSBbXTtcclxuICAgICAgICBibG9nVGFncy5tYXAoKHQsIGkpID0+IHtcclxuICAgICAgICAgICAgdGEucHVzaCh0Ll9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyh0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IGMgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWQoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdzVG9nZ2xlID0gdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiAnJ30pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVGFnXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZFRhZywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyhhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFncycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRDYXRlZ29yeSA9IGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kT3V0VGFnID0gdCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgJiZcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRDYXRlZ29yeShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MgJiZcclxuICAgICAgICAgICAgdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ3NUb2dnbGUodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmaW5kT3V0VGFnKHQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNsdWcgPSBuYW1lID09PSAnc2x1ZycgJiYgc2x1Z2lmeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgc2x1Zyk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJyd9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9keSA9IGUgPT4ge1xyXG4gICAgICAgIHNldEJvZHkoZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJsb2coZm9ybURhdGEsIHRva2VuLCByb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHRpdGxlOiAnJywgc3VjY2VzczogYEJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShgL2FkbWluL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL2FkbWluYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShgL3VzZXIvY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdXRlci5yZXBsYWNlKGAvdXNlcmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7ZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZWRpdEJsb2d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3NsdWd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3NsdWcnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZyBhbWF6aW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlQmxvZ0Zvcm0oKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke3JvdXRlci5xdWVyeS5zbHVnfWB9IGFsdD17dGl0bGV9IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVhdHVyZWQgaW1hZ2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2dVcGRhdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9