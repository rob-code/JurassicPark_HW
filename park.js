var Park = function(){
  this.enclosure = [];
  this.breeders = [];
  this.population = 0;
  this.carryingCapacity = 100;
  this.r = 0.5;
 
}

Park.prototype = {

  numberOfDinosaurs: function(){
     return this.enclosure.length;
  },

  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  listAllDinosaurs: function(){
    console.log("The dinosaurs in the park are:");
    for (var i = 0; i < this.enclosure.length; i++){
      var dinosaur = this.enclosure[i];
      console.log(dinosaur.type);
    }
  },

  removeDinosaurOfType: function(dinosaurType){
    for (i = 0; i < this.enclosure.length; i++){
        var dinosaur = this.enclosure[i];         
          if (dinosaur.type === dinosaurType){
            this.enclosure.splice(i, 1);
          }
    }
  },

  dinosaursWithOffSpringGreaterThanTwo: function(){
    for (i = 0; i < this.enclosure.length; i++){
      var dinosaur = this.enclosure[i];
        if (dinosaur.offSpring > 2){
          this.breeders.push(dinosaur);
        }

    }
    return this.breeders;
  },

  futurePopulation: function (years) {
   
    //assume logistics population growth curve

    //var seedPopulation = this.enclosure.length/10;
    var seedPopulation = 0.01; 

    for (i = 0; i < years; i ++){

      var population = 1/ (1 + ((1/seedPopulation) - 1) * (Math.pow(Math.E, -1 * this.r * i)));     

      var population = population * this.carryingCapacity;

      console.log(population);

    }
  }



}

module.exports = Park;