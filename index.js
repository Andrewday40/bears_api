var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.port || 8080;

server.get('/bears', function(request, response){
  response.send(bears);
});

server.get('/bears/:id', function(request, response){
  response.send(bear);
});

server.post('/bears/:id', function(request, response){
  response.send(result);
});

server.put('/bears/:id', function(request, response){
  response.send(updatedbear);
});

server.delete('/bears/:id', function(request, response){
  response.send(bear)
})

server.listen(port, function(){
  console.log('Now listening to port:..', port);
});
