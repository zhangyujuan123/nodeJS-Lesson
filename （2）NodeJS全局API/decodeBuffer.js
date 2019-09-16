var base64Str = 'emhhbmdzYW46MTIzNDU2';
var btf1=Buffer.from(base64Str,"base64");

var btf=btf1.toString("utf-8");
console.log(btf);