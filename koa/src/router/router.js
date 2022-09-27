const Router = require("@koa/router");
const router = new Router()
const { loginCheck } = require("../controller/controller.js");

router.post('/login', loginCheck)

module.exports = {
    router
}