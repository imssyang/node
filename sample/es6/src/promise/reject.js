// Promise.reject方法也会返回一个新的Promise实例，状态为Rejected.
//     var p = Promise.reject('error');  等同于
//     var p = new Promise((resolve, reject) => reject('error'));

const thenable = {
    then(resolve, reject) {
        reject('error');
    }
};
Promise.reject(thenable).catch(e => { // Promise.reject的参数是thenable对象，执行以后，catch的参数是thenable对象本身。
    console.log(e === thenable, e);
});

