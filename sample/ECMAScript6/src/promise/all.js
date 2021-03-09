// Promise.all方法用于将多个Promise实例包装成一个新的Promise实例。
//       var p = Promise.all([p1, p2, p3]);
// Promise.all的参数支持具有Iterator接口的结构。
// p的状态由p1、p2、p3决定，分成两种情况：
// 1. 只有p1、p2、p3的状态都变成Fulfilled，p的状态才会变成Fulfilled，
//    此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// 2. 只要p1、p2、p3中有一个被Rejected，p的状态就变成Rejected，此时
//    第一个被Rejected的实例的返回值会传递给p的回调函数。

/*
const p1 = new Promise((resolve, reject) => {
    resolve('hello1');
});
const p2 = new Promise((resolve, reject) => {
    resolve('world2');
});
const p3 = new Promise((resolve, reject) => {
    throw new Error('error3');
});
Promise.all([p1, p2])
    .then(result => console.log('ALL1:', result))
    .catch(e => console.log('ALL1:', e));
process.on('unhandledRejection', function (err, p) { // NODE专门监听未捕获的reject错误
    console.error('[unhandledRejection]', err.stack);
});
*/


const p4 = new Promise((resolve, reject) => {
    resolve('hello4');
}).then(result => console.log('P4:', result)) // all里的p4实际是then返回的新Promise
    .catch(e => console.log('P4:', e));

const p5 = new Promise((resolve, reject) => {
    resolve('world5');
});
p5.then(result => console.log('P5:', result))
    .catch(e => console.log('P5:', e));

const p6 = new Promise((resolve, reject) => {
    throw new Error('error6');
}).then(result => console.log('P6:', result))
    .catch(e => console.log('P6:', e)); // all里的p6实际是catch返回的新Promise

Promise.all([p4, p5, p6])
    .then(result => console.log('ALL2:', result))
    .catch(e => console.log('ALL2:', e));

