(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/vote/voteForRedirect"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************************************************************************************/
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vote.__proto__ || Object.getPrototypeOf(Vote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__76", "$compid__77", "$compid__78", "$compid__79", "$compid__80", "$compid__81", "$compid__82", "$compid__83", "$compid__84", "$compid__85", "$compid__86", "$compid__87", "questionTitle", "options", "detailedInfo", "files", "timeLimit", "peopleRequired", "checkedSettings", "value"], _this.config = {
      navigationBarTitleText: '投票'
    }, _this.customComponents = ["AtCard", "AtInput", "AtTextarea", "AtButton", "AtImagePicker", "AtCheckbox"], _temp), _possibleConstructorReturn(_this, _ret);
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
        questionTitle: '',
        options: ["", ""],
        detailedInfo: "",
        files: [],
        timeLimit: "",
        peopleRequired: 100,
        checkedSettings: ["anonymous", "visile"]
      };

      this.checkedSettings = [{
        value: 'anonymous',
        label: '是否匿名'
      }, {
        value: 'visible',
        label: '是否允许他人直接查看结果'
      }];
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        questionTitle: questionTitle
      });
    }
  }, {
    key: "handleDetailInfo",
    value: function handleDetailInfo(value) {
      this.setState({
        detailedInfo: detailedInfo
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
    value: function onSubmit(event) {}
  }, {
    key: "onReset",
    value: function onReset(event) {
      this.setState({
        value: ''
      });
    }
  }, {
    key: "onImageChange",
    value: function onImageChange(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "onTimeSettingChange",
    value: function onTimeSettingChange(value) {
      this.setState({
        timeLimit: timeLimit
      });
    }
  }, {
    key: "onNumPeopleRequiredChange",
    value: function onNumPeopleRequiredChange(value) {
      this.setState({
        peopleRequired: peopleRequired
      });
    }
  }, {
    key: "handleCheckedSettings",
    value: function handleCheckedSettings(value) {
      this.setState({
        checkedSettings: value
      });
    }
  }, {
    key: "onFail",
    value: function onFail(mes) {
      console.log(mes);
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(index, file) {
      console.log(index, file);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__76"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__76 = _genCompid2[0],
          $compid__76 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__77"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__77 = _genCompid4[0],
          $compid__77 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__78"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__78 = _genCompid6[0],
          $compid__78 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__79"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__79 = _genCompid8[0],
          $compid__79 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__80"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__80 = _genCompid10[0],
          $compid__80 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__81"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__81 = _genCompid12[0],
          $compid__81 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__82"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__82 = _genCompid14[0],
          $compid__82 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__83"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__83 = _genCompid16[0],
          $compid__83 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__84"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__84 = _genCompid18[0],
          $compid__84 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__85"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__85 = _genCompid20[0],
          $compid__85 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__86"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__86 = _genCompid22[0],
          $compid__86 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__87"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__87 = _genCompid24[0],
          $compid__87 = _genCompid24[1];

      _taroWeapp.propsManager.set({
        "title": "\u63D0\u51FA\u6211\u7684\u95EE\u9898"
      }, $compid__76, $prevCompid__76);
      _taroWeapp.propsManager.set({
        "name": "questionTitle",
        "type": "text",
        "placeholder": "\u8F93\u5165\u6211\u7684\u95EE\u9898",
        "required": true,
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this)
      }, $compid__77, $prevCompid__77);
      _taroWeapp.propsManager.set({
        "name": "detailedInfo",
        "placeholder": "\u8F93\u5165\u8BE6\u7EC6\u95EE\u9898\u63CF\u8FF0",
        "value": this.__state.detailedInfo,
        "maxLength": 200,
        "height": 80,
        "onChange": this.handleDetailInfo.bind(this)
      }, $compid__78, $prevCompid__78);
      _taroWeapp.propsManager.set({
        "circle": true,
        "size": "small"
      }, $compid__79, $prevCompid__79);
      _taroWeapp.propsManager.set({
        "name": "options1",
        "type": "text",
        "placeholder": "\u9009\u9879\u5177\u4F53\u63CF\u8FF0",
        "required": true,
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this)
      }, $compid__80, $prevCompid__80);
      _taroWeapp.propsManager.set({
        "circle": true,
        "size": "small"
      }, $compid__81, $prevCompid__81);
      _taroWeapp.propsManager.set({
        "name": "options1",
        "type": "text",
        "placeholder": "\u9009\u9879\u5177\u4F53\u63CF\u8FF0",
        "required": true,
        "value": this.__state.value,
        "onChange": this.handleChange.bind(this)
      }, $compid__82, $prevCompid__82);
      _taroWeapp.propsManager.set({
        "length": 1,
        "files": this.__state.files,
        "onChange": this.onImageChange.bind(this),
        "onFail": this.onFail.bind(this),
        "onImageClick": this.onImageClick.bind(this)
      }, $compid__83, $prevCompid__83);
      _taroWeapp.propsManager.set({
        "name": "tag-1",
        "type": "primary",
        "circle": true,
        "size": "small",
        "onClick": this.onTimeSettingChange.bind(this)
      }, $compid__84, $prevCompid__84);
      _taroWeapp.propsManager.set({
        "name": "tag-1",
        "type": "secondary",
        "circle": true,
        "size": "small",
        "onClick": this.onNumPeopleRequiredChange.bind(this)
      }, $compid__85, $prevCompid__85);
      _taroWeapp.propsManager.set({
        "options": this.checkedSettings,
        "selectedList": this.__state.checkedSettings,
        "onChange": this.handleCheckedSettings.bind(this)
      }, $compid__86, $prevCompid__86);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "big",
        "onClick": this.onSubmit.bind(this)
      }, $compid__87, $prevCompid__87);
      Object.assign(this.__state, {
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        $compid__78: $compid__78,
        $compid__79: $compid__79,
        $compid__80: $compid__80,
        $compid__81: $compid__81,
        $compid__82: $compid__82,
        $compid__83: $compid__83,
        $compid__84: $compid__84,
        $compid__85: $compid__85,
        $compid__86: $compid__86,
        $compid__87: $compid__87
      });
      return this.__state;
    }
  }]);

  return Vote;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/vote/voteForRedirect", _temp2);
exports.default = Vote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Vote, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/vote/voteForRedirect.wxml";

/***/ }),

/***/ "./src/pages/vote/voteForRedirect.jsx":
/*!********************************************!*\
  !*** ./src/pages/vote/voteForRedirect.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voteForRedirect.jsx?taro&type=template&parse=PAGE& */ "./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voteForRedirect.jsx?taro&type=script&parse=PAGE& */ "./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./voteForRedirect.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/voteForRedirect.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./voteForRedirect.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/vote/voteForRedirect.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_voteForRedirect_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/vote/voteForRedirect.jsx","runtime","taro","vendors","common"]]]);