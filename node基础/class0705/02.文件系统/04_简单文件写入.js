    /**
     * !简单文件写入
     *      *fs.writeFile(file, data[, options], callback)
     *      * fs.writeFileSync(file, data[, options])
     *          *file 要操作的文件路径
     *          *data 要写入的数据
     *          * options 设置选项  {flag: 'w'}r
     *              * r 读取
     *              * w 可写
     *              * a 追加
     *          * callback 当写入完成以后执行的函数
     * 
     *  
     */


    var fs = require('fs')
    fs.writeFile('hello3.txt', 'writeFile写入的内容', {flag: 'a'}, (err)=>{
        if(!err){
            console.log('success~~');
        }
    })

    fs.writeFileSync('hello4.txt', 'writeFileSync写入的内容')