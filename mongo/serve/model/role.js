const { ObjectId } = require('mongoose');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let list = new Schema({
    "_id": ObjectId,
    "id": String,
    "role": String,
    "permissionIds": String
})

let roleList = new Schema(list);

module.exports = {
    Role: mongoose.model("Role", roleList, "role")
};