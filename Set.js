
//Set类型对象具有去重功能
var os=new Set([111,111]);
console.log(os);//111
//增
os.add(111);
os.add({'jks':'jfosd'});
os.add('fsdfds');
os.add(true);
console.log(os);//打印{111, {…}, "fsdfds", true}

//删
os.delete(true);
console.log(os);//打印{111, {…}, "fsdfds"}

//是否有某成员变量
console.log(os.has('fsdfds'));//true

//遍历Set内成员变量
// 方法1
os.forEach(function (ele,index) {
    console.log(ele)
})

//方法2   for...of遍历的是键值，for...in遍历的是键名
for(let i of os){
    console.log(i)
}

// 将Set对象转变成数组
// 方法1,利用Array.from()转变具有迭代接口的值
console.log(Array.from(os));//[111, {…}, "fsdfds"]


//方法2，利用...运算符,拆分每个值
console.log([...os]);//[111, {…}, "fsdfds"]



//将数组转变成Set类型
var arr=[5,4,3,2,1];
var os1=new Set(arr);
console.log(os1);










// //清空os里内容
// os.clear()

// let obj={
//     0:1,
//     1:2,
//     length:2
// }

