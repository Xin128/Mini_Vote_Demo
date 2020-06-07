import Taro, { Component } from "@tarojs/taro-h5";


import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      backgroundColor: '#fff',
      color: '#999',
      selectedColor: '#1E8AE8',
      borderStyle: 'white',
      list: [{
        pagePath: "/pages/index/index",
        text: '首页',
        iconPath: require("./assets/images/home.png"),
        selectedIconPath: require("./assets/images/home-light.png")
      }, {
        pagePath: "/pages/vote/vote",
        text: '投票',
        iconPath: require("./assets/images/auth-icon.png"),
        selectedIconPath: require("./assets/images/auth-icon.png")
      }, {
        pagePath: "/pages/userCenter/userCenter",
        text: '我的',
        iconPath: require("./assets/images/me.png"),
        selectedIconPath: require("./assets/images/me-light.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["/pages/index/index", "/pages/vote/vote", "/pages/userCenter/userCenter"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { backgroundColor: '#fff', color: '#999', selectedColor: '#1E8AE8', borderStyle: 'white', list: [{ pagePath: "/pages/index/index", text: '首页', iconPath: require("./assets/images/home.png"), selectedIconPath: require("./assets/images/home-light.png") }, { pagePath: "/pages/vote/vote", text: '投票', iconPath: require("./assets/images/auth-icon.png"), selectedIconPath: require("./assets/images/auth-icon.png") }, { pagePath: "/pages/userCenter/userCenter", text: '我的', iconPath: require("./assets/images/me.png"), selectedIconPath: require("./assets/images/me-light.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
  };render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/vote/vote',
          componentLoader: () => import( /* webpackChunkName: "vote_vote" */'./pages/vote/vote'),
          isIndex: false
        }, {
          path: '/pages/userCenter/userCenter',
          componentLoader: () => import( /* webpackChunkName: "userCenter_userCenter" */'./pages/userCenter/userCenter'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));