// Generator就是一个异步操作的容器，它的自动执行需要一种机制，当异步操作有了结果，这种机制要自动交回执行权。
// 有两种方式可以做到这点：
// 1. 将异步操作包装成Thunk函数，在回调函数里面交回执行权；
// 2. 将异步操作包装成Promise对象，用then方法交回执行权。
// co模块将这两种自动执行器包装成一个模块，因此使用co的前提条件是，Generator函数的yield命令后面只能是Thunk函数或Promise对象。


var co = require('co');
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* () {
    var f1 = yield readFile('thunk.js');
    var f2 = yield readFile('coroutine.js');
    console.log('f1', f1);
    console.log('f2', f2);
}
co(gen).then(function () { // co函数返回一个Promise对象
    console.log('Generator finished!');
});


// 基于Promise对象的自动执行
var readFilePromise = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};
var genPromise = function* () {
    var f1 = yield readFilePromise('thunk.js');
    var f2 = yield readFilePromise('coroutine.js');
    console.log('f3', f1);
    console.log('f4', f2);
}
var gp = genPromise();
gp.next().value.then(function (data) {
    gp.next(data).value.then(function (data) {
        gp.next(data);
    });
});

// 使用Promise对象作异步操作时的自动执行器
function runPromise(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function (data) {
            next(data);
        });
    }

    next();
}
runPromise(genPromise);


