const { factorial } = require("../utils/utils");

function permulex(n, cb) {
  const q = Array.from({ length: n + 1 }, (value, index) => index);
  const p = Array.from({ length: n + 1 }, (value, index) => index);
  const total = factorial(n);
  cb(p.map(x => x));
  let flag2 = true;
  for (let loop = 1; loop < total; loop++) {
    if (flag2) {
      const t = p[n];
      p[n] = p[n - 1];
      p[n - 1] = t;
      flag2 = false;
    } else {
      flag2 = true;
      for (let i = n - 2; i >= 1; i--) {
        if (p[i] < p[i + 1]) {
          for (let k = 1; k <= n; k++) {
            q[k] = 0;
          }
          for (let k = i; k <= n; k++) {
            q[p[k]] = p[k];
          }
          for (let k = p[i] + 1; k <= n; k++) {
            if (q[k] !== 0) {
              p[i] = k;
              q[k] = 0;
              for (let l = 1; l <= n; l++) {
                if (q[l] !== 0) {
                  i += 1;
                  p[i] = q[l];
                }
                if (i >= n) break;
              }
            }
            if (i >= n) break;
          }
        }
        if (i >= n) break;
      }
    }
    cb(p.map(x => x));
  }
}

function schrackShimrat(totalLength) {
  const schrackArray = [];
  permulex(totalLength, perm => schrackArray.push(perm.slice(1)));
  return schrackArray;
}

module.exports = schrackShimrat;
