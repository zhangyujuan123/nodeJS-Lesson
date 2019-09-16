function loop(){
    console.log("I will loop forever!");
}
var time1=setInterval(function(){
    loop();
},500)
setTimeout(function(){
    clearInterval(time1);
    console.log("Game over");
    process.exit();
},5000)
