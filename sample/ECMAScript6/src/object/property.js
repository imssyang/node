//
// ES6允许直接写入变量和函数作为对象的属性和方法
//
var foo = 'bar';
var baz = {foo}; // ES6允许在对象中只写属性名，不写属性值。这时属性值等于属性名所代表的变量
console.log(foo, baz);

var baz2 = {foo: foo};
console.log(baz2);

function f1(x, y) {
    return {x, y}; // 属性简写
}
// -->等价
function f2(x, y) {
    return {x: x, y: y};
}

var o1 = {
    method() { // 方法简写
        return 'Hello!';
    }
};
var o2 = {
    method: function () {
        return 'Hello!';
    }
};

// 简写示例
var birth = '2000/01/01';
var Person = {
    name: 'zhangsan',
    birth, // 属性简写
    hello() { console.log('my name is ', this.name); }, // 方法简写
};

var obj1 = {
    class () {} // 等同于'class': function() {}  简洁写法中属性名总是字符串
};
var obj2 = {
    * m() { // Generator函数的前面要加上星号
        yield 'hello world';
    }
};
console.log(obj1, obj2);

//
// 属性名表达式
//

var obj3 = {};
obj3.foo = true;        // 定义对象属性foo
obj3['a' + 'bc'] = 123; // 定义对象属性abc
console.log(obj3);

// ES5定义属性
var obj4 = {
    foo: true,
    abc: 123,
};

// ES6允许字面量定义属性（表达式作为对象的属性名）
let propKey = 'foo';
let obj5 = {
    [propKey]: true,
    ['a' + 'bc']: 123,
};

var lastWord = 'last word';
var a1 = {
    'first word': 'hello',
    [lastWord]: 'world',
};
console.log(
    a1,
    a1['first word'],
    a1[lastWord],
    a1['last word'],
);

let obj6 = {
    ['h' + 'ello']() { // 表达式定义方法名
        return 'hi';
    }
};
console.log(
    obj6.hello()
);

var foo1 = 'bar';
var baz1 = {[foo1]: 'abc'}; // 不能 var baz1 = {[foo1]}; 属性名表达式与简洁表达式不能同时使用
console.log(baz1);

//
// 函数的name属性
//

const person = {
    sayName() {
        console.log('hello!');
    },
};
console.log(person.sayName.name); // name属性返回方法名

const obj7 = {
    get foo() {},
    set foo(x) {},
};
// obj7.foo.name; // TypeError: getter/setter方法的name属性不在该方法上面
const desc = Object.getOwnPropertyDescriptor(obj7, 'foo');
console.log(
    desc.get.name,
    desc.set.name,
);

var doSomething = function () {};
console.log(
    doSomething.name,
    doSomething.bind().name, // bing方法创造的函数，name属性带’bound'前缀
    (new Function()).name, // Function构造函数创造的函数，name属性返回‘anonymous’
);

const key1 = Symbol('desc');
const key2 = Symbol();
let obj8 = {
    [key1]() {},
    [key2]() {},
};
console.log(
    obj8[key1].name, // 对象的方法是一个Symbol值时，name属性返回这个Symbol值的描述
    obj8[key2].name,
);


