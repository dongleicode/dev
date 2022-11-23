let router = require('./db.js')

const menus = require('../controller/menu')

router.post('/menu/list', menus.menu_list);

router.post('/menu/edit', menus.menu_edit);

router.post('/menu/del', menus.menu_del);

module.exports = router;