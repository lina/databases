// YOUR CODE HERE:
// var controller = require('../server/controllers');

app = {

    // server: 'https://api.parse.com/1/classes/chatterbox',
    server: 'http://127.0.0.1:3000/classes/messages',

    init: function() {
      console.log('running chatterbox');
      // Get username
      app.username = window.location.search.substr(10);

      app.onscreenMessages = {};
      app.blockedUsers = ['BRETTSPENCER', 'Chuck Norris'];

      // cache some dom references
      app.$text = $('#message');


      app.loadMsgs();
      // setInterval( app.loadMsgs.bind(app), 1000);

      $('#send').on('submit', app.handleSubmit);
    },

    handleSubmit: function(e){
      e.preventDefault();

      var message = {
        username: app.username,
        text: app.$text.val()
      };

      app.$text.val('');

      app.sendMsg(message);
    },

    renderMessage: function(message){
      var $user = $("<div>", {class: 'user'}).text(message.username);
      var $text = $("<div>", {class: 'text'}).text(message.text);
      var $message = $("<div>", {class: 'chat', 'data-id': message.objectId }).append($user, $text);
      return $message;
    },

    displayMessage: function(message){
      // if( app.blockedUsers.indexOf(message.username) < 0 ){
        console.log("displayMessage:", message);
        console.log("onscreenMessage", app.onscreenMessages);
        if(!message.objectId) { 


        // if( !app.onscreenMessages[message.objectId] ){
          console.log("displayMessage invoked");
          var $html = app.renderMessage(message);
          $('#chats').prepend($html);
          // app.onscreenMessages[message.objectId] = true;
          message.objectId = true;
        }
      // }
    },

    displayMessages: function(messages){

      console.log("messages:",messages);
      for( var i = 0; i < messages.length; i++ ){
        app.displayMessage(messages[i]);
      }
    },

    loadMsgs: function(){
      $.ajax({
        url: app.server,
        type: 'GET',
        data: { order: '-createdAt' },
        contentType: 'application/json',
        success: function(json){
          var jsonparsed = JSON.parse(json);
          // console.log("---------------> json.results",JSON.parse(json))
          app.displayMessages(jsonparsed.results);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    sendMsg: function(message){
      app.startSpinner();
      $.ajax({
        type: 'POST',
        url: app.server,
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function(json){
          console.log("----------->message", message);
          console.log("json.objectId:", json.objectId);

          message.objectId = json.objectId;
          console.log("message in sendMsg:", message);
          console.log("json:", json);
          app.displayMessage(message);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    startSpinner: function(){
      $('.spinner img').show();
      $('form input[type=submit]').attr('disabled', "true");
    },

    stopSpinner: function(){
      $('.spinner img').fadeOut('fast');
      $('form input[type=submit]').attr('disabled', null);
    }
};
