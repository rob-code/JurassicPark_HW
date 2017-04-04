var assert = require('assert');
var Dinosaur = require('../dinosaur.js'); 

describe("Dinosaur", function() {

var dinosaur;

beforeEach(function(){
  dino1 = new Dinosaur("Tyranosauraus Rex", 2);
})


it("can get name of dinosaur", function(){
assert.strictEqual("Tyranosauraus Rex", dino1.type)
})





})


