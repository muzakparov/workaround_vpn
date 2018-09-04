var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
var url = 'http://docker.iosport-test.int.dev.superbet.com:8627'
var name="template"

router.get("/api/get_templates", function(req, res, next) {
  request(url, function (error, response, body) {
    // console.log('errr:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // res.json(JSON.parse(body));
    res.send(body)
  }); 
});


router.post("/api/create_"+name, function(req, res, next){
  var url_post=url+req.path
  request.post({url_post, form:req.body},function(err,httpResponse,body){
    res.send("ok")
    
  })  
})


router.post("/api/update_"+name, function(req, res, next){
  var url_post=url+req.path
  request.post({url_post, form:req.body},function(err,httpResponse,body){
    res.send("ok")
    
  })  
})


router.post("/api/delete_"+name, function(req, res, next){
  var url_post=url+req.path
  request.post({url_post, form:req.body},function(err,httpResponse,body){
    res.send("ok")
  })  
})



module.exports = router;
