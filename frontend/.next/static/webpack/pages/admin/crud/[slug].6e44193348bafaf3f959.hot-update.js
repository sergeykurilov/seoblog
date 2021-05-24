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
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          slug: slugify__WEBPACK_IMPORTED_MODULE_14___default()(title),
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
      lineNumber: 217,
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
      lineNumber: 223,
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
          lineNumber: 232,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: slug,
          onChange: handleChange('slug')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
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
          lineNumber: 238,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
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
          lineNumber: 262,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
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
              lineNumber: 275,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
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
                lineNumber: 281,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 257,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJ0aXRsZSIsImVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwic2x1ZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdEJsb2ciLCJpbml0Q2F0ZWdvcmllcyIsImluaXRUYWdzIiwicXVlcnkiLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsInNsdWdpZnkiLCJoYW5kbGVCb2R5IiwiZWRpdEJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUJsb2ciLCJpc0F1dGgiLCJyb2xlIiwicmVwbGFjZSIsIlJvdXRlciIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInVwZGF0ZUJsb2dGb3JtIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwiQVBJIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOLElBQU1HLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUdPRixzREFBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR3RCRyxVQUhzQjtBQUFBLE1BR1ZDLGFBSFU7O0FBQUEsbUJBSUxKLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJdEJLLElBSnNCO0FBQUEsTUFJaEJDLE9BSmdCOztBQUFBLG1CQU1DTixzREFBUSxDQUFDLEVBQUQsQ0FOVDtBQUFBLE1BTXRCTyxPQU5zQjtBQUFBLE1BTWJDLFVBTmEsa0JBTWU7OztBQU5mLG1CQU9PUixzREFBUSxDQUFDLEVBQUQsQ0FQZjtBQUFBLE1BT3RCUyxVQVBzQjtBQUFBLE1BT1ZDLGFBUFUsa0JBT3FC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QUFxQkMsdUJBQVMsRUFBRTtBQUFoQyxhQUFYO0FBQUEsc0JBQXVEMUIsY0FBYztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixlQW1CSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUksaUJBQUssRUFBRTtBQUFDeUIsdUJBQVMsRUFBRSxPQUFaO0FBQXFCQyx1QkFBUyxFQUFFO0FBQWhDLGFBQVg7QUFBQSxzQkFBdUR4QixRQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0Q0gsQ0EzUkQ7O0dBQU0xRCxVOztNQUFBQSxVO0FBNlJTLHFFQUFBbUYsbUVBQVUsQ0FBQ25GLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9bc2x1Z10uNmU0NDE5MzM0OGJhZmFmM2Y5NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c2luZ2xlQmxvZywgdXBkYXRlQmxvZ30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHdpdGhSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIjtcclxuaW1wb3J0IHtnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCJcclxuaW1wb3J0IHtnZXRBbGxDYXRlZ29yaWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiXHJcbmltcG9ydCB7UXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHN9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3F1aWxsXCJcclxuaW1wb3J0IHtBUEksIERPTUFJTn0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tIFwic2x1Z2lmeVwiO1xyXG5cclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcXVpbGxcIiksIHtzc3I6IGZhbHNlfSlcclxuY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuY29uc3QgQmxvZ1VwZGF0ZSA9ICh7cm91dGVyfSkgPT4ge1xyXG4gICAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7IC8vIGNhdGVnb3JpZXNcclxuICAgIGNvbnN0IFtjaGVja2VkVGFnLCBzZXRDaGVja2VkVGFnXSA9IHVzZVN0YXRlKFtdKTsgLy8gdGFnc1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiAnJyxcclxuICAgICAgICBmb3JtRGF0YTogJycsXHJcbiAgICAgICAgc2x1ZzogJycsXHJcbiAgICAgICAgYm9keTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHtlcnJvciwgc2x1Zywgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlfSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKX0pO1xyXG4gICAgICAgIGluaXRCbG9nKCk7XHJcbiAgICAgICAgaW5pdENhdGVnb3JpZXMoKTtcclxuICAgICAgICBpbml0VGFncygpO1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRCbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIucXVlcnkuc2x1Zykge1xyXG4gICAgICAgICAgICBzaW5nbGVCbG9nKHJvdXRlci5xdWVyeS5zbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHNsdWc6IGRhdGEuc2x1ZywgdGl0bGU6IGRhdGEudGl0bGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRCb2R5KGRhdGEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllc0FycmF5KGRhdGEuY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFnc0FycmF5KGRhdGEudGFncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0Q2F0ZWdvcmllc0FycmF5ID0gYmxvZ0NhdGVnb3JpZXMgPT4ge1xyXG4gICAgICAgIGxldCBjYSA9IFtdO1xyXG4gICAgICAgIGJsb2dDYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjYS5wdXNoKGMuX2lkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRDaGVja2VkKGNhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0VGFnc0FycmF5ID0gYmxvZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGxldCB0YSA9IFtdO1xyXG4gICAgICAgIGJsb2dUYWdzLm1hcCgodCwgaSkgPT4ge1xyXG4gICAgICAgICAgICB0YS5wdXNoKHQuX2lkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKHRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiAnJ30pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkQ2F0ZWdvcnkgPSBjaGVja2VkLmluZGV4T2YoYyk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRdO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaChjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRDYXRlZ29yeSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnY2F0ZWdvcmllcycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRhZ3NUb2dnbGUgPSB0ID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dENhdGVnb3J5ID0gYyA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRUYWcgPSB0ID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dENhdGVnb3J5KGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGFncyAmJlxyXG4gICAgICAgICAgICB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFnc1RvZ2dsZSh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRUYWcodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3QubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdzbHVnJywgc2x1Z2lmeSh0aXRsZSkpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJvZHkgPSBlID0+IHtcclxuICAgICAgICBzZXRCb2R5KGUpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnYm9keScsIGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0QmxvZyA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzbHVnKVxyXG4gICAgICAgIHVwZGF0ZUJsb2coZm9ybURhdGEsIHRva2VuLCByb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Zzogc2x1Z2lmeSh0aXRsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogYEJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGAvYWRtaW4vY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdXRlci5yZXBsYWNlKGAvYWRtaW5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKGAvdXNlci9jcnVkLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnJlcGxhY2UoYC91c2VyYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlZGl0QmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2x1Z30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnc2x1ZycpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0aXRsZScpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgc29tZXRoaW5nIGFtYXppbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQm9keX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGRhdGVCbG9nRm9ybSgpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2JvZHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfS9ibG9nL3Bob3RvLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YH0gYWx0PXt0aXRsZX0gc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GZWF0dXJlZCBpbWFnZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgZmVhdHVyZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG8nKX0gdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgaGlkZGVuLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DYXRlZ29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJ319PntzaG93Q2F0ZWdvcmllcygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRhZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd1RhZ3MoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZ1VwZGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=