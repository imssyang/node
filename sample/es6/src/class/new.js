// ES6为new命令引入了new.target属性
function Person1(name) {
    if (new.target !== undefined) {
        this.name = name;
    } else {
        throw new Error('1: Must use new');
    }
}

function Person2(name) {
    if (new.target === Person2) { // 函数内部调用new.target，返回当前Class
        this.name = name;
    } else {
        throw new Error('2: Must use new');
    }
}

var person2 = new Person2('ZhangSan'); // right
//var notAPerson = Person2.call(person2, 'ZhangSan'); // error


class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

console.log(
    new Rectangle(3, 5), // true
    new Square(3) // false 子类继承父类时new.target会返回子类
);







