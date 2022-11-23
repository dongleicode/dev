const { ObjectId } = require('mongoose');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let menuitem = new Schema({
    "_id": ObjectId,
    "href": String,
    "icon": String,
    "id": String,
    "index": String, 
    "parentId": String,
    "permission": String,
    "description": String,
    "sort": String,
    "source": String,
    "status": String,
    "title": String,
    "type": String,
    "children": Array
})
let menuList = new Schema(menuitem);

module.exports = {
    Menus: mongoose.model("Menu", menuList, "menulist")
};