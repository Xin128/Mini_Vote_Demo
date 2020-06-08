import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtIcon } from 'taro-ui';
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
        test: ["疫情期间，留学生要不要回国？", "程序员面试需要刷leetcode吗?", "疫情期间，能点外卖吗?"]
    }
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
        <View className="container">
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
          <View className="vote">
          {test.length > 0 && (
          test.map((item) => {
            console.log(item);
              return (
              <Text>{item}</Text>

                  //     <View className="tab-content-recommend" key={index}>
                  //       <View className="content-category">
                  //         <Image className="category-avatar" src={item.avatar} />
                  //         <Text className="category-title">{item.author}</Text>
                  //       </View>
                  //       <View
                  //         className="recommend-title"
                  //         data-id={item.id}
                  //         data-title={item.title}
                  //         onClick={this.goTitleDetail}>
                  //         {item.title}
                  //       </View>
                  //       <View
                  //         className="recommend-content"
                  //         data-id={item.id}
                  //         data-title={item.title}
                  //         data-avatar={item.avatar}
                  //         data-content={item.fineAnswer.content}
                  //         data-like={item.fineAnswer.like}
                  //         data-time={item.fineAnswer.time}
                  //         data-comment={item.fineAnswer.comment}
                  //         onClick={this.goContentDetail}>
                  //         {item.fineAnswer.content}
                  //       </View>
                  //       <View className="recommend-footer">
                  //         <View className="recommend-footer-text">
                  //           <Text>
                  //             {item.fineAnswer.like +
                  //               (item.from == 'live' ? '感兴趣' : '赞同') +
                  //               ' · ' +
                  //               item.fineAnswer.comment +
                  //               (item.from == 'live' ? '人参与' : '评论')}
                  //           </Text>
                  //           {item.from && <Text>{'· ' + footerTip[item.from]}</Text>}
                  //         </View>
                  //       </View>
                  //     </View>
                    );
                  })
          )}
          </View>
          
          {test.length == 0 && (
                <View>
                  <View className="to-recommend-title">还没提出问题</View>
                  <View className="to-recommend-tip">去提出新的问题吧</View>
                </View>
              )}
        </View>
      </View>
    )
  }
}
