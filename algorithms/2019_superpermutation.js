const { reverseNonMutate } = require("../utils/utils");

function weight1graph(startingPermutation, loopNo) {
  const permutationCycle = startingPermutation.reduce(
    (outputArray, element, index) =>
      index !== startingPermutation.length - 1
        ? [...outputArray, element]
        : outputArray,
    startingPermutation
  );
  const arrayCut = permutationCycle.length - startingPermutation.length;

  const outputGraph =
    loopNo !== 0
      ? permutationCycle.slice(startingPermutation.length)
      : permutationCycle.map(x => x);

  return [outputGraph, permutationCycle.slice(arrayCut)];
}

function selectSwapPositions(currentLoopNo, arrayOfSwaps) {
  const levelFound = arrayOfSwaps.findIndex(innerArray => {
    return innerArray[1].includes(currentLoopNo);
  });
  return arrayOfSwaps[levelFound][0];
}

function graphConnector(startingPermutation, loopNo, hierarchy) {
  const amountToReverse = selectSwapPositions(loopNo, hierarchy);
  const newElements = reverseNonMutate(
    startingPermutation.slice(0, amountToReverse)
  );
  const lastElements = startingPermutation.slice(amountToReverse);
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
  const factorial = factArray.reduce((output, value) => {
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

function superpermutation(n) {
  const hierarchy = swapPositions(n);
  const startingArray = Array.from({ length: n }, (value, index) => index + 1);
  const outputArray = [];
  let currentArray = startingArray.map(x => x);
  const factorial = startingArray.reduce((total, number) => number * total, 1);
  const totalLoops = factorial / n;
  for (let i = 0; i < totalLoops; i++) {
    const newPerms = weight1graph(currentArray, i);
    newPerms[0].forEach(newValue => {
      outputArray.push(newValue);
    });
    const navigationPerms = graphConnector(newPerms[1], i, hierarchy);
    navigationPerms[1].forEach(newValue => {
      if (i < totalLoops - 1) outputArray.push(newValue);
    });
    currentArray = navigationPerms[0];
  }
  return outputArray;
}

module.exports = superpermutation;
