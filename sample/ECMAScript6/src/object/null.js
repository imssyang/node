// Null传导运算符（?.）: 简化判断逻辑。
var message = {};
const firstName1 = (message
    && message.body
    && message.body.user
    && message.body.user.firstName) || 'default';
//const firstName2 = message?.body?.user?.firstName || 'default';


