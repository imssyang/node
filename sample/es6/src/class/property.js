// ES6不支持私有属性

/*
class Point {
    #x;

    constructor(x = 0) {
        #x = +x;
    }
}
*/

class MyClass {
    myProp = 42;  // 实例属性（ES6允许在构造函数外部定义）

    constructor() {
        console.log(this.myProp); // 42
    }
}


