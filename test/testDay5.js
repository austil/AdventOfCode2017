const d = require('../src/day5_jump');
const assert = require('assert');

describe('Day 5 - Jump instructions', function () {
  
  it('solve given examples of part 1', function () {
    assert.strictEqual(d.stepsToEscape([0, 3, 0, 1, -3]), 5);
  });
});
