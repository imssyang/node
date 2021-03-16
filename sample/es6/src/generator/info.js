// ES6提供Generator函数作为一种异步编程解决方案。
// 1. 从语法上看，Generator是一个状态机，封装了多个内部状态；
// 2. 从行为上看，Generator是一个遍历器对象生成函数，执行后返回一个遍历器对象。
//    返回的遍历器对象可以依次遍历Generator函数内部的每一个状态；
// 3. 从形式上看，Generator函数是一个普通函数，但有两个特征：
//    a) function命令与函数名之间有一个星号；
//    b) 函数体内部使用yield语句定义不同的内部状态。

// Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
function* helloWorldGenerator() { // Generator函数
    yield 'hello'; // 状态1
    yield 'world'; // 状态2
    return 'ending'; // 状态3
}
var hw = helloWorldGenerator(); // 返回一个指向内部状态的指针对象（遍历器对象）
console.log(hw.next()); // { value: 'hello', done: false } next接口使得指针移向下一个状态
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
console.log(hw.next()); // { value: undefined, done: true }


// Generator函数就是遍历器生成函数
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]

let obj = {
    * myGeneratorMethod1() {}, // 作为对象属性的Generator函数
    myGeneratorMethod2: function* () {}
};



