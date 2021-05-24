webpackHotUpdate_N_E("pages/admin/crud/[slug]",{

/***/ "../node_modules/slugify/slugify.js":
/*!******************************************!*\
  !*** ../node_modules/slugify/slugify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  var locales = JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var slug = string.normalize().split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        return result + (locale[ch] || charMap[ch] ||  (ch === replacement ? ' ' : ch))
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '');

    if (options.strict) {
      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
    }

    // Remove leading/trailing spaces, then replace all other spaces with
    // replacement character, treating multiple consecutive spaces as a single
    // space.
    slug = slug.trim()
      .replace(/\s+/g, replacement);

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    return slug
  }

  replace.extend = function (customMap) {
    Object.assign(charMap, customMap)
  }

  return replace
}))


/***/ }),

/***/ "./components/crud/BlogUpdate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogUpdate.js ***!
  \***************************************/
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! slugify */ "../node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "E:\\seoblog\\frontend\\components\\crud\\BlogUpdate.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ["react-quill"]
  }
});
_c2 = ReactQuill;
var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])("token");

var BlogUpdate = function BlogUpdate(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      body = _useState[0],
      setBody = _useState[1];

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
    title: '',
    error: '',
    success: '',
    slug: '',
    formData: '',
    body: ''
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      success = values.success,
      formData = values.formData,
      title = values.title;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
    initBlog();
    initCategories();
    initTags();
  }, [router]);

  var initBlog = function initBlog() {
    if (router.query.slug) {
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["singleBlog"])(router.query.slug).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues(_objectSpread(_objectSpread({}, values), {}, {
            title: data.title
          }));
          setBody(data.body);
          setCategoriesArray(data.categories);
          setTagsArray(data.tags);
        }
      });
    }
  };

  var setCategoriesArray = function setCategoriesArray(blogCategories) {
    var ca = [];
    blogCategories.map(function (c, i) {
      ca.push(c._id);
    });
    setChecked(ca);
  };

  var setTagsArray = function setTagsArray(blogTags) {
    var ta = [];
    blogTags.map(function (t, i) {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

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

      console.log(all);
      setChecked(all);
      formData.set('categories', all);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checkedTag.indexOf(t);

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

  var findOutCategory = function findOutCategory(c) {
    var result = checked.indexOf(c);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var findOutTag = function findOutTag(t) {
    var result = checkedTag.indexOf(t);

    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-unstyled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleToggle(c._id),
          checked: findOutCategory(c._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
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
          checked: findOutTag(t._id),
          type: "checkbox",
          className: "mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this);
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      var slug = name === 'slug' && slugify__WEBPACK_IMPORTED_MODULE_14___default()(e.target.value);
      formData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          title: '',
          success: "Blog titled \"".concat(data.title, "\" is successfully updated")
        }));

        if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role === 1) {
          router.replace("/admin/crud/".concat(router.query.slug)); // router.replace(`/admin`);
        } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().role === 0) {
          Router.replace("/user/crud/".concat(router.query.slug)); // router.replace(`/user`);
        }
      }
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
      lineNumber: 211,
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
      lineNumber: 217,
      columnNumber: 9
    }, _this);
  };

  var updateBlogForm = function updateBlogForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: editBlog,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "text-muted",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: slug,
          onChange: handleChange('slug')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReactQuill, {
          modules: _helpers_quill__WEBPACK_IMPORTED_MODULE_12__["QuillModules"],
          formats: _helpers_quill__WEBPACK_IMPORTED_MODULE_12__["QuillFormats"],
          value: body,
          placeholder: "Write something amazing...",
          onChange: handleBody
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid pb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [updateBlogForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-3",
          children: [showSuccess(), showError()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
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
              lineNumber: 269,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
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
                lineNumber: 275,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 9
  }, _this);
};

_s(BlogUpdate, "GIv9rrIt8jxepSvowBIoGnSSmGc=");

