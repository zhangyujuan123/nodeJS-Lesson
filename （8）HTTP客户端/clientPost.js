const http=require("http");
const querystring=require("querystring");
var option={
    host:"localhost",
    port:8083,
    method:'post'
}
var userName=process.argv[2];
var pwd=process.argv[3];
var postData={"username":userName,"password":pwd};
postData=querystring.stringify(postData);
var req=http.request(option,function(res){

});
req.write(postData);
req.end();