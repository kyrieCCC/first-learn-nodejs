const Koa = require('koa')
const server = new Koa();
const { router } = require('./src/router/router')
const cors = require('@koa/cors')
const koabody = require('koa-body')
const Path = require('path')
const { errorHandle } = require('./src/middleware/error')
const { jwtValidateMd } = require('./src/middleware/jwt')


// server.use(errorHandle)
server.use(cors())
server.use(jwtValidateMd) //进行JWT登录验证

server.use(koabody({
    multipart: true, //将正文进行分析
    encoding: 'utf-8', //使用UTF-8进行解析
    formidable: {
        uploadDir: Path.join(process.cwd()),  // 上传目录, 默认放置于启动程序的根目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 10485760   // 默认文件大小10mb
    }
}))

server
    .use(router.routes())
    .use(router.allowedMethods())


server.listen(8080, () => {console.log('server is listening on http://localhost:8080')})