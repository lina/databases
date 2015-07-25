var db = require('../db');
// var mysql = require('mysql');
var connection = db.dbConnection();


module.exports = {
  messages: {
    get: function (callback) {
      console.log("GET FUNCTION IS WORKING");
      
      connection.connect();

      connection.query("SELECT * FROM messages", function(err, rows, fields){
        if (!err) {
          callback(rows);
        } else {
          console.log("Error fetching message");
        }
        // if (err) throw err;
        // callback(rows);
      });

      connection.end();

      // console.log('hi mom');
      // if(callback) {
      //   callback();        
      // }
      // dbConnection.query()
    }, // a function which produces all the messages
    post: function () {

      connection.connect();

      connection.query("INSERT INTO messages (message) VALUES ('hello')", function() {
        console.log('-------> it is in messages POST');
      });
      //   , function(err, rows, fields){
      //   if (err) throw err;
      //   callback(rows);
      // });

      connection.end();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // res.end('what up alskdjf;laksdjf');
      connection.connect();
      
      connection.query("SELECT * FROM users", function(err, rows, fields){
        if (!err) {
          callback(rows);
        } else {
          console.log("Error fetching username");
        }; // if
      });

      callback();

      // connection.end();


    },
    post: function (username) {
      console.log("------->post function inside models got called");
      connection.connect();
      // console.log('Inside users POST. Inside Model. body=', req.body);
      connection.query("INSERT INTO users (name) VALUES (" + username + ")", function() {
        console.log('-------> it is in users POST');
        
      });
      connection.end();
      // connection.connect();
      // // console.log('Inside users POST. Inside Model. body=', req.body);
      
      // connection.query("INSERT INTO users (name) VALUES ('hello')", function() {
      //   console.log('-------> it is in users POST');
        
      // });


      // connection.end();

    } //post
  } //get
}; //module.export

