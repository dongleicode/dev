var express = require('express')
var router = express.Router()

var Users = require('../models/user')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.route('/userInfo').post((req, res) => {
    console.log(req.body.name);
    console.log(req.body.pass);
    Users.findOne({name:req.body.name, pass:req.body.pass}, (err, obj)=>{
        console.log('err:', err)
        console.log('obj:', obj)
        res.json(obj)
    })
})

module.exports = router

