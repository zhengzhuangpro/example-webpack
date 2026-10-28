//
class MyPlugin {
  // 添加一个构造函数
  apply(compiler) {
    // 注册一个emit事件
    compiler.hooks.emit.tap('MyPlugin', (compilation) => {
      console.log('emit');
    })

    // 注册一个done事件
    compiler.hooks.done.tap('MyPlugin', () => {
      console.log('done');
    });
  }
}

module.exports = MyPlugin;