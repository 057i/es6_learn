//张三前端功能
var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn');

//普通装饰器写法1
// var keyValue='';
// oInp.oninput=function () {
//     keyValue=this.value;
// }
// oBtn.onclick=function () {
//     //引入代理
//     newGetContent(keyValue);
// }
//
// function getContent(keyValue) {
//     var url='url-a';
//     console.log('向'+url+'发送信息：'+keyValue)
// }
// var newGetContent=dealFunc(getContent);
//
// function dealFunc(func) {
//     return function (data) {
//         //在不修改原来代码段情况下，优雅的添加新的功能，即装饰器
//         var url='urlb';
//         console.log('向'+url+'发送信息'+'1111');
//         console.log(this);//这里的this指向window
//         return func.apply(this,arguments);
//     }
// }


//进阶版装饰器写法
@Skin//es7装饰器修饰类名
class Search {
    //原型链上方法
    constructor() {
        this.keyVlaue = '';
    }

    //私有方法
    @myReadOnly//装饰私有属性，会自动执行与装饰器同名函数，修饰的是装饰器后一句的变量
    url = 'url-A';


    //装饰器修饰原型上属性
    @dealDate('zhangsan')
    getContent(...arg) {
        console.log('向' + this.url + '发送信息：' + this.keyVlaue, ...arg)
    }
}


//装饰器修饰私有属性时候，describle下面的value要改成initializer,修饰原型上的方法时候，describle下面的value才是value(这个是个坑)
function myReadOnly(proto, key, describle) {
    console.log(proto, key, describle);
    //分别打印原型 "url" {configurable: true, enumerable: true, writable: true, initializer: ƒ}描述符

    console.log(describle.initializer());//打印url-A，打印的是修饰对象的值

    //改变修饰对象的值,不能用key改
    describle.initializer = function () {
        return 666
    }

}


//修饰原型上的属性，这里describle下面的value才是value
// function dealDate(proto, key, describle) {
//     console.log(proto, key, describle);//分别打印 原型 getContent 和描述符
//     console.log(describle.value);//打印getContent，对应修饰的原型属性
//
//
//     //引入装饰器代理的思想，保存原有的，在原有功能的基础上增添新功能
//     var oldValue = describle.value;
//     //
//     describle.value = function () {
//         //额外添加的功能
//         var url = 'url-b';
//         console.log('向' + url + '发送信息：' + this.keyVlaue)
//         // 原有功能
//         oldValue.apply(this, arguments);//预防用户传参
//     }
//
// }

//代理思想高级版，装饰器传参
function dealDate(ms) {
    return function(proto, key, describle){
        console.log(proto, key, describle);//分别打印 原型 getContent 和描述符
        console.log(describle.value);//打印getContent，对应修饰的原型属性


        //引入装饰器代理的思想，保存原有的，在原有功能的基础上增添新功能
        var oldValue = describle.value;
        //
        describle.value = function () {
            //额外添加的功能
            var url = 'url-b';
            console.log('向' + url + '发送信息：' + this.keyVlaue,ms)
            // 原有功能
            oldValue.apply(this, arguments);//预防用户传参
        }
    }

}

    function Skin(target){
        console.log(target)
    }




let os = new Search();
oInp.oninput = function () {
    os.keyVlaue = this.value;
}
oBtn.onclick = function () {
    os.getContent();
}


//es7中提案属性---@decorator装饰器，装饰器也是函数，也可以传参








