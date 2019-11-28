//利用node环境的node命令执行，不用浏览器，node环境没有alter
// let a=10;
// console.log(a);




// //仿写ajax访问三个文件
let fs=require('fs');
// //node中访问文件是异步的，过多的异步会产生回调地狱，回调地狱产生的后果就是代码可读性低且出错不知道错哪里
// fs.readFile('./data/number.txt','utf-8',(err,data)=>{
//     if(data){
//         fs.readFile('./data/name.txt','utf-8',(err,data)=>{
//             if(data){
//                 fs.readFile('./data/age.txt','utf-8',(err,data)=>{
//                     if(data){
//                         console.log(data)
//                     }
//                 })
//             }
//         })
//     }
// })


//异常捕获
// try{
//     fs.readFile('./data/name.txt','utf-8',(err,data)=>{
//         console.log(data)
//     })
//     console.log(a);//ReferenceError: a is not defined  node端报错
// }catch(e){
//     console.log(e)
// }
// console.log('11111')



//promise 原理
let Store={
    list:[],
    times:3,
    subscribe(func){
        this.list.push(func);
    },
    fire(...arg){
        //这里循环出list里面保留的所有函数，在到达次数后，遍历执行函数且赋予最后的参数
        --this.times==0 &&this.list.forEach(ele=>{
            ele.apply(null,arg)
        })
    }
}
function show (data) {
    console.log(data);
}
function show2 (data) {
    console.log(data, 2);
}
Store.subscribe(show);
Store.subscribe(show2);

let oStudent={}

fs.readFile('./data/name.txt','utf-8',(err,data)=>{
    if(data){
        oStudent.name=data
    }
    Store.fire(oStudent)
})
fs.readFile('./data/number.txt','utf-8',(err,data)=>{
    if(data){
        oStudent.number=data;
    }
    Store.fire(oStudent);
})

fs.readFile('./data/age.txt','utf-8',(err,data)=>{
    if(data){
        oStudent.age=data;
    }
    Store.fire(oStudent)
})



let oP2=new Promise((resolve,reject)=>{
    throw new Error('duyi')
})
oP2.then((val)=>{
    console.log(val)
},(reason)=>{
    console.log(reason)
})









