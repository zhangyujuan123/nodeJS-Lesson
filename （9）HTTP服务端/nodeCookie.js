const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj=='/'){
        showIn(req,res);
    }
}).listen(8081);

function showPage(res,html){
    var filePath=path.join(__dirname,html);
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(fileContent);
    res.end();
}
function showIn(req,res){
    var cookie=req.headers['cookie'];
    console.log(cookie);
    if(cookie==undefined){
        showPage(res,'login.html');
    }
}
function loginIn(req,res){
    var userData="";
    req.on('data',function(chunk){
        userData+=chunk;
    })
    req.on('end',function(){
        
    })
}