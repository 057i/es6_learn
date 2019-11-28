let fs = require('fs');

//异步读取文件
function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data)
            } else {
                rej(err)
            }
        })

    })

}
// readFile('./data/age.txt')

//生成器函数生成
function* Generator() {
    let gen1 = yield readFile('./data/number.txt');
    let gen2 = yield readFile(gen1);
    let gen3 = yield readFile(gen2)
    return {
        value: gen3,
        att: '执行完成'
    }
}
// let og=Generator();
// let {value,done}=og.next();//返回一个对象
// console.log(value,done);
// value.then((val)=>{
//     console.log(val)
//     let {value,done}=og.next(val)
//     value.then((val)=>{
//         console.log(val)
//         let {value,done}=og.next(val)
//         value.then((val)=>{
//             console.log(val)
//
//         })
//     })
// })



//Generator编写Co解决回调地狱
// function Co(oIt) {
//     return new Promise((res,rej)=>{
//         console.log(111)
//         let next=(data)=>{
//             let {value,done}=oIt.next(data);
//             if(done){
//                 res(value)
//             }else{
//                 value.then((val)=>{
//                     next(val)
//                 })
//             }
//         }
//         next();

//     })

// }
Co(Generator()).then((val) => {
    console.log(val)
}, () => {
    throw new Error(val)
})



function Co(oIt) {
    return new Promise((res, rej) => {
        let next = (data) => {
            let { value, done } = oIt.next(data);
            if (done) {
                res(value)
            } else {
                value.then(val => {
                    next(val)
                })
            }
        }
    })
}