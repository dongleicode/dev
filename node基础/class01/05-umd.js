/**
 * UMD:兼容AMD和commonjs规范而诞生的，多被一些需要同时支持浏览器端和服务端引用的第三方库所使用。
 * AMD 代表异步模块定义(Asynchronous Module Definition). 它是 CommonJS (CJS) 规范的替代品      
 *     define([模块1， 模块2]， factory)  引入前置   代表：require.js
 * CMD 按需加载 代表: sea.js
 * 不是以上两种方式，就挂在到window上
 * 
 */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') { // Node, CommonJS之类的
        module.exports = factory(require('jquery'), require('underscore'));
    } else { // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) { //    方法
    function a() {}; //    私有方法，因为它没被返回 (见下面)
    function b() {}; //    公共方法，因为被返回了
    function c() {}; //    公共方法，因为被返回了

    //    暴露公共方法
    return {
        b: b,
        c: c
    }
}));