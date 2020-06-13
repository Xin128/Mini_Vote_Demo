(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/vote/vote"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./vote.scss */ "./src/pages/vote/vote.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vote = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Vote, _BaseComponent);

  function Vote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Vote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vote.__proto__ || Object.getPrototypeOf(Vote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray176", "$compid__673", "$compid__674", "$compid__675", "$compid__676", "$compid__677", "$compid__678", "$compid__679", "options"], _this.config = {
      navigationBarTitleText: '投票'
    }, _this.customComponents = ["AtForm", "AtInput", "AtSwitch", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Vote, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_constructor",
    value: function _constructor() {
      _get(Vote.prototype.__proto__ || Object.getPrototypeOf(Vote.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: '',
        options: ["", ""]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(value) {
      this.setState(function (state, props) {
        return {
          options: [].concat(_toConsumableArray(state.options), [""])
        };
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      // console.log(this.state.value)
    }
  }, {
    key: "onReset",
    value: function onReset(event) {
      this.setState({
        value: ''
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__673"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__673 = _genCompid2[0],
          $compid__673 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__674"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__674 = _genCompid4[0],
          $compid__674 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__675"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__675 = _genCompid6[0],
          $compid__675 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__676"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__676 = _genCompid8[0],
          $compid__676 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__677"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__677 = _genCompid10[0],
          $compid__677 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__678"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__678 = _genCompid12[0],
          $compid__678 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__679"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__679 = _genCompid14[0],
          $compid__679 = _genCompid14[1];

      var loopArray176 = this.__state.options.map(function (value, index) {
        value = {
          $original: (0, _taroWeapp.internal_get_original)(value)
        };

        var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "behzzzzzzz" + index, true),
            _genCompid16 = _slicedToArray(_genCompid15, 2),
            $prevCompid__672 = _genCompid16[0],
            $compid__672 = _genCompid16[1];

        _taroWeapp.propsManager.set({
          "name": "value",
          "title": "",
          "type": "text",
          "placeholder": index,
          "value": value.$original,
          "onChange": _this2.handleChange.bind(_this2)
        }, $compid__672, $prevCompid__672);
        return {
          $compid__672: $compid__672,
          $original: value.$original
        };
      });

      _taroWeapp.propsManager.set({
        "onSubmit": this.onSubmit.bind(this),
        "onReset": this.onReset.bind(this)
      }, $compid__673, $prevCompid__673);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": "\u6295\u7968\u6807\u9898",
        "type": "text",
        "placeholder": "CS\u672C\u79D1Offer\u600E\u4E48\u9009",
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this)
      }, $compid__674, $prevCompid__674);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": "",
        "type": "text",
        "placeholder": "\u8BE6\u7EC6\u95EE\u9898\u63CF\u8FF0",
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this)
      }, $compid__675, $prevCompid__675);
      _taroWeapp.propsManager.set({
        "title": "\u5141\u8BB8\u591A\u9009",
        "checked": this.__state.value,
        "onChange": this.handleChange
      }, $compid__676, $prevCompid__676);
      _taroWeapp.propsManager.set({
        "type": "secondary",
        "onClick": this.handleAddOption.bind(this)
      }, $compid__677, $prevCompid__677);
      _taroWeapp.propsManager.set({
        "formType": "submit"
      }, $compid__678, $prevCompid__678);
      _taroWeapp.propsManager.set({
        "formType": "reset"
      }, $compid__679, $prevCompid__679);
      Object.assign(this.__state, {
        loopArray176: loopArray176,
        $compid__673: $compid__673,
        $compid__674: $compid__674,
        $compid__675: $compid__675,
        $compid__676: $compid__676,
        $compid__677: $compid__677,
        $compid__678: $compid__678,
        $compid__679: $compid__679
      });
      return this.__state;
    }
  }]);

  return Vote;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/vote/vote", _temp2);
exports.default = Vote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Vote, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/vote/vote.wxml";

/***/ }),

/***/ "./src/pages/vote/vote.jsx":
/*!*********************************!*\
  !*** ./src/pages/vote/vote.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vote.jsx?taro&type=template&parse=PAGE& */ "./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vote.jsx?taro&type=script&parse=PAGE& */ "./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./vote.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/vote.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./vote.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/vote.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_vote_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/vote/vote.scss":
/*!**********************************!*\
  !*** ./src/pages/vote/vote.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/vote/vote.jsx","runtime","taro","vendors"]]]);