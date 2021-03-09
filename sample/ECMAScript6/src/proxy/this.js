// Proxy不是目标对象的透明代理，即不做任何拦截的情况下也无法保证与目标对象的行为一致。
// 主要原因是在Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理。

const target = {
    m: function () {
        console.log(this === proxy);
    }
};
const handler = {};
const proxy = new Proxy(target, handler);
console.log(
    target.m(),  // false
    proxy.m(),   // true
);

const _name = new WeakMap();
class Person {
    constructor(name) {
        _name.set(this, name); // 保存到外部WeakMap对象上，通过this键区分
    }
    get name() {
        return _name.get(this);
    }
}
const jane = new Person('Jane');
console.log(jane.name); // Jane
const pProxy = new Proxy(jane, {});
console.log(pProxy.name); // undefined 由于this指向的变化导致Proxy无法代理目标对象
