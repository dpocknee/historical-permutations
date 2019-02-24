const { rotate } = require('../utils/utils');

function tompkinsWrapper(inputArray, rotationDirection) {
  function tompkinsPermutations(n, inputArray, rotationDirection, cb) {
    let c = 1;
    while (c <= n) {
      if (n > 2) {
        tompkinsPermutations(n - 1, inputArray, rotationDirection, cb);
      }
      inputArray = rotate(inputArray.slice(0, n), rotationDirection).concat(inputArray.slice(n));
      if (c >= n) {
        break;
      }
      cb(inputArray);
      c += 1;
    }
  }

  const tompkinsArray = [inputArray];
  const callback = permutation => tompkinsArray.push(permutation);
  tompkinsPermutations(inputArray.length, tompkinsArray[0], rotationDirection, callback);
  return tompkinsArray;
}

module.exports = {
  algorithm: tompkinsWrapper,
  code: '1956_tompkins.js',
  name: 'Tompkins-Paige Algorithm',
  year: 1956,
  arguments: 2,
  info:
    'This is a recurive implementation of Tompkins and Paige\'s 1956 permutation algorithm As described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.',
  references: ['1956Tompkins'],
};
