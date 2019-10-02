const Decorator = function(){
  this.paintStock= 0
}



//
Decorator.prototype.addCanToStock= function (can,paintCan) {
this.paintStock += can;
paintCan.noOfLiters += can*10;
};


Decorator.prototype.calculateTotalLitersOfPaint= function (paintCan) {
 return paintCan.noOfLiters
};
Decorator.prototype.isPaintEnoughForRoom= function (room ,paintCan) {
    paint = paintCan.noOfLiters;
  paintCanCoverAreaOf = paint*12;
 if ( paintCanCoverAreaOf >= room.area){
   room.paint();
   return "we have enough paint"
 }
 else{
   return "paint is not enough"
 }
};




// start with an empty paint stock
// be able to add a can of paint to paint stock
// be able to calculate total litres paint it has in stock
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock
module.exports=Decorator;
