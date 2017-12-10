const fp = require('lodash/fp');
const fs = require('fs');

const noDuplicate = words => {
  return fp.uniq(words).length === words.length;
};

const isValid = fp.flow(
  fp.words,
  noDuplicate
);

const noAnagram = words => {
  const wordsToLists = words.map(fp.split(''));
  const listsSorted = wordsToLists.map(fp.sortBy(fp.idendity));
  const listsToWords = listsSorted.map(fp.join(''));
  return noDuplicate(listsToWords);
};

const isValidAdvanced = fp.flow(
  fp.words,
  w => noDuplicate(w) && noAnagram(w)
);

const nbValid = fp.flow(
  fp.compact,
  fp.map(p => isValid(p)),
  fp.reduce((c, r) => r ? c + 1 : c, 0)
);

const nbValidAdvanced = fp.flow(
  fp.compact,
  fp.map(p => isValidAdvanced(p)),
  fp.reduce((c, r) => r ? c + 1 : c, 0)
);

/* eslint-disable */

const passlist = fs.readFileSync('input/day4_input', 'utf8').split('\n');
const part1 = nbValid(passlist);
const part2 = nbValidAdvanced(passlist);

module.exports = {
  isValid,
  isValidAdvanced
};