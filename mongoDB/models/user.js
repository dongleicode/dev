const { ObjectId } = require('mongodb')
var mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    _id: ObjectId,
    name: String,
    pass: String
})

module.exports = mongoose.model('Users', userSchema, 'user')

