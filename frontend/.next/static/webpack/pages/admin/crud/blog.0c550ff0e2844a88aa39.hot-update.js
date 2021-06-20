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
/* harmony import */ var sharedb_string_binding__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sharedb-string-binding */ "./node_modules/sharedb-string-binding/index.js");
/* harmony import */ var sharedb_string_binding__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sharedb_string_binding__WEBPACK_IMPORTED_MODULE_17__);




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

  var textInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].types.register(rich_text__WEBPACK_IMPORTED_MODULE_16___default.a.type);
    var socket = new WebSocket('ws://127.0.0.1:8090');
    var socket2 = new WebSocket('ws://127.0.0.1:8080');
    var connection = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket2);
    var connection2 = new sharedb_client__WEBPACK_IMPORTED_MODULE_15__["default"].Connection(socket);
    var doc = connection.get('documents', 'firstDocument');
    var example = connection2.get('example', 'title');
    example.subscribe(function (err) {
      if (err) throw err;
      var content = ['content'];
      var binding = new sharedb_string_binding__WEBPACK_IMPORTED_MODULE_17___default.a(textInput.current, example, content);
      binding.setup();
    });
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
          className: "form-checkbox h-4 w-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
          className: "form-checkbox h-4 w-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
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
      lineNumber: 228,
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
      lineNumber: 234,
      columnNumber: 9
    }, _this);
  };

  var createBlogForm = function createBlogForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: publishBlog,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "title",
          id: "title",
          value: title,
          ref: textInput,
          onChange: handleChange('title'),
          className: "shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
          placeholder: "Title",
          "aria-describedby": "email-optional"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "toolbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "editor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Publish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
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
          lineNumber: 281,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group pb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "font-sans md:font-serif pb-1",
              children: "Featured image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted font-sans md:font-serif pb-1",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: ["Upload featured image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: handleChange('photo'),
                type: "file",
                accept: "image/*",
                hidden: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 9
  }, _this);
};

