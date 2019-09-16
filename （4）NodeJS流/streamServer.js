const http=require("http");
const path=require("path");
const fs=require("fs");
http.createServer(function(req,res){
    var filepath=path.join(__dirname,"/data.txt");
    var fileStream=fs.createReadStream(filepath);
    fileStream.pipe(res);
}).listen(8081);