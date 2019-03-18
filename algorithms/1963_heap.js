const { mutatedSwap } = require("../utils/utils");

function heap(numberArray) {
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
        inputArray = mutatedSwap(inputArray, n, 1);
      } else {
        inputArray = mutatedSwap(inputArray, n, c);
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

module.exports = heap;
