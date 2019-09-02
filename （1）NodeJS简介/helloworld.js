const http = require("http");   //引用模块

var server=http.createServer(function(req,res){
	res.write("hello world");
	res.end();
});//第一个是请求，第二个是响应

server.listen(8081);
console.log("server is listening 8081");


//1.打开方式：在该文件的目录下 shift+鼠标右键  点击打开power shell窗口
//2.编译node.js文件  node+文件名
//3.每次修改了js文件，需要重新执行node+文件名
//退出  ：ctrl+c
