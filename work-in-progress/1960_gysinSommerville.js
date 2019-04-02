const { cyclicModulo, reverseNonMutate } = require("../utils/utils");
/* eslint no-loop-func: 0 */

function factorial(n) {
  const factorialArray = Array.from({ length: n }, (value, index) => index + 1);
  return factorialArray.reduce((factorialAccum, value) => {
    return factorialAccum * value;
  }, 1);
}

function sommervilleRotater(array, sizeToRotate, direction, position = -1) {
  const arrayCopy = array.map(x => x);
  const startOfRotation =
    position === -1 ? array.length - sizeToRotate : position;
  const endOfRotation =
    position === -1 ? array.length - 1 : position + sizeToRotate - 1;
  return arrayCopy.map((value, index) => {
    if (index < startOfRotation || index > endOfRotation) {
      return value;
    }
    const indexToExhangeWith =
      startOfRotation +
      cyclicModulo(index - startOfRotation + direction, sizeToRotate);
    return array[indexToExhangeWith];
  });
}

function sommerville1(n, startingDirection, cb) {
  let permutation = Array.from({ length: n }, (value, index) => index + 1);
  const radixReference = Array.from({ length: n }, (value, index) => {
    if (index === 0) return 2;
    if (index === 1) return 3;
    return factorial(index + 1);
  });
  let radixArray = Array.from({ length: n }, () => 0);
  let radixChecker = false;
  let initializer = true;
  let direction = startingDirection;
  let i = 0;
  while (radixChecker === false) {
    let directionChange = false;
    radixArray = radixArray.map((value, index) => i % radixReference[index]);
    radixArray.forEach((radixValue, radixIndex) => {
      if (radixIndex === 0 && i > 0) {
        permutation = sommervilleRotater(permutation, 3, direction, n - 3);
      }
      if (radixIndex > 0 && i > 0) {
        const amountToRotate =
          radixIndex === 1 ? radixIndex + 1 : radixIndex + 2;
        if (radixValue === 0) {
          permutation = sommervilleRotater(
            permutation,
            amountToRotate,
            direction
          );
          directionChange = true;
        }
      }
    });
    if (directionChange) direction *= -1;
    i += 1;
    radixChecker = radixArray.every(
      radix => radix === 0 && initializer === false
    );
    if (radixChecker === false) cb(permutation);
    if (initializer === true) initializer = false;
  }
}

function sommerville2(n, direction, cb) {
  let permutation = Array.from({ length: n }, (value, index) => index + 1);
  const radixReference = Array.from({ length: n }, (value, index) => {
    if (index === 0) return 2;
    if (index === 1) return 3;
    return factorial(index + 1);
  });
  let radixArray = Array.from({ length: n }, () => 0);
  let radixChecker = false;
  let initializer = true;
  let i = 0;
  let currentDirection = direction;
  while (radixChecker === false) {
    radixArray = radixArray.map((value, index) => i % radixReference[index]);
    radixArray.forEach((radixValue, radixIndex) => {
      if (radixIndex === 1 && i > 0) {
        if (radixValue === 0) currentDirection *= -1;
        permutation = sommervilleRotater(permutation, 3, currentDirection);
        if (radixValue === 2) {
          permutation = sommervilleRotater(permutation, 2, currentDirection);
        }
      }
      if (radixIndex > 1 && i > 0 && radixValue === 0) {
        const amountToRotate = radixIndex + 2;
        permutation = sommervilleRotater(
          permutation,
          amountToRotate,
          currentDirection
        );
      }
    });
    i += 1;
    radixChecker = radixArray.every(
      radix => radix === 0 && initializer === false
    );
    if (radixChecker === false) cb(permutation);
    if (initializer === true) initializer = false;
  }
}

function sommerville3(n, direction, cb) {
  let permutation = Array.from({ length: n }, (value, index) => index + 1);
  const radixReference = Array.from({ length: n }, (value, index) => {
    return index === 0 ? 2 : factorial(index + 2);
  });
  let radixArray = Array.from({ length: n - 1 }, () => 0);
  let radixChecker = false;
  let initializer = true;
  let i = 0;
  while (radixChecker === false) {
    radixArray = radixArray.map((value, index) => i % radixReference[index]);
    radixArray.forEach((radixValue, radixIndex) => {
      if (radixIndex > 0 && i > 0 && radixValue === 0) {
        const amountToRotate = radixIndex + 3;
        permutation = sommervilleRotater(
          permutation,
          amountToRotate,
          direction * -1
        );
      }
      if (radixIndex === 0 && i > 0) {
        permutation = sommervilleRotater(permutation, 2, direction, n - 3);
        if (radixValue === 0) {
          permutation = sommervilleRotater(permutation, 3, direction, n - 3);
        }
      }
    });
    i += 1;
    radixChecker = radixArray.every(
      radix => radix === 0 && initializer === false
    );
    if (radixChecker === false) cb(permutation);
    if (initializer === true) initializer = false;
  }
}

// sommerville3(5, -1, perm => console.log(perm));

// V4
// [1, 2, 3]
// 3 < 1
// [2, 3, 1]
// 3 < 1
// [3, 1, 2]
// 3 < 1
// [1, 3, 2]
//
// [2, 1, 3]

// [3, 2, 1]

function gysinSommerville(n, algorithm, variable) {
  const outputArrays = [];
  if (algorithm === 1)
    sommerville1(n, variable, finishedArray =>
      outputArrays.push(finishedArray)
    );
  if (algorithm === 2)
    sommerville2(n, variable, finishedArray =>
      outputArrays.push(finishedArray)
    );
  if (algorithm === 3)
    sommerville3(n, variable, finishedArray =>
      outputArrays.push(finishedArray)
    );
  return outputArrays;
}

module.exports = { sommervilleRotater, gysinSommerville };
