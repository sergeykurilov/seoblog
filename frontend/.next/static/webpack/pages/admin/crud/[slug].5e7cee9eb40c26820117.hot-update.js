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
      formData.set(name, value);
      formData.set('slug', slugify__WEBPACK_IMPORTED_MODULE_14___default()(title));
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "slug", slug), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    console.log(slug);
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      var slugS = data.slug;
      slugS = slug;

      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
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
      lineNumber: 218,
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
      lineNumber: 224,
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
          lineNumber: 233,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: slug,
          onChange: handleChange('slug')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
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
          lineNumber: 239,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
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
          lineNumber: 263,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
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
              lineNumber: 276,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
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
                lineNumber: 282,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
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
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 258,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJ0aXRsZSIsImVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwic2x1ZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdEJsb2ciLCJpbml0Q2F0ZWdvcmllcyIsImluaXRUYWdzIiwicXVlcnkiLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNsdWdpZnkiLCJoYW5kbGVCb2R5IiwiZWRpdEJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUJsb2ciLCJzbHVnUyIsImlzQXV0aCIsInJvbGUiLCJyZXBsYWNlIiwiUm91dGVyIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwidXBkYXRlQmxvZ0Zvcm0iLCJRdWlsbE1vZHVsZXMiLCJRdWlsbEZvcm1hdHMiLCJBUEkiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ04sSUFBTUcsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBR09GLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHdEJHLFVBSHNCO0FBQUEsTUFHVkMsYUFIVTs7QUFBQSxtQkFJTEosc0RBQVEsQ0FBQyxFQUFELENBSkg7QUFBQSxNQUl0QkssSUFKc0I7QUFBQSxNQUloQkMsT0FKZ0I7O0FBQUEsbUJBTUNOLHNEQUFRLENBQUMsRUFBRCxDQU5UO0FBQUEsTUFNdEJPLE9BTnNCO0FBQUEsTUFNYkMsVUFOYSxrQkFNZTs7O0FBTmYsbUJBT09SLHNEQUFRLENBQUMsRUFBRCxDQVBmO0FBQUEsTUFPdEJTLFVBUHNCO0FBQUEsTUFPVkMsYUFQ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SixlQUlJO0FBQUksaUJBQUssRUFBRTtBQUFDdUIsdUJBQVMsRUFBRSxPQUFaO0FBQXFCQyx1QkFBUyxFQUFFO0FBQWhDLGFBQVg7QUFBQSxzQkFBdUQzQixjQUFjO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBbUJJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSSxpQkFBSyxFQUFFO0FBQUMwQix1QkFBUyxFQUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RHpCLFFBQVE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRDSCxDQTVSRDs7R0FBTTFELFU7O01BQUFBLFU7QUE4UlMscUVBQUFvRixtRUFBVSxDQUFDcEYsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL1tzbHVnXS41ZTdjZWU5ZWI0MGMyNjgyMDExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCB1cGRhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQge0FQSSwgRE9NQUlOfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJzbHVnaWZ5XCI7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwge3NzcjogZmFsc2V9KVxyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5jb25zdCBCbG9nVXBkYXRlID0gKHtyb3V0ZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTsgLy8gY2F0ZWdvcmllc1xyXG4gICAgY29uc3QgW2NoZWNrZWRUYWcsIHNldENoZWNrZWRUYWddID0gdXNlU3RhdGUoW10pOyAvLyB0YWdzXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGZvcm1EYXRhOiAnJyxcclxuICAgICAgICBzbHVnOiAnJyxcclxuICAgICAgICBib2R5OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge2Vycm9yLCBzbHVnLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGV9ID0gdmFsdWVzO1xyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpfSk7XHJcbiAgICAgICAgaW5pdEJsb2coKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdEJsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZUJsb2cocm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgc2x1ZzogZGF0YS5zbHVnLCB0aXRsZTogZGF0YS50aXRsZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvZHkoZGF0YS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzQXJyYXkoZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdzQXJyYXkoZGF0YS50YWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDYXRlZ29yaWVzQXJyYXkgPSBibG9nQ2F0ZWdvcmllcyA9PiB7XHJcbiAgICAgICAgbGV0IGNhID0gW107XHJcbiAgICAgICAgYmxvZ0NhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNhLnB1c2goYy5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoY2EpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUYWdzQXJyYXkgPSBibG9nVGFncyA9PiB7XHJcbiAgICAgICAgbGV0IHRhID0gW107XHJcbiAgICAgICAgYmxvZ1RhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLnB1c2godC5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcodGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0VGFncyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxUYWdzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWRUYWcuaW5kZXhPZih0KTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRhZ107XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkVGFnID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaCh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kT3V0Q2F0ZWdvcnkgPSBjID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dFRhZyA9IHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrZWRUYWcuaW5kZXhPZih0KTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmaW5kT3V0Q2F0ZWdvcnkoYy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2MubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93VGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0YWdzICYmXHJcbiAgICAgICAgICAgIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWdzVG9nZ2xlKHQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dFRhZyh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57dC5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3NsdWcnLCBzbHVnaWZ5KHRpdGxlKSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBzbHVnLCBlcnJvcjogJyd9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9keSA9IGUgPT4ge1xyXG4gICAgICAgIHNldEJvZHkoZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNsdWcpXHJcbiAgICAgICAgdXBkYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4sIHJvdXRlci5xdWVyeS5zbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2x1Z1MgPSBkYXRhLnNsdWdcclxuICAgICAgICAgICAgc2x1Z1MgPSBzbHVnXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGBCbG9nIHRpdGxlZCBcIiR7ZGF0YS50aXRsZX1cIiBpcyBzdWNjZXNzZnVsbHkgdXBkYXRlZGBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShgL2FkbWluL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL2FkbWluYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShgL3VzZXIvY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdXRlci5yZXBsYWNlKGAvdXNlcmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7ZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZWRpdEJsb2d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3NsdWd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3NsdWcnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZyBhbWF6aW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlQmxvZ0Zvcm0oKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke3JvdXRlci5xdWVyeS5zbHVnfWB9IGFsdD17dGl0bGV9IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVhdHVyZWQgaW1hZ2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2dVcGRhdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9