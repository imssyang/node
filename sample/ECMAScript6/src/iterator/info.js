// ES5表示集合的数据结构主要是数组（Array）和对象（Object）。ES6又添加了Set和Map。
// 遍历器（Iterator）为不同的数据结构提供一种统一的访问机制。
// 任何数据结构，只要部署Iterator接口，就可以完成遍历操作。
//
// Iterator的3个作用；
// 1. 为各种数据结构提供一个统一的、简便的访问接口；
// 2. 使得数据结构的成员能够按某种次序排列；
// 3. ES6创造了一种新的遍历命令 —— for...of循环。
//
// Iterator的遍历过程：
// 1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上就是一个指针对象；
// 2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员；
// 3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员；
// 4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置。

// 模拟
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }
    };
}
var it = makeIterator(['a', 'b']);
console.log(
    it.next(),
    it.next(),
    it.next(),
);








