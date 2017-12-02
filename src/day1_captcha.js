const fp = require('lodash/fp');

const tupleWithNext = l => {
  const shifted = fp.concat(fp.tail(l), fp.head(l));
  return fp.zip(l, shifted);
};

const tupleWithHalfway = l => {
  const shifted = l.slice(l.length / 2).concat(l.slice(0, l.length / 2));
  return fp.zip(l, shifted);
};

const keepMatchNext = fp.flow(
  fp.map(v => fp.first(v) === fp.last(v) ? fp.first(v) : 0),
  fp.compact
);

const decode = tupleMethod => fp.flow(
  fp.toArray,
  fp.map(parseInt),
  tupleMethod,
  keepMatchNext,
  fp.sum
);

const decodePart1 = decode(tupleWithNext);

const decodePart2 = decode(tupleWithHalfway);

/* eslint-disable */

module.exports = {
  tupleWithNext,
  keepMatchNext,
  decodePart1,
  tupleWithHalfway,
  decodePart2
};
