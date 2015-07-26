var db = require('../db');
// var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (callback) {
      var connection = db.dbConnection();
      connection.connect();

      connection.query("SELECT * FROM messages", function(err, rows, fields){
        if (!err) {
          console.log("ALL THE ROWS", rows);
          callback(rows);
        } else {
          console.log("Error fetching message");
        }
      });
      connection.end();
    }, // a function which produces all the messages
    post: function (text, username, roomname) {
      var connection = db.dbConnection();
      console.log("-------------> messages POST was executed");
      connection.connect();
      connection.query("INSERT INTO messages (text, username, roomname) VALUES (" + text + "," + username + "," + roomname + ")", function(){
        // console.log('----- > messages POST executed');
      });
      connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var connection = db.dbConnection();
      connection.connect();
      
      connection.query("SELECT * FROM users", function(err, rows, fields){
        if (!err) {
          callback(rows);
        } else {
          console.log("Error fetching username");
        }; // if
      });
      connection.end();
    },
    post: function (username) {
      var connection = db.dbConnection();

      connection.connect();
      connection.query("INSERT INTO users (name) VALUES (" + username + ")", function() {
      });
      connection.end();
    } //post
  } //get
}; //module.export

