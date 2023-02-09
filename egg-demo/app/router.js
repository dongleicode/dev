'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id', controller.product.detail2);
  router.post('/product/create', controller.product.create);
  router.put('/product/update/:id', controller.product.update);
  router.delete('/product/delete/:id', controller.product.delete);
  router.post('/students/create', controller.students.create);
  router.get('/students/list', controller.students.list);
  router.get('/students/detail/:id', controller.students.detail);
  router.put('/students/update', controller.students.update);
  router.delete('/students/delete/:id', controller.students.delete);
  router.get('/up', controller.upload.index);
  router.post('/up/bigFile', controller.upload.bigFile);
  router.get('/up/list', controller.upload.list);
  router.get('/up/upload', controller.upload.upload);
  router.get('/my', controller.jinrui.index);
};
