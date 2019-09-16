var bark=require("./dog.js");
var taidi=new bark.Dog("taidi",4);
var zangao=new bark.Dog("zangao",8);
function barkFun(){
    var that=this;
    var tim=setInterval(function(){
        if(that.energy<0){
            clearInterval(tim);
        }
        else{
            console.log(that.name+" barked! energy:"+that.energy);
            that.energy--;
        }
    },1000)
    // console.log(this.name+'bark!!!');
    // console.log(this.energy);
}
taidi.on("bark1",barkFun);
// var intervalId=setInterval(function(){
//     if(taidi.energy>=0){
//         taidi.emit("bark1");
//     }
//     else{
//         clearInterval(intervalId);
//     }
//     taidi.energy--;
// })
taidi.emit("bark1");
zangao.on("bark2",barkFun);
zangao.emit("bark2");

