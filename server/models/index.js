var db = require('../db');
var mysql = require('mysql');

// var dbConnection = mysql.createConnection();
// dbConnection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      console.log("GET FUNCTION IS WORKING");

      var connection = db.dbConnection();

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

      var connection = db.dbConnection();

      connection.connect();

      connection.query("INSERT INTO messages (message) VALUES ('hello')", function() {
        console.log('-------> it is here');
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
    get: function () {},
    post: function () {}
  }
};

