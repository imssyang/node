// ES6规定，默认的Iterator接口部署在数据结构的Symbol.iterator属性，
// 或者说，一个数据结构只要具有Symbol.iterator属性，就认为是可遍历的（iterable）。
const obj = {
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};

// ES6原生具备Iterator接口的数据结构如下：
// Array/Map/Set/String/TypedArray/函数的arguments对象/NodeList对象。
// 注意: Object对象原生不支持Iterable接口，因为遍历的先后顺序是不确定的。
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(
    iter.next(),
    iter.next(),
    iter.next(),
    iter.next()
);

// 在Symbol.iterator属性上部署遍历器生成方法
class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() { return this; }

    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return {done: false, value: value};
        }
        return {done: true, value: undefined};
    }
}
function range(start, stop) {
    return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
    console.log(value); // 0, 1, 2
}

// 通过遍历器实现指针结构
function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function () {
    var iterator = {next: next};
    var current = this;
    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return {done: false, value: value};
        } else {
            return {done: true};
        }
    }
    return iterator;
}
var one = new Obj(11);
var two = new Obj(22);
var three = new Obj(33);
one.next = two;
two.next = three;
for (var i of one) {
    console.log(i); // 11, 22, 33
}

// 为对象添加Iterator接口的示例
let o2 = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};

// 类似数组的对象（存在数值键名和length属性），可以使用Symbol.iterator方法直接引用数组的Iterator。
// eg: NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// eg: NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
}


