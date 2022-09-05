/**
 * ! 引入其他模块
 *      *在node 中，通过require()函数来引入外部的模块
 *      * require可以传递一个文件的路径作为参数，node将会自动根据路径来引入外部模块
 *      *使用require（）引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
 *      *我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
 * 
 * ! 模块分为两大类
 *      *核心模块
 *          * 由node引擎提供的模块
 *          *核心模块的标识就是：模块的名字
 *      *文件模块：
 *          *由用户自己创建的模块
 */


let app = require('./02_module')
let math = require('./math')

app.person.setName('bill')

var fs = require('fs')
console.log(app.person);
// console.log(fs);
console.log(math.add(1, 2))
