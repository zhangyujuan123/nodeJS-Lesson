//1.引入http原生模块
const http = require("http");
const fs = require("fs");
//2.创建一个服务器
var server=http.createServer(function(req,res){
	var sys=process.platform;
	var htmlPath="";
	switch(sys){
		case "linux":
			htmlPath=__dirname+"/view/view.html";
			break;
		case "win32":
			htmlPath=__dirname + "\\view\\view.html";
			break;
		default:
			console.log("unknown system");
			break;
	}
	console.log(htmlPath);
	var htmlContent=fs.readFileSync(htmlPath);
	htmlContent=htmlContent.toString("utf8");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(htmlContent);
	res.end();
});//这个函数是客户端发起请求才会执行
//3.服务监听一个端口
server.listen(8080);