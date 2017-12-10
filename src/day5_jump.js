const fp = require('lodash/fp');
const fs = require('fs');
const tco = require('./tail-call-optimization');

const instructionCount = tco.f((jumps, currentIndex, count) => {
  const indexIsInBound = currentIndex >= 0 && currentIndex < jumps.length;
  if (indexIsInBound) {
    const nextIndex = currentIndex + jumps[currentIndex];
    const jumpsUpdated = [...jumps.slice(0, currentIndex), jumps[currentIndex] + 1, ...jumps.slice(currentIndex + 1)];
    return instructionCount(jumpsUpdated, nextIndex, count + 1);
  }
  return count;
});

const stepsToEscape = jumps => instructionCount(jumps, 0, 0);

const stepsPart1 = fp.flow(
  fp.filter(v => v.length !== 0),
  fp.map(parseInt),
  stepsToEscape
);

/* eslint-disable */

const jumplist = fs.readFileSync('input/day5_input', 'utf8').split('\n');
const part1 = stepsPart1(jumplist);

module.exports = {
  stepsToEscape
};