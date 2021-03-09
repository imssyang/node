//
// 模板
//

var basket = {count: 3, onSale: 'apple'};
var oldstr = ''.concat(
    'There are <b>' + basket.count + '</b> ' +
    'items in your basket, ' +
    '<em> ' + basket.onSale +
    '</em> are on sale!'
);
console.log(oldstr); // 传统

var newstr = ''.concat(`
    There are <b>${basket.count}</b> 
    items in your basket, <em>${basket.onSale}</em> are on sale!
`);
console.log(newstr.trim()); // ES6引入了模板字符串

var greeting = `\`Yo\` World!`; // 反引号需要转义
console.log(greeting);

var x = 1;
var y = 2;
console.log(`${x} + ${y} = ${x + y}`); // 大括号内可以放入任意的js表达式

function fn() {
    return 'Hello World';
}
console.log(`foo ${fn()} bar`); // 模板字符串中还能调用函数

// 模板字符串支持嵌套
const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];
const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
console.log(tmpl(data));

// 引用模板字符串本身
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log(func('Jack'));

// 引用模板字符串本身
let str2 = '(name) => `Hello ${name}!`';
let func2 = eval.call(null, str2);
console.log(func2('Jack'));

//
// 实例：模板编译
// <% .. %> 放置js代码
// <%= .. %> 输出js表达式
//
var template = `<ul>
    <% for (var i = 0; i < data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
    <% } %>
</ul>`;
function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n echo($1); \n echo(`')
        .replace(expr, '`); \n $1 \n echo(`');

    template = 'echo(`' + template + '`);';

    var script = `
    (function parse(data) {
        var output = '';
        
        function echo(html) {
            output += html;
        }
        
        ${template}
        
        return output;
    })`;

    return script;
}
var parse = eval(compile(template));
var result = parse({supplies: ['broom', 'mop', 'cleaner']});
console.log(result);

//
// 标签模板（tagged template）: 模板紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。
// 实质：函数调用的一种特殊形式。
//

console.log`123`;  //等同console.log(123);
console.log(123);

// 模板字符串中有变量时，需要先将模板字符串处理成多个参数，再调用函数。
var a = 5;
var b = 10;
console.log`Hello ${a+b} world ${a*b}`;
console.log(['Hello ', ' world ', ''], 15, 50);
