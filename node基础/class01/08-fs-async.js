//promise方式
const { readFile } = require('fs/promises')
const { readFile:rf } = require('fs')


/**
readFile('./a.js', 'utf-8')
.then(data => {
    console.log(data)  //module.exports = 'a模块'
})

readFile('./abc.js', 'utf-8')
.catch(err => {
    console.log(err)
})

 * [Error: ENOENT: no such file or directory, open 'E:\fly\node\node基础\class01\abc.js'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'E:\\fly\\node\\node基础\\class01\\abc.js'
}
 */

//传递的参数列表中回调函数最后，回调函数参数列表中，错误对象优先
//回调函数的读取方式
rf('./a.js', 'utf-8', (err, data) => {
    if(err){
        console.log('err:', err);
        return
    }
    console.log('data:',data); //data: module.exports = 'a模块'
})