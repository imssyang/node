// ES6允许使用箭头（=>）定义函数
var f1 = v => v;
var f2 = function (v) {
    return v;
};

var f3 = () => 5;
var f4 = function () { return 5 };

var f5 = (a, b) => { return a + b; }
var f6 = id => ({id: 123, name: 'Temp'}); // 由于大括号被解释为代码块，所以如果返回一个对象时，必须加上括号。

const full = ({first, last}) => first + ' ' + last; // 箭头函数与变量解构结合使用

[1,2,3].map(function (x) { return x * x; });
[1,2,3].map(x => x * x); //箭头函数简化了回调函数

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));

//
// 注意事项：
// 1. 函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。
// 2. 不可以当作构造函数。也就是说，不可以使用new命令，否则会抛出一个错误。
// 3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。
// 4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。
// 由于箭头函数没有自己的this，因此不能用call()/apply()/bind()方法去改变this的指向。
//

function foo() {
    // 箭头函数可以让setTimeout里面的this绑定定义时所在的作用域，而不是指向运行时所在的作用域。
    setTimeout(() => {
        console.log('id:', this.id); // 42
    }, 100)
}
var id = 21;
foo.call({id: 42});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000); // this绑定定义时所在的作用域
    setInterval(function () { this.s2++ }, 1000); // this指向运行时所在的作用域
    setInterval(() => console.log(this.s1, this.s2), 1000);
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);


function insert1(value) {
    return {into: function (array) {
        return {after: function (afterValue) {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }};
    }};
}
let insert2 = (value) => ({into: (array) => ({after: (afterValue) => {
    array.splice(array.indexOf(afterValue) + 1, 0, value);
    return array;
}})});
console.log(insert1(2).into([1, 3]).after(1));
console.log(insert2(2).into([1, 3]).after(1));

