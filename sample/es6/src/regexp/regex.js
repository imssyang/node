//
// RegExp构造函数
//

var regex1 = new RegExp('xyz', 'i');
var regex2 = new RegExp(/xyz/i);
var regex3 = /xyz/i;
console.log(regex1, regex2, regex3);

var regex4 = new RegExp(/xyz/ig, 'i').flags; // ES6支持第二个参数，用于替换原有的修饰符
console.log(regex4);

//
// 字符串的正则方法
// String.prototype.match
// String.prototype.replace
// String.prototype.search
// String.prototype.split
//

//
// ES6添加u修饰符，用来处理大于\uFFFF的Unicode字符
//

// \uD83D\uDC2A 是一个4字节的UTF-16编码，代表一个字符

/*console.log(/^\uD83D/u.test('\uD83D\uDC2A')); // false ES6识别为一个字符*/
/*console.log(/^\uD83D/.test('\uD83D\uDC2A')); // true ES5识别为两个字符*/

var s = '\u{20BB7}';
console.log(/^.$/.test(s));  // false
console.log(/^.$/u.test(s)); // true 对于码点大于0xffff的unicode字符，点字符必须加u修饰符才能识别

console.log(/\u{61}/.test('a')); // false
console.log(/\u{61}/u.test('a')); // true ES6新增使用大括号表示Unicode字符，这种必须加上u修饰符才能识别当中的大括号
console.log(/\u{20BB7}/u.test('a')); // false

console.log(/^\S$/.test('\u{20BB7}'));  // false
console.log(/^\S$/u.test('\u{20BB7}')); // true u修饰符也影响预定义模式正确识别大于0xffff的unicode字符

console.log(/[a-z]/i.test('\u212A')); // false 不加u修饰符就无法识别非规范的K字符
console.log(/[a-z]/iu.test('\u212A')); // true

//
// ES6添加y修饰符（sticky粘连修饰符）：
// 类似g修饰符，不同之处在于，g修饰符只要剩余位置中存在匹配就行，而y修饰符会确保匹配必须从剩余的第一个位置开始。
//

var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
console.log(
    r1.exec(s),
    r1.exec(s),
);
console.log(
    r2.exec(s),
    r2.exec(s),
);

// ES6的正则对象多了sticky属性，表示是否设置了y修饰符
console.log(r2.sticky);

// ES5的正则对象返回正则表达式的正文
console.log(r2.source);

// ES6的正则对象新增了flags属性，会返回正则表达式的修饰符
console.log(r2.flags);

//
// ES6新增s修饰符：使得点字符可以匹配行终止符（U+000A(\n) U+000D(\r) U+2028 U+2029）。
//

console.log(
    /foo.bar/.test('foo\nbar'), // false
    /foo[^]bar/.test('foo\nbar'), // true 变通写法
    /foo.bar/s.test('foo\nbar'), // true s修饰符
);

//
// 先行断言（lookahead）：
//    x只有在y前面才匹配，必须写成/x(?=y)/的形式。比如/\d+(?=%)/ 只匹配百分号之前的数字
// 先行否定断言（negative lookahead）:
//    x只有不在y前面才匹配，必须写成/x(?!y)/。比如/\d+(?!%)/ 只匹配不在百分号之前的数字
// 后行断言（lookbehind）：
//    x只有在y后面才匹配，必须写成/(?<=y)x/的形式。比如/(?<=\$)\d+/ 只匹配美元符号之后的数字
// 后行否定断言（negative lookbehind）:
//    x只有不在y后面才匹配，必须写成/(?<!y)x/的形式。比如/(?<!\$)\d+/ 只匹配不在美元符号后面的数字
//

console.log(
    /\d+(?=%)/.exec('100% of US presidents have been male'),
    /\d+(?!%)/.exec('that\'s all 44 of them'),
    /(?<=\$)\d+/.exec('Benjamin Franklin is on the $120 bill'),
    /(?<!\$)\d+/.exec('it\' is worth about &90'),
);

//
// 具名组匹配
//

const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj  = RE_DATE.exec('1999-12-31');
console.log(
    matchObj[0],
    matchObj[1],
    matchObj[2],
    matchObj[3],
);

// 使用解构赋值直接从匹配结果上为变量赋值
let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
console.log(one, two);

