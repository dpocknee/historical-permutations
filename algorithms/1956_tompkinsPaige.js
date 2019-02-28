// 1956: Tompkins-Paige Algorithm

// function rotate(arrayIn, rotation) {
//   return arrayIn.slice(rotation).concat(arrayIn.slice(0, rotation));
// }

// function rotate(array, i) {
//   const t = array[0];
//   let k = 1;
//   const outputArray = array.map(element => element);
//   while (k < i) {
//     outputArray[k - 1] = array[k];
//     k += 1;
//   }
//   outputArray[i] = t;
//   return outputArray;
// }

function tompkinsRotate(array, rotationSection, rotationAmount) {
  const rotatedSection = array.slice(0, rotationSection);
  const rotationApplied = rotatedSection
    .slice(rotationAmount)
    .concat(rotatedSection.slice(0, rotationAmount));
  return rotationApplied.concat(array.slice(rotationSection));
}

function tompkinsPermutations(n, array, rotationDirection, cb) {
  const c = [0];
  let outputArray = array;
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

// function permute(x, n) {
//   let first = false;
//   const p = [];
//   if (first) {
//     for (let i = 2; i < n; i++) {
//       p[i] = i;
//       first = false;
//     }
//   }
//   for (let k = 2; k < n; k++) {
//     t = x[1];
//     const km = k - 1;
//     for (let i = 1; i < km; i++) {
//       x[i] = x[i + 1];
//     }
//     x[k] = t;
//     if (p[k] !== 0) break;
//     p[k] = k;
//   }
//   first = true;
// }

function tompkinsPaige(inputArray, rotationDirection) {
  const tompkinsArray = [];
  const callback = permutation => tompkinsArray.push(permutation);
  tompkinsPermutations(inputArray.length, inputArray, rotationDirection, callback);
  return tompkinsArray;
}

module.exports = { tompkinsPaige, tompkinsRotate };
