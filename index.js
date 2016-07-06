var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

db.defaults({bears: []})
  .value();

server.get('/bears', function(request, response){
  response.send(bears);
});

server.get('/bears/:id', function(request, response){
  response.send(bear);
});

server.post('/bears', function(request, response){
  var bear = {
    id: uuid.v4(),
    size: request.body.size,
    color: request.body.color,
    isAwake: false,
    hasKids: false,
    type: request.body.type,
    isHungry: false,
    notes: request.body.notes
  };

  var result = db.get('bears')
                 .push(bear)
                 .last()
                 .value();
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
