//
// const声明一个只读的常量，作用域同let命令。
//

const PI = 3.1415;
//const PI2; // SyntaxError: Missing initializer in const declaration

//
// const实质是保证变量指向的内存地址不得改动。
// 对于简单类型，值就保存在变量指向的内存地址中，因此等同于常量；
// 对于复合类型，变量指向的内存地址保存的只是一个指针。
//

const foo = {};
foo.prop = 123;
console.log(foo.prop); // 123
//foo = {}; // TypeError: Assignment to constant variable.

const foo2 = Object.freeze({}); // 使用此方法将对象冻结，使得无法修改。
foo2.prop = 123;
console.log(foo2.prop); // undefined/Error

// 将对象本身以及属性都冻结
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] == 'object') {
            constantize(obj[key]);
        }
    });
};
