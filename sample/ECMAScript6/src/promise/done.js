// 无论Promise对象的回调链以then方法还是catch方法结尾，只要最后一个方法抛出错误，
// 都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此自定义done方法：
// 用于捕获任何可能出现的错误，并向全局抛出。
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function (reason) {
            setTimeout(() => { throw reason }, 0);
        });
};

Promise.resolve().then(function () {
    console.log('test');
}).done();

