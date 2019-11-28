let fs=require('fs');

//除了readFile,其他的异步操作还有writeFile,readLink,readdir
// function readFile(path) {
//     return new Promise((res,rej)=>{
//         fs.readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 rej(err)
//             }else{
//                 res(data);
//             }
//         })
//     })
// }


//封装promisify函数用于处理
function promisify(func){
    return function (...arg) {
        return new Promise((res,rej)=>{
            func(...arg,(err,data)=>{
                if(err){
                    rej(err)
                }else{
                    res(data)
                }
            })
        })
    }
}

// let readFile=promisify(fs.readFile);

//在保留fs里面所有函数原本方法的前提下，将fs里面所有函数都生成一个相对应的promise化方法
function promisifyAll(obj){
    for(let attr in obj){
        if(typeof obj[attr]=='function'){
            obj[attr+'Async']=promisify(obj[attr])
        }
    }
}
promisifyAll(fs);

fs.readFileAsync('./data/number.txt','utf-8').then((val)=>{
    console.log(val)
})

