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

  var blogFromLS = function blogFromLS() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      body = _useState[0],
      setBody = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].types.register(rich_text__WEBPACK_IMPORTED_MODULE_16___default.a.type);
    var socket = new WebSocket('ws://127.0.0.1:8090');
    var connection = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket);
    var doc = connection.get('documents', 'firstDocument');
    var doc2 = connection.get('documents2', 'firstDocument2');
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
      var quill2 = new Quill('#editor2', options);
      /**
       * On Initialising if data is present in server
       * Updaing its content to editor
       */

      quill.setContents(doc.data);
      var quillContent = quill.getContents();
      var html = delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13___default()(quillContent);
      setBody(html);
      /**
       * On Text change publishing to our server
       * so that it can be broadcasted to all other clients
       */

      quill.on('text-change', function (delta, oldDelta, source) {
        if (source !== 'user') return;
        doc.submitOp(delta, {
          source: quill
        });
      });
      /** listening to changes in the document
       * that is coming from our server
       */

      doc.on('op', function (op, source) {
        if (source === quill) return;
        quill.updateContents(op);
      });
    });
    return function () {
      connection.close();
    };
  }, []);

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
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
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
          lineNumber: 212,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
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
          lineNumber: 224,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
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
      lineNumber: 232,
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
      lineNumber: 238,
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
          lineNumber: 247,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "toolbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "editor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
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
          lineNumber: 273,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
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
              lineNumber: 282,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
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
                lineNumber: 289,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "bH+/59S9eYRU649/kQ2VNhBDpHs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL2Jsb2dXZWJTb2NrZXQuanMiXSwibmFtZXMiOlsidG9rZW4iLCJnZXRDb29raWUiLCJRdWlsbCIsInJlcXVpcmUiLCJDcmVhdGVCbG9nIiwiYmxvZ0Zyb21MUyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwidXNlRWZmZWN0IiwiU2hhcmVkYiIsInR5cGVzIiwicmVnaXN0ZXIiLCJyaWNoVGV4dCIsInR5cGUiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJjb25uZWN0aW9uIiwiQ29ubmVjdGlvbiIsImRvYyIsImdldCIsImRvYzIiLCJzdWJzY3JpYmUiLCJlcnIiLCJvcHRpb25zIiwidGhlbWUiLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZXJzIiwiUXVpbGxGb3JtYXRzIiwicXVpbGwiLCJxdWlsbDIiLCJzZXRDb250ZW50cyIsImRhdGEiLCJxdWlsbENvbnRlbnQiLCJnZXRDb250ZW50cyIsImh0bWwiLCJkZWx0YVRvSHRtbCIsIm9uIiwiZGVsdGEiLCJvbGREZWx0YSIsInNvdXJjZSIsInN1Ym1pdE9wIiwib3AiLCJ1cGRhdGVDb250ZW50cyIsImNsb3NlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJGb3JtRGF0YSIsImluaXRDYXRlZ29yaWVzIiwiaW5pdFRhZ3MiLCJyb3V0ZXIiLCJnZXRBbGxDYXRlZ29yaWVzIiwidGhlbiIsImdldEFsbFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVRvZ2dsZSIsImMiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwicHVzaCIsInNwbGljZSIsImhhbmRsZVRhZ3NUb2dnbGUiLCJ0IiwiY2xpY2tlZFRhZyIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJzaG93VGFncyIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsImNyZWF0ZUJsb2dGb3JtIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLE9BQTZCQyxtQkFBTyxDQUFDLGlEQUFELENBQXBDLEdBQWdELFNBQTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFHckIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixlQUFtQyxFQUVsQzs7QUFFRCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUM5QixhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sS0FBUDtBQUNIO0FBQ0osR0FWRDs7QUFIcUIsa0JBZUdHLHNEQUFRLEVBZlg7QUFBQSxNQWVkQyxJQWZjO0FBQUEsTUFlUkMsT0FmUTs7QUFrQnJCQyx5REFBUyxDQUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFjSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUlJO0FBQUksaUJBQUssRUFBRTtBQUFDMEIsdUJBQVMsRUFBRSxPQUFaO0FBQXFCQyx1QkFBUyxFQUFFO0FBQWhDLGFBQVg7QUFBQSxzQkFBdURWLGNBQWM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEosZUFvQkk7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLGlCQUFLLEVBQUU7QUFBQ1MsdUJBQVMsRUFBRSxPQUFaO0FBQXFCQyx1QkFBUyxFQUFFO0FBQWhDLGFBQVg7QUFBQSxzQkFBdUROLFFBQVE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdDSCxDQWpTRDs7R0FBTWhHLFU7O0tBQUFBLFU7QUFvU1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvYmxvZy5jNGMyZDdiYTg0NDlhMTUxZDNlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjcmVhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQgZGVsdGFUb0h0bWwgZnJvbSAnZGVsdGEtdG8taHRtbC1pbXByb3ZlZCdcclxuXHJcbmNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuY29uc3QgUXVpbGwgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3F1aWxsJykgOiAoKSA9PiBmYWxzZTtcclxuaW1wb3J0ICdxdWlsbC9kaXN0L3F1aWxsLmJ1YmJsZS5jc3MnO1xyXG5pbXBvcnQgU2hhcmVkYiBmcm9tICdzaGFyZWRiLWNsaWVudCc7XHJcbmltcG9ydCByaWNoVGV4dCBmcm9tICdyaWNoLXRleHQnO1xyXG5cclxuY29uc3QgQ3JlYXRlQmxvZyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgYmxvZ0Zyb21MUyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBTaGFyZWRiLnR5cGVzLnJlZ2lzdGVyKHJpY2hUZXh0LnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjgwOTAnKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IFNoYXJlZGIuQ29ubmVjdGlvbihzb2NrZXQpO1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IGNvbm5lY3Rpb24uZ2V0KCdkb2N1bWVudHMnLCAnZmlyc3REb2N1bWVudCcpO1xyXG4gICAgICAgIGNvbnN0IGRvYzIgPSBjb25uZWN0aW9uLmdldCgnZG9jdW1lbnRzMicsICdmaXJzdERvY3VtZW50MicpO1xyXG4gICAgICAgIGRvYy5zdWJzY3JpYmUoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdzbm93JyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLCAgICAgICAgLy8gdG9nZ2xlZCBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfV0sICAgICAgICAgICAgICAgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snbGlzdCc6ICdvcmRlcmVkJ30sIHsnbGlzdCc6ICdidWxsZXQnfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J3NjcmlwdCc6ICdzdWInfSwgeydzY3JpcHQnOiAnc3VwZXInfV0sICAgICAgLy8gc3VwZXJzY3JpcHQvc3Vic2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2luZGVudCc6ICctMSd9LCB7J2luZGVudCc6ICcrMSd9XSwgICAgICAgICAgLy8gb3V0ZGVudC9pbmRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snZGlyZWN0aW9uJzogJ3J0bCd9XSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dCBkaXJlY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XSwgIC8vIGN1c3RvbSBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfV0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydjb2xvcic6IFtdfSwgeydiYWNrZ3JvdW5kJzogW119XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2ZvbnQnOiBbXX1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydhbGlnbic6IFtdfV0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NsZWFuJ10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2xpbmsnLCAnaW1hZ2UnXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXInLCAgLy8gU2VsZWN0b3IgZm9yIHRvb2xiYXIgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnM6IFF1aWxsRm9ybWF0c1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgcXVpbGwgPSBuZXcgUXVpbGwoJyNlZGl0b3InLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsMiA9IG5ldyBRdWlsbCgnI2VkaXRvcjInLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9uIEluaXRpYWxpc2luZyBpZiBkYXRhIGlzIHByZXNlbnQgaW4gc2VydmVyXHJcbiAgICAgICAgICAgICAqIFVwZGFpbmcgaXRzIGNvbnRlbnQgdG8gZWRpdG9yXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBxdWlsbC5zZXRDb250ZW50cyhkb2MuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBxdWlsbENvbnRlbnQgPSBxdWlsbC5nZXRDb250ZW50cygpO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGRlbHRhVG9IdG1sKHF1aWxsQ29udGVudClcclxuICAgICAgICAgICAgc2V0Qm9keShodG1sKVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT24gVGV4dCBjaGFuZ2UgcHVibGlzaGluZyB0byBvdXIgc2VydmVyXHJcbiAgICAgICAgICAgICAqIHNvIHRoYXQgaXQgY2FuIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBvdGhlciBjbGllbnRzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICd1c2VyJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9jLnN1Ym1pdE9wKGRlbHRhLCB7c291cmNlOiBxdWlsbH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qKiBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBpbiB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgICogdGhhdCBpcyBjb21pbmcgZnJvbSBvdXIgc2VydmVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkb2Mub24oJ29wJywgZnVuY3Rpb24gKG9wLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHF1aWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBxdWlsbC51cGRhdGVDb250ZW50cyhvcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7IC8vIGNhdGVnb3JpZXNcclxuICAgIGNvbnN0IFtjaGVja2VkVGFnLCBzZXRDaGVja2VkVGFnXSA9IHVzZVN0YXRlKFtdKTsgLy8gdGFnc1xyXG5cclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzaXplRXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGZvcm1EYXRhOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgaGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7ZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbn0gPSB2YWx1ZXM7XHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCl9KTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHVibGlzaEJsb2cgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgYm9keSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVhZHkgdG8gcHVibGlzaEJsb2cnKTtcclxuICAgICAgICBjcmVhdGVCbG9nKGZvcm1EYXRhLCB0b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHRpdGxlOiAnJywgZXJyb3I6ICcnLCBzdWNjZXNzOiBgQSBuZXcgYmxvZyB0aXRsZWQgXCIke2RhdGEudGl0bGV9XCIgaXMgY3JlYXRlZGB9KTtcclxuICAgICAgICAgICAgICAgIHNldEJvZHkoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJyd9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IGMgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWQuaW5kZXhPZih0KTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRhZ107XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkVGFnID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaCh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2MubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93VGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0YWdzICYmXHJcbiAgICAgICAgICAgIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUYWdzVG9nZ2xlKHQuX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtwdWJsaXNoQmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0b29sYmFyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZWRpdG9yJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUJsb2dGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GZWF0dXJlZCBpbWFnZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCbG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=