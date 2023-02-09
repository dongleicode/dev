const { Controller } = require('egg');
const path = require('path');
const fs = require('mz/fs');
const pump = require('mz-modules/pump');

class UploadController extends Controller {

  async index() {
    const { ctx, app } = this;
    const data = await app.mysql.select('upload');
    console.log(data);
    await ctx.render('upload.html', {});
  }

  async upload() {
    const { ctx } = this;
    const res = await ctx.service.upload.upload();
    ctx.body = res;
  }

  async bigFile() {
    const { ctx } = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    // 获取文件名称
    const filename = file.filename;
    const targetPath = path.join('app/public/upload', filename);
    // 读取文件
    const source = fs.createReadStream(file.filepath);
    // 创建写入流
    const target = fs.createWriteStream(targetPath);
    try {
      await pump(source, target);
    } finally {
      await ctx.cleanupRequestFiles();
    }
    // ctx.body = "写入成功"
    const res = await ctx.service.upload.create({ body, file });

    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '新增文件信息失败',
      };
    }

  }


  async list() {
    const { ctx } = this;
    const res = await ctx.service.upload.list();
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        data: '查询文件列表失败',
      };
    }
  }
}

module.exports = UploadController;
