// Symbol.for可以重新使用同一个Symbol值。
// Symbol.for('cat')调用30次，每次都返回同一个Symbol值。
// Symbol('cat')调用30次，每次都返回不同的Symbol值。
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(
    s1 === s2, // true
    Symbol.keyFor(s1), // 返回一个已登记的Symbol类型的key
);


