//
// 对象的解构赋值
//

let {foo1, bar1} = {foo1: 'aaa', bar1: 'bbb'};
let {bar2, foo2} = {foo2: 'aaa', bar2: 'bbb'};
console.log('foo1: ' + foo1 + ' bar1: ' + bar1);
console.log('foo2: ' + foo2 + ' bar2: ' + bar2);

let {baz1} = {foo: 'aaa', bar: 'bbb'};
let {foo: baz2} = {foo: 'aaa', bar: 'bbb'};
console.log('baz1: ' + baz1 + ' baz2: ' + baz2);

let obj = {first: 'hello', last: 'world'};
let {first: f, last: l} = obj;
console.log('f: ' + f + ' l: ' + l);

let obj2 = {
    p: [
        'Hello',
        {y: 'World'}
    ]
};
let {p, p: [x, {y}]} = obj2;
console.log('x: ' + x + ' y: ' + y + ' p: ' + p);

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var {loc, loc: {start}, loc: {start: {line}}} = node;
console.log('line: ' + line + ' loc: ' + loc + ' start: ' + start);

var {x1 = 3} = {}; //指定默认值
var {x2, y2 = 5} = {x2: 1};
var {x3: y3 = 3} = {};
var {x4: y4 = 3} = {x4: 5};

// 数组本质是特殊的对象，因此可以对数组进行对象属性的解构
let arr = [1, 2, 3];
let {0: first, [arr.length - 1]: last} = arr;
console.log('first: ' + first + ' last: ' + last);
