//
// 尾调用（Tail Call）是函数式编程的一个重要概念，是指某个函数的最后一步是调用另一个函数。
//

function f(x) {
    return g(x); // 尾调用：函数f的最后一步是调用函数g
}

function f1(x) {
    let y = g(x);
    return y; // (非尾调用)：调用g后还有赋值操作
}

function f2(x) {
    return g(x) + 1; // (非尾调用)：调用g后还有赋值操作
}

function f3(x) {
    g(x); // (非尾调用)：等同于 return undefined;
}

function f4(x) {
    if (x > 0) {
        return m(x); // 尾调用：不一定出现在函数尾部，只要是最后一步操作即可。
    }
    return n(x); // 尾调用
}

//
// 尾调用优化：
//    尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，
//    直接用内层函数的调用帧取代外层函数的即可。如果所有函数都是尾调用，可以做到每次执行时调用帧只有一项，这将
//    大大节省内存。
//

function g() {
    console.log('g');
}

function f5() {
    let m = 1;
    let n = 2;
    return g(m + n);
}
f5();

function f6() {
  return g(3); // 尾调用优化：只保留内层函数的调用帧
}
f6();

g(3); // 尾调用优化：只保留内层函数的调用帧

function addOne(a) {
    var one = 1;
    function inner(b) {
        // 内层函数inner用到了外层函数addOne的内部变量one，因此无法进行尾调用优化.
        return b + one;
    }
    return inner(a);
}

//
// 函数调用自身称为递归（非常耗费内存，容易栈溢出错误）。
// 如果尾调用自身就称为尾递归（由于只存在一个调用帧，所以永远不会发生栈溢出错误）。
//

function factorial1(n) {
    if (n === 1) return 1;
    return n * factorial1(n - 1); // 阶乘：递归
}
console.log(factorial1(5));

function factorial2(n, total) {
    if (n === 1) return total;
    return factorial2(n - 1, n * total); // 阶乘：尾递归
}
console.log(factorial2(5, 1));

function Fibonacci1(n) {
    if (n <= 1) { return 1; }
    return Fibonacci1(n - 1) + Fibonacci1(n - 2); // 数列：递归
}
//console.log(Fibonacci1(500));  // 栈溢出

function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2; }
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(500));

//
// 递归函数的改写: 把所有用到的内部变量改写成函数的参数。
//

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}
function factorial3(n) {
    return tailFactorial(n, 1);
}
console.log(factorial3(100));

// 函数式编程有个概念--柯里化（currying): 将多参数的函数转换成单参数的形式。
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}
const factorial4 = currying(tailFactorial, 1);
console.log(factorial4(100));

// ES6的函数默认值可以减少传参个数。
function factorial5(n, total = 1) {
    if (n === 1) return total;
    return factorial5(n - 1, n * total);
}
console.log(factorial5(100));

// ES6的尾调用优化只在严格模式下开启，正常模式下是无效的。
function restricted() {
    //'use strict'
    console.log(
        restricted.caller,   // 正常模式下，此变量返回调用时函数的参数
        restricted.arguments // 正常模式下，此变量返回调用当前函数的那个函数
    );
}
restricted();

