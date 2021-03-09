// find方法用于找出第一个符合条件的数组成员；
console.log(
    [1, 4, -5, 10].find((n) => n < 0), // 找到第一个小于0的成员
    [1, 5, 10, 15].find(function (value, index, arr) {
        return value > 9;
    }),
);

// findIndex类似find，返回第一个符合条件的数组成员的位置，找不到时返回-1.
console.log(
    [1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    }),
    [NaN].findIndex(y => Object.is(NaN, y)),
);


