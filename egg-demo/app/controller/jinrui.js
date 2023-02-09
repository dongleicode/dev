const { Controller } = require('egg');

class JinRuiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '金瑞';
  }
}

module.exports = JinRuiController;
