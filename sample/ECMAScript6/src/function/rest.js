// ES6引入rest参数。
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}
console.log(add(2, 5, 3));

function sortNumbers1() { // ES5
    return Array.prototype.slice.call(arguments).sort();
}
const sortNumbers2 = (...numbers) => number.sort(); // ES6


