var assert = require('assert');
var Task = require('../task');

describe ("Task",function(){
  var task;

  beforeEach(function(){
    level9 = new Task ({ level: 9, difficulty: 10,urgency: 5,completed:false,reward:6000})
  });

  it("task should have a difficulty level", function() {
    assert.deepEqual(level9.difficulty, 10);
  });

  it("task should have a urgency level",function(){
    assert.deepEqual(level9.urgency,5);
  });

  it("task should have a reward",function(){
    assert.deepEqual(level9.reward,6000);
  });

  it("task should start not complete",function(){
    assert.deepEqual(level9.completed,false);
  });

  it("task should be able to be complete",function(){
    level9.completeTask();
    assert.deepEqual(level9.completed,true);
  });
});

