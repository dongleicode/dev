const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(5000, () => {
    console.log('服务器启动端口5000')
});