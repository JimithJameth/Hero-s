var Task = function(params){
  this.level = params.level;
  this.difficulty = params.difficulty;
  this.urgency = params.urgency;
  this.completed = false;
  this.reward = params.reward;
};

Task.prototype = {
  competeTask: function(){
    this.completed = true;
  },

  sortLevel: function(){
    return _.sortBy(this.tasks, [function(task){
    return task.level;
    }]);
  },
  

};

module.exports = Task;