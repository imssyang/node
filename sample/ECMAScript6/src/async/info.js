// ES2017引入了async函数，它就是Generator函数的语法糖，使得异步操作变得更加方便。

var fs = require('fs');
var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

// Generator函数实现异步
var genReadFile = function* () {
    var f1 = yield readFile('info.js');
    var f2 = yield readFile('info.js');
    console.log('f1', f1);
    console.log('f2', f2);
}
function run(gen) { // 执行器
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
run(genReadFile);

// async函数实现异步，改进如下：
// 1.内置执行器。Generator函数必须靠执行器执行，所以才有co模块。
// 2.更好的语义。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
// 3.更广的适应性。co模块约定，yield后面只能是Thunk函数或Promise函数，而async函数的await命令后面，可以是Promise对象和原始类型的值。
// 4.返回值是Promise。async函数的返回值是Promise对象，比Generator函数的返回值是Iterator对象方便了许多。
var asyncReadFile = async function() { // 将Generator函数的星号替换成了async
    var f3 = await readFile('info.js'); // 将yield替换成await
    var f4 = await readFile('info.js'); // 将yield替换成await
    console.log('f3', f3);
    console.log('f4', f4);
};
asyncReadFile();


// 实例：执行多少毫秒后输出一个值
function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncPrint('hello world', 5000);


// 实例：改写
async function timeout2(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint2(value, ms) {
    await timeout2(ms); // async函数返回的是Promise对象，可以作为await命令的参数
    console.log(value);
}
asyncPrint2('hello world2', 5000);


// async函数内部return语句返回的值，会成为then方法回调函数的参数。
async function f1() {
    return 'hello1';
}
f1().then(v => console.log(v)); // hello1

// async函数内部抛出的错误会导致返回的Promise对象变为reject状态。
// 抛出的错误对象会被catch方法回调函数接收到。
async function f2() {
    throw new Error('error2');
}
f2().then(
    v => console.log(v),
    e => console.log(e)  // Error: error2
);


// async函数返回的Promise对象必须等到所有await命令后面的Promise对象执行完才会发生状态改变，除非遇到return语句或者抛出错误。
var fetch = require('node-fetch');
async function getTitle(url) {
    let response = await fetch(url);  // 抓取网页
    let html = await response.text(); // 取出文本
    return html.match(/<title>([\s\S]+)<\/title>/i)[1]; // 匹配页面标题
}
getTitle('https://tc39.es/ecma262/').then(console.log); // 打印匹配内容


// await命令后面如果不是一个Promise对象，会被转成一个立即resolve的Promise对象。
async function f3() {
    return await 123;
}
f3().then(v => console.log(v)); // 123

// await命令后面的Promise对象如果变成reject状态，则reject的参数会被catch方法的回调函数接收到。
async function f4() {
    await Promise.reject('Fail!');
}
f4().then(v => console.log(v)).catch(e => console.log(e));


// 只要一个await语句后面的Promise变成reject，那么整个async函数都会中断执行。
async function f5() {
    await Promise.reject('Fail5');
    await Promise.resolve('Hello5');
}
f5().then(v => console.log(v)).catch(e => console.log(e));


async function f6() {
    await Promise.reject('Fail6').catch(e => console.log(e)); // 添加catch方法，捕获内部的错误
    return await Promise.resolve('Hello6');
}
f6().then(v => console.log(v)).catch(e => console.log(e));

// await后面的异步操作出错，等同于async函数返回的Promise对象被reject.
async function f7() {
    await new Promise(function (resolve, reject) {
        throw new Error('Fail7');
    });
}
f7().then(v => console.log(v)).catch(e => console.log(e));


// 3个db.post操作是继发执行
async function dbFunc1(db) {
    let docs = [{}, {}, {}];
    for (let doc of docs) {
        await db.post(doc); // 此时等待的是异步开始操作到产生结果的整个过程完成
    }
}

// 3个db.post操作是并发执行
async function dbFunc2(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map(doc => db.post(doc)); // 数组对象map方法返回一个新数组，其中元素为原始数组元素调用函数处理后的值。
    let results = await Promise.all(promises);
    console.log(results);
}
async function dbFunc3(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map(doc => db.post(doc));
    let results = [];
    for (let promise of promises) {
        results.push(await promise); // 此时等待的是异步操作的结果（Promise对象）
    }
    console.log(results);
}

// async函数的实现原理就是将Generator函数和自动执行器包装在一个函数里。
async function f8() {
    return await Promise.resolve('Hello8');
}
f8().then(v => console.log(v));
function spawn(genF) { // 自动执行器
    return new Promise(function (resolve, reject) {
        var gen = genF();
        function step(nextF) {
            try {
                var next = nextF();
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v);
                });
            }, function (e) {
                step(function () {
                    return gen.throw(e);
                });
            });
        }
        step(function () {
            var aa = gen.next(undefined);
            return aa;
        });
    });
}
function f9() {
    return spawn(function* () { // 使用自动执行器执行异步操作
        return 'Hello9';
    });
}
f9().then(v => console.log(v));




