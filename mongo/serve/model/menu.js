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

let list1 = new Schema({
    "_id": ObjectId,
    "href": String,
    "path": String,
    "component": String,
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
let list = new Schema(list1);
module.exports = {
    Menus: mongoose.model("Menus", menuList, "menulist"),
    List: mongoose.model("List", list, "menu")
};