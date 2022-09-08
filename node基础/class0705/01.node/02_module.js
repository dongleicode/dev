/**
 * ! 模块化
 *      *降低耦合性
 *      *提升代码复用率
 * ! 在node中，一个js文件就是一个模块
 * ! 在node中，每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
 * 
 * ! exports 向外部暴露变量和方法
 *  
 */

console.log(123)

var person={
    name: 'lili',
    age: 23,
    setName: function(name){
        this.name = name;
    }
}

module.exports = person;