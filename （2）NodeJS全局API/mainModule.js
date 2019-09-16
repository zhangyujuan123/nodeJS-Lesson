var circle=require("./circleModule.js");
var r=process.argv[2];
console.log("圆的半径为"+r);
console.log("圆的周长为"+circle.circleFun(r).circumference());
console.log("圆的面积为"+circle.circleFun(r).area());


/**
 * 1.原生模块，随环境的安装就存在的
 * 2.自定义模块，自己编写的程序
 * 3.第三方模块，在命令行进行安装的模块，从npm服务器上下载到本地的
 * 直接通过require（“date-now”）
 */