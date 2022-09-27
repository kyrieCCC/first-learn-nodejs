const router = {
    '/': function (response, params) {
        console.log('params', params)
        response.end('hello world!')
    }
}


module.exports = {
    router
}