const howellAdd = (arrayIn, arrayLength) => {
  let newArray = arrayIn.map((value, index) => {
    return index === arrayLength ? value + 9 : value;
  });
  const currentArray = [];
  for (let addCounter1 = 1; addCounter1 < arrayLength; addCounter1++) {
    const carry =
      arrayLength > 10
        ? newArray[arrayLength - addCounter1 + 1] / arrayLength
        : Math.round(newArray[arrayLength - addCounter1 + 1] / 10.0);
    if (carry === 0) {
      console.log("c triggered");
      newArray = howellTest(newArray, arrayLength); // C
    }
    const arrayPos = arrayLength - addCounter1;
    const firstSet = newArray[arrayPos - addCounter1] + carry;
    const secondSet = (newArray[arrayPos - addCounter1 + 1] - 10) * carry;
    newArray = newArray.map((value, index) => {
      if (index === arrayPos - addCounter1) return firstSet;
      if (index === arrayPos - addCounter1 + 1) return secondSet;
      return value;
    });
    console.log("here", arrayPos, currentArray, newArray);
  }
  console.log("end of addd", newArray);
};

const howellTest = (array, arrayLength) => {
  let arrayInTest = array.map(x => x);
  for (let testCounter1 = 1; testCounter1 <= arrayLength; testCounter1++) {
    if (arrayInTest[testCounter1] - (arrayLength - 1) > 0)
      arrayInTest = howellAdd(arrayInTest, arrayLength);
  }
  for (let testCounter2 = 1; testCounter2 < arrayLength; testCounter2++) {
    for (
      let testCounter3 = testCounter2 + 1;
      testCounter3 <= arrayLength;
      testCounter3++
    ) {
      if (arrayInTest[testCounter2] - arrayInTest[testCounter3] === 0)
        arrayInTest = howellAdd(arrayInTest, arrayLength);
    }
  }
  return arrayInTest;
};

function howell(length) {
  const arrayLength = length;
  const n = Array.from({ length: length + 1 }, (v, i) => i);
  console.log(n);

  // console.log(n);
  for (let i = 1; i <= arrayLength; i++) {
    if (n[i] - arrayLength + i !== 0) howellAdd(n, arrayLength);
  }
  for (let i = 1; i <= arrayLength; i++) {
    n[i] = i - 1;
  }
  console.log("real end", n);
}

howell(4);
