// module.exports = exports =  {} 源码初始
console.log(module.exports === exports) //true

module.exports = 'c'

exports.a = 'a'
exports.b = 'b'//exports => {a, b}

// module.exports = 'c'

console.log("module:",module)
console.log("exports:",exports)
console.log(module.exports === exports) //false

module.exports.d = 'd'