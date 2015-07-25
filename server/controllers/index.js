var models = require('../models');
var bluebird = require('bluebird');
// var db = require('./db');
// var dbConnection = mysql.createConnection();
// dbConnection.connect();
// var db = require('../db');
// var mysql = require('mysql');
// var connection = db.dbConnection();

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
      
      
      models.users.post(function(){
        res.end('what up alskdjf;laksdjf');
      });

      // create connection to database

      // insert data into the table
      res.send('POST request');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {


      models.users.get(function(){
        res.end('What is the ');
      });
      // res.send('GET request');
      // models.users.get(function(rows));
    },
    post: function (req, res) {

      models.users.post(JSON.stringify(req.body['username']));

      // connection.connect();
      // console.log('Inside users POST. Inside Model. body=', req.body);
      
      // connection.query("INSERT INTO users (name) VALUES ('" + req.body['username'] + "')", function() {
      //   console.log('-------> it is in users POST');
        
      // });


      // connection.end();


      // models.users.post(function(){
      //   res.end('what up alskdjf;laksdjf');
      // });

      // console.log('Inside users POST. body=', req.body);
      res.send('POST request');
    }
  }
};

