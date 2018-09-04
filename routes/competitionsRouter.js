var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
var url = 'http://docker.iosport-test.int.dev.superbet.com:8627'
var name="competition"

router.get("/api/get_competitions", function(req, res, next) {
  var url_get = url + req.path

  request(url_get, function (error, response, body) {
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
    
  })  
})


router.post("/api/update_"+name, function(req, res, next){
  var url_post=url+req.path
  request.post({url_post, form:req.body},function(err,httpResponse,body){
    
  })  
})


router.post("/api/delete_"+name, function(req, res, next){
  var url_post=url+req.path
  request.post({url_post, form:req.body},function(err,httpResponse,body){
    
  })  
})



module.exports = router;
