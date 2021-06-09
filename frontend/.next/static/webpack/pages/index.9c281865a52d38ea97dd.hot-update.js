webpackHotUpdate_N_E("pages/index",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogsWithCategoriesAndTags, singleBlog, listRelated, list, listSearch, removeBlog, updateBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogsWithCategoriesAndTags", function() { return listBlogsWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBlog", function() { return singleBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearch", function() { return listSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlog", function() { return removeBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");





var createBlog = function createBlog(blog, token) {
  var url;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog");
  } else {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(url), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listBlogsWithCategoriesAndTags = function listBlogsWithCategoriesAndTags(skip, limit) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs-categories-tags"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleBlog = function singleBlog(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listRelated = function listRelated(blog) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs/related"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blog)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var list = function list(username) {
  var listBlogsEndpoint;

  if (username) {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/").concat(username, "/blogs");
  } else {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(listBlogsEndpoint), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listSearch = function listSearch(params) {
  console.log('search params', params);
  var query = querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  console.log('query params', query);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blogs/search?").concat(query), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeBlog = function removeBlog(slug, token) {
  var url;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug);
  } else {
    url = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(url), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateBlog = function updateBlog(blog, token, slug) {
  var updateBlogEndpoint;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/blog/").concat(slug);
  } else if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(updateBlogEndpoint), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_4__["handleResponse"])(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/blog */ "./actions/blog.js");

var _jsxFileName = "E:\\seoblog\\frontend\\pages\\index.jsx";








var features = [{
  name: 'Competitive rates',
  description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["GlobeAltIcon"]
}, {
  name: 'No hidden fees',
  description: 'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["ScaleIcon"]
}, {
  name: 'Instant transfers',
  description: 'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["LightningBoltIcon"]
}, {
  name: 'Reminder emails',
  description: 'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["MailIcon"]
}];
var navigation = [{
  name: 'Product',
  href: '#'
}, {
  name: 'Features',
  href: '#'
}, {
  name: 'Marketplace',
  href: '#'
}, {
  name: 'Company',
  href: '#'
}];
var posts = [{
  title: 'Boost your conversion rate',
  href: '#',
  category: {
    name: 'Article',
    href: '#'
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  readingTime: '6 min',
  author: {
    name: 'Roel Aufderehar',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}, {
  title: 'How to use search engine optimization to drive sales',
  href: '#',
  category: {
    name: 'Video',
    href: '#'
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  date: 'Mar 10, 2020',
  datetime: '2020-03-10',
  imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  readingTime: '4 min',
  author: {
    name: 'Brenna Goyette',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}, {
  title: 'Improve your customer experience',
  href: '#',
  category: {
    name: 'Case Study',
    href: '#'
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  readingTime: '11 min',
  author: {
    name: 'Daniela Metz',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}];

function HomePage() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative bg-white overflow-hidden",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
            fill: "currentColor",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polygon", {
              points: "50,0 100,0 50,100 0,100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
            className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sm:text-center lg:text-left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "block xl:inline",
                  children: "Start your online"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 33
                }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "block text-indigo-600 xl:inline",
                  children: "crypto trading"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",
                children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start items-end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "rounded-md shadow",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
                    children: "Get started"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
          src: "https://res.cloudinary.com/dbdtcrbpz/image/upload/v1622653216/pexels-moose-photos-1037915_mmcpej.jpg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-50 overflow-hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",
          width: 404,
          height: 784,
          fill: "none",
          viewBox: "0 0 404 784",
          "aria-hidden": "true",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pattern", {
              id: "8b1b5f72-e944-4457-af67-0c6d15a99f38",
              x: 0,
              y: 0,
              width: 20,
              height: 20,
              patternUnits: "userSpaceOnUse",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: 0,
                y: 0,
                width: 4,
                height: 4,
                className: "text-gray-200",
                fill: "currentColor"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 404,
            height: 784,
            fill: "url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative lg:grid lg:grid-cols-3 lg:gap-x-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
              children: "A better way to start your broker."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
            className: "mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2",
            children: features.map(function (feature) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(feature.icon, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mt-5 text-lg leading-6 font-medium text-gray-900",
                    children: feature.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                  className: "mt-2 text-base text-gray-500",
                  children: feature.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 33
                }, _this)]
              }, feature.name, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-white h-1/3 sm:h-2/3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative max-w-7xl mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",
            children: "From the blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4",
            children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",
          children: posts.map(function (post) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col rounded-lg shadow-lg overflow-hidden",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "h-48 w-full object-cover",
                  src: post.imageUrl,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-1 bg-white p-6 flex flex-col justify-between",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-indigo-600",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: post.category.href,
                      className: "hover:underline",
                      children: post.category.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: post.href,
                    className: "block mt-2",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-xl font-semibold text-gray-900",
                      children: post.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "mt-3 text-base text-gray-500",
                      children: post.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mt-6 flex items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: post.author.href,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: post.author.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "h-10 w-10 rounded-full",
                        src: post.author.imageUrl,
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "ml-3",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-sm font-medium text-gray-900",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: post.author.href,
                        className: "hover:underline",
                        children: post.author.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 45
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex space-x-1 text-sm text-gray-500",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                        dateTime: post.datetime,
                        children: post.date
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "\xB7"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: [post.readingTime, " read"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 29
              }, _this)]
            }, post.title, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 12
  }, this);
}

_c = HomePage;

HomePage.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCategoriesAndTags"])(skip, limit).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJjcmVhdGVCbG9nIiwiYmxvZyIsInRva2VuIiwidXJsIiwiaXNBdXRoIiwicm9sZSIsIkFQSSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlUmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyIsInNraXAiLCJsaW1pdCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2luZ2xlQmxvZyIsInNsdWciLCJsaXN0UmVsYXRlZCIsImxpc3QiLCJ1c2VybmFtZSIsImxpc3RCbG9nc0VuZHBvaW50IiwibGlzdFNlYXJjaCIsInBhcmFtcyIsInF1ZXJ5IiwicXVlcnlTdHJpbmciLCJyZW1vdmVCbG9nIiwidXBkYXRlQmxvZyIsInVwZGF0ZUJsb2dFbmRwb2ludCIsImZlYXR1cmVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsIkdsb2JlQWx0SWNvbiIsIlNjYWxlSWNvbiIsIkxpZ2h0bmluZ0JvbHRJY29uIiwiTWFpbEljb24iLCJuYXZpZ2F0aW9uIiwiaHJlZiIsInBvc3RzIiwidGl0bGUiLCJjYXRlZ29yeSIsImRhdGUiLCJkYXRldGltZSIsImltYWdlVXJsIiwicmVhZGluZ1RpbWUiLCJhdXRob3IiLCJIb21lUGFnZSIsIm1hcCIsImZlYXR1cmUiLCJwb3N0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZXJyb3IiLCJibG9ncyIsImNhdGVnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsInNpemUiLCJibG9nc0xpbWl0IiwiYmxvZ1NraXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN2QyxNQUFJQyxHQUFKOztBQUNBLE1BQUlDLG9EQUFNLE1BQU1BLG9EQUFNLEdBQUdDLElBQVQsS0FBa0IsQ0FBbEMsRUFBcUM7QUFDakNGLE9BQUcsYUFBTUcsMkNBQU4sVUFBSDtBQUNILEdBRkQsTUFFTztBQUNISCxPQUFHLGFBQU1HLDJDQUFOLGVBQUg7QUFDSDs7QUFFRCxTQUFPQyx1REFBSyxXQUFJSixHQUFKLEdBQVc7QUFDbkJLLFVBQU0sRUFBRSxNQURXO0FBRW5CQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUxDLG1CQUFhLG1CQUFZVCxLQUFaO0FBRlIsS0FGVTtBQU1uQlUsUUFBSSxFQUFFWDtBQU5hLEdBQVgsQ0FBTCxDQVFGWSxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2RDLGdFQUFjLENBQUNELFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ0gsR0FYRSxXQVlJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FaUCxDQUFQO0FBYUgsQ0FyQk07QUF1QkEsSUFBTUcsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0QsTUFBTUMsSUFBSSxH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QUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoR0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUF3Skg7O0tBekpRTyxROztBQTJKVEEsUUFBUSxDQUFDSSxlQUFULEdBQTJCLFlBQU07QUFDN0IsTUFBSXhDLElBQUksR0FBRyxDQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxTQUFPRixvRkFBOEIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLENBQTlCLENBQTRDVCxJQUE1QyxDQUFpRCxVQUFBVSxJQUFJLEVBQUk7QUFDNUQsUUFBSUEsSUFBSSxDQUFDdUMsS0FBVCxFQUFnQjtBQUNaNUMsYUFBTyxDQUFDQyxHQUFSLENBQVlJLElBQUksQ0FBQ3VDLEtBQWpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBTztBQUNIQyxhQUFLLEVBQUV4QyxJQUFJLENBQUN3QyxLQURUO0FBRUhDLGtCQUFVLEVBQUV6QyxJQUFJLENBQUN5QyxVQUZkO0FBR0hDLFlBQUksRUFBRTFDLElBQUksQ0FBQzBDLElBSFI7QUFJSEMsa0JBQVUsRUFBRTNDLElBQUksQ0FBQzRDLElBSmQ7QUFLSEMsa0JBQVUsRUFBRTlDLEtBTFQ7QUFNSCtDLGdCQUFRLEVBQUVoRDtBQU5QLE9BQVA7QUFRSDtBQUNKLEdBYk0sQ0FBUDtBQWNILENBakJEOztBQW9CZW9DLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljMjgxODY1YTUyZDM4ZWE5N2RkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIlxyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7aGFuZGxlUmVzcG9uc2UsIGlzQXV0aH0gZnJvbSBcIi4vYXV0aFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9nID0gKGJsb2csIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICB1cmwgPSBgJHtBUEl9L2Jsb2dgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVybCA9IGAke0FQSX0vdXNlci9ibG9nYFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBibG9nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyA9IChza2lwLCBsaW1pdCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBsaW1pdCxcclxuICAgICAgICBza2lwXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vYmxvZ3MtY2F0ZWdvcmllcy10YWdzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZUJsb2cgPSBzbHVnID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2cvJHtzbHVnfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWQgPSBibG9nID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2dzL3JlbGF0ZWRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmxvZylcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBsZXQgbGlzdEJsb2dzRW5kcG9pbnQ7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgbGlzdEJsb2dzRW5kcG9pbnQgPSBgJHtBUEl9LyR7dXNlcm5hbWV9L2Jsb2dzYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdEJsb2dzRW5kcG9pbnQgPSBgJHtBUEl9L2Jsb2dzYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlzdEJsb2dzRW5kcG9pbnR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoID0gcGFyYW1zID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggcGFyYW1zJywgcGFyYW1zKTtcclxuICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5IHBhcmFtcycsIHF1ZXJ5KTtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2dzL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQmxvZyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gICAgbGV0IHVybDtcclxuICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgdXJsID0gYCR7QVBJfS9ibG9nLyR7c2x1Z31gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVybCA9IGAke0FQSX0vdXNlci9ibG9nLyR7c2x1Z31gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsb2cgPSAoYmxvZywgdG9rZW4sIHNsdWcpID0+IHtcclxuICAgIGxldCB1cGRhdGVCbG9nRW5kcG9pbnQ7XHJcblxyXG4gICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICB1cGRhdGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L2Jsb2cvJHtzbHVnfWA7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICB1cGRhdGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L3VzZXIvYmxvZy8ke3NsdWd9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXBkYXRlQmxvZ0VuZHBvaW50fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBibG9nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCB7IE1lbnVJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcclxuaW1wb3J0IHsgR2xvYmVBbHRJY29uLCBMaWdodG5pbmdCb2x0SWNvbiwgTWFpbEljb24sIFNjYWxlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQge2xpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFnc30gZnJvbSBcIi4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5cclxuY29uc3QgZmVhdHVyZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NvbXBldGl0aXZlIHJhdGVzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnNlcXV1bnR1ciBvbW5pcyBkaWN0YSBjdW1xdWUsIGludmVudG9yZSBhdHF1ZSBhYiBkb2xvcmVzIGFzcGVybmF0dXIgdGVtcG9yYSBhYiBkb2xvcmVtcXVlLicsXHJcbiAgICAgICAgaWNvbjogR2xvYmVBbHRJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTm8gaGlkZGVuIGZlZXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQ29ycG9yaXMgcXVpc3F1YW0gbm9zdHJ1bSBudWxsYSB2ZW5pYW0gcmVjdXNhbmRhZSB0ZW1wb3JpYnVzIGFwZXJpYW0gb2ZmaWNpYSBpbmNpZHVudCBhdCBkaXN0aW5jdGlvIHJhdGlvbmUuJyxcclxuICAgICAgICBpY29uOiBTY2FsZUljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdJbnN0YW50IHRyYW5zZmVycycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdPbW5pcywgaWxsbyBkZWxlY3R1cz8gTGliZXJvLCBwb3NzaW11cyBudWxsYSBuZW1vIHRlbmV0dXIgYWRpcGlzY2kgcmVwZWxsYXQgZG9sb3JlIGVsaWdlbmRpIHZlbGl0IGRvbG9yaWJ1cyBtb2xsaXRpYS4nLFxyXG4gICAgICAgIGljb246IExpZ2h0bmluZ0JvbHRJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUmVtaW5kZXIgZW1haWxzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ1ZlbmlhbSBuZWNlc3NpdGF0aWJ1cyByZWljaWVuZGlzIGZ1Z2l0IGV4cGxpY2FibyBkb2xvcmVtIG5paGlsIGV0IG9tbmlzIGFzc3VtZW5kYSBvZGl0PyBRdWlzcXVhbSB1bmRlIGFjY3VzYW50aXVtLicsXHJcbiAgICAgICAgaWNvbjogTWFpbEljb24sXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IG5hdmlnYXRpb24gPSBbXHJcbiAgICB7IG5hbWU6ICdQcm9kdWN0JywgaHJlZjogJyMnIH0sXHJcbiAgICB7IG5hbWU6ICdGZWF0dXJlcycsIGhyZWY6ICcjJyB9LFxyXG4gICAgeyBuYW1lOiAnTWFya2V0cGxhY2UnLCBocmVmOiAnIycgfSxcclxuICAgIHsgbmFtZTogJ0NvbXBhbnknLCBocmVmOiAnIycgfSxcclxuXVxyXG5jb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Jvb3N0IHlvdXIgY29udmVyc2lvbiByYXRlJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHsgbmFtZTogJ0FydGljbGUnLCBocmVmOiAnIycgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFyY2hpdGVjdG8gYWNjdXNhbnRpdW0gcHJhZXNlbnRpdW0gZWl1cywgdXQgYXRxdWUgZnVnYSBjdWxwYSwgc2ltaWxpcXVlIHNlcXVpIGN1bSBlb3MgcXVpcyBkb2xvcnVtLicsXHJcbiAgICAgICAgZGF0ZTogJ01hciAxNiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTE2JyxcclxuICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk2MTI4ODU4NDEzLWIzNjIxN2MyY2UzNj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY3OSZxPTgwJyxcclxuICAgICAgICByZWFkaW5nVGltZTogJzYgbWluJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ1JvZWwgQXVmZGVyZWhhcicsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0hvdyB0byB1c2Ugc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gdG8gZHJpdmUgc2FsZXMnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeTogeyBuYW1lOiAnVmlkZW8nLCBocmVmOiAnIycgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlbGl0IGZhY2lsaXMgYXNwZXJpb3JlcyBwb3JybyBxdWFlcmF0IGRvbG9yaWJ1cywgZXZlbmlldCBkb2xvcmUuIEFkaXBpc2NpIHRlbXBvcmEgYXV0IGludmVudG9yZSBvcHRpbyBhbmltaS4sIHRlbXBvcmUgdGVtcG9yaWJ1cyBxdW8gbGF1ZGFudGl1bS4nLFxyXG4gICAgICAgIGRhdGU6ICdNYXIgMTAsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wMy0xMCcsXHJcbiAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NzU4NjY5Ni1lYTIyYjRkNDIzNWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2NzkmcT04MCcsXHJcbiAgICAgICAgcmVhZGluZ1RpbWU6ICc0IG1pbicsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCcmVubmEgR295ZXR0ZScsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTA1MjU4MTEtZTU4NjlkZDAzMDMyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ltcHJvdmUgeW91ciBjdXN0b21lciBleHBlcmllbmNlJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHsgbmFtZTogJ0Nhc2UgU3R1ZHknLCBocmVmOiAnIycgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgaGFydW0gcmVydW0gdm9sdXB0YXRlbSBxdW8gcmVjdXNhbmRhZSBtYWduaSBwbGFjZWF0IHNhZXBlIG1vbGVzdGlhZSwgc2VkIGV4Y2VwdHVyaSBjdW1xdWUgY29ycG9yaXMgcGVyZmVyZW5kaXMgaGljLicsXHJcbiAgICAgICAgZGF0ZTogJ0ZlYiAxMiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAyLTEyJyxcclxuICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDkyNzI0NDQxOTk3LTVkYzg2NTMwNWRhNz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY3OSZxPTgwJyxcclxuICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdEYW5pZWxhIE1ldHonLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg3NDEyNzIwNTA3LWU3YWIzNzYwM2M2Zj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbl1cclxuXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwYi04IGJnLXdoaXRlIHNtOnBiLTE2IG1kOnBiLTIwIGxnOm1heC13LTJ4bCBsZzp3LWZ1bGwgbGc6cGItMjggeGw6cGItMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSByaWdodC0wIGluc2V0LXktMCBoLWZ1bGwgdy00OCB0ZXh0LXdoaXRlIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNTAsMCAxMDAsMCA1MCwxMDAgMCwxMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xMCBteC1hdXRvIG1heC13LTd4bCBweC00IHNtOm10LTEyIHNtOnB4LTYgbWQ6bXQtMTYgbGc6bXQtMjAgbGc6cHgtOCB4bDptdC0yOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgc206dGV4dC01eGwgbWQ6dGV4dC02eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB4bDppbmxpbmVcIj5TdGFydCB5b3VyIG9ubGluZTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtaW5kaWdvLTYwMCB4bDppbmxpbmVcIj5jcnlwdG8gdHJhZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIHNtOm10LTUgc206dGV4dC1sZyBzbTptYXgtdy14bCBzbTpteC1hdXRvIG1kOm10LTUgbWQ6dGV4dC14bCBsZzpteC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbSBhdXRlIGlkIG1hZ25hIGFsaXF1YSBhZCBhZCBub24gZGVzZXJ1bnQgc3VudC4gUXVpIGlydXJlIHF1aSBsb3JlbSBjdXBpZGF0YXQgY29tbW9kby4gRWxpdCBzdW50IGFtZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWdpYXQgdmVuaWFtIG9jY2FlY2F0IGZ1Z2lhdCBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc206bXQtOCBzbTpmbGV4IHNtOmp1c3RpZnktY2VudGVyIGxnOmp1c3RpZnktc3RhcnQgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTggcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIG1kOnB5LTQgbWQ6dGV4dC1sZyBtZDpweC0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6YWJzb2x1dGUgbGc6aW5zZXQteS0wIGxnOnJpZ2h0LTAgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTU2IHctZnVsbCBvYmplY3QtY292ZXIgc206aC03MiBtZDpoLTk2IGxnOnctZnVsbCBsZzpoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RiZHRjcmJwei9pbWFnZS91cGxvYWQvdjE2MjI2NTMyMTYvcGV4ZWxzLW1vb3NlLXBob3Rvcy0xMDM3OTE1X21tY3Blai5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctN3hsIG14LWF1dG8gcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LWZ1bGwgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTMvNCBsZzpsZWZ0LWF1dG8gbGc6cmlnaHQtZnVsbCBsZzp0cmFuc2xhdGUteC0yLzMgbGc6dHJhbnNsYXRlLXktMS80XCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDA0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17Nzg0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQwNCA3ODRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIjhiMWI1ZjcyLWU5NDQtNDQ1Ny1hZjY3LTBjNmQxNWE5OWYzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17NDA0fSBoZWlnaHQ9ezc4NH0gZmlsbD1cInVybCgjOGIxYjVmNzItZTk0NC00NDU3LWFmNjctMGM2ZDE1YTk5ZjM4KVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTMgbGc6Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBiZXR0ZXIgd2F5IHRvIHN0YXJ0IHlvdXIgYnJva2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJtdC0xMCBzcGFjZS15LTEwIHNtOnNwYWNlLXktMCBzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOmdhcC14LTggc206Z2FwLXktMTAgbGc6bXQtMCBsZzpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmZWF0dXJlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEyIHctMTIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZWF0dXJlLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57ZmVhdHVyZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0yIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTUwIHB0LTE2IHBiLTIwIHB4LTQgc206cHgtNiBsZzpwdC0yNCBsZzpwYi0yOCBsZzpweC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTEvMyBzbTpoLTIvM1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgc206dGV4dC00eGxcIj5Gcm9tIHRoZSBibG9nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIG1heC13LTJ4bCBteC1hdXRvIHRleHQteGwgdGV4dC1ncmF5LTUwMCBzbTptdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBJcHNhIGxpYmVybyBsYWJvcmUgbmF0dXMgYXRxdWUsIGR1Y2ltdXMgc2VkLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBtYXgtdy1sZyBteC1hdXRvIGdyaWQgZ2FwLTUgbGc6Z3JpZC1jb2xzLTMgbGc6bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz17cG9zdC5pbWFnZVVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctd2hpdGUgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWluZGlnby02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuY2F0ZWdvcnkuaHJlZn0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmhyZWZ9IGNsYXNzTmFtZT1cImJsb2NrIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e3Bvc3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtwb3N0LmF1dGhvci5pbWFnZVVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5hdXRob3IuaHJlZn0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmF1dGhvci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e3Bvc3QuZGF0ZXRpbWV9Pntwb3N0LmRhdGV9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZtaWRkb3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnJlYWRpbmdUaW1lfSByZWFkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcclxuICAgIGxldCBza2lwID0gMDtcclxuICAgIGxldCBsaW1pdCA9IDI7XHJcbiAgICByZXR1cm4gbGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzKHNraXAsIGxpbWl0KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBibG9nczogZGF0YS5ibG9ncyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGRhdGEuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgIHRvdGFsQmxvZ3M6IGRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGJsb2dzTGltaXQ6IGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgYmxvZ1NraXA6IHNraXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9