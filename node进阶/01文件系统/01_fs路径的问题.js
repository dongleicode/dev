var fs = require('fs')
 
// 出现路径拼接错误的问题，是因为提供了./或者../开头的相对路径
//如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
/**
 * 
 * 

fs.readFile('../read.md','utf8', function(err, data){
    if(err){
        return console.log('读取文件失败！'+ err.message)
    }
    console.log('读取文件成功');
})



//完整的绝对路径读取成功
fs.readFile('E:/fly/node/node进阶/read.md','utf8', function(err, data){
    if(err){
        return console.log('读取文件失败！'+ err.message)
    }
    console.log('读取文件成功');
})

 */


//最优解决方法
console.log(__dirname);
const path = require('path')
let url = path.join(__dirname, '../read.md')
fs.readFile(url,'utf8', function(err, data){
    if(err){
        return console.log('读取文件失败！'+ err.message)
    }
    console.log('读取文件成功');
})

