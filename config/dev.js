module.exports = {
  env: {
    NODE_ENV: '"development"'
  },

    //webpack配置
	configureWebpack: {
    // //关闭 webpack 的性能提示
    performance: {
      hints:false
    }
  },

  defineConstants: {},
  mini: {},
  h5: {}
}

// 线上环境
module.exports = {
  env: {
      NODE_ENV: '"minivote"' // 申请的微信小程序云开发资源id
  },
  defineConstants: {
  },
  weapp: {},
  h5: {}
}
