import Taro, { Component } from '@tarojs/taro'
import { Block, View, Image, Text, Input, Textarea, ScrollView } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtActivityIndicator, AtLoadMore } from 'taro-ui';
import SearchInput from '../../components/searchInput/index';
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isShow: false,
      searchVal: '', // 空值，以上搜索输入框状态
      isShowQues: false,
      isActive: 1 /* tabs标签页 */,
      focusList: [],
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
        top: 0 + 'px'
      },
      //下拉样式
      downPullStyle: {
        height: 0 + 'px'
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

  componentWillMount () { }

  componentDidMount () {
    // this.getFocusList();
    // this.getRecommendList();
    // this.getHotList();
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  
  // 切换tabs标签页
  setActive = index => {
    let that = this;
    // 获取当前点击的index索引值
    that.setState({
      isActive: index
    });
  };
  

  render () {
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

    return (
      <View className="container">
          <View className="search-wrap">
            {/* 搜索栏 */}
            <SearchInput
              ref="searchRef"
              show={isShow}
              value={searchVal}
              showMack={this.showMack.bind(this)}
              hideMask={this.hideMask.bind(this)}
            />
          {/* 提问*/}
          <View className="search-button">
            <Image className="search-button-icon" src={require('../../assets/images/edit.png')} />
            <Text className="search-button-text" onClick={this.showQuesMask}>
              提问
            </Text>
          </View>
        </View>

         {/* 提问  
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
        <AtTabs className="tab-wrap" current={isActive} tabList={tabList} onClick={this.setActive}>
        {/* 推荐 page */}
          <AtTabsPane current={isActive} index={0}>
              <Text>测试推荐是否好用</Text>
              <View className="dragUpdatePage">
                <View className="downDragBox" style={downPullStyle}>
                  <AtActivityIndicator content={downPullText} />
                </View>
                <ScrollView
                  style={dragStyle}
                  scrollY={scrollY}
                  className={'tab-container ' + (isActive == 0 ? 'show' : 'hide')}
                  upperThreshold={Threshold}
                  lowerThreshold={Threshold}
                  onTouchStart={this.touchStart}
                  onTouchMove={this.touchRecMove}
                  onTouchEnd={this.touchEnd}
                  onScrollToUpper={this.getRecommendList}
                  onScrollToLower={this.onReachBottom}
                  scrollWithAnimation={scrollAnimation}>

                  <View className="tab-content">
                    {recList.map((item, index) => {
                      return (
                        <View className="tab-content-recommend" key={index}>
                          <View className="content-category">
                            <Image className="category-avatar" src={item.avatar} />
                            <Text className="category-title">{item.author}</Text>
                          </View>
                          <View
                            className="recommend-title"
                            data-id={item.id}
                            data-title={item.title}
                            onClick={this.goTitleDetail}>
                            {item.title}
                          </View>
                          <View
                            className="recommend-content"
                            data-id={item.id}
                            data-title={item.title}
                            data-avatar={item.avatar}
                            data-content={item.fineAnswer.content}
                            data-like={item.fineAnswer.like}
                            data-time={item.fineAnswer.time}
                            data-comment={item.fineAnswer.comment}
                            onClick={this.goContentDetail}>
                            {item.fineAnswer.content}
                          </View>

                          <View className="recommend-footer">
                            <View className="recommend-footer-text">
                              <Text>
                                {item.fineAnswer.like +
                                  (item.from == 'live' ? '感兴趣' : '赞同') +
                                  ' · ' +
                                  item.fineAnswer.comment +
                                  (item.from == 'live' ? '人参与' : '评论')}
                              </Text>
                              {item.from && <Text>{'· ' + footerTip[item.from]}</Text>}
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>

                  <View className="upDragBox">
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
                  </View>
                </ScrollView>
              </View>
            </AtTabsPane>

            <AtTabsPane current={isActive} index={1}>
            <View className="dragUpdatePage">
              <View className="downDragBox" style={downPullStyle}>
                <AtActivityIndicator content={downPullText} />
              </View>
              <Text>测试热榜是否好用</Text>
              <ScrollView
                style={dragStyle}
                scrollY={scrollY}
                className={'tab-container ' + (isActive == 2 ? 'show' : 'hide')}
                onTouchStart={this.touchStart}
                onTouchMove={this.touchHotMove}
                onTouchEnd={this.touchEnd}
                upperThreshold={Threshold}
                lowerThreshold={Threshold}
                onScrollToUpper={this.getHotList}
                onScrollToLower={this.onReachBottom}
                scrollWithAnimation={scrollAnimation}>
                <View className="tab-content">
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
                </View>
                <View className="upDragBox">
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
                </View>
              </ScrollView>
            </View>
          </AtTabsPane>

        </AtTabs>
    </View>
  )
  }
}
