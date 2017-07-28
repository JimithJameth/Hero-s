var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Task = require('../task')
describe ("Hero Test", function(){

  beforeEach(function(){
    hero = new Hero({ name : "Earthworm-Jim", faveFood: "Frozen Yogurt", talk: "Eat dirt insuffarble space anomaly!!!"});
    level1 = new Task ({ level: 1, difficulty: 1, urgency: 1,})
  });

  it("Hero should have a name favefood and be able to talk",function(){
    assert.equal("Earthworm-Jim",hero.name);
    assert.equal("Frozen Yogurt",hero.faveFood);
    assert.equal("Eat dirt insuffarble space anomaly!!!",hero.talk);
  });

  it("Hero should have a full starting health of 100",function(){
    assert.equal(100,hero.health);
  });

  it("Hero should have an empty array of tasks", function(){
    assert.equal(0, hero.tasks.length);
  });

  it("Hero should be able to say there name and talk",function(){
    assert.equal("I am Earthworm-Jim. Eat dirt insuffarble space anomaly!!!", hero.speak());
  });

  it("Hero should have a task to do",function(){
    hero.addTask(level1);
    assert.equal(1,hero.tasks.length);
  });
});