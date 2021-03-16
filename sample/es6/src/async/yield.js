// yield*语句也可以与一个异步遍历器一同使用。

async function* gen1() {
    yield 'a';
    yield 'b';
    return 2;
}

async function* gen2() {
    const result = yield* gen1();
    console.log(result); // 2
}


