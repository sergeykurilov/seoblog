webpackHotUpdate_N_E("pages/blogs",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogsWithCategoriesAndTags, singleBlog, listRelated, list, listSearch, getPhoto, removeBlog, updateBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogsWithCategoriesAndTags", function() { return listBlogsWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBlog", function() { return singleBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearch", function() { return listSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoto", function() { return getPhoto; });
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
var getPhoto = function getPhoto(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API"], "blog/photo/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    console.log(response);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUJsb2ciLCJibG9nIiwidG9rZW4iLCJ1cmwiLCJpc0F1dGgiLCJyb2xlIiwiQVBJIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVSZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzIiwic2tpcCIsImxpbWl0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaW5nbGVCbG9nIiwic2x1ZyIsImxpc3RSZWxhdGVkIiwibGlzdCIsInVzZXJuYW1lIiwibGlzdEJsb2dzRW5kcG9pbnQiLCJsaXN0U2VhcmNoIiwicGFyYW1zIiwicXVlcnkiLCJxdWVyeVN0cmluZyIsImdldFBob3RvIiwicmVtb3ZlQmxvZyIsInVwZGF0ZUJsb2ciLCJ1cGRhdGVCbG9nRW5kcG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3ZDLE1BQUlDLEdBQUo7O0FBQ0EsTUFBSUMsb0RBQU0sTUFBTUEsb0RBQU0sR0FBR0MsSUFBVCxLQUFrQixDQUFsQyxFQUFxQztBQUNqQ0YsT0FBRyxhQUFNRywyQ0FBTixVQUFIO0FBQ0gsR0FGRCxNQUVPO0FBQ0hILE9BQUcsYUFBTUcsMkNBQU4sZUFBSDtBQUNIOztBQUVELFNBQU9DLHVEQUFLLFdBQUlKLEdBQUosR0FBVztBQUNuQkssVUFBTSxFQUFFLE1B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Q2xDL0IsVUFBTSxFQUFFLEtBRDBCO0FBRWxDQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUxDLG1CQUFhLG1CQUFZVCxLQUFaO0FBRlIsS0FGeUI7QUFNbENVLFFBQUksRUFBRVg7QUFONEIsR0FBMUIsQ0FBTCxDQVFGWSxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2RDLGdFQUFjLENBQUNELFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ0gsR0FYRSxXQVlJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FaUCxDQUFQO0FBYUgsQ0F0Qk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MuYWJkNWQ4YjFiYTAzOWFlZTBhZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHtoYW5kbGVSZXNwb25zZSwgaXNBdXRofSBmcm9tIFwiLi9hdXRoXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJsb2cgPSAoYmxvZywgdG9rZW4pID0+IHtcclxuICAgIGxldCB1cmw7XHJcbiAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgIHVybCA9IGAke0FQSX0vYmxvZ2BcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsID0gYCR7QVBJfS91c2VyL2Jsb2dgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGJsb2dcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzID0gKHNraXAsIGxpbWl0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGxpbWl0LFxyXG4gICAgICAgIHNraXBcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9ncy1jYXRlZ29yaWVzLXRhZ3NgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlQmxvZyA9IHNsdWcgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vYmxvZy8ke3NsdWd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZCA9IGJsb2cgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vYmxvZ3MvcmVsYXRlZGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3QgPSAodXNlcm5hbWUpID0+IHtcclxuICAgIGxldCBsaXN0QmxvZ3NFbmRwb2ludDtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUpIHtcclxuICAgICAgICBsaXN0QmxvZ3NFbmRwb2ludCA9IGAke0FQSX0vJHt1c2VybmFtZX0vYmxvZ3NgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0QmxvZ3NFbmRwb2ludCA9IGAke0FQSX0vYmxvZ3NgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtsaXN0QmxvZ3NFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RTZWFyY2ggPSBwYXJhbXMgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NlYXJjaCBwYXJhbXMnLCBwYXJhbXMpO1xyXG4gICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICBjb25zb2xlLmxvZygncXVlcnkgcGFyYW1zJywgcXVlcnkpO1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vYmxvZ3Mvc2VhcmNoPyR7cXVlcnl9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGhvdG8gPSAoc2x1ZykgPT4ge1xyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9YmxvZy9waG90by8ke3NsdWd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUJsb2cgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAgIGxldCB1cmw7XHJcbiAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgIHVybCA9IGAke0FQSX0vYmxvZy8ke3NsdWd9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSBgJHtBUEl9L3VzZXIvYmxvZy8ke3NsdWd9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVCbG9nID0gKGJsb2csIHRva2VuLCBzbHVnKSA9PiB7XHJcbiAgICBsZXQgdXBkYXRlQmxvZ0VuZHBvaW50O1xyXG5cclxuICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgdXBkYXRlQmxvZ0VuZHBvaW50ID0gYCR7QVBJfS9ibG9nLyR7c2x1Z31gO1xyXG4gICAgfSBlbHNlIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwKSB7XHJcbiAgICAgICAgdXBkYXRlQmxvZ0VuZHBvaW50ID0gYCR7QVBJfS91c2VyL2Jsb2cvJHtzbHVnfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke3VwZGF0ZUJsb2dFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogYmxvZ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==