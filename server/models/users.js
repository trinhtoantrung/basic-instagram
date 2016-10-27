var _ = require('lodash');
var fs = require('fs');
var databaseUrl = './server/database/users-db.json';

// load users from database

var users = [];
fs.readFile(databaseUrl, (err, data) => {
  if (err) throw err;
  users = JSON.parse(data);
  console.log("Load users from database");
});

var updateToDatabase = function(newUsers) {
  fs.writeFile(databaseUrl, JSON.stringify(newUsers), (err) => {
    if (err) throw err;
    console.log('Saved Users to database');
  });
}

module.exports = {
  get: function(key, value) {
    return _.find(users, function(user){
      return user[key] === value;
    });
  },

  all: function() {
    return users;
  },

  create: function(user) {
    users.push(user);
    console.log("Save user", user);
    updateToDatabase(users);
    return user;
  }
}
