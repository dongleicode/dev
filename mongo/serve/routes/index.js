var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mongodb 本地服务' });
});

/* GET home page. */
router.get('/cool', function(req, res, next) {
  res.render('index', { title: '你好酷' });
});

module.exports = router;
