// ES6规定Class内部只有静态方法，没有静态属性。
class Foo {
    static myStaticProp = 42; // 静态属性(新写法)

    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }

    static classMethod() { // 静态方法，可被继承
        return 'hello';
    }
}

Foo.prop = 100; // 静态属性(旧写法)

class Bar extends Foo {
}

class Zar extends Bar {
    static classMethod() {
        return super.classMethod() + ', too'; // 通过super对象调用静态方法
    }
}

console.log(
    Foo.classMethod(),
    Bar.classMethod(),
    Zar.classMethod(),

    Foo.prop,
    Foo.myStaticProp
);


