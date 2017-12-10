const d = require('../src/day4_passphrase');
const assert = require('assert');

describe('Day 4 - Passphrase', function () {

  it('solve given examples of part 1', function () {
    assert.strictEqual(d.isValid('aa bb cc dd ee'), true);
    assert.strictEqual(d.isValid('aa bb cc dd aa'), false);
    assert.strictEqual(d.isValid('aa bb cc dd aaa'), true);
  });

  it('solve given examples of part 2', function () {
    assert.strictEqual(d.isValidAdvanced('abcde fghij'), true);
    assert.strictEqual(d.isValidAdvanced('abcde xyz ecdab'), false);
    assert.strictEqual(d.isValidAdvanced('a ab abc abd abf abj'), true);
    assert.strictEqual(d.isValidAdvanced('iiii oiii ooii oooi oooo'), true);
    assert.strictEqual(d.isValidAdvanced('oiii ioii iioi iiio'), false);
  });

});