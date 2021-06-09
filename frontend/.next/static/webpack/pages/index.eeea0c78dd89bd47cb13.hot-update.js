webpackHotUpdate_N_E("pages/index",{

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

function HomePage(props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImZlYXR1cmVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsIkdsb2JlQWx0SWNvbiIsIlNjYWxlSWNvbiIsIkxpZ2h0bmluZ0JvbHRJY29uIiwiTWFpbEljb24iLCJuYXZpZ2F0aW9uIiwiaHJlZiIsInBvc3RzIiwidGl0bGUiLCJjYXRlZ29yeSIsImRhdGUiLCJkYXRldGltZSIsImltYWdlVXJsIiwicmVhZGluZ1RpbWUiLCJhdXRob3IiLCJIb21lUGFnZSIsInByb3BzIiwibWFwIiwiZmVhdHVyZSIsInBvc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJza2lwIiwibGltaXQiLCJsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImJsb2dzIiwiY2F0ZWdvcmllcyIsInRhZ3MiLCJ0b3RhbEJsb2dzIiwic2l6ZSIsImJsb2dzTGltaXQiLCJibG9nU2tpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxNQUFJLEVBQUUsbUJBRFY7QUFFSUMsYUFBVyxFQUFFLCtGQUZqQjtBQUdJQyxNQUFJLEVBQUVDLHFFQUFZQTtBQUh0QixDQURhLEVBTWI7QUFDSUgsTUFBSSxFQUFFLGdCQURWO0FBRUlDLGFBQVcsRUFDUCw4R0FIUjtBQUlJQyxNQUFJLEVBQUVFLGtFQUFTQTtBQUpuQixDQU5hLEVBWWI7QUFDSUosTUFBSSxFQUFFLG1CQURWO0FBRUlDLGFBQVcsRUFDUCx1SEFIUjtBQUlJQyxNQUFJLEVBQUVHLDBFQUFpQkE7QUFKM0IsQ0FaYSxFQWtCYjtBQUNJTCxNQUFJLEVBQUUsaUJBRFY7QUFFSUMsYUFBVyxFQUNQLG9IQUhSO0FBSUlDLE1BQUksRUFBRUksaUVBQVFBO0FBSmxCLENBbEJhLENBQWpCO0FBeUJBLElBQU1DLFVBQVUsR0FBRyxDQUNmO0FBQUVQLE1BQUksRUFBRSxTQUFSO0FBQW1CUSxNQUFJLEVBQUU7QUFBekIsQ0FEZSxFQUVmO0FBQUVSLE1BQUksRUFBRSxVQUFSO0FBQW9CUSxNQUFJLEVBQUU7QUFBMUIsQ0FGZSxFQUdmO0FBQUVSLE1BQUksRUFBRSxhQUFSO0FBQXVCUSxNQUFJLEVBQUU7QUFBN0IsQ0FIZSxFQUlmO0FBQUVSLE1BQUksRUFBRSxTQUFSO0FBQW1CUSxNQUFJLEVBQUU7QUFBekIsQ0FKZSxDQUFuQjtBQU1BLElBQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0lDLE9BQUssRUFBRSw0QkFEWDtBQUVJRixNQUFJLEVBQUUsR0FGVjtBQUdJRyxVQUFRLEVBQUU7QUFBRVgsUUFBSSxFQUFFLFNBQVI7QUFBbUJRLFFBQUksRUFBRTtBQUF6QixHQUhkO0FBSUlQLGFBQVcsRUFDUCw4SkFMUjtBQU1JVyxNQUFJLEVBQUUsY0FOVjtBQU9JQyxVQUFRLEVBQUUsWUFQZDtBQVFJQyxVQUFRLEVBQ0osd0lBVFI7QUFVSUMsYUFBVyxFQUFFLE9BVmpCO0FBV0lDLFFBQU0sRUFBRTtBQUNKaEIsUUFBSSxFQUFFLGlCQURGO0FBRUpRLFFBQUksRUFBRSxHQUZGO0FBR0pNLFlBQVEsRUFDSjtBQUpBO0FBWFosQ0FEVSxFQW1CVjtBQUNJSixPQUFLLEVBQUUsc0RBRFg7QUFFSUYsTUFBSSxFQUFFLEdBRlY7QUFHSUcsVUFBUSxFQUFFO0FBQUVYLFFBQUksRUFBRSxPQUFSO0FBQWlCUSxRQUFJLEVBQUU7QUFBdkIsR0FIZDtBQUlJUCxhQUFXLEVBQ1AsNE1BTFI7QUFNSVcsTUFBSSxFQUFFLGNBTlY7QUFPSUMsVUFBUSxFQUFFLFlBUGQ7QUFRSUMsVUFBUSxFQUNKLHFJQVRSO0FBVUlDLGFBQVcsRUFBRSxPQVZqQjtBQVdJQyxRQUFNLEVBQUU7QUFDSmhCLFFBQUksRUFBRSxnQkFERjtBQUVKUSxRQUFJLEVBQUUsR0FGRjtBQUdKTSxZQUFRLEVBQ0o7QUFKQTtBQVhaLENBbkJVLEVBcUNWO0FBQ0lKLE9BQUssRUFBRSxrQ0FEWDtBQUVJRixNQUFJLEVBQUUsR0FGVjtBQUdJRyxVQUFRLEVBQUU7QUFBRVgsUUFBSSxFQUFFLFlBQVI7QUFBc0JRLFFBQUksRUFBRTtBQUE1QixHQUhkO0FBSUlQLGFBQVcsRUFDUCxtTEFMUjtBQU1JVyxNQUFJLEVBQUUsY0FOVjtBQU9JQyxVQUFRLEVBQUUsWUFQZDtBQVFJQyxVQUFRLEVBQ0osd0lBVFI7QUFVSUMsYUFBVyxFQUFFLFFBVmpCO0FBV0lDLFFBQU0sRUFBRTtBQUNKaEIsUUFBSSxFQUFFLGNBREY7QUFFSlEsUUFBSSxFQUFFLEdBRkY7QUFHSk0sWUFBUSxFQUNKO0FBSkE7QUFYWixDQXJDVSxDQUFkOztBQTBEQSxTQUFTRyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUNyQixzQkFBTyxxRUFBQyx5REFBRDtBQUFBLDRCQUNIO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLHdGQUFmO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxFQUFDLDZGQURkO0FBRUksZ0JBQUksRUFBQyxjQUZUO0FBR0ksbUJBQU8sRUFBQyxhQUhaO0FBSUksK0JBQW1CLEVBQUMsTUFKeEI7QUFLSSwyQkFBWSxNQUxoQjtBQUFBLG1DQU9JO0FBQVMsb0JBQU0sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVVJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkosZUFZSTtBQUFNLHFCQUFTLEVBQUMsa0ZBQWhCO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFDLDhFQUFkO0FBQUEsd0NBQ0k7QUFBTSwyQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUMrRCxHQUQvRCxlQUVJO0FBQU0sMkJBQVMsRUFBQyxpQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBS0k7QUFBRyx5QkFBUyxFQUFDLG1HQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKLGVBU0k7QUFBSyx5QkFBUyxFQUFDLG1FQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEseUNBQ0k7QUFDSSx3QkFBSSxFQUFDLEdBRFQ7QUFFSSw2QkFBUyxFQUFDLHVMQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFzQ0k7QUFBSyxpQkFBUyxFQUFDLDhDQUFmO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFDLDhEQURkO0FBRUksYUFBRyxFQUFDLHNHQUZSO0FBR0ksYUFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUErQ0g7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsdURBQWY7QUFBQSxnQ0FDSTtBQUNJLG1CQUFTLEVBQUMsdUlBRGQ7QUFFSSxlQUFLLEVBQUUsR0FGWDtBQUdJLGdCQUFNLEVBQUUsR0FIWjtBQUlJLGNBQUksRUFBQyxNQUpUO0FBS0ksaUJBQU8sRUFBQyxhQUxaO0FBTUkseUJBQVksTUFOaEI7QUFBQSxrQ0FRSTtBQUFBLG1DQUNJO0FBQ0ksZ0JBQUUsRUFBQyxzQ0FEUDtBQUVJLGVBQUMsRUFBRSxDQUZQO0FBR0ksZUFBQyxFQUFFLENBSFA7QUFJSSxtQkFBSyxFQUFFLEVBSlg7QUFLSSxvQkFBTSxFQUFFLEVBTFo7QUFNSSwwQkFBWSxFQUFDLGdCQU5qQjtBQUFBLHFDQVFJO0FBQU0saUJBQUMsRUFBRSxDQUFUO0FBQVksaUJBQUMsRUFBRSxDQUFmO0FBQWtCLHFCQUFLLEVBQUUsQ0FBekI7QUFBNEIsc0JBQU0sRUFBRSxDQUFwQztBQUF1Qyx5QkFBUyxFQUFDLGVBQWpEO0FBQWlFLG9CQUFJLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLGVBb0JJO0FBQU0saUJBQUssRUFBRSxHQUFiO0FBQWtCLGtCQUFNLEVBQUUsR0FBMUI7QUFBK0IsZ0JBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUF3Qkk7QUFBSyxtQkFBUyxFQUFDLDRDQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsa0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBSSxxQkFBUyxFQUFDLG1HQUFkO0FBQUEsc0JBQ0tuQixRQUFRLENBQUNvQixHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLGtDQUNWO0FBQUEsd0NBQ0k7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsZ0ZBQWY7QUFBQSwyQ0FDSSxxRUFBQyxPQUFELENBQVMsSUFBVDtBQUFjLCtCQUFTLEVBQUMsU0FBeEI7QUFBa0MscUNBQVk7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFJSTtBQUFHLDZCQUFTLEVBQUMsa0RBQWI7QUFBQSw4QkFBaUVBLE9BQU8sQ0FBQ3BCO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBT0k7QUFBSSwyQkFBUyxFQUFDLDhCQUFkO0FBQUEsNEJBQThDb0IsT0FBTyxDQUFDbkI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBLGlCQUFVbUIsT0FBTyxDQUFDcEIsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVTtBQUFBLGFBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DRyxlQWdHSDtBQUFLLGVBQVMsRUFBQyx3RUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxrRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxzREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFPSTtBQUFLLG1CQUFTLEVBQUMsZ0VBQWY7QUFBQSxvQkFDS1MsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0UsSUFBRDtBQUFBLGdDQUNQO0FBQXNCLHVCQUFTLEVBQUMsb0RBQWhDO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMsMEJBQWY7QUFBMEMscUJBQUcsRUFBRUEsSUFBSSxDQUFDUCxRQUFwRDtBQUE4RCxxQkFBRyxFQUFDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBSyx5QkFBUyxFQUFDLG1EQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLFFBQWY7QUFBQSwwQ0FDSTtBQUFHLDZCQUFTLEVBQUMscUNBQWI7QUFBQSwyQ0FDSTtBQUFHLDBCQUFJLEVBQUVPLElBQUksQ0FBQ1YsUUFBTCxDQUFjSCxJQUF2QjtBQUE2QiwrQkFBUyxFQUFDLGlCQUF2QztBQUFBLGdDQUNLYSxJQUFJLENBQUNWLFFBQUwsQ0FBY1g7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFNSTtBQUFHLHdCQUFJLEVBQUVxQixJQUFJLENBQUNiLElBQWQ7QUFBb0IsNkJBQVMsRUFBQyxZQUE5QjtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQyxxQ0FBYjtBQUFBLGdDQUFvRGEsSUFBSSxDQUFDWDtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBRUk7QUFBRywrQkFBUyxFQUFDLDhCQUFiO0FBQUEsZ0NBQTZDVyxJQUFJLENBQUNwQjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFZSTtBQUFLLDJCQUFTLEVBQUMsd0JBQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsZUFBZjtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBRW9CLElBQUksQ0FBQ0wsTUFBTCxDQUFZUixJQUFyQjtBQUFBLDhDQUNJO0FBQU0saUNBQVMsRUFBQyxTQUFoQjtBQUFBLGtDQUEyQmEsSUFBSSxDQUFDTCxNQUFMLENBQVloQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFBSyxpQ0FBUyxFQUFDLHdCQUFmO0FBQXdDLDJCQUFHLEVBQUVxQixJQUFJLENBQUNMLE1BQUwsQ0FBWUYsUUFBekQ7QUFBbUUsMkJBQUcsRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFPSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQyxtQ0FBYjtBQUFBLDZDQUNJO0FBQUcsNEJBQUksRUFBRU8sSUFBSSxDQUFDTCxNQUFMLENBQVlSLElBQXJCO0FBQTJCLGlDQUFTLEVBQUMsaUJBQXJDO0FBQUEsa0NBQ0thLElBQUksQ0FBQ0wsTUFBTCxDQUFZaEI7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFNSTtBQUFLLCtCQUFTLEVBQUMsc0NBQWY7QUFBQSw4Q0FDSTtBQUFNLGdDQUFRLEVBQUVxQixJQUFJLENBQUNSLFFBQXJCO0FBQUEsa0NBQWdDUSxJQUFJLENBQUNUO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFFSTtBQUFNLHVDQUFZLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKLGVBR0k7QUFBQSxtQ0FBT1MsSUFBSSxDQUFDTixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQSxlQUFVTSxJQUFJLENBQUNYLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBLFdBQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhHRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXdKSDs7S0F6SlFPLFE7O0FBMkpUQSxRQUFRLENBQUNLLGVBQVQsR0FBMkIsWUFBTTtBQUM3QixNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsU0FBT0Msb0ZBQThCLENBQUNGLElBQUQsRUFBT0MsS0FBUCxDQUE5QixDQUE0Q0UsSUFBNUMsQ0FBaUQsVUFBQUMsSUFBSSxFQUFJO0FBQzVELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU87QUFDSEcsYUFBSyxFQUFFSixJQUFJLENBQUNJLEtBRFQ7QUFFSEMsa0JBQVUsRUFBRUwsSUFBSSxDQUFDSyxVQUZkO0FBR0hDLFlBQUksRUFBRU4sSUFBSSxDQUFDTSxJQUhSO0FBSUhDLGtCQUFVLEVBQUVQLElBQUksQ0FBQ1EsSUFKZDtBQUtIQyxrQkFBVSxFQUFFWixLQUxUO0FBTUhhLGdCQUFRLEVBQUVkO0FBTlAsT0FBUDtBQVFIO0FBQ0osR0FiTSxDQUFQO0FBY0gsQ0FqQkQ7O0FBb0JlTix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWVhMGM3OGRkODliZDQ3Y2IxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBvcG92ZXIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgTWVudUljb24sIFhJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQgeyBHbG9iZUFsdEljb24sIExpZ2h0bmluZ0JvbHRJY29uLCBNYWlsSWNvbiwgU2NhbGVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQge0xheW91dH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7bGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzfSBmcm9tIFwiLi4vYWN0aW9ucy9ibG9nXCI7XHJcblxyXG5jb25zdCBmZWF0dXJlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tcGV0aXRpdmUgcmF0ZXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ29uc2VxdXVudHVyIG9tbmlzIGRpY3RhIGN1bXF1ZSwgaW52ZW50b3JlIGF0cXVlIGFiIGRvbG9yZXMgYXNwZXJuYXR1ciB0ZW1wb3JhIGFiIGRvbG9yZW1xdWUuJyxcclxuICAgICAgICBpY29uOiBHbG9iZUFsdEljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdObyBoaWRkZW4gZmVlcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdDb3Jwb3JpcyBxdWlzcXVhbSBub3N0cnVtIG51bGxhIHZlbmlhbSByZWN1c2FuZGFlIHRlbXBvcmlidXMgYXBlcmlhbSBvZmZpY2lhIGluY2lkdW50IGF0IGRpc3RpbmN0aW8gcmF0aW9uZS4nLFxyXG4gICAgICAgIGljb246IFNjYWxlSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0luc3RhbnQgdHJhbnNmZXJzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ09tbmlzLCBpbGxvIGRlbGVjdHVzPyBMaWJlcm8sIHBvc3NpbXVzIG51bGxhIG5lbW8gdGVuZXR1ciBhZGlwaXNjaSByZXBlbGxhdCBkb2xvcmUgZWxpZ2VuZGkgdmVsaXQgZG9sb3JpYnVzIG1vbGxpdGlhLicsXHJcbiAgICAgICAgaWNvbjogTGlnaHRuaW5nQm9sdEljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSZW1pbmRlciBlbWFpbHMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnVmVuaWFtIG5lY2Vzc2l0YXRpYnVzIHJlaWNpZW5kaXMgZnVnaXQgZXhwbGljYWJvIGRvbG9yZW0gbmloaWwgZXQgb21uaXMgYXNzdW1lbmRhIG9kaXQ/IFF1aXNxdWFtIHVuZGUgYWNjdXNhbnRpdW0uJyxcclxuICAgICAgICBpY29uOiBNYWlsSWNvbixcclxuICAgIH0sXHJcbl1cclxuY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICAgIHsgbmFtZTogJ1Byb2R1Y3QnLCBocmVmOiAnIycgfSxcclxuICAgIHsgbmFtZTogJ0ZlYXR1cmVzJywgaHJlZjogJyMnIH0sXHJcbiAgICB7IG5hbWU6ICdNYXJrZXRwbGFjZScsIGhyZWY6ICcjJyB9LFxyXG4gICAgeyBuYW1lOiAnQ29tcGFueScsIGhyZWY6ICcjJyB9LFxyXG5dXHJcbmNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQm9vc3QgeW91ciBjb252ZXJzaW9uIHJhdGUnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeTogeyBuYW1lOiAnQXJ0aWNsZScsIGhyZWY6ICcjJyB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXJjaGl0ZWN0byBhY2N1c2FudGl1bSBwcmFlc2VudGl1bSBlaXVzLCB1dCBhdHF1ZSBmdWdhIGN1bHBhLCBzaW1pbGlxdWUgc2VxdWkgY3VtIGVvcyBxdWlzIGRvbG9ydW0uJyxcclxuICAgICAgICBkYXRlOiAnTWFyIDE2LCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDMtMTYnLFxyXG4gICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTYxMjg4NTg0MTMtYjM2MjE3YzJjZTM2P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjc5JnE9ODAnLFxyXG4gICAgICAgIHJlYWRpbmdUaW1lOiAnNiBtaW4nLFxyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnUm9lbCBBdWZkZXJlaGFyJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSG93IHRvIHVzZSBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiB0byBkcml2ZSBzYWxlcycsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7IG5hbWU6ICdWaWRlbycsIGhyZWY6ICcjJyB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVsaXQgZmFjaWxpcyBhc3BlcmlvcmVzIHBvcnJvIHF1YWVyYXQgZG9sb3JpYnVzLCBldmVuaWV0IGRvbG9yZS4gQWRpcGlzY2kgdGVtcG9yYSBhdXQgaW52ZW50b3JlIG9wdGlvIGFuaW1pLiwgdGVtcG9yZSB0ZW1wb3JpYnVzIHF1byBsYXVkYW50aXVtLicsXHJcbiAgICAgICAgZGF0ZTogJ01hciAxMCwgMjAyMCcsXHJcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTAzLTEwJyxcclxuICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ3NTg2Njk2LWVhMjJiNGQ0MjM1ZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY3OSZxPTgwJyxcclxuICAgICAgICByZWFkaW5nVGltZTogJzQgbWluJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0JyZW5uYSBHb3lldHRlJyxcclxuICAgICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MDUyNTgxMS1lNTg2OWRkMDMwMzI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSW1wcm92ZSB5b3VyIGN1c3RvbWVyIGV4cGVyaWVuY2UnLFxyXG4gICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICBjYXRlZ29yeTogeyBuYW1lOiAnQ2FzZSBTdHVkeScsIGhyZWY6ICcjJyB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBoYXJ1bSByZXJ1bSB2b2x1cHRhdGVtIHF1byByZWN1c2FuZGFlIG1hZ25pIHBsYWNlYXQgc2FlcGUgbW9sZXN0aWFlLCBzZWQgZXhjZXB0dXJpIGN1bXF1ZSBjb3Jwb3JpcyBwZXJmZXJlbmRpcyBoaWMuJyxcclxuICAgICAgICBkYXRlOiAnRmViIDEyLCAyMDIwJyxcclxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDItMTInLFxyXG4gICAgICAgIGltYWdlVXJsOlxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTI3MjQ0NDE5OTctNWRjODY1MzA1ZGE3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjc5JnE9ODAnLFxyXG4gICAgICAgIHJlYWRpbmdUaW1lOiAnMTEgbWluJyxcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0RhbmllbGEgTWV0eicsXHJcbiAgICAgICAgICAgIGhyZWY6ICcjJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODc0MTI3MjA1MDctZTdhYjM3NjAzYzZmP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcGItOCBiZy13aGl0ZSBzbTpwYi0xNiBtZDpwYi0yMCBsZzptYXgtdy0yeGwgbGc6dy1mdWxsIGxnOnBiLTI4IHhsOnBiLTMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYWJzb2x1dGUgcmlnaHQtMCBpbnNldC15LTAgaC1mdWxsIHctNDggdGV4dC13aGl0ZSB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUwLDAgMTAwLDAgNTAsMTAwIDAsMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXQtMTAgbXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTptdC0xMiBzbTpweC02IG1kOm10LTE2IGxnOm10LTIwIGxnOnB4LTggeGw6bXQtMjhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNXhsIG1kOnRleHQtNnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgeGw6aW5saW5lXCI+U3RhcnQgeW91ciBvbmxpbmU8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWluZGlnby02MDAgeGw6aW5saW5lXCI+Y3J5cHRvIHRyYWRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMCBzbTptdC01IHNtOnRleHQtbGcgc206bWF4LXcteGwgc206bXgtYXV0byBtZDptdC01IG1kOnRleHQteGwgbGc6bXgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW0gYXV0ZSBpZCBtYWduYSBhbGlxdWEgYWQgYWQgbm9uIGRlc2VydW50IHN1bnQuIFF1aSBpcnVyZSBxdWkgbG9yZW0gY3VwaWRhdGF0IGNvbW1vZG8uIEVsaXQgc3VudCBhbWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVnaWF0IHZlbmlhbSBvY2NhZWNhdCBmdWdpYXQgYWxpcXVhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNtOm10LTggc206ZmxleCBzbTpqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC04IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBtZDpweS00IG1kOnRleHQtbGcgbWQ6cHgtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmFic29sdXRlIGxnOmluc2V0LXktMCBsZzpyaWdodC0wIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01NiB3LWZ1bGwgb2JqZWN0LWNvdmVyIHNtOmgtNzIgbWQ6aC05NiBsZzp3LWZ1bGwgbGc6aC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYmR0Y3JicHovaW1hZ2UvdXBsb2FkL3YxNjIyNjUzMjE2L3BleGVscy1tb29zZS1waG90b3MtMTAzNzkxNV9tbWNwZWouanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC1mdWxsIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0zLzQgbGc6bGVmdC1hdXRvIGxnOnJpZ2h0LWZ1bGwgbGc6dHJhbnNsYXRlLXgtMi8zIGxnOnRyYW5zbGF0ZS15LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwNH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc4NH1cclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgNzg0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCI4YjFiNWY3Mi1lOTQ0LTQ0NTctYWY2Ny0wYzZkMTVhOTlmMzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9ezQwNH0gaGVpZ2h0PXs3ODR9IGZpbGw9XCJ1cmwoIzhiMWI1ZjcyLWU5NDQtNDQ1Ny1hZjY3LTBjNmQxNWE5OWYzOClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmdhcC14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC00eGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgYmV0dGVyIHdheSB0byBzdGFydCB5b3VyIGJyb2tlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibXQtMTAgc3BhY2UteS0xMCBzbTpzcGFjZS15LTAgc206Z3JpZCBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC04IHNtOmdhcC15LTEwIGxnOm10LTAgbGc6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmVhdHVyZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMiB3LTEyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVhdHVyZS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2ZlYXR1cmUubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS01MCBwdC0xNiBwYi0yMCBweC00IHNtOnB4LTYgbGc6cHQtMjQgbGc6cGItMjggbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0xLzMgc206aC0yLzNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsXCI+RnJvbSB0aGUgYmxvZzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBtYXgtdy0yeGwgbXgtYXV0byB0ZXh0LXhsIHRleHQtZ3JheS01MDAgc206bXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSBsaWJlcm8gbGFib3JlIG5hdHVzIGF0cXVlLCBkdWNpbXVzIHNlZC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWF4LXctbGcgbXgtYXV0byBncmlkIGdhcC01IGxnOmdyaWQtY29scy0zIGxnOm1heC13LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTQ4IHctZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9e3Bvc3QuaW1hZ2VVcmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXdoaXRlIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmNhdGVnb3J5LmhyZWZ9IGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5ocmVmfSBjbGFzc05hbWU9XCJibG9jayBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LmF1dGhvci5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17cG9zdC5hdXRob3IuaW1hZ2VVcmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QuYXV0aG9yLmhyZWZ9IGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5hdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtwb3N0LmRhdGV0aW1lfT57cG9zdC5kYXRlfTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbWlkZG90Ozwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5yZWFkaW5nVGltZX0gcmVhZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG59XHJcblxyXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2tpcCA9IDA7XHJcbiAgICBsZXQgbGltaXQgPSAyO1xyXG4gICAgcmV0dXJuIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyhza2lwLCBsaW1pdCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYmxvZ3M6IGRhdGEuYmxvZ3MsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJsb2dzOiBkYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICBibG9nc0xpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgIGJsb2dTa2lwOiBza2lwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==