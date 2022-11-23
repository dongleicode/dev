
var express = require('express')
var app = new express();
var router = require('./router/user')
var url = 'mongodb://localhost:27017/test'
var mongoose = require('mongoose')
mongoose.connect(url, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('mongodb connect success')
    }
})

mongoose.connection.on("connected", function () {
    console.log("mongoose链接成功");
});
mongoose.connection.on("open", function () {
    console.log("mongoose  open");
});
mongoose.connection.on("error", function () {
    console.log("mongoose   error");
});
mongoose.connection.on("disconnected", function () {
    console.log("mongoose  disconnected");
});


bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

let allowCors = function(req, res, next) {
  // 代理去前端的请求地址
  res.header('Access-Control-Allow-Origin', '*');
  // 允许可以请求的方法
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // header 类型
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // 这个是判断是否可以携带cookie请求信息
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCors);


app.use('/users', router) // 将路由注册到/users的路径下

var port = process.env.PORT || 3000

app.listen(port)
console.log('app is listening on port:' + port)
