const http = require('http')
const { url } = require('inspector')
const { router } = require('./router.js')

const server = http.createServer((request, response) => {
    //可以在这个函数内操作处理请求与响应
    //1.请求
    //可以从request拿到并且操作请求
    //2.响应
    //从response拿到并且操作相应
    // response.end('hello my first http server')



    //二.后端router
    const urlData = parserUrl(request.url)
    const aimController = router[urlData.path]
    if (aimController) {
        aimController(response, urlData.params)
    } else {
        response.end('no such url params')
    }
})

function parserUrl(url) {
    const queryParams = url.split('?')
    let params = null

    if (queryParams.length > 1) {
        params = queryParams[1].split('&').map((item) => {
            const tempKey = item.split('=')
            return{[tempKey[0]]:[tempKey[1]]}
        })
    }
    return {
        path: queryParams[0],
        params,
    }
}


server.listen(8080, '192.168.0.106', () => { console.log('network http://192.168.0.106:8080') })
//监听主机hostname上的8080端口，并在服务器启动时执行箭头函数，打印出目标的网址