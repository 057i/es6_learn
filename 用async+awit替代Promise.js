//async+await配合Promise使用
let fs=require('fs');
function readFile(path){
    return new Promise((res,rej)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                rej(err)
            }else{
                res(data)
            }
        })
    })

}
//
//
// async function read(url){
//     let val1=await readFile(url);
//     let val2=await readFile(val1);
//     let val3=await readFile(val2)
//     return val3
// }
//
//
// read('./data/number.txt').then((val)=>{
//     console.log(val)
// })
//


// async+await替代Promise.all,同步并发
async function read1() {
    try{
        let val=await readFile('./data/number.txt')
        if(val){
            console.log(val)
        }
    }catch(e){
        console.log(e)
    }
}
async function read2() {
    try{
        let val=await readFile('./data/age.txt')
        if(val){
            console.log(val)
        }
    }catch(e){
        console.log(e)
    }
}
async function read3() {
    try{
        let val=await readFile('./data/name.txt')
        if(val){
            console.log(val)
        }
    }catch(e){
        console.log(e)
    }
}
function readAll(...arg) {
    arg.forEach((ele)=>{
        ele()
    })
}
readAll(read1,read2,read3)











