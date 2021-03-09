// ES5不能为函数的参数指定默认值
function log(x, y) {
    y = y || 'World'; //变通方式
    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

// ES6允许为函数的参数设置默认值
function log2(x, y = 'World') {
    console.log(x, y);
}
log2('Hello');
log2('Hello', 'China');
log2('Hello', '');

// ES6的参数默认值是惰性求值的，即每次都重新计算默认值表达式的值。
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}
foo(); // 100
x = 100;
foo(); // 101

// ES6参数默认值与解构赋值的默认值结合使用
function foo2({x, y = 5}) {
    console.log(x, y);
}
//foo2({}); // undefined, 5
foo2({x: 1}); // 1, 5
foo2({x: 1, y: 2}); // 1, 2
//foo2(); // TypeError

function m1({x = 0, y = 0} = {}) { // 函数参数的默认值是空对象，但是设置了对象解构赋值的默认值
    return [x, y];
}
function m2({x, y} = {x: 0, y: 0}) { // 函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值
    return [x, y];
}
console.log(
    m1(),
    m2(),
    m1({x: 3, y: 8}),
    m2({x: 3, y: 8}),
    m1({x: 3}),
    m2({x: 3}),
    m1({}),
    m2({})
);

console.log(
    (function (a) {}).length,
    (function (a = 5) {}).length, // length属性将返回没有指定默认值的参数个数（失真）
    (function (...args) {}).length,
);

// 一旦设置了参数默认值，函数进行声明初始化时，参数会形成一个单独的作用域。
// 等到初始化结束，这个作用域就会消失。
var x1 = 1;
function f1(x1, y1 = x1) {
    console.log(y1);
}
console.log(
    x1,
    f1(2),
    x1
);


