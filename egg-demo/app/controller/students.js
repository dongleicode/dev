const Controller = require('egg').Controller;

class StudentsController extends Controller {
  async create() {
    const { ctx } = this;
    const res = await ctx.service.students.create(ctx.request.body);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '新增学生信息失败',
      };
    }

  }

  async list() {
    const { ctx } = this;
    const res = await ctx.service.students.list();
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '查询列表失败',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    // 地址栏问号拼接http://127.0.0.1:7001/students/detail?id=17  ctx.query.id取值  router.js中设置：router.get('/students/detail', controller.students.detail);
    // 地址栏问号拼接http://127.0.0.1:7001/students/detail/17  ctx.params.id取值  router.js中设置：router.get('/students/detail/:id', controller.students.detail);
    const res = await ctx.service.students.detail(ctx.params.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '查询学生详情失败',
      };
    }
  }

  async update() {
    const { ctx } = this;
    const res = await ctx.service.students.update(ctx.request.body);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '更新学生信息失败',
      };
    }
  }

  async delete() {
    const { ctx } = this;
    const res = await ctx.service.students.delete(ctx.params.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '删除学生信息失败',
      };
    }
  }
}

module.exports = StudentsController;
