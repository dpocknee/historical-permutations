const steinhaus = (array, cb) => {
  const p = array.map(x => x);
  const c = [0];
  const d = [0];
  let k;
  const n = p.length - 1;

  let i = 1;
  while (i < n) {
    i += 1;
    c[i] = 1;
    d[i] = true;
  }
  c[1] = 0;
  cb(p);
  i = n;
  let x = 0;
  while (i > 1) {
    i = n;
    x = 0;
    while (c[i] === i) {
      if (d[i] === false) x += 1;
      d[i] = false;
      c[i] = 1;
      i -= 1;
    }
    if (i <= 1) break;
    if (d[i] === true) k = c[i] + x;
    else k = i - c[i] + x;
    const swap1 = p[k];
    const swap2 = p[k + 1];
    p[k + 1] = swap1;
    p[k] = swap2;
    cb(p);
    c[i] = c[i] + 1;
  }
};

function trotter(array) {
  const outputArrays = [];
  const cb = (permutation) => {
    outputArrays.push(permutation.slice(1));
  };
  steinhaus([0, ...array], cb);
  // console.log(outputArrays);
  return outputArrays;
}

// trotter([1, 2, 3, 4]);

module.exports = trotter;
