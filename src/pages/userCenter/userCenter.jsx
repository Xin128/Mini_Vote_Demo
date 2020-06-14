import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtIcon, AtAccordion } from 'taro-ui';
import { Block, View, Text } from '@tarojs/components'
import './userCenter.scss'
import {questionLst, userList} from '../data/question.js';

export default class Usercenter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        userId : 4,
        userInfo: userList[4],
        userAskedQuestion: [],
        questionLst:questionLst,
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
  selectQuestions(userId) {
    var lst = questionLst.filter(item => 
      parseInt(item.asked_User_id) == userId);
    return lst;
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      detailedInfo:this.state.userInfo.detailedInfo,
      userName: this.state.userInfo.userName
    });
    this.selectQuestions(this.state.userId);
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '我的'
  }

    
  render () {
    const {
      userInfo,
      userAskedQuestion,
      userName,
      detailedInfo,
    } = this.state;
    console.log(userAskedQuestion);
    return (
      <View className='userCenter'>
        <View className="info-component">
          <View className="userinfo">
            <View className="userinfo-avatar">
              <AtAvatar circle image='https://jdc.jd.com/img/200' size="large" ></AtAvatar>
            </View>
            <View>
              <View className="userinfo-nickname">{userName}         
              </View>
              <View className="userinfo-pencil"> 
                <AtIcon value='edit' size='20' color='#11040470' onClick={this.showQuesMask}>
              </AtIcon>
              </View>
              <View className="userinfo-tip"> 
                  <Text> {detailedInfo}
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
          {/* {test.length > 0 && ( */}
          {userAskedQuestion.map((item) => {
              console.log(item);
              console.log(item.quetionTitle);
              console.log(item.Questions_id);
              return (
                <AtListItem
                    title={item.quetionTitle}
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />);
                })
                // )
                }
          </AtList>
          </AtAccordion>
          <AtAccordion open={this.state.openVote}
                      onClick={this.handleClickVote.bind(this)}
                      title='我的投票'
                      hasBorder='true'
          > 
          <AtList hasBorder={false}>
          {
          // userAskedQuestion.length > 0 && (
          userAskedQuestion.map((item) => {
              return (
                <AtListItem
                    title={item}
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />);
                })
                // )
                }
          </AtList>
          </AtAccordion>
          </View>
          
          {userAskedQuestion.length == 0 && (
                <View>
                  <View className="to-recommend-title">还没提出问题</View>
                  <View className="to-recommend-tip">去提出新的问题吧</View>
                </View>
              )}
        </View>
    )
  }
}
