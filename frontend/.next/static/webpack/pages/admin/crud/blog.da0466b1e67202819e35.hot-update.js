webpackHotUpdate_N_E("pages/admin/crud/blog",{

/***/ "./components/crud/blogWebSocket.js":
/*!******************************************!*\
  !*** ./components/crud/blogWebSocket.js ***!
  \******************************************/
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
/* harmony import */ var delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! delta-to-html-improved */ "./node_modules/delta-to-html-improved/src/delta-to-html.js");
/* harmony import */ var delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sharedb_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sharedb-client */ "./node_modules/sharedb-client/dist/sharedb-client.js");
/* harmony import */ var rich_text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rich-text */ "./node_modules/rich-text/index.js");
/* harmony import */ var rich_text__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(rich_text__WEBPACK_IMPORTED_MODULE_16__);




var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\blogWebSocket.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])("token");
var Quill = true ? __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js") : undefined;




var CreateBlog = function CreateBlog() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checked = _useState3[0],
      setChecked = _useState3[1]; // categories


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      checkedTag = _useState4[0],
      setCheckedTag = _useState4[1]; // tags


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState5[0],
      setValues = _useState5[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');

  var blogFromLS = function blogFromLS() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      body = _useState6[0],
      setBody = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].types.register(rich_text__WEBPACK_IMPORTED_MODULE_16___default.a.type);
    var socket = new WebSocket('ws://127.0.0.1:8090');
    var connection = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket);
    var doc = connection.get('documents', 'firstDocument');
    doc.subscribe(function (err) {
      if (err) throw err;
      var options = {
        theme: 'snow',
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], // custom button values
          [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'script': 'sub'
          }, {
            'script': 'super'
          }], // superscript/subscript
          [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], // outdent/indent
          [{
            'direction': 'rtl'
          }], // text direction
          [{
            'size': ['small', false, 'large', 'huge']
          }], // custom dropdown
          [{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], [{
            'color': []
          }, {
            'background': []
          }], // dropdown with defaults from theme
          [{
            'font': []
          }], [{
            'align': []
          }], ['clean'], // remove formatting button
          ['link', 'image']]
        },
        toolbar: {
          container: '#toolbar',
          // Selector for toolbar container
          handlers: _helpers_quill__WEBPACK_IMPORTED_MODULE_12__["QuillFormats"]
        }
      };
      var quill = new Quill('#editor', options);
      quill.setContents(doc.data);
      var quillContent = quill.getContents();
      var html = delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13___default()(quillContent);
      setBody(html);
      quill.on('text-change', function (delta, oldDelta, source) {
        if (source !== 'user') return;
        doc.submitOp(delta, {
          source: quill
        });
      });
      doc.on('op', function (op, source) {
        if (source === quill) return;
        quill.updateContents(op);
      });
    });
    return function () {
      connection.close();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
    initCategories();
    initTags();
  }, [next_router__WEBPACK_IMPORTED_MODULE_7___default.a]);

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

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    formData.set('body', body); // console.log('ready to publishBlog');

    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["createBlog"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          title: '',
          error: '',
          success: "A new blog titled \"".concat(data.title, "\" is created")
        }));
        setBody('');
        setCategories([]);
        setTags([]);
      }
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

      setChecked(all);
      formData.set('categories', all);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checked.indexOf(t);

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

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleToggle(c._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this);
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
      lineNumber: 219,
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
      lineNumber: 225,
      columnNumber: 9
    }, _this);
  };

  var createBlogForm = function createBlogForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: publishBlog,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Title"
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
        lineNumber: 233,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "toolbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "editor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid pb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [createBlogForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-3",
          children: [showError(), showSuccess()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
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
      lineNumber: 260,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "KaU3sWbdh3nbp8e/g5mSDqUn1rI=");

_c = CreateBlog;
/* harmony default export */ __webpack_exports__["default"] = (CreateBlog);

var _c;

$RefreshReg$(_c, "CreateBlog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL2Jsb2dXZWJTb2NrZXQuanMiXSwibmFtZXMiOlsidG9rZW4iLCJnZXRDb29raWUiLCJRdWlsbCIsInJlcXVpcmUiLCJDcmVhdGVCbG9nIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInRhZ3MiLCJzZXRUYWdzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJjaGVja2VkVGFnIiwic2V0Q2hlY2tlZFRhZyIsImVycm9yIiwic2l6ZUVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidGl0bGUiLCJoaWRlUHVibGlzaEJ1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsImJsb2dGcm9tTFMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNldEJvZHkiLCJ1c2VFZmZlY3QiLCJTaGFyZWRiIiwidHlwZXMiLCJyZWdpc3RlciIsInJpY2hUZXh0IiwidHlwZSIsInNvY2tldCIsIldlYlNvY2tldCIsImNvbm5lY3Rpb24iLCJDb25uZWN0aW9uIiwiZG9jIiwiZ2V0Iiwic3Vic2NyaWJlIiwiZXJyIiwib3B0aW9ucyIsInRoZW1lIiwibW9kdWxlcyIsInRvb2xiYXIiLCJjb250YWluZXIiLCJoYW5kbGVycyIsIlF1aWxsRm9ybWF0cyIsInF1aWxsIiwic2V0Q29udGVudHMiLCJkYXRhIiwicXVpbGxDb250ZW50IiwiZ2V0Q29udGVudHMiLCJodG1sIiwiZGVsdGFUb0h0bWwiLCJvbiIsImRlbHRhIiwib2xkRGVsdGEiLCJzb3VyY2UiLCJzdWJtaXRPcCIsIm9wIiwidXBkYXRlQ29udGVudHMiLCJjbG9zZSIsIkZvcm1EYXRhIiwiaW5pdENhdGVnb3JpZXMiLCJpbml0VGFncyIsInJvdXRlciIsImdldEFsbENhdGVnb3JpZXMiLCJ0aGVuIiwiZ2V0QWxsVGFncyIsInB1Ymxpc2hCbG9nIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0IiwiY3JlYXRlQmxvZyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVG9nZ2xlIiwiYyIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlVGFnc1RvZ2dsZSIsInQiLCJjbGlja2VkVGFnIiwiY29uc29sZSIsImxvZyIsInNob3dDYXRlZ29yaWVzIiwibWFwIiwiaSIsIl9pZCIsInNob3dUYWdzIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiY3JlYXRlQmxvZ0Zvcm0iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBNkJDLG1CQUFPLENBQUMsaURBQUQsQ0FBcEMsR0FBZ0QsU0FBOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVlQyxzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUVkQyxVQUZjO0FBQUEsTUFFRkMsYUFGRTs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdkRyxJQUhjO0FBQUEsTUFHUkMsT0FIUTs7QUFBQSxtQkFLU0osc0RBQVEsQ0FBQyxFQUFELENBTGpCO0FBQUEsTUFLZEssT0FMYztBQUFBLE1BS0xDLFVBTEssa0JBS3VCOzs7QUFMdkIsbUJBTWVOLHNEQUFRLENBQUMsRUFBRCxDQU52QjtBQUFBLE1BTWRPLFVBTmM7QUFBQSxNQU1GQyxhQU5FLGtCQU02Qjs7O0FBTjdCLG1CQVNPUixzREFBUSxDQUFDO0FBQ2pDUyxT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QUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RFYsY0FBYztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQW9CSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUksaUJBQUssRUFBRTtBQUFDUyx1QkFBUyxFQUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RE4sUUFBUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBeFJEOztHQUFNOUYsVTs7S0FBQUEsVTtBQTJSU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmRhMDQ2NmIxZTY3MjAyODE5ZTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2NyZWF0ZUJsb2d9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Jsb2dcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB3aXRoUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiXHJcbmltcG9ydCB7Z2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIlxyXG5pbXBvcnQge1F1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzfSBmcm9tIFwiLi4vLi4vaGVscGVycy9xdWlsbFwiXHJcbmltcG9ydCBkZWx0YVRvSHRtbCBmcm9tICdkZWx0YS10by1odG1sLWltcHJvdmVkJ1xyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbmNvbnN0IFF1aWxsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdxdWlsbCcpIDogKCkgPT4gZmFsc2U7XHJcbmltcG9ydCAncXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzJztcclxuaW1wb3J0IFNoYXJlZGIgZnJvbSAnc2hhcmVkYi1jbGllbnQnO1xyXG5pbXBvcnQgcmljaFRleHQgZnJvbSAncmljaC10ZXh0JztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTsgLy8gY2F0ZWdvcmllc1xyXG4gICAgY29uc3QgW2NoZWNrZWRUYWcsIHNldENoZWNrZWRUYWddID0gdXNlU3RhdGUoW10pOyAvLyB0YWdzXHJcblxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHNpemVFcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgZm9ybURhdGE6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBoaWRlUHVibGlzaEJ1dHRvbjogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHtlcnJvciwgc2l6ZUVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUsIGhpZGVQdWJsaXNoQnV0dG9ufSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHJcbiAgICBjb25zdCBibG9nRnJvbUxTID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFNoYXJlZGIudHlwZXMucmVnaXN0ZXIocmljaFRleHQudHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6ODA5MCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgU2hhcmVkYi5Db25uZWN0aW9uKHNvY2tldCk7XHJcbiAgICAgICAgY29uc3QgZG9jID0gY29ubmVjdGlvbi5nZXQoJ2RvY3VtZW50cycsICdmaXJzdERvY3VtZW50Jyk7XHJcbiAgICAgICAgZG9jLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnc25vdycsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogMX0sIHsnaGVhZGVyJzogMn1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J31dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzY3JpcHQnOiAnc3ViJ30sIHsnc2NyaXB0JzogJ3N1cGVyJ31dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2RpcmVjdGlvbic6ICdydGwnfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddfV0sICAvLyBjdXN0b20gZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydmb250JzogW119XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snYWxpZ24nOiBbXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydsaW5rJywgJ2ltYWdlJ11cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJywgIC8vIFNlbGVjdG9yIGZvciB0b29sYmFyIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzOiBRdWlsbEZvcm1hdHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsID0gbmV3IFF1aWxsKCcjZWRpdG9yJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHF1aWxsLnNldENvbnRlbnRzKGRvYy5kYXRhKTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsQ29udGVudCA9IHF1aWxsLmdldENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIGxldCBodG1sID0gZGVsdGFUb0h0bWwocXVpbGxDb250ZW50KVxyXG5cclxuICAgICAgICAgICAgc2V0Qm9keShodG1sKVxyXG4gICAgICAgICAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICd1c2VyJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9jLnN1Ym1pdE9wKGRlbHRhLCB7c291cmNlOiBxdWlsbH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jLm9uKCdvcCcsIGZ1bmN0aW9uIChvcCwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBxdWlsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcXVpbGwudXBkYXRlQ29udGVudHMob3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKX0pO1xyXG4gICAgICAgIGluaXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaW5pdFRhZ3MoKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICBjb25zdCBpbml0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0VGFncyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxUYWdzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwdWJsaXNoQmxvZyA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2JvZHknLCBib2R5KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWFkeSB0byBwdWJsaXNoQmxvZycpO1xyXG4gICAgICAgIGNyZWF0ZUJsb2coZm9ybURhdGEsIHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgdGl0bGU6ICcnLCBlcnJvcjogJycsIHN1Y2Nlc3M6IGBBIG5ldyBibG9nIHRpdGxlZCBcIiR7ZGF0YS50aXRsZX1cIiBpcyBjcmVhdGVkYH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Qm9keSgnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKFtdKTtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJ30pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiAnJ30pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkQ2F0ZWdvcnkgPSBjaGVja2VkLmluZGV4T2YoYyk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRdO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZENhdGVnb3J5ID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaChjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRDYXRlZ29yeSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoZWNrZWQoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdzVG9nZ2xlID0gdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiAnJ30pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZC5pbmRleE9mKHQpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVGFnXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZFRhZywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyhhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFncycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgJiZcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZShjLl9pZCl9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MgJiZcclxuICAgICAgICAgICAgdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVRhZ3NUb2dnbGUodC5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3QubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17e2Rpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93U3VjY2VzcyA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT17e2Rpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7c3VjY2Vzc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3B1Ymxpc2hCbG9nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3Rvb2xiYXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdlZGl0b3InPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0xLjUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgc2hhZG93LXNtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHVibGlzaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y3JlYXRlQmxvZ0Zvcm0oKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlYXR1cmVkIGltYWdlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgZmVhdHVyZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG8nKX0gdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgaGlkZGVuLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DYXRlZ29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21heEhlaWdodDogJzIwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJ319PntzaG93Q2F0ZWdvcmllcygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRhZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd1RhZ3MoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUJsb2dcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==