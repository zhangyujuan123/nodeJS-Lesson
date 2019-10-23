const http = require("http");
const https=require("https");
const cheerio=require("cheerio");
const $=cheerio.load("");
const fs=require("fs");
const path=require("path");
var server=http.createServer(function(req,res){
    var htmlPath=path.join(__dirName,"/index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
https.get("https://maoyan.com/films/",function(res) {
    var result="";
    res.on("data",function (chunk) {
        result+=chunk;  
    })
    res.on("end",()=> {
        var movieList=[];
        $(".movie-item-title a").each(function() {
            
        })
    })
})
server.listen(8081);
console.log("server is listening 8081");