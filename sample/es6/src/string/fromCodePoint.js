// ES5提供的String.fromCharCode不能识别32位的UTF16字符。
console.log(String.fromCharCode(0x20bb7)); // \u0bb7

// ES6提供了String.fromCodePoint可以识别32位UTF-16字符，作用与codePointAt正好相反。
console.log(String.fromCodePoint(0x20bb7)); // \u20bb7

console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');
