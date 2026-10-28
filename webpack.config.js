const path = require('path');
const MyPlugin = require('./MyPlugin');

module.exports = {
  // 开发模式，方便观察打包结果
  mode: 'development',

  // 入口文件
  entry: './src/index.js',

  // 输出配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 插件
  plugins: [new MyPlugin()],

  // 模块
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve(__dirname, 'loaders/first-loader.js'),
          path.resolve(__dirname, 'loaders/second-loader.js'),
        ]
      }
    ],
  }
};