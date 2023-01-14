// 练习读流
const aimFile = require('node:path').join(__dirname, '/upup.jpg')
const process = require('node:process')
const fs = require('node:fs')
console.log(aimFile)

//创建可读流
const fileStream = fs.createReadStream(aimFile)

//通过监听获取到需要读的文件的buffer
// fileStream.on('data', (chunk) => {
//     console.log(chunk) //打印读到的值
// })

//文件读取完成后需要做出的反应
fileStream.on('close', () => {
    console.log('文件读取完成')
})

//通过pipe将文件读取到的内容放到任意一个可写流
//1. 将文件放到控制台中进行打印
//但是控制台会将我们的文件的buffer转换为字符串，会出现乱码的情况
// fileStream.pipe(process.stdout)

//2. 将文件放到一个新的文件中