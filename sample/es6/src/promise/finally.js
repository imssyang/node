// 自定义finally方法用于指定不管Promise对象最后状态如何都会执行的操作。
// 它与done方法的最大区别在于，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};



