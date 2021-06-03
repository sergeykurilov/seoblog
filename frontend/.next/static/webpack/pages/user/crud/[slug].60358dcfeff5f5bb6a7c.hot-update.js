webpackHotUpdate_N_E("pages/user/crud/[slug]",{

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
    error: '',
    success: '',
    formData: '',
    title: '',
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
          lineNumber: 153,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
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
          lineNumber: 170,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
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
      console.log(value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    var formData = new FormData();
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
          // Router.replace(`/admin/crud/${router.query.slug}`);
          router.replace("/admin");
        } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role === 0) {
          // Router.replace(`/user/crud/${router.query.slug}`);
          router.replace("/user");
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
      lineNumber: 215,
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
      lineNumber: 221,
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
        lineNumber: 229,
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
      lineNumber: 228,
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
              lineNumber: 275,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
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
                lineNumber: 279,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 277,
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
            lineNumber: 284,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
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

_s(BlogUpdate, "3LqpizSLvv8P+MFX+q4A4Ks4CN8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJlcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwiRm9ybURhdGEiLCJpbml0QmxvZyIsImluaXRDYXRlZ29yaWVzIiwiaW5pdFRhZ3MiLCJxdWVyeSIsInNsdWciLCJzaW5nbGVCbG9nIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcmllc0FycmF5Iiwic2V0VGFnc0FycmF5IiwiYmxvZ0NhdGVnb3JpZXMiLCJjYSIsIm1hcCIsImMiLCJpIiwicHVzaCIsIl9pZCIsImJsb2dUYWdzIiwidGEiLCJ0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldEFsbFRhZ3MiLCJoYW5kbGVUb2dnbGUiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwic3BsaWNlIiwic2V0IiwiaGFuZGxlVGFnc1RvZ2dsZSIsImNsaWNrZWRUYWciLCJmaW5kT3V0Q2F0ZWdvcnkiLCJyZXN1bHQiLCJmaW5kT3V0VGFnIiwic2hvd0NhdGVnb3JpZXMiLCJuYW1lIiwic2hvd1RhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZUJvZHkiLCJlZGl0QmxvZyIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlQmxvZyIsImlzQXV0aCIsInJvbGUiLCJyZXBsYWNlIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwidXBkYXRlQmxvZ0Zvcm0iLCJRdWlsbE1vZHVsZXMiLCJRdWlsbEZvcm1hdHMiLCJBUEkiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ04sSUFBTUcsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDeEJDLElBRHdCO0FBQUEsTUFDbEJDLE9BRGtCOztBQUFBLG1CQUdLRixzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR3hCRyxVQUh3QjtBQUFBLE1BR1pDLGFBSFk7O0FBQUEsbUJBSVBKLHNEQUFRLENBQUMsRUFBRCxDQUpEO0FBQUEsTUFJeEJLLElBSndCO0FBQUEsTUFJbEJDLE9BSmtCOztBQUFBLG1CQU1ETixzREFBUSxDQUFDLEVBQUQsQ0FOUDtBQUFBLE1BTXhCTyxPQU53QjtBQUFBLE1BTWZDLFVBTmUsa0JBTWE7OztBQU5iLG1CQU9LUixzREFBUSxDQUFDLEVBQUQsQ0FQYjtBQUFBLE1BT3hCUyxVQVB3QjtBQUFBLE1BT1pDLGFBUFksa0JBT21COzs7QUFQbkIsbUJBVUhWLHNE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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2Q0gsQ0F4UkQ7O0dBQU0xRCxVOztNQUFBQSxVO0FBMFJTLHFFQUFBaUYsbUVBQVUsQ0FBQ2pGLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9jcnVkL1tzbHVnXS42MDM1OGRjZmVmZjVmNWJiNmE3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c2luZ2xlQmxvZywgdXBkYXRlQmxvZ30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB3aXRoUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiXHJcbmltcG9ydCB7Z2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIlxyXG5pbXBvcnQge1F1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzfSBmcm9tIFwiLi4vLi4vaGVscGVycy9xdWlsbFwiXHJcbmltcG9ydCB7QVBJLCBET01BSU59IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSBcInNsdWdpZnlcIjtcclxuXHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LXF1aWxsXCIpLCB7c3NyOiBmYWxzZX0pXHJcbmNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuXHJcbmNvbnN0IEJsb2dVcGRhdGUgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7IC8vIGNhdGVnb3JpZXNcclxuICAgIGNvbnN0IFtjaGVja2VkVGFnLCBzZXRDaGVja2VkVGFnXSA9IHVzZVN0YXRlKFtdKTsgLy8gdGFnc1xyXG5cclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiAnJyxcclxuICAgICAgICBmb3JtRGF0YTogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUgfSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcbiAgICAgICAgaW5pdEJsb2coKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdEJsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZUJsb2cocm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiBkYXRhLnRpdGxlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvZHkoZGF0YS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzQXJyYXkoZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdzQXJyYXkoZGF0YS50YWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDYXRlZ29yaWVzQXJyYXkgPSBibG9nQ2F0ZWdvcmllcyA9PiB7XHJcbiAgICAgICAgbGV0IGNhID0gW107XHJcbiAgICAgICAgYmxvZ0NhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNhLnB1c2goYy5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoY2EpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUYWdzQXJyYXkgPSBibG9nVGFncyA9PiB7XHJcbiAgICAgICAgbGV0IHRhID0gW107XHJcbiAgICAgICAgYmxvZ1RhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLnB1c2godC5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcodGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWRUYWcuaW5kZXhPZih0KTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRhZ107XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkVGFnID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaCh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kT3V0Q2F0ZWdvcnkgPSBjID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dFRhZyA9IHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrZWRUYWcuaW5kZXhPZih0KTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmaW5kT3V0Q2F0ZWdvcnkoYy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2MubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93VGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0YWdzICYmXHJcbiAgICAgICAgICAgIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWdzVG9nZ2xlKHQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dFRhZyh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57dC5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJycgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJvZHkgPSBlID0+IHtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBzZXRCb2R5KGUpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnYm9keScsIGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0QmxvZyA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB1cGRhdGVCbG9nKGZvcm1EYXRhLCB0b2tlbiwgcm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB0aXRsZTogJycsIHN1Y2Nlc3M6IGBCbG9nIHRpdGxlZCBcIiR7ZGF0YS50aXRsZX1cIiBpcyBzdWNjZXNzZnVsbHkgdXBkYXRlZGAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdXRlci5yZXBsYWNlKGAvYWRtaW4vY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGAvYWRtaW5gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdXRlci5yZXBsYWNlKGAvdXNlci9jcnVkLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoYC91c2VyYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZWRpdEJsb2d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0aXRsZScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZyBhbWF6aW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlQmxvZ0Zvcm0oKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke3JvdXRlci5xdWVyeS5zbHVnfWB9IGFsdD17dGl0bGV9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RmVhdHVyZWQgaW1hZ2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNhdGVnb3JpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+e3Nob3dDYXRlZ29yaWVzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VGFnczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93VGFncygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nVXBkYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==