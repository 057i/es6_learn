//在node中用promise读取文件
let fs=require('fs')
function readFile(path) {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            resolve(data)
        })
    })
}
readFile('./data/number.txt').then((data)=>{
    console.log(data)
    return data
}).then().then((data)=>{   //如果是一个空的then可以忽略掉
    console.log(data)
})


