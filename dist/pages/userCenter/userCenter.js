(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/userCenter/userCenter"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
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

__webpack_require__(/*! ./userCenter.scss */ "./src/pages/userCenter/userCenter.scss");

var _question = __webpack_require__(/*! ../data/question */ "./src/pages/data/question.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Usercenter = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Usercenter, _BaseComponent);

  function Usercenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Usercenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Usercenter.__proto__ || Object.getPrototypeOf(Usercenter)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray9", "loopArray10", "$compid__39", "$compid__40", "$compid__41", "$compid__42", "$compid__43", "$compid__44", "$compid__45", "$compid__46", "openEdit", "userAskedQuestion", "userVotedQuestion", "userName", "detailedInfo", "userId", "userInfo", "questionLst", "openQuestion", "openVote"], _this.config = {
      navigationBarTitleText: '我的'
    }, _this.customComponents = ["AtAvatar", "AtIcon", "AtFloatLayout", "AtTextarea", "AtAccordion", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Usercenter, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Usercenter.prototype.__proto__ || Object.getPrototypeOf(Usercenter.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        userId: 3,
        userInfo: _question.userList[3],
        userAskedQuestion: [],
        questionLst: _question.questionLst,
        openQuestion: false,
        openVote: false,
        openEdit: false,
        detailedInfo: ""
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "handleClickQuestion",
    value: function handleClickQuestion(value) {
      this.setState({
        openQuestion: value
      });
    }
  }, {
    key: "handleClickVote",
    value: function handleClickVote(value) {
      this.setState({
        openVote: value
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      this.setState({
        openEdit: true
      });
    }
  }, {
    key: "changeDetailedInfo",
    value: function changeDetailedInfo(value) {
      this.setState({
        detailedInfo: value
      });
    }
  }, {
    key: "closeEdit",
    value: function closeEdit() {
      this.setState({
        openEdit: false
      });
    }
  }, {
    key: "selectAskedQuestions",
    value: function selectAskedQuestions(userId) {
      // var lst = questionLst.filter(item => 
      //   parseInt(item.asked_User_id) == userId);
      return _question.userList[userId].askekQuestionID.slice(1, -1).split(",").map(function (queID) {
        return _question.questionLst[parseInt(queID)];
      });
    }
  }, {
    key: "selectVotedQuestions",
    value: function selectVotedQuestions(userId) {
      return _question.userList[userId].votedQuestionIDresult.slice(1, -1).split(",").map(function (queID) {
        return _question.questionLst[parseInt(queID)];
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        detailedInfo: this.state.userInfo.detailedInfo,
        userName: this.state.userInfo.userName
      });
    }
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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__39"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__39 = _genCompid2[0],
          $compid__39 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__40"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__40 = _genCompid4[0],
          $compid__40 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__41"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__41 = _genCompid6[0],
          $compid__41 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__42"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__42 = _genCompid8[0],
          $compid__42 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__43"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__43 = _genCompid10[0],
          $compid__43 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__44"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__44 = _genCompid12[0],
          $compid__44 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__45"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__45 = _genCompid14[0],
          $compid__45 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__46"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__46 = _genCompid16[0],
          $compid__46 = _genCompid16[1];

      var _state = this.__state,
          userInfo = _state.userInfo,
          userName = _state.userName,
          detailedInfo = _state.detailedInfo,
          openEdit = _state.openEdit;

      var userAskedQuestion = this.selectAskedQuestions(this.__state.userId);
      var userVotedQuestion = this.selectVotedQuestions(this.__state.userId);
      var loopArray9 = userAskedQuestion.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "hzzzzzzzzz" + _anonIdx, true),
            _genCompid18 = _slicedToArray(_genCompid17, 2),
            $prevCompid__37 = _genCompid18[0],
            $compid__37 = _genCompid18[1];

        _taroWeapp.propsManager.set({
          "title": item.$original.quetionTitle,
          "arrow": "right",
          "thumb": "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        }, $compid__37, $prevCompid__37);
        return {
          $compid__37: $compid__37,
          $original: item.$original
        };
      });
      var loopArray10 = userVotedQuestion.length > 0 ? userVotedQuestion.map(function (item, _anonIdx3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "izzzzzzzzz" + _anonIdx3, true),
            _genCompid20 = _slicedToArray(_genCompid19, 2),
            $prevCompid__38 = _genCompid20[0],
            $compid__38 = _genCompid20[1];

        _taroWeapp.propsManager.set({
          "title": item.$original.quetionTitle,
          "arrow": "right",
          "thumb": "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        }, $compid__38, $prevCompid__38);
        return {
          $compid__38: $compid__38,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "circle": true,
        "image": "https://jdc.jd.com/img/200",
        "size": "large"
      }, $compid__39, $prevCompid__39);
      _taroWeapp.propsManager.set({
        "value": "edit",
        "size": "20",
        "color": "#11040470",
        "onClick": this.handleEdit.bind(this)
      }, $compid__40, $prevCompid__40);
      _taroWeapp.propsManager.set({
        "isOpened": openEdit,
        "title": "\u4FEE\u6539\u4E2A\u4EBA\u7B80\u4ECB",
        "onClose": this.closeEdit.bind(this)
      }, $compid__41, $prevCompid__41);
      _taroWeapp.propsManager.set({
        "value": this.__state.detailedInfo,
        "onChange": this.changeDetailedInfo.bind(this),
        "maxLength": 20,
        "placeholder": "\u6211\u5C31\u662F\u6211\uFF0C\u4E0D\u4E00\u6837\u7684\u70DF\u706B\u2026\u2026"
      }, $compid__42, $prevCompid__42);
      _taroWeapp.propsManager.set({
        "open": this.__state.openQuestion,
        "onClick": this.handleClickQuestion.bind(this),
        "title": "\u6211\u7684\u95EE\u9898",
        "hasBorder": "true"
      }, $compid__43, $prevCompid__43);
      _taroWeapp.propsManager.set({
        "hasBorder": false
      }, $compid__44, $prevCompid__44);
      _taroWeapp.propsManager.set({
        "open": this.__state.openVote,
        "onClick": this.handleClickVote.bind(this),
        "title": "\u6211\u7684\u6295\u7968",
        "hasBorder": "true"
      }, $compid__45, $prevCompid__45);
      _taroWeapp.propsManager.set({
        "hasBorder": false
      }, $compid__46, $prevCompid__46);
      Object.assign(this.__state, {
        loopArray9: loopArray9,
        loopArray10: loopArray10,
        $compid__39: $compid__39,
        $compid__40: $compid__40,
        $compid__41: $compid__41,
        $compid__42: $compid__42,
        $compid__43: $compid__43,
        $compid__44: $compid__44,
        $compid__45: $compid__45,
        $compid__46: $compid__46,
        userVotedQuestion: userVotedQuestion,
        userName: userName
      });
      return this.__state;
    }
  }]);

  return Usercenter;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/userCenter/userCenter", _temp2);
exports.default = Usercenter;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Usercenter, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/userCenter/userCenter.wxml";

/***/ }),

/***/ "./src/pages/userCenter/userCenter.jsx":
/*!*********************************************!*\
  !*** ./src/pages/userCenter/userCenter.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userCenter.jsx?taro&type=template&parse=PAGE& */ "./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userCenter.jsx?taro&type=script&parse=PAGE& */ "./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./userCenter.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userCenter/userCenter.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./userCenter.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userCenter/userCenter.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_userCenter_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/userCenter/userCenter.scss":
/*!**********************************************!*\
  !*** ./src/pages/userCenter/userCenter.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/userCenter/userCenter.jsx","runtime","taro","vendors","common"]]]);