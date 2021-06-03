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
    formData: form,
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
          lineNumber: 152,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
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
          lineNumber: 169,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
      lineNumber: 213,
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
      lineNumber: 219,
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
        lineNumber: 227,
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
      lineNumber: 226,
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
              lineNumber: 273,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
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
                lineNumber: 277,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
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
            lineNumber: 282,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 287,
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

_s(BlogUpdate, "yHZs+ggYfTbJAOAsJoc4hKiQhaE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL0Jsb2dVcGRhdGUuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJ0b2tlbiIsImdldENvb2tpZSIsIkJsb2dVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJlcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsImZvcm0iLCJ0aXRsZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaW5pdEJsb2ciLCJpbml0Q2F0ZWdvcmllcyIsImluaXRUYWdzIiwicXVlcnkiLCJzbHVnIiwic2luZ2xlQmxvZyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldENhdGVnb3JpZXNBcnJheSIsInNldFRhZ3NBcnJheSIsImJsb2dDYXRlZ29yaWVzIiwiY2EiLCJtYXAiLCJjIiwiaSIsInB1c2giLCJfaWQiLCJibG9nVGFncyIsInRhIiwidCIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRBbGxUYWdzIiwiaGFuZGxlVG9nZ2xlIiwiY2xpY2tlZENhdGVnb3J5IiwiaW5kZXhPZiIsImFsbCIsInNwbGljZSIsInNldCIsImhhbmRsZVRhZ3NUb2dnbGUiLCJjbGlja2VkVGFnIiwiZmluZE91dENhdGVnb3J5IiwicmVzdWx0IiwiZmluZE91dFRhZyIsInNob3dDYXRlZ29yaWVzIiwibmFtZSIsInNob3dUYWdzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVCb2R5IiwiZWRpdEJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUJsb2ciLCJpc0F1dGgiLCJyb2xlIiwicmVwbGFjZSIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsInVwZGF0ZUJsb2dGb3JtIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwiQVBJIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOLElBQU1HLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUd4QkcsVUFId0I7QUFBQSxNQUdaQyxhQUhZOztBQUFBLG1CQUlQSixzREFBUSxDQUFDLEVBQUQsQ0FKRDtBQUFBLE1BSXhCSyxJQUp3QjtBQUFBLE1BSWxCQyxPQUprQjs7QUFBQSxtQkFNRE4sc0RBQVEsQ0FBQyxFQUFELENBTlA7QUFBQSxNQU14Qk8sT0FOd0I7QUFBQSxNQU1mQyxVQU5lLGtCQU1hOzs7QUFOYixtQkFPS1Isc0RBQVEsQ0FBQyxFQUFELENBUGI7QUFBQSxNQU94QlMsVUFQd0I7QUFBQSxNQU9aQyxhQVBZLGtCQU9tQjs7O0FBUG5CLG1C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QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZDSCxDQXRSRDs7R0FBTTNELFU7O01BQUFBLFU7QUF3UlMscUVBQUFrRixtRUFBVSxDQUFDbEYsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2NydWQvW3NsdWddLjNjMjYwOGNmNGNhNGU1NDBlZDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCB1cGRhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHdpdGhSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIjtcclxuaW1wb3J0IHtnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCJcclxuaW1wb3J0IHtnZXRBbGxDYXRlZ29yaWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiXHJcbmltcG9ydCB7UXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHN9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3F1aWxsXCJcclxuaW1wb3J0IHtBUEksIERPTUFJTn0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tIFwic2x1Z2lmeVwiO1xyXG5cclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcXVpbGxcIiksIHtzc3I6IGZhbHNlfSlcclxuY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuY29uc3QgQmxvZ1VwZGF0ZSA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTsgLy8gY2F0ZWdvcmllc1xyXG4gICAgY29uc3QgW2NoZWNrZWRUYWcsIHNldENoZWNrZWRUYWddID0gdXNlU3RhdGUoW10pOyAvLyB0YWdzXHJcblxyXG4gXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiAnJyxcclxuICAgICAgICBmb3JtRGF0YTogZm9ybSxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgYm9keTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IsIHN1Y2Nlc3MsIGZvcm1EYXRhLCB0aXRsZSB9ID0gdmFsdWVzO1xyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuICAgICAgICBpbml0QmxvZygpO1xyXG4gICAgICAgIGluaXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaW5pdFRhZ3MoKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICBjb25zdCBpbml0QmxvZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnNsdWcpIHtcclxuICAgICAgICAgICAgc2luZ2xlQmxvZyhyb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6IGRhdGEudGl0bGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShkYXRhLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXNBcnJheShkYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ3NBcnJheShkYXRhLnRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENhdGVnb3JpZXNBcnJheSA9IGJsb2dDYXRlZ29yaWVzID0+IHtcclxuICAgICAgICBsZXQgY2EgPSBbXTtcclxuICAgICAgICBibG9nQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY2EucHVzaChjLl9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChjYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFRhZ3NBcnJheSA9IGJsb2dUYWdzID0+IHtcclxuICAgICAgICBsZXQgdGEgPSBbXTtcclxuICAgICAgICBibG9nVGFncy5tYXAoKHQsIGkpID0+IHtcclxuICAgICAgICAgICAgdGEucHVzaCh0Ll9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyh0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWQoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdzVG9nZ2xlID0gdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dENhdGVnb3J5ID0gYyA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRUYWcgPSB0ID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dENhdGVnb3J5KGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGFncyAmJlxyXG4gICAgICAgICAgICB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFnc1RvZ2dsZSh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRUYWcodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3QubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb2R5ID0gZSA9PiB7XHJcbiAgICAgICAgc2V0Qm9keShlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2JvZHknLCBlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdEJsb2cgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4sIHJvdXRlci5xdWVyeS5zbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6ICcnLCBzdWNjZXNzOiBgQmxvZyB0aXRsZWQgXCIke2RhdGEudGl0bGV9XCIgaXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSb3V0ZXIucmVwbGFjZShgL2FkbWluL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShgL2FkbWluYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSb3V0ZXIucmVwbGFjZShgL3VzZXIvY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGAvdXNlcmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7c3VjY2Vzc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2VkaXRCbG9nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgYW1hemluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZUJsb2dGb3JtKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9keSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtyb3V0ZXIucXVlcnkuc2x1Z31gfSBhbHQ9e3RpdGxlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlYXR1cmVkIGltYWdlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBmZWF0dXJlZCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90bycpfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DYXRlZ29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93Q2F0ZWdvcmllcygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRhZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT57c2hvd1RhZ3MoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZ1VwZGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=