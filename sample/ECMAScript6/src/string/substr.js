//
// ES5只有indexOf方法用来确定一个字符串是否包含在另一个字符串中。
// ES6又提供了includes()、startsWith()、endsWith().
//

var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true

s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false

