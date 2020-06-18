import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image, Text, ScrollView } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtActivityIndicator, AtLoadMore, AtAvatar } from 'taro-ui'; // 暂时引用atavatar 的官方头像
import { getRcmdData } from '../../api/index';
import SearchInput from '../../components/searchInput/index';
import './index.scss';

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isShow: false,
      searchVal: '', // 空值，以上搜索输入框状态
      isShowQues: false,
      isActive: 0 /* tabs标签页 */
      , focusList: [],
      recList: [],
      hotList: [],
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
      downPullText: '正在疯狂刷新哟',
      creState: {},
      pullState: 0, //刷新状态 0不做操作 1刷新 -1加载更多
      status: 'more'
    };
  }

  showMack = () => {
    let that = this;
    that.setState({
      isShow: true,
      searchVal: ''
    });
  };

  hideMask = () => {
    let that = this;
    that.setState({
      isShow: false
    });
  };

  showQuesMask = () => {
    let that = this;
    that.setState({
      isShowQues: true
    });
  };

  hideQuesMask = () => {
    let that = this;
    that.setState({
      isShowQues: false
    });
  };

  componentWillMount() {}

  componentDidMount() {
    // this.getFocusList();
    // this.getRecommendList();
    // this.getHotList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'

    // 切换tabs标签页
    // setActive = index => {
    //   let that = this;
    //   // 获取当前点击的index索引值
    //   that.setState({
    //     isActive: index
    //   });
    // };

  };setActive(index) {
    this.setState({
      isActive: index
    });
  }

  // 鼠标点击移动开始触发事件
  touchStart = e => {
    let that = this;
    that.setState({
      creState: e.touches[0]
    });
  };

  // 推荐列表移动往上触发顶部回弹实现
  touchRecMove = e => {
    e.stopPropagation();
    let that = this;
    let move = e.touches[0]; //移动时的位置
    let deviationX = 0.3; //左右偏移量(超过这个偏移量不执行下拉操作)
    let deviationY = 70; //拉动长度（低于这个值的时候不执行）
    let maxY = 100; //拉动的最大高度

    let start_x = that.state.creState.clientX;
    let start_y = that.state.creState.clientY;
    let move_x = move.clientX;
    let move_y = move.clientY;

    //得到偏移数值
    let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
    //当偏移数值大于设置的偏移数值时则不执行操作
    if (dev < deviationX) {
      //拖动倍率
      let dragY = Math.abs(move_y - start_y) / 3.5;
      //下拉操作
      if (move_y - start_y > 0) {
        if (dragY >= deviationY) {
          getRcmdData().then(res => {
            that.setState({
              pullState: 1,
              downPullText: '释放刷新',
              recList: res.list.concat(that.state.recList)
            });
            showSuccess(res.list.length + '条新内容');
          }).catch(err => {
            console.error(`请求接口失败:`, err);
          });
        } else {
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
  };
  // 鼠标离开且未移动会触发事件
  touchEnd = () => {
    let that = this;
    that.reduction();
  };

  //页面上拉触底事件的处理函数
  onReachBottom = () => {
    if (!this.state.isShow && !this.state.isShowQues) {
      switch (+this.state.isActive) {
        case 1:
          this.getMoreRecList();
          break;
        case 2:
          this.getMoreHotList();
          break;
        default:
          return;
      }
    }
  };

  // 获得推荐列表API
  getRecommendList = flag => {
    let that = this;
    getRcmdData().then(res => {
      if (res.errorMsg == '0') {
        if (!flag) {
          that.setState({
            recList: res.list
          });
        }
      }
    }).catch(err => {
      console.error(`请求接口失败:`, err);
    });
  };

  render() {
    const {
      isShow,
      searchVal,
      isShowQues,
      isActive,
      footerTip,
      focusList,
      recList,
      hotList,
      scrollY,
      dragStyle,
      downPullStyle,
      downPullText,
      status
    } = this.state;
    const tabList = [{ title: '推荐' }, { title: '热榜' }];
    const Threshold = 50;
    const scrollAnimation = true;

    return <View className="container">
          <View className="search-wrap">
            {/* 搜索栏 */}
            <SearchInput ref="searchRef" show={isShow} value={searchVal} showMack={this.showMack.bind(this)} hideMask={this.hideMask.bind(this)} />
          {/* 提问*/}
          <View className="search-button">
            <Image className="search-button-icon" src={require('../../assets/images/edit.png')} />
            <Text className="search-button-text" onClick={this.showQuesMask}>
              提问
            </Text>
          </View>
        </View>

         {/* 提问  TODO for 投票界面： (MAYBE FOR PETER)
          <View className={'question-mask ' + (isShowQues ? 'show' : 'hide')}>
          <View className="question-input-wrap">
            <View className="question-title-wrap">
              <View className="question-mask-cancel" onClick={this.hideQuesMask}>
                取消
              </View>
              <Text className="mask-title">提问</Text>
              <View className="question-mask-next">下一步</View>
            </View>
            <Input
              className="question-mask-input"
              placeholderStyle="color: #cdcdcd"
              placeholder="输入问题并以问号结尾"
              type="text"
            />
            <Textarea
              className="quesion-mask-text"
              placeholderStyle="color: #cdcdcd"
              placeholder="问题描述(选填)"
              autoFocus="true"
            />
          </View>
          </View> */}
        <AtTabs className="tab-wrap" tabList={tabList} onClick={this.setActive.bind(this)} current={this.state.isActive}>
        {/* 推荐 page */}
          <AtTabsPane current={isActive} index={0}>
              <View className="dragUpdatePage">
                <View className="downDragBox" style={downPullStyle}>
                  <AtActivityIndicator content={downPullText} />
                </View>
                <ScrollView style={dragStyle} scrollY={scrollY} className={'tab-container ' + (isActive == 0 ? 'show' : 'hide')} upperThreshold={Threshold} lowerThreshold={Threshold} onTouchStart={this.touchStart} onTouchMove={this.touchRecMove} onTouchEnd={this.touchEnd} onScrollToUpper={this.getRecommendList} onScrollToLower={this.onReachBottom} scrollWithAnimation={scrollAnimation}>

                  <View className="tab-content">
                    <Text>内容测试</Text>
                    <Text>{this.state.recList}</Text>

                    {recList.map((item, index) => {
                  return <View className="tab-content-recommend" key={index}>
                          {/* <View className="content-category"> */}
                            {/* <Image className="category-avatar" src={item.avatar} /> */}
                            <AtAvatar circle image="https://jdc.jd.com/img/200" size="small"></AtAvatar>
                            <Text className="category-title">{item.author}</Text>
                          {/* </View> */}
                          <View className="recommend-title" data-id={item.id} data-title={item.title} onClick={this.goTitleDetail}>
                            {item.title}
                          </View>
                          <View className="recommend-content" data-id={item.id} data-title={item.title} data-avatar={item.avatar} data-content={item.fineAnswer.content} data-like={item.fineAnswer.like} data-time={item.fineAnswer.time} data-comment={item.fineAnswer.comment} onClick={this.goContentDetail}>
                            {item.fineAnswer.content}
                            <Text>测试</Text>
                            <Text>{this.state.item}</Text>
                          <Text>{this.state.index}</Text>
                          </View>

                          {/* <View className="recommend-footer">
                            <View className="recommend-footer-text">
                              <Text>
                                {item.fineAnswer.like +
                                  (item.from == 'live' ? '感兴趣' : '赞同') +
                                  ' · ' +
                                  item.fineAnswer.comment +
                                  (item.from == 'live' ? '人参与' : '评论')}
                              </Text>
                              {item.from && <Text>{'· ' + footerTip[item.from]}</Text>}
                            </View> */}
                          {/* </View> */}
                        </View>;
                })}
                  </View>

                  <View className="upDragBox">
                    <AtLoadMore status={status} moreText="查看数据" loadingText="数据加载中..." noMoreText="没有更多了" noMoreTextStyle={{
                  border: 'none'
                }} moreBtnStyle={{
                  border: 'none'
                }} />
                  </View>
                </ScrollView>
              </View>
            </AtTabsPane>

            <AtTabsPane current={isActive} index={1}>
            <View className="dragUpdatePage">
              <View className="downDragBox" style={downPullStyle}>
                <AtActivityIndicator content={downPullText} />
              </View>
              <ScrollView style={dragStyle} scrollY={scrollY} className={'tab-container ' + (isActive == 2 ? 'show' : 'hide')} onTouchStart={this.touchStart} onTouchMove={this.touchHotMove} onTouchEnd={this.touchEnd} upperThreshold={Threshold} lowerThreshold={Threshold} onScrollToUpper={this.getHotList} onScrollToLower={this.onReachBottom} scrollWithAnimation={scrollAnimation}>
                {/* <View className="tab-content">
                  <Text>测试热榜是否好用</Text>
                  {hotList.map((item, index) => {
                    return (
                      <View className="at-row tab-content-hot" key={index}>
                        <View className="at-col at-col-1">
                          <Text className={'hot-index ' + (index < 3 ? 'hot-index-hot' : '')}>
                            {index + 1}
                          </Text>
                        </View>
                        <View className="at-col at-col-8 at-col--wrap">
                          <Text className="hot-title">{item.title}</Text>
                          <View className="hot-footer-text">
                            <Text>{item.comment + '回答 · ' + item.focus + '关注'}</Text>
                          </View>
                        </View>
                        <View className="at-col at-col-3">
                          <Image className="hot-image" src={item.image} />
                        </View>
                      </View>
                    );
                  })}
                 </View> */}
                {/* <View className="upDragBox">
                  <AtLoadMore
                    status={status}
                    moreText="查看数据"
                    loadingText="数据加载中..."
                    noMoreText="没有更多了"
                    noMoreTextStyle={{
                      border: 'none'
                    }}
                    moreBtnStyle={{
                      border: 'none'
                    }}
                  />
                 </View> */}
              </ScrollView>
            </View>
          </AtTabsPane>

        </AtTabs>
    </View>;
  }
}