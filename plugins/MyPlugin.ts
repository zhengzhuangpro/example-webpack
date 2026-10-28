import type { Compiler } from 'webpack';

class MyPlugin {
  apply(compiler: Compiler): void {
    console.log('MyPlugin 已初始化');

    // 监听 Webpack 构建完成事件
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      console.log('Webpack 构建完成');

      if (stats.hasErrors()) {
        console.log('构建存在错误');
      } else {
        console.log('构建成功');
      }
    });
  }
}

export default MyPlugin;