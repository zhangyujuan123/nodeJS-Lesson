
const fs=require("fs");
const path=require("path");
console.log("请输入要创建的文件夹：");
var i=0;
process.stdin.on("data",function(data){
    var dt=data.toString().split(" ");
    console.log(dt);
    switch(dt[i]){
        case 'mkdir':
            fs.mkdirSync(dt[++i].slice(0,-2));
            console.log("文件目录创建成功！");
            console.log("请输入要创建的文件：");
            i=0;
            break;
        case 'touch':
            var filePath=path.join(__dirname,'/filedir/'+dt[++i].slice(0,-2));
            fs.writeFileSync(filePath,"hello node");
            console.log("文件创建成功！");
            console.log("请输入要删除的文件：");
            i=0;
            break;
        case 'delete':
            var filePath=path.join(__dirname,'/filedir/'+dt[++i].slice(0,-2));
            if(fs.existsSync(filePath)){
                fs.unlinkSync(filePath);
                console.log("文件删除成功！！！");
            }
            else{
                console.log("文件不存在！");
            }
            process.exit();
            break;
        default:
            console.log("something erro");
            break;
    }
});