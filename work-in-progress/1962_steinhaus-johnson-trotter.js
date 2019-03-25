const trotter = (n, cb) => {
  const p = Array.from({ length: n + 1 }, (value, index) => index);
  const c = [0];
  const d = [true];
  let k;
  for (let i = 1; i <= n; i++) {
    c[i] = 1;
    d[i] = true;
  }
  c[1] = 0;
  cb(p);
  let i = n;
  let x = 0;
  while (i > 1) {
    i = n;
    x = 0;
    while (c[i] === i) {
      if (!d[i]) x += 1;
      d[i] = !d[i];
      c[i] = 1;
      i -= 1;
    }
    if (i <= 1) break;
    if (d[i]) k = c[i] + x;
    else k = i - c[i] + x;
    const swap1 = p[k];
    const swap2 = p[k + 1];
    p[k + 1] = swap1;
    p[k] = swap2;
    cb(p);
    c[i] += 1;
  }
};

const even = (n, cb) => {
  const p = Array.from({ length: n + 1 }, (value, index) => index);
  const c = [0];
  const s = [0];
  const d = [true];
  const x = [0];
  let k;
  for (let i = 1; i <= n; i++) {
    c[i] = 1;
    d[i] = true;
    s[i] = i - 1;
    x[i] = 0;
  }
  cb(p);
  let i = n;
  while (i > 1) {
    if (c[i] === i) {
      if (!d[i]) x[s[i]] = x[s[i]] + 1;
      d[i] = !d[i];
      c[i] = 1;
      s[i + 1] = s[i];
      s[i] = i - 1;
    }
    i = s[n + 1];
    if (i <= 1) break;
    if (d[i]) k = c[i] + x[i];
    else k = i - c[i] + x[i];
    const swap1 = p[k];
    const swap2 = p[k + 1];
    p[k + 1] = swap1;
    p[k] = swap2;
    cb(p);
    c[i] += 1;
  }
};

function steinhausJohnsonTrotter(n, evenOption = 0) {
  const outputArrays = [];
  const cb = permutation => {
    outputArrays.push(permutation.slice(1));
  };
  if (evenOption) even(n, cb);
  else trotter(n, cb);
  console.log(outputArrays);
  return outputArrays;
}

// trotter([1, 2, 3, 4]);

module.exports = steinhausJohnsonTrotter;
