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
    formData: '',
    slug: '',
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

      // console.log(e.target.value);
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
    console.log(slug);
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, slug).then(function (data) {
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
      lineNumber: 214,
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
      lineNumber: 220,
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
          lineNumber: 229,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: slug,
          onChange: handleChange('slug')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
          lineNumber: 235,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
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
          lineNumber: 259,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
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
              lineNumber: 272,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
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
                lineNumber: 278,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
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
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 9
  }, _this);
};

_s(BlogUpdate, "Zf9d1BPi7x7kBsotHW5FdELiGkI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJ0aXRsZSIsImVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwic2x1ZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdEJsb2ciLCJpbml0Q2F0ZWdvcmllcyIsImluaXRUYWdzIiwicXVlcnkiLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNsdWdpZnkiLCJoYW5kbGVCb2R5IiwiZWRpdEJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUJsb2ciLCJpc0F1dGgiLCJyb2xlIiwicmVwbGFjZSIsIlJvdXRlciIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInVwZGF0ZUJsb2dGb3JtIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwiQVBJIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOLElBQU1HLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUd4QkcsVUFId0I7QUFBQSxNQUdaQyxhQUhZOztBQUFBLG1CQUlQSixzREFBUSxDQUFDLEVBQUQsQ0FKRDtBQUFBLE1BSXhCSyxJQUp3QjtBQUFBLE1BSWxCQyxPQUprQjs7QUFBQSxtQkFNRE4sc0RBQVEsQ0FBQyxFQUFELENBTlA7QUFBQSxNQU14Qk8sT0FOd0I7QUFBQSxNQU1mQyxVQU5lLGtCQU1hOzs7QUFOYixtQkFPS1Isc0RBQVEsQ0FBQyxFQUFELENBUGI7QUFBQSxNQU94QlMsVUFQd0I7QUFBQSxNQU9aQyxhQVBZLGtCQU9t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O0FBQUksaUJBQUssRUFBRTtBQUFFc0IsdUJBQVMsRUFBRSxPQUFiO0FBQXNCQyx1QkFBUyxFQUFFO0FBQWpDLGFBQVg7QUFBQSxzQkFBeUQxQixjQUFjO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBbUJJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSSxpQkFBSyxFQUFFO0FBQUV5Qix1QkFBUyxFQUFFLE9BQWI7QUFBc0JDLHVCQUFTLEVBQUU7QUFBakMsYUFBWDtBQUFBLHNCQUF5RHhCLFFBQVE7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQXhSRDs7R0FBTTFELFU7O01BQUFBLFU7QUEwUlMscUVBQUFtRixtRUFBVSxDQUFDbkYsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL1tzbHVnXS41ODcwMjJlZmYzN2YzYWM2ZTk1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCB1cGRhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQge0FQSSwgRE9NQUlOfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJzbHVnaWZ5XCI7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwge3NzcjogZmFsc2V9KVxyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5jb25zdCBCbG9nVXBkYXRlID0gKHsgcm91dGVyIH0pID0+IHtcclxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pOyAvLyBjYXRlZ29yaWVzXHJcbiAgICBjb25zdCBbY2hlY2tlZFRhZywgc2V0Q2hlY2tlZFRhZ10gPSB1c2VTdGF0ZShbXSk7IC8vIHRhZ3NcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgZm9ybURhdGE6ICcnLFxyXG4gICAgICAgIHNsdWc6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCBzbHVnICxzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUgfSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcbiAgICAgICAgaW5pdEJsb2coKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdEJsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZUJsb2cocm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHNsdWc6IGRhdGEuc2x1ZywgdGl0bGU6IGRhdGEudGl0bGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShkYXRhLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXNBcnJheShkYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ3NBcnJheShkYXRhLnRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENhdGVnb3JpZXNBcnJheSA9IGJsb2dDYXRlZ29yaWVzID0+IHtcclxuICAgICAgICBsZXQgY2EgPSBbXTtcclxuICAgICAgICBibG9nQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY2EucHVzaChjLl9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChjYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFRhZ3NBcnJheSA9IGJsb2dUYWdzID0+IHtcclxuICAgICAgICBsZXQgdGEgPSBbXTtcclxuICAgICAgICBibG9nVGFncy5tYXAoKHQsIGkpID0+IHtcclxuICAgICAgICAgICAgdGEucHVzaCh0Ll9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyh0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWQoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdzVG9nZ2xlID0gdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dENhdGVnb3J5ID0gYyA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRUYWcgPSB0ID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dENhdGVnb3J5KGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGFncyAmJlxyXG4gICAgICAgICAgICB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFnc1RvZ2dsZSh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRUYWcodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3QubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNsdWcgPSBuYW1lID09PSAnc2x1ZycgJiYgc2x1Z2lmeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgc2x1Zyk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb2R5ID0gZSA9PiB7XHJcbiAgICAgICAgc2V0Qm9keShlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2JvZHknLCBlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdEJsb2cgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2x1ZylcclxuICAgICAgICB1cGRhdGVCbG9nKGZvcm1EYXRhLCB0b2tlbiwgc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiAnJywgc3VjY2VzczogYEJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYCB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoYC9hZG1pbi9jcnVkLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnJlcGxhY2UoYC9hZG1pbmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoYC91c2VyL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL3VzZXJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlZGl0QmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2x1Z30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnc2x1ZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgYW1hemluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZUJsb2dGb3JtKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9keSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtyb3V0ZXIucXVlcnkuc2x1Z31gfSBhbHQ9e3RpdGxlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlYXR1cmVkIGltYWdlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNhdGVnb3JpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+e3Nob3dDYXRlZ29yaWVzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VGFnczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93VGFncygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nVXBkYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==