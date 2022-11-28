let router = require('./db.js')

const menus = require('../controller/menu')
const role = require('../controller/role')

router.post('/menu/list', menus.menu_list);

router.post('/menu/edit', menus.menu_edit);

router.post('/menu/del', menus.menu_del);

router.post('/role/list', role.role_list);

module.exports = router;