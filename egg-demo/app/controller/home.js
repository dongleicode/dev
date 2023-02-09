'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const data = await app.mysql.select('students');
    console.log(data);

    const res = await ctx.service.product.index();
    // ctx.body = res;
    await ctx.render('index.html', {
      res,
      list: [ 'a', 'b', 'c' ],
    });
  }
}

module.exports = HomeController;
