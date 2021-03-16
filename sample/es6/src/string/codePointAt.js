
//
// codePointAt()
// JavaScript内部，字符以UTF-16的格式存储，每个字符固定为2个字节。
// 对于那些需要4个字节存储的字符，js会认为它们是2个字符。
//

var s = '\u{20BB7}a'; // UTF-16编码为 0xD842 0xDFB7
console.log(s.length); // 2
console.log(s.charAt(0)); // 无法读取
console.log(s.charAt(1)); // 无法读取
console.log(s.charCodeAt(0)); // 55362 返回前2个字节
console.log(s.charCodeAt(1)); // 57271 返回后2个字节

// ES6提供codePointAt方法，能够正确处理4个字节存储的字符，返回一个字符的码点。
console.log(s.codePointAt(0)); // 134071
console.log(s.codePointAt(1)); // 57271
console.log(s.codePointAt(2)); // 97
console.log(s.codePointAt(0).toString(16)); // 0x20bb7
console.log(s.codePointAt(1).toString(16)); // 0xdfb7
console.log(s.codePointAt(2).toString(16)); // 0x61

// for循环处理上述codePointAt索引不匹配的问题
for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}

// 判断一个字符是2字节还是4字节
function is32Bit(c) {
    return c.codePointAt(0) > 0xffff;
}

