const router = require('koa-router')()
const jwt = require('jsonwebtoken')
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
  // 生成token
  let token = jwt.sign({ name, id }, 'secret', { expiresIn: '120' })
  ctx.body = {
    token: token,
    code: 1
  }
})

// router.get('/getUser', async ctx => {
//   let id = ctx.query.id
//   ctx.body = {
//     user: ctx.payload,
//     id,
//     code: 1
//   }
// })

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
