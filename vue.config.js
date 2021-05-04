const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('api', resolve('@/api'))
    .set('assets', resolve('@/assets'))
    .set('components', resolve('@/components'))
    .set('store', resolve('@/store'))
    .set('views', '@/views')
    
    // 彻底懒加载
    // config.plugins.delete('prefetch')
  },
  devServer: {
    open: true,
    // proxy: {
    //   '/api': {
    //     // target: '', 
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
