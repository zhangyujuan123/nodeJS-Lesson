const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    if(process.argv[2]==undefined){
        var filePath=process.argv[1];
        var reader=fs.createReadStream(filePath);
        reader.pipe(res);
    }
    else{
        var filePath=path.join(__dirname,'/'+process.argv[2]);
        if(fs.existsSync(filePath)){
            var reader=fs.createReadStream(filePath);
            reader.pipe(res);
        }
        else{
            res.writeHead(200,{'Content-Type':"text/html"});
            res.end("文件不存在");
        }

    }
}).listen(8084);