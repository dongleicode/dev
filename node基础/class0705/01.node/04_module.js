var a = 10;

b=20
/**
 * !在Node中有一个全局对象global,它的作用和网页中window类似
 *      *在全局中创建的变脸都会作为global的属性保存
 *      *在全局中创建的函数都会作为global的方法保存
 * 
 * !arguments.callee:保存当前执行的函数对象
 * 
 * !当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
 *      * function(exports, require, module, __filename, __dirname){
 * 
 * !在代码的最底部，添加如下代码
 *      * }
 * 
 * 
 * !实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个参数
 *      * exports：将变量或函数暴露到外部
 *      * require: 函数，用来引入外部的模块
 *      * module：
 *          * module代表的是当前模块本身
 *          * exports就是module的属性
 *      *__filename：当前模块的完整路径
 *      *__dirname：当前模块所在的文件夹路径
 * 
 */

// console.log(global);
console.log(arguments.length);//证明模块就是在一个函数内部，局部作用域

// console.log(arguments.callee);// Function (anonymous)

console.log(exports == module.exports)