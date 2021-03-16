// ES6引入新的原始数据类型Symbol，表示独一无二的值。
// 由于Symbol不是对象，因此不能使用new，不能添加属性，其行为类似字符串。
// 其他基本类型为：Undefined、Null、Boolean、String、Number和Object。

let s1 = Symbol();
let s2 = Symbol();
let s3 = Symbol('foo');
let s4 = Symbol('bar');
console.log(
    typeof s1,
    s1 === s2, // Symbol函数的参数只表示当前的描述，因此相同参数的Symbol函数的返回值是不相等的
    s1, s2, s3, s4);

const o1 = {
    toString() {
        return 'abc';
    }
};
const s5 = Symbol(o1);
console.log(
    s5,
    String(s5),    // 可以转换为String
    s5.toString(), // 可以转换为String
    Boolean(s5), // 可以转换为Boolean
    !s5,         // 可以转换为Boolean
);

// 由于每个Symbol值都是不相等的，因此将Symbol用作标识符用于对象的属性名，保证不会出现同名的情况。
var s6 = Symbol();
var a1 = {};
a1[s6] = 'Hello!';
var a2 = { [s6]: 'Hello!' }; // Symbol值必须放在方括号中定义属性
var a3 = {};
Object.defineProperty(a3, s6, {value: 'Hello!'});
console.log(
    a1, a2,
    a3, a3[s6],
    a1.s6, // undefined 不能使用.运算符
    a1[s6], // Hello!
    a1['s6'], // undefined
    Object.getOwnPropertySymbols(a1),
);

function log(l, s) {
    console.log(l, s);
};
log.level = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
}
log(log.level.DEBUG, 'debug message');




