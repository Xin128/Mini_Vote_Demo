import Taro, { Component } from '@tarojs/taro'
import { View, Text, AtInput, AtButton } from '@tarojs/components'
import './pollDetail.scss'
import {questionLst, userList} from '../data/question.js';

export default class Polldetail extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      questionId: 3,
      questionTitle: "",
      detailedInfo: "",
      options: [["应该", 3], ["不应该", 6], ["不知道", 1]],
      totalVotes: 10,
      questionStatus: 1,
      comment: [["bi xu dei shua", 1], ["bie lang fei shi jian", 0], ["tong wen", 1]],
      dateAsked: "2020-05-22T18:03:20.002",
      timeLimit: "00.02.00",
      askedUserId: 6,
      answered: false,
      selected: -1,
      ownComment: ""
    }
  }

  chooseVote = e => {
    let that = this;
    that.setState((state, props) => {
      let n = [...state.options]
      n[parseInt(e.currentTarget.id)][1] += 1
      return { 
              totalVotes:this.state.totalVotes+1,
              comment: n, 
              answered: true, 
              selected: parseInt(e.currentTarget.id)};
    });
  }

  submitOwnComment = e => {
    // console.log("submit " + this.state.ownComment)
  }
  updateOwnComment = e => {
    // console.log(e)
  }
  componentWillMount() {
    // TODO: actual set the state
  }

  componentDidMount(options = this.$router.params) {
    var qId = options.question_id;
    var qInfo = questionLst[qId];
    this.setState({
      questionId:qId,
      questionTitle: qInfo.quetionTitle,
      detailedInfo : qInfo.detailedInfo,
    })
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    console.log("render called");
    const {
      questionId,
      questionTitle,
      detailedInfo
    } = this.state;

    return (
      <View className='container'>
        <Text> {questionTitle} </Text>
        <Text> {detailedInfo} </Text>
        <View className='options-list'>
          {this.state.options.map((item, index) => {
            return (
              <View className="option-li" id={index} onClick={this.chooseVote.bind(this)}>
                <View className="image-box"></View>
                <View className="option-content-wrapper">
                  <View className={"percentage-bar " + (this.state.answered ? 'show' : 'hide') 
                  + (this.state.selected == parseInt(index) ? ' selected' : ' unselected')} 
                  style={{ width: item[1] / this.state.totalVotes * 100 + "%" }}>
                  </View>
                  <View className="desc">
                    <View className="option-text">{item[0]}</View>
                    <View className={"option-vote " + (this.state.answered ? 'show' : 'hide')}>{item[1]} votes</View>
                  </View>
                  <View className={"vote-percentage " + (this.state.answered ? 'show' : 'hide')}> {item[1] / this.state.totalVotes * 100 + "%"}</View>
                </View>
              </View>)
          })}
        </View>
        {/* <View className='comments-list'>
          {this.state.comments.map((item, index) => {
            return (
              <View className="comment-li" id={index} onClick={this.upvoteComment.bind(this)}>

              </View>
            )
          })}
        </View> */}
     
          

      </View>


    )
  }
}
