let router = require('./db.js')

const users = require('../controller/users')

router.post('/login/byUsername', users.login_byUsername);

router.post('/getInfo', users.getInfo);

//更新用户信息
router.post('/user/update', users.user_update);

router.post('/permission/current', users.permission_current);

module.exports = router;