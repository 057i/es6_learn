//map的特性
//1.属性不重复
//2.可以存储字符串 对象 NAN null [] function(){} number类型
//3.方法有set get delete clear

function myMap() {
    this.buckettLength = 8;//设置桶的长度为8
    this.init();
}

myMap.prototype.init = function () {
    //初始化桶
    this.bucket = new Array(this.buckettLength);
    for (var i = 0; i < this.bucket.length; i++) {
        this.bucket[i] = {
            type: 'bucket_' + i,
            next: null
        }
    }
}

//为保证输入的属性名不会重复，引入hash确保
myMap.prototype.makeHash = function (key) {
    let hash = 0;
    //判断是否为字符串类型的数据
    if (typeof key !== 'string') {
        console.log('不是string类型的桶')

        if (typeof key == 'number') {
            //如果是number类型或者是NaN类型的话
            hash = Object.is(key, NaN) ? 0 : key;
            console.log('是number类型的桶')

        } else if (typeof key == 'object') {
            // object的三种类型null {} []
            hash = 1;
            console.log('是object类型的桶')

        } else if (typeof key == 'boolean') {
            //true false boolean
            hash = Number(key);
            console.log('是boolean类型的桶')

        } else {
            //undefined function(){}
            hash=2;
            console.log('是string类型中的其他桶')
        }

    } else {
        console.log('是string类型的桶');
        //如果是字符串类型的话，hash值等于前三个字符的ascii码的和
        for (let i = 0; i < 3; i++) {
            hash +=key[i]?key[i].charCodeAt(0):0;
        }
    }
    console.log('hash值为'+hash+'   '+hash%8);
    return hash%8
}

myMap.prototype.set=function (key,value) {
    let hash=this.makeHash(key);
    let oTempBucket=this.bucket[hash];
    while(oTempBucket.next){
        //如果存在相同的属性名则覆盖属性值，没有就把下一位设成当前
        if(oTempBucket.next.key==key){
            oTempBucket.next.value=value;
            return
        }else{
            oTempBucket=oTempBucket.next;
        }
    }
    oTempBucket.next={
         key:key,
        value:value,
        next:null
    };

}
myMap.prototype.get=function (key) {
    let hash=this.makeHash(key);
    let oTempBuck=this.bucket[hash];
    while(oTempBuck){
        if(oTempBuck.key==key){
            return oTempBuck.value;
        }else{
            oTempBuck=oTempBuck.next;
        }
    }
    return undefined
    
}
myMap.prototype.delete=function (key) {
    let hash=this.makeHash(key);
    let oTempBucket=this.bucket[hash];
    while(oTempBucket.next){
        if(oTempBucket.next.keyt==key){
            oTempBucket.next=oTempBucket.next.next;
            return true
        }else{
            oTempBucket=oTempBucket.next;
        }
    return false
    }
}
myMap.prototype.has=function (key) {
    let hash=this.makeHash(key);
    let oTempBucket=this.bucket[hash];
    while(oTempBucket){
        if(oTempBucket.next&&oTempBucket.next.key==key){
            return true
        }else{
            oTempBucket=oTempBucket.next;
        }
    }
    return false
    
}
myMap.prototype.clear=function (key) {
    this.init();
}

let oMap=new myMap();
let obj1={
    name:'cst'
}
oMap.set('name','cst1');
oMap.set('name','cst2');
oMap.set(obj1,'---');
oMap.set(obj1,'+++');
oMap.set(function () {},true)

