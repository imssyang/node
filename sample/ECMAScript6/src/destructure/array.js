//
// Destructuring (解构)
//

// 数组的解构赋值：只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
let [a, b, c] = [1, 2, 3];
console.log(a + ' ' + b + ' ' + c);

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo + ' ' + bar + ' ' + baz);

let [, , third] = ['foo', 'bar', 'baz'];
console.log(third);

let [x, , y] = [1, 2, 3];
console.log('x: ' + x + " y: " + y);

let [head, ...tail] = [1, 2, 3, 4];
console.log('head: ' + head + ' tail: ' + tail);

let [l, m, ...n] = ['a'];
console.log(l + ' ' + m + ' ' + n);

let [h, [i], j] = [1, [2, 3], 4];
console.log(h + ' ' + i + ' ' + j);

let [o, p, q] = new Set(['a', 'b', 'c']);
console.log(o + ' ' + p + ' ' + q);

let [foa = true] = []; //指定默认值
console.log(foa);

function f() { console.log('aaa'); }
let [xx = f()] = [1];
console.log(xx);

let [x1 = 1, y1 = x1] = [];     // x=1; y=1
let [x2 = 1, y2 = x2] = [2];    // x=2; y=2
let [x3 = 1, y3 = x3] = [1, 2]; // x=1; y=2
//let [x4 = y4, y4 = 1] = [];     // ReferenceError
