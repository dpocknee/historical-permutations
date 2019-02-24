const { swapper } = require('../utils/utils');

function heapWrapper(numberArray) {
  function heapPermutations(n, inputArray, cb) {
    let c = 1;
    while (c <= n) {
      if (n > 2) {
        heapPermutations(n - 1, inputArray, cb);
      }
      if (c >= n) {
        break;
      }
      if (n % 2) {
        inputArray = swapper(inputArray, n, 1);
      } else {
        inputArray = swapper(inputArray, n, c);
      }
      cb(inputArray.slice(1));
      c += 1;
    }
  }

  const callback = permutation => heapArray.push(permutation);
  const heapArray = [numberArray];
  heapPermutations(numberArray.length, [0].concat(numberArray), callback);
  return heapArray;
}

module.exports = {
  algorithm: heapWrapper,
  code: '1963_heap.js',
  year: 1963,
  name: 'Heap Permutations by Interchanges Algorithm',
  info: 'This is an implementation of B.R. Heap\'s 1963 permutation algorithm as described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.  NOTE: Because of the fact the original algorithm is based on an array in which the indexes start from 1 rather than 0, the input array should have a meaningless placeholder element in the first position (e.g. the \'0\' in [0,1,2,3,4,5]).',
  references: ['1963Heap'],
};
