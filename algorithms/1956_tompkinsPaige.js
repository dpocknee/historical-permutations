// 1956: Tompkins-Paige Algorithm

function tompkinsRotate(array, rotationSection, rotationAmount) {
  const rotatedSection = array.slice(0, rotationSection);
  const rotationApplied = rotatedSection
    .slice(rotationAmount)
    .concat(rotatedSection.slice(0, rotationAmount));
  return rotationApplied.concat(array.slice(rotationSection));
}

function tompkinsPermutations(n, array, rotationDirection, cb) {
  const c = [1, 1, 1];
  let outputArray = array.map(x => x);
  let i = n;
  while (i > 2) {
    c[i] = 1;
    if (i <= 2) break;
    i -= 1;
  }
  cb(outputArray);
  while (i <= n) {
    outputArray = tompkinsRotate(outputArray, i, rotationDirection);
    if (c[i] < i) {
      c[i] += 1;
      i = 2;
      cb(outputArray);
    } else {
      c[i] = 1;
      i += 1;
    }
  }
}

function tompkinsPaige(inputArray, rotationDirection) {
  const tompkinsArray = [];
  const callback = permutation => tompkinsArray.push(permutation);
  tompkinsPermutations(inputArray.length, inputArray, rotationDirection, callback);
  return tompkinsArray;
}

module.exports = { tompkinsPaige, tompkinsRotate };
