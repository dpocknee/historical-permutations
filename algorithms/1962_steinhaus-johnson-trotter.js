const { swap } = require("../utils/utils");

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

const loopless = (n, cb) => {
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
    s[n + 1] = n;
    x[i] = 0;
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

function evenSpeedup(n, cb) {
  /* eslint no-loop-func: 0 */
  let permutationArray = Array.from({ length: n }, (value, index) => {
    return [index + 1, -1, index];
  });

  cb(permutationArray.map(x => x[0]));

  while (true) {
    let mobileInteger = [-2, -2, -2];

    permutationArray.forEach(([integer, direction, position], index) => {
      if (index + direction >= 0 && index + direction < n) {
        if (
          integer > mobileInteger[0] &&
          permutationArray[index + direction][0] < integer
        ) {
          mobileInteger = [integer, direction, position];
        }
      }
    });

    if (mobileInteger[0] === -2 && mobileInteger[1] === -2) break;

    const swappedArray = swap(
      permutationArray,
      mobileInteger[2],
      mobileInteger[2] + mobileInteger[1]
    );

    const updateArray = swappedArray.map(
      ([integer, direction, position], index) => {
        if (integer > mobileInteger[0]) return [integer, direction * -1, index];
        return [integer, direction, index];
      }
    );
    cb(updateArray.map(x => x[0]));
    permutationArray = updateArray;
  }
}

function steinhausJohnsonTrotter(n, evenOption = 0) {
  const outputArrays = [];
  const cb = permutation => {
    if (evenOption === "even") outputArrays.push(permutation);
    else outputArrays.push(permutation.slice(1));
  };
  if (evenOption === "loopless") loopless(n, cb);
  else if (evenOption === "even") evenSpeedup(n, cb);
  else trotter(n, cb);
  return outputArrays;
}

module.exports = steinhausJohnsonTrotter;
