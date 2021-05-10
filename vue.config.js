const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.devtool('eval-source-map')
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('store', resolve('src/store'))
      .set('views', 'src/views')

    // 彻底懒加载
    // config.plugins.delete('prefetch')
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:7878',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
