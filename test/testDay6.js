const d = require('../src/day6_reallocation');
const assert = require('assert');

describe('Day 6 - Memory realocation', function () {
  
  it('solve given examples of part 1', function () {
    assert.strictEqual(d.cyclesBeforeDejaVu([0,2,7,0])[0], 5);
  });

  describe('Fun', function() {
    
    it('find the index of the largest bank', function(){
      assert.strictEqual(d.largestBankIndex([0,2,7,0]), 2);
      assert.strictEqual(d.largestBankIndex([0,7,7,0]), 1);
    });

    it('redistribute blocks', function(){
      assert.deepStrictEqual(d.redistribute([0,2,7,0], 2), [2,4,1,2]);
      assert.deepStrictEqual(d.redistribute([0,2,2,0], 1), [0,0,3,1]);
    });

    it('does a cycle', function() {
      assert.deepStrictEqual(d.doCycle([0,2,7,0]), [2,4,1,2]);
      assert.deepStrictEqual(d.doCycle([0,2,2,0]), [0,0,3,1]);
    })

  });

  it('solve given examples of part 2', function () {
    assert.strictEqual(d.cyclesBeforeDejaVu([0,2,7,0])[1], 4);
  });
});
