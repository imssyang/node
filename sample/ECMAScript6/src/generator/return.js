// Generator函数返回的遍历器对象还有一个return方法，可以返回给定的值，并终结Generator函数的遍历。
function* g1() {
    yield 1;
    yield 2;
    yield 3;
}
var i1 = g1();
console.log(
    i1.next(), // { value: 1, done: false }
    i1.return('foo'), // { value: 'foo', done: true } 遍历终止
    i1.next()  // { value: undefined, done: true }
);

function* g2() {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var i2 = g2();
console.log(
    i2.next(), // { value: 1, done: false }
    i2.next(), // { value: 2, done: false }
    i2.return(7), // { value: 4, done: false } 会推迟到finally代码块执行完再执行
    i2.next(), // { value: 5, done: false }
    i2.next()  // { value: 7, done: true }
);



