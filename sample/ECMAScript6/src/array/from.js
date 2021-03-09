// Array.from方法用于将两类对象转为数组：
// 1，类似数组的对象（必须有length属性）；
// 2. 可遍历的对象（必须支持Iterator接口）；

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
};
console.log(
    [].slice.call(arrayLike), // ['a', 'b', 'c'] ES5
    Array.from(arrayLike),    // ['a', 'b', 'c'] ES6
    Array.from('hello'), // 支持Iterator接口的数据结构都可转换
    Array.from(new Set(['a', 'b'])),
    Array.from([1, 2, 3], (x) => x * x),
    Array.from([1, , 2, , 3], (n) => n || 0), // 将false成员转为0
);

function typesOf() { // 返回各种数据的类型
    return Array.from(arguments, value => typeof value);
}
console.log(typesOf(null, [], NaN));

function countSymbols(string) { // 返回字符串的长度，支持大于\uFFFF的Unicode字符
    return Array.from(string).length;
}



