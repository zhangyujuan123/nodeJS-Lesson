const http = require("http");
const https=require("https");
const cheerio=require("cheerio");
const $=cheerio.load("");
const fs=require("fs");
const url=require("url");
// const path=require("path");
http.createServer(function(req,res){
   var urlObj=url.parse(req.url,true);
   var pathName=urlObj.pathname;
   if(pathName =='/'){
       var fileContent=fs.readFileSync("index.html");
       res.writeHead(200,{"Content-Type":"text/html"});
       res.write(fileContent);
       res.end();
   }
   else if(pathName=="/getlist"){
        https.get("https://maoyan.com/films",function(resObj) {
            var result="";
            resObj.on("data",function (chunk) {
                result+=chunk;  
            })
            resObj.on("end",()=> {
                var $=cheerio.load(result);
                var movieList=[];
                $(".movie-item-title a").each(function() {
                    
                })
        })
    })
   }
}).listen(8081);
console.log("server is listening 8081");