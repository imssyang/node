
// Class可以通过extends关键字实现继承，这比ES5通过修改原型链实现继承更清晰
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(new.target.name);
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 相当于Point.prototype.constructor.call(this)
        this.color = color;
    }
}

let ap = new Point(39, 406);
let cp = new ColorPoint(25, 8, 'green');
console.log(
    ap,
    cp,
    cp instanceof ColorPoint, // true
    cp instanceof Point, // true
    Object.getPrototypeOf(ColorPoint) === Point // true getPrototypeOf可以用子类上获取父类
);


class A {
    constructor() {
        this.p = 2;
    }
}
class B extends A {
    get m() {
        return super.p;
    }
}
let b = new B();
console.log(
    b.m // 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性时无法通过super调用的
);


class A2 {}
A2.prototype.x = 2;
class B2 extends A2 {
    constructor() {
        super();
        console.log(super.x); // 2 属性定义在父类的原型对象上，super就可以取到
    }
}
let b2 = new B2();


// ES6规定通过super调用父类的方法时，super会绑定子类的this。
class A3 {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}
class B3 extends A3 {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}
let b3 = new B3();
b3.m(); // 2


