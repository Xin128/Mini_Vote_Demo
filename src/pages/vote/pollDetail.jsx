import Taro, { Component } from '@tarojs/taro'
import { View, Text, AtInput, AtButton } from '@tarojs/components'
import './pollDetail.scss'
import {questionLst, userList} from '../data/question.js';

export default class Polldetail extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      questionId: 3,
      questionTitle: "研究生毕业，应该读博士吗",
      detailedInfo: "马上12月研究生毕业，现在面临12月份毕业工作和申请明年21年的博士。本人对于科研并没有很高的热情，但是因为博士可以带来更高的起点和更好的职业道路，再加上因为疫情影响，现在找工作也比较困难，所以申请博士的念头冒了出来。可是心啊刚到博士四五年之后才能毕业，所以还是很纠结",
      options: [["应该", 3], ["不应该", 6], ["不知道", 1]],
      totalVotes: 10,
      questionStatus: 1,
      comment: [["bi xu dei shua", 1], ["bie lang fei shi jian", 0], ["tong wen", 1]],
      dateAsked: "2020-05-22T18:03:20.002",
      timeLimit: "00.02.00",
      askedUserId: 6,
      answered: false,
      selected: -1,
      ownComment: "",
    }
  }
  chooseVote = e => {
    this.setState((state, props) => {
      let n = [...state.options]
      n[parseInt(e.currentTarget.id)][1] += 1

      return { comment: n, answered: true, selected: parseInt(e.currentTarget.id) };
    });
  }
  submitOwnComment = e => {
    // console.log("submit " + this.state.ownComment)
  }
  updateOwnComment = e => {
    // console.log(e)
  }
  componentWillMount(options = this.$router.params) {
    console.log(options.question_id);
    this.setState({
      questionId:options.question_id
    });
    console.log("already set state");
    console.log(this.state.questionId);

    // TODO: actual set the state
  }

  componentDidMount() {
    console.log("actaully set?");

    this.setState({
      questionTitle: questionLst[this.state.questionId].questionTitle 
    })
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '首页'
  }

  render() {

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
                  <View className={"percentage-bar " + (this.state.answered ? 'show' : 'hide') + (this.state.selected == parseInt(index) ? ' selected' : ' unselected')} style={{ width: item[1] / this.state.totalVotes * 100 + "%" }}></View>
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
