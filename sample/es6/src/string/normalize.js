//
// Unicode提供了两种方法支持语调符号和重音符号：
// 1. 直接提供带重音符号的字符，eg \u01D1
// 2. 提供合成符号，即原字符与重音符号合成一个字符。eg \u004F & \u030C.
//

console.log('\u01D1' === '\u004F\u030C'); // 视觉与语义上等价，但js无法识别
console.log('\u01D1'.length);
console.log('\u004F\u030C'.length);

// ES6提供normalize方法，用来将字符的不同表示方法统一为同样的形式（Unicode正规化）
console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());
console.log('\u004F\u030C'.normalize('NFC').length);  // 1 (default)
console.log('\u004F\u030C'.normalize('NFD').length);  // 2

