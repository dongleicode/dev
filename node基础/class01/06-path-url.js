const path = require('path')
const url = require('url')

//拼接路径的方法，可以自动处理各种相对路径的细节
let resPath = path.join('a', 'b', 'c', '../', 'd/g')
// console.log(resPath);//a\b\d\g

let p1 = path.join('a/b', 'c/d', '../', 'e/f')
// console.log(p1);//a\b\c\e\f

let p2 = path.resolve('./a/b', 'c/d', 'e', 'xxx.txt')
console.log(p2); //E:\fly\node\node基础\class01\a\b\c\d\e\xxx.txt 完成目录路径

let pobj = path.parse(p2)
// console.log(pobj);
/**
 * 操作文件的路径
 * {
  root: 'E:\\',
  dir: 'E:\\fly\\node\\node基础\\class01\\a\\b\\c\\d\\e',
  base: 'xxx.txt',
  ext: '.txt',
  name: 'xxx'
}
 * 
 */


let hostUrl = 'https://www.cnblogs.com/linyuxuan/p/14708647.html?type=2&age=3#vip'

let urlObj = url.parse(hostUrl)
console.log(urlObj);
/**
 * 操作地址栏的所有信息
 * Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.cnblogs.com',
  port: null,
  hostname: 'www.cnblogs.com',
  hash: '#vip',
  search: '?type=2&age=3',
  query: 'type=2&age=3',
  pathname: '/linyuxuan/p/14708647.html',
  path: '/linyuxuan/p/14708647.html?type=2&age=3',
  href: 'https://www.cnblogs.com/linyuxuan/p/14708647.html?type=2&age=3#vip'
}
 */






