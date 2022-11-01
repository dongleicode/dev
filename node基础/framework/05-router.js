const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const apiRouter = new Router()

router.get('/list', (ctx, next) => {
  // ctx.router available
  let { id } = ctx.query
  console.log(ctx.query)
  console.log(ctx.params)

  ctx.body = 'get:/'+id
});

router.post('/list/:pid', (ctx, next) => {
    // ctx.router available
    console.log(ctx.params)
    let { pid } = ctx.params
    ctx.body = 'post:/'+pid
  });

  apiRouter.use('/api', router.routes())

app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods());

app.listen(3000, () => {
    console.log('listening on port 3000');
});