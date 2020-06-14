(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
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
//import { getFocusData, getRcmdData, getHotData } from '@/api/index';
//import SearchInput from '@/components/searchInput/index';

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _question = __webpack_require__(/*! ../data/question */ "./src/pages/data/question.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp10", "anonymousState__temp11", "loopArray31", "$compid__105", "$compid__106", "$compid__107", "$compid__108", "$compid__109", "$compid__110", "$compid__111", "isShowQues", "scrollY", "isActive", "Threshold", "scrollAnimation", "recList", "hotList", "footerTip", "isShow", "searchVal", "focusList", "dragStyle", "downPullStyle", "downPullText", "creState", "pullState", "status"], _this.showMack = function () {
      var that = _this;
      that.setState({
        isShow: true,
        searchVal: ''
      });
    }, _this.hideMask = function () {
      var that = _this;
      that.setState({
        isShow: false
      });
    }, _this.showQuesMask = function () {
      var that = _this;
      that.setState({
        isShowQues: true
      });
    }, _this.hideQuesMask = function () {
      var that = _this;
      that.setState({
        isShowQues: false
      });
    }, _this.setActive = function (index) {
      var that = _this;
      // 获取当前点击的index索引值
      that.setState({
        isActive: index
      });
    }, _this.reduction = function () {
      var time = 0.5;
      var that = _this;
      that.setState({
        dragStyle: {
          top: "0px",
          transition: "all " + time + "s"
        },
        downPullStyle: {
          height: "0px",
          transition: "all " + time + "s"
        },
        pullState: 0,
        scrollY: true
      });
      setTimeout(function () {
        that.setState({
          dragStyle: {
            top: "0px"
          },
          downPullStyle: {
            height: "0px"
          },
          downPullText: '下拉刷新',
          upPullText: '上拉加载更多'
        });
      }, 500);
    }, _this.touchStart = function (e) {
      var that = _this;
      that.setState({
        creState: e.touches[0]
      });
    }, _this.touchRecMove = function (e) {
      e.stopPropagation();
      var that = _this;
      var move = e.touches[0]; //移动时的位置
      var deviationX = 0.3; //左右偏移量(超过这个偏移量不执行下拉操作)
      var deviationY = 70; //拉动长度（低于这个值的时候不执行）
      var maxY = 100; //拉动的最大高度

      var start_x = that.state.creState.clientX;
      var start_y = that.state.creState.clientY;
      var move_x = move.clientX;
      var move_y = move.clientY;

      //得到偏移数值
      var dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
      //当偏移数值大于设置的偏移数值时则不执行操作
      if (dev < deviationX) {
        //拖动倍率
        var dragY = Math.abs(move_y - start_y) / 3.5;
        //下拉操作
        if (move_y - start_y > 0) {
          if (!(dragY >= deviationY)) {
            that.setState({
              pullState: 0,
              downPullText: '下拉刷新'
            });
          }
          if (dragY >= maxY) {
            dragY = maxY;
          }
          that.setState({
            dragStyle: {
              top: dragY + 'px'
            },
            downPullStyle: {
              height: dragY + 'px'
            },
            scrollY: false
          });
        }
      }
    }, _this.touchHotMove = function (e) {
      e.stopPropagation();
      var that = _this;
      var move = e.touches[0]; //移动时的位置
      var deviationX = 0.3; //左右偏移量(超过这个偏移量不执行下拉操作)
      var deviationY = 70; //拉动长度（低于这个值的时候不执行）
      var maxY = 100; //拉动的最大高度

      var start_x = that.state.creState.clientX;
      var start_y = that.state.creState.clientY;
      var move_x = move.clientX;
      var move_y = move.clientY;

      //得到偏移数值
      var dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
      //当偏移数值大于设置的偏移数值时则不执行操作
      if (dev < deviationX) {
        //拖动倍率
        var dragY = Math.abs(move_y - start_y) / 3.5;
        //下拉操作
        if (move_y - start_y > 0) {
          if (!(dragY >= deviationY)) {
            that.setState({
              pullState: 0,
              downPullText: '下拉刷新'
            });
          }
          if (dragY >= maxY) {
            dragY = maxY;
          }
          that.setState({
            dragStyle: {
              top: dragY + 'px'
            },
            downPullStyle: {
              height: dragY + 'px'
            },
            scrollY: false
          });
        }
      }
    }, _this.touchEnd = function () {
      var that = _this;
      that.reduction();
    }, _this.onReachBottom = function () {
      if (!_this.state.isShow && !_this.state.isShowQues) {
        switch (+_this.state.isActive) {
          case 0:
            _this.getMoreRecList();
            break;
          case 1:
            _this.getMoreHotList();
            break;
          default:
            return;
        }
      }
    }, _this.getFocusList = function (flag) {
      // let that = this;
      // getFocusData()
      //   .then(res => {
      //     if (res.errorMsg == '0') {
      //       if (!flag) {
      //         that.setState({
      //           focusList: res.list
      //         });
      //       }
      //     }
      //   })
      //   .catch(err => {
      //     console.error(`请求接口失败:`, err);
      //   });
    }, _this.getRecommendList = function (flag) {
      // let that = this;
      // getRcmdData()
      //   .then(res => {
      //     if (res.errorMsg == '0') {
      //       if (!flag) {
      //         that.setState({
      //           recList: res.list
      //         });
      //       }
      //     }
      //   })
      //   .catch(err => {
      //     console.error(`请求接口失败:`, err);
      //   });
    }, _this.getMoreRecList = function () {
      // let that = this;
      // that.setState({
      //   status: 'loading'
      // });
      // setTimeout(() => {
      //   getRcmdData()
      //     .then(res => {
      //       that.setState({
      //         recList: that.state.recList.concat(res.list),
      //         status: 'more'
      //       });
      //     })
      //     .catch(err => {
      //       console.error(`请求接口失败:`, err);
      //     });
      // }, 500);
    }, _this.getHotList = function (flag) {
      // let that = this;
      // getHotData()
      //   .then(res => {
      //     if (res.errorMsg == '0') {
      //       if (!flag) {
      //         that.setState({ hotList: res.list });
      //       }
      //     }
      //   })
      //   .catch(err => {
      //     console.error(`请求接口失败:`, err);
      //   });
    }, _this.getMoreHotList = function () {
      // let that = this;
      // that.setState({
      //   status: 'loading'
      // });
      // setTimeout(() => {
      //   getHotData()
      //     .then(res => {
      //       that.setState({
      //         hotList: that.state.hotList.concat(res.list),
      //         status: 'more'
      //       });
      //     })
      //     .catch(err => {
      //       console.error(`请求接口失败:`, err);
      //     });
      // }, 500);
    }, _this.goTitleDetail = function (event) {
      _taroWeapp2.default.navigateTo({
        url: '../../pages/vote/pollDetail?question_id=' + event.target.dataset.id
      });
    }, _this.goContentDetail = function (event) {
      _taroWeapp2.default.navigateTo({
        url: '/pages/vote/pollDetail?id=' + event.target.dataset.id + '&title=' + event.target.dataset.title + '&avatar=' + event.target.dataset.avatar + '&comment=' + event.target.dataset.comment + '&content=' + event.target.dataset.content + '&like=' + event.target.dataset.like + '&time=' + event.target.dataset.time
      });
    }, _this.config = {
      navigationBarTitleText: '首页'
    }, _this.customComponents = ["AtTabs", "AtTabsPane", "AtActivityIndicator", "AtLoadMore"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isShow: false,
        searchVal: '', // 空值，以上搜索输入框状态
        isShowQues: false,
        isActive: 0 /* tabs标签页 */
        , focusList: [],
        recList: [],
        hotList: _question.questionLst,
        // hotList: [{id: 5, title:"short title", image:["http://dummyimage.com/300x200/7994f2"],comment:44,focus:390},
        // {id: 5, title:"averylongword averylongword averylongword averylongword", image:["http://dummyimage.com/300x200/7994f2"],comment:44,focus:390},
        // {id: 5, title:"this is not a title this is not a title this is not a title this is not a title", image:[],comment:44,focus:390},
        // {id: 5, title:"this is not a title this is not a title this is not a title this is not a title this is not a title this is not a title this is not a title this is not a title", image:[],comment:44,focus:390}],
        // 
        footerTip: {
          topic: '去文章列表',
          question: '关注话题',
          column: '去往专栏',
          live: '全部live'
        },
        scrollY: true,
        // 拖动上下滚动
        dragStyle: {
          top: "0px"
        },
        //下拉样式
        downPullStyle: {
          height: "0px"
        },
        downPullText: '下拉刷新',
        creState: {},
        pullState: 0, //刷新状态 0不做操作 1刷新 -1加载更多
        status: 'more'
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 切换tabs标签页


    // 还原初始设置


    // 鼠标点击移动开始触发事件


    // 推荐列表移动往上触发顶部回弹实现


    // 热榜列表移动往上触发顶部回弹实现


    // 鼠标离开且未移动会触发事件


    //页面上拉触底事件的处理函数


    // 获得关注列表API


    // 获得推荐列表API


    // 获取更多推荐列表


    // 获取热榜列表API

    // 获取更多热榜列表

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.getFocusList();
      // this.getRecommendList();
      // this.getHotList();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__105"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__105 = _genCompid2[0],
          $compid__105 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__106"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__106 = _genCompid4[0],
          $compid__106 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__107"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__107 = _genCompid6[0],
          $compid__107 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__108"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__108 = _genCompid8[0],
          $compid__108 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__109"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__109 = _genCompid10[0],
          $compid__109 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__110"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__110 = _genCompid12[0],
          $compid__110 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__111"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__111 = _genCompid14[0],
          $compid__111 = _genCompid14[1];

      var _state = this.__state,
          isShow = _state.isShow,
          searchVal = _state.searchVal,
          isShowQues = _state.isShowQues,
          isActive = _state.isActive,
          footerTip = _state.footerTip,
          focusList = _state.focusList,
          recList = _state.recList,
          hotList = _state.hotList,
          scrollY = _state.scrollY,
          dragStyle = _state.dragStyle,
          downPullStyle = _state.downPullStyle,
          downPullText = _state.downPullText,
          status = _state.status;

      var tabList = [{ title: '推荐' }, { title: '热榜' }];
      var Threshold = 50;
      var scrollAnimation = true;

      var anonymousState__temp = __webpack_require__(/*! ../../assets/images/edit.png */ "./src/assets/images/edit.png");

      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(downPullStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(dragStyle);
      var anonymousState__temp4 = {
        border: 'none'
      };
      var anonymousState__temp5 = {
        border: 'none'
      };
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)(downPullStyle);
      var anonymousState__temp7 = (0, _taroWeapp.internal_inline_style)(dragStyle);
      var anonymousState__temp10 = {
        border: 'none'
      };
      var anonymousState__temp11 = {
        border: 'none'
      };
      var loopArray31 = hotList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp9 = Math.floor(Math.random() * 1000) + '回答 · ' + Math.floor(Math.random() * 1000) + '关注';
        return {
          $loopState__temp9: $loopState__temp9,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "className": "tab-wrap",
        "current": isActive,
        "tabList": tabList,
        "onClick": this.setActive
      }, $compid__105, $prevCompid__105);
      _taroWeapp.propsManager.set({
        "current": isActive,
        "index": 0
      }, $compid__106, $prevCompid__106);
      _taroWeapp.propsManager.set({
        "content": downPullText
      }, $compid__107, $prevCompid__107);
      _taroWeapp.propsManager.set({
        "status": status,
        "moreText": "\u67E5\u770B\u6570\u636E",
        "loadingText": "\u6570\u636E\u52A0\u8F7D\u4E2D...",
        "noMoreText": "\u6CA1\u6709\u66F4\u591A\u4E86",
        "noMoreTextStyle": anonymousState__temp4,
        "moreBtnStyle": anonymousState__temp5
      }, $compid__108, $prevCompid__108);
      _taroWeapp.propsManager.set({
        "current": isActive,
        "index": 1
      }, $compid__109, $prevCompid__109);
      _taroWeapp.propsManager.set({
        "content": downPullText
      }, $compid__110, $prevCompid__110);
      _taroWeapp.propsManager.set({
        "status": status,
        "moreText": "\u67E5\u770B\u6570\u636E",
        "loadingText": "\u6570\u636E\u52A0\u8F7D\u4E2D...",
        "noMoreText": "\u6CA1\u6709\u66F4\u591A\u4E86",
        "noMoreTextStyle": anonymousState__temp10,
        "moreBtnStyle": anonymousState__temp11
      }, $compid__111, $prevCompid__111);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        loopArray31: loopArray31,
        $compid__105: $compid__105,
        $compid__106: $compid__106,
        $compid__107: $compid__107,
        $compid__108: $compid__108,
        $compid__109: $compid__109,
        $compid__110: $compid__110,
        $compid__111: $compid__111,
        Threshold: Threshold,
        scrollAnimation: scrollAnimation
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["showQuesMask", "hideQuesMask", "touchStart", "touchRecMove", "touchEnd", "getRecommendList", "onReachBottom", "goTitleDetail", "goContentDetail", "touchHotMove", "getHotList"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/assets/images/edit.png":
/*!************************************!*\
  !*** ./src/assets/images/edit.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xinhao/Downloads/Summer_2020/StartUp/MiniVote/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_xinhao_Downloads_Summer_2020_StartUp_MiniVote_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);