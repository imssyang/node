// ES6 Proxy提供了一种机制可以对外界的访问进行过滤和改写。

// 对一个空对象进行了一层拦截，重定义了属性的读取和设置行为
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key} ${value}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1; //setting count 1!
++obj.count;   //getting count! setting count 2!

// 拦截示例
var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
});
console.log(
    proxy.time, // 35
    proxy.name, // 35
);

var target = {};
var handler = {};
var proxy2 = new Proxy(target, handler); // handler为空对象，没有拦截效果，访问handler就等同于访问target
proxy2.a = 'b';
console.log(
    target.a,
    target,
    handler,
    proxy2
);

var handler3 = {
    get: function (target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },
    apply: function (target, thisBinding, args) {
        return args[0];
    },
    construct: function (target, args) {
        return {value: args[1]};
    }
};
var proxy3 = new Proxy(function (x, y) {
    return x + y;
}, handler3);
console.log(
    proxy3(1, 2),      // 1
    new proxy3(1, 2),  // { value: 2 }
    proxy3.prototype === Object.prototype, // true
    proxy3.foo         // Hello, foo
);




