const http=require("http");
const querystring=require("querystring");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var strData="";
    req.on("data",function(chunk){
        strData+=chunk;
    })
    req.on("end",function(){
        objData=querystring.parse(strData);
        var fileContent=fs.readFileSync(path.join(__dirname,'/data.json'));
        
        for(var i=0;i<fileContent.length;i++){
            if(fileContent[i].username==objData.username&&fileContent[i].password==objData.password){
                console.log("登录成功");
                break;
            }
        }
        if(i>=fileContent.length){
            console.log("用户、密码不正确");
        }
    })
}).listen(8083);