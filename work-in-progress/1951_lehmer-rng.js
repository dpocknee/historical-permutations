const letTheMiceIn = [
  "KICK THAT HABIT MAN",
  "THAT HABIT KICK MAN",
  "MAN KICK THAT HABIT",
  "KICK THAT MAN HABIT",
  "MAN HABIT KICK THAT",
  "THAT KICK MAN HABIT",
  "KICK HABIT MAN THAT",
  "HABIT MAN KICK THAT",
  "THAT KICK HABIT MAN",
  "KICK HABIT THAT MAN",
  "THAT HABIT MAN KICK",
  "HABIT THAT MAN KICK",
  "MAN THAT KICK HABIT",
  "KICK MAN THAT HABIT",
  "HABIT KICK THAT MAN",
  "THAT MAN KICK HABIT",
  "HABIT KICK MAN THAT",
  "KICK MAN HABIT THAT",
  "MAN KICK HABIT THAT",
  "HABIT THAT KICK MAN",
  "THAT MAN HABIT KICK",
  "MAN THAT HABIT KICK",
  "HABIT MAN THAT KICK",
  "MAN HABIT THAT KICK"
];

const theThirdMind = [
  "KICK THAT HABIT MAN",
  "THAT KICK HABIT MAN",
  "KICK HABIT THAT MAN",
  "HABIT KICK THAT MAN",
  "THAT HABIT KICK MAN",
  "HABIT THAT KICK MAN",
  "KICK THAT MAN HABIT",
  "THAT KICK MAN HABIT",
  "KICK MAN THAT HABIT",
  "MAN KICK THAT HABIT",
  "THAT MAN KICK HABIT",
  "MAN THAT KICK HABIT",
  "KICK HABIT MAN THAT",
  "HABIT KICK MAN THAT",
  "KICK MAN HABIT THAT",
  "MAN KICK HABIT THAT",
  "HABIT MAN KICK THAT",
  "MAN HABIT KICK THAT",
  "THAT HABIT MAN KICK",
  "HABIT THAT MAN KICK",
  "THAT MAN HABIT KICK",
  "MAN THAT HABIT KICK",
  "HABIT MAN THAT KICK",
  "MAN HABIT THAT KICK"
];

function rng(a, m, x) {
  return (a * x) % m;
}

function lehmerRNG(a, m, c) {
  const lehmerArray = [];
  let x = c;
  for (let i = 1; i < m; i++) {
    x = rng(a, m, x);
    lehmerArray.push(x);
  }
  return lehmerArray;
}

function arrayReference(poemArray, remapArray, minIndex, maxIndex) {
  const outputPoemArray = [];
  const numberArray = [];
  for (let i = 0; i < poemArray.length; i++) {
    if (i < minIndex || i >= maxIndex) {
      numberArray.push(i);
      outputPoemArray.push(poemArray[i]);
    } else {
      const newIndex = remapArray[i - minIndex];
      numberArray.push(remapArray[i - minIndex]);
      outputPoemArray.push(poemArray[newIndex]);
    }
  }
  return outputPoemArray;
}

function checker(array) {
  let amountOfSimilarity = 0;
  array.forEach((perm, index) => {
    console.log(perm[0], array[index][2], perm[0] === array[index][2]);
    const arraysSame = perm[0] === array[index][2];
    if (arraysSame) {
      amountOfSimilarity += 1;
    }
  });
  return amountOfSimilarity;
}

for (let i = 0; i < 2; i++) {
  const min = 1;
  const lehmerArray = lehmerRNG(2 ** 31 - 1, 19, i);
  const max = min + lehmerArray.length;
  const substitute = lehmerArray.map(number => number + (min - 1));

  const thirdMindArray = arrayReference(theThirdMind, substitute, min, max);

  const allArrays = thirdMindArray.map((value, index) => [
    theThirdMind[index],
    value,
    letTheMiceIn[index]
  ]);

  console.log(i, checker(allArrays));
}

// const bothArrays = thirdMindArray.map(
//   (value, index) => `${theThirdMind[index]} / ${value} / ${letTheMiceIn[index]}`
// );

// console.log(allArrays);
