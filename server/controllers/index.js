var models = require('../models');
var bluebird = require('bluebird');

// var dbConnection = mysql.createConnection();
// dbConnection.connect();

// console.log("*********************");
module.exports = {
  messages: {
    get: function (req, res) {
      console.log("********************* check ");

      // models.messages.get(function(){
      //   console.log('hi dad');
      models.messages.get(function(rows){

        var result = {results: rows};

        res.end(JSON.stringify(result));
      });

      // })
      res.send('GET request');
    }, // a function which handles a get request for all messages
    post: function (req, res) {


      // create connection to database

      // insert data into the table
      res.send('POST request');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('GET request');
    },
    post: function (req, res) {
      res.send('POST request');
    }
  }
};

