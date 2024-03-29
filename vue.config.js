const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint
  productionSourceMap: false,//去除Map文件

  devServer: {
    // 代理服务器
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',

      }
    }
  },

  publicPath: './',
  // 打包输出文件夹名
  outputDir: 'docs',
})
