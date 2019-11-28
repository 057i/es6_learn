// Map类似于普通对象，区别是：
//普通对象的key值只能是数字或者字符串
//Map的key可以是任何东西





//初始化两种方式

// 1.new的方式
//定义时候初始化和其他类型不一样，也和Set不一样
//参数外层要用一个数组包裹，每个参数都用一个小数组包裹[键名，键值]方式
let oMp = new Map([['name', 'cst'], ['age', 18], ['sex', true], [{}, '----']]);
console.log(oMp);
//{"name" => "cst", "age" => 18, "sex" => true, {…} => "----"}
//和不同对象不一样的连接方式



//2.api方式创建Map对象并初始化---set
let oMp1 = new Map();
oMp1.set('name', 'cst');
oMp1.set('age', 18);
oMp1.set({}, '-----');
//这里的对象保存的是引用值地址，会调用toString方法，oMap1.get({})取不到
//不可以使用oMap1[键名]或者oMap1.键名的方式取值，要是用get




//先保存地址
let obj = {};
oMp1.set(obj, 'bbj');
console.log(oMp1);

// Map常用方法：
// clear delete  forEach get has  set size
// entries键名键值  keys键名 values键值


// oMp1.clear()清空
// oMp1.delete('name');//删除某个键

//遍历
oMp1.forEach((ele, index, self) => {
    console.log(ele, index, self)
})

//获取到键名对应的键值
console.log(oMp1.get('name'));//cst

//判断是否有某个键名
console.log(oMp1.has('name'));//true

//该Map类型大小
console.log(oMp1.size);//4

//下面这三个获取键名键值的方法括号里不能传参，传了也没用
//获取全部键名键值
console.log(oMp1.entries());

//获取全部键名
console.log(oMp1.keys())

//获取全部键值
console.log(oMp1.values())



//利用keys做循环循环出所有键名
for (let i of oMp1.keys()) {
    console.log(i)
}
oMp.set('name', 'cg')






let obj1 = {
    a: 11,
    b: 789,
    c: "fsdf"

}
console.log(Object.keys(obj1).forEach((ele, index) => {
    console.log(ele, obj1[ele])
}))























