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




// it("can add dinosaur to park", function(){
//   assert.strictEqual(2, park.numberOfDinosaurs());
// })


// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an average offspring count of more than 2




})
