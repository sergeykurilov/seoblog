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
          lineNumber: 12,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
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
          lineNumber: 20,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
              background: "".concat(srcBlob),
              height: "25em !important",
              width: "100%",
              backgroundSize: "cover",
              minWidth: "20em",
              backgroundPosition: "95% 100%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
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
                    lineNumber: 45,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 48
                }, _this), " ", ' ', " | Published ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/blogs/".concat(blog.slug),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    className: "text-3xl font-sans md:font-serif font-bold text-gray-800 mb-4",
                    children: blog.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-2md mb-2",
                children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/blogs/".concat(blog.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-4 px-4 text-xs text-blue-500 bg-blue-100 w-full rounded-br-lg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Read more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
          lineNumber: 77,
          columnNumber: 21
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
          lineNumber: 85,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
            lineNumber: 94,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: [showBlogCategories(blog), showBlogTags(blog), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
            lineNumber: 112,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pb-3",
            children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/blogs/".concat(blog.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn-primary pt-2",
              children: "Read more"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQvQ2FyZC5qcyJdLCJuYW1lcyI6WyJCbG9nQ2FyZCIsImJsb2ciLCJzaG93QmxvZ0NhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwibWFwIiwiYyIsImkiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsIm5hbWUiLCJzaG93QmxvZ1RhZ3MiLCJ0YWdzIiwidCIsImJhY2tncm91bmQiLCJzcmNCbG9iIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kU2l6ZSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsIm1vbWVudCIsInVwZGF0ZWRBdCIsImZyb21Ob3ciLCJ0aXRsZSIsInJlbmRlckhUTUwiLCJleGNlcnB0IiwiQ2FyZCIsIm1heEhlaWdodCIsIkFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQ2hDLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUQsSUFBSTtBQUFBLFdBQzNCQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzFCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBLDBCQUNJLHFFQUFDLGdEQUFEO0FBQWMsWUFBSSx3QkFBaUJBLENBQUMsQ0FBQ0ksSUFBbkIsQ0FBbEI7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsZ0NBQWI7QUFBQSxvQkFBK0NKLENBQUMsQ0FBQ0s7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVdKLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsS0FQRCxDQUQyQjtBQUFBLEdBQS9COztB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O0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQTVERDs7TUFBTW9CLEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLjZhZDFlZjk1MWQwYTQxYzkyYzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUEl9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCBzaG93QmxvZ0NhdGVnb3JpZXMgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy5jYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNob3dCbG9nVGFncyA9IGJsb2cgPT5cclxuICAgICAgICBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS02IHB4LTYgbWluLXctbWluIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gc206bXktOCBzbTpweC04IHNtOnctMS8zIG1kOm15LTggbWQ6cHgtOCBtZDp3LWZ1bGwgbGc6dy1mdWxsIGxnOnB4LTYgbGc6dy1mdWxsIHhsOm15LTUgeGw6cHgtNSB4bDp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbGcgZmxleCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNTAgYmctY292ZXIgYmctY2VudGVyIHJvdW5kZWQtdGwtbGcgcm91bmRlZC1ibC1sZyBvdmVyZmxvdy1oaWRkZW4gdy0xLzEgYmctYmx1ZS00MDAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgJHtzcmNCbG9ifWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1ZW0gIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjIwZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiOTUlIDEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcmsgbWwtMSBwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiB7JyAnfSB8IFB1Ymxpc2hlZCB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2FucyBtZDpmb250LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj57YmxvZy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJtZCBtYi0yXCI+e3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHB4LTQgdGV4dC14cyB0ZXh0LWJsdWUtNTAwIGJnLWJsdWUtMTAwIHctZnVsbCByb3VuZGVkLWJyLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWFkIG1vcmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IENhcmQgPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCBzaG93QmxvZ0NhdGVnb3JpZXMgPSBibG9nID0+XHJcbiAgICAgICAgYmxvZy5jYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNob3dCbG9nVGFncyA9IGJsb2cgPT5cclxuICAgICAgICBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkIHBiLTRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwdC0zIHBiLTMgZm9udC13ZWlnaHQtYm9sZFwiPntibG9nLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIHtzaG93QmxvZ0NhdGVnb3JpZXMoYmxvZyl9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0Jsb2dUYWdzKGJsb2cpfVxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj57cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB0LTJcIj5SZWFkIG1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==