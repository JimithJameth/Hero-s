var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');

describe ("Hero Test", function(){

  beforeEach(function(){
    hero = new Hero({ name : "Earthworm-Jim", faveFood: "Frozen Yogurt", talk: "Eat dirt insuffarble space anomaly!!!"});
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
});