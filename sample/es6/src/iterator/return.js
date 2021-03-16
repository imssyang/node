// 遍历器对象除了具有next方法，还可以具有return方法和throw方法。
// return方法用于提前退出for...of循环，或者在一个对象完成遍历前需要清理资源。
function readLinesSync(file) {
    return {
        next() {
            return {done: true};
        },
        return() {
            file.close();
            return {done: true};
        }
    };
}
for (let line of readLinesSync('return.js')) {
    console.log(line);
    break;
}


