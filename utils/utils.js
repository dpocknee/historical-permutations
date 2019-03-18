function replace(
  originalArrayOfArrays,
  referenceArray,
  substituteArray,
  inputOutput
) {
  const referenceObj = referenceArray.reduce(
    (outObject, arrayElement, index) => {
      outObject[String(arrayElement)] = substituteArray[index];
      return outObject;
    },
    {}
  );
  return originalArrayOfArrays.map(permRow => {
    return inputOutput
      ? permRow.map(element => referenceObj[String(element)])
      : [permRow, permRow.map(element => referenceObj[String(element)])];
  });
}

function rotate(array, rotation) {
  const rotateSplit =
    rotation >= 0 ? rotation % array.length : array.length + rotation;
  return array.slice(rotateSplit).concat(array.slice(0, rotateSplit));
}

function rotateArrays(array, rotation) {
  return array.map(innerArray => rotate(innerArray, rotation));
}

function reverseArrays(array) {
  return array.map(innerArray => innerArray.reverse());
}

// function shiftArrays(arrayin, amountToShift) {
//   return arrayin.map(row => rotate(row, amountToShift % arrayin[0].length));
// }

function swap(inputArray, index1, index2) {
  return (swapArray = inputArray.map((element, index) => {
    if (index === index1) return inputArray[index2];
    if (index === index2) return inputArray[index1];
    return element;
  }));
}

function mutatedSwap(inputArray, index1, index2) {
  const a = inputArray[index1];
  const b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

module.exports = {
  replace,
  rotate,
  rotateArrays,
  reverseArrays,
  swap,
  mutatedSwap
};
