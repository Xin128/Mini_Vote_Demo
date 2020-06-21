import Taro, { Component } from '@tarojs/taro'
import { View, Text,  Textarea } from '@tarojs/components'
import { AtCard, AtInput, AtLoadMore, AtAvatar, AtTag, AtDivider, AtRadio, AtCountdown,AtIcon, AtButton, AtTextarea, AtCheckbox, AtProgress  } from 'taro-ui'
import './pollDetail.scss'
import { questionLst, userList } from '../data/question.js';


export default class Polldetail extends Component {

  constructor() {
    super(...arguments);
    this.state = {

      options: [{
        value: '1',
        label: 'iPhone X',
        desc: '部分地区提供电子普通发票。',
        votes: 1
      },{
        value: '2',
        label: 'HUAWEI P20',
        desc: '部分地区提供电子普通发票。',
        votes: 3
      },{
        value: '3',
        label: 'HUAWEI P20',
        desc: '部分地区提供电子普通发票。',
        votes: 2
      }],
      singleOptionSelected: '0',
      multipleOptionSelected: [],
      hasVoted: false,
      questionId: 3,
      questionTitle: "",
      detailedInfo: "",
      totalUserVoted: 4,
      questionStatus: 1,
      comments: 
      {
        '0': {
            'userID00001': {
              username: 'usernaem1',
              content: 'i like both but 1 is better',
              date: '2019-01-01',
              upvotes: ['userid2, userid3, userid4'],
            },
            'userID00002': {
              username: 'username2',
              content: 'i like both but 1 is better',
              date: '2019-01-01',
              upvotes: ['userid2, userid3, userid4'],
            }
        },
        '1': {
          'userID00001': {
            content: 'i like both but 1 is better',
            date: '2019-01-01',
            upvotes: ['userid2, userid3, userid4'],
          },
          'userID00002': {
            content: 'i like both but 1 is better',
            date: '2019-01-01',
            upvotes: ['userid2, userid3, userid4'],
          }
        }
      },
      dateAsked: "2020-05-22",
      timeLimit: "00.02.00",
      askedUserId: 6,
      answered: false,
      ownComment: "",
      allowMultiple: false
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
  hasValidSelection = () => {
    return true
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
  handleChangeMultiple = e => {
    console.log(e)
    this.setState({multipleOptionSelected: e})
  }
  handleClickSingle = e => {

    this.setState({singleOptionSelected: e[0]})

  }
  handleSubmit = e => {
    this.setState({hasVoted:true})
  }

  render() {


    return (
      <View>
      <AtCard 
      title={this.state.askedUserId + '的投票'}
      thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
       <Text className='questionTitle'>
         {this.state.questionTitle}
       </Text>
       <View className='at-row at-row__align--end at-row__justify--between'>
          <View className='at-col '>
          <Text className='dateAsked'>
         {this.state.dateAsked}
       </Text>
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
        <AtTextarea className='detailedInfo'
        value={this.state.detailedInfo} maxLength={200} 
        count={false}
        height={300}
        disabled>
        </AtTextarea>
      
        <View className={'single ' + (!this.state.allowMultiple && !this.hasVoted ? 'show' : 'hide')}>
        <AtRadio
        options={this.state.options}
        onClick={this.handleClickSingle.bind(this)}
        value={this.state.singleOptionSelected}
      />
       </View>
        <View className={'multiple ' + (this.state.allowMultiple && !this.hasVoted ? 'show' : 'hide')}>
        <AtCheckbox
        options={this.state.options}
        selectedList={this.state.multipleOptionSelected}
        onChange={this.handleChangeMultiple.bind(this)}
      />
        </View>
        <AtButton 
          type='primary' 
          className={'voteButton ' + (!this.state.hasVoted ? 'show' : 'hide')}
          onClick={this.handleSubmit.bind(this)}
          disabled={!this.hasValidSelection() }
        >
          提交
        </AtButton>
        <View className={'percentages ' + (this.state.hasVoted ? 'show' : 'hide')}>
        {this.state.options.map((value) => {
          return (<View>
            <Text>
              {value.label}
            </Text>
            <AtProgress percent={value.votes*100/this.state.totalUserVoted} />
          </View>)
        })}
        </View>
        <View className={'comments ' + (this.state.hasVoted ? 'show' : 'hide')}>
        {Object.entries(this.state.comments).map(x=> {
          return (<AtCard
            extra={Object.keys(x[1]).length + '条'}
            title={'支持'+this.state.options[x[0]].label+'的评论'}
          >
            {Object.values(x[1]).map(value => {
              return (
                <View className='comment'>
                    <Text>{value.content}</Text>
                    <Text>{value.date}</Text>
                    <Text>{value.upvotes.length + '个人对这条评论点了赞（等下替换成icon）'}</Text>
                    <AtDivider></AtDivider>
                </View>
              )
            })}
          </AtCard>)
        })}
        </View>

        

      </AtCard>
      </View>
    )
  }
}
