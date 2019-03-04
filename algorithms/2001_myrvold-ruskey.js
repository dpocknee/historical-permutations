// Myrvold-Ruskey (2001) [Remainder Algorithm]

function nonMutationSwapper(inputArray, index1, index2) {
  const swapArray = inputArray.map(x => x);
  const a = swapArray[index1];
  const b = swapArray[index2];
  swapArray[index1] = b;
  swapArray[index2] = a;
  return swapArray;
}

function remainderCalculator(n, permutationNumber) {
  const divisors = Array.from({ length: n - 1 }, (v, i) => n - i);
  let totalRemaining = permutationNumber;
  return divisors.reduce((transpositions, element) => {
    transpositions.push([element, (totalRemaining % element) + 1]);
    totalRemaining = Math.floor(totalRemaining / element);
    return transpositions;
  }, []);
}

function myrvoldSwapper(n, permutationNumber, initialPermutation) {
  const swapArray = remainderCalculator(n, permutationNumber);
  return swapArray.reduce(
    (swappedArray, exchangePair, index) => nonMutationSwapper(swappedArray, exchangePair[0] - 1, exchangePair[1] - 1),
    initialPermutation
  );
}

function myrvoldRuskey(n) {
  const startingArray = Array.from({ length: n }, (v, i) => i + 1);
  const outputArrays = [startingArray];
  const factorial = startingArray.reduce((fact, element, index) => fact * (index + 1), 1);
  for (let i = 0; i < factorial - 1; i++) {
    outputArrays.push(myrvoldSwapper(n, i, startingArray));
  }
  return outputArrays;
}

module.exports = myrvoldRuskey;
