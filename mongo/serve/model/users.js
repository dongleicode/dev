const { ObjectId } = require('mongoose');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//定义一个users的结构
let usersInfo = new Schema({
    "_id": Schema.Types.ObjectId,
    "username": String,
    "password": String,
    "mobile": String,
    "token": String
});

const models = {
    Users: mongoose.model("Users", usersInfo, "user")
}

module.exports = models

