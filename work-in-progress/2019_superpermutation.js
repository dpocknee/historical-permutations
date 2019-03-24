const { rotate, reverseNonMutate } = require("../utils/utils");

function createClosePerms(startingPerm, loopNo, totalLoops) {
  const miniPerms = startingPerm.reduce(
    (outputArray, element, index) =>
      index !== startingPerm.length - 1
        ? [...outputArray, element]
        : outputArray,
    startingPerm
  );
  const arrayCut = miniPerms.length - startingPerm.length;

  let outputPerms = [];
  if (loopNo !== 0) outputPerms = miniPerms.slice(startingPerm.length);
  else outputPerms = miniPerms.map(x => x);
  return [outputPerms, miniPerms.slice(arrayCut)];
}

function bShape(startingPerm, loopNo, totalLoops) {
  const newElements = rotate(startingPerm.slice(0, 2), 1);
  const lastElements = startingPerm.slice(2);
  const reversed = reverseNonMutate(startingPerm);
  console.log("loopedaround", loopNo, startingPerm);
  return loopNo !== Math.round(totalLoops / 2) - 1
    ? [[...lastElements, ...newElements], newElements]
    : [[...reversed], reversed.slice(1)];
}

function bShape2(startingPerm, loopNo, n, totalLoops, hierarchy) {
  const amountToReverse = selectSwapPositions(loopNo, hierarchy);
  const newElements = reverseNonMutate(startingPerm.slice(0, amountToReverse));
  const lastElements = startingPerm.slice(amountToReverse);
  return [[...lastElements, ...newElements], newElements];
}

function recursiveCounter(arrayIn, n) {
  return arrayIn.reduce((output, value, index) => {
    if (index % (n - 1) === n - 2) return [...output, value];
    return output;
  }, []);
}

function swapPositions(n) {
  const factArray = Array.from({ length: n - 1 }, (value, index) => index + 1);
  const factorial = factArray.reduce((output, value, index) => {
    return output * value;
  }, 1);
  const factCountArray = Array.from(
    { length: factorial },
    (value, index) => index
  );
  const arrayOfPositions = [[2, factCountArray]];
  for (let i = n; i > 2; i--) {
    arrayOfPositions.push([
      n - i + 3,
      recursiveCounter(arrayOfPositions[arrayOfPositions.length - 1][1], i)
    ]);
  }
  return arrayOfPositions.reverse();
}

function selectSwapPositions(currentLoopNo, arrayOfSwaps) {
  const levelFound = arrayOfSwaps.findIndex(innerArray => {
    return innerArray[1].includes(currentLoopNo);
  });
  return arrayOfSwaps[levelFound][0];
}

function superpermutation(n) {
  const hierarchy = swapPositions(n);
  const startingArray = Array.from({ length: n }, (value, index) => index + 1);
  const outputArray = [];
  let currentArray = startingArray.map(x => x);
  const factorial = startingArray.reduce(
    (total, number, index) => number * total,
    1
  );
  const totalLoops = factorial / n;
  for (let i = 0; i < totalLoops; i++) {
    const newPerms = createClosePerms(currentArray, i, totalLoops);
    newPerms[0].forEach(newValue => {
      outputArray.push(newValue);
    });
    const navigationPerms = bShape2(newPerms[1], i, n, totalLoops, hierarchy);
    navigationPerms[1].forEach(newValue => {
      if (i < totalLoops - 1) outputArray.push(newValue);
    });
    currentArray = navigationPerms[0];
  }
  console.log("Length of superpermutation: ", outputArray.length);
  return outputArray;
}

module.exports = superpermutation;
