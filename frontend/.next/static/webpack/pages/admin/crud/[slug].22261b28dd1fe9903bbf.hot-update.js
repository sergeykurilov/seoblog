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
    formData: '',
    slug: '',
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
            slug: data.slug,
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

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      var slug = name === 'slug' && slugify__WEBPACK_IMPORTED_MODULE_14___default()(e.target.value);
      formData.set(name, value);
      formData.set(name, slug);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(E_seoblog_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["updateBlog"])(formData, token, slug).then(function (data) {
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
      lineNumber: 213,
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
      lineNumber: 219,
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
          lineNumber: 228,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          value: title,
          onChange: handleChange('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
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
          lineNumber: 233,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 226,
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
          lineNumber: 257,
          columnNumber: 21
        }, _this), body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_13__["API"], "/blog/photo/").concat(router.query.slug),
          alt: title,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
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
              lineNumber: 270,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "Max size: 1mb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
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
                lineNumber: 276,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showCategories()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              maxHeight: '200px',
              overflowY: 'scroll'
            },
            children: showTags()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 9
  }, _this);
};

_s(BlogUpdate, "Zf9d1BPi7x7kBsotHW5FdELiGkI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9zbHVnaWZ5L3NsdWdpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3J1ZC9CbG9nVXBkYXRlLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidG9rZW4iLCJnZXRDb29raWUiLCJCbG9nVXBkYXRlIiwicm91dGVyIiwidXNlU3RhdGUiLCJib2R5Iiwic2V0Qm9keSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGFncyIsInNldFRhZ3MiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImNoZWNrZWRUYWciLCJzZXRDaGVja2VkVGFnIiwidGl0bGUiLCJlcnJvciIsInN1Y2Nlc3MiLCJmb3JtRGF0YSIsInNsdWciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImluaXRCbG9nIiwiaW5pdENhdGVnb3JpZXMiLCJpbml0VGFncyIsInF1ZXJ5Iiwic2luZ2xlQmxvZyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldENhdGVnb3JpZXNBcnJheSIsInNldFRhZ3NBcnJheSIsImJsb2dDYXRlZ29yaWVzIiwiY2EiLCJtYXAiLCJjIiwiaSIsInB1c2giLCJfaWQiLCJibG9nVGFncyIsInRhIiwidCIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRBbGxUYWdzIiwiaGFuZGxlVG9nZ2xlIiwiY2xpY2tlZENhdGVnb3J5IiwiaW5kZXhPZiIsImFsbCIsInNwbGljZSIsInNldCIsImhhbmRsZVRhZ3NUb2dnbGUiLCJjbGlja2VkVGFnIiwiZmluZE91dENhdGVnb3J5IiwicmVzdWx0IiwiZmluZE91dFRhZyIsInNob3dDYXRlZ29yaWVzIiwibmFtZSIsInNob3dUYWdzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJzbHVnaWZ5IiwiaGFuZGxlQm9keSIsImVkaXRCbG9nIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVCbG9nIiwiaXNBdXRoIiwicm9sZSIsInJlcGxhY2UiLCJSb3V0ZXIiLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJ1cGRhdGVCbG9nRm9ybSIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIkFQSSIsIndpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLENBQUM7QUFDRCxNQUFNLElBQTJCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUtKO0FBQ0gsQ0FBQztBQUNELDZCQUE2QixvN0lBQW83STtBQUNqOUksNkJBQTZCLE1BQU0saUlBQWlJLE9BQU8sNkpBQTZKLE9BQU8sMkpBQTJKLE9BQU8sdUhBQXVILE9BQU8sMEdBQTBHLE9BQU8saUJBQWlCOztBQUVqdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTFCO01BQU1GLFU7QUFDTixJQUFNRyxLQUFLLEdBQUdDLCtEQUFTLENB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cUUsc0JBQU07QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWFJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBSUk7QUFBSSxpQkFBSyxFQUFFO0FBQUVzQix1QkFBUyxFQUFFLE9BQWI7QUFBc0JDLHVCQUFTLEVBQUU7QUFBakMsYUFBWDtBQUFBLHNCQUF5RDFCLGNBQWM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosZUFtQkk7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFJLGlCQUFLLEVBQUU7QUFBRXlCLHVCQUFTLEVBQUUsT0FBYjtBQUFzQkMsdUJBQVMsRUFBRTtBQUFqQyxhQUFYO0FBQUEsc0JBQXlEeEIsUUFBUTtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNENILENBdFJEOztHQUFNMUQsVTs7TUFBQUEsVTtBQXdSUyxxRUFBQW1GLG1FQUFVLENBQUNuRixVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvW3NsdWddLjIyMjYxYjI4ZGQxZmU5OTAzYmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbjsoZnVuY3Rpb24gKG5hbWUsIHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgbW9kdWxlLmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZhY3RvcnkoKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KVxuICB9XG4gIGVsc2Uge1xuICAgIHJvb3RbbmFtZV0gPSBmYWN0b3J5KClcbiAgfVxufSgnc2x1Z2lmeScsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoYXJNYXAgPSBKU09OLnBhcnNlKCd7XCIkXCI6XCJkb2xsYXJcIixcIiVcIjpcInBlcmNlbnRcIixcIiZcIjpcImFuZFwiLFwiPFwiOlwibGVzc1wiLFwiPlwiOlwiZ3JlYXRlclwiLFwifFwiOlwib3JcIixcIsKiXCI6XCJjZW50XCIsXCLCo1wiOlwicG91bmRcIixcIsKkXCI6XCJjdXJyZW5jeVwiLFwiwqVcIjpcInllblwiLFwiwqlcIjpcIihjKVwiLFwiwqpcIjpcImFcIixcIsKuXCI6XCIocilcIixcIsK6XCI6XCJvXCIsXCLDgFwiOlwiQVwiLFwiw4FcIjpcIkFcIixcIsOCXCI6XCJBXCIsXCLDg1wiOlwiQVwiLFwiw4RcIjpcIkFcIixcIsOFXCI6XCJBXCIsXCLDhlwiOlwiQUVcIixcIsOHXCI6XCJDXCIsXCLDiFwiOlwiRVwiLFwiw4lcIjpcIkVcIixcIsOKXCI6XCJFXCIsXCLDi1wiOlwiRVwiLFwiw4xcIjpcIklcIixcIsONXCI6XCJJXCIsXCLDjlwiOlwiSVwiLFwiw49cIjpcIklcIixcIsOQXCI6XCJEXCIsXCLDkVwiOlwiTlwiLFwiw5JcIjpcIk9cIixcIsOTXCI6XCJPXCIsXCLDlFwiOlwiT1wiLFwiw5VcIjpcIk9cIixcIsOWXCI6XCJPXCIsXCLDmFwiOlwiT1wiLFwiw5lcIjpcIlVcIixcIsOaXCI6XCJVXCIsXCLDm1wiOlwiVVwiLFwiw5xcIjpcIlVcIixcIsOdXCI6XCJZXCIsXCLDnlwiOlwiVEhcIixcIsOfXCI6XCJzc1wiLFwiw6BcIjpcImFcIixcIsOhXCI6XCJhXCIsXCLDolwiOlwiYVwiLFwiw6NcIjpcImFcIixcIsOkXCI6XCJhXCIsXCLDpVwiOlwiYVwiLFwiw6ZcIjpcImFlXCIsXCLDp1wiOlwiY1wiLFwiw6hcIjpcImVcIixcIsOpXCI6XCJlXCIsXCLDqlwiOlwiZVwiLFwiw6tcIjpcImVcIixcIsOsXCI6XCJpXCIsXCLDrVwiOlwiaVwiLFwiw65cIjpcImlcIixcIsOvXCI6XCJpXCIsXCLDsFwiOlwiZFwiLFwiw7FcIjpcIm5cIixcIsOyXCI6XCJvXCIsXCLDs1wiOlwib1wiLFwiw7RcIjpcIm9cIixcIsO1XCI6XCJvXCIsXCLDtlwiOlwib1wiLFwiw7hcIjpcIm9cIixcIsO5XCI6XCJ1XCIsXCLDulwiOlwidVwiLFwiw7tcIjpcInVcIixcIsO8XCI6XCJ1XCIsXCLDvVwiOlwieVwiLFwiw75cIjpcInRoXCIsXCLDv1wiOlwieVwiLFwixIBcIjpcIkFcIixcIsSBXCI6XCJhXCIsXCLEglwiOlwiQVwiLFwixINcIjpcImFcIixcIsSEXCI6XCJBXCIsXCLEhVwiOlwiYVwiLFwixIZcIjpcIkNcIixcIsSHXCI6XCJjXCIsXCLEjFwiOlwiQ1wiLFwixI1cIjpcImNcIixcIsSOXCI6XCJEXCIsXCLEj1wiOlwiZFwiLFwixJBcIjpcIkRKXCIsXCLEkVwiOlwiZGpcIixcIsSSXCI6XCJFXCIsXCLEk1wiOlwiZVwiLFwixJZcIjpcIkVcIixcIsSXXCI6XCJlXCIsXCLEmFwiOlwiZVwiLFwixJlcIjpcImVcIixcIsSaXCI6XCJFXCIsXCLEm1wiOlwiZVwiLFwixJ5cIjpcIkdcIixcIsSfXCI6XCJnXCIsXCLEolwiOlwiR1wiLFwixKNcIjpcImdcIixcIsSoXCI6XCJJXCIsXCLEqVwiOlwiaVwiLFwixKpcIjpcImlcIixcIsSrXCI6XCJpXCIsXCLErlwiOlwiSVwiLFwixK9cIjpcImlcIixcIsSwXCI6XCJJXCIsXCLEsVwiOlwiaVwiLFwixLZcIjpcImtcIixcIsS3XCI6XCJrXCIsXCLEu1wiOlwiTFwiLFwixLxcIjpcImxcIixcIsS9XCI6XCJMXCIsXCLEvlwiOlwibFwiLFwixYFcIjpcIkxcIixcIsWCXCI6XCJsXCIsXCLFg1wiOlwiTlwiLFwixYRcIjpcIm5cIixcIsWFXCI6XCJOXCIsXCLFhlwiOlwiblwiLFwixYdcIjpcIk5cIixcIsWIXCI6XCJuXCIsXCLFjFwiOlwiT1wiLFwixY1cIjpcIm9cIixcIsWQXCI6XCJPXCIsXCLFkVwiOlwib1wiLFwixZJcIjpcIk9FXCIsXCLFk1wiOlwib2VcIixcIsWUXCI6XCJSXCIsXCLFlVwiOlwiclwiLFwixZhcIjpcIlJcIixcIsWZXCI6XCJyXCIsXCLFmlwiOlwiU1wiLFwixZtcIjpcInNcIixcIsWeXCI6XCJTXCIsXCLFn1wiOlwic1wiLFwixaBcIjpcIlNcIixcIsWhXCI6XCJzXCIsXCLFolwiOlwiVFwiLFwixaNcIjpcInRcIixcIsWkXCI6XCJUXCIsXCLFpVwiOlwidFwiLFwixahcIjpcIlVcIixcIsWpXCI6XCJ1XCIsXCLFqlwiOlwidVwiLFwixatcIjpcInVcIixcIsWuXCI6XCJVXCIsXCLFr1wiOlwidVwiLFwixbBcIjpcIlVcIixcIsWxXCI6XCJ1XCIsXCLFslwiOlwiVVwiLFwixbNcIjpcInVcIixcIsW0XCI6XCJXXCIsXCLFtVwiOlwid1wiLFwixbZcIjpcIllcIixcIsW3XCI6XCJ5XCIsXCLFuFwiOlwiWVwiLFwixblcIjpcIlpcIixcIsW6XCI6XCJ6XCIsXCLFu1wiOlwiWlwiLFwixbxcIjpcInpcIixcIsW9XCI6XCJaXCIsXCLFvlwiOlwielwiLFwixo9cIjpcIkVcIixcIsaSXCI6XCJmXCIsXCLGoFwiOlwiT1wiLFwixqFcIjpcIm9cIixcIsavXCI6XCJVXCIsXCLGsFwiOlwidVwiLFwix4hcIjpcIkxKXCIsXCLHiVwiOlwibGpcIixcIseLXCI6XCJOSlwiLFwix4xcIjpcIm5qXCIsXCLImFwiOlwiU1wiLFwiyJlcIjpcInNcIixcIsiaXCI6XCJUXCIsXCLIm1wiOlwidFwiLFwiyZlcIjpcImVcIixcIsuaXCI6XCJvXCIsXCLOhlwiOlwiQVwiLFwizohcIjpcIkVcIixcIs6JXCI6XCJIXCIsXCLOilwiOlwiSVwiLFwizoxcIjpcIk9cIixcIs6OXCI6XCJZXCIsXCLOj1wiOlwiV1wiLFwizpBcIjpcImlcIixcIs6RXCI6XCJBXCIsXCLOklwiOlwiQlwiLFwizpNcIjpcIkdcIixcIs6UXCI6XCJEXCIsXCLOlVwiOlwiRVwiLFwizpZcIjpcIlpcIixcIs6XXCI6XCJIXCIsXCLOmFwiOlwiOFwiLFwizplcIjpcIklcIixcIs6aXCI6XCJLXCIsXCLOm1wiOlwiTFwiLFwizpxcIjpcIk1cIixcIs6dXCI6XCJOXCIsXCLOnlwiOlwiM1wiLFwizp9cIjpcIk9cIixcIs6gXCI6XCJQXCIsXCLOoVwiOlwiUlwiLFwizqNcIjpcIlNcIixcIs6kXCI6XCJUXCIsXCLOpVwiOlwiWVwiLFwizqZcIjpcIkZcIixcIs6nXCI6XCJYXCIsXCLOqFwiOlwiUFNcIixcIs6pXCI6XCJXXCIsXCLOqlwiOlwiSVwiLFwizqtcIjpcIllcIixcIs6sXCI6XCJhXCIsXCLOrVwiOlwiZVwiLFwizq5cIjpcImhcIixcIs6vXCI6XCJpXCIsXCLOsFwiOlwieVwiLFwizrFcIjpcImFcIixcIs6yXCI6XCJiXCIsXCLOs1wiOlwiZ1wiLFwizrRcIjpcImRcIixcIs61XCI6XCJlXCIsXCLOtlwiOlwielwiLFwizrdcIjpcImhcIixcIs64XCI6XCI4XCIsXCLOuVwiOlwiaVwiLFwizrpcIjpcImtcIixcIs67XCI6XCJsXCIsXCLOvFwiOlwibVwiLFwizr1cIjpcIm5cIixcIs6+XCI6XCIzXCIsXCLOv1wiOlwib1wiLFwiz4BcIjpcInBcIixcIs+BXCI6XCJyXCIsXCLPglwiOlwic1wiLFwiz4NcIjpcInNcIixcIs+EXCI6XCJ0XCIsXCLPhVwiOlwieVwiLFwiz4ZcIjpcImZcIixcIs+HXCI6XCJ4XCIsXCLPiFwiOlwicHNcIixcIs+JXCI6XCJ3XCIsXCLPilwiOlwiaVwiLFwiz4tcIjpcInlcIixcIs+MXCI6XCJvXCIsXCLPjVwiOlwieVwiLFwiz45cIjpcIndcIixcItCBXCI6XCJZb1wiLFwi0IJcIjpcIkRKXCIsXCLQhFwiOlwiWWVcIixcItCGXCI6XCJJXCIsXCLQh1wiOlwiWWlcIixcItCIXCI6XCJKXCIsXCLQiVwiOlwiTEpcIixcItCKXCI6XCJOSlwiLFwi0ItcIjpcIkNcIixcItCPXCI6XCJEWlwiLFwi0JBcIjpcIkFcIixcItCRXCI6XCJCXCIsXCLQklwiOlwiVlwiLFwi0JNcIjpcIkdcIixcItCUXCI6XCJEXCIsXCLQlVwiOlwiRVwiLFwi0JZcIjpcIlpoXCIsXCLQl1wiOlwiWlwiLFwi0JhcIjpcIklcIixcItCZXCI6XCJKXCIsXCLQmlwiOlwiS1wiLFwi0JtcIjpcIkxcIixcItCcXCI6XCJNXCIsXCLQnVwiOlwiTlwiLFwi0J5cIjpcIk9cIixcItCfXCI6XCJQXCIsXCLQoFwiOlwiUlwiLFwi0KFcIjpcIlNcIixcItCiXCI6XCJUXCIsXCLQo1wiOlwiVVwiLFwi0KRcIjpcIkZcIixcItClXCI6XCJIXCIsXCLQplwiOlwiQ1wiLFwi0KdcIjpcIkNoXCIsXCLQqFwiOlwiU2hcIixcItCpXCI6XCJTaFwiLFwi0KpcIjpcIlVcIixcItCrXCI6XCJZXCIsXCLQrFwiOlwiXCIsXCLQrVwiOlwiRVwiLFwi0K5cIjpcIll1XCIsXCLQr1wiOlwiWWFcIixcItCwXCI6XCJhXCIsXCLQsVwiOlwiYlwiLFwi0LJcIjpcInZcIixcItCzXCI6XCJnXCIsXCLQtFwiOlwiZFwiLFwi0LVcIjpcImVcIixcItC2XCI6XCJ6aFwiLFwi0LdcIjpcInpcIixcItC4XCI6XCJpXCIsXCLQuVwiOlwialwiLFwi0LpcIjpcImtcIixcItC7XCI6XCJsXCIsXCLQvFwiOlwibVwiLFwi0L1cIjpcIm5cIixcItC+XCI6XCJvXCIsXCLQv1wiOlwicFwiLFwi0YBcIjpcInJcIixcItGBXCI6XCJzXCIsXCLRglwiOlwidFwiLFwi0YNcIjpcInVcIixcItGEXCI6XCJmXCIsXCLRhVwiOlwiaFwiLFwi0YZcIjpcImNcIixcItGHXCI6XCJjaFwiLFwi0YhcIjpcInNoXCIsXCLRiVwiOlwic2hcIixcItGKXCI6XCJ1XCIsXCLRi1wiOlwieVwiLFwi0YxcIjpcIlwiLFwi0Y1cIjpcImVcIixcItGOXCI6XCJ5dVwiLFwi0Y9cIjpcInlhXCIsXCLRkVwiOlwieW9cIixcItGSXCI6XCJkalwiLFwi0ZRcIjpcInllXCIsXCLRllwiOlwiaVwiLFwi0ZdcIjpcInlpXCIsXCLRmFwiOlwialwiLFwi0ZlcIjpcImxqXCIsXCLRmlwiOlwibmpcIixcItGbXCI6XCJjXCIsXCLRnVwiOlwidVwiLFwi0Z9cIjpcImR6XCIsXCLSkFwiOlwiR1wiLFwi0pFcIjpcImdcIixcItKSXCI6XCJHSFwiLFwi0pNcIjpcImdoXCIsXCLSmlwiOlwiS0hcIixcItKbXCI6XCJraFwiLFwi0qJcIjpcIk5HXCIsXCLSo1wiOlwibmdcIixcItKuXCI6XCJVRVwiLFwi0q9cIjpcInVlXCIsXCLSsFwiOlwiVVwiLFwi0rFcIjpcInVcIixcItK6XCI6XCJIXCIsXCLSu1wiOlwiaFwiLFwi05hcIjpcIkFFXCIsXCLTmVwiOlwiYWVcIixcItOoXCI6XCJPRVwiLFwi06lcIjpcIm9lXCIsXCLguL9cIjpcImJhaHRcIixcIuGDkFwiOlwiYVwiLFwi4YORXCI6XCJiXCIsXCLhg5JcIjpcImdcIixcIuGDk1wiOlwiZFwiLFwi4YOUXCI6XCJlXCIsXCLhg5VcIjpcInZcIixcIuGDllwiOlwielwiLFwi4YOXXCI6XCJ0XCIsXCLhg5hcIjpcImlcIixcIuGDmVwiOlwia1wiLFwi4YOaXCI6XCJsXCIsXCLhg5tcIjpcIm1cIixcIuGDnFwiOlwiblwiLFwi4YOdXCI6XCJvXCIsXCLhg55cIjpcInBcIixcIuGDn1wiOlwiemhcIixcIuGDoFwiOlwiclwiLFwi4YOhXCI6XCJzXCIsXCLhg6JcIjpcInRcIixcIuGDo1wiOlwidVwiLFwi4YOkXCI6XCJmXCIsXCLhg6VcIjpcImtcIixcIuGDplwiOlwiZ2hcIixcIuGDp1wiOlwicVwiLFwi4YOoXCI6XCJzaFwiLFwi4YOpXCI6XCJjaFwiLFwi4YOqXCI6XCJ0c1wiLFwi4YOrXCI6XCJkelwiLFwi4YOsXCI6XCJ0c1wiLFwi4YOtXCI6XCJjaFwiLFwi4YOuXCI6XCJraFwiLFwi4YOvXCI6XCJqXCIsXCLhg7BcIjpcImhcIixcIuG6gFwiOlwiV1wiLFwi4bqBXCI6XCJ3XCIsXCLhuoJcIjpcIldcIixcIuG6g1wiOlwid1wiLFwi4bqEXCI6XCJXXCIsXCLhuoVcIjpcIndcIixcIuG6nlwiOlwiU1NcIixcIuG6oFwiOlwiQVwiLFwi4bqhXCI6XCJhXCIsXCLhuqJcIjpcIkFcIixcIuG6o1wiOlwiYVwiLFwi4bqkXCI6XCJBXCIsXCLhuqVcIjpcImFcIixcIuG6plwiOlwiQVwiLFwi4bqnXCI6XCJhXCIsXCLhuqhcIjpcIkFcIixcIuG6qVwiOlwiYVwiLFwi4bqqXCI6XCJBXCIsXCLhuqtcIjpcImFcIixcIuG6rFwiOlwiQVwiLFwi4bqtXCI6XCJhXCIsXCLhuq5cIjpcIkFcIixcIuG6r1wiOlwiYVwiLFwi4bqwXCI6XCJBXCIsXCLhurFcIjpcImFcIixcIuG6slwiOlwiQVwiLFwi4bqzXCI6XCJhXCIsXCLhurRcIjpcIkFcIixcIuG6tVwiOlwiYVwiLFwi4bq2XCI6XCJBXCIsXCLhurdcIjpcImFcIixcIuG6uFwiOlwiRVwiLFwi4bq5XCI6XCJlXCIsXCLhurpcIjpcIkVcIixcIuG6u1wiOlwiZVwiLFwi4bq8XCI6XCJFXCIsXCLhur1cIjpcImVcIixcIuG6vlwiOlwiRVwiLFwi4bq/XCI6XCJlXCIsXCLhu4BcIjpcIkVcIixcIuG7gVwiOlwiZVwiLFwi4buCXCI6XCJFXCIsXCLhu4NcIjpcImVcIixcIuG7hFwiOlwiRVwiLFwi4buFXCI6XCJlXCIsXCLhu4ZcIjpcIkVcIixcIuG7h1wiOlwiZVwiLFwi4buIXCI6XCJJXCIsXCLhu4lcIjpcImlcIixcIuG7ilwiOlwiSVwiLFwi4buLXCI6XCJpXCIsXCLhu4xcIjpcIk9cIixcIuG7jVwiOlwib1wiLFwi4buOXCI6XCJPXCIsXCLhu49cIjpcIm9cIixcIuG7kFwiOlwiT1wiLFwi4buRXCI6XCJvXCIsXCLhu5JcIjpcIk9cIixcIuG7k1wiOlwib1wiLFwi4buUXCI6XCJPXCIsXCLhu5VcIjpcIm9cIixcIuG7llwiOlwiT1wiLFwi4buXXCI6XCJvXCIsXCLhu5hcIjpcIk9cIixcIuG7mVwiOlwib1wiLFwi4buaXCI6XCJPXCIsXCLhu5tcIjpcIm9cIixcIuG7nFwiOlwiT1wiLFwi4budXCI6XCJvXCIsXCLhu55cIjpcIk9cIixcIuG7n1wiOlwib1wiLFwi4bugXCI6XCJPXCIsXCLhu6FcIjpcIm9cIixcIuG7olwiOlwiT1wiLFwi4bujXCI6XCJvXCIsXCLhu6RcIjpcIlVcIixcIuG7pVwiOlwidVwiLFwi4bumXCI6XCJVXCIsXCLhu6dcIjpcInVcIixcIuG7qFwiOlwiVVwiLFwi4bupXCI6XCJ1XCIsXCLhu6pcIjpcIlVcIixcIuG7q1wiOlwidVwiLFwi4busXCI6XCJVXCIsXCLhu61cIjpcInVcIixcIuG7rlwiOlwiVVwiLFwi4buvXCI6XCJ1XCIsXCLhu7BcIjpcIlVcIixcIuG7sVwiOlwidVwiLFwi4buyXCI6XCJZXCIsXCLhu7NcIjpcInlcIixcIuG7tFwiOlwiWVwiLFwi4bu1XCI6XCJ5XCIsXCLhu7ZcIjpcIllcIixcIuG7t1wiOlwieVwiLFwi4bu4XCI6XCJZXCIsXCLhu7lcIjpcInlcIixcIuKAk1wiOlwiLVwiLFwi4oCYXCI6XCJcXCdcIixcIuKAmVwiOlwiXFwnXCIsXCLigJxcIjpcIlxcXFxcXFwiXCIsXCLigJ1cIjpcIlxcXFxcXFwiXCIsXCLigJ5cIjpcIlxcXFxcXFwiXCIsXCLigKBcIjpcIitcIixcIuKAolwiOlwiKlwiLFwi4oCmXCI6XCIuLi5cIixcIuKCoFwiOlwiZWN1XCIsXCLigqJcIjpcImNydXplaXJvXCIsXCLigqNcIjpcImZyZW5jaCBmcmFuY1wiLFwi4oKkXCI6XCJsaXJhXCIsXCLigqVcIjpcIm1pbGxcIixcIuKCplwiOlwibmFpcmFcIixcIuKCp1wiOlwicGVzZXRhXCIsXCLigqhcIjpcInJ1cGVlXCIsXCLigqlcIjpcIndvblwiLFwi4oKqXCI6XCJuZXcgc2hlcXVlbFwiLFwi4oKrXCI6XCJkb25nXCIsXCLigqxcIjpcImV1cm9cIixcIuKCrVwiOlwia2lwXCIsXCLigq5cIjpcInR1Z3Jpa1wiLFwi4oKvXCI6XCJkcmFjaG1hXCIsXCLigrBcIjpcInBlbm55XCIsXCLigrFcIjpcInBlc29cIixcIuKCslwiOlwiZ3VhcmFuaVwiLFwi4oKzXCI6XCJhdXN0cmFsXCIsXCLigrRcIjpcImhyeXZuaWFcIixcIuKCtVwiOlwiY2VkaVwiLFwi4oK4XCI6XCJrYXpha2hzdGFuaSB0ZW5nZVwiLFwi4oK5XCI6XCJpbmRpYW4gcnVwZWVcIixcIuKCulwiOlwidHVya2lzaCBsaXJhXCIsXCLigr1cIjpcInJ1c3NpYW4gcnVibGVcIixcIuKCv1wiOlwiYml0Y29pblwiLFwi4oSgXCI6XCJzbVwiLFwi4oSiXCI6XCJ0bVwiLFwi4oiCXCI6XCJkXCIsXCLiiIZcIjpcImRlbHRhXCIsXCLiiJFcIjpcInN1bVwiLFwi4oieXCI6XCJpbmZpbml0eVwiLFwi4pmlXCI6XCJsb3ZlXCIsXCLlhYNcIjpcInl1YW5cIixcIuWGhlwiOlwieWVuXCIsXCLvt7xcIjpcInJpYWxcIn0nKVxuICB2YXIgbG9jYWxlcyA9IEpTT04ucGFyc2UoJ3tcImRlXCI6e1wiw4RcIjpcIkFFXCIsXCLDpFwiOlwiYWVcIixcIsOWXCI6XCJPRVwiLFwiw7ZcIjpcIm9lXCIsXCLDnFwiOlwiVUVcIixcIsO8XCI6XCJ1ZVwiLFwiJVwiOlwicHJvemVudFwiLFwiJlwiOlwidW5kXCIsXCJ8XCI6XCJvZGVyXCIsXCLiiJFcIjpcInN1bW1lXCIsXCLiiJ5cIjpcInVuZW5kbGljaFwiLFwi4pmlXCI6XCJsaWViZVwifSxcImVzXCI6e1wiJVwiOlwicG9yIGNpZW50b1wiLFwiJlwiOlwieVwiLFwiPFwiOlwibWVub3IgcXVlXCIsXCI+XCI6XCJtYXlvciBxdWVcIixcInxcIjpcIm9cIixcIsKiXCI6XCJjZW50YXZvc1wiLFwiwqNcIjpcImxpYnJhc1wiLFwiwqRcIjpcIm1vbmVkYVwiLFwi4oKjXCI6XCJmcmFuY29zXCIsXCLiiJFcIjpcInN1bWFcIixcIuKInlwiOlwiaW5maW5pdG9cIixcIuKZpVwiOlwiYW1vclwifSxcImZyXCI6e1wiJVwiOlwicG91cmNlbnRcIixcIiZcIjpcImV0XCIsXCI8XCI6XCJwbHVzIHBldGl0XCIsXCI+XCI6XCJwbHVzIGdyYW5kXCIsXCJ8XCI6XCJvdVwiLFwiwqJcIjpcImNlbnRpbWVcIixcIsKjXCI6XCJsaXZyZVwiLFwiwqRcIjpcImRldmlzZVwiLFwi4oKjXCI6XCJmcmFuY1wiLFwi4oiRXCI6XCJzb21tZVwiLFwi4oieXCI6XCJpbmZpbmlcIixcIuKZpVwiOlwiYW1vdXJcIn0sXCJwdFwiOntcIiVcIjpcInBvcmNlbnRvXCIsXCImXCI6XCJlXCIsXCI8XCI6XCJtZW5vclwiLFwiPlwiOlwibWFpb3JcIixcInxcIjpcIm91XCIsXCLColwiOlwiY2VudGF2b1wiLFwi4oiRXCI6XCJzb21hXCIsXCLCo1wiOlwibGlicmFcIixcIuKInlwiOlwiaW5maW5pdG9cIixcIuKZpVwiOlwiYW1vclwifSxcInVrXCI6e1wi0JhcIjpcIllcIixcItC4XCI6XCJ5XCIsXCLQmVwiOlwiWVwiLFwi0LlcIjpcInlcIixcItCmXCI6XCJUc1wiLFwi0YZcIjpcInRzXCIsXCLQpVwiOlwiS2hcIixcItGFXCI6XCJraFwiLFwi0KlcIjpcIlNoY2hcIixcItGJXCI6XCJzaGNoXCIsXCLQk1wiOlwiSFwiLFwi0LNcIjpcImhcIn0sXCJ2aVwiOntcIsSQXCI6XCJEXCIsXCLEkVwiOlwiZFwifX0nKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UgKHN0cmluZywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbHVnaWZ5OiBzdHJpbmcgYXJndW1lbnQgZXhwZWN0ZWQnKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKVxuICAgICAgPyB7cmVwbGFjZW1lbnQ6IG9wdGlvbnN9XG4gICAgICA6IG9wdGlvbnMgfHwge31cblxuICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW29wdGlvbnMubG9jYWxlXSB8fCB7fVxuXG4gICAgdmFyIHJlcGxhY2VtZW50ID0gb3B0aW9ucy5yZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkID8gJy0nIDogb3B0aW9ucy5yZXBsYWNlbWVudFxuXG4gICAgdmFyIHNsdWcgPSBzdHJpbmcubm9ybWFsaXplKCkuc3BsaXQoJycpXG4gICAgICAvLyByZXBsYWNlIGNoYXJhY3RlcnMgYmFzZWQgb24gY2hhck1hcFxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBjaCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKGxvY2FsZVtjaF0gfHwgY2hhck1hcFtjaF0gfHwgIChjaCA9PT0gcmVwbGFjZW1lbnQgPyAnICcgOiBjaCkpXG4gICAgICAgICAgLy8gcmVtb3ZlIG5vdCBhbGxvd2VkIGNoYXJhY3RlcnNcbiAgICAgICAgICAucmVwbGFjZShvcHRpb25zLnJlbW92ZSB8fCAvW15cXHdcXHMkKl8rfi4oKSdcIiFcXC06QF0rL2csICcnKVxuICAgICAgfSwgJycpO1xuXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9bXkEtWmEtejAtOVxcc10vZywgJycpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHNwYWNlcywgdGhlbiByZXBsYWNlIGFsbCBvdGhlciBzcGFjZXMgd2l0aFxuICAgIC8vIHJlcGxhY2VtZW50IGNoYXJhY3RlciwgdHJlYXRpbmcgbXVsdGlwbGUgY29uc2VjdXRpdmUgc3BhY2VzIGFzIGEgc2luZ2xlXG4gICAgLy8gc3BhY2UuXG4gICAgc2x1ZyA9IHNsdWcudHJpbSgpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCByZXBsYWNlbWVudCk7XG5cbiAgICBpZiAob3B0aW9ucy5sb3dlcikge1xuICAgICAgc2x1ZyA9IHNsdWcudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBzbHVnXG4gIH1cblxuICByZXBsYWNlLmV4dGVuZCA9IGZ1bmN0aW9uIChjdXN0b21NYXApIHtcbiAgICBPYmplY3QuYXNzaWduKGNoYXJNYXAsIGN1c3RvbU1hcClcbiAgfVxuXG4gIHJldHVybiByZXBsYWNlXG59KSlcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c2luZ2xlQmxvZywgdXBkYXRlQmxvZ30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYmxvZ1wiO1xyXG5pbXBvcnQge2lzQXV0aCwgZ2V0Q29va2llfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHdpdGhSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXJcIjtcclxuaW1wb3J0IHtnZXRBbGxUYWdzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy90YWdzXCJcclxuaW1wb3J0IHtnZXRBbGxDYXRlZ29yaWVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXRlZ29yeVwiXHJcbmltcG9ydCB7UXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHN9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3F1aWxsXCJcclxuaW1wb3J0IHtBUEksIERPTUFJTn0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tIFwic2x1Z2lmeVwiO1xyXG5cclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcXVpbGxcIiksIHtzc3I6IGZhbHNlfSlcclxuY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG5cclxuY29uc3QgQmxvZ1VwZGF0ZSA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTsgLy8gY2F0ZWdvcmllc1xyXG4gICAgY29uc3QgW2NoZWNrZWRUYWcsIHNldENoZWNrZWRUYWddID0gdXNlU3RhdGUoW10pOyAvLyB0YWdzXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGZvcm1EYXRhOiAnJyxcclxuICAgICAgICBzbHVnOiAnJyxcclxuICAgICAgICBib2R5OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgc3VjY2VzcywgZm9ybURhdGEsIHRpdGxlIH0gPSB2YWx1ZXM7XHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG4gICAgICAgIGluaXRCbG9nKCk7XHJcbiAgICAgICAgaW5pdENhdGVnb3JpZXMoKTtcclxuICAgICAgICBpbml0VGFncygpO1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRCbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIucXVlcnkuc2x1Zykge1xyXG4gICAgICAgICAgICBzaW5nbGVCbG9nKHJvdXRlci5xdWVyeS5zbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBzbHVnOiBkYXRhLnNsdWcsIHRpdGxlOiBkYXRhLnRpdGxlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvZHkoZGF0YS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzQXJyYXkoZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdzQXJyYXkoZGF0YS50YWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDYXRlZ29yaWVzQXJyYXkgPSBibG9nQ2F0ZWdvcmllcyA9PiB7XHJcbiAgICAgICAgbGV0IGNhID0gW107XHJcbiAgICAgICAgYmxvZ0NhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNhLnB1c2goYy5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWQoY2EpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUYWdzQXJyYXkgPSBibG9nVGFncyA9PiB7XHJcbiAgICAgICAgbGV0IHRhID0gW107XHJcbiAgICAgICAgYmxvZ1RhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRhLnB1c2godC5faWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWRUYWcodGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICBnZXRBbGxDYXRlZ29yaWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIGdldEFsbFRhZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRhZ3MoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBpbmRleCBvciAtMVxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQ2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZENhdGVnb3J5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsKTtcclxuICAgICAgICBzZXRDaGVja2VkKGFsbCk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdjYXRlZ29yaWVzJywgYWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnc1RvZ2dsZSA9IHQgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6ICcnIH0pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcclxuICAgICAgICBjb25zdCBjbGlja2VkVGFnID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IFsuLi5jaGVja2VkVGFnXTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRUYWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFsbC5wdXNoKHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsbC5zcGxpY2UoY2xpY2tlZFRhZywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFRhZyhhbGwpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFncycsIGFsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbmRPdXRDYXRlZ29yeSA9IGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrZWQuaW5kZXhPZihjKTtcclxuICAgICAgICBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaW5kT3V0VGFnID0gdCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tlZFRhZy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgJiZcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbmRPdXRDYXRlZ29yeShjLl9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dUYWdzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MgJiZcclxuICAgICAgICAgICAgdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ3NUb2dnbGUodC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmaW5kT3V0VGFnKHQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt0Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lID09PSAncGhvdG8nID8gZS50YXJnZXQuZmlsZXNbMF0gOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzbHVnID0gbmFtZSA9PT0gJ3NsdWcnICYmIHNsdWdpZnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KG5hbWUsIHNsdWcpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm9keSA9IGUgPT4ge1xyXG4gICAgICAgIHNldEJvZHkoZSk7XHJcbiAgICAgICAgZm9ybURhdGEuc2V0KCdib2R5JywgZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRCbG9nID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUJsb2coZm9ybURhdGEsIHRva2VuLCBzbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdGl0bGU6ICcnLCBzdWNjZXNzOiBgQmxvZyB0aXRsZWQgXCIke2RhdGEudGl0bGV9XCIgaXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShgL2FkbWluL2NydWQvJHtyb3V0ZXIucXVlcnkuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShgL2FkbWluYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShgL3VzZXIvY3J1ZC8ke3JvdXRlci5xdWVyeS5zbHVnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdXRlci5yZXBsYWNlKGAvdXNlcmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7c3VjY2Vzc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2VkaXRCbG9nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBzb21ldGhpbmcgYW1hemluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZUJsb2dGb3JtKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9keSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtyb3V0ZXIucXVlcnkuc2x1Z31gfSBhbHQ9e3RpdGxlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlYXR1cmVkIGltYWdlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXggc2l6ZTogMW1iPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZlYXR1cmVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bob3RvJyl9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNhdGVnb3JpZXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+e3Nob3dDYXRlZ29yaWVzKCl9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+VGFnczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PntzaG93VGFncygpfTwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nVXBkYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==