const { swap, reverseNonMutate } = require("../utils/utils");

function wikipediaLex(inputArray, cb) {
  let array = inputArray.map(x => x);
  while (true) {
    let highestIndexK = -1;
    for (let k = 0; k < array.length - 1; k++) {
      if (array[k] < array[k + 1]) highestIndexK = k;
    }
    if (highestIndexK === -1) break;
    let highestIndexL = 0;
    for (let l = 0; l < array.length; l++) {
      if (array[highestIndexK] < array[l]) highestIndexL = l;
    }
    const newArray = swap(array, highestIndexK, highestIndexL);
    array = newArray
      .slice(0, highestIndexK + 1)
      .concat(reverseNonMutate(newArray.slice(highestIndexK + 1)));
    cb(array);
  }
}

function pandita(n) {
  const startingArray = Array.from({ length: n }, (v, i) => i + 1);
  const outputArrays = [startingArray];
  wikipediaLex(startingArray, perm => outputArrays.push(perm));
  return outputArrays;
}

module.exports = pandita;
