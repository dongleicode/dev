/**
 * ! 同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 *      * fs.createWriteStream(path[, options])创建可写流
    *      * path：文件路径 
    *      * options 设置
 *  
 * ! on(事件字符串，回调函数)
 * 
 * ! once(事件字符串，回调函数)  一次性事件
 * 
 * 
 * 
 */

var fs = require('fs')
var ws = fs.createWriteStream('hello6.txt')
//可以通过监听流的open和close事件监听流的打开和关闭
ws.once('open', function(){
    console.log('可写流打开···');
})

ws.once('close', function(){
    console.log('可写流关闭···');
})


ws.write('第一行\n')
ws.write('第2行32323233232\n')
ws.write('第3行32323233232\n')

//关闭流,不能用ws.close()
ws.end();



