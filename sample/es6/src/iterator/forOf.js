// 数组原生具备iterator接口
const arr = ['red', 'green', 'blue'];
for (let v of arr) {
    console.log(v); // red green blue
}
const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr); // 为空对象obj部署数组arr的Symbol.iterator属性
for (let v of obj) {
    console.log(v); // red green blue
}
arr.forEach(function (element, index) { // 可以用for...of代替
    console.log(index, element);
});
for (let a in arr) {
    console.log(a); // 0, 1, 2 for...in只能获取键名，不能获取键值
}



