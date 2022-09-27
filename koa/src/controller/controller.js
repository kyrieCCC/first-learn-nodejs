const { getUser } = require("../service/service");

async function loginCheck(ctx) {
  const { username, password } = ctx.query;
  const userinfo = await getUser(username, password);
  if (userinfo) {
    ctx.body = {
      success: true,
      data: userinfo,
    }
  } else {
    ctx.body = {
      success: false,
      data: {
          msg: "该用户不存在",
          msg2: username, password
      },
    }
  }
}

module.exports = {
  loginCheck,
};
