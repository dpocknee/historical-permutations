/* 
Examples:
const exampleArrayOfArrays = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
substituteContent(exampleArrayOfArrays, [1, 2, 3], ["A", "B", "C"], 1);
-> [
    [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1],
    ["A", "B", "C"], ["A", "C", "B"], ["B", "A", "C"], ["B", "C", "A"], ["C", "A", "B"], ["C", "B", "A"]
  ]

substituteContent(exampleArrayOfArrays, [1, 2, 3], ["A", "B", "C"], 0);
->["A", "B", "C"], ["A", "C", "B"], ["B", "A", "C"], ["B", "C", "A"], ["C", "A", "B"], ["C", "B", "A"];

rotate([1, 2, 3], 1)
-> [1, 2, 3]

rotate([1, 2, 3], 2)
-> [2, 3, 1]

rotate([1, 2, 3], -2)
-> [3, 1, 2]

*/

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
  return array.map(innerArray => reverse(innerArray));
}

function shiftArrays(arrayin, amountToShift) {
  return arrayin.map(row => rotate(row, amountToShift % arrayin[0].length));
}

function swap(inputArray, index1, index2) {
  return (swapArray = inputArray.map((element, index) => {
    if (index === index1) return inputArray[index2];
    if (index === index2) return inputArray[index1];
    return element;
  }));
}

module.exports = {
  replace,
  rotate,
  rotateArrays,
  reverseArrays,
  shiftArrays,
  swap
};
