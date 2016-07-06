var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.port || 8080;

server.get('/bears', function(request, response){

});


server.listen(port, function(){
  console.log('Now listening to port:..', port);
});
