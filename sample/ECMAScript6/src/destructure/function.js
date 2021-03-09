//
// 函数参数的解构赋值
//

function add([x, y]) {
    return x + y;
}

let s = add([1, 2]);
console.log(s); // 3

let a1 = [[1, 2], [3, 4]].map(([a, b]) => a + b);
console.log(a1); // [3, 7]

// 函数参数的解构也可以使用默认值
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move({x: 3, y: 8});    // [3, 8]
move({x: 3});          // [3, 0]
move({});              // [0, 0]
move();                      // [0, 0]

function move2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}
move({x: 3, y: 8});    // [3, 8]
move({x: 3});          // [3, undefined]
move({});              // [undefined, undefined]
move();                      // [0, 0]

// undefined会触发函数参数的默认值
let a2 = [1, undefined, 3].map((x = 'yes') => x);
console.log(a2);

