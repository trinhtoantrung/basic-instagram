var express = require('express');
var app = express();

// Load Express Configuration
require('./config')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// Load routes
require('./routes/user')(app); //user routes
require('./routes/file')(app); //user routes

module.exports = app;
