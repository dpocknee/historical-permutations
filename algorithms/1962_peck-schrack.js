function permute(array, n, signature, cb) {
  const p = signature;
  const x = array.map(j => j);
  for (let k = 2; k <= n; k++) {
    const t = x[1];
    const km = k - 1;
    for (let i = 1; i <= km; i++) {
      x[i] = x[i + 1];
    }
    x[k] = t;
    p[k] = p[k] - 1;
    if (p[k] !== 0) {
      cb(x);
      return p;
    }
    p[k] = k;
  }
  return p;
}

function peckSchrack(n) {
  const startingArray = Array.from({ length: n + 1 }, (v, i) => i);
  const initializeSignature = Array.from({ length: n + 1 }, (v, i) => (i >= 2 ? i : 0));
  const outputArrays = [startingArray.slice(1)];
  const factorial = startingArray.slice(1).reduce((fact, element, index) => fact * (index + 1), 1);
  let currentArray = startingArray;
  let currentSignature = initializeSignature;
  const callback = (permutation) => {
    currentArray = permutation;
    outputArrays.push(permutation.slice(1));
  };
  for (let i = 1; i < factorial; i++) {
    currentSignature = permute(currentArray, startingArray.length - 1, currentSignature, callback);
  }
  return outputArrays;
}

module.exports = peckSchrack;
