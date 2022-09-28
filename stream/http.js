const http = require('http')
const path = require('path')
const aimSourceFile = path.join(__dirname, './upup.jpg')
const fs = require('fs')
const downLoadStream = fs.createReadStream(aimSourceFile)

const server = http.createServer((req, res) => {
    const fileInfo = fs.statSync(aimSourceFile)
    res.setHeader('Content-Length', fileInfo.size)
    const fileName = '好看的photo'
    const fileNameURI = encodeURI(fileName)
    res.setHeader('Content-Disposition', `attachment;filename=${fileNameURI}.png`) //设置是否为附件
    res.setHeader('Content-Type', 'image/jpg') //文件的类型
    downLoadStream.pipe(res)
})

server.listen(8081, () => {console.log("server is listening at http://localhost:8081")})