_c3 = BlogUpdate;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = next_dist_client_with_router__WEBPACK_IMPORTED_MODULE_9___default()(BlogUpdate));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "BlogUpdate");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9zbHVnaWZ5L3NsdWdpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3J1ZC9CbG9nVXBkYXRlLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidG9rZW4iLCJnZXRDb29raWUiLCJCbG9nVXBkYXRlIiwicm91dGVyIiwidXNlU3RhdGUiLCJib2R5Iiwic2V0Qm9keSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGFncyIsInNldFRhZ3MiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImNoZWNrZWRUYWciLCJzZXRDaGVja2VkVGFnIiwidGl0bGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJzbHVnIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImluaXRCbG9nIiwiaW5pdENhdGVnb3JpZXMiLCJpbml0VGFncyIsInF1ZXJ5Iiwic2luZ2xlQmxvZyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldENhdGVnb3JpZXNBcnJheSIsInNldFRhZ3NBcnJheSIsImJsb2dDYXRlZ29yaWVzIiwiY2EiLCJtYXAiLCJjIiwiaSIsInB1c2giLCJfaWQiLCJibG9nVGFncyIsInRhIiwidCIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRBbGxUYWdzIiwiaGFuZGxlVG9nZ2xlIiwiY2xpY2tlZENhdGVnb3J5IiwiaW5kZXhPZiIsImFsbCIsInNwbGljZSIsInNldCIsImhhbmRsZVRhZ3NUb2dnbGUiLCJjbGlja2VkVGFnIiwiZmluZE91dENhdGVnb3J5IiwicmVzdWx0IiwiZmluZE91dFRhZyIsInNob3dDYXRlZ29yaWVzIiwibmFtZSIsInNob3dUYWdzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJzbHVnaWZ5IiwiaGFuZGxlQm9keSIsImVkaXRCbG9nIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVCbG9nIiwiaXNBdXRoIiwicm9sZSIsInJlcGxhY2UiLCJSb3V0ZXIiLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJ1cGRhdGVCbG9nRm9ybSIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIkFQSSIsIndpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLENBQUM7QUFDRCxNQUFNLElBQTJCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUtKO0FBQ0gsQ0FBQztBQUNELDZCQUE2QixvN0lBQW83STtBQUNqOUksNkJBQTZCLE1BQU0saUlBQWlJLE9BQU8sNkpBQTZKLE9BQU8sMkpBQTJKLE9BQU8sdUhBQXVILE9BQU8sMEdBQTBHLE9BQU8saUJBQWlCOztBQUVqdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTFCO01BQU1GLFU7QUFDTixJQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENB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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOyhmdW5jdGlvbiAobmFtZSwgcm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgICBtb2R1bGUuZXhwb3J0c1snZGVmYXVsdCddID0gZmFjdG9yeSgpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpXG4gIH1cbiAgZWxzZSB7XG4gICAgcm9vdFtuYW1lXSA9IGZhY3RvcnkoKVxuICB9XG59KCdzbHVnaWZ5JywgdGhpcywgZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhck1hcCA9IEpTT04ucGFyc2UoJ3tcIiRcIjpcImRvbGxhclwiLFwiJVwiOlwicGVyY2VudFwiLFwiJlwiOlwiYW5kXCIsXCI8XCI6XCJsZXNzXCIsXCI+XCI6XCJncmVhdGVyXCIsXCJ8XCI6XCJvclwiLFwiwqJcIjpcImNlbnRcIixcIsKjXCI6XCJwb3VuZFwiLFwiwqRcIjpcImN1cnJlbmN5XCIsXCLCpVwiOlwieWVuXCIsXCLCqVwiOlwiKGMpXCIsXCLCqlwiOlwiYVwiLFwiwq5cIjpcIihyKVwiLFwiwrpcIjpcIm9cIixcIsOAXCI6XCJBXCIsXCLDgVwiOlwiQVwiLFwiw4JcIjpcIkFcIixcIsODXCI6XCJBXCIsXCLDhFwiOlwiQVwiLFwiw4VcIjpcIkFcIixcIsOGXCI6XCJBRVwiLFwiw4dcIjpcIkNcIixcIsOIXCI6XCJFXCIsXCLDiVwiOlwiRVwiLFwiw4pcIjpcIkVcIixcIsOLXCI6XCJFXCIsXCLDjFwiOlwiSVwiLFwiw41cIjpcIklcIixcIsOOXCI6XCJJXCIsXCLDj1wiOlwiSVwiLFwiw5BcIjpcIkRcIixcIsORXCI6XCJOXCIsXCLDklwiOlwiT1wiLFwiw5NcIjpcIk9cIixcIsOUXCI6XCJPXCIsXCLDlVwiOlwiT1wiLFwiw5ZcIjpcIk9cIixcIsOYXCI6XCJPXCIsXCLDmVwiOlwiVVwiLFwiw5pcIjpcIlVcIixcIsObXCI6XCJVXCIsXCLDnFwiOlwiVVwiLFwiw51cIjpcIllcIixcIsOeXCI6XCJUSFwiLFwiw59cIjpcInNzXCIsXCLDoFwiOlwiYVwiLFwiw6FcIjpcImFcIixcIsOiXCI6XCJhXCIsXCLDo1wiOlwiYVwiLFwiw6RcIjpcImFcIixcIsOlXCI6XCJhXCIsXCLDplwiOlwiYWVcIixcIsOnXCI6XCJjXCIsXCLDqFwiOlwiZVwiLFwiw6lcIjpcImVcIixcIsOqXCI6XCJlXCIsXCLDq1wiOlwiZVwiLFwiw6xcIjpcImlcIixcIsOtXCI6XCJpXCIsXCLDrlwiOlwiaVwiLFwiw69cIjpcImlcIixcIsOwXCI6XCJkXCIsXCLDsVwiOlwiblwiLFwiw7JcIjpcIm9cIixcIsOzXCI6XCJvXCIsXCLDtFwiOlwib1wiLFwiw7VcIjpcIm9cIixcIsO2XCI6XCJvXCIsXCLDuFwiOlwib1wiLFwiw7lcIjpcInVcIixcIsO6XCI6XCJ1XCIsXCLDu1wiOlwidVwiLFwiw7xcIjpcInVcIixcIsO9XCI6XCJ5XCIsXCLDvlwiOlwidGhcIixcIsO/XCI6XCJ5XCIsXCLEgFwiOlwiQVwiLFwixIFcIjpcImFcIixcIsSCXCI6XCJBXCIsXCLEg1wiOlwiYVwiLFwixIRcIjpcIkFcIixcIsSFXCI6XCJhXCIsXCLEhlwiOlwiQ1wiLFwixIdcIjpcImNcIixcIsSMXCI6XCJDXCIsXCLEjVwiOlwiY1wiLFwixI5cIjpcIkRcIixcIsSPXCI6XCJkXCIsXCLEkFwiOlwiREpcIixcIsSRXCI6XCJkalwiLFwixJJcIjpcIkVcIixcIsSTXCI6XCJlXCIsXCLEllwiOlwiRVwiLFwixJdcIjpcImVcIixcIsSYXCI6XCJlXCIsXCLEmVwiOlwiZVwiLFwixJpcIjpcIkVcIixcIsSbXCI6XCJlXCIsXCLEnlwiOlwiR1wiLFwixJ9cIjpcImdcIixcIsSiXCI6XCJHXCIsXCLEo1wiOlwiZ1wiLFwixKhcIjpcIklcIixcIsSpXCI6XCJpXCIsXCLEqlwiOlwiaVwiLFwixKtcIjpcImlcIixcIsSuXCI6XCJJXCIsXCLEr1wiOlwiaVwiLFwixLBcIjpcIklcIixcIsSxXCI6XCJpXCIsXCLEtlwiOlwia1wiLFwixLdcIjpcImtcIixcIsS7XCI6XCJMXCIsXCLEvFwiOlwibFwiLFwixL1cIjpcIkxcIixcIsS+XCI6XCJsXCIsXCLFgVwiOlwiTFwiLFwixYJcIjpcImxcIixcIsWDXCI6XCJOXCIsXCLFhFwiOlwiblwiLFwixYVcIjpcIk5cIixcIsWGXCI6XCJuXCIsXCLFh1wiOlwiTlwiLFwixYhcIjpcIm5cIixcIsWMXCI6XCJPXCIsXCLFjVwiOlwib1wiLFwixZBcIjpcIk9cIixcIsWRXCI6XCJvXCIsXCLFklwiOlwiT0VcIixcIsWTXCI6XCJvZVwiLFwixZRcIjpcIlJcIixcIsWVXCI6XCJyXCIsXCLFmFwiOlwiUlwiLFwixZlcIjpcInJcIixcIsWaXCI6XCJTXCIsXCLFm1wiOlwic1wiLFwixZ5cIjpcIlNcIixcIsWfXCI6XCJzXCIsXCLFoFwiOlwiU1wiLFwixaFcIjpcInNcIixcIsWiXCI6XCJUXCIsXCLFo1wiOlwidFwiLFwixaRcIjpcIlRcIixcIsWlXCI6XCJ0XCIsXCLFqFwiOlwiVVwiLFwixalcIjpcInVcIixcIsWqXCI6XCJ1XCIsXCLFq1wiOlwidVwiLFwixa5cIjpcIlVcIixcIsWvXCI6XCJ1XCIsXCLFsFwiOlwiVVwiLFwixbFcIjpcInVcIixcIsWyXCI6XCJVXCIsXCLFs1wiOlwidVwiLFwixbRcIjpcIldcIixcIsW1XCI6XCJ3XCIsXCLFtlwiOlwiWVwiLFwixbdcIjpcInlcIixcIsW4XCI6XCJZXCIsXCLFuVwiOlwiWlwiLFwixbpcIjpcInpcIixcIsW7XCI6XCJaXCIsXCLFvFwiOlwielwiLFwixb1cIjpcIlpcIixcIsW+XCI6XCJ6XCIsXCLGj1wiOlwiRVwiLFwixpJcIjpcImZcIixcIsagXCI6XCJPXCIsXCLGoVwiOlwib1wiLFwixq9cIjpcIlVcIixcIsawXCI6XCJ1XCIsXCLHiFwiOlwiTEpcIixcIseJXCI6XCJsalwiLFwix4tcIjpcIk5KXCIsXCLHjFwiOlwibmpcIixcIsiYXCI6XCJTXCIsXCLImVwiOlwic1wiLFwiyJpcIjpcIlRcIixcIsibXCI6XCJ0XCIsXCLJmVwiOlwiZVwiLFwiy5pcIjpcIm9cIixcIs6GXCI6XCJBXCIsXCLOiFwiOlwiRVwiLFwizolcIjpcIkhcIixcIs6KXCI6XCJJXCIsXCLOjFwiOlwiT1wiLFwizo5cIjpcIllcIixcIs6PXCI6XCJXXCIsXCLOkFwiOlwiaVwiLFwizpFcIjpcIkFcIixcIs6SXCI6XCJCXCIsXCLOk1wiOlwiR1wiLFwizpRcIjpcIkRcIixcIs6VXCI6XCJFXCIsXCLOllwiOlwiWlwiLFwizpdcIjpcIkhcIixcIs6YXCI6XCI4XCIsXCLOmVwiOlwiSVwiLFwizppcIjpcIktcIixcIs6bXCI6XCJMXCIsXCLOnFwiOlwiTVwiLFwizp1cIjpcIk5cIixcIs6eXCI6XCIzXCIsXCLOn1wiOlwiT1wiLFwizqBcIjpcIlBcIixcIs6hXCI6XCJSXCIsXCLOo1wiOlwiU1wiLFwizqRcIjpcIlRcIixcIs6lXCI6XCJZXCIsXCLOplwiOlwiRlwiLFwizqdcIjpcIlhcIixcIs6oXCI6XCJQU1wiLFwizqlcIjpcIldcIixcIs6qXCI6XCJJXCIsXCLOq1wiOlwiWVwiLFwizqxcIjpcImFcIixcIs6tXCI6XCJlXCIsXCLOrlwiOlwiaFwiLFwizq9cIjpcImlcIixcIs6wXCI6XCJ5XCIsXCLOsVwiOlwiYVwiLFwizrJcIjpcImJcIixcIs6zXCI6XCJnXCIsXCLOtFwiOlwiZFwiLFwizrVcIjpcImVcIixcIs62XCI6XCJ6XCIsXCLOt1wiOlwiaFwiLFwizrhcIjpcIjhcIixcIs65XCI6XCJpXCIsXCLOulwiOlwia1wiLFwizrtcIjpcImxcIixcIs68XCI6XCJtXCIsXCLOvVwiOlwiblwiLFwizr5cIjpcIjNcIixcIs6/XCI6XCJvXCIsXCLPgFwiOlwicFwiLFwiz4FcIjpcInJcIixcIs+CXCI6XCJzXCIsXCLPg1wiOlwic1wiLFwiz4RcIjpcInRcIixcIs+FXCI6XCJ5XCIsXCLPhlwiOlwiZlwiLFwiz4dcIjpcInhcIixcIs+IXCI6XCJwc1wiLFwiz4lcIjpcIndcIixcIs+KXCI6XCJpXCIsXCLPi1wiOlwieVwiLFwiz4xcIjpcIm9cIixcIs+NXCI6XCJ5XCIsXCLPjlwiOlwid1wiLFwi0IFcIjpcIllvXCIsXCLQglwiOlwiREpcIixcItCEXCI6XCJZZVwiLFwi0IZcIjpcIklcIixcItCHXCI6XCJZaVwiLFwi0IhcIjpcIkpcIixcItCJXCI6XCJMSlwiLFwi0IpcIjpcIk5KXCIsXCLQi1wiOlwiQ1wiLFwi0I9cIjpcIkRaXCIsXCLQkFwiOlwiQVwiLFwi0JFcIjpcIkJcIixcItCSXCI6XCJWXCIsXCLQk1wiOlwiR1wiLFwi0JRcIjpcIkRcIixcItCVXCI6XCJFXCIsXCLQllwiOlwiWmhcIixcItCXXCI6XCJaXCIsXCLQmFwiOlwiSVwiLFwi0JlcIjpcIkpcIixcItCaXCI6XCJLXCIsXCLQm1wiOlwiTFwiLFwi0JxcIjpcIk1cIixcItCdXCI6XCJOXCIsXCLQnlwiOlwiT1wiLFwi0J9cIjpcIlBcIixcItCgXCI6XCJSXCIsXCLQoVwiOlwiU1wiLFwi0KJcIjpcIlRcIixcItCjXCI6XCJVXCIsXCLQpFwiOlwiRlwiLFwi0KVcIjpcIkhcIixcItCmXCI6XCJDXCIsXCLQp1wiOlwiQ2hcIixcItCoXCI6XCJTaFwiLFwi0KlcIjpcIlNoXCIsXCLQqlwiOlwiVVwiLFwi0KtcIjpcIllcIixcItCsXCI6XCJcIixcItCtXCI6XCJFXCIsXCLQrlwiOlwiWXVcIixcItCvXCI6XCJZYVwiLFwi0LBcIjpcImFcIixcItCxXCI6XCJiXCIsXCLQslwiOlwidlwiLFwi0LNcIjpcImdcIixcItC0XCI6XCJkXCIsXCLQtVwiOlwiZVwiLFwi0LZcIjpcInpoXCIsXCLQt1wiOlwielwiLFwi0LhcIjpcImlcIixcItC5XCI6XCJqXCIsXCLQulwiOlwia1wiLFwi0LtcIjpcImxcIixcItC8XCI6XCJtXCIsXCLQvVwiOlwiblwiLFwi0L5cIjpcIm9cIixcItC/XCI6XCJwXCIsXCLRgFwiOlwiclwiLFwi0YFcIjpcInNcIixcItGCXCI6XCJ0XCIsXCLRg1wiOlwidVwiLFwi0YRcIjpcImZcIixcItGFXCI6XCJoXCIsXCLRhlwiOlwiY1wiLFwi0YdcIjpcImNoXCIsXCLRiFwiOlwic2hcIixcItGJXCI6XCJzaFwiLFwi0YpcIjpcInVcIixcItGLXCI6XCJ5XCIsXCLRjFwiOlwiXCIsXCLRjVwiOlwiZVwiLFwi0Y5cIjpcInl1XCIsXCLRj1wiOlwieWFcIixcItGRXCI6XCJ5b1wiLFwi0ZJcIjpcImRqXCIsXCLRlFwiOlwieWVcIixcItGWXCI6XCJpXCIsXCLRl1wiOlwieWlcIixcItGYXCI6XCJqXCIsXCLRmVwiOlwibGpcIixcItGaXCI6XCJualwiLFwi0ZtcIjpcImNcIixcItGdXCI6XCJ1XCIsXCLRn1wiOlwiZHpcIixcItKQXCI6XCJHXCIsXCLSkVwiOlwiZ1wiLFwi0pJcIjpcIkdIXCIsXCLSk1wiOlwiZ2hcIixcItKaXCI6XCJLSFwiLFwi0ptcIjpcImtoXCIsXCLSolwiOlwiTkdcIixcItKjXCI6XCJuZ1wiLFwi0q5cIjpcIlVFXCIsXCLSr1wiOlwidWVcIixcItKwXCI6XCJVXCIsXCLSsVwiOlwidVwiLFwi0rpcIjpcIkhcIixcItK7XCI6XCJoXCIsXCLTmFwiOlwiQUVcIixcItOZXCI6XCJhZVwiLFwi06hcIjpcIk9FXCIsXCLTqVwiOlwib2VcIixcIuC4v1wiOlwiYmFodFwiLFwi4YOQXCI6XCJhXCIsXCLhg5FcIjpcImJcIixcIuGDklwiOlwiZ1wiLFwi4YOTXCI6XCJkXCIsXCLhg5RcIjpcImVcIixcIuGDlVwiOlwidlwiLFwi4YOWXCI6XCJ6XCIsXCLhg5dcIjpcInRcIixcIuGDmFwiOlwiaVwiLFwi4YOZXCI6XCJrXCIsXCLhg5pcIjpcImxcIixcIuGDm1wiOlwibVwiLFwi4YOcXCI6XCJuXCIsXCLhg51cIjpcIm9cIixcIuGDnlwiOlwicFwiLFwi4YOfXCI6XCJ6aFwiLFwi4YOgXCI6XCJyXCIsXCLhg6FcIjpcInNcIixcIuGDolwiOlwidFwiLFwi4YOjXCI6XCJ1XCIsXCLhg6RcIjpcImZcIixcIuGDpVwiOlwia1wiLFwi4YOmXCI6XCJnaFwiLFwi4YOnXCI6XCJxXCIsXCLhg6hcIjpcInNoXCIsXCLhg6lcIjpcImNoXCIsXCLhg6pcIjpcInRzXCIsXCLhg6tcIjpcImR6XCIsXCLhg6xcIjpcInRzXCIsXCLhg61cIjpcImNoXCIsXCLhg65cIjpcImtoXCIsXCLhg69cIjpcImpcIixcIuGDsFwiOlwiaFwiLFwi4bqAXCI6XCJXXCIsXCLhuoFcIjpcIndcIixcIuG6glwiOlwiV1wiLFwi4bqDXCI6XCJ3XCIsXCLhuoRcIjpcIldcIixcIuG6hVwiOlwid1wiLFwi4bqeXCI6XCJTU1wiLFwi4bqgXCI6XCJBXCIsXCLhuqFcIjpcImFcIixcIuG6olwiOlwiQVwiLFwi4bqjXCI6XCJhXCIsXCLhuqRcIjpcIkFcIixcIuG6pVwiOlwiYVwiLFwi4bqmXCI6XCJBXCIsXCLhuqdcIjpcImFcIixcIuG6qFwiOlwiQVwiLFwi4bqpXCI6XCJhXCIsXCLhuqpcIjpcIkFcIixcIuG6q1wiOlwiYVwiLFwi4bqsXCI6XCJBXCIsXCLhuq1cIjpcImFcIixcIuG6rlwiOlwiQVwiLFwi4bqvXCI6XCJhXCIsXCLhurBcIjpcIkFcIixcIuG6sVwiOlwiYVwiLFwi4bqyXCI6XCJBXCIsXCLhurNcIjpcImFcIixcIuG6tFwiOlwiQVwiLFwi4bq1XCI6XCJhXCIsXCLhurZcIjpcIkFcIixcIuG6t1wiOlwiYVwiLFwi4bq4XCI6XCJFXCIsXCLhurlcIjpcImVcIixcIuG6ulwiOlwiRVwiLFwi4bq7XCI6XCJlXCIsXCLhurxcIjpcIkVcIixcIuG6vVwiOlwiZVwiLFwi4bq+XCI6XCJFXCIsXCLhur9cIjpcImVcIixcIuG7gFwiOlwiRVwiLFwi4buBXCI6XCJlXCIsXCLhu4JcIjpcIkVcIixcIuG7g1wiOlwiZVwiLFwi4buEXCI6XCJFXCIsXCLhu4VcIjpcImVcIixcIuG7hlwiOlwiRVwiLFwi4buHXCI6XCJlXCIsXCLhu4hcIjpcIklcIixcIuG7iVwiOlwiaVwiLFwi4buKXCI6XCJJXCIsXCLhu4tcIjpcImlcIixcIuG7jFwiOlwiT1wiLFwi4buNXCI6XCJvXCIsXCLhu45cIjpcIk9cIixcIuG7j1wiOlwib1wiLFwi4buQXCI6XCJPXCIsXCLhu5FcIjpcIm9cIixcIuG7klwiOlwiT1wiLFwi4buTXCI6XCJvXCIsXCLhu5RcIjpcIk9cIixcIuG7lVwiOlwib1wiLFwi4buWXCI6XCJPXCIsXCLhu5dcIjpcIm9cIixcIuG7mFwiOlwiT1wiLFwi4buZXCI6XCJvXCIsXCLhu5pcIjpcIk9cIixcIuG7m1wiOlwib1wiLFwi4bucXCI6XCJPXCIsXCLhu51cIjpcIm9cIixcIuG7nlwiOlwiT1wiLFwi4bufXCI6XCJvXCIsXCLhu6BcIjpcIk9cIixcIuG7oVwiOlwib1wiLFwi4buiXCI6XCJPXCIsXCLhu6NcIjpcIm9cIixcIuG7pFwiOlwiVVwiLFwi4bulXCI6XCJ1XCIsXCLhu6ZcIjpcIlVcIixcIuG7p1wiOlwidVwiLFwi4buoXCI6XCJVXCIsXCLhu6lcIjpcInVcIixcIuG7qlwiOlwiVVwiLFwi4burXCI6XCJ1XCIsXCLhu6xcIjpcIlVcIixcIuG7rVwiOlwidVwiLFwi4buuXCI6XCJVXCIsXCLhu69cIjpcInVcIixcIuG7sFwiOlwiVVwiLFwi4buxXCI6XCJ1XCIsXCLhu7JcIjpcIllcIixcIuG7s1wiOlwieVwiLFwi4bu0XCI6XCJZXCIsXCLhu7VcIjpcInlcIixcIuG7tlwiOlwiWVwiLFwi4bu3XCI6XCJ5XCIsXCLhu7hcIjpcIllcIixcIuG7uVwiOlwieVwiLFwi4oCTXCI6XCItXCIsXCLigJhcIjpcIlxcJ1wiLFwi4oCZXCI6XCJcXCdcIixcIuKAnFwiOlwiXFxcXFxcXCJcIixcIuKAnVwiOlwiXFxcXFxcXCJcIixcIuKAnlwiOlwiXFxcXFxcXCJcIixcIuKAoFwiOlwiK1wiLFwi4oCiXCI6XCIqXCIsXCLigKZcIjpcIi4uLlwiLFwi4oKgXCI6XCJlY3VcIixcIuKColwiOlwiY3J1emVpcm9cIixcIuKCo1wiOlwiZnJlbmNoIGZyYW5jXCIsXCLigqRcIjpcImxpcmFcIixcIuKCpVwiOlwibWlsbFwiLFwi4oKmXCI6XCJuYWlyYVwiLFwi4oKnXCI6XCJwZXNldGFcIixcIuKCqFwiOlwicnVwZWVcIixcIuKCqVwiOlwid29uXCIsXCLigqpcIjpcIm5ldyBzaGVxdWVsXCIsXCLigqtcIjpcImRvbmdcIixcIuKCrFwiOlwiZXVyb1wiLFwi4oKtXCI6XCJraXBcIixcIuKCrlwiOlwidHVncmlrXCIsXCLigq9cIjpcImRyYWNobWFcIixcIuKCsFwiOlwicGVubnlcIixcIuKCsVwiOlwicGVzb1wiLFwi4oKyXCI6XCJndWFyYW5pXCIsXCLigrNcIjpcImF1c3RyYWxcIixcIuKCtFwiOlwiaHJ5dm5pYVwiLFwi4oK1XCI6XCJjZWRpXCIsXCLigrhcIjpcImthemFraHN0YW5pIHRlbmdlXCIsXCLigrlcIjpcImluZGlhbiBydXBlZVwiLFwi4oK6XCI6XCJ0dXJraXNoIGxpcmFcIixcIuKCvVwiOlwicnVzc2lhbiBydWJsZVwiLFwi4oK/XCI6XCJiaXRjb2luXCIsXCLihKBcIjpcInNtXCIsXCLihKJcIjpcInRtXCIsXCLiiIJcIjpcImRcIixcIuKIhlwiOlwiZGVsdGFcIixcIuKIkVwiOlwic3VtXCIsXCLiiJ5cIjpcImluZmluaXR5XCIsXCLimaVcIjpcImxvdmVcIixcIuWFg1wiOlwieXVhblwiLFwi5YaGXCI6XCJ5ZW5cIixcIu+3vFwiOlwicmlhbFwifScpXG4gIHZhciBsb2NhbGVzID0gSlNPTi5wYXJzZSgne1wiZGVcIjp7XCLDhFwiOlwiQUVcIixcIsOkXCI6XCJhZVwiLFwiw5ZcIjpcIk9FXCIsXCLDtlwiOlwib2VcIixcIsOcXCI6XCJVRVwiLFwiw7xcIjpcInVlXCIsXCIlXCI6XCJwcm96ZW50XCIsXCImXCI6XCJ1bmRcIixcInxcIjpcIm9kZXJcIixcIuKIkVwiOlwic3VtbWVcIixcIuKInlwiOlwidW5lbmRsaWNoXCIsXCLimaVcIjpcImxpZWJlXCJ9LFwiZXNcIjp7XCIlXCI6XCJwb3IgY2llbnRvXCIsXCImXCI6XCJ5XCIsXCI8XCI6XCJtZW5vciBxdWVcIixcIj5cIjpcIm1heW9yIHF1ZVwiLFwifFwiOlwib1wiLFwiwqJcIjpcImNlbnRhdm9zXCIsXCLCo1wiOlwibGlicmFzXCIsXCLCpFwiOlwibW9uZWRhXCIsXCLigqNcIjpcImZyYW5jb3NcIixcIuKIkVwiOlwic3VtYVwiLFwi4oieXCI6XCJpbmZpbml0b1wiLFwi4pmlXCI6XCJhbW9yXCJ9LFwiZnJcIjp7XCIlXCI6XCJwb3VyY2VudFwiLFwiJlwiOlwiZXRcIixcIjxcIjpcInBsdXMgcGV0aXRcIixcIj5cIjpcInBsdXMgZ3JhbmRcIixcInxcIjpcIm91XCIsXCLColwiOlwiY2VudGltZVwiLFwiwqNcIjpcImxpdnJlXCIsXCLCpFwiOlwiZGV2aXNlXCIsXCLigqNcIjpcImZyYW5jXCIsXCLiiJFcIjpcInNvbW1lXCIsXCLiiJ5cIjpcImluZmluaVwiLFwi4pmlXCI6XCJhbW91clwifSxcInB0XCI6e1wiJVwiOlwicG9yY2VudG9cIixcIiZcIjpcImVcIixcIjxcIjpcIm1lbm9yXCIsXCI+XCI6XCJtYWlvclwiLFwifFwiOlwib3VcIixcIsKiXCI6XCJjZW50YXZvXCIsXCLiiJFcIjpcInNvbWFcIixcIsKjXCI6XCJsaWJyYVwiLFwi4oieXCI6XCJpbmZpbml0b1wiLFwi4pmlXCI6XCJhbW9yXCJ9LFwidWtcIjp7XCLQmFwiOlwiWVwiLFwi0LhcIjpcInlcIixcItCZXCI6XCJZXCIsXCLQuVwiOlwieVwiLFwi0KZcIjpcIlRzXCIsXCLRhlwiOlwidHNcIixcItClXCI6XCJLaFwiLFwi0YVcIjpcImtoXCIsXCLQqVwiOlwiU2hjaFwiLFwi0YlcIjpcInNoY2hcIixcItCTXCI6XCJIXCIsXCLQs1wiOlwiaFwifSxcInZpXCI6e1wixJBcIjpcIkRcIixcIsSRXCI6XCJkXCJ9fScpXG5cbiAgZnVuY3Rpb24gcmVwbGFjZSAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NsdWdpZnk6IHN0cmluZyBhcmd1bWVudCBleHBlY3RlZCcpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpXG4gICAgICA/IHtyZXBsYWNlbWVudDogb3B0aW9uc31cbiAgICAgIDogb3B0aW9ucyB8fCB7fVxuXG4gICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbb3B0aW9ucy5sb2NhbGVdIHx8IHt9XG5cbiAgICB2YXIgcmVwbGFjZW1lbnQgPSBvcHRpb25zLnJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQgPyAnLScgOiBvcHRpb25zLnJlcGxhY2VtZW50XG5cbiAgICB2YXIgc2x1ZyA9IHN0cmluZy5ub3JtYWxpemUoKS5zcGxpdCgnJylcbiAgICAgIC8vIHJlcGxhY2UgY2hhcmFjdGVycyBiYXNlZCBvbiBjaGFyTWFwXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGNoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAobG9jYWxlW2NoXSB8fCBjaGFyTWFwW2NoXSB8fCAgKGNoID09PSByZXBsYWNlbWVudCA/ICcgJyA6IGNoKSlcbiAgICAgICAgICAvLyByZW1vdmUgbm90IGFsbG93ZWQgY2hhcmFjdGVyc1xuICAgICAgICAgIC5yZXBsYWNlKG9wdGlvbnMucmVtb3ZlIHx8IC9bXlxcd1xccyQqXyt+LigpJ1wiIVxcLTpAXSsvZywgJycpXG4gICAgICB9LCAnJyk7XG5cbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1teQS1aYS16MC05XFxzXS9nLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgc3BhY2VzLCB0aGVuIHJlcGxhY2UgYWxsIG90aGVyIHNwYWNlcyB3aXRoXG4gICAgLy8gcmVwbGFjZW1lbnQgY2hhcmFjdGVyLCB0cmVhdGluZyBtdWx0aXBsZSBjb25zZWN1dGl2ZSBzcGFjZXMgYXMgYSBzaW5nbGVcbiAgICAvLyBzcGFjZS5cbiAgICBzbHVnID0gc2x1Zy50cmltKClcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csIHJlcGxhY2VtZW50KTtcblxuICAgIGlmIChvcHRpb25zLmxvd2VyKSB7XG4gICAgICBzbHVnID0gc2x1Zy50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNsdWdcbiAgfVxuXG4gIHJlcGxhY2UuZXh0ZW5kID0gZnVuY3Rpb24gKGN1c3RvbU1hcCkge1xuICAgIE9iamVjdC5hc3NpZ24oY2hhck1hcCwgY3VzdG9tTWFwKVxuICB9XG5cbiAgcmV0dXJuIHJlcGxhY2Vcbn0pKVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzaW5nbGVCbG9nLCB1cGRhdGVCbG9nfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9ibG9nXCI7XHJcbmltcG9ydCB7aXNBdXRoLCBnZXRDb29raWV9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlclwiO1xyXG5pbXBvcnQge2dldEFsbFRhZ3N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3RhZ3NcIlxyXG5pbXBvcnQge2dldEFsbENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCJcclxuaW1wb3J0IHtRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0c30gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcXVpbGxcIlxyXG5pbXBvcnQge0FQSSwgRE9NQUlOfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJzbHVnaWZ5XCI7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwge3NzcjogZmFsc2V9KVxyXG5jb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcblxyXG5jb25zdCBCbG9nVXBkYXRlID0gKHsgcm91dGVyIH0pID0+IHtcclxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pOyAvLyBjYXRlZ29yaWVzXHJcbiAgICBjb25zdCBbY2hlY2tlZFRhZywgc2V0Q2hlY2tlZFRhZ10gPSB1c2VTdGF0ZShbXSk7IC8vIHRhZ3NcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgc2x1ZzogJycsXHJcbiAgICAgICAgZm9ybURhdGE6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yLCBzdWNjZXNzLCBmb3JtRGF0YSwgdGl0bGUgfSA9IHZhbHVlcztcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcbiAgICAgICAgaW5pdEJsb2coKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdEJsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZUJsb2cocm91dGVyLnF1ZXJ5LnNsdWcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsdGl0bGU6IGRhdGEudGl0bGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShkYXRhLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXNBcnJheShkYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ3NBcnJheShkYXRhLnRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENhdGVnb3JpZXNBcnJheSA9IGJsb2dDYXRlZ29yaWVzID0+IHtcclxuICAgICAgICBsZXQgY2EgPSBbXTtcclxuICAgICAgICBibG9nQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgY2EucHVzaChjLl9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChjYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFRhZ3NBcnJheSA9IGJsb2dUYWdzID0+IHtcclxuICAgICAgICBsZXQgdGEgPSBbXTtcclxuICAgICAgICBibG9nVGFncy5tYXAoKHQsIGkpID0+IHtcclxuICAgICAgICAgICAgdGEucHVzaCh0Ll9pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyh0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbENhdGVnb3JpZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsVGFncygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFncyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSBjID0+ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiAnJyB9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IGluZGV4IG9yIC0xXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2goYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhbGwpO1xyXG4gICAgICAgIHNldENoZWNrZWQoYWxsKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQoJ2NhdGVnb3JpZXMnLCBhbGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWdzVG9nZ2xlID0gdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgY29uc3QgYWxsID0gWy4uLmNoZWNrZWRUYWddO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZFRhZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWxsLnB1c2godCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkVGFnLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkVGFnKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWdzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmluZE91dENhdGVnb3J5ID0gYyA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZC5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRUYWcgPSB0ID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGVja2VkVGFnLmluZGV4T2YodCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmluZE91dENhdGVnb3J5KGMuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPntjLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGFncyAmJlxyXG4gICAgICAgICAgICB0YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFnc1RvZ2dsZSh0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRUYWcodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3QubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmFtZSA9PT0gJ3Bob3RvJyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2x1ZyA9IG5hbWUgPT09ICdzbHVnJyAmJiBzbHVnaWZ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9keSA9IGUgPT4ge1xyXG4gICAgICAgIHNldEJvZHkoZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJsb2coZm9ybURhdGEsIHRva2VuLCByb3V0ZXIucXVlcnkuc2x1ZykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiAnJywgc3VjY2VzczogYEJsb2cgdGl0bGVkIFwiJHtkYXRhLnRpdGxlfVwiIGlzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYCB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoYC9hZG1pbi9jcnVkLyR7cm91dGVyLnF1ZXJ5LnNsdWd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnJlcGxhY2UoYC9hZG1pbmApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoYC91c2VyL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL3VzZXJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge3N1Y2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlZGl0QmxvZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2x1Z30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnc2x1ZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgYW1hemluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZUJsb2dGb3JtKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9keSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtyb3V0ZXIucXVlcnkuc2x1Z31gfSBhbHQ9e3RpdGxlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlYXR1cmVkIGltYWdlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNhdGVnb3JpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+e3Nob3dDYXRlZ29yaWVzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VGFnczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93VGFncygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nVXBkYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==