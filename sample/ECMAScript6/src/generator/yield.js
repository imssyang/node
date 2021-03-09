// 由于Generator函数返回的遍历器对象只有调用next方法才会遍历下一个内部状态，
// 所以提供了一种可以暂停执行的函数。yield语句就是暂停标志。
// 遍历器对象的next方法的运行逻辑：
// 1. 遇到yield语句就暂停执行后面的操作，并将紧跟在yield后的表达式的值作为返回的对象的value属性值；
// 2. 下一次调用next方法时再继续往下执行，直到遇到下一条yield语句；
// 3. 如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，
//    并将return语句后面的表达式的值作为返回对象的value属性值。
// 4. 如果该函数没有return语句，则返回对象的value属性值为undefined.
//
// 惰性求值（Lazy Evaluation): 只有调用next方法且内部指针指向该语句时才会执行yield语句后面的表达式。

function* f() {
    console.log('run!');
}
var generator = f();
setTimeout(function () {
    generator.next() // 此时才打印run!
}, 2000);

var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item != 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};
for (var i of flat(arr)) {
    console.log(i); // 1 2 3 4 5 6
}


// yield*语句用来在一个Generator函数里面执行另一个Generator函数。
function* foo() {
    yield 'a';
    yield 'b';
}
function* bar() {
    yield 'x';
    yield* foo();  // 调用另一个Generator
    yield 'y';
}
for (let v of bar()) {
    console.log(v); // x a b y
}

let read = (function* () {
    yield 'hello';
    yield* 'hello';
})();
console.log(
    read.next().value, // hello
    read.next().value  // h 字符串具有Iterator接口，被yield*遍历
);

function* g5() {
    yield 2;
    yield 3;
    return 'foo';
}
function* g6() {
    yield 1;
    var v = yield *g5();
    console.log('v: ' + v);
    yield 4;
}
var it = g6();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
// v: foo
console.log(it.next()); // { value: 4, done: false }
console.log(it.next());  // { value: undefined, done: true }

// yield*命令可以方便的取出嵌套数组的所有成员
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}
const tree = ['a', ['b', 'c'], ['d', 'e']];
for (let x of iterTree(tree)) {
    console.log(x); // a b c d e
}



