// 协程（coroutine）是一种程序运行的方式，可以理解成”协作的线程“或”协作的函数“。协程既可以用单线程实现，也可以用多线程实现。
// ES6对协程的实现属于不完全实现，Generator函数被称为”半协程“，意思是只有Generator函数的调用者才能将程序的执行权还给Generator函数。
// 如果是完全实现的协程，任何函数都可以让暂停的协程继续执行。

// 异步任务的封装：Generator将异步操作表示得很简洁，但是流程管理却不方便。
var fetch = require('node-fetch');

function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url); // 暂停执行，直到调用者通过next接口交还执行权
    console.log(result.bio); // 5.打印fetch返回的json结果的bio字段
}

var g = gen(); // 1.获取遍历器对象
var result = g.next(); // 2.执行fetch接口，fetch返回一个Promise对象在遍历器对象的value属性上

result.value.then(function (data) {
    return data.json(); // 3.将fetch返回的数据转为json
}).then(function (data) {
    g.next(data); // 4.将json数据传递到Generator函数内的result
});


