import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtIcon, AtAccordion } from 'taro-ui';
import { Block, View, Text } from '@tarojs/components'
import './userCenter.scss'

export default class Usercenter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
       userInfo : { 
        userId: 1,
        userName: "Ricky",
         askedQuestion: ["疫情期间，留学生要不要回国？", "程序员面试需要刷leetcode吗?", "疫情期间，能点外卖吗?"]
        //  "votedQuestion": {}
        },
        test: ["疫情期间，留学生要不要回国？", "程序员面试需要刷leetcode吗?", "疫情期间，能点外卖吗?"],
        openQuestion: false,
        openVote: false
    }
  }
  handleClickQuestion (value) {
    this.setState({
      openQuestion: value
    })
  }
  handleClickVote (value) {
    this.setState({
      openVote: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '我的'
  }

    
  render () {
    const {
      userInfo,
      test
    } = this.state;
    return (
      <View className='userCenter'>
        <View className="info-component">
          <View className="userinfo">
            <View className="userinfo-avatar">
              <AtAvatar circle image='https://jdc.jd.com/img/200' size="large" ></AtAvatar>
            </View>
            <View>
              <View className="userinfo-nickname">
                Ricky Sun
              </View>
              <View className="userinfo-pencil"> 
                <AtIcon value='edit' size='20' color='#11040470' onClick={this.showQuesMask}>
              </AtIcon>
              </View>
              <View className="userinfo-tip"> 
                  <Text> { "世界这么大, 我想去看看"}
                  </Text>
                </View>
            </View>
          </View>
        </View>

        <View className="asked">
          <AtAccordion open={this.state.openQuestion}
                      onClick={this.handleClickQuestion.bind(this)}
                      title='我的问题'
                      hasBorder='true'
          > 
          <AtList hasBorder={false}>
          {test.length > 0 && (
          test.map((item) => {
            console.log(item);
              return (
                <AtListItem
                    title={item}
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />);
                }))}
          </AtList>
          </AtAccordion>
          <AtAccordion open={this.state.openVote}
                      onClick={this.handleClickVote.bind(this)}
                      title='我的投票'
                      hasBorder='true'
          > 
          <AtList hasBorder={false}>
          {test.length > 0 && (
          test.map((item) => {
            console.log(item);
              return (
                <AtListItem
                    title={item}
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />);
                }))}
          </AtList>
          </AtAccordion>
          </View>
          
          {test.length == 0 && (
                <View>
                  <View className="to-recommend-title">还没提出问题</View>
                  <View className="to-recommend-tip">去提出新的问题吧</View>
                </View>
              )}
        </View>
    )
  }
}
