// ES6引入for await...of循环用于遍历异步的Iterator接口。

// 示例：创建异步遍历器（通过异步Generator创建）
async function* createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

// 示例：遍历异步Iterator接口
async function f0() {
    for await (const x of createAsyncIterable(['a', 'b'])) {
        console.log('F0:', x);
    }
}
f0();

// for await...of也可以用于同步遍历器
(async function () {
    for await (const x of ['a', 'b']) {
        console.log('F1:', x);
    }
})();

