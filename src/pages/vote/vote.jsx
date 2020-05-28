import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './vote.scss'

export default class Vote extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '投票'
  }

  render () {
    return (
      <View className='vote'>
        <Text> To do: 投票界面</Text>
      </View>
    )
  }
}
