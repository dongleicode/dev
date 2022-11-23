let router = require('./db.js')

const users = require('../controller/users')

router.post('/login/byUsername', users.login_byUsername);

router.get('/getInfo', users.getInfo);

//更新用户信息
router.post('/user/update', users.user_update);


module.exports = router;