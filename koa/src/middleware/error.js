async function errorHandle(ctx, next) {
    try {
        await next()
    } catch(error) {
        console.log(error)
        ctx.body = '后端报错了'
    }
}


module.exports = {
    errorHandle,
}