webpackHotUpdate_N_E("pages/blogs",{

/***/ "./components/Blog/Card/Card.js":
/*!**************************************!*\
  !*** ./components/Blog/Card/Card.js ***!
  \**************************************/
/*! exports provided: BlogCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCard", function() { return BlogCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.js");


var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Card\\Card.js",
    _this = undefined;





var posts = [{
  title: 'Boost your conversion rate',
  href: '#',
  category: {
    name: 'Article',
    href: '#',
    color: 'bg-indigo-100 text-indigo-800'
  },
  description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Paul York',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '6 min'
}, {
  title: 'How to use search engine optimization to drive sales',
  href: '#',
  category: {
    name: 'Video',
    href: '#',
    color: 'bg-pink-100 text-pink-800'
  },
  description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
  date: 'Mar 10, 2020',
  datetime: '2020-03-10',
  author: {
    name: 'Dessie Ryan',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '4 min'
}, {
  title: 'Improve your customer experience',
  href: '#',
  category: {
    name: 'Case Study',
    href: '#',
    color: 'bg-green-100 text-green-800'
  },
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  author: {
    name: 'Easer Collins',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  readingTime: '11 min'
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

var BlogCard = function BlogCard(_ref) {
  var blog = _ref.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      console.log(c);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this);
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-6 px-6 min-w-min w-full overflow-hidden sm:my-8 sm:px-8 sm:w-1/3 md:my-8 md:px-8 md:w-full lg:w-full lg:px-6 lg:w-full xl:my-5 xl:px-5 xl:w-full",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lead pb-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-20",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "rounded-lg shadow-lg flex h-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " h-50 bg-cover bg-center rounded-tl-lg rounded-bl-lg overflow-hidden w-1/1 bg-blue-400 text-center",
            style: {
              background: "url(".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/blog/photo/").concat(blog.slug, ")"),
              height: "25em !important",
              width: "100%",
              backgroundSize: "cover",
              minWidth: "20em",
              backgroundPosition: "95% 100%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex-grow",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "p-4 text-gray-600",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mark ml-1 pt-2 pb-2",
                children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: "/profile/".concat(blog.postedBy.username),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: blog.postedBy.username
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 48
                }, _this), " ", ' ', " | Published ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/blogs/".concat(blog.slug),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    className: "text-3xl font-sans md:font-serif font-bold text-gray-800 mb-4",
                    children: blog.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-2md mb-2",
                children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/blogs/".concat(blog.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-4 px-4 text-xs text-blue-500 bg-blue-100 w-full rounded-br-lg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Read more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, _this);
};
_c = BlogCard;

var Card = function Card(_ref2) {
  var blog = _ref2.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      console.log(c);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this);
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "lead pb-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/blogs/".concat(blog.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "pt-3 pb-3 font-weight-bold",
            children: blog.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: [showBlogCategories(blog), showBlogTags(blog), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "img img-fluid",
            style: {
              maxHeight: 'auto',
              width: '100%'
            },
            src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/blog/photo/").concat(blog.slug),
            alt: blog.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pb-3",
            children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn-primary pt-2",
              children: "Read more"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 9
  }, _this);
};

_c2 = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c, _c2;

$RefreshReg$(_c, "BlogCard");
$RefreshReg$(_c2, "Card");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvQ2FyZC5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsInRpdGxlIiwiaHJlZiIsImNhdGVnb3J5IiwibmFtZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiZGF0ZXRpbWUiLCJhdXRob3IiLCJpbWFnZVVybCIsInJlYWRpbmdUaW1lIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkJsb2dDYXJkIiwiYmxvZyIsInNob3dCbG9nQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJzbHVnIiwic2hvd0Jsb2dUYWdzIiwidGFncyIsInQiLCJiYWNrZ3JvdW5kIiwiQVBJIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kU2l6ZSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsIm1vbWVudCIsInVwZGF0ZWRBdCIsImZyb21Ob3ciLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsIkNhcmQiLCJtYXhIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxPQUFLLEVBQUUsNEJBRFg7QUFFSUMsTUFBSSxFQUFFLEdBRlY7QUFHSUMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRSxTQUFSO0FBQW1CRixRQUFJLEVBQUUsR0FBekI7QUFBOEJHLFNBQUssRUFBRTtBQUFyQyxHQUhkO0FBSUlDLGFBQVcsRUFDUCxrSEFMUjtBQU1JQyxNQUFJLEVBQUUsY0FOVjtBQU9JQyxVQUFRLEVBQUUsWUFQZDtBQVFJQyxRQUFNLEVBQUU7QUFDSkwsUUFBSSxFQUFFLFdBREY7QUFFSkYsUUFBSSxFQUFFLEdBRkY7QUFHSlEsWUFBUSxFQUNKO0FBSkEs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O0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFXSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxzQkFBdUJ5Qyx3REFBVSxDQUFDeEIsSUFBSSxDQUFDeUIsT0FBTjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWXpCLElBQUksQ0FBQ1EsSUFBakIsQ0FBVjtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQTVERDs7TUFBTWtCLEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLjlhOTNhNDRkNTkxZTVhMjhlNjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQm9vc3QgeW91ciBjb252ZXJzaW9uIHJhdGUnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeTogeyBuYW1lOiAnQXJ0aWNsZScsIGhyZWY6ICcjJywgY29sb3I6ICdiZy1pbmRpZ28tMTAwIHRleHQtaW5kaWdvLTgwMCcgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ051bGxhbSByaXN1cyBibGFuZGl0IGFjIGFsaXF1YW0ganVzdG8gaXBzdW0uIFF1YW0gbWF1cmlzIHZvbHV0cGF0IG1hc3NhIGRpY3R1bXN0IGFtZXQuIFNhcGllbiB0b3J0b3IgbGFjdXMgYXJjdS4nLFxyXG4gICAgICAgIGRhdGU6ICdNYXIgMTYsIDIwMjAnLFxyXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wMy0xNicsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdQYXVsIFlvcmsnLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzYgbWluJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdIb3cgdG8gdXNlIHNlYXJjaCBlbmdpbmUgb3B0aW1pemF0aW9uIHRvIGRyaXZlIHNhbGVzJyxcclxuICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHsgbmFtZTogJ1ZpZGVvJywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLXBpbmstMTAwIHRleHQtcGluay04MDAnIH0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdOdWxsYW0gcmlzdXMgYmxhbmRpdCBhYyBhbGlxdWFtIGp1c3RvIGlwc3VtLiBRdWFtIG1hdXJpcyB2b2x1dHBhdCBtYXNzYSBkaWN0dW1zdCBhbWV0LiBTYXBpZW4gdG9ydG9yIGxhY3VzIGFyY3UuJyxcclxuICAgICAgICBkYXRlOiAnTWFyIDEwLCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDMtMTAnLFxyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnRGVzc2llIFJ5YW4nLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwNTI1ODExLWU1ODY5ZGQwMzAzMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzQgbWluJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbXByb3ZlIHlvdXIgY3VzdG9tZXIgZXhwZXJpZW5jZScsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7IG5hbWU6ICdDYXNlIFN0dWR5JywgaHJlZjogJyMnLCBjb2xvcjogJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTgwMCcgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBYiBpdXJlIGl1c3RvIGZ1Z2lhdCBjb21tb2RpIHNlcXVpLicsXHJcbiAgICAgICAgZGF0ZTogJ0ZlYiAxMiwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAyLTEyJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0Vhc2VyIENvbGxpbnMnLFxyXG4gICAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg3NDEyNzIwNTA3LWU3YWIzNzYwM2M2Zj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkaW5nVGltZTogJzExIG1pbicsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gKHtibG9nfSkgPT4ge1xyXG4gICAgY29uc3Qgc2hvd0Jsb2dDYXRlZ29yaWVzID0gYmxvZyA9PlxyXG4gICAgICAgIGJsb2cuY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC9jYXRlZ29yaWVzLyR7Yy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPntjLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBzaG93QmxvZ1RhZ3MgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy50YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNiBweC02IG1pbi13LW1pbiB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHNtOm15LTggc206cHgtOCBzbTp3LTEvMyBtZDpteS04IG1kOnB4LTggbWQ6dy1mdWxsIGxnOnctZnVsbCBsZzpweC02IGxnOnctZnVsbCB4bDpteS01IHhsOnB4LTUgeGw6dy1mdWxsXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIGZsZXggaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTUwIGJnLWNvdmVyIGJnLWNlbnRlciByb3VuZGVkLXRsLWxnIHJvdW5kZWQtYmwtbGcgb3ZlcmZsb3ctaGlkZGVuIHctMS8xIGJnLWJsdWUtNDAwIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgke0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVlbSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjBlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI5NSUgMTAwJVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcmsgbWwtMSBwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB7JyAnfSB8IFB1Ymxpc2hlZCB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2FucyBtZDpmb250LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj57YmxvZy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJtZCBtYi0yXCI+e3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHB4LTQgdGV4dC14cyB0ZXh0LWJsdWUtNTAwIGJnLWJsdWUtMTAwIHctZnVsbCByb3VuZGVkLWJyLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWFkIG1vcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IENhcmQgPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCBzaG93QmxvZ0NhdGVnb3JpZXMgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy5jYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNob3dCbG9nVGFncyA9IGJsb2cgPT5cclxuICAgICAgICBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkIHBiLTRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwdC0zIHBiLTMgZm9udC13ZWlnaHQtYm9sZFwiPntibG9nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIHtzaG93QmxvZ0NhdGVnb3JpZXMoYmxvZyl9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0Jsb2dUYWdzKGJsb2cpfVxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj57cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB0LTJcIj5SZWFkIG1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==