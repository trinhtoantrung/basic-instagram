var _ = require('lodash');

var Image = require('../models/images');

module.exports = function(app){
  app.get('/images', function(req, res){
    res.json(Image.all());
  });
};
