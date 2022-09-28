const fs = require('fs')
const filepath = require('path').join(__dirname, './md')
const aimPath = require('path').join(__dirname, './writemd')

fs.open(filepath, (err, fd) => {
    if (err) {
        console.log(err)
    }
    fs.read(fd, (err, bytesRead, buffer) => {
        // console.log(err)
        // console.log(buffer)
        console.log(buffer.toString('utf-8'))   //读取md文件，以二进制的形式进行输出
    })
})


// fs.readFile(require('path').join(__dirname, './md'), (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })