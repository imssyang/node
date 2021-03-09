//
// 数值和布尔值的解构赋值
//

// 解构规则：只要等号右边的值不是对象或数组，就先将其转为对象。
let {toString: s1} = 123;
let {toString: s2} = true;
console.log('s1: ' + s1 + ' s2: ' + s2);

// 由于undefined和null无法转为对象，所以对它们进行解构赋值时都会报错。
let {prop: x} = undefined; // TypeError
let {prop: y} = null;      // TypeError

