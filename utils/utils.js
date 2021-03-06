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
  if (inputOutput === 0 || inputOutput === 1) {
    return originalArrayOfArrays.map(permRow => {
      return inputOutput
        ? [permRow, permRow.map(element => referenceObj[String(element)])]
        : permRow.map(element => referenceObj[String(element)]);
    });
  }
  return originalArrayOfArrays.reduce(
    (outputArray, permRow, index) => {
      outputArray[0][index] = permRow;
      outputArray[1][index] = permRow.map(
        element => referenceObj[String(element)]
      );
      return outputArray;
    },
    [[], []]
  );
}

function rotate(array, rotation) {
  const rotateSplit =
    rotation >= 0 ? rotation % array.length : array.length + rotation;
  return array.slice(rotateSplit).concat(array.slice(0, rotateSplit));
}

function rotateInverted(array, rotation) {
  const rotationInverted = rotation * -1;
  const rotateSplit =
    rotation >= 0 ? rotationInverted % array.length : rotationInverted;
  return array.slice(rotateSplit).concat(array.slice(0, rotateSplit));
}

function rotateArrays(array, rotation) {
  return array.map(innerArray => rotate(innerArray, rotation));
}

function reverseArrays(array) {
  return array.map(innerArray => {
    const nonMutate = innerArray.map(x => x);
    return nonMutate.reverse();
  });
}

function swap(array, element1, element2) {
  const copiedArray = array.map(x => x);
  return copiedArray.map((element, index) => {
    if (index === element1) return array[element2];
    if (index === element2) return array[element1];
    return element;
  });
}

function mutatedSwap(inputArray, index1, index2) {
  const a = inputArray[index1];
  const b = inputArray[index2];
  inputArray[index1] = b;
  inputArray[index2] = a;
  return inputArray;
}

function deepEquals(array1, array2) {
  array1.every((value, index) => {
    return value === array2[index];
  });
}

function reverseNonMutate(array) {
  const maxIndex = array.length - 1;
  return array.map((value, index) => {
    return array[maxIndex - index];
  });
}

function compareArrays(array1, array2) {
  const array2First = array2[0];
  const referenceArray = array1[0].reduce((refObj, element, index) => {
    const arrayLink = { [String(element)]: array2First[index] };
    return { ...refObj, ...arrayLink };
  }, {});
  return array1.every((permutation, permutationIndex) => {
    return permutation.every((element, elementIndex) => {
      return (
        referenceArray[String(element)] ===
        array2[permutationIndex][elementIndex]
      );
    });
  });
}

function cyclicModulo(number, modulo) {
  const moduloLessOne = modulo - 1;
  const negative = moduloLessOne - (Math.abs(number + 1) % modulo);
  return number >= 0 ? number % modulo : negative;
}

function poemParser(text) {
  const splitText = text.split("\\n");
  const toArray = [];
  let stanza = [];
  splitText.forEach(line => {
    const splitLine = line.split(/\s/);
    if (splitLine.length === 1) {
      if (stanza.length > 0) toArray.push(stanza);
      stanza = [];
    } else {
      const filteredLine = splitLine.filter(word => {
        return word.length > 0;
      });
      stanza.push(filteredLine);
    }
  });
  return toArray;
}

function onlyPermutatedStanzas(arrayOfPoem) {
  const poemTitle = arrayOfPoem[0][0].length - 1;
  return arrayOfPoem.filter(stanza => {
    return stanza.every(line => line.length === poemTitle);
  });
}

function poemAnalysis(poemArray) {
  const titleArray = poemArray[0][0];
  return poemArray.reduce((outputString, stanzaArray, index) => {
    const indexArray = stanzaArray.map(line => {
      const lineArray = line.map(word => {
        if (word === "THEE") return titleArray.findIndex(x => x === "THE") + 1;
        if (word === "EYE") return titleArray.findIndex(x => x === "I") + 1;
        return titleArray.findIndex(x => x === word) + 1;
      });
      return `${lineArray.join("")}`;
    });
    return index > 0
      ? `${outputString}|${indexArray.join("/")}`
      : `${titleArray.join(" ")}: ${indexArray.join("/")}`;
  }, "");
}

function factorial(n) {
  const factorialArray = Array.from({ length: n }, (value, index) => index + 1);
  return factorialArray.reduce((factorialAccum, value) => {
    return factorialAccum * value;
  }, 1);
}

module.exports = {
  replace,
  rotate,
  rotateArrays,
  rotateInverted,
  reverseNonMutate,
  reverseArrays,
  swap,
  mutatedSwap,
  deepEquals,
  compareArrays,
  cyclicModulo,
  poemParser,
  onlyPermutatedStanzas,
  poemAnalysis,
  factorial
};
