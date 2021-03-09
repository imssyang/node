// ES6提供Set数据结构，Set本身是一个构造函数，用来生成Set数据结构。
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i);
}

const s1 = new Set([1, 2, 3, 4, 4]); // 支持具有iterable接口的数据结构作为参数
console.log(
    s1.add(5),
    s1.size,
    s.has(3),
    s.has(8),
    s.delete(2),
);
