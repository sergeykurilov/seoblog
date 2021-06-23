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
/* harmony import */ var E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\seoblog\\frontend\\components\\Blog\\Card\\Card.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var BlogCard = function BlogCard(_ref) {
  _s();

  var blog = _ref.blog;
  var url = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    srcBlob: null,
    srcDataUri: null
  }),
      _useState$ = _useState[0],
      srcBlob = _useState$.srcBlob,
      srcDataUri = _useState$.srcDataUri,
      setSrc = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var isUnmounted = false;
    fetch(url, {}).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return blob.arrayBuffer();
    }).then(function (arrayBuffer) {
      if (isUnmounted) {
        return;
      }

      var blob = new Blob([arrayBuffer]);
      var srcBlob = URL.createObjectURL(blob);
      setSrc(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          srcBlob: srcBlob
        });
      });
    });
    return function () {
      isUnmounted = true;
    };
  }, []);
  console.log(srcBlob);

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      console.log(c);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this);
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
              background: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug),
              height: "25em !important",
              width: "100%",
              backgroundSize: "cover",
              minWidth: "20em",
              backgroundPosition: "95% 100%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex-grow",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "p-4 text-gray-600",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mark ml-1 pt-2 pb-2",
                children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/profile/".concat(blog.postedBy.username),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: blog.postedBy.username
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 48
                }, _this), " ", ' ', " | Published ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/blogs/".concat(blog.slug),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    className: "text-3xl font-sans md:font-serif font-bold text-gray-800 mb-4",
                    children: blog.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-2md mb-2",
                children: react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/blogs/".concat(blog.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-4 px-4 text-xs text-blue-500 bg-blue-100 w-full rounded-br-lg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Read more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(BlogCard, "ouXZ8MFBRwVxe9kaUNhg4TK5w2I=");

_c = BlogCard;

var Card = function Card(_ref2) {
  var blog = _ref2.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      console.log(c);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/categories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary mr-1 ml-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, _this);
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary mr-1 ml-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "lead pb-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/blogs/".concat(blog.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "pt-3 pb-3 font-weight-bold",
            children: blog.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: [showBlogCategories(blog), showBlogTags(blog), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
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
            src: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug),
            alt: blog.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pb-3",
            children: react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(blog.excerpt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn-primary pt-2",
              children: "Read more"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvQ2FyZC5qcyJdLCJuYW1lcyI6WyJCbG9nQ2FyZCIsImJsb2ciLCJ1cmwiLCJBUEkiLCJzbHVnIiwidXNlU3RhdGUiLCJzcmNCbG9iIiwic3JjRGF0YVVyaSIsInNldFNyYyIsInVzZUVmZmVjdCIsImlzVW5tb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiYXJyYXlCdWZmZXIiLCJCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2hvd0Jsb2dDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsIm1hcCIsImMiLCJpIiwibmFtZSIsInNob3dCbG9nVGFncyIsInRhZ3MiLCJ0IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZFNpemUiLCJtaW5XaWR0aCIsImJhY2tncm91bmRQb3NpdGlvbiIsInBvc3RlZEJ5IiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwidGl0bGUiLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsIkNhcmQiLCJtYXhIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDaEMsTUFBTUMsR0FBRyxhQUFNQywyQ0FBTix5QkFBd0JGLElBQUksQ0FBQ0csSUFBN0IsQ0FBVDs7QUFEZ0Msa0JBS25CQyxzREFBUSxDQUFDO0FBQ2xCQyxXQUFPLEVBQUUsSUFEUztBQUVsQkMsY0FBVSxFQUFFO0FBRk0sR0FBRCxDQUxXO0FBQUE7QUFBQSxNQUc1QkQsT0FINEIsY0FHNUJBLE9BSDRCO0FBQUEsTUFJNUJDLFVBSjRCLGNBSTVCQSxVQUo0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QURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWTNDLElBQUksQ0FBQ0csSUFBakIsQ0FBVjtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQTVERDs7TUFBTXlDLEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLjRlMmNlYWRjNDhmNGU0MDk1Yjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YFxyXG4gICAgY29uc3QgW3tcclxuICAgICAgICBzcmNCbG9iLFxyXG4gICAgICAgIHNyY0RhdGFVcmlcclxuICAgIH0sIHNldFNyY10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3JjQmxvYjogbnVsbCxcclxuICAgICAgICBzcmNEYXRhVXJpOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpc1VubW91bnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gYmxvYi5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNVbm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNCbG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTcmMoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzcmNCbG9iXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzcmNCbG9iKVxyXG4gICAgY29uc3Qgc2hvd0Jsb2dDYXRlZ29yaWVzID0gYmxvZyA9PlxyXG4gICAgICAgIGJsb2cuY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC9jYXRlZ29yaWVzLyR7Yy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPntjLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBzaG93QmxvZ1RhZ3MgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy50YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNiBweC02IG1pbi13LW1pbiB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHNtOm15LTggc206cHgtOCBzbTp3LTEvMyBtZDpteS04IG1kOnB4LTggbWQ6dy1mdWxsIGxnOnctZnVsbCBsZzpweC02IGxnOnctZnVsbCB4bDpteS01IHhsOnB4LTUgeGw6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIGZsZXggaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTUwIGJnLWNvdmVyIGJnLWNlbnRlciByb3VuZGVkLXRsLWxnIHJvdW5kZWQtYmwtbGcgb3ZlcmZsb3ctaGlkZGVuIHctMS8xIGJnLWJsdWUtNDAwIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogYCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1ZW0gIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjIwZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiOTUlIDEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcmsgbWwtMSBwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB7JyAnfSB8IFB1Ymxpc2hlZCB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2FucyBtZDpmb250LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj57YmxvZy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJtZCBtYi0yXCI+e3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHB4LTQgdGV4dC14cyB0ZXh0LWJsdWUtNTAwIGJnLWJsdWUtMTAwIHctZnVsbCByb3VuZGVkLWJyLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWFkIG1vcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IENhcmQgPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCBzaG93QmxvZ0NhdGVnb3JpZXMgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy5jYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNob3dCbG9nVGFncyA9IGJsb2cgPT5cclxuICAgICAgICBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkIHBiLTRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwdC0zIHBiLTMgZm9udC13ZWlnaHQtYm9sZFwiPntibG9nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIHtzaG93QmxvZ0NhdGVnb3JpZXMoYmxvZyl9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0Jsb2dUYWdzKGJsb2cpfVxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj57cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB0LTJcIj5SZWFkIG1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==