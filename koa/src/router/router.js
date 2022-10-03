const Router = require("@koa/router");
const router = new Router();
const { loginCheck } = require("../controller/controller.js");
const { upLoadController } = require("../controller/upload");
const { getUserAll } = require('../controller/user')

router.post("/login", loginCheck);
router.post("/upload", upLoadController);
router.post("/user/all", getUserAll)

module.exports = {
  router,
};
