var Park = function(){
  this.enclosure = [];
}

Park.prototype = {

  numberOfDinosaurs: function(){
     return this.enclosure.length;
  },

  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  }



}




module.exports = Park;