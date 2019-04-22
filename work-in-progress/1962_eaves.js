function conjunction(set1, set2) {
  return set1.reduce((amountOfOverlap, value) => {
    return set2.includes(value) ? amountOfOverlap + 1 : amountOfOverlap;
  }, 0);
}

function eaves(n) {
  // first
  const a = Array.from({ length: n }, (value, index) => index + 1);
  const b = Array.from({ length: n + 1 }, (v, i) => 0);
  let m;
  let p;
  let r;
  let f;
  let k;
  for (let x = 1; x <= 24; x++) {
    const t = a[x];
    for (let i = n; i >= 2; i--) {
      const iConj = conjunction(t, a[i]);
      if (a[i] > iConj && iConj > a[i - 1]) {
        // find
        for (k = n; k >= i; k--) {
          const findConj = conjunction(t, a[k]);
          if (a[k] > findConj && findConj > a[i - 1]) {
            b[k] = a[k];
            m = k;
          }
        }
        for (k = n; k >= i; k--) {
          const conj = conjunction(a, b[k]);
          if (b[k] > 0 && conj < b[m]) {
            b[m] = b[k];
            f = k;
          }
        }
        r = a[i - 1];
        a[i - 1] = b[m];
        a[f] = r;

        // schell
        p = i - 1;
        m = n - p;
        m = m / 2 - a;
        while (m > 0) {
          k = n - m;
          for (f = p + 1; f < k; f++) {
            i = f;
          }
        }
        // comp
        while (a[i] > a[i + m]) {
          r = a[i + m];
          a[i + m] = a[i];
          a[i] = r;
          i -= m;
          if (i < p + 1) break;
        }
      }
    }
    console.log(a);
  }
}

// eaves(4);

console.log(conjunction([0, 1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));
