const assert = require('assert');
const Room = require('../room.js');
const PaintCan = require('../paintCan.js');
const Decorator = require('../decorator.js');
describe('Room',function(){
  let room ;
  beforeEach(function(){
    room = new Room(144)
  });
  it('should have an area in squremeters' , function(){

    const actual  = room.area;
    assert.strictEqual(actual ,144)
  });
  it('should start not painted' , function(){
    const actual  = room.isPaint;
    assert.strictEqual(actual,false)
  });
  it('should be able to be painted',function(){
    room.paint();
    const actual  = room.isPaint;
    assert.deepStrictEqual(actual,true)
  })
  describe('paintcan',function(){
    let paintCan;
    beforeEach(function(){
      paintCan = new PaintCan(12)
    });
    it ('should have a number of litres of paint ', function(){
      const actual  = paintCan.noOfLiters;
      assert.deepStrictEqual(actual ,12)
    });
    it ('should be able to check if it is empty', function(){
      const actual  = paintCan.isEmpty()
      assert.deepStrictEqual(actual ,false);
    });
    it ('should be able to empty itself of paint ', function(){
      paintCan.empty();
      const actual  = paintCan.isEmpty()
      assert.strictEqual(actual ,true);
    });
    describe('decorator',function(){
      let decorator;
      beforeEach(function(){
        decorator = new Decorator()
      });
      it ('should have empty paintstock ', function(){
        const actual  = decorator.paintStock;
        assert.strictEqual(actual ,0)
      });
      it ('should be able to add a can of paint to paint stock', function(){
        paintCan.empty();
        decorator.addCanToStock(1,paintCan);
        const actual  = decorator.paintStock;
        assert.deepStrictEqual(actual ,1)
      });
      it ('should be able to calculate total litres paint it has in stock', function(){
        paintCan.empty();
        decorator.addCanToStock(1,paintCan);
        decorator.calculateTotalLitersOfPaint(paintCan);
        const actual  = paintCan.noOfLiters;
        assert.deepStrictEqual(actual ,10)
      });
      it ('should be able to calculate whether is has enough paint to paint a room', function(){
        paintCan.empty();
        decorator.addCanToStock(1,paintCan);
        decorator.calculateTotalLitersOfPaint(paintCan);
        paint = paintCan.noOfLiters;
        const actual  = decorator.isPaintEnoughForRoom(room,paint);
        assert.deepStrictEqual(actual ,'paint is not enough')
      });
      it ('should have enough paint to paint a room', function(){
        paintCan.empty();
        decorator.addCanToStock(2,paintCan);
        decorator.calculateTotalLitersOfPaint(paintCan);
        const actual  = decorator.isPaintEnoughForRoom(room,paintCan);
        assert.deepStrictEqual(actual ,'we have enough paint')
      });
      it ('should be able to paint room if has enough paint in stock', function(){
        paintCan.empty();
        decorator.addCanToStock(2,paintCan);
        decorator.calculateTotalLitersOfPaint(paintCan);
        decorator.isPaintEnoughForRoom(room,paintCan);
        const actual  = room.isPaint;
        assert.deepStrictEqual(actual ,true)
      });



    });

  });
});





// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock
