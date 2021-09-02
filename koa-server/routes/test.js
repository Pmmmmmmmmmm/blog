const router = require('koa-router')()

router.prefix('/test')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users re123123sponse!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/axiosTest', function (ctx, next) {

  ctx.body = {
    code: 1,
    postParams: ctx.request.body
  }
})


module.exports = router
