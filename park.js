var Park = function(){
  this.enclosure = [];
  this.breeders = [];
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
    return this.breeders
  }

  }

module.exports = Park;