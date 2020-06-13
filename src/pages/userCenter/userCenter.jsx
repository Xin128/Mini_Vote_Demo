import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtIcon, AtAccordion } from 'taro-ui';
import { Block, View, Text } from '@tarojs/components'
import './userCenter.scss'
import {questionLst, userList} from '../data/question.js';

export default class Usercenter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        userInfo: userList[Math.floor(Math.random() * userList.length)],
        userAskedQuestion: [],
        questionLst:questionLst,
        openQuestion: false,
        openVote: false
    }
  }

   // 获得推荐列表API
   getUserAskedQuestionList = () => {
    // console.log(this.state.userAskedQuestion);
    // console.log(questionLst);
    // console.log(Array.from(this.state.userAskedQuestion, 
    //   idx => this.state.questionLst[idx]));
    
    this.setState({
      userAskedQuestion: Array.from(this.state.userAskedQuestion, 
        idx => this.state.questionLst[idx])
    });
  };

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

  componentDidMount () {
    this.setState({
      userAskedQuestion: Array.from(this.state.userInfo.askekQuestionID),
      detailedInfo:this.state.userInfo.detailedInfo,
      userName: this.state.userInfo.userName
    });
    // console.log(this.state.userAskedQuestion);

   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '我的'
  }

    
  render () {
    this.getUserAskedQuestionList();
    const {
      userInfo,
      userAskedQuestion,
      userName,
      detailedInfo,
    } = this.state;
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
