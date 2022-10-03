const { getUserById } = require('../database/database')
const { jwtCreateSv } = require('../middleware/jwt')


async function getUser(username, password) {
    // if (User[username] && User[username].password === password) {
    //     return User[username]
    // }
    // return null
    const rows = await getUserById(username)
    if (rows.length !== 1) {
        return null
    }
    const user = rows[0]
    if (user.password === password) {
        const token = jwtCreateSv(user)
        return {...user, token}
    }
    return null
}

module.exports = {
    getUser
}