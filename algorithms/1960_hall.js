function radixCounter(radixArray) {
  const incrementer = radixArray.some((element, index) => element < index + 1);
  if (!incrementer) return false; // reached end!
  const indexToIncrement = radixArray
    .reverse()
    .findIndex((element, index) => element < radixArray.length - index);
  const resetValues = radixArray.reverse().every((element, index) => {
    if (index < indexToIncrement) return true;
    if (index >= indexToIncrement && element === index + 1) return true;
    if (index >= indexToIncrement && element !== index + 1) return false;
  });
  const reverseRadix = radixArray.reverse();
  console.log('resetValues', resetValues, 'indexToIncrement', indexToIncrement);
  const outputArray = reverseRadix.map((element, index) => {
    if (resetValues && index < indexToIncrement) {
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
  let signatureArray = Array.from({ length: n }, () => 0);
  const hallArrays = [];
  while (signatureArray !== false) {
    console.log(signatureArray);
    hallArrays.push(radixTranslator(signatureArray));
    signatureArray = radixCounter(signatureArray);
  }
  return hallArrays;
}

module.exports = { radixCounter, hall };
