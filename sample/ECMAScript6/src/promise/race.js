// Promise.race方法同样是将多个Promise实例包装成一个新的Promise实例。
//     var p = Promise.race([p1, p2, p3]);
// 只要p1、p2、p3中有一个实例率先改变状态，p的状态就跟着改变。
// 那个率先改变的Promise实例的返回值就传递给p的回调函数。

const p = Promise.race([
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout 2000')), 2000)
    }),
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout 5000')), 5000)
    })
]);
p.then(response => console.log(response));
p.catch(error => console.log(error));

process.on('unhandledRejection', function (err, p) { // NODE专门监听未捕获的reject错误
    console.error('[unhandledRejection]', err.stack);
});