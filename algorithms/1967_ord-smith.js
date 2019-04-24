function arrayReverse(array, position) {
  const reversed = [0].concat(array.slice(1, position + 1).reverse());
  const end = array.slice(position + 1);
  return reversed.concat(end);
}

function lexperms(n, cb, algoType) {
  let p = Array.from({ length: n + 1 }, (v, i) => i);
  let i = n;
  const c = [];
  while (i > 2) {
    c[i] = 1;
    if (i <= 2) break;
    i -= 1;
  }
  cb(p.map(x => x));
  while (i <= n) {
    if (c[i] < i) {
      if (algoType === "normal") {
        const swap1 = p[i];
        const swap2 = p[c[i]];
        p[i] = swap2;
        p[c[i]] = swap1;
        p = arrayReverse(p.map(x => x), i - 1);
      } else {
        p = arrayReverse(p.map(x => x), i);
      }
      c[i] += 1;
      i = 2;
      cb(p.map(x => x));
    } else {
      c[i] = 1;
      i += 1;
    }
  }
  p = arrayReverse(p.map(x => x), i - 1);
  cb(p.map(x => x));
}

function ordSmith(n, algoType = "normal") {
  const ordSmithArray = [];
  lexperms(n, perm => ordSmithArray.push(perm.slice(1)), algoType);
  return ordSmithArray;
}

module.exports = ordSmith;
