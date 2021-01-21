const Router = require("koa-router");

let router = new Router({
  prefix: '/api'
});

router.post('/upload/pic', (ctx, next) => {
  console.log( ctx.request.body );
});

module.exports = router;