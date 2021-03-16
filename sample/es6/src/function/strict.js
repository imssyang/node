// ES5时，函数内部可以设定为严格模式
function doSomething1(a, b) {
    'use strict'
}

// ES2016规定，只要函数参数使用了默认值、解构赋值或者扩展运算符，那么函数内部就不能显式设定为严格模式。
/*
function doSomething2(a, b = a) {
    'use strict'
}
*/
const doSomething3 = (function () {  //变通
    'use strict'
    return function (value = 42) {
        return value;
    }
}());


