import Taro, { Component } from '@tarojs/taro'
import { View, Text, AtInput, AtButton } from '@tarojs/components'
import { AtLoadMore, AtAvatar, AtTag, AtDivider, AtRadio, AtCountdown,AtIcon  } from 'taro-ui'
import './pollDetail.scss'
import { questionLst, userList } from '../data/question.js';


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
        totalVotes: this.state.totalVotes + 1,
        comment: n,
        answered: true,
        selected: parseInt(e.currentTarget.id)
      };
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
      questionId: qId,
      questionTitle: qInfo.quetionTitle,
      detailedInfo: qInfo.detailedInfo,
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
      <View className='at-article'>
        <View className='at-article__h1'>
          {questionTitle}
        </View>


        <View className='at-article__p at-row at-row__align--end at-row__justify--between'>
          <View className='at-col '>
          <AtIcon value='user' size='30' ></AtIcon>           
          </View>
          
          <View className='at-col'>
            <AtCountdown
              isCard
              isShowDay
              day={2}
              hours={1}
              minutes={2}
            />
          </View>

        </View>

        <View className='at-article__content'>

          <View className='at-article__section'>

            <View className='at-article__p'>
              {detailedInfo}
            </View>
          </View>
          <AtDivider  height='20'/>
          <AtRadio
        options={[
          { label: '单选项1', value: 'option1', desc: '单选项描述' },
          { label: '单选项2', value: 'option2' },
          { label: '单选项3', value: 'option2' },
        ]}
        value={0}
        onClick={e => console.log(e)}
      />
        </View>
      </View>
    )
  }
}
