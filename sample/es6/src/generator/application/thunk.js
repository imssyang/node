// Thunk函数是”传名函数“的一种实现策略，可以用来替换某个表达式。
// JavaScript和C语言一样，是传值调用。在JavaScript中，Thunk函数替换的不是表达式，而是多参数函数，
// 将其替换成一个只接收回调函数作为参数的单参数函数。

var fs = require('fs');

// 正常版本的readFile（多参数版本）
fs.readFile('thunk.js', console.log);

// Thunk版本的readFile（单参数版本）
var Thunk = function (fileName) {
    return function (callback) {
        return fs.readFile(fileName, callback);
    };
};
var readFileThunk = Thunk('thunk.js');
readFileThunk(console.log); // 这个单参数版本就叫做”Thunk函数“

// 任何函数，只要参数有回调函数，就能写成Thunk函数的形式
var ThunkES5 = function (fn) { // 转换器
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this, args);
        }
    };
};
const ThunkES6 = function (fn) { // 转换器
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        };
    };
};
var readFileThunk2 = ThunkES6(fs.readFile); // 生成fs.readFile的Thunk函数
readFileThunk2('thunk.js')(console.log);

// 使用thunkify模块
var thunkify = require('thunkify');
var readFileThunkify = thunkify(fs.readFile);
readFileThunkify('thunk.js')(console.log);


// Thunk函数可以用于Generator函数的自动流程管理
var gen = function* () {
    var r1 = yield readFileThunkify('thunk.js'); // yield将执行器移出Generator函数
    console.log('r1', r1);
    var r2 = yield readFileThunkify('coroutine.js'); // yield将执行器移出Generator函数
    console.log('r2', r2);
};
var g = gen();
var r1 = g.next();
r1.value(function (err, data) {
    if (err) throw err;
    var r2 = g.next(data); // next将执行权交还给Generator函数
    r2.value(function (err, data) {
        if (err) throw err;
        g.next(data); // next将执行权交还给Generator函数
    });
});

// Thunk函数真正的威力在于可以自动执行Generator函数。
function runAuto(fn) { // Generator函数的自动执行器
    var gen = fn();

    function next(err, data) { // Thunk的回调函数
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
}
function* genTest() {
    var r1 = yield readFileThunkify('thunk.js'); // 异步操作必须是Thunk函数
    console.log('rr1', r1);
    var r2 = yield readFileThunkify('coroutine.js'); // 异步操作必须是Thunk函数
    console.log('rr2', r2);
}
runAuto(genTest); // 一行代码执行异步操作，并且像同步一样


