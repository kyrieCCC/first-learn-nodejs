const fs = require('fs')

fs.open(require('path').join(__dirname, './md'), (err, fd) => {
    if (err) {
        console.log(err)
    }
    fs.read(fd, (err, buffer, bytesRead) => {
        // console.log(err)
        // console.log(buffer)
        console.log(bytesRead)   //读取md文件，以二进制的形式进行输出
    })
})