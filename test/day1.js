const d = require('../src/day1');
const assert = require('assert');

describe('Day 1 - Captcha', function() {
  
  describe('Fun', function(){
    it('should decompose the captcha in tuple of 2 following numbers', function(){
      assert.deepStrictEqual(d.tupleWithNext([1,2,3]), [[1,2],[2,3],[3,1]]);
      assert.deepStrictEqual(d.tupleWithNext([1,1,2,2]), [[1,1],[1,2],[2,2],[2,1]]);
    });

    it('should keep digit that match the next', function(){
      assert.deepStrictEqual(d.keepMatchNext([[1,2],[2,3],[3,3],[7,7]]), [3, 7]);
      assert.deepStrictEqual(d.keepMatchNext([[1,1],[1,2],[2,2],[2,1]]), [1, 2]);
    });

    it('should decompose the captcha in tuple of 2 hallfway around numbers', function(){
      assert.deepStrictEqual(d.tupleWithHalfway([1,2,3,1,2,3]), [[1,1],[2,2],[3,3],[1,1],[2,2],[3,3]]);
      assert.deepStrictEqual(d.tupleWithHalfway([1,2,1,2]), [[1,1],[2,2],[1,1],[2,2]]);
    });
  });

  it('solve given examples of part 1', function(){
    assert.strictEqual(d.decodePart1('1122'), 3);
    assert.strictEqual(d.decodePart1('1111'), 4);
    assert.strictEqual(d.decodePart1('1234'), 0);
    assert.strictEqual(d.decodePart1('91212129'), 9);
  });

  it('solve given examples of part 2', function(){
    assert.strictEqual(d.decodePart2('1212'), 6);
    assert.strictEqual(d.decodePart2('1221'), 0);
    assert.strictEqual(d.decodePart2('123425'), 4);
    assert.strictEqual(d.decodePart2('123123'), 12);
    assert.strictEqual(d.decodePart2('12131415'), 4);
  });

});