const permutations = require("../index");

// const tompkinsTest = permutations.tompkinsPaige(['NO', 'POETS', 'DONT', 'OWN', 'WORDS'], 1); // any type of array
// const tompkinsTest = permutations.tompkinsPaige([1, 2, 3, 4], -1);
// console.log("Tompkins-Paige");
// console.log(tompkinsTest);

// const tompkinsTest = permutations.tompkinsPaige([1, 2, 3, 4], 1);
// console.log("Tompkins-Paige");
// console.log(tompkinsTest);

// const lehmerTest = permutations.lehmer([1, 2, 3, 4]); // only numbers
// console.log("Lehmer");
// console.log(lehmerTest);

// // const wellsTest = permutations.wells(['me', 'you', 'them', 'us']); // any type of array
// const wellsTest = permutations.wells([1, 2, 3, 4]);
// console.log("Wells");
// console.log(wellsTest);

// const schrackShimratTest = permutations.schrackShimrat([1, 2, 3, 4]); // only numbers
// console.log("Schrack-Shimrat");
// console.log(schrackShimratTest);

// const heapTest = permutations.heap([1, 2, 3, 4]); // only numbers
// console.log("Heap");
// console.log(heapTest);

// const hallTest = permutations.hall(4); // only numbers
// console.log("Hall");
// console.log(hallTest);

// const coveyouTest = permutations.coveyouSullivan(4); // only numbers
// console.log("Coveyou-Sullivan");
// console.log(coveyouTest);

// const poetsDont = permutations.substituteContent(
//   hallTest,
//   [1, 2, 3, 4],
//   ["KICK", "THAT", "HABIT", "MAN"]
// );
// console.log(poetsDont);

const testArray = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
];

const replaceTest = permutations.replace(
  testArray,
  [1, 2, 3],
  ["A", "B", "C"],
  0
);
console.log(replaceTest);
