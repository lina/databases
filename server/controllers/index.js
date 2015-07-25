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
      models.messages.get(function(rows){
        var result = {results: rows};
        res.send(JSON.stringify(result));
        res.end(JSON.stringify(result));

      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      // console.log("req.body in controllers post --------->", req.body);

      var message = JSON.stringify(req.body['message']);
      var username = JSON.stringify(req.body['username']);
      var roomname = JSON.stringify(req.body['roomname']);
      // console.log("OUR INPUTS --->", message, username, roomname);
      models.messages.post(message, username, roomname);

      // create connection to database

      // insert data into the table
      res.send('POST request');
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(rows){
        var result = {results: rows};
        res.send(JSON.stringify(result));
        res.end(JSON.stringify(result));
      });
    },
    post: function (req, res) {

      models.users.post(JSON.stringify(req.body['username']));

      res.send('POST request');
    }
  }
};

