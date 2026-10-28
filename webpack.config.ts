import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MyPlugin from './plugins/MyPlugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        test: /\.ts$/,
        use: [
          path.resolve(__dirname, 'loaders/first-loader.ts'),
          path.resolve(__dirname, 'loaders/second-loader.ts'),
          'ts-loader'
        ],
        exclude: /node_modules/,
      }
    ],
  }
}