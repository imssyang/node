//
// ES6为字符串增加遍历器接口，使得字符串可以由for...of循环遍历，支持32位utf16的码点。
//

for (let codePoint of 'foo') {
    console.log(codePoint);
}

var text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) { // 不能识别32位的码点
    console.log(text[i]);
}
for (let i of text) { // 正确识别32位的码点
    console.log(i);
}


