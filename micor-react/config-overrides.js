const { name } = require('./package.json');
const path = require('path')

module.exports = {
  webpack (config) {
    config.output.library = name
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, 'src')
    }

    return config
  },
  devServer (configFunc) {

    return function (proxy, allowedHost) {
      const config = configFunc(proxy, allowedHost)
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true;
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // 配置 history 模式
      config.historyApiFallback = true;

      return config
    }
  }
}