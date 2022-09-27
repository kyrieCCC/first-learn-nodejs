const Koa = require('koa')
const server = new Koa();
const { router } = require('./src/router/router')
const cors = require('@koa/cors')

server.use(cors())

server
    .use(router.routes())
    .use(router.allowedMethods())


server.listen(8080, () => {console.log('server is listening on http://localhost:8080')})