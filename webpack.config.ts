import path from 'path';
import MyPlugin from './plugins/MyPlugin';

export default {
  // 开发模式，方便观察打包结果
  mode: 'development',

  // 入口文件
  entry: './src/index.ts',

  // 输出配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 解析模块
  resolve: {
    extensions: ['.ts', '.js'],
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
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
}