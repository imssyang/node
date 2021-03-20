// ES5对象
function Point(x, y) { // 构造函数
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () { // 方法
    return '(' + this.x + ', ' + this.y + ')';
};

console.log(
    new Point(1, 2),
    typeof Point, // function
    Point == Point.prototype.constructor, // true
    Point.prototype // 所有方法都在prototype属性上
);


// ES6提供了更接近传统语言的写法，引入了Class关键字作为对象的模板。
let methodName = 'getArea';
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {  // ES6内部定义的类不可枚举
        return '(' + this.x + ', ' + this.y + ')';
    }

    [methodName]() { // 类的属性名可以采用表达式
        return 'expression';
    }
}

Object.assign(Point2.prototype, {  // Object.assign方法可以一次向类添加多个方法
    toKey() {},
    toValue() {}
});

console.log(
    new Point2(1, 2),
    typeof Point2, // function 类的数据类型就是函数
    Point2 == Point2.prototype.constructor, // true 类本身就指向构造函数
    Point2.prototype,
    Object.getOwnPropertyNames(Point2.prototype)
);


// 使用表达式形式定义类
const MyClass = class Me { // 类名为MyClass，Me只在Class的内部可用（可省略）
    getClassName() {
        return Me.name;
    }
};

let inst = new MyClass();
console.log(
    inst.getClassName() // Me
);

