var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/login',function(req,res,next){
  var username=req.body.username;
  var pwd=req.body.pwd;
  if(username=='zhangsan'&&pwd=='123'){
    res.render('list');
  }
})
router.get('/addChapter',function(req,res){
  res.render('addChapter');
});
router.post('/addChapter',function(req,res){
  var title=req.body.title;
  var content=req.body.content;
  res.render('chapterList',{title:title,content:content});
});
module.exports = router;
