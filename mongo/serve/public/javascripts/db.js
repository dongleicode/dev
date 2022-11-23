// var mongodb = require('mongodb');
// 引用配置模块的数据库配置信息
// var config = require('./config').DB;


const { MongoClient } = require('mongodb')
// var url = "mongodb://localhost:27017/bit";
// const url = 'mongodb://admin:123456@localhost:27017/'; 有密码连接方式 admin 表示用户名，123456 表示密码
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });


var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var whereStr = {"name":"不小明"};  // 查询条件
//     var updateStr = {$set: { "score" : "22" }};		// 替换掉什么
//     dbo.collection("students").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     });
// });


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var whereStr = {"id": 4};  // 查询条件
    var updateStr = {$set: { "description" : '大屏播放播放111' }};		// 替换掉什么
    dbo.collection("menulist").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });
});


// // 创建数据库对象
// var d = new mongodb.DB(
//     config.db, // 数据库名称
//     new mongodb.server(
//         config.host, // 主机名
//         config.port, // 端口号
//         {
//             auto_reconnect: true
//         } // 自动连接
//     ), {
//         safe: true
//     } // 安全模式
// );

// /*** 
// 打开数据库， 操作集合＊ 
// @param col 集合名＊ 
// @param fn 操作方法
// */
// function connect(col, fn) {
//     // 打开数据库
//     d.open(function (err, db) {
//         // 打开数据库报错则抛出错误
//         if (err) {
//             throw err;
//         }
//         // 操作集合
//         else {
//             db.collection(col, function (err, col) {
//                 // 操作集合报错则抛出错误
//                 if (err) {
//                     throw err;
//                 } else {
//                     fn && fn(col, db);
//                 }
//             })
//         }
//     })
// }

// // 输出数据访问对象
// exports.DB = function (col) {
//     return {
//         // 插入数据
//         /**
//          * @param {*} data  插入数据项
//          * @param {*} success 操作成功回调函数
//          * @param {*} fail 操作失败回调函数
//          */
//         insert: function (data, success, fail) {
//             // 打开数据库操作col集合
//             connect(col, function (col, db) {
//                 // 向集合中插入数据
//                 col.insert(data, function (err, docs) {
//                     // 失败，抛出插入错误
//                     if (err)
//                         fail && fail(err);
//                     // 成功，执行成功回调函数
//                     else
//                         success && success(docs);
//                     // 关闭数据库
//                     db.close();
//                 });
//             });
//         },
//         // 删除数据
//         remove: function () {},
//         // 更新数据
//         update: function () {},
//         // 查找数据
//         find: function () {}
//     }

// }