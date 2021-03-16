// Node提供Stream模式读写数据，特点是一次只处理数据的一部分，数据被分成一块一块依次处理，就好像“数据流”一样。
// Stream模式使用EventEmitter，会释放3个事件：
// 1. data事件：下一块数据块已经准备好；
// 2. end事件：整个“数据流”处理“完成”；
// 3. error事件：发生错误。

// 读取文本，对于每个数据块，都使用stream.ouce在data、end、error事件上添加一次性回调函数。
const co = require('co');
const fs = require('fs');
const stream = fs.createReadStream('stream.js');

let wordCount = 0;
co(function* () {
    while (true) {
        const res = yield Promise.race([
            new Promise(resolve => stream.once('data', resolve)),
            new Promise(resolve => stream.once('end', resolve)),
            new Promise((resolve, reject) => stream.once('error', reject))
        ]);
        if (!res) { // res只有在data事件发生时才有值
            break;
        }
        stream.removeAllListeners('data');
        stream.removeAllListeners('end');
        stream.removeAllListeners('error');
        wordCount += (res.toString().match(/stream/ig) || []).length;
    }
    console.log('count:', wordCount);
});




