const Express = require('express')
const app = new Express();
const sleep = () => new Promise(resolve => setTimeout(function(){resolve(1)}, 2000))
const port = 3000

function f1(req, res, next) {
  console.log('f1 start ->');
  next();
  console.log('f1 end <-');
}

function f2(req, res, next) {
  console.log('f2 start ->');
  next();
  console.log('f2 end <-');
}

async function f3(req, res) {
  await sleep();//Express 中间件实现是基于 Callback 回调函数同步的，它不会去等待异步（Promise）完成。在 Koa 的中间件机制中使用 Async/Await（背后全是 Promise）以同步的方式来管理异步代码，它则可以等待异步操作
  console.log('f3 service...');
  res.send('Hello World!')
}

app.use(f1);
app.use(f2);
app.use(f3);
app.get('/', f3)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))