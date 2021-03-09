// Promise.resolve方法将现有对象转为Promise对象。
//    Promise.resolve('foo')  等价于
//    new Promise(resolve => resolve('foo'))

// 情况1：参数是一个Promise实例
// 此时Promise.resolve将不做任何修改，原封不动的返回这个实例。

// 情况2：参数是一个thenable对象（具有then方法）
// 此时Promise.resolve会将这个对象转为Promise对象，然后立即执行thenable对象的then方法。
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};
let p1 = Promise.resolve(thenable);
p1.then(function (value) {
    console.log(value); // 42
});

// 情况3：参数不是具有then方法的对象或根本不是对象
// 此时Promise.resolve方法返回一个新的Promise对象，状态为Resolved.
var p2 = Promise.resolve('Hello');
p2.then(function (s) {
    console.log(s); // Hello
});

// 情况4：不带有任何参数
// 此时直接返回一个Resolved状态的Promise对象。
var p3 = Promise.resolve();
p3.then(function () {
    console.log('p3');
});


setTimeout(function () {
    console.log('three'); // 在下一轮“事件循环”开始时执行
}, 0);
Promise.resolve().then(function () {
    console.log('two'); // 在本轮“事件循环”结束时执行
});
console.log('one'); // 立即执行

