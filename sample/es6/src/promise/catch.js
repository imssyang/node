// Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

// 写法1
var promise1 = new Promise(function (resolve, reject) {
    throw new Error('test');
});
promise1.catch(function (error) {
    console.log(error);
});

// 写法2
var promise2 = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise2.catch(function (error) {
    console.log(error);
});

// 写法3
var promise3 = new Promise(function (resolve, reject) {
    reject(new Error('test'));  // 等同于抛出错误
});
promise3.catch(function (error) {
    console.log(error);
});


var someTest = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('someTest') }, 0); // 在Promise函数体外抛出的，会冒泡到最外层，成了未捕获的错误
});
someTest.then(function (value) {
    console.log(value);
});
process.on('unhandledRejection', function (err, p) {
    console.error('unhandledRejection: ' + err.stack);
});

var someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        resolve(x + 2);
    });
};
someAsyncThing().catch(function (error) { // catch方法返回的还是一个Promise对象
    console.log('oh no', error);
}).then(function () {
    console.log('carry on');
});


