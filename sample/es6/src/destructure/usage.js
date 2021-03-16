// 交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log('x: ' + x + ', y: ' + y);

// 从函数返回多个值
function f1() {
    return [1, 2, 3];
}
let [a, b, c] = f1();

function f2() {
    return {
        foo: 1,
        bar: 2
    };
}
let {foo, bar} = f2();

// 函数参数的定义
function f3([x, y, z]) {}
f3([1, 2, 3]); //将一组参数与变量名对应起来

function f4({x, y, z}) {}
f4({z: 3, y: 2, x: 1});

// 提取JSON数据
let jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309]
};
let {id, status, data: number} = jsonData;
console.log(id, status, number);

// 函数参数的默认值
function f5(url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true
}) {}

// 遍历MAP结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + ' is ' + value);
}
for (let [key] of map) {
    console.log(key);
}
for (let [, value] of map) {
    console.log(value);
}

// 输入模块的指定方法
//const {SourceMapConsumer, SourceNode} = require('source-map');
