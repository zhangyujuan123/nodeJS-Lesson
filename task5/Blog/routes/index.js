var express = require('express');
var router = express.Router();
var data=require('../data.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',function(req,res,next){
  res.render('login');
});
router.post('/',function(req,res,next){
  var username=req.body.username;
  var pwd=req.body.pwd;
  console.log(data.users);
  var users=data.users;
  for(var i=0;i<users.length;i++){
    if(users[i].username==username&&users[i].password==pwd){
      res.render('list',{chapterList:data.chapterList});
    }
  }
  if(i==users.length){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('用户名密码错误！');
    res.end();
  }
});
module.exports = router;
