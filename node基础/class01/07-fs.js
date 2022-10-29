const fs = require('fs')
/**
 * 读文件
 * ! let buffer = fs.readFileSync('./a.js')
 * ! console.log(buffer) 读取的是二进制数据，方便后学写入
 * 删除文件
 * ! 删除文件：fs.rmSync('./writFile.js')； 删除文件夹：fs.rmdirSync('./mkdir')。注意：文件不存在，会报错
 * 创建文件夹
 * !fs.mkdirSync(dir) 
 * 写文件
 * !fs.writeFileSync('./writFile.js', ` 春花秋月何时了`)
 * 测试文件是否存在
 * !fs.accessSync(dir)
 * 创建文件夹
 * ! fs.mkdirSync(dir)
 */


 let buffer = fs.readFileSync('./a.js')
//  console.log(buffer);//<Buffer 6d 6f 64 75 6c 65 2e 65 78 70 6f 72 74 73 20 3d 20 27 61 e6 a8 a1 e5 9d 97 27>

 let b1 = fs.readFileSync('./a.js', 'utf-8')
//  console.log(b1) //module.exports = 'a模块'


/**
try{
    var txt = fs.readFileSync('./sdf.js', 'utf-8')
}catch(e){
    console.log(e);
}
console.log('程序在执行。。。', txt);


 * Error: ENOENT: no such file or directory, open './sdf.js'
    at Object.openSync (node:fs:585:3)
    at Object.readFileSync (node:fs:453:35)
    at Object.<anonymous> (E:\fly\node\node基础\class01\07-fs.js:20:18)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 {
  errno: -4058,
  syscall: 'open',
  code: 'ENOENT',
  path: './sdf.js'
}
程序在执行。。。 undefined
 * 
 

//写入文件
fs.writeFileSync('./writFile.js', `
    春花秋月何时了
    往事知多少
`)



const dir = './mkdir'
try{
    fs.accessSync(dir)
    console.log('文件存在');
}catch(e){
    console.log('文件不存在');
    //创建文件
    fs.mkdirSync(dir)
}

*/


//删除文件夹
try{
// fs.rmdirSync('./mkdir')
//删除文件
fs.rmSync('./writFile.js')
}catch(e){
    console.log('删除异常');
}

