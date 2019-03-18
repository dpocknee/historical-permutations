// Wells Permutations by Transposition

const { mutatedSwap } = require("../utils/utils");

function wells(inputArray) {
  function wellsPermutations(n, inputArray, cb) {
    let c = 1;
    while (c <= n) {
      if (n > 2) wellsPermutations(n - 1, inputArray, cb);
      if (c >= n) break;
      if (n % 2 === 0 && c > 2) {
        inputArray = mutatedSwap(inputArray, n, n - c);
      } else {
        inputArray = mutatedSwap(inputArray, n, n - 1);
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

module.exports = wells;
