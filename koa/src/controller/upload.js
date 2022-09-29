async function upLoadController(ctx) {
    console.log(ctx.request.body) 
    console.log(ctx.request.files)
    ctx.body = ctx.request.body
}

module.exports = {
     upLoadController
}