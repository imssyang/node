// WeakSet与Set区别：
// 1. WeakSet的成员只能是对象，而不能是其他类型的值；
// 2. WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用。
// 因此，WeakSet的内部有多少个成员受到垃圾回收机制有没有运行的影响，
// 而垃圾回收机制何时运行是不可预测的，因此ES6规定WeakSet不可遍历。

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(a, ws);


