//
// ES6为原生的String对象提供了一个raw方法，用来充当模板字符串的处理函数，
// 返回一个反斜线都被转义的字符串，对应于替换变量后的模板字符串。
//

console.log(String.raw`Hi\n${2+3}!`); // Hi\n5!
console.log(String.raw`Hi\u000A!`);
console.log(String.raw`Hi\\n`);
console.log(String.raw({raw: 'test'}, 0, 1, 2));
