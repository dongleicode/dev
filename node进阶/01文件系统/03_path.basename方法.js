const path = require('path')

const fp = '/a/b/d/index.html'
// const fn = path.basename(fp) //index.html

const fn = path.basename(fp, '.html') //index
console.log(fn)