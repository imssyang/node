// ES6不提供私有方法，可以通过约定写法区分
class Widget {
    foo (baz) { // 公有方法
        this._bar(baz);
    }

    _bar(baz) { // 私有方法
        return this.snaf = baz;
    }
}

// ES6将私有方法移出模块，以示区分
class Widget2 {
    foo (baz) { // 公有方法
        bar.call(this, baz);
    }
}

function bar(baz) { // 私有方法
    return this.snaf = baz;
}

// 利用Symbol值的唯一性将私有方法命名
const bar3 = Symbol('bar');
const snaf3 = Symbol('snaf');
class Widget3 {
    foo (baz) { // 公有方法
        this[bar3](baz);
    }

    [bar3](baz) { // 私有方法
        return this[snaf3] = baz;
    }
}