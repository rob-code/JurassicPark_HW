var Park = function(){
  this.enclosure = [];
}

Park.prototype = {

  numberOfDinosaurs: function(){
     return this.enclosure.length;
  }

}




module.exports = Park;