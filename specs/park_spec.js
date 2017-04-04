var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js'); 

describe("Park", function() {

var dino1;
var dino2;
var dino3;
var dino4;
var park;

beforeEach(function(){
  dino1 = new Dinosaur("Tyranosauraus", 2);
  dino2 = new Dinosaur("Velociraptor", 4);
  dino3 = new Dinosaur("Triceratops", 1);
  dino4 = new Dinosaur("Stegasauraus", 5);
  park = new Park(); 
})

// enclosure should start empty
it("can open dinosaur park with no dinosaurs", function(){
  assert.strictEqual(0, park.numberOfDinosaurs());
})

// should be able to add dinosaur
it("can add dinosaur to park", function(){
  park.addDinosaur(dino1);
  park.addDinosaur(dino2);
  assert.strictEqual(2, park.numberOfDinosaurs()); 
})

it("can list all dinosaurs in park", function(){
  park.addDinosaur(dino1);
  park.addDinosaur(dino2);
  park.addDinosaur(dino3);
  park.addDinosaur(dino4);
  park.listAllDinosaurs();
})

// should be able to remove all dinosaurs of a particular type
// it("can remove all dinosaurs of a particular type", function(){
//   park.addDinosaur(dino1);
//   park.addDinosaur(dino2);
//   park.addDinosaur(dino3);
//   park.addDinosaur(dino4);
//   park.removeDinosaurOfType("Velociraptor");
//   assert.strictEqual(3, park.numberOfDinosaurs()); 
//   park.listAllDinosaurs();
// })



// should get all the dinosaurs with an average offspring count of more than 2




})
