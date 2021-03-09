// Array.of方法用于将一组值转换为数组，主要用于弥补数组构造函数Array的不足。
console.log(
    Array.of(3, 11, 8),
);

// 模拟实现
function ArrayOf() {
    return [].slice.call(arguments);
}
