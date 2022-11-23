const path = require("path")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const CartsModel = require("./mongodb/CartsModule")

app.use(express.static(path.resolve(__dirname,"../../")))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../../","index.html"))
})

app.get("/api/info",(req,res)=>{
    // res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    CartsModel.findOne({"userid":2},(err,results)=>{
        res.json(results)
    })
})

// 监听
app.listen(666,(error)=>{
    console.log("server is ready on port 666")
})
