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
    titled: '',
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
    var socket2 = new WebSocket('ws://127.0.0.1:8080');
    var connection = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket);
    var doc = connection.get('documents', 'firstDocument');
    var doc2 = connection.get('documents2', 'secondDocument');
    doc.subscribe(function (err) {
      if (err) throw err;
      var toolbarOptions = ['bold', 'italic', 'underline', 'strike', 'align'];
      var options2 = {
        theme: 'bubble',
        modules: {
          toolbar: toolbarOptions
        }
      };
      var quill2 = new Quill('#editor2', options2);
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
      /**
       * On Initialising if data is present in server
       * Updaing its content to editor
       */

      quill.setContents(doc.data);
      var quillContent = quill.getContents();
      quill2.setContents(doc.data);
      var quillContent2 = quill.getContents();
      var html = delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13___default()(quillContent);
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        titled: html2
      }));
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
      quill2.on('text-change', function (delta, oldDelta, source) {
        if (source !== 'user') return;
        doc.submitOp(delta, {
          source: quill2
        });
      });
      /** listening to changes in the document
       * that is coming from our server
       */

      doc.on('op', function (op, source) {
        if (source === quill) return;
        quill.updateContents(op);
      });
      doc.on('op', function (op, source) {
        if (source === quill2) return;
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
          lineNumber: 241,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
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
          lineNumber: 253,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
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
      lineNumber: 261,
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
      lineNumber: 267,
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
          lineNumber: 276,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "toolbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "editor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
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
          lineNumber: 302,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
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
              lineNumber: 311,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
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
                lineNumber: 318,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 298,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "rj8PjQ55/3oDs2HRbqtOyH0uUD4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL2Jsb2dXZWJTb2NrZXQuanMiXSwibmFtZXMiOlsidG9rZW4iLCJnZXRDb29raWUiLCJRdWlsbCIsInJlcXVpcmUiLCJDcmVhdGVCbG9nIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInRhZ3MiLCJzZXRUYWdzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJjaGVja2VkVGFnIiwic2V0Q2hlY2tlZFRhZyIsImVycm9yIiwic2l6ZUVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidGl0bGUiLCJ0aXRsZWQiLCJoaWRlUHVibGlzaEJ1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsImJsb2dGcm9tTFMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNldEJvZHkiLCJ1c2VFZmZlY3QiLCJTaGFyZWRiIiwidHlwZXMiLCJyZWdpc3RlciIsInJpY2hUZXh0IiwidHlwZSIsInNvY2tldCIsIldlYlNvY2tldCIsInNvY2tldDIiLCJjb25uZWN0aW9uIiwiQ29ubmVjdGlvbiIsImRvYyIsImdldCIsImRvYzIiLCJzdWJzY3JpYmUiLCJlcnIiLCJ0b29sYmFyT3B0aW9ucyIsIm9wdGlvbnMyIiwidGhlbWUiLCJtb2R1bGVzIiwidG9vbGJhciIsInF1aWxsMiIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJoYW5kbGVycyIsIlF1aWxsRm9ybWF0cyIsInF1aWxsIiwic2V0Q29udGVudHMiLCJkYXRhIiwicXVpbGxDb250ZW50IiwiZ2V0Q29udGVudHMiLCJxdWlsbENvbnRlbnQyIiwiaHRtbCIsImRlbHRhVG9IdG1sIiwiaHRtbDIiLCJvbiIsImRlbHRhIiwib2xkRGVsdGEiLCJzb3VyY2UiLCJzdWJtaXRPcCIsIm9wIiwidXBkYXRlQ29udGVudHMiLCJjbG9zZSIsIkZvcm1EYXRhIiwiaW5pdENhdGVnb3JpZXMiLCJpbml0VGFncyIsInJvdXRlciIsImdldEFsbENhdGVnb3JpZXMiLCJ0aGVuIiwiZ2V0QWxsVGFncyIsInB1Ymxpc2hCbG9nIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0IiwiY3JlYXRlQmxvZyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVG9nZ2xlIiwiYyIsImNsaWNrZWRDYXRlZ29yeSIsImluZGV4T2YiLCJhbGwiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlVGFnc1RvZ2dsZSIsInQiLCJjbGlja2VkVGFnIiwiY29uc29sZSIsImxvZyIsInNob3dDYXRlZ29yaWVzIiwibWFwIiwiaSIsIl9pZCIsInNob3dUYWdzIiwic2hvd0Vycm9yIiwiZGlzcGxheSIsInNob3dTdWNjZXNzIiwiY3JlYXRlQmxvZ0Zvcm0iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBNkJDLG1CQUFPLENBQUMsaURBQUQsQ0FBcEMsR0FBZ0QsU0FBOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVlQyxzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUVkQyxVQUZjO0FBQUEsTUFFRkMsYUFGRTs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdkRyxJQUhjO0FBQUEsTUFHUkMsT0FIUTs7QUFBQSxtQkFLU0osc0RBQVEsQ0FBQyxFQUFELENBTGpCO0FBQUEsTUFLZEssT0FMYztBQUFBLE1BS0xDLFVBTEssa0JBS3VCOzs7QUFMdkIsbUJBTWVOLHNEQUFRLENB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O0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBSUk7QUFBSSxpQkFBSyxFQUFFO0FBQUMwQix1QkFBUyxFQUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RFYsY0FBYztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQW9CSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUksaUJBQUssRUFBRTtBQUFDUyx1QkFBUyxFQUFFLE9BQVo7QUFBcUJDLHVCQUFTLEVBQUU7QUFBaEMsYUFBWDtBQUFBLHNCQUF1RE4sUUFBUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0NILENBOVREOztHQUFNdEcsVTs7S0FBQUEsVTtBQWlVU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9ibG9nLmZjOWM0ODM5NTMyZWIyNWQzZDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2NyZWF0ZUJsb2d9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2Jsb2dcIjtcclxuaW1wb3J0IHtpc0F1dGgsIGdldENvb2tpZX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB3aXRoUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0QWxsVGFnc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvdGFnc1wiXHJcbmltcG9ydCB7Z2V0QWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIlxyXG5pbXBvcnQge1F1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzfSBmcm9tIFwiLi4vLi4vaGVscGVycy9xdWlsbFwiXHJcbmltcG9ydCBkZWx0YVRvSHRtbCBmcm9tICdkZWx0YS10by1odG1sLWltcHJvdmVkJ1xyXG5cclxuY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5jb25zdCBRdWlsbCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncXVpbGwnKSA6ICgpID0+IGZhbHNlO1xyXG5pbXBvcnQgJ3F1aWxsL2Rpc3QvcXVpbGwuYnViYmxlLmNzcyc7XHJcbmltcG9ydCBTaGFyZWRiIGZyb20gJ3NoYXJlZGItY2xpZW50JztcclxuaW1wb3J0IHJpY2hUZXh0IGZyb20gJ3JpY2gtdGV4dCc7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7IC8vIGNhdGVnb3JpZXNcclxuICAgIGNvbnN0IFtjaGVja2VkVGFnLCBzZXRDaGVja2VkVGFnXSA9IHVzZVN0YXRlKFtdKTsgLy8gdGFnc1xyXG5cclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzaXplRXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGZvcm1EYXRhOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGl0bGVkOiAnJyxcclxuICAgICAgICBoaWRlUHVibGlzaEJ1dHRvbjogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHtlcnJvciwgc2l6ZUVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUsIGhpZGVQdWJsaXNoQnV0dG9ufSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHJcbiAgICBjb25zdCBibG9nRnJvbUxTID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFNoYXJlZGIudHlwZXMucmVnaXN0ZXIocmljaFRleHQudHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6ODA5MCcpO1xyXG4gICAgICAgIGNvbnN0IHNvY2tldDIgPSBuZXcgV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDgwJyk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBTaGFyZWRiLkNvbm5lY3Rpb24oc29ja2V0KTtcclxuICAgICAgICBjb25zdCBkb2MgPSBjb25uZWN0aW9uLmdldCgnZG9jdW1lbnRzJywgJ2ZpcnN0RG9jdW1lbnQnKTtcclxuICAgICAgICBjb25zdCBkb2MyID0gY29ubmVjdGlvbi5nZXQoJ2RvY3VtZW50czInLCAnc2Vjb25kRG9jdW1lbnQnKTtcclxuXHJcbiAgICAgICAgZG9jLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJPcHRpb25zID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2FsaWduJ107XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMyID0ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdidWJibGUnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHRvb2xiYXJPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsMiA9IG5ldyBRdWlsbCgnI2VkaXRvcjInLCBvcHRpb25zMik7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnc25vdycsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogMX0sIHsnaGVhZGVyJzogMn1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J31dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzY3JpcHQnOiAnc3ViJ30sIHsnc2NyaXB0JzogJ3N1cGVyJ31dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2RpcmVjdGlvbic6ICdydGwnfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddfV0sICAvLyBjdXN0b20gZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydmb250JzogW119XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snYWxpZ24nOiBbXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydsaW5rJywgJ2ltYWdlJ11cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJywgIC8vIFNlbGVjdG9yIGZvciB0b29sYmFyIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzOiBRdWlsbEZvcm1hdHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsID0gbmV3IFF1aWxsKCcjZWRpdG9yJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPbiBJbml0aWFsaXNpbmcgaWYgZGF0YSBpcyBwcmVzZW50IGluIHNlcnZlclxyXG4gICAgICAgICAgICAgKiBVcGRhaW5nIGl0cyBjb250ZW50IHRvIGVkaXRvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcXVpbGwuc2V0Q29udGVudHMoZG9jLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcXVpbGxDb250ZW50ID0gcXVpbGwuZ2V0Q29udGVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsMi5zZXRDb250ZW50cyhkb2MuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBxdWlsbENvbnRlbnQyID0gcXVpbGwuZ2V0Q29udGVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBodG1sID0gZGVsdGFUb0h0bWwocXVpbGxDb250ZW50KVxyXG5cclxuICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB0aXRsZWQ6IGh0bWwyfSlcclxuICAgICAgICAgICAgc2V0Qm9keShodG1sKVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT24gVGV4dCBjaGFuZ2UgcHVibGlzaGluZyB0byBvdXIgc2VydmVyXHJcbiAgICAgICAgICAgICAqIHNvIHRoYXQgaXQgY2FuIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBvdGhlciBjbGllbnRzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICd1c2VyJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9jLnN1Ym1pdE9wKGRlbHRhLCB7c291cmNlOiBxdWlsbH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHF1aWxsMi5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICd1c2VyJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9jLnN1Ym1pdE9wKGRlbHRhLCB7c291cmNlOiBxdWlsbDJ9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKiogbGlzdGVuaW5nIHRvIGNoYW5nZXMgaW4gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAqIHRoYXQgaXMgY29taW5nIGZyb20gb3VyIHNlcnZlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZG9jLm9uKCdvcCcsIGZ1bmN0aW9uIChvcCwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBxdWlsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcXVpbGwudXBkYXRlQ29udGVudHMob3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRvYy5vbignb3AnLCBmdW5jdGlvbiAob3AsIHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gcXVpbGwyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBxdWlsbC51cGRhdGVDb250ZW50cyhvcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCl9KTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsQ2F0ZWdvcmllcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHVibGlzaEJsb2cgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgYm9keSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVhZHkgdG8gcHVibGlzaEJsb2cnKTtcclxuICAgICAgICBjcmVhdGVCbG9nKGZvcm1EYXRhLCB0b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvcn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHRpdGxlOiAnJywgZXJyb3I6ICcnLCBzdWNjZXNzOiBgQSBuZXcgYmxvZyB0aXRsZWQgXCIke2RhdGEudGl0bGV9XCIgaXMgY3JlYXRlZGB9KTtcclxuICAgICAgICAgICAgICAgIHNldEJvZHkoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUgPT09ICdwaG90bycgPyBlLnRhcmdldC5maWxlc1swXSA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIGZvcm1EYXRhLCBlcnJvcjogJyd9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IGMgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBlcnJvcjogJyd9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZFRhZyA9IGNoZWNrZWQuaW5kZXhPZih0KTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZFRhZ107XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkVGFnID09PSAtMSkge1xyXG4gICAgICAgICAgICBhbGwucHVzaCh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGwuc3BsaWNlKGNsaWNrZWRUYWcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhZ3MnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJtci0yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e2MubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93VGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0YWdzICYmXHJcbiAgICAgICAgICAgIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVUYWdzVG9nZ2xlKHQuX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtwdWJsaXNoQmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0b29sYmFyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZWRpdG9yJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUJsb2dGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GZWF0dXJlZCBpbWFnZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCbG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=