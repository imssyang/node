//
// ES2017引入了字符串补全长度的功能。
//

console.log(
    'x'.padStart(5, 'ab'),
    'x'.padStart(4, 'ab'),
    'x'.padEnd(5, 'ab'),
    'x'.padEnd(4, 'ab'),
    'xxx'.padStart(2, 'ab'),
    'xxx'.padEnd(2, 'ab'),
    'abc'.padStart(10, '0123456789'), // 截去超过的部分
    'x'.padStart(4), // 默认空格补全
);
