var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Task = require('../task')
describe ("Hero Test", function(){

  beforeEach(function(){
    hero = new Hero({ name : "Earthworm-Jim", faveFood: "Frozen Yogurt", talk: "Eat dirt insuffarble space anomaly!!!"});
    food1 = new Food({ name : "frozen Yogurt", healthIncrease: 20});
    food2 = new Food({ name : "cheese on toast",healthIncrease: 2});

    level1 = new Task ({ level: 1, difficulty: 1, urgency: 1,reward:1000})
    level7 = new Task ({ level: 7, difficulty: 6, urgency: 3,reward:3000})
    level8 = new Task ({ level: 8, difficulty: 5, urgency: 4,reward:4000})
    level10 = new Task ({ level:9, difficulty:10, urgency: 5,reward:6000})
    level3 = new Task ({ level: 3, difficulty: 4, urgency: 2,reward:1500})
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

  it("Hero should be able to eat food",function(){
    hero.stomach.push(food2);
    assert.equal(food2,hero.stomach[0]);
  });

  it("Hero's health should go up by health increase",function(){
    hero.eat(food2);
    assert.equal(102,hero.health)
  });
});
  
