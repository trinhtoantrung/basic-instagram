var _ = require('lodash');

var User = require('../models/users');

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(User.all());
  });

  app.get('/users/:email', function(req, res){
    var email = req.params.email;
    res.json(User.get(email) || {});
  });

  app.post('/users', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(User.create(req.body));
    }, 1000);
  });
};
