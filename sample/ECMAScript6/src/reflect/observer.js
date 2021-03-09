// 观察者模式

const queue = new Set(); // 观察者集合
const observer = fn => queue.add(fn); // 注册观察者
const observable = obj => new Proxy(obj, {set}); // 代理原始对象，拦截赋值操作
function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queue.forEach(observer => observer()); // 默认行为完成后立即执行所有观察者
    return result;
}

const person = observable({ // 观察目标
    name: 'ZhangSan',
    age: 20
});
function print() { // 观察者
    console.log(`${person.name}, ${person.age}`);
}
observer(print); // 注册观察者
person.name = 'LiSi';
person.age = 28;

