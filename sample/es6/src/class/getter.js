// 与ES5一样，类的内部可以使用get和set关键字
class MyClass {
    constructor() {
    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.log('setter:' + value);
    }
}

let inst = new MyClass();
inst.prop = 123;  // setter
console.log(inst.prop); // getter

