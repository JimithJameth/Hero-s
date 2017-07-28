var Task = function(params){
  this.level = params.level;
  this.difficulty = params.difficulty;
  this.urgency = params.urgency;
  this.completed = false;
};

Task.prototype = {
  competeTask: function(){
    this.completed = true;
  },

};

module.exports = Task;