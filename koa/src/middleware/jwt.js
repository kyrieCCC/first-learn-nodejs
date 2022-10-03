const JwtToken = require('jsonwebtoken')
const ErrorMsg = require('../global/error')
const whiteList = ['/login']
const cusSecret = '0802520'

async function jwtValidateMd(ctx, next) {
    // throw Error({code: ErrorMsg.errorLog.code, msg: ErrorMsg.errorLog.msg})
    const url = ctx.url.split("?")[0]
    if (whiteList.includes(url)) {
        await next()
    }
    else {
        const token = ctx.headers.token
        if (jwtDecodeSv(token, cusSecret)) {
            await next
        }
        ctx.body = {
            success: false,
            msg: 'token验证失败'
        }
    }
}


function jwtCreateSv(content) {
    // return token = JwtToken.sign(content, secret)
    // console.log(JwtToken.sign(content, cusSecret))
    return token = JwtToken.sign({ ...content, exp: Math.floor(Date.now()) / 1000 + 60*60}, cusSecret)
}

function jwtDecodeSv(token) {
    const data = JwtToken.verify(token, cusSecret)
    return data
}

// jwtCreateSv({ name: 'wlc', lover: 'ph' }, '0802520')
// jwtDecodeSv('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2xjIiwibG92ZXIiOiJwaCIsImlhdCI6MTY2NDc3MzE2M30.XRJ4-SNaDPgwx7y8JTg9U9IiymL5wsfyd5zIcIsp0m0', '0802520')


module.exports = {
    jwtCreateSv,
    jwtDecodeSv,
    jwtValidateMd
}