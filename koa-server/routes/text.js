const router = require('koa-router')()
const articleList = require('../static/article/articleList.json')

router.prefix('/text')

router.post('/getText', function (ctx, next) {

  let isToken = ctx.request.header.authorization == ctx.session.token
  if (isToken) {
    ctx.body = {
      isToken,
      code: 1,
      articleList
    }
  } else {
    ctx.status = 401
  }

})




module.exports = router
