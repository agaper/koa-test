const Router = require("koa-router");
let router = new Router({
  prefix: '/api/v2'
});

router.get('/article/list', (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      name: 'this is article list api for version v2'
    }
  };
});

module.exports = router;