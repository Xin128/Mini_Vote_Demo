import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtIcon, AtAccordion, AtFloatLayout, AtTextarea} from 'taro-ui';
import { Block, View, Text } from '@tarojs/components'
import './userCenter.scss'
import {questionLst, userList} from '../data/question.js';

export default class Usercenter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        userId : 3,
        userInfo: userList[3],
        userAskedQuestion: [],
        questionLst:questionLst,
        openQuestion: false,
        openVote: false,
        openEdit: false,
        detailedInfo: ""
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

  handleEdit() {
    this.setState({
      openEdit: true
    })
  }

  changeDetailedInfo (value) {
    this.setState({
      detailedInfo: value
    })
  }

  closeEdit() {
    this.setState({
      openEdit: false
    })
  }
  selectAskedQuestions(userId) {
    return userList[userId].askekQuestionID.slice(1,-1).split(",").map(queID => questionLst[parseInt(queID)]);
  }

  selectVotedQuestions(userId) {
    return userList[userId].votedQuestionIDresult.slice(1,-1).split(",").map(queID => questionLst[parseInt(queID)]);
  }

  componentWillMount () {     
  }

  componentDidMount () {
    this.setState({
      detailedInfo:this.state.userInfo.detailedInfo,
      userName: this.state.userInfo.userName
    });
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
      userName,
      detailedInfo,
      openEdit
    } = this.state;
    const userAskedQuestion = this.selectAskedQuestions(this.state.userId);
    const userVotedQuestion = this.selectVotedQuestions(this.state.userId);  
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
                  <AtIcon value='edit' size='20' color='#11040470' onClick={this.handleEdit.bind(this)}>
                </AtIcon>
                </View>
                <View className="userinfo-tip"> 
                    <Text> {detailedInfo}
                    </Text>
                  </View>
              </View>
            </View>
          </View>
          <View className={'editField'+ openEdit ? 'show' :'hide'}>
            <AtFloatLayout isOpened={openEdit} title="修改个人简介" onClose={this.closeEdit.bind(this)}>
              <AtTextarea value={this.state.detailedInfo} onChange={this.changeDetailedInfo.bind(this)}
                          maxLength={20} placeholder="我就是我，不一样的烟火……" ></AtTextarea>
            </AtFloatLayout>
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
            userVotedQuestion.length > 0 && (
              userVotedQuestion.map((item) => {
                return (
                  <AtListItem
                      title={item.quetionTitle}
                      arrow='right'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />);
                  })
                  )
                  }
            </AtList>
            </AtAccordion>
          </View>
        
      </View>
    )
  }
}
