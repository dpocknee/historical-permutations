const { compareArrays, rotate } = require("../utils/utils");
const { tompkinsPaige, peckSchrack } = require("../index");

const comparison1 = compareArrays(
  tompkinsPaige([1, 2, 3, 4], 1),
  peckSchrack(4)
);

const comparison2 = compareArrays(
  tompkinsPaige([1, 2, 3, 4], -1),
  peckSchrack(4)
);

function tompkinsRotate(array, rotationSection, rotationAmount) {
  const rotatedSection = array.slice(0, rotationSection);
  const rotationApplied = rotatedSection
    .slice(rotationAmount)
    .concat(rotatedSection.slice(0, rotationAmount));
  return rotationApplied.concat(array.slice(rotationSection));
}

console.log(tompkinsRotate([1, 2, 3, 4], 3, 1));

// console.log(tompkinsPaige([1, 2, 3, 4], 1));

console.log(comparison1);

console.log(comparison2);
