const fs = require('fs')
const filepath = require('path').join(__dirname, './1124')
const aimPath = require('path').join(__dirname, './writemd')

fs.open(filepath, (err, fd) => {
    if (err) {
        console.log(err)
    }
    fs.read(fd, (err, bytesRead, buffer) => {
        // console.log(err) 
        // console.log(buffer)
        console.log(buffer)   //读取md文件，以二进制的形式进行输出
        fs.writeFile(aimPath, buffer, (err) => {
            console.log(err)
        })
    })
})