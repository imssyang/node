// 异步Generator函数的作用是返回一个异步遍历器对象，在语法上，是async函数与Generator函数的结合。
async function* gen() {
    yield 'hello';
}
const genObj = gen();
genObj.next().then(x => console.log(x)); // { value: 'hello', done: false }


// 异步遍历器使得Generator函数处理同步操作和异步操作时能够使用同一套接口。
function* map(iterable, func) {  // 同步Generator函数
    const iter = iterable[Symbol.iterator]();
    while (true) {
        const {value, done} = iter.next();
        if (done) break;
        yield func(value);
    }
}

async function* map(iterable, func) { // 异步Generator函数
    const iter = iterable[Symbol.asyncIterator]();
    while (true) {
        const {value, done} = await iter.next();
        if (done) break;
        yield func(value);
    }
}


// 示例：异步Generator函数
var fs = require('fs');
async function* readLines(path) {
    let file = await fs.readFile(path);
    try {
        while (!file.EOF) {
            yield await file.readLine(); // await命令用于将外部操作产生的值输入函数内部，yield命令用于将函数内部的值输出。
        }
    } finally {
        await file.close();
    }
}
(async function () {
    //for await (const line of readLines('asyncGenerator.js')) {
    //    console.log(line);
    //}
})();

// 异步Generator函数可以与for await...of循环结合起来使用。
async function* prefixLines(asyncIterable) {
    for await (const line of asyncIterable) {
        yield '> ' + line;
    }
}


// 异步Generator函数的执行器
async function takeAsync(asyncIterable, count = Infinity) {
    const result = [];
    const iterator = asyncIterable[Symbol.asyncIterator]();
    while (result.length < count) {
        const {value, done} = await iterator.next();
        if (done) break;
        result.push(value);
    }
    return result;
}
async function f() {
    async function* gen() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
    return await takeAsync(gen());
}
f().then(function (result) {
    console.log(result);
});