_s(CreateBlog, "gYAnwZ4E+325ICZ40jCEcBXuriM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnVkL2Jsb2dXZWJTb2NrZXQuanMiXSwibmFtZXMiOlsidG9rZW4iLCJnZXRDb29raWUiLCJRdWlsbCIsInJlcXVpcmUiLCJDcmVhdGVCbG9nIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInRhZ3MiLCJzZXRUYWdzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJjaGVja2VkVGFnIiwic2V0Q2hlY2tlZFRhZyIsImVycm9yIiwic2l6ZUVycm9yIiwic3VjY2VzcyIsImZvcm1EYXRhIiwidGl0bGUiLCJoaWRlUHVibGlzaEJ1dHRvbiIsInZhbHVlcyIsInNldFZhbHVlcyIsImJsb2dGcm9tTFMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNldEJvZHkiLCJ0ZXh0SW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJTaGFyZWRiIiwidHlwZXMiLCJyZWdpc3RlciIsInJpY2hUZXh0IiwidHlwZSIsInNvY2tldCIsIldlYlNvY2tldCIsInNvY2tldDIiLCJjb25uZWN0aW9uIiwiQ29ubmVjdGlvbiIsImNvbm5lY3Rpb24yIiwiZG9jIiwiZ2V0IiwiZXhhbXBsZSIsInN1YnNjcmliZSIsImVyciIsImNvbnRlbnQiLCJiaW5kaW5nIiwiU3RyaW5nQmluZGluZyIsImN1cnJlbnQiLCJzZXR1cCIsIm9wdGlvbnMiLCJ0aGVtZSIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlcnMiLCJRdWlsbEZvcm1hdHMiLCJxdWlsbCIsInNldENvbnRlbnRzIiwiZGF0YSIsInF1aWxsQ29udGVudCIsImdldENvbnRlbnRzIiwiaHRtbCIsImRlbHRhVG9IdG1sIiwib24iLCJkZWx0YSIsIm9sZERlbHRhIiwic291cmNlIiwic3VibWl0T3AiLCJvcCIsInVwZGF0ZUNvbnRlbnRzIiwiY2xvc2UiLCJGb3JtRGF0YSIsImluaXRDYXRlZ29yaWVzIiwiaW5pdFRhZ3MiLCJyb3V0ZXIiLCJnZXRBbGxDYXRlZ29yaWVzIiwidGhlbiIsImdldEFsbFRhZ3MiLCJwdWJsaXNoQmxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCIsImNyZWF0ZUJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVRvZ2dsZSIsImMiLCJjbGlja2VkQ2F0ZWdvcnkiLCJpbmRleE9mIiwiYWxsIiwicHVzaCIsInNwbGljZSIsImhhbmRsZVRhZ3NUb2dnbGUiLCJ0IiwiY2xpY2tlZFRhZyIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJzaG93VGFncyIsInNob3dFcnJvciIsImRpc3BsYXkiLCJzaG93U3VjY2VzcyIsImNyZWF0ZUJsb2dGb3JtIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHQywrREFBUyxDQUFDLE9BQUQsQ0FBdkI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBNkJDLG1CQUFPLENBQUMsaURBQUQsQ0FBcEMsR0FBZ0QsU0FBOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWVDLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRWRDLFVBRmM7QUFBQSxNQUVGQyxhQUZFOztBQUFBLG1CQUdHRixzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2RHLElBSGM7QUFBQSxNQUdSQyxPQUhROztBQUFBLG1CQUtTSixzREFBUSxDQUFDLEVBQUQsQ0FMakI7QUFBQSxNQUtkSyxPQUxjO0FBQUEsTUFLTEMsVUFMSyxr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QyxhQUFYO0FBQUEsc0JBQXVETixRQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyQ0gsQ0E1U0Q7O0dBQU14RyxVOztLQUFBQSxVO0FBK1NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2Jsb2cuMGM1NTBmZjBlMjg0NGE4OGFhMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtjcmVhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQgZGVsdGFUb0h0bWwgZnJvbSAnZGVsdGEtdG8taHRtbC1pbXByb3ZlZCdcclxuY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5jb25zdCBRdWlsbCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncXVpbGwnKSA6ICgpID0+IGZhbHNlO1xyXG5pbXBvcnQgJ3F1aWxsL2Rpc3QvcXVpbGwuYnViYmxlLmNzcyc7XHJcbmltcG9ydCBTaGFyZWRiIGZyb20gJ3NoYXJlZGItY2xpZW50JztcclxuaW1wb3J0IHJpY2hUZXh0IGZyb20gJ3JpY2gtdGV4dCc7XHJcbmltcG9ydCBTdHJpbmdCaW5kaW5nIGZyb20gXCJzaGFyZWRiLXN0cmluZy1iaW5kaW5nXCI7XHJcblxyXG5jb25zdCBDcmVhdGVCbG9nID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7IC8vIGNhdGVnb3JpZXNcclxuICAgIGNvbnN0IFtjaGVja2VkVGFnLCBzZXRDaGVja2VkVGFnXSA9IHVzZVN0YXRlKFtdKTsgLy8gdGFnc1xyXG5cclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzaXplRXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGZvcm1EYXRhOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgaGlkZVB1Ymxpc2hCdXR0b246IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7ZXJyb3IsIHNpemVFcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlLCBoaWRlUHVibGlzaEJ1dHRvbn0gPSB2YWx1ZXM7XHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblxyXG4gICAgY29uc3QgYmxvZ0Zyb21MUyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9nJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IHVzZVJlZihcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFNoYXJlZGIudHlwZXMucmVnaXN0ZXIocmljaFRleHQudHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6ODA5MCcpO1xyXG4gICAgICAgIGNvbnN0IHNvY2tldDIgPSBuZXcgV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDgwJyk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBTaGFyZWRiLkNvbm5lY3Rpb24oc29ja2V0Mik7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbjIgPSBuZXcgU2hhcmVkYi5Db25uZWN0aW9uKHNvY2tldCk7XHJcbiAgICAgICAgY29uc3QgZG9jID0gY29ubmVjdGlvbi5nZXQoJ2RvY3VtZW50cycsICdmaXJzdERvY3VtZW50Jyk7XHJcbiAgICAgICAgY29uc3QgZXhhbXBsZSA9IGNvbm5lY3Rpb24yLmdldCgnZXhhbXBsZScsICd0aXRsZScpO1xyXG5cclxuICAgICAgICBleGFtcGxlLnN1YnNjcmliZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBbJ2NvbnRlbnQnXVxyXG4gICAgICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBTdHJpbmdCaW5kaW5nKHRleHRJbnB1dC5jdXJyZW50LCBleGFtcGxlLCBjb250ZW50KTtcclxuICAgICAgICAgICAgYmluZGluZy5zZXR1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvYy5zdWJzY3JpYmUoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogJ3Nub3cnLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IDF9LCB7J2hlYWRlcic6IDJ9XSwgICAgICAgICAgICAgICAvLyBjdXN0b20gYnV0dG9uIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydsaXN0JzogJ29yZGVyZWQnfSwgeydsaXN0JzogJ2J1bGxldCd9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snc2NyaXB0JzogJ3N1Yid9LCB7J3NjcmlwdCc6ICdzdXBlcid9XSwgICAgICAvLyBzdXBlcnNjcmlwdC9zdWJzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLCAgICAgICAgICAvLyBvdXRkZW50L2luZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeydkaXJlY3Rpb24nOiAncnRsJ31dLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0IGRpcmVjdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXX1dLCAgLy8gY3VzdG9tIGRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV19XSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2NvbG9yJzogW119LCB7J2JhY2tncm91bmQnOiBbXX1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3snZm9udCc6IFtdfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7J2FsaWduJzogW119XSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY2xlYW4nXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbGluaycsICdpbWFnZSddXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsICAvLyBTZWxlY3RvciBmb3IgdG9vbGJhciBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyczogUXVpbGxGb3JtYXRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBxdWlsbCA9IG5ldyBRdWlsbCgnI2VkaXRvcicsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBxdWlsbC5zZXRDb250ZW50cyhkb2MuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBxdWlsbENvbnRlbnQgPSBxdWlsbC5nZXRDb250ZW50cygpO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGRlbHRhVG9IdG1sKHF1aWxsQ29udGVudClcclxuICAgICAgICAgICAgc2V0Qm9keShodG1sKVxyXG4gICAgICAgICAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCBmdW5jdGlvbiAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09ICd1c2VyJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9jLnN1Ym1pdE9wKGRlbHRhLCB7c291cmNlOiBxdWlsbH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jLm9uKCdvcCcsIGZ1bmN0aW9uIChvcCwgc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBxdWlsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcXVpbGwudXBkYXRlQ29udGVudHMob3ApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpfSk7XHJcbiAgICAgICAgaW5pdENhdGVnb3JpZXMoKTtcclxuICAgICAgICBpbml0VGFncygpO1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUYWdzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnYm9keScsIGJvZHkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWR5IHRvIHB1Ymxpc2hCbG9nJyk7XHJcbiAgICAgICAgY3JlYXRlQmxvZyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3J9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCB0aXRsZTogJycsIGVycm9yOiAnJywgc3VjY2VzczogYEEgbmV3IGJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIGNyZWF0ZWRgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRCb2R5KCcnKTtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tlZChhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgnY2F0ZWdvcmllcycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRhZ3NUb2dnbGUgPSB0ID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ICcnfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveCBoLTQgdy00IG1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MgJiZcclxuICAgICAgICAgICAgdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVRhZ3NUb2dnbGUodC5faWQpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94IGgtNCB3LTQgbXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9e3tkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3tkaXNwbGF5OiBzdWNjZXNzID8gJycgOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtwdWJsaXNoQmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RleHRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXNtIHB4LTQgcHktMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsLW9wdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3Rvb2xiYXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdlZGl0b3InPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1pbmRpZ28tNzAwIGJnLWluZGlnby0xMDAgaG92ZXI6YmctaW5kaWdvLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUJsb2dGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNhbnMgbWQ6Zm9udC1zZXJpZiBwYi0xXCI+RmVhdHVyZWQgaW1hZ2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LXNhbnMgbWQ6Zm9udC1zZXJpZiBwYi0xXCI+TWF4IHNpemU6IDFtYjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtaW5kaWdvLTcwMCBiZy1pbmRpZ28tMTAwIGhvdmVyOmJnLWluZGlnby0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2F0ZWdvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCd9fT57c2hvd0NhdGVnb3JpZXMoKX08L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UYWdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+e3Nob3dUYWdzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCbG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=