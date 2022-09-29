const Router = require("@koa/router");
const router = new Router();
const { loginCheck } = require("../controller/controller.js");
const { upLoadController } = require("../controller/upload");

router.post("/login", loginCheck);
router.post("/upload", upLoadController);

module.exports = {
  router,
};
