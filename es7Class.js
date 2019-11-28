class Search{
    //静态属性（原型属性，现在google不需要使用 npx babel进行语言降级了）
    static num=10;
    constructor(){
        this.keyVlaue='';
    }
    //私有属性，用this做的
    url='vhjksnvkj';

    getCount(){
        console.log('发送请求');
    }
}

let os=new Search();
console.log(os);//Search {url: "vhjksnvkj", keyVlaue: ""}


