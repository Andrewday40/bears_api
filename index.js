var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

var Bear = require('./models/bear.js');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

db.defaults({bears: []})
  .value();

server.get('/bears', function(request, response){
  var bears = db.get('bears')
                .value();
  response.send(bears);
});

server.get('/bears/:id', function(request, response){
  var bear = db.get('bears')
               .find({id: request.params.id})
               .value();
  response.send(bear);
});

server.post('/bears', function(request, response){
  var bear = new Bear(request.body.size, request.body.type, request.body.location);
  var result = db.get('bears')
                 .push(bear)
                 .last()
                 .value();
  response.send(result);
});

server.put('/bears/:id', function(request, response){
  var bear = new Bear(request.body.size, request.body.type, request.body.location, request.params.id);
  bear.updateAwake(request.body.isAwake);
  bear.updateKids(request.body.hasKids);
  bear.updateHungry(request.body.isHungry);
  var updatedBear = db.get('bears')
                      .find({id: request.params.id})
                      .assign(bear)
                      .value();
  response.send(updatedBear);
});

server.delete('/bears/:id', function(request, response){
  var bear = db.get('bears')
               .remove ({id: request.params.id})
               .value();
  response.send(bear)
})

server.listen(port, function(){
  console.log('Now listening on port:', port);
});
