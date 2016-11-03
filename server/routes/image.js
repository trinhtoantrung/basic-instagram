var _ = require('lodash');
var fs = require("fs");
var multer  = require('multer');
var upload = multer({dest: 'uploads/images'});
var type = upload.single('file');

var Image = require('../models/images');

module.exports = function(app){
  app.get('/images', function(req, res){
    if(Object.keys(req.query).length === 0) {
      res.json(Image.all());
    } else {
      res.json(Image.get(req.query.key, req.query.value) || {});
    }
  });

  app.post('/images', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Image.create(req.body));
    }, 1000);
  });
};
