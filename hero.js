var _ = require("lodash")
var Hero = function(params){

  this.name = params.name;
  this.faveFood = params.faveFood;
  this.talk = params.talk;
  this.health = 100;
  this.tasks = [];
  this.stomach = [];
}

Hero.prototype = {
  speak: function(){
    return "I am " + this.name +". " + this.talk;
  },

  addTask: function(task){
    this.tasks.push(task)
  },

  eat: function(food){
    hero.stomach.push(food);
    this.health += food.healthIncrease
  }


  }

    


module.exports = Hero;
