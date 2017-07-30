var Food = function(params){
  this.name = params.name;
  this.healthIncrease = params.healthIncrease;
  this.contaminated = false;
};

Food.prototype = {
  poisioned: function(){
    this.contaminated = true;
  },
}
module.exports = Food;