function conjunction(set1, set2) {
  return set1.reduce((amountOfOverlap, value) => {
    return set2.includes(value) ? amountOfOverlap + 1 : amountOfOverlap;
  }, 0);
}

function eaves(a, n, x) {
  // first
  let first = true;
  let t;
  const a = [];
  
  a.push(firstArray);
  if (first) {
    const t = a[x];
    first = false;
  }
  const b = Array.from({ length: n + 1 }, (v, i) => 0);
  for (let i = n; i >= -1; i--) {
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
    console.log(a);
  }
}

const firstArray = Array.from({ length: n }, (value, index) => index + 1);
eaves(firstArray, 4, );

// console.log(conjunction([0, 1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));
