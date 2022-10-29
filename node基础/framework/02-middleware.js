const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('响应头处理')
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log('X-Response-Time', `${ms}ms`)
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('日志处理')
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  console.log('响应处理')
  ctx.body = 'Hello World';
});

app.listen(3000,() => {
    console.log('中间件学习：3000')
});