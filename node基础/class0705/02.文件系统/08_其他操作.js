/**
 *  ! fs.existsSync(path) 检查一个文件是否存在
 * ! fs.stat()获取文件信息
 * ! fs.unlink()删除文件
 * ! fs.readdir()读取一个目录的目录结构
 * ! fs.truncateSync() 截断文件,将文件改为指定大小
 * ! fs.mkdir()创建一个目录
 * ! fs.rmdirSync() 删除文件夹
 * ! fs.renameSync(旧路径，新路径) 重命名，剪切
 * ! fs.watchFile() 监听文件的修改
 * 
 */

var fs = require('fs')
var isE = fs.existsSync("a.png")
// console.log(isE);

fs.stat('a.png', function(err, stat){
    console.log(stat);
})

// fs.unlinkSync('hello.txt') //删除文件


fs.readdir('.', function(err, files){
    console.log(files);
})

// fs.truncateSync('hello6.txt', 20)
// fs.mkdirSync('vue')
// fs.rmdirSync('vue')
// fs.renameSync('a.png', 'c.jpg')

fs.watchFile('hello6.txt', {interval: 1000}, function(currentV, preV){
    console.log('修改前：'+ preV.size);
    console.log('修改后：'+ currentV.size);
})




