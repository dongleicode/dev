const {
    Menus
} = require('../model/menu');
const {
    showMsg
} = require('../public/javascripts/common');
let mongoose = require('mongoose');
const async = require("async");
exports.menu_list = function (req, res, next) {
    let begin = req.body.pageNum ? (Number(req.body.pageNum) - 1) * req.body.pageSize : 0;
    Menus.count({}, (err, total) => {
        const query = Menus.find().limit(Number(req.body.pageSize)).sort('id').skip(begin);
        query.exec((err, doc) => {
            if (err) {
                console.log('err:', err)
                res.json(showMsg(0))
            } else {
                let obj = {
                    totalPage: total,
                    pageNum: req.body.pageNum,
                    pageSize: req.body.pageSize,
                    ...showMsg(1, doc)
                }
                res.json(obj)
            }
        })
    })
};

exports.menu_edit = function (req, res, next) {
    if(req.body._id === -1 || !req.body._id){
        addMenu(req, res)
    }else{
        editMenu(req, res)
    }
};


const addMenu = (req, res) => {
    req.body._id = mongoose.Types.ObjectId()
    let newM = new Menus(req.body)
    console.log("新增数据-----", newM)
    newM.save((err, doc)=>{
        if (err) {
            console.log('err:', err)
            res.json(showMsg(0))
        } else {
            let obj = {
                ...showMsg(1, doc)
            }
            res.json(obj)
        }
    })
}

const editMenu = (req, res) => {
    Menus.updateOne({_id: req.body._id}, req.body, (err, doc)=> {
        if (err) {
            console.log('err:', err)
            res.json(showMsg(0))
        } else {
            let obj = {
                ...showMsg(1, doc)
            }
            res.json(obj)
        }
    })
}

exports.menu_del = (req, res) => {
    Menus.deleteOne({_id: req.body._id}, (err, doc)=> {
        if (err) {
            console.log('err:', err)
            res.json(showMsg(0))
        } else {
            let obj = {
                ...showMsg(1, doc)
            }
            res.json(obj)
        }
    })
}

