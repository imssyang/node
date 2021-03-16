// ES5引入了Object.keys，返回一个数组。
var obj = {foo: 'bar', baz: 42};
console.log(
    Object.keys(obj), // ES5
    Object.values(obj), // ES2017
    Object.entries(obj), // ES2017
);

let {keys, values, entries} = Object;
let o2 = {a: 1, b: 2, c: 3};
for (let key of keys(o2)) {
    console.log(key);
}
for (let value of values(o2)) {
    console.log(value);
}
for (let [key, value] of entries(obj)) {
    console.log([key, value]);
}

var map = new Map(Object.entries(obj)); // 将对象转为Map结构

