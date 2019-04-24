const { factorial, rotate } = require("../utils/utils");

function langdonRotate(array, i) {
  const p = array.map(x => x);
  const startRotate = rotate(p.slice(0, i), 1);
  const endRotate = p.slice(i);
  return [...startRotate, ...endRotate];
}

function ivesAlternate(n, cb) {
  const p = Array.from({ length: n + 1 }, (v, index) => index);
  const c = [0];
  let i;
  for (i = n; i > 1; i--) {
    c[i] = 1;
    if (i <= 1) break;
  }
  cb(p.map(x => x));
  while (i <= n) {
    if (c[i] < n + 1 - i) {
      if (i % 2) {
        const swap1 = p[c[i]];
        const swap2 = p[c[i] + 1];
        p[c[i]] = swap2;
        p[c[i] + 1] = swap1;
      } else {
        const swap1 = p[i];
        const swap2 = p[n + 1 - i];
        p[i] = swap2;
        p[n + 1 - i] = swap1;
      }
      c[i] += 1;
      i = 1;
      cb(p.map(x => x));
    } else {
      c[i] = 1;
      i += 1;
    }
  }
}

function ivesOriginal(n, cb) {
  let p = Array.from({ length: n + 1 }, (v, i) => i);
  const c = Array.from({ length: n + 1 }, (v, i) => i);
  let q = [];
  let i = 1;
  cb(p.map(x => x));
  let counter = 1;
  const maxNumber = factorial(n);
  while (i < n + 1 - i && counter < maxNumber) {
    q = p.map(element => element);
    if (c[i] < n + 1 - i) {
      const swap1 = p[c[i]];
      const swap2 = p[c[i] + 1];
      p[c[i]] = swap2;
      p[c[i] + 1] = swap1;
      c[i] += 1;
      i = 1;
      cb(p.map(x => x));
    } else {
      const swap1 = p[i];
      const swap2 = p[n + 1 - i];
      p[i] = swap2;
      p[n + 1 - i] = swap1;
      c[i] = i;
      if (p[n + 1 - i] === q[n + 1 - i]) {
        i += 1;
      } else {
        i = 1;
        const check = p.every((element, index) => element === index);
        if (check === true) {
          p = [
            ...p.slice(0, 2),
            ...rotate(p.slice(2, p.length - 1), 1),
            ...p.slice(-1)
          ];
        }
        cb(p.map(x => x));
      }
    }
    counter += 1;
  }
}

function ives(n, algoType = "original") {
  const ivesOutput = [];
  if (algoType === "original") {
    ivesOriginal(n, perm => ivesOutput.push(perm.slice(1)));
  } else {
    ivesAlternate(n, perm => ivesOutput.push(perm.slice(1)));
  }
  console.log(ivesOutput);
  return ivesOutput;
}

//
// ivesAlternate(5);

module.exports = ives;
