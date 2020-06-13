import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss';
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/vote/pollDetail',
      'pages/userCenter/userCenter'

   
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      color: '#999',
      selectedColor: '#1E8AE8',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/images/home.png',
          selectedIconPath: 'assets/images/home-light.png'
        },
        {
          pagePath: 'pages/vote/pollDetail',
          text: '投票',
          iconPath: 'assets/images/auth-icon.png',
          selectedIconPath: 'assets/images/auth-icon.png'
        },
        {
          pagePath: 'pages/userCenter/userCenter',
          text: '我的',
          iconPath: 'assets/images/me.png',
          selectedIconPath: 'assets/images/me-light.png'
        }
        
        
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
