const { Service } = require('egg');

// const fs = require('mz/fs');
const fs = require('fs/promises')

class UploadService extends Service {

  async upload() {
    const { ctx } = this;
    const files = ctx.request.files; // 获取前端上传的files对象组
    const filePath = files[0].filepath.replace(/\\\\/g, '\/'); // 获取文件临时存储地址
    const fileInfo = fs.readFileSync(filePath); // 读取文件E:\fly\node\egg-demo\app\public\upload
    const target = 'E:/fly/node/egg-demo/app/public/upload'; // 存储地址
    fs.writeFileSync(target, fileInfo); // 写入文件
    fs.unlinkSync(filePath); // 删除临时存储文件
    return 'ok';
  }

  async bigFile(params) {
    const {
      app,
    } = this;
    try {
      const res = await app.mysql.insert('upload', params);
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async list() {
    const {
      app,
    } = this;
    try {
      const res = await app.mysql.select('upload');
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}

module.exports = UploadService;
