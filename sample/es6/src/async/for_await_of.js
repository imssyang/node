// ES6引入for await...of循环用于遍历异步的Iterator接口。



// for await...of也可以用于同步遍历器
(async function () {
    for await (const x of ['a', 'b']) {
        console.log(x);
    }
})();

