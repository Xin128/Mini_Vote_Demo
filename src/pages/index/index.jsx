import Taro, { Component } from '@tarojs/taro';
import { Block, View, Image, Text, Input, Textarea, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtActivityIndicator, AtLoadMore, AtFab } from 'taro-ui';
//import { getFocusData, getRcmdData, getHotData } from '@/api/index';
//import SearchInput from '@/components/searchInput/index';
import { showSuccess } from '@/utils/index';
import './index.scss';
import {questionLst, userList} from '../data/question.js';


class Index extends Component {
  
  constructor() {
    super(...arguments);
    // const db = Taro.cloud.database()
    // db.collection('Users').
    // add({data:{
    //   userId:"83",
    //   userName:"testUser just for test"
    // }})

    this.state = {
      isShow: false,
      searchVal: '', // 空值，以上搜索输入框状态
      isShowQues: false,
      isActive: 0 /* tabs标签页 */,
      focusList: [],
      recList: [],
      hotList: questionLst,
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
      downPullText: '下拉刷新',
      creState: {},
      pullState: 0, //刷新状态 0不做操作 1刷新 -1加载更多
      status: 'more',
      userdb: Taro.cloud.database().collection("Users"),
      questiondb: Taro.cloud.database().collection("Questions")
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

  // 切换tabs标签页
  setActive = index => {
    let that = this;
    // 获取当前点击的index索引值
    that.setState({
      isActive: index
    });
  };

  // 还原初始设置
  reduction = () => {
    let time = 0.5;
    let that = this;
    that.setState({
      dragStyle: {
        top: 0 + 'px',
        transition: `all ${time}s`
      },
      downPullStyle: {
        height: 0 + 'px',
        transition: `all ${time}s`
      },
      pullState: 0,
      scrollY: true
    });
    setTimeout(() => {
      that.setState({
        dragStyle: {
          top: 0 + 'px'
        },
        downPullStyle: {
          height: 0 + 'px'
        },
        downPullText: '下拉刷新',
        upPullText: '上拉加载更多'
      });
    }, time * 1000);
  };

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
          // getRcmdData()
          //   .then(res => {
          //     that.setState({
          //       pullState: 1,
          //       downPullText: '释放刷新',
          //       recList: res.list.concat(that.state.recList)
          //     });
          //     showSuccess(res.list.length + '条新内容');
          //   })
          //   .catch(err => {
          //     console.error(`请求接口失败:`, err);
          //   });
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

  // 热榜列表移动往上触发顶部回弹实现
  touchHotMove = e => {
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
          // getHotData()
          //   .then(res => {
          //     that.setState({
          //       pullState: 1,
          //       downPullText: '释放刷新',
          //       hotList: res.list.concat(that.state.hotList)
          //     });
          //     showSuccess(res.list.length + '条新内容');
          //   })
          //   .catch(err => {
          //     console.error(`请求接口失败:`, err);
          //   });
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
        case 0:
          this.getMoreRecList();
          break;
        case 1:
          this.getMoreHotList();
          break;
        default:
          return;
      }
    }
  };

  // 获得关注列表API
  getFocusList = flag => {
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
  };


  // 获得推荐列表API
  getRecommendList = flag => {
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
  };

  // 获取更多推荐列表
  getMoreRecList = () => {
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
  };

  // 获取热榜列表API
  getHotList = flag => {
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
  };
  // 获取更多热榜列表
  getMoreHotList = () => {
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
  };

  goTitleDetail = event => {
    Taro.navigateTo({
      url:'../../pages/vote/pollDetail?question_id='+event.target.dataset.id
    });
  };

  goBannerDetail = event => {
    Taro.navigateTo({
      url:'../../pages/article/article'
    });
  };

  onFabPublish = event => {
    Taro.navigateTo({
      url:'../../pages/vote/voteForRedirect'
    });
  };

