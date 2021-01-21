
const Koa = require('koa');
const app = new Koa();

/*
const axios = require('axios');

app.use( (ctx, next) => {
  let t1 = Date.now();
  // await-  求值表达式、阻塞线程
  const res = axios.get('https://www.jd.com');
  console.log(Date.now() - t1 );
  ctx.body = 'hello world';
});

app.listen(3000);
*/


const path = require('path');

const cors = require('koa2-cors');
// 允许跨域
app.use(cors());

//对传入的请求体进行解析
const bodyParser = require("koa-bodyparser"); 
app.use(bodyParser());

const RouterInitManager = require('./router-init');
RouterInitManager.initCore(app);

app.listen(3000, () => {
    console.log('*********[Service] starting at port 3000 ***********');
})