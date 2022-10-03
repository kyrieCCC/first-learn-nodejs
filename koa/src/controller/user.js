const { getUsers } = require('../service/service')

async function getUserAll(ctx) {
    const row = await getUsers()
    ctx.body = {
        success: true,
        data: row
    }
}


module.exports = {
    getUserAll
}