  goContentDetail = event => {
    Taro.navigateTo({
      url:
        '/pages/vote/pollDetail?id=' +
        event.target.dataset.id +
        '&title=' +
        event.target.dataset.title +
        '&avatar=' +
        event.target.dataset.avatar +
        '&comment=' +
        event.target.dataset.comment +
        '&content=' +
        event.target.dataset.content +
        '&like=' +
        event.target.dataset.like +
        '&time=' +
        event.target.dataset.time
    });
  };

  componentDidMount() {
    // this.getFocusList();
    // this.getRecommendList();
    // this.getHotList();
  }

  config = {
    navigationBarTitleText: '首页'
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
      status,
      userdb,
      questiondb
    } = this.state;
    const tabList = [{ title: '热榜' }, { title: '推荐' }];
    const Threshold = 50;
    const scrollAnimation = true;
    userdb.limit(2).get().then(res=>{
      console.log(res);
      console.log(res.data);
      res.data.map(entity=> console.log(entity.userName));    
      });
    return (
      <View className="container">
          <Swiper 
          className='banner'
          indicatorColor='#999' 
          indicatorActiveColor='#333'
          interval='2000'
          vertical={false} circular
          autoplay>
            <SwiperItem onClick={this.goBannerDetail}>
              <Image className='image-banner' src='../../assets/images/banner_fatherDay.png' mode='scaleToFill'>
              </Image>
            </SwiperItem>
            <SwiperItem onClick={this.goBannerDetail}>
              <Image className='image-banner' src='../../assets/images/banner_woman.png' mode='scaleToFill'>
              </Image>
            </SwiperItem>
            <SwiperItem onClick={this.goBannerDetail}>
              <Image className='image-banner' src='../../assets/images/banner_Volts.png' mode='scaleToFill'>
              </Image>
            </SwiperItem>
          </Swiper>
        {/*  tabs标签页 begin   */}
        <AtTabs className="tab-wrap" current={isActive} tabList={tabList} onClick={this.setActive}>
          <AtTabsPane current={isActive} index={0}>
            <View className="dragUpdatePage">
              <View className="downDragBox" style={downPullStyle}>
                <AtActivityIndicator content={downPullText} />
              </View>
              <ScrollView
                style={dragStyle}
                scrollY={scrollY}
                className={'tab-container ' + (isActive == 0 ? 'show' : 'hide')}
                onTouchStart={this.touchStart}
                onTouchMove={this.touchHotMove}
                onTouchEnd={this.touchEnd}
                upperThreshold={Threshold}
                lowerThreshold={Threshold}
                onScrollToUpper={this.getHotList}
                onScrollToLower={this.onReachBottom}
                scrollWithAnimation={scrollAnimation}>
                <View className="tab-content">
                {
                  hotList.map((item, index) => {
                    return (
                      <View className="at-row tab-content-hot" key={index} >>
                        <View className="at-col at-col-1">
                          <Text className={'hot-index ' + (index < 2 ? 'hot-index-hot' : '')}>
                            {index + 1}
                          </Text>
                        </View>
                        <View className="at-col at-col-12 at-col--wrap">
                          <Text className="hot-title" data-id={item.Questions_id} data-title={item.quetionTitle} onClick={this.goTitleDetail}>
                            {item.quetionTitle}
                          </Text>
                          <View className="hot-footer-text">
                            <Text>{ Math.floor(Math.random()*1000) + '回答 · ' + Math.floor(Math.random()*1000) + '关注'}</Text>
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
              {/* 推荐内容 */}
          <AtTabsPane current={isActive} index={1}>
          <View className="dragUpdatePage">
            <View className="downDragBox" style={downPullStyle}>
              <AtActivityIndicator content={downPullText} />
            </View>
            <ScrollView
              style={dragStyle}
              scrollY={scrollY}
              className={'tab-container ' + (isActive == 1 ? 'show' : 'hide')}
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
        </AtTabs>
        <View className="floatButton">
          <AtFab onClick={this.onFabPublish.bind(this)}>
            <Text className='at-fab__icon at-icon at-icon-edit'></Text>
          </AtFab>
        </View>
      </View>
    );
  }
}

export default Index;
