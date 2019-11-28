"use strict";

var _dec, _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

//张三前端功能
var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn'); //普通装饰器写法1
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

var //es7装饰器修饰类名
Search = (_dec = dealDate('zhangsan'), Skin(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  //原型链上方法
  function Search() {
    _classCallCheck(this, Search);

    _initializerDefineProperty(this, "url", _descriptor, this);

    this.keyVlaue = '';
  } //私有方法


  _createClass(Search, [{
    key: "getContent",
    //装饰器修饰原型上属性
    value: function getContent() {
      var _console;

      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['向' + this.url + '发送信息：' + this.keyVlaue].concat(arg));
    }
  }]);

  return Search;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "url", [myReadOnly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'url-A';
  }
}), _applyDecoratedDescriptor(_class2.prototype, "getContent", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "getContent"), _class2.prototype)), _class2)) || _class); //装饰器修饰私有属性时候，describle下面的value要改成initializer,修饰原型上的方法时候，describle下面的value才是value(这个是个坑)

function myReadOnly(proto, key, describle) {
  console.log(proto, key, describle); //分别打印原型 "url" {configurable: true, enumerable: true, writable: true, initializer: ƒ}描述符

  console.log(describle.initializer()); //打印url-A，打印的是修饰对象的值
  //改变修饰对象的值,不能用key改

  describle.initializer = function () {
    return 666;
  };
} //修饰原型上的属性，这里describle下面的value才是value
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
  return function (proto, key, describle) {
    console.log(proto, key, describle); //分别打印 原型 getContent 和描述符

    console.log(describle.value); //打印getContent，对应修饰的原型属性
    //引入装饰器代理的思想，保存原有的，在原有功能的基础上增添新功能

    var oldValue = describle.value; //

    describle.value = function () {
      //额外添加的功能
      var url = 'url-b';
      console.log('向' + url + '发送信息：' + this.keyVlaue, ms); // 原有功能

      oldValue.apply(this, arguments); //预防用户传参
    };
  };
}

function Skin(target) {
  console.log(target);
}

var os = new Search();

oInp.oninput = function () {
  os.keyVlaue = this.value;
};

oBtn.onclick = function () {
  os.getContent();
}; //es7中提案属性---@decorator装饰器，装饰器也是函数，也可以传参
