// __proto__: 用来读取或设置当前对象的prototype对象（只有浏览器必须部署这个属性，其他环境不一定）。
// Object.setPrototypeOf方法的作用同__proto__，用来设置一个对象的prototype对象，返回参数对象本身。
// Object.getPrototypeOf方法用于读取一个对象的prototype对象。

let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
console.log(
    proto, // { y: 20, z: 40 }
    obj,   // { x: 10 }
    obj.x, // 10
    obj.y, // 20
    obj.z, // 40
);

function Rectangle() {}
var rec = new Rectangle();
console.log(
    Object.getPrototypeOf(rec) === Rectangle.prototype,
    Object.getPrototypeOf(rec),
    Object.getPrototypeOf(1),
    Object.getPrototypeOf(true),
);

