// ES6提供了3个新方法 -- entries()、keys()和values() -- 用于遍历数组。
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
