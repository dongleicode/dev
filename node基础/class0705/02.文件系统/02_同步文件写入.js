/**
 *  ! fs文件系统
 *      * 是node的核心模块，需要引入
 *      
 *      *是I/O
 *      
 *      * 所有操作都分为：同步和异步
 *      * 同步会造成阻塞，异步会通过回调函数进行操作
 *      
 *  ! 文件的写入
 *      *手动操作的步骤
 *          *1.打开文件-同步
 *              * fs.openSync(path, flags[, mode])
 *                  * path 要打开的文件路径
 *                  * flags 打开文件要做的操作的类型
 *                      * r 只读
 *                      * w 可写
 *                  * mode 设置文件的操作权限，一般不传
 *                  *返回值：该方法会返回一个文件的描述符作为结果，我们可以通过该描述来对文件进行各种操作
 *          *2.向文件中写入内容
 *              * fs.writeSync(fd, string[,position[, encoding]])
 *                  * fd 描述
 *                  * string 写入内容
 *                  * position写入的起始位置
 *                  * encoding 编码方式，默认utf-8                 
 * 
 *          *3.关闭文件
 *              *fs.closeSync(fd) 
 *      
 *     
 * 
 */

//引入核心模块
var fs = require('fs')
//打开文件
var fd = fs.openSync('hello.txt', 'w')
//写入内容
fs.writeSync(fd, 'node雄起吧', 10)

//关闭文件
fs.closeSync(fd) 
