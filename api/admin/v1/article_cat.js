const Router = require("koa-router");
const Prefix = require('../prefix');
const ArticleCatService = require('../../../service/article_cat');

let router = new Router({
  prefix: Prefix.AdminPrefixV1 + '/article_cat'
});


// 增
router.post('/create', async (ctx, next) => {
  const res = await ArticleCatService.create(ctx.request.body);
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
    const data = await ArticleCatService.del(ctx.request.params.id);
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
  const res = await ArticleCatService.update(ctx.request.body.id, ctx.request.body);
  ctx.body = {
    code: 0,
    msg: 'ok',
    res
  };
});

// 查得数组
router.get('/list', async (ctx, next) => {
  const res = await ArticleCatService.list();
  ctx.body = {
    code: 0,
    msg: 'ok',
    res
  };
});

// 查得一个元素
router.get('/item/:id', async (ctx, next) => {
  let res = null;
  console.log(ctx.request.params);
  if( ctx.request.params.id ){
    const data = await ArticleCatService.getOne(ctx.request.params.id);
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