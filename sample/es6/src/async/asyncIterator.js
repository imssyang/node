// Iterator接口是一种数据遍历的协议，只要调用遍历器对象的next方法就会得到一个对象，表示当前遍历指针所在位置的信息。
// next方法返回的对象的结构是{value, done}，其中value表示当前数据的值，done是个布尔值，表示遍历是否结束。
// 问题：因此Iterator接口隐含着next方法必须是同步的，只要调用就必须立刻返回值。如果遍历指针指向异步操作，该怎么办？
// 解决：Generator函数里面的异步操作返回一个Thunk函数或者Promise对象，即value属性是一个Thunk函数或者Promise对象，
//      等待以后返回真正的值，而done属性还是同步产生的。

// 异步遍历器（AsyncIterator）为异步操作提供原生的遍历器接口，即value和done这两个属性都是异步产生的。
// 对象的异步遍历器接口部署在Symbol.asyncIterator属性上面。不管是什么样的对象，
// 只要它的Symbol.asyncIterator属性有值，就表示应该对它进行异步遍历。

// 示例：创建异步遍历器（通过异步Generator创建）
async function* createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

// 示例：使用异步遍历器
function asyncRun0() {
    const asyncIterable = createAsyncIterable(['a', 'b']);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    asyncIterator.next().then(iterResult1 => { // next接口返回一个Promise对象，Promise对象的状态变为resolve后的回调函数的参数是一个{value, done}对象
        console.log('R0:', iterResult1);     // { value: 'a', done: false }
        return asyncIterator.next();
    }).then(iterResult2 => {
        console.log('R0:', iterResult2);    // { value: 'b', done: false }
        return asyncIterator.next();
    }).then(iterResult3 => {
        console.log('R0:', iterResult3);    // { value: undefined, done: true }
    });
}
asyncRun0();

// 示例：使用异步遍历器（异步遍历器的next方法返回的是一个Promise对象，因此，可以把它放在await命令后面获取异步结果）
async function asyncRun1() {
    const asyncIterable = createAsyncIterable(['a', 'b']);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    console.log('R1:', await asyncIterator.next()); // { value: 'a', done: false }
    console.log('R1:', await asyncIterator.next()); // { value: 'b', done: false }
    console.log('R1:', await asyncIterator.next()); // { value: undefined, done: true }
}
asyncRun1();

// 示例：使用异步遍历器（异步遍历器的next方法是可以连续调用的，不必等到上一步产生的Promise对象resolve以后再调用）
async function asyncRun2() {
    const asyncGenObj = createAsyncIterable(['a', 'b']);
    const [{value: v1}, {value: v2}] = await Promise.all([
        asyncGenObj.next(), asyncGenObj.next()
    ]);
    console.log('R2:', v1, v2); // a b
}
asyncRun2();


