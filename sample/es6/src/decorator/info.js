// ES2017引入修饰器（Decorator），是一个函数，用来修改类的行为。

@testable  // 为此类加上了静态属性isTestable，等同于调用testable(MyTestableClass)
class MyTestableClass {}

function testable(target) {
    target.isTestable = true;
}

console.log(
    MyTestableClass.isTestable
);

