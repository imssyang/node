var va1 = 123;

var asyncFunc1 = function (data, callback) {
    setTimeout(function() {
        callback(data, va1);
    }, 0);
};

asyncFunc1("test1", console.log);

var asyncFunc2 = function (data, callback) {
    process.nextTick(function() {
        callback(data, va1);
    });
};

asyncFunc2("test2", console.log);


