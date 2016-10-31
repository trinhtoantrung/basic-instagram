var _ = require('lodash');
var fs = require('fs');
var databaseUrl = './server/database/images-db.json';

// load images from database

var images = [];
fs.readFile(databaseUrl, (err, data) => {
  if (err) throw err;
  console.log("Load images from database");
  images = JSON.parse(data);
  console.log(images);

  // console.log(images[0].dislikes);
  // console.log(images[0].comments[0].content);
});

var updateToDatabase = function(newImages) {
  fs.writeFile(databaseUrl, JSON.stringify(newImages), (err) => {
    if (err) throw err;
    console.log('Saved images to database');
  });
}

module.exports = {
  get: function(key, value) {
    return _.find(images, function(image){
      return image[key] === value;
    });
  },

  all: function() {
    return images;
  }
}
