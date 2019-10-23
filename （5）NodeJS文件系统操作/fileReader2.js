const http=require("http");
const fs=require("fs");
const path=require("path");
function fileRead(filePath){
    fs.open(filePath,"r+",function(err,fd){
        var len=fs.statSync(filePath).size;
        var buf=Buffer.alloc(len);
        fs.read(fd,buf,0,len,function(err,by,buf){
            if(err){
                console.log(err);
            }
            else{
                res.end(buf.toString());
                fs.closeSync(fd);
            }
        })

    })
}
http.createServer(function(req,res){
    if(process.argv[2]==undefined){
        var filePath=process.argv[1];
        fileRead(filePath);
    }
    else{
        var filePath=path.join(__dirname,'/'+process.argv[2]);
        if(fs.existsSync(filePath)){
            fileRead(filePath);
        }
        else{
            res.writeHead(200,{'Content-Type':"text/html"});
            res.end("文件不存在");
        }
    }
}).listen(8083);