// 函数绑定（function bind）: 取代call\apply\bind调用。
//foo::bar;                     bar.bind(foo);
//foo::bar(...arguments);       bar.apply(foo, arguments);

// 双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上。
//var method = obj::obj.foo;    var method = ::obj.foo;
//var log = ::console.log;      var log = console.log.bind(console);



