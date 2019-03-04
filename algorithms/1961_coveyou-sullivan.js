/* PERMUTATION by Coveyou and Sullivan (1961)
Algorithm ACM71 */

function coveyouSullivanAlgorithm(n, cb) {
  const initializer = false;
  const x = [];
  const p = [];
  if (initializer === false) {
    for (let i = 0; i <= n - 1; i++) {
      x[i] = 0;
      x[n] = -1;
    }
    return cb(x);
  }
  for (let i = n; i >= 0; i--) {
    if (x[i] !== i) {
      x[i] = x[i] + 1;
      p[0] = 0;
      x[i] = 0;
    }
  }
  p[0] = -1;
  cb(p);
  // A:
  x[i] += 1;
  p[0] = 0;
  for (let j = 1; j <= n; j++) {
    p[j] = p[j - x[j]];
    p[j - x[j]] = j;
  }
  //
}

function coveyouSullivan(array) {
  const outputArrays = [];
  const callback = permutation => outputArrays.push(permutation);
  coveyouSullivanAlgorithm(array.length - 1, callback);
  // console.log(outputArrays);
  return outputArrays;
}

module.exports = { coveyouSullivan };
