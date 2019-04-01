const { rotate, rotateInverted } = require("../utils/utils");

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

function sommervilleRotater(referenceArray, i, currentRadixCounter) {
  let counter = 0;
  const radixOfTheRadix = currentRadixCounter - 1;
  const radixOfTheRadixCounter = 0;
  counter = Math.floor(
    (i % (currentRadixCounter * radixOfTheRadix)) / currentRadixCounter
  );
  return counter;
}
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

function sommervilleV3(n) {
  let permutation = Array.from({ length: n }, (value, index) => index + 1);
  const radixReference = Array.from({ length: n }, (value, index) =>
    factorial(index + 2)
  );
  let radixArray = Array.from({ length: n }, (value, index) => 0);
  for (let i = 0; i < 24; i++) {
    radixArray = radixArray.map((value, index) => i % radixReference[index]);
    radixArray.forEach((value, index) => {
      if (index === 0) {
        if (value === 0) permutation = gysinRotater(permutation);
      } else if (!i === 0 && index > 0) {
      }
    });
    console.log(radixArray);
  }
}

// sommervilleV3(3);

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

module.exports = { gysinRotater };
