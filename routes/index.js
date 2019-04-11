var express = require('express');
var router = express.Router();
var request = require('request');

request('https://newsapi.org/v1/articles?source=techcrunch&apiKey=d1043e950f034a42aea1cd51bcba2205', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;