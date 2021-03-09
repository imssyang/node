// ES6规定Generator返回的遍历器对象是Generator函数的实例，它也继承了Generator函数的prototype对象上的方法。
function* g() {}
g.prototype.hello = function () { return 'hi' }; // 在prototype对象上增加方法
let obj = g(); // 遍历器对象
console.log(
    obj instanceof g, // true
    obj.hello() // hi
);

function* g1() {
    this.a = 11;
}
let o1 = g1();
console.log(
    o1.a // undefined 遍历器对象拿不到Generator函数内this对象上的属性
);

function* g2() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}
var o2 = {};
var f2 = g2.call(o2); // 使用call方法绑定Generator函数内部的this
console.log(
    f2.next(), // { value: 2, done: false }
    f2.next(), // { value: 3, done: false }
    f2.next(), // { value: undefined, done: true }
    o2.a, // 1
    o2.b, // 2
    o2.c  // 3
);

function* g3() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}
var f3 = g3.call(g3.prototype); // 使用call方法绑定Generator函数内部的this
console.log(
    f3.next(), // { value: 2, done: false }
    f3.next(), // { value: 3, done: false }
    f3.next(), // { value: undefined, done: true }
    f3.a, // 1
    f3.b, // 2
    f3.c  // 3
);

function* gen4() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}
function g4() {
    return gen4.call(gen4.prototype);
}
var f4 = new g4(); // 使用new命令创建对象
console.log(
    f4.next(), // { value: 2, done: false }
    f4.next(), // { value: 3, done: false }
    f4.next(), // { value: undefined, done: true }
    f4.a, // 1
    f4.b, // 2
    f4.c  // 3
);


