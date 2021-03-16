//
// Scope contrast (作用域对比)
//

for (var i = 0; i < 3; i++) {
    console.log('i: ' + i);
}
console.log(i); // Right: i is global variable

for (let j = 0; j < 3; j++) {
    console.log('j: ' + j);
}
//console.log(j); // Error: j is local variable

var a = [];
for (var _i = 0; _i < 10; _i++) {
    a[_i] = function () {
        console.log(_i); // only one gloable variable: _i
    };
}
a[6](); // 10

var b = [];
for (let _j = 0; _j < 10; _j++) {
    b[_j] = function () {
        console.log(_j); // 10 local variables: _j
    };
}
b[6](); // 6

for (let k = 0; k < 3; k++) {
    let k = 'abc';
    console.log(k); // Output: abc 3 times
}

//
// Non-existent variable ascension (变量提升)
//

console.log(foo);  // Output: undefined
var foo = 2;

//console.log(bar);  // ReferenceError: Cannot access 'bar' before initialization
let bar = 2;

//
// Temporal dead zone (TDZ, 暂时性死区)
//

var tmp = 123;
if (true) {
    // TDZ start
    //tmp = 'abc'; // ReferenceError
    //console.log(tmp); // ReferenceError

    let tmp; // TDZ end
    console.log(tmp); // undefined

    tmp = 456;
    console.log(tmp); // 456

    //typeof x; // ReferenceError
    let x;
}

//
// Disallow duplicate declarations of variables (禁止重复声明变量)
//

function test1() {
    let m = 10;
    //var m = 1; // SyntaxError: Identifier 'm' has already been declared
}

function test2(arg) {
    //let arg; // SyntaxError: Identifier 'arg' has already been declared
}

function test3(arg) {
    {
        let arg; // Right
    }
}
