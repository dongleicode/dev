const {
    Users
} = require('../model/users');

const {
    List
} = require('../model/menu');

const {
    showMsg
} = require('../public/javascripts/common');
const async = require("async");
// const { body, validationResult } = require("express-validator");

exports.login_byUsername = function(req, res, next){
    console.log("req.body", req.body);
    Users.findOne({
        "username": "admin"
    }, function (err, doc) {
        // err 是判断查找是否出现错误
        if (err) {
            res.json(showMsg(0))
        } else {
            res.json(showMsg(1, doc))
        }
    })
}


exports.getInfo = function (req, res, next) {
    Users.findOne({
        "username": "admin"
    }, function (err, doc) {
        // err 是判断查找是否出现错误
        if (err) {
            res.json(showMsg(0))
        } else {
            res.json(showMsg(1, doc))
        }
    })
};

// Display Author delete form on GET.
exports.user_update = function (req, res, next) {
    console.log(req.body)
    Users.update({
        "username": req.body.name
    }, {
        $set: req.body
    }, function (err, doc) {
        // err 是判断查找是否出现错误
        if (err) {
            res.json(showMsg(0))
        } else {
            res.json(showMsg(1, doc))
        }
    })
};

exports.permission_current = function (req, res, next) {
    // let begin = req.body.pageNum ? (Number(req.body.pageNum) - 1) * req.body.pageSize : 0;
    // List.count({}, (err, total) => {
    //     const query = List.find().limit(Number(req.body.pageSize)).sort('id').skip(begin);
    //     query.exec((err, doc) => {
    //         if (err) {
    //             console.log('err:', err)
    //             res.json(showMsg(0))
    //         } else {
    //             let obj = {
    //                 ...showMsg(1, doc)
    //             }
    //             res.json(obj)
    //         }
    //     })
    // })

    List.find({}, (err, doc) => {
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
};



// Handle Author update on POST.
exports.author_update_post = [

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Author object with escaped and trimmed data (and the old id!)
        var author = new Author({
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            date_of_birth: req.body.date_of_birth,
            date_of_death: req.body.date_of_death,
            _id: req.params.id,
        });

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render("author_form", {
                title: "Update Author",
                author: author,
                errors: errors.array(),
            });
            return;
        } else {
            // Data from form is valid. Update the record.
            Author.findByIdAndUpdate(
                req.params.id,
                author, {},
                function (err, theauthor) {
                    if (err) {
                        return next(err);
                    }
                    // Successful - redirect to genre detail page.
                    res.redirect(theauthor.url);
                }
            );
        }
    },
];