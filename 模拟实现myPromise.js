//es5方式模拟实现promise
function myPromise(executor) {
    var self = this;
    //新的promise有三种状态:Fulfilled,pending,Rejected,
    // 分别代表成功，等待，失败
    self.status = 'pending';
    self.resolveValue = null;//保存成功时候的参数
    self.rejectReason = null;//保存失败时候的参数
    self.resolveCallBackList = [];//保存成功时候的回调函数
    self.rejectCallBackList = [];//保存失败时候的回调函数

    //成功函数
    function resolve(value) {
        //如果执行该函数必须是pending状态才能去修改，否则不能修改
        if (self.status == 'pending') {
            //改变该promise的状态以及传入参数
            self.status = 'Fulfilled';
            self.resolveValue = value;
            self.resolveCallBackList.forEach(function (ele) {
                ele()
            })
        }
    }

    //失败函数
    function reject(reason) {
        //必须是判定等待状态才能去修改，否则不执行
        if (self.status == 'pending') {
            self.status = 'Rejected';
            self.rejectReason = reason;
            self.rejectCallBackList.forEach(function (ele) {
                ele()
            })

        }
    }

    //捕捉异常，如果是执行promise中的执行器出现错误的话，
    // 默认调用reject
    try {
        //promise中的参数执行，executor中包括成功和失败的同步执行
        executor(resolve, reject);
    } catch (e) {
        reject(e)
    }
}

//构造myMap原型链上面的then方法,将promise的值传给then去执行，在Promise调用的resolve和reject都是将值传给then让then去调用
//then执行完成之后返回的是一个全新的Promise对象（new Promise）
//then是以一个异步的方式来执行（微任务）
myPromise.prototype.then = function (onFulfilled, onRejected) {
    if(!onFulfilled&&!onRejected){
        setTimeout(function () {
            console.log('空then')
        },0)
    }
    if(!onFulfilled){
        onFulfilled=function (val) {
            return val
        }
    }
    if(!onRejected){
        onRejected=function (reason) {
            throw new Error(reason)
        }
    }





    var self = this;
    //造一个全新的promise对象用来返回，用来做链式调用
    var nextPromise = new myPromise((resolve, reject) => {

        //如果当前状态被修改成了成功状态，则将保存的成功的参数传给成功函数并执行

        if (self.status === 'Fulfilled') {
            //利用setTimeout来模拟异步方式,模拟微任务

            setTimeout(function () {
                try{
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    // resolve(nextResolveValue);
                    ResolutionReturnPromise(nextPromise,nextResolveValue,resolve,reject)
                }catch(e){
                    reject(e)
                }
            },0)


        }
        if (self.status === 'Rejected') {//如果当前状态被修改成了失败状态，则将保存的失败的参数传给失败函数并执行

            //利用setTimeout来模拟异步方式,模拟微任务
            setTimeout(function () {
                try{
                    var nextRejectReason = onRejected(self.rejectReason);
                    // resolve(nextRejectReason);
                    ResolutionReturnPromise(nextPromise,nextRejectReason,resolve,reject)
                }catch(e){
                    reject(e)
                }
            },0)
        }
        if (self.status == 'pending') {
            self.resolveCallBackList.push(function () {
                var nextResolveValue = onFulfilled(self.resolveValue);
                // resolve(nextResolveValue);
                ResolutionReturnPromise(nextPromise,nextResolveValue,resolve,reject)
            })
            self.rejectCallBackList.push(function () {
                setTimeout(function () {
                    var nextRejectReason = onRejected(self.rejectReason);
                    // reject(nextRejectReason);
                    ResolutionReturnPromise(nextPromise,nextRejectReason,resolve,reject)
                },0)
            })

        }

    })

    return nextPromise

}
//判断then链式调用的时候传给下一个then的是promise对象还是普通值
function ResolutionReturnPromise(nextPromise,nextReturnValue,res,rej){
    //如果是promise对象的话
    if(nextReturnValue instanceof myPromise){
        //直接执行
        nextReturnValue.then(function (val) {
            res(val)
        },function (reason) {
            rej(reason)
        })

    }else{
        //普通值的话,默认执行成功的回调
        // console.log('普通值的默认回调')
        res(nextReturnValue)
    }
}




let oP = new myPromise((resolve, reject) => {
    //这时候进入padding状态(还米有变成Fulfilled状态或者Rejected状态)
    //把函数存入回调函数执行列表
    // setTimeout(() => {
    //     reject(0)
    // }, 1000)

    // console.log(1223)
    // resolve(1)
    reject(111)

})
oP.then((val) => {
    console.log('ok ' + val)
    throw new Error('456')
    // return 1
}, (reason) => {
    console.log('no' + reason)
    return 2
}).then().then((val) => {
    console.log('ok2 ' + val)
}, (reason) => {
    console.log(reason)
}).then((val)=>{
    console.log(val)
},(reason)=>{
    console.log(reason)
})
console.log(111)



