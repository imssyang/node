//
// ES6引入Promise处理异步编程。Promise对象是一个容器，里面保存着某个未来才会结束的事件的结果。
// Promise对象特点：
// 1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有3种状态：Pending(进行中)、Fulfilled(已成功)和Rejected(已失败).
//    只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
// 2. 一旦状态改变就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变只有两种可能：
//    a) 从Pending变为Fulfilled；
//    b) 从Pending变为Rejected;
//    只要这两种情况发生，状态就不会再变，这时就称为Resolved(已定型)。
//

var promise = new Promise(function(resolve, reject) {  // 构造函数
    if (true) {
        resolve('success'); // 将异步操作结果传递出去
    } else {
        reject('failure'); // 将异步操作结果传递出去
    }
});

promise.then(function (value) {  // 分别指定Resolved状态和Rejected状态的回调函数
    console.log('success');
}, function (error) {
    console.log('failure');
});

// 示例
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});
timeout(3000).then((value) => {
    console.log(value);
});

// 示例
let promise2 = new Promise(function (resolve, reject) {
    console.log('Promise'); // 构造时立即执行
    resolve();
});

promise.then(function () {
    console.log('Resolved.'); // 产生结果时执行
});

console.log('Hi!');

// 嵌套
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 5000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000);    // 一个异步操作的结果是返回另一个异步操作
    //setTimeout(() => p1.then(resolve, reject), 1000);  // 相当
});
p2.then(result => console.log(result))
    .catch(error => console.log(error));

new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);  // 先打印
}).then(r => {
    console.log(r);  // 后打印
});


