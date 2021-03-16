// 扩展运算符是三个点（...），将一个数组转为用逗号分隔的参数序列。
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5);

// 扩展运算符用于函数调用
function add(x, y) {
    return x + y;
}
var numbers = [4, 38];
console.log(add(...numbers));

// ES5需要使用apply方法将数组转为函数的参数
function f1(x, y, z) {
}
var args1 = [0, 1, 2];
f1.apply(null, args1);

// ES6使用扩展运算符将数组展开为函数的参数
function f2(x, y, z) {
}
var args2 = [0, 1, 2];
f2(...args2);

console.log(
    Math.max.apply(null, [14, 3, 77]),  // ES5
    Math.max(...[14, 3, 77]),   // ES6
    Math.max(14, 3, 77),
);

// ES5追加数组
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
console.log(
    Array.prototype.push.apply(arr1, arr2),
    arr1,
    arr2,
);

// ES6追加数组
var arr3 = [0, 1, 2];
var arr4 = [3, 4, 5];
console.log(
    arr3.push(...arr4),
    arr3,
    arr4,
);

console.log(
    [1, 2].concat([3, 4]),  // ES5合并数组
    [1, 2, ...[3, 4]],      // ES6合并数组
);

const [first, ...rest] = [1, 2, 3, 4, 5]; // 与解构赋值结合
console.log(first, rest);

console.log(
    [...'hello'],  // 将字符串转为数组
);

// 任何实现了Iterator接口的对象都可以用扩展运算符转为真正的数组。
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let arr = [...map.keys()];
console.log(arr);

// Generator函数运行后会返回一个遍历器对象
var go = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...go()]);



