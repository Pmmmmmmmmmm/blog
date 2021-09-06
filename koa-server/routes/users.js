const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const captchapng = require('captchapng')
const secret = require('../utils/secret')



router.prefix('/users')




router.post('/getToken', async (ctx) => {
  let { name, id } = ctx.request.body
  if (!name && !id) {
    ctx.body = {
      msg: '不合法',
      code: 0,
      query: ctx.request.body
    }
    return
  }

})



router.get('/getVerification', async (ctx) => {
  var code = parseInt(Math.random() * 9000 + 1000);
  // let code = 511221
  ctx.session.captcha = code;//保存在session中，便于之后的验证码判断
  // console.log(ctx.req.session.captcha);
  var p = new captchapng(100, 30, code);
  p.color(0, 0, 0, 0);
  p.color(80, 80, 80, 255);
  var img = p.getBase64();
  var imgbase64 = Buffer.from(img, 'base64');
  ctx.response.type = "image/svg+png"

  ctx.body = imgbase64;

});

router.post('/login', async ctx => {
  let { name, passWord, verification } = JSON.parse(secret.Decrypt(ctx.request.body.loginData))
  console.log({ name, passWord, verification });
  let params

  if (
    name == 'pm' && passWord == '123' && verification == ctx.session.captcha
  ) {

    // 生成token

    let token = jwt.sign({ name, passWord }, 'secret', { expiresIn: '120' })
    ctx.session.token = token
    params = {
      msg: '登陆成功',
      token: token,
      code: 1,
    }
  } else {
    params = {
      msg: '错误',
      code: 0
    }
  }
  ctx.body = params
})

// router.get('/getAllUser', async ctx => {
//   let type = ctx.query.type
//   if (type) {
//     ctx.body = {
//       type,
//       code: 1
//     }
//   } else {
//     ctx.body = {
//       msg: '缺少参数type',
//       code: 0
//     }
//   }
// })
module.exports = router
