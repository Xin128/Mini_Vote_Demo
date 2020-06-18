module.exports = {
  env: {
    NODE_ENV: '"production"'
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
  h5: {
    // webpackChain (chain) {
    //     chain.plugin('analyzer')
    //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    //   }
    //  * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
    //  * 参考代码如下：
    //  * webpackChain (chain) {
    //  *   chain.plugin('analyzer')
    //  *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    //  * }
  }
}
