const { swapper } = require('../utils/utils');

function wellsWrapper(inputArray) {
  function wellsPermutations(n, inputArray, cb) {
    let c = 1;
    while (c <= n) {
      if (n > 2) wellsPermutations(n - 1, inputArray, cb);
      if (c >= n) break;
      if (n % 2 === 0 && c > 2) {
        inputArray = swapper(inputArray, n, n - c);
      } else {
        inputArray = swapper(inputArray, n, n - 1);
      }
      wellsArray.push(inputArray.slice(1));
      c += 1;
    }
  }
  const wellsArray = [inputArray];
  const callback = permutation => wellsArray.push(permutation);
  wellsPermutations(inputArray.length, [0].concat(inputArray), callback);
  return wellsArray;
}

module.exports = {
  algorithm: wellsWrapper,
  code: '1960_wells.js',
  year: '1960',
  name: 'Wells Permutations by Transposition Algorithm',
  info: 'This is an implementation of M. B. Wells 1960 permutation algorithm as described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.  NOTE: Because of the fact the original algorithm is based on an array in which the indexes start from 1 rather than 0, and that it will not work otherwise, the algorithm inserts a meaningless placeholder element in the first position (e.g. the \'0\' in [0,1,2,3,4,5]), then removes it for the output.',
  references: ['1961Wells'],
};
