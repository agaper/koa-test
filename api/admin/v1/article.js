const jwt = require('jsonwebtoken');

const Router = require("koa-router");
const Prefix = require('../prefix');
const ArticleService = require('../../../service/article');

let router = new Router({
  prefix: Prefix.AdminPrefixV1 + '/article'
});

// 测试
router.get('/test', async (ctx, next) => {
  let res = jwt.sign( '123123', 'token' );
  // ctx.body = {
  //   code: 0,
  //   msg: 'ok',
  //   data: {
  //     jwt: res,
  //     jwt2: res,
  //     name: 'this is article list api'
  //   }
  // };
  ctx.body = `
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <h1>hello world </h1>
      </body>
    </html>
  `;
});

// 增
router.post('/create', async (ctx, next) => {
  const res = await ArticleService.create(ctx.request.body);
  ctx.body = {
    code: 0,
    msg: 'ok',
    res
  };
})

// 删除
router.post('/del/:id', async (ctx, next) => {
  let res = null;
  if( ctx.request.params.id ){
    const data = await ArticleService.del(ctx.request.params.id);
    res = {
      code: 0,
      msg: 'ok',
      data
    };
  }else{
    res = {
      code: -1,
      msg: 'error'
    };
  }
  ctx.body = res;
});

// 改
router.post('/update', async (ctx, next) => {
  const res = await ArticleService.update(ctx.request.body.id, ctx.request.body);
  ctx.body = {
    code: 0,
    msg: 'ok',
    res
  };
});

// 查得数组
router.get('/list', async (ctx, next) => {
  const res = await ArticleService.list();
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: res
  };
});

// 查得一个元素
router.get('/item/:id', async (ctx, next) => {
  let res = null;
  console.log(ctx.request.params);
  if( ctx.request.params.id ){
    const data = await ArticleService.getOne(ctx.request.params.id);
    res = {
      code: 0,
      msg: 'ok',
      data
    };
  }else{
    res = {
      code: -1,
      msg: 'error'
    };
  }
  ctx.body = res;
});

 

module.exports = router;