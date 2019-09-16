const radio=require("./radio.js");
var rad=new radio.Radio("music radio","FM 106.7");
rad.on("play",function(){
    var that=this;
    setTimeout(function(){
        console.log("lalala");
        rad.emit("stop");
    },2000);
    console.log(that.radioName+" "+that.radioHz+" opened");
})
rad.on("stop",function(){
    console.log(this.radioName+" "+this.radioHz+" closed");
})
rad.emit("play");

