const fp = require('lodash/fp');
const tco = require('./tail-call-optimization');

const largestBankIndex = (banks) => {
  return fp.findIndex(fp.eq(fp.max(banks)))(banks);
};

const spreadBlocks = (banks, blocks, i) => {
  if (blocks === 0) {
    return banks;
  }
  const updatedBanks = [...banks.slice(0, i), banks[i] + 1, ...banks.slice(i + 1)];
  return spreadBlocks(updatedBanks, blocks - 1, (i + 1) % banks.length);
};

const redistribute = (banks, index) => {
  const blocksToDistribute = banks[index];
  const startIndex = (index + 1) % banks.length;
  const banksMinusLargest = [...banks.slice(0, index), 0, ...banks.slice(index + 1)];

  return spreadBlocks(banksMinusLargest, blocksToDistribute, startIndex);
};

const doCycle = (banks) => redistribute(banks, largestBankIndex(banks));

const cyclesBeforeDejaVu = tco.f((banks, dejaVu = [], n = 0) => {
  const banksKey = fp.toString(banks);

  if (fp.includes(banksKey)(dejaVu)) {
    const loopSize = n - fp.findIndex(fp.eq(banksKey))(dejaVu);
    return [n, loopSize];
  }

  const banksAfterCycle = doCycle(banks);
  return cyclesBeforeDejaVu(banksAfterCycle, [...dejaVu, banksKey], n + 1);
});

/* eslint-disable */

module.exports = {
  largestBankIndex,
  redistribute,
  doCycle,
  cyclesBeforeDejaVu
};
