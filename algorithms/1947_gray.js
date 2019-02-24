function grayCode(lengthOfBinaryString, cb) {
  const integerToBinaryList = (int, paddingLength) => {
    const intConverted = (int >>> 0).toString(2).split('');
    const padding = paddingLength - intConverted.length;
    return Array.from({ length: padding }, () => 0).concat(
      intConverted.map(bin => parseInt(bin))
    );
  };

  const grayCodeBuilder = binaryList => {
    return binaryList.reduce((outputList, currentValue, index, array) => {
      if (index < binaryList.length - 1) {
        const xor = currentValue ^ binaryList[index + 1];
        outputList.push(xor);
      }
      return outputList;
    }, []);
  };
  const maximumLength = parseInt(
    Array.from({ length: lengthOfBinaryString - 1 }, () => 1).join(''),
    2
  );

  for (let i = 0; i <= maximumLength; i++) {
    const grayCode = grayCodeBuilder(
      integerToBinaryList(i, lengthOfBinaryString)
    );
    const intFormtted = parseInt(grayCode.join(''));
    cb([grayCode, parseInt(intFormtted, 2)]);
  }
}

module.exports = grayCode;
