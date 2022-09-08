/**
 *  ! Buffer（缓冲区）
 *      *buffer的结构和数组很像，操作的方法也和数组类似
 *      *数组中不能存储二进制文件，而buffer就是专门用来存储二进制数据
 *      *buffer是Node的全局变量，不需要引入
 *      *在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
 *      * buffer中每一个元素的范围是从：00-ff   0-255
 *      * 二进制： 00000000 —— 11111111
 *      * 计算机中一个0或者一个1，我们称1位（bit）
 *      ! 8bit = 1byte(字节)
 *      ! 1024byte = 1Kb
 *      ! 1024kb = 1mb
 *      ! 1024mb = 1gb
 *      ! 1024gb = 1tb
 * 
 *  ! 创建一个指定大小的buffer
 *      *new Buffer()构造函数已经废弃，不建议用
 *      *buffer中的一个元素，占用计算机一个字节的内存
 *      *buffer的字节长度一旦确定，就不允许再次修改
 *      
 *      *buffer的数字输出结果是十进制
 *      * Buffer.from(str) 字符串转化为buffer
 *      * Buffer.alloc(size) 创建一个指定大小的buffer
 *      * Buffer.allocUnsafe(size) 创建一个指定大小的buffer,但是可以能包含敏感数据
 *      
 * 
 * 
 *      
 * 
 */

var str = 'Hello buffer'

var buf = Buffer.from(str) //将字符串转化为buffer（二进制）保存
// console.log(buf); //<Buffer 48 65 6c 6c 6f 20 62 75 66 66 65 72>
// console.log(buf.length);
// console.log(str.length);

// var buf2 = new Buffer(10);//已废弃
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 88
buf2[2] = 0xaa
buf2[10] = 99
console.log(buf2);   //170  十进制
// console.log(buf2[2].toString(16));   //16进制

//allocUnsafe可能含有敏感信息
var buf3 = Buffer.allocUnsafe(10)
console.log(buf3);