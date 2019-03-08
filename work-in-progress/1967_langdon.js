// NOT WORKING - Don't know why ...

function langdonRotate(array, rotationSection, rotationAmount) {
  const rotatedSection = array.slice(0, rotationSection);
  const rotationApplied = rotatedSection
    .slice(rotationAmount)
    .concat(rotatedSection.slice(0, rotationAmount));
  return rotationApplied.concat(array.slice(rotationSection));
}

function langdon(n, cb) {
  const p = Array.from({ length: n + 1 }, (v, i) => i);
  const q = p.map(x => x);
  cb(p);
  let newArray = p.map(x => x);
  let i = n;
  while (i >= 1) {
    newArray = [0, ...langdonRotate(newArray.slice(1), i, 1)];
    if (newArray[i] === q[i]) i = n;
    else i -= 1;
    cb(newArray);
    if (i < 1) break;
  }
}

const cb = (permutation) => {
  console.log(permutation);
  // outputArrays.push(permutation.slice(1));
};

langdon(4, cb);

// console.log(rotate([1, 2, 3, 4], 2));
