/* PERMUTATION by Coveyou and Sullivan (1961)
Algorithm ACM71 */

function coveyouSullivanAlgorithm(array, cb) {
  const x = array;
  const n = array.length - 1;
  const p = [];
  for (let i = n; i >= 0; i--) {
    if (x[i] !== i) {
      // A:
      x[i] += 1;
      p[0] = 0;
      for (let j = 1; j <= n; j++) {
        p[j] = p[j - x[j]];
        p[j - x[j]] = j;
      }
      cb(p);
      return x;
      // end of A
    }
    x[i] = 0;
  }
  cb(p);
  p[0] = -1;
  return x;
}

function coveyouSullivan(n) {
  const startingArray = Array.from({ length: n }, (v, i) => i + 1);
  const outputArrays = [startingArray];
  const callback = (permutation) => {
    const conversion = permutation.map(mark => mark + 1);
    return outputArrays.push(conversion);
  };

  const initializer = Array.from({ length: n }, (v, i) => (i === n ? -1 : 0));
  const factorial = initializer.reduce((factorial, element, index) => factorial * (index + 1), 1);
  let currentArray = coveyouSullivanAlgorithm(initializer, callback);
  for (let i = 1; i < factorial - 1; i++) {
    currentArray = coveyouSullivanAlgorithm(currentArray, callback);
  }
  return outputArrays;
}

module.exports = coveyouSullivan;
