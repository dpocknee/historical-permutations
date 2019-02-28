// Lehmer Constant Difference Method (1960)
const moduloAdd = (array, amount, modulo, size) => array.reduce((outputArray, currentValue, index) => {
  const amountToAdd = array.length - index <= size ? amount : 0;
  outputArray.push((currentValue + amountToAdd) % modulo);
  return outputArray;
}, []);

function lehmer(originalInputArray) {
  function lehmerPermutations(array, modulo, size, cb) {
    while (size > 2) {
      if (size === array.length) {
        for (let i = 0; i < inputArray.length; i++) {
          const shiftedArray = moduloAdd(array, i, array.length, size);
          cb(shiftedArray);
        }
      }
      array = moduloAdd(array, -1, array.length, size - 1);
      array = moduloAdd(array, 1, modulo - 1, size - 1);
      if (array[array.length - (size - 1)] === 0) {
        array = lehmerPermutations(array, modulo - 1, size - 1, cb);
      }
      array = moduloAdd(array, 1, modulo, size - 1);
      if (size !== array.length) return array;
      const arraySimilarity = array.every((number, i) => number === inputArray[i]);
      if (size === array.length && arraySimilarity) break;
    }
    return array;
  }

  const inputArray = originalInputArray.map(num => num - 1);
  const lehmerArrays = [];
  const callback = permutation => lehmerArrays.push(permutation);
  const startingModulo = inputArray.length;
  lehmerPermutations(inputArray, startingModulo, startingModulo, callback);
  const readjustedLehmerArrays = lehmerArrays.map(array => array.map(num => num + 1));
  return readjustedLehmerArrays;
}

module.exports = lehmer;
