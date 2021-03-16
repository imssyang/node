//
// ES5只有全局作用域和函数作用域，没有块级作用域，导致很多场景不合理。
//

var tmp = new Date();
function f() {
    console.log(tmp); // 变量提升导致内层的tmp变量覆盖了外层的tmp变量
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined

var s = 'hello';
for (var i = 0; i < s.length; i++) { // i泄漏为全局变量
    console.log(s[i]);
}
console.log(i); // 5

// IIFE: Immediately Invoked Function Expression，（立即调用的函数表达式）
(function foo(){
    var a = 1000; // IIFE控制变量在函数作用域，避免污染全局作用域
    console.log(a);
})();

//
// ES6的块级作用域 (let引入)
//

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
        console.log(n); // 10
    }
    console.log(n); // 5
}
f1();

{
    let b = 1001; // IIFE控制变量在函数作用域，避免污染全局作用域
    console.log(b);
}

function f2() { console.log('I am outside!'); }
(function () {
    // ES6引入了块级作用域，明确允许在块级作用域之中声明函数，且函数声明语句的行为类似于let，在块级作用域之外不可引用。
    function f2() { console.log('I am inside!'); }
    f2(); // I am inside!
}());

//
// DO expression （do表达式）
//

/*
let x = do {
    let t = 5;
    t * t + 1;
};
console.log('x: ' + x);
*/


