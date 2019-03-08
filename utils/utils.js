const substituteContent = (originalArrayOfArrays, referenceArray, substituteArray) => {
  const referenceObj = referenceArray.reduce((outObject, arrayElement, index) => {
    outObject[String(arrayElement)] = substituteArray[index];
    return outObject;
  }, {});
  return originalArrayOfArrays.map(permRow => [
    permRow,
    permRow.map(element => referenceObj[String(element)])
  ]);
};

function rotate(array, rotation) {
  const rotateSplit = rotation < 0 ? (rotation - 1) % array.length : (rotation - 1) % array.length;
  return array.slice(rotateSplit).concat(array.slice(0, rotateSplit));
}

const arrayShift = (arrayin, amountToShift) => arrayin.map(row => rotate(row, amountToShift % arrayin[0].length));

function swapper(inputArray, index1, index2) {
  const a = inputArray[index1];
  const b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

function nonMutationSwapper(inputArray, index1, index2) {
  const swapArray = inputArray.map(x => x);
  const a = swapArray[index1];
  const b = swapArray[index2];
  swapArray[index1] = b;
  swapArray[index2] = a;
  return swapArray;
}

module.exports = {
  substituteContent,
  rotate,
  arrayShift,
  swapper,
  nonMutationSwapper
};
