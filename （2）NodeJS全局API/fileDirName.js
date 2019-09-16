//1.引入模块
const http = require("http");
const fs = require("fs");
const path=require("path");
//2.创建一个服务器
var server=http.createServer(function(req,res){
	var htmlPath=path.join(__dirname,"/view/view.html");
	var htmlContent=fs.readFileSync(htmlPath);
	htmlContent=htmlContent.toString("utf8");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(htmlContent);
	res.end();
});//这个函数是客户端发起请求才会执行
//3.服务监听一个端口
server.listen(8080);
console.log("server is listening 8080");