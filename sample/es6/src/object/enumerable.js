// 每个属性都有一个描述对象，用于控制该属性的行为。
let obj = {foo: 123};
console.log(
    Object.getOwnPropertyDescriptor(obj, 'foo'), // 获取属性的描述对象
    //{ value: 123, writable: true, enumerable: true, configurable: true }
);

// ES5有3个操作会忽略enumerable：false的属性：
// 1. for...in 循环：只遍历对象自身的和继承的可枚举属性（只有这个会返回继承的属性）；
// 2. Object.keys()：返回对象自身的所有可枚举属性的键名；
// 3. JSON.stringify()：只串行化对象自身的可枚举属性。
// ES6新增加一个操作：
// 1. Object.assign()：只复制对象自身的可枚举属性。
console.log(
    Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable,
    // false ES6规定：所有Class的原型方法都是不可枚举的。
);

// ES6遍历对象的属性：
// 1. for...in：循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。
// 2. Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
// 3. Object.getOwnPropertyNames(obj)：返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
// 4. Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有Symbol属性。
// 5. Reflect.ownKeys(obj)：返回一个数组，包含对象自身的所有属性（包括Symbol和不可枚举属性）。
console.log(
    Reflect.ownKeys({[Symbol()]:0, b:0, 10:0, 2:0, a:0}),
);

