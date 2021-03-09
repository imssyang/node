//
// ES5比较两个值相等：
// 1. 相等运算符（==）：会自动转换数据类型。
// 2. 严格相等运算符（===）：存在NaN不等于自身，以及+0等于-0的情况。
// ES6提供Object.is方法：在所有环境中，只要两个值是一样的，它们就相等。
//

console.log(
    Object.is('foo', 'foo'), // true
    Object.is({}, {}), // false
    Object.is(+0, -0), // false
    Object.is(NaN, NaN), // true
);


