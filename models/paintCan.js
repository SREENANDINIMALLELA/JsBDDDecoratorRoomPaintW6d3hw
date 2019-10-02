
const PaintCan = function(noOfLiters){
this.noOfLiters = noOfLiters;
}
PaintCan.prototype.isEmpty= function () {
  if (this.noOfLiters === 0){
    return  true;
  }else{
    return  false;
  }
}
PaintCan.prototype.empty= function () {
this.noOfLiters = 0;
}
module.exports=PaintCan;



// start with an empty paint stock
// be able to add a can of paint to paint stock
// be able to calculate total litres paint it has in stock
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock
