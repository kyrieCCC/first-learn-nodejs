const path = require('path')

console.log(path.join(__dirname, 'test')) //查找当前文件位置下的test文件夹，静态
//D:\vue\first-nodejs\path\test

console.log(path.resolve('test')) //查找当前控制台文件下的test，动态的查找
//D:\vue\test（在vue文件下进行控制）