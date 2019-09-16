var circleFun={
    circumference:function(r){
        return 2*Math.PI*r;
    },
    area:function(r){
        return Math.PI*r*r;
    }
}
module.exports={
    circumference:circleFun.circumference,
    area:circleFun.area
};