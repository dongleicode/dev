/**
 * ! 1.同步文件读取
 * ! 2.异步文件读取
 * ! 3.简单文件读取
 *      * fs.readFile(path[, options], callback)
 *      *fs.readFileSync(path[, options])
 * ! 4.流式文件读取
 */

/**
 * ! 简单文件读取和输出

var fs = require('fs')
fs.readFile('../../img/磁盘输入输出.jpg',(err, data)=>{
    if(!err){
        // console.log(data)
        fs.writeFile('new.png',data, function(err){
            if(!err){
                console.log('输出成功~~~');
            }
        })
    }
})

 */



/**
 * ! 流式文件读取
 */


var fs = require('fs')
var rs = fs.createReadStream('../../img/磁盘输入输出.jpg');
var ws = fs.createWriteStream('a.png')


rs.once('open', function(){
    console.log('可读流打开了');
})
rs.once('close', function(){
    console.log('可读流关闭了');
    ws.end();
})

ws.once('open', function(){
    console.log('可写流打开了');
})
ws.once('close', function(){
    console.log('可写流关闭了');
})

//如果要读取一个可读流文件中的数据，必须要为刻度流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// rs.on('data', function(data){
//     console.log(data.length);
//     ws.write(data)
// })

//pipe()将可读流中的数据，直接输出到可写流中
rs.pipe(ws)