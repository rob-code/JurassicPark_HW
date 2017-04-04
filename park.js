var Park = function(){
  this.enclosure = [];
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






  // removeDinosaurOfType: function(dinosaurType){
    
  //   for (i = 0; i < this.enclosure.length; i++){
  //       var dinosaur = this.enclosure[i];
  //       console.log("Type to remove " + dinosaur.type);         
  //     if (dinosaur.type === dinosaurType){
  //       console.log("Type to remove " + dinosaur.type);
  //       this.enclosure.splice(i, 1);
  //     }
  //     }
  //   }





  }






module.exports = Park;