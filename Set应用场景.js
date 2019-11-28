let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
let obj = {};
let newArr = [];

//普通去重的方式
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        newArr.push(arr[i]);
        obj[arr[i]] = true;//用obj[arr[i]]做判定，如果已经有了不进循环
    }
}

console.log(newArr);//打印[1, 2, 3, 4, 5, 6]

let o = {
    name: 'cst'
}
//
// let arr1=[1,2,3,4,5,o,1,2,4,o,{name:'cg'}];
// let obj1 = {};
// let newArr1 = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!obj1[arr1[i]]) {
//         newArr1.push(arr1[i]);
//         obj1[arr1[i]] = true;//用obj[arr[i]]做判定，如果已经有了不进循环
//     }
// }
// console.log(newArr1);// [1, 2, 3, 4, 5, {name:'cst'}],去重会出错


// Set实现去重
let arr1 = [1, 2, 3, 4, 5, o, 1, 2, 4, o, { name: 'cg' }];
let os = new Set(arr1);
console.log(os);//  {1, 2, 3, 4, 5,{name: "cst"}，{name: "cg"}}//就算两个对象里面是相同，但是他们的地址不同，所以不去重


// 重点！！！Set类型取并集交集差集

var arr2 = [4, 5, 6, 12, 3, 5, 4, 7, 2];
var arr3 = [5, 6, 2, 123, 1, 8, 5, 2, 0, 1, 4, 4];


// 用set取并集
var os1 = new Set([...arr2, ...arr3]) //利用展开以及Set去重特性取交集
console.log(os1);


// 用set取交集
let os2 = new Set(arr2);
let os3 = new Set(arr3);
let result = [...os2].filter((ele) => { return os3.has(ele) });//4,5,6,2

//用set取差集,要取到os2中os3没有的，和os3中os2没有的，然后合并才是差集
let part1 = [...os2].filter((ele) => { return !os3.has(ele) })
let part2 = [...os3].filter((ele) => { return !os2.has(ele) })
let result1 = [...part1, ...part2];
console.log(result1);//[12, 3, 7, 123, 1, 8, 0]

























