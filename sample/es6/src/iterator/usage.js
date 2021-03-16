// 对数组和Set结构进行结构赋值时，会默认调用Symbol.iterator方法。
let set = new Set().add('a').add('b').add('c');
let [x,y] = set; // x='a', y='b'
let [first, ...rest] = set; // first='a'; rest=['b','c']

// 扩展运算符（...）也会调用默认的Iterator接口。
var str = 'hello';
console.log([...str]); // [ 'h', 'e', 'l', 'l', 'o' ]
let arr = ['b', 'c'];
console.log(['a', ...arr, 'd']); // [ 'a', 'b', 'c', 'd' ]

// yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
let generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
};
var iterator = generator();
console.log(
    iterator.next(), // { value: 1, done: false }
    iterator.next(), // { value: 2, done: false }
    iterator.next(), // { value: 3, done: false }
    iterator.next(), // { value: 4, done: false }
    iterator.next(), // { value: 5, done: false }
    iterator.next(), // { value: undefined, done: true }
);

// 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合其实都调用了遍历器接口。
// for...of
// Array.from()
// Map()/Set()/WeakMap()/WeakSet()
// Promise.all()
// Promise.race()

// 字符串是一个类似数组的对象，也具有原生Iterator接口。
var someString = 'hi';
var iterator = someString[Symbol.iterator]();
console.log(
    iterator.next(), // { value: 'h', done: false }
    iterator.next(), // { value: 'i', done: false }
    iterator.next()  // { value: undefined, done: true }
);

// 覆盖字符串原生的Symbol.iterator方法达到修改遍历器行为的目的
var str = new String('hi');
console.log([...str]);
str[Symbol.iterator] = function () {
    return {
        next: function () {
            if (this._first) {
                this._first = false;
                return {value: 'bye', done: false};
            } else {
                return {done: true};
            }
        },
        _first: true
    };
};
console.log(
    [...str], // bye
    str
);

// Symbol.iterator方法的最简单实现是使用Generator函数。
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]);

let obj = {
    * [Symbol.iterator]() {
        yield 'hello';
        yield 'world';
    }
};
for (let x of obj) {
    console.log(x);
}
