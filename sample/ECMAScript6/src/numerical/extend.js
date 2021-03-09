
console.log(
    0b111110111 === 503, // ES6二进制写法
    0o767 === 503, // ES6八进制写法
);

console.log(
    isFinite(25),
    isFinite('25'),  // ES5会先将非数值转为数值，再进行判断
    Number.isFinite(25),
    Number.isFinite('25') // ES6只对数值有效
);

console.log(
    2 ** 2, // ES2016新增一个指数运算符（**）
    2 ** 3,
    Math.pow(99, 99),
    99 ** 99
);

// ES5中所有数字都保存成64位浮点数，这决定了整数的精确程度只能到53个二进制位。
// ES6引入新的数据类型Integer（后缀n表示）来解决这个问题。

console.log(
    //Integer(123)
);



