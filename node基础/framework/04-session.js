const session = require('koa-session');
const Koa = require('koa');
const app = new Koa();

app.keys = ['some secret hurr']; //应用的唯一标识，当signed【数字签名】：true，去计算前面的加密方式

const CONFIG = {
  key: 'koa.sess', //cookie名称
  maxAge: 86400000, //多少毫秒过期
  autoCommit: true, /** 自动保存session更改，如果为false需要自己手动更改，建议默认值 */
  overwrite: true, /** 未实现*/
  httpOnly: true, /** 不可以使用js操作cookie，安全考虑 */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** 每次都重置过期事件 */
  renew: false, /** cookie临近过期，重置一下新的过期时间给cookie */
  secure: false, /** https下使用 */
  sameSite: null, /** CROS, strict必须要求同站的cookie，不同站的不行 */
};

app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));

app.use(ctx => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;

  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});


/**
 * cookie存储在客户端  4KB 不安全  由服务器maxAge来设置，expires日期对象
 * session 存在服务器  很大  安全  内存离开丢失，使用数据库存储
 * 
 */