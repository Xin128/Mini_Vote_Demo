// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  for (let i=0;i<200;i++) {
    await db.collection('test').add({
      data: {
        date: new Date("2020-06-29"),
        numVotes: Math.floor(Math.random() * Math.floor(1000)),
        numLikes: Math.floor(Math.random() * Math.floor(1000)),
        numVolts: Math.floor(Math.random() * Math.floor(1000)),
        numReplies: Math.floor(Math.random() * Math.floor(1000)),
        hotIndex: 0
      }
    })

  }

  return 0
}