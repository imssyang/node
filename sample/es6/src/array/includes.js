// ES2016引入Array.prototype.includes方法判断某个数组是否包含给定的值。
console.log(
    [1, 2, 3].includes(2),
    [1, 2, 3].includes(4),
    [1, 2, NaN].includes(NaN),
    [1, 2, 3].includes(3, 3),  // 第二个参数表示搜索的起始位置
    [1, 2, 3].includes(3, -1),
);

if ([1, 2, 3].indexOf(2) !== -1) { // ES5: 含NaN时会误判
}

// 检查是否支持
const contains = (() =>
        Array.prototype.includes
            ? (arr, value) => arr.includes(value)
            : (arr, value) => arr.some(e1 => e1 === value)
)();
contains(['foo', 'bar'], 'baz'); // false

