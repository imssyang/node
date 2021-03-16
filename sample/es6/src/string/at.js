//
// ES5对字符串提供了charAt方法，返回字符串给定位置的字符，但不能识别32位字符。
//

console.log('abc'.charAt(0));  // a
console.log('0x20BB7'.charAt(0)); // \uD842

//console.log('abc'.at(0)); // a
//console.log('0x20BB7'.at(0));
