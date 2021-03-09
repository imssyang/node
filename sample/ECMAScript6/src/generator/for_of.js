// for...of循环可以自动遍历Generator函数生成的Iterator对象，且此时不再需要调用next方法。
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for (let v of foo()) { // 一旦done属性为true就终止，因此不会打印6
    console.log(v); // 1 2 3 4 5
}

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
for (let n of fibonacci()) {
    if (n > 100) break;
    console.log(n);
}

function* objectEntries(obj) { // 为原生js对象扩展遍历接口
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
let jane = {first: 'Jane', last: 'Doe'};
for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}

function* objectEntries2() { // 为原生js对象扩展遍历接口
    let propKeys = Reflect.ownKeys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}
let jane2 = {first: 'Jane', last: 'Doe'};
jane2[Symbol.iterator] = objectEntries2;
for (let [key, value] of jane2) {
    console.log(key, value);
}

function* numbers () {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}
console.log(
    [...numbers()],  // 扩展运算符
    Array.from(numbers()) // Array.from方法
);
let [x, y] = numbers(); // 解构赋值
for (let n of numbers()) { // for...of循环
    console.log(n);
}


