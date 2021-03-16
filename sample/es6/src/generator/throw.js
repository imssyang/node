// Generator函数返回的遍历器对象都有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体内捕获。
// 注意：遍历器对象的throw方法可以被Generator函数体内捕获；而全局的throw命令只能被函数体外的catch语句捕获。
var g1 = function* () {
    try {
        yield;
    } catch (e) {
        console.log('Internal1:', e); // 捕获‘a'
    }
}
var i1 = g1();
i1.next();
try {
    i1.throw('a');
    i1.throw('b');
} catch (e) {
    console.log('External1:', e); // 捕获’b'
}

var g2 = function* () {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') throw e;
            console.log('Internal2:', e); // 不会捕获
        }
    }
};
var i2 = g2();
i2.next();
try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log('External2:', e); // 捕获‘a'
}

var g3 = function* () {
    while (true) {
        yield;
        console.log('Internal3:', e); // 不会捕获(没有try...catch)
    }
};
var i3 = g3();
i3.next();
try {
    i3.throw('a');
    i3.throw('b');
} catch (e) {
    console.log('External3:', e); // 捕获‘a'
}

var g4 = function* gen() {
    yield console.log('hello');
    yield console.log('world');
};
var i4 = g4();
i4.next();
i4.throw(); // 抛出的错误，没有任何try...catch代码块可以捕获，导致程序报错，中断执行


