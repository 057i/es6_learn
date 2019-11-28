let fs=require('fs');//使模块可以有同步和异步两种方式加载


let oStudent={};
function readFile(path) {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            // throw new Error('duyi')   如果这么写，下一行就不会执行，因为已经抛出错误了
            resolve(data);//返回一个promise对象(状态)
        })
    })
}

//Promise.all，当全部成功时候返回结果数组，不成功则返回错误的信息,是个promise对象
//然后用一个then()去接受,形成链式调用
// Promise后面的then只有一个参数,即返回值
Promise
    .all([readFile('./data/age.txt'),readFile('./data/number.txt'),readFile('./data/name.txt')])
    .then((val)=>{
        console.log(val)
    },(err,data)=>{
        console.log(err,data)
    })




// Promise.race()谁先you状态就用谁的，不管是成功状态还是失败状态
Promise
    .race([readFile('./data/age.txt'),readFile('./data/number.txt'),readFile('./data/name.txt')])
    .then((val)=>{
        console.log(val)
    },(err,val)=>{
        console.log(err,val)
    })











