function radixCounter(radixArray) {
  const incrementer = radixArray.some((element, index) => element < index + 1);
  if (!incrementer) return false; // reached end!
  const reversedArray = radixArray.reverse();
  const indexToIncrement = reversedArray.findIndex(
    (element, index) => element < radixArray.length - index
  );
  const outputArray = reversedArray.map((element, index) => {
    if (index < indexToIncrement) {
      return 0;
    }
    if (index === indexToIncrement) return element + 1;
    return element;
  });
  return outputArray.reverse();
}

function radixTranslator(radixSignature) {
  return radixSignature.reduce(
    (outputArray, element, index) => {
      const insertPosition = outputArray.length - element;
      return outputArray
        .slice(0, insertPosition)
        .concat([index + 2, ...outputArray.slice(insertPosition)]);
    },
    [1]
  );
}

function hall(n) {
  let signatureArray = Array.from({ length: n - 1 }, () => 0);
  const hallArrays = [];
  while (signatureArray !== false) {
    hallArrays.push(radixTranslator(signatureArray));
    signatureArray = radixCounter(signatureArray);
  }
  return hallArrays;
}

module.exports = { radixCounter, hall };
