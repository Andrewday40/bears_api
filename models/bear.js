var uuid = require('uuid');
//constructor function
//how do i build this object?
function Bear(size, type, location, id){
  this.id = id || uuid.v4();
  this.size = size;
  this.type = type;
  this.location = location;
  this.isAwake = true;
  this.hasKids = false;
  this.isHungry = false;
}

Bear.prototype.updateAwake = function(value){
  if(value.toLowerCase() === 'true'){
    this.isAwake = true;
  } else {
    this.isAwake = false;
  }
}
Bear.prototype.updateKids = function(value){
  if(value.toLowerCase() === 'true'){
    this.hasKids = true;
  } else {
    this.hasKids = false;
  }
}
Bear.prototype.updateHungry = function(value){
  if(value.toLowerCase() === 'true'){
    this.isHungry = true;
  } else {
    this.isHungry = false;
  }
};

module.exports = Bear;
