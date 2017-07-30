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

 eat: function(food){
    hero.stomach.push(food);
    this.health += food.healthIncrease
  },
  eatFaveFood: function(food){
    hero.stomach.push(food);
    if(food.name === faveFood)
      this.health =+ food.healthIncrease * 1.5
  },

 addTask: function(task){
    this.tasks.push(task)
  },

 completedTasks: function(status){
    var newTasks = [];
    for (task of this.tasks){
      if (task.completed === status){
        newTasks.push(task);
      }
    }
    return newTasks;
  },

 numberOfTasks: function(){
   return this.tasks.length;
 },

sortedTasks: function(type){
  this.tasks.sort(function(a,b){
    return a[type] - b[type];
  });
}


}

module.exports = Hero;
