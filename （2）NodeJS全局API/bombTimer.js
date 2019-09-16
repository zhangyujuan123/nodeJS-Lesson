
function Bomb(){
    this.message="bomb!!";
}
Bomb.prototype.explode=function(){
    console.log(this.message);
}
var bomb1=new Bomb();
// setTimeout(function(){
//     bomb1.explode();
// },2000)
setTimeout(bomb1.explode.bind(bomb1),2000);