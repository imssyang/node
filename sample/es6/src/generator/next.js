// next方法可以带有一个参数，该参数会被当作上一条yield语句的返回值
function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1; }
    }
}
var g = f();
console.log(
    g.next(), // { value: 0, done: false }
    g.next(), // { value: 1, done: false }
    g.next(), // { value: 2, done: false }
    g.next(true) // { value: 0, done: false } 从外部向内部注入值
);

// 示例
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var a = foo(5);
console.log(
    a.next(), // 6 = 5 + 1
    a.next(), // NaN = 2 * undefined / 3
    a.next()  // NaN = 5 + NaN + undefined
);
var a = foo(5);
console.log(
    a.next(), // 6 = 5 + 1
    a.next(12), // 8 = 2 * 12 / 3;
    a.next(13)  // 42 = 5 + 2 * 12 + 13
);

// 包装
function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        generatorObject.next(); // { value: undefined, done: false }
        return generatorObject;
    };
}
const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
});
console.log(
    wrapped().next('hello!') // { value: 'DONE', done: true }
);

// 示例
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}
let genObj = dataConsumer();
console.log(
    genObj.next(), // { value: undefined, done: false }
    genObj.next('a'), // { value: undefined, done: false }
    genObj.next('b')  // { value: 'result', done: true }
);



