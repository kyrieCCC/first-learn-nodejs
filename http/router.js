const { saveFile } = require('./util.js')
const router = {
    '/': function (response, params) {
        console.log('params', params)
        response.end('hello world!')
    },
    '/upload': function (res, req, query) {
        const fileName = query.filename[0] || 'not such fileName.jpg'
        const writableStream = saveFile(fileName)
        req.pipe(writableStream)
        req.on('data', (chunk) => {
            console.log(chunk.toString('utf-8'))
        })
        res.end('data read success')
    }
}


module.exports = {
    router
}