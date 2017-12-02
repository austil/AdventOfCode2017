const fp = require('lodash/fp');

// Snippet found on StackOverflow
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a); // eslint-disable-line

const checkPart1 = fp.flow(
  fp.split('\n'),
  fp.compact,
  fp.map(fp.flow(
    l => l.split('\t'),
    l => l.map(c => parseInt(c)),
    l => fp.max(l) - fp.min(l)
  )),
  fp.sum
);

const checkPart2 = fp.flow(
  // Format input
  fp.split('\n'),
  fp.compact,
  fp.map(fp.flow(
    l => l.split('\t'),
    l => l.map(c => parseInt(c)),
    // Find the two number that evenly divide on each line
    l => cartesian(l, l),
    fp.filter(t => {
      const d = fp.first(t) / fp.last(t);
      return d === fp.round(d) && fp.first(t) !== fp.last(t);
    }),
    fp.head,
    t => fp.first(t) / fp.last(t)
  )),
  fp.sum
);

/* eslint-disable */

module.exports = {
  checkPart1,
  checkPart2
};