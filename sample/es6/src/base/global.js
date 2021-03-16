//
// 顶层对象：在浏览器中指window, 在node中指global对象。
//

global.a = 111;
console.log(a); // 111. ES5中顶层对象的属性与全局变量是等价的

let b = 222;
console.log(global.b); // undefined. ES6中全局变量与顶层对象的属性隔离。

//
// Global对象
//

(typeof window !== 'undefined'
    ? window  // 浏览器中顶层对象是window.
    : (typeof process == 'object' &&
            typeof require == 'function' &&
            typeof global == 'object')
        ? global  // node中顶层对象是global
        : this);

var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; } // 浏览器
    if (typeof window !== 'undefined') { return window; } // 浏览器
    if (typeof global !== 'undefined') { return global; } // node
    throw new Error('unable to locate global object');
};
