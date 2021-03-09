// Generator是实现状态机的最佳结构。

// 状态机：一共两个状态（Tick和Tock），每运行一次，就改变一次状态。
var ticking = true;
var clock1 = function () {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
};

// 状态机：Generator实现（之所以不用外部变量保存状态，是因为Generator本身就包含了一个状态信息，即是否处于暂停态。）
var clock2 = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
}

