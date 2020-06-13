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
