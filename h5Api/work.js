//次线程接受数据
// importScripts('./math.js')可以利用这个，在js文件中导入其他js文件，可以使用其他js文件的函数和变量
this.onmessage=function (e) {
    var result=0;
    for(var i=0;i<e.data.data;i++){
        result+=i;
    }
    //传递数据回主线程
    this.postMessage(result)
}