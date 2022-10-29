const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path')
const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});

const users = [{name: 'Green'}, {name: '俞敏洪'}, {name: '欧阳震华'}]
app.use(async function (ctx) {
  await ctx.render('user', {
    users
  });
});

app.listen(8080);

/**
 * 客户端渲染：不利于SEO
 * 服务端渲染：利于SEO优化
 * 
 * 为什么有了服务端渲染，还要出来客户端渲染？
 * 页面加载白屏，ajax局部刷新的优势也没有了，用户体验差。
 * 
 * 如果过多的客户端渲染，也会带来首屏白屏等现象
 * 解决方法：懒加载 骨架屏 CDN+SSR服务端渲染
 * 
 */