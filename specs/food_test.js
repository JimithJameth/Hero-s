var assert = require('assert');
var Food = require('../food');

describe ("Food Test",function(){
  var food;

  beforeEach(function(){
    food1 = new Food({ name : "frozen Yogurt", healthIncrease: 20})
  });



  it("food should have a name",function(){
    assert.deepEqual(food1.name,"frozen Yogurt")
  });

  it("should have a healthIncrease",function(){
    assert.deepEqual(food1.healthIncrease, 20)
  });
});