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
    var socket2 = new WebSocket('ws://127.0.0.1:8080');
    var connection = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket);
    var connection2 = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket2);
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
    doc2.subscribe(function (err) {
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
      var quill2 = new Quill('#editor2', options);
      /**
       * On Initialising if data is present in server
       * Updaing its content to editor
       */

      quill2.setContents(doc.data);
      var quillContent = quill2.getContents();
      var html = delta_to_html_improved__WEBPACK_IMPORTED_MODULE_13___default()(quillContent);
      setBody(html);
      /**
       * On Text change publishing to our server
       * so that it can be broadcasted to all other clients
       */

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
        if (source === quill2) return;
        quill2.updateContents(op);
      });
    });
    return function () {
      connection.close();
      connection2.close();
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
          lineNumber: 272,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
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
          lineNumber: 284,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
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
      lineNumber: 292,
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
      lineNumber: 298,
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
          lineNumber: 307,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "editor2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "toolbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "editor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 305,
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
          lineNumber: 334,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
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
              lineNumber: 343,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
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
                lineNumber: 350,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 330,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL2Jsb2dXZWJTb2NrZXQuanMiXSwibmFtZXMiOlsidG9rZW4iLCJnZXRDb29raWUiLCJRdWlsbCIsInJlcXVpcmUiLCJDcmVhdGVCbG9nIiwiYmxvZ0Zyb21MUyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwidXNlRWZmZWN0IiwiU2hhcmVkYiIsInR5cGVzIiwicmVnaXN0ZXIiLCJyaWNoVGV4dCIsInR5cGUiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJzb2NrZXQyIiwiY29ubmVjdGlvbiIsIkNvbm5lY3Rpb24iLCJjb25uZWN0aW9uMiIsImRvYyIsImdldCIsImRvYzIiLCJzdWJzY3JpYmUiLCJlcnIiLCJvcHRpb25zIiwidGhlbWUiLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZXJzIiwiUXVpbGxGb3JtYXRzIiwicXVpbGwiLCJzZXRDb250ZW50cyIsImRhdGEiLCJxdWlsbENvbnRlbnQiLCJnZXRDb250ZW50cyIsImh0bWwiLCJkZWx0YVRvSHRtbCIsIm9uIiwiZGVsdGEiLCJvbGREZWx0YSIsInNvdXJjZSIsInN1Ym1pdE9wIiwib3AiLCJ1cGRhdGVDb250ZW50cyIsInF1aWxsMiIsImNsb3NlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0YWdzIiwic2V0VGFncyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiY2hlY2tlZFRhZyIsInNldENoZWNrZWRUYWciLCJlcnJvciIsInNpemVFcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInRpdGxlIiwiaGlkZVB1Ymxpc2hCdXR0b24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJGb3JtRGF0YSIsImluaXRDYXRlZ29yaWVzIiwiaW5pdFRhZ3MiLCJyb3V0ZXIiLCJnZXRBbGxDYXRlZ29yaWVzIiwidGhlbiIsImdldEFsbFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVRvZ2dsZSIsImMiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwicHVzaCIsInNwbGljZSIsImhhbmRsZVRhZ3NUb2dnbGUiLCJ0IiwiY2xpY2tlZFRhZyIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJzaG93VGFncyIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsImNyZWF0ZUJsb2dGb3JtIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsK0RBQVMsQ0FBQyxPQUFELENBQXZCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLE9BQTZCQyxtQkFBTyxDQUFDLGlEQUFELENBQXBDLEdBQWdELFNBQTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFHckIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixlQUFtQyxFQUVsQzs7QUFFRCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUM5QixhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sS0FBUDtBQUNIO0FBQ0osR0FWRDs7QUFIcUIsa0JBZUdHLHNEQUFRLEVBZlg7QUFBQSxNQWVkQyxJQWZjO0FBQUEsTUFlUkMs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LEVBQUMsTUFBN0M7QUFBb0Qsc0JBQU0sRUFBQyxTQUEzRDtBQUFxRSxzQkFBTTtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBY0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFJSTtBQUFJLGlCQUFLLEVBQUU7QUFBQzBCLHVCQUFTLEVBQUUsT0FBWjtBQUFxQkMsdUJBQVMsRUFBRTtBQUFoQyxhQUFYO0FBQUEsc0JBQXVEVixjQUFjO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKLGVBb0JJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSSxpQkFBSyxFQUFFO0FBQUNTLHVCQUFTLEVBQUUsT0FBWjtBQUFxQkMsdUJBQVMsRUFBRTtBQUFoQyxhQUFYO0FBQUEsc0JBQXVETixRQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0E5VkQ7O0dBQU1sRyxVOztLQUFBQSxVO0FBaVdTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuMjI4ZGYwZjIxNGIxOWRiYjgwZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7Y3JlYXRlQmxvZ30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHdpdGhSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIjtcclxuaW1wb3J0IHtnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCJcclxuaW1wb3J0IHtnZXRBbGxDYXRlZ29yaWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiXHJcbmltcG9ydCB7UXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHN9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3F1aWxsXCJcclxuaW1wb3J0IGRlbHRhVG9IdG1sIGZyb20gJ2RlbHRhLXRvLWh0bWwtaW1wcm92ZWQnXHJcblxyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbmNvbnN0IFF1aWxsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdxdWlsbCcpIDogKCkgPT4gZmFsc2U7XHJcbmltcG9ydCAncXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzJztcclxuaW1wb3J0IFNoYXJlZGIgZnJvbSAnc2hhcmVkYi1jbGllbnQnO1xyXG5pbXBvcnQgcmljaFRleHQgZnJvbSAncmljaC10ZXh0JztcclxuXHJcbmNvbnN0IENyZWF0ZUJsb2cgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IGJsb2dGcm9tTFMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgU2hhcmVkYi50eXBlcy5yZWdpc3RlcihyaWNoVGV4dC50eXBlKTtcclxuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDkwJyk7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0MiA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjgwODAnKTtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IFNoYXJlZGIuQ29ubmVjdGlvbihzb2NrZXQpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24yID0gbmV3IFNoYXJlZGIuQ29ubmVjdGlvbihzb2NrZXQyKTtcclxuICAgICAgICBjb25zdCBkb2MgPSBjb25uZWN0aW9uLmdldCgnZG9jdW1lbnRzJywgJ2ZpcnN0RG9jdW1lbnQnKTtcclxuICAgICAgICBjb25zdCBkb2MyID0gY29ubmVjdGlvbi5nZXQoJ2RvY3VtZW50czInLCAnZmlyc3REb2N1bWVudDInKTtcclxuICAgICAgICBkb2Muc3Vic2NyaWJlKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiAnc25vdycsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogMX0sIHsnaGVhZGVyJzogMn1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J31dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzY3JpcHQnOiAnc3ViJ30sIHsnc2NyaXB0JzogJ3N1cGVyJ31dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2RpcmVjdGlvbic6ICdydGwnfV0sICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQgZGlyZWN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddfV0sICAvLyBjdXN0b20gZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydmb250JzogW119XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snYWxpZ24nOiBbXX1dLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgWydsaW5rJywgJ2ltYWdlJ11cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJywgIC8vIFNlbGVjdG9yIGZvciB0b29sYmFyIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzOiBRdWlsbEZvcm1hdHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsID0gbmV3IFF1aWxsKCcjZWRpdG9yJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPbiBJbml0aWFsaXNpbmcgaWYgZGF0YSBpcyBwcmVzZW50IGluIHNlcnZlclxyXG4gICAgICAgICAgICAgKiBVcGRhaW5nIGl0cyBjb250ZW50IHRvIGVkaXRvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcXVpbGwuc2V0Q29udGVudHMoZG9jLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcXVpbGxDb250ZW50ID0gcXVpbGwuZ2V0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBkZWx0YVRvSHRtbChxdWlsbENvbnRlbnQpXHJcbiAgICAgICAgICAgIHNldEJvZHkoaHRtbClcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9uIFRleHQgY2hhbmdlIHB1Ymxpc2hpbmcgdG8gb3VyIHNlcnZlclxyXG4gICAgICAgICAgICAgKiBzbyB0aGF0IGl0IGNhbiBiZSBicm9hZGNhc3RlZCB0byBhbGwgb3RoZXIgY2xpZW50c1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcXVpbGwub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24gKGRlbHRhLCBvbGREZWx0YSwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlICE9PSAndXNlcicpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGRvYy5zdWJtaXRPcChkZWx0YSwge3NvdXJjZTogcXVpbGx9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKiogbGlzdGVuaW5nIHRvIGNoYW5nZXMgaW4gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAqIHRoYXQgaXMgY29taW5nIGZyb20gb3VyIHNlcnZlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZG9jLm9uKCdvcCcsIGZ1bmN0aW9uIChvcCwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBxdWlsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcXVpbGwudXBkYXRlQ29udGVudHMob3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MyLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ3Nub3cnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IDF9LCB7J2hlYWRlcic6IDJ9XSwgICAgICAgICAgICAgICAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydsaXN0JzogJ29yZGVyZWQnfSwgeydsaXN0JzogJ2J1bGxldCd9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snc2NyaXB0JzogJ3N1Yid9LCB7J3NjcmlwdCc6ICdzdXBlcid9XSwgICAgICAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLCAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydkaXJlY3Rpb24nOiAncnRsJ31dLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXX1dLCAgLy8gY3VzdG9tIGRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV19XSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2NvbG9yJzogW119LCB7J2JhY2tncm91bmQnOiBbXX1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snZm9udCc6IFtdfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2FsaWduJzogW119XSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbGluaycsICdpbWFnZSddXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsICAvLyBTZWxlY3RvciBmb3IgdG9vbGJhciBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyczogUXVpbGxGb3JtYXRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBxdWlsbDIgPSBuZXcgUXVpbGwoJyNlZGl0b3IyJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPbiBJbml0aWFsaXNpbmcgaWYgZGF0YSBpcyBwcmVzZW50IGluIHNlcnZlclxyXG4gICAgICAgICAgICAgKiBVcGRhaW5nIGl0cyBjb250ZW50IHRvIGVkaXRvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcXVpbGwyLnNldENvbnRlbnRzKGRvYy5kYXRhKTtcclxuICAgICAgICAgICAgbGV0IHF1aWxsQ29udGVudCA9IHF1aWxsMi5nZXRDb250ZW50cygpO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGRlbHRhVG9IdG1sKHF1aWxsQ29udGVudClcclxuICAgICAgICAgICAgc2V0Qm9keShodG1sKVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT24gVGV4dCBjaGFuZ2UgcHVibGlzaGluZyB0byBvdXIgc2VydmVyXHJcbiAgICAgICAgICAgICAqIHNvIHRoYXQgaXQgY2FuIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBvdGhlciBjbGllbnRzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBxdWlsbDIub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24gKGRlbHRhLCBvbGREZWx0YSwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlICE9PSAndXNlcicpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGRvYy5zdWJtaXRPcChkZWx0YSwge3NvdXJjZTogcXVpbGwyfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyoqIGxpc3RlbmluZyB0byBjaGFuZ2VzIGluIHRoZSBkb2N1bWVudFxyXG4gICAgICAgICAgICAgKiB0aGF0IGlzIGNvbWluZyBmcm9tIG91ciBzZXJ2ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRvYy5vbignb3AnLCBmdW5jdGlvbiAob3AsIHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gcXVpbGwyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBxdWlsbDIudXBkYXRlQ29udGVudHMob3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24yLmNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pOyAvLyBjYXRlZ29yaWVzXHJcbiAgICBjb25zdCBbY2hlY2tlZFRhZywgc2V0Q2hlY2tlZFRhZ10gPSB1c2VTdGF0ZShbXSk7IC8vIHRhZ3NcclxuXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc2l6ZUVycm9yOiAnJyxcclxuICAgICAgICBzdWNjZXNzOiAnJyxcclxuICAgICAgICBmb3JtRGF0YTogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGhpZGVQdWJsaXNoQnV0dG9uOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge2Vycm9yLCBzaXplRXJyb3IsIHN1Y2Nlc3MsIGZvcm1EYXRhLCB0aXRsZSwgaGlkZVB1Ymxpc2hCdXR0b259ID0gdmFsdWVzO1xyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpfSk7XHJcbiAgICAgICAgaW5pdENhdGVnb3JpZXMoKTtcclxuICAgICAgICBpbml0VGFncygpO1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnYm9keScsIGJvZHkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWR5IHRvIHB1Ymxpc2hCbG9nJyk7XHJcbiAgICAgICAgY3JlYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCB0aXRsZTogJycsIGVycm9yOiAnJywgc3VjY2VzczogYEEgbmV3IGJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIGNyZWF0ZWRgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRCb2R5KCcnKTtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tlZChhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnY2F0ZWdvcmllcycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRhZ3NUb2dnbGUgPSB0ID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGFncyAmJlxyXG4gICAgICAgICAgICB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVGFnc1RvZ2dsZSh0Ll9pZCl9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57dC5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7ZGlzcGxheTogZXJyb3IgPyAnJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7ZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVCbG9nRm9ybSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cHVibGlzaEJsb2d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0aXRsZScpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2VkaXRvcjInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3Rvb2xiYXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdlZGl0b3InPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUJsb2dGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GZWF0dXJlZCBpbWFnZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCbG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=