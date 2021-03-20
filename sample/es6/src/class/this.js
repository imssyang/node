
// 类的方法内部的this默认指向类的实例
class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const {printName} = logger;
logger.printName();
//printName(); // Error 此时this指向运行时所在的环境，不存在print方法

// 在构造函数中绑定this，这样就不会找不到print2方法了
class Logger2 {
    constructor() {
        this.printName2 = this.printName2.bind(this);
    }

    printName2(name = 'there') {
        this.print2(`Hello2 ${name}`);
    }

    print2(text) {
        console.log(text);
    }
}

const logger2 = new Logger2();
const {printName2} = logger2;
logger2.printName2();
printName2();

// 使用箭头函数
class Logger3 {
    constructor() {
        this.printName3 = (name = 'there') => {
            this.print3(`Hello3 ${name}`);
        };
    }

    print3(text) {
        console.log(text);
    }
}

const logger3= new Logger3();
const {printName3} = logger3;
logger3.printName3();
printName3();

