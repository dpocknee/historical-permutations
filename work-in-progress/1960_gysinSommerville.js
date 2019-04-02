const { rotate, rotateInverted, cyclicModulo } = require("../utils/utils");

function gysinSommerville(n) {
  const startingPerm = Array.from({ length: n }, (value, index) => index + 1);
  const referenceArray = Array.from({ length: n }, () => 0);

  const currentRadixCounter = 3;
  let counter = 0;
  const radixOfTheRadix = currentRadixCounter - 1;
  let radixOfTheRadixCounter = 0;
  for (let i = 0; i < 24; i++) {
    counter = i % currentRadixCounter;
    if (counter === 0 && i !== 0) {
      radixOfTheRadixCounter = (radixOfTheRadixCounter + 1) % radixOfTheRadix;
    }
    referenceArray[currentRadixCounter] = radixOfTheRadixCounter;
    console.log(referenceArray);
  }
}

// gysinSommerville(4);

// [1, 2, 3, 4][(1, 3, 2, 4)][(1, 4, 2, 3)];

// function sommervilleRotater(referenceArray, i, currentRadixCounter) {
//   let counter = 0;
//   const radixOfTheRadix = currentRadixCounter - 1;
//   const radixOfTheRadixCounter = 0;
//   counter = Math.floor(
//     (i % (currentRadixCounter * radixOfTheRadix)) / currentRadixCounter
//   );
//   return counter;
// }
// for (let j = 0; j < 24; j++) {
//   console.log(sommervilleRotater([0, 0, 0, 0], j, 4));
// }

function gysinRotater(array, amount, direction, position = 0) {
  const cutPoint = array.length - amount;
  const beginningSection =
    position === 0 ? array.slice(0, cutPoint) : array.slice(0, position);
  const midSection =
    position === 0
      ? rotateInverted(array.slice(cutPoint), direction)
      : rotateInverted(array.slice(position, position + amount), direction);
  const endSection = position === 0 ? [] : array.slice(position + amount);
  return [...beginningSection, ...midSection, ...endSection];
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

// V 1
// [1, 2, 3]

// [2, 1, 3]

// [3, 2, 1]

// [1, 3, 2]

// [2, 3, 1]

// [3, 1, 2]

// V2

// [1, 2, 3]

// [2, 3, 1]

// [3, 2, 1]

// [1, 3, 2]

// [2, 1, 3]

// [3, 1, 2]

// V3

function factorial(n) {
  const factorialArray = Array.from({ length: n }, (value, index) => index + 1);
  return factorialArray.reduce((factorialAccum, value) => {
    return factorialAccum * value;
  }, 1);
}

function sommervilleV3(n, cb) {
  /* eslint no-loop-func: 0 */
  let permutation = Array.from({ length: n }, (value, index) => index + 1);
  const radixReference = Array.from({ length: n }, (value, index) => {
    return index === 0 ? 2 : factorial(index + 2);
  });
  let radixArray = Array.from({ length: n - 1 }, () => 0);
  // cb(permutation);
  let radixChecker = false;
  let initializer = true;
  let i = 0;
  while (radixChecker === false) {
    radixArray = radixArray.map((value, index) => i % radixReference[index]);
    radixArray.forEach((radixValue, radixIndex) => {
      if (radixIndex > 0 && i > 0 && radixValue === 0) {
        const amountToRotate = radixIndex + 2;
        permutation = sommervilleRotater(
          permutation,
          amountToRotate,
          1,
          n - 1 - amountToRotate
        );
      }
      if (radixIndex === 0 && i > 0) {
        permutation = sommervilleRotater(permutation, 2, -1, n - 3);
        if (radixValue === 0) {
          permutation = sommervilleRotater(permutation, 3, -1, n - 3);
        }
      }
    });
    i += 1;
    cb(permutation);
    radixChecker = radixArray.every(
      radix => radix === 0 && initializer === false
    );
    if (initializer === true) initializer = false;
  }
}

sommervilleV3(4, perm => console.log(perm));

// console.log(gysinRotater([2, 1, 3], 2, -1));

// [1, 2, 3]
// ^2 < 1
// [2, 1, 3]
// 3 < 1 / ^2 < 1
// [3, 1, 2]
// ^2 < 1
// [1, 3, 2]
// 3 < 1 / ^2 < 1
// [2, 3, 1]
// ^2 < 1
// [3, 2, 1]
// ^4 < 1 / ^3 < 1 / ^2 < 1
// [1, ]

// V4
// [1, 2, 3]

// [2, 3, 1]

// [3, 1, 2]

// [1, 3, 2]

// [2, 1, 3]

// [3, 2, 1]

module.exports = { sommervilleRotater };
