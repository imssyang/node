// JS的Object本质上是键值对的集合，但是只能用字符串作为键。
// ES6提供Map数据结构，它类似于对象，但是键的范围可以是各种类型（包括对象）。

const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content');
console.log(
    o,
    m,
    m.get(o),
    m.has(o), // true
    m.delete(o),
);

const m1 = new Map([
    ['name', 'zhangsan'],
    ['title', 'Author'],
]);
console.log(
    m1.size,
    m1.has('name'),
    m1.get('name'),
);

const m2 = new Map();
m2.set(1, 'aaa').set(1, 'bbb'); // 后一次的值覆盖了前一次的值
console.log(m2);

const m3 = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
console.log(m3);
console.log(...m3); // 使用扩展运算符将Map转为数组

const m4 = new Map([
    [true, 7],
    [{foo: 3}, ['abc']],
]);
console.log(m4); // 数组转为Map

function strMapToObj(strMap) { // Map转为对象（所有键必须为字符串）
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
const myMap = new Map()
    .set('yes', true)
    .set('no', false);
console.log(strMapToObj(myMap));

function objToStrMap(obj) { // 对象转为Map
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
console.log(objToStrMap({yes: true, no: false}));

function strMapToJson(strMap) { // Map转Json(所有键都是字符串时)
    return JSON.stringify(strMapToObj(strMap));
}
let myMap2 = new Map().set('yes', true).set('no', false);
console.log(myMap2);

function mapToArrayJson(map) { // Map转Json(键中含有非字符串时)
    return JSON.stringify([...map]);
}
let myMap3 = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log(mapToArrayJson(myMap3));

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}
console.log(
    jsonToStrMap('{"yes": true, "no": false}')
);

