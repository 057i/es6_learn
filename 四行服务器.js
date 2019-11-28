var express=require('express');
var app=new express();
app.use(express.static('./h5Api'));//监听文件夹下的index.html文件
app.listen(8088);//开启监听窗口