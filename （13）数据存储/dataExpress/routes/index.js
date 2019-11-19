var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var blogsys=require('../config/blogsys.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/login',function(req,res,next){
  var username=req.body.username;
  var pwd=req.body.pwd;
  var con=mysql.createConnection(blogsys);
  con.connect();
  con.query("select * from users",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      for(var i=0;i<result.length;i++){
        if(result[i].username==username&&result[i].pwd==pwd){
          res.render('list');
        }
      }
      if(i==result.length){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('用户名、密码错误');
      }
    }
  })
})
router.get('/addChapter',function(req,res,next){
  res.render('addChapter');
})
router.post('/addChapter',function(req,res,next){
  var con=mysql.createConnection(blogsys);
  con.connect();
  con.query('insert into chapters(title,content) values(?,?)',[req.body.title,req.body.content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  })
  con.query('select * from chapters',function(err,result){
    if(err){

    }
    else{
      res.render('chpaterList',{list:result});
    }
  })
})
module.exports = router;
