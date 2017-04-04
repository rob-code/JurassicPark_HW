var assert = require('assert');
var Dinosaur = require('../dinosaur.js'); 

describe("Dinosaur", function() {

  var dino1;

  beforeEach(function(){
    dino1 = new Dinosaur("Tyranosauraus", 2);
  })

  it("can get name of dinosaur", function(){
    assert.strictEqual("Tyranosauraus", dino1.type);
  })

  it("can get number of off spring per year", function(){
    assert.strictEqual(2, dino1.offSpring);
  })








});


