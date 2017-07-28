var _ = require("lodash")
var Hero = function(params){

  this.name = params.name;
  this.faveFood = params.faveFood;
  this.talk = params.talk;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype = {
  speak: function(){
    return "I am " + this.name +". " + this.talk;
  }
}

module.exports = Hero;
