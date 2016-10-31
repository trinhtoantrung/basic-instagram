var _ = require('lodash');
var fs = require('fs');
var databaseUrl = './server/database/users-db.json';

// load users from database

var users = [];
fs.readFile(databaseUrl, (err, data) => {
  if (err) throw err;
  users = JSON.parse(data);
  console.log(users);
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

  update: function(user) {
    var updateUser;
    for(var i=0, l=users.length; i < l; i++) {
      if(users[i].id === user.id){
        _.assign(users[i], user);
        updateUser = users[i];
        break;
      }
    }
    updateToDatabase(users);
    return updateUser;
  },

  all: function() {
    return users;
  },

  create: function(user) {
    users.push(user);
    console.log("Save user", user);
    updateToDatabase(users);
    return user;
  },

  checkUserLogin: function(userName, password) {
    return _.find(users, function(user) {
      return user["userName"] === userName && user["password"] === password;
    });
  }
}
