// NOT WORKING - Don't know why ...

function langdonRotate(array, rotationSection, rotationAmount) {
  const rotatedSection = array.slice(0, rotationSection);
  const rotationApplied = rotatedSection
    .slice(rotationAmount)
    .concat(rotatedSection.slice(0, rotationAmount));
  return rotationApplied.concat(array.slice(rotationSection));
}

function langdon(n, cb) {
  let p = [];
  const q = [];

  for (let i = 0; i <= n; i++) {
    p[i] = i;
    q[i] = i;
  }

  cb(p);
  let i = n;
  while (i >= 1) {
    p = [0, ...langdonRotate(p.slice(1).map(x => x), i, 1)];
    if (p[i] === q[i]) {
      i = n;
    } else {
      i -= 1;
    }
    cb(p);
    if (i < 1) break;
  }
}

const cb = permutation => {
  console.log(permutation);
  // outputArrays.push(permutation.slice(1));
};

langdon(4, cb);

// console.log(rotate([1, 2, 3, 4], 2));
