//
// Object.assign方法用于将源对象的所有可枚举属性复制到目标对象（浅复制）。
//

var target1 = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};
Object.assign(target1, source1, source2);
console.log(target1);

var target2 = {a: 1, b: 1};
var source3 = {b: 2, c: 2};
var source4 = {c: 3};
Object.assign(target2, source3, source4); // 同名属性：后面的会覆盖前面的
console.log(target2);

var obj1 = {a: 1};
console.log(
    Object.assign(obj1) === obj1,  // true 只有一个参数时，会直接返回该参数
    Object.assign(obj1),
    Object.assign(2), // 自动转成对象后返回
    //Object.assign(undefined), // Error: 无法转成对象
    //Object.assign(null), // Error: 无法转成对象
);

var o1 = {a: {b: 1}};
var o2 = Object.assign({}, o1);
o1.a.b = 2; // assign是浅复制，o2里引用了o1对象
console.log(o1, o2);

var target3 = {a: {b: 'c', d: 'e'}};
var source5 = {a: {b: 'hello'}};
console.log(
    Object.assign(target3, source5), // 同名属性，直接替换而不是添加
    target3,
);

console.log(
    Object.assign([1, 2, 3], [4, 5]), // 把数组视为属性名为0、1、2的对象
);

// 为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y}); // assign把x和y属性添加到Point类的对象实例中
    }
}
console.log(new Point());

// 为对象添加方法
Object.assign(Point.prototype, {
    add(m, n) {}, // 等同 Point.prototype.add = function (m, n) {};
    del(m, n) {}, // 等同 Point.prototype.del = function (m, n) {};
});
console.log(new Point().add);

// 克隆对象
function clone1(origin) {
    return Object.assign({}, origin); // 只能克隆原始对象的值，不能克隆它继承的值
}

function clone2(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin); // 克隆时保持继承链
}

// 为属性指定默认值
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html',
};
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
}


