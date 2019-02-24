const { reverse } = require('lodash');

const substituteContent = (originalArray, referenceArray, substituteArray) => {
  const referenceObj = referenceArray.reduce(
    (outObject, arrayElement, index) => {
      outObject[String(arrayElement)] = substituteArray[index];
      return outObject;
    },
    {}
  );
  return originalArray.map(permRow => {
    return [
      permRow,
      permRow.map(element => {
        return referenceObj[String(element)];
      })
    ];
  });
};

const arrayShift = (arrayin, amountToShift) => {
  //Does any rotations
  return arrayin.map(row => rotate(row, amountToShift % arrayin[0].length));
};

function rotate(arrayIn, rotation) {
  //Additional rotation code
  rotation = rotation * -1;
  return arrayIn.slice(rotation).concat(arrayIn.slice(0, rotation));
}

function swapper(inputArray, index1, index2) {
  let a = inputArray[index1];
  let b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

module.exports = { substituteContent, rotate, arrayShift, swapper };
