// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const MAX_LIMIT = 100
  const wxContext = cloud.getWXContext()

const countResult = await db.collection('test').where({date: _.gte(db.serverDate({
  offset: -604800000
}))}).count()
console.log(countResult)
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  let polls = []
  for (let i = 0; i < batchTimes; i++) {
    let res = await db.collection('test').where({date: _.gte(db.serverDate({
      offset: -604800000
    }))}).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    console.log(res)
    polls.push(...res['data'])
  }

  for (poll of polls){
    let hotValue = poll['numLikes'] + poll['numReplies'] + poll['numVolts'] + poll['numVotes']
    let s = poll['_id']
      poll['hotIndex'] = hotValue
  
      await db.collection('test').doc(s).update({
        data: {
          hotIndex: hotValue
        }
      })
  }
  
  polls.sort((a, b) => b['hotIndex'] - a['hotIndex'])

  polls.splice(100)

  polls = polls.map(x => x['_id'])

  await db.collection('Computed').doc('a81822d65f0082450049f46057ec5d11').update({
    data: {
      top100ids: polls
    }
  })

  return polls
}