let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//链接mongoose的数据库  angular是你在mongoose定义的数据库名字
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.on("connected", function () {
    console.log("mongoose链接成功");
});
db.on("open", function () {
    console.log("mongoose  open");
});
db.on("error", function () {
    console.log("mongoose   error");
});
db.on("disconnected", function () {
    console.log("mongoose  disconnected");
});

module.exports = router