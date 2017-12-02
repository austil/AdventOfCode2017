const d = require('../src/day2_checksum');
const assert = require('assert');

const spreadsheet1 = '5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8';

const spreadsheet2 = '5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5';

describe('Day 2 - Checksum', function() {

  it('solve given examples of part 1', function(){
    assert.strictEqual(d.checkPart1(spreadsheet1), 18);
	});
	
	it('solve given examples of part 2', function(){
    assert.strictEqual(d.checkPart2(spreadsheet2), 9);
	});

});