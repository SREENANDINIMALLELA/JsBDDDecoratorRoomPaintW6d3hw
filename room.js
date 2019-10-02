const Room = function(area){
  this.area= area;
  this.isPaint = false;
}
//
Room.prototype.paint= function () {
   this.isPaint = true;
}

module.exports=Room;



// have an area in square meters
// should start not painted
// should be able to be painted
