import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './userCenter.scss'

export default class Usercenter extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='userCenter'>
        <Text>To do: 我的界面!</Text>
      </View>
    )
  }
}
