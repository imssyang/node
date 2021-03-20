
class Foo {
    constructor(...args) {
        this.args = args;
    }

    * [Symbol.iterator]() { // 默认遍历器
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo('Hello', 'world')) {
    console.log(x);
}



