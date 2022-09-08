
/**
 * ! 异步创建文件
 *  * fs.open(path, flags[, mode], callback)
 *      *path 文件路径
 *  *fs.write(fd, string[, position[, encoding]], callback)
 *      
 *      
 */
var fs = require('fs')
fs.open('hello2.md', 'w', function(err, fd){
    if(!err){
        fs.write(fd, '异步写入成功', (err)=>{
            if(!err){
                console.log('写入成功')
                //关闭文件：
                fs.close(fd, (err)=>{
                    if(!err){
                        console.log('文件关闭');
                    }
                })
            }else{
                console.log(err)
            }
        })
    }else{
        console.log(err);
    }
})
