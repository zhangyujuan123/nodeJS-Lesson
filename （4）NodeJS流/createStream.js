const stream=require("stream");
MyReadable.prototype.__proto__=stream.Readable.prototype;
function MyReadable(){
    stream.Readable.call(this);
    for(var i=97;i<=122;i++){
        this.push(String.fromCharCode(i));
    }
    this.push(null);
}
var read=new MyReadable();
read.pipe(process.stdout);