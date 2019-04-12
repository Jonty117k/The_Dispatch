var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');


// User View
router.get('/user', function(req, res) {
  res.render('user');
});


module.exports = router;
