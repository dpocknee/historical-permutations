const substituteContent = (originalArray, referenceArray, substituteArray) => {
  const referenceObj = referenceArray.reduce((outObject, arrayElement, index) => {
    outObject[String(arrayElement)] = substituteArray[index];
    return outObject;
  }, {});
  return originalArray.map(permRow => [
    permRow,
    permRow.map(element => referenceObj[String(element)])
  ]);
};

function rotate(arrayIn, rotation) {
  const rotationDirection = rotation * -1;
  return arrayIn.slice(rotationDirection).concat(arrayIn.slice(0, rotationDirection));
}

const arrayShift = (arrayin, amountToShift) => arrayin.map(row => rotate(row, amountToShift % arrayin[0].length));

function swapper(inputArray, index1, index2) {
  const a = inputArray[index1];
  const b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

module.exports = {
  substituteContent,
  rotate,
  arrayShift,
  swapper
};
