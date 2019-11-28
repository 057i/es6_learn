// let三个特性：不可重定义，变量声明不提升，全局不挂载到window

// console.log(x)//let不会变量提升报错
let x = 1;//let不会进行变量声明提升,会报错
console.log(x)//1
// let x=2;//不可重复声明+--
// console.log(x)



/*let和const都存在临时死区，即使外层的块级和当前块级有相同的变量声明，也不会去获取，
只取当前的，又因为打印语句在声明之前let和const不会进行变量提升，所以存在临时死区，会报错*/
// {
//     let x = 10;
//     {
//         /*想获取的是当前快进，但是打印语句在声明之后*/
//         console.log(x);
//         let x = 20;
//         {
//             console.log(x);
//             let x = 30;
//
//         }
//     }
// }

if(true){
    let a =10;
    console.log(a);
}
// console.log(a);//想获取里层的a

let i=0;
while(i<5){
    i++;
    let b=10+i;
    console.log(b);//会打印出11-15
}


// 因为var声明会存在闭包问题
// 如
var arr=[];
for(var j=0;j<10;j++){
    // for循环里面嵌套函数
    arr[j]=function () {
        console.log(j)
    }
}
arr[5]();//数组中的每一位都是打印10,存在闭包、

var arr1=[];
for(let u=0;u<10;u++){
    arr1[u]=function () {
        console.log(u)
    }
}
arr1[5]();//打印5，let声明不会产生闭包


//例如在循环函数中嵌套定时器和延时器，用var 声明会产生闭包，但是let可以避免，因为定时器和延时器都是异步的

for(var p=0;p<10;p++){
    setTimeout(function () {
        console.log(p)
    },0)
}
//打印10个10



for(let b=0;b<10;b++){
    setTimeout(function () {
        console.log(b)
    },0)
}
//打印1到9







//const必须声明同时赋值
// const PI;
// PI=20;报错

// const PI=20;
// console.log(PI)


const PI = {}//const声明的是PI的存储空间以及存储类型，const存储空间不能改变，但是存储空间里面的值可以改变
// PI=20;错误，这样把整个const声明常量的存储空间给改了
PI.a = 20;//PI里面的值
PI.b = 30;
PI.a = 30;//可以改变，不报错
console.log(PI)


function test(x, y) {
    // let x =10;报错，因为let有不能重定义的特性，不能用来个形参赋值，说明形参本身值为var
    var x = 10;
    console.log(x)
}

test()