const { log } = require("console");

/***
 * !基本数据类型，变量名字和变量值都存放在栈中，b=a之后，值互不关联
 */
var a = 10;
var b = a;
a++;
console.log(a);
console.log(b);


/***
 * !引用数据类型，变量名和（对应的对象）内存地址存放在栈中，两个对象相等之后，其值指向同一个堆内存中的Object
 */
 var c = {name: 'bill'};
 var d = c;
 c.name = 'sari';//改变量
//  d = null; //改对象
 console.log(c);
 console.log(d);



 /***
  * ! exports和module.exports
  *     * exports只能通过.的方式来向外暴露内部数据
  *     * exports.xxx = xxx;
  *     
  *     * module.exports既可以通过.的方式，也可以直接赋值来暴露内部数据
  *     * module.exports.xxx = xxx
  *     * module.exports = {}
  */