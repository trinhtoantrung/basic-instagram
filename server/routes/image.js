var _ = require('lodash');
var fs = require("fs");
var multer  = require('multer');
var upload = multer({dest: 'uploads/images'});
var type = upload.single('file');

var Image = require('../models/images');

module.exports = function(app){
  app.get('/images', function(req, res){
    res.json(Image.all());
  });
};
