var _ = require('lodash');

var User = require('../models/users');

module.exports = function(app){
  app.get('/users', function(req, res){
    console.log("get all users");
    res.json(User.all());
  });

  app.get('/users/:key/:value', function(req, res){
    console.log("find user by key & value");
    var key = req.params.key;
    var value = req.params.value;
    console.log(key, value);
    res.json(User.get(key, value) || {});
  });

  app.get('/users/checkUserLogin', function(req, res) {
    res.json(User.checkUserLogin(req.query.userName, req.query.password) || {});
  });

  app.post('/users', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(User.create(req.body));
    }, 1000);
  });

    app.put('/users', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    console.log(req.body);

    setTimeout(function(){
      res.json(User.update(req.body));
    },1000)
  });
};
