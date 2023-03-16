function* gen() {
    let count = 0
    while (true) {
        count++;
        const input = yield count;
        console.log(input); // a  b  c
    }
}
function coroutine(generatorFunction) {
    return function (...args) {
        const genObj = generatorFunction(...args);
        genObj.next();
        return genObj;
    };
}
const obj = coroutine(gen)();
console.log(obj);
console.log(obj.next('a')); // { value: 2, done: false }
console.log(obj.next('b')); // { value: 3, done: false }
console.log(obj.next('c')); // { value: 4, done: false }
