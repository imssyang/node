//
// repeat方法返回一个新字符串，表示将原字符串重复n次。
//

console.log('x'.repeat(3));
console.log('hello'.repeat(2));
console.log('na'.repeat(0));
console.log('na'.repeat(2.9)); // 小数会被取整
//console.log('na'.repeat(Infinity)); // RangeError
//console.log('na'.repeat(-1)); // RangeError
console.log('na'.repeat(-0.9)); // 等同0
console.log('na'.repeat(NaN)); // 等同0
console.log('na'.repeat('na')); // 字符串会先转换为数字
console.log('na'.repeat('3')); // 字符串会先转换为数字
