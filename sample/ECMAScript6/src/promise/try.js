// 目的：
// 不用区分函数f是同步函数还是异步函数，都用Promise的then方法指定下一步流程，
// 用catch方法处理f抛出的错误，这样避免同步情况可能带来的阻塞。但是要保证Promise
// 包装后，在逻辑上同步函数仍是同步执行，异步函数仍是异步执行的。

// 问题：同步函数被Promise包装后变成异步函数，导致执行次序发生了改变。
const f = () => console.log('now'); // 同步函数
Promise.resolve().then(f); // 异步：在本轮事件循环的末尾执行
console.log('next'); // 同步：立即执行
// next
// now

// 改善1：使用立即执行的匿名函数来执行new Promise().
const f1 = () => console.log('now-1');
(
    () => new Promise(
        resolve => resolve(f1())
    ) // 匿名函数
)(); // 立即执行（如果f1是异步的，这句要改为‘)().then(...);’以指定异步的下一步）
console.log('next-1'); // 立即执行
//now-1
//next-1

// 改善2：使用async函数
const f2 = () => console.log('now-2');
(
    async () => f2() // 匿名函数
)(); // 立即执行（如果f1是异步的，这句要改为‘)().then(...);’以指定异步的下一步）
     // 注意f1如果抛出错误，这里必须使用Promise.catch方法捕获。
console.log('next-2'); // 立即执行
//now-2
//next-2

// 改善3：使用Promise.try
const f3 = () => console.log('now-3');
//Promise.try(f3); // 提案
console.log('next-3');

// 推荐：Promise.try为所有操作提供了统一的处理机制
//Promise.try() // 实际Promise.try模拟了try代码块，就像Promise.catch模拟catche代码块一样。
//    .then(...) // 管理下一步流程
//    .catch(...) // 统一用Promise.catch捕获所有同步和异步的错误

