// ES6提供Reflect对象操作对象，

// 设计目的1：
// 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty）放到Reflect对象上。
// 也就是说，从Reflect对象上可以获得语言内部的方法。


// 设计目的2：
// 修改某些Object方法的返回结果，让其变得更合理。
var target = {};
var property = {};
var attributes = {};

try {
    Object.defineProperty(target, property, attributes); // 无法定义属性时抛出错误
    // success
} catch (e) {
    // failure
}

if (Reflect.defineProperty(target, property, attributes)) { // 无法定义属性时返回false
    // success
} else {
    // failure
}

// 设计目的3：
// 让Object操作都变成函数行为。
if ('assign' in Object) { console.log('old'); }
if (Reflect.has(Object, 'assign')) { console.log('new'); }

// 设计目的4：
// Reflect对象的方法与Proxy对象的方法一一对应，使得Proxy对象可以方便地调用对应的Reflect方法来完成默认行为。
// 也就是说，无论Proxy怎么修改默认行为，始终可以在Reflect上获取默认行为。
new Proxy({}, {
    set: function (target, name, value, receiver) {
        var success = Reflect.set(target, name, value, receiver);
        if (success) {
            console.log('property ' + name + ' on ' + target + ' set to ' + value);
        }
        return success;
    }
});
