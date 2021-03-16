//
// 圆括号问题
//

// 变量声明语句
//let [(a)] = [1];  //SyntaxError: Invalid destructuring assignment target
//let {x: (c)} = {}; //SyntaxError: Invalid destructuring assignment target
//let ({x: c}) = {}; //ReferenceError: let is not defined
//let {(x: c)} = {}; //SyntaxError: Unexpected token '('
//let {(x): c} = {}; //SyntaxError: Unexpected token '('

// 函数参数也属于变量声明，因此不能使用圆括号。
//function f([(z)]) { return z; } // SyntaxError: Invalid destructuring assignment target
//function f([z, (x)]) { return x; } // SyntaxError: Invalid destructuring assignment target

// 赋值语句的模式
//({p: a}) = {p: 42}; // SyntaxError: Invalid left-hand side in assignment
//([a]) = [5]; // SyntaxError: Invalid left-hand side in assignment

// 赋值语句的非模式部分可以使用圆括号。
[(b)] = [3];             //模式是取数组的第1个成员
({p: (d)} = {});         // 模式是p而不是d
[(parseInt.prop)] = [3]; //模式是取数组的第1个成员

